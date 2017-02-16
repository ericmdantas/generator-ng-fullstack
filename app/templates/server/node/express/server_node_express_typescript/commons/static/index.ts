"use strict";

import * as express from "express";
import * as fs from "fs";
import * as path from "path";

export class StaticDispatcher {
    static sendIndex(req: express.Request, res: express.Response):void {
      const _root = process.cwd();
      const _env = process.env.NODE_ENV;
      const _folder = _env === "production" ? "dist" : "dev";

      res.type(".html");

      fs.createReadStream(path.join(`${_root}/client/${_folder}/index.html`)).pipe(res);
    }
}
