;(function(ng) {
  "use strict";

  ng.module("<%= appName %>")
    .factory("TodoDAO", [
      "$q",
      "Todo",
      "TodoResource",
      function($q, Todo, TodoResource) {
        class TodoDAO {
          constructor() {

          }

          getById(id) {
            if (ng.isUndefined(id)) {
              return $q.reject(new TypeError("Invalid id for search."));
            }

            return TodoResource.get({id: id})
              .$promise
              .then((todo) => {
                return new Todo(todo);
              });
          }

          getAll() {
            return TodoResource.query()
              .$promise
              .then((todos) => {
                return todos.map((todo) => {
                  return new Todo(todo);
                });
              });
          }

          createTodo(todo) {
            if (!ng.isObject(todo) || !(todo instanceof Todo) || !todo.isValid()) {
              return $q.reject(new TypeError("Invalid todo to be created."));
            }

            return TodoResource.save(todo)
              .$promise
              .then((t) => {
                return new Todo(t);
              });
          }

          deleteTodo(id) {
            if (!ng.isString(id)) {
              return $q.reject(new TypeError("Invalid id for deletion."));
            }

            return TodoResource.delete({id: id}).$promise;
          }         
        }

        return new TodoDAO();
      }
    ]);
}(window.angular));
