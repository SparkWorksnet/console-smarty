(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[566],{

/***/ 80566:
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-tooltip.entry.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_tooltip": function() { return /* binding */ AmplifyTooltip; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);



var amplifyTooltipCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-secondary-color);--color:var(--amplify-secondary-contrast);--border-color:var(--amplify-secondary-color)}.tooltip{display:inline;position:relative;font-size:var(--amplify-text-xxs);font-family:var(--font-family);margin:0 0 0 16px}.tooltip :after{background-color:var(--background-color);border-radius:2px;bottom:46px;color:var(--color);content:attr(data-text);text-decoration:none;padding:10px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;white-space:nowrap;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :before{border:solid;border-color:var(--border-color) transparent transparent transparent;border-width:5px;bottom:36px;content:\"\";left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;font-size:var(--amplify-text-sm);opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :hover:after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.tooltip :hover:before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}";

var AmplifyTooltip = /*#__PURE__*/function () {
  function AmplifyTooltip(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyTooltip);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered */

    this.shouldAutoShow = false;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyTooltip, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: {
          tooltip: true,
          'auto-show-tooltip': this.shouldAutoShow
        },
        "data-text": this.text
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null));
    }
  }]);

  return AmplifyTooltip;
}();

AmplifyTooltip.style = amplifyTooltipCss;


/***/ })

}]);