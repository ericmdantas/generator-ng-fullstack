'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var express         = require('express');
var routesConfig    = require('./config/routes.conf');
var db              = require('./config/db.conf');
var routes          = require('./routes');
var os              = require('os');
var port            = process.env.PORT || 3333;
var app             = express();
var server          = app.listen(port);
var socket          = require('./commons/socket/socket-events');
var io              = require('socket.io').listen(server);

routesConfig.init(app, express, __dirname + '/..');
db.init();
routes.init(app);
socket.init(io);

console.log('up and running @: %s on port: %s', os.hostname(), port);
console.log('enviroment: %s', process.env.NODE_ENV);
