"use strict";

const PORT = process.env.PORT || 3333;

import fs from "fs";
import os from "os";
import http2 from "spdy";
import Koa from "koa";
import routerCb from "koa-router";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import Routes from "./routes/index";

const router = routerCb();

const app = new Koa();

RoutesConfig.init(app, router);
DBConfig.init();
Routes.init(app, router);

const opts = {
  key: fs.readFileSync(__dirname + "/cert/server.key"),
  cert: fs.readFileSync(__dirname + "/cert/server.crt")
}

http2.createServer(opts, app.callback())
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
