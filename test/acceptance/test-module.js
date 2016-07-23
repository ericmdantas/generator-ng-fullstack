
import path from 'path';
import {assert} from 'yeoman-generator';
import {test as helpers} from 'yeoman-generator';
import {MockConfigFile} from '../helpers/mocks';

describe('subgenerator -> module', () => {
  describe('ng1', () => {
     describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../module'))
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
          'client/dev/myModel/controllers/cars.js',
          'client/dev/myModel/models/cars.js',
          'client/dev/myModel/services/cars.js',
          'client/dev/myModel/factory/cars.js',
          'client/dev/myModel/services/cars.js',
          'client/dev/myModel/templates/cars.html',
          'client/dev/myModel/styles/cars.css',

          'tests/client/myModel/controllers/cars.spec.js',
          'tests/client/myModel/models/cars.spec.js',
          'tests/client/myModel/services/cars.spec.js',
          'tests/client/myModel/factory/cars.spec.js'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../module'))
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
          'client/dev/myModel/controllers/cars.js',
          'client/dev/myModel/models/cars.js',
          'client/dev/myModel/services/cars.js',
          'client/dev/myModel/factory/cars.js',
          'client/dev/myModel/services/cars.js',
          'client/dev/myModel/templates/cars.html',
          'client/dev/myModel/styles/cars.css',

          'client/dev/myModel/controllers/cars.spec.js',
          'client/dev/myModel/models/cars.spec.js',
          'client/dev/myModel/services/cars.spec.js',
          'client/dev/myModel/factory/cars.spec.js'
        ]);
      });
    });
  })

  describe('ng2', () => {
    describe('testsSeparated is true', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../module'))
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
          'client/dev/myModel/components/cars.ts',
          'client/dev/myModel/models/cars.ts',
          'client/dev/myModel/services/cars.ts',
          'client/dev/myModel/factory/cars.ts',
          'client/dev/myModel/services/cars.ts',
          'client/dev/myModel/templates/cars.html',
          'client/dev/myModel/styles/cars.css',

          'tests/client/myModel/components/cars.spec.ts',
          'tests/client/myModel/models/cars.spec.ts',
          'tests/client/myModel/services/cars.spec.ts',
          'tests/client/myModel/factory/cars.spec.ts'
        ]);
      });
    });

    describe('testsSeparated is false', () => {
      before((done) => {
        helpers
          .run(path.join(__dirname, '../../module'))
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
          'client/dev/myModel/components/cars.ts',
          'client/dev/myModel/models/cars.ts',
          'client/dev/myModel/services/cars.ts',
          'client/dev/myModel/factory/cars.ts',
          'client/dev/myModel/services/cars.ts',
          'client/dev/myModel/templates/cars.html',
          'client/dev/myModel/styles/cars.css',

          'client/dev/myModel/components/cars.spec.ts',
          'client/dev/myModel/models/cars.spec.ts',
          'client/dev/myModel/services/cars.spec.ts',
          'client/dev/myModel/factory/cars.spec.ts'
        ]);
      });
    });
  })  
});
