const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> directive', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.js',
          'tests/client/common/directives/something_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.js',
          'client/dev/common/directives/something_test.js'
        ]);
      });
    });
  })

  describe('ng2', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.ts',
          'tests/client/common/directives/something_test.ts'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.ts',
          'client/dev/common/directives/something_test.ts'
        ]);
      });
    });
  })  

  describe('vue2', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.js',
          'tests/client/common/directives/something_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../directive'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'common'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/common/directives/something.js',
          'client/dev/common/directives/something_test.js'
        ]);
      });
    });
  }) 
});
