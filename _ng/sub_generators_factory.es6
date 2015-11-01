import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

export class FactorySubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'factory'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('ng1/factory.js', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/factory/${_name}.factory.js`, {name: utils.capitalizeFirst(_name)});
    this.wrapper.template('ng1/factory_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/factory/${_name}.factory_test.js`, {name: utils.capitalizeFirst(_name)});
  }
}
