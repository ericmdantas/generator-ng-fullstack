"use strict";

const fs = require('fs');

exports.MockConfigFile = class MockConfigFile {
  static create(json, done) {
    fs.writeFile('.yo-rc.json', JSON.stringify(json), done);
  }

  static delete(done) {
    fs.unlink('.yo-rc.json', done);
  }
}
