/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import * as mongoose from 'mongoose';
import {Promise} from 'bluebird';
import todoSchema from '../model/todo.model';
import * as _ from 'lodash';

todoSchema.statics.getAll = ():void =>
{
    var _promise = (resolve:Function, reject:Function) =>
    {
        var _query = {};

        Todo
          .find(_query)
          .exec((err, todos) =>
          {
              err ? reject(err)
                  : resolve(todos);
          });
    }

    return new Promise(_promise);
}

todoSchema.statics.createTodo = (todo:Object):void =>
{
    var _promise = (resolve:Function, reject:Function):void =>
    {
      if (!_.isObject(todo))
      {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _todo = new Todo(todo);

      _todo.save((err, saved) =>
      {
        err ? reject(err)
            : resolve(saved);
      });
    }

    return new Promise(_promise);
}

todoSchema.statics.deleteTodo = (id:string):void =>
{
    var _promise = (resolve, reject):void =>
    {
        if (!_.isString(id))
        {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Todo
          .findByIdAndRemove(id)
          .exec((err, deleted) =>
          {
              err ? reject(err)
                  : resolve();
          });
    }

    return new Promise(_promise);
}

var Todo = mongoose.model('Todo', todoSchema);

export default Todo;
