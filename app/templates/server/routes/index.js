"use strict";

var ThingsController = require('../api/thing/routes');
var StaticController = require('../commons/static');

var _init = function(app)
{
    app.get('/api/things', ThingsController);

    app.get('/*', StaticController.sendIndex);
};

exports.init = _init;
