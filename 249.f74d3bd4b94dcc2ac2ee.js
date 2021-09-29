(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[249],{

/***/ 63249:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-confirm-sign-in_7.entry.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_confirm_sign_in": function() { return /* binding */ AmplifyConfirmSignIn; },
/* harmony export */   "amplify_confirm_sign_up": function() { return /* binding */ AmplifyConfirmSignUp; },
/* harmony export */   "amplify_forgot_password": function() { return /* binding */ AmplifyForgotPassword; },
/* harmony export */   "amplify_require_new_password": function() { return /* binding */ AmplifyRequireNewPassword; },
/* harmony export */   "amplify_sign_in": function() { return /* binding */ AmplifySignIn; },
/* harmony export */   "amplify_sign_up": function() { return /* binding */ AmplifySignUp; },
/* harmony export */   "amplify_verify_contact": function() { return /* binding */ AmplifyVerifyContact; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @aws-amplify/core */ 3531);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/auth */ 39150);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);
/* harmony import */ var _auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-helpers-aad95737.js */ 44810);














var AmplifyConfirmSignIn = /*#__PURE__*/function () {
  function AmplifyConfirmSignIn(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyConfirmSignIn);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Fires when confirm sign in form is submitted */

    this.handleSubmit = function (event) {
      return _this.confirm(event);
    };
    /** Used for header text in confirm sign in component */


    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SMS_CODE;
    /** Used for the submit button text in confirm sign in component */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM;
    /** Auth state change handler for this component */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** Default form field */

    this.defaultFormFields = [{
      type: 'code',
      required: true,
      handleInputChange: function handleInputChange(event) {
        return _this.handleCodeChange(event);
      }
    }];
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = this.defaultFormFields;
    /** The MFA option to confirm with */

    this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.M.SMS;
    /* Whether or not the confirm-sign-in component is loading */

    this.loading = false;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyConfirmSignIn, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.setup();
    }
  }, {
    key: "userHandler",
    value: function userHandler() {
      this.setup();
    }
  }, {
    key: "setup",
    value: function setup() {
      if (this.user && this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.C.SoftwareTokenMFA) {
        this.mfaOption = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.M.TOTP; // If header text is using default use TOTP string

        if (this.headerText === _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SMS_CODE) {
          this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_TOTP_CODE;
        }
      }

      this.constructedFormFieldOptions = this.constructFormFieldOptions(this.formFields);
    }
  }, {
    key: "handleCodeChange",
    value: function handleCodeChange(event) {
      this.code = event.target.value;
    }
  }, {
    key: "confirm",
    value: function () {
      var _confirm = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(event) {
        var mfaType;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                mfaType = this.user['challengeName'] === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.C.SoftwareTokenMFA ? _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.C.SoftwareTokenMFA : null;

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.confirmSignIn !== 'function')) {
                  _context.next = 4;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 4:
                this.loading = true;
                _context.prev = 5;
                _context.next = 8;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.confirmSignIn(this.user, this.code, mfaType);

              case 8:
                _context.next = 10;
                return (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.c)(this.user, this.handleAuthStateChange);

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context.t0);

              case 15:
                _context.prev = 15;
                this.loading = false;
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12, 15, 18]]);
      }));

      function confirm(_x) {
        return _confirm.apply(this, arguments);
      }

      return confirm;
    }()
  }, {
    key: "constructFormFieldOptions",
    value: function constructFormFieldOptions(formFields) {
      var _this2 = this;

      var content = [];
      if (formFields === undefined) return undefined;
      if (formFields.length <= 0) return this.defaultFormFields;
      formFields.forEach(function (formField) {
        if (typeof formField === 'string' || formField.type !== 'code') {
          // This is either a `string`, and/or a custom field that isn't `code`. Pass this directly.
          content.push(formField);
        } else {
          // This is a code input field. Attach input handler.
          content.push(Object.assign({
            handleInputChange: function handleInputChange(event) {
              return _this2.handleCodeChange(event);
            }
          }, formField));
        }
      });
      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        handleSubmit: this.handleSubmit,
        submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.submitButtonText),
        loading: this.loading,
        secondaryFooterContent: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this3.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
          }
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.BACK_TO_SIGN_IN)))
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.constructedFormFieldOptions
      })));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "user": ["userHandler"]
      };
    }
  }]);

  return AmplifyConfirmSignIn;
}();

