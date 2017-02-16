'use strict';

const optionsParser = require('../utils/options_parser');
const {FeatureMissingError} = require('../utils/errors');
const {ModuleDoesntImplementError} = require('../utils/errors');
const {AngularFactory} = require('./angular');
const {AureliaFactory} = require('./aurelia');
const {VueFactory} = require('./vue');

exports.FilterSubGenerator = class FilterSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.client = this.wrapper.config.get('client');
    this.wrapper.testsSeparated = this.wrapper.config.get('testsSeparated');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let _client = this.wrapper.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client === AngularFactory.tokens().NG1) {
      return AngularFactory.build(_client, this.wrapper).copyFilter();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(_client, this.wrapper).copyFilter();
    }

    if (_client === AureliaFactory.tokens().AURELIA1) {
      return AureliaFactory.build(_client, this.wrapper).copyFilter();
    }

    throw new ModuleDoesntImplementError(_client, 'filter');
  }
};
