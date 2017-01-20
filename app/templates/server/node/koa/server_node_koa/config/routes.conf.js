"use strict";

const koa = require("koa");
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");

module.exports = class RouteConfig {
  static init(application, router) {
    let _root = process.cwd();
    let _nodeModules = "/node_modules";
    let _jspmPackages = "/jspm_packages";
    let _clientFiles = (process.env.NODE_ENV === "production") ? "/client/dist" : "/client/dev";

    application.use(bodyParser());
    application.use(router.routes());
    application.use(serve(_root + _nodeModules));
    application.use(serve(_root + _jspmPackages));
    application.use(serve(_root + _clientFiles));
  }
} 
