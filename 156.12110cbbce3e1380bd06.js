(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[156],{

/***/ 49156:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-authenticator.entry.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_authenticator": function() { return /* binding */ AmplifyAuthenticator; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ 5587);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @aws-amplify/core */ 92455);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @aws-amplify/auth */ 55152);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);
/* harmony import */ var _auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-helpers-aad95737.js */ 44810);





var _authSlotNames;










var authSlotNames = (_authSlotNames = {}, (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn, 'sign-in'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignIn, 'confirm-sign-in'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignUp, 'sign-up'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignUp, 'confirm-sign-up'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ForgotPassword, 'forgot-password'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ResetPassword, 'require-new-password'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.VerifyContact, 'verify-contact'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.TOTPSetup, 'totp-setup'), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(_authSlotNames, _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.Loading, 'loading'), _authSlotNames);
var amplifyAuthenticatorCss = ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.ConsoleLogger('Authenticator');

var AmplifyAuthenticator = /*#__PURE__*/function () {
  function AmplifyAuthenticator(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyAuthenticator);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */

    this.initialAuthState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn;
    /** Callback for Authenticator state machine changes */

    this.handleAuthStateChange = function () {};
    /** Hide amplify-toast for auth errors */


    this.hideToast = false;
    this.authState = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.Loading;
    this.toastMessage = '';

    this.handleExternalAuthEvent = function (_ref) {
      var payload = _ref.payload;

      switch (payload.event) {
        case 'cognitoHostedUI':
        case 'signIn':
          (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.c)(payload.data, _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d);
          break;

        case 'cognitoHostedUI_failure':
        case 'parsingUrl_failure':
        case 'signOut':
        case 'customGreetingSignOut':
          return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d)(_this.initialAuthState);
      }
    };

    this.handleToastEvent = function (_ref2) {
      var payload = _ref2.payload;

      switch (payload.event) {
        case _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.T:
          if (payload.message) _this.toastMessage = payload.message;
          break;
      }
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyAuthenticator, [{
    key: "componentWillLoad",
    value: function () {
      var _componentWillLoad = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this2 = this;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.o)(function (authState, authData) {
                  _this2.onAuthStateChange(authState, authData);

                  _this2.toastMessage = '';
                });
                if (!this.hideToast) _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.Hub.listen(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.U, this.handleToastEvent);
                _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.Hub.listen(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.A, this.handleExternalAuthEvent);
                (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_13__.appendToCognitoUserAgent)('amplify-authenticator');
                _context.next = 6;
                return this.checkUser();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentWillLoad() {
        return _componentWillLoad.apply(this, arguments);
      }

      return componentWillLoad;
    }()
  }, {
    key: "checkUser",
    value: function () {
      var _checkUser = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var _this3 = this;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__.Auth.currentAuthenticatedUser !== 'function')) {
                  _context3.next = 2;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 2:
                return _context3.abrupt("return", _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__.Auth.currentAuthenticatedUser().then(function (user) {
                  (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d)(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedIn, user);
                }).catch( /*#__PURE__*/(0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
                  var cachedAuthState;
                  return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          cachedAuthState = null;

                          try {
                            cachedAuthState = localStorage.getItem(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.c);
                          } catch (error) {
                            logger.debug('Failed to get the auth state from local storage', error);
                          }

                          _context2.prev = 2;

                          if (!(cachedAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedIn)) {
                            _context2.next = 6;
                            break;
                          }

                          _context2.next = 6;
                          return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_14__.Auth.signOut();

                        case 6:
                          (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d)(_this3.initialAuthState);
                          _context2.next = 12;
                          break;

                        case 9:
                          _context2.prev = 9;
                          _context2.t0 = _context2["catch"](2);
                          logger.debug('Failed to sign out', _context2.t0);

                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[2, 9]]);
                }))));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function checkUser() {
        return _checkUser.apply(this, arguments);
      }

      return checkUser;
    }()
  }, {
    key: "onAuthStateChange",
    value: function () {
      var _onAuthStateChange = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(nextAuthState, data) {
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(nextAuthState === undefined)) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", logger.error('nextAuthState cannot be undefined'));

              case 2:
                logger.info('Inside onAuthStateChange Method current authState:', this.authState);

                if (nextAuthState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedOut) {
                  this.authState = this.initialAuthState;
                } else {
                  this.authState = nextAuthState;
                }

                this.authData = data;
                if (this.authData) logger.log('Auth Data was set:', this.authData);

                if (this.authState === nextAuthState) {
                  this.handleAuthStateChange(this.authState, this.authData);
                  logger.info("authState has been updated to ".concat(this.authState));
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onAuthStateChange(_x, _x2) {
        return _onAuthStateChange.apply(this, arguments);
      }

      return onAuthStateChange;
    }() // Returns the auth component corresponding to the given authState.

  }, {
    key: "getAuthComponent",
    value: function getAuthComponent(authState) {
      switch (authState) {
        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-sign-in", {
            federated: this.federated,
            usernameAlias: this.usernameAlias
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignIn:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-confirm-sign-in", {
            user: this.authData
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignUp:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-sign-up", {
            usernameAlias: this.usernameAlias
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignUp:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-confirm-sign-up", {
            user: this.authData,
            usernameAlias: this.usernameAlias
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ForgotPassword:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-forgot-password", {
            usernameAlias: this.usernameAlias
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ResetPassword:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-require-new-password", {
            user: this.authData
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.VerifyContact:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-verify-contact", {
            user: this.authData
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.TOTPSetup:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-totp-setup", {
            user: this.authData
          });

        case _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.Loading:
          return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, "Loading...");

        default:
          throw new Error("Unhandled auth state: ".concat(authState));
      }
    } // Returns a slot containing the Auth component corresponding to the given authState

  }, {
    key: "getSlotWithAuthComponent",
    value: function getSlotWithAuthComponent(authState) {
      var authComponent = this.getAuthComponent(authState);
      var slotName = authSlotNames[authState];
      var slotIsEmpty = this.el.querySelector("[slot=\"".concat(slotName, "\"]")) === null; // true if no element has been inserted to the slot

      /**
       * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
       * the overwritten component from calling its lifecycle methods.
       */

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: slotName
      }, slotIsEmpty && authComponent);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.Hub.remove(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.A, this.handleExternalAuthEvent);
      if (!this.hideToast) _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.Hub.remove(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.U, this.handleToastEvent);
      return _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.o;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, !this.hideToast && this.toastMessage && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-toast", {
        message: this.toastMessage,
        handleClose: function handleClose() {
          _this4.toastMessage = '';
        },
        "data-test": "authenticator-error"
      }), this.authState === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedIn ? [(0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "greetings"
      }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", null)] : (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "auth-container"
      }, this.getSlotWithAuthComponent(this.authState)));
    }
  }, {
    key: "el",
    get: function get() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.g)(this);
    }
  }]);

  return AmplifyAuthenticator;
}();

AmplifyAuthenticator.style = amplifyAuthenticatorCss;


/***/ })

}]);