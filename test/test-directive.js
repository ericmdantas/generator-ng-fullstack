import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import fs from 'fs';
import {MockConfigFile} from '../_test_helpers/mocks';

describe('NgFullstack:directive', () => {
  describe('ng1', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "ngVersion": "ng1"
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/common/directives/something.directive.js',
        'tests/client/common/directives/something.directive_test.js'
      ]);
    });
  });

  describe('ng2', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../directive'))
        .inTmpDir(function(dir) {
          MockConfigFile.create({
            "generator-ng-fullstack": {
              "ngVersion": "ng2"
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    after((done) => {
      MockConfigFile.delete(done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/js/common/directives/something.directive.ts',
        'tests/client/common/directives/something.directive_test.ts'
      ]);
    });
  });
});
