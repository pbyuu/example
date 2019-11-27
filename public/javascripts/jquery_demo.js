//$符号：jQuery把所有功能全部封装在一个全局变量jQuery中，而$也是一个合法的变量名，它是变量jQuery的别名
console.log(jQuery === $);//true

//选择器 start-------------------------------------------------------------------------------------------------------
var selector = $('#red');//按ID查找DOM节点
var p = $('p');//按tag查找
var tr1 = $('.tr1');//按class查找
$('[type=text]');//按属性查找 当属性的值包含空格等特殊字符时，需要用双引号括起来 $('[items="A B"]')
$('[type^=te]');//按属性查找——前缀查找 找出所有type属性值以te开头的DOM
$('[class$=tr1]');//按属性查找——后缀查找 找出所有class属性值以tr1结尾的DOM
//组合查找    把上面的查找组合起来
$('tr.tr1');// 找出<tr class="tr1 ...">...</tr>
//多项选择器    选出来的元素是按照它们在HTML中出现的顺序排列的，而且不会有重复元素（匹配多个条件的在结果中只出现一次）
$('.tr1,.tr2,p');//把class为tr1的、class为tr2的、标签为p的都查找出来

//层级选择器  如果两个DOM元素具有层级关系（不一定是父子关系），就可以用$('ancestor descendant')来选择，层级之间用空格隔开
$('table .tr2');
//子选择器    类似于层级选择器，但是必须有父子关系，<child>节点必须是<parent>节点的直属子节点
$('.tr1>th');
//过滤器    first-child\last-child\nth-child(argument) 一般附加在选择器上
$('table .tr2:first-child');
//表单相关    针对表单元素的特殊选择器 https://www.liaoxuefeng.com/wiki/1022910821149312/1028314028519040

//查找    find()节点内查找子节点  parent()查找上层节点  next()和pre()同一层内向后向前查找
var th1 = tr1.find('th');
tr1.parent();//可以传过滤条件，如果上层节点不符合过滤条件，返回空jquery对象
tr1.next();//同上，可以传过滤条件

//过滤    filter()方法可以过滤掉不符合选择器条件的节点（返回的是符合的）
th1.filter('#th1');
th1.filter(function () {
    return this.innerHTML.indexOf('m') >= 0;
});
//选择器 end---------------------------------------------------------------------------------------------------------

//操作DOM start------------------------------------------------------------------------------------------------------
//text()和html()    这两个方法，无参数时获取内容，有参数是设置内容。方法作用在选择的每一个元素上
var p1 = $('.p1');
console.log(p1.text());
p1.text("aaaaaaaa");

//修改css    css('name', 'value')方法
p1.css("fontSize", "10px");

//修改class属性
selector.hasClass('tr1');//true
selector.addClass('myTr');
selector.removeClass('tr1');

//显示和隐藏DOM    hide()、show()
selector.hide();//本质上是设置display:none，代码还是在html文件中的
selector.show('slow');//可以传参数，控制在多少时间内显示/隐藏  参数可以是毫秒或者'slow''false'
//selector.toggle();//根据当前显示状况，toggle进行隐藏/显示

//获取DOM信息
//高宽 width()\height()
$(window).height();
$(document).width();
//操作属性 attr()\removeAttr()\prop()
selector.attr('name');//undefined
selector.attr('name', 'redTr');//设置
selector.removeAttr('name');
selector.prop('checked');//和attr类似，但是处理checked、selected这类没有值的属性时，和attr返回值不同：attr返回'checked'时，prop返回true

//对于表单，提供val()方法获取和设置value属性
$('#email').val("Email");

/*添加DOM append()\prepend()\before()\after()
append()  把DOM添加到最后。除了接受字符串，append()还可以传入原始的DOM对象，jQuery对象和函数对象
prepend()  把DOM添加到最前。
同级节点可以用after()或者before()方法*/
p1.append('<span>hello</span>');

//删除DOM  remove()
//p1.remove();//节点p1被删掉了
//操作DOM end--------------------------------------------------------------------------------------------------------

//事件 start---------------------------------------------------------------------------------------------------------
//因为JavaScript在浏览器中以单线程模式运行，页面加载后，一旦页面上所有的JavaScript代码被执行完后，就只能依赖触发事件来执行JavaScript代码
//on方法绑定时间，传入事件名和处理函数
var c = $('#c');

function checkClick() {
    console.log("clicked");
}

c.on('click', checkClick);
//简化写法，调用click()方法
c.click(function () {
    console.log("hello");
});
/*
能绑定的事件：
鼠标事件
click: 鼠标单击时触发；
dblclick：鼠标双击时触发；
mouseenter：鼠标进入时触发；
mouseleave：鼠标移出时触发；
mousemove：鼠标在DOM内部移动时触发；
hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

键盘事件
键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。
keydown：键盘按下时触发；
keyup：键盘松开时触发；
keypress：按一次键后触发。

其他事件
focus：当DOM获得焦点时触发；
blur：当DOM失去焦点时触发；
change：当<input>、<select>或<textarea>的内容改变时触发；
submit：当<form>提交时触发；
ready：当页面被载入并且DOM树完成初始化后触发。仅作用于document对象，通常用于代码初始化
*/
$(document).ready(function () {
    //....
});
//简写为
$(function () {
});//$(function () {...})可以反复绑定，会依次执行

//取消绑定
c.off('click', checkClick);//function必须是在on方法外定义的，on方法内的匿名方法不能这样取消；off('click')解绑所有click方法

//触发事件    js代码改变不会触发事件，除非用trigger()
c.trigger('click');
//可以简写为
c.click();
//事件 end-----------------------------------------------------------------------------------------------------------

/*Ajax    ajax(url, settings)函数需要接收一个URL和一个可选的settings对象，常用的选项如下：
async：是否异步执行AJAX请求，默认为true，千万不要指定为false；
method：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等；
contentType：发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为text/plain、application/json；
data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；
headers：发送的额外的HTTP头，必须是一个object；
dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的Content-Type猜测。

可以链式处理ajax的各种回调 done/fail/always

get()
post()
getJSON()
jsonp:'callback'//解决跨域
 */
$.ajax('/demoData', {
    dataType: 'json'
}).always(function (data) {
    //无论成功或失败都会调用
    $('#result').text("..." + JSON.stringify(data));
});
//get请求的ajax操作可以简写,第二个参数会被变成query string放到url后面
$.get("/demoData", {
    'name': 'tom'
}).done(function (data) {
    $('#result').text("..." + JSON.stringify(data));
});
//post也可以简写,类似get()
//getJSON()写法也类get(),用来快速通过GET获取一个JSON对象

//jQuery可以链式操作一组DOM
//p1.css('color','white').css('background-color',"black");

//给jquery对象绑定新方法    通过扩展$.fn对象实现
$.fn.changeColor = function (options) {
    /*var color = options && options.color || '#fffceb';
    var background = options && options.background || '#d85030';*/
    var opt = $.extend({}, $.fn.changeColor.defaults, options); //把默认值和传入的参数放到一个新的对象中，options里的值会覆盖掉与其重复的默认值
    this.css('color', opt.color).css('background-color', opt.background);
    return this;//这行可以不写，不写时，此方法不能像其他jquery一样链式调用，需要和其他jquery方法拆两行调用
};
p1.changeColor();
//处理默认值    $.extend(target, obj1, obj2, ...)，它把多个object对象的属性合并到第一个target对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高
$.fn.changeColor.defaults = {
    color: '#fffceb',
    background: '#d85030'
};

