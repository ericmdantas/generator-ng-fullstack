"use strict";

const {Base} = require('yeoman-generator');
const {MainGenerator} = require('../_ng/full/generator');

module.exports = class NgFullstack extends Base {
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

    promptTests() {
      this.generator.promptTests();
    }

    promptServer() {
      this.generator.promptServer();
    }

    promptClient() {
      this.generator.promptClient();
    }

    promptStylePreprocessor() {
      this.generator.promptStylePreprocessor();
    }

    promptNodeWebFrameworkServer() {
      this.generator.promptNodeWebFrameworkServer();
    }

    promptGoWebFrameworkServer() {
      this.generator.promptGoWebFrameworkServer();
    }

    promptUserTranspilerServer() {
      this.generator.promptTranspilerServer();
    }

    promptSecure() {
      this.generator.promptSecure();
    }

    promptDifferentStaticServer() {
      this.generator.promptDifferentStaticServer();
    }

    promptCordova() {
      this.generator.promptCordova();
    }
};
