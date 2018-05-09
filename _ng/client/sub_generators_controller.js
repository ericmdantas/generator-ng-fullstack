'use strict';

const optionsParser = require('../utils/options_parser');
const {AngularFactory} = require('./angular');
const {FeatureMissingError} = require('../utils/errors');
const {ModuleDoesntImplementError} = require('../utils/errors');

exports.ControllerSubGenerator = class ControllerSubGenerator {
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
      desc: 'controller_client'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.generator.options);
    let _client = this.generator.client;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_client !== AngularFactory.tokens().NG1) {
      throw new ModuleDoesntImplementError(_client, 'controller');
    }

    AngularFactory.build(AngularFactory.tokens().NG1, this.generator).copyController();
  }
};
