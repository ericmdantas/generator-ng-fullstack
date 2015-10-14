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
      var _name = this.wrapper.name;
      var _firstLetterUppercased = _name.charAt(0).toUpperCase() + _name.slice(1);
      var _nameLowerCased = _name.toLowerCase();

      this.wrapper.template('component.ts', _known_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.ts', { name: _firstLetterUppercased });
      this.wrapper.template('component.html', _known_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', { name: _name });
      this.wrapper.template('component_test.ts', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.ts', { name: _firstLetterUppercased, nameLowerCase: _nameLowerCased });
    }
  }]);

  return ComponentSubGenerator;
})();

exports.ComponentSubGenerator = ComponentSubGenerator;