var AmplifyConfirmSignUp = /*#__PURE__*/function () {
  function AmplifyConfirmSignUp(hostRef) {
    var _this4 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyConfirmSignUp);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Fires when sign up form is submitted */

    this.handleSubmit = function (event) {
      return _this4.confirmSignUp(event);
    };
    /** Used for header text in confirm sign up component */


    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_HEADER_TEXT;
    /** Used for the submit button text in confirm sign up component */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Auth state change handler for this components
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    this.loading = false;
    this.newFormFields = [];
    this.phoneNumber = {
      countryDialCodeValue: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.h,
      phoneNumberValue: null
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyConfirmSignUp, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.setup();
    }
  }, {
    key: "formFieldsHandler",
    value: function formFieldsHandler() {
      this.buildFormFields();
    }
  }, {
    key: "userHandler",
    value: function userHandler() {
      this.setup();
    }
  }, {
    key: "setup",
    value: function setup() {
      // TODO: Use optional chaining instead
      this.userInput = this.user && this.user.username;
      this._signUpAttrs = this.user && this.user.signUpAttrs;
      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this.usernameAlias);
      this.buildFormFields();
    }
  }, {
    key: "buildDefaultFormFields",
    value: function buildDefaultFormFields() {
      var _this5 = this;

      this.newFormFields = [{
        type: "".concat(this.usernameAlias),
        required: true,
        handleInputChange: this.handleFormFieldInputChange("".concat(this.usernameAlias)),
        value: this.userInput,
        disabled: this.userInput ? true : false,
        inputProps: {
          autocomplete: 'username'
        }
      }, {
        type: 'code',
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_CODE_LABEL),
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),
        required: true,
        hint: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_LOST_CODE), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this5.resendConfirmCode();
          }
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_RESEND_CODE))),
        handleInputChange: this.handleFormFieldInputChange('code')
      }];
    }
  }, {
    key: "buildFormFields",
    value: function buildFormFields() {
      var _this6 = this;

      if (this.formFields.length === 0) {
        this.buildDefaultFormFields();
      } else {
        var newFields = [];
        this.formFields.forEach(function (field) {
          var newField = Object.assign({}, field);

          if (newField.type === 'code') {
            newField['hint'] = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.i)(newField) ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_LOST_CODE), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
              variant: "anchor",
              onClick: function onClick() {
                return _this6.resendConfirmCode();
              }
            }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_RESEND_CODE))) : newField['hint'];
          }

          newField['handleInputChange'] = function (event) {
            return _this6.handleFormFieldInputWithCallback(event, field);
          };

          newFields.push(newField);
        });
        this.newFormFields = newFields;
      }
    }
  }, {
    key: "handleFormFieldInputChange",
    value: function handleFormFieldInputChange(fieldType) {
      var _this7 = this;

      switch (fieldType) {
        case 'username':
        case 'email':
          return function (event) {
            return _this7.userInput = event.target.value;
          };

        case 'phone_number':
          return function (event) {
            return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.h)(event, _this7.phoneNumber);
          };

        case 'code':
          return function (event) {
            return _this7.code = event.target.value;
          };

        default:
          return;
      }
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(field) {
      switch (field.type) {
        case 'username':
        case 'email':
          if (field.value === undefined) {
            this.userInput = '';
          } else {
            this.userInput = field.value;
          }

          break;

        case 'phone_number':
          if (field.dialCode) {
            this.phoneNumber.countryDialCodeValue = field.dialCode;
          }

          this.phoneNumber.phoneNumberValue = field.value;
          break;
      }
    }
  }, {
    key: "handleFormFieldInputWithCallback",
    value: function handleFormFieldInputWithCallback(event, field) {
      var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
        cb(event);
      };
      var callback = this.handleFormFieldInputChange(field.type);
      fnToCall(event, callback.bind(this));
    }
    /**
     * Returns the username of the user to confirm. If a valid `user.username` has been passed as a prop, we return that.
     * Otherwise, we return the `userInput` on the form.
     */

  }, {
    key: "getUsername",
    value: function getUsername() {
      if (this.user && this.user.username) return this.user.username;

      switch (this.usernameAlias) {
        case 'username':
        case 'email':
          return this.userInput;

        case 'phone_number':
          return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.phoneNumber);
      }
    }
  }, {
    key: "resendConfirmCode",
    value: function () {
      var _resendConfirmCode = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var username;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.resendSignUp !== 'function')) {
                  _context2.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                _context2.prev = 3;
                username = this.getUsername();

                if (username) {
                  _context2.next = 7;
                  break;
                }

                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.EMPTY_USERNAME);

              case 7:
                _context2.next = 9;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.resendSignUp(username.trim());

              case 9:
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](3);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 11]]);
      }));

      function resendConfirmCode() {
        return _resendConfirmCode.apply(this, arguments);
      }

      return resendConfirmCode;
    }() // TODO: Add validation
    // TODO: Prefix

  }, {
    key: "confirmSignUp",
    value: function () {
      var _confirmSignUp = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(event) {
        var username, confirmSignUpResult;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.confirmSignUp !== 'function')) {
                  _context3.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                _context3.prev = 4;
                username = this.getUsername();

                if (username) {
                  _context3.next = 8;
                  break;
                }

                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.EMPTY_USERNAME);

              case 8:
                username = username.trim();
                _context3.next = 11;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.confirmSignUp(username, this.code);

              case 11:
                confirmSignUpResult = _context3.sent;

                if (confirmSignUpResult) {
                  _context3.next = 14;
                  break;
                }

                throw new Error(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CONFIRM_SIGN_UP_FAILED));

              case 14:
                if (!(this._signUpAttrs && this._signUpAttrs.password && this._signUpAttrs.password !== '')) {
                  _context3.next = 19;
                  break;
                }

                _context3.next = 17;
                return (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.h)(username, this._signUpAttrs.password, this.handleAuthStateChange);

              case 17:
                _context3.next = 20;
                break;

              case 19:
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);

              case 20:
                _context3.next = 25;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3["catch"](4);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context3.t0);

              case 25:
                _context3.prev = 25;
                this.loading = false;
                return _context3.finish(25);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 22, 25, 28]]);
      }));

      function confirmSignUp(_x2) {
        return _confirmSignUp.apply(this, arguments);
      }

      return confirmSignUp;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.submitButtonText),
        handleSubmit: this.handleSubmit,
        loading: this.loading,
        secondaryFooterContent: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this8.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
          }
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.BACK_TO_SIGN_IN))))
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.newFormFields
      })));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"],
        "user": ["userHandler"]
      };
    }
  }]);

  return AmplifyConfirmSignUp;
}();

var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__.ConsoleLogger('ForgotPassword');

