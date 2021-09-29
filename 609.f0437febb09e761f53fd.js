(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[609],{

/***/ 32609:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-amazon-button_5.entry.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_amazon_button": function() { return /* binding */ AmplifyAmazonButton; },
/* harmony export */   "amplify_auth0_button": function() { return /* binding */ AmplifyAuth0Button; },
/* harmony export */   "amplify_facebook_button": function() { return /* binding */ AmplifyFacebookButton; },
/* harmony export */   "amplify_google_button": function() { return /* binding */ AmplifyGoogleButton; },
/* harmony export */   "amplify_oauth_button": function() { return /* binding */ AmplifyOAuthButton; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);











var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.ConsoleLogger('amplify-amazon-button');

var AmplifyAmazonButton = /*#__PURE__*/function () {
  function AmplifyAmazonButton(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyAmazonButton);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.d;

    this.federatedSignIn = function (response) {
      var access_token = response.access_token,
          expires_in = response.expires_in;

      if (!access_token) {
        return;
      }

      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser !== 'function') {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.N);
      }

      var date = new Date();
      var expires_at = expires_in * 1000 + date.getTime();
      window['amazon'].Login.retrieveProfile( /*#__PURE__*/function () {
        var _ref = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(userInfo) {
          var user, authenticatedUser;
          return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (userInfo.success) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", logger.debug('Get user Info failed'));

                case 2:
                  user = {
                    name: userInfo.profile.Name,
                    email: userInfo.profile.PrimaryEmail
                  };
                  _context.next = 5;
                  return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn('amazon', {
                    token: access_token,
                    expires_at: expires_at
                  }, user);

                case 5:
                  _context.next = 7;
                  return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser();

                case 7:
                  authenticatedUser = _context.sent;

                  _this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.A.SignedIn, authenticatedUser);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    };
  }
  /**
   * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
   */


  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyAmazonButton, [{
    key: "signInWithAmazon",
    value: function signInWithAmazon(event) {
      var _this2 = this;

      event.preventDefault();
      window['amazon'].Login.setClientId(this.clientId);
      window['amazon'].Login.authorize({
        scope: 'profile'
      }, function (response) {
        if (response.error) {
          return logger.debug('Failed to login with amazon: ' + response.error);
        }

        try {
          window.localStorage.setItem(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.j, JSON.stringify({
            provider: 'amazon'
          }));
        } catch (e) {
          logger.debug('Failed to cache auth source into localStorage', e);
        }

        _this2.federatedSignIn(response);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-sign-in-button", {
        onClick: function onClick(event) {
          return _this3.signInWithAmazon(event);
        },
        provider: "amazon"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("script", {
        src: "https://assets.loginwithamazon.com/sdk/na/login1.js"
      }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_IN_WITH_AMAZON));
    }
  }]);

  return AmplifyAmazonButton;
}();

var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.ConsoleLogger('amplify-auth0-button');

var AmplifyAuth0Button = /*#__PURE__*/function () {
  function AmplifyAuth0Button(hostRef) {
    var _this4 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyAuth0Button);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.d;

    this.handleLoad = function () {
      // @ts-ignore Property 'auth0' does not exist on type '{}'.
      var _Auth$configure = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.configure(),
          _Auth$configure$oauth = _Auth$configure.oauth,
          oauth = _Auth$configure$oauth === void 0 ? {} : _Auth$configure$oauth; // @ts-ignore Property 'auth0' does not exist on type '{}'.


      var _this4$config = _this4.config,
          config = _this4$config === void 0 ? oauth.auth0 : _this4$config;

      if (!config) {
        logger$1.debug('Auth0 is not configured');
        return;
      }

      logger$1.debug('auth0 configuration', config);

      if (!_this4._auth0) {
        _this4._auth0 = new window['auth0'].WebAuth(config);
      }

      _this4._auth0.parseHash(function (err, authResult) {
        if (err) {
          logger$1.debug('Failed to parse the url for Auth0', err);
          return;
        }

        if (!authResult) {
          logger$1.debug('Auth0 found no authResult in hash');
          return;
        }

        var payload = {
          provider: 'auth0',
          opts: {
            returnTo: config.returnTo,
            clientID: config.clientID,
            federated: config.federated
          }
        };

        try {
          localStorage.setItem(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.j, JSON.stringify(payload));
        } catch (e) {
          logger$1.debug('Failed to cache auth source into localStorage', e);
        }

        _this4._auth0.client.userInfo(authResult.accessToken, /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(err, user) {
            var username, email, authenticatedUser;
            return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    username = undefined;
                    email = undefined;

                    if (err) {
                      logger$1.debug('Failed to get the user info', err);
                    } else {
                      username = user.name;
                      email = user.email;
                    }

                    _context2.next = 5;
                    return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn(config.domain, {
                      token: authResult.idToken,
                      expires_at: authResult.expiresIn * 1000 + new Date().getTime()
                    }, {
                      name: username,
                      email: email
                    });

                  case 5:
                    _context2.next = 7;
                    return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser();

                  case 7:
                    authenticatedUser = _context2.sent;

                    _this4.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.A.SignedIn, authenticatedUser);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyAuth0Button, [{
    key: "signInWithAuth0",
    value: function signInWithAuth0(event) {
      event.preventDefault();

      if (!this._auth0) {
        throw new Error('the auth0 client is not configured');
      }

      this._auth0.authorize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-sign-in-button", {
        onClick: function onClick(event) {
          return _this5.signInWithAuth0(event);
        },
        provider: "auth0"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("script", {
        onLoad: this.handleLoad,
        src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"
      }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_IN_WITH_AUTH0));
    }
  }]);

  return AmplifyAuth0Button;
}();

var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.ConsoleLogger('amplify-facebook-button');

var AmplifyFacebookButton = /*#__PURE__*/function () {
  function AmplifyFacebookButton(hostRef) {
    var _this6 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyFacebookButton);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.d;

    this.federatedSignIn = function (authResponse) {
      var accessToken = authResponse.accessToken,
          expiresIn = authResponse.expiresIn;

      if (!accessToken) {
        return;
      }

      if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser !== 'function') {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.N);
      }

      var date = new Date();
      var expires_at = expiresIn * 1000 + date.getTime();
      var fields = 'name,email';
      window['FB'].api('/me', {
        fields: fields
      }, /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(response) {
          var user, authenticatedUser;
          return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  user = {
                    name: response.name,
                    email: response.email
                  };
                  _context3.next = 3;
                  return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn('facebook', {
                    token: accessToken,
                    expires_at: expires_at
                  }, user);

                case 3:
                  _context3.next = 5;
                  return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser();

                case 5:
                  authenticatedUser = _context3.sent;

                  _this6.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.A.SignedIn, authenticatedUser);

                case 7:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    };

    this.getLoginStatus = function () {
      window['FB'].getLoginStatus(function (response) {
        try {
          window.localStorage.setItem(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.j, JSON.stringify({
            provider: 'facebook'
          }));
        } catch (e) {
          logger$2.debug('Failed to cache auth source into localStorage', e);
        }

        if (response.status === 'connected') {
          return _this6.federatedSignIn(response.authResponse);
        }

        _this6.login();
      });
    };

    this.login = function () {
      var scope = 'public_profile,email';
      window['FB'].login(function (response) {
        if (response && response.authResponse) {
          _this6.federatedSignIn(response.authResponse);
        }
      }, {
        scope: scope
      });
    };
  }
  /**
   * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
   */


  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyFacebookButton, [{
    key: "signInWithFacebook",
    value: function signInWithFacebook(event) {
      event.preventDefault();
      window['FB'].init({
        appId: this.appId,
        cookie: true,
        xfbml: false,
        version: 'v5.0'
      });
      this.getLoginStatus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-sign-in-button", {
        onClick: function onClick(event) {
          return _this7.signInWithFacebook(event);
        },
        provider: "facebook"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("script", {
        async: true,
        defer: true,
        src: "https://connect.facebook.net/en_US/sdk.js"
      }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_IN_WITH_FACEBOOK));
    }
  }]);

  return AmplifyFacebookButton;
}();

