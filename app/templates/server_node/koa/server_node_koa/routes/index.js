"use strict";

const TodoRoutes = require('./todo-route');

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
   }
}
