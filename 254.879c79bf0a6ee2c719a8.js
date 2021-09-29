(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[254],{

/***/ 27254:
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-nav_2.entry.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_nav": function() { return /* binding */ AmplifyNav; },
/* harmony export */   "amplify_sign_out": function() { return /* binding */ AmplifySignOut; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);











var amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

var AmplifyNav = /*#__PURE__*/function () {
  function AmplifyNav(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyNav);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyNav, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("nav", {
        class: "nav"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("slot", null));
    }
  }]);

  return AmplifyNav;
}();

AmplifyNav.style = amplifyNavCss;

var AmplifySignOut = /*#__PURE__*/function () {
  function AmplifySignOut(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifySignOut);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.d;
    /** Text inside of the Sign Out button */

    this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_OUT;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifySignOut, [{
    key: "signOut",
    value: function () {
      var _signOut = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) event.preventDefault(); // TODO: Federated Sign Out

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth.signOut !== 'function')) {
                  _context.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.N);

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth.signOut();

              case 6:
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.A.SignedOut);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.a)(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9]]);
      }));

      function signOut(_x) {
        return _signOut.apply(this, arguments);
      }

      return signOut;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-button", {
        slot: "sign-out",
        onClick: function onClick(event) {
          return _this.signOut(event);
        },
        "data-test": "sign-out-button"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(this.buttonText));
    }
  }]);

  return AmplifySignOut;
}();



/***/ })

}]);