const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> style', () => {
  describe('.css', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../style'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1"
            }
          }, this.async())
        })
        .withArguments('myNewStyle')
        .withOptions({ 'skip-install': true, feature: 'dec' })
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/dec/styles/myNewStyle.css'
      ]);
    });
  })

  describe('.less', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../style'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1",
              "stylePreprocessor": "less"
            }
          }, this.async())
        })
        .withArguments('myNewStyle')
        .withOptions({ 'skip-install': true, feature: 'dec' })
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/dec/styles/myNewStyle.less'
      ]);
    });
  })

  describe('.scss', () => {
    before(function (done) {
      helpers
        .run(path.join(__dirname, '../../style'))
        .inTmpDir(function(dir) {
          createYoRc({
            "generator-ng-fullstack": {
              "client": "ng1",
              "stylePreprocessor": "sass"
            }
          }, this.async())
        })
        .withArguments('myNewStyle')
        .withOptions({ 'skip-install': true, feature: 'dec' })
        .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'client/dev/dec/styles/myNewStyle.scss'
      ]);
    });
  })
});
