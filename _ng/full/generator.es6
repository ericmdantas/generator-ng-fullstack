import _ from 'lodash';
import chalk from 'chalk';
import yosay from 'yosay';
import {NodeFactory, NodeStandard, NodeBabel, NodeTypescript} from '../server/node';
import {GeneratorConfig} from './generator_config';
import {GoFactory} from '../server/go';
import {AngularFactory} from '../client/angular';
import {ClientFactory} from '../client/client_factory';
import {ServerFactory} from '../server/server_factory';

export class MainGenerator {
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

      this.wrapper.template('_package.json', 'package.json', _appAndUsername);
      this.wrapper.template('_bower.json', 'bower.json', _appAndUsername);
      this.wrapper.template('_README.md', 'README.md', _appAndUsername);

      this.wrapper.template('_gulpfile.babel.js', 'gulpfile.babel.js', _app);
      this.wrapper.template('_karma.conf.js', 'karma.conf.js', _app);
      this.wrapper.template('_protractor.conf.js', 'protractor.conf.js', _app);
      this.wrapper.template('_newrelic.js', 'newrelic.js', _app);
      this.wrapper.template('_procfile.txt', 'procfile.txt', _app);

      this.wrapper.template('_.bowerrc', '.bowerrc');
      this.wrapper.template('_.travis.yml', '.travis.yml');
      this.wrapper.template('_.gitignore', '.gitignore');
      this.wrapper.template('_.editorconfig', '.editorconfig');
      this.wrapper.template('_.jshintrc','.jshintrc');

      this.wrapper.template('tasks/index.js', 'tasks/index.js');
      this.wrapper.template('tasks/default.js', 'tasks/default.js');

      this.wrapper.directory('tests/e2e', 'tests/e2e');

      if (_copiesClient) {
        ClientFactory.create('angular', _client, this.wrapper).copyClient();
      }

      if (_copiesServer) {
        ServerFactory.create(_server, this.wrapper).copyForMainGenerator();
      }
  }

  install() {
      this.wrapper.installDependencies({skipInstall: this.wrapper.options['skip-install']});
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
        choices: ["node", "go"],
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
        choices: [AngularFactory.tokens.NG1, AngularFactory.tokens.NG2],
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
      choices: [NodeFactory.tokens.NODE, NodeFactory.tokens.NODE_BABEL, NodeFactory.tokens.NODE_TYPESCRIPT],
      default: 0,
      when: () => this.wrapper.server === "node"
    }];

    this.wrapper.prompt(_prompts, (props) => {
      this.wrapper.transpilerServer = props.transpilerServer;

      this.wrapper.config.set('transpilerServer', this.wrapper.transpilerServer);

      done();
    });

    this.wrapper.config.save();
  }
}
