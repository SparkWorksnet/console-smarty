(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[475],{

/***/ 2475:
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-picker.entry.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_picker": function() { return /* binding */ AmplifyPicker; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);






var amplifyPickerCss = ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

var AmplifyPicker = /*#__PURE__*/function () {
  function AmplifyPicker(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyPicker);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** Picker button text */

    this.pickerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.PICKER_TEXT;
    /** File input accept value */

    this.acceptValue = '*/*';
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyPicker, [{
    key: "render",
    value: function render() {
      var _this = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "picker"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", {
        name: "picker"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-button", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.pickerText))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("input", {
        title: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.pickerText),
        type: "file",
        accept: this.acceptValue,
        onChange: function onChange(e) {
          return _this.inputHandler(e);
        }
      }));
    }
  }]);

  return AmplifyPicker;
}();

AmplifyPicker.style = amplifyPickerCss;


/***/ })

}]);