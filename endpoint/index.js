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

var _copyNodeJS = function _copyNodeJS(feature, name, transpiler) {
  switch (transpiler) {
    case "typescript":
      {
        this.template('node/typescript/endpoint.route.ts', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.controller.ts', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.dao.ts', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.model.ts', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.ts', { name: name, nameLowerCase: name.toLowerCase() });

        this.template('node/typescript/endpoint.dao_test.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.ts', { name: name, nameLowerCase: name.toLowerCase(), feature: feature });

        break;
      }

    default:
      {
        this.template('node/babel/endpoint.route.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.controller.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.dao.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.model.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.js', { name: name, nameLowerCase: name.toLowerCase() });

        this.template('node/babel/endpoint.dao_test.js', _ngKnown_paths2['default'].PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.js', { name: name, nameLowerCase: name.toLowerCase(), feature: feature });
      }
  }
};

var _copyGo = function _copyGo(feature, name, username, appName) {
  var _featureWithoutTrailingSlash = feature.replace('/', '');

  this.template('go/endpoint.route.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.controller.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.dao.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.model.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + 'model.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });

  this.template('go/endpoint.dao_test.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.model_test.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + 'model_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.controller_test.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.route_test.go', _ngKnown_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
};

var EndpointGenerator = (function (_yeoman$generators$Base) {
  _inherits(EndpointGenerator, _yeoman$generators$Base);

  function EndpointGenerator(args, options, config) {
    _classCallCheck(this, EndpointGenerator);

    _get(Object.getPrototypeOf(EndpointGenerator.prototype), 'constructor', this).call(this, args, options, config);
  }

  _createClass(EndpointGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'endpoint'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _ngOptions_parser2['default'].getFeature(this.options);
      var _name = this.name;
      var _username = this.config.get('username');
      var _appName = this.config.get('appName');
      var _server = this.config.get('server') ? this.config.get('server').toLowerCase() : undefined;
      var _transpilerServer = this.config.get('transpilerServer') ? this.config.get('transpilerServer').toLowerCase() : undefined;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      switch (_server) {
        case "go":
          _copyGo.call(this, _feature, _name, _username, _appName);break;
        default:
          _copyNodeJS.call(this, _feature, _name, _transpilerServer);break;
      }
    }
  }]);

  return EndpointGenerator;
})(_yeomanGenerator2['default'].generators.Base);

exports['default'] = EndpointGenerator;
module.exports = exports['default'];