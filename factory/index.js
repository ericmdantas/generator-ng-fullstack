'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');
var utils = require('../utils');

var FactoryGenerator = function(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(FactoryGenerator,  yeoman.generators.NamedBase);

FactoryGenerator.prototype.initializing = function() {
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'factory'
  });
};

FactoryGenerator.prototype.writing = function() {
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('factory.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/factory/' + _name + '.factory.js', {name: utils.capitalizeFirst(_name)});
  this.template('factory_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/factory/' + _name + '.factory_test.js', {name: utils.capitalizeFirst(_name)});
}

module.exports = FactoryGenerator;
