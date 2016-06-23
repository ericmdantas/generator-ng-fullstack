"use strict";

const chalk = require('chalk');
const yosay = require('yosay');
const NodeFactory = require('../server/node_factory').NodeFactory;
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
      let _user = {
        username: this.wrapper.username,
        userEmail: this.wrapper.userEmail,
        userNameSpace: this.wrapper.userNameSpace
      };
      let _repoHostUrl = {repoHostUrl: this.wrapper.repoHostUrl};
      let _server = this.wrapper.server;
      let _testsSeparated = this.wrapper.testsSeparated;
      let _transpilerServer = this.wrapper.transpilerServer;
      let _client = this.wrapper.client;
      let _copiesServer = (this.wrapper.stack === "fullstack") || (this.wrapper.stack === "server");
      let _copiesClient = (this.wrapper.stack === "fullstack") || (this.wrapper.stack === "client");
      let _clientOnly = this.wrapper.stack === "client";
      let _serverOnly = this.wrapper.stack === "server";
      let _secure = this.wrapper.secure;
      let _usesTypescript = (_transpilerServer === "typescript") || (_client === "ng2");

      this.wrapper.template('_README.md', 'README.md', {
        app: _app.app,
        userNameSpace: _user.userNameSpace
      });

      this.wrapper.template('_package.json', 'package.json', {
        app: _app.app,
        username: _user.username,
        repoHostUrl: _repoHostUrl.repoHostUrl,
        userNameSpace: _user.userNameSpace,
        usesTypescript: _usesTypescript,
        client: _client,
        clientOnly: _clientOnly,
        webFrameworkServer: this.wrapper.webFrameworkServer
      });

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

      this.wrapper.template('tasks/index.js', 'tasks/index.js', {
        nodeServer: _server === ServerFactory.tokens().NODE && !_clientOnly,
        serverOnly: _serverOnly
      });

      this.wrapper.directory('tests/e2e', 'tests/e2e');

      if (_clientOnly) {
        this.wrapper.template('_.alivrc', '.alivrc', {secure: !!_secure});
      }

      if (_secure && !_clientOnly) {
        this.wrapper.directory('cert', 'server/cert');
      }

      if (_copiesClient) {
        if (_client !== AngularFactory.tokens().NG2) {
          this.wrapper.template('_bower.json', 'bower.json', {
            app: _app.app,
            username: _user.username,
            userEmail: _user.userEmail,
            repoHostUrl: _repoHostUrl.repoHostUrl,
            userNameSpace: _user.userNameSpace
          });
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
            default: 'ng-fullstack'
          },
          {
            name: 'username',
            message: 'What is your username?',
            default: 'user.name'
          },
          {
            name: 'userEmail',
            message: 'What is your email?',
            default: 'user.email@example.com'
          },
          {
            type: "list",
            name: "stack",
            message: "What stack do you want?",
            choices: ["fullstack", "client", "server"],
            default: 0
          },
          {
            type: "list",
            name: "repoHost",
            message: "Which Git repository hosting service are you using?",
            choices: ["github", "bitbucket", "gitlab"],
            default: 0
          },
          {
            name: 'repoHostUrl',
            message: 'What is your GitLab URL?',
            when: (answersHash) => {
              return answersHash.repoHost === "gitlab";
            },
            default: "gitlab.com"
          },
          {
            name: 'userNameSpace',
            message: 'What is your GitLab NameSpace?',
            when: (answersHash) => {
              return answersHash.repoHost === "gitlab";
            },
            default: "namespace"
          }
        ]

      this.wrapper.prompt(prompts, (props) => {
        this.wrapper.appName = props.appName;
        this.wrapper.username = props.username;
        this.wrapper.userEmail = props.userEmail;
        this.wrapper.stack = props.stack;

        if (props.repoHost === "github") {
          this.wrapper.repoHostUrl = "github.com";
          this.wrapper.userNameSpace = props.username;
        } else if (props.repoHost === "bitbucket") {
          this.wrapper.repoHostUrl = "bitbucket.org";
          this.wrapper.userNameSpace = props.username;
        } else {
          this.wrapper.repoHostUrl = props.repoHostUrl;
          this.wrapper.userNameSpace = props.userNameSpace;
        }

        this.wrapper.config.set('appName', this.wrapper.appName);
        this.wrapper.config.set('username', this.wrapper.username);
        this.wrapper.config.set('userEmail', this.wrapper.userEmail);
        this.wrapper.config.set('stack', this.wrapper.stack);
        this.wrapper.config.set('repoHostUrl', this.wrapper.repoHostUrl);
        this.wrapper.config.set('userNameSpace', this.wrapper.userNameSpace);

        done();
      });

      this.wrapper.config.save();
  }

  promptTest() {
    const done = this.wrapper.async();

    let prompts = [
      {
        type: "confirm",
        name: "testsSeparated",
        message: "Do you want to keep test in separate directory?",
        default: true
      }
    ];

    this.wrapper.prompt(prompts, (props) => {
      this.wrapper.testsSeparated = props.testsSeparated;
      this.wrapper.config.set('testsSeparated', this.wrapper.testsSeparated);

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

  promptWebFrameworkServer() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: "list",
      name: "webFrameworkServer",
      message: "What framework do you want to use in server side?",
      choices: [NodeFactory.tokensWebFramework().EXPRESS, NodeFactory.tokensWebFramework().KOA],
      default: 0,
      when: () => this.wrapper.server === ServerFactory.tokens().NODE
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.webFrameworkServer = props.webFrameworkServer;
      this.wrapper.config.set('webFrameworkServer', this.wrapper.webFrameworkServer);

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
      choices: [NodeFactory.tokensCompiler().NODE, NodeFactory.tokensCompiler().BABEL, NodeFactory.tokensCompiler().TYPESCRIPT],
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
      when: () => this.wrapper.stack === "fullstack"
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.differentStaticServer = props.differentStaticServer;
      this.wrapper.config.set('differentStaticServer', this.wrapper.differentStaticServer);

      done();
    });
  }

  promptCordova() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: 'confirm',
      name: 'cordova',
      message: 'Are you using Cordova (for mobile development)?',
      default: false,
      when: () => (this.wrapper.stack === "client") && (this.wrapper.client === "ng1")
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.cordova = props.cordova;
      this.wrapper.config.set('cordova', this.wrapper.cordova);

      done();
    });
  }
}
