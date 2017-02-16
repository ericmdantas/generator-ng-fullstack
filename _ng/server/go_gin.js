"use strict";

const {GoBase} = require('./go_base');

const SERVER_TOKEN = 'gin';

exports.GoGin = class GoGin extends GoBase {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
};
