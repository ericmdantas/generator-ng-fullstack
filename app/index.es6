'use strict';

import yeoman from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';

export default class NgFullstack extends yeoman.generators.Base
{
    constructor(args, options, config)
    {
        super(args, options, config);
        //yeoman.generators.Base.apply(this, arguments);
    }

    initializing()
    {
      this.pkg = require('../package.json');
    }

    prompting()
    {
      this.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));
    }

    writing()
    {
      var _app = {app: this.appName};
      var _username = {username: this.githubUsername};
      var _appAndUsername = {app: _app.app, username: _username.username};
      var _server = this.server;

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
      this.directory('tests', 'tests');

      switch(_server) {
        case "io.js": this.directory('server_io.js', 'server');
          this.template('index.js', 'index.js');
          break;

        case "Go": this.directory('server_go', 'server');
          break;
      }
    }

    install()
    {
      var _installOpts = {skipInstall: this.options['skip-install']};

      this.installDependencies(_installOpts);
    }

    prompUser()
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
          },
          {
            type: "list",
            name: "server",
            message: "What do you want in server side?",
            choices: ["io.js", "Go"],
            default: 0
          }
        ];

      this.prompt(prompts, props =>
      {
        this.appName = props.appName;
        this.githubUsername = props.githubUsername;
        this.server = props.server;

        this.config.set('server', this.server.toLowerCase());
        this.config.set('username', this.githubUsername);
        this.config.set('appName', this.appName);

        done();

      });

      this.config.save();
    }
}
