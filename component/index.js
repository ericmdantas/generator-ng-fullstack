'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');
var knownPaths = require('../known-paths');

var ComponentGenerator = function (args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

ComponentGenerator.prototype.initializing = function () {
  this.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
};

ComponentGenerator.prototype.writing = function () {
  var _name = this.name;
  var _controllerName = _name.charAt(0).toUpperCase() + _name.slice(1) + 'Controller';
  var _controllerAsName = _name.toLowerCase();

  this.template('component.js', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.js', {name: _controllerName});
  this.template('component.html', knownPaths.PATH_CLIENT_FEATURES + '../components/' + _name + '/' + _name + '.html', {name: _controllerAsName});
  this.template('component.spec.js', knownPaths.PATH_CLIENT_FEATURES_TEST + '/components/' + _name + '/' + _name + 'spec.js', {
    name: _controllerName,
    nameLowerCase: _controllerAsName
  });
};

module.exports = ComponentGenerator;
