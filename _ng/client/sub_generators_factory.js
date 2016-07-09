'use strict';

const optionsParser = require('../utils/options_parser');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const AngularFactory = require('./angular').AngularFactory;

exports.FactorySubGenerator = class FactorySubGenerator {
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
      desc: 'factory'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);

    if (!feature.length) {
      throw new FeatureMissingError();
    }

    AngularFactory.build(this.wrapper.ngVersion, this.wrapper).copyFactory();
  }
};
