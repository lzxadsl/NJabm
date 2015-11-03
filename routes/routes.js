/**
 * Created by lizx on 2015/10/24.
 * 路由访问配置
 */
var index = require('./index');//相当于java中引用其他类
var user = require('./users');//引入用户模块
module.exports = function(app){
    app.get('/',index.index);//默认访问index类中的index方法
    app.get('/login',user.login);//默认访问user类中的login方法
    app.post('/doLogin',user.doLogin);//默认访问user类中的doLogin方法
};