import {
  Inject,
  Observable
} from 'angular2/angular2';

import {
  Http
} from 'angular2/http';

export class TodoService {
  static ENDPOINT: string = '/api/todos/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    return this._http.get(TodoService.ENDPOINT.replace(':id', ''));
  }

  add(message:string):Observable<any> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    return this._http.post(TodoService.ENDPOINT.replace(':id', ''), _messageStringified);
  }

  remove(id: string):Observable<any> {
    return this._http.delete(TodoService.ENDPOINT.replace(':id', id));
  }
}
