'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _known_paths = require('./known_paths');

var _known_paths2 = _interopRequireDefault(_known_paths);

var _options_parser = require('./options_parser');

var _options_parser2 = _interopRequireDefault(_options_parser);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _node = require('./node');

var _go = require('./go');

var EndpointSubGenerator = (function () {
  function EndpointSubGenerator(generator) {
    _classCallCheck(this, EndpointSubGenerator);

    this.wrapper = generator;
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
      this.wrapper.feature = _options_parser2['default'].getFeature(this.wrapper.options);
      this.wrapper.name = this.wrapper.name;
      this.wrapper.username = this.wrapper.config.get('username');
      this.wrapper.appName = this.wrapper.config.get('appName');
      this.wrapper.server = this.wrapper.config.get('server') ? this.wrapper.config.get('server').toLowerCase() : undefined;
      this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer') ? this.wrapper.config.get('transpilerServer').toLowerCase() : undefined;

      if (!this.wrapper.feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      switch (this.wrapper.server) {
        case "go":
          _go.GoFactory.build(this.wrapper).copyFiles();break;
        default:
          _node.NodeFactory.build(this.wrapper).copyFiles();break;
      }
    }
  }]);

  return EndpointSubGenerator;
})();

exports.EndpointSubGenerator = EndpointSubGenerator;