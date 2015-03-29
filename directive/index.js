'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var DirectiveGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(DirectiveGenerator,  yeoman.generators.NamedBase);

DirectiveGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'directive'
  });
};

DirectiveGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('directive.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/directives/' + _name + '.directive.js', {name: _name});
  this.template('directive_test.js',knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/directives/' + _name + '.directive_test.js', {name: _name});
}

module.exports = DirectiveGenerator;
