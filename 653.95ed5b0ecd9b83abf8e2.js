(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[653],{

/***/ 14653:
/*!********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-icon.entry.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_icon": function() { return /* binding */ AmplifyIcon; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-c10e1d4d.js */ 54011);




var amplifyIconCss = ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

var AmplifyIcon = /*#__PURE__*/function () {
  function AmplifyIcon(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyIcon);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyIcon, [{
    key: "validateName",
    value: function validateName(newValue) {
      var isBlank = typeof newValue == null;

      if (isBlank) {
        throw new Error('name: required');
      }
    } // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes

  }, {
    key: "render",
    value: function render() {
      return _icons_c10e1d4d_js__WEBPACK_IMPORTED_MODULE_3__.i[this.name]();
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "name": ["validateName"]
      };
    }
  }]);

  return AmplifyIcon;
}();

AmplifyIcon.style = amplifyIconCss;


/***/ })

}]);