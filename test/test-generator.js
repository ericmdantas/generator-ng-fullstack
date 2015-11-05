import {expect} from 'chai';
import sinon from 'sinon';

import {MainGenerator} from '../_ng/generator';

describe('generator_config', () => {
  before(() => {

  })

  describe('creation', () => {
    it('should have the object passed in constructor as the generator', () => {
      let _newGenerator = {a: true};
      let _g = new MainGenerator(_newGenerator);

      expect(_g.wrapper).to.be.equal(_newGenerator);
    });
  })

  describe('sayHello', () => {
    it('should call the right stuff', () => {
      let _newGenerator = {log: () =>{}};

      sinon.spy(_newGenerator, 'log');

      let _g = new MainGenerator(_newGenerator);

      _g.sayHello();

      expect(_g.wrapper.log).to.have.been.called;
    });
  });

  describe('writing', () => {
    it('should have the right calls - server node typescript', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'node',
        transpilerServer: 'typescript',
        template(){},
        directory(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server node babel', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'node',
        transpilerServer: 'babel',
        template(){},
        directory(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server node standard', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'node',
        transpilerServer: 'node',
        template(){},
        directory(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server go', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'go',
        transpilerServer: undefined,
        template: () => {},
        directory: () => {}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })
  });

  describe('install', () => {
    it('should call the right stuff', () => {
      let _newGenerator = {
        installDependencies: () =>{},
        options: {
          "skip-install": false
        }
      };

      sinon.spy(_newGenerator, 'installDependencies');

      let _g = new MainGenerator(_newGenerator);

      _g.install();

      expect(_g.wrapper.installDependencies).to.have.been.called;
    });
  });

  describe('promptUser', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'node',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptUser();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });

  describe('promptTranspilerServer', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        githubUsername: 'b',
        server: 'node',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptTranspilerServer();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });
});
