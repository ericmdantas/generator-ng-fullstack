import yeoman from 'yeoman-generator';
import {EndpointSubGenerator} from '../_ng/sub_generators';

export default class EndpointGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new EndpointSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
