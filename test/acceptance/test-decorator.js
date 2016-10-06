import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('subgenerator -> decorator', () => {
  describe('ng1', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../decorator'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('newHttp')
        .withOptions({ 'skip-install': true, feature: 'dec' })
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/dec/decorator/newHttp.js'
      ]);
    });
  })
});
