'use strict';

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const ModuleDoesntImplementError = require('../utils/errors').ModuleDoesntImplementError;

exports.ComponentSubGenerator = class ComponentSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.ngVersion = this.wrapper.config.get('client');
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
    let _ngVersion = this.wrapper.ngVersion;

    if (!_feature.length) {
      throw new FeatureMissingError();
    }

    if (_ngVersion !== AngularFactory.tokens().NG2) {
      throw new ModuleDoesntImplementError(_ngVersion, 'component');
    }

    AngularFactory.build(AngularFactory.tokens().NG2, this.wrapper).copyComponent();
  }
};
