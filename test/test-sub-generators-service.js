import {expect} from 'chai';
import sinon from 'sinon';

import {ServiceSubGenerator} from '../_ng/sub_generators_service';

describe('sub_generators', () => {
  describe('ServiceSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _ssg = new ServiceSubGenerator(_gen);

        expect(_ssg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _ssg = new ServiceSubGenerator(_gen);

        _ssg.initializing();

        expect(_ssg.wrapper.argument).to.have.been.called;
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

        let _ssg = new ServiceSubGenerator(_gen);

        _ssg.writing();

        expect(_ssg.wrapper.writing).to.have.been.called;
      });
    });
  });
});
