import 'angular';

;(angular =>
{
  "use strict";

  angular
    .module('myAwesomeApp')
    .factory('TodoDAO', ['$q', 'Todo', 'TodoResource', ($q, Todo, TodoResource) =>
    {
      class TodoDAO {
        getAll() {
          return TodoResource
            .query()
            .$promise
            .then(todos => todos)
            .catch(error => $q.reject(error));
        }

        createTodo(todo) {
          if (!angular.isObject(todo) || !(todo instanceof Todo) || !todo.isValid())
          {
            return $q.reject(new TypeError('Invalid todo to be created.'));
          }

          return TodoResource
            .save(todo)
            .$promise
            .then(t => new Todo(t))
            .catch(error => $q.reject(error));
        }

        deleteTodo(id) {
          if (!angular.isString(id))
          {
            return $q.reject(new TypeError('Invalid id for deletion.'));
          }

          return TodoResource
            .delete({id: id})
            .$promise
            .then(()=>{return;})
            .catch(error => $q.reject(error));
        }
      }

      return new TodoDAO();
    }]);

})(window.angular);
