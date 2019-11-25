var log4js = require('log4js');
var log4js_conf = require('./logConf');
log4js.configure(log4js_conf);
module.exports=log4js.getLogger();