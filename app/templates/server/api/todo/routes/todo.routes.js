"use strict";

var TodoController = require('../controller/todo.controller');

var _init = function(router)
{
    // get all todos

    router
      .route('/api/todos')
      .get(TodoController.getAll)
      .post(TodoController.createTodo);
}

exports.init = _init;
