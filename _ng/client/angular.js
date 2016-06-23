'use strict';

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');

class Angular1 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen.testsSeparated;

  }

  copyClient() {
    let _pathSrc = [
      ['client/ng1/dev/index.html', 'client/dev/index.html'],
      ['client/ng1/dev/favicon.png', 'client/dev/favicon.png'],
      ['client/ng1/dev/app.js', 'client/dev/app.js'],
      ['client/ng1/dev/app.route.js', 'client/dev/app.route.js'],
      ['client/ng1/dev/app.config.js', 'client/dev/app.config.js'],
      ['client/ng1/dev/common/images/todo-bkg.png', 'client/dev/common/images/todo-bkg.png'],
      ['client/ng1/dev/todo/controllers/todo-controller.js', 'client/dev/todo/controllers/todo-controller.js'],
      ['client/ng1/dev/todo/models/todo-model.js', 'client/dev/todo/models/todo-model.js'],
      ['client/ng1/dev/todo/services/todo-dao.js', 'client/dev/todo/services/todo-dao.js'],
      ['client/ng1/dev/todo/services/todo-resource.js', 'client/dev/todo/services/todo-resource.js'],
      ['client/ng1/dev/todo/styles/events.css', 'client/dev/todo/styles/events.css'],
      ['client/ng1/dev/todo/styles/fonts.css', 'client/dev/todo/styles/fonts.css'],
      ['client/ng1/dev/todo/styles/frameworks_overrides.css', 'client/dev/todo/styles/frameworks_overrides.css'],
      ['client/ng1/dev/todo/styles/media_queries.css', 'client/dev/todo/styles/media_queries.css'],
      ['client/ng1/dev/todo/styles/position.css', 'client/dev/todo/styles/position.css'],
      ['client/ng1/dev/todo/styles/styles.css', 'client/dev/todo/styles/styles.css'],
      ['client/ng1/dev/todo/templates/todo.html', 'client/dev/todo/templates/todo.html']
    ];

    let _pathTest = [];

    if(this.testsSeparated) {
      _pathTest = [
        ['tests/client_ng1/_helpers/invalid-inputs.js', 'tests/client/_helpers/invalid-inputs.js'],
        ['tests/client_ng1/todo/controllers/todo-controller.spec.js', 'tests/client/todo/controllers/todo-controller.spec.js'],
        ['tests/client_ng1/todo/models/todo-model.spec.js', 'tests/client/todo/models/todo-model.spec.js'],
        ['tests/client_ng1/todo/services/todo-dao.spec.js', 'tests/client/todo/services/todo-dao.spec.js']
      ];
    } else {
      _pathTest = [
        ['client/ng1/dev/helpers/invalid-inputs.js', 'client/helpers/invalid-inputs.js'],
        ['client/ng1/todo/controllers/todo-controller.spec.js', 'client/todo/controllers/todo-controller.spec.js'],
        ['client/ng1/todo/models/todo-model.spec.js', 'client/todo/models/todo-model.spec.js'],
        ['client/ng1/todo/services/todo-dao.spec.js', 'client/todo/services/todo-dao.spec.js']
      ]
    }

    this.generator.directory('tasks/client/ng1', 'tasks/client');
    this.generator.template('tasks/client/ng1/watch.js', 'tasks/client/watch.js', {secure: !!this.generator.secure});

    yoUtils.directory(this.generator, _pathSrc, this.generator);
    yoUtils.directory(this.generator, _pathTest, this.generator);




  }

  copyController(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/controllers/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/directive.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName
    });
  }

  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/factory.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {
      name: utils.capitalizeFirst(this.generator.name),
      appName: this.generator.appName
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/service.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName

    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/model.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName
    });
  }

  copyDecorator(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'decorator.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/decorator/${this.generator.name}.js`, {
      appName: this.generator.appName
    });
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'filter.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName
    });
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
      name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'style.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`);
  }

  copyResource(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'resource.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/resource/${this.generator.name}.js`, {
      name: this.generator.name,
      appName: this.generator.appName
    });
  }

  copyModule() {
      this.copyController('../../controller/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyResource('../../resource/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
      this.copyTemplate('../../view/templates/');
  }
}

class Angular2 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen.testsSeparated;
  }

  copyClient() {
    this.generator.directory('tasks/client/ng2', 'tasks/client');
    this.generator.directory('client/ng2', 'client');
    this.generator.template('_karma.conf_ng2.js', 'karma.conf.js');
    this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');
    this.generator.template('_typings_ng2.json', 'typings.json');
    this.generator.template('_tsconfig.json', 'tsconfig.json');

    if(this.testsSeparated) {
      this.generator.directory('tests/client_ng2', 'tests/client');
    } else {
      let _pathTest = [
        ['tests/client_ng2/todo/components/todo-cmp.spec.ts', 'client/dev/todo/components/todo-cmp.spec.ts']
        ['tests/client_ng2/todo/services/todo-service.spec.ts', 'client/dev/todo/services/todo-service.spec.ts']
      ];
      yoUtils.directory(this.generator, _pathTest, this.generator);
    }

    if (this.generator.stack === "client")  {
      this.generator.template('_ng2_systemjs_config_serving_from_root.js', 'client/dev/config.js');
    } else {
      this.generator.template('_ng2_systemjs_config_serving_node_modules.js', 'client/dev/config.js');
    }

    this.generator.template('tasks/client/ng2/watch.js', 'tasks/client/watch.js', {secure: !!this.generator.secure});
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'component.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.ts`, {
      nameCapitalized: utils.capitalizeFirst(this.generator.name),
      name: this.generator.name,
      feature: this.generator.options.feature
    });

    this.generator.template(_pathTemplate + 'component.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
      name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'component.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`);
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/directive.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.ts`, {
      name: this.generator.name
    });
  }


  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/factory.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.ts`, {
      name: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/service.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.ts`, {
      name: this.generator.name
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/model.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.ts`, {
      name: this.generator.name
    });
  }

  copyPipe(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'pipe.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/pipes/${this.generator.name}.ts`, {
      name: this.generator.name
    });
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
      name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'style.css', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`);
  }

  copyModule() {
      this.copyComponent('../../component/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
      this.copyTemplate('../../view/templates/');
  }
}

class AngularFactory {
  static tokens() {
    return {
      NG1: 'ng1',
      NG2: 'ng2'
    };
  }

  static build(token, gen) {
    switch(token) {
      case AngularFactory.tokens().NG1: return new Angular1(gen);
      case AngularFactory.tokens().NG2: return new Angular2(gen);
      default: throw new Error(`Invalid Angular token: ${token}.`);
    }
  }
}

exports.Angular1 = Angular1;
exports.Angular2 = Angular2;
exports.AngularFactory = AngularFactory;
