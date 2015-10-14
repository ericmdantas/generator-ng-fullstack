import {expect} from 'chai';
import sinon from 'sinon';

import {DirectiveSubGenerator} from '../_ng/sub_generators_directive';

describe('sub_generators', () => {
  describe('DirectiveSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _dsg = new DirectiveSubGenerator(_gen);

        expect(_dsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _dsg = new DirectiveSubGenerator(_gen);

        _dsg.initializing();

        expect(_dsg.wrapper.argument).to.have.been.called;
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

        let _dsg = new DirectiveSubGenerator(_gen);

        _dsg.writing();

        expect(_dsg.wrapper.writing).to.have.been.called;
      });
    });
  });
});
