'use strict';

const AngularFactory = require('./angular').AngularFactory;
const VueFactory = require('./vue').VueFactory;

exports.ClientFactory = class ClientFactory {
  static tokens() {
    return {
      ANGULAR: 'angular',
      VUE: 'vue'
    };
  }

  static create(client, token, gen) {
    switch(client) {
        case ClientFactory.tokens().ANGULAR: return AngularFactory.build(token, gen);
        case ClientFactory.tokens().VUE: return VueFactory.build(token, gen);
    }
  }
};
