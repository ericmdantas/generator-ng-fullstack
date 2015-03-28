'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:factory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../factory'))
      .withArguments('cars')
      .withOptions({ 'skip-install': true, feature: 'myModel'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'client/dev/js/myModel/factory/cars.factory.js',
      'tests/client/myModel/factory/cars.factory_test.js'
    ]);
  });
});
