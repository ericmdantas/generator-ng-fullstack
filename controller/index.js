'use strict';

const {Base} = require('yeoman-generator');
const {ControllerSubGenerator} = require('../_ng/client/sub_generators_controller');

module.exports = class ControllerGenerator extends Base {
    constructor(args, options, config) {
      super(args, options, config);

      this.generator = new ControllerSubGenerator(this);
    }

    initializing() {
      this.generator.initializing();
    }

    writing() {
      this.generator.writing();
    }
};
