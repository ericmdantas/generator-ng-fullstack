'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GeneratorConfig = (function () {
  _createClass(GeneratorConfig, null, [{
    key: 'KEY_SERVER',
    value: "server",
    enumerable: true
  }, {
    key: 'KEY_USERNAME',
    value: 'username',
    enumerable: true
  }, {
    key: 'KEY_APP_NAME',
    value: 'appName',
    enumerable: true
  }, {
    key: 'KEY_TRANSPILER_SERVER',
    value: 'transpilerServer',
    enumerable: true
  }, {
    key: 'canCreate',
    value: false,
    enumerable: true
  }]);

  function GeneratorConfig(generator) {
    _classCallCheck(this, GeneratorConfig);

    if (!GeneratorConfig.canCreate) {
      throw new Error('Use getInstance(generator) instead.');
    }

    this.server = 'node';
    this.username = undefined;
    this.appName = undefined;
    this.transpilerServer = undefined;
    this.wrapper = generator;
  }

  _createClass(GeneratorConfig, [{
    key: 'withServer',
    value: function withServer(s) {
      this.server = s;
      this.set(GeneratorConfig.KEY_SERVER, s);
      return this;
    }
  }, {
    key: 'withUsername',
    value: function withUsername(u) {
      this.username = u;
      this.set(GeneratorConfig.KEY_USERNAME, u);
      return this;
    }
  }, {
    key: 'withAppName',
    value: function withAppName(a) {
      this.appName = a;
      this.set(GeneratorConfig.KEY_APP_NAME, a);
      return this;
    }
  }, {
    key: 'withTranspilerServer',
    value: function withTranspilerServer(t) {
      this.transpilerServer = t;
      this.set(GeneratorConfig.KEY_TRANSPILER_SERVER, t);
      return this;
    }
  }, {
    key: 'set',
    value: function set(key, info) {
      this.wrapper.config.set(key, info);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.wrapper.config.get(key);
    }
  }, {
    key: 'save',
    value: function save(key, info) {
      this.wrapper.config.save();
    }
  }], [{
    key: 'getInstance',
    value: function getInstance(generator) {
      GeneratorConfig.canCreate = true;
      GeneratorConfig.instance = GeneratorConfig.instance || new GeneratorConfig(generator);
      GeneratorConfig.canCreate = false;

      return GeneratorConfig.instance;
    }
  }]);

  return GeneratorConfig;
})();

exports.GeneratorConfig = GeneratorConfig;