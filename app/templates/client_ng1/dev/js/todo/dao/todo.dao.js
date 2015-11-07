;(function(angular) {
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('TodoDAO', ['$q', 'Todo', 'TodoResource', function($q, Todo, TodoResource) {
      var TodoDAO = function(){};

      TodoDAO.prototype.getAll = function() {
        var _onSuccess = function(todos) {
          // do something with the response from the server, like extending a model or something

          return todos; // this will be returned as a resolved promise
        }

        var _onError = function(error) {
          // do something with the error, like making it more readable or something

          return $q.reject(error); // this will be returned as a rejected promise
        }

        return TodoResource
          .query()
          .$promise
          .then(_onSuccess)
          .catch(_onError);
      };

      TodoDAO.prototype.createTodo = function(todo) {
        if (!angular.isObject(todo) || !(todo instanceof Todo) || !todo.isValid()) {
          return $q.reject(new TypeError('Invalid todo to be created.'));
        }

        var _onSuccess = function(todo) {
          return new Todo(todo);
        }

        var _onError = function(error) {
          return $q.reject(error);
        }

        return TodoResource
          .save(todo)
          .$promise
          .then(_onSuccess)
          .catch(_onError);
      };

      TodoDAO.prototype.deleteTodo = function(id) {
        if (!angular.isString(id)) {
          return $q.reject(new TypeError('Invalid id for deletion.'));
        }

        var _onSuccess = function() {
          return;
        }

        var _onError = function(error) {
          return $q.reject(error);
        }

        return TodoResource
          .delete({id: id})
          .$promise
          .then(_onSuccess)
          .catch(_onError)
      }

      return new TodoDAO();
    }]);

}(window.angular));
