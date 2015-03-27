'use strict';

var yeoman = require('yeoman-generator');
var util = require('util');

var ControllerGenerator = function(args, options, config)
{
    yeoman.generators.Base.apply(this, arguments);
}

util.inherits(ControllerGenerator,  yeoman.generators.NamedBase);

ControllerGenerator.prototype.initializing = function()
{
  this.log('You called the NgFullstack subgenerator with the argument ' + this.name + '.');

  this.argument('name',
  {
    required: true,
    type: String,
    desc: 'controller_client'
  });
}

ControllerGenerator.prototype.writing = function()
{
  this.fs.copy(this.templatePath('somefile.js'), this.destinationPath(this.name + '.js'));
}

module.exports = ControllerGenerator;
