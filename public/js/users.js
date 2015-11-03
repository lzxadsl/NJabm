/**
 * Created by Administrator on 2015/10/27 0027.
 * 用户模块
 */
var userApp = angular.module('userApp',[]);
//post 请求时默认提交的参数格式是json格式（application/json;charset=utf-8），以下方法可以改成form格式
/*userApp.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
]);*/

userApp.controller('DoLoginCtrl',function($scope,$http){
    $scope.user = {
        username:'',
        password:''
    };

    $scope.doLogin = function(){
        $scope.errMsg = '';
        if(!$scope.user.username){
            $scope.errMsg = '用户名不能为空！';
        }
        if(!$scope.user.password){
            $scope.errMsg += '密码不能为空！';
        }
        $http.post('/doLogin',$scope.user).success(function(data){
            console.log(data);
        });
    };
});