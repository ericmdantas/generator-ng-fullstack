"use strict";

import mongoose from 'mongoose';
import Promise from 'bluebird';
import <%= nameLowerCase %>Schema from '../model/<%= name %>.model';
import _ from 'lodash';

<%= nameLowerCase %>Schema.statics.getAll = function()
{
  var _promise = function(resolve, reject)
  {
    var _query = {};

    <%= name %>
      .find(_query)
      .exec(function(err, todos)
      {
        err ? reject(err)
          : resolve(todos);
      });
  }

  return new Promise(_promise);
}

<%= nameLowerCase %>Schema.statics.createNew = function(<%= nameLowerCase %>)
{
  var _promise = function(resolve, reject)
  {
    if (!_.isObject(<%= nameLowerCase %>))
    {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    var _something = new <%= name %>(<%= nameLowerCase %>);

    _something.save(function(err, saved)
    {
      err ? reject(err)
        : resolve(saved);
    });
  }

  return new Promise(_promise);
}

<%= nameLowerCase %>chema.statics.removeById = function(id)
{
  var _promise = function(resolve, reject)
  {
    if (!_.isString(id))
    {
      return reject(new TypeError('Id is not a valid string.'));
    }

    <%= name %>
      .findByIdAndRemove(id)
      .exec(function(err, deleted)
      {
        err ? reject(err)
          : resolve();
      });
  }

  return new Promise(_promise);
}

var <%= name %> = mongoose.model('<%= name %>', <%= nameLowerCase %>Schema);

export default <%= name %>;
