'use strict';

const optionsParser = require('../utils/options_parser');
const {FeatureMissingError} = require('../utils/errors');
const {AngularFactory} = require('./angular');
const {AureliaFactory} = require('./aurelia');
const {VueFactory} = require('./vue');

exports.ModelSubGenerator = class ModelSubGenerator {
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
      desc: 'model'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let _client = this.wrapper.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if ((_client === AngularFactory.tokens().NG1) || (_client === AngularFactory.tokens().NG2)) {
      return AngularFactory.build(this.wrapper.client, this.wrapper).copyModel();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(this.wrapper.client, this.wrapper).copyModel();
    }

    if (_client === AureliaFactory.tokens().AURELIA1) {
      return AureliaFactory.build(_client, this.wrapper).copyModel();
    }
  }
};
