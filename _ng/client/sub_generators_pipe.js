"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.PipeSubGenerator = class PipeSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'pipe'
    });
  }

  writing() {
    let _feature = optionsParser.getFeature(this.wrapper.options);
    let name = this.wrapper.name;

    if (!_feature.length)
      throw new FeatureMissingError();

    AngularFactory.build(AngularFactory.tokens().NG2, this.wrapper).copyPipe();
  }
}
