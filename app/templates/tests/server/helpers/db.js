"use strict";

var Todo = require('../../../server/api/todo/dao/todo.dao');
var dbJson = require('./db.json').db.test.url;

var _setupMongoose = function(mongoose)
{
  mongoose.models = {};
  mongoose.connect(dbJson);
  mongoose.connection.on('error', function() {});
}

var _createTodos = function()
{
    var _array = [];

    for (var i = 0; i < 10; i++)
    {
        _array.push({todoMessage: 'aaaaaaa'+i});
    }

    return Todo.create(_array);
}

exports.setupMongoose = _setupMongoose;
exports.createTodos = _createTodos;
