"use strict";

import TodoController from '../controller/todo-controller';

export default class TodoRoutes {
    static init(router) {
      let _todoController = new TodoController();

      router.get('/api/todos', _todoController.getAll);
      router.post('/api/todos', _todoController.createTodo);
      router.del('/api/todos/:id', _todoController.deleteTodo);
    }
}
