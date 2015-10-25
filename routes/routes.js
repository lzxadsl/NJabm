/**
 * Created by lizx on 2015/10/24.
 * 路由访问配置
 */
var index = require('./index');//相当于java中引用其他类
module.exports = function(app){
    app.get('/',index.index);//默认访问index类中的index方法
};