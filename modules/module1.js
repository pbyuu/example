let test = {};
test.str = 'a';
function func(s) {
    console.log(test.str+"..."+s);
}
test.func = func;

//多个module.exports = 后面的会覆盖前面的
module.exports = test;
/*等同于
module.exports = {
    str : 'a',
    func: func
};*/
//如果module.exprots = func;  那么调用的时候 var func = require('./module');得到的就是函数，可以直接用 func("abc");
