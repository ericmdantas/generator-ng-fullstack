'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = require('./angular');

var ClientFactory = (function () {
  function ClientFactory() {
    _classCallCheck(this, ClientFactory);
  }

  _createClass(ClientFactory, null, [{
    key: 'create',
    value: function create(client, token, gen) {
      switch (client) {
        case ClientFactory.tokens.ANGULAR:
          return _angular.AngularFactory.build(token, gen);
      }
    }
  }, {
    key: 'tokens',
    value: {
      ANGULAR: 'angular'
    },
    enumerable: true
  }]);

  return ClientFactory;
})();

exports.ClientFactory = ClientFactory;