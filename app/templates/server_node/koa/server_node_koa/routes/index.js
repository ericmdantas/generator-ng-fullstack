"use strict";

const router = require('koa-router')();
const TodoRoutes = require('../api/todo/routes/todo-routes');
<% if (!differentStaticServer) {%>
const StaticDispatcher = require('../commons/static/index');
<% } %>

module.exports = class Routes {
   static init(app) {
     TodoRoutes.init(router);
     <% if (!differentStaticServer) { %>
     router.get('*', StaticDispatcher.sendIndex);
     <% } %>

     application.use(router.routes());
   }
}
