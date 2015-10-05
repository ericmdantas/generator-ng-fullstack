'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var filterGenerator = function(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(filterGenerator,  yeoman.generators.NamedBase);

filterGenerator.prototype.initializing = function() {
  this.argument('name',
    {
      required: true,
      type: String,
      desc: 'filter'
    });
};

filterGenerator.prototype.writing = function() {
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('filter.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/filters/' + this.name + '.filter.js', {name: _name});
  this.template('filter_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/filters/' + this.name + '.filter_test.js', {name: _name});
}

module.exports = filterGenerator;
