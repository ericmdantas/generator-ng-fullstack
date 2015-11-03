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
      const feature = optionsParser.getFeature(this.wrapper.options);
      const name = this.wrapper.name;
      const nameLowerCase = name.toLowerCase();

      if (!feature.length)
        throw new FeatureMissingError();

      this.wrapper.template('controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/controllers/${name}.controller.js`, {name});
      this.wrapper.template('controller_client_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/controllers/${name}.controller_test.js`, {name, nameLowerCase});
    }
}
