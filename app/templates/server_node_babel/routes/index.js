"use strict";

import TodoRoutes from '../api/todo/routes/todo.routes';
import StaticDispatcher from '../commons/static/index';

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
