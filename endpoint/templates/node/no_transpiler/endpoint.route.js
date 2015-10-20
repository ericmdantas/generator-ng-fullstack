"use strict";

const <%= name %>Controller = require('../controller/<%= name %>.controller');

module.exports = class <%= name %>Routes {
  static init(router) {
    router
      .route('/api/<%= nameLowerCase %>')
      .get(<%= name %>Controller.getAll)
      .post(<%= name %>Controller.createNew);

    router
      .route('/api/<%= nameLowerCase %>/:id')
      .delete(<%= name %>Controller.removeById);
  }
}
