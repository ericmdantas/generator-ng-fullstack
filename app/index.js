"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");

var NgFullstack = (function (_yeoman$generators$Base) {
  function NgFullstack(args, options, config) {
    _classCallCheck(this, NgFullstack);

    yeoman.generators.Base.apply(this, arguments);
  }

  _inherits(NgFullstack, _yeoman$generators$Base);

  NgFullstack.prototype.initializing = function initializing() {
    this.pkg = require("../package.json");
  };

  NgFullstack.prototype.prompting = function prompting() {
    this.log(yosay("Welcome to the terrific " + chalk.green("NgFullstack") + " generator!"));
  };

  NgFullstack.prototype.writing = function writing() {
    var _app = { app: this.appName };
    var _username = { username: this.githubUsername };
    var _appAndUsername = { app: _app.app, username: _username.username };

    this.template("_package.json", "package.json", _appAndUsername);
    this.template("_bower.json", "bower.json", _appAndUsername);
    this.template("_README.md", "README.md", _appAndUsername);

    this.template("_gulpfile.js", "gulpfile.js", _app);
    this.template("_karma.conf.js", "karma.conf.js", _app);
    this.template("_protractor.conf.js", "protractor.conf.js", _app);

    this.template("_newrelic.js", "newrelic.js", _app);

    this.template("_procfile.txt", "procfile.txt", _app);

    this.template("index.js", "index.js");
    this.template(".bowerrc", ".bowerrc");
    this.template(".travis.yml", ".travis.yml");
    this.template(".gitignore", ".gitignore");
    this.template("editorconfig", ".editorconfig");
    this.template("jshintrc", ".jshintrc");

    this.directory("client", "client");
    this.directory("server", "server");
    this.directory("tests", "tests");
  };

  NgFullstack.prototype.install = function install() {
    var _installOpts = { skipInstall: this.options["skip-install"] };

    this.installDependencies(_installOpts);
  };

  NgFullstack.prototype.prompUser = function prompUser() {
    var done = this.async();

    var prompts = [{
      name: "appName",
      message: "What is the name of your app?",
      "default": "some-name-here"
    }, {
      name: "githubUsername",
      message: "What is your username on Github?",
      "default": "some-username-here"
    }];

    this.prompt(prompts, (function (props) {
      this.appName = props.appName;
      this.githubUsername = props.githubUsername;

      done();
    }).bind(this));
  };

  return NgFullstack;
})(yeoman.generators.Base);

module.exports = NgFullstack;
