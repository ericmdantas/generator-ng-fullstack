import TodoDAO from "../dao/todo-dao";

export default class TodoController {
  static getAll(req, res) {
    TodoDAO
      .getAll()
      .then(todos => res.status(200).json(todos))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
      TodoDAO
        .getById(req.params.id)
        .then(todo => res.status(200).json(todo))
        .catch(error => res.status(400).json(error));
  }

  static createTodo(req, res) {
    let _todo = req.body;

    TodoDAO
      .createTodo(_todo)
      .then(todo => res.status(201).json(todo))
      .catch(error => res.status(400).json(error));
  }

  static deleteTodo(req, res) {
    let _id = req.params.id;

    TodoDAO
      .deleteTodo(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
