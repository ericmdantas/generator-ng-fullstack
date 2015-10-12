import yeoman from 'yeoman-generator';
import util from 'util';
import knownPaths from '../_ng/known_paths';
import optionsParser from '../_ng/options_parser';

export default class ControllerGenerator extends yeoman.generators.Base {
    constructor(args, options, config) {
      super(args, options, config);
    }

    initializing() {
      this.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }

    writing() {
      const _feature = optionsParser.getFeature(this.options);
      const _name = this.name;

      if (!_feature.length)
        throw new Error('Feature is needed. Do it like this: --feature something-here');

      this.template('controller_client.js', knownPaths.PATH_CLIENT_FEATURES + _feature + '/controllers/' + _name + '.controller.js', {name: _name});
      this.template('controller_client_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _feature + '/controllers/' + _name + '.controller_test.js', {name: _name, nameLowerCase: _name.toLowerCase()});
    }
}
