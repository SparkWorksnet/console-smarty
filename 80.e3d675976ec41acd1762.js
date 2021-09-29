(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[80],{

/***/ 96918:
/*!************************************************************************!*\
  !*** ./node_modules/@aws-amplify/interactions/lib-esm/Interactions.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsClass": function() { return /* binding */ InteractionsClass; },
/* harmony export */   "Interactions": function() { return /* binding */ Interactions; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/core */ 36817);
/* harmony import */ var _Providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Providers */ 35470);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger('Interactions');

var InteractionsClass =
/** @class */
function () {
  /**
   * Initialize PubSub with AWS configurations
   *
   * @param {InteractionsOptions} options - Configuration object for Interactions
   */
  function InteractionsClass(options) {
    this._options = options;
    logger.debug('Interactions Options', this._options);
    this._pluggables = {};
  }

  InteractionsClass.prototype.getModuleName = function () {
    return 'Interactions';
  };
  /**
   *
   * @param {InteractionsOptions} options - Configuration object for Interactions
   * @return {Object} - The current configuration
   */


  InteractionsClass.prototype.configure = function (options) {
    var _this = this;

    var opt = options ? options.Interactions || options : {};
    logger.debug('configure Interactions', {
      opt: opt
    });
    this._options = __assign(__assign({
      bots: {}
    }, opt), opt.Interactions);
    var aws_bots_config = this._options.aws_bots_config;
    var bots_config = this._options.bots;

    if (!Object.keys(bots_config).length && aws_bots_config) {
      // Convert aws_bots_config to bots object
      if (Array.isArray(aws_bots_config)) {
        aws_bots_config.forEach(function (bot) {
          _this._options.bots[bot.name] = bot;
        });
      }
    } // Check if AWSLex provider is already on pluggables


    if (!this._pluggables.AWSLexProvider && bots_config && Object.keys(bots_config).map(function (key) {
      return bots_config[key];
    }).find(function (bot) {
      return !bot.providerName || bot.providerName === 'AWSLexProvider';
    })) {
      this._pluggables.AWSLexProvider = new _Providers__WEBPACK_IMPORTED_MODULE_1__.AWSLexProvider();
    }

    Object.keys(this._pluggables).map(function (key) {
      _this._pluggables[key].configure(_this._options.bots);
    });
    return this._options;
  };

  InteractionsClass.prototype.addPluggable = function (pluggable) {
    if (pluggable && pluggable.getCategory() === 'Interactions') {
      if (!this._pluggables[pluggable.getProviderName()]) {
        pluggable.configure(this._options.bots);
        this._pluggables[pluggable.getProviderName()] = pluggable;
        return;
      } else {
        throw new Error('Bot ' + pluggable.getProviderName() + ' already plugged');
      }
    }
  };

  InteractionsClass.prototype.send = function (botname, message) {
    return __awaiter(this, void 0, void 0, function () {
      var botProvider;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._options.bots || !this._options.bots[botname]) {
              throw new Error('Bot ' + botname + ' does not exist');
            }

            botProvider = this._options.bots[botname].providerName || 'AWSLexProvider';

            if (!this._pluggables[botProvider]) {
              throw new Error('Bot ' + botProvider + ' does not have valid pluggin did you try addPluggable first?');
            }

            return [4
            /*yield*/
            , this._pluggables[botProvider].sendMessage(botname, message)];

          case 1:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  InteractionsClass.prototype.onComplete = function (botname, callback) {
    if (!this._options.bots || !this._options.bots[botname]) {
      throw new Error('Bot ' + botname + ' does not exist');
    }

    var botProvider = this._options.bots[botname].providerName || 'AWSLexProvider';

    if (!this._pluggables[botProvider]) {
      throw new Error('Bot ' + botProvider + ' does not have valid pluggin did you try addPluggable first?');
    }

    this._pluggables[botProvider].onComplete(botname, callback);
  };

  return InteractionsClass;
}();


var Interactions = new InteractionsClass(null);
_aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__.Amplify.register(Interactions); //# sourceMappingURL=Interactions.js.map

/***/ }),

/***/ 35470:
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/interactions/lib-esm/Providers/AWSLexProvider.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AWSLexProvider": function() { return /* binding */ AWSLexProvider; }
/* harmony export */ });
/* harmony import */ var _InteractionsProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InteractionsProvider */ 62790);
/* harmony import */ var _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service */ 20588);
/* harmony import */ var _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service */ 16375);
/* harmony import */ var _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/client-lex-runtime-service */ 85896);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ 3388);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/core */ 27017);
/* harmony import */ var _AWSLexProviderHelper_convert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AWSLexProviderHelper/convert */ 77170);
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger('AWSLexProvider');

var AWSLexProvider =
/** @class */
function (_super) {
  __extends(AWSLexProvider, _super);

  function AWSLexProvider(options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this, options) || this;

    _this._botsCompleteCallback = {};
    return _this;
  }

  AWSLexProvider.prototype.getProviderName = function () {
    return 'AWSLexProvider';
  };

  AWSLexProvider.prototype.reportBotStatus = function (data, botname) {
    var _this = this; // Check if state is fulfilled to resolve onFullfilment promise


    logger.debug('postContent state', data.dialogState);

    if (data.dialogState === 'ReadyForFulfillment' || data.dialogState === 'Fulfilled') {
      if (typeof this._botsCompleteCallback[botname] === 'function') {
        setTimeout(function () {
          return _this._botsCompleteCallback[botname](null, {
            slots: data.slots
          });
        }, 0);
      }

      if (this._config && typeof this._config[botname].onComplete === 'function') {
        setTimeout(function () {
          return _this._config[botname].onComplete(null, {
            slots: data.slots
          });
        }, 0);
      }
    }

    if (data.dialogState === 'Failed') {
      if (typeof this._botsCompleteCallback[botname] === 'function') {
        setTimeout(function () {
          return _this._botsCompleteCallback[botname]('Bot conversation failed');
        }, 0);
      }

      if (this._config && typeof this._config[botname].onComplete === 'function') {
        setTimeout(function () {
          return _this._config[botname].onComplete('Bot conversation failed');
        }, 0);
      }
    }
  };

  AWSLexProvider.prototype.sendMessage = function (botname, message) {
    return __awaiter(this, void 0, void 0, function () {
      var credentials, params, postTextCommand, data, err_1, content, messageType, postContentCommand, data, audioArray, err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._config[botname]) {
              return [2
              /*return*/
              , Promise.reject('Bot ' + botname + ' does not exist')];
            }

            return [4
            /*yield*/
            , _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__.Credentials.get()];

          case 1:
            credentials = _a.sent();

            if (!credentials) {
              return [2
              /*return*/
              , Promise.reject('No credentials')];
            }

            this.lexRuntimeServiceClient = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_2__.LexRuntimeServiceClient({
              region: this._config[botname].region,
              credentials: credentials,
              customUserAgent: (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__.getAmplifyUserAgent)()
            });
            if (!(typeof message === 'string')) return [3
            /*break*/
            , 6];
            params = {
              botAlias: this._config[botname].alias,
              botName: botname,
              inputText: message,
              userId: credentials.identityId
            };
            logger.debug('postText to lex', message);
            _a.label = 2;

          case 2:
            _a.trys.push([2, 4,, 5]);

            postTextCommand = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_4__.PostTextCommand(params);
            return [4
            /*yield*/
            , this.lexRuntimeServiceClient.send(postTextCommand)];

          case 3:
            data = _a.sent();
            this.reportBotStatus(data, botname);
            return [2
            /*return*/
            , data];

          case 4:
            err_1 = _a.sent();
            return [2
            /*return*/
            , Promise.reject(err_1)];

          case 5:
            return [3
            /*break*/
            , 11];

          case 6:
            content = message.content, messageType = message.options.messageType;

            if (messageType === 'voice') {
              params = {
                botAlias: this._config[botname].alias,
                botName: botname,
                contentType: 'audio/x-l16; sample-rate=16000',
                inputStream: content,
                userId: credentials.identityId,
                accept: 'audio/mpeg'
              };
            } else {
              params = {
                botAlias: this._config[botname].alias,
                botName: botname,
                contentType: 'text/plain; charset=utf-8',
                inputStream: content,
                userId: credentials.identityId,
                accept: 'audio/mpeg'
              };
            }

            logger.debug('postContent to lex', message);
            _a.label = 7;

          case 7:
            _a.trys.push([7, 10,, 11]);

            postContentCommand = new _aws_sdk_client_lex_runtime_service__WEBPACK_IMPORTED_MODULE_5__.PostContentCommand(params);
            return [4
            /*yield*/
            , this.lexRuntimeServiceClient.send(postContentCommand)];

          case 8:
            data = _a.sent();
            return [4
            /*yield*/
            , (0,_AWSLexProviderHelper_convert__WEBPACK_IMPORTED_MODULE_6__.convert)(data.audioStream)];

          case 9:
            audioArray = _a.sent();
            this.reportBotStatus(data, botname);
            return [2
            /*return*/
            , __assign(__assign({}, data), {
              audioStream: audioArray
            })];

          case 10:
            err_2 = _a.sent();
            return [2
            /*return*/
            , Promise.reject(err_2)];

          case 11:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AWSLexProvider.prototype.onComplete = function (botname, callback) {
    if (!this._config[botname]) {
      throw new ErrorEvent('Bot ' + botname + ' does not exist');
    }

    this._botsCompleteCallback[botname] = callback;
  };

  return AWSLexProvider;
}(_InteractionsProvider__WEBPACK_IMPORTED_MODULE_7__.AbstractInteractionsProvider);

 //# sourceMappingURL=AWSLexProvider.js.map

/***/ }),

/***/ 77170:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/interactions/lib-esm/Providers/AWSLexProviderHelper/convert.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convert": function() { return /* binding */ convert; }
/* harmony export */ });
var convert = function convert(stream) {
  if (stream instanceof Blob || stream instanceof ReadableStream) {
    return new Response(stream).arrayBuffer().then(function (buffer) {
      return new Uint8Array(buffer);
    });
  } else {
    throw new Error('Readable is not supported.');
  }
}; //# sourceMappingURL=convert.js.map

/***/ }),

/***/ 62790:
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/interactions/lib-esm/Providers/InteractionsProvider.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractInteractionsProvider": function() { return /* binding */ AbstractInteractionsProvider; }
/* harmony export */ });
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/*
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__.ConsoleLogger('AbstractInteractionsProvider');

var AbstractInteractionsProvider =
/** @class */
function () {
  function AbstractInteractionsProvider(options) {
    if (options === void 0) {
      options = {};
    }

    this._config = options;
  }

  AbstractInteractionsProvider.prototype.configure = function (config) {
    if (config === void 0) {
      config = {};
    }

    this._config = __assign(__assign({}, this._config), config);
    logger.debug("configure " + this.getProviderName(), this._config);
    return this.options;
  };

  AbstractInteractionsProvider.prototype.getCategory = function () {
    return 'Interactions';
  };

  Object.defineProperty(AbstractInteractionsProvider.prototype, "options", {
    get: function get() {
      return __assign({}, this._config);
    },
    enumerable: true,
    configurable: true
  });
  return AbstractInteractionsProvider;
}();

 //# sourceMappingURL=InteractionsProvider.js.map

/***/ }),

/***/ 84080:
/*!***********************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-chatbot.entry.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_chatbot": function() { return /* binding */ AmplifyChatbot; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/core */ 3531);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @aws-amplify/interactions */ 96918);










 // AudioRecorder settings

var RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
var DEFAULT_EXPORT_SAMPLE_RATE = 16000;
var FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)

var FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data

var FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data

var FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame

/**
 * Merges multiple buffers into one.
 */

