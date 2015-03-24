"use strict";

import TodoDAO from '../dao/todo.dao';

export default class TodoController
{
  static getAll(req, res)
  {
      var _onSuccess = function(todos)
      {
        res
          .status(200)
          .json(todos);
      }

      var _onError = function(error)
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
      var _onSuccess = function(todo)
      {
        res
          .status(201) // created
          .json(todo);
      }

      var _onError = function(error)
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
    var _onSuccess = function()
    {
      res
        .status(200) // all good
        .end();
    }

    var _onError = function(error)
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
