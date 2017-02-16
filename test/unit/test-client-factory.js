import {expect} from 'chai';
import sinon from 'sinon';
import {ClientFactory} from '../../_ng/client/client_factory';
import {AngularFactory} from '../../_ng/client/angular';
import {AureliaFactory} from '../../_ng/client/aurelia';
import {VueFactory} from '../../_ng/client/vue';

describe('client_factory', () => {
  it('should have the right values for the tokens()', () => {
    expect(ClientFactory.tokens().ANGULAR).to.equal('angular');
    expect(ClientFactory.tokens().AURELIA).to.equal('aurelia');
    expect(ClientFactory.tokens().VUE).to.equal('vue');
  })

  it('should return the right client - angular - ng1', () => {
    sinon.mock(AngularFactory.build)

    let gen = {};

    ClientFactory.create('angular', 'ng1', gen);

    expect(AngularFactory.build).to.have.been.called;
  });

  it('should return the right client - angular - ng2', () => {
    sinon.mock(AngularFactory.build);

    let gen = {};

    ClientFactory.create('angular', 'ng2', gen);

    expect(AngularFactory.build).to.have.been.called;
  });

  it('should return the right client - vue - vue2', () => {
    sinon.mock(VueFactory.build);

    let gen = {};

    ClientFactory.create('vue', 'vue2', gen);

    expect(VueFactory.build).to.have.been.called;
  });

  it('should return the right client - vue - vue2', () => {
    sinon.mock(AureliaFactory.build);

    let gen = {};

    ClientFactory.create('aurelia', 'aurelia1', gen);

    expect(AureliaFactory.build).to.have.been.called;
  });
});
