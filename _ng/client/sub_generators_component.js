'use strict';

const optionsParser = require('../utils/options_parser');
const {AngularFactory} = require('./angular');
const {VueFactory} = require('./vue');
const {AureliaFactory} = require('./aurelia');
const {FeatureMissingError} = require('../utils/errors');
const {ModuleDoesntImplementError} = require('../utils/errors');

exports.ComponentSubGenerator = class ComponentSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.client = this.wrapper.config.get('client');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.testsSeparated = this.wrapper.config.get('testsSeparated');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'component'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let _client = this.wrapper.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client === AngularFactory.tokens().NG2) {
      return AngularFactory.build(_client, this.wrapper).copyComponent();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(_client, this.wrapper).copyComponent();
    }

    if (_client === AureliaFactory.tokens().AURELIA1) {
      return AureliaFactory.build(_client, this.wrapper).copyComponent();
    }

    throw new ModuleDoesntImplementError(_client, 'component');
  }
};
