(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-input-auto-tab"] = factory(require("react"));
	else
		root["react-input-auto-tab"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Autotab = function (_Component) {
	  _inherits(Autotab, _Component);

	  function Autotab() {
	    _classCallCheck(this, Autotab);

	    var _this = _possibleConstructorReturn(this, (Autotab.__proto__ || Object.getPrototypeOf(Autotab)).call(this));

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleTab = _this.handleTab.bind(_this);
	    return _this;
	  }

	  _createClass(Autotab, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var input = e.target.value;
	      this.props.onChange(input);
	    }
	  }, {
	    key: 'handleTab',
	    value: function handleTab(e) {
	      var target = e.target;
	      var input = target.value;
	      if (input.length >= this.props.maxLength) {
	        var next = target;
	        next = next.nextElementSibling;
	        while (next) {
	          if (next === null) break;
	          if (next.tagName.toLowerCase() === 'input') {
	            next.focus();
	            break;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', {
	        type: this.props.type,
	        name: this.props.name,
	        placeholder: this.props.hint,
	        maxLength: this.props.maxLength,
	        defaultValue: this.props.value,
	        onChange: this.handleChange,
	        onKeyUp: this.props.maxLength ? this.handleTab : null,
	        style: this.props.style,
	        autoFocus: this.props.autoFocus
	      });
	    }
	  }]);

	  return Autotab;
	}(_react.Component);

	Autotab.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  onChange: _react.PropTypes.func.isRequired,
	  type: _react.PropTypes.string,
	  hint: _react.PropTypes.string,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  maxLength: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  autoFocus: _react.PropTypes.bool
	};

	exports.default = Autotab;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;