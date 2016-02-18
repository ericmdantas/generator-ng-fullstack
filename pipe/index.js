"use strict";

const Base = require('yeoman-generator').Base;
const PipeSubGenerator = require('../_ng/client/sub_generators_pipe').PipeSubGenerator;

module.exports = class PipeGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new PipeSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
