import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import * as _ from "lodash";
import todoSchema from "../model/todo-model";

todoSchema.static("getAll", ():Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = {};

        Todo.find(_query)
            .exec((err, todos) => {
              err ? reject(err)
                  : resolve(todos);
            });
    });
});

todoSchema.static("getById", (id: string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!id) {
          return reject(new TypeError("Todo is not a valid object."));
        }

        Todo.findById(id)
            .exec((err, todo) => {
              err ? reject(err)
                  : resolve(todo);
            });
    });
});

todoSchema.static("createTodo", (todo:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(todo)) {
        return reject(new TypeError("Todo is not a valid object."));
      }

      var _todo = new Todo(todo);

      _todo.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

todoSchema.static("deleteTodo", (id:string):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        if (!_.isString(id)) {
            return reject(new TypeError("Id is not a valid string."));
        }

        Todo.findByIdAndRemove(id)
            .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
            });
    });
});

let Todo = mongoose.model("Todo", todoSchema);

export default Todo;
