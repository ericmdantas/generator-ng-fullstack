"use strict";

import send from "koa-send";

export default class StaticDispatcher {
    static sendIndex() {
      const _root = process.cwd();
      const _env = process.env.NODE_ENV;

      const _folder = _env === 'production' ? 'dist' : 'dev';

      send(this, _root + `/client/${_folder}/index.html`);
    }
}
