"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addSong";
exports.ids = ["pages/api/addSong"];
exports.modules = {

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVycy5qcz9lMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSG9pc3RzIGEgbmFtZSBmcm9tIGEgbW9kdWxlIG9yIHByb21pc2VkIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gbW9kdWxlIHRoZSBtb2R1bGUgdG8gaG9pc3QgdGhlIG5hbWUgZnJvbVxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gaG9pc3RcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSBvbiB0aGUgbW9kdWxlIChvciBwcm9taXNlZCBtb2R1bGUpXG4gKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJob2lzdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaG9pc3Q7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBob2lzdChtb2R1bGUsIG5hbWUpIHtcbiAgICAvLyBJZiB0aGUgbmFtZSBpcyBhdmFpbGFibGUgaW4gdGhlIG1vZHVsZSwgcmV0dXJuIGl0LlxuICAgIGlmIChuYW1lIGluIG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW25hbWVdO1xuICAgIH1cbiAgICAvLyBJZiBhIHByb3BlcnR5IGNhbGxlZCBgdGhlbmAgZXhpc3RzLCBhc3N1bWUgaXQncyBhIHByb21pc2UgYW5kXG4gICAgLy8gcmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuYW1lLlxuICAgIGlmIChcInRoZW5cIiBpbiBtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZS50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZS50aGVuKChtb2QpPT5ob2lzdChtb2QsIG5hbWUpKTtcbiAgICB9XG4gICAgLy8gSWYgd2UncmUgdHJ5aW5nIHRvIGhvaXNlIHRoZSBkZWZhdWx0IGV4cG9ydCwgYW5kIHRoZSBtb2R1bGUgaXMgYSBmdW5jdGlvbixcbiAgICAvLyByZXR1cm4gdGhlIG1vZHVsZSBpdHNlbGYuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwiZnVuY3Rpb25cIiAmJiBuYW1lID09PSBcImRlZmF1bHRcIikge1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIHJldHVybiB1bmRlZmluZWQuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSong&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CaddSong.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSong&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CaddSong.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _src_pages_api_addSong_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src\\pages\\api\\addSong.js */ \"(api)/./src/pages/api/addSong.js\");\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_addSong_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_addSong_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/addSong\",\n        pathname: \"/api/addSong\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_addSong_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmFkZFNvbmcmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZzcmMlNUNwYWdlcyU1Q2FwaSU1Q2FkZFNvbmcuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUY7QUFDbEI7QUFDbUI7QUFDbEYsNEJBQTRCLHVHQUEwQjtBQUN0RDtBQUNBO0FBQzBEO0FBQzFEO0FBQ0EsaUVBQWUsZ0dBQUssQ0FBQyxzREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLGdHQUFLLENBQUMsc0RBQVE7QUFDcEM7QUFDTztBQUNQO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvPzljZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWlnbm9yZSB0aGlzIG5lZWQgdG8gYmUgaW1wb3J0ZWQgZnJvbSBuZXh0L2Rpc3QgdG8gYmUgZXh0ZXJuYWxcbmltcG9ydCAqIGFzIG1vZHVsZSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzXCI7XG5jb25zdCBQYWdlc0FQSVJvdXRlTW9kdWxlID0gbW9kdWxlLlBhZ2VzQVBJUm91dGVNb2R1bGU7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVwbGFjZWQgYnkgd2VicGFjay90dXJib3BhY2sgbG9hZGVyXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9zcmNcXFxccGFnZXNcXFxcYXBpXFxcXGFkZFNvbmcuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hZGRTb25nXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRkU29uZ1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSong&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CaddSong.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/addSong.js":
/*!**********************************!*\
  !*** ./src/pages/api/addSong.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { artist, trackName, playcount, listeners, url, genre } = req.body; // Ajouter le genre ici\n            // Charger les données actuelles depuis le fichier db.json\n            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"db.json\");\n            const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, \"utf8\");\n            const data = JSON.parse(jsonData);\n            // Vérifier si un élément avec le même trackName existe déjà\n            const existingItem = data.searchs.find((item)=>item.trackName === trackName);\n            if (existingItem) {\n                // Si un élément avec le même trackName existe déjà, renvoyer un message d'erreur\n                res.status(409).json({\n                    error: \"Une musique avec le m\\xeame titre existe d\\xe9j\\xe0 dans la base de donn\\xe9es\"\n                });\n                return;\n            }\n            // Générer un nouvel identifiant unique pour l'élément\n            const newId = Date.now().toString();\n            // Ajouter le nouvel élément à la liste des résultats de recherche\n            data.searchs.push({\n                id: newId,\n                artist: artist,\n                trackName: trackName,\n                playcount: playcount,\n                listeners: listeners,\n                url: url,\n                genre: genre\n            });\n            // Enregistrer les données mises à jour dans db.json\n            await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().writeFile(filePath, JSON.stringify(data, null, 2), \"utf8\");\n            res.status(200).json({\n                message: \"R\\xe9sultats de recherche ajout\\xe9s avec succ\\xe8s \\xe0 la base de donn\\xe9es\"\n            });\n        } catch (error) {\n            console.error(\"Erreur lors de l'enregistrement des r\\xe9sultats de recherche dans la base de donn\\xe9es:\", error);\n            res.status(500).json({\n                error: \"Erreur lors de l'enregistrement des r\\xe9sultats de recherche\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZFNvbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDTDtBQUVULGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdSLElBQUlTLElBQUksRUFBRSx1QkFBdUI7WUFFakcsMERBQTBEO1lBQzFELE1BQU1DLFdBQVdaLGdEQUFTLENBQUNjLFFBQVFDLEdBQUcsSUFBSTtZQUMxQyxNQUFNQyxXQUFXLE1BQU1qQiwyREFBVyxDQUFDYSxVQUFVO1lBQzdDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7WUFFeEIsNERBQTREO1lBQzVELE1BQU1LLGVBQWVILEtBQUtJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLbEIsU0FBUyxLQUFLQTtZQUVsRSxJQUFJZSxjQUFjO2dCQUNoQixpRkFBaUY7Z0JBQ2pGbEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXFFO2dCQUNuRztZQUNGO1lBRUEsc0RBQXNEO1lBQ3RELE1BQU1DLFFBQVFDLEtBQUtDLEdBQUcsR0FBR0MsUUFBUTtZQUVqQyxrRUFBa0U7WUFDbEViLEtBQUtJLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDO2dCQUNoQkMsSUFBSUw7Z0JBQ0p2QixRQUFRQTtnQkFDUkMsV0FBV0E7Z0JBQ1hDLFdBQVdBO2dCQUNYQyxXQUFXQTtnQkFDWEMsS0FBS0E7Z0JBQ0xDLE9BQU9BO1lBQ1Q7WUFFQSxvREFBb0Q7WUFDcEQsTUFBTVgsNERBQVksQ0FBQ2EsVUFBVU8sS0FBS2dCLFNBQVMsQ0FBQ2pCLE1BQU0sTUFBTSxJQUFJO1lBRTVEZixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVUsU0FBUztZQUFrRTtRQUNwRyxFQUFFLE9BQU9ULE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLDZGQUF3RkE7WUFDdEd4QixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE4RDtRQUM5RjtJQUNGLE9BQU87UUFDTHhCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS9hZGRTb25nLmpzPzEyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBhcnRpc3QsIHRyYWNrTmFtZSwgcGxheWNvdW50LCBsaXN0ZW5lcnMsIHVybCwgZ2VucmUgfSA9IHJlcS5ib2R5OyAvLyBBam91dGVyIGxlIGdlbnJlIGljaVxuXG4gICAgICAvLyBDaGFyZ2VyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGVwdWlzIGxlIGZpY2hpZXIgZGIuanNvblxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RiLmpzb24nKTtcbiAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgICAgIC8vIFbDqXJpZmllciBzaSB1biDDqWzDqW1lbnQgYXZlYyBsZSBtw6ptZSB0cmFja05hbWUgZXhpc3RlIGTDqWrDoFxuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gZGF0YS5zZWFyY2hzLmZpbmQoaXRlbSA9PiBpdGVtLnRyYWNrTmFtZSA9PT0gdHJhY2tOYW1lKTtcblxuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgICAvLyBTaSB1biDDqWzDqW1lbnQgYXZlYyBsZSBtw6ptZSB0cmFja05hbWUgZXhpc3RlIGTDqWrDoCwgcmVudm95ZXIgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgICByZXMuc3RhdHVzKDQwOSkuanNvbih7IGVycm9yOiAnVW5lIG11c2lxdWUgYXZlYyBsZSBtw6ptZSB0aXRyZSBleGlzdGUgZMOpasOgIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llcycgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR8OpbsOpcmVyIHVuIG5vdXZlbCBpZGVudGlmaWFudCB1bmlxdWUgcG91ciBsJ8OpbMOpbWVudFxuICAgICAgY29uc3QgbmV3SWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG5cbiAgICAgIC8vIEFqb3V0ZXIgbGUgbm91dmVsIMOpbMOpbWVudCDDoCBsYSBsaXN0ZSBkZXMgcsOpc3VsdGF0cyBkZSByZWNoZXJjaGVcbiAgICAgIGRhdGEuc2VhcmNocy5wdXNoKHtcbiAgICAgICAgaWQ6IG5ld0lkLFxuICAgICAgICBhcnRpc3Q6IGFydGlzdCxcbiAgICAgICAgdHJhY2tOYW1lOiB0cmFja05hbWUsXG4gICAgICAgIHBsYXljb3VudDogcGxheWNvdW50LFxuICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGdlbnJlOiBnZW5yZSwgLy8gQWpvdXRlciBsZSBnZW5yZSBpY2lcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbnJlZ2lzdHJlciBsZXMgZG9ubsOpZXMgbWlzZXMgw6Agam91ciBkYW5zIGRiLmpzb25cbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksICd1dGY4Jyk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1LDqXN1bHRhdHMgZGUgcmVjaGVyY2hlIGFqb3V0w6lzIGF2ZWMgc3VjY8OocyDDoCBsYSBiYXNlIGRlIGRvbm7DqWVzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGRlcyByw6lzdWx0YXRzIGRlIHJlY2hlcmNoZSBkYW5zIGxhIGJhc2UgZGUgZG9ubsOpZXM6JywgZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZXMgcsOpc3VsdGF0cyBkZSByZWNoZXJjaGUnIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTcOpdGhvZGUgbm9uIGF1dG9yaXPDqWUnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFydGlzdCIsInRyYWNrTmFtZSIsInBsYXljb3VudCIsImxpc3RlbmVycyIsInVybCIsImdlbnJlIiwiYm9keSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJqc29uRGF0YSIsInJlYWRGaWxlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImV4aXN0aW5nSXRlbSIsInNlYXJjaHMiLCJmaW5kIiwiaXRlbSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5ld0lkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwicHVzaCIsImlkIiwid3JpdGVGaWxlIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/addSong.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmQuanM/OWVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlS2luZFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUm91dGVLaW5kO1xuICAgIH1cbn0pO1xudmFyIFJvdXRlS2luZDtcbihmdW5jdGlvbihSb3V0ZUtpbmQpIHtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU2AgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBwYWdlcy9gLlxuICAgKi8gXCJQQUdFU1wiXSA9IFwiUEFHRVNcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBQQUdFU19BUElgIHJlcHJlc2VudHMgYWxsIHRoZSBBUEkgcm91dGVzIHVuZGVyIGBwYWdlcy9hcGkvYC5cbiAgICovIFwiUEFHRVNfQVBJXCJdID0gXCJQQUdFU19BUElcIjtcbiAgICBSb3V0ZUtpbmRbLyoqXG4gICAqIGBBUFBfUEFHRWAgcmVwcmVzZW50cyBhbGwgdGhlIFJlYWN0IHBhZ2VzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcGFnZS57aix0fXN7LHh9YC5cbiAgICovIFwiQVBQX1BBR0VcIl0gPSBcIkFQUF9QQUdFXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1JPVVRFYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyBhbmQgbWV0YWRhdGEgcm91dGVzIHRoYXQgYXJlIHVuZGVyIGBhcHAvYCB3aXRoIHRoZVxuICAgKiBmaWxlbmFtZSBvZiBgcm91dGUue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9ST1VURVwiXSA9IFwiQVBQX1JPVVRFXCI7XG59KShSb3V0ZUtpbmQgfHwgKFJvdXRlS2luZCA9IHt9KSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWtpbmQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5qcz8xZmY2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUGFnZXNBUElSb3V0ZU1vZHVsZTogbnVsbCxcbiAgICBkZWZhdWx0OiBudWxsXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUGFnZXNBUElSb3V0ZU1vZHVsZTtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfcm91dGVtb2R1bGUgPSByZXF1aXJlKFwiLi4vcm91dGUtbW9kdWxlXCIpO1xuY29uc3QgX25vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vYXBpLXV0aWxzL25vZGVcIik7XG5jbGFzcyBQYWdlc0FQSVJvdXRlTW9kdWxlIGV4dGVuZHMgX3JvdXRlbW9kdWxlLlJvdXRlTW9kdWxlIHtcbiAgICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlcSB0aGUgaW5jb21pbmcgc2VydmVyIHJlcXVlc3RcbiAgICogQHBhcmFtIHJlcyB0aGUgb3V0Z29pbmcgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBjb250ZXh0IHRoZSBjb250ZXh0IGZvciB0aGUgcmVuZGVyXG4gICAqLyBhc3luYyByZW5kZXIocmVxLCByZXMsIGNvbnRleHQpIHtcbiAgICAgICAgYXdhaXQgKDAsIF9ub2RlLmFwaVJlc29sdmVyKShyZXEsIHJlcywgY29udGV4dC5xdWVyeSwgdGhpcy51c2VybGFuZCwge1xuICAgICAgICAgICAgLi4uY29udGV4dC5wcmV2aWV3UHJvcHMsXG4gICAgICAgICAgICByZXZhbGlkYXRlOiBjb250ZXh0LnJldmFsaWRhdGUsXG4gICAgICAgICAgICB0cnVzdEhvc3RIZWFkZXI6IGNvbnRleHQudHJ1c3RIb3N0SGVhZGVyLFxuICAgICAgICAgICAgYWxsb3dlZFJldmFsaWRhdGVIZWFkZXJLZXlzOiBjb250ZXh0LmFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5cyxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBjb250ZXh0Lmhvc3RuYW1lXG4gICAgICAgIH0sIGNvbnRleHQubWluaW1hbE1vZGUsIGNvbnRleHQuZGV2LCBjb250ZXh0LnBhZ2UpO1xuICAgIH1cbn1cbmNvbnN0IF9kZWZhdWx0ID0gUGFnZXNBUElSb3V0ZU1vZHVsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FaddSong&preferredRegion=&absolutePagePath=.%2Fsrc%5Cpages%5Capi%5CaddSong.js&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();