"use strict";

const TodoRoutes = require('../api/todo/routes/todo.routes');
const StaticDispatcher = require('../commons/static/index');

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
