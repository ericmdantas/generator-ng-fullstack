import yeoman from 'yeoman-generator';
import {ResourceSubGenerator} from '../_ng/sub_generators';

export default class ResourceGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ResourceSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
