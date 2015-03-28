'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:service', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../service'))
      .withArguments('post')
      .withOptions({ 'skip-install': true, feature: 'http'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/http/service/post.service.js',
      'tests/client/http/service/post.service_test.js'
    ]);
  });
});
