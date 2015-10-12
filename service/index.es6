import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';
import optionsParser from '../_ng/options_parser';

export default class ServiceGenerator extends yeoman.generators.Base {
  constructor(args, options, config) {
    super(args, options, config);
  }

  initializing() {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'service'
    });
  }

  writing() {
    const _feature = optionsParser.getFeature(this.options);
    const _name = this.name;

    if (!_feature.length)
      throw new Error('Feature is needed. Do it like this: --feature something-here');

    this.template('service.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/services/' + this.name + '.service.js', {name: _name});
    this.template('service_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/services/' + this.name + '.service_test.js', {name: _name});
  }
}
