"use strict";

const knownPaths = require('../utils/known_paths');

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/routes/${generator.name}-route`,
    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}-controller`,
    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}-dao`,
    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}-model`,
    test: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/dao/${generator.name}-dao_test`
  }
}

class NodeStandard {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/no_transpiler/endpoint.route.js', `${gen.route}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/no_transpiler/endpoint.controller.js', `${gen.controller}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/no_transpiler/endpoint.dao.js', `${gen.dao}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/no_transpiler/endpoint.model.js', `${gen.model}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/no_transpiler/endpoint.dao_test.js', `${gen.test}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.template('index_node.js', 'index.js');
    this.wrapper.directory('server_node', 'server');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');
  }
}

class NodeBabel {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/babel/endpoint.route.js', `${gen.route}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.controller.js', `${gen.controller}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.dao.js', `${gen.dao}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/babel/endpoint.model.js', `${gen.model}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/babel/endpoint.dao_test.js', `${gen.test}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.template('index_babel.js', 'index.js');
    this.wrapper.directory('server_node_babel', 'server');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');
  }
}

class NodeTypescript {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/typescript/endpoint.route.ts', `${gen.route}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.controller.ts', `${gen.controller}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.dao.ts', `${gen.dao}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});
    this.wrapper.template('node/typescript/endpoint.model.ts', `${gen.model}.ts`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase()});

    this.wrapper.template('node/typescript/endpoint.dao_test.js', `${gen.test}.js`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature});
  }

  copyForMainGenerator() {
    this.wrapper.directory('server_node_typescript', 'server');
    this.wrapper.template('index_tsc.js', 'index.js');
    this.wrapper.template('server_node_typescript/tsconfig.json', 'tsconfig.json');
    this.wrapper.template('server_node_typescript/typings.json', 'typings.json');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');
  }
}

class NodeFactory {
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

exports.NodeBabel = NodeBabel;
exports.NodeTypescript = NodeTypescript;
exports.NodeStandard = NodeStandard;
exports.NodeFactory = NodeFactory;
