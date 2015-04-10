"use strict";

import TodoDAO from '../dao/todo.dao';

export default class TodoController
{
  static getAll(req, res)
  {
      var _onSuccess = todos =>
      {
        res
          .status(200)
          .json(todos);
      }

      var _onError = error =>
      {
        res
          .status(400)
          .json(error);
      }

      TodoDAO
        .getAll()
        .then(_onSuccess)
        .catch(_onError);
  }

  static createTodo(req, res)
  {
      var _onSuccess = todo =>
      {
        res
          .status(201) // created
          .json(todo);
      }

      var _onError = error =>
      {
        res
          .status(400) // bad request
          .json(error);
      }

      var _todo = req.body;

      TodoDAO
        .createTodo(_todo)
        .then(_onSuccess)
        .catch(_onError);
  }

  static deleteTodo(req, res)
  {
    var _onSuccess = () =>
    {
      res
        .status(200) // all good
        .end();
    }

    var _onError = error =>
    {
      res
        .status(400)  // bad request
        .json(error);
    }

    var _id = req.params.id;

    TodoDAO
      .deleteTodo(_id)
      .then(_onSuccess)
      .catch(_onError);
  }
}
