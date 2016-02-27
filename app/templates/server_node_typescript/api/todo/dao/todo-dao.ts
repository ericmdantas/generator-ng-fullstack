/// <reference path="../../../typings/main.d.ts" />

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import todoSchema from '../model/todo-model';

todoSchema.statics.getAll = ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Todo
          .find(_query)
          .exec((err, todos) => {
              err ? reject(err)
                  : resolve(todos);
          });
    });
}

todoSchema.statics.createTodo = (todo:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(todo)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      var _todo = new Todo(todo);

      _todo.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

todoSchema.statics.deleteTodo = (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        Todo
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

let Todo = mongoose.model('Todo', todoSchema);

export default Todo;
