const NodeStandard = require('./node').NodeStandard;
const NodeBabel = require('./node').NodeBabel;
const NodeTypescript = require('./node').NodeTypescript;

exports.NodeFactory = class NodeFactory {
  static tokens() {
    return {
      NODE: "node",
      NODE_BABEL: "babel",
      NODE_TYPESCRIPT: "typescript"
    }
  }

  static build(generator) {
    switch(generator.transpilerServer) {
      case NodeFactory.tokens().NODE: return new NodeStandard(generator);
      case NodeFactory.tokens().NODE_BABEL: return new NodeBabel(generator);
      case NodeFactory.tokens().NODE_TYPESCRIPT: return new NodeTypescript(generator);
    }
  }
}
