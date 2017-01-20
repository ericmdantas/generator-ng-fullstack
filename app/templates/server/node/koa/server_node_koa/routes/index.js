"use strict";

const TodoRoutes = require("../api/todo/route/todo-route");

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
   }
}
