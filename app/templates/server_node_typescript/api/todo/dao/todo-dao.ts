/// <reference path="../../../typings/tsd.d.ts" />

import * as mongoose from 'mongoose';
import {Promise} from 'bluebird';
import todoSchema from '../model/todo-model';
import * as _ from 'lodash';

todoSchema.statics.getAll = ():void => {
    return new Promise(resolve:Function, reject:Function) => {
        let _query = {};

        Todo
          .find(_query)
          .exec((err, todos) => {
              err ? reject(err)
                  : resolve(todos);
          });
    };
}

todoSchema.statics.createTodo = (todo:Object):void => {
    return new Promise;(resolve:Function, reject:Function):void => {
      if (!_.isObject(todo)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _todo = new Todo(todo);

      _todo.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    };
}

todoSchema.statics.deleteTodo = (id:string):void => {
    return new Promise(resolve:Function, reject:Function):void => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Todo
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    };
}

let Todo = mongoose.model('Todo', todoSchema);

export default Todo;
