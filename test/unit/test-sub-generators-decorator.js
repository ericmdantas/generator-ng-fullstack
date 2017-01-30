import {expect} from 'chai';
import sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';

import {DecoratorSubGenerator} from '../../_ng/client/sub_generators_decorator';

describe('DecoratorSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get(){
            return 'ng1'
          }
        }
      };
      let _dsg = new DecoratorSubGenerator(_gen);

      expect(_dsg.wrapper).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        config: {
          get(){
            return 'ng1'
          }
        }
      };

      let _dsg = new DecoratorSubGenerator(_gen);

      _dsg.initializing();

      expect(_dsg.wrapper.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should throw FeatureMissingError', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {},
        config: {
          get(){
            return 'ng1'
          }
        },
        template: sinon.spy()
      };

      let _dsg = new DecoratorSubGenerator(_gen);

      expect(() => _dsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
    });

    it('should throw ModuleDoesntImplementError', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {
          feature: 'c'
        },
        config: {
          get(){
            return 'ng2'
          }
        },
        template: sinon.spy()
      };

      let _dsg = new DecoratorSubGenerator(_gen);

      expect(() => _dsg.writing()).to.throw(Error, /ng2 doesn't implement decorator/);
    });

    it('should have the writing called with the right stuff', () => {
      let _gen = {
        name: 'a',
        appName: 'b',
        options: {feature: 'c'},
        config: {
          get(){
            return 'ng1'
          }
        },
        template: sinon.spy()
      };

      let _dsg = new DecoratorSubGenerator(_gen);

      _dsg.writing();

      let _firstCall = ['ng1/decorator.js', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/decorator/' + _gen.name + '.js', {appName: _gen.appName}];

      expect(_dsg.wrapper.writing).to.have.been.called;
      expect(_dsg.wrapper.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
    });
  });
});
