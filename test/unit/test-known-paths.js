import {expect} from 'chai';
import knownPaths from '../../_ng/utils/known_paths';

describe('knownPaths', () => {
  it('should have the right info for PATH_CLIENT_FEATURES', () => {
    expect(knownPaths.PATH_CLIENT_FEATURES).to.equal('client/dev/js/');
  })

  it('should have the right info for PATH_CLIENT_FEATURES_TEST', () => {
    expect(knownPaths.PATH_CLIENT_FEATURES_TEST).to.equal('tests/client/');
  })

  it('should have the right info for PATH_SERVER_FEATURES', () => {
    expect(knownPaths.PATH_SERVER_FEATURES).to.equal('server/api/');
  })

  it('should have the right info for PATH_SERVER_FEATURES_TEST', () => {
    expect(knownPaths.PATH_SERVER_FEATURES_TEST).to.equal('tests/server/');
  })
})
