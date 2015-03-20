"use strict";

var mongoose = require('mongoose');
var Promise = require('bluebird');
var todoSchema = require('../model/todo.model').todoSchema;
var _ = require('lodash');

todoSchema.statics.getAll = function()
{
    var _promise = function(resolve, reject)
    {
        var _query = {};

        Todo
          .find(_query)
          .exec(function(err, todos)
          {
              err ? reject(err)
                  : resolve(todos);
          });
    }

    return new Promise(_promise);
}

todoSchema.statics.createTodo = function(todo)
{
    var _promise = function(resolve, reject)
    {
      if (!_.isObject(todo))
      {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _todo = new Todo(todo);

      _todo.save(function(err, saved)
      {
        err ? reject(err)
            : resolve(saved);
      });
    }

    return new Promise(_promise);
}

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
