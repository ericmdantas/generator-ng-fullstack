'use strict';

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.ViewSubGenerator = class ViewSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.ngVersion = this.wrapper.config.get('client');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'view'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);

    if (!feature.length) {
      throw new FeatureMissingError();
    }

    AngularFactory.build(this.wrapper.ngVersion, this.wrapper).copyTemplate();
  }
};
