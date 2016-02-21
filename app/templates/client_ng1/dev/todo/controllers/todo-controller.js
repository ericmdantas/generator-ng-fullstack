;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .controller('TodoController', ['$log', 'Todo', 'TodoDAO', function($log, Todo, TodoDAO) {
      var self = this;

      self.todo = new Todo();
      self.todos = [];

      self.createTodo = function(todo) {
        var _onSuccess = function(newTodo) {
          self.todos.push(newTodo);
          self.todo = new Todo();
        };

        TodoDAO
          .createTodo(todo)
          .then(_onSuccess)
          .catch($log.error);
      };

      self.deleteTodo = function(id) {
        TodoDAO
          .deleteTodo(id)
          .then(_getAll)
          .catch($log.error);
      }

      var _getAll = function() {
        var _onSuccess = function(todos) {
          return self.todos = todos;
        };

        return TodoDAO
          .getAll()
          .then(_onSuccess)
          .catch($log.error);
      }

      _getAll();
    }]);
}(window.angular));
