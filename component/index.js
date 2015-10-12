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

var ComponentGenerator = (function (_yeoman$generators$Base) {
  _inherits(ComponentGenerator, _yeoman$generators$Base);

  function ComponentGenerator(args, options, config) {
    _classCallCheck(this, ComponentGenerator);

    _get(Object.getPrototypeOf(ComponentGenerator.prototype), 'constructor', this).call(this, args, options, config);
  }

  _createClass(ComponentGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'component'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _name = this.name;
      var _firstLetterUppercased = _name.charAt(0).toUpperCase() + _name.slice(1);
      var _nameLowerCased = _name.toLowerCase();

      this.template('component.ts', _ngKnown_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.ts', { name: _firstLetterUppercased });
      this.template('component.html', _ngKnown_paths2['default'].PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', { name: _name });
      this.template('component_test.ts', _ngKnown_paths2['default'].PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.ts', { name: _firstLetterUppercased, nameLowerCase: _nameLowerCased });
    }
  }]);

  return ComponentGenerator;
})(_yeomanGenerator2['default'].generators.Base);

exports['default'] = ComponentGenerator;
module.exports = exports['default'];