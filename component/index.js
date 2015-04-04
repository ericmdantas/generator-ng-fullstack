'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');

var ComponentGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ComponentGenerator,  yeoman.generators.NamedBase);

ComponentGenerator.prototype.initializing = function()
{
  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'component'
  });
};

ComponentGenerator.prototype.writing = function()
{
  var _name = this.name;

  this.template('component.js', knownPaths.PATH_CLIENT_FEATURES + '/components/' + _name + '/' + _name + '.js', {name: _name});
  this.template('component.html', knownPaths.PATH_CLIENT_FEATURES + '/components/' + _name + '/' + _name + '.html', {name: _name});
  this.template('component_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.js', {name: _name, nameLowerCase: _name.toLowerCase()});
}

module.exports = ComponentGenerator;
