'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _track = require('./track');

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mainSection list' },
        _react2.default.createElement(
          'div',
          { className: 'filter' },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', { type: 'radio', name: 'filter', checked: true }),
            _react2.default.createElement(
              'span',
              null,
              'Title'
            )
          ),
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', { type: 'radio', name: 'filter' }),
            _react2.default.createElement(
              'span',
              null,
              'Artist'
            )
          ),
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', { type: 'radio', name: 'filter' }),
            _react2.default.createElement(
              'span',
              null,
              'Album'
            )
          )
        ),
        _react2.default.createElement(_track2.default, { active: true, title: 'Another Brick in The Wall', artist: 'Pink Floyd', album: 'The Wall' }),
        _react2.default.createElement(_track2.default, { active: false, title: 'I Shot the Sherif', artist: 'Bob Marley', album: 'Gold' }),
        _react2.default.createElement(_track2.default, { active: false, title: 'Ramble On', artist: 'Led Zeppelin', album: 'MotherShip' })
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;