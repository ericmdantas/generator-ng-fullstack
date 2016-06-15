"use strict";

import * as express from 'express';
import {<%= name %>DAO} from '../dao/<%= name %>-dao';

export class <%= name %>Controller {
  static getAll(req:express.Request, res:express.Response) {
    <%= name %>DAO
      ['getAll']()
      .then(<%= nameLowerCase %> => res.status(200).json(<%= nameLowerCase %>s))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _<%= nameLowerCase %> = req.body;

    <%= name %>DAO
      ['createNew'](_<%= nameLowerCase %>)
      .then(<%= nameLowerCase %> => res.status(201).json(<%= nameLowerCase %>))
      .catch(error => res.status(400).json(error));
  }

  static remove(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    <%= name %>DAO
      ['removeById'](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
