"use strict";

const koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

module.exports = class RouteConfig {
  static init(application) {
    let _root = process.cwd();
    let _nodeModules = '/node_modules/';
    let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';

    application.use(function *() {
      yield serve(_root + _nodeModules);
    });

    application.use(function *() {
      yield serve(_root + _clientFiles);
    });

    application.use(function *() {
      yield bodyParser();
    });
  }
}
