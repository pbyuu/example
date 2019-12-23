const express = require('express');
const router = express.Router();
const test1 = require('../modules/module1');
const test2 = require('../modules/module2');
const fs = require('fs');
const path = require('path');

/*
基本模块：
global    全局变量
process    Node.js当前进程
*/
//JSON.parse() 方法将数据转换为 JavaScript 对象;  JSON.stringify() 方法将 JavaScript 对象转换为字符串。
/* GET home page. */
router.get('/index', function (req, res, next) {
	res.render('index', {title: 'Express'});
});


router.get('/jadeDemo', function (req, res, next) {
	res.render('jade_demo', {title: 'jade_demo'});
});

router.get('/jsDemo', function (req, res, next) {
	const demo = "demo";
	res.render("js_demo", {title: demo});
});

router.get('/jqueryDemo', function (req, res, next) {
	res.render("jquery_demo", {title: "demo2"});
});

router.get('/demoData', function (req, res, next) {
	let name = req.query.name;
	if (name === undefined || name === '') {
		name = 'abc';
	}
	return res.json({
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'name': name
	});
});

router.get("/demoData2", function (req, res, next) {
	fs.readFile('./public/file/data1.txt', 'utf-8', function (err, data) {
		if (err) {
			console.log(err);
		} else {
			return res.json(data);
		}
	});
});



module.exports = router;
