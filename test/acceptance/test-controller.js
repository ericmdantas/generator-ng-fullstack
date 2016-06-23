import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:controller', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../controller'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng1",
            "testsSeparated": false
          }
        }, this.async());
      })
      .withArguments('hue')
      .withOptions({ 'skip-install': true , feature: 'user'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/user/controllers/hue.js',
      'tests/client/user/controllers/hue.spec.js'
    ]);
  });
});
