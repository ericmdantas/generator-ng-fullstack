"use strict";

const NodeFactory = require('./node').NodeFactory;
const GoFactory = require('./go').GoFactory;

exports.TestFactory = class TestFactory {
  static tokens() {
    return {
      TOGETHER: 'together',
      SEPARATE: 'separate'
    }
  };

  static create(token, gen) {
    switch(token) {
      case TestFactory.tokens().NODE: return NodeFactory.build(gen);
    }
  }
}
