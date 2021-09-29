(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[391],{

/***/ 63391:
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-icon-button.entry.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_icon_button": function() { return /* binding */ AmplifyIconButton; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);



var amplifyIconButtonCss = ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";

var AmplifyIconButton = /*#__PURE__*/function () {
  function AmplifyIconButton(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyIconButton);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** (Optional) The tooltip that will show on hover of the button */

    this.tooltip = null;
    /** (Optional) Whether or not to show the tooltip automatically */

    this.autoShowTooltip = false;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyIconButton, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", {
        class: "action-button"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-tooltip", {
        text: this.tooltip,
        shouldAutoShow: this.autoShowTooltip
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("button", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-icon", {
        name: this.name
      }))));
    }
  }]);

  return AmplifyIconButton;
}();

AmplifyIconButton.style = amplifyIconButtonCss;


/***/ })

}]);