;(function(ng) {
  'use strict';

  ng
    .module('<%= appName %>')
    .factory('Todo', [function() {
      var Todo = function(todo) {
        var self = this;

        self.todoMessage = null;

        ng.extend(self, todo);

        return self;
      };

      var MIN_ACCEPTED_LENGTH = 5;

      Todo.prototype.isValid = function() {
        var _isDefined = ng.isDefined(this.todoMessage);
        var _isString = ng.isString(this.todoMessage);
        var _isBigEnough = (_isDefined && _isString) ? this.todoMessage.length >= MIN_ACCEPTED_LENGTH : false;

        return _isDefined && _isString && _isBigEnough;
      };

      return Todo;
    }]);

}(window.angular));
