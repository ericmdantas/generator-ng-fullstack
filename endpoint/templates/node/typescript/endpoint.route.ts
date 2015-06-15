/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import {<%= name %>Controller} from '../controller/<%= name %>.controller';

export class <%= name %>Routes
{
  static init(router:Object)
  {
    router
      .route('/api/<%= nameLowerCase %>')
      .get(<%= name %>Controller.getAll)
      .post(<%= name %>Controller.createNew);

    router
      .route('/api/<%= nameLowerCase %>/:id')
      .delete(<%= name %>Controller.removeById);
  }
}
