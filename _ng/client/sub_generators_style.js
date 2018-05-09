'use strict';

const optionsParser = require('../utils/options_parser');
const {FeatureMissingError} = require('../utils/errors');
const {AngularFactory} = require('./angular');
const {VueFactory} = require('./vue');

exports.StyleSubGenerator = class StyleSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.client = this.generator.config.get('client');
    this.generator.stylePreprocessor = this.generator.config.get('stylePreprocessor');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'style'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.generator.options);
    let _client = this.generator.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if ((_client === AngularFactory.tokens().NG1) || (_client === AngularFactory.tokens().NG2)) {
      return AngularFactory.build(this.generator.client, this.generator).copyStyle();
    }

    if (_client === VueFactory.tokens().VUE2) {
      return VueFactory.build(this.generator.client, this.generator).copyStyle();
    }
  }
};
