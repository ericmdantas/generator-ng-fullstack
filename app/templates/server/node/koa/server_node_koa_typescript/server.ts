/// <reference path="../typings/index.d.ts" />

"use strict";

const PORT = process.env.PORT || 3333;

import * as os from "os";
import * as http from "http";
import * as Koa from "koa";
import * as routerCb from "koa-router";
import * as RoutesConfig from "./config/routes.conf";
import * as DBConfig from "./config/db.conf";
import * as Routes from "./routes/index";

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
