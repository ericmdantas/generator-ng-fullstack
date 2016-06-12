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

class NodeKoaStandard {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/koa/no_transpiler/endpoint.route.js', `${gen.route}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/no_transpiler/endpoint.controller.js', `${gen.controller}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/no_transpiler/endpoint.dao.js', `${gen.dao}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/no_transpiler/endpoint.model.js', `${gen.model}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/no_transpiler/endpoint.dao_test.js', `${gen.test}.js`, {
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
      this.wrapper.template('server_node/koa/server_node_koa/server_https.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/koa/server_node_koa/server.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/koa/server_node_koa/routes/index.js', 'server/routes/index.js'],
      ['server_node/koa/server_node_koa/constants/db.json', 'server/constants/db.json'],
      ['server_node/koa/server_node_koa/config/db.conf.js', 'server/config/db.conf.js'],
      ['server_node/koa/server_node_koa/config/routes.conf.js', 'server/config/routes.conf.js'],
      ['server_node/koa/server_node_koa/auth/local/index.js', 'server/auth/local/index.js'],
      ['server_node/koa/server_node_koa/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
      ['server_node/koa/server_node_koa/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
      ['server_node/koa/server_node_koa/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
      ['server_node/koa/server_node_koa/api/todo/routes/todo-routes.js', 'server/api/todo/routes/todo-routes.js']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/koa/server_node_koa/commons/static/index.js', 'server/commons/static/index.js']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

class NodeKoaBabel {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/koa/babel/endpoint.route.js', `${gen.route}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/babel/endpoint.controller.js', `${gen.controller}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/babel/endpoint.dao.js', `${gen.dao}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/babel/endpoint.model.js', `${gen.model}.js`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/babel/endpoint.dao_test.js', `${gen.test}.js`, {
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
      this.wrapper.template('server_node/koa/server_node_koa_babel/server_https.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/koa/server_node_koa_babel/server.js', 'server/server.js', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/koa/server_node_koa_babel/routes/index.js', 'server/routes/index.js'],
      ['server_node/koa/server_node_koa_babel/constants/db.json', 'server/constants/db.json'],
      ['server_node/koa/server_node_koa_babel/config/db.conf.js', 'server/config/db.conf.js'],
      ['server_node/koa/server_node_koa_babel/config/routes.conf.js', 'server/config/routes.conf.js'],
      ['server_node/koa/server_node_koa_babel/auth/local/index.js', 'server/auth/local/index.js'],
      ['server_node/koa/server_node_koa_babel/api/todo/controller/todo-controller.js', 'server/api/todo/controller/todo-controller.js'],
      ['server_node/koa/server_node_koa_babel/api/todo/dao/todo-dao.js', 'server/api/todo/dao/todo-dao.js'],
      ['server_node/koa/server_node_koa_babel/api/todo/model/todo-model.js', 'server/api/todo/model/todo-model.js'],
      ['server_node/koa/server_node_koa_babel/api/todo/routes/todo-routes.js', 'server/api/todo/routes/todo-routes.js']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/koa/server_node_koa_babel/commons/static/index.js', 'server/commons/static/index.js']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

class NodeKoaTypescript {
  constructor(generator) {
    this.wrapper = generator;
  }

  copyFiles() {
    let gen = basePath(this.wrapper);

    this.wrapper.template('node/koa/typescript/endpoint.route.ts', `${gen.route}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/typescript/endpoint.controller.ts', `${gen.controller}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/typescript/endpoint.dao.ts', `${gen.dao}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/typescript/endpoint.model.ts', `${gen.model}.ts`, {
      name: this.wrapper.name,
      nameLowerCase: this.wrapper.name.toLowerCase()
    });

    this.wrapper.template('node/koa/typescript/endpoint.dao_test.js', `${gen.test}.js`, {
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
      this.wrapper.template('server_node/koa/server_node_koa_typescript/server_https.ts', 'server/server.ts', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }
    else {
      this.wrapper.template('server_node/koa/server_node_koa_typescript/server.ts', 'server/server.ts', {
        differentStaticServer: !!this.wrapper.differentStaticServer
      });
    }

    let _paths = [
      ['server_node/koa/server_node_koa_typescript/routes/index.ts', 'server/routes/index.ts'],
      ['server_node/koa/server_node_koa_typescript/constants/db.json', 'server/constants/db.json'],
      ['server_node/koa/server_node_koa_typescript/config/db.conf.ts', 'server/config/db.conf.ts'],
      ['server_node/koa/server_node_koa_typescript/config/routes.conf.ts', 'server/config/routes.conf.ts'],
      ['server_node/koa/server_node_koa_typescript/auth/local/index.ts', 'server/auth/local/index.ts'],
      ['server_node/koa/server_node_koa_typescript/api/todo/controller/todo-controller.ts', 'server/api/todo/controller/todo-controller.ts'],
      ['server_node/koa/server_node_koa_typescript/api/todo/dao/todo-dao.ts', 'server/api/todo/dao/todo-dao.ts'],
      ['server_node/koa/server_node_koa_typescript/api/todo/model/todo-model.ts', 'server/api/todo/model/todo-model.ts'],
      ['server_node/koa/server_node_koa_typescript/api/todo/routes/todo-routes.ts', 'server/api/todo/routes/todo-routes.ts']
    ]

    if (!this.wrapper.differentStaticServer) {
      _paths.push(['server_node/koa/server_node_koa_typescript/commons/static/index.ts', 'server/commons/static/index.ts']);
    }

    yoUtils.directory(this.wrapper, _paths, {
      differentStaticServer: !!this.wrapper.differentStaticServer
    });
  }
}

exports.NodeKoaBabel = NodeKoaBabel;
exports.NodeKoaTypescript = NodeKoaTypescript;
exports.NodeKoaStandard = NodeKoaStandard;
