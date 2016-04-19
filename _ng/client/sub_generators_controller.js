"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const AngularFactory = require('./angular').AngularFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.ControllerSubGenerator = class ControllerSubGenerator {
    constructor(generator) {
      this.wrapper = generator;
      this.wrapper.appName = this.wrapper.config.get('appName');
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

      if (!feature.length)
        throw new FeatureMissingError();

      AngularFactory.build(AngularFactory.tokens().NG1, this.wrapper).copyController();
    }
}
