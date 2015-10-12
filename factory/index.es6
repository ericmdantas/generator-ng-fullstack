import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';
import optionsParser from '../_ng/options_parser';
import utils from '../_ng/utils';

export default class FactoryGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);
  }

  initializing() {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'factory'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.options);
    const _name = this.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.template('factory.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/factory/' + _name + '.factory.js', {name: utils.capitalizeFirst(_name)});
    this.template('factory_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/factory/' + _name + '.factory_test.js', {name: utils.capitalizeFirst(_name)});
  }
}
