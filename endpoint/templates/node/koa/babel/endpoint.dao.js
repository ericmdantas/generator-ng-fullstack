import mongoose from 'mongoose';
import Promise from 'bluebird';
import <%= nameLowerCase %>Schema from '../model/<%= name %>-model';
import _ from 'lodash';

<%= nameLowerCase %>Schema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    <%= name %>
    .find(_query)
    .exec(function(err, todos) {
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

      var _something = new <%= name %>(<%= nameLowerCase %>);

      _something.save(function(err, saved) {
        err ? reject(err)
        : resolve(saved);
      });
    });
}

<%= nameLowerCase %>Schema.statics.removeById = (id) => {

  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    <%= name %>
    .findByIdAndRemove(id)
    .exec(function(err, deleted) {
      err ? reject(err)
      : resolve();
    });
  });
}

const <%= name %> = mongoose.model('<%= name %>', <%= nameLowerCase %>Schema);

export default <%= name %>;
