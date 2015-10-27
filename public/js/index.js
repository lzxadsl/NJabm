/*
 * 首页angular应用
 */
'use strict';
var indexApp = angular.module('indexApp',[]);

indexApp.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

indexApp.controller('UserListCtrl',function($http,$scope){
  console.log($scope.username);
  $scope.title = '欢迎光临';

  $scope.tasks = [];
  $scope.taskname = "";

  $scope.add = function(){
    $scope.tasks.push($scope.taskname);
  };

});