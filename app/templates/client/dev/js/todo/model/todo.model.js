"use strict";

angular
  .module('myAwesomeApp')
  .factory('Todo', [function()
  {
      var Todo = function()
      {
          this.something2do = 'Walk the dog';
      }

      var MIN_ACCEPTED_LENGTH = 5;

      Todo.prototype.isValid = function()
      {
          var _isDefined = angular.isDefined(this.something2do);
          var _isString = angular.isString(this.something2do);
          var _isBigEnough = this.something2do.length >= MIN_ACCEPTED_LENGTH;

          return _isDefined && _isString && _isBigEnough;
      }

      return Todo;
  }]);
