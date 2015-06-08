/// <reference path="typings/tsd.d.ts" />

'use strict';

if ('production' === process.env.NODE_ENV)
    import * as newrelic from 'newrelic';

const PORT = process.env.PORT || 3333;

import os from 'os';
import express from 'express';
import {RoutesConfig} from './config/routes.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';
import {SocketEvents} from './commons/socket/socket-events';

let app = express();
let server = app.listen(PORT);

let io = require('socket.io').listen(server);

RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());
SocketEvents.init(io);

console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);
