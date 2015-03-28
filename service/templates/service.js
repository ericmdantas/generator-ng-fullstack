"use strict";

angular
  .module('myAwesomeApp')
  .service('SomeService', ['$q', function($q)
  {
      var _doSomething = function()
      {

      }

      this.doSomething = _doSomething;
  }]);
