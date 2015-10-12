import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';
import optionsParser from '../_ng/options_parser';

export default class DecoratorGenerator extends yeoman.generators.Base {
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

    this.template('decorator.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/decorator/' + _name + '.decorator.js');
  }
}
