"use strict";

const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

const basePath = (generator) => {
  return {
    route: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/routes/${generator.name}-route`,
    controller: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/controller/${generator.name}-controller`,
    dao: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/dao/${generator.name}-dao`,
    model: `${knownPaths.PATH_SERVER_FEATURES + generator.feature}/model/${generator.name}-model`,
    test: `${knownPaths.PATH_SERVER_FEATURES_TEST + generator.feature}/dao/${generator.name}-dao_test`
  }
}

class NodeBaseStandard {
  constructor(generator, webFramework) {
    this.wrapper = generator;
    this.webFramework = webFramework;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/' + this.webFramework + '/no_transpiler/endpoint.route.js', `${gen.route}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/no_transpiler/endpoint.controller.js', `${gen.controller}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/no_transpiler/endpoint.dao.js', `${gen.dao}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/no_transpiler/endpoint.model.js', `${gen.model}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/no_transpiler/endpoint.dao_test.js', `${gen.test}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      feature: this.wrapper.feature
    });
  }

  copyForMainGenerator() {
    this.wrapper.differentStaticServer = !!this.wrapper.differentStaticServer || (this.wrapper.stack === "server");

    this.wrapper.template('index_node.js', 'index.js');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');

    if (this.wrapper.secure) {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/server_https.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/server.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/routes/index.js', 'server/routes/index.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/constants/db.json', 'server/constants/db.json'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/db.conf.js', 'server/config/db.conf.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/config/routes.conf.js', 'server/config/routes.conf.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/auth/local/index.js', 'server/auth/local/index.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/api/todo/routes/todo-routes.js', 'server/api/todo/routes/todo-routes.js']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '/commons/static/index.js', 'server/commons/static/index.js']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      appName: this.wrapper.appName,
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

class NodeBaseBabel {
  constructor(generator, webFramework) {
    this.wrapper = generator;
    this.webFramework = webFramework;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/' + this.webFramework + '/babel/endpoint.route.js', `${gen.route}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/babel/endpoint.controller.js', `${gen.controller}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/babel/endpoint.dao.js', `${gen.dao}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/babel/endpoint.model.js', `${gen.model}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/babel/endpoint.dao_test.js', `${gen.test}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      feature: this.wrapper.feature
    });
  }

  copyForMainGenerator() {
    this.wrapper.differentStaticServer = !!this.wrapper.differentStaticServer || (this.wrapper.stack === "server");

    this.wrapper.template('index_babel.js', 'index.js');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');

    if (this.wrapper.secure) {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/server_https.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/server.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/routes/index.js', 'server/routes/index.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/constants/db.json', 'server/constants/db.json'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/db.conf.js', 'server/config/db.conf.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/config/routes.conf.js', 'server/config/routes.conf.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/auth/local/index.js', 'server/auth/local/index.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/api/todo/routes/todo-routes.js', 'server/api/todo/routes/todo-routes.js']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_babel/commons/static/index.js', 'server/commons/static/index.js']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      appName: this.wrapper.appName,
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

class NodeBaseTypescript {
  constructor(generator, webFramework) {
    this.wrapper = generator;
    this.webFramework = webFramework;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/' + this.webFramework + '/typescript/endpoint.route.ts', `${gen.route}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/typescript/endpoint.controller.ts', `${gen.controller}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/typescript/endpoint.dao.ts', `${gen.dao}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/typescript/endpoint.model.ts', `${gen.model}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/' + this.webFramework + '/typescript/endpoint.dao_test.js', `${gen.test}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase(),
      feature: this.wrapper.feature
    });
  }

  copyForMainGenerator() {
    this.wrapper.differentStaticServer = !!this.wrapper.differentStaticServer || (this.wrapper.stack === "server");

    this.wrapper.template('index_tsc.js', 'index.js');
    this.wrapper.template('_tsconfig.json', 'tsconfig.json');
    this.wrapper.template('_typings_ng2_and_tsc_server.json', 'typings.json');
    this.wrapper.directory('tasks/server', 'tasks/server');
    this.wrapper.directory('tests/server', 'tests/server');

    if (this.wrapper.secure) {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/server_https.ts', 'server/server.ts', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/server.ts', 'server/server.ts', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/routes/index.ts', 'server/routes/index.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/constants/db.json', 'server/constants/db.json'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/db.conf.ts', 'server/config/db.conf.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/config/routes.conf.ts', 'server/config/routes.conf.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/auth/local/index.ts', 'server/auth/local/index.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/controller/todo-controller.ts', 'server/api/todo/controller/todo-controller.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/dao/todo-dao.ts', 'server/api/todo/dao/todo-dao.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/model/todo-model.ts', 'server/api/todo/model/todo-model.ts'],
      ['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/api/todo/routes/todo-routes.ts', 'server/api/todo/routes/todo-routes.ts']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/' + this.webFramework + '/server_node_' + this.webFramework + '_typescript/commons/static/index.ts', 'server/commons/static/index.ts']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      appName: this.wrapper.appName,
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

exports.NodeBaseBabel = NodeBaseBabel;
exports.NodeBaseTypescript = NodeBaseTypescript;
exports.NodeBaseStandard = NodeBaseStandard;
