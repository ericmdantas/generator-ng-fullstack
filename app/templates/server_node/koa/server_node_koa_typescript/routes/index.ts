"use strict";

import TodoRoutes from '../api/todo/routes/todo-routes';

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
   }
}
