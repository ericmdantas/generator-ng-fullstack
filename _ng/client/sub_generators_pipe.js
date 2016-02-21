"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
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
    let feature = optionsParser.getFeature(this.wrapper.options);
    let name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('pipe.ts', `${knownPaths.PATH_CLIENT_FEATURES + feature}/pipes/${name}.ts`, {name: name});
    this.wrapper.template('pipe_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/pipes/${name}_test.js`, {name: name});
  }
}
