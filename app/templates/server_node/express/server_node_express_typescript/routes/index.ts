import * as express from 'express';
import {TodoRoutes} from '../api/todo/route/todo-route';
// Import routes below

<% if (!differentStaticServer) { %>
import {StaticDispatcher} from '../commons/static/index';
<% } %>

export class Routes {
   static init(app: express.Application, router: express.Router) {
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
