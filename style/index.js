'use strict';

const Base = require('yeoman-generator').Base;
const StyleSubGenerator = require('../_ng/client/sub_generators_style').StyleSubGenerator;

module.exports = class StyleGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new StyleSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
};
