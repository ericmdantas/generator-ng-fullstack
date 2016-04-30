import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:resource', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../resource'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
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
      'client/dev/user-resource/resource/country.js'
    ]);
  });
});
