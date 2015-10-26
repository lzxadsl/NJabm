/**
 * Created by lizx on 2015/10/26 0026.
 * 用户实体
 */
var mongoose = require('mongoose');//引入组件
var Schema = mongoose.Schema;//创建模式
var UserModel = new Schema({
    _id:Number,
    username:String,
    password:String,
    createTime:{ type:Date, default:Date.now }
});//定义一个用户模型
exports.User = mongoose.model('Users',UserModel);//和users表进行关联