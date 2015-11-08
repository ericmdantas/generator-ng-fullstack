'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _utilsKnown_paths = require('../utils/known_paths');

var _utilsKnown_paths2 = _interopRequireDefault(_utilsKnown_paths);

var _utilsOptions_parser = require('../utils/options_parser');

var _utilsOptions_parser2 = _interopRequireDefault(_utilsOptions_parser);

var _utilsUtils = require('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _node = require('./node');

var _go = require('./go');

var _utilsErrors = require('../utils/errors');

var EndpointSubGenerator = (function () {
  function EndpointSubGenerator(generator) {
    _classCallCheck(this, EndpointSubGenerator);

    this.wrapper = generator;
    this.wrapper.feature = _utilsOptions_parser2['default'].getFeature(this.wrapper.options);
    this.wrapper.name = this.wrapper.name;
    this.wrapper.username = this.wrapper.config.get('username');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.server = this.wrapper.config.get('server');
    this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer');
  }

  _createClass(EndpointSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'endpoint'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      if (!this.wrapper.feature.length) throw new _utilsErrors.FeatureMissingError();

      switch (this.wrapper.server) {
        case "go":
          _go.GoFactory.build(this.wrapper).copyFiles();break;
        case "node":
          _node.NodeFactory.build(this.wrapper).copyFiles();break;
      }
    }
  }]);

  return EndpointSubGenerator;
})();

exports.EndpointSubGenerator = EndpointSubGenerator;