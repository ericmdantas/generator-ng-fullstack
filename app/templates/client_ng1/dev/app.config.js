;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'todo/templates/todo.html',
          controller: 'TodoController',
          controllerAs: 'todo'
        })
        .otherwise({redirectTo: '/'});
    }])
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }]);
}(window.angular));
