"use strict";

const PORT = process.env.PORT || 3333;

const os = require("os");
const http2 = require("spdy");
const express = require("express");
const fs = require("fs");
const RoutesConfig = require("./config/routes.conf");
const DBConfig = require("./config/db.conf");
const Routes = require("./routes/index");

const app = express();

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

const opts = {
  key: fs.readFileSync(__dirname + "/cert/server.key"),
  cert: fs.readFileSync(__dirname + "/cert/server.crt")
}

http2.createServer(opts, app)
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
