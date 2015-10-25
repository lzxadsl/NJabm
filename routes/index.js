/*
 * 首页路由
 */
var path = require('path');

exports.index = function(req,res){
  var html = path.normalize(__dirname + '/../views/index.html');
  res.sendfile(html);
};
