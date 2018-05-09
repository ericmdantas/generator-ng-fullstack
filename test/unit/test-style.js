import {expect} from 'chai';
import * as sinon from 'sinon';
import knownPaths from '../../_ng/utils/known_paths';
import {
  copyStyleForSubGenerator,
  copyStyleForMainGenerator,
  getStyleExtension,
  normalizeStylePreprocessor
} from '../../_ng/client/style';

describe('style', () => {
  describe('getStyleExtension', () => {
    it('should return less', () => {
      var _gen = {
        stylePreprocessor: "less"
      };

      expect(getStyleExtension(_gen)).to.equal(".less");
    })

    it('should return sass', () => {
      var _gen = {
        stylePreprocessor: "sass"
      }

      expect(getStyleExtension(_gen)).to.equal(".scss");
    })

    it('should return .css - none', () => {
      var _gen = {
        stylePreprocessor: "none"
      }

      expect(getStyleExtension(_gen)).to.equal(".css");
    })
  })

  describe('normalizeStylePreprocessor', () => {
    it('should return less', () => {
      var _stylePreprocessor = "less";

      expect(normalizeStylePreprocessor(_stylePreprocessor)).to.equal("less");
    })

    it('should return sass', () => {
      var _stylePreprocessor = "sass";

      expect(normalizeStylePreprocessor(_stylePreprocessor)).to.equal("sass");
    })

    it('should return undefined - none', () => {
      var _stylePreprocessor = "none";

      expect(normalizeStylePreprocessor(_stylePreprocessor)).to.equal(undefined);
    })


    it('should return undefined - empty string', () => {
      var _stylePreprocessor = "";

      expect(normalizeStylePreprocessor(_stylePreprocessor)).to.equal(undefined);
    })
  })

  describe('copyStyleForSubGenerator', () => {
    describe('css', () => {
      it('should call the generator with the right params - generating .css - theres no stylePreprocessor set', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy()
          };

          copyStyleForSubGenerator(_gen, '');

          let _firstCall = [
            'style.css',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })

      it('should call the generator with the right params - generating .css - stylePreprocessor set to none', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'none'
          };

          copyStyleForSubGenerator(_gen, '');

          let _firstCall = [
            'style.css',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.css'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })

    describe('less', () => {
      it('should call the generator with the right params - generating .less - stylePreprocessor set to less', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'less'
          };

          copyStyleForSubGenerator(_gen, '');

          let _firstCall = [
            'style.less',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.less'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })

    describe('sass', () => {
      it('should call the generator with the right params - generating .less - stylePreprocessor set to sass', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'sass'
          };

          copyStyleForSubGenerator(_gen, '');

          let _firstCall = [
            'style.scss',
            knownPaths.PATH_CLIENT_FEATURES + _gen.options.feature + '/styles/' + _gen.name + '.scss'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })
  })

  describe('copyStyleForMainGenerator', () => {
    describe('css', () => {
      it('should call the generator with the right params - generating .css - theres no stylePreprocessor set', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy()
          };

          copyStyleForMainGenerator(_gen, 'path/to/generate/todo');

          let _firstCall = [
            'client/_styles/todo.css',
            'path/to/generate/todo.css'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })

      it('should call the generator with the right params - generating .css - stylePreprocessor set to none', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'none'
          };

          copyStyleForMainGenerator(_gen, 'path/to/generate/todo');

          let _firstCall = [
            'client/_styles/todo.css',
            'path/to/generate/todo.css'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })

    describe('less', () => {
      it('should call the generator with the right params - generating .less - stylePreprocessor set to less', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'less'
          };

          copyStyleForMainGenerator(_gen, 'path/to/generate/todo');

          let _firstCall = [
            'client/_styles/todo.less',
            'path/to/generate/todo.less'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })

    describe('sass', () => {
      it('should call the generator with the right params - generating .less - stylePreprocessor set to sass', () =>{
        let _gen = {
            options: {
              feature: 'x'
            },
            template: sinon.spy(),
            stylePreprocessor: 'sass'
          };

          copyStyleForMainGenerator(_gen, 'path/to/generate/todo');

          let _firstCall = [
            'client/_styles/todo.scss',
            'path/to/generate/todo.scss'
          ];

          expect(_gen.template.calledWith(_firstCall[0], _firstCall[1])).to.be.true;
      })
    })
  })
})
