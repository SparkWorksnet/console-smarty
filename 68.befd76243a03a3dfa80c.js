(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[68],{

/***/ 51068:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-federated-sign-in.entry.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_federated_sign_in": function() { return /* binding */ AmplifyFederatedSignIn; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);







var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_5__.ConsoleLogger('amplify-federated-sign-in');

var AmplifyFederatedSignIn = /*#__PURE__*/function () {
  function AmplifyFederatedSignIn(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyFederatedSignIn);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** The current authentication state. */

    this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__.A.SignIn;
    /** Federated credentials & configuration. */

    this.federated = {};
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyFederatedSignIn, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.Auth.configure !== 'function') {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__.N);
      }

      var _Auth$configure = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.Auth.configure(),
          _Auth$configure$oauth = _Auth$configure.oauth,
          oauth = _Auth$configure$oauth === void 0 ? {} : _Auth$configure$oauth; // backward compatibility


      if (oauth['domain']) {
        this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth);
      } else if (oauth['awsCognito']) {
        this.federated.oauth_config = Object.assign(Object.assign({}, this.federated.oauth_config), oauth['awsCognito']);
      }

      if (oauth['auth0']) {
        this.federated.auth0 = Object.assign(Object.assign({}, this.federated.auth0), oauth['auth0']);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.federated) {
        logger.debug('federated prop is empty. show nothing');
        logger.debug('federated={google_client_id: , facebook_app_id: , amazon_client_id}');
        return null;
      }

      if (!Object.values(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__.A).includes(this.authState)) {
        return null;
      }

      logger.debug('federated Config is', this.federated);
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-form-section", {
        "data-test": "federated-sign-in-section"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-section", {
        "data-test": "federated-sign-in-body-section"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-federated-buttons", {
        authState: this.authState,
        "data-test": "federated-sign-in-buttons",
        federated: this.federated
      })));
    }
  }]);

  return AmplifyFederatedSignIn;
}();



/***/ })

}]);