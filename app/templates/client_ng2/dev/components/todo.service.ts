/// <reference path="../typings/tsd.d.ts" />

import {Promise} from 'angular2/src/facade/async';

export class TodoService {
  endpoint: string = '/api/todos/:id';

  getAll():Promise {
    return new Promise((res, rej) => res([]));
  }

  add(message:string):Promise {
    return new Promise((res, rej) => res(message));
  }

  remove(id:string|number):Promise {
    return new Promise((res, rej) => res(id));
  }
}
