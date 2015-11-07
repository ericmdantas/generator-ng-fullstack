/// <reference path="../typings/tsd.d.ts" />

import {Http} from 'angular2/http';
import {Inject} from 'angular2/angular2';

export class TodoService {
  static ENDPOINT: string = '/api/todos/:id';
  http: Http;

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Rx.Observable<any> {
    return this._http
               .get(TodoService.ENDPOINT.replace(':id', ''));
  }

  add(message:string):Rx.Observable<any> {
    let _messageStringified = JSON.stringify({message});

    return this._http
               .post(TodoService.ENDPOINT.replace(':id', ''), _messageStringified);
  }

  remove(id: string|number):Rx.Observable<any> {
    return this._http
               .delete(TodoService.ENDPOINT.replace(':id', id));
  }
}
