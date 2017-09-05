'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _electron = require('electron');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _musicmetadata = require('musicmetadata');

var _musicmetadata2 = _interopRequireDefault(_musicmetadata);

var _mousetrap = require('mousetrap');

var _mousetrap2 = _interopRequireDefault(_mousetrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


_mousetrap2.default.addKeycodes({
  179: 'playpause',
  177: 'previous',
  176: 'next',
  174: 'volumeDown',
  175: 'volumeUp',
  173: 'volumeMute'
});

// Components


function secondsToMinutes(time) {
  return Math.floor(time / 60) + ':' + Math.floor(time % 60);
}

var Player = function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.state = {
      button: 'pause',
      volume: 0.3,
      duration: 0,
      current: 0,
      song: {}
    };
    return _this;
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var audioPlayer = document.getElementById('audioPlayer');
      var audioVolume = document.getElementById('audioVolume');
      var audioSeek = document.getElementById('audioSeek');

      audioPlayer.volume = this.state.volume;
      cover.style.backgroundImage = 'none';

      audioPlayer.onended = function () {
        _this2.next();
      };

      audioPlayer.ondurationchange = function () {
        _this2.newSong();
      };

      // Keybinding

      _mousetrap2.default.bind('playpause', function () {
        _this2.play();
      });

      _mousetrap2.default.bind('next', function () {
        _this2.next();
      });

      _mousetrap2.default.bind('previous', function () {
        _this2.previous();
      });

      _mousetrap2.default.bind('volumeUp', function () {
        _this2.setState({
          volume: _this2.state.volume + 0.1
        });
      });

      _mousetrap2.default.bind('volumeDown', function () {
        _this2.setState({
          volume: _this2.state.volume - 0.1
        });
      });

      _mousetrap2.default.bind('volumeMute', function () {
        _this2.mute();
      });
    }
  }, {
    key: 'newSong',
    value: function newSong() {

      this.setState({ song: this.props.songs[this.props.songId] });

      if (typeof this.state.song.picture != 'undefined') {

        var coverFile = __dirname + '/../../img/cover/' + this.state.song.album + '.png';
        var coverFileTmp = __dirname + '/../../img/cover.png';

        _fs2.default.writeFile(coverFileTmp, this.state.song.picture, function (err) {
          if (err) throw err;

          _fs2.default.createReadStream(coverFileTmp).pipe(_fs2.default.createWriteStream(coverFile));
        });
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (audioPlayer.paused) {
        audioPlayer.play();
        this.setState({
          button: 'pause'
        });
      } else {
        audioPlayer.pause();
        this.setState({
          button: 'play'
        });
      }
    }
  }, {
    key: 'previous',
    value: function previous() {
      var currentIndex = this.state.song.id - 1;
      this.props.appState({ songId: currentIndex });
    }
  }, {
    key: 'next',
    value: function next() {
      var currentIndex = this.state.song.id + 1;
      this.props.appState({ songId: currentIndex });
    }
  }, {
    key: 'random',
    value: function random() {
      this.props.appState({ random: true });
    }
  }, {
    key: 'mute',
    value: function mute() {
      if (audioPlayer.volume != 0) {
        this.setState({
          volume: 0
        });
        audioPlayer.volume = 0;
      } else {
        this.setState({
          volume: 0.5
        });
        audioPlayer.volume = 0.5;
      }
    }
  }, {
    key: 'folder',
    value: function folder() {
      _electron.shell.showItemInFolder(this.state.song.path);
    }
  }, {
    key: 'volume',
    value: function volume() {
      this.setState({
        volume: audioVolume.value
      });

      audioPlayer.volume = this.state.volume;
    }
  }, {
    key: 'progress',
    value: function progress() {
      var duration = audioPlayer.duration;
      var current = audioPlayer.currentTime;

      var percent = current / duration * 50;

      cover.style.backgroundImage = 'none';
      if (typeof this.state.song.picture != 'undefined') {
        cover.style.backgroundCenter = "center";
        cover.style.backgroundSize = 100 + percent + "%";
        cover.style.backgroundImage = 'url("./img/cover/' + this.state.song.album + '.png")';
      }

      this.setState({
        duration: duration,
        current: current
      });
    }
  }, {
    key: 'seek',
    value: function seek() {
      var seek = audioSeek.value;
      audioPlayer.currentTime = seek;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var audio = void 0;

      if (typeof this.props.songs[this.props.songId] != 'undefined') {
        audio = _react2.default.createElement('audio', { src: this.props.songs[this.props.songId].path, className: 'hidden', id: 'audioPlayer', autoPlay: true, onTimeUpdate: function onTimeUpdate() {
            return _this3.progress();
          } });
      } else {
        audio = _react2.default.createElement('audio', { className: 'hidden', id: 'audioPlayer', autoPlay: true, onTimeUpdate: function onTimeUpdate() {
            return _this3.progress();
          } });
      }

      return _react2.default.createElement(
        'div',
        { className: 'playerSection' },
        audio,
        _react2.default.createElement(
          'div',
          { className: 'infos' },
          _react2.default.createElement(
            'h1',
            null,
            this.state.song.title
          ),
          _react2.default.createElement(
            'h2',
            null,
            this.state.song.artist
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'player' },
          _react2.default.createElement('div', { className: 'cover', id: 'cover' }),
          _react2.default.createElement(
            'div',
            { className: 'time' },
            _react2.default.createElement(
              'span',
              null,
              secondsToMinutes(this.state.current)
            ),
            '/',
            _react2.default.createElement(
              'span',
              null,
              secondsToMinutes(this.state.duration)
            )
          ),
          _react2.default.createElement('input', { type: 'range', min: '0', max: this.state.duration, id: 'audioSeek', className: 'progressbar gradient', value: this.state.current, onChange: function onChange() {
              return _this3.seek();
            } }),
          _react2.default.createElement(
            'div',
            { className: 'controls' },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.previous();
                } },
              _react2.default.createElement('img', { src: './img/previous.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.play();
                } },
              _react2.default.createElement('img', { src: "./img/" + this.state.button + ".svg" })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.next();
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
                  return _this3.random();
                } },
              _react2.default.createElement('img', { src: './img/shuffle.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.mute();
                } },
              _react2.default.createElement('img', { src: './img/mute.svg' })
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this3.folder();
                } },
              _react2.default.createElement('img', { src: './img/folder.svg' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'volume' },
            _react2.default.createElement('input', { type: 'range', min: '0', max: '1', step: '0.001', value: this.state.volume, id: 'audioVolume', onChange: function onChange() {
                return _this3.volume();
              } })
          )
        )
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;