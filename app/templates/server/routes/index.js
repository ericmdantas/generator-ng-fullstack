"use strict";

var TodosRoutes = require('../api/todo/routes/todo.routes');
var StaticController = require('../commons/static');

var _init = function(app, router)
{
    TodosRoutes.init(router);

    router
      .route('*', StaticController.sendIndex);

    app.use('/', router);
};

exports.init = _init;
