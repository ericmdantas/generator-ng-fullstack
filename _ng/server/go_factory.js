"use strict";

const {GoEcho} = require('./go_echo');
const {GoGin} = require('./go_gin');

exports.GoFactory = class GoFactory {
  static tokensWebFramework() {
    return {
      ECHO: 'echo',
      GIN: 'gin'
    };
  }

  static build(generator) {
    switch(generator.goWebFrameworkServer) {
      case GoFactory.tokensWebFramework().GIN: return new GoGin(generator);
      default: return new GoEcho(generator);
    }
  }
};
