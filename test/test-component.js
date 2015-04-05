'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:component', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../component'))
      .withArguments('user')
      .withOptions({ 'skip-install': true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(
      [
        'client/dev/components/user/user.js',
        'client/dev/components/user/user.html',
        'tests/client/components/user/user_test.js'
      ]);
  });
});
