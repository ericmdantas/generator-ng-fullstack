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

var _known_paths = require('./known_paths');

var _known_paths2 = _interopRequireDefault(_known_paths);

var NodeStandard = (function () {
  function NodeStandard(generator) {
    _classCallCheck(this, NodeStandard);

    this.wrapper = generator;
  }

  _createClass(NodeStandard, [{
    key: 'copyFiles',
    value: function copyFiles() {
      this.wrapper.template('node/node/endpoint.route.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/node/endpoint.controller.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/node/endpoint.dao.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/node/endpoint.model.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/node/endpoint.dao_test.js', _known_paths2['default'].PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.directory('server_node', 'server');
      this.wrapper.template('index.js', 'index.js');
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
      this.wrapper.template('node/babel/endpoint.route.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.controller.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.dao.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/babel/endpoint.model.js', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/babel/endpoint.dao_test.js', _known_paths2['default'].PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.js', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.directory('server_node_babel', 'server');
      this.wrapper.template('index.js', 'index.js');
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
      this.wrapper.template('node/typescript/endpoint.route.ts', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + '.route.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.controller.ts', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + '.controller.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.dao.ts', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });
      this.wrapper.template('node/typescript/endpoint.model.ts', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + '.model.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase() });

      this.wrapper.template('node/typescript/endpoint.dao_test.ts', _known_paths2['default'].PATH_SERVER_FEATURES_TEST + this.wrapper.feature + '/dao/' + this.wrapper.name + '.dao_test.ts', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: this.wrapper.feature });
    }
  }, {
    key: 'copyForMainGenerator',
    value: function copyForMainGenerator() {
      this.wrapper.directory('server_node_typescript', 'server');
      this.wrapper.template('index_tsc.js', 'index.js');
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
        case "typescript":
          return new NodeTypescript(generator);
        default:
          return new NodeBabel(generator);
      }
    }
  }]);

  return NodeFactory;
})();

exports.NodeFactory = NodeFactory;