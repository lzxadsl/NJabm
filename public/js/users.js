/**
 * Created by Administrator on 2015/10/27 0027.
 * 用户模块
 */
var userApp = angular.module('userApp',[]);
userApp.controller('DoLoginCtrl',function($scope,$http){
    $scope.user = {
        username:'',
        password:''
    };

    $scope.doLogin = function(){
        $scope.errMsg = '';
        console.log($scope.user);
        if(!$scope.user.username){
            $scope.errMsg = '用户名不能为空！';
        }
        if(!$scope.user.password){
            $scope.errMsg += '密码不能为空！';
        }
    };
});