var AmplifyForgotPassword = /*#__PURE__*/function () {
  function AmplifyForgotPassword(hostRef) {
    var _this9 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyForgotPassword);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** The header text of the forgot password section */

    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.RESET_YOUR_PASSWORD;
    /** The text displayed inside of the send code button for the form */

    this.sendButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SEND_CODE;
    /** The text displayed inside of the submit button for the form */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SUBMIT;
    /** The form fields displayed inside of the forgot password form */

    this.formFields = [];
    /** The function called when making a request to reset password */

    this.handleSend = function (event) {
      return _this9.send(event);
    };
    /** The function called when submitting a new password */


    this.handleSubmit = function (event) {
      return _this9.submit(event);
    };
    /** Auth state change handler for this component */


    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    this.delivery = null;
    this.loading = false;
    this.phoneNumber = {
      countryDialCodeValue: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.h,
      phoneNumberValue: null
    };
    this.newFormFields = [];
    this.forgotPasswordAttrs = {
      userInput: '',
      password: '',
      code: ''
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyForgotPassword, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this.usernameAlias);
      this.buildFormFields();
    }
  }, {
    key: "formFieldsHandler",
    value: function formFieldsHandler() {
      this.buildFormFields();
    }
  }, {
    key: "buildFormFields",
    value: function buildFormFields() {
      var _this10 = this;

      if (this.formFields.length === 0) {
        this.buildDefaultFormFields();
      } else {
        this.formFields.forEach(function (field) {
          var newField = Object.assign({}, field);

          newField['handleInputChange'] = function (event) {
            return _this10.handleFormFieldInputWithCallback(event, field);
          };

          _this10.newFormFields.push(newField);
        });
      }
    }
  }, {
    key: "buildDefaultFormFields",
    value: function buildDefaultFormFields() {
      switch (this.usernameAlias) {
        case 'email':
          this.newFormFields = [{
            type: 'email',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('email'),
            inputProps: {
              'data-test': 'forgot-password-email-input'
            }
          }];
          break;

        case 'phone_number':
          this.newFormFields = [{
            type: 'phone_number',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('phone_number'),
            inputProps: {
              'data-test': 'forgot-password-phone-number-input'
            }
          }];
          break;

        case 'username':
        default:
          this.newFormFields = [{
            type: 'username',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('username'),
            inputProps: {
              'data-test': 'forgot-password-username-input'
            }
          }];
          break;
      }
    }
  }, {
    key: "handleFormFieldInputChange",
    value: function handleFormFieldInputChange(fieldType) {
      var _this11 = this;

      switch (fieldType) {
        case 'username':
        case 'email':
          return function (event) {
            return _this11.forgotPasswordAttrs.userInput = event.target.value;
          };

        case 'phone_number':
          return function (event) {
            return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.h)(event, _this11.phoneNumber);
          };

        case 'password':
        case 'code':
          return function (event) {
            return _this11.forgotPasswordAttrs[fieldType] = event.target.value;
          };

        default:
          return;
      }
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(field, formAttributes) {
      switch (field.type) {
        case 'username':
        case 'email':
          if (field.value === undefined) {
            formAttributes.userInput = '';
          } else {
            formAttributes.userInput = field.value;
          }

          break;

        case 'phone_number':
          if (field.dialCode) {
            this.phoneNumber.countryDialCodeValue = field.dialCode;
          }

          this.phoneNumber.phoneNumberValue = field.value;
          break;

        case 'password':
        case 'code':
          if (field.value === undefined) {
            formAttributes[field.type] = '';
          } else {
            formAttributes[field.type] = field.value;
          }

          break;
      }
    }
  }, {
    key: "handleFormFieldInputWithCallback",
    value: function handleFormFieldInputWithCallback(event, field) {
      var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
        cb(event);
      };
      var callback = this.handleFormFieldInputChange(field.type);
      fnToCall(event, callback.bind(this));
    }
  }, {
    key: "send",
    value: function () {
      var _send = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(event) {
        var data;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.forgotPassword !== 'function')) {
                  _context4.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                _context4.t0 = this.usernameAlias;
                _context4.next = _context4.t0 === 'phone_number' ? 7 : 9;
                break;

              case 7:
                try {
                  this.forgotPasswordAttrs.userInput = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.phoneNumber);
                } catch (error) {
                  (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(error);
                }

                return _context4.abrupt("break", 9);

              case 9:
                _context4.prev = 9;
                _context4.next = 12;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.forgotPassword(this.forgotPasswordAttrs.userInput.trim());

              case 12:
                data = _context4.sent;
                logger.debug(data);
                this.newFormFields = [{
                  type: 'code',
                  required: true,
                  handleInputChange: this.handleFormFieldInputChange('code'),
                  inputProps: {
                    'data-test': 'forgot-password-code-input'
                  }
                }, {
                  type: 'password',
                  required: true,
                  handleInputChange: this.handleFormFieldInputChange('password'),
                  label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.NEW_PASSWORD_LABEL),
                  placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.NEW_PASSWORD_PLACEHOLDER)
                }];
                this.delivery = data.CodeDeliveryDetails;
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t1 = _context4["catch"](9);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context4.t1);

              case 21:
                _context4.prev = 21;
                this.loading = false;
                return _context4.finish(21);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[9, 18, 21, 24]]);
      }));

      function send(_x3) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "submit",
    value: function () {
      var _submit = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(event) {
        var _this$forgotPasswordA, userInput, code, password, data;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.forgotPasswordSubmit !== 'function')) {
                  _context5.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                _context5.prev = 4;
                _this$forgotPasswordA = this.forgotPasswordAttrs, userInput = _this$forgotPasswordA.userInput, code = _this$forgotPasswordA.code, password = _this$forgotPasswordA.password;
                _context5.next = 8;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.forgotPasswordSubmit(userInput.trim(), code, password);

              case 8:
                data = _context5.sent;
                logger.debug(data);
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
                this.delivery = null;
                _context5.next = 17;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](4);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context5.t0);

              case 17:
                _context5.prev = 17;
                this.loading = false;
                return _context5.finish(17);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 14, 17, 20]]);
      }));

      function submit(_x4) {
        return _submit.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      var submitFn = this.delivery ? function (event) {
        return _this12.handleSubmit(event);
      } : function (event) {
        return _this12.handleSend(event);
      };
      var submitButtonText = this.delivery ? this.submitButtonText : this.sendButtonText;
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        handleSubmit: submitFn,
        loading: this.loading,
        secondaryFooterContent: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this12.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
          },
          "data-test": "forgot-password-back-to-sign-in-link"
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.BACK_TO_SIGN_IN)),
        testDataPrefix: 'forgot-password',
        submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(submitButtonText)
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.newFormFields
      })));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    }
  }]);

  return AmplifyForgotPassword;
}();

