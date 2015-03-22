/*global define*/
'use strict';

define([
	'mkn',
	'states/home',
	'states/vegetables',
	'states/new-arrivals',
	'states/offers',
	'states/aboutus',
	'states/contact',
  ], function(app, HomeState, VegetablesState, NewArrivalsState, OffersState, AboutusState, ContactState) {
  	//configure the routes
  	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	    .when('/home', HomeState)
	    .when('/vegatables', VegetablesState)
	    .when('/new-arrivals', NewArrivalsState)
	    .when('/offers', OffersState)
	    .when('/aboutus', AboutusState)
	    .when('/contact', ContactState)
	    .otherwise({
	        redirectTo: '/home'
	    });
	  }]);

});