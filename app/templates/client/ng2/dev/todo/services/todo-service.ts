import {
  Inject,
  Injectable
} from "@angular/core";

import {
  Observable
} from "rxjs/Observable";

import {
  Http,
  Headers
} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class TodoService {
  static ENDPOINT: string = "/api/todos/:id";

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll(): Observable<any> {
    return this._http
               .get(TodoService.ENDPOINT.replace(/:id/, ""))
               .map((r) => r.json());
  }

  getById(id: string):Observable<any> {
    return this._http
               .get(TodoService.ENDPOINT.replace(/:id/, id))
               .map((r) => r.json());
  }

  add(message: string): Observable<any> {
    let _messageStringified = JSON.stringify({todoMessage: message});

    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    return this._http
               .post(TodoService.ENDPOINT.replace(/:id/, ""), _messageStringified, {headers})
               .map((r) => r.json());
  }

  remove(id: string): Observable<any> {
    return this._http
               .delete(TodoService.ENDPOINT.replace(/:id/, id));
  }
}
