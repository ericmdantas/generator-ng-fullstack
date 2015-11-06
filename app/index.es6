import {Base} from 'yeoman-generator';
import chalk from 'chalk';
import yosay from 'yosay';
import {MainGenerator} from '../_ng/generator.js';

export default class NgFullstack extends Base {
    constructor(args, options, config) {
        super(args, options, config);

        this.generator = new MainGenerator(this);
    }

    initializing() {
      this.pkg = require('../package.json');
    }

    prompting() {
      this.generator.sayHello();
    }

    writing() {
      this.generator.writing();
    }

    install() {
      this.generator.install();
    }

    prompUser() {
      this.generator.promptUser();
    }

    promptServer() {
      this.generator.promptServer();
    }

    promptClient() {
      this.generator.promptClient();
    }

    promptUserTranspilerServer() {
      this.generator.promptTranspilerServer();
    }
}
