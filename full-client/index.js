"use strict";

const Base = require('yeoman-generator').Base;
const FullClientSubGenerator = require('../_ng/client/sub_generators_full_client').FullClientSubGenerator;

module.exports = class FullClientGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new FullClientSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
