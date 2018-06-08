const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> view', () => {
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
