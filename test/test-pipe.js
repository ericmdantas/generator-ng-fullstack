'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:pipe', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../pipe'))
      .withArguments('something')
      .withOptions({ skipInstall: true, feature: 'something-useful' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/something-useful/pipes/something.pipe.ts',
      'tests/client/something-useful/pipes/something.pipe_test.js'
    ]);
  });
});
