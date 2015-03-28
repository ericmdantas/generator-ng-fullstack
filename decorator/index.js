'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var DecoratorGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(DecoratorGenerator,  yeoman.generators.NamedBase);

DecoratorGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'service'
  });
};

DecoratorGenerator.prototype.writing = function()
{
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('decorator.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/decorator/' + _name + '.decorator.js');
}

module.exports = DecoratorGenerator;
