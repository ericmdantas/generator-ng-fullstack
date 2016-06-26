;(function(ng) {
  'use strict';

  ng.module('<%= appName %>')
    .factory('TodoDAO', [
      '$q',
      'Todo',
      'TodoResource',
      function($q, Todo, TodoResource) {
        var TodoDAO = function() {};

        TodoDAO.prototype.getById = function(id) {
          if (!ng.isString(id)) {
            return $q.reject(new TypeError('Invalid id for search.'));
          }

          return TodoResource
            .get({id: id})
            .$promise
            .then(function(todo) {
              return new Todo(todo);
            });
        };

        TodoDAO.prototype.getAll = function() {
          return TodoResource
            .query()
            .$promise
            .then(function(todos) {
              return todos.map(function(todo) {
                return new Todo(todo);
              });
            });
        };

        TodoDAO.prototype.createTodo = function(todo) {
          if (!ng.isObject(todo) || !(todo instanceof Todo) || !todo.isValid()) {
            return $q.reject(new TypeError('Invalid todo to be created.'));
          }

          return TodoResource
            .save(todo)
            .$promise
            .then(function() {
              return new Todo(todo);
            });
        };

        TodoDAO.prototype.deleteTodo = function(id) {
          if (!ng.isString(id)) {
            return $q.reject(new TypeError('Invalid id for deletion.'));
          }

          return TodoResource.delete({id: id}).$promise;
        };

        return new TodoDAO();
      }
    ]);
}(window.angular));
