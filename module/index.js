'use strict';

const Base = require('yeoman-generator').Base;
const ModuleSubGenerator = require('../_ng/client/sub_generators_module').ModuleSubGenerator;

module.exports = class ModuleGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ModuleSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
};
