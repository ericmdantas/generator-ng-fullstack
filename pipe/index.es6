import {Base} from 'yeoman-generator';
import {PipeSubGenerator} from '../_ng/sub_generators_pipe';

export default class PipeGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new PipeSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
