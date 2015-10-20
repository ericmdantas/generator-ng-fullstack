"use strict";

const mongoose = require('mongoose');

const _<%= nameLowerCase %>Schema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(<%= nameLowerCase %>Schema);
