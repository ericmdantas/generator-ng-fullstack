import {TodoService} from "../services/todo-service";
import {Todo} from "../models/todo";
import {inject} from "aurelia-framework";

@inject(Todo, TodoService)
export class TodoCmp {
    constructor(todo, todoService) {
        this.todo = todo;
        this.todoService = todoService;
        this.todoList = [];

        this._getAll();
    }

    _getAll() {
        this.todoService
            .getAll()
            .then((todos) => {
                this.todoList = todos;
            });
    }

    add(todo) {
        this.todoService
            .add(todo)
            .then((t) => {
                this.todoList.push(t);
                this.todo = new Todo();
            });
    }

    remove(id) {
        this.todoService
            .remove(id)
            .then(() => {
                this.todoList.forEach((t, index) => {
                    if (t._id === id) {
                        this.todoList.splice(index, 1);
                    }
                });
            })
    }
}
