'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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

    _this.state = {
      files: []
    };
    return _this;
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.musicFolder != "") {
        (0, _glob2.default)(this.props.musicFolder + "\\**\\*.mp3", function (err, files) {
          _this2.setState({ files: files });
          _this2.props.appState({ main: 'list' });
        });
      } else {
        this.props.appState({ main: 'list' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var track = void 0;

      if (this.props.musicFolder === "") {
        track = _react2.default.createElement(
          'h1',
          null,
          'Please select your music folder in settings and restart.'
        );
      } else {
        var selection = this.state.files.filter(function (item) {
          return _path2.default.parse(item).name.toLowerCase().search(_this3.props.search) != -1;
        });

        track = this.state.files.map(function (item, i) {
          return _react2.default.createElement(_track2.default, {
            key: i,
            id: i,
            appState: _this3.props.appState,
            songs: _this3.props.songs,
            path: item,
            search: _this3.props.search,
            active: _this3.props.songId === i ? true : false });
        });
      }

      return _react2.default.createElement(
        'div',
        { className: this.props.display === true ? "mainSection list" : "mainSection list hidden" },
        track
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;