import {Base} from 'yeoman-generator';
import {FactorySubGenerator} from '../_ng/sub_generators_factory';

export default class FactoryGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new FactorySubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
