//Array()
let arr = [1,'a','hello',1.2];

//对象
let person = {
    name:"Tom",
    age:20,
    city:"beijing"
};

//Map和Set是ES6标准新增的数据类型
/*//map()
let map = new Map([['a','x'],['b','y']]);
map.add('c','z');
map.delete('a');
map.has('b');
map.get('c');

//set()
let s = new Set([1,2,3]);
s.add(4);*/

//for ... of循环是ES6引入的新的语法
let a = [1,2,3];
for(let num in a){
    //console.log(num);//num是角标
}
a.name = 'test';
for(let num of a){
    //console.log(num);//num是值
}
//当给被循环的对象添加了属性时，for...in把属性也遍历出来
for(let num in a){
   // console.log(num);//0,1,2,test
}

//forEach()方法是ES5.1标准引入的
a.forEach(function (element,index,array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
   //console.log(element+" index="+index) ;
});

//-----------------函数 start---------------------------------------------------------------------
//没有return语句，函数返回undefined
//关键字arguments，可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值

function func1() {
    //console.log(arguments.length);
}

func1('a','b');

//变量提升,在测试的时候发现浏览器报错，建议不要用

//解构赋值
/*
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'*/

//方法：绑定到对象上的函数称为方法。调用对象方法：person.age() ; 调用对象属性: person.name
var student = {
    name : 'Tom',
    birth : 1999,
    age : function(){
        return new Date().getFullYear() - this.birth; //方法内部的 this 关键字：始终指向当前对象 (谁调用，this就指向谁)
    },
    run:function () {
        console.log("run...");
    }
};

//apply()和call()
//要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
xiaoming.age(); // 25
getAge.apply(xiaoming,[]);

//另一个与apply()类似的方法是call()，唯一区别是：apply()把参数打包成Array再传入；call()把参数按顺序传入。
//对普通函数调用，我们通常把this绑定为null。
Math.max.apply(null,[3,4,5]);
Math.max.call(null,3,4,5);

//装饰器   利用apply()，动态改变函数的行为。
//eg.统计parseInt被调用了多少次
var count = 1;
var oldParseInt = parseInt;
window.parseInt = function(){
    count ++;
    oldParseInt.apply(null,arguments);
};

//高阶函数：一个函数就可以接收另一个函数作为参数
function add(x,y,f){
    return f(x)+f(y);//f是一个函数
}
function functionAbs(){
   return  Math.abs(arguments[0]);
}
var testAdd = add(-1,7,functionAbs);//8

//Array中的高阶方法：map()\reduce()\filter

//map方法：返回的数组中每一个值是对原数组每一个值进行参数函数处理后的
var mapArr = [-2,3,-4,5];
var results = mapArr.map(functionAbs);// [2, 3, 4, 5]

//reduce方法：[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
mapArr.reduce(function(x,y){
    return x+y;
});//数组求和

//filter方法：把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素

//函数作为返回值
function sumFunc(arr){
    var sum = function(){
        return arr.reduce(function(x,y){
            return x + y;
        });
    };
    return sum;
}
var s = sumFunc([1,2,3,4]);//返回的是求和函数，而不是求和结果。相关参数和变量都保存在返回的函数中
s();//此时才真正计算求和

//闭包
/*https://www.liaoxuefeng.com/wiki/1022910821149312/1023021250770016 原话：
  我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，
  当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。*/
function countFunc(){
    var arr = [];
    for (var i = 1;i<=3;i++){
        arr.push(function (){
            return i * i;
        });
    }
    return arr;//arr里放的不是i*i结果，而是函数和此时的参数、变量。函数是i*i，而此时i的值是4
}
var countResult = countFunc();
var f1 = countResult[1];//将函数复制给变量，仍然未执行
f1();//执行，结果为16

//返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

//匿名函数立刻执行
(function(x){
    return x * x;
})(5);

//箭头函数,相当于匿名函数
/*x => x*x;
x=>{
    return x +1;
};
(x,y)=>x*y;*/
//-----------------函数 end---------------------------------------------------------------------

//标准对象
/*
不要使用new Number()、new Boolean()、new String()创建包装对象；
用parseInt()或parseFloat()来转换任意类型到number；
用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
typeof操作符可以判断出number、boolean、string、function和undefined；
判断Array要使用Array.isArray(arr)；
判断null请使用myVar === null；
判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
函数内部判断某个变量是否存在用typeof myVar === 'undefined'。*/
var testStr = 3;
typeof String(testStr);//string

var now = new Date();
now.getMonth();//范围是0~11，其他方法都是从1开始，只有这个是0
now.getDate();//获取日
now.getDay();//获取星期
now = new Date(2019,10,5,10,30,0);//2019-11-05 10:30:00

//JSON
JSON.stringify(student);//序列化，对象序列化成JSON串 {"name":"Tom","birth":1999}
JSON.parse('{"name":"hahaha"}');//反序列化
JSON.parse('[1,2,3,"abc"]');
//stringify和parse都可以接收函数处理数据
JSON.parse('{"name":"hahaha"}',function(key,value){
    if (key==="name"){
        return  value +"_";
    }
});

//原型
xiaoming.__proto__ = student;
xiaoming.run();//run()是student中定义的方法

//操作DOM
/*
* ①更新DOM：innerHTML、innerText、textContent
* ②插入DOM:向获取到的DOM节点插入新节点  appendChild、parentElement.insertBefore(newElement, referenceElement);
* ③删除DOM：要删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉
*          删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
* */
var ele = document.getElementById("red");
ele.style.fontSize="20px";
//ele.innerHTML='abc';
ele.innerText='hello_red';
ele.textContent = 'hi_red';
//向div1插入节点。但没有新建，是把节点red先从原位置删除，再插入到新的位置
document.getElementById("div1").append(document.getElementById("red"));
//append新增的节点
var orange = document.createElement("li");
orange.innerText = "orange";
orange.id = "orange";
//document.getElementById("ul1").appendChild(orange);
document.getElementById("ul1").insertBefore(orange,document.getElementById("blue"));

//处理表单、文件
/*
 var input = document.getElementById('email');
 input.value; // '用户输入的值'
 这种方式可以应用于text、password、hidden以及select。但是，对于单选框和复选框，value属性返回的永远是HTML预设的值，而我们需要获得的实际是用户是否“勾上了”选项，所以应该用checked判断:
 input.check;//true或者false

 获取file类型input上传的文件名也用.value
 */

/*回调函数
reader.readAsDataURL(file);
reader.onload = function(e) {
    // 当文件读取完成后，自动调用此函数:
};*/

/*
Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离
new Promise(function (resolve, reject) {
    log('start new Promise...');
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}).then(function (r) {
    log('Done: ' + r);
}).catch(function (reason) {
    log('Failed: ' + reason);
});

Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数。
要串行执行这样的异步任务，不用Promise需要写一层一层的嵌套代码。有了Promise，我们只需要简单地写：
job1.then(job2).then(job3).catch(handleError);
 */

