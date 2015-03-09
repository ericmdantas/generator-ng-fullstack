'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var NgFullstack = function(args, options, config)
{
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(NgFullstack, yeoman.generators.Base);

NgFullstack.prototype.initializing = function()
{
  this.pkg = require('../package.json');
}

NgFullstack.prototype.prompting = function()
{
  this.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));

}

NgFullstack.prototype.writing = function()
{
  var _app = {app: this.appName};
  var _username = {username: this.githubUsername};
  var _appAndUsername = {app: _app.app, username: _username.username};

  this.template('_package.json', 'package.json', _appAndUsername);
  this.template('_bower.json', 'bower.json', _appAndUsername);
  this.template('_README.md', 'README.md', _appAndUsername);

  this.template('_gulpfile.js', 'gulpfile.js', _app);
  this.template('_karma.conf.js', 'karma.conf.js', _app);
  this.template('_protractor.conf.js', 'protractor.conf.js', _app);

  this.template('_newrelic.js', 'newrelic.js', _app);

  this.template('_procfile.txt', 'procfile.txt', _app);

  this.fs.copy(this.templatePath('.bowerrc'), this.destinationPath('.bowerrc'));
  this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
  this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
  this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
  this.fs.copy(this.templatePath('jshintrc'),this.destinationPath('.jshintrc'));

  this.directory('client', 'client');
  this.directory('server', 'server');
  this.directory('tests', 'tests');
}

NgFullstack.prototype.install = function()
{
  var _installOpts = {skipInstall: this.options['skip-install']};

  this.installDependencies(_installOpts);
}

NgFullstack.prototype.prompUser = function()
{
  var done = this.async();

  var prompts =
  [
    {
      name: 'appName',
      message: 'What is the name of your app?',
      default: 'some-name-here'
    },
    {
      name: 'githubUsername',
      message: 'What is your username on Github?',
      default: 'some-username-here'
    }
  ];

  this.prompt(prompts, function(props)
  {
    this.appName = props.appName;
    this.githubUsername = props.githubUsername;

    done();

  }.bind(this));
}

module.exports = NgFullstack;
