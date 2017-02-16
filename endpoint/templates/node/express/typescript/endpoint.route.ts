"use strict";

import * as express from "express";
import {<%= name %>Controller} from "../controller/<%= name %>-controller";

export class <%= name %>Routes {
  static init(router:express.Router) {
    router
      .route("/api/<%= nameLowerCase %>")
      .get(<%= name %>Controller.getAll)
      .post(<%= name %>Controller.createNew);

    router
      .route("/api/<%= nameLowerCase %>/:id")
      .delete(<%= name %>Controller.removeById);
  }
}
