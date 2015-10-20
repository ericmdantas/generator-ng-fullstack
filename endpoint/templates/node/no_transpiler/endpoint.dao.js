"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const <%= nameLowerCase %>Schema = require('../model/<%= name %>.model');
const _ = require('lodash');

<%= nameLowerCase %>Schema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    <%= name %>
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

<%= nameLowerCase %>Schema.statics.createNew = (<%= nameLowerCase %>) => {
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
}

<%= nameLowerCase %>chema.statics.removeById = (id) => {
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
}

const <%= name %> = mongoose.model('<%= name %>', <%= nameLowerCase %>Schema);

module.exports = <%= name %>;
