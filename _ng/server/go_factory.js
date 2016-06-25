"use strict";

const GoServer = require('./go').GoServer;

class GoFactory {
  static build(generator) {
    return new GoServer(generator);
  }
}

exports.GoFactory = GoFactory;
