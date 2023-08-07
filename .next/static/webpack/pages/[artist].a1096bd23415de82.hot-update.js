"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[artist]",{

/***/ "./src/pages/[artist].js":
/*!*******************************!*\
  !*** ./src/pages/[artist].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/artistDetail.module.css */ \"./src/styles/artistDetail.module.css\");\n/* harmony import */ var _styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst BackArrow = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().backArrow),\n            children: \"← Revenir en arri\\xe8re\"\n        }, void 0, false, {\n            fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n_c = BackArrow;\nconst ArtistDetail = (param)=>{\n    let { artistInfo, youtubeVideoId, note } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { artist } = router.query;\n    if (!artistInfo) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Chargement...\"\n        }, void 0, false, {\n            fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, undefined);\n    }\n    const handleDelete = async (id)=>{\n        try {\n            const deleteUrl = \"/api/deleteSong/\".concat(id);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](deleteUrl);\n            if (response.status === 200) {\n                console.log(\"\\xc9l\\xe9ment supprim\\xe9 avec succ\\xe8s de la base de donn\\xe9es\");\n                router.push(\"/\");\n            } else {\n                console.error(\"Erreur lors de la suppression de l'\\xe9l\\xe9ment de la base de donn\\xe9es\");\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la suppression de l'\\xe9l\\xe9ment de la base de donn\\xe9es :\", error);\n        }\n    };\n    const handleEdit = async ()=>{\n        const updatedArtistInfo = {\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"/api/artists/\".concat(artist), updatedArtistInfo); // Replace with your edit API endpoint\n            console.log(\"Edit response:\", response.data);\n        // Handle success or show a success message\n        } catch (error) {\n            console.error(\"Error editing artist:\", error);\n        // Handle error or show an error message\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().backArrowWrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackArrow, {}, void 0, false, {\n                    fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            artistInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().artistInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().artistName),\n                        children: artist\n                    }, void 0, false, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().genre),\n                        children: [\n                            \"Genre de musique : \",\n                            artistInfo.genre\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().trackName),\n                        children: [\n                            \"Titre de la  musique : \",\n                            artistInfo.trackName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().playcount),\n                        children: [\n                            \"Nombre d'\\xe9coutes de la musique : \",\n                            artistInfo.playcount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    note ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().note),\n                        children: [\n                            \"Note : \",\n                            note\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined) : null,\n                    youtubeVideoId ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().youtubeVideo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().videoTitle),\n                                children: \"Clip vid\\xe9o :\"\n                            }, void 0, false, {\n                                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                width: \"560\",\n                                height: \"315\",\n                                src: \"https://www.youtube.com/embed/\".concat(youtubeVideoId),\n                                title: \"YouTube video player\",\n                                frameBorder: \"0\",\n                                allowFullScreen: true\n                            }, void 0, false, {\n                                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().editDeleteButtons),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/edit/\".concat(artist),\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().modifier),\n                                            children: \"Modifier cet article\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDelete(artistInfo.id),\n                                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().deleteButton),\n                                        children: \"Supprimer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().noVideo),\n                        children: \"Aucun clip vid\\xe9o trouv\\xe9 pour la derni\\xe8re musique.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().notFound),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().notFoundTitle),\n                        children: \"Artiste introuvable\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_artistDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().notFoundText),\n                        children: \"L'artiste que vous recherchez n'a pas \\xe9t\\xe9 trouv\\xe9 dans la base de donn\\xe9es.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thomaskidney/todoapp/src/pages/[artist].js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArtistDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c1 = ArtistDetail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtistDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"BackArrow\");\n$RefreshReg$(_c1, \"ArtistDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU14Riw4REFBQ0c7d0JBQUVDLFdBQVdKLGdGQUFjO2tDQUFFOzs7Ozs7Ozs7OzswQ0FJbEMsOERBQUNhO2dCQUFJVCxXQUFXSixpRkFBZTs7a0NBQzdCLDhEQUFDOEI7d0JBQUcxQixXQUFXSixzRkFBb0I7a0NBQUU7Ozs7OztrQ0FDckMsOERBQUNHO3dCQUFFQyxXQUFXSixxRkFBbUI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QztHQXJGTU07O1FBQ1dULGtEQUFTQTs7O01BRHBCUzs7QUF1TE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1thcnRpc3RdLmpzPzhhNzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9hcnRpc3REZXRhaWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEJhY2tBcnJvdyA9ICgpID0+IChcbiAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iYWNrQXJyb3d9PiZsYXJyOyBSZXZlbmlyIGVuIGFycmnDqHJlPC9wPlxuICA8L0xpbms+XG4pO1xuXG5jb25zdCBBcnRpc3REZXRhaWwgPSAoeyBhcnRpc3RJbmZvLCB5b3V0dWJlVmlkZW9JZCwgbm90ZSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGFydGlzdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGlmICghYXJ0aXN0SW5mbykge1xuICAgIHJldHVybiA8ZGl2PkNoYXJnZW1lbnQuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVsZXRlVXJsID0gYC9hcGkvZGVsZXRlU29uZy8ke2lkfWA7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShkZWxldGVVcmwpO1xuICBcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnw4lsw6ltZW50IHN1cHByaW3DqSBhdmVjIHN1Y2PDqHMgZGUgbGEgYmFzZSBkZSBkb25uw6llcycpO1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24gZGUgbFxcJ8OpbMOpbWVudCBkZSBsYSBiYXNlIGRlIGRvbm7DqWVzJyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHN1cHByZXNzaW9uIGRlIGxcXCfDqWzDqW1lbnQgZGUgbGEgYmFzZSBkZSBkb25uw6llcyA6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRBcnRpc3RJbmZvID0ge1xuICAgICAgLy8gRGVmaW5lIHRoZSB1cGRhdGVkIGFydGlzdCBpbmZvcm1hdGlvbiBoZXJlIChlLmcuLCBnZW5yZSwgdHJhY2tOYW1lLCBldGMuKVxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvYXJ0aXN0cy8ke2FydGlzdH1gLCB1cGRhdGVkQXJ0aXN0SW5mbyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGVkaXQgQVBJIGVuZHBvaW50XG4gICAgICBjb25zb2xlLmxvZygnRWRpdCByZXNwb25zZTonLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzIG9yIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZWRpdGluZyBhcnRpc3Q6JywgZXJyb3IpO1xuICAgICAgLy8gSGFuZGxlIGVycm9yIG9yIHNob3cgYW4gZXJyb3IgbWVzc2FnZVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja0Fycm93V3JhcHBlcn0+XG4gICAgICAgIDxCYWNrQXJyb3cgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge2FydGlzdEluZm8gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0SW5mb30+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdE5hbWV9PnthcnRpc3R9PC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5nZW5yZX0+R2VucmUgZGUgbXVzaXF1ZSA6IHthcnRpc3RJbmZvLmdlbnJlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50cmFja05hbWV9PlRpdHJlIGRlIGxhICBtdXNpcXVlIDoge2FydGlzdEluZm8udHJhY2tOYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5Y291bnR9Pk5vbWJyZSBkJ8OpY291dGVzIGRlIGxhIG11c2lxdWUgOiB7YXJ0aXN0SW5mby5wbGF5Y291bnR9PC9wPlxuICAgICAgICAgIHtub3RlID8gKCAvLyBWw6lyaWZpZXIgc2kgbGEgbm90ZSBleGlzdGVcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vdGV9Pk5vdGUgOiB7bm90ZX08L3A+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3lvdXR1YmVWaWRlb0lkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy55b3V0dWJlVmlkZW99PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW9UaXRsZX0+Q2xpcCB2aWTDqW8gOjwvaDI+XG4gICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjU2MFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmVWaWRlb0lkfWB9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXREZWxldGVCdXR0b25zfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VkaXQvJHthcnRpc3R9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RpZmllcn0+TW9kaWZpZXIgY2V0IGFydGljbGU8L3A+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGFydGlzdEluZm8uaWQpfSBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259PlxuICAgICAgICAgICAgICAgICAgU3VwcHJpbWVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vVmlkZW99PkF1Y3VuIGNsaXAgdmlkw6lvIHRyb3V2w6kgcG91ciBsYSBkZXJuacOocmUgbXVzaXF1ZS48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdEZvdW5kfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmRUaXRsZX0+QXJ0aXN0ZSBpbnRyb3V2YWJsZTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm90Rm91bmRUZXh0fT5MJ2FydGlzdGUgcXVlIHZvdXMgcmVjaGVyY2hleiBuJ2EgcGFzIMOpdMOpIHRyb3V2w6kgZGFucyBsYSBiYXNlIGRlIGRvbm7DqWVzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXJ0aXN0ID0gcGFyYW1zLmFydGlzdDtcbiAgICBjb25zdCBsYXN0Rm1BcGlLZXkgPSAnY2E4NjczYzcxN2ZhODA3MDA5YTllMzNlMGMwZmJlYzknOyAvLyBSZW1wbGFjZXogcGFyIHZvdHJlIGNsw6kgQVBJIExhc3QuZm1cbiAgICBjb25zdCB5b3V0dWJlQXBpS2V5ID0gJ0FJemFTeUNaMnRZX0xNX2twWHlVUkc2eDJUNEFZVTlCOWFZbDRMZyc7IC8vIFJlbXBsYWNleiBwYXIgdm90cmUgY2zDqSBBUEkgWW91VHViZVxuXG4gICAgLy8gQXBwZWwgw6AgbCdBUEkgTGFzdC5mbSBwb3VyIG9idGVuaXIgbGVzIGluZm9ybWF0aW9ucyBkZSBsJ2FydGlzdGVcbiAgICBjb25zdCBhcnRpc3RJbmZvVXJsID0gYGh0dHA6Ly93cy5hdWRpb3Njcm9iYmxlci5jb20vMi4wLz9tZXRob2Q9YXJ0aXN0LmdldGluZm8mYXJ0aXN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgYXJ0aXN0XG4gICAgKX0mYXBpX2tleT0ke2xhc3RGbUFwaUtleX0mZm9ybWF0PWpzb25gO1xuXG4gICAgY29uc3QgYXJ0aXN0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYXJ0aXN0SW5mb1VybCk7XG4gICAgY29uc3QgYXJ0aXN0RGF0YSA9IGFydGlzdFJlc3BvbnNlLmRhdGE7XG5cbiAgICBpZiAoYXJ0aXN0RGF0YSAmJiBhcnRpc3REYXRhLmFydGlzdCkge1xuICAgICAgY29uc3QgZ2VucmUgPSBhcnRpc3REYXRhLmFydGlzdC50YWdzLnRhZy5sZW5ndGggPiAwID8gYXJ0aXN0RGF0YS5hcnRpc3QudGFncy50YWdbMF0ubmFtZSA6ICcnO1xuXG4gICAgICAvLyBSw6ljdXDDqXJlciBsZXMgZG9ubsOpZXMgZGUgbGEgYmFzZSBkZSBkb25uw6llc1xuICAgICAgY29uc3QgZGJGaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGIuanNvbicpO1xuICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShkYkZpbGVQYXRoLCAndXRmOCcpO1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xuXG4gICAgICAvLyBWw6lyaWZpZXIgc2kgZGF0YS5zZWFyY2hzIGVzdCB1biB0YWJsZWF1IGF2YW50IGQndXRpbGlzZXIgbGEgbcOpdGhvZGUgZmluZFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5zZWFyY2hzKSkge1xuICAgICAgICAvLyBUcm91dmVyIGwnYXJ0aXN0ZSBjb3JyZXNwb25kYW50IGRhbnMgbGVzIGRvbm7DqWVzIGRlIGxhIGJhc2UgZGUgZG9ubsOpZXNcbiAgICAgICAgY29uc3QgYXJ0aXN0SW5mbyA9IGRhdGEuc2VhcmNocy5maW5kKGl0ZW0gPT4gaXRlbS5hcnRpc3QgPT09IGFydGlzdCk7XG5cbiAgICAgICAgLy8gUmVjaGVyY2hlciBsYSBkZXJuacOocmUgdmlkw6lvIFlvdVR1YmUgY29ycmVzcG9uZGFudCBhdSB0aXRyZSBkZSBsYSBjaGFuc29uIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llc1xuICAgICAgICBjb25zdCB0cmFja05hbWUgPSBhcnRpc3RJbmZvLnRyYWNrTmFtZTsgLy8gUsOpY3Vww6lyZXIgbGUgdGl0cmUgZGUgbGEgY2hhbnNvbiBkZXB1aXMgbGEgYmFzZSBkZSBkb25uw6llc1xuICAgICAgICBjb25zdCB5b3V0dWJlU2VhcmNoVXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoP3BhcnQ9c25pcHBldCZxPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgIGAke2FydGlzdH0gJHt0cmFja05hbWV9YFxuICAgICAgICApfSZrZXk9JHt5b3V0dWJlQXBpS2V5fWA7XG5cbiAgICAgICAgY29uc3QgeW91dHViZVNlYXJjaFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHlvdXR1YmVTZWFyY2hVcmwpO1xuICAgICAgICBjb25zdCB5b3V0dWJlU2VhcmNoRGF0YSA9IHlvdXR1YmVTZWFyY2hSZXNwb25zZS5kYXRhO1xuICAgICAgICBsZXQgeW91dHViZVZpZGVvSWQgPSAnJztcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgeW91dHViZVNlYXJjaERhdGEgJiZcbiAgICAgICAgICB5b3V0dWJlU2VhcmNoRGF0YS5pdGVtcyAmJlxuICAgICAgICAgIHlvdXR1YmVTZWFyY2hEYXRhLml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gVHJvdXZlciBsYSBwcmVtacOocmUgdmlkw6lvIFlvdVR1YmUgcXVpIGNvcnJlc3BvbmQgYXUgdGl0cmUgZGUgbGEgY2hhbnNvblxuICAgICAgICAgIHlvdXR1YmVWaWRlb0lkID0geW91dHViZVNlYXJjaERhdGEuaXRlbXNbMF0uaWQudmlkZW9JZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFLDqWN1cMOpcmVyIGxhIG5vdGUgZGUgbCdhcnRpc3RlIHMnaWwgZW4gYSB1bmVcbiAgICAgICAgbGV0IG5vdGUgPSAnJztcbiAgICAgICAgaWYgKGFydGlzdEluZm8gJiYgJ25vdGUnIGluIGFydGlzdEluZm8pIHtcbiAgICAgICAgICBub3RlID0gYXJ0aXN0SW5mby5ub3RlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXJ0aXN0SW5mbzoge1xuICAgICAgICAgICAgICBnZW5yZTogZ2VucmUsXG4gICAgICAgICAgICAgIGxpc3RlbmVyczogYXJ0aXN0RGF0YS5hcnRpc3Quc3RhdHMubGlzdGVuZXJzLFxuICAgICAgICAgICAgICB0cmFja05hbWU6IHRyYWNrTmFtZSxcbiAgICAgICAgICAgICAgcGxheWNvdW50OiBhcnRpc3REYXRhLmFydGlzdC5zdGF0cy5wbGF5Y291bnQsXG4gICAgICAgICAgICAgIGlkOiBhcnRpc3RJbmZvLmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlvdXR1YmVWaWRlb0lkOiB5b3V0dWJlVmlkZW9JZCxcbiAgICAgICAgICAgIG5vdGU6IG5vdGUsIC8vIFBhc3NlciBsYSBub3RlIMOgIGxhIHBhZ2VcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRGF0YSBpbiBkYi5qc29uIGlzIG5vdCBpbiB0aGUgY29ycmVjdCBmb3JtYXQuJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGFydGlzdEluZm86IG51bGwsXG4gICAgICAgICAgICB5b3V0dWJlVmlkZW9JZDogJycsXG4gICAgICAgICAgICBub3RlOiAnJywgLy8gUGFyIGTDqWZhdXQsIG5vdGUgZXN0IHZpZGVcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIGFydGlzdEluZm86IG51bGwsXG4gICAgICAgICAgeW91dHViZVZpZGVvSWQ6ICcnLFxuICAgICAgICAgIG5vdGU6ICcnLCAvLyBQYXIgZMOpZmF1dCwgbm90ZSBlc3QgdmlkZVxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucyBkZSBsXFwnYXJ0aXN0ZSA6JywgZXJyb3IpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBhcnRpc3RJbmZvOiBudWxsLFxuICAgICAgICB5b3V0dWJlVmlkZW9JZDogJycsXG4gICAgICAgIG5vdGU6ICcnLCAvLyBQYXIgZMOpZmF1dCwgbm90ZSBlc3QgdmlkZVxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdERldGFpbDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMaW5rIiwiYXhpb3MiLCJzdHlsZXMiLCJCYWNrQXJyb3ciLCJocmVmIiwicCIsImNsYXNzTmFtZSIsImJhY2tBcnJvdyIsIkFydGlzdERldGFpbCIsImFydGlzdEluZm8iLCJ5b3V0dWJlVmlkZW9JZCIsIm5vdGUiLCJyb3V0ZXIiLCJhcnRpc3QiLCJxdWVyeSIsImRpdiIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlVXJsIiwicmVzcG9uc2UiLCJkZWxldGUiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVycm9yIiwiaGFuZGxlRWRpdCIsInVwZGF0ZWRBcnRpc3RJbmZvIiwicHV0IiwiZGF0YSIsImNvbnRhaW5lciIsImJhY2tBcnJvd1dyYXBwZXIiLCJoMSIsImFydGlzdE5hbWUiLCJnZW5yZSIsInRyYWNrTmFtZSIsInBsYXljb3VudCIsInlvdXR1YmVWaWRlbyIsImgyIiwidmlkZW9UaXRsZSIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidGl0bGUiLCJmcmFtZUJvcmRlciIsImFsbG93RnVsbFNjcmVlbiIsImVkaXREZWxldGVCdXR0b25zIiwicGFzc0hyZWYiLCJtb2RpZmllciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkZWxldGVCdXR0b24iLCJub1ZpZGVvIiwibm90Rm91bmQiLCJub3RGb3VuZFRpdGxlIiwibm90Rm91bmRUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[artist].js\n"));

/***/ })

});