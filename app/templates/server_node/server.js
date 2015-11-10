'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const express = require('express');
const RoutesConfig = require('./config/routes.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');

const app = express();
const server = app.listen(PORT);

const Socket = require('./commons/socket/socket-events');

const io = require('socket.io').listen(server);

RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());
Socket.init(io);

console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);
