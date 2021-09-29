(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[471],{

/***/ 86471:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-image-picker.entry.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_s3_image_picker": function() { return /* binding */ AmplifyS3ImagePicker; }
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












var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.ConsoleLogger('S3ImagePicker');

var AmplifyS3ImagePicker = /*#__PURE__*/function () {
  function AmplifyS3ImagePicker(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyS3ImagePicker);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'binary/octet-stream';
    /** The access level of the image */

    this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_5__.A.Public;
    /** Title string value */

    this.headerTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.IMAGE_PICKER_TITLE;
    /** Header Hint value in string */

    this.headerHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.IMAGE_PICKER_HINT;
    /** Placeholder hint that goes under the placeholder image */

    this.placeholderHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.IMAGE_PICKER_PLACEHOLDER_HINT;
    /** Upload Button Text as string */

    this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.IMAGE_PICKER_BUTTON_TEXT;

    this.handlePick = /*#__PURE__*/function () {
      var _ref = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(file) {
        var _this$path, path, level, track, identityId, fileToKey, key;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$path = _this.path, path = _this$path === void 0 ? '' : _this$path, level = _this.level, track = _this.track, identityId = _this.identityId, fileToKey = _this.fileToKey;
                key = path + (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.c)(file, fileToKey);
                _context.prev = 2;
                _context.next = 5;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.p)(key, file, level, track, file['type'], logger);

              case 5:
                _context.next = 7;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_9__.g)(key, level, track, identityId, logger);

              case 7:
                _this.src = _context.sent;
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                logger.error(_context.t0);
                throw new Error(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyS3ImagePicker, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", {
        name: "photo-picker"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-photo-picker", {
        previewSrc: this.src,
        handleClick: this.handlePick,
        headerTitle: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.headerTitle),
        headerHint: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.headerHint),
        placeholderHint: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.placeholderHint),
        buttonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.buttonText)
      })));
    }
  }]);

  return AmplifyS3ImagePicker;
}();



/***/ })

}]);