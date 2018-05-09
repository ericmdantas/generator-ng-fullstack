'use strict';

const optionsParser = require('../utils/options_parser');
const {AngularFactory} = require('./angular');
const {VueFactory} = require('./vue');
const {FeatureMissingError} = require('../utils/errors');

exports.ComponentSubGenerator = class ComponentSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.client = this.generator.config.get('client');
    this.generator.appName = this.generator.config.get('appName');
    this.generator.stylePreprocessor = this.generator.config.get('stylePreprocessor');
    this.generator.testsSeparated = this.generator.config.get('testsSeparated');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.generator.options);
    let _client = this.generator.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client === AngularFactory.tokens().NG1) {
      return AngularFactory.build(_client, this.generator).copyComponent();
    }

    if (_client === AngularFactory.tokens().NG2) {
      return AngularFactory.build(_client, this.generator).copyComponent();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(_client, this.generator).copyComponent();
    }
  }
};
