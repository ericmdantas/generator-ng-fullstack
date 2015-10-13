import {expect} from 'chai';
import sinon from 'sinon';

import {
  ControllerSubGenerator,
  ComponentSubGenerator,
  FactorySubGenerator,
  DirectiveSubGenerator,
  DecoratorSubGenerator,
  FilterSubGenerator,
  ResourceSubGenerator,
  ServiceSubGenerator,
  EndpointSubGenerator
} from '../_ng/sub_generators';

describe('sub_generators', () => {

  describe('ControllerSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _csg = new ControllerSubGenerator(_gen);

        expect(_csg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _csg = new ControllerSubGenerator(_gen);

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

        let _csg = new ControllerSubGenerator(_gen);

        _csg.writing();

        expect(_csg.wrapper.writing).to.have.been.called;
      });
    });
  });

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

  describe('DecoratorSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _dsg = new DecoratorSubGenerator(_gen);

        expect(_dsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _dsg = new DecoratorSubGenerator(_gen);

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

        let _dsg = new DecoratorSubGenerator(_gen);

        _dsg.writing();

        expect(_dsg.wrapper.writing).to.have.been.called;
      });
    });
  });

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

  describe('FilterSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _fsg = new FilterSubGenerator(_gen);

        expect(_fsg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _fsg = new FilterSubGenerator(_gen);

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

        let _fsg = new FilterSubGenerator(_gen);

        _fsg.writing();

        expect(_fsg.wrapper.writing).to.have.been.called;
      });
    });
  });

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

  describe('EndpointSubGenerator', () => {
    describe('creation', () => {
      it('should have the right param passed to wrapper', () => {
        let _gen = {a: true};
        let _esg = new EndpointSubGenerator(_gen);

        expect(_esg.wrapper).to.equal(_gen);
      });
    });

    describe('initializing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          argument: () => {}
        };

        sinon.mock(_gen.argument);

        let _esg = new EndpointSubGenerator(_gen);

        _esg.initializing();

        expect(_esg.wrapper.argument).to.have.been.called;
      });
    });

    describe('writing', () => {
      it('should have the initializing called with the right stuff', () => {
        let _gen = {
          name: 'a',
          options: {feature: 'c'},
          template: () => {},
          config: {
            get: () => {}
          }
        };

        sinon.mock(_gen.template);
        sinon.mock(_gen.config.get);

        let _esg = new EndpointSubGenerator(_gen);

        _esg.writing();

        expect(_esg.wrapper.writing).to.have.been.called;
      });
    });
  });
});
