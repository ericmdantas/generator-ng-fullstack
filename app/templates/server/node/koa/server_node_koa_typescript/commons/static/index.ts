"use strict";

import * as send from "koa-send";

export default class StaticDispatcher {
    static sendIndex() {
      var _root = process.cwd();
      send(this, _root + "/client/dev/index.html");
    }
}
