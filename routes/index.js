const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo',function (req,res,next) {
  const demo = "demo";
  res.render("index_demo",{title:demo});
});

module.exports = router;
