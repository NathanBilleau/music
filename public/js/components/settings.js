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

var _config = require('..\\..\\..\\config.json');

var _config2 = _interopRequireDefault(_config);

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

    _this.state = {
      color: ''
    };
    return _this;
  }

  _createClass(Settings, [{
    key: 'close',
    value: function close() {
      this.props.appState({
        main: 'list'
      });
    }
  }, {
    key: 'color',
    value: function color(gradient) {
      this.props.appState({
        color: gradient
      });

      _config2.default.color = gradient;

      // ecrire dans le fichier
      _fs2.default.writeFileSync(__dirname + '\\..\\..\\..\\config.json', JSON.stringify(_config2.default, null, '\t'), function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        color: _config2.default.color
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.props.display === true ? "mainSection settings" : "mainSection settings hidden" },
        _react2.default.createElement(
          'button',
          { className: 'closeBtn', onClick: function onClick() {
              return _this2.close();
            } },
          _react2.default.createElement('img', { src: './img/close.svg' })
        ),
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
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'TealLove', defaultChecked: this.state.color === 'TealLove' ? true : false, onClick: function onClick() {
                return _this2.color('TealLove');
              } }),
            _react2.default.createElement('div', { className: 'TealLove' })
          ),
          _react2.default.createElement(
            'label',
            { className: 'color' },
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'Reef', defaultChecked: this.state.color === 'Reef' ? true : false, onClick: function onClick() {
                return _this2.color('Reef');
              } }),
            _react2.default.createElement('div', { className: 'Reef' })
          ),
          _react2.default.createElement(
            'label',
            { className: 'color' },
            _react2.default.createElement('input', { type: 'radio', name: 'color', className: 'hidden', value: 'LightOrange', defaultChecked: this.state.color === 'LightOrange' ? true : false, onClick: function onClick() {
                return _this2.color('LightOrange');
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