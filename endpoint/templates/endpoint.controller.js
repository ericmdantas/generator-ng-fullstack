"use strict";

import <%= name %>DAO from '../dao/<%= name %>.dao';

export default class <%= name %>Controller
{
  static getAll(req, res)
  {
    var _onSuccess = function(<%= nameLowerCase %>s)
    {
      res
        .status(200)
        .json(<%= nameLowerCase %>s);
    }

    var _onError = function(error)
    {
      res
        .status(400)
        .json(error);
    }

    <%= name %>DAO
      .getAll()
      .then(_onSuccess)
      .catch(_onError);
  }

  static createNew(req, res)
  {
    var _onSuccess = function(<%= nameLowerCase %>)
    {r
      res
        .status(201) // created
        .json(<%= nameLowerCase %>);
    }

    var _onError = function(error)
    {
      res
        .status(400) // bad request
        .json(error);
    }

    var _<%= nameLowerCase %> = req.body;

    <%= name %>DAO
      .createNew(_<%= nameLowerCase %>)
      .then(_onSuccess)
      .catch(_onError);
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
      .then(_onSuccess)
      .catch(_onError);
  }
}
