"use strict";

const TodoDAO = require("../dao/todo-dao");

module.exports = class TodoController {
  async getAll(ctx, next) {
      try {
        let _todos = await TodoDAO.getAll();
        ctx.status = 200;
        ctx.body = _todos;
      } catch(e) {
        ctx.status = 400;
      }
  }

  async getById(ctx, next) {
      try {
        let _todo = await TodoDAO.getById(ctx.param.id);
        ctx.status = 200;
        ctx.body = _todo;
      } catch(e) {
        ctx.status = 400;
      }
  }

  async createTodo(ctx, next) {
      let _todo = ctx.request.body;

      try {
        let _newTodo = await TodoDAO.createTodo(_todo);
        ctx.body = _newTodo;
        ctx.status = 201;
      } catch(e) {
        ctx.status = 400;
      }
  }

  async deleteTodo(ctx) {
    let _id = ctx.params.id;

    try {
      await TodoDAO.deleteTodo(_id);
      ctx.status = 200;
    } catch(e) {
      ctx.status = 400;
    }
  }
}
