const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> controller', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../controller'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": true
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
          'tests/client/user/controllers/hue_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../controller'))
          .inTmpDir(function(dir) {
            createYoRc({
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
          'client/dev/user/controllers/hue_test.js'
        ]);
      });
    });
  })
})
