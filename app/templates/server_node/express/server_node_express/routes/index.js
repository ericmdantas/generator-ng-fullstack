"use strict";

const TodoRoutes = require('../api/todo/route/todo-route');
<% if (!differentStaticServer) {%>
const StaticDispatcher = require('../commons/static/index');
<% } %>

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     <% if (!differentStaticServer) { %>
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     <% } %>

     app.use('/', router);
   }
}
