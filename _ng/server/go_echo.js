"use strict";

const GoBase = require('./go_base').GoBase;

const SERVER_TOKEN = 'echo';

exports.GoEcho = class GoEcho extends GoBase {
  constructor(generator) {
    super(generator, SERVER_TOKEN);
  }
};
