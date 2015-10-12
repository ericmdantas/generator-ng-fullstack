'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _ngKnown_paths = require('../_ng/known_paths');

var _ngKnown_paths2 = _interopRequireDefault(_ngKnown_paths);

var _ngOptions_parser = require('../_ng/options_parser');

var _ngOptions_parser2 = _interopRequireDefault(_ngOptions_parser);

var ControllerGenerator = (function (_yeoman$generators$Base) {
  _inherits(ControllerGenerator, _yeoman$generators$Base);

  function ControllerGenerator(args, options, config) {
    _classCallCheck(this, ControllerGenerator);

    _get(Object.getPrototypeOf(ControllerGenerator.prototype), 'constructor', this).call(this, args, options, config);
  }

  _createClass(ControllerGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _ngOptions_parser2['default'].getFeature(this.options);
      var _name = this.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.template('controller_client.js', _ngKnown_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/controllers/' + _name + '.controller.js', { name: _name });
      this.template('controller_client_test.js', _ngKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/controllers/' + _name + '.controller_test.js', { name: _name, nameLowerCase: _name.toLowerCase() });
    }
  }]);

  return ControllerGenerator;
})(_yeomanGenerator2['default'].generators.Base);

exports['default'] = ControllerGenerator;
module.exports = exports['default'];