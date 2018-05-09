'use strict';

const optionsParser = require('../utils/options_parser');
const {AngularFactory} = require('./angular');
const {FeatureMissingError} = require('../utils/errors');

exports.ViewSubGenerator = class ViewSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.client = this.generator.config.get('client');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'view'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.generator.options);

    if (!feature.length) {
      throw new FeatureMissingError();
    }

    AngularFactory.build(this.generator.client, this.generator).copyTemplate();
  }
};
