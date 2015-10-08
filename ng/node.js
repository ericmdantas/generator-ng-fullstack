'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _import = require('lodash');

var _ = _interopRequireWildcard(_import);

var NodeServer = function NodeServer() {
  _classCallCheck(this, NodeServer);
};

var NodeStandard = (function (_NodeServer) {
  function NodeStandard() {
    _classCallCheck(this, NodeStandard);

    if (_NodeServer != null) {
      _NodeServer.apply(this, arguments);
    }
  }

  _inherits(NodeStandard, _NodeServer);

  return NodeStandard;
})(NodeServer);

var NodeBabel = (function (_NodeServer2) {
  function NodeBabel() {
    _classCallCheck(this, NodeBabel);

    if (_NodeServer2 != null) {
      _NodeServer2.apply(this, arguments);
    }
  }

  _inherits(NodeBabel, _NodeServer2);

  return NodeBabel;
})(NodeServer);

var NodeTypescript = (function (_NodeServer3) {
  function NodeTypescript() {
    _classCallCheck(this, NodeTypescript);

    if (_NodeServer3 != null) {
      _NodeServer3.apply(this, arguments);
    }
  }

  _inherits(NodeTypescript, _NodeServer3);

  return NodeTypescript;
})(NodeServer);