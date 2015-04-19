;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp', ['ngResource',
      'ngNewRouter',
      'ngMessages',
      'btford.socket-io',
      'emd.ng-xtorage'])
    .config(['$locationProvider', function($locationProvider)
    {
      $locationProvider.html5Mode(true);
    }]);

}(window.angular));

