'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Angular1 = function Angular1(gen) {
  _classCallCheck(this, Angular1);

  this.generator = gen;
};

exports.Angular1 = Angular1;

var Angular2 = function Angular2(gen) {
  _classCallCheck(this, Angular2);

  this.generator = gen;
};

exports.Angular2 = Angular2;

var AngularFactory = (function () {
  function AngularFactory() {
    _classCallCheck(this, AngularFactory);
  }

  _createClass(AngularFactory, null, [{
    key: 'build',
    value: function build(token, gen) {
      switch (token) {
        case AngularFactory.tokens.NG1:
          return new Angular1(gen);
        case AngularFactory.tokens.NG2:
          return new Angular2(gen);
        default:
          throw new Error('Invalid Angular token: ' + token + '.');
      }
    }
  }, {
    key: 'tokens',
    value: {
      NG1: 'ng1',
      NG2: 'ng2'
    },
    enumerable: true
  }]);

  return AngularFactory;
})();

exports.AngularFactory = AngularFactory;