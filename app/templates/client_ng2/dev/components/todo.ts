/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Validators, FormBuilder, ControlGroup, formDirectives} from 'angular2/forms';
import {TodoService} from './todo.service';

interface ITodo {
  message:string;
  id:number;
}

@Component({
  selector: 'todo',
  appInjector: [FormBuilder, TodoService]
})
@View({
  templateUrl: 'components/todo.html',
  directives: [formDirectives]
})
export class Todo {
  todos: Array<ITodo>;
  todoForm: ControlGroup;
  todoService: TodoService;

  constructor(@Inject(FormBuilder) fb:FormBuilder, ts: TodoService) {
    this.todos = [];
    this.todoService = ts;
    this.todoForm = fb.group({
      message: ["", Validators.required]
    });
  }

  add(message: string):void {
    this.todoService
        .add(message)
        .then(m => this.todos.push({message: m, id: Date.now()}));
  }

  remove(id:string|number):void {
    this.todoService
        .remove(id)
        .then(id => {
          this.todos.forEach((t, i) => {
            if (t.id === id)
               return this.todos.splice(1, i);
          });
        });
  }
}