var mergeBuffers = function mergeBuffers(bufferArray, recLength) {
  var result = new Float32Array(recLength);
  var offset = 0;

  for (var i = 0; i < bufferArray.length; i++) {
    result.set(bufferArray[i], offset);
    offset += bufferArray[i].length;
  }

  return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */


var downsampleBuffer = function downsampleBuffer(buffer, recordSampleRate, exportSampleRate) {
  if (exportSampleRate === recordSampleRate) {
    return buffer;
  }

  var sampleRateRatio = recordSampleRate / exportSampleRate;
  var newLength = Math.round(buffer.length / sampleRateRatio);
  var result = new Float32Array(newLength);
  var offsetResult = 0;
  var offsetBuffer = 0;

  while (offsetResult < result.length) {
    var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
    var accum = 0,
        count = 0;

    for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
      accum += buffer[i];
      count++;
    }

    result[offsetResult] = accum / count;
    offsetResult++;
    offsetBuffer = nextOffsetBuffer;
  }

  return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */


var floatTo16BitPCM = function floatTo16BitPCM(output, offset, input) {
  var byteOffset = offset;

  for (var i = 0; i < input.length; i++, byteOffset += 2) {
    var s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
};
/**
 * Write given strings in big-endian order.
 */


var writeString = function writeString(view, offset, string) {
  for (var i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};
/**
 * Encodes raw pcm audio into a wav file.
 */


var encodeWAV = function encodeWAV(samples, exportSampleRate) {
  /**
   * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
   */
  var audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.

  var fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.

  var dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.

  var totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
  // create DataView object to write byte values into

  var buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.

  var view = new DataView(buffer);
  /**
   * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
   */
  // RIFF header

  writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"

  view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.

  writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
  // fmt subchunk

  writeString(view, 12, 'fmt '); //chunkdId 'fmt '

  view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.

  view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.

  view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.

  view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.

  view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.

  view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.

  view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
  // data subchunk

  writeString(view, 36, 'data'); // write the chunkId 'data'

  view.setUint32(40, audioSize, true); // Audio byte size

  floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.

  return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */


var exportBuffer = function exportBuffer(recBuffer, recLength, recordSampleRate, exportSampleRate) {
  var mergedBuffers = mergeBuffers(recBuffer, recLength);
  var downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
  var encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
  var audioBlob = new Blob([encodedWav], {
    type: RECORDER_EXPORT_MIME_TYPE
  });
  return audioBlob;
};

var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_8__.ConsoleLogger('AudioRecorder');

var AudioRecorder = /*#__PURE__*/function () {
  function AudioRecorder(options) {
    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AudioRecorder);

    // input mic stream is stored in a buffer
    this.streamBuffer = [];
    this.streamBufferLength = 0;
    this.recording = false;
    this.options = options;
  }
  /**
   * This must be called first to enable audio context and request microphone access.
   * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
   */


  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AudioRecorder, [{
    key: "init",
    value: function () {
      var _init = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this = this;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.browserOrNode)().isBrowser) {
                  _context.next = 7;
                  break;
                }

                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                this.audioContext = new AudioContext();
                _context.next = 5;
                return navigator.mediaDevices.getUserMedia({
                  audio: true
                }).then(function (stream) {
                  _this.audioSupported = true;

                  _this.setupAudioNodes(stream);
                }).catch(function () {
                  _this.audioSupported = false;
                  return Promise.reject('Audio is not supported');
                });

              case 5:
                _context.next = 9;
                break;

              case 7:
                this.audioSupported = false;
                return _context.abrupt("return", Promise.reject('Audio is not supported'));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Setup audio nodes after successful `init`.
     */

  }, {
    key: "setupAudioNodes",
    value: function () {
      var _setupAudioNodes = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(stream) {
        var _this2 = this;

        var sourceNode, processorNode, analyserNode;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.audioContext.resume();

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                logger.error(_context2.t0);

              case 8:
                sourceNode = this.audioContext.createMediaStreamSource(stream);
                processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);

                processorNode.onaudioprocess = function (audioProcessingEvent) {
                  if (!_this2.recording) return;
                  var stream = audioProcessingEvent.inputBuffer.getChannelData(0);

                  _this2.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream


                  _this2.streamBufferLength += stream.length;

                  _this2.analyse();
                };

                analyserNode = this.audioContext.createAnalyser();
                analyserNode.minDecibels = FFT_MIN_DECIBELS;
                analyserNode.maxDecibels = FFT_MAX_DECIBELS;
                analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
                sourceNode.connect(analyserNode);
                analyserNode.connect(processorNode);
                processorNode.connect(sourceNode.context.destination);
                this.analyserNode = analyserNode;

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function setupAudioNodes(_x) {
        return _setupAudioNodes.apply(this, arguments);
      }

      return setupAudioNodes;
    }()
    /**
     * Start recording audio and listen for silence.
     *
     * @param onSilence {SilenceHandler} - called whenever silence is detected
     * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
     */

  }, {
    key: "startRecording",
    value: function () {
      var _startRecording = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(onSilence, visualizer) {
        var context;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.recording || !this.audioSupported)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                this.onSilence = onSilence || function () {};

                this.visualizer = visualizer || function () {};

                context = this.audioContext;
                _context3.prev = 5;
                _context3.next = 8;
                return context.resume();

              case 8:
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](5);
                logger.error(_context3.t0);

              case 13:
                this.start = Date.now();
                this.recording = true;

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 10]]);
      }));

      function startRecording(_x2, _x3) {
        return _startRecording.apply(this, arguments);
      }

      return startRecording;
    }()
    /**
     * Pause recording
     */

  }, {
    key: "stopRecording",
    value: function stopRecording() {
      if (!this.audioSupported) return;
      this.recording = false;
    }
    /**
     * Pause recording and clear audio buffer
     */

  }, {
    key: "clear",
    value: function clear() {
      this.stopRecording();
      this.streamBufferLength = 0;
      this.streamBuffer = [];
    }
    /**
     * Plays given audioStream with audioContext
     *
     * @param buffer {Uint8Array} - audioStream to be played
     */

  }, {
    key: "play",
    value: function play(buffer) {
      var _this3 = this;

      if (!buffer || !this.audioSupported) return;
      var myBlob = new Blob([buffer]);
      return new Promise(function (res, rej) {
        var fileReader = new FileReader();

        fileReader.onload = function () {
          if (_this3.playbackSource) _this3.playbackSource.disconnect(); // disconnect previous playback source

          _this3.playbackSource = _this3.audioContext.createBufferSource();

          var successCallback = function successCallback(buf) {
            _this3.playbackSource.buffer = buf;

            _this3.playbackSource.connect(_this3.audioContext.destination);

            _this3.playbackSource.onended = function () {
              return res();
            };

            _this3.playbackSource.start(0);
          };

          var errorCallback = function errorCallback(err) {
            return rej(err);
          };

          _this3.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
        };

        fileReader.onerror = function () {
          return rej();
        };

        fileReader.readAsArrayBuffer(myBlob);
      });
    }
    /**
     * Stops playing audio if there's a playback source connected.
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.playbackSource) {
        this.playbackSource.stop();
      }
    }
    /**
     * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
     */

  }, {
    key: "analyse",
    value: function analyse() {
      if (!this.audioSupported) return;
      var analyser = this.analyserNode;
      analyser.fftSize = FFT_SIZE;
      var bufferLength = analyser.fftSize;
      var dataArray = new Uint8Array(bufferLength);
      var amplitude = this.options.amplitude;
      var time = this.options.time;
      analyser.getByteTimeDomainData(dataArray);
      this.visualizer(dataArray, bufferLength);

      for (var i = 0; i < bufferLength; i++) {
        // Normalize between -1 and 1.
        var curr_value_time = dataArray[i] / 128 - 1.0;

        if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
          this.start = Date.now();
        }
      }

      var newtime = Date.now();
      var elapsedTime = newtime - this.start;

      if (elapsedTime > time) {
        this.onSilence();
      }
    }
    /**
     * Encodes recorded buffer to a wav file and exports it to a blob.
     *
     * @param exportSampleRate {number} - desired sample rate of the exported buffer
     */

  }, {
    key: "exportWAV",
    value: function () {
      var _exportWAV = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
        var exportSampleRate,
            recordSampleRate,
            blob,
            _args4 = arguments;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                exportSampleRate = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : DEFAULT_EXPORT_SAMPLE_RATE;

                if (this.audioSupported) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                recordSampleRate = this.audioContext.sampleRate;
                blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
                this.clear();
                return _context4.abrupt("return", blob);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function exportWAV() {
        return _exportWAV.apply(this, arguments);
      }

      return exportWAV;
    }()
  }]);

  return AudioRecorder;
}();

var visualize = function visualize(dataArray, bufferLength, canvas) {
  if (!canvas) return;
  if (!(0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_9__.browserOrNode)().isBrowser) throw new Error('Visualization is not supported on non-browsers.');

  var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
      width = _canvas$getBoundingCl.width,
      height = _canvas$getBoundingCl.height; // need to update the default canvas width and height


  canvas.width = width;
  canvas.height = height;
  var canvasCtx = canvas.getContext('2d');
  canvasCtx.fillStyle = 'white';
  canvasCtx.clearRect(0, 0, width, height);

  var draw = function draw() {
    canvasCtx.fillRect(0, 0, width, height);
    canvasCtx.lineWidth = 1;
    var color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
    canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable

    canvasCtx.beginPath();
    var sliceWidth = width * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength || i % 3 === 0; i++) {
      var value = dataArray[i] / 128.0;
      var y = value * height / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }; // Register our draw function with requestAnimationFrame.


  requestAnimationFrame(draw);
};

var amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}"; // enum for possible bot states

var ChatState;

(function (ChatState) {
  ChatState[ChatState["Initial"] = 0] = "Initial";
  ChatState[ChatState["Listening"] = 1] = "Listening";
  ChatState[ChatState["SendingText"] = 2] = "SendingText";
  ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
  ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {})); // Message types


var MessageFrom;

(function (MessageFrom) {
  MessageFrom["Bot"] = "bot";
  MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {})); // Error types


var ChatErrorType;

(function (ChatErrorType) {
  ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
  ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));

