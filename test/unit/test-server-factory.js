import {expect} from 'chai';
import sinon from 'sinon';
import {ServerFactory} from '../../_ng/server/server_factory';
import {NodeFactory} from '../../_ng/server/node';
import {GoFactory} from '../../_ng/server/go';

describe('server_factory', () => {
  it('should have the right values for the tokens', () => {
    expect(ServerFactory.tokens.NODE).to.equal('node');
    expect(ServerFactory.tokens.GO).to.equal('go');
  })

  it('should return the right server - node', () => {
    sinon.mock(NodeFactory.build);
    sinon.mock(GoFactory.build);

    let gen = {};

    ServerFactory.create('node', gen);

    expect(NodeFactory.build).to.have.been.called;
    expect(GoFactory.build).not.to.have.been.called;
  });

  it('should return the right server - go', () => {
    sinon.mock(NodeFactory.build);
    sinon.mock(GoFactory.build);

    let gen = {};

    ServerFactory.create('go', gen);

    expect(NodeFactory.build).to.have.been.called;
    expect(GoFactory.build).not.to.have.been.called;
  });
});
