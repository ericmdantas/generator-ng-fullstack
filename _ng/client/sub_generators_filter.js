"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.FilterSubGenerator = class FilterSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);
    let name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('filter.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/filters/${name}.filter.js`, {name: name});
    this.wrapper.template('filter_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/filters/${name}.filter_test.js`, {name: name});
  }
}
