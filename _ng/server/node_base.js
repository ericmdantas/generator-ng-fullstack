"use strict";

const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/route/${generator.name}-route`,
    routeTestTogether: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/route/${generator.name}-route_test`,
    routeTestSeparate: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/route/${generator.name}-route_test`,

    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}-controller`,
    controllerTestTogether: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}-controller_test`,
    controllerTestSeparate: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/controller/${generator.name}-controller_test`,

    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}-dao`,
    daoTestTogether: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}-dao_test`,
    daoTestSeparate: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/dao/${generator.name}-dao_test`,

    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}-model`,
    modelTestTogether: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}-model_test`,
    modelTestSeparate: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/model/${generator.name}-model_test`
  };
};

class NodeBaseStandard {
  constructor(generator, webFramework) {
    this.generator = generator;
    this.webFramework = webFramework;
  }

  copyEndpoint() {
    let gen = basePath(this.generator);
    const testsSeparated = this.generator.testsSeparated !== undefined ? this.generator.testsSeparated : true;
    const TESTS = testsSeparated ? 'Separate' : 'Together';

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.route.js', `${gen.route}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.controller.js', `${gen.controller}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.dao.js', `${gen.dao}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.model.js', `${gen.model}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.route_test.js', `${gen[`routeTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.controller_test.js', `${gen[`controllerTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.dao_test.js', `${gen[`daoTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/no_transpiler/endpoint.model_test.js', `${gen[`modelTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });
  }

  copyServer() {
    this._copyTodoBoilerplate();
    this._copyTasks();
  }

  _copyTodoBoilerplate() {
    let _paths = [];
    let _tests = [];

    this.generator.differentStaticServer = !!this.generator.differentStaticServer || (this.generator.stack === "server");

    this.generator.template('index_node.js', 'server/index.js');

    if (!this.generator.differentStaticServer) {
      _paths.push(['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/commons/static/index.js', 'server/commons/static/index.js']);
    }

    if (this.generator.secure) {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/server_http2.js', 'server/server.js', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    } else {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/server.js', 'server/server.js', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    }

    if (this.generator.boilerplate) {
      if(this.generator.testsSeparated) {
        this.generator.directory('tests/server', 'tests/server');
      }

      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/routes/index.js', 'server/routes/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/db.conf.js', 'server/config/db.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/routes.conf.js', 'server/config/routes.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/auth/local/index.js', 'server/auth/local/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/route/todo-route.js', 'server/api/todo/route/todo-route.js']
      );

      if(!this.generator.testsSeparated) {
        _tests.push(
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/db.conf.test.js', 'server/config/db.conf.test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/db.test.json', 'server/config/db.test.json'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/controller/todo-controller_test.js', 'server/api/todo/controller/todo-controller_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/dao/todo-dao_test.js', 'server/api/todo/dao/todo-dao_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/model/todo-model_test.js', 'server/api/todo/model/todo-model_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/route/todo-route_test.js', 'server/api/todo/route/todo-route_test.js']
        );

        yoUtils.directory(this.generator, _tests, {
          appName: this.generator.appName,
          testsSeparated: this.generator.testsSeparated,
          differentStaticServer: !!this.generator.differentStaticServer
        });
      }
    } else {
      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/routes/index.js', 'server/routes/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/db.conf.js', 'server/config/db.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/routes.conf.js', 'server/config/routes.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '/auth/local/index.js', 'server/auth/local/index.js']
      );
    }

    yoUtils.directory(this.generator, _paths, {
      appName: this.generator.appName,
      testsSeparated: this.generator.testsSeparated,
      differentStaticServer: !!this.generator.differentStaticServer
    });
  }

  _copyTasks() {
    this.generator.directory('tasks/server', 'tasks/server');
  }
}

class NodeBaseBabel {
  constructor(generator, webFramework) {
    this.generator = generator;
    this.webFramework = webFramework;
  }

  copyEndpoint() {
    let gen = basePath(this.generator);
    const testsSeparated = this.generator.testsSeparated !== undefined ? this.generator.testsSeparated : true;
    const TESTS = testsSeparated ? 'Separate' : 'Together';

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.route.js', `${gen.route}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.controller.js', `${gen.controller}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.dao.js', `${gen.dao}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.model.js', `${gen.model}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.route_test.js', `${gen[`routeTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.controller_test.js', `${gen[`controllerTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.dao_test.js', `${gen[`daoTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/babel/endpoint.model_test.js', `${gen[`modelTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });
  }

  copyServer() {
    this._copyTodoBoilerplate();
    this._copyTasks();
  }

