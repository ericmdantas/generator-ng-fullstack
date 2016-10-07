;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .controller('TodoController', [
      '$log',
      'Todo',
      'TodoDAO',
      function($log, Todo, TodoDAO) {
        this.todo = new Todo();
        this.todos = [];
        this.title = "ng1 2do";

        function _getAll() {
          return TodoDAO
            .getAll()
            .then((todos) => {
              return this.todos = todos;
            })
            .catch($log.error);
        };
        
        this.createTodo = function(todo) {
          TodoDAO
            .createTodo(todo)
            .then((newTodo) => {
              this.todos.push(newTodo);
              this.todo = new Todo();
            })
            .catch($log.error);
        };
        
        this.deleteTodo = function(id) {
          TodoDAO
            .deleteTodo(id)
            .then(() => {
              return _getAll();
            })
            .catch($log.error);
        };

        _getAll();
      }
    ]);
}(window.angular));
