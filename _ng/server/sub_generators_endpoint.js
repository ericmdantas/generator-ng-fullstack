"use strict";

const optionsParser = require('../utils/options_parser');
const {ServerFactory} = require('./server_factory');
const {NodeFactory} = require('./node_factory');
const {GoFactory} = require('./go_factory');
const {FeatureMissingError} = require('../utils/errors');

exports.EndpointSubGenerator = class EndpointSubGenerator {
  constructor(generator) {
    this.generator = generator;
    this.generator.feature  = optionsParser.getFeature(this.generator.options);
    this.generator.name = this.generator.name;
    this.generator.userNameSpace = this.generator.config.get('userNameSpace');
    this.generator.appName = this.generator.config.get('appName');
    this.generator.server = this.generator.config.get('server');
    this.generator.transpilerServer = this.generator.config.get('transpilerServer');

    if (this.generator.server === ServerFactory.tokens().NODE) {
      this.generator.nodeWebFrameworkServer = this.generator.config.get('nodeWebFrameworkServer');
    } else {
      this.generator.goWebFrameworkServer = this.generator.config.get('goWebFrameworkServer');
    }

    this.generator.testsSeparated = this.generator.config.get('testsSeparated');
  }

  initializing() {
    this.generator.argument('name', {
      required: true,
      type: String,
      desc: 'endpoint'
    });
  }

  writing() {
    if (!this.generator.feature.length)
        throw new FeatureMissingError();

    switch (this.generator.server) {
        case ServerFactory.tokens().GO: GoFactory.build(this.generator).copyEndpoint(); break;
        case ServerFactory.tokens().NODE: NodeFactory.build(this.generator).copyEndpoint(); break;
    }
  }
};