var AmplifyChatbot = /*#__PURE__*/function () {
  function AmplifyChatbot(hostRef) {
    var _this4 = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyChatbot);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** Clear messages when conversation finishes */

    this.clearOnComplete = false;
    /** Continue listening to users after they send the message */

    this.conversationModeOn = false;
    /** Text placed in the top header */

    this.botTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.CHATBOT_TITLE;
    /** Whether voice chat is enabled */

    this.voiceEnabled = false;
    /** Whether text chat is enabled */

    this.textEnabled = true;
    /** Amount of silence (in ms) to wait for */

    this.silenceTime = 1500;
    /** Noise threshold between -1 and 1. Anything below is considered a silence. */

    this.silenceThreshold = 0.2;
    /** Messages in current session */

    this.messages = [];
    /** Text input box value  */

    this.text = '';
    /** Current app state */

    this.chatState = ChatState.Initial;
    /**
     * Rendering methods
     */

    this.messageJSX = function (messages) {
      var messageList = messages.map(function (message) {
        return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
          class: "bubble ".concat(message.from)
        }, message.content);
      });

      if (_this4.chatState === ChatState.SendingText || _this4.chatState === ChatState.SendingVoice) {
        // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
        var client = _this4.chatState === ChatState.SendingText ? MessageFrom.Bot : MessageFrom.User;
        messageList.push((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
          class: "bubble ".concat(client)
        }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
          class: "dot-flashing ".concat(client)
        }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", {
          class: "dot left"
        }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", {
          class: "dot middle"
        }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", {
          class: "dot right"
        }))));
      }

      return messageList;
    };

    this.chatCompleted = (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.c)(this, "chatCompleted", 7);
  } // Occurs when user presses enter in input box


  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyChatbot, [{
    key: "submitHandler",
    value: function submitHandler(_event) {
      this.sendTextMessage();
    }
    /**
     * Lifecycle functions
     */

  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (!_aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__.Interactions || typeof _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__.Interactions.onComplete !== 'function') {
        throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_7__.d);
      }

      this.validateProps();
    }
  }, {
    key: "componentDidRender",
    value: function componentDidRender() {
      // scroll to the bottom if necessary
      var body = this.element.shadowRoot.querySelector('.body');
      body.scrollTop = body.scrollHeight;
    }
  }, {
    key: "validateProps",
    value: function validateProps() {
      var _this5 = this;

      if (!this.voiceEnabled && !this.textEnabled) {
        this.setError(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
        return;
      } else if (!this.botName) {
        this.setError(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
        return;
      }

      if (this.welcomeMessage) this.appendToChat(this.welcomeMessage, MessageFrom.Bot); // Initialize AudioRecorder if voice is enabled

      if (this.voiceEnabled) {
        this.audioRecorder = new AudioRecorder({
          time: this.silenceTime,
          amplitude: this.silenceThreshold
        });
        this.audioRecorder.init().catch(function (err) {
          _this5.setError(err, ChatErrorType.Recoverable);
        });
      } // Callback function to be called after chat is completed


      var onComplete = function onComplete(err, data) {
        _this5.chatCompleted.emit({
          data: data,
          err: err
        });

        if (_this5.clearOnComplete) {
          _this5.reset();
        } else {
          _this5.chatState = ChatState.Initial;
        }
      };

      try {
        _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__.Interactions.onComplete(this.botName, onComplete);
      } catch (err) {
        this.setError(err, ChatErrorType.Unrecoverable);
      }
    }
    /**
     * Handlers
     */

  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.sendTextMessage();
    }
  }, {
    key: "handleMicButton",
    value: function handleMicButton() {
      var _this6 = this;

      if (this.chatState !== ChatState.Initial) return;
      this.audioRecorder.stop();
      this.chatState = ChatState.Listening;
      this.audioRecorder.startRecording(function () {
        return _this6.handleSilence();
      }, function (data, length) {
        return _this6.visualizer(data, length);
      });
    }
  }, {
    key: "handleSilence",
    value: function handleSilence() {
      var _this7 = this;

      this.chatState = ChatState.SendingVoice;
      this.audioRecorder.stopRecording();
      this.audioRecorder.exportWAV().then(function (blob) {
        _this7.sendVoiceMessage(blob);
      });
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(event) {
      var target = event.target;
      this.text = target.value;
    }
  }, {
    key: "handleCancelButton",
    value: function handleCancelButton() {
      this.audioRecorder.clear();
      this.chatState = ChatState.Initial;
    }
  }, {
    key: "handleToastClose",
    value: function handleToastClose(errorType) {
      this.error = undefined; // clear error
      // if error is recoverable, reset the app state to initial

      if (errorType === ChatErrorType.Recoverable) {
        this.chatState = ChatState.Initial;
      }
    }
    /**
     * Visualization
     */

  }, {
    key: "visualizer",
    value: function visualizer(dataArray, bufferLength) {
      var canvas = this.element.shadowRoot.querySelector('canvas');
      visualize(dataArray, bufferLength, canvas);
    }
    /**
     * Interactions helpers
     */

  }, {
    key: "sendTextMessage",
    value: function () {
      var _sendTextMessage = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
        var text, response;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.text.length === 0 || this.chatState !== ChatState.Initial)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                text = this.text;
                this.text = '';
                this.appendToChat(text, MessageFrom.User);
                this.chatState = ChatState.SendingText;
                _context5.prev = 6;
                _context5.next = 9;
                return _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__.Interactions.send(this.botName, text);

              case 9:
                response = _context5.sent;
                _context5.next = 16;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](6);
                this.setError(_context5.t0, ChatErrorType.Recoverable);
                return _context5.abrupt("return");

              case 16:
                if (response.message) {
                  this.appendToChat(response.message, MessageFrom.Bot);
                }

                this.chatState = ChatState.Initial;

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[6, 12]]);
      }));

      function sendTextMessage() {
        return _sendTextMessage.apply(this, arguments);
      }

      return sendTextMessage;
    }()
  }, {
    key: "sendVoiceMessage",
    value: function () {
      var _sendVoiceMessage = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6(audioInput) {
        var _this8 = this;

        var interactionsMessage, response, dialogState;
        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                interactionsMessage = {
                  content: audioInput,
                  options: {
                    messageType: 'voice'
                  }
                };
                _context6.prev = 1;
                _context6.next = 4;
                return _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_10__.Interactions.send(this.botName, interactionsMessage);

              case 4:
                response = _context6.sent;
                _context6.next = 11;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](1);
                this.setError(_context6.t0, ChatErrorType.Recoverable);
                return _context6.abrupt("return");

              case 11:
                this.chatState = ChatState.Initial;
                dialogState = response.dialogState;
                if (response.inputTranscript) this.appendToChat(response.inputTranscript, MessageFrom.User);
                this.appendToChat(response.message, MessageFrom.Bot);
                _context6.next = 17;
                return this.audioRecorder.play(response.audioStream).then(function () {
                  // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
                  if (_this8.conversationModeOn && dialogState !== 'Fulfilled' && dialogState !== 'Failed' && _this8.chatState === ChatState.Initial) {
                    _this8.handleMicButton();
                  }
                }).catch(function (err) {
                  return _this8.setError(err, ChatErrorType.Recoverable);
                });

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 7]]);
      }));

      function sendVoiceMessage(_x4) {
        return _sendVoiceMessage.apply(this, arguments);
      }

      return sendVoiceMessage;
    }()
  }, {
    key: "appendToChat",
    value: function appendToChat(content, from) {
      this.messages = [].concat((0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.messages), [{
        content: content,
        from: from
      }]);
    }
    /**
     * State control methods
     */

  }, {
    key: "setError",
    value: function setError(error, errorType) {
      var message = typeof error === 'string' ? error : error.message;
      this.chatState = ChatState.Error;
      this.error = {
        message: message,
        errorType: errorType
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.chatState = ChatState.Initial;
      this.text = '';
      this.error = undefined;
      this.messages = [];
      if (this.welcomeMessage) this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
      this.audioRecorder && this.audioRecorder.clear();
    }
  }, {
    key: "listeningFooterJSX",
    value: function listeningFooterJSX() {
      var _this9 = this;

      var visualization = (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("canvas", {
        height: "50"
      });
      var cancelButton = (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        "data-test": "chatbot-cancel-button",
        handleButtonClick: function handleButtonClick() {
          return _this9.handleCancelButton();
        },
        class: "icon-button",
        variant: "icon",
        icon: "ban"
      });
      return [visualization, cancelButton];
    }
  }, {
    key: "footerJSX",
    value: function footerJSX() {
      var _this10 = this;

      if (this.chatState === ChatState.Listening) return this.listeningFooterJSX();
      var inputPlaceholder = this.textEnabled ? _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.TEXT_INPUT_PLACEHOLDER : _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_6__.T.VOICE_INPUT_PLACEHOLDER;
      var textInput = (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-input", {
        placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(inputPlaceholder),
        description: "text",
        handleInputChange: function handleInputChange(evt) {
          return _this10.handleTextChange(evt);
        },
        value: this.text,
        disabled: this.chatState === ChatState.Error || !this.textEnabled
      });
      var micButton = this.voiceEnabled && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        "data-test": "chatbot-mic-button",
        handleButtonClick: function handleButtonClick() {
          return _this10.handleMicButton();
        },
        class: "icon-button",
        variant: "icon",
        icon: "microphone",
        disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial
      });
      var sendButton = this.textEnabled && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-button", {
        "data-test": "chatbot-send-button",
        class: "icon-button",
        variant: "icon",
        icon: "send",
        handleButtonClick: function handleButtonClick() {
          return _this10.sendTextMessage();
        },
        disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial
      });
      return [textInput, micButton, sendButton];
    }
  }, {
    key: "errorToast",
    value: function errorToast() {
      var _this11 = this;

      if (!this.error) return;
      var _this$error = this.error,
          message = _this$error.message,
          errorType = _this$error.errorType;
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-toast", {
        message: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(message),
        handleClose: function handleClose() {
          return _this11.handleToastClose(errorType);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.H, null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "amplify-chatbot"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("slot", {
        name: "header"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "header",
        "data-test": "chatbot-header"
      }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.I18n.get(this.botTitle))), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "body",
        "data-test": "chatbot-body"
      }, this.messageJSX(this.messages)), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("form", {
        onSubmit: function onSubmit(e) {
          return _this12.handleSubmit(e);
        }
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "footer",
        "data-test": "chatbot-footer"
      }, this.footerJSX())), this.errorToast()));
    }
  }, {
    key: "element",
    get: function get() {
      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.g)(this);
    }
  }]);

  return AmplifyChatbot;
}();

AmplifyChatbot.style = amplifyChatbotCss;


/***/ }),

/***/ 20588:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/LexRuntimeServiceClient.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LexRuntimeServiceClient": function() { return /* binding */ LexRuntimeServiceClient; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _runtimeConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runtimeConfig */ 78538);
/* harmony import */ var _aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/config-resolver */ 1170);
/* harmony import */ var _aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/middleware-content-length */ 24948);
/* harmony import */ var _aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/middleware-host-header */ 36736);
/* harmony import */ var _aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-logger */ 17078);
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ 63458);
/* harmony import */ var _aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/middleware-signing */ 45246);
/* harmony import */ var _aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/middleware-user-agent */ 50514);
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/smithy-client */ 85127);










/**
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint provides a set of
 *       operations (API). Your conversational bot uses the runtime API to understand user utterances
 *       (user input text or voice). For example, suppose a user says "I want pizza", your bot sends
 *       this input to Amazon Lex using the runtime API. Amazon Lex recognizes that the user request is
 *       for the OrderPizza intent (one of the intents defined in the bot). Then Amazon Lex engages in
 *       user conversation on behalf of the bot to elicit required information (slot values, such as
 *       pizza size and crust type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your Amazon Lex bot. For
 *       a list of build-time operations, see the build-time API, . </p>
 */

var LexRuntimeServiceClient =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__extends)(LexRuntimeServiceClient, _super);

  function LexRuntimeServiceClient(configuration) {
    var _this = this;

    var _config_0 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, _runtimeConfig__WEBPACK_IMPORTED_MODULE_9__.ClientDefaultValues), configuration);

    var _config_1 = (0,_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveRegionConfig)(_config_0);

    var _config_2 = (0,_aws_sdk_config_resolver__WEBPACK_IMPORTED_MODULE_0__.resolveEndpointsConfig)(_config_1);

    var _config_3 = (0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_5__.resolveAwsAuthConfig)(_config_2);

    var _config_4 = (0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_4__.resolveRetryConfig)(_config_3);

    var _config_5 = (0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_2__.resolveHostHeaderConfig)(_config_4);

    var _config_6 = (0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_6__.resolveUserAgentConfig)(_config_5);

    _this = _super.call(this, _config_6) || this;
    _this.config = _config_6;

    _this.middlewareStack.use((0,_aws_sdk_middleware_signing__WEBPACK_IMPORTED_MODULE_5__.getAwsAuthPlugin)(_this.config));

    _this.middlewareStack.use((0,_aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_4__.getRetryPlugin)(_this.config));

    _this.middlewareStack.use((0,_aws_sdk_middleware_content_length__WEBPACK_IMPORTED_MODULE_1__.getContentLengthPlugin)(_this.config));

    _this.middlewareStack.use((0,_aws_sdk_middleware_host_header__WEBPACK_IMPORTED_MODULE_2__.getHostHeaderPlugin)(_this.config));

    _this.middlewareStack.use((0,_aws_sdk_middleware_logger__WEBPACK_IMPORTED_MODULE_3__.getLoggerPlugin)(_this.config));

    _this.middlewareStack.use((0,_aws_sdk_middleware_user_agent__WEBPACK_IMPORTED_MODULE_6__.getUserAgentPlugin)(_this.config));

    return _this;
  }

  LexRuntimeServiceClient.prototype.destroy = function () {
    _super.prototype.destroy.call(this);
  };

  return LexRuntimeServiceClient;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_7__.Client);

 //# sourceMappingURL=LexRuntimeServiceClient.js.map

/***/ }),

/***/ 85896:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostContentCommand.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostContentCommand": function() { return /* binding */ PostContentCommand; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ 60035);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ 40183);
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ 28969);
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ 85127);





/**
 * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio
 *       requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model
 *       that it built for the bot. </p>
 *          <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use
 *       8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p>
 *          <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following
 *       example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message
 *           eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you
 *           like?". </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex might return a
 *           response with a message to get user confirmation: "Order the pizza?". </p>
 *             </li>
 *             <li>
 *                <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a
 *           conclusion statement: "Thank you, your cheese pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *          <p> Not all Amazon Lex messages require a response from the user. For example, conclusion
 *       statements do not require a response. Some messages require only a yes or no response. In
 *       addition to the <code>message</code>, Amazon Lex provides additional context about the message in
 *       the response that you can use to enhance client behavior, such as displaying the appropriate
 *       client user interface. Consider the following examples: </p>
 *          <ul>
 *             <li>
 *                <p> If the message is to elicit slot data, Amazon Lex returns the following context
 *           information: </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-intent-name</code> header set to the intent name in the current
 *               context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the
 *                 <code>message</code> is eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent
 *               with their current values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code>
 *           header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code>
 *           header is omitted. </p>
 *             </li>
 *             <li>
 *                <p> If the message is a clarification prompt configured for the intent, indicating that
 *           the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to
 *             <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted.
 *         </p>
 *             </li>
 *          </ul>
 *          <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
 */

var PostContentCommand =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PostContentCommand, _super); // Start section: command_properties
  // End section: command_properties


  function PostContentCommand(input) {
    var _this = // Start section: command_constructor
    _super.call(this) || this;

    _this.input = input;
    return _this; // End section: command_constructor
  }
  /**
   * @internal
   */


  PostContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "LexRuntimeServiceClient";
    var commandName = "PostContentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PostContentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PostContentResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };

  PostContentCommand.prototype.serialize = function (input, context) {
    return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.serializeAws_restJson1PostContentCommand)(input, context);
  };

  PostContentCommand.prototype.deserialize = function (output, context) {
    return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.deserializeAws_restJson1PostContentCommand)(output, context);
  };

  return PostContentCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.Command);

 //# sourceMappingURL=PostContentCommand.js.map

/***/ }),

/***/ 16375:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/commands/PostTextCommand.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTextCommand": function() { return /* binding */ PostTextCommand; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _models_models_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models_0 */ 60035);
/* harmony import */ var _protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/Aws_restJson1 */ 40183);
/* harmony import */ var _aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/middleware-serde */ 28969);
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ 85127);





/**
 * <p>Sends user input to Amazon Lex. Client applications can use this API to send requests to
 *       Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it
 *       built for the bot. </p>
 *          <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an
 *       optional <code>responseCard</code> to display. Consider the following example messages: </p>
 *          <ul>
 *             <li>
 *                <p> For a user input "I would like a pizza", Amazon Lex might return a response with a
 *           message eliciting slot data (for example, PizzaSize): "What size pizza would you like?"
 *         </p>
 *             </li>
 *             <li>
 *                <p> After the user provides all of the pizza order information, Amazon Lex might return a
 *           response with a message to obtain user confirmation "Proceed with the pizza order?".
 *         </p>
 *             </li>
 *             <li>
 *                <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return
 *           a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p>
 *             </li>
 *          </ul>
 *
 *          <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement
 *       does not require a response. Some messages require only a "yes" or "no" user response. In
 *       addition to the <code>message</code>, Amazon Lex provides additional context about the message
 *       in the response that you might use to enhance client behavior, for example, to display the
 *       appropriate client user interface. These are the <code>slotToElicit</code>,
 *         <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the
 *       response. Consider the following examples: </p>
 *
 *          <ul>
 *             <li>
 *                <p>If the message is to elicit slot data, Amazon Lex returns the following context
 *           information:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>dialogState</code> set to ElicitSlot </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>intentName</code> set to the intent name in the current context </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slotToElicit</code> set to the slot name for which the <code>message</code> is
 *               eliciting information </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>slots</code> set to a map of slots, configured for the intent, with currently
 *               known values </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to
 *           ConfirmIntent and <code>SlotToElicit</code> is set to null. </p>
 *             </li>
 *             <li>
 *                <p>If the message is a clarification prompt (configured for the intent) that indicates
 *           that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent
 *           and <code>slotToElicit</code> is set to null. </p>
 *             </li>
 *          </ul>
 *
 *          <p> In addition, Amazon Lex also returns your application-specific
 *         <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
 */

