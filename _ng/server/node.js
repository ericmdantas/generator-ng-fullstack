'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _utilsKnown_paths = require('../utils/known_paths');

var _utilsKnown_paths2 = _interopRequireDefault(_utilsKnown_paths);

var basePath = function basePath(generator) {
  return {
    route: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/routes/' + generator.name + '.route',
    controller: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/controller/' + generator.name + '.controller',
    dao: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/dao/' + generator.name + '.dao',
    model: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES + generator.feature + '/model/' + generator.name + '.model',
    test: _utilsKnown_paths2['default'].PATH_SERVER_FEATURES_TEST + generator.feature + '/dao/' + generator.name + '.dao_test'
  };
};

var NodeStandard = (function () {
  function NodeStandard(generator) {
    _classCallCheck(this, NodeStandard);

    this.wrapper = generator;
  }

  _createClass(NodeStandard, [{
    key: 'copyFiles',
    value: function copyFiles() {
      var gen = basePath(this.wrapper);

      this.wrapper.template('node/no_transpiler/endpoint.route.js', gen.route + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/no_transpiler/endpoint.controller.js', gen.controller + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/no_transpiler/endpoint.dao.js', gen.dao + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/no_transpiler/endpoint.model.js', gen.model + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/no_transpiler/endpoint.dao_test.js', gen.test + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.template('index_node.js', 'index.js');
      this.wrapper.directory('server_node', 'server');
      this.wrapper.directory('tasks/server', 'tasks/server');
      this.wrapper.directory('tests/server', 'tests/server');
    }
  }]);

  return NodeStandard;
})();

exports.NodeStandard = NodeStandard;

var NodeBabel = (function () {
  function NodeBabel(generator) {
    _classCallCheck(this, NodeBabel);

    this.wrapper = generator;
  }

  _createClass(NodeBabel, [{
    key: 'copyFiles',
    value: function copyFiles() {
      var gen = basePath(this.wrapper);

      this.wrapper.template('node/babel/endpoint.route.js', gen.route + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.controller.js', gen.controller + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.dao.js', gen.dao + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.model.js', gen.model + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/babel/endpoint.dao_test.js', gen.test + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.template('index_babel.js', 'index.js');
      this.wrapper.directory('server_node_babel', 'server');
      this.wrapper.directory('tasks/server', 'tasks/server');
      this.wrapper.directory('tests/server', 'tests/server');
    }
  }]);

  return NodeBabel;
})();

exports.NodeBabel = NodeBabel;

var NodeTypescript = (function () {
  function NodeTypescript(generator) {
    _classCallCheck(this, NodeTypescript);

    this.wrapper = generator;
  }

  _createClass(NodeTypescript, [{
    key: 'copyFiles',
    value: function copyFiles() {
      var gen = basePath(this.wrapper);

      this.wrapper.template('node/typescript/endpoint.route.ts', gen.route + '.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.controller.ts', gen.controller + '.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.dao.ts', gen.dao + '.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.model.ts', gen.model + '.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/typescript/endpoint.dao_test.js', gen.test + '.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.directory('server_node_typescript', 'server');
      this.wrapper.template('index_tsc.js', 'index.js');
      this.wrapper.template('server_node_typescript/tsconfig.json', 'tsconfig.json');
      this.wrapper.template('server_node_typescript/tsd.json', 'tsd.json');
      this.wrapper.directory('tasks/server', 'tasks/server');
      this.wrapper.directory('tests/server', 'tests/server');
    }
  }]);

  return NodeTypescript;
})();

exports.NodeTypescript = NodeTypescript;

var NodeFactory = (function () {
  function NodeFactory() {
    _classCallCheck(this, NodeFactory);
  }

  _createClass(NodeFactory, null, [{
    key: 'build',
    value: function build(generator) {
      switch (generator.transpilerServer) {
        case NodeFactory.tokens.NODE:
          return new NodeStandard(generator);
        case NodeFactory.tokens.NODE_BABEL:
          return new NodeBabel(generator);
        case NodeFactory.tokens.NODE_TYPESCRIPT:
          return new NodeTypescript(generator);
      }
    }
  }, {
    key: 'tokens',
    value: {
      NODE: "node",
      NODE_BABEL: "babel",
      NODE_TYPESCRIPT: "typescript"
    },
    enumerable: true
  }]);

  return NodeFactory;
})();

exports.NodeFactory = NodeFactory;