;(function(ng) {
  'use strict';

  ng.module('myAwesomeApp')
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'todo/templates/todo.html',
          controller: 'TodoController',
          controllerAs: 'todoCtrl'
        })
        .otherwise({redirectTo: '/'});
    }])
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }]);
}(window.angular));
