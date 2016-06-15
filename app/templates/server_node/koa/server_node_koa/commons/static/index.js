"use strict";

const send = require('koa-send');

module.exports = class StaticDispatcher {
    static sendIndex(ctx) {
      var _root = process.cwd();
      send(ctx, _root + '/client/dev/index.html');
    }
}
