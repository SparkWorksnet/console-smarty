(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[443],{

/***/ 62443:
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-link.entry.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_link": function() { return /* binding */ AmplifyLink; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);



var amplifyLinkCss = ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

var AmplifyLink = /*#__PURE__*/function () {
  function AmplifyLink(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyLink);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */

    this.role = 'navigation';
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyLink, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("a", {
        class: "link",
        role: this.role
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);
    }
  }]);

  return AmplifyLink;
}();

AmplifyLink.style = amplifyLinkCss;


/***/ })

}]);