define([
    'angular',
    'angular-ui-router',
    'textAngular-sanitize',
    'textAngular',
    'angular-ui-bootstrab',
    'ngIdle',
    'angular-dialog'
  ], function() {
  var MKN = angular.module('MKN', ['ui.router', 'ui.bootstrap', 'ui.select', 'textAngular', 'ngSanitize', 'ngIdle', 'dialogs.main']);

  window.MKN = MKN;

  return MKN;
});