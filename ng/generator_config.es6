import * as fs from 'fs';
import * as _ from 'lodash';

export class GeneratorConfig {
  constructor(gen) {
    this.server = 'node';
    this.username = undefined;
    this.appName = undefined;
    this.transpilerServer = undefined;

    _.assign(this, gen);
  }
}
