"use strict";

import TodoRoutes from '../api/todo/route/todo-route';
// Import routes below

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     // Init routes below

   }
};
