import {expect} from 'chai';
import optionsParser from '../../_ng/utils/options_parser';

describe('options-parser', () => {
  describe('getFeature', () => {
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

  describe('isServerOnly', () => {
    it('should return false, opt is undefined', () => {
      expect(optionsParser.isServerOnly()).to.be.false;
    })

    it('should return false, opt is null', () => {
      expect(optionsParser.isServerOnly(null)).to.be.false;
    })

    it('should return false, opt is an empty object', () => {
      expect(optionsParser.isServerOnly({})).to.be.false;
    })

    it('should return the value of serverOnly - false', () => {
      expect(optionsParser.isServerOnly({serverOnly: false})).to.be.false;
    })

    it('should return a boolean cast of the serverOnly - false', () => {
      expect(optionsParser.isServerOnly({serverOnly: 'something'})).to.be.true;
    })

    it('should return the value of serverOnly - true', () => {
      expect(optionsParser.isServerOnly({serverOnly: true})).to.be.true;
    })
  })

  describe('isClientOnly', () => {
    it('should return false, opt is undefined', () => {
      expect(optionsParser.isClientOnly()).to.be.false;
    })

    it('should return false, opt is null', () => {
      expect(optionsParser.isClientOnly(null)).to.be.false;
    })

    it('should return false, opt is an empty object', () => {
      expect(optionsParser.isClientOnly({})).to.be.false;
    })

    it('should return the value of serverOnly - false', () => {
      expect(optionsParser.isClientOnly({clientOnly: false})).to.be.false;
    })

    it('should return a boolean cast of the serverOnly - false', () => {
      expect(optionsParser.isClientOnly({clientOnly: 'something'})).to.be.true;
    })

    it('should return the value of serverOnly - true', () => {
      expect(optionsParser.isClientOnly({clientOnly: true})).to.be.true;
    })
  })
})
