/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_heroesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/heroesModel */ \"./modules/heroesModel.js\");\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nwindow.mainPage = new _modules_heroesModel__WEBPACK_IMPORTED_MODULE_1__.heroesModel(\"./db/dbHeroes.json\");\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/heroesModel.js":
/*!********************************!*\
  !*** ./modules/heroesModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroesModel\": () => (/* binding */ heroesModel)\n/* harmony export */ });\nclass heroesModel {\r\n  constructor(dbPath) {\r\n    this.filterGroups = {};\r\n    this._dbPath = dbPath;\r\n    this._getData().then((data) => {\r\n      data.forEach((heroes) => {\r\n        for (let metric in heroes) {\r\n          if (!this.filterGroups[metric] && metric === \"movies\") {\r\n            this.filterGroups[metric] = [];\r\n          }\r\n\r\n          if (metric === \"movies\") {\r\n            heroes[metric] &&\r\n              heroes[metric].forEach((filmName) => {\r\n                if (!this.filterGroups[metric].includes(filmName)) {\r\n                  this.filterGroups[metric].push(filmName);\r\n                }\r\n              });\r\n          } //else {\r\n          //   if (!this.filterGroups[metric].includes(heroes[metric])) {\r\n          //     this.filterGroups[metric].push(heroes[metric]);\r\n          //   }\r\n          // }\r\n        }\r\n      });\r\n    });\r\n    console.log(this.filterGroups);\r\n  }\r\n  _getData() {\r\n    return fetch(this._dbPath)\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        } else {\r\n          throw new Error(res.statusText);\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`${urlHref} - ${err.message}`);\r\n      });\r\n  }\r\n  selectHeroes(movieId) {\r\n    const movieName = this.filterGroups.movies[movieId];\r\n    this._getData().then((heroes) => {\r\n      const list = heroes.filter((theHero) => theHero.movies.includes(movieName));\r\n      console.log(list);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/heroesModel.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  console.log(\"Код слайдера запущен\");\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;