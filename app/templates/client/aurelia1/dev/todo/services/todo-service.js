import {HttpClient} from "aurelia-http-client";
import {Todo} from "../models/todo";
import {inject} from "aurelia-framework";

@inject(HttpClient)
export class TodoService {
    constructor(http) {
        this.http = http;
    }

    getAll() {
        return this.http.get("/api/todos")
            .then((todos) => {
                return todos.map((t) => new Todo(t)); 
            });
    }

    add(todo) {
        return this.http.post("/api/todos", todo)
            .then((t) => {
                return new Todo(t);
            });
    }

    remove(id) {
        return this.http.delete("/api/todos/" + id);
    }
}