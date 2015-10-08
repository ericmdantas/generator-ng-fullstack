/// <reference path="../../../typings/tsd.d.ts" />

"use strict";

import {<%= name %>DAO} from '../dao/<%= name %>.dao';

export class <%= name %>Controller {
  static getAll(req:Object, res:Object) {
    <%= name %>DAO
      .getAll()
      .then(<%= nameLowerCase %> => res.status(200).json(<%= nameLowerCase %>s))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:Object, res:Object) {
    var _<%= nameLowerCase %> = req.body;

    <%= name %>DAO
      .createNew(_<%= nameLowerCase %>)
      .then(<%= nameLowerCase %> => res.status(201).json(<%= nameLowerCase %>))
      .catch(error => res.status(400).json(error));
  }

  static remove(req:Object, res:Object) {
    var _id = req.params.id;

    <%= name %>DAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
