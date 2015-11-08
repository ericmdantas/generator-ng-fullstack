import {Base} from 'yeoman-generator';
import {FilterSubGenerator} from '../_ng/client/sub_generators_filter';

export default class FilterGenerator extends Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new FilterSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
