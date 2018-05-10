"use strict";

const {GoEcho} = require('./go_echo');

exports.GoFactory = class GoFactory {
  static tokensWebFramework() {
    return {
      ECHO: 'echo'
    };
  }

  static build(generator) {
    return new GoEcho(generator);
  }
};
