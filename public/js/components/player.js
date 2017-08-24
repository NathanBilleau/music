'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Player, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'playerSection' },
        _react2.default.createElement(
          'div',
          { className: 'infos' },
          _react2.default.createElement(
            'h1',
            null,
            'Another brick in the wall'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Pink Floyd'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'player' },
          _react2.default.createElement('div', { className: 'cover', style: { backgroundImage: "url('img/cover.jpg')" } }),
          _react2.default.createElement(
            'div',
            { className: 'time' },
            _react2.default.createElement(
              'span',
              null,
              '0:00'
            ),
            '/',
            _react2.default.createElement(
              'span',
              null,
              '3:45'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'progressBar' },
            _react2.default.createElement('div', { className: 'progress gradient' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'controls' },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.previous();
                } },
              _react2.default.createElement('img', { src: './img/previous.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.play();
                } },
              _react2.default.createElement('img', { src: './img/play.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.next();
                } },
              _react2.default.createElement('img', { src: './img/next.svg' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'controlsSecondaryContainer' },
          _react2.default.createElement(
            'div',
            { className: 'controlsSecondary' },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.random();
                } },
              _react2.default.createElement('img', { src: './img/shuffle.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.mute();
                } },
              _react2.default.createElement('img', { src: './img/mute.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.folder();
                } },
              _react2.default.createElement('img', { src: './img/folder.svg' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'volume' },
            _react2.default.createElement('input', { type: 'range', min: '0', max: '100' })
          )
        )
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;