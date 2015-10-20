"use strict";

import <%= name %>DAO from '../dao/<%= name %>.dao';

module.exports = class <%= name %>Controller {
  static getAll(req, res) {
    <%= name %>DAO
      .getAll()
      .then(<%= nameLowerCase %> => res.status(200).json(<%= nameLowerCase %>s))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _<%= nameLowerCase %> = req.body;

    <%= name %>DAO
      .createNew(_<%= nameLowerCase %>)
      .then(<%= nameLowerCase %> => res.status(201).json(<%= nameLowerCase %>))
      .catch(error => res.status(400).json(error));
  }

  static remove(req, res) {
    let _id = req.params.id;

    <%= name %>DAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
