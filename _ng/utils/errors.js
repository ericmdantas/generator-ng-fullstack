"use strict";

class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    Error.captureStackTrace(this, this.constructor.name)
  }
}

exports.FeatureMissingError = class FeatureMissingError extends ExtendableError {
  constructor() {
    super('Feature is needed. Do it like this: --feature something-here');
  }
}
