"use strict";

import mongoose from 'mongoose';
import Promise from 'bluebird';
import todoSchema from '../model/something.model';
import _ from 'lodash';

somethingSchema.statics.getAll = function()
{
  var _promise = function(resolve, reject)
  {
    var _query = {};

    Something
      .find(_query)
      .exec(function(err, todos)
      {
        err ? reject(err)
          : resolve(todos);
      });
  }

  return new Promise(_promise);
}

somethingSchema.statics.createTodo = function(something)
{
  var _promise = function(resolve, reject)
  {
    if (!_.isObject(todo))
    {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    var _something = new Something(something);

    _something.save(function(err, saved)
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

    Something
      .findByIdAndRemove(id)
      .exec(function(err, deleted)
      {
        err ? reject(err)
          : resolve();
      });
  }

  return new Promise(_promise);
}

var Something = mongoose.model('Something', somethingSchema);

export default Something;