var logger$1 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__.ConsoleLogger('amplify-require-new-password');

var AmplifyRequireNewPassword = /*#__PURE__*/function () {
  function AmplifyRequireNewPassword(hostRef) {
    var _this13 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyRequireNewPassword);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** The header text of the forgot password section */

    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CHANGE_PASSWORD;
    /** The text displayed inside of the submit button for the form */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CHANGE_PASSWORD_ACTION;
    /** The function called when submitting a new password */

    this.handleSubmit = function (event) {
      return _this13.completeNewPassword(event);
    };
    /** Auth state change handler for this component */


    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** The form fields displayed inside of the forgot password form */

    this.formFields = [{
      type: _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.a.Password,
      required: true,
      handleInputChange: function handleInputChange(event) {
        return _this13.handlePasswordChange(event);
      },
      label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.NEW_PASSWORD_LABEL),
      placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.NEW_PASSWORD_PLACEHOLDER),
      inputProps: {
        'data-test': 'require-new-password-password-input'
      }
    }];
    this.loading = false;
    this.requiredAttributes = {};
    this.newFormFields = this.formFields;
    this.phoneNumber = {
      countryDialCodeValue: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.h,
      phoneNumberValue: ' '
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyRequireNewPassword, [{
    key: "userHandler",
    value: function userHandler() {
      this.setCurrentUser();
    }
  }, {
    key: "handleRequiredAttributeInputChange",
    value: function handleRequiredAttributeInputChange(attribute, event) {
      if (attribute === 'phone_number') {
        this.formatPhoneNumber(event);
      } else {
        this.requiredAttributes[attribute] = event.target.value;
      }
    }
  }, {
    key: "setCurrentUser",
    value: function () {
      var _setCurrentUser = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
        var _this14 = this;

        var user, userRequiredAttributes, requiredAttributesMap;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.user) {
                  _context6.next = 13;
                  break;
                }

                _context6.prev = 1;
                _context6.next = 4;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.currentAuthenticatedUser();

              case 4:
                user = _context6.sent;
                if (user) this.currentUser = user;
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](1);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context6.t0);

              case 11:
                _context6.next = 14;
                break;

              case 13:
                this.currentUser = this.user;

              case 14:
                if (this.currentUser && this.currentUser.challengeParam && this.currentUser.challengeParam.requiredAttributes) {
                  userRequiredAttributes = this.currentUser.challengeParam.requiredAttributes;
                  requiredAttributesMap = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.g)();
                  userRequiredAttributes.forEach(function (attribute) {
                    var formField = {
                      type: attribute,
                      required: true,
                      label: requiredAttributesMap[attribute].label,
                      placeholder: requiredAttributesMap[attribute].placeholder,
                      handleInputChange: function handleInputChange(event) {
                        return _this14.handleRequiredAttributeInputChange(attribute, event);
                      },
                      inputProps: {
                        'data-test': "require-new-password-".concat(attribute, "-input")
                      }
                    };
                    _this14.newFormFields = [].concat((0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this14.newFormFields), [formField]);
                  });
                }

              case 15:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 8]]);
      }));

      function setCurrentUser() {
        return _setCurrentUser.apply(this, arguments);
      }

      return setCurrentUser;
    }()
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      return this.setCurrentUser();
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(event) {
      this.password = event.target.value;
    }
  }, {
    key: "formatPhoneNumber",
    value: function formatPhoneNumber(event) {
      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.h)(event, this.phoneNumber);
      /**
       * composePhoneNumberInput will throw an error if the phoneNumberValue it receives
       * is empty. Adding a check here to try and make sure that doesn't happen...but will
       * wrap it in a try/catch block just in case as well
       */

      try {
        if (event.target.name === _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.b && this.phoneNumber.phoneNumberValue) {
          var composedInput = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.phoneNumber);
          this.requiredAttributes['phone_number'] = composedInput;
        }
      } catch (err) {
        logger$1.error("error in phone number field - ".concat(err));
      }
    }
  }, {
    key: "completeNewPassword",
    value: function () {
      var _completeNewPassword = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7(event) {
        var user;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.completeNewPassword !== 'function')) {
                  _context7.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                _context7.prev = 4;
                _context7.next = 7;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.completeNewPassword(this.currentUser, this.password, this.requiredAttributes);

              case 7:
                user = _context7.sent;
                logger$1.debug('complete new password', user);
                _context7.t0 = user.challengeName;
                _context7.next = _context7.t0 === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.C.SMSMFA ? 12 : _context7.t0 === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.C.MFASetup ? 14 : 17;
                break;

              case 12:
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignIn, user);
                return _context7.abrupt("break", 19);

              case 14:
                logger$1.debug('TOTP setup', user.challengeParam);
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.TOTPSetup, user);
                return _context7.abrupt("break", 19);

              case 17:
                _context7.next = 19;
                return (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.c)(user, this.handleAuthStateChange);

              case 19:
                _context7.next = 24;
                break;

              case 21:
                _context7.prev = 21;
                _context7.t1 = _context7["catch"](4);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context7.t1);

              case 24:
                _context7.prev = 24;
                this.loading = false;
                return _context7.finish(24);

              case 27:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[4, 21, 24, 27]]);
      }));

      function completeNewPassword(_x5) {
        return _completeNewPassword.apply(this, arguments);
      }

      return completeNewPassword;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        handleSubmit: this.handleSubmit,
        loading: this.loading,
        secondaryFooterContent: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this15.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
          }
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.BACK_TO_SIGN_IN)),
        submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.submitButtonText)
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.newFormFields
      })));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "user": ["userHandler"]
      };
    }
  }]);

  return AmplifyRequireNewPassword;
}();

