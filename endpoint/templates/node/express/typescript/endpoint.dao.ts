"use strict";

import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import <%= nameLowerCase %>Schema from '../model/<%= name %>-model';
import * as _ from 'lodash';

<%= nameLowerCase %>Schema.static('getAll', () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    <%= name %>
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

<%= nameLowerCase %>Schema.static('createNew', (<%= nameLowerCase %>) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(<%= nameLowerCase %>)) {
        return reject(new TypeError('Todo is not a valid object.'));
      }

      let _something = new <%= name %>(<%= nameLowerCase %>);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

<%= nameLowerCase %>Schema.static('removeById', (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError('Id is not a valid string.'));
      }

      <%= name %>
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let <%= name %>Model = mongoose.model('<%= name %>', <%= nameLowerCase %>Schema);

export default <%= name %>Model;
