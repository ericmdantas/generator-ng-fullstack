'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var NodeServer = function NodeServer() {
  _classCallCheck(this, NodeServer);
};

var NodeStandard = (function (_NodeServer) {
  _inherits(NodeStandard, _NodeServer);

  function NodeStandard() {
    _classCallCheck(this, NodeStandard);

    _get(Object.getPrototypeOf(NodeStandard.prototype), 'constructor', this).call(this);
  }

  return NodeStandard;
})(NodeServer);

var NodeBabel = (function (_NodeServer2) {
  _inherits(NodeBabel, _NodeServer2);

  function NodeBabel() {
    _classCallCheck(this, NodeBabel);

    _get(Object.getPrototypeOf(NodeBabel.prototype), 'constructor', this).call(this);
  }

  return NodeBabel;
})(NodeServer);

var NodeTypescript = (function (_NodeServer3) {
  _inherits(NodeTypescript, _NodeServer3);

  function NodeTypescript() {
    _classCallCheck(this, NodeTypescript);

    _get(Object.getPrototypeOf(NodeTypescript.prototype), 'constructor', this).call(this);
  }

  return NodeTypescript;
})(NodeServer);