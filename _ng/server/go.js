"use strict";

const knownPaths = require('../utils/known_paths');

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/routes/${generator.name}route`,
    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}controller`,
    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}dao`,
    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}model`,
    daoTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}dao_test`,
    modelTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}model_test`,
    controllerTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}controller_test`,
    routeTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/routes/${generator.name}route_test`
  }
}

exports.GoServer = class GoServer {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let _featureWithoutTrailingSlash = this.wrapper.feature.replace('/', '');
    let gen = basePath(this.wrapper);

    this.wrapper.template('go/endpoint.route.go', `${gen.route}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.controller.go', `${gen.controller}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.dao.go', `${gen.dao}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});
    this.wrapper.template('go/endpoint.model.go', `${gen.model}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), username: this.wrapper.username, appName: this.wrapper.appName, feature: _featureWithoutTrailingSlash});

    this.wrapper.template('go/endpoint.dao_test.go', `${gen.daoTest}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.model_test.go', `${gen.modelTest}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.controller_test.go', `${gen.controllerTest}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
    this.wrapper.template('go/endpoint.route_test.go', `${gen.routeTest}.go`, {name: this.wrapper.name, nameLowerCase: this.wrapper.name.toLowerCase(), feature: _featureWithoutTrailingSlash, username: this.wrapper.username, appName: this.wrapper.appName});
  }

  copyForMainGenerator() {
    this.wrapper.directory('server_go', 'server');
    this.wrapper.template('server_go/main.go', 'server/main.go', {appName: this.wrapper.appName, username: this.wrapper.username});
    this.wrapper.template('server_go/routes/routes.go', 'server/routes/routes.go', {appName: this.wrapper.appName, username: this.wrapper.username});
  }
}

exports.GoFactory = class GoFactory {
  static build(generator) {
    return new GoServer(generator);
  }
}
