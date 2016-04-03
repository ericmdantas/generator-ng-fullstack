"use strict";

const Todo = require('../../../server/api/todo/dao/todo-dao');
const dbJson = require('./db.json').db.test.url;

exports.setupMongoose = (mongoose) => {
  mongoose.models = {};
  mongoose.connect(dbJson);
  mongoose.connection.on('error', () => {});
}

exports.createTodos = () => {
    let _array = [];

    for (let i = 0; i < 10; i++) {
        _array.push({_id: '507c7f79bcf86cd7994f6c'+ (i + 10), todoMessage: 'aaaaaaa'+i});
    }

    return Todo.createTodo(_array);
}
