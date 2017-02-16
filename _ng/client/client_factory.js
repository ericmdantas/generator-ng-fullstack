'use strict';

const {AngularFactory} = require('./angular');
const {VueFactory} = require('./vue');
const {AureliaFactory} = require('./aurelia');

exports.ClientFactory = class ClientFactory {
  static tokens() {
    return {
      ANGULAR: 'angular',
      AURELIA: 'aurelia',
      VUE: 'vue'
    };
  }

  static create(client, token, gen) {
    switch(client) {
        case ClientFactory.tokens().ANGULAR: return AngularFactory.build(token, gen);
        case ClientFactory.tokens().AURELIA: return AureliaFactory.build(token, gen);
        case ClientFactory.tokens().VUE: return VueFactory.build(token, gen);
    }
  }
};
