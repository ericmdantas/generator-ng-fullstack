import {expect} from 'chai';
import {AngularFactory, Angular1, Angular2} from '../_ng/angular';

describe('angular', () => {
  beforeEach(() => {

  });

  describe('factory', () => {
    it('should have the right values for the token', () => {
      expect(AngularFactory.tokens.NG1).to.equal('ng1');
      expect(AngularFactory.tokens.NG2).to.equal('ng2');
    })

    it('should return an error, token not found', () => {
      expect(() => {
        AngularFactory.build('something123');
      }).to.throw(Error, /Invalid Angular token: something123/);
    });

    it('should return an angular1 instance', function() {
      expect(AngularFactory.build('ng1') instanceof Angular1).to.be.true;
    });

    it('should return an angular2 instance', function() {
      expect(AngularFactory.build('ng2') instanceof Angular2).to.be.true;
    });
  });

  describe('ng1', () => {

  });

  describe('ng2', () => {

  });
})
