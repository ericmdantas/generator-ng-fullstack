"use strict";

const {NodeBaseStandard} = require('./node_base');
const {NodeBaseBabel} = require('./node_base');
const {NodeBaseTypescript} = require('./node_base');

const SERVER_TOKEN = 'express';

class NodeExpressStandard extends NodeBaseStandard {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

class NodeExpressBabel extends NodeBaseBabel {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

class NodeExpressTypescript extends NodeBaseTypescript {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

exports.NodeExpressBabel = NodeExpressBabel;
exports.NodeExpressTypescript = NodeExpressTypescript;
exports.NodeExpressStandard = NodeExpressStandard;
