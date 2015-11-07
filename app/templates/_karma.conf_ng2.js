module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files:
      [
        'client/dev/bower_components/jquery/dist/jquery.min.js',
        'client/dev/bower_components/angular/angular.min.js',
        'client/dev/bower_components/angular-socket-io/socket.min.js',
        'client/dev/bower_components/angular-new-router/dist/router.es5.min.js',
        'client/dev/bower_components/angular-resource/angular-resource.min.js',
        'client/dev/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'client/dev/bower_components/ng-xtorage/ng-xtorage.min.js',
        'client/dev/bower_components/angulartics/src/angulartics.js',
        'client/dev/bower_components/angulartics/src/angulartics-ga.js',


        'client/dev/js/app.js',
        'client/dev/js/**/*.js',

        'client/dev/bower_components/angular-socket-io/mock/socket-io.js',
        'client/dev/bower_components/angular-mocks/angular-mocks.js',

        'tests/client/**/*_test.js',

        'client/dev/partials/includes/*.html' // for templateUrl testing
      ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage'],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors:
    {
      'client/dev/js/**/*.js': ['coverage'],
      'client/dev/partials/includes/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor:
    {
      stripPrefix: 'client/dev/',
      moduleName: 'my.includes'
    },

    coverageReporter:
    {
      type : 'lcov',
      dir : 'unit_coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'FirefoxNightly', 'ChromeCanary', 'IE', 'Safari', 'PhantomJS'],

    captureTimeout: 120000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
