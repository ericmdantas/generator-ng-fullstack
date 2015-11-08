import knownPaths from '../utils/known_paths';
import optionsParser from '../utils/options_parser';
import utils from '../utils/utils';
import {NodeFactory} from './node';
import {GoFactory} from './go';
import {FeatureMissingError} from '../utils/errors';

export class EndpointSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.feature  = optionsParser.getFeature(this.wrapper.options);
    this.wrapper.name = this.wrapper.name;
    this.wrapper.username = this.wrapper.config.get('username');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.server = this.wrapper.config.get('server');
    this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'endpoint'
    });
  }

  writing() {
    if (!this.wrapper.feature.length)
        throw new FeatureMissingError();

    switch (this.wrapper.server) {
        case "go" : GoFactory.build(this.wrapper).copyFiles(); break;
        case "node": NodeFactory.build(this.wrapper).copyFiles(); break;
    }
  }
}
