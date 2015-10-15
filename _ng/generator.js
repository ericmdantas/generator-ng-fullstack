'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var _node = require('./node');

var _generator_config = require('./generator_config');

var _go = require('./go');

var MainGenerator = (function () {
  function MainGenerator(gen) {
    _classCallCheck(this, MainGenerator);

    this.wrapper = gen;
  }

  _createClass(MainGenerator, [{
    key: 'sayHello',
    value: function sayHello() {
      this.wrapper.log((0, _yosay2['default'])('Welcome to the terrific ' + _chalk2['default'].green('NgFullstack') + ' this.wrapper!'));
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _app = { app: this.wrapper.appName };
      var _username = { username: this.wrapper.githubUsername };
      var _appAndUsername = { app: _app.app, username: _username.username };
      var _server = this.wrapper.server;
      var _transpilerServer = this.wrapper.transpilerServer;

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
      this.wrapper.template('_.jshintrc', '.jshintrc');

      this.wrapper.directory('client', 'client');
      this.wrapper.directory('tests', 'tests');

      switch (_server) {
        case "node":
          return _node.NodeFactory.build(this.wrapper).copyForMainGenerator();
        case "go":
          return _go.GoFactory.build(this.wrapper).copyForMainGenerator();
      }
    }
  }, {
    key: 'install',
    value: function install() {
      this.wrapper.installDependencies({ skipInstall: this.wrapper.options['skip-install'] });
    }
  }, {
    key: 'promptUser',
    value: function promptUser() {
      var _this = this;

      var done = this.wrapper.async();

      var prompts = [{
        name: 'appName',
        message: 'What is the name of your app?',
        'default': 'some-name-here'
      }, {
        name: 'githubUsername',
        message: 'What is your username on Github?',
        'default': 'some-username-here'
      }, {
        type: "list",
        name: "server",
        message: "What do you want in server side?",
        choices: ["node", "go"],
        'default': 0
      }];

      this.wrapper.prompt(prompts, function (props) {
        _this.wrapper.appName = props.appName;
        _this.wrapper.githubUsername = props.githubUsername;
        _this.wrapper.server = props.server;

        _this.wrapper.config.set('server', _this.wrapper.server.toLowerCase());
        _this.wrapper.config.set('username', _this.wrapper.githubUsername);
        _this.wrapper.config.set('appName', _this.wrapper.appName);

        done();
      });

      this.wrapper.config.save();
    }
  }, {
    key: 'promptTranspilerServer',
    value: function promptTranspilerServer() {
      var _this2 = this;

      var done = this.wrapper.async();

      var _prompts = [{
        type: "list",
        name: "transpilerServer",
        message: "What transpiler do you want to use in server side?",
        choices: ["node", "babel", "typescript"],
        'default': 0,
        when: function when() {
          return _this2.wrapper.server === "node";
        }
      }];

      this.wrapper.prompt(_prompts, function (props) {
        _this2.wrapper.transpilerServer = props.transpilerServer;

        _this2.wrapper.config.set('transpilerServer', _this2.wrapper.transpilerServer);

        done();
      });

      this.wrapper.config.save();
    }
  }]);

  return MainGenerator;
})();

exports.MainGenerator = MainGenerator;