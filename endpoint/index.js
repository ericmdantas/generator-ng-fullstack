'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

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
  var _name = this.name

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('endpoint.route.js', knownPaths.PATH_SERVER_FEATURES + _feature + '/route/' + _name + '.route.js', {name: _name, nameLowerCase: _name.toLowerCase()});
  this.template('endpoint.controller.js', knownPaths.PATH_SERVER_FEATURES + _feature + '/controller/' + _name + '.controller.js', {name: _name, nameLowerCase: _name.toLowerCase()});
  this.template('endpoint.dao.js', knownPaths.PATH_SERVER_FEATURES + _feature + '/dao/' + _name + '.dao.js', {name: _name, nameLowerCase: _name.toLowerCase()});
  this.template('endpoint.model.js', knownPaths.PATH_SERVER_FEATURES + _feature + '/model/' + _name + '.model.js', {name: _name, nameLowerCase: _name.toLowerCase()});

  this.template('endpoint.dao_test.js', knownPaths.PATH_SERVER_FEATURES_TEST + _feature + '/dao/' + _name + '.dao_test.js', {name: _name, nameLowerCase: _name.toLowerCase(), feature: _feature});
}

module.exports = EndpointGenerator;
