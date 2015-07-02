/// <reference path="../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {Validators, FormBuilder, ControlGroup, formDirectives} from 'angular2/forms';
import {TodoService} from './todo.service';

type Todo = {
  todoMessage: string;
  id: number;
}

@Component({
  selector: 'todo',
  viewInjector: [FormBuilder, TodoService]
})
@View({
  templateUrl: 'components/todo.html',
  directives: [formDirectives]
})
export class Todo {
  todos:Array<Todo>;
  todoForm:ControlGroup;
  todoService:TodoService;

  constructor(@Inject(FormBuilder) fb:FormBuilder, ts:TodoService) {
    this.todos = [];
    this.todoService = ts;
    this.todoForm = fb.group({
      todoMessage: ["", Validators.required]
    });

    this.getAll();
  }

  getAll():void {
    this.todoService
      .getAll()
      .subscribe(todos => this.todos = todos);
  }

  add(message:string):void {
    this.todoService
      .add(message)
      .subscribe(m => this.todos.push(m));
  }

  remove(id:string|number):void {
    this.todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t.id === id)
            return this.todos.splice(1, i);
        })
      })
  }
}
