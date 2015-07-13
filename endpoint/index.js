'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var _copyNodeJS = function(feature, name, transpiler)
{
  switch (transpiler) {
    case "typescript": {
      this.template('node/typescript/endpoint.route.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.controller.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.dao.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.ts', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/typescript/endpoint.model.ts', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.ts', {name: name, nameLowerCase: name.toLowerCase()});

      this.template('node/typescript/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.ts', {name: name, nameLowerCase: name.toLowerCase(), feature: feature});

      break;
    }

    default: {
      this.template('node/babel/endpoint.route.js', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + '.route.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.controller.js', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + '.controller.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.dao.js', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + '.dao.js', {name: name, nameLowerCase: name.toLowerCase()});
      this.template('node/babel/endpoint.model.js', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + '.model.js', {name: name, nameLowerCase: name.toLowerCase()});

      this.template('node/babel/endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + feature + '/dao/' + name + '.dao_test.js', {name: name, nameLowerCase: name.toLowerCase(), feature: feature});
    }
  }
}

var _copyGo = function(feature, name, username, appName)
{
  var _featureWithoutTrailingSlash = feature.replace('/', '');

  this.template('go/endpoint.route.go', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.controller.go', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.dao.go', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});
  this.template('go/endpoint.model.go', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + 'model.go', {name: name, nameLowerCase: name.toLowerCase(), username: username, appName: appName, feature: _featureWithoutTrailingSlash});

  this.template('go/endpoint.dao_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/dao/' + name + 'dao_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.model_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/model/' + name + 'model_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.controller_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/controller/' + name + 'controller_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
  this.template('go/endpoint.route_test.go', knownPaths.PATH_SERVER_FEATURES + feature + '/routes/' + name + 'route_test.go', {name: name, nameLowerCase: name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: username, appName: appName});
}

var EndpointGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(EndpointGenerator,  yeoman.generators.NamedBase);

EndpointGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'endpoint'
  });
};

EndpointGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;
  var _username = this.config.get('username');
  var _appName = this.config.get('appName');
  var _server = this.config.get('server') ?  this.config.get('server').toLowerCase() : undefined;
  var _transpilerServer = this.config.get('transpilerServer') ? this.config.get('transpilerServer').toLowerCase() : undefined;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  switch (_server) {
    case "go" : _copyGo.call(this, _feature, _name, _username, _appName); break;
    default: _copyNodeJS.call(this, _feature, _name, _transpilerServer); break;
  }
}

module.exports = EndpointGenerator;
