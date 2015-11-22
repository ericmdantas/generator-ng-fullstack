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
  templateUrl: 'client/dev/todo.html',
  providers: [TodoService],
  directives: [FORM_DIRECTIVES]
})
export class TodoCmp implements OnInit {
  todos: Todo[] = [];
  todoForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(TodoService) private _todoService: TodoService) {
    this.todoForm = fb.group({
      todoMessage: ["", Validators.required]
    });
  }

  onInit() {
    this._getAll();
  }

  private _getAll():void {
    this._todoService
        .getAll()
        .subscribe(todos => this.todos = todos.json());
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe(m => this.todos.push(m));
  }

  remove(id:string|number):void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t.id === id)
            return this.todos.splice(1, i);
        })
      })
  }
}
