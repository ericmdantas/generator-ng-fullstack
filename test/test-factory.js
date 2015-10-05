'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:factory', () => {
  before(function (done) {
    helpers.run(path.join(__dirname, '../factory'))
      .withArguments('cars')
      .withOptions({ 'skip-install': true, feature: 'myModel'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/js/myModel/factory/cars.factory.js',
      'tests/client/myModel/factory/cars.factory_test.js'
    ]);
  });
});
