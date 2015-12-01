// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit=Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
  packages: {
    'base/client/dev': {
      defaultExtension: false,
      format: 'register',
      map: Object.keys(window.__karma__.files)
                 .filter(onlyAppFiles)
                 .reduce((pathsMapping, appPath) => {
                   // creates local module name mapping to global path with karma's fingerprint in path, e.g.:
                   // './hero.service': '/base/app/hero.service.js?f4523daf879cfb7310ef6242682ccf10b2041b3e'

                   var moduleName = appPath.replace(/^\/base\/client\/dev\//, './').replace(/\.js$/, '');
                   pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath]

                   return pathsMapping;
            }, {})
      }
    }
});

System.import('angular2/src/platform/browser/browser_adapter')
      .then((browser_adapter) => {
        return browser_adapter.BrowserDomAdapter.makeCurrent();
      })
      .then(() => {
        return Promise.all(
          Object.keys(window.__karma__.files)
                .filter(onlySpecFiles)
                .map((moduleName) => {
                  return System.import(moduleName);
                })
        );
      })
      .then(() => {
        return __karma__.start();
      })
      .catch((error) => {
        return __karma__.error(error.stack || error);
      });

function filePath2moduleName(filePath) {
  return filePath.replace(/^\//, '').replace(/\.\w+$/, '');
}

function onlyAppFiles(filePath) {
  return /^\/base\/client\/dev\/.*\.js$/.test(filePath)
}

function onlySpecFiles(path) {
  return /_test\.ts$/.test(path);
}
