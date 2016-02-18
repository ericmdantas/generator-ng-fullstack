"use strict";

const Base = require('yeoman-generator').Base;
const FilterSubGenerator = require('../_ng/client/sub_generators_filter').FilterSubGenerator;

module.exports = class FilterGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new FilterSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
