'use strict';

const Base = require('yeoman-generator').Base;
const ViewSubGenerator = require('../_ng/client/sub_generators_view').ViewSubGenerator;

module.exports = class ViewGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ViewSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
