import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {createYoRc} from '../_helpers/mocks';

describe('subgenerator -> factory', () => {
  describe('ng1', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'tests/client/myModel/factory/cars_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'client/dev/myModel/factory/cars_test.js'
        ]);
      });
    });
  })

  describe('ng2', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.ts',
          'tests/client/myModel/factory/cars_test.ts'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "ng2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.ts',
          'client/dev/myModel/factory/cars_test.ts'
        ]);
      });
    });
  })  

  describe('vue2', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'tests/client/myModel/factory/cars_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "vue2",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'client/dev/myModel/factory/cars_test.js'
        ]);
      });
    });
  }) 

  describe('aurelia1', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": true
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'tests/client/myModel/factory/cars_test.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            createYoRc({
              "generator-ng-fullstack": {
                "client": "aurelia1",
                "testsSeparated": false
              }
            }, this.async());
          })
          .withArguments('cars')
          .withOptions({ 'skip-install': true, feature: 'myModel'})
          .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'client/dev/myModel/factory/cars.js',
          'client/dev/myModel/factory/cars_test.js'
        ]);
      });
    });
  }) 
});
