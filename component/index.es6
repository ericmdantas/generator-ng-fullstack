import yeoman from 'yeoman-generator';
import {ComponentSubGenerator} from '../_ng/sub_generators';

export default class ComponentGenerator extends yeoman.generators.Base {
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
