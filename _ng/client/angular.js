"use strict";

const utils = require('../utils/utils');
const knownPaths = require('../utils/known_paths');

class Angular1 {
  constructor(gen) {
    this.generator = gen;
  }

  copyClient() {
    this.generator.directory('tasks/client_ng1', 'tasks/client');
    this.generator.directory('tests/client_ng1', 'tests/client');
    this.generator.directory('client_ng1', 'client');
  }

  copyDirective() {
    this.generator.template('ng1/directive.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/directives/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template('ng1/directive_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/directives/${this.generator.name}_test.js`, {name: this.generator.name});
  }

  copyFactory() {
    this.generator.template('ng1/factory.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/factory/${this.generator.name}.js`, {name: utils.capitalizeFirst(this.generator.name)});
    this.generator.template('ng1/factory_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/factory/${this.generator.name}_test.js`, {name: utils.capitalizeFirst(this.generator.name)});
  }

  copyService() {
    this.generator.template('ng1/service.js', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/services/${this.generator.name}.js`, {name: this.generator.name});
    this.generator.template('ng1/service_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/services/${this.generator.name}_test.js`, {name: this.generator.name});
  }
}

class Angular2 {
  constructor(gen) {
    this.generator = gen;
  }

  copyClient() {
    this.generator.directory('tasks/client_ng2', 'tasks/client');
    this.generator.directory('tests/client_ng2', 'tests/client');
    this.generator.directory('client_ng2', 'client');
    this.generator.template('_karma.conf_ng2.js', 'karma.conf.js');
    this.generator.template('_karma-test-shim.js', 'karma-test-shim.js');
    this.generator.template('_typings_ng2.json', 'typings.json');
  }

  copyDirective() {
    this.generator.template('ng2/directive.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template('ng2/directive_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/${this.generator.name}_test.ts`, {name: this.generator.name});
  }

  copyFactory() {
    this.generator.template('ng2/factory.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/${this.generator.name}.ts`, {name: utils.capitalizeFirst(this.generator.name)});
    this.generator.template('ng2/factory_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/${this.generator.name}_test.ts`, {name: utils.capitalizeFirst(this.generator.name)});
  }

  copyService() {
    this.generator.template('ng2/service.ts', `${knownPaths.PATH_CLIENT_FEATURES + this.generator.options.feature}/${this.generator.name}.ts`, {name: this.generator.name});
    this.generator.template('ng2/service_test.ts', `${knownPaths.PATH_CLIENT_FEATURES_TEST + this.generator.options.feature}/${this.generator.name}_test.ts`, {name: this.generator.name});
  }
}

class AngularFactory {
  static tokens() {
    return {
      NG1: 'ng1',
      NG2: 'ng2'
    }
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
