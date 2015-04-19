"use strict";

import mongoose from 'mongoose';
import Promise from 'bluebird';
import todoSchema from '../model/todo.model';
import _ from 'lodash';

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

todoSchema.statics.deleteTodo = function(id)
{
    var _promise = function(resolve, reject)
    {
        if (!_.isString(id))
        {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Todo
          .findByIdAndRemove(id)
          .exec(function(err, deleted)
          {
              err ? reject(err)
                  : resolve();
          });
    }

    return new Promise(_promise);
}

var Todo = mongoose.model('Todo', todoSchema);

export default Todo;
