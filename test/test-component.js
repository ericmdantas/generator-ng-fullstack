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
        'client/dev/js/component/user/user.js',
        'client/dev/js/component/user/user.html',
        'tests/client/component/user/user_test.js'
      ]);
  });
});
