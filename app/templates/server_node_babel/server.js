if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

import os from 'os';
import express from 'express';
import RoutesConfig from './config/routes.conf';
import DBConfig from './config/db.conf';
import Routes from './routes/index';

const app = express();
const server = app.listen(PORT);

import Socket from './commons/socket/socket-events';

const io = require('socket.io').listen(server);

RoutesConfig.init(app, express);
DBConfig.init();
Routes.init(app, express.Router());
Socket.init(io);

console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
console.log(`enviroment: ${process.env.NODE_ENV}`);
