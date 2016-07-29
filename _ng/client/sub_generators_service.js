'use strict';

const optionsParser = require('../utils/options_parser');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const AngularFactory = require('./angular').AngularFactory;
const AureliaFactory = require('./aurelia').AureliaFactory;
const VueFactory = require('./vue').VueFactory;

exports.ServiceSubGenerator = class ServiceSubGenerator {
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
      desc: 'service'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let _client = this.wrapper.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if ((_client === AngularFactory.tokens().NG1) || (_client === AngularFactory.tokens().NG2)) {
      return AngularFactory.build(this.wrapper.client, this.wrapper).copyService();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(this.wrapper.client, this.wrapper).copyService();
    }

    if (_client === AureliaFactory.tokens().AURELIA1) {
      return AureliaFactory.build(this.wrapper.client, this.wrapper).copyService();
    }
  }
};
