'use strict';

const {Base} = require('yeoman-generator');
const {ViewSubGenerator} = require('../_ng/client/sub_generators_view');

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
