'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _yosay = require('yosay');

var _yosay2 = _interopRequireDefault(_yosay);

var MainGenerator = (function () {
  function MainGenerator() {
    _classCallCheck(this, MainGenerator);
  }

  _createClass(MainGenerator, [{
    key: 'sayHello',
    value: function sayHello(generator) {
      generator.log((0, _yosay2['default'])('Welcome to the terrific ' + _chalk2['default'].green('NgFullstack') + ' generator!'));
    }
  }, {
    key: 'writing',
    value: function writing(generator) {
      var _app = { app: generator.appName };
      var _username = { username: generator.githubUsername };
      var _appAndUsername = { app: _app.app, username: _username.username };
      var _server = generator.server;
      var _transpilerServer = generator.transpilerServer;

      generator.template('_package.json', 'package.json', _appAndUsername);
      generator.template('_bower.json', 'bower.json', _appAndUsername);
      generator.template('_README.md', 'README.md', _appAndUsername);

      generator.template('_gulpfile.js', 'gulpfile.js', _app);
      generator.template('_karma.conf.js', 'karma.conf.js', _app);
      generator.template('_protractor.conf.js', 'protractor.conf.js', _app);

      generator.template('_newrelic.js', 'newrelic.js', _app);

      generator.template('_procfile.txt', 'procfile.txt', _app);

      generator.template('_.bowerrc', '.bowerrc');
      generator.template('_.travis.yml', '.travis.yml');
      generator.template('_.gitignore', '.gitignore');
      generator.template('_.editorconfig', '.editorconfig');
      generator.template('_.jshintrc', '.jshintrc');

      generator.directory('client', 'client');
      generator.directory('tests', 'tests');

      switch (_server) {
        case "node":
          if (_transpilerServer === "typescript") {
            generator.directory('server_node_typescript', 'server');
            generator.template('index_tsc.js', 'index.js');

            break;
          }

          if (_transpilerServer === "babel") {
            generator.directory('server_node_babel', 'server');
            generator.template('index.js', 'index.js');

            break;
          }

          generator.directory('server_node', 'server');
          generator.template('index.js', 'index.js');

          break;

        case "go":
          generator.directory('server_go', 'server');
          generator.template('server_go/main.go', 'server/main.go', { appName: _app.app, username: _username.username });
          generator.template('server_go/routes/routes.go', 'server/routes/routes.go', { appName: _app.app, username: _username.username });

          break;
      }
    }
  }, {
    key: 'install',
    value: function install(generator) {
      generator.installDependencies({ skipInstall: generator.options['skip-install'] });
    }
  }, {
    key: 'promptUser',
    value: function promptUser(generator) {
      var done = generator.async();

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

      generator.prompt(prompts, function (props) {
        generator.appName = props.appName;
        generator.githubUsername = props.githubUsername;
        generator.server = props.server;

        generator.config.set('server', generator.server.toLowerCase());
        generator.config.set('username', generator.githubUsername);
        generator.config.set('appName', generator.appName);

        done();
      });

      generator.config.save();
    }
  }, {
    key: 'promptTranspilerServer',
    value: function promptTranspilerServer(generator) {
      var done = generator.async();

      var _prompts = [{
        type: "list",
        name: "transpilerServer",
        message: "What transpiler do you want to use in server side?",
        choices: ["node", "babel", "typescript"],
        'default': 0,
        when: function when() {
          return generator.server === "node";
        }
      }];

      generator.prompt(_prompts, function (props) {
        generator.transpilerServer = props.transpilerServer;

        generator.config.set('transpilerServer', generator.transpilerServer);

        done();
      });

      generator.config.save();
    }
  }]);

  return MainGenerator;
})();

exports.MainGenerator = MainGenerator;