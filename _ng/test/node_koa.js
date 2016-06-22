"use strict";

const NodeBaseStandard = require('./node_base').NodeBaseStandard;
const NodeBaseBabel = require('./node_base').NodeBaseBabel;
const NodeBaseTypescript = require('./node_base').NodeBaseTypescript;

const SERVER_TOKEN = 'koa';

class NodeKoaStandard extends NodeBaseStandard {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

class NodeKoaBabel extends NodeBaseBabel {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

class NodeKoaTypescript extends NodeBaseTypescript {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
}

exports.NodeKoaBabel = NodeKoaBabel;
exports.NodeKoaTypescript = NodeKoaTypescript;
exports.NodeKoaStandard = NodeKoaStandard;
