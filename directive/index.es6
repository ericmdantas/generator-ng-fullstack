import yeoman from 'yeoman-generator';
import {DirectiveSubGenerator} from '../_ng/sub_generators_directive';

export default class DirectiveGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new DirectiveSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
