/// <reference path="../typings/tsd.d.ts" />

import {Promise} from 'angular2/src/facade/async';
import {Http} from 'angular2/http';
import {Inject} from 'angular2/di';

export class TodoService {
  endpoint: string = '/api/todos/:id';
  http: Http;

  constructor(http: Http) {
      this.http = http;
  }

  getAll():Rx.Observable {
    return this.http.get(this.endpoint.replace(':id', ''));
  }

  add(message:string):Rx.Observable {
    return this.http.post(this.endpoint.replace(':id', ''), {message: message});
  }

  remove(id:string|number):Rx.Observable {
    return this.http.delete(this.endpoint.replace(':id', id));
  }
}
