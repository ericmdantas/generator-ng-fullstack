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
  _id: string;
}

@Component({
  selector: 'todo-cmp',
  templateUrl: 'client/dev/todo/todo.html',
  styleUrls: ['client/dev/todo/todo.css'],
  providers: [TodoService],
  directives: [FORM_DIRECTIVES]
})
export class TodoCmp implements OnInit {
  title: string = "ng2do";
  todos: Todo[] = [];
  todoForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(TodoService) private _todoService: TodoService) {
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
          this.todos = todos.json();
        });
  }

  add(message:string):void {
    this._todoService
        .add(message)
        .subscribe((m) => {
          this.todos.push(m);
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
