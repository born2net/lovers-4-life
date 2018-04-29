webpackHotUpdate(4,{

/***/ "./pages/lovers/forever.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_spring__ = __webpack_require__("./node_modules/react-spring/dist/react-spring.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__ = __webpack_require__("./ethereum/lover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);

var _jsxFileName = '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/forever.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








// Little helpers ...
var url = function url(name) {
  var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (wrap ? 'url(' : '') + 'https://awv3node-homepage.surge.sh/build/assets/' + name + '.svg' + (wrap ? ')' : '');
};

var LoverForever = function (_Component) {
  _inherits(LoverForever, _Component);

  function LoverForever() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoverForever);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoverForever.__proto__ || Object.getPrototypeOf(LoverForever)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isLoading: false
    }, _this.seeAll = function () {
      _this.setState({ isLoading: true });
      __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute('/lovers/all');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoverForever, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */],
          { ref: function ref(_ref2) {
              return _this2.parallax = _ref2;
            }, pages: 1, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer, { offset: 0, speed: 0, factor: 3, style: { backgroundColor: '#390044', backgroundSize: 'cover' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
            { offset: 0, speed: 0.8, style: { opacity: 0.1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
            { offset: 0.75, speed: 0.5, style: { opacity: 0.1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
            { offset: 0, speed: 0.2, style: { opacity: 0.2 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_react_spring__["a" /* Parallax */].Layer,
            {
              offset: 0,
              speed: 0.1,
              onClick: function onClick() {
                return _this2.parallax.scrollTo(1);
              },
              style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Container */],
              { textAlign: 'center', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Header */],
                  { as: 'h1', inverted: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  'It\'s official!'
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Header */],
                  { as: 'h2', inverted: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  },
                  this.props.yourName,
                  ' + ',
                  this.props.loversName,
                  ' = TRUE '
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Header */],
                  { as: 'h3', inverted: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    }
                  },
                  this.props.message
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Header */],
                  { as: 'h4', inverted: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 89
                    }
                  },
                  this.props.yourName,
                  ' paid ',
                  __WEBPACK_IMPORTED_MODULE_5__ethereum_web3__["a" /* default */].utils.fromWei(this.props.worth.toString(), 'ether'),
                  ' ETH for this. So don\'t break up. '
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Divider */], { hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */],
                  { onClick: this.seeAll, loading: this.state.isLoading, inverted: true, color: 'purple', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    }
                  },
                  'See All Lovers'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var loverAddress, index, info;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                //const lover = Campaign(props.query.address);
                loverAddress = props.query.address;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.findLover(loverAddress).call();

              case 3:
                index = _context.sent;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_4__ethereum_lover__["a" /* default */].methods.loverList(index).call();

              case 6:
                info = _context.sent;


                //const summary = await campaign.methods.getSummary().call();
                console.log({ info: info });

                return _context.abrupt('return', {
                  yourName: info[0],
                  loversName: info[1],
                  message: info[2],
                  worth: info[3]
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LoverForever;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = LoverForever;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(url, 'url', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/forever.js');
  reactHotLoader.register(LoverForever, 'LoverForever', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/forever.js');
  reactHotLoader.register(_default, 'default', '/home/tomasroaldsnes/Code/lovers-for-life/pages/lovers/forever.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/lovers/forever")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1e6ee63c67d1d3142114.hot-update.js.map