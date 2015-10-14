import {expect} from 'chai';
import sinon from 'sinon';

import {ResourceSubGenerator} from '../_ng/sub_generators_resource';

describe('sub_generators', () => {

  describe('ResourceSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _rsg = new ResourceSubGenerator(_gen);

        expect(_rsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _rsg = new ResourceSubGenerator(_gen);

        _rsg.initializing();

        expect(_rsg.wrapper.argument).to.have.been.called;
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

        let _rsg = new ResourceSubGenerator(_gen);

        _rsg.writing();

        expect(_rsg.wrapper.writing).to.have.been.called;
      });
    });
  });
});
