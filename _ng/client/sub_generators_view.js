"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.ViewSubGenerator = class ViewSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
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
    let name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('view.html', `${knownPaths.PATH_CLIENT_FEATURES + feature}/templates/${name}.html`);
  }
}
