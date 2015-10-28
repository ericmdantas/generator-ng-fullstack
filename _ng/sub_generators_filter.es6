import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';

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
    const _feature = optionsParser.getFeature(this.wrapper.options);
    const _name = this.wrapper.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.wrapper.template('filter.js', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/filters/${_name}.filter.js`, {name: _name});
    this.wrapper.template('filter_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/filters/${_name}.filter_test.js`, {name: _name});
  }
}
