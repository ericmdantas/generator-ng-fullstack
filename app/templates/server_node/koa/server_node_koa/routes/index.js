"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
<% if (!differentStaticServer) {%>
const StaticDispatcher = require('../commons/static/index');
<% } %>

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
   }
}
