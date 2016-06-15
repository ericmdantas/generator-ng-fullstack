import {expect} from 'chai';
import sinon from 'sinon';

import {MainGenerator} from '../../_ng/full/generator';

describe('generator', () => {
  before(() => {

  })

  describe('creation', () => {
    it('should have the object passed in constructor as the generator', () => {
      let _newGenerator = {"a": true};
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
        username: 'b',
        server: 'node',
        transpilerServer: 'typescript',
        template(){},
        directory(){},
        read: () => '{"a": true}',
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server node babel', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        transpilerServer: 'babel',
        template(){},
        directory(){},
        read: () => '{"a": true}',
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server node standard', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        transpilerServer: 'node',
        template(){},
        read: () => '{"a": true}',
        directory(){},
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - server go', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'go',
        transpilerServer: undefined,
        template: () => {},
        directory: () => {},
        read: () => '{"a": true}',
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - stack fullstack', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        stack: 'fullstack',
        client: 'ng2',
        server: 'go',
        transpilerServer: undefined,
        template: () => {},
        read: () => '{"a": true}',
        write(){},
        directory: () => {}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - stack server', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        stack: 'server',
        server: 'go',
        transpilerServer: undefined,
        template: () => {},
        directory: () => {},
        read: () => '{"a": true}',
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })

    it('should have the right calls - stack client', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        stack: 'client',
        client: 'ng1',
        server: 'go',
        transpilerServer: undefined,
        template: () => {},
        directory: () => {},
        read: () => '{"a": true}',
        write(){}
      }

      let _g = new MainGenerator(_gen);

      _g.writing();

      expect(_g.wrapper.template).to.have.been.called;
      expect(_g.wrapper.directory).to.have.been.called;
    })
  });

  describe('install', () => {
    it('should call the right stuff - ng1', () => {
      let _newGenerator = {
        installDependencies: sinon.spy(),
        options: {
          "skip-install": false
        },
        client: 'ng1'
      };

      let _g = new MainGenerator(_newGenerator);

      _g.install();

      let _call = [
        {
          skipInstall: false,
          npm: true,
          bower: true
        }
      ]

      expect(_g.wrapper.installDependencies).to.have.been.called;

      expect(_g.wrapper.installDependencies.calledWith(_call[0])).to.be.true;
    });

    it('should call the right stuff - ng2', () => {
      let _newGenerator = {
        installDependencies: sinon.spy(),
        options: {
          "skip-install": false
        },
        client: 'ng2'
      };

      let _g = new MainGenerator(_newGenerator);

      _g.install();

      let _call = [
        {
          skipInstall: false,
          npm: true,
          bower: false
        }
      ]

      expect(_g.wrapper.installDependencies).to.have.been.called;

      expect(_g.wrapper.installDependencies.calledWith(_call[0])).to.be.true;
    });
  });

  describe('promptUser', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        transpilerServer: 'typescript',
        stack: 'fullstack',
        async: () => {},
        read(){},
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

  describe('promptServer', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        stack: 'fullstack',
        client: 'ng2',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptServer();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });

  describe('promptTranspilerServer', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        client: 'ng2',
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

  describe('promptClient', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        client: 'ng2',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptClient();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });

  describe('promptSecure', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        client: 'ng2',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptSecure();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });

  describe('promptDifferentStaticServer', () => {
    it('should have the right calls', () => {
      let _gen = {
        appName: 'a',
        username: 'b',
        server: 'node',
        client: 'ng2',
        transpilerServer: 'typescript',
        async: () => {},
        prompt: () => {},
        config: {
          save: () => {}
        }
      }

      let _g = new MainGenerator(_gen);

      _g.promptDifferentStaticServer();

      expect(_g.wrapper.prompt).to.have.been.called;
      expect(_g.wrapper.config.save).to.have.been.called;
    })
  });
});
