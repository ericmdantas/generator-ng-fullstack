'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const util = require('util')

var NgFullstack = function() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(NgFullstack, yeoman.generators.Base)

NgFullstack.prototype.initializing = function() {
  this.pkg = require('../package.json');
}

NgFullstack.prototype.prompting = function() {
  this.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' asdadjkhadhadjhjsd generator!'));
}

NgFullstack.prototype.writing = function() {
  var _app = {app: this.appName};
  var _username = {username: this.githubUsername};
  var _appAndUsername = {app: _app.app, username: _username.username};
  var _server = this.server;
  var _jspm = this.jspm;

  this.template('_package.json', 'package.json', _appAndUsername);
  this.template('_bower.json', 'bower.json', _appAndUsername);
  this.template('_README.md', 'README.md', _appAndUsername);

  this.template('_gulpfile.js', 'gulpfile.js', _app);
  this.template('_karma.conf.js', 'karma.conf.js', _app);
  this.template('_protractor.conf.js', 'protractor.conf.js', _app);

  this.template('_newrelic.js', 'newrelic.js', _app);

  this.template('_procfile.txt', 'procfile.txt', _app);

  this.template('_.bowerrc', '.bowerrc');
  this.template('_.travis.yml', '.travis.yml');
  this.template('_.gitignore', '.gitignore');
  this.template('_.editorconfig', '.editorconfig');
  this.template('_.jshintrc','.jshintrc');

  this.directory('client', 'client');

  if (_jspm) {
    this.template('client_jspm/dev/config.js', 'client/dev/config.js');
    this.template('client_jspm/dev/index.js', 'client/dev/index.js');
    this.template('client_jspm/dev/index.html', 'client/dev/index.html');

    this.directory('client_jspm/dev/views', 'client/dev/views');
    this.directory('client_jspm/dev/js', 'client/dev/js');
  }

  switch(_server) {
    case "io.js": this.directory('server_io.js', 'server');
                  this.template('index.js', 'index.js');
                  break;

    case "Go": this.directory('server_go', 'server');
               this.template('server_go/main.go', 'server/main.go', {appName: _app.app, username: _username.username});
               this.template('server_go/routes/routes.go', 'server/routes/routes.go', {appName: _app.app, username: _username.username});
               break;
  }

  this.directory('tests', 'tests');
}

NgFullstack.prototype.install = function() {
  var _installOpts = {skipInstall: this.options['skip-install']};

  this.installDependencies(_installOpts);
}

NgFullstack.prototype.prompUser = function() {
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
      },
      {
        type: "list",
        name: "server",
        message: "What are you using in server side?",
        choices: ["io.js", "Go"],
        default: 0
      }/*,
      {
        type: "list",
        name: "transpilerServer",
        message: "What transpiler do you want to use in server side?",
        choices: ["Babel", "Typescript"],
        default: 1
      }*/
    ];

  this.prompt(prompts, function(props)
  {
    this.appName = props.appName;
    this.githubUsername = props.githubUsername;
    this.server = props.server;
    this.jspm = props.jspm;
    this.transpilerServer = props.transpilerServer;

    this.config.set('server', this.server);
    this.config.set('username', this.githubUsername);
    this.config.set('appName', this.appName);
    //this.config.set('jspm', this.jspm);
    //this.config.set('transpilerServer', this.transpilerServer);

    done();

  }.bind(this));

  this.config.save();
}

module.exports = NgFullstack;
