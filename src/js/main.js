import angular from 'angular';

var app = angular.module('app', []);

app.controller("HelloCtrl", function($scope) {
    $scope.sayHello = {};
		$scope.sayHello.greeting = "Hello World!";
	});
