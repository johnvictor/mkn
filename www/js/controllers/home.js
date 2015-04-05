/*global define*/
'use strict';

define([
	'mkn'
	], function (app) {
	return app.controller('HomeController', function ($scope, $location,$modal, $log) {
		//$scope.homeMessage = "Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message Home Message ";

  $scope.myInterval = 5000;

  $scope.slides = [
    '../../images/veggies2.jpg',
    '../../images/fruits1.jpg'
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