var logger$3 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.ConsoleLogger('amplify-google-button');

var AmplifyGoogleButton = /*#__PURE__*/function () {
  function AmplifyGoogleButton(hostRef) {
    var _this8 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyGoogleButton);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_8__.d;

    this.handleError = function (error) {
      console.error(error);
    };
    /**
     * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
     */


    this.handleLoad = function () {
      window['gapi'].load('auth2');
    };

    this.handleUser = /*#__PURE__*/function () {
      var _ref4 = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(user) {
        var _user$getAuthResponse, id_token, expires_at, profile, authenticatedUser;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn !== 'function' || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser !== 'function')) {
                  _context4.next = 2;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.N);

              case 2:
                try {
                  window.localStorage.setItem(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.j, JSON.stringify({
                    provider: 'google'
                  }));
                } catch (e) {
                  logger$3.debug('Failed to cache auth source into localStorage', e);
                }

                _user$getAuthResponse = user.getAuthResponse(), id_token = _user$getAuthResponse.id_token, expires_at = _user$getAuthResponse.expires_at;
                profile = user.getBasicProfile();
                _context4.next = 7;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn('google', {
                  token: id_token,
                  expires_at: expires_at
                }, {
                  email: profile.getEmail(),
                  name: profile.getName(),
                  picture: profile.getImageUrl()
                });

              case 7:
                _context4.next = 9;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.currentAuthenticatedUser();

              case 9:
                authenticatedUser = _context4.sent;

                try {
                  _this8.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.A.SignedIn, authenticatedUser);
                } catch (error) {
                  _this8.handleError(error);
                }

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }();
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyGoogleButton, [{
    key: "getAuthInstance",
    value: function getAuthInstance() {
      if (window['gapi'] && window['gapi'].auth2) {
        return window['gapi'].auth2.getAuthInstance() || window['gapi'].auth2.init({
          client_id: this.clientId,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email openid'
        });
      }

      return null;
    }
  }, {
    key: "signInWithGoogle",
    value: function signInWithGoogle(event) {
      event.preventDefault();
      this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError);
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-sign-in-button", {
        onClick: function onClick(event) {
          return _this9.signInWithGoogle(event);
        },
        provider: "google"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("script", {
        onLoad: this.handleLoad,
        src: "https://apis.google.com/js/api:client.js"
      }), _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_IN_WITH_GOOGLE));
    }
  }]);

  return AmplifyGoogleButton;
}();

var AmplifyOAuthButton = /*#__PURE__*/function () {
  function AmplifyOAuthButton(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifyOAuthButton);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Federated credentials & configuration. */

    this.config = {};
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifyOAuthButton, [{
    key: "signInWithOAuth",
    value: function signInWithOAuth(event) {
      event.preventDefault();
      _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_10__.Auth.federatedSignIn();
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-sign-in-button", {
        onClick: function onClick(event) {
          return _this10.signInWithOAuth(event);
        },
        provider: "oauth"
      }, this.config.label || _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SIGN_IN_WITH_AWS));
    }
  }]);

  return AmplifyOAuthButton;
}();



/***/ })

}]);