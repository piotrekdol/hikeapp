/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((module) => {

function sum(a, b) {
    return a + b;
  }
  module.exports = {
    sum,
  };

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("Hello World");

const sum = (__webpack_require__(/*! ./sum */ "./src/sum.js").sum);
console.log("Hello World");
console.log(sum(22,31));

let heading = document.querySelector("#demo");
let sumeczka = 1111 + 5;
// heading.innerHTML = `10 + 5 = ${sumeczka}`;
let dodawanko = sum(9110,40);
heading.innerHTML = `moja szczęśliwa liczba to ${dodawanko}`;

})();

/******/ })()
;
//# sourceMappingURL=59c370bfb658c647a368.bundle.js.map