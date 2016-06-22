"use strict";

const knownPaths = require('../utils/known_paths');
const optionsParser = require('../utils/options_parser');
const utils = require('../utils/utils');
const ServerFactory = require('./server_factory').ServerFactory;
const NodeFactory = require('./node_factory').NodeFactory;
const GoFactory = require('./go_factory').GoFactory;
const FeatureMissingError = require('../utils/errors').FeatureMissingError;

exports.EndpointSubGenerator = class EndpointSubGenerator {
  constructor(generator) {
    this.wrapper = generator;
    this.wrapper.feature  = optionsParser.getFeature(this.wrapper.options);
    this.wrapper.name = this.wrapper.name;
    this.wrapper.userNameSpace = this.wrapper.config.get('userNameSpace');
    this.wrapper.appName = this.wrapper.config.get('appName');
    this.wrapper.server = this.wrapper.config.get('server');
    this.wrapper.transpilerServer = this.wrapper.config.get('transpilerServer');
    this.wrapper.webFrameworkServer = this.wrapper.config.get('webFrameworkServer');
    this.wrapper.tests = this.wrapper.config.get('tests');
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
        case ServerFactory.tokens().GO: GoFactory.build(this.wrapper).copyFiles(); break;
        case ServerFactory.tokens().NODE: NodeFactory.build(this.wrapper).copyFiles(); break;
    }
  }
}
