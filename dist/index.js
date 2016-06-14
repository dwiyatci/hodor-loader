module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Created by glenn on 01/06/16.
	 */
	
	module.exports = function (source) {
	
	  // Mark the loader as cacheable (same result for same input).
	  this.cacheable();
	
	  function replacer(match, p1) {
	    return '\'' + p1.replace(/['"]/g, '').split(' ').map(function (word) {
	      return word.replace(/^.*?([.,;:?!]|$)/, 'HODOR$1');
	    }).join(' ') + '\'';
	  }
	
	  source = source.replace(/hodorify\((.*?)\)/gi, replacer);
	
	  //source = function hodorify(str) {
	  //    return str
	  //      .split(' ')
	  //      .map(word => word.replace(/^.*?([.,;:?!]|$)/, 'HODOR$1')))
	  //      .join(' ');
	  //  }.toString() + source;
	
	  return source;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map