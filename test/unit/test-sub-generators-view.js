const {expect} = require('chai');
const sinon = require('sinon');
const knownPaths = require('../../_ng/utils/known_paths');

const {ViewSubGenerator} = require('../../_ng/client/sub_generators_view');

describe('ViewSubGenerator', () => {
  describe('creation', () => {
    it('should have the right param passed to wrapper', () => {
      let _gen = {
        a: true,
        config: {
          get() {
            return 'ng1'
          }
        }
      };

      let _vsg = new ViewSubGenerator(_gen);

      expect(_vsg.generator).to.equal(_gen);
    });
  });

  describe('initializing', () => {
    it('should have the initializing called with the right stuff', () => {
      let _gen = {
        argument: () => {},
        config: {
          get(){return 'ng1'}
        }
      };

      sinon.mock(_gen.argument);

      let _vsg = new ViewSubGenerator(_gen);

      _vsg.initializing();

      expect(_vsg.generator.argument).to.have.been.called;
    });
  });

  describe('writing', () => {
    describe('ng1', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          options: {},
          config: {
            get() {
              return 'ng1';
            }
          },
          template: sinon.spy()
        };

        let _vsg = new ViewSubGenerator(_gen);

        expect(() => _vsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get() {
              return 'ng1';
            }
          },
          template: sinon.spy()
        };

        let _vsg = new ViewSubGenerator(_gen);

        _vsg.writing();

        let _firstCall = ['view.html', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {name: _gen.name}];

        expect(_vsg.generator.writing).to.have.been.called;
        expect(_vsg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      });
    })

    describe('ng2', () => {
      it('should throw FeatureMissingError', () => {
        let _gen = {
          name: 'a',
          options: {},
          config: {
            get() {
              return 'ng2';
            }
          },
          template: sinon.spy()
        };

        let _vsg = new ViewSubGenerator(_gen);

        expect(() => _vsg.writing()).to.throw(Error, /Do it like this: --feature something-here/);
      });

      it('should have the writing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          config: {
            get() {
              return 'ng2';
            }
          },
          template: sinon.spy()
        };

        let _vsg = new ViewSubGenerator(_gen);

        _vsg.writing();

        let _firstCall = ['view.html', knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/templates/' + _gen.name + '.html', {name: _gen.name}];

        expect(_vsg.generator.writing).to.have.been.called;
        expect(_vsg.generator.template.calledWith(_firstCall[0], _firstCall[1], _firstCall[2])).to.be.true;
      });
    })
  });
});
