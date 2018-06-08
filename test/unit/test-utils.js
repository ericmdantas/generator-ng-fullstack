const {expect} = require('chai');
const utils = require('../../_ng/utils/utils');

describe('capitalizeFirst', () => {
  it('should not capitalize it - nothing passed', () => {
    expect(utils.capitalizeFirst()).to.equal('');
  })

  it('should capitalize it - one letter', () => {
    expect(utils.capitalizeFirst('a')).to.equal('A');
  })

  it('should capitalize it - two words', () => {
    expect(utils.capitalizeFirst('a b')).to.equal('A b');
  })
})
