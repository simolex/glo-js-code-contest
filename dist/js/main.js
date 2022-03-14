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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_heroesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/heroesModel */ \"./modules/heroesModel.js\");\n/* harmony import */ var _modules_moviesSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/moviesSelector */ \"./modules/moviesSelector.js\");\n\r\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nwindow.mainModel = new _modules_heroesModel__WEBPACK_IMPORTED_MODULE_1__.heroesModel(\"./db/dbHeroes.json\");\r\n//controls();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/heroesModel.js":
/*!********************************!*\
  !*** ./modules/heroesModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroesModel\": () => (/* binding */ heroesModel)\n/* harmony export */ });\n/* harmony import */ var _moviesSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moviesSelector */ \"./modules/moviesSelector.js\");\n\r\nclass heroesModel {\r\n  constructor(dbPath) {\r\n    this.filterGroups = {};\r\n    this._dbPath = dbPath;\r\n    this._getData().then((data) => {\r\n      data.forEach((heroes) => {\r\n        for (let metric in heroes) {\r\n          if (!this.filterGroups[metric] && metric === \"movies\") {\r\n            this.filterGroups[metric] = [];\r\n          }\r\n\r\n          if (metric === \"movies\") {\r\n            heroes[metric] &&\r\n              heroes[metric].forEach((filmName) => {\r\n                if (!this.filterGroups[metric].includes(filmName)) {\r\n                  this.filterGroups[metric].push(filmName);\r\n                }\r\n              });\r\n          } //else {\r\n          //   if (!this.filterGroups[metric].includes(heroes[metric])) {\r\n          //     this.filterGroups[metric].push(heroes[metric]);\r\n          //   }\r\n          // }\r\n        }\r\n      });\r\n      (0,_moviesSelector__WEBPACK_IMPORTED_MODULE_0__.moviesSelector)(this.filterGroups.movies);\r\n    });\r\n    console.log(this.filterGroups);\r\n  }\r\n  _getData() {\r\n    return fetch(this._dbPath)\r\n      .then((res) => {\r\n        if (res.ok) {\r\n          return res.json();\r\n        } else {\r\n          throw new Error(res.statusText);\r\n        }\r\n      })\r\n      .catch((err) => {\r\n        console.log(`${urlHref} - ${err.message}`);\r\n      });\r\n  }\r\n  selectHeroes(movieId) {\r\n    const movieName = this.filterGroups.movies[movieId];\r\n    return this._getData().then((heroes) => {\r\n      return heroes.filter((theHero) => theHero.movies && theHero.movies.includes(movieName));\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/heroesModel.js?");

/***/ }),

/***/ "./modules/heroesView.js":
/*!*******************************!*\
  !*** ./modules/heroesView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroesView\": () => (/* binding */ heroesView)\n/* harmony export */ });\nconst heroesView = (heroes) => {\r\n  const cardWrapper = document.querySelector(\".cards__wrapper\");\r\n  cardWrapper.innerHTML = \"\";\r\n  heroes.forEach((hero) => {\r\n    const card = document.createElement(\"card\");\r\n\r\n    card.innerHTML = `\r\n    <div class=\"card__photo\">\r\n      <img\r\n        src=\"./db/${hero.photo}\"\r\n        alt=\"\"\r\n        class=\"card__image\"\r\n      />\r\n    </div>\r\n    <div class=\"card__content\"></div>\r\n    `;\r\n    cardWrapper.append(card);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/heroesView.js?");

/***/ }),

/***/ "./modules/moviesSelector.js":
/*!***********************************!*\
  !*** ./modules/moviesSelector.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moviesSelector\": () => (/* binding */ moviesSelector)\n/* harmony export */ });\n/* harmony import */ var _heroesView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroesView */ \"./modules/heroesView.js\");\n\r\nconst moviesSelector = (movies) => {\r\n  const heroesMovies = document.getElementById(\"heroes_movies\");\r\n\r\n  const insertOption = (nameOpt, valueOpt) => {\r\n    const option = document.createElement(\"option\");\r\n    option.value = valueOpt;\r\n    option.textContent = nameOpt;\r\n    heroesMovies.append(option);\r\n  };\r\n\r\n  insertOption(\"Select movies...\", \"\");\r\n\r\n  movies.forEach((movie, index) => {\r\n    insertOption(movie, index);\r\n  });\r\n\r\n  heroesMovies.addEventListener(\"change\", (e) => {\r\n    const id = e.target.options[e.target.selectedIndex].value;\r\n    if (id !== \"\") {\r\n      mainModel.selectHeroes(id).then((heroes) => {\r\n        (0,_heroesView__WEBPACK_IMPORTED_MODULE_0__.heroesView)(heroes);\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/moviesSelector.js?");

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