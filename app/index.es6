'use strict';

import yeoman from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';
import {MainGenerator} from '../ng/generator.js';

export default class NgFullstack extends yeoman.generators.Base {
    constructor(args, options, config) {
        super(args, options, config);

        this.generator = new MainGenerator();
    }

    initializing() {
      this.pkg = require('../package.json');
    }

    prompting() {
      this.generator.sayHello(this);
    }

    writing() {
      this.generator.writing(this);
    }

    install() {
      this.generator.install(this);
    }

    prompUser() {
      this.generator.promptUser(this);
    }

    promptUserTranspilerServer() {
      this.generator.promptTranspilerServer(this);
    }
}
