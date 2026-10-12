/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image.png"
/*!***********************!*\
  !*** ./src/image.png ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2622b12c0dfd7079b5b7.png";

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction home(){\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.index)();\n    \n    let subMenu=document.getElementById('subMenu');\n    if(subMenu){\n        subMenu.remove();\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQzs7QUFFNUI7QUFDUCxJQUFJLGdEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2hvbWUuanM/ZWYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmRleCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lKCl7XG4gICAgaW5kZXgoKTtcbiAgICBcbiAgICBsZXQgc3ViTWVudT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViTWVudScpO1xuICAgIGlmKHN1Yk1lbnUpe1xuICAgICAgICBzdWJNZW51LnJlbW92ZSgpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   index: () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nindex();\n\nfunction index(){\n   \n    (0,_load_js__WEBPACK_IMPORTED_MODULE_0__.load)();\n\n    let nav= document.getElementById('nav')\n    nav.style.display=\"grid\"\n    nav.style.gridTemplateColumns= \"repeat(1,1fr)\";\n    nav.style.gap=\"10px\";\n    nav.style.width=\"100px\"\n    nav.style.marginRight=\"20px\"\n    nav.style.backgroundColor=\"lightGray\"\n\n    let buttons=document.querySelectorAll('#nav button');\n    buttons.forEach(button=>{\n        button.style.backgroundColor=\"lightGray\"\n        button.style.width=\"100px\"\n    })\n\n    let btn= document.getElementById('menu-btn');\n        btn.addEventListener('click',()=>{\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();\n        });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQ0Y7O0FBRTdCOztBQUVPO0FBQ1A7QUFDQSxJQUFJLDhDQUFJOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsWUFBWSw4Q0FBSTtBQUNoQixTQUFTO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvaW5kZXguanM/MDdmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWR9IGZyb20gJy4vbG9hZC5qcyc7XG5pbXBvcnR7bWVudX0gZnJvbSAnLi9tZW51LmpzJ1xuXG5pbmRleCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXgoKXtcbiAgIFxuICAgIGxvYWQoKTtcblxuICAgIGxldCBuYXY9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKVxuICAgIG5hdi5zdHlsZS5kaXNwbGF5PVwiZ3JpZFwiXG4gICAgbmF2LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnM9IFwicmVwZWF0KDEsMWZyKVwiO1xuICAgIG5hdi5zdHlsZS5nYXA9XCIxMHB4XCI7XG4gICAgbmF2LnN0eWxlLndpZHRoPVwiMTAwcHhcIlxuICAgIG5hdi5zdHlsZS5tYXJnaW5SaWdodD1cIjIwcHhcIlxuICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJsaWdodEdyYXlcIlxuXG4gICAgbGV0IGJ1dHRvbnM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI25hdiBidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9XCJsaWdodEdyYXlcIlxuICAgICAgICBidXR0b24uc3R5bGUud2lkdGg9XCIxMDBweFwiXG4gICAgfSlcblxuICAgIGxldCBidG49IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICBtZW51KCk7XG4gICAgICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/load.js"
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: () => (/* binding */ load)\n/* harmony export */ });\n/* harmony import */ var _image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.png */ \"./src/image.png\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\n\nlet about=document.getElementById('about-btn')\nlet Home=document.getElementById('home-btn')\nlet content=document.getElementById(\"content\");\n    Home.addEventListener('click',()=>{\n        content.innerHTML=\"\";\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();\n    })\n\nabout.addEventListener('click',()=>{\n    content.innerHTML = \"<h2>About Page</h2>\";\n})    \n\nfunction load() {\n\n    let content=document.getElementById(\"content\");\n\n    let p=document.createElement(\"p\");\n    p.textContent = \"We offer a variety of delicious dishes to satisfy your cravings. \\n Explore our menu and enjoy a delightful dining experience!\";\n    p.style.fontSize=\"25px\"\n    content.appendChild(p);\n\n    let img = document.createElement(\"img\");\n    img.src=_image_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.alt=\"creator:Vostok\";\n    img.style.width=\"1400px\";\n    img.style.height=\"500px\";\n    content.appendChild(img);\n\n    let p2=document.createElement(\"p\");\n    p2.textContent = \"We also have a delivery service so order wherever you are.\";\n    p2.style.fontSize=\"25px\"\n    content.appendChild(p2);\n\n    content.style.display=\"flex\";\n    content.style.flexDirection=\"column\";\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDRjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQUk7QUFDWixLQUFLOztBQUVMO0FBQ0E7QUFDQSxDQUFDOztBQUVNOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1Q0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2xvYWQuanM/OWI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1hZ2UgZnJvbSBcIi4vaW1hZ2UucG5nXCI7XG5pbXBvcnQge2hvbWV9IGZyb20gJy4vaG9tZS5qcydcblxubGV0IGFib3V0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1idG4nKVxubGV0IEhvbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJylcbmxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb250ZW50LmlubmVySFRNTD1cIlwiO1xuICAgICAgICBob21lKCk7XG4gICAgfSlcblxuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIjxoMj5BYm91dCBQYWdlPC9oMj5cIjtcbn0pICAgIFxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCgpIHtcblxuICAgIGxldCBjb250ZW50PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGxldCBwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIldlIG9mZmVyIGEgdmFyaWV0eSBvZiBkZWxpY2lvdXMgZGlzaGVzIHRvIHNhdGlzZnkgeW91ciBjcmF2aW5ncy4gXFxuIEV4cGxvcmUgb3VyIG1lbnUgYW5kIGVuam95IGEgZGVsaWdodGZ1bCBkaW5pbmcgZXhwZXJpZW5jZSFcIjtcbiAgICBwLnN0eWxlLmZvbnRTaXplPVwiMjVweFwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwKTtcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmM9aW1hZ2U7XG4gICAgaW1nLmFsdD1cImNyZWF0b3I6Vm9zdG9rXCI7XG4gICAgaW1nLnN0eWxlLndpZHRoPVwiMTQwMHB4XCI7XG4gICAgaW1nLnN0eWxlLmhlaWdodD1cIjUwMHB4XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgbGV0IHAyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gXCJXZSBhbHNvIGhhdmUgYSBkZWxpdmVyeSBzZXJ2aWNlIHNvIG9yZGVyIHdoZXJldmVyIHlvdSBhcmUuXCI7XG4gICAgcDIuc3R5bGUuZm9udFNpemU9XCIyNXB4XCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHAyKTtcblxuICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcbiAgICBjb250ZW50LnN0eWxlLmZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIjtcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/load.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nfunction  menu(){\n\n    let content=document.getElementById('content');\n    let subMenu=document.getElementById('subMenu');\n    let btn=document.getElementById('menu-btn');\n    content.innerHTML=\"\";\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)();\n\n    if(!subMenu){\n    \n    let div=document.createElement('div');\n\n    div.id=\"subMenu\"\n    div.style.height=\"60px\";\n    div.style.backgroundColor=\"blue\";\n    div.style.display=\"flex\";\n    div.style.flexDirection=\"column\";\n    \n    let order=document.createElement('button');\n    order.textContent=\"Order\";\n    div.appendChild(order);\n\n    let view=document.createElement('button');\n    view.textContent=\"View\";\n    div.appendChild(view);\n\n    let reserve=document.createElement('button');\n    reserve.textContent=\"Reserve\"\n    div.appendChild(reserve);\n\n    btn.insertAdjacentElement('afterend',div);\n\n     order.addEventListener('click',()=>{\n        content.innerHTML = \"<h2>Order Page</h2>\";\n    })\n\n    view.addEventListener('click',()=>{\n        content.innerHTML = \"<h2>View Page</h2>\";\n    })\n\n    reserve.addEventListener('click',()=>{\n        content.innerHTML = \"<h2>Reserve Page</h2>\";\n    })\n\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjs7QUFFeEI7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFJOztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL21lbnUuanM/Mjk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2hvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiAgbWVudSgpe1xuXG4gICAgbGV0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBsZXQgc3ViTWVudT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViTWVudScpO1xuICAgIGxldCBidG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnRuJyk7XG4gICAgY29udGVudC5pbm5lckhUTUw9XCJcIjtcbiAgICBob21lKCk7XG5cbiAgICBpZighc3ViTWVudSl7XG4gICAgXG4gICAgbGV0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGRpdi5pZD1cInN1Yk1lbnVcIlxuICAgIGRpdi5zdHlsZS5oZWlnaHQ9XCI2MHB4XCI7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvcj1cImJsdWVcIjtcbiAgICBkaXYuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcbiAgICBkaXYuc3R5bGUuZmxleERpcmVjdGlvbj1cImNvbHVtblwiO1xuICAgIFxuICAgIGxldCBvcmRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci50ZXh0Q29udGVudD1cIk9yZGVyXCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKG9yZGVyKTtcblxuICAgIGxldCB2aWV3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHZpZXcudGV4dENvbnRlbnQ9XCJWaWV3XCI7XG4gICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xuXG4gICAgbGV0IHJlc2VydmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2ZS50ZXh0Q29udGVudD1cIlJlc2VydmVcIlxuICAgIGRpdi5hcHBlbmRDaGlsZChyZXNlcnZlKTtcblxuICAgIGJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJyxkaXYpO1xuXG4gICAgIG9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiPGgyPk9yZGVyIFBhZ2U8L2gyPlwiO1xuICAgIH0pXG5cbiAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiPGgyPlZpZXcgUGFnZTwvaDI+XCI7XG4gICAgfSlcblxuICAgIHJlc2VydmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCI8aDI+UmVzZXJ2ZSBQYWdlPC9oMj5cIjtcbiAgICB9KVxuXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;