(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[240],{

/***/ 41240:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-federated-buttons_2.entry.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_federated_buttons": function() { return /* binding */ AmplifyFederatedButtons; },
/* harmony export */   "amplify_strike": function() { return /* binding */ AmplifyStrike; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/core */ 3531);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);










var AmplifyFederatedButtons = /*#__PURE__*/function () {
  function AmplifyFederatedButtons(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyFederatedButtons);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** The current authentication state. */

    this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__.A.SignIn;
    /** Federated credentials & configuration. */

    this.federated = {};
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.d;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyFederatedButtons, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.configure !== 'function') {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__.N);
      }

      var _Auth$configure = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.configure(),
          _Auth$configure$oauth = _Auth$configure.oauth,
          oauth = _Auth$configure$oauth === void 0 ? {} : _Auth$configure$oauth; // backward compatibility


      if (oauth['domain']) {
        this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth);
      } else if (oauth['awsCognito']) {
        this.federated.oauthConfig = Object.assign(Object.assign({}, this.federated.oauthConfig), oauth['awsCognito']);
      }

      if (oauth['auth0']) {
        this.federated.auth0Config = Object.assign(Object.assign({}, this.federated.auth0Config), oauth['auth0']);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__.A).includes(this.authState)) {
        return null;
      }

      if ((0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(this.federated)) {
        return null;
      }

      var _this$federated = this.federated,
          amazonClientId = _this$federated.amazonClientId,
          auth0Config = _this$federated.auth0Config,
          facebookAppId = _this$federated.facebookAppId,
          googleClientId = _this$federated.googleClientId,
          oauthConfig = _this$federated.oauthConfig;
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, googleClientId && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-google-button", {
        clientId: googleClientId,
        handleAuthStateChange: this.handleAuthStateChange
      })), facebookAppId && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-facebook-button", {
        appId: facebookAppId,
        handleAuthStateChange: this.handleAuthStateChange
      })), amazonClientId && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-amazon-button", {
        clientId: amazonClientId,
        handleAuthStateChange: this.handleAuthStateChange
      })), oauthConfig && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-oauth-button", {
        config: oauthConfig
      })), auth0Config && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-auth0-button", {
        config: auth0Config,
        handleAuthStateChange: this.handleAuthStateChange
      })));
    }
  }]);

  return AmplifyFederatedButtons;
}();

var amplifyStrikeCss = ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

var AmplifyStrike = /*#__PURE__*/function () {
  function AmplifyStrike(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyStrike);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyStrike, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("span", {
        class: "strike-content"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null));
    }
  }]);

  return AmplifyStrike;
}();

AmplifyStrike.style = amplifyStrikeCss;


/***/ })

}]);