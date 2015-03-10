"use strict";

var ThingsRoutes = require('../api/thing/routes/thing.routes');
var StaticController = require('../commons/static');

var _init = function(app)
{
    app.get('/api/things', ThingsRoutes);

    app.get('/*', StaticController.sendIndex);
};

exports.init = _init;
