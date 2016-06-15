"use strict";

const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

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

class GoServer {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let _featureWithoutTrailingSlash = this.wrapper.feature.replace('/', '');
    let gen = basePath(this.wrapper);

    this.wrapper.template('go/endpoint.route.go', `${gen.route}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.controller.go', `${gen.controller}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.dao.go', `${gen.dao}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.model.go', `${gen.model}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.dao_test.go', `${gen.daoTest}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.model_test.go', `${gen.modelTest}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.controller_test.go', `${gen.controllerTest}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.wrapper.template('go/endpoint.route_test.go', `${gen.routeTest}.go`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      appName: this.wrapper.appName,
      feature: _featureWithoutTrailingSlash
    });
  }

  copyForMainGenerator() {
    this.wrapper.differentStaticServer = !!this.wrapper.differentStaticServer || (this.wrapper.stack === "server");

    if (this.wrapper.secure) {
      this.wrapper.template('server_go/main_http2.go', 'server/main.go', {
        appName: this.wrapper.appName,
        userNameSpace: this.wrapper.userNameSpace,
        repoHostUrl: this.wrapper.repoHostUrl,
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_go/main.go', 'server/main.go', {
        appName: this.wrapper.appName,
        userNameSpace: this.wrapper.userNameSpace,
        repoHostUrl: this.wrapper.repoHostUrl,
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_go/routes/routes.go', 'server/routes/routes.go'],
      ['server_go/routes/routes_test.go', 'server/routes/routes_test.go'],

      ['server_go/config/dbconfig.go', 'server/config/dbconfig.go'],
      ['server_go/config/dbconfig_test.go', 'server/config/dbconfig_test.go'],

      ['server_go/api/todo/routes/todoroutes.go', 'server/api/todo/routes/todoroutes.go'],
      ['server_go/api/todo/routes/todoroutes_test.go', 'server/api/todo/routes/todoroutes_test.go'],

      ['server_go/api/todo/model/todomodel.go', 'server/api/todo/model/todomodel.go'],
      ['server_go/api/todo/model/todomodel_test.go', 'server/api/todo/model/todomodel_test.go'],

      ['server_go/api/todo/dao/tododao.go', 'server/api/todo/dao/tododao.go'],
      ['server_go/api/todo/dao/tododao_test.go', 'server/api/todo/dao/tododao_test.go'],

      ['server_go/api/todo/controller/todocontroller.go', 'server/api/todo/controller/todocontroller.go'],
      ['server_go/api/todo/controller/todocontroller_test.go', 'server/api/todo/controller/todocontroller_test.go'],
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_go/common/static/static.go', 'server/common/static/static.go'],
                  ['server_go/common/static/static_test.go', 'server/common/static/static_test.go']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      appName: this.wrapper.appName,
      userNameSpace: this.wrapper.userNameSpace,
      repoHostUrl: this.wrapper.repoHostUrl,
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

class GoFactory {
  static build(generator) {
    return new GoServer(generator);
  }
}

exports.GoFactory = GoFactory;
exports.GoServer = GoServer;
