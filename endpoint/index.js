"use strict";

const Base = require('yeoman-generator').Base;
const EndpointSubGenerator = require('../_ng/server/sub_generators_endpoint').EndpointSubGenerator;

module.exports = class EndpointGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new EndpointSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
