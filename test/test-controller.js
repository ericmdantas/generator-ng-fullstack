'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:controller', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../controller'))
      .withArguments('hue')
      .withOptions({ 'skip-install': true , feature: 'user'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file(
    [
      'client/dev/js/user/controller/hue.controller.js',
      'tests/client/user/controller/hue.controller_test.js'
    ]);
  });
});
