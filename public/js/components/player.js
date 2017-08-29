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

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Librairies


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
      volume: 0.5,
      duration: 0,
      current: 0
    };
    return _this;
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var audioPlayer = document.getElementById('audioPlayer');
      var audioVolume = document.getElementById('audioVolume');
      var progressBar = document.getElementById('progressBar');
    }
  }, {
    key: 'previous',
    value: function previous() {}
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
    key: 'next',
    value: function next() {}
  }, {
    key: 'random',
    value: function random() {}
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
      _electron.shell.showItemInFolder(this.props.song);
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

      progressBar.style.width = current / duration * 100 + "%";

      this.setState({
        duration: duration,
        current: current
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'playerSection' },
        _react2.default.createElement('audio', { src: this.props.song, className: 'hidden', id: 'audioPlayer', autoPlay: true, onTimeUpdate: function onTimeUpdate() {
            return _this2.progress();
          } }),
        _react2.default.createElement(
          'div',
          { className: 'infos' },
          _react2.default.createElement(
            'h1',
            null,
            _path2.default.parse(this.props.song).name
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
          _react2.default.createElement(
            'div',
            { className: 'progressBar' },
            _react2.default.createElement('div', { className: 'progress gradient', id: 'progressBar' })
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
              _react2.default.createElement('img', { src: "./img/" + this.state.button + ".svg" })
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
            _react2.default.createElement('input', { type: 'range', min: '0', max: '1', step: '0.001', value: this.state.volume, id: 'audioVolume', onChange: function onChange() {
                return _this2.volume();
              } })
          )
        )
      );
    }
  }]);

  return Player;
}(_react2.default.Component);

exports.default = Player;