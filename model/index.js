"use strict";

const Base = require('yeoman-generator').Base;
const ModelSubGenerator = require('../_ng/client/sub_generators_model').ModelSubGenerator;

module.exports = class ModelGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ModelSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