var amplifySignInCss = ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";

var AmplifySignIn = /*#__PURE__*/function () {
  function AmplifySignIn(hostRef) {
    var _this16 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifySignIn);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Fires when sign in form is submitted */

    this.handleSubmit = function (event) {
      return _this16.signIn(event);
    };
    /** Used for header text in sign in component */


    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_IN_HEADER_TEXT;
    /** Used for the submit button text in sign in component */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_IN_ACTION;
    /** Auth state change handler for this component */
    // prettier-ignore

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username';
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Hides the sign up link */

    this.hideSignUp = false;
    this.newFormFields = [];
    /* Whether or not the sign-in component is loading */

    this.loading = false;
    this.phoneNumber = {
      countryDialCodeValue: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.h,
      phoneNumberValue: null
    };
    this.signInAttributes = {
      userInput: '',
      password: ''
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifySignIn, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this.usernameAlias);
      this.buildFormFields();
    }
  }, {
    key: "formFieldsHandler",
    value: function formFieldsHandler() {
      this.buildFormFields();
    }
  }, {
    key: "handleFormFieldInputChange",
    value: function handleFormFieldInputChange(fieldType) {
      var _this17 = this;

      switch (fieldType) {
        case 'username':
        case 'email':
          return function (event) {
            return _this17.signInAttributes.userInput = event.target.value;
          };

        case 'phone_number':
          return function (event) {
            return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.h)(event, _this17.phoneNumber);
          };

        case 'password':
          return function (event) {
            return _this17.signInAttributes.password = event.target.value;
          };

        default:
          return function () {};
      }
    }
  }, {
    key: "handleFormFieldInputWithCallback",
    value: function handleFormFieldInputWithCallback(event, field) {
      var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
        cb(event);
      };
      var callback = this.handleFormFieldInputChange(field.type);
      fnToCall(event, callback.bind(this));
    }
  }, {
    key: "signIn",
    value: function () {
      var _signIn = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8(event) {
        var username;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // avoid submitting the form
                if (event) {
                  event.preventDefault();
                }

                this.loading = true;

                switch (this.usernameAlias) {
                  case 'phone_number':
                    try {
                      this.signInAttributes.userInput = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.phoneNumber);
                    } catch (error) {
                      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(error);
                    }

                }

                username = this.signInAttributes.userInput.trim();
                _context8.next = 6;
                return (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.h)(username, this.signInAttributes.password, this.handleAuthStateChange, this.usernameAlias);

              case 6:
                this.loading = false;

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function signIn(_x6) {
        return _signIn.apply(this, arguments);
      }

      return signIn;
    }()
  }, {
    key: "buildDefaultFormFields",
    value: function buildDefaultFormFields() {
      var _this18 = this;

      var formFieldInputs = [];

      switch (this.usernameAlias) {
        case 'email':
          formFieldInputs.push({
            type: 'email',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('email'),
            inputProps: {
              'data-test': 'sign-in-email-input',
              autocomplete: 'username'
            }
          });
          break;

        case 'phone_number':
          formFieldInputs.push({
            type: 'phone_number',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('phone_number'),
            inputProps: {
              'data-test': 'sign-in-phone-number-input',
              autocomplete: 'username'
            }
          });
          break;

        case 'username':
        default:
          formFieldInputs.push({
            type: 'username',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('username'),
            inputProps: {
              'data-test': 'sign-in-username-input',
              autocomplete: 'username'
            }
          });
          break;
      }

      formFieldInputs.push({
        type: 'password',
        hint: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.FORGOT_PASSWORD_TEXT), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this18.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ForgotPassword);
          },
          "data-test": "sign-in-forgot-password-link"
        }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.RESET_PASSWORD_TEXT))),
        required: true,
        handleInputChange: this.handleFormFieldInputChange('password'),
        inputProps: {
          'data-test': 'sign-in-password-input'
        }
      });
      this.newFormFields = [].concat(formFieldInputs);
    }
  }, {
    key: "buildFormFields",
    value: function buildFormFields() {
      var _this19 = this;

      if (this.formFields.length === 0) {
        this.buildDefaultFormFields();
      } else {
        var newFields = [];
        this.formFields.forEach(function (field) {
          var newField = Object.assign({}, field); // TODO: handle hint better

          if (newField.type === 'password') {
            newField['hint'] = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.i)(newField) ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.FORGOT_PASSWORD_TEXT), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
              variant: "anchor",
              onClick: function onClick() {
                return _this19.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ForgotPassword);
              },
              "data-test": "sign-in-forgot-password-link"
            }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.RESET_PASSWORD_TEXT))) : newField['hint'];
          }

          newField['handleInputChange'] = function (event) {
            return _this19.handleFormFieldInputWithCallback(event, field);
          };

          _this19.setFieldValue(newField, _this19.signInAttributes);

          newFields.push(newField);
        });
        this.newFormFields = newFields;
      }
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(field, formAttributes) {
      switch (field.type) {
        case 'username':
        case 'email':
          if (field.value === undefined) {
            formAttributes.userInput = '';
          } else {
            formAttributes.userInput = field.value;
          }

          break;

        case 'phone_number':
          if (field.dialCode) {
            this.phoneNumber.countryDialCodeValue = field.dialCode;
          }

          this.phoneNumber.phoneNumberValue = field.value;
          break;

        case 'password':
          if (field.value === undefined) {
            formAttributes.password = '';
          } else {
            formAttributes.password = field.value;
          }

          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this20 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        handleSubmit: this.handleSubmit,
        testDataPrefix: 'sign-in'
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        slot: "subtitle"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "header-subtitle"
      })), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "federated-buttons"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-federated-buttons", {
        handleAuthStateChange: this.handleAuthStateChange,
        federated: this.federated
      })), !(0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(this.federated) && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-strike", null, "or"), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.newFormFields
      }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        slot: "amplify-form-section-footer",
        class: "sign-in-form-footer"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "footer"
      }, !this.hideSignUp && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "secondary-footer-content"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.NO_ACCOUNT_TEXT), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this20.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignUp);
        },
        "data-test": "sign-in-create-account-link"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CREATE_ACCOUNT_TEXT)))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: this.hideSignUp ? 'full-width-footer-content' : ''
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "primary-footer-content"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        type: "submit",
        disabled: this.loading,
        "data-test": "sign-in-sign-in-button"
      }, this.loading ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-loading-spinner", null) : (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.submitButtonText)))))))));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    }
  }]);

  return AmplifySignIn;
}();

