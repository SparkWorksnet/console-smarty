(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[299],{

/***/ 1299:
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-form-field_4.entry.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_form_field": function() { return /* binding */ AmplifyFormField; },
/* harmony export */   "amplify_hint": function() { return /* binding */ AmplifyHint; },
/* harmony export */   "amplify_input": function() { return /* binding */ AmplifyInput; },
/* harmony export */   "amplify_label": function() { return /* binding */ AmplifyLabel; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-types-78df304e.js */ 84052);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-80b400b1.js */ 93502);









var amplifyFormFieldCss = "amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";

var AmplifyFormField = /*#__PURE__*/function () {
  function AmplifyFormField(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyFormField);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** The input type.  Can be any HTML input type. */

    this.type = 'text';
    /** The required flag in order to make an input required prior to submitting a form */

    this.required = false;
    /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */

    this.placeholder = '';
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyFormField, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "form-field"
      }, this.label && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "form-field-label"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-label", {
        htmlFor: this.fieldId
      }, this.label)), this.description && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        id: "".concat(this.fieldId, "-description"),
        class: "form-field-description",
        "data-test": "form-field-description"
      }, this.description), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", {
        name: "input"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-input", {
        fieldId: this.fieldId,
        description: this.description,
        type: this.type,
        handleInputChange: this.handleInputChange,
        placeholder: this.placeholder,
        name: this.name,
        value: this.value,
        inputProps: this.inputProps,
        disabled: this.disabled,
        required: this.required
      }))), this.hint && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("amplify-hint", {
        id: "".concat(this.fieldId, "-hint")
      }, this.hint));
    }
  }]);

  return AmplifyFormField;
}();

AmplifyFormField.style = amplifyFormFieldCss;
var amplifyHintCss = ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";

var AmplifyHint = /*#__PURE__*/function () {
  function AmplifyHint(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyHint);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyHint, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("div", {
        class: "hint"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null));
    }
  }]);

  return AmplifyHint;
}();

AmplifyHint.style = amplifyHintCss;
var amplifyInputCss = "amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";

var AmplifyInput = /*#__PURE__*/function () {
  function AmplifyInput(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyInput);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
    /** The input type.  Can be any HTML input type. */

    this.type = 'text';
    /** The callback, called when the input is modified by the user. */

    this.handleInputChange = function () {
      return void 0;
    };
    /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */


    this.placeholder = '';
    /** Whether the input is a required field */

    this.required = false;
    /** Whether the input has been autocompleted */

    this.autoCompleted = false;
  }
  /**
   * Sets the value of this input to the value in autofill input event.
   */


  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyInput, [{
    key: "setAutoCompleteValue",
    value: function setAutoCompleteValue(value) {
      var input = this.el.querySelector('input');
      if (!input) return;
      input.value = value; // dispatch an input event from this element to the parent form

      input.dispatchEvent(new Event('input'));
      this.autoCompleted = true;
    }
    /**
     * Checks if the target dummy input in `amplify-auth-container` is present have been autofilled.
     * If so, we update this.value with the autofilled value.
     */

  }, {
    key: "checkAutoCompletion",
    value: function checkAutoCompletion(targetInput) {
      var _this = this;

      if (!targetInput) return;

      if (targetInput.value) {
        // if value is already set, we set the value directly
        this.setAutoCompleteValue(targetInput.value);
      } else {
        // if value is not set, we start listening for it
        targetInput.addEventListener('input', function (e) {
          var value = e.target.value;

          _this.setAutoCompleteValue(value);
        });
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      var _this2 = this;

      // the below behaviors are only applicable if `amplify-input` is used by `amplify-authenticator`.
      if (!(0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.e)('amplify-authenticator', this.el)) return;
      this.removeHubListener = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.o)(function () {
        /**
         * When we're using slots, autofilled data will persist between different authState,
         * even though input events are not triggered. This ends up in parent components
         * not picking up input values. For now, we're emptying the input on authState change
         * which is the existing behavior.
         */
        var input = _this2.el.querySelector('input');

        if (input) input.value = '';
        _this2.autoCompleted = false;
      });
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      // no-op if this field already has been autofilled or already has an value
      if (this.autoCompleted || this.value) return;
      if (/Firefox/.test(navigator.userAgent)) return; // firefox autofill works

      var container = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.e)('amplify-auth-container', this.el);
      var signIn = (0,_helpers_80b400b1_js__WEBPACK_IMPORTED_MODULE_6__.e)('amplify-sign-in', this.el); // only autocomplete if `amplify-auth-container` is present and input is under `sign-in`.

      if (!container || !signIn) return;
      var username = container.querySelector("input[name='username']");
      var password = container.querySelector("input[name='password']");

      if (this.name === 'username' || this.name === 'email' || this.name === 'phone') {
        this.checkAutoCompletion(username);
      } else if (this.name === 'password') {
        this.checkAutoCompletion(password);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.H, {
        class: "input-host"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("input", Object.assign({
        id: this.fieldId,
        "aria-describedby": this.fieldId && this.description ? "".concat(this.fieldId, "-description") : null,
        "data-autocompleted": this.autoCompleted,
        type: this.type,
        onInput: function onInput(event) {
          _this3.autoCompleted = false;

          _this3.handleInputChange(event);
        },
        placeholder: this.placeholder,
        name: this.name,
        class: "input",
        value: this.value,
        disabled: this.disabled,
        required: this.required
      }, this.inputProps)));
    }
  }, {
    key: "el",
    get: function get() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.g)(this);
    }
  }]);

  return AmplifyInput;
}();

AmplifyInput.style = amplifyInputCss;
var amplifyLabelCss = ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";

var AmplifyLabel = /*#__PURE__*/function () {
  function AmplifyLabel(hostRef) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, AmplifyLabel);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, hostRef);
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(AmplifyLabel, [{
    key: "render",
    value: function render() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("label", {
        class: "label",
        htmlFor: this.htmlFor
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot", null));
    }
  }]);

  return AmplifyLabel;
}();

AmplifyLabel.style = amplifyLabelCss;


/***/ })

}]);