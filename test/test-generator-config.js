import {expect} from 'chai';
import sinon from 'sinon';

import {GeneratorConfig} from '../_ng/generator_config';

describe('generator_config', () => {
  let _generatorMock = {
    config: {
      set(){},
      get(){},
      save(){}
    }
  };

  beforeEach(() => {
     sinon.mock(_generatorMock.config.set);
     sinon.mock(_generatorMock.config.get);
     sinon.mock(_generatorMock.config.save);
  });

  describe('creation', () => {
    it('should have the right values for the instance', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      expect(_gc.server).to.equal('node');
      expect(_gc.username).to.be.undefined;
      expect(_gc.appName).to.be.undefined;
      expect(_gc.transpilerServer).to.be.undefined;
      expect(_gc.wrapper).to.equal(_generatorMock);
    });

    it('should have the right value for the static props', () => {
      expect(GeneratorConfig.KEY_SERVER).to.equal('server');
      expect(GeneratorConfig.KEY_USERNAME).to.equal('username');
      expect(GeneratorConfig.KEY_APP_NAME).to.equal('appName');
      expect(GeneratorConfig.KEY_TRANSPILER_SERVER).to.equal('transpilerServer');
    });
  });

  describe('builder', () => {
    it('withServer', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.withServer('a');
      expect(_gc.server).to.equal('a');
    })

    it('withUsername', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.withUsername('a');
      expect(_gc.username).to.equal('a');
    })

    it('withAppName', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.withAppName('a');
      expect(_gc.appName).to.equal('a');
    })

    it('withTranspilerServer', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.withTranspilerServer('a');
      expect(_gc.transpilerServer).to.equal('a');
    })

    it('with full builder', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc
        .withServer('a')
        .withUsername('b')
        .withAppName('c')
        .withTranspilerServer('d');

      expect(_gc.server).to.equal('a');
      expect(_gc.username).to.equal('b');
      expect(_gc.appName).to.equal('c');
      expect(_gc.transpilerServer).to.equal('d');
    })
  });

  describe('set', () => {
    it('should call the set with the right params', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.set('a', 'b');

      expect(_gc.wrapper.config.set).to.have.been.called;
    });
  })

  describe('get', () => {
    it('should call get with the right', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.get('a');

      expect(_gc.wrapper.config.get).to.have.been.called;
    });
  })

  describe('save', () => {
    it('should call the save with the right params', () => {
      let _gc = GeneratorConfig.getInstance(_generatorMock);

      _gc.save();

      expect(_gc.wrapper.config.save).to.have.been.called;
    });
  })
})
