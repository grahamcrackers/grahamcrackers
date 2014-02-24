'use strict';


app.controller('MainCtrl', function ($scope, SNAP_VERSION) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.snapVersion = SNAP_VERSION.full;
    $scope.name = 'World';
  });