var PostTextCommand =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PostTextCommand, _super); // Start section: command_properties
  // End section: command_properties


  function PostTextCommand(input) {
    var _this = // Start section: command_constructor
    _super.call(this) || this;

    _this.input = input;
    return _this; // End section: command_constructor
  }
  /**
   * @internal
   */


  PostTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use((0,_aws_sdk_middleware_serde__WEBPACK_IMPORTED_MODULE_0__.getSerdePlugin)(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "LexRuntimeServiceClient";
    var commandName = "PostTextCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PostTextRequest.filterSensitiveLog,
      outputFilterSensitiveLog: _models_models_0__WEBPACK_IMPORTED_MODULE_3__.PostTextResponse.filterSensitiveLog
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };

  PostTextCommand.prototype.serialize = function (input, context) {
    return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.serializeAws_restJson1PostTextCommand)(input, context);
  };

  PostTextCommand.prototype.deserialize = function (output, context) {
    return (0,_protocols_Aws_restJson1__WEBPACK_IMPORTED_MODULE_4__.deserializeAws_restJson1PostTextCommand)(output, context);
  };

  return PostTextCommand;
}(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.Command);

 //# sourceMappingURL=PostTextCommand.js.map

/***/ }),

/***/ 77757:
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/endpoints.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRegionInfoProvider": function() { return /* binding */ defaultRegionInfoProvider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
 // Partition default templates

var AWS_TEMPLATE = "runtime.lex.{region}.amazonaws.com";
var AWS_CN_TEMPLATE = "runtime.lex.{region}.amazonaws.com.cn";
var AWS_ISO_TEMPLATE = "runtime.lex.{region}.c2s.ic.gov";
var AWS_ISO_B_TEMPLATE = "runtime.lex.{region}.sc2s.sgov.gov";
var AWS_US_GOV_TEMPLATE = "runtime.lex.{region}.amazonaws.com"; // Partition regions

