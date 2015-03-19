"use strict";

angular
  .module('myAwesomeApp', ['ngResource',
                           'ngRoute',
                           'btford.socket-io',
                           'emd.ng-xtorage'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
  {
      $routeProvider
        .when('/', {templateUrl: 'partials/views/todo.html', controller: 'TodosController', controllerAs: 'todosCtrl'})
        .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
  }])
