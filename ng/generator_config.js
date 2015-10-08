'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _import = require('fs');

var fs = _interopRequireWildcard(_import);

var _import2 = require('lodash');

var _ = _interopRequireWildcard(_import2);

var GeneratorConfig = function GeneratorConfig(gen) {
  _classCallCheck(this, GeneratorConfig);

  this.server = 'node';
  this.username = undefined;
  this.appName = undefined;
  this.transpilerServer = undefined;

  _.assign(this, gen);
};

exports.GeneratorConfig = GeneratorConfig;