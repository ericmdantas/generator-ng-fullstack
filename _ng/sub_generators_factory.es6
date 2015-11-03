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
    const feature = optionsParser.getFeature(this.wrapper.options);
    const name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('ng1/factory.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/factory/${name}.factory.js`, {name: utils.capitalizeFirst(name)});
    this.wrapper.template('ng1/factory_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/factory/${name}.factory_test.js`, {name: utils.capitalizeFirst(name)});
  }
}
