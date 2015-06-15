"use strict";

import <%= name %>DAO from '../dao/<%= name %>.dao';

export default class <%= name %>Controller
{
  static getAll(req, res) {
    <%= name %>DAO
      .getAll()
      .then(<%= nameLowerCase %> => res.status(200).json(<%= nameLowerCase %>s))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    var _<%= nameLowerCase %> = req.body;

    <%= name %>DAO
      .createNew(_<%= nameLowerCase %>)
      .then(<%= nameLowerCase %> => res.status(201).json(<%= nameLowerCase %>))
      .catch(error => res.status(400).json(error));
  }

  static remove(req, res)
  {
    var _onSuccess = function()
    {
      res
        .status(200) // all good
        .end();
    }

    var _onError = function(error)
    {
      res
        .status(400)  // bad request
        .json(error);
    }

    var _id = req.params.id;

    <%= name %>DAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
