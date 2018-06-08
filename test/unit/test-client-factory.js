const {expect} = require('chai');
const sinon = require('sinon');
const {ClientFactory} = require('../../_ng/client/client_factory');
const {AngularFactory} = require('../../_ng/client/angular');
const {VueFactory} = require('../../_ng/client/vue');

describe('client_factory', () => {
  it('should have the right values for the tokens()', () => {
    expect(ClientFactory.tokens().ANGULAR).to.equal('angular');
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
});
