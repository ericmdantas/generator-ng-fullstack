"use strict";

angular
  .module('myAwesomeApp')
  .factory('SomeFactory', [function()
  {
      var SomeFactory = function()
      {
          this.something = 123;
      }

      SomeFactory.prototype.isValid = function()
      {
          return !!this.something;
      }

      return SomeFactory;
  }]);
