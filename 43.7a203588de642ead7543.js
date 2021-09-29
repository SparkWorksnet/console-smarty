(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[43],{

/***/ 56043:
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-greetings.entry.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_greetings": function() { return /* binding */ AmplifyGreetings; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);









var amplifyGreetingsCss = ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

var AmplifyGreetings = /*#__PURE__*/function () {
  function AmplifyGreetings(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyGreetings);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** Username displayed in the greetings */

    this.username = null;
    /** Logo displayed inside of the header */

    this.logo = null;
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.d;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyGreetings, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("header", {
        class: "greetings"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", {
        class: "logo"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", {
        name: "logo"
      }, this.logo && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", null, this.logo))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", {
        class: "nav"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", {
        name: "nav"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-nav", null, this.username && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", {
        name: "greetings-message"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", null, "Hello, ", this.username)), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-sign-out", {
        handleAuthStateChange: this.handleAuthStateChange
      })))));
    }
  }]);

  return AmplifyGreetings;
}();

AmplifyGreetings.style = amplifyGreetingsCss;


/***/ })

}]);