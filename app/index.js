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

    promptClient() {
      this.generator.promptClient();
    }    

    promptBuilderClient() {
      this.generator.promptBuilderClient();
    }

    promptStylePreprocessor() {
      this.generator.promptStylePreprocessor();
    }

    promptServer() {
      this.generator.promptServer();
    }

    promptNodeWebFrameworkServer() {
      this.generator.promptNodeWebFrameworkServer();
    }

    promptUserTranspilerServer() {
      this.generator.promptTranspilerServer();
    }

    promptGoWebFrameworkServer() {
      this.generator.promptGoWebFrameworkServer();
    }

    promptSecure() {
      this.generator.promptSecure();
    }

    promptTests() {
      this.generator.promptTests();
    }

    promptDifferentStaticServer() {
      this.generator.promptDifferentStaticServer();
    }

    promptCordova() {
      this.generator.promptCordova();
    }

    promptBoilerplate() {
      this.generator.promptBoilerplate();
    }
};
