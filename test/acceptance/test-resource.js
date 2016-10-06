import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('subgenerator -> resource', () => {
  describe('ng1', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../resource'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1"
            }
          }, this.async());
        })
        .withArguments('country')
        .withOptions({ 'skip-install': true, feature: 'user-resource' })
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/user-resource/resources/country.js'
      ]);
    });
  })
});
