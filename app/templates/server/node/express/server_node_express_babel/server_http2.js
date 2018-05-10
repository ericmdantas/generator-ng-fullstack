const PORT = process.env.PORT || 3333;

import os from "os";
import express from "express";
import http2 from "spdy";
import fs from "fs";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import Routes from "./routes/index";

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
