"use strict";

const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/route/${generator.name}route`,
    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}controller`,
    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}dao`,
    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}model`,
    daoTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}dao_test`,
    modelTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}model_test`,
    controllerTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}controller_test`,
    routeTest: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/route/${generator.name}route_test`
  };
};

exports.GoBase = class GoBase {
  constructor(generator, webFramework) {
    this.generator = generator;
    this.webFramework = webFramework;
  }

  copyEndpoint() {
    let _featureWithoutTrailingSlash = this.generator.feature.replace('/', '');
    let gen = basePath(this.generator);

    this.generator.template('go/'+this.webFramework+'/endpoint.route.go', `${gen.route}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.controller.go', `${gen.controller}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.dao.go', `${gen.dao}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.model.go', `${gen.model}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.dao_test.go', `${gen.daoTest}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.model_test.go', `${gen.modelTest}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.controller_test.go', `${gen.controllerTest}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });

    this.generator.template('go/'+this.webFramework+'/endpoint.route_test.go', `${gen.routeTest}.go`, {
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      appName: this.generator.appName,
      feature: _featureWithoutTrailingSlash
    });
  }

  copyServer() {
    this._copyTodoBoilerplate();
  }

  _copyTodoBoilerplate() {
    let _paths = [];

    this.generator.differentStaticServer = !!this.generator.differentStaticServer || (this.generator.stack === "server");

    if (!this.generator.differentStaticServer) {
      _paths.push(['server/go/'+this.webFramework+'/common/static/static.go', 'server/common/static/static.go'],
                  ['server/go/'+this.webFramework+'/common/static/static_test.go', 'server/common/static/static_test.go']);
    }

    if (this.generator.secure) {
      this.generator.template('server/go/'+this.webFramework+'/main_http2.go', 'server/main.go', {
        appName: this.generator.appName,
        userNameSpace: this.generator.userNameSpace,
        repoHostUrl: this.generator.repoHostUrl,
        differentStaticServer: !!this.generator.differentStaticServer
      });
    } else {
      this.generator.template('server/go/'+this.webFramework+'/main.go', 'server/main.go', {
        appName: this.generator.appName,
        userNameSpace: this.generator.userNameSpace,
        repoHostUrl: this.generator.repoHostUrl,
        differentStaticServer: !!this.generator.differentStaticServer
      });
    }

    if (this.generator.boilerplate) {
      _paths.push(
        ['server/go/'+this.webFramework+'/routes/routes.go', 'server/routes/routes.go'],
        ['server/go/'+this.webFramework+'/routes/routes_test.go', 'server/routes/routes_test.go'],

        ['server/go/'+this.webFramework+'/config/dbconfig.go', 'server/config/dbconfig.go'],
        ['server/go/'+this.webFramework+'/config/dbconfig_test.go', 'server/config/dbconfig_test.go'],

        ['server/go/'+this.webFramework+'/api/todo/route/todoroute.go', 'server/api/todo/route/todoroute.go'],
        ['server/go/'+this.webFramework+'/api/todo/route/todoroute_test.go', 'server/api/todo/route/todoroute_test.go'],

        ['server/go/'+this.webFramework+'/api/todo/model/todomodel.go', 'server/api/todo/model/todomodel.go'],
        ['server/go/'+this.webFramework+'/api/todo/model/todomodel_test.go', 'server/api/todo/model/todomodel_test.go'],

        ['server/go/'+this.webFramework+'/api/todo/dao/tododao.go', 'server/api/todo/dao/tododao.go'],
        ['server/go/'+this.webFramework+'/api/todo/dao/tododao_test.go', 'server/api/todo/dao/tododao_test.go'],

        ['server/go/'+this.webFramework+'/api/todo/controller/todocontroller.go', 'server/api/todo/controller/todocontroller.go'],
        ['server/go/'+this.webFramework+'/api/todo/controller/todocontroller_test.go', 'server/api/todo/controller/todocontroller_test.go']
      );
    } else {
      _paths.push(
        ['server/go/'+this.webFramework+'/routes/routes.go', 'server/routes/routes.go'],
        ['server/go/'+this.webFramework+'/routes/routes_test.go', 'server/routes/routes_test.go'],

        ['server/go/'+this.webFramework+'/config/dbconfig.go', 'server/config/dbconfig.go'],
        ['server/go/'+this.webFramework+'/config/dbconfig_test.go', 'server/config/dbconfig_test.go']
      );
    }

    yoUtils.directory(this.generator, _paths, {
      appName: this.generator.appName,
      userNameSpace: this.generator.userNameSpace,
      repoHostUrl: this.generator.repoHostUrl,
      differentStaticServer: !!this.generator.differentStaticServer
    });
  }
};
