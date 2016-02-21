;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('Todo', [function() {
      var Todo = function(todo) {
        this.todoMessage = null;

        angular.extend(this, todo);
      }

      var MIN_ACCEPTED_LENGTH = 5;

      Todo.prototype.isValid = function() {
        var _isDefined = angular.isDefined(this.todoMessage);
        var _isString = angular.isString(this.todoMessage);
        var _isBigEnough = (_isDefined && _isString) ? this.todoMessage.length >= MIN_ACCEPTED_LENGTH : false;

        return _isDefined && _isString && _isBigEnough;
      }

      return Todo;
    }]);

}(window.angular));
