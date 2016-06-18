import {
  Component,
  OnInit
} from '@angular/core';

import {
  Validators,
  FormBuilder,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup,
  FormControl
} from '@angular/forms';

import {
  TodoService
} from '../services/todo-service';

type Todo = {
  todoMessage: string;
  _id: string;
}

@Component({
  selector: 'todo-cmp',
  templateUrl: 'todo/templates/todo.html',
  styleUrls: ['todo/styles/todo.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [TodoService]
})
export class TodoCmp implements OnInit {
  title: string = "ng2do";
  todos: Todo[] = [];
  todoForm: FormGroup;

  constructor(fb:FormBuilder, private _todoService: TodoService) {
    this.todoForm = fb.group({
      "todoMessage": ["", Validators.required]
    });
  }

  ngOnInit() {
    this._getAll();
  }

  private _getAll():void {
    this._todoService
        .getAll()
        .subscribe((todos) => {
          this.todos = todos;
        });
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe((m) => {
          this.todos.push(m);
          (<FormControl>this.todoForm.controls['todoMessage']).updateValue("");
        });
  }

  remove(id:string):void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      })
  }
}
