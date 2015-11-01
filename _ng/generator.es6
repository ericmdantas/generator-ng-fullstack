import _ from 'lodash';
import chalk from 'chalk';
import yosay from 'yosay';
import {NodeStandard, NodeBabel, NodeTypescript} from './node';
import {GeneratorConfig} from './generator_config';
import {NodeFactory} from './node';
import {GoFactory} from './go';

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

      this.wrapper.template('_package.json', 'package.json', _appAndUsername);
      this.wrapper.template('_bower.json', 'bower.json', _appAndUsername);
      this.wrapper.template('_README.md', 'README.md', _appAndUsername);

      this.wrapper.template('_gulpfile.js', 'gulpfile.js', _app);
      this.wrapper.template('_karma.conf.js', 'karma.conf.js', _app);
      this.wrapper.template('_protractor.conf.js', 'protractor.conf.js', _app);

      this.wrapper.template('_newrelic.js', 'newrelic.js', _app);

      this.wrapper.template('_procfile.txt', 'procfile.txt', _app);

      this.wrapper.template('_.bowerrc', '.bowerrc');
      this.wrapper.template('_.travis.yml', '.travis.yml');
      this.wrapper.template('_.gitignore', '.gitignore');
      this.wrapper.template('_.editorconfig', '.editorconfig');
      this.wrapper.template('_.jshintrc','.jshintrc');

      this.wrapper.directory('client', 'client');
      this.wrapper.directory('tests', 'tests');

      switch(_server) {
        case "node": return NodeFactory.build(this.wrapper).copyForMainGenerator();
        case "go": return GoFactory.build(this.wrapper).copyForMainGenerator();
      }
  }

  install() {
      this.wrapper.installDependencies({skipInstall: this.wrapper.options['skip-install']});
  }

  promptUser() {
      let done = this.wrapper.async();

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
            name: "server",
            message: "What do you want in server side?",
            choices: ["node", "go"],
            default: 0
          }
        ];

      this.wrapper.prompt(prompts, (props) => {
        this.wrapper.appName = props.appName;
        this.wrapper.githubUsername = props.githubUsername;
        this.wrapper.server = props.server;

        this.wrapper.config.set('server', this.wrapper.server.toLowerCase());
        this.wrapper.config.set('username', this.wrapper.githubUsername);
        this.wrapper.config.set('appName', this.wrapper.appName);

        done();
      });

      this.wrapper.config.save();
  }

  promptTranspilerServer() {
    let done = this.wrapper.async();

    let _prompts = [{
      type: "list",
      name: "transpilerServer",
      message: "What transpiler do you want to use in server side?",
      choices: [/*"node",*/ "babel", "typescript"],
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
