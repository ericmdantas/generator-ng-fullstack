'use strict';

const optionsParser = require('../utils/options_parser');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.StyleSubGenerator = class StyleSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.ngVersion = this.wrapper.config.get('client');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'style'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);

    if (!feature.length) {
      throw new FeatureMissingError();
    }

    AngularFactory.build(this.wrapper.ngVersion, this.wrapper).copyStyle();
  }
};
