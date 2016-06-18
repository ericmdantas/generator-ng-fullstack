"use strict";

import koa from 'koa';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

export default class RouteConfig {
  static init(application, router) {
    let _root = process.cwd();
    let _nodeModules = '/node_modules';
    let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist' : '/client/dev';

    application.use(bodyParser());
    application.use(router.routes());
    application.use(serve(_root + _nodeModules));
    application.use(serve(_root + _clientFiles));
  }
}
