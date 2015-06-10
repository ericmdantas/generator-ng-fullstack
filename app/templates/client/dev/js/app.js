;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp', ['ngResource',
      'ngRoute',
      'ngMessages',
      'btford.socket-io',
      'emd.ng-xtorage'])
    .config(['$routeProvider', function($routeProvider)
    {
      $routeProvider
        .when('/', {
          templateUrl: '../views/todo.html',
          controller: 'TodoController',
          controllerAs: 'todo'
        })
        .otherwise({redirectTo: '/'});
    }])
    .config(['$locationProvider', function($locationProvider)
    {
      $locationProvider.html5Mode(true);
    }]);

}(window.angular));