var AWS_REGIONS = new Set(["af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1", "eu-north-1", "eu-south-1", "eu-west-1", "eu-west-2", "eu-west-3", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"]);
var AWS_CN_REGIONS = new Set(["cn-north-1", "cn-northwest-1"]);
var AWS_ISO_REGIONS = new Set(["us-iso-east-1"]);
var AWS_ISO_B_REGIONS = new Set(["us-isob-east-1"]);
var AWS_US_GOV_REGIONS = new Set(["us-gov-east-1", "us-gov-west-1"]);
var defaultRegionInfoProvider = function defaultRegionInfoProvider(region, options) {
  var regionInfo = undefined;

  switch (region) {
    // First, try to match exact region names.
    case "ap-northeast-1":
      regionInfo = {
        hostname: "runtime.lex.ap-northeast-1.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "ap-southeast-1":
      regionInfo = {
        hostname: "runtime.lex.ap-southeast-1.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "ap-southeast-2":
      regionInfo = {
        hostname: "runtime.lex.ap-southeast-2.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "eu-central-1":
      regionInfo = {
        hostname: "runtime.lex.eu-central-1.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "eu-west-1":
      regionInfo = {
        hostname: "runtime.lex.eu-west-1.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "eu-west-2":
      regionInfo = {
        hostname: "runtime.lex.eu-west-2.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "us-east-1":
      regionInfo = {
        hostname: "runtime.lex.us-east-1.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;

    case "us-west-2":
      regionInfo = {
        hostname: "runtime.lex.us-west-2.amazonaws.com",
        partition: "aws",
        signingService: "lex"
      };
      break;
    // Next, try to match partition endpoints.

    default:
      if (AWS_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "lex"
        };
      }

      if (AWS_CN_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_CN_TEMPLATE.replace("{region}", region),
          partition: "aws-cn"
        };
      }

      if (AWS_ISO_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_TEMPLATE.replace("{region}", region),
          partition: "aws-iso"
        };
      }

      if (AWS_ISO_B_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_ISO_B_TEMPLATE.replace("{region}", region),
          partition: "aws-iso-b"
        };
      }

      if (AWS_US_GOV_REGIONS.has(region)) {
        regionInfo = {
          hostname: AWS_US_GOV_TEMPLATE.replace("{region}", region),
          partition: "aws-us-gov"
        };
      } // Finally, assume it's an AWS partition endpoint.


      if (regionInfo === undefined) {
        regionInfo = {
          hostname: AWS_TEMPLATE.replace("{region}", region),
          partition: "aws",
          signingService: "lex"
        };
      }

  }

  return Promise.resolve((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
    signingService: "lex"
  }, regionInfo));
}; //# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 60035:
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/models/models_0.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveContextTimeToLive": function() { return /* binding */ ActiveContextTimeToLive; },
/* harmony export */   "ActiveContext": function() { return /* binding */ ActiveContext; },
/* harmony export */   "BadRequestException": function() { return /* binding */ BadRequestException; },
/* harmony export */   "ConflictException": function() { return /* binding */ ConflictException; },
/* harmony export */   "DeleteSessionRequest": function() { return /* binding */ DeleteSessionRequest; },
/* harmony export */   "DeleteSessionResponse": function() { return /* binding */ DeleteSessionResponse; },
/* harmony export */   "InternalFailureException": function() { return /* binding */ InternalFailureException; },
/* harmony export */   "LimitExceededException": function() { return /* binding */ LimitExceededException; },
/* harmony export */   "NotFoundException": function() { return /* binding */ NotFoundException; },
/* harmony export */   "GetSessionRequest": function() { return /* binding */ GetSessionRequest; },
/* harmony export */   "FulfillmentState": function() { return /* binding */ FulfillmentState; },
/* harmony export */   "MessageFormatType": function() { return /* binding */ MessageFormatType; },
/* harmony export */   "DialogActionType": function() { return /* binding */ DialogActionType; },
/* harmony export */   "DialogAction": function() { return /* binding */ DialogAction; },
/* harmony export */   "ConfirmationStatus": function() { return /* binding */ ConfirmationStatus; },
/* harmony export */   "IntentSummary": function() { return /* binding */ IntentSummary; },
/* harmony export */   "GetSessionResponse": function() { return /* binding */ GetSessionResponse; },
/* harmony export */   "BadGatewayException": function() { return /* binding */ BadGatewayException; },
/* harmony export */   "DependencyFailedException": function() { return /* binding */ DependencyFailedException; },
/* harmony export */   "LoopDetectedException": function() { return /* binding */ LoopDetectedException; },
/* harmony export */   "NotAcceptableException": function() { return /* binding */ NotAcceptableException; },
/* harmony export */   "PostContentRequest": function() { return /* binding */ PostContentRequest; },
/* harmony export */   "DialogState": function() { return /* binding */ DialogState; },
/* harmony export */   "PostContentResponse": function() { return /* binding */ PostContentResponse; },
/* harmony export */   "RequestTimeoutException": function() { return /* binding */ RequestTimeoutException; },
/* harmony export */   "UnsupportedMediaTypeException": function() { return /* binding */ UnsupportedMediaTypeException; },
/* harmony export */   "PostTextRequest": function() { return /* binding */ PostTextRequest; },
/* harmony export */   "IntentConfidence": function() { return /* binding */ IntentConfidence; },
/* harmony export */   "PredictedIntent": function() { return /* binding */ PredictedIntent; },
/* harmony export */   "ContentType": function() { return /* binding */ ContentType; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "GenericAttachment": function() { return /* binding */ GenericAttachment; },
/* harmony export */   "ResponseCard": function() { return /* binding */ ResponseCard; },
/* harmony export */   "SentimentResponse": function() { return /* binding */ SentimentResponse; },
/* harmony export */   "PostTextResponse": function() { return /* binding */ PostTextResponse; },
/* harmony export */   "PutSessionRequest": function() { return /* binding */ PutSessionRequest; },
/* harmony export */   "PutSessionResponse": function() { return /* binding */ PutSessionResponse; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/smithy-client */ 85127);


var ActiveContextTimeToLive;

(function (ActiveContextTimeToLive) {
  ActiveContextTimeToLive.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(ActiveContextTimeToLive || (ActiveContextTimeToLive = {}));

var ActiveContext;

(function (ActiveContext) {
  ActiveContext.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.parameters && {
      parameters: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(ActiveContext || (ActiveContext = {}));

var BadRequestException;

(function (BadRequestException) {
  BadRequestException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(BadRequestException || (BadRequestException = {}));

var ConflictException;

(function (ConflictException) {
  ConflictException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(ConflictException || (ConflictException = {}));

var DeleteSessionRequest;

(function (DeleteSessionRequest) {
  DeleteSessionRequest.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(DeleteSessionRequest || (DeleteSessionRequest = {}));

var DeleteSessionResponse;

(function (DeleteSessionResponse) {
  DeleteSessionResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(DeleteSessionResponse || (DeleteSessionResponse = {}));

var InternalFailureException;

(function (InternalFailureException) {
  InternalFailureException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(InternalFailureException || (InternalFailureException = {}));

var LimitExceededException;

(function (LimitExceededException) {
  LimitExceededException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));

var NotFoundException;

(function (NotFoundException) {
  NotFoundException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(NotFoundException || (NotFoundException = {}));

var GetSessionRequest;

(function (GetSessionRequest) {
  GetSessionRequest.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(GetSessionRequest || (GetSessionRequest = {}));

var FulfillmentState;

(function (FulfillmentState) {
  FulfillmentState["FAILED"] = "Failed";
  FulfillmentState["FULFILLED"] = "Fulfilled";
  FulfillmentState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(FulfillmentState || (FulfillmentState = {}));

var MessageFormatType;

(function (MessageFormatType) {
  MessageFormatType["COMPOSITE"] = "Composite";
  MessageFormatType["CUSTOM_PAYLOAD"] = "CustomPayload";
  MessageFormatType["PLAIN_TEXT"] = "PlainText";
  MessageFormatType["SSML"] = "SSML";
})(MessageFormatType || (MessageFormatType = {}));

var DialogActionType;

(function (DialogActionType) {
  DialogActionType["CLOSE"] = "Close";
  DialogActionType["CONFIRM_INTENT"] = "ConfirmIntent";
  DialogActionType["DELEGATE"] = "Delegate";
  DialogActionType["ELICIT_INTENT"] = "ElicitIntent";
  DialogActionType["ELICIT_SLOT"] = "ElicitSlot";
})(DialogActionType || (DialogActionType = {}));

var DialogAction;

(function (DialogAction) {
  DialogAction.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.slots && {
      slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.message && {
      message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(DialogAction || (DialogAction = {}));

var ConfirmationStatus;

(function (ConfirmationStatus) {
  ConfirmationStatus["CONFIRMED"] = "Confirmed";
  ConfirmationStatus["DENIED"] = "Denied";
  ConfirmationStatus["NONE"] = "None";
})(ConfirmationStatus || (ConfirmationStatus = {}));

var IntentSummary;

(function (IntentSummary) {
  IntentSummary.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.slots && {
      slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(IntentSummary || (IntentSummary = {}));

var GetSessionResponse;

(function (GetSessionResponse) {
  GetSessionResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.recentIntentSummaryView && {
      recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) {
        return IntentSummary.filterSensitiveLog(item);
      })
    }), obj.sessionAttributes && {
      sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.dialogAction && {
      dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction)
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(GetSessionResponse || (GetSessionResponse = {}));

var BadGatewayException;

(function (BadGatewayException) {
  BadGatewayException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(BadGatewayException || (BadGatewayException = {}));

var DependencyFailedException;

(function (DependencyFailedException) {
  DependencyFailedException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(DependencyFailedException || (DependencyFailedException = {}));

var LoopDetectedException;

(function (LoopDetectedException) {
  LoopDetectedException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(LoopDetectedException || (LoopDetectedException = {}));

var NotAcceptableException;

(function (NotAcceptableException) {
  NotAcceptableException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(NotAcceptableException || (NotAcceptableException = {}));

var PostContentRequest;

(function (PostContentRequest) {
  PostContentRequest.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.sessionAttributes && {
      sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.requestAttributes && {
      requestAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PostContentRequest || (PostContentRequest = {}));

var DialogState;

(function (DialogState) {
  DialogState["CONFIRM_INTENT"] = "ConfirmIntent";
  DialogState["ELICIT_INTENT"] = "ElicitIntent";
  DialogState["ELICIT_SLOT"] = "ElicitSlot";
  DialogState["FAILED"] = "Failed";
  DialogState["FULFILLED"] = "Fulfilled";
  DialogState["READY_FOR_FULFILLMENT"] = "ReadyForFulfillment";
})(DialogState || (DialogState = {}));

var PostContentResponse;

(function (PostContentResponse) {
  PostContentResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.message && {
      message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PostContentResponse || (PostContentResponse = {}));

var RequestTimeoutException;

(function (RequestTimeoutException) {
  RequestTimeoutException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(RequestTimeoutException || (RequestTimeoutException = {}));

var UnsupportedMediaTypeException;

(function (UnsupportedMediaTypeException) {
  UnsupportedMediaTypeException.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(UnsupportedMediaTypeException || (UnsupportedMediaTypeException = {}));

var PostTextRequest;

(function (PostTextRequest) {
  PostTextRequest.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.sessionAttributes && {
      sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.requestAttributes && {
      requestAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.inputText && {
      inputText: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PostTextRequest || (PostTextRequest = {}));

var IntentConfidence;

(function (IntentConfidence) {
  IntentConfidence.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(IntentConfidence || (IntentConfidence = {}));

var PredictedIntent;

(function (PredictedIntent) {
  PredictedIntent.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.slots && {
      slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PredictedIntent || (PredictedIntent = {}));

var ContentType;

(function (ContentType) {
  ContentType["GENERIC"] = "application/vnd.amazonaws.card.generic";
})(ContentType || (ContentType = {}));

var Button;

(function (Button) {
  Button.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(Button || (Button = {}));

var GenericAttachment;

(function (GenericAttachment) {
  GenericAttachment.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(GenericAttachment || (GenericAttachment = {}));

var ResponseCard;

(function (ResponseCard) {
  ResponseCard.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(ResponseCard || (ResponseCard = {}));

var SentimentResponse;

(function (SentimentResponse) {
  SentimentResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj);
  };
})(SentimentResponse || (SentimentResponse = {}));

var PostTextResponse;

(function (PostTextResponse) {
  PostTextResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.alternativeIntents && {
      alternativeIntents: obj.alternativeIntents.map(function (item) {
        return PredictedIntent.filterSensitiveLog(item);
      })
    }), obj.slots && {
      slots: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.sessionAttributes && {
      sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.message && {
      message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PostTextResponse || (PostTextResponse = {}));

var PutSessionRequest;

(function (PutSessionRequest) {
  PutSessionRequest.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.sessionAttributes && {
      sessionAttributes: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.dialogAction && {
      dialogAction: DialogAction.filterSensitiveLog(obj.dialogAction)
    }), obj.recentIntentSummaryView && {
      recentIntentSummaryView: obj.recentIntentSummaryView.map(function (item) {
        return IntentSummary.filterSensitiveLog(item);
      })
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PutSessionRequest || (PutSessionRequest = {}));

var PutSessionResponse;

(function (PutSessionResponse) {
  PutSessionResponse.filterSensitiveLog = function (obj) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, obj), obj.message && {
      message: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    }), obj.activeContexts && {
      activeContexts: _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_0__.SENSITIVE_STRING
    });
  };
})(PutSessionResponse || (PutSessionResponse = {})); //# sourceMappingURL=models_0.js.map

/***/ }),

/***/ 40183:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/protocols/Aws_restJson1.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeAws_restJson1DeleteSessionCommand": function() { return /* binding */ serializeAws_restJson1DeleteSessionCommand; },
/* harmony export */   "serializeAws_restJson1GetSessionCommand": function() { return /* binding */ serializeAws_restJson1GetSessionCommand; },
/* harmony export */   "serializeAws_restJson1PostContentCommand": function() { return /* binding */ serializeAws_restJson1PostContentCommand; },
/* harmony export */   "serializeAws_restJson1PostTextCommand": function() { return /* binding */ serializeAws_restJson1PostTextCommand; },
/* harmony export */   "serializeAws_restJson1PutSessionCommand": function() { return /* binding */ serializeAws_restJson1PutSessionCommand; },
/* harmony export */   "deserializeAws_restJson1DeleteSessionCommand": function() { return /* binding */ deserializeAws_restJson1DeleteSessionCommand; },
/* harmony export */   "deserializeAws_restJson1GetSessionCommand": function() { return /* binding */ deserializeAws_restJson1GetSessionCommand; },
/* harmony export */   "deserializeAws_restJson1PostContentCommand": function() { return /* binding */ deserializeAws_restJson1PostContentCommand; },
/* harmony export */   "deserializeAws_restJson1PostTextCommand": function() { return /* binding */ deserializeAws_restJson1PostTextCommand; },
/* harmony export */   "deserializeAws_restJson1PutSessionCommand": function() { return /* binding */ deserializeAws_restJson1PutSessionCommand; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/protocol-http */ 83594);
/* harmony import */ var _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/smithy-client */ 85127);



var serializeAws_restJson1DeleteSessionCommand = function serializeAws_restJson1DeleteSessionCommand(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";

          if (input.botName !== undefined) {
            labelValue = input.botName;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botName.");
            }

            resolvedPath = resolvedPath.replace("{botName}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botName.");
          }

          if (input.botAlias !== undefined) {
            labelValue = input.botAlias;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botAlias.");
            }

            resolvedPath = resolvedPath.replace("{botAlias}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botAlias.");
          }

          if (input.userId !== undefined) {
            labelValue = input.userId;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: userId.");
            }

            resolvedPath = resolvedPath.replace("{userId}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: userId.");
          }

          return [4
          /*yield*/
          , context.endpoint()];

        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2
          /*return*/
          , new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "DELETE",
            headers: headers,
            path: resolvedPath,
            body: body
          })];
      }
    });
  });
};
var serializeAws_restJson1GetSessionCommand = function serializeAws_restJson1GetSessionCommand(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {};
          resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";

          if (input.botName !== undefined) {
            labelValue = input.botName;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botName.");
            }

            resolvedPath = resolvedPath.replace("{botName}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botName.");
          }

          if (input.botAlias !== undefined) {
            labelValue = input.botAlias;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botAlias.");
            }

            resolvedPath = resolvedPath.replace("{botAlias}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botAlias.");
          }

          if (input.userId !== undefined) {
            labelValue = input.userId;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: userId.");
            }

            resolvedPath = resolvedPath.replace("{userId}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: userId.");
          }

          query = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.checkpointLabelFilter !== undefined && {
            checkpointLabelFilter: input.checkpointLabelFilter
          });
          return [4
          /*yield*/
          , context.endpoint()];

        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2
          /*return*/
          , new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "GET",
            headers: headers,
            path: resolvedPath,
            query: query,
            body: body
          })];
      }
    });
  });
};
var serializeAws_restJson1PostContentCommand = function serializeAws_restJson1PostContentCommand(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
            "content-type": "application/octet-stream",
            "x-amz-content-sha256": "UNSIGNED-PAYLOAD"
          }, isSerializableHeaderValue(input.sessionAttributes) && {
            "x-amz-lex-session-attributes": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString.fromObject(input.sessionAttributes)).toString("base64")
          }), isSerializableHeaderValue(input.requestAttributes) && {
            "x-amz-lex-request-attributes": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString.fromObject(input.requestAttributes)).toString("base64")
          }), isSerializableHeaderValue(input.contentType) && {
            "content-type": input.contentType
          }), isSerializableHeaderValue(input.accept) && {
            accept: input.accept
          }), isSerializableHeaderValue(input.activeContexts) && {
            "x-amz-lex-active-contexts": Buffer.from(_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString.fromObject(input.activeContexts)).toString("base64")
          });
          resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/content";

          if (input.botName !== undefined) {
            labelValue = input.botName;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botName.");
            }

            resolvedPath = resolvedPath.replace("{botName}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botName.");
          }

          if (input.botAlias !== undefined) {
            labelValue = input.botAlias;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botAlias.");
            }

            resolvedPath = resolvedPath.replace("{botAlias}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botAlias.");
          }

          if (input.userId !== undefined) {
            labelValue = input.userId;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: userId.");
            }

            resolvedPath = resolvedPath.replace("{userId}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: userId.");
          }

          if (input.inputStream !== undefined) {
            body = input.inputStream;
          }

          return [4
          /*yield*/
          , context.endpoint()];

        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2
          /*return*/
          , new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            headers: headers,
            path: resolvedPath,
            body: body
          })];
      }
    });
  });
};
var serializeAws_restJson1PostTextCommand = function serializeAws_restJson1PostTextCommand(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = {
            "content-type": "application/json"
          };
          resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/text";

          if (input.botName !== undefined) {
            labelValue = input.botName;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botName.");
            }

            resolvedPath = resolvedPath.replace("{botName}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botName.");
          }

          if (input.botAlias !== undefined) {
            labelValue = input.botAlias;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botAlias.");
            }

            resolvedPath = resolvedPath.replace("{botAlias}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botAlias.");
          }

          if (input.userId !== undefined) {
            labelValue = input.userId;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: userId.");
            }

            resolvedPath = resolvedPath.replace("{userId}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: userId.");
          }

          body = JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.activeContexts !== undefined && input.activeContexts !== null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context)
          }), input.inputText !== undefined && input.inputText !== null && {
            inputText: input.inputText
          }), input.requestAttributes !== undefined && input.requestAttributes !== null && {
            requestAttributes: serializeAws_restJson1StringMap(input.requestAttributes, context)
          }), input.sessionAttributes !== undefined && input.sessionAttributes !== null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context)
          }));
          return [4
          /*yield*/
          , context.endpoint()];

        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2
          /*return*/
          , new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            headers: headers,
            path: resolvedPath,
            body: body
          })];
      }
    });
  });
};
var serializeAws_restJson1PutSessionCommand = function serializeAws_restJson1PutSessionCommand(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, body, _a, hostname, _b, protocol, port;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_c) {
      switch (_c.label) {
        case 0:
          headers = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
            "content-type": "application/json"
          }, isSerializableHeaderValue(input.accept) && {
            accept: input.accept
          });
          resolvedPath = "/bot/{botName}/alias/{botAlias}/user/{userId}/session";

          if (input.botName !== undefined) {
            labelValue = input.botName;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botName.");
            }

            resolvedPath = resolvedPath.replace("{botName}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botName.");
          }

          if (input.botAlias !== undefined) {
            labelValue = input.botAlias;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: botAlias.");
            }

            resolvedPath = resolvedPath.replace("{botAlias}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: botAlias.");
          }

          if (input.userId !== undefined) {
            labelValue = input.userId;

            if (labelValue.length <= 0) {
              throw new Error("Empty value provided for input HTTP label: userId.");
            }

            resolvedPath = resolvedPath.replace("{userId}", (0,_aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.extendedEncodeURIComponent)(labelValue));
          } else {
            throw new Error("No value provided for input HTTP label: userId.");
          }

          body = JSON.stringify((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.activeContexts !== undefined && input.activeContexts !== null && {
            activeContexts: serializeAws_restJson1ActiveContextsList(input.activeContexts, context)
          }), input.dialogAction !== undefined && input.dialogAction !== null && {
            dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context)
          }), input.recentIntentSummaryView !== undefined && input.recentIntentSummaryView !== null && {
            recentIntentSummaryView: serializeAws_restJson1IntentSummaryList(input.recentIntentSummaryView, context)
          }), input.sessionAttributes !== undefined && input.sessionAttributes !== null && {
            sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context)
          }));
          return [4
          /*yield*/
          , context.endpoint()];

        case 1:
          _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
          return [2
          /*return*/
          , new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpRequest({
            protocol: protocol,
            hostname: hostname,
            port: port,
            method: "POST",
            headers: headers,
            path: resolvedPath,
            body: body
          })];
      }
    });
  });
};
var deserializeAws_restJson1DeleteSessionCommand = function deserializeAws_restJson1DeleteSessionCommand(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2
            /*return*/
            , deserializeAws_restJson1DeleteSessionCommandError(output, context)];
          }

          contents = {
            $metadata: deserializeMetadata(output),
            botAlias: undefined,
            botName: undefined,
            sessionId: undefined,
            userId: undefined
          };
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          data = _a.sent();

          if (data.botAlias !== undefined && data.botAlias !== null) {
            contents.botAlias = data.botAlias;
          }

          if (data.botName !== undefined && data.botName !== null) {
            contents.botName = data.botName;
          }

          if (data.sessionId !== undefined && data.sessionId !== null) {
            contents.sessionId = data.sessionId;
          }

          if (data.userId !== undefined && data.userId !== null) {
            contents.userId = data.userId;
          }

          return [2
          /*return*/
          , Promise.resolve(contents)];
      }
    });
  });
};

