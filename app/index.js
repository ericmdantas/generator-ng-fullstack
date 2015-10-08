'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _yeoman = require('yeoman-generator');

var _yeoman2 = _interopRequireWildcard(_yeoman);

var _chalk = require('chalk');

var _chalk2 = _interopRequireWildcard(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireWildcard(_yosay);

'use strict';

var NgFullstack = (function (_yeoman$generators$Base) {
  function NgFullstack(args, options, config) {
    _classCallCheck(this, NgFullstack);

    _get(Object.getPrototypeOf(NgFullstack.prototype), 'constructor', this).call(this, args, options, config);
    //yeoman.generators.Base.apply(this, arguments);
  }

  _inherits(NgFullstack, _yeoman$generators$Base);

  _createClass(NgFullstack, [{
    key: 'initializing',
    value: function initializing() {
      this.pkg = require('../package.json');
    }
  }, {
    key: 'prompting',
    value: function prompting() {
      this.log(_yosay2['default']('Welcome to the terrific ' + _chalk2['default'].green('NgFullstack') + ' generator!'));
    }
  }, {
    key: 'writing',
    value: function writing() {
      var _app = { app: this.appName };
      var _username = { username: this.githubUsername };
      var _appAndUsername = { app: _app.app, username: _username.username };
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
      this.template('_.jshintrc', '.jshintrc');

      this.directory('client', 'client');
      this.directory('tests', 'tests');

      switch (_server) {
        case 'io.js':
          this.directory('server_io.js', 'server');
          this.template('index.js', 'index.js');
          break;

        case 'Go':
          this.directory('server_go', 'server');
          this.template('server_go/main.go', 'server/main.go', { appName: _app.app, username: _username.username });
          this.template('server_go/routes/routes.go', 'server/routes/routes.go', { appName: _app.app, username: _username.username });
          break;
      }
    }
  }, {
    key: 'install',
    value: function install() {
      var _installOpts = { skipInstall: this.options['skip-install'] };

      this.installDependencies(_installOpts);
    }
  }, {
    key: 'prompUser',
    value: function prompUser() {
      var _this = this;

      var done = this.async();

      var prompts = [{
        name: 'appName',
        message: 'What is the name of your app?',
        'default': 'some-name-here'
      }, {
        name: 'githubUsername',
        message: 'What is your username on Github?',
        'default': 'some-username-here'
      }, {
        type: 'list',
        name: 'server',
        message: 'What do you want in server side?',
        choices: ['io.js', 'Go'],
        'default': 0
      }, {
        type: 'list',
        name: 'transpilerServer',
        message: 'What transpiler do you want to use in server side?',
        choices: ['Babel', 'Typescript'],
        'default': 1
      }];

      this.prompt(prompts, function (props) {
        _this.appName = props.appName;
        _this.githubUsername = props.githubUsername;
        _this.server = props.server;
        _this.transpilerServer = props.transpilerServer;

        _this.config.set('server', _this.server.toLowerCase());
        _this.config.set('username', _this.githubUsername);
        _this.config.set('appName', _this.appName);
        _this.config.set('transpilerServer', _this.transpilerServer);

        done();
      });

      this.config.save();
    }
  }]);

  return NgFullstack;
})(_yeoman2['default'].generators.Base);

exports['default'] = NgFullstack;
module.exports = exports['default'];