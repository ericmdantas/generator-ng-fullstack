import yeoman from 'yeoman-generator';
import {ServiceSubGenerator} from '../_ng/sub_generators_service';

export default class ServiceGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new ServiceSubGenerator(this);
  }

  initializing() {
    this.generator.initializing();
  }

  writing() {
    this.generator.writing();
  }
}