var deserializeAws_restJson1DeleteSessionCommandError = function deserializeAws_restJson1DeleteSessionCommandError(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;

    var _h;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_j) {
      switch (_j.label) {
        case 0:
          _a = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, output)];
          _h = {};
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;

          switch (_b) {
            case "BadRequestException":
              return [3
              /*break*/
              , 2];

            case "com.amazonaws.lexruntimeservice#BadRequestException":
              return [3
              /*break*/
              , 2];

            case "ConflictException":
              return [3
              /*break*/
              , 4];

            case "com.amazonaws.lexruntimeservice#ConflictException":
              return [3
              /*break*/
              , 4];

            case "InternalFailureException":
              return [3
              /*break*/
              , 6];

            case "com.amazonaws.lexruntimeservice#InternalFailureException":
              return [3
              /*break*/
              , 6];

            case "LimitExceededException":
              return [3
              /*break*/
              , 8];

            case "com.amazonaws.lexruntimeservice#LimitExceededException":
              return [3
              /*break*/
              , 8];

            case "NotFoundException":
              return [3
              /*break*/
              , 10];

            case "com.amazonaws.lexruntimeservice#NotFoundException":
              return [3
              /*break*/
              , 10];
          }

          return [3
          /*break*/
          , 12];

        case 2:
          _c = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];

        case 3:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _c.concat([_j.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 13];

        case 4:
          _d = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];

        case 5:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _d.concat([_j.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 13];

        case 6:
          _e = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];

        case 7:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _e.concat([_j.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 13];

        case 8:
          _f = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];

        case 9:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _f.concat([_j.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 13];

        case 10:
          _g = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];

        case 11:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _g.concat([_j.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 13];

        case 12:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          _j.label = 13;

        case 13:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2
          /*return*/
          , Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};

var deserializeAws_restJson1GetSessionCommand = function deserializeAws_restJson1GetSessionCommand(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2
            /*return*/
            , deserializeAws_restJson1GetSessionCommandError(output, context)];
          }

          contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            dialogAction: undefined,
            recentIntentSummaryView: undefined,
            sessionAttributes: undefined,
            sessionId: undefined
          };
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          data = _a.sent();

          if (data.activeContexts !== undefined && data.activeContexts !== null) {
            contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
          }

          if (data.dialogAction !== undefined && data.dialogAction !== null) {
            contents.dialogAction = deserializeAws_restJson1DialogAction(data.dialogAction, context);
          }

          if (data.recentIntentSummaryView !== undefined && data.recentIntentSummaryView !== null) {
            contents.recentIntentSummaryView = deserializeAws_restJson1IntentSummaryList(data.recentIntentSummaryView, context);
          }

          if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
            contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
          }

          if (data.sessionId !== undefined && data.sessionId !== null) {
            contents.sessionId = data.sessionId;
          }

          return [2
          /*return*/
          , Promise.resolve(contents)];
      }
    });
  });
};

var deserializeAws_restJson1GetSessionCommandError = function deserializeAws_restJson1GetSessionCommandError(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;

    var _g;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_h) {
      switch (_h.label) {
        case 0:
          _a = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, output)];
          _g = {};
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;

          switch (_b) {
            case "BadRequestException":
              return [3
              /*break*/
              , 2];

            case "com.amazonaws.lexruntimeservice#BadRequestException":
              return [3
              /*break*/
              , 2];

            case "InternalFailureException":
              return [3
              /*break*/
              , 4];

            case "com.amazonaws.lexruntimeservice#InternalFailureException":
              return [3
              /*break*/
              , 4];

            case "LimitExceededException":
              return [3
              /*break*/
              , 6];

            case "com.amazonaws.lexruntimeservice#LimitExceededException":
              return [3
              /*break*/
              , 6];

            case "NotFoundException":
              return [3
              /*break*/
              , 8];

            case "com.amazonaws.lexruntimeservice#NotFoundException":
              return [3
              /*break*/
              , 8];
          }

          return [3
          /*break*/
          , 10];

        case 2:
          _c = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];

        case 3:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _c.concat([_h.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 11];

        case 4:
          _d = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];

        case 5:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _d.concat([_h.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 11];

        case 6:
          _e = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];

        case 7:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _e.concat([_h.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 11];

        case 8:
          _f = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];

        case 9:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _f.concat([_h.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 11];

        case 10:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          _h.label = 11;

        case 11:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2
          /*return*/
          , Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};

var deserializeAws_restJson1PostContentCommand = function deserializeAws_restJson1PostContentCommand(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return [2
        /*return*/
        , deserializeAws_restJson1PostContentCommandError(output, context)];
      }

      contents = {
        $metadata: deserializeMetadata(output),
        activeContexts: undefined,
        alternativeIntents: undefined,
        audioStream: undefined,
        botVersion: undefined,
        contentType: undefined,
        dialogState: undefined,
        inputTranscript: undefined,
        intentName: undefined,
        message: undefined,
        messageFormat: undefined,
        nluIntentConfidence: undefined,
        sentimentResponse: undefined,
        sessionAttributes: undefined,
        sessionId: undefined,
        slotToElicit: undefined,
        slots: undefined
      };

      if (output.headers["content-type"] !== undefined) {
        contents.contentType = output.headers["content-type"];
      }

      if (output.headers["x-amz-lex-intent-name"] !== undefined) {
        contents.intentName = output.headers["x-amz-lex-intent-name"];
      }

      if (output.headers["x-amz-lex-nlu-intent-confidence"] !== undefined) {
        contents.nluIntentConfidence = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-nlu-intent-confidence"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-alternative-intents"] !== undefined) {
        contents.alternativeIntents = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-alternative-intents"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-slots"] !== undefined) {
        contents.slots = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
        contents.sessionAttributes = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-sentiment"] !== undefined) {
        contents.sentimentResponse = output.headers["x-amz-lex-sentiment"];
      }

      if (output.headers["x-amz-lex-message"] !== undefined) {
        contents.message = output.headers["x-amz-lex-message"];
      }

      if (output.headers["x-amz-lex-message-format"] !== undefined) {
        contents.messageFormat = output.headers["x-amz-lex-message-format"];
      }

      if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
        contents.dialogState = output.headers["x-amz-lex-dialog-state"];
      }

      if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
        contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
      }

      if (output.headers["x-amz-lex-input-transcript"] !== undefined) {
        contents.inputTranscript = output.headers["x-amz-lex-input-transcript"];
      }

      if (output.headers["x-amz-lex-bot-version"] !== undefined) {
        contents.botVersion = output.headers["x-amz-lex-bot-version"];
      }

      if (output.headers["x-amz-lex-session-id"] !== undefined) {
        contents.sessionId = output.headers["x-amz-lex-session-id"];
      }

      if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
        contents.activeContexts = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
      }

      data = output.body;
      contents.audioStream = data;
      return [2
      /*return*/
      , Promise.resolve(contents)];
    });
  });
};

var deserializeAws_restJson1PostContentCommandError = function deserializeAws_restJson1PostContentCommandError(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;

    var _p;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_q) {
      switch (_q.label) {
        case 0:
          _a = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, output)];
          _p = {};
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;

          switch (_b) {
            case "BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "com.amazonaws.lexruntimeservice#BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "BadRequestException":
              return [3
              /*break*/
              , 4];

            case "com.amazonaws.lexruntimeservice#BadRequestException":
              return [3
              /*break*/
              , 4];

            case "ConflictException":
              return [3
              /*break*/
              , 6];

            case "com.amazonaws.lexruntimeservice#ConflictException":
              return [3
              /*break*/
              , 6];

            case "DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "com.amazonaws.lexruntimeservice#DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "com.amazonaws.lexruntimeservice#InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "com.amazonaws.lexruntimeservice#LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "LoopDetectedException":
              return [3
              /*break*/
              , 14];

            case "com.amazonaws.lexruntimeservice#LoopDetectedException":
              return [3
              /*break*/
              , 14];

            case "NotAcceptableException":
              return [3
              /*break*/
              , 16];

            case "com.amazonaws.lexruntimeservice#NotAcceptableException":
              return [3
              /*break*/
              , 16];

            case "NotFoundException":
              return [3
              /*break*/
              , 18];

            case "com.amazonaws.lexruntimeservice#NotFoundException":
              return [3
              /*break*/
              , 18];

            case "RequestTimeoutException":
              return [3
              /*break*/
              , 20];

            case "com.amazonaws.lexruntimeservice#RequestTimeoutException":
              return [3
              /*break*/
              , 20];

            case "UnsupportedMediaTypeException":
              return [3
              /*break*/
              , 22];

            case "com.amazonaws.lexruntimeservice#UnsupportedMediaTypeException":
              return [3
              /*break*/
              , 22];
          }

          return [3
          /*break*/
          , 24];

        case 2:
          _c = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];

        case 3:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _c.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 4:
          _d = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];

        case 5:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _d.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 6:
          _e = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];

        case 7:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _e.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 8:
          _f = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];

        case 9:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _f.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 10:
          _g = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];

        case 11:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _g.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 12:
          _h = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];

        case 13:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _h.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 14:
          _j = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];

        case 15:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _j.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 16:
          _k = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];

        case 17:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _k.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 18:
          _l = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];

        case 19:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _l.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 20:
          _m = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)];

        case 21:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _m.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 22:
          _o = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)];

        case 23:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _o.concat([_q.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 25];

        case 24:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          _q.label = 25;

        case 25:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2
          /*return*/
          , Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};

var deserializeAws_restJson1PostTextCommand = function deserializeAws_restJson1PostTextCommand(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (output.statusCode !== 200 && output.statusCode >= 300) {
            return [2
            /*return*/
            , deserializeAws_restJson1PostTextCommandError(output, context)];
          }

          contents = {
            $metadata: deserializeMetadata(output),
            activeContexts: undefined,
            alternativeIntents: undefined,
            botVersion: undefined,
            dialogState: undefined,
            intentName: undefined,
            message: undefined,
            messageFormat: undefined,
            nluIntentConfidence: undefined,
            responseCard: undefined,
            sentimentResponse: undefined,
            sessionAttributes: undefined,
            sessionId: undefined,
            slotToElicit: undefined,
            slots: undefined
          };
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          data = _a.sent();

          if (data.activeContexts !== undefined && data.activeContexts !== null) {
            contents.activeContexts = deserializeAws_restJson1ActiveContextsList(data.activeContexts, context);
          }

          if (data.alternativeIntents !== undefined && data.alternativeIntents !== null) {
            contents.alternativeIntents = deserializeAws_restJson1IntentList(data.alternativeIntents, context);
          }

          if (data.botVersion !== undefined && data.botVersion !== null) {
            contents.botVersion = data.botVersion;
          }

          if (data.dialogState !== undefined && data.dialogState !== null) {
            contents.dialogState = data.dialogState;
          }

          if (data.intentName !== undefined && data.intentName !== null) {
            contents.intentName = data.intentName;
          }

          if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
          }

          if (data.messageFormat !== undefined && data.messageFormat !== null) {
            contents.messageFormat = data.messageFormat;
          }

          if (data.nluIntentConfidence !== undefined && data.nluIntentConfidence !== null) {
            contents.nluIntentConfidence = deserializeAws_restJson1IntentConfidence(data.nluIntentConfidence, context);
          }

          if (data.responseCard !== undefined && data.responseCard !== null) {
            contents.responseCard = deserializeAws_restJson1ResponseCard(data.responseCard, context);
          }

          if (data.sentimentResponse !== undefined && data.sentimentResponse !== null) {
            contents.sentimentResponse = deserializeAws_restJson1SentimentResponse(data.sentimentResponse, context);
          }

          if (data.sessionAttributes !== undefined && data.sessionAttributes !== null) {
            contents.sessionAttributes = deserializeAws_restJson1StringMap(data.sessionAttributes, context);
          }

          if (data.sessionId !== undefined && data.sessionId !== null) {
            contents.sessionId = data.sessionId;
          }

          if (data.slotToElicit !== undefined && data.slotToElicit !== null) {
            contents.slotToElicit = data.slotToElicit;
          }

          if (data.slots !== undefined && data.slots !== null) {
            contents.slots = deserializeAws_restJson1StringMap(data.slots, context);
          }

          return [2
          /*return*/
          , Promise.resolve(contents)];
      }
    });
  });
};

var deserializeAws_restJson1PostTextCommandError = function deserializeAws_restJson1PostTextCommandError(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;

    var _l;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, output)];
          _l = {};
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;

          switch (_b) {
            case "BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "com.amazonaws.lexruntimeservice#BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "BadRequestException":
              return [3
              /*break*/
              , 4];

            case "com.amazonaws.lexruntimeservice#BadRequestException":
              return [3
              /*break*/
              , 4];

            case "ConflictException":
              return [3
              /*break*/
              , 6];

            case "com.amazonaws.lexruntimeservice#ConflictException":
              return [3
              /*break*/
              , 6];

            case "DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "com.amazonaws.lexruntimeservice#DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "com.amazonaws.lexruntimeservice#InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "com.amazonaws.lexruntimeservice#LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "LoopDetectedException":
              return [3
              /*break*/
              , 14];

            case "com.amazonaws.lexruntimeservice#LoopDetectedException":
              return [3
              /*break*/
              , 14];

            case "NotFoundException":
              return [3
              /*break*/
              , 16];

            case "com.amazonaws.lexruntimeservice#NotFoundException":
              return [3
              /*break*/
              , 16];
          }

          return [3
          /*break*/
          , 18];

        case 2:
          _c = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];

        case 3:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _c.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 4:
          _d = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];

        case 5:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _d.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 6:
          _e = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];

        case 7:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _e.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 8:
          _f = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];

        case 9:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _f.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 10:
          _g = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];

        case 11:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _g.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 12:
          _h = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];

        case 13:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _h.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 14:
          _j = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context)];

        case 15:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _j.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 16:
          _k = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];

        case 17:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _k.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          _m.label = 19;

        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2
          /*return*/
          , Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};

