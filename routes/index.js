/*
 * 首页路由
 */
var mongoose = require('mongoose');
var path = require('path');
var userModel = require('../models/Users');//引入自定义的实体
var user = userModel.User;//调用实体中的User
mongoose.connect('mongodb://localhost/njabm');
exports.index = function(req,res){
  //查询用户列表
  var userObj = user.find(function(err,data){
    console.log(data);
  });

  var html = path.normalize(__dirname + '/../views/index.html');
  res.sendfile(html);
};
