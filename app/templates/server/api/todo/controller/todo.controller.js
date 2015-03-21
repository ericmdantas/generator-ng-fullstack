"use strict";

var TodoDAO = require('../dao/todo.dao');

var TodoController = function(){};

TodoController.getAll = function(req, res)
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

TodoController.createTodo = function(req, res)
{
    var _onSuccess = function(todo)
    {
        res
          .status(201)
          .json(todo);
    }

    var _onError = function(error)
    {
        res
          .status(400)
          .json(error);
    }

    var _todo = req.body;

    TodoDAO
      .createTodo(_todo)
      .then(_onSuccess)
      .catch(_onError);
}

TodoController.deleteTodo = function(req, res)
{
    var _onSuccess = function()
    {
        res
          .status(200)
          .end();
    }

    var _onError = function(error)
    {
        res
          .status(400)
          .json(error);
    }

    var _id = req.params.id;

    TodoDAO
      .deleteTodo(_id)
      .then(_onSuccess)
      .catch(_onError);
}

module.exports = TodoController;