var deserializeAws_restJson1PutSessionCommand = function deserializeAws_restJson1PutSessionCommand(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return [2
        /*return*/
        , deserializeAws_restJson1PutSessionCommandError(output, context)];
      }

      contents = {
        $metadata: deserializeMetadata(output),
        activeContexts: undefined,
        audioStream: undefined,
        contentType: undefined,
        dialogState: undefined,
        intentName: undefined,
        message: undefined,
        messageFormat: undefined,
        sessionAttributes: undefined,
        sessionId: undefined,
        slotToElicit: undefined,
        slots: undefined
      };

      if (output.headers["content-type"] !== undefined) {
        contents.contentType = output.headers["content-type"];
      }

      if (output.headers["x-amz-lex-intent-name"] !== undefined) {
        contents.intentName = output.headers["x-amz-lex-intent-name"];
      }

      if (output.headers["x-amz-lex-slots"] !== undefined) {
        contents.slots = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-slots"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-session-attributes"] !== undefined) {
        contents.sessionAttributes = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-session-attributes"], "base64").toString("ascii"));
      }

      if (output.headers["x-amz-lex-message"] !== undefined) {
        contents.message = output.headers["x-amz-lex-message"];
      }

      if (output.headers["x-amz-lex-message-format"] !== undefined) {
        contents.messageFormat = output.headers["x-amz-lex-message-format"];
      }

      if (output.headers["x-amz-lex-dialog-state"] !== undefined) {
        contents.dialogState = output.headers["x-amz-lex-dialog-state"];
      }

      if (output.headers["x-amz-lex-slot-to-elicit"] !== undefined) {
        contents.slotToElicit = output.headers["x-amz-lex-slot-to-elicit"];
      }

      if (output.headers["x-amz-lex-session-id"] !== undefined) {
        contents.sessionId = output.headers["x-amz-lex-session-id"];
      }

      if (output.headers["x-amz-lex-active-contexts"] !== undefined) {
        contents.activeContexts = new _aws_sdk_smithy_client__WEBPACK_IMPORTED_MODULE_1__.LazyJsonString(Buffer.from(output.headers["x-amz-lex-active-contexts"], "base64").toString("ascii"));
      }

      data = output.body;
      contents.audioStream = data;
      return [2
      /*return*/
      , Promise.resolve(contents)];
    });
  });
};

var deserializeAws_restJson1PutSessionCommandError = function deserializeAws_restJson1PutSessionCommandError(output, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;

    var _l;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_m) {
      switch (_m.label) {
        case 0:
          _a = [(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, output)];
          _l = {};
          return [4
          /*yield*/
          , parseBody(output.body, context)];

        case 1:
          parsedOutput = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
          errorCode = "UnknownError";
          errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
          _b = errorCode;

          switch (_b) {
            case "BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "com.amazonaws.lexruntimeservice#BadGatewayException":
              return [3
              /*break*/
              , 2];

            case "BadRequestException":
              return [3
              /*break*/
              , 4];

            case "com.amazonaws.lexruntimeservice#BadRequestException":
              return [3
              /*break*/
              , 4];

            case "ConflictException":
              return [3
              /*break*/
              , 6];

            case "com.amazonaws.lexruntimeservice#ConflictException":
              return [3
              /*break*/
              , 6];

            case "DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "com.amazonaws.lexruntimeservice#DependencyFailedException":
              return [3
              /*break*/
              , 8];

            case "InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "com.amazonaws.lexruntimeservice#InternalFailureException":
              return [3
              /*break*/
              , 10];

            case "LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "com.amazonaws.lexruntimeservice#LimitExceededException":
              return [3
              /*break*/
              , 12];

            case "NotAcceptableException":
              return [3
              /*break*/
              , 14];

            case "com.amazonaws.lexruntimeservice#NotAcceptableException":
              return [3
              /*break*/
              , 14];

            case "NotFoundException":
              return [3
              /*break*/
              , 16];

            case "com.amazonaws.lexruntimeservice#NotFoundException":
              return [3
              /*break*/
              , 16];
          }

          return [3
          /*break*/
          , 18];

        case 2:
          _c = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context)];

        case 3:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _c.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 4:
          _d = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];

        case 5:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _d.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 6:
          _e = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];

        case 7:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _e.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 8:
          _f = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context)];

        case 9:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _f.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 10:
          _g = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)];

        case 11:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _g.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 12:
          _h = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];

        case 13:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _h.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 14:
          _j = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context)];

        case 15:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _j.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 16:
          _k = [{}];
          return [4
          /*yield*/
          , deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];

        case 17:
          response = tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, [tslib__WEBPACK_IMPORTED_MODULE_2__.__assign.apply(void 0, _k.concat([_m.sent()])), {
            name: errorCode,
            $metadata: deserializeMetadata(output)
          }]);
          return [3
          /*break*/
          , 19];

        case 18:
          parsedBody = parsedOutput.body;
          errorCode = parsedBody.code || parsedBody.Code || errorCode;
          response = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, parsedBody), {
            name: "" + errorCode,
            message: parsedBody.message || parsedBody.Message || errorCode,
            $fault: "client",
            $metadata: deserializeMetadata(output)
          });
          _m.label = 19;

        case 19:
          message = response.message || response.Message || errorCode;
          response.message = message;
          delete response.Message;
          return [2
          /*return*/
          , Promise.reject(Object.assign(new Error(message), response))];
      }
    });
  });
};

var deserializeAws_restJson1BadGatewayExceptionResponse = function deserializeAws_restJson1BadGatewayExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "BadGatewayException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
      };
      data = parsedOutput.body;

      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1BadRequestExceptionResponse = function deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1ConflictExceptionResponse = function deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1DependencyFailedExceptionResponse = function deserializeAws_restJson1DependencyFailedExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "DependencyFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
      };
      data = parsedOutput.body;

      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1InternalFailureExceptionResponse = function deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1LimitExceededExceptionResponse = function deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined
      };

      if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
      }

      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1LoopDetectedExceptionResponse = function deserializeAws_restJson1LoopDetectedExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "LoopDetectedException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined
      };
      data = parsedOutput.body;

      if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1NotAcceptableExceptionResponse = function deserializeAws_restJson1NotAcceptableExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "NotAcceptableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1NotFoundExceptionResponse = function deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1RequestTimeoutExceptionResponse = function deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "RequestTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = function deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(void 0, void 0, void 0, function () {
    var contents, data;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
      contents = {
        name: "UnsupportedMediaTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined
      };
      data = parsedOutput.body;

      if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
      }

      return [2
      /*return*/
      , contents];
    });
  });
};

var serializeAws_restJson1ActiveContext = function serializeAws_restJson1ActiveContext(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.name !== undefined && input.name !== null && {
    name: input.name
  }), input.parameters !== undefined && input.parameters !== null && {
    parameters: serializeAws_restJson1ActiveContextParametersMap(input.parameters, context)
  }), input.timeToLive !== undefined && input.timeToLive !== null && {
    timeToLive: serializeAws_restJson1ActiveContextTimeToLive(input.timeToLive, context)
  });
};

var serializeAws_restJson1ActiveContextParametersMap = function serializeAws_restJson1ActiveContextParametersMap(input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;

    var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 2),
        key = _c[0],
        value = _c[1];

    if (value === null) {
      return acc;
    }

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};

var serializeAws_restJson1ActiveContextsList = function serializeAws_restJson1ActiveContextsList(input, context) {
  return input.filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return serializeAws_restJson1ActiveContext(entry, context);
  });
};

var serializeAws_restJson1ActiveContextTimeToLive = function serializeAws_restJson1ActiveContextTimeToLive(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.timeToLiveInSeconds !== undefined && input.timeToLiveInSeconds !== null && {
    timeToLiveInSeconds: input.timeToLiveInSeconds
  }), input.turnsToLive !== undefined && input.turnsToLive !== null && {
    turnsToLive: input.turnsToLive
  });
};

var serializeAws_restJson1DialogAction = function serializeAws_restJson1DialogAction(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.fulfillmentState !== undefined && input.fulfillmentState !== null && {
    fulfillmentState: input.fulfillmentState
  }), input.intentName !== undefined && input.intentName !== null && {
    intentName: input.intentName
  }), input.message !== undefined && input.message !== null && {
    message: input.message
  }), input.messageFormat !== undefined && input.messageFormat !== null && {
    messageFormat: input.messageFormat
  }), input.slotToElicit !== undefined && input.slotToElicit !== null && {
    slotToElicit: input.slotToElicit
  }), input.slots !== undefined && input.slots !== null && {
    slots: serializeAws_restJson1StringMap(input.slots, context)
  }), input.type !== undefined && input.type !== null && {
    type: input.type
  });
};

var serializeAws_restJson1IntentSummary = function serializeAws_restJson1IntentSummary(input, context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input.checkpointLabel !== undefined && input.checkpointLabel !== null && {
    checkpointLabel: input.checkpointLabel
  }), input.confirmationStatus !== undefined && input.confirmationStatus !== null && {
    confirmationStatus: input.confirmationStatus
  }), input.dialogActionType !== undefined && input.dialogActionType !== null && {
    dialogActionType: input.dialogActionType
  }), input.fulfillmentState !== undefined && input.fulfillmentState !== null && {
    fulfillmentState: input.fulfillmentState
  }), input.intentName !== undefined && input.intentName !== null && {
    intentName: input.intentName
  }), input.slotToElicit !== undefined && input.slotToElicit !== null && {
    slotToElicit: input.slotToElicit
  }), input.slots !== undefined && input.slots !== null && {
    slots: serializeAws_restJson1StringMap(input.slots, context)
  });
};

var serializeAws_restJson1IntentSummaryList = function serializeAws_restJson1IntentSummaryList(input, context) {
  return input.filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return serializeAws_restJson1IntentSummary(entry, context);
  });
};

var serializeAws_restJson1StringMap = function serializeAws_restJson1StringMap(input, context) {
  return Object.entries(input).reduce(function (acc, _a) {
    var _b;

    var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 2),
        key = _c[0],
        value = _c[1];

    if (value === null) {
      return acc;
    }

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};

var deserializeAws_restJson1ActiveContext = function deserializeAws_restJson1ActiveContext(output, context) {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    parameters: output.parameters !== undefined && output.parameters !== null ? deserializeAws_restJson1ActiveContextParametersMap(output.parameters, context) : undefined,
    timeToLive: output.timeToLive !== undefined && output.timeToLive !== null ? deserializeAws_restJson1ActiveContextTimeToLive(output.timeToLive, context) : undefined
  };
};

var deserializeAws_restJson1ActiveContextParametersMap = function deserializeAws_restJson1ActiveContextParametersMap(output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;

    var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 2),
        key = _c[0],
        value = _c[1];

    if (value === null) {
      return acc;
    }

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};

var deserializeAws_restJson1ActiveContextsList = function deserializeAws_restJson1ActiveContextsList(output, context) {
  return (output || []).filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return deserializeAws_restJson1ActiveContext(entry, context);
  });
};

var deserializeAws_restJson1ActiveContextTimeToLive = function deserializeAws_restJson1ActiveContextTimeToLive(output, context) {
  return {
    timeToLiveInSeconds: output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null ? output.timeToLiveInSeconds : undefined,
    turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined
  };
};

var deserializeAws_restJson1Button = function deserializeAws_restJson1Button(output, context) {
  return {
    text: output.text !== undefined && output.text !== null ? output.text : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined
  };
};

var deserializeAws_restJson1DialogAction = function deserializeAws_restJson1DialogAction(output, context) {
  return {
    fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
    intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    messageFormat: output.messageFormat !== undefined && output.messageFormat !== null ? output.messageFormat : undefined,
    slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
    slots: output.slots !== undefined && output.slots !== null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined
  };
};

var deserializeAws_restJson1GenericAttachment = function deserializeAws_restJson1GenericAttachment(output, context) {
  return {
    attachmentLinkUrl: output.attachmentLinkUrl !== undefined && output.attachmentLinkUrl !== null ? output.attachmentLinkUrl : undefined,
    buttons: output.buttons !== undefined && output.buttons !== null ? deserializeAws_restJson1listOfButtons(output.buttons, context) : undefined,
    imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
    subTitle: output.subTitle !== undefined && output.subTitle !== null ? output.subTitle : undefined,
    title: output.title !== undefined && output.title !== null ? output.title : undefined
  };
};

var deserializeAws_restJson1genericAttachmentList = function deserializeAws_restJson1genericAttachmentList(output, context) {
  return (output || []).filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return deserializeAws_restJson1GenericAttachment(entry, context);
  });
};

var deserializeAws_restJson1IntentConfidence = function deserializeAws_restJson1IntentConfidence(output, context) {
  return {
    score: output.score !== undefined && output.score !== null ? output.score : undefined
  };
};

var deserializeAws_restJson1IntentList = function deserializeAws_restJson1IntentList(output, context) {
  return (output || []).filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return deserializeAws_restJson1PredictedIntent(entry, context);
  });
};

