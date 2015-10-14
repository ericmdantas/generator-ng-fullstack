import {expect} from 'chai';
import sinon from 'sinon';

import {FactorySubGenerator} from '../_ng/sub_generators_factory';

describe('sub_generators', () => {

  describe('FactorySubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _fsg = new FactorySubGenerator(_gen);

        expect(_fsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _fsg = new FactorySubGenerator(_gen);

        _fsg.initializing();

        expect(_fsg.wrapper.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: () => {}
        };

        sinon.mock(_gen.template);

        let _fsg = new FactorySubGenerator(_gen);

        _fsg.writing();

        expect(_fsg.wrapper.writing).to.have.been.called;
      });
    });
  });  
});
