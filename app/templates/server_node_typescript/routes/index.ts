/// <reference path="../typings/main.d.ts" />

import {TodoRoutes} from '../api/todo/routes/todo-routes';
import {StaticDispatcher} from '../commons/static/index';

export class Routes {
   static init(app:Object, router:Object) {
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
