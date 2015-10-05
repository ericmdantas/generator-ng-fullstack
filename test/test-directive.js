'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:directive', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../directive'))
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'common'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/common/directives/something.directive.js',
      'tests/client/common/directives/something.directive_test.js'
    ]);
  });
});
