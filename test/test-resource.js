'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:resource', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../resource'))
      .withArguments('country')
      .withOptions({ 'skip-install': true, feature: 'user-resource' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/user-resource/resource/country.resource.js'
    ]);
  });
});
