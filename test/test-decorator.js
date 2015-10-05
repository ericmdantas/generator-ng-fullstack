'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:decorator', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../decorator'))
      .withArguments('newHttp')
      .withOptions({ 'skip-install': true, feature: 'dec' })
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/dec/decorator/newHttp.decorator.js'
    ]);
  });
});
