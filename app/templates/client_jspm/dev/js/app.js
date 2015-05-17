;(angular =>
{
  import 'angular';

  "use strict";

  angular
    .module('myAwesomeApp', ['ngResource',
      'ngRoute',
      'ngMessages',
      'emd.ng-xtorage',
      'angulartics'])
    .config(['$routeProvider', $routeProvider =>
    {
      $routeProvider
        .when('/', {
          templateUrl: 'views/todo.html',
          controller: 'TodoController',
          controllerAs: 'todoCtrl'
        })
        .otherwise({redirectTo: '/'})
    }])
    .config(['$locationProvider', $locationProvider =>
    {
      $locationProvider.html5Mode(true);
    }]);

})(window.angular);

