import {expect} from 'chai';
import sinon from 'sinon';
import {ClientFactory} from '../../_ng/client/client_factory';
import {AngularFactory} from '../../_ng/client/angular';

describe('server_factory', () => {
  it('should have the right values for the tokens', () => {
    expect(ClientFactory.tokens.ANGULAR).to.equal('angular');
  })

  it('should return the right client - angular', () => {
    sinon.mock(AngularFactory.build);

    let gen = {};

    ClientFactory.create('angular', 'ng2', gen);

    expect(AngularFactory.build).to.have.been.called;
  });
});
