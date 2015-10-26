/*
 * 用户路由
 */
var mongoose = require('mongoose');
var userModel = require('../models/Users');//引入自定义的实体
var user = userModel.User;//调用实体中的User
mongoose.connect('mongodb://localhost/njabm');//连接数据库
exports.query = function(req,res){
  //查询用户列表
  user.find(function(err,data){
    console.log(data);
    res.json(data);
  });
};
