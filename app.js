const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');  /*Morgan是一个node.js关于http请求的日志中间件*/
const log4js = require('log4js');
const log = require('./config/logger');
const lessMiddleware = require('less-middleware');
const bodyParser = require('body-parser');
/*
require

在Node.js里导入是通过 require函数调用进行的
Node.js会根据 require的是相对路径还是非相对路径做出不同的行为


一、相对路径
  相对路径很简单。 例如，假设有一个文件路径为 /root/src/moduleA.js，包含了一个导入

  const x = require("./moduleB");
  Node.js以下面的顺序解析这个导入：

  1.检查/root/src/moduleB.js文件是否存在。
  2.检查/root/src/moduleB目录是否包含一个package.json文件，且package.json文件指定了一个"main"模块。
  在我们的例子里，如果Node.js发现文件 /root/src/moduleB/package.json包含了{ "main": "lib/mainModule.js" }，那么Node.js会引用/root/src/moduleB/lib/mainModule.js。
  3.检查/root/src/moduleB目录是否包含一个index.js文件。 这个文件会被隐式地当作那个文件夹下的"main"模块。

二、非相对路径
  非相对模块名的解析是个完全不同的过程。
  Node会在一个特殊的文件夹 node_modules里查找你的模块。
  node_modules可能与当前文件在同一级目录下，或者在上层目录里。
  Node会向上级目录遍历，查找每个 node_modules直到它找到要加载的模块。

其他模块暴露的是变量
这种模块加载机制被称为CommonJS规范。这种规范下，moduleA引用moduleB时，它们内部各自使用的变量名和函数名都互不冲突，各用各的
如果想用其他模块的变量，需要将变量暴露出来
*/


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express(); //创建一个Express应用程序。该express()函数是express模块导出的顶级函数。

/*
  __dirname 总是指向被执行 js 文件的绝对路径
  ./ 会返回你执行 node 命令的路径，例如你的工作路径
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');

/*
使用app.use(logger('dev'));可以将请求信息打印在控制台，便于开发调试，但实际生产环境中，需要将日志记录在log文件里，可以使用如下代码

const express = require('express');
const fs = require('fs');
const logger = require('morgan');

const app = express();

const accessLog = fs.createWriteStream('../access.log', {flags : 'a'});
const errorLog = fs.createWriteStream('../error.log', {flags : 'a'});

app.use(logger('dev'));		//打印到控制台
app.use(logger('combined', {stream : accessLog}));
*/
app.use(logger('dev'));
//app.use(log4js.connectLogger(log,{level:'auto'}));

//body-parser中间件底层中间件用法：这将拦截和解析所有的请求；也即这种用法是全局的。
app.use(express.json());//等于bodyParser.json()，处理json数据
app.use(express.urlencoded({ extended: false }));//处理UTF-8的编码的数据 // parse application/x-www-form-urlencoded

/*cookie-parser是Express的中间件，用来实现cookie的解析，是官方脚手架内置的中间件之一。*/
app.use(cookieParser());

/*app.use(function (req,res,next) {
    res.cookie('nick','aaaaa');
    //res.end('ok');//调用了end之后，不会再返回页面啊啥的,返回的就是end
    next();
});

app.use(function (req,res,next) {
    console.log(req.cookies.nick);  //如果这句不加next(); 下面的语句无法执行，访问"/"会一直转
});*/

/*
node.js里function(req, res, next), 这3个参数分别是什么意思:
    req :  request的缩写， 请求的数据

Request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。
我们常用req.body.xx来表示POST的xx属性

res:   response的缩写， 响应的数据
Response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。
我们常常用res.send() 传送HTTP响应 , res.render()渲染结果页面

next 则是前往下一个中间件，执行相同路径的下一个方法。
比如checkNotLogin函数里末尾有next();
function checkNotLogin(req, res, next) {
    next();
}
那么
app.get('/reg', checkNotLogin);
就会继续执行下一个同样是"/reg"路径的方法
app.get('/reg', function (req, res) {

});*/


/*
express响应中用到常用三种API：
    res.send()
    res.json()
    res.end()
用于快速结束没有任何数据的响应，使用res.end()。
响应中要发送JSON响应，使用res.json()。
响应中要发送数据,使用res.send() ,但要注意header ‘content-type’参数。
如果使用res.end()返回数据非常影响性能。*/

/*
app.use ： 用来给path注册中间函数的。这个path默认是“/”，也就是处理任何请求，同时注意的是他会处理path下的子路径，
如果设置path为‘/hello’,那么请求路径为‘/hello/’,'/hello/nihao','/hello/bye'这样的请求都会交给中间函数处理的。

于是我们现在知道了app.use(express.static(_dirname + '/public'))是将所有请求，先交给express.static(_dirname + '/public')来处理一下。*/
app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件目录

app.use('/', indexRouter);
app.use('/users', usersRouter);

//访问其他路径出错时，错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
