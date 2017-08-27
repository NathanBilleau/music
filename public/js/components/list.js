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

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ffmetadata = require('ffmetadata');

var _ffmetadata2 = _interopRequireDefault(_ffmetadata);

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
      files: [],
      tracks: []
    };
    return _this;
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _glob2.default)('C:\\Users\\Nathan\\Music\\**\\*.mp3', function (err, files) {
        _this2.setState({ files: files });

        files.map(function (i) {
          _ffmetadata2.default.read(i, function (err, data) {
            if (err) console.error("Error reading metadata", err);else console.log(data);
          });
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var track = this.state.files.map(function (i) {
        return _react2.default.createElement(_track2.default, {
          key: i,
          active: false,
          title: _path2.default.parse(i).name,
          artist: 'Pink Floyd',
          album: 'The Wall' });
      });

      return _react2.default.createElement(
        'div',
        { className: 'mainSection list' },
        _react2.default.createElement(
          'div',
          { className: 'filter' },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement('input', { type: 'radio', name: 'filter', defaultChecked: true }),
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
        track
      );
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;