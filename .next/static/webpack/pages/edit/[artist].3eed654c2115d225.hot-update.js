"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit/[artist]",{

/***/ "./src/pages/edit/[artist].js":
/*!************************************!*\
  !*** ./src/pages/edit/[artist].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/editArtist.module.css */ \"./src/styles/editArtist.module.css\");\n/* harmony import */ var _styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditArtist = (param)=>{\n    let { artistInfo } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { artist } = router.query;\n    const [note, setNote] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (artistInfo) {\n            setNote(artistInfo.note || \"\");\n        }\n    }, [\n        artistInfo\n    ]);\n    const handleEdit = async ()=>{\n        const updatedArtistInfo = {\n            note: note\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"/api/artists/\".concat(artist), updatedArtistInfo);\n            console.log(\"Edit response:\", response.data);\n            router.push(\"/\".concat(artist));\n        } catch (error) {\n            console.error(\"Error editing artist:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Modifier les informations de l'artiste\"\n            }, void 0, false, {\n                fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"note\",\n                                className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                children: \"Note :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"note\",\n                                value: note,\n                                onChange: (e)=>setNote(e.target.value),\n                                className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                min: \"0\",\n                                max: \"10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().formGroup),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleEdit,\n                            className: (_styles_editArtist_module_css__WEBPACK_IMPORTED_MODULE_4___default().saveButton),\n                            children: \"Enregistrer les modifications\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomaskidney/todoapp/src/pages/edit/[artist].js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditArtist, \"TXJgEaAvUEZdIud2Ubz7AN0SRoU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditArtist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditArtist);\nvar _c;\n$RefreshReg$(_c, \"EditArtist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC9bYXJ0aXN0XS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNkO0FBQzhCO0FBRXhELE1BQU1LLGFBQWE7UUFBQyxFQUFFQyxVQUFVLEVBQUU7O0lBQ2hDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLE1BQU0sRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRS9CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVqQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxZQUFZO1lBQ2RLLFFBQVFMLFdBQVdJLElBQUksSUFBSTtRQUM3QjtJQUNGLEdBQUc7UUFBQ0o7S0FBVztJQUVmLE1BQU1NLGFBQWE7UUFDakIsTUFBTUMsb0JBQW9CO1lBQ3hCSCxNQUFNQTtRQUNSO1FBRUEsSUFBSTtZQUNGLE1BQU1JLFdBQVcsTUFBTVgsaURBQVMsQ0FBQyxnQkFBdUIsT0FBUEssU0FBVUs7WUFDM0RHLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JILFNBQVNJLElBQUk7WUFDM0NYLE9BQU9ZLElBQUksQ0FBQyxJQUFXLE9BQVBYO1FBQ2xCLEVBQUUsT0FBT1ksT0FBTztZQUNkSixRQUFRSSxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBRUEscUJBSUUsOERBQUNDO1FBQUlDLFdBQVdsQixnRkFBZ0I7OzBCQUM5Qiw4REFBQ29CO2dCQUFHRixXQUFXbEIsNEVBQVk7MEJBQUU7Ozs7OzswQkFDN0IsOERBQUNzQjtnQkFBS0osV0FBV2xCLDJFQUFXOztrQ0FDMUIsOERBQUNpQjt3QkFBSUMsV0FBV2xCLGdGQUFnQjs7MENBQzlCLDhEQUFDd0I7Z0NBQU1DLFNBQVE7Z0NBQU9QLFdBQVdsQiw0RUFBWTswQ0FBRTs7Ozs7OzBDQUcvQyw4REFBQzBCO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPdkI7Z0NBQ1B3QixVQUFVLENBQUNDLElBQU14QixRQUFRd0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUN2Q1gsV0FBV2xCLDRFQUFZO2dDQUN2QmlDLEtBQUk7Z0NBQ0pDLEtBQUk7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ2pCO3dCQUFJQyxXQUFXbEIsZ0ZBQWdCO2tDQUM5Qiw0RUFBQ21DOzRCQUFPUixNQUFLOzRCQUFTUyxTQUFTNUI7NEJBQVlVLFdBQVdsQixpRkFBaUI7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25GO0dBdkRNQzs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBNEROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9lZGl0L1thcnRpc3RdLmpzP2FjNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9lZGl0QXJ0aXN0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBFZGl0QXJ0aXN0ID0gKHsgYXJ0aXN0SW5mbyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGFydGlzdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcnRpc3RJbmZvKSB7XG4gICAgICBzZXROb3RlKGFydGlzdEluZm8ubm90ZSB8fCAnJyk7XG4gICAgfVxuICB9LCBbYXJ0aXN0SW5mb10pO1xuXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZEFydGlzdEluZm8gPSB7XG4gICAgICBub3RlOiBub3RlLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvYXJ0aXN0cy8ke2FydGlzdH1gLCB1cGRhdGVkQXJ0aXN0SW5mbyk7XG4gICAgICBjb25zb2xlLmxvZygnRWRpdCByZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvJHthcnRpc3R9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGVkaXRpbmcgYXJ0aXN0OicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICBcblxuXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Nb2RpZmllciBsZXMgaW5mb3JtYXRpb25zIGRlIGwnYXJ0aXN0ZTwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibm90ZVwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgIE5vdGUgOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwibm90ZVwiXG4gICAgICAgICAgICB2YWx1ZT17bm90ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tm90ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlRWRpdH0gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZUJ1dHRvbn0+XG4gICAgICAgICAgICBFbnJlZ2lzdHJlciBsZXMgbW9kaWZpY2F0aW9uc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRBcnRpc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInN0eWxlcyIsIkVkaXRBcnRpc3QiLCJhcnRpc3RJbmZvIiwicm91dGVyIiwiYXJ0aXN0IiwicXVlcnkiLCJub3RlIiwic2V0Tm90ZSIsImhhbmRsZUVkaXQiLCJ1cGRhdGVkQXJ0aXN0SW5mbyIsInJlc3BvbnNlIiwicHV0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsInRpdGxlIiwiZm9ybSIsImZvcm1Hcm91cCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJtaW4iLCJtYXgiLCJidXR0b24iLCJvbkNsaWNrIiwic2F2ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/edit/[artist].js\n"));

/***/ })

});