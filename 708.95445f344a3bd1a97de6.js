(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[708],{

/***/ 83708:
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-photo-picker.entry.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_photo_picker": function() { return /* binding */ AmplifyPhotoPicker; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);






var amplifyPhotoPickerCss = ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";

var AmplifyPhotoPicker = /*#__PURE__*/function () {
  function AmplifyPhotoPicker(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyPhotoPicker);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** Title string value */

    this.headerTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.PHOTO_PICKER_TITLE;
    /** Header Hint value in string */

    this.headerHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.PHOTO_PICKER_HINT;
    /** Placeholder hint that goes under the placeholder image */

    this.placeholderHint = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.PHOTO_PICKER_PLACEHOLDER_HINT;
    /** Picker button text as string */

    this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.PHOTO_PICKER_BUTTON_TEXT;
    /** Function that handles file pick onClick */

    this.handleClick = function () {};

    this.handleInput = function (ev) {
      _this.file = ev.target.files[0];
      var reader = new FileReader();

      reader.onload = function (_e) {
        var url = reader.result;
        _this.previewState = url;
      };

      reader.readAsDataURL(_this.file);
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyPhotoPicker, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.previewState = this.previewSrc;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "photo-picker-container"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-section", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "header"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.headerTitle)), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "header-hint"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.headerHint)), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-picker", {
        acceptValue: 'image/*',
        inputHandler: this.handleInput
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "picker-body",
        slot: "picker"
      }, this.previewState ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("img", {
        src: "".concat(this.previewState)
      }) : (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-icon", {
        name: "photoPlaceholder"
      }))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "placeholder-hint"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.placeholderHint)), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-button", {
        handleButtonClick: function handleButtonClick() {
          return _this2.handleClick(_this2.file);
        }
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__.I18n.get(this.buttonText))));
    }
  }]);

  return AmplifyPhotoPicker;
}();

AmplifyPhotoPicker.style = amplifyPhotoPickerCss;


/***/ })

}]);