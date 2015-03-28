'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('NgFullstack:endpoint', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../endpoint'))
      .withArguments('endp')
      .withOptions({ 'skip-install': true, feature: 'todo2' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'server/api/todo2/controller/endp.controller.js',
      'server/api/todo2/dao/endp.dao.js',
      'server/api/todo2/model/endp.model.js',
      'server/api/todo2/route/endp.route.js',

      'tests/server/todo2/dao/endp.dao_test.js'
    ]);
  });
});