AmplifySignIn.style = amplifySignInCss;
var amplifySignUpCss = "amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

var AmplifySignUp = /*#__PURE__*/function () {
  function AmplifySignUp(hostRef) {
    var _this21 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifySignUp);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Fires when sign up form is submitted */

    this.handleSubmit = function (event) {
      return _this21.signUp(event);
    };
    /** Override for handling the Auth.SignUp API call */


    this.handleSignUp = function (params) {
      return _this21.authSignUp(params);
    };
    /** Used for header text in sign up component */


    this.headerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_HEADER_TEXT;
    /** Used for the submit button text in sign up component */

    this.submitButtonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_SUBMIT_BUTTON_TEXT;
    /** Used for the submit button text in sign up component */

    this.haveAccountText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_HAVE_ACCOUNT_TEXT;
    /** Text used for the sign in hyperlink */

    this.signInText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_IN_TEXT;
    /**
     * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
     * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
     * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
     * ```
     * [
     *  {
     *    type: string,
     *    label: string,
     *    placeholder: string,
     *    hint: string | Functional Component | null,
     *    required: boolean
     *  }
     * ]
     * ```
     */

    this.formFields = [];
    /** Auth state change handler for this component
     * e.g. SignIn -> 'Create Account' link -> SignUp
     */
    // prettier-ignore

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */

    this.usernameAlias = 'username'; // private userInput: string | PhoneNumberInterface;

    this.newFormFields = [];
    this.phoneNumber = {
      countryDialCodeValue: _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.h,
      phoneNumberValue: null
    };
    this.loading = false;
    this.signUpAttributes = {
      username: '',
      password: '',
      attributes: {}
    };
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifySignUp, [{
    key: "handleFormFieldInputChange",
    value: function handleFormFieldInputChange(fieldType) {
      var _this22 = this;

      switch (fieldType) {
        case 'username':
          return function (event) {
            return _this22.signUpAttributes.username = event.target.value;
          };

        case 'password':
          return function (event) {
            return _this22.signUpAttributes.password = event.target.value;
          };

        case 'email':
          return function (event) {
            return _this22.signUpAttributes.attributes.email = event.target.value;
          };

        case 'phone_number':
          return function (event) {
            return (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.h)(event, _this22.phoneNumber);
          };

        default:
          return function (event) {
            return _this22.signUpAttributes.attributes[fieldType] = event.target.value;
          };
      }
    }
  }, {
    key: "handleFormFieldInputWithCallback",
    value: function handleFormFieldInputWithCallback(event, field) {
      var fnToCall = field['handleInputChange'] ? field['handleInputChange'] : function (event, cb) {
        cb(event);
      };
      var callback = this.handleFormFieldInputChange(field.type);
      fnToCall(event, callback.bind(this));
    }
  }, {
    key: "authSignUp",
    value: function () {
      var _authSignUp = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9(params) {
        var data;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.signUp(params);

              case 2:
                data = _context9.sent;

                if (data) {
                  _context9.next = 5;
                  break;
                }

                throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_FAILED);

              case 5:
                return _context9.abrupt("return", data);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function authSignUp(_x7) {
        return _authSignUp.apply(this, arguments);
      }

      return authSignUp;
    }()
  }, {
    key: "assignPhoneNumberToSignUpAttributes",
    value: function assignPhoneNumberToSignUpAttributes() {
      if (this.phoneNumber.phoneNumberValue) {
        try {
          this.signUpAttributes.attributes.phone_number = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.phoneNumber);
        } catch (error) {
          (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(error);
        }
      }
    }
  }, {
    key: "assignUserNameAliasToSignUpAttributes",
    value: function assignUserNameAliasToSignUpAttributes() {
      switch (this.usernameAlias) {
        case 'email':
        case 'phone_number':
          this.signUpAttributes.username = this.signUpAttributes.attributes[this.usernameAlias];
          break;
      }
    }
  }, {
    key: "assignFormInputToSignUpAttributes",
    value: function assignFormInputToSignUpAttributes() {
      this.assignPhoneNumberToSignUpAttributes();
      this.assignUserNameAliasToSignUpAttributes();
    }
  }, {
    key: "validateSignUpAttributes",
    value: function validateSignUpAttributes() {
      if (!this.signUpAttributes.username) {
        if (this.usernameAlias === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.U.email) {
          throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.EMPTY_EMAIL);
        } else if (this.usernameAlias === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.U.phone_number) {
          throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.EMPTY_PHONE);
        } else {
          throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.EMPTY_USERNAME);
        }
      }

      if (this.signUpAttributes.username.indexOf(' ') >= 0) {
        throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.USERNAME_REMOVE_WHITESPACE);
      }

      if (this.signUpAttributes.password !== this.signUpAttributes.password.trim()) {
        throw new Error(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.PASSWORD_REMOVE_WHITESPACE);
      }
    } // TODO: Add validation
    // TODO: Prefix

  }, {
    key: "signUp",
    value: function () {
      var _signUp = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10(event) {
        var data, signUpAttrs;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.signUp !== 'function')) {
                  _context10.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                this.assignFormInputToSignUpAttributes();
                _context10.prev = 5;
                this.validateSignUpAttributes();
                _context10.next = 9;
                return this.handleSignUp(this.signUpAttributes);

              case 9:
                data = _context10.sent;

                if (!data.userConfirmed) {
                  _context10.next = 15;
                  break;
                }

                _context10.next = 13;
                return (0,_auth_helpers_aad95737_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.signUpAttributes.username, this.signUpAttributes.password, this.handleAuthStateChange);

              case 13:
                _context10.next = 17;
                break;

              case 15:
                signUpAttrs = Object.assign({}, this.signUpAttributes);
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.ConfirmSignUp, Object.assign(Object.assign({}, data.user), {
                  signUpAttrs: signUpAttrs
                }));

              case 17:
                _context10.next = 22;
                break;

              case 19:
                _context10.prev = 19;
                _context10.t0 = _context10["catch"](5);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context10.t0);

              case 22:
                _context10.prev = 22;
                this.loading = false;
                return _context10.finish(22);

              case 25:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[5, 19, 22, 25]]);
      }));

      function signUp(_x8) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "buildDefaultFormFields",
    value: function buildDefaultFormFields() {
      switch (this.usernameAlias) {
        case 'email':
          this.newFormFields = [{
            type: 'email',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_EMAIL_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('email'),
            inputProps: {
              'data-test': 'sign-up-email-input',
              autocomplete: 'username'
            }
          }, {
            type: 'password',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_PASSWORD_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
              'data-test': 'sign-up-password-input',
              autocomplete: 'new-password'
            }
          }, {
            type: 'phone_number',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('phone_number'),
            inputProps: {
              'data-test': 'sign-up-phone-number-input',
              autocomplete: 'tel-national'
            }
          }];
          break;

        case 'phone_number':
          this.newFormFields = [{
            type: 'phone_number',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('phone_number'),
            inputProps: {
              'data-test': 'sign-up-phone-number-input',
              autocomplete: 'username'
            }
          }, {
            type: 'password',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_PASSWORD_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
              'data-test': 'sign-up-password-input',
              autocomplete: 'new-password'
            }
          }, {
            type: 'email',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_EMAIL_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('email'),
            inputProps: {
              'data-test': 'sign-up-email-input',
              autocomplete: 'email'
            }
          }];
          break;

        case 'username':
        default:
          this.newFormFields = [{
            type: 'username',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_USERNAME_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('username'),
            inputProps: {
              'data-test': 'sign-up-username-input',
              autocomplete: 'username'
            }
          }, {
            type: 'password',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_PASSWORD_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('password'),
            inputProps: {
              'data-test': 'sign-up-password-input',
              autocomplete: 'new-password'
            }
          }, {
            type: 'email',
            placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.SIGN_UP_EMAIL_PLACEHOLDER),
            required: true,
            handleInputChange: this.handleFormFieldInputChange('email'),
            inputProps: {
              'data-test': 'sign-up-email-input'
            }
          }, {
            type: 'phone_number',
            required: true,
            handleInputChange: this.handleFormFieldInputChange('phone_number'),
            inputProps: {
              'data-test': 'sign-up-phone-number-input'
            }
          }];
          break;
      }
    }
  }, {
    key: "buildFormFields",
    value: function buildFormFields() {
      var _this23 = this;

      if (this.formFields.length === 0) {
        this.buildDefaultFormFields();
      } else {
        var newFields = [];
        this.formFields.forEach(function (field) {
          var newField = Object.assign({}, field);

          newField['handleInputChange'] = function (event) {
            return _this23.handleFormFieldInputWithCallback(event, field);
          };

          _this23.setFieldValue(field, _this23.signUpAttributes);

          newFields.push(newField);
        });
        this.newFormFields = newFields;
      }
    }
  }, {
    key: "setFieldValue",
    value: function setFieldValue(field, formAttributes) {
      switch (field.type) {
        case 'username':
          if (field.value === undefined) {
            formAttributes.username = '';
          } else {
            formAttributes.username = field.value;
          }

          break;

        case 'password':
          if (field.value === undefined) {
            formAttributes.password = '';
          } else {
            formAttributes.password = field.value;
          }

          break;

        case 'email':
          formAttributes.attributes.email = field.value;
          break;

        case 'phone_number':
          if (field.dialCode) {
            this.phoneNumber.countryDialCodeValue = field.dialCode;
          }

          this.phoneNumber.phoneNumberValue = field.value;
          break;

        default:
          formAttributes.attributes[field.type] = field.value;
          break;
      }
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.c)(this.usernameAlias);
      this.buildFormFields();
    }
  }, {
    key: "formFieldsHandler",
    value: function formFieldsHandler() {
      this.buildFormFields();
    }
  }, {
    key: "render",
    value: function render() {
      var _this24 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.headerText),
        handleSubmit: this.handleSubmit,
        testDataPrefix: 'sign-up'
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        slot: "subtitle"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "header-subtitle"
      })), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-auth-fields", {
        formFields: this.newFormFields
      }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "sign-up-form-footer",
        slot: "amplify-form-section-footer"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "footer"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "secondary-footer-content"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.haveAccountText), ' ', (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        variant: "anchor",
        onClick: function onClick() {
          return _this24.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignIn);
        },
        "data-test": "sign-up-sign-in-link"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.signInText)))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "primary-footer-content"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        type: "submit",
        "data-test": "sign-up-create-account-button",
        disabled: this.loading
      }, this.loading ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-loading-spinner", null) : (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(this.submitButtonText))))))));
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "formFields": ["formFieldsHandler"]
      };
    }
  }]);

  return AmplifySignUp;
}();

