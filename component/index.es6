import {Base} from 'yeoman-generator';
import {ComponentSubGenerator} from '../_ng/client/sub_generators_component';

export default class ComponentGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config)

    this.generator = new ComponentSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
