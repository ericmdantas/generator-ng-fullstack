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
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('service.js', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/services/${_name}.service.js`, {name: _name});
    this.wrapper.template('service_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/services/${_name}.service_test.js`, {name: _name});
  }
}
