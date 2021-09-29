(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[993],{

/***/ 58993:
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-text.entry.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_s3_text": function() { return /* binding */ AmplifyS3Text; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ 65640);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/storage */ 3117);
/* harmony import */ var _storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storage-helpers-95bd359a.js */ 50294);












var amplifyS3TextCss = ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.ConsoleLogger('S3Text');

var AmplifyS3Text = /*#__PURE__*/function () {
  function AmplifyS3Text(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyS3Text);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'text/*';
    /** The access level of the text file */

    this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_5__.A.Public;
    /** Fallback content */

    this.fallbackText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.TEXT_FALLBACK_CONTENT;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyS3Text, [{
    key: "watchHandler",
    value: function () {
      var _watchHandler = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.load();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function watchHandler() {
        return _watchHandler.apply(this, arguments);
      }

      return watchHandler;
    }()
  }, {
    key: "componentWillLoad",
    value: function () {
      var _componentWillLoad = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.load();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillLoad() {
        return _componentWillLoad.apply(this, arguments);
      }

      return componentWillLoad;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var path, textKey, body, contentType, level, track, identityId, key;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                path = this.path, textKey = this.textKey, body = this.body, contentType = this.contentType, level = this.level, track = this.track, identityId = this.identityId;

                if (!(!textKey && !path)) {
                  _context3.next = 4;
                  break;
                }

                logger.debug('empty textKey and path');
                return _context3.abrupt("return");

              case 4:
                key = textKey || path;
                logger.debug('loading ' + key + '...');

                if (!body) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 9;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.p)(textKey, body, level, track, contentType, logger);

              case 9:
                _context3.prev = 9;
                _context3.next = 12;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.a)(key, level, track, identityId, logger);

              case 12:
                this.src = _context3.sent;
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](9);
                logger.debug(_context3.t0);
                throw new Error(_context3.t0);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[9, 15]]);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", {
        class: "text-container"
      }, this.src ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("pre", null, this.src) : (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("pre", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.fallbackText))));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "textKey": ["watchHandler"],
        "body": ["watchHandler"]
      };
    }
  }]);

  return AmplifyS3Text;
}();

AmplifyS3Text.style = amplifyS3TextCss;


/***/ })

}]);