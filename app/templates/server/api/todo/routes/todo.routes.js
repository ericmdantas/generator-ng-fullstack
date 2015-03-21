"use strict";

var TodoController = require('../controller/todo.controller');

var _init = function(router)
{
    router
      .route('/api/todos')
      .get(TodoController.getAll)
      .post(TodoController.createTodo);

    router
      .route('/api/todos/:id')
      .delete(TodoController.deleteTodo);
}

exports.init = _init;
