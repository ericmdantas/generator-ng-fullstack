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

var _angular = require('./angular');

var MainGenerator = (function () {
  function MainGenerator(gen) {
    _classCallCheck(this, MainGenerator);

    this.wrapper = gen;
  }

  _createClass(MainGenerator, [{
    key: 'sayHello',
    value: function sayHello() {
      this.wrapper.log((0, _yosay2['default'])('Welcome to the terrific ' + _chalk2['default'].green('NgFullstack') + ' generator!'));
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _app = { app: this.wrapper.appName };
      var _username = { username: this.wrapper.githubUsername };
      var _appAndUsername = { app: _app.app, username: _username.username };
      var _server = this.wrapper.server;
      var _transpilerServer = this.wrapper.transpilerServer;
      var _copiesServer = this.wrapper.stack === "fullstack" || this.wrapper.stack === "server";
      var _copiesClient = this.wrapper.stack === "fullstack" || this.wrapper.stack === "client";

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
      this.wrapper.template('_.jshintrc', '.jshintrc');

      this.wrapper.directory('tests/e2e', 'tests/e2e');

      if (_copiesClient) {
        this.wrapper.directory('client', 'client');
        this.wrapper.directory('tasks/client', 'tasks/client');
        this.wrapper.directory('tests/client', 'tests/client');
      }

      this.wrapper.template('tasks/default.js', 'tasks/default.js');
      this.wrapper.template('tasks/index.js', 'tasks/index.js');

      if (_copiesServer) {
        this.wrapper.directory('tasks/server', 'tasks/server');
        this.wrapper.directory('tests/server', 'tests/server');

        switch (_server) {
          case "node":
            return _node.NodeFactory.build(this.wrapper).copyForMainGenerator();
          case "go":
            return _go.GoFactory.build(this.wrapper).copyForMainGenerator();
        }
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
        name: "stack",
        message: "What stack do you want? Full, client or server?",
        choices: ["fullstack", "client", "server"],
        'default': 0
      }];

      this.wrapper.prompt(prompts, function (props) {
        _this.wrapper.appName = props.appName;
        _this.wrapper.githubUsername = props.githubUsername;
        _this.wrapper.stack = props.stack;

        _this.wrapper.config.set('username', _this.wrapper.githubUsername);
        _this.wrapper.config.set('appName', _this.wrapper.appName);
        _this.wrapper.config.set('stack', _this.wrapper.stack);

        done();
      });

      this.wrapper.config.save();
    }
  }, {
    key: 'promptServer',
    value: function promptServer() {
      var _this2 = this;

      var done = this.wrapper.async();

      var prompts = [{
        type: "list",
        name: "server",
        message: "What do you want in server side?",
        choices: ["node", "go"],
        when: function when() {
          var _isServer = _this2.wrapper.stack === "server";
          var _isFullstack = _this2.wrapper.stack === "fullstack";

          return _isServer || _isFullstack;
        },
        'default': 0
      }];

      this.wrapper.prompt(prompts, function (props) {
        _this2.wrapper.server = props.server;
        _this2.wrapper.config.set('server', _this2.wrapper.server ? _this2.wrapper.server.toLowerCase() : '');

        done();
      });

      this.wrapper.config.save();
    }
  }, {
    key: 'promptClient',
    value: function promptClient() {
      var _this3 = this;

      var done = this.wrapper.async();

      var prompts = [{
        type: "list",
        name: "client",
        message: "What do you want in client side?",
        choices: [_angular.AngularFactory.tokens.NG1, _angular.AngularFactory.tokens.NG2],
        when: function when() {
          var _isClient = _this3.wrapper.stack === "client";
          var _isFullstack = _this3.wrapper.stack === "fullstack";

          return _isClient || _isFullstack;
        },
        'default': 0
      }];

      this.wrapper.prompt(prompts, function (props) {

        _this3.wrapper.client = props.client;
        _this3.wrapper.config.set('client', _this3.wrapper.client ? _this3.wrapper.client.toLowerCase() : '');

        done();
      });

      this.wrapper.config.save();
    }
  }, {
    key: 'promptTranspilerServer',
    value: function promptTranspilerServer() {
      var _this4 = this;

      var done = this.wrapper.async();

      var _prompts = [{
        type: "list",
        name: "transpilerServer",
        message: "What transpiler do you want to use in server side?",
        choices: [_node.NodeFactory.tokens.NODE, _node.NodeFactory.tokens.NODE_BABEL, _node.NodeFactory.tokens.NODE_TYPESCRIPT],
        'default': 0,
        when: function when() {
          return _this4.wrapper.server === "node";
        }
      }];

      this.wrapper.prompt(_prompts, function (props) {
        _this4.wrapper.transpilerServer = props.transpilerServer;

        _this4.wrapper.config.set('transpilerServer', _this4.wrapper.transpilerServer);

        done();
      });

      this.wrapper.config.save();
    }
  }]);

  return MainGenerator;
})();

exports.MainGenerator = MainGenerator;