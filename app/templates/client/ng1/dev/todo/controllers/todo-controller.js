;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .controller('TodoController', [
      '$log',
      'Todo',
      'TodoDAO',
      function($log, Todo, TodoDAO) {
        var self = this;
        
        self.todo = new Todo();
        self.todos = [];
        self.title = "ng1 2do";

        function _getAll() {
          return TodoDAO
            .getAll()
            .then(function(todos) {
              return self.todos = todos;
            })
            .catch($log.error);
        };
        
        self.createTodo = function(todo) {
          TodoDAO
            .createTodo(todo)
            .then(function(newTodo) {
              self.todos.push(newTodo);
              self.todo = new Todo();
            })
            .catch($log.error);
        };
        
        self.deleteTodo = function(id) {
          TodoDAO
            .deleteTodo(id)
            .then(function() {
              return _getAll();
            })
            .catch($log.error);
        };

        _getAll();
      }
    ]);
}(window.angular));
