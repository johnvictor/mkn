/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../libs/angular/angular',
		angularRoute: '../libs/angular-route/angular-route',
		bootstrap: '../libs/bootstrap/dist/js/bootstrap.min',
		angularuibootstrab: '../libs/angular-bootstrap/ui-bootstrap-tpls.min',
		jquery: '../libs/jquery/dist/jquery.min'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: {
			deps : ['angular']
		},
		bootstrap: {
			deps: ['jquery']
		},
		angularuibootstrab: {
			deps: ['angular', 'bootstrap']
		}
	}
});

define(['mkn'], 
	function() {
	require(['angular', 'app-config'], function (angular) {
		angular.bootstrap(document, ['mkn']);
	});
});