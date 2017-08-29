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

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var Settings = function (_React$Component) {
  _inherits(Settings, _React$Component);

  function Settings() {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Settings, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.props.display === true ? "mainSection settings" : "mainSection settings hidden" },
        _react2.default.createElement(
          'h1',
          null,
          'Settings'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Music location'
        ),
        _react2.default.createElement(
          'label',
          { className: 'browse' },
          _react2.default.createElement('input', { type: 'file', className: 'hidden' }),
          _react2.default.createElement('img', { src: './img/folder.svg' }),
          _react2.default.createElement(
            'span',
            null,
            'browse'
          )
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Color'
        ),
        _react2.default.createElement(
          'div',
          { className: 'colorContainer' },
          _react2.default.createElement(
            'label',
            { className: 'color' },
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'TealLove', defaultChecked: true, onClick: function onClick() {
                return _this2.props.appState({ color: 'TealLove' });
              } }),
            _react2.default.createElement('div', { className: 'TealLove' })
          ),
          _react2.default.createElement(
            'label',
            { className: 'color' },
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'Reef', onClick: function onClick() {
                return _this2.props.appState({ color: 'Reef' });
              } }),
            _react2.default.createElement('div', { className: 'Reef' })
          ),
          _react2.default.createElement(
            'label',
            { className: 'color' },
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'LightOrange', onClick: function onClick() {
                return _this2.props.appState({ color: 'LightOrange' });
              } }),
            _react2.default.createElement('div', { className: 'LightOrange' })
          )
        )
      );
    }
  }]);

  return Settings;
}(_react2.default.Component);

exports.default = Settings;