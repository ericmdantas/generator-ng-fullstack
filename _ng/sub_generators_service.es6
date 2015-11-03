import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

export class ServiceSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'service'
    });
  }

  writing() {
    const feature = optionsParser.getFeature(this.wrapper.options);
    const name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('ng1/service.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/services/${name}.service.js`, {name});
    this.wrapper.template('ng1/service_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/services/${name}.service_test.js`, {name});
  }
}
