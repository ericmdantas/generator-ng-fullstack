/// <reference path="../typings/tsd.d.ts" />

import {Http} from 'angular2/http';
import {Inject} from 'angular2/di';

export class TodoService {
  endpoint: string = '/api/todos/:id';
  http: Http;

  constructor(@Inject(Http) http: Http) {
      this.http = http;
  }

  getAll():Rx.Observable {
    return this.http.get(this.endpoint.replace(':id', ''));
  }

  add(message:string):Rx.Observable {
    let _messageStringified = JSON.stringify({message: message});
    return this.http.post(this.endpoint.replace(':id', ''), _messageStringified);
  }

  remove(id:string|number):Rx.Observable {
    return this.http.delete(this.endpoint.replace(':id', id));
  }
}
