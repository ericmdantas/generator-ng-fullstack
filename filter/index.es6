import yeoman from 'yeoman-generator';
import {FilterSubGenerator} from '../_ng/sub_generators_filter';

export default class FilterGenerator extends yeoman.generators.Base {
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
