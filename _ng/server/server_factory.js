"use strict";

const NodeFactory = require('./node_factory').NodeFactory;
const GoFactory = require('./go_factory').GoFactory;

exports.ServerFactory = class ServerFactory {
  static tokens() {
    return {
      NODE: 'node',
      GO: 'go'
    };
  }

  static create(token, gen) {
    switch(token) {
      case ServerFactory.tokens().NODE: return NodeFactory.build(gen);
      case ServerFactory.tokens().GO: return GoFactory.build(gen);
    }
  }
};
