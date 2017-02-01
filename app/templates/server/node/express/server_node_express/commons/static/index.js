"use strict";

const fs = require("fs");
const path = require("path");

module.exports = class StaticDispatcher {
    static sendIndex(req, res) {
      const _root = process.cwd();
      const _env = process.env.NODE_ENV;
      const _folder = _env === "production" ? "dist" : "dev";

      res.type(".html");

      fs.createReadStream(path.join(`${_root}/client/${_folder}/index.html`)).pipe(res);
    }
}
