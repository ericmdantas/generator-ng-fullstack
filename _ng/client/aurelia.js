'use strict';

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');
const yoUtils = require('../utils/yeoman-utils');
const copyStylePreprocessor = require('./style').copyStylePreprocessor;

class Aurelia1 {
  constructor(gen) {
    this.generator = gen;
    this.testsSeparated = gen && gen.testsSeparated !== undefined && typeof(gen.testsSeparated) === "boolean" ? gen.testsSeparated : true;
    this.testsPath = this.testsSeparated ? knownPaths.PATH_CLIENT_FEATURES_TEST : knownPaths.PATH_CLIENT_FEATURES;
  }

  copyClient() {
    this.generator.directory('tasks/client/aurelia1', 'tasks/client');
    this.generator.directory('client/aurelia1', 'client');
    this.generator.template('_karma.conf_aurelia1.js', 'karma.conf.js', {testsSeparated: this.testsSeparated});

    if(this.testsSeparated) {
      this.generator.directory('tests/client_aurelia1', 'tests/client');
    } else {
      let _pathTest = [
        ['tests/client_aurelia1/todo/components/todo-cmp_test.js', 'client/dev/todo/components/todo-cmp_test.js'],
        ['tests/client_aurelia1/todo/models/todo-model_test.js', 'client/dev/todo/models/todo-model_test.js'],
        ['tests/client_aurelia1/todo/services/todo-service_test.js', 'client/dev/todo/services/todo-service_test.js']
      ];

      yoUtils.directory(this.generator, _pathTest, this.generator);
    }

    if (this.generator.stack === "client")  {
      this.generator.template('_aurelia_jspm_config_serving_from_root.js', 'jspm.config.js');
    } else {
      this.generator.template('_aurelia_jspm_config_serving_from_jspm_packages.js', 'jspm.config.js');
    }

    this.generator.template('tasks/client/aurelia1/watch.js', 'tasks/client/watch.js', {secure: !!this.generator.secure});
  }

  copyComponent(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/component.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.js`, {
        nameCapitalized: utils.capitalizeFirst(this.generator.name),
        name: this.generator.name,
        feature: this.generator.options.feature
    });

    this.generator.template(_pathTemplate + 'aurelia1/component.html',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/components/${this.generator.name}.html`, {
        name: this.generator.name
      }
    );

    this.generator.template(_pathTemplate + 'aurelia1/component.css',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/styles/${this.generator.name}.css`
    );

    this.generator.template(_pathTemplate + 'aurelia1/component_test.js',
      `${this.testsPath + this.generator.options.feature}/components/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name),
        nameLowerCase: this.generator.name.toLowerCase()
    });
  }

  copyDirective(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/directive.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'aurelia1/directive_test.js',
      `${this.testsPath + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }


  copyFactory(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/factory.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });

    this.generator.template(_pathTemplate + 'aurelia1/factory_test.js',
      `${this.testsPath + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {
        name: utils.capitalizeFirst(this.generator.name)
    });
  }

  copyService(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/service.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'aurelia1/service_test.js',
      `${this.testsPath + this.generator.options.feature}/services/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyModel(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/model.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/models/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'aurelia1/model_test.js',
      `${this.testsPath + this.generator.options.feature}/models/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyFilter(pathTemplate) {
    let _pathTemplate = pathTemplate || '';

    this.generator.template(_pathTemplate + 'aurelia1/filter.js',
      `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/filters/${this.generator.name}.js`, {
        name: this.generator.name
    });

    this.generator.template(_pathTemplate + 'aurelia1/filter_test.js',
      `${this.testsPath + this.generator.options.feature}/filters/${this.generator.name}_test.js`, {
        name: this.generator.name
    });
  }

  copyStyle(pathTemplate) {
    copyStylePreprocessor(this.generator, pathTemplate);
  }

  copyModule() {
      this.copyComponent('../../component/templates/');
      this.copyDirective('../../directive/templates/');
      this.copyFactory('../../factory/templates/');
      this.copyService('../../service/templates/');
      this.copyModel('../../model/templates/');
      this.copyStyle('../../style/templates/');
  }
}

class AureliaFactory {
  static tokens() {
    return {
      AURELIA1: 'aurelia1'
    };
  }

  static build(token, gen) {
    switch(token) {
      case AureliaFactory.tokens().AURELIA1: return new Aurelia1(gen);
      default: throw new Error(`Invalid Aurelia token: ${token}.`);
    }
  }
}

exports.Aurelia1 = Aurelia1;
exports.AureliaFactory = AureliaFactory;
