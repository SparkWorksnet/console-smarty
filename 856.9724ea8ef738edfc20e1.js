(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[856],{

/***/ 75856:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-select-mfa-type.entry.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_select_mfa_type": function() { return /* binding */ AmplifySelectMFAType; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);










var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__.ConsoleLogger('SelectMFAType');

var AmplifySelectMFAType = /*#__PURE__*/function () {
  function AmplifySelectMFAType(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AmplifySelectMFAType);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.r)(this, hostRef);
    /** Fires when Verify is clicked */

    this.handleSubmit = function (event) {
      return _this.verify(event);
    };

    this.TOTPSetup = false;
    this.selectMessage = null;
    this.MFAMethod = null;
    this.isTOTP = false;
    this.isNoMFA = false;
    this.isSMS = false;
    this.loading = false;
    this.isToastVisible = false;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AmplifySelectMFAType, [{
    key: "handleRadioButtonChange",
    value: function handleRadioButtonChange(event) {
      this.TOTPSetup = false;
      this.selectMessage = null; // Reseting state values to default

      this.isNoMFA = false;
      this.isTOTP = false;
      this.isSMS = false;
      this.isToastVisible = false;
      var _event$target = event.target,
          value = _event$target.value,
          type = _event$target.type,
          checked = _event$target.checked;
      var checkType = ['radio', 'checkbox'].includes(type);

      if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.SMS && checkType) {
        this.isSMS = checked;
      }

      if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.TOTP && checkType) {
        this.isTOTP = checked;
      }

      if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.NOMFA && checkType) {
        this.isNoMFA = checked;
      }
    }
  }, {
    key: "verify",
    value: function () {
      var _verify = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
        var user, preferredMFAData, message;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // avoid submitting the form
                if (event) {
                  event.preventDefault();
                }

                logger.debug('MFA Type Values', {
                  TOTP: this.isTOTP,
                  SMS: this.isSMS,
                  'No MFA': this.isNoMFA
                });

                if (this.isTOTP) {
                  this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.TOTP;
                } else if (this.isSMS) {
                  this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.SMS;
                } else if (this.isNoMFA) {
                  this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_5__.M.NOMFA;
                }

                user = this.authData;

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth.setPreferredMFA !== 'function')) {
                  _context.next = 6;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.N);

              case 6:
                this.loading = true;
                _context.prev = 7;
                _context.next = 10;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_9__.Auth.setPreferredMFA(user, this.MFAMethod);

              case 10:
                preferredMFAData = _context.sent;
                logger.debug('Set Preferred MFA Succeeded', preferredMFAData);
                this.selectMessage = "".concat(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SUCCESS_MFA_TYPE), " ").concat(this.MFAMethod);
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](7);
                message = _context.t0.message;

                if (message === _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.f || message === _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.g) {
                  this.TOTPSetup = true;
                  this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SETUP_TOTP_REQUIRED);
                } else {
                  logger.debug('Set Preferred MFA failed', _context.t0);
                  this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.UNABLE_TO_SETUP_MFA_AT_THIS_TIME);
                }

              case 19:
                _context.prev = 19;
                this.loading = false;
                this.isToastVisible = true;
                return _context.finish(19);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 15, 19, 23]]);
      }));

      function verify(_x) {
        return _verify.apply(this, arguments);
      }

      return verify;
    }()
  }, {
    key: "contentBuilder",
    value: function contentBuilder() {
      var _this2 = this;

      if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
        logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE));
        return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("a", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));
      }

      var _this$MFATypes = this.MFATypes,
          SMS = _this$MFATypes.SMS,
          TOTP = _this$MFATypes.TOTP,
          Optional = _this$MFATypes.Optional;
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-form-section", {
        submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_10__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.SELECT_MFA_TYPE_HEADER_TEXT),
        handleSubmit: function handleSubmit(event) {
          return _this2.handleSubmit(event);
        },
        loading: this.loading
      }, SMS ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-radio-button", {
        key: "sms",
        name: "MFAType",
        value: "SMS",
        label: "SMS",
        handleInputChange: function handleInputChange(event) {
          return _this2.handleRadioButtonChange(event);
        }
      }) : null, TOTP ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-radio-button", {
        key: "totp",
        name: "MFAType",
        value: "TOTP",
        label: "TOTP",
        handleInputChange: function handleInputChange(event) {
          return _this2.handleRadioButtonChange(event);
        }
      }) : null, Optional ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-radio-button", {
        key: "noMFA",
        name: "MFAType",
        value: "NOMFA",
        label: "No MFA",
        handleInputChange: function handleInputChange(event) {
          return _this2.handleRadioButtonChange(event);
        }
      }) : null);
    }
  }, {
    key: "renderToast",
    value: function renderToast() {
      var _this3 = this;

      if (this.isToastVisible && this.selectMessage) {
        return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-toast", {
          message: this.selectMessage,
          handleClose: function handleClose() {
            _this3.selectMessage = null;
            _this3.isToastVisible = false;
          }
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("div", null, this.contentBuilder(), this.TOTPSetup ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_4__.h)("amplify-totp-setup", {
        user: this.authData
      }) : null, this.renderToast());
    }
  }]);

  return AmplifySelectMFAType;
}();



/***/ })

}]);