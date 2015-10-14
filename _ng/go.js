'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _known_paths = require('./known_paths');

var _known_paths2 = _interopRequireDefault(_known_paths);

var GoFactory = (function () {
  function GoFactory() {
    _classCallCheck(this, GoFactory);
  }

  _createClass(GoFactory, null, [{
    key: 'build',
    value: function build(generator) {
      return new GoServer(generator);
    }
  }]);

  return GoFactory;
})();

exports.GoFactory = GoFactory;

var GoServer = (function () {
  function GoServer(generator) {
    _classCallCheck(this, GoServer);

    this.wrapper = generator;
  }

  _createClass(GoServer, [{
    key: 'copyFiles',
    value: function copyFiles() {
      var _featureWithoutTrailingSlash = this.wrapper.feature.replace('/', '');

      this.wrapper.template('go/endpoint.route.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + 'route.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.controller.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + 'controller.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.dao.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + 'dao.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });
      this.wrapper.template('go/endpoint.model.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + 'model.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash });

      this.wrapper.template('go/endpoint.dao_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/dao/' + this.wrapper.name + 'dao_test.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.model_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/model/' + this.wrapper.name + 'model_test.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.controller_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/controller/' + this.wrapper.name + 'controller_test.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
      this.wrapper.template('go/endpoint.route_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + this.wrapper.feature + '/routes/' + this.wrapper.name + 'route_test.go', { name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName });
    }
  }]);

  return GoServer;
})();

exports.GoServer = GoServer;