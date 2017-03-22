'use strict';

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');
const {
  copyStyleForSubGenerator,
  copyStyleForMainGenerator,
  normalizeStylePreprocessor
} = require('./style');

class Angular1 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen && gen.testsSeparated !== undefined && typeof(gen.testsSeparated) === "boolean" ? gen.testsSeparated : true;
    this.testsPath = this.testsSeparated ? knownPaths.PATH_CLIENT_FEATURES_TEST : knownPaths.PATH_CLIENT_FEATURES;
  }

  copyClient() {
      this._copyTodoBoilerplate();
      this._copyTasks();
      this._copyConfigTests();
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/component.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.js`, {
        nameCapitalized: utils.capitalizeFirst(this.generator.name),
        name: this.generator.name,
        feature: this.generator.options.feature,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/component.html',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'ng1/component.css',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`
    );

    this.generator.template(_pathTemplate + 'ng1/component_test.js',
      `${this.testsPath + this.generator.options.feature}/components/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name),
        nameLowerCase: this.generator.name.toLowerCase()
    });
  }

  copyController(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/controller_client.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/controllers/${this.generator.name}.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/controller_client_test.js',
      `${this.testsPath + this.generator.options.feature}/controllers/${this.generator.name}_test.js`, {
        name: this.generator.name,
        nameLowerCase: this.generator.name.toLowerCase(),
        appName: this.generator.appName
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/directive.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/directive_test.js',
      `${this.testsPath + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {
        name: this.generator.name,
        appName: this.generator.appName,
        testsSeparated: this.generator.testsSeparated
    });
  }

  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/factory.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {
        name: utils.capitalizeFirst(this.generator.name),
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/factory_test.js',
      `${this.testsPath + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name),
        appName: this.generator.appName
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/service.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/service_test.js',
      `${this.testsPath + this.generator.options.feature}/services/${this.generator.name}_test.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/model.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/model_test.js',
      `${this.testsPath + this.generator.options.feature}/models/${this.generator.name}_test.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });
  }

  copyDecorator(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/decorator.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/decorator/${this.generator.name}.js`, {
        appName: this.generator.appName
    });
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/filter.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });

    this.generator.template(_pathTemplate + 'ng1/filter_test.js',
      `${this.testsPath + this.generator.options.feature}/filters/${this.generator.name}_test.js`, {
        name: this.generator.name,
        appName: this.generator.appName
    });
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
        name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    copyStyleForSubGenerator(this.generator, pathTemplate);
  }

  copyResource(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng1/resource.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/resources/${this.generator.name}.js`, {
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

  _copyTodoBoilerplate() {
    let _pathSrc = [];
    let _pathTest = [];

    if (this.generator.boilerplate) {
      _pathSrc.push(
        ['client/ng1/dev/index.html', 'client/dev/index.html'],
        ['client/ng1/dev/favicon.png', 'client/dev/favicon.png'],
        ['client/ng1/dev/app.js', 'client/dev/app.js'],
        ['client/ng1/dev/app.route.js', 'client/dev/app.route.js'],
        ['client/ng1/dev/app.config.js', 'client/dev/app.config.js'],
        ['client/ng1/dev/todo/controllers/todo-controller.js', 'client/dev/todo/controllers/todo-controller.js'],
        ['client/ng1/dev/todo/models/todo-model.js', 'client/dev/todo/models/todo-model.js'],
        ['client/ng1/dev/todo/services/todo-dao.js', 'client/dev/todo/services/todo-dao.js'],
        ['client/ng1/dev/todo/resources/todo-resource.js', 'client/dev/todo/resources/todo-resource.js'],
        ['client/ng1/dev/todo/templates/todo.html', 'client/dev/todo/templates/todo.html']
      );

      if(this.testsSeparated) {
        _pathTest = [
          ['tests/client_ng1/todo/controllers/todo-controller_test.js', 'tests/client/todo/controllers/todo-controller_test.js'],
          ['tests/client_ng1/todo/models/todo-model_test.js', 'tests/client/todo/models/todo-model_test.js'],
          ['tests/client_ng1/todo/services/todo-dao_test.js', 'tests/client/todo/services/todo-dao_test.js']
        ];
      } else {
        _pathTest = [
          ['tests/client_ng1/todo/controllers/todo-controller_test.js', 'client/dev/todo/controllers/todo-controller_test.js'],
          ['tests/client_ng1/todo/models/todo-model_test.js', 'client/dev/todo/models/todo-model_test.js'],
          ['tests/client_ng1/todo/services/todo-dao_test.js', 'client/dev/todo/services/todo-dao_test.js']
        ];
      }

      yoUtils.directory(this.generator, _pathSrc, this.generator);
      yoUtils.directory(this.generator, _pathTest, this.generator);

      copyStyleForMainGenerator(this.generator, 'client/dev/todo/styles/todo');
    } else {
      _pathSrc.push(
        ['client/ng1/dev/index.html', 'client/dev/index.html'],
        ['client/ng1/dev/favicon.png', 'client/dev/favicon.png'],
        ['client/ng1/dev/app.js', 'client/dev/app.js'],
        ['client/ng1/dev/app.route.js', 'client/dev/app.route.js'],
        ['client/ng1/dev/app.config.js', 'client/dev/app.config.js']
      );
    }

    yoUtils.directory(this.generator, _pathSrc, this.generator);
  }

  _copyTasks() {
    this.generator.directory('tasks/client/ng1', 'tasks/client');

    this.generator.template('tasks/client/ng1/const.js', 'tasks/client/const.js', {
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });

    this.generator.template('tasks/client/ng1/build_css.js', 'tasks/client/build_css.js', {
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });

    this.generator.template('tasks/client/ng1/watch.js', 'tasks/client/watch.js', {
      secure: !!this.generator.secure,
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });
  }

  _copyConfigTests() {
    this.generator.template('_karma.conf_ng1.js', 'karma.conf.js', {
      app: this.generator.appName,
      testsSeparated: this.generator.testsSeparated
    });
  }

}

class Angular2 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen && gen.testsSeparated !== undefined && typeof(gen.testsSeparated) === "boolean" ? gen.testsSeparated : true;
    this.testsPath = this.testsSeparated ? knownPaths.PATH_CLIENT_FEATURES_TEST : knownPaths.PATH_CLIENT_FEATURES;
  }

  copyClient() {
    this._copyTodoBoilerplate();
    this._copyTsc();
    this._copyTasks();
    this._copyConfigTests();
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/component.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.ts`, {
        nameCapitalized: utils.capitalizeFirst(this.generator.name),
        name: this.generator.name,
        feature: this.generator.options.feature
    });

    this.generator.template(_pathTemplate + 'ng2/component.html',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'ng2/component.css',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`
    );

    this.generator.template(_pathTemplate + 'ng2/component_test.ts',
      `${this.testsPath + this.generator.options.feature}/components/${this.generator.name}_test.ts`, {
        name: utils.capitalizeFirst(this.generator.name),
        nameLowerCase: this.generator.name.toLowerCase()
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/directive.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.ts`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'ng2/directive_test.ts',
      `${this.testsPath + this.generator.options.feature}/directives/${this.generator.name}_test.ts`, {
        name: this.generator.name
    });
  }


  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/factory.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.ts`, {
        name: utils.capitalizeFirst(this.generator.name)
    });

    this.generator.template(_pathTemplate + 'ng2/factory_test.ts',
      `${this.testsPath + this.generator.options.feature}/factory/${this.generator.name}_test.ts`, {
        name: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/service.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.ts`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'ng2/service_test.ts',
      `${this.testsPath + this.generator.options.feature}/services/${this.generator.name}_test.ts`, {
        name: this.generator.name
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/model.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.ts`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'ng2/model_test.ts',
      `${this.testsPath + this.generator.options.feature}/models/${this.generator.name}_test.ts`, {
        name: this.generator.name
    });
  }

  copyPipe(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'ng2/pipe.ts',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/pipes/${this.generator.name}.ts`, {
        name: this.generator.name,
        nameCapitalized: utils.capitalizeFirst(this.generator.name)
    });

    this.generator.template(_pathTemplate + 'ng2/pipe_test.js',
      `${this.testsPath + this.generator.options.feature}/pipes/${this.generator.name}_test.js`, {
        name: this.generator.name,
        nameCapitalized: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyTemplate(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'view.html',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/templates/${this.generator.name}.html`, {
        name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    copyStyleForSubGenerator(this.generator, pathTemplate);
  }

  copyModule() {
      this.copyComponent('../../component/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
      this.copyTemplate('../../view/templates/');
  }

  _copyTodoBoilerplate() {
    let _pathSrc = [];

    if (this.generator.boilerplate) {
      this.generator.directory('client/ng2', 'client');

      if(this.testsSeparated) {
        this.generator.directory('tests/client_ng2', 'tests/client');
      } else {
        let _pathTest = [
          ['tests/client_ng2/todo/components/todo-cmp_test.ts', 'client/dev/todo/components/todo-cmp_test.ts'],
          ['tests/client_ng2/todo/services/todo-service_test.ts', 'client/dev/todo/services/todo-service_test.ts']
        ];

        yoUtils.directory(this.generator, _pathTest, this.generator);
      }

      copyStyleForMainGenerator(this.generator, 'client/dev/todo/styles/todo');
    } else {
      _pathSrc.push(
        ['client/ng2/dev/index.ts', 'client/dev/index.ts'],
        ['client/ng2/dev/app.ts', 'client/dev/app.ts'],
        ['client/ng2/dev/app.module.ts', 'client/dev/app.module.ts'],
        ['client/ng2/dev/index.html', 'client/dev/index.html']
      );

      yoUtils.directory(this.generator, _pathSrc, this.generator);
    }

    if (this.generator.stack === "client")  {
      this.generator.template('_ng2_systemjs_config_serving_from_root.js', 'client/dev/config.js');
    } else {
      this.generator.template('_ng2_systemjs_config_serving_node_modules.js', 'client/dev/config.js');
    }
  }

  _copyTsc() {
    this.generator.template('_typings_ng2.json', 'typings.json');
    this.generator.template('_tsconfig.json', 'tsconfig.json');
  }

  _copyTasks() {
    this.generator.directory('tasks/client/ng2', 'tasks/client');

    this.generator.template('tasks/client/ng2/const.js', 'tasks/client/const.js', {
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });

    this.generator.template('tasks/client/ng2/build_css.js', 'tasks/client/build_css.js', {
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });

    this.generator.template('tasks/client/ng2/watch.js', 'tasks/client/watch.js', {
      secure: !!this.generator.secure,
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });
  }

  _copyConfigTests() {
    this.generator.template('_karma.conf_ng2.js', 'karma.conf.js', {testsSeparated: this.testsSeparated});
    this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');
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
