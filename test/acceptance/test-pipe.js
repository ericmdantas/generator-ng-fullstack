import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('NgFullstack:pipe', function () {
  before((done) => {
    helpers
      .run(path.join(__dirname, '../../pipe'))
      .inTmpDir(function(dir) {
        createYoRc({
          "generator-ng-fullstack": {
            "client": "ng2"
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
