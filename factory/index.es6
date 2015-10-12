import yeoman from 'yeoman-generator';
import {FactorySubGenerator} from '../_ng/sub_generators';

export default class FactoryGenerator extends yeoman.generators.Base {
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
