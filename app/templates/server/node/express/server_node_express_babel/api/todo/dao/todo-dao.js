import mongoose from "mongoose";
import Promise from "bluebird";
import todoSchema from "../model/todo-model";
import _ from "lodash";

todoSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    var _query = {};

    Todo.find(_query)
        .exec((err, todos) => {
          err ? reject(err)
              : resolve(todos);
        });
  });
}

todoSchema.statics.getById = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
          return reject(new TypeError("Id is not defined."));
        }

        Todo.findById(id)
            .exec((err, todo) => {
              err ? reject(err)
                  : resolve(todo);
            });
    });
}

todoSchema.statics.createTodo = (todo) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(todo)) {
      return reject(new TypeError("Todo is not a valid object."));
    }

    var _todo = new Todo(todo);

    _todo.save((err, saved) => {
      err ? reject(err)
      : resolve(saved);
    });
  });
}

todoSchema.statics.deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError("Id is not a valid string."));
    }

    Todo.findByIdAndRemove(id)
        .exec((err, deleted) => {
          err ? reject(err)
              : resolve();
        });
  });
}

var Todo = mongoose.model("Todo", todoSchema);

export default Todo;
