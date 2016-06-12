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
      NODE_BABEL: "babel",
      NODE_TYPESCRIPT: "typescript"
    }
  }

  static tokensWebFramework() {
    return {
      NODE_EXPRESS: "node-express",
      NODE_EXPRESS_BABEL: "babel-express",
      NODE_EXPRESS_TYPESCRIPT: "typescript-express",
      NODE_KOA: "node-koa",
      NODE_KOA_BABEL: "babel-koa",
      NODE_KOA_TYPESCRIPT: "typescript-koa"
    }
  }

  static build(generator) {
    switch(generator.transpilerServer) {
      case NodeFactory.tokensCompiler().NODE: return new NodeExpressStandard(generator);
      case NodeFactory.tokensCompiler().NODE_BABEL: return new NodeExpressBabel(generator);
      case NodeFactory.tokensCompiler().NODE_TYPESCRIPT: return new NodeExpressTypescript(generator);
      //case NodeFactory.tokensCompiler().NODE_KOA: return new NodeKoaStandard(generator);
      //case NodeFactory.tokensCompiler().NODE_KOA_BABEL: return new NodeKoaBabel(generator);
      //case NodeFactory.tokensCompiler().NODE_KOA_TYPESCRIPT: return new NodeKoaTypescript(generator);
    }
  }
}
