"use strict";

const send = require("koa-send");

module.exports = class StaticDispatcher {
    static sendIndex() {
      var _root = process.cwd();
      send(this, _root + "/client/dev/index.html");
    }
}
