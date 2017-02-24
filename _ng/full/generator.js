"use strict";

const chalk = require('chalk');
const yosay = require('yosay');
const {NodeFactory} = require('../server/node_factory');
const {GoFactory} = require('../server/go_factory');
const {AngularFactory} = require('../client/angular');
const {AureliaFactory} = require('../client/aurelia');
const {VueFactory} = require('../client/vue');
const {ClientFactory} = require('../client/client_factory');
const {ServerFactory} = require('../server/server_factory');

exports.MainGenerator = class MainGenerator {
  constructor(gen) {
    this.generator = gen;
  }

  sayHello() {
    this.generator.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));
  }

  writing() {
      let _app = {app: this.generator.appName};
      let _user = {
        username: this.generator.username,
        userEmail: this.generator.userEmail,
        userNameSpace: this.generator.userNameSpace
      };
      let _repoHostUrl = {repoHostUrl: this.generator.repoHostUrl};
      let _server = this.generator.server;
      let _testsSeparated = this.generator.testsSeparated;
      let _transpilerServer = this.generator.transpilerServer;
      let _client = this.generator.client;
      let _copiesServer = (this.generator.stack === "fullstack") || (this.generator.stack === "server");
      let _copiesClient = (this.generator.stack === "fullstack") || (this.generator.stack === "client");
      let _clientOnly = this.generator.stack === "client";
      let _serverOnly = this.generator.stack === "server";
      let _secure = this.generator.secure;
      let _usesTypescript = (_transpilerServer === "typescript") || (_client === "ng2");
      let _stylePreprocessor = this.generator.stylePreprocessor;
      let _builderClient = this.generator.builderClient;

      this.generator.template('_README.md', 'README.md', {
        app: _app.app,
        userNameSpace: _user.userNameSpace
      });

      this.generator.template('_protractor.conf.js', 'protractor.conf.js', this.generator.appName);

      this.generator.template('_package.json', 'package.json', {
        app: _app.app,
        username: _user.username,
        repoHostUrl: _repoHostUrl.repoHostUrl,
        userNameSpace: _user.userNameSpace,
        usesTypescript: _usesTypescript,
        client: _client,
        secure: _secure,
        clientOnly: _clientOnly,
        nodeWebFrameworkServer: this.generator.nodeWebFrameworkServer,
        testsSeparated: _testsSeparated,
        stylePreprocessor: _stylePreprocessor,
        server: _server,
        builderClient: _builderClient
      });

      this.generator.template('_gulpfile.babel.js', 'gulpfile.babel.js', _app);
      this.generator.template('_newrelic.js', 'newrelic.js', _app);
      this.generator.template('_procfile.txt', 'procfile.txt', _app);
      this.generator.template('_.bowerrc', '.bowerrc');
      this.generator.template('_.travis.yml', '.travis.yml', {
        typescript: _usesTypescript
      });
      this.generator.template('_.gitignore', '.gitignore');
      this.generator.template('_.editorconfig', '.editorconfig');
      this.generator.template('_.jshintrc','.jshintrc');
      this.generator.template('_.babelrc', '.babelrc');
      this.generator.template('tasks/index.js', 'tasks/index.js', {
        nodeServer: _server === ServerFactory.tokens().NODE && !_clientOnly,
        serverOnly: _serverOnly
      });

      this.generator.directory('tests/e2e', 'tests/e2e');

      if (!_serverOnly) {
        this.generator.template('_.alivrc', '.alivrc', {
          secure: _secure
        });
      }

      if (_secure && !_clientOnly) {
        this.generator.directory('cert', 'server/cert');
      }

      if (_copiesClient) {
        if (_client === AngularFactory.tokens().NG1) {
          this.generator.template('_bower.json', 'bower.json', {
            app: _app.app,
            username: _user.username,
            userEmail: _user.userEmail,
            repoHostUrl: _repoHostUrl.repoHostUrl,
            userNameSpace: _user.userNameSpace
          });
        }

        if (/^ng/.test(_client)) {
          ClientFactory.create(ClientFactory.tokens().ANGULAR, _client, this.generator).copyClient();
        }

        if (/^vue/.test(_client)) {
          ClientFactory.create(ClientFactory.tokens().VUE, _client, this.generator).copyClient();
        }

        if (/^aurelia/.test(_client)) {
          ClientFactory.create(ClientFactory.tokens().AURELIA, _client, this.generator).copyClient();
        }
      }

      if (_copiesServer) {
        ServerFactory.create(_server, this.generator).copyServer();
      }
  }

  install() {
      this.generator.installDependencies({
        skipInstall: this.generator.options['skip-install'],
        npm: true,
        bower: this.generator.client === AngularFactory.tokens().NG1
      });
  }

  promptUser() {
      const done = this.generator.async();

      let prompts =[
          {
            name: 'appName',
            message: 'What is the name of your app?',
            default: 'ng-fullstack-app'
          },
          {
            name: 'username',
            message: 'What is your username?',
            default: 'user.name'
          },
          {
            name: 'userEmail',
            message: 'What is your email (used in your package.json)?',
            default: 'user.email@example.com'
          },
          {
            type: "list",
            name: "stack",
            message: "Which stack do you want?",
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
            message: 'What is your GitLab URL/GitLab Server IP/GitLab Server FQDN?',
            default: "gitlab.com",
            when: (answersHash) => {
              return answersHash.repoHost === "gitlab";
            }
          },
          {
            name: 'userNameSpace',
            message: 'What is your GitLab NameSpace?',
            default: "namespace",
            when: (answersHash) => {
              return answersHash.repoHost === "gitlab";
            }
          }
        ];

      this.generator.prompt(prompts, (props) => {
        this.generator.appName = props.appName;
        this.generator.username = props.username;
        this.generator.userEmail = props.userEmail;
        this.generator.stack = props.stack;

        if (props.repoHost === "github") {
          this.generator.repoHostUrl = "github.com";
          this.generator.userNameSpace = props.username;
        } else if (props.repoHost === "bitbucket") {
          this.generator.repoHostUrl = "bitbucket.org";
          this.generator.userNameSpace = props.username;
        } else {
          this.generator.repoHostUrl = props.repoHostUrl;
          this.generator.userNameSpace = props.userNameSpace;
        }

        this.generator.config.set('appName', this.generator.appName);
        this.generator.config.set('username', this.generator.username);
        this.generator.config.set('userEmail', this.generator.userEmail);
        this.generator.config.set('stack', this.generator.stack);
        this.generator.config.set('repoHostUrl', this.generator.repoHostUrl);
        this.generator.config.set('userNameSpace', this.generator.userNameSpace);

        done();
      });

      this.generator.config.save();
  }

  promptTests() {
    const done = this.generator.async();

    let prompts = [
      {
        type: "confirm",
        name: "testsSeparated",
        message: "Do you want to keep tests in a different folder?",
        default: true,
        when: () => {
          return !((this.generator.server === ServerFactory.tokens().GO) && (this.generator.stack === "server"));
        }
      }
    ];

    this.generator.prompt(prompts, (props) => {
      this.generator.testsSeparated = props.testsSeparated;
      this.generator.config.set('testsSeparated', this.generator.testsSeparated);

      done();
    });

    this.generator.config.save();
  }

  promptServer() {
    const done = this.generator.async();

    let prompts = [
      {
        type: "list",
        name: "server",
        message: "What language do you want in the server side?",
        choices: [
          ServerFactory.tokens().NODE,
          ServerFactory.tokens().GO
        ],
        when: () => {
          let _isServer = this.generator.stack === "server";
          let _isFullstack = this.generator.stack === "fullstack";

          return _isServer || _isFullstack;
        },
        default: 0
      }
    ];

    this.generator.prompt(prompts, (props) => {
      this.generator.server = props.server;
      this.generator.config.set('server', this.generator.server ? this.generator.server.toLowerCase() : '');

      done();
    });

    this.generator.config.save();
  }

  promptClient() {
    const done = this.generator.async();

    let prompts = [
      {
        type: "list",
        name: "client",
        message: "Which framework do you want to use in the client side?",
        choices: [
          AngularFactory.tokens().NG1,
          AngularFactory.tokens().NG2,
          AureliaFactory.tokens().AURELIA1,
          VueFactory.tokens().VUE2
        ],
        when: () => {
          let _isClient = this.generator.stack === "client";
          let _isFullstack = this.generator.stack === "fullstack";

          return _isClient || _isFullstack;
        },
        default: 0
      }
    ];

    this.generator.prompt(prompts, (props) => {
      this.generator.client = props.client;
      this.generator.config.set('client', this.generator.client ? this.generator.client.toLowerCase() : '');

      done();
    });

    this.generator.config.save();
  }

  promptStylePreprocessor() {
    const done = this.generator.async();

    let prompts = [
      {
        type: "list",
        name: "stylePreprocessor",
        message: "Which CSS pre-processor do you want to use?",
        choices: [
          "none",
          "less",
          "sass"
        ],
        when: () => {
          return this.generator.stack !== "server";
        },
        default: 0
      }
    ];

    this.generator.prompt(prompts, (props) => {
      this.generator.stylePreprocessor = props.stylePreprocessor;
      this.generator.config.set('stylePreprocessor', this.generator.stylePreprocessor);

      done();
    });

    this.generator.config.save();
  }

  promptNodeWebFrameworkServer() {
    const done = this.generator.async();

    let _prompts = [{
      type: "list",
      name: "nodeWebFrameworkServer",
      message: "Which framework do you want to use in server side?",
      choices: [
        NodeFactory.tokensWebFramework().EXPRESS,
        NodeFactory.tokensWebFramework().KOA
      ],
      default: 0,
      when: () => {
        return this.generator.server === ServerFactory.tokens().NODE;
      }
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.nodeWebFrameworkServer = props.nodeWebFrameworkServer;
      this.generator.config.set('nodeWebFrameworkServer', this.generator.nodeWebFrameworkServer);

      done();
    });

    this.generator.config.save();
  }

  promptGoWebFrameworkServer() {
    const done = this.generator.async();

    let _prompts = [{
      type: "list",
      name: "goWebFrameworkServer",
      message: "Which framework do you want to use in server side?",
      choices: [
        GoFactory.tokensWebFramework().ECHO,
        GoFactory.tokensWebFramework().GIN
      ],
      default: 0,
      when: () => {
        return this.generator.server === ServerFactory.tokens().GO;
      }
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.goWebFrameworkServer = props.goWebFrameworkServer;
      this.generator.config.set('goWebFrameworkServer', this.generator.goWebFrameworkServer);

      done();
    });

    this.generator.config.save();
  }

  promptTranspilerServer() {
    const done = this.generator.async();

    let _prompts = [{
      type: "list",
      name: "transpilerServer",
      message: "Which transpiler do you want to use in server side?",
      choices: [
        NodeFactory.tokensCompiler().NODE,
        NodeFactory.tokensCompiler().BABEL,
        NodeFactory.tokensCompiler().TYPESCRIPT
      ],
      default: 0,
      when: () => {
        return this.generator.server === ServerFactory.tokens().NODE;
      }
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.transpilerServer = props.transpilerServer;
      this.generator.config.set('transpilerServer', this.generator.transpilerServer);

      done();
    });

    this.generator.config.save();
  }

  promptSecure() {
    const done = this.generator.async();

    let _prompts = [{
      type: 'confirm',
      name: 'secure',
      message: 'Is it going to be a secure app (HTTP/2)?',
      default: true
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.secure = props.secure;
      this.generator.config.set('secure', this.generator.secure);

      done();
    });
  }

  promptDifferentStaticServer() {
    const done = this.generator.async();

    let _prompts = [{
      type: 'confirm',
      name: 'differentStaticServer',
      message: 'Do you want to use a different static server? Such as NGINX, Apache, IIS, etc?',
      default: false,
      when: () => {
        return this.generator.stack === "fullstack";
      }
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.differentStaticServer = props.differentStaticServer;
      this.generator.config.set('differentStaticServer', this.generator.differentStaticServer);

      done();
    });
  }

  promptCordova() {
    const done = this.generator.async();

    let _prompts = [{
      type: 'confirm',
      name: 'cordova',
      message: 'Are you using Cordova?',
      default: false,
      when: () => {
        return (this.generator.stack === "client") && (this.generator.client === "ng1");
      }
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.cordova = props.cordova;
      this.generator.config.set('cordova', this.generator.cordova);

      done();
    });
  }

  promptBoilerplate() {
    const done = this.generator.async();

    let _prompts = [{
      type: 'confirm',
      name: 'boilerplate',
      message: 'Do you want the TODO boilerplate?',
      default: true
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.boilerplate = props.boilerplate;
      this.generator.config.set('boilerplate', this.generator.boilerplate);

      done();
    });
  }

  promptBuilderClient() {
    const done = this.generator.async();

    let _prompts = [{
      type: 'list',
      name: 'builderClient',
      message: 'Which builder do you want to use?',
      choices: [
        "gulp",
        "webpack"
      ],
      default: 0
    }];

    this.generator.prompt(_prompts, (props) => {
      this.generator.builderClient = props.builderClient;
      this.generator.config.set('builderClient', this.generator.builderClient);

      done();
    });
  }
};
