'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:directive', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../directive'))
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'common'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/common/directive/something.directive.js',
      'tests/client/common/directive/something.directive_test.js'
    ]);
  });
});
