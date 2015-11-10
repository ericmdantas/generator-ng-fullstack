import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {DirectiveSubGenerator} from '../../_ng/client/sub_generators_directive';

describe('sub_generators', () => {
  describe('DirectiveSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {
          a: true,
          config: {
            get(){}
          }
        };

        let _dsg = new DirectiveSubGenerator(_gen);

        expect(_dsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument(){},
          options: {feature: 'c'},
          config: {
            get(){}
          }
        };

        let _dsg = new DirectiveSubGenerator(_gen);

        _dsg.initializing();

        expect(_dsg.wrapper.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      describe('ng1', () => {
        it('should have the initializing called with the right stuff', () => {
          let _gen = {
            name: 'a',
            options: {feature: 'c'},
            config: {
              get(){return 'ng1'}
            },
            template: sinon.spy()
          };

          sinon.mock(_gen.template);

          let _dsg = new DirectiveSubGenerator(_gen);

          _dsg.writing();

          let _firstCall = ['ng1/directive.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/directives/' + _gen.name + '.directive.js', {name: _gen.name}];
          let _secondCall = ['ng1/directive_test.js', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/directives/' + _gen.name + '.directive_test.js', {name: _gen.name}];

          expect(_dsg.wrapper.writing).to.have.been.called;
          expect(_dsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
          expect(_dsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        });
      })

      describe('ng2', () => {
        it('should have the initializing called with the right stuff', () => {
          let _gen = {
            name: 'a',
            options: {feature: 'c'},
            config: {
              get(){return 'ng2'}
            },
            template: sinon.spy()
          };

          sinon.mock(_gen.template);

          let _dsg = new DirectiveSubGenerator(_gen);

          _dsg.writing();

          let _firstCall = ['ng2/directive.ts', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/' + _gen.name + '_directive.ts', {name: _gen.name}];
          let _secondCall = ['ng2/directive_test.ts', knownPaths.PATH_CLIENT_FEATURES_TEST + _gen.options.feature + '/' + _gen.name + '_directive_test.ts', {name: _gen.name}];

          expect(_dsg.wrapper.writing).to.have.been.called;
          expect(_dsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
          expect(_dsg.wrapper.template.calledWith(_secondCall[0], _secondCall[1], _secondCall[2])).to.be.true;
        });
      });
    });
  });
});
