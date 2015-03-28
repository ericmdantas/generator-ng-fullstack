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
    desc: 'service'
  });
};

ControllerGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.fs.copy(this.templatePath('service.js'), this.destinationPath(knownPaths.PATH_CLIENT_FEATURES + _feature + '/service/' + this.name + '.service.js'));
  this.fs.copy(this.templatePath('service_test.js'), this.destinationPath(knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/service/' + this.name + '.service_test.js'));
}

module.exports = ControllerGenerator;
