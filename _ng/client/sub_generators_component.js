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

var ComponentSubGenerator = (function () {
  function ComponentSubGenerator(generator) {
    _classCallCheck(this, ComponentSubGenerator);

    this.wrapper = generator;
  }

  _createClass(ComponentSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'component'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var name = this.wrapper.name;
      var _firstLetterUppercased = name.charAt(0).toUpperCase() + name.slice(1);
      var nameLowerCase = name.toLowerCase();

      this.wrapper.template('component.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + name + '/' + name + '.ts', { name: _firstLetterUppercased });
      this.wrapper.template('component.html', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + name + '/' + name + '.html', { name: name });
      this.wrapper.template('component_test.ts', _utilsKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + '/components/' + name + '/' + name + '_test.ts', { name: _firstLetterUppercased, nameLowerCase: nameLowerCase });
    }
  }]);

  return ComponentSubGenerator;
})();

exports.ComponentSubGenerator = ComponentSubGenerator;