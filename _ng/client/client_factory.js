'use strict';

const AngularFactory = require('./angular').AngularFactory;

exports.ClientFactory = class ClientFactory {
  static tokens() {
    return {
      ANGULAR: 'angular'
    };
  }

  static create(client, token, gen) {
    switch(client) {
        case ClientFactory.tokens().ANGULAR: return AngularFactory.build(token, gen);
    }
  }
};
