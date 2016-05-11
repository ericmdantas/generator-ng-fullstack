module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      {pattern: 'node_modules/systemjs/dist/system.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/common/index.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/common/testing.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/compiler/index.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/compiler/testing.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/core/index.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/core/testing.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/platform-browser-dynamic/index.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/platform-browser-dynamic/testing.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'client/dev/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'client/dev/**/*.html', included: false, watched: true},
      {pattern: 'client/dev/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'client/dev/**/*.ts', included: false, watched: false},
      {pattern: 'client/dev/**/*.js.map', included: false, watched: false},

      {pattern: 'tests/client/**/*_test.js', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/client/dev/"
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  })
}
