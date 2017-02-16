"use strict";

const optionsParser = require('../utils/options_parser');
const {ServerFactory} = require('./server_factory');
const {NodeFactory} = require('./node_factory');
const {GoFactory} = require('./go_factory');
const {FeatureMissingError} = require('../utils/errors');

exports.EndpointSubGenerator = class EndpointSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.feature  = optionsParser.getFeature(this.wrapper.options);
    this.wrapper.name = this.wrapper.name;
    this.wrapper.userNameSpace = this.wrapper.config.get('userNameSpace');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.server = this.wrapper.config.get('server');
    this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer');

    if (this.wrapper.server === ServerFactory.tokens().NODE) {
      this.wrapper.nodeWebFrameworkServer = this.wrapper.config.get('nodeWebFrameworkServer');
    } else {
      this.wrapper.goWebFrameworkServer = this.wrapper.config.get('goWebFrameworkServer');
    }

    this.wrapper.testsSeparated = this.wrapper.config.get('testsSeparated');
  }

  initializing() {
    this.wrapper.argument('name', {
      required: true,
      type: String,
      desc: 'endpoint'
    });
  }

  writing() {
    if (!this.wrapper.feature.length)
        throw new FeatureMissingError();

    switch (this.wrapper.server) {
        case ServerFactory.tokens().GO: GoFactory.build(this.wrapper).copyEndpoint(); break;
        case ServerFactory.tokens().NODE: NodeFactory.build(this.wrapper).copyEndpoint(); break;
    }
  }
};
