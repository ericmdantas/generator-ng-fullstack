"use strict";

var mongoose = require('mongoose');

var _todoSchema =
{
    todoMessage: {type: String, required: true, trim: true},
    createdAt: {type: Date, default: Date.now}
}

exports.todoSchema = mongoose.Schema(_todoSchema);
