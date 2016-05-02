"use strict";

const chalk = require('chalk');
const yosay = require('yosay');
const NodeFactory = require('../server/node').NodeFactory;
const AngularFactory = require('../client/angular').AngularFactory;
const ClientFactory = require('../client/client_factory').ClientFactory;
const ServerFactory = require('../server/server_factory').ServerFactory;

exports.MainGenerator = class MainGenerator {
  constructor(gen) {
    this.wrapper = gen;
  }

  sayHello() {
    this.wrapper.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));
  }

  writing() {
      let _app = {app: this.wrapper.appName};
      let _username = {username: this.wrapper.githubUsername};
      let _appAndUsername = {app: _app.app, username: _username.username};
      let _server = this.wrapper.server;
      let _transpilerServer = this.wrapper.transpilerServer;
      let _client = this.wrapper.client;
      let _copiesServer = (this.wrapper.stack === "fullstack") || (this.wrapper.stack === "server");
      let _copiesClient = (this.wrapper.stack === "fullstack") || (this.wrapper.stack === "client");
      let _clientOnly = this.wrapper.stack === "client";
      let _secure = this.wrapper.secure;
      let _usesTypescript = (_transpilerServer === "typescript") || (_client === "ng2");

      this.wrapper.template('_README.md', 'README.md', _appAndUsername);
      this.wrapper.template('_package.json', 'package.json', {app: _app.app, username: _username.username, client: _client, clientOnly: _clientOnly});

      this.wrapper.template('_gulpfile.babel.js', 'gulpfile.babel.js', _app);
      this.wrapper.template('_karma.conf.js', 'karma.conf.js', _app);
      this.wrapper.template('_protractor.conf.js', 'protractor.conf.js', _app);
      this.wrapper.template('_newrelic.js', 'newrelic.js', _app);
      this.wrapper.template('_procfile.txt', 'procfile.txt', _app);

      this.wrapper.template('_.bowerrc', '.bowerrc');
      this.wrapper.template('_.travis.yml', '.travis.yml', {typescript: _usesTypescript});
      this.wrapper.template('_.gitignore', '.gitignore');
      this.wrapper.template('_.editorconfig', '.editorconfig');
      this.wrapper.template('_.jshintrc','.jshintrc');
      this.wrapper.template('_.babelrc', '.babelrc');

      this.wrapper.template('tasks/index.js', 'tasks/index.js', {nodeServer: _server === ServerFactory.tokens().NODE && !_clientOnly});
      this.wrapper.template('tasks/default.js', 'tasks/default.js');

      this.wrapper.directory('tests/e2e', 'tests/e2e');

      if (_clientOnly) {
        this.wrapper.template('_.alivrc', '.alivrc', {secure: !!_secure});
      }

      if (_secure && !_clientOnly) {
        this.wrapper.directory('cert', 'server/cert');
      }

      if (_copiesClient) {
        if (_client !== AngularFactory.tokens().NG2) {
          this.wrapper.template('_bower.json', 'bower.json', _appAndUsername);
        }

        ClientFactory.create('angular', _client, this.wrapper).copyClient();
      }

      if (_copiesServer) {
        ServerFactory.create(_server, this.wrapper).copyForMainGenerator();
      }
  }

  install() {
      this.wrapper.installDependencies({
        skipInstall: this.wrapper.options['skip-install'],
        npm: true,
        bower: this.wrapper.client !== AngularFactory.tokens().NG2
      });
  }

  promptUser() {
      const done = this.wrapper.async();

      let prompts =[
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
            name: "stack",
            message: "What stack do you want? Full, client or server?",
            choices: ["fullstack", "client", "server"],
            default: 0
          }
        ]

      this.wrapper.prompt(prompts, (props) => {
        this.wrapper.appName = props.appName;
        this.wrapper.githubUsername = props.githubUsername;
        this.wrapper.stack = props.stack;

        this.wrapper.config.set('username', this.wrapper.githubUsername);
        this.wrapper.config.set('appName', this.wrapper.appName);
        this.wrapper.config.set('stack', this.wrapper.stack);

        done();
      });

      this.wrapper.config.save();
  }

  promptServer() {
    const done = this.wrapper.async();

    let prompts = [
      {
        type: "list",
        name: "server",
        message: "What do you want in server side?",
        choices: [ServerFactory.tokens().NODE, ServerFactory.tokens().GO],
        when: () => {
          let _isServer = this.wrapper.stack === "server";
          let _isFullstack = this.wrapper.stack === "fullstack";

          return _isServer || _isFullstack;
        },
        default: 0
      }
    ]

    this.wrapper.prompt(prompts, (props) => {
      this.wrapper.server = props.server;
      this.wrapper.config.set('server', this.wrapper.server ? this.wrapper.server.toLowerCase() : '');

      done();
    });

    this.wrapper.config.save();
  }

  promptClient() {
    const done = this.wrapper.async();

    let prompts = [
      {
        type: "list",
        name: "client",
        message: "What do you want in client side?",
        choices: [AngularFactory.tokens().NG1, AngularFactory.tokens().NG2],
        when: () => {
          let _isClient = this.wrapper.stack === "client";
          let _isFullstack = this.wrapper.stack === "fullstack";

          return _isClient || _isFullstack;
        },
        default: 0
      }
    ]

    this.wrapper.prompt(prompts, (props) => {
      this.wrapper.client = props.client;
      this.wrapper.config.set('client', this.wrapper.client ? this.wrapper.client.toLowerCase() : '');

      done();
    });

    this.wrapper.config.save();
  }

  promptTranspilerServer() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: "list",
      name: "transpilerServer",
      message: "What transpiler do you want to use in server side?",
      choices: [NodeFactory.tokens().NODE, NodeFactory.tokens().NODE_BABEL, NodeFactory.tokens().NODE_TYPESCRIPT],
      default: 0,
      when: () => this.wrapper.server === ServerFactory.tokens().NODE
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.transpilerServer = props.transpilerServer;
      this.wrapper.config.set('transpilerServer', this.wrapper.transpilerServer);

      done();
    });

    this.wrapper.config.save();
  }

  promptSecure() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: 'confirm',
      name: 'secure',
      message: 'Do you want a secure app (http/2)?',
      default: true
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.secure = props.secure;
      this.wrapper.config.set('secure', this.wrapper.secure);

      done();
    });
  }

  promptDifferentStaticServer() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: 'confirm',
      name: 'differentStaticServer',
      message: 'Do you want to use a different static server? Such as nginx, apache, IIS?',
      default: false,
      when: () => (this.wrapper.stack === "fullstack") || (this.wrapper.stack === "server")
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.differentStaticServer = props.differentStaticServer;
      this.wrapper.config.set('differentStaticServer', this.wrapper.differentStaticServer);

      done();
    });
  }
}
