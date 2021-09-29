(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[592],{

/***/ 44810:
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/auth-helpers-aad95737.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": function() { return /* binding */ checkContact; },
/* harmony export */   "h": function() { return /* binding */ handleSignIn; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/core */ 3531);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/auth */ 55152);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);








var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__.ConsoleLogger('auth-helpers');

function checkContact(_x, _x2) {
  return _checkContact.apply(this, arguments);
}

function _checkContact() {
  _checkContact = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(user, handleAuthStateChange) {
    var data, newUser;
    return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.verifiedContact !== 'function')) {
              _context2.next = 2;
              break;
            }

            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__.N);

          case 2:
            if (isCognitoUser(user)) {
              _context2.next = 5;
              break;
            }

            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.SignedIn, user);
            return _context2.abrupt("return");

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.verifiedContact(user);

          case 8:
            data = _context2.sent;

            if (!(0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(data.verified) || (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__.isEmpty)(data.unverified)) {
              handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.SignedIn, user);
            } else {
              newUser = Object.assign(user, data);
              handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.VerifyContact, newUser);
            }

            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](5);
            (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_5__.a)(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 12]]);
  }));
  return _checkContact.apply(this, arguments);
}

var handleSignIn = /*#__PURE__*/function () {
  var _ref = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(username, password, handleAuthStateChange, usernameAlias) {
    var user;
    return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.signIn !== 'function')) {
              _context.next = 2;
              break;
            }

            throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_4__.N);

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.Auth.signIn(username, password);

          case 5:
            user = _context.sent;
            logger.debug(user);

            if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.C.SMSMFA || user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.C.SoftwareTokenMFA)) {
              _context.next = 12;
              break;
            }

            logger.debug('confirm user with ' + user.challengeName);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.ConfirmSignIn, user);
            _context.next = 29;
            break;

          case 12:
            if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.C.NewPasswordRequired)) {
              _context.next = 17;
              break;
            }

            logger.debug('require new password', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.ResetPassword, user);
            _context.next = 29;
            break;

          case 17:
            if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.C.MFASetup)) {
              _context.next = 22;
              break;
            }

            logger.debug('TOTP setup', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.TOTPSetup, user);
            _context.next = 29;
            break;

          case 22:
            if (!(user.challengeName === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.C.CustomChallenge && user.challengeParam && user.challengeParam.trigger === 'true')) {
              _context.next = 27;
              break;
            }

            logger.debug('custom challenge', user.challengeParam);
            handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.CustomConfirmSignIn, user);
            _context.next = 29;
            break;

          case 27:
            _context.next = 29;
            return checkContact(user, handleAuthStateChange);

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](2);

            if (_context.t0.code === 'UserNotConfirmedException') {
              logger.debug('the user is not confirmed');
              handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.ConfirmSignUp, {
                username: username
              });
            } else if (_context.t0.code === 'PasswordResetRequiredException') {
              logger.debug('the user requires a new password');
              handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.A.ForgotPassword, {
                username: username
              });
            } else if (_context.t0.code === 'InvalidParameterException' && password === '') {
              logger.debug('Password cannot be empty');
              _context.t0.message = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.EMPTY_PASSWORD;
            } else if (_context.t0.message === _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.EMPTY_USERNAME) {
              if (usernameAlias === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.U.email) {
                _context.t0.message = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.EMPTY_EMAIL;
              }

              if (usernameAlias === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__.U.phone_number) {
                _context.t0.message = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__.T.EMPTY_PHONE;
              }
            }

            (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_5__.a)(_context.t0);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 31]]);
  }));

  return function handleSignIn(_x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

var isCognitoUser = function isCognitoUser(user) {
  return user instanceof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.CognitoUser;
};



/***/ })

}]);