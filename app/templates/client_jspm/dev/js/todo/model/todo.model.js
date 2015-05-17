;(function(angular)
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('Todo', [() =>
    {
      class Todo {
        MIN_ACCEPTED_LENGTH =5;

        constructor(todo) {
          this.todoMessage = null;

          angular.extend(this, todo);
        }

        isValid() {
          var _isDefined = angular.isDefined(this.todoMessage);
          var _isString = angular.isString(this.todoMessage);
          var _isBigEnough = (_isDefined && _isString) ? this.todoMessage.length >= this.MIN_ACCEPTED_LENGTH : false;

          return _isDefined && _isString && _isBigEnough;
        }
      }

      return Todo;
    }]);

}(window.angular));

