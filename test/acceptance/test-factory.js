import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('subgenerator -> factory', () => {
  describe('ng1', () => {
    describe('ng1 - testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            MockConfigFile.create({
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
          'tests/client/myModel/factory/cars.spec.js'
        ]);
      });
    });

    describe('ng1 - testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            MockConfigFile.create({
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
          'client/dev/myModel/factory/cars.spec.js'
        ]);
      });
    });
  })

  describe('ng2', () => {
    describe('ng2 - testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            MockConfigFile.create({
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
          'tests/client/myModel/factory/cars.spec.ts'
        ]);
      });
    });

    describe('ng2 - testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../factory'))
          .inTmpDir(function(dir) {
            MockConfigFile.create({
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
          'client/dev/myModel/factory/cars.spec.ts'
        ]);
      });
    });
  })  
});
