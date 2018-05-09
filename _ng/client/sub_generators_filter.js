'use strict';

const optionsParser = require('../utils/options_parser');
const {FeatureMissingError} = require('../utils/errors');
const {ModuleDoesntImplementError} = require('../utils/errors');
const {AngularFactory} = require('./angular');
const {VueFactory} = require('./vue');

exports.FilterSubGenerator = class FilterSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.appName = this.generator.config.get('appName');
    this.generator.client = this.generator.config.get('client');
    this.generator.testsSeparated = this.generator.config.get('testsSeparated');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.generator.options);
    let _client = this.generator.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client === AngularFactory.tokens().NG1) {
      return AngularFactory.build(_client, this.generator).copyFilter();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(_client, this.generator).copyFilter();
    }

    throw new ModuleDoesntImplementError(_client, 'filter');
  }
};
