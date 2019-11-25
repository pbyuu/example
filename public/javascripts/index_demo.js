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
        return new Date().getFullYear() - this.birth; //方法内部的 this 关键字：始终指向当前对象
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

//-----------------函数 end---------------------------------------------------------------------