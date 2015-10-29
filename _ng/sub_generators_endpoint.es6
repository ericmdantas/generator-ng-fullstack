import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {NodeFactory} from './node';
import {GoFactory} from './go';
import {FeatureMissingError} from './errors';

export class EndpointSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'endpoint'
    });
  }

  writing() {
    this.wrapper.feature  = optionsParser.getFeature(this.wrapper.options);
    this.wrapper.name = this.wrapper.name;
    this.wrapper.username = this.wrapper.config.get('username');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.server = this.wrapper.config.get('server') ?  this.wrapper.config.get('server').toLowerCase() : undefined;
    this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer') ? this.wrapper.config.get('transpilerServer').toLowerCase() : undefined;

    if (!this.wrapper.feature.length)
        throw new FeatureMissingError();

    switch (this.wrapper.server) {
        case "go" : GoFactory.build(this.wrapper).copyFiles(); break;
        default: NodeFactory.build(this.wrapper).copyFiles(); break;
    }
  }
}
