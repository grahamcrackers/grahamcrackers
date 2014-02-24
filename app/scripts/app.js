'use strict';
var app = angular.module('gcApp', ['ngRoute','snap']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
//      .otherwise({
//        redirectTo: '/'
//      });

    $locationProvider.html5Mode(true);
  });
