import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('NgFullstack:view', () => {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../../view'))
      .inTmpDir(function(dir) {
        createYoRc({
          "generator-ng-fullstack": {
            "client": "ng1"
          }
        }, this.async())
      })
      .withArguments('myNewView')
      .withOptions({ 'skip-install': true, feature: 'dec'})
      .on('end', done);
  });

  it('creates files', () => {
    assert.file([
      'client/dev/dec/templates/myNewView.html'
    ]);
  });
});
