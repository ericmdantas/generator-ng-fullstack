;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .controller('RouterController', ['$router', function($router)
    {
      var _paths = [];

      _paths.push({path: '/', component: 'todo'});

      $router.config(_paths);
    }]);

}(window.angular));
