/*global define*/
'use strict';

define([
	'mkn'
	], function (app) {
	return app.controller('HomeController', function ($scope, $location) {
		//$scope.homeMessage = "Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message ";

  $scope.myInterval = 5000;

  $scope.slides = [
    '../../images/veggies2.jpg',
    '../../images/fruits1.jpg'
  ];
    
	});
});