'use strict';

const {Base} = require('yeoman-generator');
const {ModelSubGenerator} = require('../_ng/client/sub_generators_model');

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
};
