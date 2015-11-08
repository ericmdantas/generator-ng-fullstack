'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _node = require('./node');

var _go = require('./go');

var ServerFactory = (function () {
  function ServerFactory() {
    _classCallCheck(this, ServerFactory);
  }

  _createClass(ServerFactory, null, [{
    key: 'create',
    value: function create(token, gen) {
      switch (token) {
        case ServerFactory.tokens.NODE:
          return _node.NodeFactory.build(gen);
        case ServerFactory.tokens.GO:
          return _go.GoFactory.build(gen);
      }
    }
  }, {
    key: 'tokens',
    value: {
      NODE: 'node',
      GO: 'go'
    },
    enumerable: true
  }]);

  return ServerFactory;
})();

exports.ServerFactory = ServerFactory;