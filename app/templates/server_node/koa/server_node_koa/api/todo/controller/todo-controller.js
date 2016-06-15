"use strict";

const TodoDAO = require('../dao/todo-dao');

module.exports = class TodoController {
  *getAll(ctx) {
      try {
        let _todos = yield TodoDAO.getAll();
        ctx.status = 200;
        ctx.body = _todos;
      } catch(e) {
        ctx.status = 400;
      }
  }

  *createTodo(ctx) {
      let _todo = req.body;

      try {
        let _newTodo = yield TodoDAO.createTodo(_todo);
        ctx.body = _newTodo;
        ctx.status = 201;
      } catch(e) {
        ctx.status = 400;
      }
  }

  *deleteTodo(ctx) {
    let _id = req.params.id;

    try {
      yield TodoDAO.deleteTodo(_id);
      ctx.status = 200;
    } catch(e) {
      ctx.status = 400;
    }
  }
}
