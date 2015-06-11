/// <reference path="typings/tsd.d.ts" />

'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var PORT = process.env.PORT || 3333;

import * as express from 'express';
import * as os from 'os';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';
import {SocketEvents} from './commons/socket/socket-events';

var app = express();
var server = app.listen(PORT);

var io = require('socket.io').listen(server);

RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());
SocketEvents.init(io);

console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);
