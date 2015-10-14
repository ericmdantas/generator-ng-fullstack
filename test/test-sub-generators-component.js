import {expect} from 'chai';
import sinon from 'sinon';

import {ComponentSubGenerator} from '../_ng/sub_generators_component';

describe('sub_generators', () => {

  describe('ComponentSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _csg = new ComponentSubGenerator(_gen);

        expect(_csg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _csg = new ComponentSubGenerator(_gen);

        _csg.initializing();

        expect(_csg.wrapper.argument).to.have.been.called;
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

        let _csg = new ComponentSubGenerator(_gen);

        _csg.writing();

        expect(_csg.wrapper.writing).to.have.been.called;
      });
    });
  });  
});
