"use strict";

const {NodeBaseStandard} = require('./node_base');
const {NodeBaseBabel} = require('./node_base');
const {NodeBaseTypescript} = require('./node_base');

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
