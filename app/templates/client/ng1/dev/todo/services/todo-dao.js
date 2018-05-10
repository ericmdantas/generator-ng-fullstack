;(function(ng) {
  "use strict";

  ng.module("<%= appName %>")
    .factory("TodoDAO", [
      "$q",
      "$http",
      "Todo",
      "BASE_API",
      function($q, $http, Todo, API) {
        class TodoDAO {
          getById(id) {
            if (ng.isUndefined(id)) {
              return $q.reject(new TypeError("Invalid id for search."));
            }

            return $http.get(API + "todos/" + id)
              .then(({data}) => {
                return new Todo(data);
              });
          }

          getAll() {
            return $http.get(API + "todos")
              .then(({data}) => {
                return data.map((todo) => new Todo(todo));
              });
          }

          createTodo(todo) {
            if (!ng.isObject(todo) || !(todo instanceof Todo) || !todo.isValid()) {
              return $q.reject(new TypeError("Invalid todo to be created."));
            }

            return $http.post(API + "todos", todo)
              .then(({data}) => {
                return new Todo(data);
              });
          }

          deleteTodo(id) {
            if (!ng.isString(id)) {
              return $q.reject(new TypeError("Invalid id for deletion."));
            }

            return $http.delete(API + "todos/" + id);
          }
        }

        return new TodoDAO();
      }
    ]);
}(window.angular));
