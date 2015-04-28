/*global define*/
'use strict';

define([
	'mkn'
	], function (app) {
	return app.controller('HomeController', function ($scope, $location,$modal, $log,$http) {
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
  
  $http.get('../../dbfiles/images.txt')
  	.success(function(response)
  		{
  			$scope.values=response.images;
  		});
	

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