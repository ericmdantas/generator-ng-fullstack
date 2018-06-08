const {expect} = require('chai');
const sinon = require('sinon');
const {ServerFactory} = require('../../_ng/server/server_factory');
const {NodeFactory} = require('../../_ng/server/node_factory');
const {GoFactory} = require('../../_ng/server/go_factory');

describe('server_factory', () => {
  it('should have the right values for the tokens()', () => {
    expect(ServerFactory.tokens().NODE).to.equal('node');
    expect(ServerFactory.tokens().GO).to.equal('go');
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
