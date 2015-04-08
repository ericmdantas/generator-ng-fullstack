;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .service('<%= name %>Service', ['$q', function($q)
    {
      var _doSomething = function()
      {

      }

      this.doSomething = _doSomething;
    }]);

}(window.angular))

