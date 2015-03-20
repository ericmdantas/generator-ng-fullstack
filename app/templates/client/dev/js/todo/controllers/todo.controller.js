"use strict";

angular
  .module('myAwesomeApp')
  .controller('TodosController', ['$log', 'Todo', 'TodoDAO', function($log, Todo, TodoDAO)
  {
      var self = this;

      self.todo = new Todo();
      self.todos = [];

      self.createTodo = function(todo)
      {
          var _onSuccess = function(newTodo)
          {
              self.todos.push(newTodo);
          };

          TodoDAO
            .createTodo(todo)
            .then(_onSuccess)
            .catch($log.error);
      };

      ;(function()
      {
          var _onSuccess = function(todos)
          {
              self.todos = todos;
          };

          TodoDAO
            .getAll()
            .then(_onSuccess)
            .catch($log.error);
      }())
  }]);
