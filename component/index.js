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
  var _firstLetterUppercased = _name.charAt(0).toUpperCase() + _name.slice(1);
  var _nameLowerCased = _name.toLowerCase();

  this.template('component.js', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.js', {name: _firstLetterUppercased});
  this.template('component.html', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', {name: _name});
  this.template('component_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + '_test.js', {name: _firstLetterUppercased, nameLowerCase: _nameLowerCased});
}

module.exports = ComponentGenerator;
