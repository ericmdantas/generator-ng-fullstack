"use strict";

const NodeBaseStandard = require('./node_base').NodeBaseStandard;
const NodeBaseBabel = require('./node_base').NodeBaseBabel;
const NodeBaseTypescript = require('./node_base').NodeBaseTypescript;

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
