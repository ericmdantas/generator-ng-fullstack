'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

import os from 'os';
import http from 'http';
import Koa from 'koa';
import routerCb from 'koa-router';
import RoutesConfig from './config/routes.conf';
import DBConfig from './config/db.conf';
import Routes from './routes/index';

const router = routerCb();

const app = new Koa();

RoutesConfig.init(app, router);
DBConfig.init();
Routes.init(app, router);

http.createServer(app.callback())
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
