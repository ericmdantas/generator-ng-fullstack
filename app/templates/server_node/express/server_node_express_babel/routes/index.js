import TodoRoutes from '../api/todo/route/todo-route';
// Import routes below

<% if (!differentStaticServer) { %>
import StaticDispatcher from '../commons/static/index';
<% } %>

export default class Routes {
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
}
