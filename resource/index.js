'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var ResourceGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ResourceGenerator,  yeoman.generators.NamedBase);

ResourceGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'resource'
  });
};

ResourceGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('resource.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/resource/' + _name + '.resource.js', {name: _name});
}

module.exports = ResourceGenerator;
