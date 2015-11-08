import knownPaths from '../utils/known_paths';
import optionsParser from '../utils/options_parser';
import utils from '../utils/utils';
import {FeatureMissingError} from '../utils/errors';

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
      let feature = optionsParser.getFeature(this.wrapper.options);
      let name = this.wrapper.name;
      let nameLowerCase = name.toLowerCase();

      if (!feature.length)
        throw new FeatureMissingError();

      this.wrapper.template('controller_client.js', `${knownPaths.PATH_CLIENT_FEATURES + feature}/controllers/${name}.controller.js`, {name});
      this.wrapper.template('controller_client_test.js', `${knownPaths.PATH_CLIENT_FEATURES_TEST + feature}/controllers/${name}.controller_test.js`, {name, nameLowerCase});
    }
}
