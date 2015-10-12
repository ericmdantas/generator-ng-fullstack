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

var ControllerSubGenerator = (function () {
  function ControllerSubGenerator(generator) {
    _classCallCheck(this, ControllerSubGenerator);

    this.wrapper = generator;
  }

  _createClass(ControllerSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('controller_client.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/controllers/' + _name + '.controller.js', { name: _name });
      this.wrapper.template('controller_client_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/controllers/' + _name + '.controller_test.js', { name: _name, nameLowerCase: _name.toLowerCase() });
    }
  }]);

  return ControllerSubGenerator;
})();

exports.ControllerSubGenerator = ControllerSubGenerator;

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

var DecoratorSubGenerator = (function () {
  function DecoratorSubGenerator(generator) {
    _classCallCheck(this, DecoratorSubGenerator);

    this.wrapper = generator;
  }

  _createClass(DecoratorSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'service'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('decorator.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/decorator/' + _name + '.decorator.js');
    }
  }]);

  return DecoratorSubGenerator;
})();

exports.DecoratorSubGenerator = DecoratorSubGenerator;

var DirectiveSubGenerator = (function () {
  function DirectiveSubGenerator(generator) {
    _classCallCheck(this, DirectiveSubGenerator);

    this.wrapper = generator;
  }

  _createClass(DirectiveSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'directive'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('directive.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/directives/' + _name + '.directive.js', { name: _name });
      this.wrapper.template('directive_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/directives/' + _name + '.directive_test.js', { name: _name });
    }
  }]);

  return DirectiveSubGenerator;
})();

exports.DirectiveSubGenerator = DirectiveSubGenerator;

var _copyNodeJS = function _copyNodeJS(feature, name, transpiler) {
  switch (transpiler) {
    case "typescript":
      {
        this.template('node/typescript/endpoint.route.ts', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.controller.ts', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.dao.ts', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.ts', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/typescript/endpoint.model.ts', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.ts', { name: name, nameLowerCase: name.toLowerCase() });

        this.template('node/typescript/endpoint.dao_test.js', _known_paths2['default'].PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.ts', { name: name, nameLowerCase: name.toLowerCase(), feature: feature });

        break;
      }

    default:
      {
        this.template('node/babel/endpoint.route.js', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.controller.js', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.dao.js', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.js', { name: name, nameLowerCase: name.toLowerCase() });
        this.template('node/babel/endpoint.model.js', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.js', { name: name, nameLowerCase: name.toLowerCase() });

        this.template('node/babel/endpoint.dao_test.js', _known_paths2['default'].PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.js', { name: name, nameLowerCase: name.toLowerCase(), feature: feature });
      }
  }
};

var _copyGo = function _copyGo(feature, name, username, appName) {
  var _featureWithoutTrailingSlash = feature.replace('/', '');

  this.template('go/endpoint.route.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.controller.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.dao.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });
  this.template('go/endpoint.model.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + 'model.go', { name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash });

  this.template('go/endpoint.dao_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.model_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/model/' + name + 'model_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.controller_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
  this.template('go/endpoint.route_test.go', _known_paths2['default'].PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route_test.go', { name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName });
};

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
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;
      var _username = this.wrapper.config.get('username');
      var _appName = this.wrapper.config.get('appName');
      var _server = this.wrapper.config.get('server') ? this.wrapper.config.get('server').toLowerCase() : undefined;
      var _transpilerServer = this.wrapper.config.get('transpilerServer') ? this.wrapper.config.get('transpilerServer').toLowerCase() : undefined;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      switch (_server) {
        case "go":
          _copyGo.call(this.wrapper, _feature, _name, _username, _appName);break;
        default:
          _copyNodeJS.call(this.wrapper, _feature, _name, _transpilerServer);break;
      }
    }
  }]);

  return EndpointSubGenerator;
})();

exports.EndpointSubGenerator = EndpointSubGenerator;

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
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('factory.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/factory/' + _name + '.factory.js', { name: _utils2['default'].capitalizeFirst(_name) });
      this.wrapper.template('factory_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/factory/' + _name + '.factory_test.js', { name: _utils2['default'].capitalizeFirst(_name) });
    }
  }]);

  return FactorySubGenerator;
})();

exports.FactorySubGenerator = FactorySubGenerator;

var FilterSubGenerator = (function () {
  function FilterSubGenerator(generator) {
    _classCallCheck(this, FilterSubGenerator);

    this.wrapper = generator;
  }

  _createClass(FilterSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'filter'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('filter.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/filters/' + _name + '.filter.js', { name: _name });
      this.wrapper.template('filter_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/filters/' + _name + '.filter_test.js', { name: _name });
    }
  }]);

  return FilterSubGenerator;
})();

exports.FilterSubGenerator = FilterSubGenerator;

var ResourceSubGenerator = (function () {
  function ResourceSubGenerator(generator) {
    _classCallCheck(this, ResourceSubGenerator);

    this.wrapper = generator;
  }

  _createClass(ResourceSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'resource'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('resource.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/resource/' + _name + '.resource.js', { name: _name });
    }
  }]);

  return ResourceSubGenerator;
})();

exports.ResourceSubGenerator = ResourceSubGenerator;

var ServiceSubGenerator = (function () {
  function ServiceSubGenerator(generator) {
    _classCallCheck(this, ServiceSubGenerator);

    this.wrapper = generator;
  }

  _createClass(ServiceSubGenerator, [{
    key: 'initializing',
    value: function initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'service'
      });
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _feature = _options_parser2['default'].getFeature(this.wrapper.options);
      var _name = this.wrapper.name;

      if (!_feature.length) throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.wrapper.template('service.js', _known_paths2['default'].PATH_CLIENT_FEATURES + _feature + '/services/' + _name + '.service.js', { name: _name });
      this.wrapper.template('service_test.js', _known_paths2['default'].PATH_CLIENT_FEATURES_TEST + _feature + '/services/' + _name + '.service_test.js', { name: _name });
    }
  }]);

  return ServiceSubGenerator;
})();

exports.ServiceSubGenerator = ServiceSubGenerator;