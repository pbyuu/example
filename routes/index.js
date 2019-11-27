const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

router.get("/demo3",function (req,res,next) {
  const demo = "demo";
  res.render("error_demo",{title:demo});
});
module.exports = router;
