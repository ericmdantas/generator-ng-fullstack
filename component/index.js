'use strict';

const {Base} = require('yeoman-generator');
const {ComponentSubGenerator} = require('../_ng/client/sub_generators_component');

module.exports = class ComponentGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ComponentSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
};
