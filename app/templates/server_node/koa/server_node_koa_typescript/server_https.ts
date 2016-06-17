'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

import * as os from 'os';
import * as https from 'https';
import * as Koa from 'koa';
import * as routerCb from 'koa-router';
import * as RoutesConfig from './config/routes.conf';
import * as DBConfig from './config/db.conf';
import * as Routes from './routes/index';

const router = routerCb();

const app = new Koa();

RoutesConfig.init(app, router);
DBConfig.init();
Routes.init(app, router);

const opts = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
}

https.createServer(opts, app.callback())
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
