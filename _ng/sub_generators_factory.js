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

var _errors = require('./errors');

var FactorySubGenerator = (function () {
  function FactorySubGenerator(generator) {
    _classCallCheck(this, FactorySubGenerator);

    this.wrapper = generator;
  }

  _createClass(FactorySubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'factory'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var name = this.wrapper.name;

      if (!feature.length) throw new _errors.FeatureMissingError();

      this.wrapper.template('ng1/factory.js', _known_paths2['default'].PATH_CLIENT_FEATURES + feature + '/factory/' + name + '.factory.js', { name: _utils2['default'].capitalizeFirst(name) });
      this.wrapper.template('ng1/factory_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + feature + '/factory/' + name + '.factory_test.js', { name: _utils2['default'].capitalizeFirst(name) });
    }
  }]);

  return FactorySubGenerator;
})();

exports.FactorySubGenerator = FactorySubGenerator;