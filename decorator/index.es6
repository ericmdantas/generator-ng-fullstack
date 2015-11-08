import {Base} from 'yeoman-generator';
import {DecoratorSubGenerator} from '../_ng/client/sub_generators_decorator';

export default class DecoratorGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new DecoratorSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
