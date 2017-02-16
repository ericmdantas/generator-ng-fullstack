"use strict";

const TodoController = require("../controller/todo-controller");

module.exports = class TodoRoutes {
    static init(router) {
      router
        .route("/api/todos")
        .get(TodoController.getAll)
        .post(TodoController.createTodo);

      router
        .route("/api/todos/:id")
        .delete(TodoController.deleteTodo);
    }
}
