import fs from "fs";
import path from "path";

export default class StaticDispatcher {
    static sendIndex(req, res) {
      const _root = process.cwd();
      const _env = process.env.NODE_ENV;
      const _folder = _env === "production" ? "dist" : "dev";

      res.type(".html");

      fs.createReadStream(path.join(`${_root}/client/${_folder}/index.html`)).pipe(res);
    }
}
