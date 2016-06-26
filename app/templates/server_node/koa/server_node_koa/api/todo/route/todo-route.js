"use strict";

const TodoController = require('../controller/todo-controller');

module.exports = class TodoRoutes {
    static init(router) {
      let _todoController = new TodoController();

      router.get('/api/todos', _todoController.getAll);
      router.post('/api/todos', _todoController.createTodo);
      router.del('/api/todos/:id', _todoController.deleteTodo);
    }
}
