import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';
import optionsParser from '../_ng/options_parser';

export default class filterGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);
  }

  initializing() {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'filter'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.options);
    const _name = this.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.template('filter.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/filters/' + this.name + '.filter.js', {name: _name});
    this.template('filter_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/filters/' + this.name + '.filter_test.js', {name: _name});
  }
}
