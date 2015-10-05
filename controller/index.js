'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');
var optionsParser = require('../options-parser');

var ControllerGenerator = function(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ControllerGenerator,  yeoman.generators.NamedBase);

ControllerGenerator.prototype.initializing = function() {
  this.argument('name', {
    required: true,
    type: String,
    desc: 'controller_client'
  });
};

ControllerGenerator.prototype.writing = function() {
  var _feature = optionsParser.getFeature(this.options);
  var _name = this.name;

  if (!_feature.length)
    throw new Error('Feature is needed. Do it like this: --feature something-here');

  this.template('controller_client.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/controllers/' + _name + '.controller.js', {name: _name});
  this.template('controller_client_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/controllers/' + _name + '.controller_test.js', {name: _name, nameLowerCase: _name.toLowerCase()});
}

module.exports = ControllerGenerator;
