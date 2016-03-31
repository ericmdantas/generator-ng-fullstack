"use strict";

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const utils = require('../../_ng/utils/yeoman-utils');

describe('yeoman-utils', () => {
  describe('directory', () => {
    it('should be a function', () => {
      expect(typeof utils.directory).to.equal('function');
    });

    it('should throw TypeError, theres no function in the given object - object is undefined', () => {
      let _obj = undefined;
      let _paths = ['123', '456'];
      let _opts = {a: true};

      expect(() => utils.directory(_obj, _paths, _opts)).to.throw(TypeError);
    });

    it('should throw TypeError, object doesnt have template function', () => {
      let _obj = {};
      let _paths = ['123', '456'];
      let _opts = {a: true};

      expect(() => utils.directory(_obj, _paths, _opts)).to.throw(TypeError);
      expect(_obj.template).not.to.have.been.called;
    });

    it('should throw TypeError, paths is not an array', () => {
      let _obj = {
          template: sinon.spy()
      };

      let _paths = undefined;
      let _opts = {a: true};

      expect(() => utils.directory(_obj, _paths, _opts)).to.throw(TypeError);
      expect(_obj.template).not.to.have.been.called;
    });

    it('should not throw TypeError, opts is not defined', () => {
      let _obj = {
          template: sinon.spy()
      };

      let _paths = [
        ['1', '2']
      ];
      let _opts = undefined;

      expect(() => utils.directory(_obj, _paths, _opts)).not.to.throw(TypeError);
      expect(_obj.template).to.have.been.called;
      expect(_obj.template.calledWith(_paths[0][0], _paths[0][1])).to.have.been.called;
    });

    it('should call template correctly', () => {
      let _obj = {
          template: sinon.spy()
      };

      let _paths = [
        ['1', '2']
      ];

      let _opts = undefined;

      expect(() => utils.directory(_obj, _paths, _opts)).not.to.throw(TypeError);
      expect(_obj.template.calledWith(_paths[0][0], _paths[0][1])).to.have.been.called;
    });

    it('should call template multiple times', () => {
      let _obj = {
          template: sinon.spy()
      };

      let _paths = [
        ['1', '2'],
        ['3', '4'],
        ['5', '6']
      ];
      let _opts = undefined;

      expect(() => utils.directory(_obj, _paths, _opts)).not.to.throw(TypeError);
      expect(_obj.template).to.have.been.called;
      expect(_obj.template.calledWith(_paths[0][0], _paths[0][1])).to.have.been.called;
      expect(_obj.template.calledWith(_paths[1][0], _paths[1][1])).to.have.been.called;
      expect(_obj.template.calledWith(_paths[2][0], _paths[2][1])).to.have.been.called;
    });
  });
})
