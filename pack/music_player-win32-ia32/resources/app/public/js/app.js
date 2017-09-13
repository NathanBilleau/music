'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _config = require('..\\config.json');

var _config2 = _interopRequireDefault(_config);

var _top = require('./js/components/top');

var _top2 = _interopRequireDefault(_top);

var _player = require('./js/components/player');

var _player2 = _interopRequireDefault(_player);

var _loading = require('./js/components/loading');

var _loading2 = _interopRequireDefault(_loading);

var _settings = require('./js/components/settings');

var _settings2 = _interopRequireDefault(_settings);

var _list = require('./js/components/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      search: ' ',
      main: 'loading',
      color: '',
      musicFolder: '',
      songId: 0,
      songs: [],
      random: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        color: _config2.default.color,
        musicFolder: _config2.default.musicFolder
      });
    }
  }, {
    key: 'appState',
    value: function appState(newState) {
      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: "app " + this.state.color },
        _react2.default.createElement(
          'div',
          { className: 'mainContainer' },
          _react2.default.createElement(_top2.default, { appState: this.appState.bind(this) }),
          _react2.default.createElement(_loading2.default, { appState: this.appState.bind(this), display: this.state.main === 'loading' ? true : false }),
          _react2.default.createElement(_settings2.default, { appState: this.appState.bind(this), display: this.state.main === 'settings' ? true : false }),
          _react2.default.createElement(_list2.default, { appState: this.appState.bind(this), songs: this.state.songs, songId: this.state.songId, search: this.state.search, musicFolder: this.state.musicFolder, display: this.state.main === 'list' ? true : false })
        ),
        _react2.default.createElement(_player2.default, { appState: this.appState.bind(this), songId: this.state.songId, songs: this.state.songs, random: this.state.random })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));