/// <reference path="../../../typings/main.d.ts" />

import TodoDAO from '../dao/todo-dao';

export class TodoController {
  static getAll(req:Object, res:Object):void {
      TodoDAO
        .getAll()
        .then(todos => res.status(200).json(todos))
        .catch(error => res.status(400).json(error));
  }

  static createTodo(req:Object, res:Object):void {
      let _todo = req.body;

      TodoDAO
        .createTodo(_todo)
        .then(todo => res.status(201).json(todo))
        .catch(error => res.status(400).json(error));
  }

  static deleteTodo(req:Object, res:Object):void {
    let _id = req.params.id;

    TodoDAO
      .deleteTodo(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