  _copyTodoBoilerplate() {
    let _paths = [];
    let _tests = [];

    this.generator.differentStaticServer = !!this.generator.differentStaticServer || (this.generator.stack === "server");

    this.generator.template('index_babel.js', 'server/index.js');

    if (this.generator.secure) {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/server_http2.js', 'server/server.js', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    } else {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/server.js', 'server/server.js', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    }

    if (!this.generator.differentStaticServer) {
      _paths.push(['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/commons/static/index.js', 'server/commons/static/index.js']);
    }

    if (this.generator.boilerplate) {
      if(this.generator.testsSeparated) {
        this.generator.directory('tests/server', 'tests/server');
      }

      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/routes/index.js', 'server/routes/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/db.conf.js', 'server/config/db.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/routes.conf.js', 'server/config/routes.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/auth/local/index.js', 'server/auth/local/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/route/todo-route.js', 'server/api/todo/route/todo-route.js']
      );

      if(!this.generator.testsSeparated) {
        _tests.push(
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/db.conf.test.js', 'server/config/db.conf.test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/db.test.json', 'server/config/db.test.json'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/controller/todo-controller_test.js', 'server/api/todo/controller/todo-controller_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/dao/todo-dao_test.js', 'server/api/todo/dao/todo-dao_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/model/todo-model_test.js', 'server/api/todo/model/todo-model_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/route/todo-route_test.js', 'server/api/todo/route/todo-route_test.js']
        );

        yoUtils.directory(this.generator, _tests, {
          appName: this.generator.appName,
          testsSeparated: this.generator.testsSeparated,
          differentStaticServer: !!this.generator.differentStaticServer
        });
      }
    } else {
      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/routes/index.js', 'server/routes/index.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/db.conf.js', 'server/config/db.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/routes.conf.js', 'server/config/routes.conf.js'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/auth/local/index.js', 'server/auth/local/index.js']
      );
    }

    yoUtils.directory(this.generator, _paths, {
      appName: this.generator.appName,
      testsSeparated: this.generator.testsSeparated,
      differentStaticServer: !!this.generator.differentStaticServer
    });
  }

  _copyTasks() {
    this.generator.directory('tasks/server', 'tasks/server');
  }
}

class NodeBaseTypescript {
  constructor(generator, webFramework) {
    this.generator = generator;
    this.webFramework = webFramework;
  }

  copyEndpoint() {
    let gen = basePath(this.generator);
    const testsSeparated = this.generator.testsSeparated !== undefined ? this.generator.testsSeparated : true;
    const TESTS = testsSeparated ? 'Separate' : 'Together';

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.route.ts', `${gen.route}.ts`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.controller.ts', `${gen.controller}.ts`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.dao.ts', `${gen.dao}.ts`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.model.ts', `${gen.model}.ts`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase()
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.route_test.js', `${gen[`routeTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.controller_test.js', `${gen[`controllerTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.dao_test.js', `${gen[`daoTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });

    this.generator.template('node/' + this.webFramework + '/typescript/endpoint.model_test.js', `${gen[`modelTest${TESTS}`]}.js`, {
      feature: this.generator.feature,
      name: this.generator.name,
      nameLowerCase: this.generator.name.toLowerCase(),
      testsSeparated: this.generator.testsSeparated
    });
  }

  copyServer() {
    this._copyTodoBoilerplate();
    this._copyTasks();
  }

  _copyTodoBoilerplate() {
    let _paths = [];
    let _tests = [];

    this.generator.differentStaticServer = !!this.generator.differentStaticServer || (this.generator.stack === "server");

    this.generator.template('index_tsc.js', 'server/index.js');
    this.generator.template('_tsconfig.json', 'tsconfig.json');
    this.generator.template('_typings_ng2_and_tsc_server.json', 'typings.json');

    if (this.generator.secure) {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/server_http2.ts', 'server/server.ts', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    } else {
      this.generator.template('server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/server.ts', 'server/server.ts', {
        differentStaticServer: !!this.generator.differentStaticServer
      });
    }

    if (!this.generator.differentStaticServer) {
      _paths.push(['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/commons/static/index.ts', 'server/commons/static/index.ts']);
    }

    if (this.generator.boilerplate) {
      if(this.generator.testsSeparated) {
        this.generator.directory('tests/server', 'tests/server');
      }

      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/routes/index.ts', 'server/routes/index.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/db.conf.ts', 'server/config/db.conf.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/routes.conf.ts', 'server/config/routes.conf.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/auth/local/index.ts', 'server/auth/local/index.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/controller/todo-controller.ts', 'server/api/todo/controller/todo-controller.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/dao/todo-dao.ts', 'server/api/todo/dao/todo-dao.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/model/todo-model.ts', 'server/api/todo/model/todo-model.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/route/todo-route.ts', 'server/api/todo/route/todo-route.ts']
      );

      if(!this.generator.testsSeparated) {
        _tests.push(
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/db.conf.test.js', 'server/config/db.conf.test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/db.test.json', 'server/config/db.test.json'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/controller/todo-controller_test.js', 'server/api/todo/controller/todo-controller_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/dao/todo-dao_test.js', 'server/api/todo/dao/todo-dao_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/model/todo-model_test.js', 'server/api/todo/model/todo-model_test.js'],
          ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/route/todo-route_test.js', 'server/api/todo/route/todo-route_test.js']
        );

        yoUtils.directory(this.generator, _tests, {
          appName: this.generator.appName,
          testsSeparated: this.generator.testsSeparated,
          differentStaticServer: !!this.generator.differentStaticServer
        });
      }
    } else {
      _paths.push(
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/routes/index.ts', 'server/routes/index.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/constants/db.json', 'server/constants/db.json'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/db.conf.ts', 'server/config/db.conf.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/routes.conf.ts', 'server/config/routes.conf.ts'],
        ['server/node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/auth/local/index.ts', 'server/auth/local/index.ts']
      );
    }

    yoUtils.directory(this.generator, _paths, {
      appName: this.generator.appName,
      testsSeparated: this.generator.testsSeparated,
      differentStaticServer: !!this.generator.differentStaticServer
    });
  }

  _copyTasks() {
    this.generator.directory('tasks/server', 'tasks/server');
  }
}

exports.NodeBaseBabel = NodeBaseBabel;
exports.NodeBaseTypescript = NodeBaseTypescript;
exports.NodeBaseStandard = NodeBaseStandard;
