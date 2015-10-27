/*
 * 用户路由
 */
var path = require('path');
var mongoose = require('mongoose');
var userModel = require('../models/Users');//引入自定义的实体
var user = userModel.User;//调用实体中的User
mongoose.connect('mongodb://localhost/njabm');//连接数据库

//查询用户列表
exports.query = function(req,res){
  user.find(function(err,data){
    console.log(data);
    res.json(data);
  });
};

//用户登入跳转
exports.login = function(req,res){
  var html = path.normalize(__dirname + '/../views/login.html');
  res.sendfile(html);
};

//用户登入
exports.doLogin = function(req,res){

  user.count({username:req.body.username,password:req.body.password},function(err,data){

  });
};
