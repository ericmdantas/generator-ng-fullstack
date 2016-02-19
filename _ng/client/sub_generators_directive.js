"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;
const AngularFactory = require('./angular').AngularFactory;

export class DirectiveSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.ngVersion = this.wrapper.config.get('ngVersion');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'directive'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);

    if (!feature.length)
      throw new FeatureMissingError();

    AngularFactory.build(this.wrapper.ngVersion, this.wrapper).copyDirective();
  }
}
