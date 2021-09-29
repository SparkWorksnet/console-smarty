(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[489],{

/***/ 19489:
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-checkbox.entry.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_checkbox": function() { return /* binding */ AmplifyCheckbox; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);



var amplifyCheckboxCss = ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";

var AmplifyCheckbox = /*#__PURE__*/function () {
  function AmplifyCheckbox(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyCheckbox);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** If `true`, the checkbox is selected. */

    this.checked = false;
    /** If `true`, the checkbox is disabled */

    this.disabled = false;

    this.onClick = function () {
      _this.checked = !_this.checked;
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyCheckbox, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", {
        class: "checkbox"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("input", {
        onClick: this.onClick,
        type: "checkbox",
        name: this.name,
        value: this.value,
        id: this.fieldId,
        checked: this.checked,
        disabled: this.disabled
      }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-label", {
        htmlFor: this.fieldId
      }, this.label));
    }
  }]);

  return AmplifyCheckbox;
}();

AmplifyCheckbox.style = amplifyCheckboxCss;


/***/ })

}]);