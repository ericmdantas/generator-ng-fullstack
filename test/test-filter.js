'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:service', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../filter'))
      .withArguments('something')
      .withOptions({ 'skip-install': true, feature: 'beautifiers'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/beautifiers/filters/something.filter.js',
      'tests/client/beautifiers/filters/something.filter_test.js'
    ]);
  });
});
