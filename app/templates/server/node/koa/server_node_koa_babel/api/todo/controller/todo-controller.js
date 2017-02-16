"use strict";

import TodoDAO from "../dao/todo-dao";

export default class TodoController {
  async getAll() {
      try {
        let _todos = await TodoDAO.getAll();
        this.status = 200;
        this.body = _todos;
      } catch(e) {
        this.status = 400;
      }
  }

  async getById() {
      try {
        let _todo = await TodoDAO.getById(this.param.id);
        this.status = 200;
        this.body = _todo;
      } catch(e) {
        this.status = 400;
      }
  }

  async createTodo() {
      let _todo = this.request.body;

      try {
        let _newTodo = await TodoDAO.createTodo(_todo);
        this.body = _newTodo;
        this.status = 201;
      } catch(e) {
        this.status = 400;
      }
  }

  async deleteTodo() {
    let _id = this.params.id;

    try {
      await TodoDAO.deleteTodo(_id);
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }
}
