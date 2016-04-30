import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('NgFullstack:decorator', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../decorator'))
      .inTmpDir(function(dir) {
        MockConfigFile.create({
          "generator-ng-fullstack": {
            "client": "ng1"
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
});
