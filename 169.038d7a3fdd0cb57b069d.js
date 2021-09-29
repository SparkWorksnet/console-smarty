(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[169],{

/***/ 11310:
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-text-picker.entry.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_s3_text_picker": function() { return /* binding */ AmplifyS3TextPicker; }
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












var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.ConsoleLogger('S3TextPicker');

var AmplifyS3TextPicker = /*#__PURE__*/function () {
  function AmplifyS3TextPicker(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyS3TextPicker);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'text/*';
    /** The access level of the text file */

    this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_5__.A.Public;
    /** Fallback content for aplify-s3-text */

    this.fallbackText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.PICKER_TEXT;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyS3TextPicker, [{
    key: "handleInput",
    value: function () {
      var _handleInput = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
        var file, _this$path, path, level, fileToKey, track, key;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file = event.target.files[0];
                _this$path = this.path, path = _this$path === void 0 ? '' : _this$path, level = this.level, fileToKey = this.fileToKey, track = this.track;
                key = path + (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.c)(file, fileToKey);

                if (file) {
                  _context.next = 5;
                  break;
                }

                throw new Error('No file was selected');

              case 5:
                _context.prev = 5;
                _context.next = 8;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.p)(key, file, level, track, file['type'], logger);

              case 8:
                this.src = key;
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](5);
                logger.debug(_context.t0);
                throw new Error(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 11]]);
      }));

      function handleInput(_x) {
        return _handleInput.apply(this, arguments);
      }

      return handleInput;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-s3-text", {
        textKey: this.src,
        path: this.path,
        level: this.level,
        track: this.track,
        identityId: this.identityId,
        contentType: this.contentType,
        fallbackText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.fallbackText)
      }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-picker", {
        inputHandler: function inputHandler(e) {
          return _this.handleInput(e);
        },
        acceptValue: 'text/*'
      }));
    }
  }]);

  return AmplifyS3TextPicker;
}();



/***/ })

}]);