"use strict";

const <%= name %> = require('../dao/<%= name %>-dao');

module.exports = class <%= name %>Controller {
  *getAll() {
    try {
      let <%= nameLowerCase %> = yield <%= name %>DAO.getAll();
      this.body = <%= nameLowerCase %>;
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }

  *createNew() {
    let _<%= nameLowerCase %> = this.body;

    try {
      this.body = yield <%= name %>DAO.createNew(_<%= nameLowerCase %>);
      this.status = 201;
    } catch(e) {
      this.status = 400;
    }
  }

  *removeById() {
    let _id = this.params.id;

    try {
      yield <%= name %>DAO.removeById(_id);
      this.status = 200;
    } catch(e) {
      this.status = 400;
    }
  }
}