AmplifySignUp.style = amplifySignUpCss;
var logger$2 = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__.ConsoleLogger('AmplifyVerifyContact');

var AmplifyVerifyContact = /*#__PURE__*/function () {
  function AmplifyVerifyContact(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyVerifyContact);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Authentication state handler */

    this.handleAuthStateChange = _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.d;
    this.loading = false;
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyVerifyContact, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
    }
  }, {
    key: "submit",
    value: function () {
      var _submit2 = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11(code) {
        var attr, data;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                attr = this.verifyAttr;

                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.verifyCurrentUserAttributeSubmit !== 'function')) {
                  _context11.next = 3;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 3:
                this.loading = true;
                _context11.prev = 4;
                _context11.next = 7;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.verifyCurrentUserAttributeSubmit(attr, code);

              case 7:
                data = _context11.sent;
                logger$2.debug(data);
                this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedIn, this.user);
                this.verifyAttr = null;
                _context11.next = 17;
                break;

              case 13:
                _context11.prev = 13;
                _context11.t0 = _context11["catch"](4);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context11.t0);
                logger$2.error(_context11.t0);

              case 17:
                _context11.prev = 17;
                this.loading = false;
                return _context11.finish(17);

              case 20:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[4, 13, 17, 20]]);
      }));

      function submit(_x9) {
        return _submit2.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: "verify",
    value: function () {
      var _verify = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee12(contact) {
        var data;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (contact) {
                  _context12.next = 3;
                  break;
                }

                logger$2.error('Neither Email nor Phone Number selected');
                return _context12.abrupt("return");

              case 3:
                if (!(!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.verifyCurrentUserAttribute !== 'function')) {
                  _context12.next = 5;
                  break;
                }

                throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.N);

              case 5:
                this.loading = true;
                _context12.prev = 6;
                _context12.next = 9;
                return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_11__.Auth.verifyCurrentUserAttribute(contact);

              case 9:
                data = _context12.sent;
                logger$2.debug(data);
                this.verifyAttr = contact;
                _context12.next = 18;
                break;

              case 14:
                _context12.prev = 14;
                _context12.t0 = _context12["catch"](6);
                (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_9__.a)(_context12.t0);
                logger$2.error(_context12.t0);

              case 18:
                _context12.prev = 18;
                this.loading = false;
                return _context12.finish(18);

              case 21:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[6, 14, 18, 21]]);
      }));

      function verify(_x10) {
        return _verify.apply(this, arguments);
      }

      return verify;
    }()
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var inputName = event.target.name;

      if (inputName === 'code') {
        this.code = event.target.value;
      } else if (inputName === 'contact') {
        this.contact = event.target.value;
      }
    }
  }, {
    key: "renderSubmit",
    value: function renderSubmit() {
      var _this25 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-input", {
        inputProps: {
          autocomplete: 'off',
          'data-test': 'verify-contact-code-input'
        },
        name: "code",
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.CODE_PLACEHOLDER),
        handleInputChange: function handleInputChange(event) {
          return _this25.handleInputChange(event);
        }
      }));
    }
  }, {
    key: "renderVerify",
    value: function renderVerify() {
      var _this26 = this;

      var user = this.user;

      if (!user) {
        logger$2.debug('No user to verify');
        return null;
      }

      var unverified = user.unverified;

      if (!unverified) {
        logger$2.debug('Unverified variable does not exist on user');
        return null;
      }

      var email = unverified.email,
          phone_number = unverified.phone_number;
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, email && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-radio-button", {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.VERIFY_CONTACT_EMAIL_LABEL),
        key: "email",
        name: "contact",
        value: "email",
        handleInputChange: function handleInputChange(event) {
          return _this26.handleInputChange(event);
        },
        inputProps: {
          'data-test': 'verify-contact-email-radio'
        }
      }), phone_number && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-radio-button", {
        label: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.VERIFY_CONTACT_PHONE_LABEL),
        key: "phone_number",
        name: "contact",
        value: "phone_number",
        handleInputChange: function handleInputChange(event) {
          return _this26.handleInputChange(event);
        },
        inputProps: {
          'data-test': 'verify-contact-phone-number-radio'
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this27 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-form-section", {
        handleSubmit: function handleSubmit(event) {
          return _this27.handleSubmit(event);
        },
        headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.VERIFY_CONTACT_HEADER_TEXT),
        loading: this.loading,
        secondaryFooterContent: (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
          variant: "anchor",
          onClick: function onClick() {
            return _this27.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_6__.A.SignedIn, _this27.user);
          },
          "data-test": "verify-contact-skip-link"
        }, "Skip")),
        submitButtonText: this.verifyAttr ? _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.VERIFY_CONTACT_SUBMIT_LABEL) : _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.I18n.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.VERIFY_CONTACT_VERIFY_LABEL)
      }, this.verifyAttr ? this.renderSubmit() : this.renderVerify()));
    }
  }]);

  return AmplifyVerifyContact;
}();



/***/ })

}]);