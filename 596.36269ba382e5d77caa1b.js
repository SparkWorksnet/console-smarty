(self["webpackChunksparkworks_console"] = self["webpackChunksparkworks_console"] || []).push([[596],{

/***/ 6596:
/*!************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm/amplify-s3-album.entry.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amplify_s3_album": function() { return /* binding */ AmplifyS3Album; }
/* harmony export */ });
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-83f2275b.js */ 14600);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @aws-amplify/core */ 61);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @aws-amplify/core */ 3531);
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @aws-amplify/core */ 48604);
/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage-types-f257c0f2.js */ 65640);
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Translations-c833f663.js */ 46289);
/* harmony import */ var _constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants-d7afd96c.js */ 93189);
/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @aws-amplify/storage */ 3117);
/* harmony import */ var _storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storage-helpers-95bd359a.js */ 50294);












 // Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */


var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var amplifyS3AlbumCss = ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_11__.ConsoleLogger('S3Album');

var AmplifyS3Album = /*#__PURE__*/function () {
  function AmplifyS3Album(hostRef) {
    var _this = this;

    (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, AmplifyS3Album);

    (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.r)(this, hostRef);
    /** The content type header used when uploading to S3 */

    this.contentType = 'binary/octet-stream';
    /** The access level of the files */

    this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_6__.A.Public;
    /** Boolean to enable or disable picker */

    this.picker = true;
    /** Picker button text */

    this.pickerText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_7__.T.PICKER_TEXT;
    this.albumItems = [];
    this.imgArr = {};
    this.list = /*#__PURE__*/(0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
      var _this$path, path, level, track, identityId, data;

      return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$path = _this.path, path = _this$path === void 0 ? '' : _this$path, level = _this.level, track = _this.track, identityId = _this.identityId;
              logger.debug('Album path: ' + path);

              if (!(!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_9__.Storage || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.list !== 'function')) {
                _context.next = 4;
                break;
              }

              throw new Error(_constants_d7afd96c_js__WEBPACK_IMPORTED_MODULE_8__.e);

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_9__.Storage.list(path, {
                level: level,
                track: track,
                identityId: identityId
              });

            case 7:
              data = _context.sent;

              _this.marshal(data);

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);
              logger.warn(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    }));

    this.marshal = function (list) {
      list.forEach(function (item) {
        var name = item.key.toLowerCase();
        var ext = name.split('.')[1];

        if (_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_10__.i.has(ext)) {
          if (!item.contentType || item.contentType && item.contentType === 'binary/octet-stream') {
            item.contentType = _this.getContentType(item);
          }
        }
      });
      var filtered = list.filter(function (item) {
        return item.contentType && item.contentType.startsWith('image/');
      });
      var items = _this.filter ? _this.filter(filtered) : filtered;
      items = _this.sort ? _this.sort(items) : items;
      _this.albumItems = items;
      logger.debug('album items', _this.albumItems);

      _this.constructImgArray(_this.albumItems);
    };

    this.constructImgArray = function (list) {
      list.map(function (item) {
        _this.imgArr["".concat(item['key'])] = item['key'];
      });
    };

    this.handlePick = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(event) {
        var file, _this$path2, path, level, track, fileToKey, key, filtered;

        return C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = event.target.files[0];
                _this$path2 = _this.path, path = _this$path2 === void 0 ? '' : _this$path2, level = _this.level, track = _this.track, fileToKey = _this.fileToKey;
                key = path + (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_10__.c)(file, fileToKey);
                _context2.prev = 3;
                _context2.next = 6;
                return (0,_storage_helpers_95bd359a_js__WEBPACK_IMPORTED_MODULE_10__.p)(key, file, level, track, file['type'], logger);

              case 6:
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](3);
                logger.error(_context2.t0);
                throw new Error(_context2.t0);

              case 12:
                if (Object.keys(_this.imgArr).includes(key)) {
                  _this.albumItems = (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this.albumItems);
                  _this.imgArr[key] = "".concat(key, "-").concat(v4());
                } else {
                  filtered = [].concat((0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this.albumItems), (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(_this.filter ? _this.filter([{
                    key: key
                  }]) : [{
                    key: key
                  }]));
                  _this.albumItems = _this.sort ? _this.sort(filtered) : filtered;
                }

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 8]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  (0,C_Users_qopbo_IdeaProjects_sparkworks_datalake_console_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(AmplifyS3Album, [{
    key: "getContentType",
    value: function getContentType(item) {
      return (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_12__.filenameToContentType)(item.key, 'image/*');
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.list();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "album-container"
      }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
        class: "grid-row"
      }, this.albumItems.map(function (item) {
        return (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("div", {
          class: "grid-item",
          key: "key-".concat(item.key)
        }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-s3-image", {
          key: _this2.imgArr[item.key],
          imgKey: item.key,
          level: _this2.level,
          path: _this2.path,
          identityId: _this2.identityId,
          track: _this2.track,
          handleOnError: _this2.handleOnError,
          handleOnLoad: _this2.handleOnLoad
        }), (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("span", {
          class: "img-overlay"
        }));
      }))), this.picker && (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_5__.h)("amplify-picker", {
        pickerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_13__.I18n.get(this.pickerText),
        inputHandler: function inputHandler(e) {
          return _this2.handlePick(e);
        },
        acceptValue: "image/*"
      }));
    }
  }]);

  return AmplifyS3Album;
}();

AmplifyS3Album.style = amplifyS3AlbumCss;


/***/ })

}]);