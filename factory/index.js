'use strict';

const Base = require('yeoman-generator').Base;
const FactorySubGenerator = require('../_ng/client/sub_generators_factory').FactorySubGenerator;

module.exports = class FactoryGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new FactorySubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
};
