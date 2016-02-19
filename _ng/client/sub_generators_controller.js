"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.ControllerSubGenerator = class ControllerSubGenerator {
    constructor(generator) {
      this.wrapper = generator;
    }

    initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }

    writing() {
      let feature = optionsParser.getFeature(this.wrapper.options);
      let name = this.wrapper.name;
      let nameLowerCase = name.toLowerCase();

      if (!feature.length)
        throw new FeatureMissingError();

      this.wrapper.template('controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/controllers/${name}.controller.js`, {name: name});
      this.wrapper.template('controller_client_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/controllers/${name}.controller_test.js`, {name: name, nameLowerCase: nameLowerCase});
    }
}
