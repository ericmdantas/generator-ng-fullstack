"use strict";

import SomethingController from '../controller/something.controller';

export default class SomethingRoutes
{
  static init(router)
  {
    router
      .route('/api/todos')
      .get(TodoController.getAll)
      .post(TodoController.createTodo);

    router
      .route('/api/todos/:id')
      .delete(TodoController.deleteTodo);
  }
}
