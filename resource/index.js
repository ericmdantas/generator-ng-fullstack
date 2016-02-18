"use strict";

const Base = require('yeoman-generator').Base;
const ResourceSubGenerator = require('../_ng/client/sub_generators_resource').ResourceSubGenerator;

module.exports = class ResourceGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ResourceSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
