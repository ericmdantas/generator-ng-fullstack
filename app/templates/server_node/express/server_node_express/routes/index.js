"use strict";

const TodoRoutes = require('../api/todo/route/todo-route');
// Import routes below

<% if (!differentStaticServer) {%>
const StaticDispatcher = require('../commons/static/index');
<% } %>

module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     // Init routes below

     <% if (!differentStaticServer) { %>
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     <% } %>

     app.use('/', router);
   }
};
