import chalk from 'chalk';
import yosay from 'yosay';

export class MainGenerator {
  constructor() {

  }

  sayHello(generator) {
    generator.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));
  }

  writing(generator) {
      let _app = {app: generator.appName};
      let _username = {username: generator.githubUsername};
      let _appAndUsername = {app: _app.app, username: _username.username};
      let _server = generator.server;
      let _transpilerServer = generator.transpilerServer;

      generator.template('_package.json', 'package.json', _appAndUsername);
      generator.template('_bower.json', 'bower.json', _appAndUsername);
      generator.template('_README.md', 'README.md', _appAndUsername);

      generator.template('_gulpfile.js', 'gulpfile.js', _app);
      generator.template('_karma.conf.js', 'karma.conf.js', _app);
      generator.template('_protractor.conf.js', 'protractor.conf.js', _app);

      generator.template('_newrelic.js', 'newrelic.js', _app);

      generator.template('_procfile.txt', 'procfile.txt', _app);

      generator.template('_.bowerrc', '.bowerrc');
      generator.template('_.travis.yml', '.travis.yml');
      generator.template('_.gitignore', '.gitignore');
      generator.template('_.editorconfig', '.editorconfig');
      generator.template('_.jshintrc','.jshintrc');

      generator.directory('client', 'client');
      generator.directory('tests', 'tests');

      switch(_server) {
        case "node":
                  if (_transpilerServer === "typescript") {
                    generator.directory('server_node_typescript', 'server');
                    generator.template('index_tsc.js', 'index.js');

                    break;
                  }

                  if (_transpilerServer === "babel") {
                    generator.directory('server_node_babel', 'server');
                    generator.template('index.js', 'index.js');

                    break;
                  }

                  generator.directory('server_node', 'server');
                  generator.template('index.js', 'index.js');

                  break;

        case "go": generator.directory('server_go', 'server');
                   generator.template('server_go/main.go', 'server/main.go', {appName: _app.app, username: _username.username});
                   generator.template('server_go/routes/routes.go', 'server/routes/routes.go', {appName: _app.app, username: _username.username});

                   break;
      }
  }

  install(generator) {
      generator.installDependencies({skipInstall: generator.options['skip-install']});
  }

  promptUser(generator) {
      let done = generator.async();

      let prompts =
        [
          {
            name: 'appName',
            message: 'What is the name of your app?',
            default: 'some-name-here'
          },
          {
            name: 'githubUsername',
            message: 'What is your username on Github?',
            default: 'some-username-here'
          },
          {
            type: "list",
            name: "server",
            message: "What do you want in server side?",
            choices: ["node", "go"],
            default: 0
          }
        ];

      generator.prompt(prompts, (props) => {
        generator.appName = props.appName;
        generator.githubUsername = props.githubUsername;
        generator.server = props.server;

        generator.config.set('server', generator.server.toLowerCase());
        generator.config.set('username', generator.githubUsername);
        generator.config.set('appName', generator.appName);

        done();
      });

      generator.config.save();
  }

  promptTranspilerServer(generator) {
    let done = generator.async();

    let _prompts = [{
      type: "list",
      name: "transpilerServer",
      message: "What transpiler do you want to use in server side?",
      choices: ["node", "babel", "typescript"],
      default: 0,
      when: () => generator.server === "node"
    }];

    generator.prompt(_prompts, (props) => {
      generator.transpilerServer = props.transpilerServer;

      generator.config.set('transpilerServer', generator.transpilerServer);

      done();
    });

    generator.config.save();
  }
}
