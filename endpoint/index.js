'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var ControllerGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ControllerGenerator,  yeoman.generators.NamedBase);

ControllerGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'endpoint'
  });
};

ControllerGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.fs.copy(this.templatePath('endpoint.route.js'), this.destinationPath(knownPaths.PATH_SERVER_FEATURES + _feature + '/route/' + this.name + '.route.js'));
  this.fs.copy(this.templatePath('endpoint.controller.js'), this.destinationPath(knownPaths.PATH_SERVER_FEATURES + _feature + '/controller/' + this.name + '.controller.js'));
  this.fs.copy(this.templatePath('endpoint.dao.js'), this.destinationPath(knownPaths.PATH_SERVER_FEATURES + _feature + '/dao/' + this.name + '.dao.js'));
  this.fs.copy(this.templatePath('endpoint.model.js'), this.destinationPath(knownPaths.PATH_SERVER_FEATURES + _feature + '/model/' + this.name + '.model.js'));

  this.fs.copy(this.templatePath('endpoint.dao_test.js'), this.destinationPath(knownPaths.PATH_SERVER_FEATURES_TEST + _feature + '/dao/' + this.name + '.dao_test.js'));
}

module.exports = ControllerGenerator;
