'use strict';

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');
const {
  copyStyleForSubGenerator,
  copyStyleForMainGenerator,
  normalizeStylePreprocessor
} = require('./style');

class Vue2 {
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

    this.generator.template(_pathTemplate + 'vue2/component.vue',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.vue`, {
        nameCapitalized: utils.capitalizeFirst(this.generator.name),
        name: this.generator.name,
        feature: this.generator.options.feature
    });

    this.generator.template(_pathTemplate + 'vue2/component_test.js',
      `${this.testsPath + this.generator.options.feature}/components/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name),
        nameLowerCase: this.generator.name.toLowerCase()
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/directive.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/directive_test.js',
      `${this.testsPath + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }


  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/factory.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });

    this.generator.template(_pathTemplate + 'vue2/factory_test.js',
      `${this.testsPath + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/service.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/service_test.js',
      `${this.testsPath + this.generator.options.feature}/services/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/model.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/model_test.js',
      `${this.testsPath + this.generator.options.feature}/models/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'vue2/filter.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'vue2/filter_test.js',
      `${this.testsPath + this.generator.options.feature}/filters/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    copyStyleForSubGenerator(this.generator, pathTemplate);
  }

  copyModule() {
      this.copyComponent('../../component/templates/');
      this.copyDirective('../../directive/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
  }

  _copyTodoBoilerplate() {
    if (this.generator.boilerplate) {
      this.generator.directory('client/vue2', 'client');

      if(this.testsSeparated) {
        this.generator.directory('tests/client_vue2', 'tests/client');
      } else {
        let _pathTest = [
          ['tests/client_vue2/todo/components/todo-cmp_test.js', 'client/dev/todo/components/todo-cmp_test.js'],
          ['tests/client_vue2/todo/models/todo-model_test.js', 'client/dev/todo/models/todo-model_test.js'],
          ['tests/client_vue2/todo/services/todo-service_test.js', 'client/dev/todo/services/todo-service_test.js']
        ];

        yoUtils.directory(this.generator, _pathTest, this.generator);
      }

      copyStyleForMainGenerator(this.generator, 'client/dev/todo/styles/todo');
    } else {
      let _pathSrc = [];

      _pathSrc.push(
        ['client/vue2/dev/index.js', 'client/dev/index.js'],
        ['client/vue2/dev/index.html', 'client/dev/index.html']
      );

      yoUtils.directory(this.generator, _pathSrc, this.generator);
    }
  }

  _copyTasks() {
    this.generator.directory('tasks/client/vue2', 'tasks/client');

    this.generator.template('webpack.config.dev_vue2.js', 'webpack.config.dev.js');
    this.generator.template('webpack.config.prod_vue2.js', 'webpack.config.prod.js');

    this.generator.template('tasks/client/vue2/const.js', 'tasks/client/const.js', {
      stylePreprocessor: normalizeStylePreprocessor(this.generator.stylePreprocessor)
    });
  }

  _copyConfigTests() {
    this.generator.template('_karma.conf_vue2.js', 'karma.conf.js', {
      testsSeparated: this.testsSeparated
    });
  }
}

class VueFactory {
  static tokens() {
    return {
      VUE2: 'vue2'
    };
  }

  static build(token, gen) {
    switch(token) {
      case VueFactory.tokens().VUE2: return new Vue2(gen);
      default: throw new Error(`Invalid Vue token: ${token}.`);
    }
  }
}

exports.Vue2 = Vue2;
exports.VueFactory = VueFactory;
