;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp', ['ngResource',
      'ngNewRouter',
      'ngMessages',
      'btford.socket-io',
      'emd.ng-xtorage',
      'angulartics'])
    .config(['$locationProvider', function($locationProvider)
    {
      $locationProvider.html5Mode(true);
    }]);

}(window.angular));

