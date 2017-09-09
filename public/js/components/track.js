'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _musicmetadata = require('musicmetadata');

var _musicmetadata2 = _interopRequireDefault(_musicmetadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      var song = {
        path: this.props.path,
        id: this.props.id,
        title: _path2.default.parse(this.props.path).name,
        album: 'Unknown Album',
        artist: 'Unknown Artist'
      };

      (0, _musicmetadata2.default)(stream, function (err, meta) {
        if (err) throw err;

        song.title = meta.title;
        song.album = meta.album;
        song.artist = meta.albumartist[0];

        //cannot read property 'data' of undefined
        if (typeof meta.picture[0] != 'undefined') {
          song.picture = meta.picture[0].data;
        }

        _this2.setState({
          song: song
        });

        stream.close();
      });

      setTimeout(function () {
        _this2.props.appState({
          songs: [].concat(_toConsumableArray(_this2.props.songs), [_this2.state.song])
        });
      }, 50);
    }
  }, {
    key: 'play',
    value: function play() {
      this.props.appState({
        songId: this.state.song.id
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = 'track';

      if (this.props.active === true) {
        className += ' active';
      }

      if (typeof this.state.song.title != 'undefined' && this.props.search != ' ' && this.props.search != '' && this.state.song.title.toLowerCase().search(this.props.search) != -1) {
        className += ' searched';
      }

      return _react2.default.createElement(
        'div',
        { className: className },
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