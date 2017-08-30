'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _musicmetadata = require('musicmetadata');

var _musicmetadata2 = _interopRequireDefault(_musicmetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


// Components


var Track = function (_React$Component) {
  _inherits(Track, _React$Component);

  function Track() {
    _classCallCheck(this, Track);

    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this));

    _this.state = {
      song: {}
    };
    return _this;
  }

  _createClass(Track, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var stream = _fs2.default.createReadStream(this.props.path);

      (0, _musicmetadata2.default)(stream, function (err, meta) {
        if (err) throw err;

        var title = meta.title;
        var album = meta.album;
        var artist = meta.albumartist[0];

        _this2.setState({
          song: {
            path: _this2.props.path,
            title: title,
            album: album,
            artist: artist
          }
        });

        stream.close();
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.props.appState({
        song: this.state.song
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: this.props.active === true ? 'track active' : 'track' },
        _react2.default.createElement(
          'h1',
          null,
          this.state.song.title
        ),
        _react2.default.createElement(
          'h2',
          null,
          this.state.song.artist
        ),
        _react2.default.createElement(
          'h3',
          null,
          this.state.song.album
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.play();
            } },
          _react2.default.createElement('img', { src: 'img/play.svg' })
        )
      );
    }
  }]);

  return Track;
}(_react2.default.Component);

exports.default = Track;