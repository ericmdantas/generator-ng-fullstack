'use strict';

const Base = require('yeoman-generator').Base;
const ServiceSubGenerator = require('../_ng/client/sub_generators_service').ServiceSubGenerator;

module.exports = class ServiceGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ServiceSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
};
