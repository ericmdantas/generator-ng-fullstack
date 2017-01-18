"use strict";

if (process.env.NODE_ENV === "production")
    require("newrelic");

const PORT = process.env.PORT || 3333;

const os = require("os");
const http = require("http");
const Koa = require("koa");
const router = require("koa-router")();
const RoutesConfig = require("./config/routes.conf");
const DBConfig = require("./config/db.conf");
const Routes = require("./routes/index");

const app = new Koa();

RoutesConfig.init(app, router);
DBConfig.init();
Routes.init(app, router);

http.createServer(app.callback())
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
