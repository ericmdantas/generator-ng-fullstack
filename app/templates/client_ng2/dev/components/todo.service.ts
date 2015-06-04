/// <reference path="../typings/tsd.d.ts" />

import {Promise} from 'angular2/src/facade/async';

export class TodoService {
  add(message:string):Promise {
    return new Promise((res, rej) => {
        res(message);
    });
  }

  remove(id:string|number):Promise {
    return new Promise((res, rej) => {
        res(id);
    });
  }
}
