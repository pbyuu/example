var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo',function (req,res,next) {
  var demo = "demo";
  res.render("index_demo",{title:demo});
})

module.exports = router;
