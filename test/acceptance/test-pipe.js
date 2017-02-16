import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('subgenerator -> pipe', function () {
  describe('ng2', () => {
    describe('testsSeparate is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../pipe'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ skipInstall: true, feature: 'something-useful' })
          .on('end', done);
      });

      it('creates files', function() {
        assert.file([
          'client/dev/something-useful/pipes/something.ts',
          'tests/client/something-useful/pipes/something_test.js'
        ]);
      });
    });

    describe('testsSeparate is false', function () {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../pipe'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ skipInstall: true, feature: 'something-useful' })
          .on('end', done);
      });

      it('creates files', function() {
        assert.file([
          'client/dev/something-useful/pipes/something.ts',
          'client/dev/something-useful/pipes/something_test.js'
        ]);
      });
    })
  })
});
