/// <reference path="../typings/tsd.d.ts" />

import {Promise} from 'angular2/src/facade/async';
import {IHttp} from 'angular2/src/http/interfaces';
import {HttpFactory} from 'angular2/src/http/http';
import {Inject} from 'angular2/di';

export class TodoService {
  endpoint: string = '/api/todos/:id';
  http: IHttp;

  constructor(@Inject(HttpFactory) http: IHttp) {
      this.http = http;
  }

  getAll():Rx.Observable {
    return this.http(this.endpoint.replace(':id', ''));
  }

  add(message:string):Rx.Observable {
    return this.http(this.endpoint.replace(':id', ''));
  }

  remove(id:string|number):Rx.Observable {
    return this.http(this.endpoint.replace(':id', id));
  }
}
