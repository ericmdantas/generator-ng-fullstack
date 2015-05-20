import 'angular';

;(angular =>
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .controller('TodoController', ['$log', 'Todo', 'TodoDAO', ($log, Todo, TodoDAO) =>
    {
      var self = this;

      self.todo = new Todo();
      self.todos = [];

      self.createTodo = function(todo)
      {
        TodoDAO
          .createTodo(todo)
          .then(newTodo => {self.todos.push(newTodo); self.todo = new Todo();})
          .catch($log.error);
      };

      self.deleteTodo = function(id)
      {
        TodoDAO
          .deleteTodo(id)
          .then(_getAll)
          .catch($log.error);
      }

      var _getAll = function()
      {
        return TodoDAO
          .getAll()
          .then(todos => {self.todos = todos;})
          .catch($log.error);
      }

      _getAll();
    }]);
})(window.angular);
