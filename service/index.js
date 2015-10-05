'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var ServiceGenerator = function(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ServiceGenerator,  yeoman.generators.NamedBase);

ServiceGenerator.prototype.initializing = function() {
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'service'
  });
};

ServiceGenerator.prototype.writing = function() {
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('service.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/services/' + this.name + '.service.js', {name: _name});
  this.template('service_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/services/' + this.name + '.service_test.js', {name: _name});
}

module.exports = ServiceGenerator;
