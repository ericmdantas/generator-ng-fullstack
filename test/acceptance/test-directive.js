import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('NgFullstack:directive', () => {
  describe('ng1', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1"
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.js',
        'tests/client/common/directives/something_test.js'
      ]);
    });
  });

  describe('ng2', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../directive'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng2"
            }
          }, this.async());
        })
        .withArguments('something')
        .withOptions({ 'skip-install': true, feature: 'common'})
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/common/directives/something.ts',
        'tests/client/common/directives/something_test.ts'
      ]);
    });
  });
});
