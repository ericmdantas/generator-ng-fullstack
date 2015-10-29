import util from 'util';
import knownPaths from './known_paths';
import optionsParser from './options_parser';
import utils from './utils';
import {FeatureMissingError} from './errors';

export class ControllerSubGenerator {
    constructor(generator) {
      this.wrapper = generator;
    }

    initializing() {
      this.wrapper.argument('name', {
        required: true,
        type: String,
        desc: 'controller_client'
      });
    }

    writing() {
      const _feature = optionsParser.getFeature(this.wrapper.options);
      const _name = this.wrapper.name;

      if (!_feature.length)
        throw new FeatureMissingError();

      this.wrapper.template('controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + _feature}/controllers/${_name}.controller.js`, {name: _name});
      this.wrapper.template('controller_client_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + _feature}/controllers/${_name}.controller_test.js`, {name: _name, nameLowerCase: _name.toLowerCase()});
    }
}