var deserializeAws_restJson1IntentSummary = function deserializeAws_restJson1IntentSummary(output, context) {
  return {
    checkpointLabel: output.checkpointLabel !== undefined && output.checkpointLabel !== null ? output.checkpointLabel : undefined,
    confirmationStatus: output.confirmationStatus !== undefined && output.confirmationStatus !== null ? output.confirmationStatus : undefined,
    dialogActionType: output.dialogActionType !== undefined && output.dialogActionType !== null ? output.dialogActionType : undefined,
    fulfillmentState: output.fulfillmentState !== undefined && output.fulfillmentState !== null ? output.fulfillmentState : undefined,
    intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
    slotToElicit: output.slotToElicit !== undefined && output.slotToElicit !== null ? output.slotToElicit : undefined,
    slots: output.slots !== undefined && output.slots !== null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined
  };
};

var deserializeAws_restJson1IntentSummaryList = function deserializeAws_restJson1IntentSummaryList(output, context) {
  return (output || []).filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return deserializeAws_restJson1IntentSummary(entry, context);
  });
};

var deserializeAws_restJson1listOfButtons = function deserializeAws_restJson1listOfButtons(output, context) {
  return (output || []).filter(function (e) {
    return e != null;
  }).map(function (entry) {
    if (entry === null) {
      return null;
    }

    return deserializeAws_restJson1Button(entry, context);
  });
};

var deserializeAws_restJson1PredictedIntent = function deserializeAws_restJson1PredictedIntent(output, context) {
  return {
    intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
    nluIntentConfidence: output.nluIntentConfidence !== undefined && output.nluIntentConfidence !== null ? deserializeAws_restJson1IntentConfidence(output.nluIntentConfidence, context) : undefined,
    slots: output.slots !== undefined && output.slots !== null ? deserializeAws_restJson1StringMap(output.slots, context) : undefined
  };
};

var deserializeAws_restJson1ResponseCard = function deserializeAws_restJson1ResponseCard(output, context) {
  return {
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    genericAttachments: output.genericAttachments !== undefined && output.genericAttachments !== null ? deserializeAws_restJson1genericAttachmentList(output.genericAttachments, context) : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined
  };
};

var deserializeAws_restJson1SentimentResponse = function deserializeAws_restJson1SentimentResponse(output, context) {
  return {
    sentimentLabel: output.sentimentLabel !== undefined && output.sentimentLabel !== null ? output.sentimentLabel : undefined,
    sentimentScore: output.sentimentScore !== undefined && output.sentimentScore !== null ? output.sentimentScore : undefined
  };
};

var deserializeAws_restJson1StringMap = function deserializeAws_restJson1StringMap(output, context) {
  return Object.entries(output).reduce(function (acc, _a) {
    var _b;

    var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 2),
        key = _c[0],
        value = _c[1];

    if (value === null) {
      return acc;
    }

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, acc), (_b = {}, _b[key] = value, _b));
  }, {});
};

var deserializeMetadata = function deserializeMetadata(output) {
  var _a;

  return {
    httpStatusCode: output.statusCode,
    requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"]
  };
}; // Collect low-level response body stream to Uint8Array.


var collectBody = function collectBody(streamBody, context) {
  if (streamBody === void 0) {
    streamBody = new Uint8Array();
  }

  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }

  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
}; // Encode Uint8Array data into string with utf-8.


var collectBodyString = function collectBodyString(streamBody, context) {
  return collectBody(streamBody, context).then(function (body) {
    return context.utf8Encoder(body);
  });
};

var isSerializableHeaderValue = function isSerializableHeaderValue(value) {
  return value !== undefined && value !== null && value !== "" && (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) && (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};

var parseBody = function parseBody(streamBody, context) {
  return collectBodyString(streamBody, context).then(function (encoded) {
    if (encoded.length) {
      return JSON.parse(encoded);
    }

    return {};
  });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */


var loadRestJsonErrorCode = function loadRestJsonErrorCode(output, data) {
  var findKey = function findKey(object, key) {
    return Object.keys(object).find(function (k) {
      return k.toLowerCase() === key.toLowerCase();
    });
  };

  var sanitizeErrorCode = function sanitizeErrorCode(rawValue) {
    var cleanValue = rawValue;

    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }

    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }

    return cleanValue;
  };

  var headerKey = findKey(output.headers, "x-amzn-errortype");

  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
}; //# sourceMappingURL=Aws_restJson1.js.map

/***/ }),

/***/ 78538:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.browser.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientDefaultValues": function() { return /* binding */ ClientDefaultValues; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./package.json */ 49575);
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/sha256-browser */ 57235);
/* harmony import */ var _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/fetch-http-handler */ 74714);
/* harmony import */ var _aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/invalid-dependency */ 13588);
/* harmony import */ var _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/middleware-retry */ 63458);
/* harmony import */ var _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/util-base64-browser */ 86173);
/* harmony import */ var _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/util-body-length-browser */ 358);
/* harmony import */ var _aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-sdk/util-user-agent-browser */ 65369);
/* harmony import */ var _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ 87991);
/* harmony import */ var _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runtimeConfig.shared */ 90784);











/**
 * @internal
 */

var ClientDefaultValues = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__.ClientSharedValues), {
  runtime: "browser",
  base64Decoder: _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_4__.fromBase64,
  base64Encoder: _aws_sdk_util_base64_browser__WEBPACK_IMPORTED_MODULE_4__.toBase64,
  bodyLengthChecker: _aws_sdk_util_body_length_browser__WEBPACK_IMPORTED_MODULE_5__.calculateBodyLength,
  credentialDefaultProvider: function credentialDefaultProvider(_) {
    return function () {
      return Promise.reject(new Error("Credential is missing"));
    };
  },
  defaultUserAgentProvider: (0,_aws_sdk_util_user_agent_browser__WEBPACK_IMPORTED_MODULE_6__.defaultUserAgent)({
    serviceId: _runtimeConfig_shared__WEBPACK_IMPORTED_MODULE_9__.ClientSharedValues.serviceId,
    clientVersion: _package_json__WEBPACK_IMPORTED_MODULE_10__.version
  }),
  maxAttempts: _aws_sdk_middleware_retry__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_MAX_ATTEMPTS,
  region: (0,_aws_sdk_invalid_dependency__WEBPACK_IMPORTED_MODULE_2__.invalidProvider)("Region is missing"),
  requestHandler: new _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_1__.FetchHttpHandler(),
  sha256: _aws_crypto_sha256_browser__WEBPACK_IMPORTED_MODULE_0__.Sha256,
  streamCollector: _aws_sdk_fetch_http_handler__WEBPACK_IMPORTED_MODULE_1__.streamCollector,
  utf8Decoder: _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_7__.fromUtf8,
  utf8Encoder: _aws_sdk_util_utf8_browser__WEBPACK_IMPORTED_MODULE_7__.toUtf8
}); //# sourceMappingURL=runtimeConfig.browser.js.map

/***/ }),

/***/ 90784:
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/runtimeConfig.shared.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientSharedValues": function() { return /* binding */ ClientSharedValues; }
/* harmony export */ });
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ 77757);
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/url-parser */ 39367);


/**
 * @internal
 */

var ClientSharedValues = {
  apiVersion: "2016-11-28",
  disableHostPrefix: false,
  logger: {},
  regionInfoProvider: _endpoints__WEBPACK_IMPORTED_MODULE_1__.defaultRegionInfoProvider,
  serviceId: "Lex Runtime Service",
  urlParser: _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_0__.parseUrl
}; //# sourceMappingURL=runtimeConfig.shared.js.map

/***/ }),

/***/ 87991:
/*!**********************************!*\
  !*** @aws-sdk/util-utf8-browser ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromUtf8": function() { return /* binding */ fromUtf8; },
/* harmony export */   "toUtf8": function() { return /* binding */ toUtf8; }
/* harmony export */ });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ 57701);
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ 82979);


var fromUtf8 = function fromUtf8(input) {
  return typeof TextEncoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(input);
};
var toUtf8 = function toUtf8(input) {
  return typeof TextDecoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.toUtf8)(input);
}; //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxJQUFJLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxJQUFJLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBS25HLE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWE7SUFDcEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0FBQWxGLENBQWtGLENBQUM7QUFFckYsTUFBTSxDQUFDLElBQU0sTUFBTSxHQUFHLFVBQUMsS0FBaUI7SUFDdEMsT0FBQSxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQTlFLENBQThFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tVXRmOCBhcyBqc0Zyb21VdGY4LCB0b1V0ZjggYXMganNUb1V0ZjggfSBmcm9tIFwiLi9wdXJlSnNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIHRleHRFbmNvZGVyRnJvbVV0ZjgsIHRvVXRmOCBhcyB0ZXh0RW5jb2RlclRvVXRmOCB9IGZyb20gXCIuL3doYXR3Z0VuY29kaW5nQXBpXCI7XG5cbmRlY2xhcmUgY29uc3QgVGV4dERlY29kZXI6IEZ1bmN0aW9uIHwgdW5kZWZpbmVkO1xuZGVjbGFyZSBjb25zdCBUZXh0RW5jb2RlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dDogc3RyaW5nKTogVWludDhBcnJheSA9PlxuICB0eXBlb2YgVGV4dEVuY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyRnJvbVV0ZjgoaW5wdXQpIDoganNGcm9tVXRmOChpbnB1dCk7XG5cbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQ6IFVpbnQ4QXJyYXkpOiBzdHJpbmcgPT5cbiAgdHlwZW9mIFRleHREZWNvZGVyID09PSBcImZ1bmN0aW9uXCIgPyB0ZXh0RW5jb2RlclRvVXRmOChpbnB1dCkgOiBqc1RvVXRmOChpbnB1dCk7XG4iXX0=

/***/ }),

/***/ 49575:
/*!*******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/client-lex-runtime-service/dist/es/package.json ***!
  \*******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"@aws-sdk/client-lex-runtime-service","description":"AWS SDK for JavaScript Lex Runtime Service Client for Node.js, Browser and React Native","version":"3.6.1","scripts":{"clean":"yarn remove-definitions && yarn remove-dist && yarn remove-documentation","build-documentation":"yarn remove-documentation && typedoc ./","prepublishOnly":"yarn build","pretest":"yarn build:cjs","remove-definitions":"rimraf ./types","remove-dist":"rimraf ./dist","remove-documentation":"rimraf ./docs","test:unit":"mocha **/cjs/**/*.spec.js","test":"yarn test:unit","build:cjs":"tsc -p tsconfig.json","build:es":"tsc -p tsconfig.es.json","build":"yarn build:cjs && yarn build:es","postbuild":"downlevel-dts types types/ts3.4"},"main":"./dist/cjs/index.js","types":"./types/index.d.ts","module":"./dist/es/index.js","browser":{"./runtimeConfig":"./runtimeConfig.browser"},"react-native":{"./runtimeConfig":"./runtimeConfig.native"},"sideEffects":false,"dependencies":{"@aws-crypto/sha256-browser":"^1.0.0","@aws-crypto/sha256-js":"^1.0.0","@aws-sdk/config-resolver":"3.6.1","@aws-sdk/credential-provider-node":"3.6.1","@aws-sdk/fetch-http-handler":"3.6.1","@aws-sdk/hash-node":"3.6.1","@aws-sdk/invalid-dependency":"3.6.1","@aws-sdk/middleware-content-length":"3.6.1","@aws-sdk/middleware-host-header":"3.6.1","@aws-sdk/middleware-logger":"3.6.1","@aws-sdk/middleware-retry":"3.6.1","@aws-sdk/middleware-serde":"3.6.1","@aws-sdk/middleware-signing":"3.6.1","@aws-sdk/middleware-stack":"3.6.1","@aws-sdk/middleware-user-agent":"3.6.1","@aws-sdk/node-config-provider":"3.6.1","@aws-sdk/node-http-handler":"3.6.1","@aws-sdk/protocol-http":"3.6.1","@aws-sdk/smithy-client":"3.6.1","@aws-sdk/types":"3.6.1","@aws-sdk/url-parser":"3.6.1","@aws-sdk/url-parser-native":"3.6.1","@aws-sdk/util-base64-browser":"3.6.1","@aws-sdk/util-base64-node":"3.6.1","@aws-sdk/util-body-length-browser":"3.6.1","@aws-sdk/util-body-length-node":"3.6.1","@aws-sdk/util-user-agent-browser":"3.6.1","@aws-sdk/util-user-agent-node":"3.6.1","@aws-sdk/util-utf8-browser":"3.6.1","@aws-sdk/util-utf8-node":"3.6.1","tslib":"^2.0.0"},"devDependencies":{"@aws-sdk/client-documentation-generator":"3.6.1","@types/chai":"^4.2.11","@types/mocha":"^8.0.4","@types/node":"^12.7.5","downlevel-dts":"0.7.0","jest":"^26.1.0","rimraf":"^3.0.0","typedoc":"^0.19.2","typescript":"~4.1.2"},"engines":{"node":">=10.0.0"},"typesVersions":{"<4.0":{"types/*":["types/ts3.4/*"]}},"author":{"name":"AWS SDK for JavaScript Team","url":"https://aws.amazon.com/javascript/"},"license":"Apache-2.0","homepage":"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-lex-runtime-service","repository":{"type":"git","url":"https://github.com/aws/aws-sdk-js-v3.git","directory":"clients/client-lex-runtime-service"}}');

/***/ })

}]);