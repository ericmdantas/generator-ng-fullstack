'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var GeneratorConfig = (function () {
  function GeneratorConfig(gen) {
    _classCallCheck(this, GeneratorConfig);

    this.server = 'node';
    this.username = undefined;
    this.appName = undefined;
    this.transpilerServer = undefined;
    this.generator = {};

    _.assign(this, gen);
  }

  _createClass(GeneratorConfig, [{
    key: 'save',
    value: function save() {
      this.generator.config.save();
    }
  }]);

  return GeneratorConfig;
})();

exports.GeneratorConfig = GeneratorConfig;