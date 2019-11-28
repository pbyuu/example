const express = require('express');
const router = express.Router();
const test1 = require('../modules/module1');
const test2 = require('../modules/module2');

/*
基本模块：
global    全局变量
process    Node.js当前进程
 */
router.get('/',function (req,res,next) {
  return res.json("end");
});

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jadeDemo', function(req, res, next) {
  res.render('jade_demo', { title: 'jade_demo' });
});

router.get('/demo',function (req,res,next) {
  const demo = "demo";
  res.render("js_demo",{title:demo});
});

router.get('/demo2',function (req,res,next) {
  res.render("jquery_demo",{title:"demo2"});
});

router.get('/demoData',function (req,res,next) {
  let name = req.query.name;
  if (name===undefined||name===''){
    name = 'abc';
  }
  return res.json({
    'a':1,
    'b':2,
    'c':3,
    'd':4,
    'name':name
  });
});
module.exports = router;
