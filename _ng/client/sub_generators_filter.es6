import knownPaths from '../utils/known_paths';
import optionsParser from '../utils/options_parser';
import utils from '../utils/utils';
import {FeatureMissingError} from '../utils/errors';

export class FilterSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    let feature = optionsParser.getFeature(this.wrapper.options);
    let name = this.wrapper.name;

    if (!feature.length)
      throw new FeatureMissingError();

    this.wrapper.template('filter.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/filters/${name}.filter.js`, {name});
    this.wrapper.template('filter_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/filters/${name}.filter_test.js`, {name});
  }
}
