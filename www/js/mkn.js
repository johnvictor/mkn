/*global define*/
'use strict';

define([
	'angular',
  'angularRoute',
  'angularuibootstrab'
  ], function (angular) {
  	   //return the module with dependencies
		   return angular.module('mkn', ['ngRoute', 'ui.bootstrap']);
});