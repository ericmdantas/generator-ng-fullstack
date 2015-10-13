import {expect} from 'chai';
import optionsParser from '../_ng/options_parser';

describe('options-parser', () => {
  it('should return ``, no params', () => {
    expect(optionsParser.getFeature({})).to.equal('');
  })

  it('should return ``, empty object', () => {
    expect(optionsParser.getFeature({})).to.equal('');
  })

  it('should return /something, no params', () => {
    expect(optionsParser.getFeature({feature: 'something'})).to.equal('something/');
  })
})
