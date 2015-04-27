/*global define*/
'use strict';

define([
	'mkn'
	], function (app) {
	return app.controller('HomeController', function ($scope, $location,$modal, $log) {
		//$scope.homeMessage = "Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message ";

  $scope.myInterval = 5000;

  $scope.slides = [
	{
		path:'../../images/fruits3.jpg',
		caption:'Fruits'
	},
    {
		path:'../../images/Vegetables1.jpg',
		caption:"Vegetables"
	}
  ];
  
  $scope.values = [	
	{
		path:'../../images/fruits2.jpg',
		caption:'Fruits2'
	},
    {
		path:'../../images/fruits4.jpg',
		caption:"Fruits4"
	},
	{
		path:'../../images/veggies2.jpg',
		caption:"Vegetables"
	},
	{
		path:'../../images/fruits4.jpg',
		caption:"Fruits"
	}
	];
	

  //login modal
   $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'templates/partials/login-modal.html',
      controller: function ($scope, $modalInstance, items) {

		$scope.ok = function () {
		$modalInstance.close();
		};

		$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
		};

      },
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
}
   });
});