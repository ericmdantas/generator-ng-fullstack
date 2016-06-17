"use strict";

const TodoDAO = require('../dao/todo-dao');

module.exports = class TodoController {
  *getAll() {
      try {
        let _todos = yield TodoDAO.getAll();
        this.status = 200;
        this.body = _todos;
      } catch(e) {
        this.status = 400;
      }
  }

  *createTodo() {
      let _todo = req.body;

      try {
        let _newTodo = yield TodoDAO.createTodo(_todo);
        this.body = _newTodo;
        this.status = 201;
      } catch(e) {
        this.status = 400;
      }
  }

  *deleteTodo() {
    let _id = req.params.id;

    try {
      yield TodoDAO.deleteTodo(_id);
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }
}
