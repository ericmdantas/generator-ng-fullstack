const NodeExpressStandard = require('./node_express').NodeExpressStandard;
const NodeExpressBabel = require('./node_express').NodeExpressBabel;
const NodeExpressTypescript = require('./node_express').NodeExpressTypescript;
const NodeKoaStandard = require('./node_koa').NodeKoaStandard;
const NodeKoaBabel = require('./node_koa').NodeKoaBabel;
const NodeKoaTypescript = require('./node_koa').NodeKoaTypescript;

exports.NodeFactory = class NodeFactory {
  static tokensCompiler() {
    return {
      NODE: "node",
      BABEL: "babel",
      TYPESCRIPT: "typescript"
    }
  }

  static tokensWebFramework() {
    return {
      EXPRESS: "express",
      KOA: "koa"
    }
  }

  static build(generator) {
    if (generator.webFrameworkServer === NodeFactory.tokensWebFramework().EXPRESS) {
      switch(generator.transpilerServer) {
        case NodeFactory.tokensCompiler().NODE: return new NodeExpressStandard(generator);
        case NodeFactory.tokensCompiler().BABEL: return new NodeExpressBabel(generator);
        case NodeFactory.tokensCompiler().TYPESCRIPT: return new NodeExpressTypescript(generator);
      }
    }

    if (generator.webFrameworkServer === NodeFactory.tokensWebFramework().KOA) {
      switch(generator.transpilerServer) {
        case NodeFactory.tokensCompiler().NODE: return new NodeKoaStandard(generator);
        case NodeFactory.tokensCompiler().BABEL: return new NodeKoaBabel(generator); 
        case NodeFactory.tokensCompiler().TYPESCRIPT: return new NodeKoaTypescript(generator);
      }
    }
  }
}
