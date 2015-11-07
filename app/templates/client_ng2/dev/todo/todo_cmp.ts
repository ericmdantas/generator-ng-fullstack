/// <reference path="../typings/tsd.d.ts" />

import {
  Component,
  View,
  Inject,
  Validators,
  FormBuilder,
  ControlGroup,
  OnInit,
  FORM_DIRECTIVES
} from 'angular2/angular2';

import {TodoService} from './todo_service.js';

type Todo = {
  todoMessage: string;
  id: number;
}

@Component({
  selector: 'todo-cmp',
  templateUrl: 'components/todo.html',
  providers: [TodoService],
  directives: [formDirectives]
})
export class Todo implements OnInit {
  todos: Todo[] = [];
  todoForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(TodoService) private _ts: TodoService) {
    this.todoForm = fb.group({
      todoMessage: ["", Validators.required]
    });
  }

  onInit() {
    this._getAll();
  }

  private _getAll():void {
    this.todoService
        .getAll()
        .subscribe(todos => this.todos = todos.json());
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
