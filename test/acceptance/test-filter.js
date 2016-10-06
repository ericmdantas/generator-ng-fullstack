import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('subgenerator -> filter', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'tests/client/beautifiers/filters/something_test.js'
        ]);
      });
    })

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'client/dev/beautifiers/filters/something_test.js'
        ]);
      });
    })
  })

  describe('vue2', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'tests/client/beautifiers/filters/something_test.js'
        ]);
      });
    })

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'client/dev/beautifiers/filters/something_test.js'
        ]);
      });
    })
  })

  describe('aurelia1', () => {
    describe('testsSeparated is true', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'tests/client/beautifiers/filters/something_test.js'
        ]);
      });
    })

    describe('testsSeparated is false', () => {
      before(function (done) {
        helpers
          .run(path.join(__dirname, '../../filter'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('something')
          .withOptions({ 'skip-install': true, feature: 'beautifiers'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/beautifiers/filters/something.js',
          'client/dev/beautifiers/filters/something_test.js'
        ]);
      });
    })
  })

});
