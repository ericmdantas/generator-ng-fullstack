"use strict";

var TodosRoutes = require('../api/todo/routes/todo.routes');
var StaticController = require('../commons/static');

var _init = function(app)
{
    TodosRoutes.init();

    app.get('/*', StaticController.sendIndex);
};

exports.init = _init;
