import {Base} from 'yeoman-generator';
import {EndpointSubGenerator} from '../_ng/sub_generators_endpoint';

export default class EndpointGenerator extends Base {
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
