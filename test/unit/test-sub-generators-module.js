import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import utils from '../../_ng/utils/utils';

import {ModuleSubGenerator} from '../../_ng/client/sub_generators_module';

describe('ModuleSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){ return 'ng1'}
        }
      };
      let _fsg = new ModuleSubGenerator(_gen);

      expect(_fsg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument(){},
        config: {
          get(){return 'ng1'}
        }
      };

      let _fsg = new ModuleSubGenerator(_gen);

      _fsg.initializing();

      expect(_fsg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    describe('ng1', () => {
      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get() {return 'ng1'}
          },
          template: sinon.spy()
        };

        let _fsg = new ModuleSubGenerator(_gen);

        sinon.mock(_fsg.copyController);
        sinon.mock(_fsg.copyModel);
        sinon.mock(_fsg.copyFactory);
        sinon.mock(_fsg.copyResource);
        sinon.mock(_fsg.copyStyle);
        sinon.mock(_fsg.copyService);
        sinon.mock(_fsg.copyTemplate);
        sinon.mock(_fsg.copyDirective);

        _fsg.writing();

        expect(_fsg.copyController).to.have.been.called;
        expect(_fsg.copyModel).to.have.been.called;
        expect(_fsg.copyFactory).to.have.been.called;
        expect(_fsg.copyResource).to.have.been.called;
        expect(_fsg.copyStyle).to.have.been.called;
        expect(_fsg.copyService).to.have.been.called;
        expect(_fsg.copyTemplate).to.have.been.called;
        expect(_fsg.copyDirective).to.have.been.called;
      });
    });

    describe('ng2', () => {
      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get() {return 'ng2'}
          },
          template: sinon.spy()
        };

        sinon.mock(_gen.template);

        let _fsg = new ModuleSubGenerator(_gen);

        sinon.mock(_fsg.copyComponent);
        sinon.mock(_fsg.copyModel);
        sinon.mock(_fsg.copyFactory);
        sinon.mock(_fsg.copyStyle);
        sinon.mock(_fsg.copyService);
        sinon.mock(_fsg.copyTemplate);
        sinon.mock(_fsg.copyDirective);

        _fsg.writing();

        expect(_fsg.copyComponent).to.have.been.called;
        expect(_fsg.copyModel).to.have.been.called;
        expect(_fsg.copyFactory).to.have.been.called;
        expect(_fsg.copyStyle).to.have.been.called;
        expect(_fsg.copyService).to.have.been.called;
        expect(_fsg.copyTemplate).to.have.been.called;
        expect(_fsg.copyDirective).to.have.been.called;
      });
    });
  });
});
