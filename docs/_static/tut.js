var TUT;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/docs.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/docs.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes showtime {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n.fract-tokens {\n  user-select: none;\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  transition: background-color 300ms;\n  cursor: pointer;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n.fract-token.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token.move {\n  background-color: rgba(204, 204, 204, 0.4666666667);\n  position: absolute;\n  animation-name: showtime;\n  animation-duration: 500ms;\n}\n.fract-token.move.valid-drop {\n  background-color: rgba(123, 218, 123, 0.4666666667);\n  border-color: #228B22;\n}\n.fract-token.move.valid-drop::before {\n  content: \"DROP\";\n}\n.fract-token.move.remove-drop {\n  background-color: rgba(201, 0, 0, 0.4666666667);\n  border-color: #8b2222;\n}\n.fract-token.move.remove-drop::before {\n  content: \"REMOVE\";\n}\n.fract-token.move::before {\n  display: inline-block;\n  font-size: 10pt;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-weight: bold;\n  position: relative;\n  top: -16pt;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n.fract-token-group.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token-group.debug > .fract-token {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n\n.fract-token-span {\n  padding: 5px;\n  width: 0px;\n  height: 50px;\n  transition: width 300ms;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\n.sig.sig-object.tut > .sig-name.descname > p {\n  display: inline;\n}\n\n.fract-token.token-header {\n  margin-right: 1em;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-staves {\n  overflow: visible;\n}\n.fract-staves > li {\n  height: 60px;\n}\n.fract-staves > li .tokens {\n  height: 100%;\n}\n.fract-staves .fract-token, .fract-staves .fract-token-group {\n  height: 30px;\n  padding: 2px;\n  margin-right: 2px;\n}\n.fract-staves .fract-token {\n  width: 30px;\n}\n.fract-staves .fract-token-group {\n  flex: 0 0 auto;\n}\n.fract-staves .fract-token-group .fract-token {\n  padding: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n\n.sig.sig-object.tut > .sig-name.descname > p {\n    display: inline;\n}\n\n.fract-token.token-header {\n    margin-right: 1em;\n}\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-staves {\n    overflow: visible;\n    > li {\n        height: 60px;\n        .tokens { height: 100%; }\n    }\n\n    .fract-token, .fract-token-group {\n        height: 30px;\n        padding: 2px;\n        margin-right: 2px;\n    }\n\n    .fract-token {\n        width: 30px;\n    }\n\n    .fract-token-group {\n        flex: 0 0 auto;\n\n        .fract-token {\n            padding: 0px;\n        }\n    }\n}\n",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/docs.scss":
/*!*****************************!*\
  !*** ./src/style/docs.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_docs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./docs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/docs.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/core/ast/actionResult.ts":
/*!**************************************!*\
  !*** ./src/core/ast/actionResult.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionResult: () => (/* binding */ ActionResult),
/* harmony export */   CallR: () => (/* binding */ CallR),
/* harmony export */   ContinueR: () => (/* binding */ ContinueR),
/* harmony export */   JumpR: () => (/* binding */ JumpR),
/* harmony export */   ReverseR: () => (/* binding */ ReverseR)
/* harmony export */ });
class ActionResult {
}
class ContinueR extends ActionResult {
}
class JumpR extends ActionResult {
    constructor(count) {
        super();
        this.count = count;
    }
}
class CallR extends ActionResult {
    constructor(stave, context) {
        super();
        this.stave = stave;
        this.newContext = context;
    }
}
class ReverseR extends ActionResult {
    constructor(count) {
        super();
        this.count = count;
    }
}


/***/ }),

/***/ "./src/core/ast/actions.ts":
/*!*********************************!*\
  !*** ./src/core/ast/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Call: () => (/* binding */ Call),
/* harmony export */   CloseCall: () => (/* binding */ CloseCall),
/* harmony export */   DrawArcLine: () => (/* binding */ DrawArcLine),
/* harmony export */   DrawFigure: () => (/* binding */ DrawFigure),
/* harmony export */   DrawLine: () => (/* binding */ DrawLine),
/* harmony export */   FlipHorizontally: () => (/* binding */ FlipHorizontally),
/* harmony export */   FlipVertically: () => (/* binding */ FlipVertically),
/* harmony export */   MoveBackward: () => (/* binding */ MoveBackward),
/* harmony export */   MoveForward: () => (/* binding */ MoveForward),
/* harmony export */   MoveLeft: () => (/* binding */ MoveLeft),
/* harmony export */   MoveRight: () => (/* binding */ MoveRight),
/* harmony export */   Replay: () => (/* binding */ Replay),
/* harmony export */   Reverse: () => (/* binding */ Reverse),
/* harmony export */   RotateLeft: () => (/* binding */ RotateLeft),
/* harmony export */   RotateRight: () => (/* binding */ RotateRight)
/* harmony export */ });
/* harmony import */ var _core_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/context */ "./src/core/context.ts");
/* harmony import */ var _core_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/cursor */ "./src/core/cursor.ts");
/* harmony import */ var _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/ast/actionResult */ "./src/core/ast/actionResult.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NodeWithValue_values, _Call_name, _DrawFigure_shape, _Replay_jumpSize;




class NodeWithValue extends _base__WEBPACK_IMPORTED_MODULE_3__.ActionNode {
    constructor(values) {
        super();
        _NodeWithValue_values.set(this, void 0);
        __classPrivateFieldSet(this, _NodeWithValue_values, values, "f");
    }
    eval(context) {
        return (0,_base__WEBPACK_IMPORTED_MODULE_3__.evalValue)(__classPrivateFieldGet(this, _NodeWithValue_values, "f"), context);
    }
    evalValue(context) {
        return (0,_base__WEBPACK_IMPORTED_MODULE_3__.evalValue)(__classPrivateFieldGet(this, _NodeWithValue_values, "f"), context).value;
    }
    evalIntValue(context) {
        return Math.round(this.evalValue(context));
    }
}
_NodeWithValue_values = new WeakMap();
class Call extends NodeWithValue {
    constructor(name, value) {
        super(value);
        _Call_name.set(this, void 0);
        __classPrivateFieldSet(this, _Call_name, name, "f");
    }
    exec(context) {
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.CallR(__classPrivateFieldGet(this, _Call_name, "f"), this.createContext(context));
    }
    execReverse(context) {
        return this.exec(context);
    }
    createContext(context) {
        return new _core_context__WEBPACK_IMPORTED_MODULE_0__.Context({
            argument: this.eval(context),
            cursor: this.createCursor(context),
            iteration: context.iteration + 1,
            valueFuncBag: context.valueFuncBag,
        });
    }
    createCursor(context) {
        return context.cursor;
    }
}
_Call_name = new WeakMap();
function evaledToFigureOps(evaled) {
    return {
        isFilled: evaled.isFilled,
        color: evaled.color,
        stroke: evaled.strokeThickness,
    };
}
class CloseCall extends Call {
    createCursor(context) {
        const evaled = this.eval(context);
        return new _core_cursor__WEBPACK_IMPORTED_MODULE_1__.CloseCursor(context.cursor, evaledToFigureOps(evaled));
    }
}
class DrawLine extends NodeWithValue {
    exec(context) {
        const { value: length, strokeThickness, color } = this.eval(context);
        context.cursor.drawLine(length, strokeThickness, color);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
    execReverse(context) {
        const distance = -this.eval(context).value;
        context.cursor.forward(distance);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
}
class DrawFigure extends NodeWithValue {
    constructor(values, shape) {
        super(values);
        _DrawFigure_shape.set(this, void 0);
        __classPrivateFieldSet(this, _DrawFigure_shape, shape, "f");
    }
    exec(context) {
        const evaled = this.eval(context);
        const size = evaled.value;
        context.cursor.drawShape(__classPrivateFieldGet(this, _DrawFigure_shape, "f"), size, evaledToFigureOps(evaled));
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
}
_DrawFigure_shape = new WeakMap();
class DrawArcLine extends NodeWithValue {
    constructor(ratio, value) {
        super(value);
        this.ratio = ratio;
    }
    exec(context) {
        const { value: size, strokeThickness, color } = this.eval(context);
        context.cursor.drawArcLine(this.ratio, size, strokeThickness, color);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
    execReverse(context) {
        const distance = -this.eval(context).value;
        const { cursor } = context;
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
}
class CursorManipulator extends NodeWithValue {
    exec(context) {
        this.change(context.cursor, this.eval(context).value);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
    execReverse(context) {
        this.change(context.cursor, -this.eval(context).value);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
}
class MoveForward extends CursorManipulator {
    change(cursor, value) {
        cursor.forward(value);
    }
}
class MoveBackward extends CursorManipulator {
    change(cursor, value) {
        cursor.backward(value);
    }
}
class MoveLeft extends CursorManipulator {
    change(cursor, value) {
        cursor.left(value);
    }
}
class MoveRight extends CursorManipulator {
    change(cursor, value) {
        cursor.right(value);
    }
}
class RotateRight extends CursorManipulator {
    change(cursor, value) {
        cursor.rotate(value);
    }
}
class RotateLeft extends CursorManipulator {
    change(cursor, value) {
        cursor.rotate(-value);
    }
}
class FlipVertically extends CursorManipulator {
    change(cursor) {
        cursor.flip();
    }
}
class FlipHorizontally extends CursorManipulator {
    change(cursor) {
        cursor.rotate(0.5);
    }
}
class Reverse extends NodeWithValue {
    exec(context) {
        const iterations = this.evalIntValue(context);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ReverseR(iterations);
    }
    execReverse(context) {
        const iterations = this.evalIntValue(context);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ReverseR(iterations);
    }
}
class Replay extends NodeWithValue {
    constructor(value, jumpSize = 1) {
        super(value);
        _Replay_jumpSize.set(this, void 0);
        __classPrivateFieldSet(this, _Replay_jumpSize, jumpSize, "f");
    }
    exec(context, local) {
        const counter = local['counter'] || 1;
        const size = this.evalIntValue(context);
        if (counter < size) {
            local['counter'] = counter + 1;
            return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.JumpR(-__classPrivateFieldGet(this, _Replay_jumpSize, "f"));
        }
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_2__.ContinueR();
    }
}
_Replay_jumpSize = new WeakMap();


/***/ }),

/***/ "./src/core/ast/base.ts":
/*!******************************!*\
  !*** ./src/core/ast/base.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionNode: () => (/* binding */ ActionNode),
/* harmony export */   ValueNode: () => (/* binding */ ValueNode),
/* harmony export */   evalValue: () => (/* binding */ evalValue)
/* harmony export */ });
/* harmony import */ var _actionResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionResult */ "./src/core/ast/actionResult.ts");

class ValueNode {
}
class ActionNode {
    execReverse(context, local) { return new _actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR(); }
    ;
}
function evalValue(valueNodes, context) {
    const init = {
        value: 1.0,
        color: context.argument.color,
        strokeStyle: context.argument.strokeStyle,
        strokeThickness: context.argument.strokeThickness,
        isFilled: context.argument.isFilled,
        valueTransformer: (a, b) => a * b,
    };
    return valueNodes.reduce(partEval.bind(this, context), init);
}
function partEval(context, acc, node) {
    const newValue = node.eval(context);
    const transform = newValue.valueTransformer || acc.valueTransformer;
    return {
        value: newValue.value !== undefined ? transform(acc.value, newValue.value) : acc.value,
        color: newValue.color !== undefined ? newValue.color : acc.color,
        strokeStyle: newValue.strokeStyle !== undefined ? newValue.strokeStyle : acc.strokeStyle,
        strokeThickness: newValue.strokeThickness !== undefined ? newValue.strokeThickness : acc.strokeThickness,
        isFilled: newValue.isFilled !== undefined ? newValue.isFilled : acc.isFilled,
        valueTransformer: transform,
    };
}


/***/ }),

/***/ "./src/core/ast/colors.ts":
/*!********************************!*\
  !*** ./src/core/ast/colors.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyColor: () => (/* binding */ EmptyColor),
/* harmony export */   FillColor: () => (/* binding */ FillColor),
/* harmony export */   MaxColor: () => (/* binding */ MaxColor),
/* harmony export */   MinColor: () => (/* binding */ MinColor),
/* harmony export */   ShiftColor: () => (/* binding */ ShiftColor)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");

class MaxColor extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { color: 0.5 };
    }
}
class MinColor extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { color: 0.0 };
    }
}
class FillColor extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { isFilled: true };
    }
}
class EmptyColor extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { isFilled: false };
    }
}
class ShiftColor extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(shift) {
        super();
        this.shift = shift;
    }
    eval(context) {
        let color = (context.argument.color + this.shift) % 1.0;
        if (color < 0.0) {
            color += 1.0;
        }
        return { color };
    }
}


/***/ }),

/***/ "./src/core/ast/function.ts":
/*!**********************************!*\
  !*** ./src/core/ast/function.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Function: () => (/* binding */ Function)
/* harmony export */ });
class Function {
    constructor(name, actions) {
        this.name = name;
        this.actions = actions;
    }
    get size() {
        return this.actions.length;
    }
}


/***/ }),

/***/ "./src/core/ast/ops.ts":
/*!*****************************!*\
  !*** ./src/core/ast/ops.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddOp: () => (/* binding */ AddOp),
/* harmony export */   MultOp: () => (/* binding */ MultOp),
/* harmony export */   SubOp: () => (/* binding */ SubOp)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");

class MultOp extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { valueTransformer: (a, b) => a * b };
    }
}
class AddOp extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { valueTransformer: (a, b) => a + b };
    }
}
class SubOp extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { valueTransformer: (a, b) => a - b };
    }
}


/***/ }),

/***/ "./src/core/ast/strokes.ts":
/*!*********************************!*\
  !*** ./src/core/ast/strokes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SetStrokeStyle: () => (/* binding */ SetStrokeStyle),
/* harmony export */   ShiftStrokeThickness: () => (/* binding */ ShiftStrokeThickness)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");

class SetStrokeStyle extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(stroke) {
        super();
        this.stroke = stroke;
    }
    eval(context) {
        return { strokeStyle: this.stroke };
    }
}
class ShiftStrokeThickness extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(shift) {
        super();
        this.shift = shift;
    }
    eval(context) {
        const strokeThickness = context.argument.strokeThickness + this.shift;
        return { strokeThickness };
    }
}


/***/ }),

/***/ "./src/core/ast/values.ts":
/*!********************************!*\
  !*** ./src/core/ast/values.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Angle: () => (/* binding */ Angle),
/* harmony export */   Argument: () => (/* binding */ Argument),
/* harmony export */   DynamicArgument: () => (/* binding */ DynamicArgument),
/* harmony export */   Multipler: () => (/* binding */ Multipler)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");

class Angle extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(angle) {
        super();
        this.normalizedAngle = angle / 360.0;
    }
    eval(context) {
        return { value: this.normalizedAngle };
    }
}
class Multipler extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(value) {
        super();
        this.value = value;
    }
    eval(context) {
        return { value: this.value };
    }
}
class Argument extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    eval(context) {
        return { value: context.argument.value };
    }
}
class DynamicArgument extends _base__WEBPACK_IMPORTED_MODULE_0__.ValueNode {
    constructor(name) {
        super();
        this.name = name;
    }
    eval(context) {
        const valueNodes = context.valueFuncBag[this.name] || [];
        return (0,_base__WEBPACK_IMPORTED_MODULE_0__.evalValue)(valueNodes, context);
    }
}


/***/ }),

/***/ "./src/core/context.ts":
/*!*****************************!*\
  !*** ./src/core/context.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context)
/* harmony export */ });
class Context {
    constructor({ cursor, argument, valueFuncBag = {}, iteration = 0 }) {
        this.argument = argument;
        this.iteration = iteration;
        this.valueFuncBag = valueFuncBag;
        this.cursor = cursor;
    }
    onEnd() {
        this.cursor.close();
    }
}


/***/ }),

/***/ "./src/core/contextStepper.ts":
/*!************************************!*\
  !*** ./src/core/contextStepper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextStepper: () => (/* binding */ ContextStepper),
/* harmony export */   ForwardContextStepper: () => (/* binding */ ForwardContextStepper),
/* harmony export */   ReverseContextStepper: () => (/* binding */ ReverseContextStepper),
/* harmony export */   createInitStepper: () => (/* binding */ createInitStepper)
/* harmony export */ });
/* harmony import */ var _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/ast/actionResult */ "./src/core/ast/actionResult.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReverseContextStepper_endIndex;

function createLocals(func) {
    return Array.from(func.actions, () => ({}));
}
function createInitStepper(context, func) {
    return new ForwardContextStepper({
        function: func,
        locals: createLocals(func),
        index: 0,
        context,
    });
}
class ContextStepper {
    constructor(scope) {
        this.scope = scope;
    }
    onEnd() { this.scope.context.onEnd(); }
    ;
    get index() { return this.scope.index; }
    get stave() { return this.scope.function.name; }
}
class ForwardContextStepper extends ContextStepper {
    exec() {
        const { index, function: func, locals } = this.scope;
        const action = func.actions[index];
        const local = locals[index];
        if (!action || !local) {
            return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
        }
        return action.exec(this.scope.context, local);
    }
    move({ result, bag, push }) {
        if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR) {
            this.scope.index += 1;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.JumpR) {
            this.scope.index += result.count;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.CallR) {
            const func = bag.findFunction(result.stave, result.newContext.iteration);
            if (func !== null) {
                push(new ForwardContextStepper({
                    context: result.newContext,
                    index: 0,
                    function: func,
                    locals: createLocals(func),
                }));
            }
            this.scope.index += 1;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ReverseR) {
            const endIndex = Math.max(0, this.scope.index - result.count);
            push(new ReverseContextStepper({
                context: this.scope.context,
                index: this.scope.index - 1,
                function: this.scope.function,
                locals: createLocals(this.scope.function),
            }, endIndex));
            this.scope.index += 1;
        }
        else {
            throw "Wrong Action";
        }
        return this.isIndexInRange();
    }
    isIndexInRange() {
        const { index, function: func } = this.scope;
        return index >= 0 && index < func.size;
    }
}
class ReverseContextStepper extends ContextStepper {
    constructor(scope, endIndex = 0) {
        super(scope);
        _ReverseContextStepper_endIndex.set(this, void 0);
        __classPrivateFieldSet(this, _ReverseContextStepper_endIndex, endIndex, "f");
    }
    exec() {
        const { index, function: func, locals } = this.scope;
        const action = func.actions[index];
        const local = locals[index];
        return action.execReverse(this.scope.context, local);
    }
    move({ result, bag, push }) {
        if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR) {
            this.scope.index -= 1;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.JumpR) {
            this.scope.index -= result.count;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.CallR) {
            const func = bag.findFunction(result.stave, result.newContext.iteration);
            if (func !== null) {
                push(new ReverseContextStepper({
                    context: result.newContext,
                    index: func.size - 1,
                    function: func,
                    locals: createLocals(func),
                }));
            }
            this.scope.index -= 1;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ReverseR) {
            /// TODO - implement Reverse-Reverse
            /// Or maybe one stepper with move cursor only with specified direction?
            this.scope.index -= result.count + 1;
        }
        else {
            throw "Wrong Action";
        }
        return this.isIndexInRange();
    }
    isIndexInRange() {
        const { index, function: func } = this.scope;
        return index >= __classPrivateFieldGet(this, _ReverseContextStepper_endIndex, "f") && index < func.size;
    }
}
_ReverseContextStepper_endIndex = new WeakMap();


/***/ }),

/***/ "./src/core/cursor.ts":
/*!****************************!*\
  !*** ./src/core/cursor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseCursor: () => (/* binding */ CloseCursor),
/* harmony export */   Cursor: () => (/* binding */ Cursor),
/* harmony export */   ICursor: () => (/* binding */ ICursor),
/* harmony export */   Shape: () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _core_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/figures */ "./src/core/figures.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CloseCursor_cursor, _CloseCursor_polygon;


var Shape;
(function (Shape) {
    Shape[Shape["Square"] = 0] = "Square";
    Shape[Shape["Triangle"] = 1] = "Triangle";
    Shape[Shape["Circle"] = 2] = "Circle";
})(Shape || (Shape = {}));
class ICursor {
    constructor() {
        this.figures = [];
    }
    forward(distance) {
        const [x, y] = this.orientation;
        const arg = distance * this.distanceMultipler;
        this.position[0] += x * arg;
        this.position[1] += y * arg;
    }
    backward(distance) {
        this.forward(-distance);
    }
    right(distance) {
        const [x, y] = this.orientation;
        // rotate orientation by 90°
        const arg = distance * this.distanceMultipler * this.reflection;
        this.position[0] -= y * arg;
        this.position[1] += x * arg;
    }
    left(distance) {
        this.right(-distance);
    }
    rotate(angle) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        const nAngle = angle * this.reflection;
        this.angle = (this.angle + nAngle) % 1.0;
        const radians = nAngle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    }
    flip() {
        this.reflection *= -1.0;
    }
    close() { }
    extendBox([x, y], size = 0) {
        this.box.min[0] = Math.min(this.box.min[0], x - size);
        this.box.max[0] = Math.max(this.box.max[0], x + size);
        this.box.min[1] = Math.min(this.box.min[1], y - size);
        this.box.max[1] = Math.max(this.box.max[1], y + size);
    }
}
class Cursor extends ICursor {
    constructor({ strokeSize = 1, distanceMultipler = 100, firstColor = "#000000", secondColor = "#DC143C", } = {}) {
        super();
        this.strokeSize = strokeSize;
        this.distanceMultipler = distanceMultipler;
        this.reflection = 1.0;
        this.position = [0.0, 0.0];
        this.angle = 0.0;
        this.orientation = [1.0, 0.0];
        this.box = {
            min: [0.0, 0.0],
            max: [0.0, 0.0],
        };
        this.firstColor = this.hexToColor(firstColor);
        this.secondColor = this.hexToColor(secondColor);
    }
    hexToColor(hex) {
        const r = parseInt(hex.substring(1, 1 + 2), 16);
        const g = parseInt(hex.substring(3, 3 + 2), 16);
        const b = parseInt(hex.substring(5, 5 + 2), 16);
        return [r, g, b];
    }
    calcStyleParams(ops) {
        const color = this.calcColor(ops.color);
        if (ops.isFilled) {
            return { fill: color };
        }
        return { fill: "none", color: color, stroke: ops.stroke * this.strokeSize };
    }
    drawLine(distance, stroke, color) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const style = this.calcStyleParams({ stroke, color, isFilled: false });
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Line([old_x, old_y], [new_x, new_y], style));
        this.extendBox(this.position);
    }
    drawArcLine(ratio, size, stroke, color) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy * this.reflection;
        const ndy = dx * this.reflection;
        const [x, y] = this.position;
        const point = [x + arcRadius * ndx, y + arcRadius * ndy];
        const style = this.calcStyleParams({ stroke, color, isFilled: false });
        const ops = {
            shift: this.angle - 0.25,
            close: false,
        };
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Arc(point, arcRadius, ratio, ops, style));
        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
        this.extendBox(point, Math.abs(arcRadius));
    }
    drawShape(shape, size, ops) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.extendBox([x, y], Math.abs(size));
        switch (shape) {
            case Shape.Circle:
                this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Circle([x, y], size, style));
                break;
            case Shape.Square:
                this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Rectangle([x, y], [dx, dy], size, size, style));
                break;
            case Shape.Triangle:
                this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Triangle([x, y], [dx, dy], size, style));
                break;
        }
    }
    calcColor(color) {
        const ca = this.firstColor;
        const cb = this.secondColor;
        const aRatio = Math.abs(color - 0.5) * 2;
        const bRatio = 1.0 - aRatio;
        const r = Math.trunc(ca[0] * aRatio + cb[0] * bRatio);
        const g = Math.trunc(ca[1] * aRatio + cb[1] * bRatio);
        const b = Math.trunc(ca[2] * aRatio + cb[2] * bRatio);
        return `rgb(${r}, ${g}, ${b})`;
    }
}
class CloseCursor extends ICursor {
    constructor(cursor, ops) {
        super();
        _CloseCursor_cursor.set(this, void 0);
        _CloseCursor_polygon.set(this, void 0);
        __classPrivateFieldSet(this, _CloseCursor_cursor, cursor, "f");
        this.position = [...cursor.position];
        this.orientation = [...cursor.orientation];
        this.reflection = cursor.reflection;
        this.angle = cursor.angle;
        this.distanceMultipler = cursor.distanceMultipler;
        this.box = __classPrivateFieldGet(this, _CloseCursor_cursor, "f").box;
        const style = this.calcStyleParams(ops);
        __classPrivateFieldSet(this, _CloseCursor_polygon, new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Polygon([...cursor.position], [], style), "f");
    }
    calcStyleParams(ops) {
        return __classPrivateFieldGet(this, _CloseCursor_cursor, "f").calcStyleParams(ops);
    }
    drawLine(distance, stroke, color) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const delta = [new_x - old_x, new_y - old_y];
        __classPrivateFieldGet(this, _CloseCursor_polygon, "f").curves.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.LineCurve(delta));
        this.extendBox(this.position);
    }
    drawArcLine(ratio, size, stroke, color) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const shift = this.angle - 0.25;
        __classPrivateFieldGet(this, _CloseCursor_polygon, "f").curves.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.ArcCurve(arcRadius, ratio, shift));
        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy * this.reflection;
        const ndy = dx * this.reflection;
        const [x, y] = this.position;
        const point = [x + arcRadius * ndx, y + arcRadius * ndy];
        this.extendBox(point, Math.abs(arcRadius));
        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
    }
    drawShape(shape, size, ops) {
        __classPrivateFieldGet(this, _CloseCursor_cursor, "f").drawShape(shape, size, ops);
    }
    calcColor(color) {
        return __classPrivateFieldGet(this, _CloseCursor_cursor, "f").calcColor(color);
    }
    close() {
        if (this.figures.length > 0) {
            // Cursor is closed. Go away.
            return;
        }
        this.figures.push(__classPrivateFieldGet(this, _CloseCursor_polygon, "f"));
        __classPrivateFieldGet(this, _CloseCursor_cursor, "f").figures = __classPrivateFieldGet(this, _CloseCursor_cursor, "f").figures.concat(this.figures);
    }
}
_CloseCursor_cursor = new WeakMap(), _CloseCursor_polygon = new WeakMap();


/***/ }),

/***/ "./src/core/exec.ts":
/*!**************************!*\
  !*** ./src/core/exec.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exec: () => (/* binding */ exec),
/* harmony export */   setupExec: () => (/* binding */ setupExec)
/* harmony export */ });
/* harmony import */ var _core_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/parser */ "./src/core/parser.ts");
/* harmony import */ var _core_mappings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/mappings */ "./src/core/mappings.ts");
/* harmony import */ var _functionsBag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionsBag */ "./src/core/functionsBag.ts");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step */ "./src/core/step.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./src/core/context.ts");





const MAX_STEPS = 100000;
function exec(stack) {
    for (let step = 0; step < MAX_STEPS; step++) {
        if (stack.step().halt) {
            return;
        }
    }
    throw "Maximum steps reached";
}
function setupExec(valueArgument, maxIteration, staves, cursor) {
    const argument = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
        isFilled: true,
    };
    const bag = new _functionsBag__WEBPACK_IMPORTED_MODULE_2__.FunctionsBag(maxIteration, initFuncBag(staves));
    const valueFuncBag = initValueBag(staves);
    const context = new _context__WEBPACK_IMPORTED_MODULE_4__.Context({ argument, cursor, valueFuncBag });
    return new _step__WEBPACK_IMPORTED_MODULE_3__.StackStep(context, bag);
}
function initFuncBag(staves) {
    const bag = {};
    staves
        .filter(({ name }) => !_core_mappings__WEBPACK_IMPORTED_MODULE_1__.DYNAMIC_ARGS.includes(name))
        .forEach(({ name, suffix = null, tokens: rawTokens }) => {
        const realName = toRealname(name, suffix);
        const tokens = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseRawTokens)(rawTokens);
        bag[realName] = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseLineFunc)(name, tokens);
    });
    return bag;
}
function initValueBag(staves) {
    const bag = {};
    staves
        .filter(({ name }) => _core_mappings__WEBPACK_IMPORTED_MODULE_1__.DYNAMIC_ARGS.includes(name))
        .forEach(({ name, suffix = null, tokens: rawTokens }) => {
        const realName = toRealname(name, suffix);
        const tokens = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseRawTokens)(rawTokens);
        bag[realName] = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseLineValue)(tokens);
    });
    return bag;
}
function toRealname(name, suffix) {
    return (suffix === null || suffix.length == 0) ? name : `${name}::${suffix}`;
}


/***/ }),

/***/ "./src/core/figures.ts":
/*!*****************************!*\
  !*** ./src/core/figures.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arc: () => (/* binding */ Arc),
/* harmony export */   ArcCurve: () => (/* binding */ ArcCurve),
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   Curve: () => (/* binding */ Curve),
/* harmony export */   Line: () => (/* binding */ Line),
/* harmony export */   LineCurve: () => (/* binding */ LineCurve),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   Rectangle: () => (/* binding */ Rectangle),
/* harmony export */   Style: () => (/* binding */ Style),
/* harmony export */   Triangle: () => (/* binding */ Triangle)
/* harmony export */ });
class Style {
}
class Line {
    constructor(firstPoint, secondPoint, style = {}) {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.style = style;
    }
}
class Curve {
}
class LineCurve {
    constructor(delta) {
        this.delta = delta;
    }
}
class ArcCurve {
    constructor(radius, ratio, shift) {
        this.radius = radius;
        this.ratio = ratio;
        this.shift = shift;
    }
}
class Polygon {
    constructor(point, curves, style = {}) {
        this.point = point;
        this.curves = curves;
        this.style = style;
        this.close = true;
    }
}
class Circle {
    constructor(point, radius, style = {}) {
        this.point = point;
        this.radius = radius;
        this.style = style;
    }
}
class Arc {
    constructor(point, radius, ratio, { shift = 0.0, close = false } = {}, style = {}) {
        this.point = point;
        this.radius = radius;
        this.ratio = ratio;
        this.shift = shift;
        this.close = close;
        this.style = style;
    }
}
class Rectangle {
    constructor(point, orientation, width, height, style = {}) {
        this.point = point;
        this.orientation = orientation;
        this.width = width;
        this.height = height;
        this.style = style;
    }
}
class Triangle {
    constructor(point, orientation, size, style = {}) {
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.style = style;
    }
}


/***/ }),

/***/ "./src/core/functionsBag.ts":
/*!**********************************!*\
  !*** ./src/core/functionsBag.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionsBag: () => (/* binding */ FunctionsBag)
/* harmony export */ });
/* harmony import */ var _core_ast_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/ast/function */ "./src/core/ast/function.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FunctionsBag_instances, _FunctionsBag_throwFunc;

class FunctionsBag {
    constructor(maxIteration, bag) {
        _FunctionsBag_instances.add(this);
        this.maxIteration = maxIteration;
        this.bag = bag;
    }
    findFunction(name, iteration = 0) {
        const { maxIteration } = this;
        if (iteration >= maxIteration) {
            return null;
        }
        const throwFunc = __classPrivateFieldGet(this, _FunctionsBag_instances, "m", _FunctionsBag_throwFunc).bind(this);
        try {
            if (iteration >= maxIteration - 1) {
                throwFunc(`${name}::END`);
            }
            if (iteration % 2 == 0) {
                throwFunc(`${name}::EVEN`);
            }
            else {
                throwFunc(`${name}::ODD`);
            }
            for (let i = iteration; i > 0; --i) {
                throwFunc(`${name}::GE${i}`);
            }
            throwFunc(name);
        }
        catch (func) {
            if (func instanceof _core_ast_function__WEBPACK_IMPORTED_MODULE_0__.Function) {
                return func;
            }
            else {
                throw func;
            }
        }
        return null;
    }
}
_FunctionsBag_instances = new WeakSet(), _FunctionsBag_throwFunc = function _FunctionsBag_throwFunc(name) {
    const func = this.bag[name];
    if (func !== undefined) {
        throw func;
    }
};


/***/ }),

/***/ "./src/core/mappings.ts":
/*!******************************!*\
  !*** ./src/core/mappings.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CALLS: () => (/* binding */ CALLS),
/* harmony export */   DYNAMIC_ARGS: () => (/* binding */ DYNAMIC_ARGS),
/* harmony export */   STAVES: () => (/* binding */ STAVES),
/* harmony export */   SUFFIXES: () => (/* binding */ SUFFIXES),
/* harmony export */   TOKENS: () => (/* binding */ TOKENS)
/* harmony export */ });
const CALLS = ["F", "G", "H"];
const DYNAMIC_ARGS = ["DIAMOND", "INV_TRIANGLE"];
const STAVES = [...CALLS, ...DYNAMIC_ARGS];
const SUFFIXES = ["END", "EVEN", "ODD", "GE3", "GE5", "GE7"];
const TOKENS = [
    // Counts
    "COUNT_1",
    "COUNT_2",
    "COUNT_3",
    "COUNT_5",
    "COUNT_7",
    // Counts (special)
    "COUNT_MINUS",
    "COUNT_GOLD",
    "COUNT_SILVER",
    "COUNT_BRONZE",
    "COUNT_PLASTIC",
    // Fractions
    "FRACT_1_2",
    "FRACT_1_3",
    "FRACT_2_3",
    "FRACT_1_4",
    "FRACT_3_4",
    "FRACT_1_5",
    "FRACT_2_5",
    "FRACT_3_5",
    "FRACT_4_5",
    // Angles
    "ANGLE_270",
    "ANGLE_180",
    "ANGLE_90",
    "ANGLE_60",
    "ANGLE_45",
    "ANGLE_30",
    "ANGLE_15",
    "ANGLE_10",
    // Colors
    "COLOR_MAX",
    "COLOR_MIN",
    "COLOR_SHIFT_1_2",
    "COLOR_SHIFT_1_4",
    "COLOR_SHIFT_1_5",
    "COLOR_SHIFT_1_10",
    "COLOR_FILL",
    "COLOR_EMPTY",
    // Stroke
    "STROKE_SOLID",
    "STROKE_DASHED",
    "STROKE_DOTTED",
    "STROKE_THICK_ADD",
    "STROKE_THICK_SUB",
    // Operations
    "OP_MULT",
    "OP_ADD",
    "OP_SUB",
    // Arguments
    "ARGUMENT",
    "CALL_DIAMOND",
    "CALL_INV_TRIANGLE",
    // *** Actions ***
    // Callers
    "CALL_F",
    "CALL_G",
    "CALL_H",
    // Close Callers
    "CLOSE_CALL_F",
    "CLOSE_CALL_G",
    "CLOSE_CALL_H",
    // Shapes
    "DRAW_CIRCLE",
    "DRAW_SQUARE",
    "DRAW_TRIANGLE",
    // Line
    "DRAW_LINE",
    // Arc
    "DRAW_ARCLINE_R_3_4",
    "DRAW_ARCLINE_R_2_3",
    "DRAW_ARCLINE_R_1_2",
    "DRAW_ARCLINE_R_1_3",
    "DRAW_ARCLINE_R_1_4",
    "DRAW_ARCLINE_R_1_5",
    "DRAW_ARCLINE_L_3_4",
    "DRAW_ARCLINE_L_2_3",
    "DRAW_ARCLINE_L_1_2",
    "DRAW_ARCLINE_L_1_3",
    "DRAW_ARCLINE_L_1_4",
    "DRAW_ARCLINE_L_1_5",
    // Cursor translations
    "MOVE_FORWARD",
    "MOVE_BACKWARD",
    "MOVE_LEFT",
    "MOVE_RIGHT",
    // Cursor rotations
    "ROTATE_LEFT",
    "ROTATE_RIGHT",
    // Cursor Flip
    "FLIP_V",
    "FLIP_H",
    // Repetetive actions
    "REVERSE",
    "REPLAY",
    "REPLAY_2",
    "REPLAY_3",
    "REPLAY_4",
];


/***/ }),

/***/ "./src/core/parser.ts":
/*!****************************!*\
  !*** ./src/core/parser.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseLineFunc: () => (/* binding */ parseLineFunc),
/* harmony export */   parseLineValue: () => (/* binding */ parseLineValue),
/* harmony export */   parseRawTokens: () => (/* binding */ parseRawTokens)
/* harmony export */ });
/* harmony import */ var _core_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/tokens */ "./src/core/tokens.ts");
/* harmony import */ var _core_ast_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/ast/function */ "./src/core/ast/function.ts");


function parseRawTokens(rawTokens) {
    return rawTokens.map(raw => {
        const token = _core_tokens__WEBPACK_IMPORTED_MODULE_0__.TOKENS[raw];
        if (!token) {
            throw `Parsing error: ${raw} is not undefined as token.`;
        }
        return token;
    });
}
class ActionTmp {
    constructor() {
        this.actions = [];
        this.values = [];
        this.token = null;
    }
    setActionToken(token) {
        this.token = token;
    }
    getActionToken() {
        return this.token;
    }
    getValuesLength() {
        return this.values.length;
    }
    isActionSet() {
        return this.token !== null;
    }
    pushAction() {
        if (!this.isActionSet()) {
            return;
        }
        const factory = this.token.factory;
        const action = factory(this.values);
        this.actions.push(action);
        this.values = [];
        this.token = null;
    }
    insertValue(value) {
        this.values.push(value);
    }
    getActions() {
        return this.actions;
    }
}
function parseLineFunc(name, tokens) {
    const actions = [];
    const tmp = new ActionTmp();
    tokens.forEach(token => {
        if (tmp.isActionSet()) {
            parseValue(token, tmp);
        }
        else {
            parseAction(token, tmp);
        }
    });
    tmp.pushAction(); // push last token.
    return new _core_ast_function__WEBPACK_IMPORTED_MODULE_1__.Function(name, tmp.getActions());
}
function parseLineValue(tokens) {
    return tokens.map(token => {
        if (token.isAction) {
            throw "Parsing error: No actions are allowed";
        }
        if (token.isDynamic) {
            throw "Parsing error: No dynamic elements are allowed";
        }
        const factory = token.factory;
        return factory();
    });
}
function parseAction(token, tmp) {
    if (!token.isAction) {
        throw "Parsing error: token is not an action";
    }
    tmp.setActionToken(token);
}
function parseValue(token, tmp) {
    if (token.isAction) {
        tmp.pushAction();
        tmp.setActionToken(token);
    }
    else {
        const factory = token.factory;
        tmp.insertValue(factory());
    }
}


/***/ }),

/***/ "./src/core/step.ts":
/*!**************************!*\
  !*** ./src/core/step.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackStep: () => (/* binding */ StackStep)
/* harmony export */ });
/* harmony import */ var _contextStepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextStepper */ "./src/core/contextStepper.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _StackStep_stack, _StackStep_bag;

class StackStep {
    constructor(context, bag) {
        _StackStep_stack.set(this, void 0);
        _StackStep_bag.set(this, void 0);
        const func = bag.findFunction("START") || bag.findFunction("F");
        if (func === null) {
            throw "Start function not found";
        }
        __classPrivateFieldSet(this, _StackStep_stack, [(0,_contextStepper__WEBPACK_IMPORTED_MODULE_0__.createInitStepper)(context, func)], "f");
        __classPrivateFieldSet(this, _StackStep_bag, bag, "f");
        this.cursor = context.cursor;
    }
    step() {
        if (__classPrivateFieldGet(this, _StackStep_stack, "f").length == 0) {
            return {
                halt: true,
                stave: '?',
                index: 0,
            };
        }
        let newElement = null;
        const stepper = this.getTopElement();
        const { index, stave } = stepper;
        const result = stepper.exec();
        const stillContinue = stepper.move({
            bag: __classPrivateFieldGet(this, _StackStep_bag, "f"),
            push: (element) => { newElement = element; },
            result,
        });
        if (!stillContinue) {
            const contextStepper = __classPrivateFieldGet(this, _StackStep_stack, "f").pop();
            contextStepper.onEnd();
        }
        if (newElement !== null) {
            __classPrivateFieldGet(this, _StackStep_stack, "f").push(newElement);
        }
        return {
            halt: __classPrivateFieldGet(this, _StackStep_stack, "f").length == 0,
            stave,
            index,
        };
    }
    getTopElement() {
        return __classPrivateFieldGet(this, _StackStep_stack, "f")[__classPrivateFieldGet(this, _StackStep_stack, "f").length - 1];
    }
}
_StackStep_stack = new WeakMap(), _StackStep_bag = new WeakMap();


/***/ }),

/***/ "./src/core/svg.ts":
/*!*************************!*\
  !*** ./src/core/svg.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSvg: () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _core_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/figures */ "./src/core/figures.ts");


const NAMESPACE = "http://www.w3.org/2000/svg";
function createSvg(document, cursor) {
    const svg = document.createElementNS(NAMESPACE, "svg");
    let [min_x, min_y] = cursor.box.min;
    let [max_x, max_y] = cursor.box.max;
    min_x -= 10;
    min_y -= 10;
    max_x += 10;
    max_y += 10;
    const width = max_x - min_x;
    const height = max_y - min_y;
    svg.setAttribute("viewBox", `${min_x} ${min_y} ${width} ${height}`);
    cursor.figures.forEach(figure => {
        const node = toSvg(document, figure);
        if (node) {
            svg.appendChild(node);
        }
    });
    return svg;
}
const SQRT3H2 = Math.sqrt(3) / 2;
const H2 = 1 / 2;
function toSvg(document, figure) {
    if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Line) {
        const node = document.createElementNS(NAMESPACE, "line");
        const [x1, y1] = figure.firstPoint;
        const [x2, y2] = figure.secondPoint;
        node.setAttribute("x1", x1);
        node.setAttribute("y1", y1);
        node.setAttribute("x2", x2);
        node.setAttribute("y2", y2);
        node.setAttribute("stroke", figure.style.color || "black");
        node.setAttribute("stroke-width", figure.style.stroke !== undefined ? figure.style.stroke : 1);
        return node;
    }
    else if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Polygon) {
        const node = document.createElementNS(NAMESPACE, "path");
        const [x, y] = figure.point;
        let path = `M ${x} ${y}`;
        figure.curves.forEach(curve => {
            if (curve instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.LineCurve) {
                const [dx, dy] = curve.delta;
                path += ` l ${dx} ${dy}`;
            }
            else if (curve instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.ArcCurve) {
                const r = curve.radius;
                const startAngle = curve.shift * 2 * Math.PI;
                const endAngle = (curve.shift + curve.ratio) * 2 * Math.PI;
                const dx = r * (Math.cos(endAngle) - Math.cos(startAngle));
                const dy = r * (Math.sin(endAngle) - Math.sin(startAngle));
                const flag1 = Math.abs(curve.ratio) <= 0.5 ? "0" : "1";
                const flag2 = curve.ratio <= 0.0 ? "0" : "1";
                path += ` a ${r} ${r} 0 ${flag1} ${flag2} ${dx} ${dy}`;
            }
        });
        if (figure.close) {
            path += ` L ${x} ${y} Z`;
        }
        node.setAttribute("d", path);
        setBasicAttrs(figure.style, node);
        return node;
    }
    else if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Circle) {
        const node = document.createElementNS(NAMESPACE, "circle");
        const [x, y] = figure.point;
        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", figure.radius);
        setBasicAttrs(figure.style, node);
        return node;
    }
    else if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Arc) {
        const node = document.createElementNS(NAMESPACE, "path");
        const [x, y] = figure.point;
        const r = figure.radius;
        const startAngle = figure.shift * 2 * Math.PI;
        const endAngle = (figure.shift + figure.ratio) * 2 * Math.PI;
        const start_x = x + r * Math.cos(startAngle);
        const start_y = y + r * Math.sin(startAngle);
        const end_x = x + r * Math.cos(endAngle);
        const end_y = y + r * Math.sin(endAngle);
        const flag1 = Math.abs(figure.ratio) <= 0.5 ? "0" : "1";
        const flag2 = figure.ratio <= 0.0 ? "0" : "1";
        let path = `M ${start_x} ${start_y}`;
        path += ` A ${r} ${r} 0 ${flag1} ${flag2} ${end_x} ${end_y}`;
        if (figure.close) {
            path += `L ${x} ${y} Z`;
        }
        node.setAttribute("d", path);
        setBasicAttrs(figure.style, node);
        return node;
    }
    else if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Rectangle) {
        const node = document.createElementNS(NAMESPACE, "path");
        const [x, y] = figure.point;
        const [dx, dy] = figure.orientation;
        const W = figure.width / 2;
        const H = figure.height / 2;
        let path = '';
        path += ` M ${x - W * dx - H * dy} ${y + H * dx - W * dy}`;
        path += ` L ${x - W * dx + H * dy} ${y - H * dx - W * dy}`;
        path += ` L ${x + W * dx + H * dy} ${y - H * dx + W * dy}`;
        path += ` L ${x + W * dx - H * dy} ${y + H * dx + W * dy}`;
        path += ' Z';
        node.setAttribute("d", path);
        setBasicAttrs(figure.style, node);
        return node;
    }
    else if (figure instanceof _core_figures__WEBPACK_IMPORTED_MODULE_0__.Triangle) {
        const node = document.createElementNS(NAMESPACE, "path");
        const [x, y] = figure.point;
        const [dx, dy] = figure.orientation;
        const S = figure.size;
        let path = '';
        path += ` M ${x + S * dx} ${y + S * dy}`;
        path += ` L ${x - SQRT3H2 * S * dy - H2 * S * dx} ${y - H2 * S * dy + SQRT3H2 * S * dx}`;
        path += ` L ${x + SQRT3H2 * S * dy - H2 * S * dx} ${y - H2 * S * dy - SQRT3H2 * S * dx}`;
        path += ' Z';
        node.setAttribute("d", path);
        setBasicAttrs(figure.style, node);
        return node;
    }
    return null;
}
function setBasicAttrs(style, node) {
    node.setAttribute("fill", style.fill || "black");
    if (style.stroke !== undefined && style.stroke > 0) {
        node.setAttribute("stroke", style.color || "none");
        node.setAttribute("stroke-width", `${style.stroke}`);
    }
}


/***/ }),

/***/ "./src/core/tokens.ts":
/*!****************************!*\
  !*** ./src/core/tokens.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOKENS: () => (/* binding */ TOKENS),
/* harmony export */   Token: () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var _core_ast_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/ast/values */ "./src/core/ast/values.ts");
/* harmony import */ var _core_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/cursor */ "./src/core/cursor.ts");
/* harmony import */ var _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/ast/actions */ "./src/core/ast/actions.ts");
/* harmony import */ var _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/ast/colors */ "./src/core/ast/colors.ts");
/* harmony import */ var _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/ast/strokes */ "./src/core/ast/strokes.ts");
/* harmony import */ var _core_ast_ops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/ast/ops */ "./src/core/ast/ops.ts");






class Token {
    constructor({ isAction, isDynamic, factory }) {
        this.isAction = isAction;
        this.isDynamic = isDynamic;
        this.factory = factory;
    }
}
function createValue(factory, isDynamic = false) {
    return new Token({ isAction: false, isDynamic, factory });
}
function createAction(factory) {
    return new Token({ isAction: true, isDynamic: true, factory });
}
const TOKENS = {
    // *** Values ***
    // Counts
    COUNT_1: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1)),
    COUNT_2: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2)),
    COUNT_3: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3)),
    COUNT_5: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(5)),
    COUNT_7: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(7)),
    // Counts (special)
    COUNT_MINUS: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(-1)),
    COUNT_GOLD: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1.618033989)),
    COUNT_SILVER: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2.414213562)),
    COUNT_BRONZE: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3.302775638)),
    COUNT_PLASTIC: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1.3247179572)),
    // Fractions
    FRACT_1_2: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 2)),
    FRACT_1_3: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 3)),
    FRACT_2_3: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2 / 3)),
    FRACT_1_4: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 4)),
    FRACT_3_4: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3 / 4)),
    FRACT_1_5: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 5)),
    FRACT_2_5: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2 / 5)),
    FRACT_3_5: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3 / 5)),
    FRACT_4_5: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(4 / 5)),
    // Angles
    ANGLE_270: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(270)),
    ANGLE_180: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(180)),
    ANGLE_90: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(90)),
    ANGLE_60: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(60)),
    ANGLE_45: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(45)),
    ANGLE_30: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(30)),
    ANGLE_15: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(15)),
    ANGLE_10: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(10)),
    // Colors
    COLOR_MAX: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.MaxColor()),
    COLOR_MIN: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.MinColor()),
    COLOR_SHIFT_1_2: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.ShiftColor(1 / 2)),
    COLOR_SHIFT_1_4: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.ShiftColor(1 / 4)),
    COLOR_SHIFT_1_5: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.ShiftColor(1 / 5)),
    COLOR_SHIFT_1_10: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.ShiftColor(1 / 10)),
    COLOR_FILL: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.FillColor()),
    COLOR_EMPTY: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_3__.EmptyColor()),
    // Stroke
    STROKE_SOLID: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__.SetStrokeStyle("solid")),
    STROKE_DASHED: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__.SetStrokeStyle("dashed")),
    STROKE_DOTTED: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__.SetStrokeStyle("dotted")),
    STROKE_THICK_ADD: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__.ShiftStrokeThickness(+0.25)),
    STROKE_THICK_SUB: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_4__.ShiftStrokeThickness(-0.25)),
    // Operations
    OP_MULT: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_5__.MultOp()),
    OP_ADD: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_5__.AddOp()),
    OP_SUB: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_5__.SubOp()),
    // Arguments
    ARGUMENT: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Argument()),
    CALL_DIAMOND: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("DIAMOND"), true),
    CALL_INV_TRIANGLE: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("INV_TRIANGLE"), true),
    // *** Actions ***
    // Callers
    CALL_F: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Call("F", v)),
    CALL_G: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Call("G", v)),
    CALL_H: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Call("H", v)),
    // Close Callers
    CLOSE_CALL_F: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.CloseCall("F", v)),
    CLOSE_CALL_G: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.CloseCall("G", v)),
    CLOSE_CALL_H: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.CloseCall("H", v)),
    // Shapes
    DRAW_CIRCLE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawFigure(v, _core_cursor__WEBPACK_IMPORTED_MODULE_1__.Shape.Circle)),
    DRAW_SQUARE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawFigure(v, _core_cursor__WEBPACK_IMPORTED_MODULE_1__.Shape.Square)),
    DRAW_TRIANGLE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawFigure(v, _core_cursor__WEBPACK_IMPORTED_MODULE_1__.Shape.Triangle)),
    // Line
    DRAW_LINE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawLine(v)),
    // Arc
    DRAW_ARCLINE_R_3_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+3 / 4, v)),
    DRAW_ARCLINE_R_2_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+2 / 3, v)),
    DRAW_ARCLINE_R_1_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+1 / 2, v)),
    DRAW_ARCLINE_R_1_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+1 / 3, v)),
    DRAW_ARCLINE_R_1_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+1 / 4, v)),
    DRAW_ARCLINE_R_1_5: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(+1 / 5, v)),
    DRAW_ARCLINE_L_3_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-3 / 4, v)),
    DRAW_ARCLINE_L_2_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-2 / 3, v)),
    DRAW_ARCLINE_L_1_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-1 / 2, v)),
    DRAW_ARCLINE_L_1_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-1 / 3, v)),
    DRAW_ARCLINE_L_1_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-1 / 4, v)),
    DRAW_ARCLINE_L_1_5: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.DrawArcLine(-1 / 5, v)),
    // Cursor translations
    MOVE_FORWARD: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.MoveForward(v)),
    MOVE_BACKWARD: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.MoveBackward(v)),
    MOVE_LEFT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.MoveLeft(v)),
    MOVE_RIGHT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.MoveRight(v)),
    // Cursor rotations
    ROTATE_LEFT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.RotateLeft(v)),
    ROTATE_RIGHT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.RotateRight(v)),
    // Cursor flip
    FLIP_V: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.FlipVertically(v)),
    FLIP_H: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.FlipHorizontally(v)),
    // Repetetive actions
    REVERSE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Reverse(v)),
    REPLAY: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Replay(v)),
    REPLAY_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Replay(v, 2)),
    REPLAY_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Replay(v, 3)),
    REPLAY_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_2__.Replay(v, 4)),
};


/***/ }),

/***/ "./src/web/consts.ts":
/*!***************************!*\
  !*** ./src/web/consts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ICON_URL: () => (/* binding */ DEFAULT_ICON_URL)
/* harmony export */ });
const DEFAULT_ICON_URL = `${""}icons/`;


/***/ }),

/***/ "./src/web/controllers/controller.ts":
/*!*******************************************!*\
  !*** ./src/web/controllers/controller.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controller: () => (/* binding */ Controller)
/* harmony export */ });
class Controller {
    constructor(node) {
        this.node = node;
    }
}


/***/ }),

/***/ "./src/web/controllers/docs.ts":
/*!*************************************!*\
  !*** ./src/web/controllers/docs.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocsController: () => (/* binding */ DocsController)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/web/controllers/controller.ts");
/* harmony import */ var _web_views_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/views/code */ "./src/web/views/code.ts");
/* harmony import */ var _web_views_docBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/views/docBar */ "./src/web/views/docBar.ts");
/* harmony import */ var _web_views_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/web/views/title */ "./src/web/views/title.ts");
/* harmony import */ var _web_views_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/web/views/comment */ "./src/web/views/comment.ts");
/* harmony import */ var _web_views_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/web/views/image */ "./src/web/views/image.ts");
/* harmony import */ var _core_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/exec */ "./src/core/exec.ts");
/* harmony import */ var _core_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/cursor */ "./src/core/cursor.ts");








class DocsController extends _controller__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(params, iconUrl) {
        super(document.getElementById(params.nodeId));
        this.initRender(params);
        this.iterations = params.iterations;
        this.tokens = params.tokens;
        this.position = -1;
        this.iconUrl = iconUrl;
        this.imageView = new _web_views_image__WEBPACK_IMPORTED_MODULE_5__.ImageView(this.node.querySelector(".fract-image"));
        this.titleView = new _web_views_title__WEBPACK_IMPORTED_MODULE_3__.TitleView(this.node.querySelector(".fract-title"), params.title);
        this.commentView = new _web_views_comment__WEBPACK_IMPORTED_MODULE_4__.CommentView(this.node.querySelector(".fract-comment"));
        this.docBarView = new _web_views_docBar__WEBPACK_IMPORTED_MODULE_2__.DocBarView({
            node: this.node.querySelector(".fract-bar"),
            next: this.next.bind(this),
            prev: this.prev.bind(this),
        });
        this.codeView = new _web_views_code__WEBPACK_IMPORTED_MODULE_1__.CodeView({
            node: this.node.querySelector(".fract-staves"),
            callbacks: {
                onDrop: null,
                onMove: null,
                onDragTimeout: null,
                canDrag: null,
            },
            iconUrl,
        });
    }
    initRender(params) {
        this.node.classList.add("fract-animation");
        if (params.title.length > 0) {
            const titleNode = document.createElement("h1");
            titleNode.classList.add("fract-title");
            this.node.appendChild(titleNode);
        }
        {
            const imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            const stavesNode = document.createElement("ul");
            stavesNode.classList.add("fract-staves");
            this.node.appendChild(stavesNode);
        }
        {
            const commentNode = document.createElement("div");
            commentNode.classList.add("fract-comment");
            this.node.appendChild(commentNode);
        }
        {
            const barNode = document.createElement("div");
            barNode.classList.add("fract-bar");
            this.node.appendChild(barNode);
        }
    }
    render(params) {
        const staveBag = params.staves.map(stave => {
            const [name, suffix = ""] = stave.split("::");
            return { name, suffix, tokens: [] };
        });
        this.codeView.render(staveBag);
        this.docBarView.render(this.position, this.tokens.length, this.iterations);
        this.titleView.render();
        this.commentView.render();
    }
    update() {
        this.updateComment();
        this.scrapeAndRun();
        this.docBarView.update(this.position, this.tokens.length, this.iterations);
    }
    iterateToPosition(params) {
        for (let i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.update();
    }
    next() {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
        this.update();
    }
    prev() {
        if (this.position <= 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
        this.update();
    }
    scrapeAndRun() {
        const cursorCfg = {};
        const argument = 1.0;
        const code = this.codeView.scrapeCode();
        const cursor = new _core_cursor__WEBPACK_IMPORTED_MODULE_7__.Cursor(cursorCfg);
        const stack = (0,_core_exec__WEBPACK_IMPORTED_MODULE_6__.setupExec)(argument, this.iterations, code, cursor);
        (0,_core_exec__WEBPACK_IMPORTED_MODULE_6__.exec)(stack);
        this.imageView.render(cursor);
    }
    nextExecute() {
        this.getCommands().forEach(command => {
            if (command[0] != "!") {
                const [stave, token] = command.split("@", 2);
                this.pushTokenOnBack(stave, token);
                return;
            }
            switch (command.substring(1)) {
                case "IT_INC":
                    this.iterations += 1;
                    break;
                case "IT_DEC":
                    this.iterations -= 1;
                    break;
                case "NOP": break;
                default:
                    console.error(`${command} not found`);
                    break;
            }
        });
    }
    prevExecute() {
        this.getCommands().forEach(command => {
            if (command[0] != "!") {
                const [line] = command.split("@", 1);
                this.removeLastToken(line);
                return;
            }
            switch (command.substring(1)) {
                case "IT_INC":
                    this.iterations -= 1;
                    break;
                case "IT_DEC":
                    this.iterations += 1;
                    break;
                case "NOP": break;
                default:
                    console.error(`${command} not found`);
                    break;
            }
        });
    }
    getCommands() {
        const commandWithComment = this.tokens[this.position];
        const [rawCommands] = commandWithComment.split("#", 1);
        return rawCommands.split(",").map(rawCommand => rawCommand.trim());
    }
    updateComment() {
        const commandWithComment = this.tokens[this.position];
        const [, rawComment] = commandWithComment.split("#", 2);
        const comment = rawComment ? rawComment.trim() : "";
        this.commentView.render(comment);
    }
    pushTokenOnBack(fullStaveName, token) {
        const stave = this.findStave(fullStaveName);
        stave.pushTokenOnBack(token);
    }
    removeLastToken(fullStaveName) {
        const stave = this.findStave(fullStaveName);
        stave.removeTokenOnBack();
    }
    findStave(fullStaveName) {
        const [name, suffix] = this.splitFullStaveName(fullStaveName);
        const stave = this.codeView.findStave(name, suffix);
        if (stave === undefined) {
            throw `stave not found: ${fullStaveName}`;
        }
        return stave;
    }
    splitFullStaveName(fullStaveName) {
        const [name, suffix] = fullStaveName.split("::", 2);
        return [name, suffix || ""];
    }
}


/***/ }),

/***/ "./src/web/tokens.ts":
/*!***************************!*\
  !*** ./src/web/tokens.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAME_TO_TOKEN: () => (/* binding */ NAME_TO_TOKEN),
/* harmony export */   TOKENS: () => (/* binding */ TOKENS)
/* harmony export */ });
const TOKENS = [
    { name: 'ARGUMENT', label: 'Argument', type: 'value' },
    { name: 'CALL_DIAMOND', label: 'Diamond', type: 'value' },
    { name: 'CALL_INV_TRIANGLE', label: 'Inverse triangle', type: 'value' },
    { name: 'CALL_F', label: 'F function', type: 'action' },
    { name: 'CALL_G', label: 'G function', type: 'action' },
    { name: 'CALL_H', label: 'H function', type: 'action' },
    { name: 'CLOSE_CALL_F', label: 'F function', type: 'action' },
    { name: 'CLOSE_CALL_G', label: 'G function', type: 'action' },
    { name: 'CLOSE_CALL_H', label: 'H function', type: 'action' },
    { name: 'DRAW_LINE', label: 'Line', type: 'action' },
    { name: 'DRAW_CIRCLE', label: 'Circle', type: 'action' },
    { name: 'DRAW_SQUARE', label: 'Square', type: 'action' },
    { name: 'DRAW_TRIANGLE', label: 'Triangle', type: 'action' },
    { name: 'DRAW_ARCLINE_R_3_4', label: 'Arc 3/4 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_R_2_3', label: 'Arc 2/3 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_R_1_2', label: 'Arc 1/2 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_R_1_3', label: 'Arc 1/3 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_R_1_4', label: 'Arc 1/4 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_R_1_5', label: 'Arc 1/5 (Right)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_3_4', label: 'Arc 3/4 (Left)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_2_3', label: 'Arc 2/3 (Left)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_1_2', label: 'Arc 1/2 (Left)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_1_3', label: 'Arc 1/3 (Left)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_1_4', label: 'Arc 1/4 (Left)', type: 'action' },
    { name: 'DRAW_ARCLINE_L_1_5', label: 'Arc 1/5 (Left)', type: 'action' },
    { name: 'MOVE_FORWARD', label: 'Move forward', type: 'action' },
    { name: 'MOVE_BACKWARD', label: 'Move backward', type: 'action' },
    { name: 'MOVE_LEFT', label: 'Move left', type: 'action' },
    { name: 'MOVE_RIGHT', label: 'Move right', type: 'action' },
    { name: 'ROTATE_LEFT', label: 'Rotate left', type: 'action' },
    { name: 'ROTATE_RIGHT', label: 'Rotate right', type: 'action' },
    { name: 'FLIP_V', label: 'Flip Vertically', type: 'action' },
    { name: 'FLIP_H', label: 'Flip Horizontally', type: 'action' },
    { name: 'REVERSE', label: 'Reverse', type: 'action' },
    { name: 'REPLAY', label: 'Replay the last action', type: 'action' },
    { name: 'REPLAY_2', label: 'Replay the two last actions', type: 'action' },
    { name: 'REPLAY_3', label: 'Replay the three last actions', type: 'action' },
    { name: 'REPLAY_4', label: 'Replay the four last actions', type: 'action' },
    { name: 'COUNT_1', label: 'One', type: 'value' },
    { name: 'COUNT_2', label: 'Two', type: 'value' },
    { name: 'COUNT_3', label: 'Three', type: 'value' },
    { name: 'COUNT_5', label: 'Five', type: 'value' },
    { name: 'COUNT_7', label: 'Seven', type: 'value' },
    { name: 'COUNT_MINUS', label: 'Minus One', type: 'value' },
    { name: 'COUNT_GOLD', label: 'Golden Ratio', type: 'value' },
    { name: 'COUNT_SILVER', label: 'Silver Ratio', type: 'value' },
    { name: 'COUNT_BRONZE', label: 'Bronze Ratio', type: 'value' },
    { name: 'COUNT_PLASTIC', label: 'Plastic Number', type: 'value' },
    { name: 'FRACT_1_2', label: 'Half', type: 'value' },
    { name: 'FRACT_1_3', label: 'One Third', type: 'value' },
    { name: 'FRACT_2_3', label: 'Two Thirds', type: 'value' },
    { name: 'FRACT_1_4', label: 'One Quarter', type: 'value' },
    { name: 'FRACT_3_4', label: 'Three quarters', type: 'value' },
    { name: 'FRACT_1_5', label: 'One Fifth', type: 'value' },
    { name: 'FRACT_2_5', label: 'Two Fifth', type: 'value' },
    { name: 'FRACT_3_5', label: 'Three Fifth', type: 'value' },
    { name: 'FRACT_4_5', label: 'Four Fifth', type: 'value' },
    { name: 'ANGLE_270', label: '270°', type: 'value' },
    { name: 'ANGLE_180', label: '180°', type: 'value' },
    { name: 'ANGLE_90', label: '90°', type: 'value' },
    { name: 'ANGLE_60', label: '60°', type: 'value' },
    { name: 'ANGLE_45', label: '45°', type: 'value' },
    { name: 'ANGLE_30', label: '30°', type: 'value' },
    { name: 'ANGLE_15', label: '15°', type: 'value' },
    { name: 'ANGLE_10', label: '10°', type: 'value' },
    { name: 'OP_MULT', label: 'Multiple operator', type: 'value' },
    { name: 'OP_ADD', label: 'Addition operator', type: 'value' },
    { name: 'OP_SUB', label: 'Subtraction operator', type: 'value' },
    { name: 'COLOR_MAX', label: 'Second Color', type: 'value' },
    { name: 'COLOR_MIN', label: 'First Color', type: 'value' },
    { name: 'COLOR_FILL', label: 'Filled Figure', type: 'value' },
    { name: 'COLOR_EMPTY', label: 'Transparent Figure', type: 'value' },
    { name: 'COLOR_SHIFT_1_2', label: 'Change Color', type: 'value' },
    { name: 'COLOR_SHIFT_1_4', label: 'Change Color', type: 'value' },
    { name: 'COLOR_SHIFT_1_5', label: 'Change Color', type: 'value' },
    { name: 'COLOR_SHIFT_1_10', label: 'Change Color', type: 'value' },
    { name: 'STROKE_THICK_ADD', label: 'Thick stroke', type: 'value' },
    { name: 'STROKE_THICK_SUB', label: 'Thin stroke', type: 'value' },
];
const NAME_TO_TOKEN = new Map(TOKENS.map(token => [token.name, token]));


/***/ }),

/***/ "./src/web/views/code.ts":
/*!*******************************!*\
  !*** ./src/web/views/code.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeView: () => (/* binding */ CodeView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _stave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stave */ "./src/web/views/stave.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");



class CodeView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor({ node, callbacks, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL }) {
        super(node);
        this.iconUrl = iconUrl;
        this.staveViews = [];
        this.callbacks = callbacks;
    }
    render(staves) {
        this.clear();
        this.staveViews = staves.map(this.createStave.bind(this));
    }
    findStave(name, suffix) {
        return this.staveViews.find(view => view.checkName(name, suffix));
    }
    addStave(params) {
        const view = this.createStave({
            name: params.name,
            suffix: params.suffix,
            tokens: params.tokens,
        });
        this.staveViews.push(view);
    }
    scrapeCode() {
        return this.staveViews.filter(view => view.couldBeScraped()).map(view => view.scrape());
    }
    createStave({ name, suffix, tokens }) {
        const node = document.createElement("li");
        this.node.appendChild(node);
        const view = new _stave__WEBPACK_IMPORTED_MODULE_1__.StaveView({
            node,
            name,
            suffix: suffix || "",
            iconUrl: this.iconUrl,
            callbacks: this.callbacks,
            tokens,
        });
        view.render();
        return view;
    }
}


/***/ }),

/***/ "./src/web/views/comment.ts":
/*!**********************************!*\
  !*** ./src/web/views/comment.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentView: () => (/* binding */ CommentView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");

class CommentView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(node) {
        super(node);
        this.node.classList.add("fract-comment");
    }
    render(comment = "") {
        this.node.innerText = comment;
    }
}


/***/ }),

/***/ "./src/web/views/docBar.ts":
/*!*********************************!*\
  !*** ./src/web/views/docBar.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocBarView: () => (/* binding */ DocBarView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");

class DocBarView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor({ node, next, prev }) {
        super(node);
        this.node.classList.add("fract-bar");
        this.next = next;
        this.prev = prev;
    }
    render(position, tokenSize, iterations) {
        {
            const btnNode = document.createElement("input");
            btnNode.type = "button";
            btnNode.value = "« PREV";
            btnNode.name = "prev";
            btnNode.addEventListener("click", this.prev);
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = document.createElement("input");
            btnNode.type = "button";
            btnNode.value = "NEXT »";
            btnNode.name = "next";
            btnNode.addEventListener("click", this.next);
            this.node.appendChild(btnNode);
        }
        {
            const labelNode = document.createElement("label");
            labelNode.htmlFor = "iterations";
            labelNode.innerText = "Iterations:";
            this.node.appendChild(labelNode);
        }
        {
            const itNode = document.createElement("input");
            itNode.type = "number";
            itNode.disabled = true;
            itNode.name = "iterations";
            this.node.appendChild(itNode);
        }
        this.update(position, tokenSize, iterations);
    }
    update(position, tokenSize, iterations) {
        this.findInput("next").disabled = position >= tokenSize - 1;
        this.findInput("prev").disabled = position <= 0;
        this.findInput("iterations").value = iterations.toFixed();
    }
    findInput(name) {
        return this.node.querySelector(`[name='${name}']`);
    }
}


/***/ }),

/***/ "./src/web/views/image.ts":
/*!********************************!*\
  !*** ./src/web/views/image.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageView: () => (/* binding */ ImageView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _core_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/svg */ "./src/core/svg.ts");


class ImageView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    render(cursor, backgroundColor = null) {
        this.clear();
        this.node.style.backgroundColor = backgroundColor ? backgroundColor : "none";
        this.node.appendChild((0,_core_svg__WEBPACK_IMPORTED_MODULE_1__.createSvg)(document, cursor));
    }
}


/***/ }),

/***/ "./src/web/views/stave.ts":
/*!********************************!*\
  !*** ./src/web/views/stave.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaveView: () => (/* binding */ StaveView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _staveToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staveToken */ "./src/web/views/staveToken.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");



class StaveView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor({ node, name, suffix, callbacks, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL, tokens = [], }) {
        super(node);
        this.iconUrl = iconUrl;
        this.name = name;
        this.suffix = suffix;
        this.tokensNode = document.createElement("div");
        this.tokenView = new _staveToken__WEBPACK_IMPORTED_MODULE_1__.TokensStaveView({
            node: this.tokensNode,
            name,
            suffix,
            callbacks,
            iconUrl,
            tokens,
        });
    }
    render() {
        this.node.classList.add("stave");
        this.node.dataset.name = this.name;
        this.node.dataset.suffix = this.suffix;
        this.node.appendChild(this.createName(this.name, this.suffix));
        this.node.appendChild(this.tokensNode);
        this.tokenView.render();
    }
    checkName(name, suffix) {
        return this.name === name && this.suffix === suffix;
    }
    show() {
        this.node.classList.remove("hide");
    }
    hide() {
        this.node.classList.add("hide");
    }
    showOrHide() {
        this.node.classList.toggle("hide");
    }
    pushTokenAfter(token, index) {
        this.tokenView.pushTokenAfter(token, index);
    }
    replaceToken(newToken, index) {
        this.tokenView.replaceToken(newToken, index);
    }
    removeToken(index) {
        this.tokenView.removeToken(index);
    }
    pushTokenOnBack(token) {
        this.tokenView.pushTokenOnBack(token);
    }
    removeTokenOnBack() {
        this.tokenView.removeTokenOnBack();
    }
    couldBeScraped() {
        const isHide = this.node.classList.contains("hide");
        return !isHide;
    }
    scrape() {
        const tokens = this.tokenView.scrapeTokens();
        const { name, suffix } = this.node.dataset;
        return { name, suffix, tokens };
    }
    addFlagOnActionToken(flag, actionIndex) {
        this.tokenView.addFlagOnActionToken(flag, actionIndex);
    }
    removeFlagOnActionToken(flag, actionIndex) {
        this.tokenView.removeFlagOnActionToken(flag, actionIndex);
    }
    createName(name, suffix) {
        const node = document.createElement("span");
        node.classList.add("name");
        const realname = suffix ? `${name}_${suffix}` : name;
        node.style.backgroundImage = `url(${this.iconUrl}/CALL_${realname}.svg)`;
        return node;
    }
}


/***/ }),

/***/ "./src/web/views/staveToken.ts":
/*!*************************************!*\
  !*** ./src/web/views/staveToken.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokensStaveView: () => (/* binding */ TokensStaveView)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/web/views/token.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");


class TokensStaveView extends _token__WEBPACK_IMPORTED_MODULE_0__.TokensView {
    constructor({ node, name, suffix, callbacks, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ICON_URL, tokens = [], }) {
        super({
            node,
            iconUrl,
            callbacks,
        });
        this.tokens = tokens;
        this.name = name;
        this.suffix = suffix;
    }
    render() {
        this.node.classList.add("tokens");
        this.renderTokens();
    }
    renderTokens() {
        this.node.innerHTML = "";
        if (this.isDraggable) {
            this.node.appendChild(this.createTokenSpanNode(0));
        }
        let actionIndex = 0;
        this.tokens.forEach((token, index) => {
            actionIndex = this.pushTokenNodeOnBack(this.node, token, index, actionIndex);
        });
    }
    pushTokenAfter(token, index) {
        this.tokens.splice(index, 0, token);
        this.renderTokens();
    }
    replaceToken(newToken, index) {
        this.tokens[index] = newToken;
        this.renderTokens();
    }
    removeToken(index) {
        this.tokens.splice(index, 1);
        this.renderTokens();
    }
    pushTokenOnBack(token) {
        this.tokens.push(token);
        this.renderTokens();
    }
    removeTokenOnBack() {
        this.tokens.pop();
        this.renderTokens();
    }
    pushTokenNodeOnBack(tokensNode, token, index, actionIndex) {
        const appendSpan = (container, s = 1) => {
            if (this.isDraggable) {
                container.appendChild(this.createTokenSpanNode(index + s));
            }
        };
        const appendChild = (container, node, s = 1) => {
            container.appendChild(node);
            appendSpan(container, s);
        };
        const tokenNode = this.createEnhancedTokenNode(token, index, actionIndex);
        let lastNode = tokensNode.lastChild;
        if (this.isDraggable) {
            // probably it's a span, find previous node
            lastNode = lastNode.previousSibling;
        }
        const isGroup = (node) => node.classList.contains("fract-token-group");
        const isAction = (node) => { var _a; return ((_a = node.dataset) === null || _a === void 0 ? void 0 : _a.type) === "action"; };
        if (!lastNode) {
            appendChild(tokensNode, tokenNode);
            return actionIndex + (isAction(tokenNode) ? 1 : 0);
        }
        if (isAction(tokenNode)) {
            appendChild(tokensNode, tokenNode);
            return actionIndex + 1;
        }
        else {
            if (isGroup(lastNode)) {
                if (this.isDraggable) {
                    tokensNode.removeChild(lastNode.nextSibling);
                }
                appendChild(lastNode, tokenNode);
                if (this.isDraggable) {
                    appendSpan(tokensNode);
                }
                return actionIndex;
            }
            if (!isAction(lastNode)) {
                appendChild(tokensNode, tokenNode);
                return actionIndex;
            }
            // Create a new group with action and value.
            const groupNode = this.createEmptyTokenGroup();
            if (this.isDraggable) {
                tokensNode.removeChild(lastNode.nextSibling);
            }
            tokensNode.removeChild(lastNode);
            tokensNode.insertBefore(groupNode, lastNode.nextSibling);
            groupNode.dataset.actionIndex = lastNode.dataset.actionIndex;
            appendChild(groupNode, lastNode, 0);
            appendChild(groupNode, tokenNode);
            appendSpan(tokensNode);
            return actionIndex;
        }
    }
    createEnhancedTokenNode(token, index, actionIndex) {
        var _a;
        const node = this.createTokenNode(token);
        node.dataset.index = `${index}`;
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        if (((_a = node.dataset) === null || _a === void 0 ? void 0 : _a.type) === "action") {
            node.dataset.actionIndex = `${actionIndex}`;
        }
        return node;
    }
    createDragNode(node) {
        const dragNode = super.createDragNode(node);
        dragNode.dataset.index = node.dataset.index;
        dragNode.dataset.name = node.dataset.name;
        dragNode.dataset.suffix = node.dataset.suffix;
        return dragNode;
    }
    createEmptyTokenGroup() {
        return this.createElement({
            name: "div",
            classes: ["fract-token-group"],
        });
    }
    scrapeTokens() {
        return this.tokens;
    }
    createTokenSpanNode(index) {
        const node = this.createElement({
            name: 'span',
            classes: ["fract-token-span"],
        });
        node.dataset.index = `${index}`;
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        return node;
    }
    createTokenRemoveSpanNode() {
        const node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        return node;
    }
}
;


/***/ }),

/***/ "./src/web/views/title.ts":
/*!********************************!*\
  !*** ./src/web/views/title.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleView: () => (/* binding */ TitleView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");

class TitleView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(node, text) {
        super(node);
        this.text = text;
    }
    render() {
        if (!this.text) {
            this.node.remove();
            return;
        }
        this.node.innerText = this.text;
    }
}


/***/ }),

/***/ "./src/web/views/token.ts":
/*!********************************!*\
  !*** ./src/web/views/token.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokensView: () => (/* binding */ TokensView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _web_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/tokens */ "./src/web/tokens.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TokensView_callbacks;



class TokensView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor({ node, callbacks, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL }) {
        super(node);
        _TokensView_callbacks.set(this, void 0);
        this.iconUrl = iconUrl;
        __classPrivateFieldSet(this, _TokensView_callbacks, callbacks, "f");
    }
    get isDraggable() {
        return __classPrivateFieldGet(this, _TokensView_callbacks, "f").onDrop !== null;
    }
    addFlagOnActionToken(flag, actionIndex) {
        this.findTokenNodeByActionIndex(actionIndex).classList.add(flag);
    }
    removeFlagOnActionToken(flag, actionIndex) {
        this.findTokenNodeByActionIndex(actionIndex).classList.remove(flag);
    }
    findTokenNodeByActionIndex(actionIndex) {
        const query = `*[data-action-index='${actionIndex}']`;
        return this.node.querySelector(query);
    }
    createTokenNode(token) {
        const tokenInfo = _web_tokens__WEBPACK_IMPORTED_MODULE_1__.NAME_TO_TOKEN.get(token);
        const node = this.createElement({
            name: 'span',
            classes: ['fract-token'],
        });
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.style.backgroundImage = `url(${this.iconUrl}/${token}.svg)`;
        if (this.isDraggable) {
            this.setTokenEvents(node);
        }
        return node;
    }
    createDragNode(node) {
        const dragNode = document.createElement('span');
        dragNode.classList.add('fract-token', 'move');
        dragNode.style.backgroundImage = node.style.backgroundImage;
        dragNode.dataset.token = node.dataset.token;
        return dragNode;
    }
    setTokenEvents(node) {
        node.addEventListener('mousedown', dragMouseStart, false);
        node.addEventListener('touchstart', dragTouchStart, false);
        const callbacks = __classPrivateFieldGet(this, _TokensView_callbacks, "f");
        const canDrag = () => callbacks.canDrag && !callbacks.canDrag();
        const createContext = (coordsCb) => new DragContext(() => this.createDragNode(node), () => callbacks.onDragTimeout !== null ? callbacks.onDragTimeout(node) : false, coordsCb, callbacks);
        function dragMouseStart(event) {
            if (event.button != 0) {
                return;
            }
            event.preventDefault();
            if (canDrag()) {
                return;
            }
            const context = createContext(getMouseCoords);
            context.init(event, {
                mousemove: context.createDragMove(),
                mouseup: context.createDragStop(),
            });
            context.update(event);
        }
        function dragTouchStart(event) {
            if (callbacks.canDrag && !callbacks.canDrag()) {
                return;
            }
            const context = createContext(getTouchCoords);
            context.init(event, {
                touchmove: context.createDragMove(),
                touchend: context.createDragStop(),
            });
            context.update(event);
        }
        function getMouseCoords(event) {
            return [event.clientX, event.clientY];
        }
        function getTouchCoords(event) {
            return [event.touches[0].clientX, event.touches[0].clientY];
        }
    }
}
_TokensView_callbacks = new WeakMap();
class DragContext {
    constructor(createDragNode, onTimeout, getCoords, callbacks) {
        this.createDragNode = createDragNode;
        this.dragNode = null;
        this.overNode = null;
        this.eventCallbacks = {};
        this.callbacks = callbacks;
        this._getCoords = getCoords;
        this.timeout = setTimeout(() => {
            if (onTimeout()) {
                this.clear();
            }
        }, 300);
    }
    createDragMove() {
        return (event) => {
            this.update(event);
        };
    }
    createDragStop() {
        return (event) => {
            if (this.overNode !== null) {
                this.callbacks.onDrop(this.dragNode, this.overNode);
            }
            this.clear();
        };
    }
    init(event, eventCallbacks) {
        this.initialCoords = this._getCoords(event);
        this.eventCallbacks = eventCallbacks;
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.addEventListener(name, cb, false);
        });
    }
    clear() {
        if (this.dragNode !== null) {
            this.dragNode.remove();
        }
        if (this.callbacks.onMove) {
            this.callbacks.onMove(this.dragNode, this.overNode, null);
        }
        Object.entries(this.eventCallbacks).forEach(([name, cb]) => {
            document.removeEventListener(name, cb, false);
        });
    }
    update(event) {
        if (this.dragNode == null) {
            const distance = this.computerDistanceToInitialCoords(event);
            if (distance > 5) {
                clearTimeout(this.timeout);
                this.dragNode = this.createDragNode();
                document.body.appendChild(this.dragNode);
            }
            else {
                return;
            }
        }
        const [x, y] = this.getCoords(event);
        this.updateCoords(x, y);
        const oldOverNode = this.overNode;
        const newOverNode = this.findOverNode();
        if (this.callbacks.onMove && !Object.is(oldOverNode, newOverNode)) {
            this.callbacks.onMove(this.dragNode, oldOverNode, newOverNode);
        }
        this.overNode = newOverNode;
    }
    computerDistanceToInitialCoords(event) {
        const [x, y] = this._getCoords(event);
        const dx = this.initialCoords[0] - x;
        const dy = this.initialCoords[1] - y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    updateCoords(x, y) {
        this.dragNode.style.left = `${x.toFixed()}px`;
        this.dragNode.style.top = `${y.toFixed()}px`;
    }
    findOverNode() {
        const codeNode = document.querySelector("#code");
        const filter = this.getWalkerFilter();
        const walker = document.createTreeWalker(codeNode, NodeFilter.SHOW_ELEMENT, filter);
        while (walker.nextNode() !== null)
            ;
        return walker.currentNode;
    }
    getWalkerFilter() {
        const VALID_CLASSES = ['fract-token-span', 'fract-staves', 'tokens'];
        const dragRect = this.dragNode.getBoundingClientRect();
        return {
            acceptNode(node) {
                const rect = node.getBoundingClientRect();
                if (dragRect.right < rect.left
                    || dragRect.left > rect.right
                    || dragRect.bottom < rect.top
                    || dragRect.top > rect.bottom) {
                    return NodeFilter.FILTER_REJECT;
                }
                if (!VALID_CLASSES.some(c => node.classList.contains(c))) {
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        };
    }
    getCoords(event) {
        const [x, y] = this._getCoords(event);
        const nx = x - this.dragNode.clientWidth / 2;
        const ny = y - this.dragNode.clientHeight;
        return [nx, ny];
    }
}
;


/***/ }),

/***/ "./src/web/views/view.ts":
/*!*******************************!*\
  !*** ./src/web/views/view.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* binding */ View)
/* harmony export */ });
class View {
    constructor(node) {
        this.node = node;
    }
    clear() {
        this.node.innerHTML = "";
    }
    createElement(params) {
        const node = document.createElement(params.name);
        if (params.classes) {
            node.classList.add(...params.classes);
        }
        if (params.onclick) {
            node.onclick = event => {
                try {
                    params.onclick(event);
                }
                finally {
                    return false;
                }
            };
        }
        if (node instanceof HTMLInputElement) {
            if (params.type) {
                node.type = params.type;
            }
            if (params.text) {
                node.value = params.text;
            }
            if (params.readonly) {
                node.readOnly = params.readonly;
            }
        }
        else {
            if (params.text) {
                node.innerText = params.text;
            }
        }
        return node;
    }
}


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/web/docs.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeAnimation: () => (/* binding */ makeAnimation)
/* harmony export */ });
/* harmony import */ var _controllers_docs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/docs */ "./src/web/controllers/docs.ts");
/* harmony import */ var _style_docs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/style/docs.scss */ "./src/style/docs.scss");


const ANIMATIONS_PARAMS = [];
const CURRENT_HREF = document.currentScript.src;
function makeAnimation(params) {
    ANIMATIONS_PARAMS.push(params);
}
function getIconsUrls() {
    const dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    return `${dirnameHref}../_images`;
}
function renderAll(iconUrl) {
    ANIMATIONS_PARAMS.forEach(params => {
        const controller = new _controllers_docs__WEBPACK_IMPORTED_MODULE_0__.DocsController(params, iconUrl);
        controller.render(params);
        controller.iterateToPosition(params);
    });
}
window.addEventListener('load', event => {
    const iconUrl = getIconsUrls();
    renderAll(iconUrl);
});

})();

TUT = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QyxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNyQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzdELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxZ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QyxJQUFJLHVEQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0QsWUFBWTtJQUNaLFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVM7SUFDVCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksbURBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxD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LEVBQUUsd0RBQWMsQ0FBQyxDQUFDO0lBQzNFLE9BQU87SUFDUCxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSx1REFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxNQUFNO0lBQ04sa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENB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RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUVyRSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQzdELEVB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LnNjc3MiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3R5bGUvZG9jcy5zY3NzP2JkMmMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3QvYWN0aW9uUmVzdWx0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9hY3Rpb25zLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9iYXNlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L2Z1bmN0aW9uLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L3N0cm9rZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L3ZhbHVlcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2NvbnRleHRTdGVwcGVyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2N1cnNvci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9leGVjLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvZnVuY3Rpb25zQmFnLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL21hcHBpbmdzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL3BhcnNlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9zdGVwLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL3N2Zy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb250cm9sbGVycy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29udHJvbGxlcnMvZG9jcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9jb21tZW50LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvZG9jQmFyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9zdGF2ZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3N0YXZlVG9rZW4udHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy90aXRsZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3Rva2VuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2RvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIHNob3d0aW1lIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuLmZyYWN0LXRva2VucyB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGdhcDogNXB4O1xcbn1cXG4uZnJhY3QtdG9rZW5zLmhpZGUgLmZyYWN0LXRva2VuLCAuZnJhY3QtdG9rZW5zLmhpZGUgLmxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAuZ3JvdXAtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mcmFjdC10b2tlbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC10b2tlbi50b2tlbi1pbmxpbmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuLmZyYWN0LXRva2VuLmRlYnVnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC40NjY2NjY2NjY3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93dGltZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlLnZhbGlkLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDIxOCwgMTIzLCAwLjQ2NjY2NjY2NjcpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjI4QjIyO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRST1BcXFwiO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS5yZW1vdmUtZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMCwgMCwgMC40NjY2NjY2NjY3KTtcXG4gIGJvcmRlci1jb2xvcjogIzhiMjIyMjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUucmVtb3ZlLWRyb3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUkVNT1ZFXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmU6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTZwdDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpLmZyYWN0LXRva2VuIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggIzg4OCBkb3R0ZWQ7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cCA+IC5mcmFjdC10b2tlbi1zcGFuIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwLmRlYnVnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cC5kZWJ1ZyA+IC5mcmFjdC10b2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLmZyYWN0LXRva2VuLXNwYW4ub3Zlcjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG59XFxuXFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC50b2tlbi1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm5hbWUge1xcbiAgZmxleDogMCAxIDUwcHg7XFxuICBmb250LXNpemU6IDE1cHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAudG9rZW5zIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLnRva2VucyA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaS5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWcuc2lnLW9iamVjdC50dXQgPiAuc2lnLW5hbWUuZGVzY25hbWUgPiBwIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZyYWN0LXRva2VuLnRva2VuLWhlYWRlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLmZyYWN0LWFuaW1hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuLmZyYWN0LWFuaW1hdGlvbiBsYWJlbCB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmZyYWN0LXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyLCAuZnJhY3QtY29tbWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyID4gaW5wdXRbbmFtZT1pdGVyYXRpb25zXSB7XFxuICB3aWR0aDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZyYWN0LWNvbW1lbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgaGVpZ2h0OiA1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZyYWN0LWltYWdlID4gc3ZnIHtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgLnRva2VucyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mcmFjdC1zdGF2ZXMgLmZyYWN0LXRva2VuLCAuZnJhY3Qtc3RhdmVzIC5mcmFjdC10b2tlbi1ncm91cCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuLmZyYWN0LXN0YXZlcyAuZnJhY3QtdG9rZW4ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzIC5mcmFjdC10b2tlbi1ncm91cCAuZnJhY3QtdG9rZW4ge1xcbiAgcGFkZGluZzogMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9rZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kb2NzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb2RlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUFPLFdBQUE7RUNFVDtFRERFO0lBQUssYUFBQTtFQ0lQO0FBQ0Y7QURGQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0lKO0FERFE7RUFDSSxhQUFBO0FDR1o7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFB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Sjs7QUFyTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF3TUo7QUF2TUk7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUF5TVI7O0FBck1BO0VBQ0ksaUJBQUE7QUF3TUo7QUF2TUk7RUFDSSxZQUFBO0FBeU1SO0FBeE1RO0VBQVUsWUFBQTtBQTJNbEI7QUF4TUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBME1SO0FBdk1JO0VBQ0ksV0FBQTtBQXlNUjtBQXRNSTtFQUNJLGNBQUE7QUF3TVI7QUF0TVE7RUFDSSxZQUFBO0FBd01aXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2hvd3RpbWUge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMCU7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAxMDAlOyB9XFxufVxcblxcbi5mcmFjdC10b2tlbnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICAmLmhpZGUge1xcbiAgICAgICAgLmZyYWN0LXRva2VuLCAubGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgPiAuZ3JvdXAtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgPiAubGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJi50b2tlbi1pbmxpbmUge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgIH1cXG5cXG4gICAgJi5tb3ZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M3NztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93dGltZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuXFxuICAgICAgICAmLnZhbGlkLWRyb3Age1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YmRhN2I3NztcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjhCMjI7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogXFxcIkRST1BcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLnJlbW92ZS1kcm9wIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkwMDAwNzc7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOGIyMjIyO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJSRU1PVkVcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdG9wOiAtMTZwdDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgPiAqIHsgZmxleDogMCAwIGF1dG87IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMHB4OyB9XFxuICAgID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7IGJvcmRlci1sZWZ0OiAycHggIzg4OCBkb3R0ZWQ7IH1cXG4gICAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7IHBhZGRpbmc6IDJweDsgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgICAgICAmID4gLmZyYWN0LXRva2VuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcXG5cXG4gICAgJi5vdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL3Rva2Vucyc7XFxuQGltcG9ydCAnLi9jb2RlJztcXG5cXG5cXG4uc2lnLnNpZy1vYmplY3QudHV0ID4gLnNpZy1uYW1lLmRlc2NuYW1lID4gcCB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZyYWN0LXRva2VuLnRva2VuLWhlYWRlciB7XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4uZnJhY3QtYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICB9XFxufVxcblxcbi5mcmFjdC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmZyYWN0LWJhciwgLmZyYWN0LWNvbW1lbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmZyYWN0LWJhciB7XFxuICAgID4gaW5wdXRbbmFtZT1cXFwiaXRlcmF0aW9uc1xcXCJdIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5mcmFjdC1jb21tZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZnJhY3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgID4gc3ZnIHtcXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxufVxcblxcbi5mcmFjdC1zdGF2ZXMge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgPiBsaSB7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICAudG9rZW5zIHsgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIH1cXG5cXG4gICAgLmZyYWN0LXRva2VuLCAuZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMnB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxuICAgIH1cXG5cXG4gICAgLmZyYWN0LXRva2VuIHtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgIC5mcmFjdC10b2tlbi1ncm91cCB7XFxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG5cXG4gICAgICAgIC5mcmFjdC10b2tlbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAudG9rZW4tYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgID4gLm5hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gLnRva2VucyAge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcblxcbiAgICAgICAgICAgID4gKiB7IGZsZXg6IDAgMCBhdXRvOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZGUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aW9uUmVzdWx0IHsgfVxuXG5leHBvcnQgY2xhc3MgQ29udGludWVSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHsgfVxuXG5leHBvcnQgY2xhc3MgSnVtcFIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIGNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgc3RhdmU6IHN0cmluZztcbiAgICBuZXdDb250ZXh0OiBDb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdmU6IHN0cmluZywgY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXZlID0gc3RhdmU7XG4gICAgICAgIHRoaXMubmV3Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIGNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBDbG9zZUN1cnNvciwgU2hhcGUsIElDdXJzb3IsIE9wc1BhcmFtcyB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENvbnRpbnVlUiwgSnVtcFIsIENhbGxSLCBSZXZlcnNlUn0gZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uUmVzdWx0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuYWJzdHJhY3QgY2xhc3MgTm9kZVdpdGhWYWx1ZSBleHRlbmRzIEFjdGlvbk5vZGUge1xuICAgICN2YWx1ZXM6IFZhbHVlTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBWYWx1ZU5vZGVbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiN2YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy4jdmFsdWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbFZhbHVlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHRoaXMuI3ZhbHVlcywgY29udGV4dCkudmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWxJbnRWYWx1ZShjb250ZXh0OiBDb250ZXh0KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5ldmFsVmFsdWUoY29udGV4dCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICAjbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICByZXR1cm4gbmV3IENhbGxSKHRoaXMuI25hbWUsIHRoaXMuY3JlYXRlQ29udGV4dChjb250ZXh0KSk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWMoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbnRleHQoY29udGV4dDogQ29udGV4dCk6IENvbnRleHQge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRleHQoe1xuICAgICAgICAgICAgYXJndW1lbnQ6IHRoaXMuZXZhbChjb250ZXh0KSxcbiAgICAgICAgICAgIGN1cnNvcjogdGhpcy5jcmVhdGVDdXJzb3IoY29udGV4dCksXG4gICAgICAgICAgICBpdGVyYXRpb246IGNvbnRleHQuaXRlcmF0aW9uICsgMSxcbiAgICAgICAgICAgIHZhbHVlRnVuY0JhZzogY29udGV4dC52YWx1ZUZ1bmNCYWcsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDdXJzb3IoY29udGV4dDogQ29udGV4dCk6IElDdXJzb3Ige1xuICAgICAgICByZXR1cm4gY29udGV4dC5jdXJzb3I7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQ6IEV2YWx1ZWRWYWx1ZSk6IE9wc1BhcmFtcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNGaWxsZWQ6IGV2YWxlZC5pc0ZpbGxlZCxcbiAgICAgICAgY29sb3I6IGV2YWxlZC5jb2xvcixcbiAgICAgICAgc3Ryb2tlOiBldmFsZWQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBDbG9zZUNhbGwgZXh0ZW5kcyBDYWxsIHtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3Vyc29yKGNvbnRleHQ6IENvbnRleHQpOiBJQ3Vyc29yIHtcbiAgICAgICAgY29uc3QgZXZhbGVkID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gbmV3IENsb3NlQ3Vyc29yKGNvbnRleHQuY3Vyc29yLCBldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3TGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZTogbGVuZ3RoLCBzdHJva2VUaGlja25lc3MsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZHJhd0xpbmUobGVuZ3RoLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3RmlndXJlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgI3NoYXBlOiBTaGFwZVxuXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBWYWx1ZU5vZGVbXSwgc2hhcGU6IFNoYXBlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlcyk7XG4gICAgICAgIHRoaXMuI3NoYXBlID0gc2hhcGU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZXZhbGVkID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBzaXplID0gZXZhbGVkLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3U2hhcGUodGhpcy4jc2hhcGUsIHNpemUsIGV2YWxlZFRvRmlndXJlT3BzKGV2YWxlZCkpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdBcmNMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgcHJpdmF0ZSByYXRpbzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmF0aW8sIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZTogc2l6ZSwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmRyYXdBcmNMaW5lKHRoaXMucmF0aW8sIHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnN0IHsgY3Vyc29yIH0gPSBjb250ZXh0O1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgQ3Vyc29yTWFuaXB1bGF0b3IgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBhYnN0cmFjdCBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHRoaXMuY2hhbmdlKGNvbnRleHQuY3Vyc29yLCB0aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICB0aGlzLmNoYW5nZShjb250ZXh0LmN1cnNvciwgLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUZvcndhcmQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IuZm9yd2FyZCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUJhY2t3YXJkIGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLmJhY2t3YXJkKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlTGVmdCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5sZWZ0KHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlUmlnaHQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IucmlnaHQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZVJpZ2h0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlTGVmdCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbGlwVmVydGljYWxseSBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yKSB7XG4gICAgICAgIGN1cnNvci5mbGlwKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmxpcEhvcml6b250YWxseSBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoMC41KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gbmV3IFJldmVyc2VSKGl0ZXJhdGlvbnMpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgUmV2ZXJzZVIoaXRlcmF0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVwbGF5IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgI2p1bXBTaXplOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwganVtcFNpemUgPSAxKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy4janVtcFNpemUgPSBqdW1wU2l6ZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbG9jYWxbJ2NvdW50ZXInXSB8fCAxO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGlmIChjb3VudGVyIDwgc2l6ZSkge1xuICAgICAgICAgICAgbG9jYWxbJ2NvdW50ZXInXSA9IGNvdW50ZXIgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBKdW1wUigtdGhpcy4janVtcFNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENvbnRpbnVlUiB9IGZyb20gXCIuL2FjdGlvblJlc3VsdFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIHtcbiAgICBhYnN0cmFjdCBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWU7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY3Rpb25Ob2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdCB7IHJldHVybiBuZXcgQ29udGludWVSKCk7IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVmFsdWUodmFsdWVOb2RlczogVmFsdWVOb2RlW10sIGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IGluaXQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgY29sb3I6IGNvbnRleHQuYXJndW1lbnQuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICBpc0ZpbGxlZDogY29udGV4dC5hcmd1bWVudC5pc0ZpbGxlZCxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogKGE6IG51bWJlciwgYjpudW1iZXIpID0+IGEgKiBiLFxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlTm9kZXMucmVkdWNlKHBhcnRFdmFsLmJpbmQodGhpcywgY29udGV4dCksIGluaXQpO1xufVxuXG5mdW5jdGlvbiBwYXJ0RXZhbChjb250ZXh0OiBDb250ZXh0LCBhY2M6IEV2YWx1ZWRWYWx1ZSwgbm9kZTogVmFsdWVOb2RlKTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG5vZGUuZXZhbChjb250ZXh0KTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXdWYWx1ZS52YWx1ZVRyYW5zZm9ybWVyIHx8IGFjYy52YWx1ZVRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdHJhbnNmb3JtKGFjYy52YWx1ZSwgbmV3VmFsdWUudmFsdWUpIDogYWNjLnZhbHVlLFxuICAgICAgICBjb2xvcjogbmV3VmFsdWUuY29sb3IgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLmNvbG9yIDogYWNjLmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogbmV3VmFsdWUuc3Ryb2tlU3R5bGUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVN0eWxlIDogYWNjLnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzIDogYWNjLnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgaXNGaWxsZWQ6IG5ld1ZhbHVlLmlzRmlsbGVkICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5pc0ZpbGxlZCA6IGFjYy5pc0ZpbGxlZCxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogdHJhbnNmb3JtLFxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF4Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDAuNX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWluQ29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDAuMH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsbENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2lzRmlsbGVkOiB0cnVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eUNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2lzRmlsbGVkOiBmYWxzZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2hpZnRDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGxldCBjb2xvciA9IChjb250ZXh0LmFyZ3VtZW50LmNvbG9yICsgdGhpcy5zaGlmdCkgJSAxLjA7XG4gICAgICAgIGlmIChjb2xvciA8IDAuMCkge1xuICAgICAgICAgICAgY29sb3IgKz0gMS4wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7Y29sb3J9O1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgQWN0aW9uTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhY3Rpb25zOiBBY3Rpb25Ob2RlW10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNdWx0T3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICogYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSArIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgLSBiIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IFN0cm9rZVN0eWxlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXRTdHJva2VTdHlsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzdHJva2U6IFN0cm9rZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3Ioc3Ryb2tlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVN0eWxlOiB0aGlzLnN0cm9rZSB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgU2hpZnRTdHJva2VUaGlja25lc3MgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCBzdHJva2VUaGlja25lc3MgPSBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyArIHRoaXMuc2hpZnQ7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVRoaWNrbmVzcyB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVkQW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVkQW5nbGUgPSBhbmdsZSAvIDM2MC4wO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMubm9ybWFsaXplZEFuZ2xlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZXIgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogY29udGV4dC5hcmd1bWVudC52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0FyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gY29udGV4dC52YWx1ZUZ1bmNCYWdbdGhpcy5uYW1lXSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcblxuZXhwb3J0IHR5cGUgU3Ryb2tlU3R5bGUgPSBcInNvbGlkXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWVkVmFsdWUge1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIGNvbG9yPzogbnVtYmVyO1xuICAgIHN0cm9rZVN0eWxlPzogU3Ryb2tlU3R5bGU7XG4gICAgc3Ryb2tlVGhpY2tuZXNzPzogbnVtYmVyO1xuICAgIGlzRmlsbGVkPzogYm9vbGVhbjtcbiAgICB2YWx1ZVRyYW5zZm9ybWVyPzogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICByZWFkb25seSBpdGVyYXRpb246IG51bWJlcjtcbiAgICByZWFkb25seSBhcmd1bWVudDogRXZhbHVlZFZhbHVlO1xuICAgIHJlYWRvbmx5IGN1cnNvcjogSUN1cnNvcjtcbiAgICByZWFkb25seSB2YWx1ZUZ1bmNCYWc6IHtbbmFtZTogc3RyaW5nXTogVmFsdWVOb2RlW119O1xuXG4gICAgY29uc3RydWN0b3Ioe2N1cnNvciwgYXJndW1lbnQsIHZhbHVlRnVuY0JhZyA9IHt9LCBpdGVyYXRpb24gPSAwfSkge1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uID0gaXRlcmF0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlRnVuY0JhZyA9IHZhbHVlRnVuY0JhZztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgfVxuXG4gICAgb25FbmQoKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yLmNsb3NlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0LCBDYWxsUiwgQ29udGludWVSLCBKdW1wUiwgUmV2ZXJzZVIgfSBmcm9tIFwiQC9jb3JlL2FzdC9hY3Rpb25SZXN1bHRcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcbmltcG9ydCB7IEZ1bmN0aW9uc0JhZyB9IGZyb20gXCJAL2NvcmUvZnVuY3Rpb25zQmFnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUFyZ3Mge1xuICAgIHJlc3VsdDogQWN0aW9uUmVzdWx0O1xuICAgIGJhZzogRnVuY3Rpb25zQmFnO1xuICAgIHB1c2g6IFB1c2hDYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYWxzKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZnVuYy5hY3Rpb25zLCAoKSA9PiAoe30pKTtcbn1cblxudHlwZSBQdXNoQ2IgPSAoc3RlcHBlcjogQ29udGV4dFN0ZXBwZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0U3RlcHBlcihjb250ZXh0OiBDb250ZXh0LCBmdW5jOiBGdW5jdGlvbikge1xuICAgIHJldHVybiBuZXcgRm9yd2FyZENvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgZnVuY3Rpb246IGZ1bmMsXG4gICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKGZ1bmMpLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY29udGV4dCxcbiAgICB9KTtcbn1cblxuaW50ZXJmYWNlIFNjb3BlIHtcbiAgICBjb250ZXh0OiBDb250ZXh0O1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgZnVuY3Rpb246IEZ1bmN0aW9uO1xuICAgIGxvY2Fsczogb2JqZWN0W107XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250ZXh0U3RlcHBlciB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiBTY29wZTtcblxuICAgIGNvbnN0cnVjdG9yIChzY29wZTogU2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGV4ZWMoKTogQWN0aW9uUmVzdWx0O1xuICAgIGFic3RyYWN0IG1vdmUoYXJnczogTW92ZUFyZ3MpOiBib29sZWFuO1xuICAgIG9uRW5kKCkgeyB0aGlzLnNjb3BlLmNvbnRleHQub25FbmQoKTsgfTtcblxuICAgIGdldCBpbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5zY29wZS5pbmRleDsgfVxuICAgIGdldCBzdGF2ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zY29wZS5mdW5jdGlvbi5uYW1lOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIgZXh0ZW5kcyBDb250ZXh0U3RlcHBlciB7XG4gICAgZXhlYygpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYywgbG9jYWxzIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmdW5jLmFjdGlvbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2Fsc1tpbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uIHx8ICFsb2NhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWModGhpcy5zY29wZS5jb250ZXh0LCBsb2NhbCk7XG4gICAgfVxuXG4gICAgbW92ZSh7cmVzdWx0LCBiYWcsIHB1c2h9OiBNb3ZlQXJncyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ29udGludWVSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgSnVtcFIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gcmVzdWx0LmNvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENhbGxSKSB7XG4gICAgICAgICAgICBjb25zdCBmdW5jID0gYmFnLmZpbmRGdW5jdGlvbihyZXN1bHQuc3RhdmUsIHJlc3VsdC5uZXdDb250ZXh0Lml0ZXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoZnVuYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHB1c2gobmV3IEZvcndhcmRDb250ZXh0U3RlcHBlcih7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHJlc3VsdC5uZXdDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246IGZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKGZ1bmMpLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXZlcnNlUikge1xuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLnNjb3BlLmluZGV4IC0gcmVzdWx0LmNvdW50KTtcbiAgICAgICAgICAgIHB1c2gobmV3IFJldmVyc2VDb250ZXh0U3RlcHBlcih7XG4gICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5zY29wZS5jb250ZXh0LFxuICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLnNjb3BlLmluZGV4IC0gMSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbjogdGhpcy5zY29wZS5mdW5jdGlvbixcbiAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2Fscyh0aGlzLnNjb3BlLmZ1bmN0aW9uKSxcbiAgICAgICAgICAgIH0sIGVuZEluZGV4KSk7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIldyb25nIEFjdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5kZXhJblJhbmdlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzSW5kZXhJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jLnNpemU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZUNvbnRleHRTdGVwcGVyIGV4dGVuZHMgQ29udGV4dFN0ZXBwZXIge1xuICAgICNlbmRJbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IFNjb3BlLCBlbmRJbmRleDogbnVtYmVyID0gMCkge1xuICAgICAgICBzdXBlcihzY29wZSk7XG4gICAgICAgIHRoaXMuI2VuZEluZGV4ID0gZW5kSW5kZXg7XG4gICAgfVxuXG4gICAgZXhlYygpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYywgbG9jYWxzIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmdW5jLmFjdGlvbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2Fsc1tpbmRleF07XG4gICAgICAgIHJldHVybiBhY3Rpb24uZXhlY1JldmVyc2UodGhpcy5zY29wZS5jb250ZXh0LCBsb2NhbCk7XG4gICAgfVxuXG4gICAgbW92ZSh7cmVzdWx0LCBiYWcsIHB1c2h9OiBNb3ZlQXJncyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ29udGludWVSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgSnVtcFIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gcmVzdWx0LmNvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENhbGxSKSB7XG4gICAgICAgICAgICBjb25zdCBmdW5jID0gYmFnLmZpbmRGdW5jdGlvbihyZXN1bHQuc3RhdmUsIHJlc3VsdC5uZXdDb250ZXh0Lml0ZXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoZnVuYyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHB1c2gobmV3IFJldmVyc2VDb250ZXh0U3RlcHBlcih7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHJlc3VsdC5uZXdDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogZnVuYy5zaXplIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246IGZ1bmMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKGZ1bmMpLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXZlcnNlUikge1xuICAgICAgICAgICAgLy8vIFRPRE8gLSBpbXBsZW1lbnQgUmV2ZXJzZS1SZXZlcnNlXG4gICAgICAgICAgICAvLy8gT3IgbWF5YmUgb25lIHN0ZXBwZXIgd2l0aCBtb3ZlIGN1cnNvciBvbmx5IHdpdGggc3BlY2lmaWVkIGRpcmVjdGlvbj9cbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gcmVzdWx0LmNvdW50ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiV3JvbmcgQWN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbmRleEluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gdGhpcy4jZW5kSW5kZXggJiYgaW5kZXggPCBmdW5jLnNpemU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRmlndXJlLCBMaW5lLCBSZWN0YW5nbGUsIFRyaWFuZ2xlLCBDaXJjbGUsIEFyYywgU3R5bGUgfSBmcm9tIFwiQC9jb3JlL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IFBvbHlnb24sIExpbmVDdXJ2ZSwgQXJjQ3VydmUgfSBmcm9tIFwiQC9jb3JlL2ZpZ3VyZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3gge1xuICAgIG1pbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBtYXg6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BzUGFyYW1zIHtcbiAgICBjb2xvcjogbnVtYmVyLFxuICAgIHN0cm9rZTogbnVtYmVyLFxuICAgIGlzRmlsbGVkOiBib29sZWFuLFxufVxuXG5leHBvcnQgZW51bSBTaGFwZSB7IFNxdWFyZSwgVHJpYW5nbGUsIENpcmNsZSB9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJQ3Vyc29yIHtcbiAgICBkaXN0YW5jZU11bHRpcGxlcjogbnVtYmVyO1xuICAgIHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJlZmxlY3Rpb246IG51bWJlcjtcbiAgICBmaWd1cmVzOiBGaWd1cmVbXTtcbiAgICBib3g6IEJveDtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgfVxuXG4gICAgZm9yd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IGFyZyA9IGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlclxuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdICs9IHggKiBhcmc7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geSAqIGFyZztcbiAgICB9XG5cbiAgICBiYWNrd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9yd2FyZCgtZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHJpZ2h0KGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIG9yaWVudGF0aW9uIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgYXJnID0gZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdIC09IHkgKiBhcmc7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geCAqIGFyZztcbiAgICB9XG5cbiAgICBsZWZ0KGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yaWdodCgtZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgICAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgICAgICBjb25zdCBuQW5nbGUgPSBhbmdsZSAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9ICh0aGlzLmFuZ2xlICsgbkFuZ2xlKSAlIDEuMDtcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IG5BbmdsZSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25bMF0gPSB4ICogY29zIC0geSAqIHNpbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblsxXSA9IHggKiBzaW4gKyB5ICogY29zO1xuICAgIH1cblxuICAgIGZsaXAoKSB7XG4gICAgICAgIHRoaXMucmVmbGVjdGlvbiAqPSAtMS4wO1xuICAgIH1cblxuICAgIGNsb3NlKCkgeyB9XG5cbiAgICBwcm90ZWN0ZWQgZXh0ZW5kQm94KFt4LCB5XTogbnVtYmVyW10sIHNpemUgPSAwKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblswXSwgeCAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMF0sIHggKyBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzFdLCB5IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFsxXSwgeSArIHNpemUpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNhbGNTdHlsZVBhcmFtcyhvcHM6IE9wc1BhcmFtcyk6IFN0eWxlO1xuICAgIGFic3RyYWN0IGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3U2hhcGUoc2hhcGU6IFNoYXBlLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKTogdm9pZDtcbiAgICBhYnN0cmFjdCBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEN1cnNvciBleHRlbmRzIElDdXJzb3Ige1xuICAgIHN0cm9rZVNpemU6IG51bWJlcjtcbiAgICBmaXJzdENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgc2Vjb25kQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgc3Ryb2tlU2l6ZSA9IDEsXG4gICAgICAgIGRpc3RhbmNlTXVsdGlwbGVyID0gMTAwLFxuICAgICAgICBmaXJzdENvbG9yID0gXCIjMDAwMDAwXCIsXG4gICAgICAgIHNlY29uZENvbG9yID0gXCIjREMxNDNDXCIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlU2l6ZSA9IHN0cm9rZVNpemU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBkaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uID0gMS4wO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWzAuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDAuMDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFsxLjAsIDAuMF07XG4gICAgICAgIHRoaXMuYm94ID0ge1xuICAgICAgICAgICAgbWluOiBbMC4wLCAwLjBdLFxuICAgICAgICAgICAgbWF4OiBbMC4wLCAwLjBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpcnN0Q29sb3IgPSB0aGlzLmhleFRvQ29sb3IoZmlyc3RDb2xvcik7XG4gICAgICAgIHRoaXMuc2Vjb25kQ29sb3IgPSB0aGlzLmhleFRvQ29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGV4VG9Db2xvcihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDEsIDEgKyAyKSwgMTYpO1xuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygzLCAzICsgMiksIDE2KTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNSwgNSArIDIpLCAxNik7XG4gICAgICAgIHJldHVybiBbciwgZywgYl07XG4gICAgfVxuXG4gICAgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGUge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY2FsY0NvbG9yKG9wcy5jb2xvcik7XG4gICAgICAgIGlmIChvcHMuaXNGaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGZpbGw6IGNvbG9yIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZmlsbDogXCJub25lXCIsIGNvbG9yOiBjb2xvciwgc3Ryb2tlOiBvcHMuc3Ryb2tlICogdGhpcy5zdHJva2VTaXplIH07XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBbbmV3X3gsIG5ld195XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jYWxjU3R5bGVQYXJhbXMoeyBzdHJva2UsIGNvbG9yLCBpc0ZpbGxlZDogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBMaW5lKFtvbGRfeCwgb2xkX3ldLCBbbmV3X3gsIG5ld195XSwgc3R5bGUpKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3godGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZHJhd0FyY0xpbmUocmF0aW86IG51bWJlciwgc2l6ZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBhcmNTaXplID0gc2l6ZSAvIDIgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICBjb25zdCBhcmNSYWRpdXMgPSBhcmNTaXplIC8gTWF0aC5zaW4ocmF0aW8gKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICAvLyByb3RhdGUgYnkgOTDCsFxuICAgICAgICBjb25zdCBuZHggPSAtZHkgKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIGNvbnN0IG5keSA9IGR4ICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBwb2ludCA9IFt4ICsgYXJjUmFkaXVzICogbmR4LCB5ICsgYXJjUmFkaXVzICogbmR5XTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyh7IHN0cm9rZSwgY29sb3IsIGlzRmlsbGVkOiBmYWxzZSB9KTtcbiAgICAgICAgY29uc3Qgb3BzID0ge1xuICAgICAgICAgICAgc2hpZnQ6IHRoaXMuYW5nbGUgLSAwLjI1LFxuICAgICAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcywgc3R5bGUpKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHBvaW50LCBNYXRoLmFicyhhcmNSYWRpdXMpKTtcbiAgICB9XG5cbiAgICBkcmF3U2hhcGUoc2hhcGU6IFNoYXBlLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChbeCwgeV0sIE1hdGguYWJzKHNpemUpKTtcblxuICAgICAgICBzd2l0Y2ggKHNoYXBlKSB7XG4gICAgICAgICAgICBjYXNlIFNoYXBlLkNpcmNsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2hhcGUuU3F1YXJlOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBSZWN0YW5nbGUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU2hhcGUuVHJpYW5nbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFRyaWFuZ2xlKFt4LCB5XSwgW2R4LCBkeV0sIHNpemUsIHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNhID0gdGhpcy5maXJzdENvbG9yO1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuc2Vjb25kQ29sb3I7XG4gICAgICAgIGNvbnN0IGFSYXRpbyA9IE1hdGguYWJzKGNvbG9yIC0gMC41KSAqIDI7XG4gICAgICAgIGNvbnN0IGJSYXRpbyA9IDEuMCAtIGFSYXRpbztcbiAgICAgICAgY29uc3QgciA9IE1hdGgudHJ1bmMoY2FbMF0gKiBhUmF0aW8gKyBjYlswXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLnRydW5jKGNhWzFdICogYVJhdGlvICsgY2JbMV0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBiID0gTWF0aC50cnVuYyhjYVsyXSAqIGFSYXRpbyArIGNiWzJdICogYlJhdGlvKTtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsb3NlQ3Vyc29yIGV4dGVuZHMgSUN1cnNvciB7XG4gICAgI2N1cnNvcjogSUN1cnNvcjtcbiAgICAjcG9seWdvbjogUG9seWdvbjtcblxuICAgIGNvbnN0cnVjdG9yKGN1cnNvcjogSUN1cnNvciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jY3Vyc29yID0gY3Vyc29yO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWy4uLmN1cnNvci5wb3NpdGlvbl07XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBbLi4uY3Vyc29yLm9yaWVudGF0aW9uXTtcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uID0gY3Vyc29yLnJlZmxlY3Rpb247XG4gICAgICAgIHRoaXMuYW5nbGUgPSBjdXJzb3IuYW5nbGU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBjdXJzb3IuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy4jY3Vyc29yLmJveDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLiNwb2x5Z29uID0gbmV3IFBvbHlnb24oWy4uLmN1cnNvci5wb3NpdGlvbl0sIFtdLCBzdHlsZSk7XG4gICAgfVxuXG4gICAgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBkZWx0YTogW251bWJlciwgbnVtYmVyXSA9IFtuZXdfeCAtIG9sZF94LCBuZXdfeSAtIG9sZF95XTtcbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgTGluZUN1cnZlKGRlbHRhKSk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gdGhpcy5hbmdsZSAtIDAuMjU7XG5cbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgQXJjQ3VydmUoYXJjUmFkaXVzLCByYXRpbywgc2hpZnQpKTtcblxuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keSAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgY29uc3QgbmR5ID0gZHggKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkKHNpemUpO1xuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgIH1cblxuICAgIGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgdGhpcy4jY3Vyc29yLmRyYXdTaGFwZShzaGFwZSwgc2l6ZSwgb3BzKTtcbiAgICB9XG5cbiAgICBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3IuY2FsY0NvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlndXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBDdXJzb3IgaXMgY2xvc2VkLiBHbyBhd2F5LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKHRoaXMuI3BvbHlnb24pO1xuICAgICAgICB0aGlzLiNjdXJzb3IuZmlndXJlcyA9IHRoaXMuI2N1cnNvci5maWd1cmVzLmNvbmNhdCh0aGlzLmZpZ3VyZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBwYXJzZUxpbmVGdW5jLCBwYXJzZUxpbmVWYWx1ZSwgcGFyc2VSYXdUb2tlbnMgfSBmcm9tIFwiQC9jb3JlL3BhcnNlclwiO1xuaW1wb3J0IHsgRHluYW1pY0FyZ3NLZXksIERZTkFNSUNfQVJHUyB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiLi9zdGVwXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiLi9zdGF2ZVwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vYXN0L2Z1bmN0aW9uXCI7XG5cbmNvbnN0IE1BWF9TVEVQUyA9IDEwMDAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWMoc3RhY2s6IFN0YWNrU3RlcCkge1xuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgTUFYX1NURVBTOyBzdGVwKyspIHtcbiAgICAgICAgaWYgKHN0YWNrLnN0ZXAoKS5oYWx0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJNYXhpbXVtIHN0ZXBzIHJlYWNoZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXhlYyh2YWx1ZUFyZ3VtZW50OiBudW1iZXIsIG1heEl0ZXJhdGlvbjogbnVtYmVyLCBzdGF2ZXM6IFN0YXZlW10sIGN1cnNvcjogQ3Vyc29yKTogU3RhY2tTdGVwIHtcbiAgICBjb25zdCBhcmd1bWVudDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVBcmd1bWVudCxcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLjAsXG4gICAgICAgIGNvbG9yOiAwLjAsXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgYmFnID0gbmV3IEZ1bmN0aW9uc0JhZyhtYXhJdGVyYXRpb24sIGluaXRGdW5jQmFnKHN0YXZlcykpO1xuICAgIGNvbnN0IHZhbHVlRnVuY0JhZyA9IGluaXRWYWx1ZUJhZyhzdGF2ZXMpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IGFyZ3VtZW50LCBjdXJzb3IsIHZhbHVlRnVuY0JhZyB9KTtcbiAgICByZXR1cm4gbmV3IFN0YWNrU3RlcChjb250ZXh0LCBiYWcpO1xufVxuXG5mdW5jdGlvbiBpbml0RnVuY0JhZyhzdGF2ZXM6IFN0YXZlW10pOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4ge1xuICAgIGNvbnN0IGJhZzogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG4gICAgc3RhdmVzIFxuICAgICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gIURZTkFNSUNfQVJHUy5pbmNsdWRlcyhuYW1lIGFzIER5bmFtaWNBcmdzS2V5KSlcbiAgICAgICAgLmZvckVhY2goKHsgbmFtZSwgc3VmZml4ID0gbnVsbCwgdG9rZW5zOiByYXdUb2tlbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSB0b1JlYWxuYW1lKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW3JlYWxOYW1lXSA9IHBhcnNlTGluZUZ1bmMobmFtZSwgdG9rZW5zKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGJhZztcbn1cblxuZnVuY3Rpb24gaW5pdFZhbHVlQmFnKHN0YXZlczogU3RhdmVbXSk6IFJlY29yZDxzdHJpbmcsIFZhbHVlTm9kZVtdPiB7XG4gICAgY29uc3QgYmFnOiBSZWNvcmQ8c3RyaW5nLCBWYWx1ZU5vZGVbXT4gPSB7fTtcbiAgICBzdGF2ZXMgXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBEWU5BTUlDX0FSR1MuaW5jbHVkZXMobmFtZSBhcyBEeW5hbWljQXJnc0tleSkpXG4gICAgICAgIC5mb3JFYWNoKCh7IG5hbWUsIHN1ZmZpeCA9IG51bGwsIHRva2VuczogcmF3VG9rZW5zIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gdG9SZWFsbmFtZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zKTtcbiAgICAgICAgICAgIGJhZ1tyZWFsTmFtZV0gPSBwYXJzZUxpbmVWYWx1ZSh0b2tlbnMpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gYmFnO1xufVxuXG5mdW5jdGlvbiB0b1JlYWxuYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgcmV0dXJuIChzdWZmaXggPT09IG51bGwgfHwgc3VmZml4Lmxlbmd0aCA9PSAwKSA/IG5hbWUgOiBgJHtuYW1lfTo6JHtzdWZmaXh9YDtcbn0iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3R5bGUge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZT86IG51bWJlcjtcbiAgICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHlsZTogTGluZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHN0eWxlOiBMaW5lU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXJ2ZSB7fVxuXG5leHBvcnQgY2xhc3MgTGluZUN1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIGRlbHRhOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoZGVsdGE6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyY0N1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCByYXRpbzogbnVtYmVyLCBzaGlmdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGltcGxlbWVudHMgRmlndXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBjdXJ2ZXM6IEN1cnZlW107XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIGN1cnZlczogQ3VydmVbXSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLmNsb3NlID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywgeyBzaGlmdCA9IDAuMCwgY2xvc2UgPSBmYWxzZSB9ID0ge30sIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmlhbmdsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uc0JhZyB7XG4gICAgbWF4SXRlcmF0aW9uOiBudW1iZXI7XG4gICAgYmFnOiB7W25hbWU6IHN0cmluZ106IEZ1bmN0aW9ufTtcblxuICAgIGNvbnN0cnVjdG9yKG1heEl0ZXJhdGlvbiwgYmFnKSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmJhZyA9IGJhZztcbiAgICB9XG5cbiAgICBmaW5kRnVuY3Rpb24obmFtZTogc3RyaW5nLCBpdGVyYXRpb246IG51bWJlciA9IDApOiBGdW5jdGlvbiB8IG51bGwge1xuICAgICAgICBjb25zdCB7IG1heEl0ZXJhdGlvbiB9ID0gdGhpcztcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhyb3dGdW5jID0gdGhpcy4jdGhyb3dGdW5jLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gPj0gbWF4SXRlcmF0aW9uIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RU5EYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkVWRU5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpID0gaXRlcmF0aW9uOyBpID4gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpHRSR7aX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3dGdW5jKG5hbWUpO1xuICAgICAgICB9IGNhdGNoKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmIChmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgICN0aHJvd0Z1bmMobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmJhZ1tuYW1lXTtcbiAgICAgICAgaWYgKGZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ0FMTFMgPSBbXCJGXCIsIFwiR1wiLCBcIkhcIl0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgRFlOQU1JQ19BUkdTID0gW1wiRElBTU9ORFwiLCBcIklOVl9UUklBTkdMRVwiXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBTVEFWRVMgPSBbLi4uQ0FMTFMsIC4uLkRZTkFNSUNfQVJHU10gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgU1VGRklYRVMgPSBbXCJFTkRcIiwgXCJFVkVOXCIsIFwiT0REXCIsIFwiR0UzXCIsIFwiR0U1XCIsIFwiR0U3XCJdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFRPS0VOUyA9IFtcbiAgICAvLyBDb3VudHNcbiAgICBcIkNPVU5UXzFcIixcbiAgICBcIkNPVU5UXzJcIixcbiAgICBcIkNPVU5UXzNcIixcbiAgICBcIkNPVU5UXzVcIixcbiAgICBcIkNPVU5UXzdcIixcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgXCJDT1VOVF9NSU5VU1wiLFxuICAgIFwiQ09VTlRfR09MRFwiLFxuICAgIFwiQ09VTlRfU0lMVkVSXCIsXG4gICAgXCJDT1VOVF9CUk9OWkVcIixcbiAgICBcIkNPVU5UX1BMQVNUSUNcIixcbiAgICAvLyBGcmFjdGlvbnNcbiAgICBcIkZSQUNUXzFfMlwiLFxuICAgIFwiRlJBQ1RfMV8zXCIsXG4gICAgXCJGUkFDVF8yXzNcIixcbiAgICBcIkZSQUNUXzFfNFwiLFxuICAgIFwiRlJBQ1RfM180XCIsXG4gICAgXCJGUkFDVF8xXzVcIixcbiAgICBcIkZSQUNUXzJfNVwiLFxuICAgIFwiRlJBQ1RfM181XCIsXG4gICAgXCJGUkFDVF80XzVcIixcbiAgICAvLyBBbmdsZXNcbiAgICBcIkFOR0xFXzI3MFwiLFxuICAgIFwiQU5HTEVfMTgwXCIsXG4gICAgXCJBTkdMRV85MFwiLFxuICAgIFwiQU5HTEVfNjBcIixcbiAgICBcIkFOR0xFXzQ1XCIsXG4gICAgXCJBTkdMRV8zMFwiLFxuICAgIFwiQU5HTEVfMTVcIixcbiAgICBcIkFOR0xFXzEwXCIsXG4gICAgLy8gQ29sb3JzXG4gICAgXCJDT0xPUl9NQVhcIixcbiAgICBcIkNPTE9SX01JTlwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8yXCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzRcIixcbiAgICBcIkNPTE9SX1NISUZUXzFfNVwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8xMFwiLFxuICAgIFwiQ09MT1JfRklMTFwiLFxuICAgIFwiQ09MT1JfRU1QVFlcIixcbiAgICAvLyBTdHJva2VcbiAgICBcIlNUUk9LRV9TT0xJRFwiLFxuICAgIFwiU1RST0tFX0RBU0hFRFwiLFxuICAgIFwiU1RST0tFX0RPVFRFRFwiLFxuICAgIFwiU1RST0tFX1RISUNLX0FERFwiLFxuICAgIFwiU1RST0tFX1RISUNLX1NVQlwiLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBcIk9QX01VTFRcIixcbiAgICBcIk9QX0FERFwiLFxuICAgIFwiT1BfU1VCXCIsXG4gICAgLy8gQXJndW1lbnRzXG4gICAgXCJBUkdVTUVOVFwiLFxuICAgIFwiQ0FMTF9ESUFNT05EXCIsXG4gICAgXCJDQUxMX0lOVl9UUklBTkdMRVwiLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIFwiQ0FMTF9GXCIsXG4gICAgXCJDQUxMX0dcIixcbiAgICBcIkNBTExfSFwiLFxuICAgIC8vIENsb3NlIENhbGxlcnNcbiAgICBcIkNMT1NFX0NBTExfRlwiLFxuICAgIFwiQ0xPU0VfQ0FMTF9HXCIsXG4gICAgXCJDTE9TRV9DQUxMX0hcIixcbiAgICAvLyBTaGFwZXNcbiAgICBcIkRSQVdfQ0lSQ0xFXCIsXG4gICAgXCJEUkFXX1NRVUFSRVwiLFxuICAgIFwiRFJBV19UUklBTkdMRVwiLFxuICAgIC8vIExpbmVcbiAgICBcIkRSQVdfTElORVwiLFxuICAgIC8vIEFyY1xuICAgIFwiRFJBV19BUkNMSU5FX1JfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfNVwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfNVwiLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBcIk1PVkVfRk9SV0FSRFwiLFxuICAgIFwiTU9WRV9CQUNLV0FSRFwiLFxuICAgIFwiTU9WRV9MRUZUXCIsXG4gICAgXCJNT1ZFX1JJR0hUXCIsXG4gICAgLy8gQ3Vyc29yIHJvdGF0aW9uc1xuICAgIFwiUk9UQVRFX0xFRlRcIixcbiAgICBcIlJPVEFURV9SSUdIVFwiLFxuICAgIC8vIEN1cnNvciBGbGlwXG4gICAgXCJGTElQX1ZcIixcbiAgICBcIkZMSVBfSFwiLFxuICAgIC8vIFJlcGV0ZXRpdmUgYWN0aW9uc1xuICAgIFwiUkVWRVJTRVwiLFxuICAgIFwiUkVQTEFZXCIsXG4gICAgXCJSRVBMQVlfMlwiLFxuICAgIFwiUkVQTEFZXzNcIixcbiAgICBcIlJFUExBWV80XCIsXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEeW5hbWljQXJnc0tleSA9IHR5cGVvZiBEWU5BTUlDX0FSR1NbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIER5bmFtaWNBcmdzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgQ2FsbHNLZXkgPSB0eXBlb2YgQ0FMTFNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIENhbGxzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3VmZml4ZXNLZXkgPSB0eXBlb2YgU1VGRklYRVNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFN1ZmZpeGVzTWFwPFR5cGU+ID0gUmVjb3JkPFN1ZmZpeGVzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3RhdmVzS2V5ID0gdHlwZW9mIFNUQVZFU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgU3RhdmVzTWFwPFR5cGU+ID0gUmVjb3JkPFN0YXZlc0tleSwgVHlwZT47XG5cbmV4cG9ydCB0eXBlIFRva2Vuc0tleSA9IHR5cGVvZiBUT0tFTlNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFRva2Vuc01hcDxUeXBlPiA9IFJlY29yZDxUb2tlbnNLZXksIFR5cGU+OyIsImltcG9ydCB7IFRva2VuLCBUT0tFTlMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIkAvY29yZS90b2tlbnNcIjtcbmltcG9ydCB7IEFjdGlvbk5vZGUsIFZhbHVlTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vuczogc3RyaW5nW10pOiBUb2tlbltdIHtcbiAgICByZXR1cm4gcmF3VG9rZW5zLm1hcChyYXcgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IFRPS0VOU1tyYXddO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBgUGFyc2luZyBlcnJvcjogJHtyYXd9IGlzIG5vdCB1bmRlZmluZWQgYXMgdG9rZW4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSk7XG59XG5cbmNsYXNzIEFjdGlvblRtcCB7XG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcbiAgICBwcml2YXRlIHZhbHVlczogVmFsdWVOb2RlW107XG4gICAgcHJpdmF0ZSB0b2tlbjogVG9rZW4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25Ub2tlbih0b2tlbjogVG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldEFjdGlvblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIGdldFZhbHVlc0xlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzQWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbiAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnRva2VuLmZhY3RvcnkgYXMgQWN0aW9uQ2I7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZhY3RvcnkodGhpcy52YWx1ZXMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbnNlcnRWYWx1ZSh2YWx1ZTogVmFsdWVOb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lRnVuYyhuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgY29uc3QgdG1wID0gbmV3IEFjdGlvblRtcCgpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRtcC5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICBwYXJzZVZhbHVlKHRva2VuLCB0bXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VBY3Rpb24odG9rZW4sIHRtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRtcC5wdXNoQWN0aW9uKCk7IC8vIHB1c2ggbGFzdCB0b2tlbi5cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24obmFtZSwgdG1wLmdldEFjdGlvbnMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnM6IFRva2VuW10pOiBWYWx1ZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gYWN0aW9ucyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5pc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gZHluYW1pYyBlbGVtZW50cyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWN0aW9uKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAoIXRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaXMgbm90IGFuIGFjdGlvblwiO1xuICAgIH1cbiAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICAgICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICB0bXAuaW5zZXJ0VmFsdWUoZmFjdG9yeSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQ29udGV4dFN0ZXBwZXIsIGNyZWF0ZUluaXRTdGVwcGVyIH0gZnJvbSBcIi4vY29udGV4dFN0ZXBwZXJcIjtcbmltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IEZ1bmN0aW9uc0JhZyB9IGZyb20gXCIuL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBoYWx0OiBib29sZWFuLFxuICAgIHN0YXZlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrU3RlcCB7XG4gICAgI3N0YWNrOiBDb250ZXh0U3RlcHBlcltdO1xuICAgICNiYWc6IEZ1bmN0aW9uc0JhZztcbiAgICByZWFkb25seSBjdXJzb3I6IElDdXJzb3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDb250ZXh0LCBiYWc6IEZ1bmN0aW9uc0JhZykge1xuICAgICAgICBjb25zdCBmdW5jID0gYmFnLmZpbmRGdW5jdGlvbihcIlNUQVJUXCIpIHx8IGJhZy5maW5kRnVuY3Rpb24oXCJGXCIpO1xuICAgICAgICBpZiAoZnVuYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgXCJTdGFydCBmdW5jdGlvbiBub3QgZm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzdGFjayA9IFtjcmVhdGVJbml0U3RlcHBlcihjb250ZXh0LCBmdW5jKV07XG4gICAgICAgIHRoaXMuI2JhZyA9IGJhZztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBjb250ZXh0LmN1cnNvcjtcbiAgICB9XG5cbiAgICBzdGVwKCk6IFN0YXRlIHtcbiAgICAgICAgaWYgKHRoaXMuI3N0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhbHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdmU6ICc/JyxcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RWxlbWVudDogQ29udGV4dFN0ZXBwZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc3RlcHBlciA9IHRoaXMuZ2V0VG9wRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGluZGV4LCBzdGF2ZSB9ID0gc3RlcHBlcjtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RlcHBlci5leGVjKCk7XG4gICAgICAgIGNvbnN0IHN0aWxsQ29udGludWUgPSBzdGVwcGVyLm1vdmUoe1xuICAgICAgICAgICAgYmFnOiB0aGlzLiNiYWcsXG4gICAgICAgICAgICBwdXNoOiAoZWxlbWVudDogQ29udGV4dFN0ZXBwZXIpID0+IHsgbmV3RWxlbWVudCA9IGVsZW1lbnQ7IH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3RpbGxDb250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dFN0ZXBwZXIgPSB0aGlzLiNzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRleHRTdGVwcGVyLm9uRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4jc3RhY2sucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYWx0OiB0aGlzLiNzdGFjay5sZW5ndGggPT0gMCxcbiAgICAgICAgICAgIHN0YXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUb3BFbGVtZW50KCk6IENvbnRleHRTdGVwcGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YWNrW3RoaXMuI3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEZpZ3VyZSwgQ2lyY2xlLCBBcmMsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIExpbmUsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uLCBMaW5lQ3VydmUsIEFyY0N1cnZlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yOiBJQ3Vyc29yKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGxldCBbbWluX3gsIG1pbl95XSA9IGN1cnNvci5ib3gubWluO1xuICAgIGxldCBbbWF4X3gsIG1heF95XSA9IGN1cnNvci5ib3gubWF4O1xuICAgIG1pbl94IC09IDEwO1xuICAgIG1pbl95IC09IDEwO1xuICAgIG1heF94ICs9IDEwO1xuICAgIG1heF95ICs9IDEwO1xuICAgIGNvbnN0IHdpZHRoID0gbWF4X3ggLSBtaW5feDtcbiAgICBjb25zdCBoZWlnaHQgPSBtYXhfeSAtIG1pbl95O1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAke21pbl94fSAke21pbl95fSAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBjdXJzb3IuZmlndXJlcy5mb3JFYWNoKGZpZ3VyZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0b1N2Zyhkb2N1bWVudCwgZmlndXJlKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuc3R5bGUuY29sb3IgfHwgXCJibGFja1wiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZmlndXJlLnN0eWxlLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gZmlndXJlLnN0eWxlLnN0cm9rZSA6IDEpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFBvbHlnb24pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBsZXQgcGF0aCA9IGBNICR7eH0gJHt5fWA7XG5cbiAgICAgICAgZmlndXJlLmN1cnZlcy5mb3JFYWNoKGN1cnZlID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIExpbmVDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkeCwgZHldID0gY3VydmUuZGVsdGE7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBgIGwgJHtkeH0gJHtkeX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIEFyY0N1cnZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGN1cnZlLnJhZGl1cztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gY3VydmUuc2hpZnQgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChjdXJ2ZS5zaGlmdCArIGN1cnZlLnJhdGlvKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gciAqIChNYXRoLmNvcyhlbmRBbmdsZSkgLSBNYXRoLmNvcyhzdGFydEFuZ2xlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSByICogKE1hdGguc2luKGVuZEFuZ2xlKSAtIE1hdGguc2luKHN0YXJ0QW5nbGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGN1cnZlLnJhdGlvKSA8PSAwLjUgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWcyID0gY3VydmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAgYSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2R4fSAke2R5fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYCBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFcgPSBmaWd1cmUud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBIID0gZmlndXJlLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCAtIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgVHJpYW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgUyA9IGZpZ3VyZS5zaXplO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggKyBTICogZHh9ICR7eSArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5ICsgU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5IC0gU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEJhc2ljQXR0cnMoc3R5bGU6IFN0eWxlLCBub2RlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHN0eWxlLmZpbGwgfHwgXCJibGFja1wiKTtcbiAgICBpZiAoc3R5bGUuc3Ryb2tlICE9PSB1bmRlZmluZWQgJiYgc3R5bGUuc3Ryb2tlID4gMCkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHlsZS5jb2xvciB8fCBcIm5vbmVcIik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGAke3N0eWxlLnN0cm9rZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiQC9jb3JlL2FzdC9iYXNlXCI7XG5pbXBvcnQgeyBNdWx0aXBsZXIsIEFuZ2xlLCBBcmd1bWVudCwgRHluYW1pY0FyZ3VtZW50IH0gZnJvbSBcIkAvY29yZS9hc3QvdmFsdWVzXCI7XG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBUb2tlbnNNYXAgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiQC9jb3JlL2FzdC9jb2xvcnNcIjtcbmltcG9ydCAqIGFzIHN0cm9rZXMgZnJvbSBcIkAvY29yZS9hc3Qvc3Ryb2tlc1wiO1xuaW1wb3J0ICogYXMgb3BzIGZyb20gXCJAL2NvcmUvYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICBpc0FjdGlvbjogYm9vbGVhbjtcbiAgICBpc0R5bmFtaWM6IGJvb2xlYW47XG4gICAgZmFjdG9yeTogQWN0aW9uQ2IgfCBWYWx1ZUNiO1xuXG4gICAgY29uc3RydWN0b3IoeyBpc0FjdGlvbiwgaXNEeW5hbWljLCBmYWN0b3J5IH0pIHtcbiAgICAgICAgdGhpcy5pc0FjdGlvbiA9IGlzQWN0aW9uO1xuICAgICAgICB0aGlzLmlzRHluYW1pYyA9IGlzRHluYW1pYztcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKGZhY3Rvcnk6IFZhbHVlQ2IsIGlzRHluYW1pYyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiBmYWxzZSwgaXNEeW5hbWljLCBmYWN0b3J5IH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oZmFjdG9yeTogQWN0aW9uQ2IpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IHRydWUsIGlzRHluYW1pYzogdHJ1ZSwgZmFjdG9yeSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOUzogVG9rZW5zTWFwPFRva2VuPiA9IHtcbiAgICAvLyAqKiogVmFsdWVzICoqKlxuICAgIC8vIENvdW50c1xuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIENPVU5UXzc6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNykpLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UX0dPTEQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMS42MTgwMzM5ODkpKSxcbiAgICBDT1VOVF9TSUxWRVI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMi40MTQyMTM1NjIpKSxcbiAgICBDT1VOVF9CUk9OWkU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMy4zMDI3NzU2MzgpKSxcbiAgICBDT1VOVF9QTEFTVElDOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEuMzI0NzE3OTU3MikpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIEZSQUNUXzJfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gNSkpLFxuICAgIEZSQUNUXzNfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNSkpLFxuICAgIEZSQUNUXzRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig0IC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIEFOR0xFXzI3MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDI3MCkpLFxuICAgIEFOR0xFXzE4MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE4MCkpLFxuICAgIEFOR0xFXzkwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoOTApKSxcbiAgICBBTkdMRV82MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDYwKSksXG4gICAgQU5HTEVfNDU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg0NSkpLFxuICAgIEFOR0xFXzMwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzApKSxcbiAgICBBTkdMRV8xNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE1KSksXG4gICAgQU5HTEVfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxMCkpLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NYXhDb2xvcigpKSxcbiAgICBDT0xPUl9NSU46IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWluQ29sb3IoKSksXG4gICAgQ09MT1JfU0hJRlRfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDIpKSxcbiAgICBDT0xPUl9TSElGVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNCkpLFxuICAgIENPTE9SX1NISUZUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA1KSksXG4gICAgQ09MT1JfU0hJRlRfMV8xMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAxMCkpLFxuICAgIENPTE9SX0ZJTEw6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuRmlsbENvbG9yKCkpLFxuICAgIENPTE9SX0VNUFRZOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLkVtcHR5Q29sb3IoKSksXG4gICAgLy8gU3Ryb2tlXG4gICAgU1RST0tFX1NPTElEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcInNvbGlkXCIpKSxcbiAgICBTVFJPS0VfREFTSEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRhc2hlZFwiKSksXG4gICAgU1RST0tFX0RPVFRFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkb3R0ZWRcIikpLFxuICAgIFNUUk9LRV9USElDS19BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKCswLjI1KSksXG4gICAgU1RST0tFX1RISUNLX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoLTAuMjUpKSxcbiAgICAvLyBPcGVyYXRpb25zXG4gICAgT1BfTVVMVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5NdWx0T3AoKSksXG4gICAgT1BfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLkFkZE9wKCkpLFxuICAgIE9QX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5TdWJPcCgpKSxcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFyZ3VtZW50KCkpLFxuICAgIENBTExfRElBTU9ORDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIkRJQU1PTkRcIiksIHRydWUpLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiSU5WX1RSSUFOR0xFXCIpLCB0cnVlKSxcblxuICAgIC8vICoqKiBBY3Rpb25zICoqKlxuICAgIC8vIENhbGxlcnNcbiAgICBDQUxMX0Y6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJHXCIsIHYpKSxcbiAgICBDQUxMX0g6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJIXCIsIHYpKSxcbiAgICAvLyBDbG9zZSBDYWxsZXJzXG4gICAgQ0xPU0VfQ0FMTF9GOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DbG9zZUNhbGwoXCJGXCIsIHYpKSxcbiAgICBDTE9TRV9DQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNsb3NlQ2FsbChcIkdcIiwgdikpLFxuICAgIENMT1NFX0NBTExfSDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2xvc2VDYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gU2hhcGVzXG4gICAgRFJBV19DSVJDTEU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuQ2lyY2xlKSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuU3F1YXJlKSksXG4gICAgRFJBV19UUklBTkdMRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0ZpZ3VyZSh2LCBTaGFwZS5UcmlhbmdsZSkpLFxuICAgIC8vIExpbmVcbiAgICBEUkFXX0xJTkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdMaW5lKHYpKSxcbiAgICAvLyBBcmNcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCszIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDUsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0zIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDUsIHYpKSxcbiAgICAvLyBDdXJzb3IgdHJhbnNsYXRpb25zXG4gICAgTU9WRV9GT1JXQVJEOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlRm9yd2FyZCh2KSksXG4gICAgTU9WRV9CQUNLV0FSRDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUJhY2t3YXJkKHYpKSxcbiAgICBNT1ZFX0xFRlQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVMZWZ0KHYpKSxcbiAgICBNT1ZFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlUmlnaHQodikpLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVSaWdodCh2KSksXG4gICAgLy8gQ3Vyc29yIGZsaXBcbiAgICBGTElQX1Y6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkZsaXBWZXJ0aWNhbGx5KHYpKSxcbiAgICBGTElQX0g6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkZsaXBIb3Jpem9udGFsbHkodikpLFxuXG4gICAgLy8gUmVwZXRldGl2ZSBhY3Rpb25zXG4gICAgUkVWRVJTRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUmV2ZXJzZSh2KSksXG4gICAgUkVQTEFZOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodikpLFxuICAgIFJFUExBWV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodiwgMikpLFxuICAgIFJFUExBWV8zOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodiwgMykpLFxuICAgIFJFUExBWV80OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodiwgNCkpLFxufTtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX0lDT05fVVJMID0gYCR7cHJvY2Vzcy5lbnYuQVNTRVRfUEFUSH1pY29ucy9gO1xuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuaW1wb3J0IHsgQ29kZVZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY29kZVwiO1xuaW1wb3J0IHsgRG9jQmFyVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9kb2NCYXJcIjtcbmltcG9ydCB7IFRpdGxlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy90aXRsZVwiO1xuaW1wb3J0IHsgQ29tbWVudFZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY29tbWVudFwiO1xuaW1wb3J0IHsgSW1hZ2VWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2ltYWdlXCI7XG5pbXBvcnQgeyBTdGF2ZVZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3Mvc3RhdmVcIjtcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBleGVjLCBzZXR1cEV4ZWMgfSBmcm9tIFwiQC9jb3JlL2V4ZWNcIjtcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHV0QW5pbVBhcmFtcyB7XG4gICAgc3RhdmVzOiBzdHJpbmdbXTtcbiAgICBpdGVyYXRpb25zOiBudW1iZXIsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICB0b2tlbnM6IHN0cmluZ1tdLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbm9kZUlkOiBzdHJpbmcsXG59XG5cblxuZXhwb3J0IGNsYXNzIERvY3NDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBpbWFnZVZpZXc6IEltYWdlVmlldztcbiAgICBwcml2YXRlIGNvZGVWaWV3OiBDb2RlVmlldztcbiAgICBwcml2YXRlIGRvY0JhclZpZXc6IERvY0JhclZpZXc7XG4gICAgcHJpdmF0ZSBjb21tZW50VmlldzogQ29tbWVudFZpZXc7XG4gICAgcHJpdmF0ZSB0aXRsZVZpZXc6IFRpdGxlVmlldztcblxuICAgIHByaXZhdGUgaXRlcmF0aW9uczogbnVtYmVyO1xuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIHRva2Vuczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IFR1dEFuaW1QYXJhbXMsIGljb25Vcmw6IHN0cmluZykge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXMubm9kZUlkKSk7XG4gICAgICAgIHRoaXMuaW5pdFJlbmRlcihwYXJhbXMpO1xuXG4gICAgICAgIHRoaXMuaXRlcmF0aW9ucyA9IHBhcmFtcy5pdGVyYXRpb25zO1xuICAgICAgICB0aGlzLnRva2VucyA9IHBhcmFtcy50b2tlbnM7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAtMTtcblxuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VWaWV3ID0gbmV3IEltYWdlVmlldyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1pbWFnZVwiKSk7XG4gICAgICAgIHRoaXMudGl0bGVWaWV3ID0gbmV3IFRpdGxlVmlldyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC10aXRsZVwiKSwgcGFyYW1zLnRpdGxlKTtcbiAgICAgICAgdGhpcy5jb21tZW50VmlldyA9IG5ldyBDb21tZW50Vmlldyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1jb21tZW50XCIpKTtcbiAgICAgICAgdGhpcy5kb2NCYXJWaWV3ID0gbmV3IERvY0JhclZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3QtYmFyXCIpLFxuICAgICAgICAgICAgbmV4dDogdGhpcy5uZXh0LmJpbmQodGhpcyksXG4gICAgICAgICAgICBwcmV2OiB0aGlzLnByZXYuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29kZVZpZXcgPSBuZXcgQ29kZVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3Qtc3RhdmVzXCIpLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb25Ecm9wOiBudWxsLFxuICAgICAgICAgICAgICAgIG9uTW92ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBvbkRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIGNhbkRyYWc6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFJlbmRlcihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1hbmltYXRpb25cIik7XG4gICAgICAgIGlmIChwYXJhbXMudGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgdGl0bGVOb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC10aXRsZVwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbWFnZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWltYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGltYWdlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc3RhdmVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIHN0YXZlc05vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXN0YXZlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzdGF2ZXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtY29tbWVudFwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb21tZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYmFyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBiYXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1iYXJcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHN0YXZlQmFnOiBTdGF2ZVtdID0gcGFyYW1zLnN0YXZlcy5tYXAoc3RhdmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeCA9IFwiXCJdID0gc3RhdmUuc3BsaXQoXCI6OlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIHN1ZmZpeCwgdG9rZW5zOiBbXSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2RlVmlldy5yZW5kZXIoc3RhdmVCYWcpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcucmVuZGVyKHRoaXMucG9zaXRpb24sIHRoaXMudG9rZW5zLmxlbmd0aCwgdGhpcy5pdGVyYXRpb25zKTtcbiAgICAgICAgdGhpcy50aXRsZVZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY29tbWVudFZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgdGhpcy5kb2NCYXJWaWV3LnVwZGF0ZSh0aGlzLnBvc2l0aW9uLCB0aGlzLnRva2Vucy5sZW5ndGgsIHRoaXMuaXRlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgaXRlcmF0ZVRvUG9zaXRpb24ocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLnN0YXJ0OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMubmV4dEV4ZWN1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID49IHRoaXMudG9rZW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICAgIHRoaXMubmV4dEV4ZWN1dGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcmV2KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uIC09IDE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2NyYXBlQW5kUnVuKCkge1xuICAgICAgICBjb25zdCBjdXJzb3JDZmcgPSB7fTtcbiAgICAgICAgY29uc3QgYXJndW1lbnQgPSAxLjA7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVWaWV3LnNjcmFwZUNvZGUoKTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihjdXJzb3JDZmcpO1xuICAgICAgICBjb25zdCBzdGFjayA9IHNldHVwRXhlYyhhcmd1bWVudCwgdGhpcy5pdGVyYXRpb25zLCBjb2RlLCBjdXJzb3IpO1xuICAgICAgICBleGVjKHN0YWNrKTtcbiAgICAgICAgdGhpcy5pbWFnZVZpZXcucmVuZGVyKGN1cnNvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0RXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21tYW5kcygpLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZFswXSAhPSBcIiFcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtzdGF2ZSwgdG9rZW5dID0gY29tbWFuZC5zcGxpdChcIkBcIiwgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9rZW5PbkJhY2soc3RhdmUsIHRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmQuc3Vic3RyaW5nKDEpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0lOQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0RFQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk5PUFwiOiBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKGAke2NvbW1hbmR9IG5vdCBmb3VuZGApOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2RXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21tYW5kcygpLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZFswXSAhPSBcIiFcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsaW5lXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdFRva2VuKGxpbmUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC5zdWJzdHJpbmcoMSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfSU5DXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfREVDXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbW1hbmRzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFtyYXdDb21tYW5kc10gPSBjb21tYW5kV2l0aENvbW1lbnQuc3BsaXQoXCIjXCIsIDEpO1xuICAgICAgICByZXR1cm4gcmF3Q29tbWFuZHMuc3BsaXQoXCIsXCIpLm1hcChyYXdDb21tYW5kID0+IHJhd0NvbW1hbmQudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRXaXRoQ29tbWVudCA9IHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb25dO1xuICAgICAgICBjb25zdCBbLCByYXdDb21tZW50XSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMik7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSByYXdDb21tZW50ID8gcmF3Q29tbWVudC50cmltKCkgOiBcIlwiO1xuICAgICAgICB0aGlzLmNvbW1lbnRWaWV3LnJlbmRlcihjb21tZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hUb2tlbk9uQmFjayhmdWxsU3RhdmVOYW1lOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhdmUgPSB0aGlzLmZpbmRTdGF2ZShmdWxsU3RhdmVOYW1lKTtcbiAgICAgICAgc3RhdmUucHVzaFRva2VuT25CYWNrKHRva2VuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxhc3RUb2tlbihmdWxsU3RhdmVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3RhdmUgPSB0aGlzLmZpbmRTdGF2ZShmdWxsU3RhdmVOYW1lKTtcbiAgICAgICAgc3RhdmUucmVtb3ZlVG9rZW5PbkJhY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRTdGF2ZShmdWxsU3RhdmVOYW1lOiBzdHJpbmcpOiBTdGF2ZVZpZXcge1xuICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4XSA9IHRoaXMuc3BsaXRGdWxsU3RhdmVOYW1lKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgIGlmIChzdGF2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBgc3RhdmUgbm90IGZvdW5kOiAke2Z1bGxTdGF2ZU5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhdmU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGxpdEZ1bGxTdGF2ZU5hbWUoZnVsbFN0YXZlTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gZnVsbFN0YXZlTmFtZS5zcGxpdChcIjo6XCIsIDIpO1xuICAgICAgICByZXR1cm4gW25hbWUsIHN1ZmZpeCB8fCBcIlwiXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNLZXkgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgeyBUb2tlbkluZm8gfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOUzogVG9rZW5JbmZvW10gPSBbXG4gICAge25hbWU6ICdBUkdVTUVOVCcsIGxhYmVsOiAnQXJndW1lbnQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NBTExfRElBTU9ORCcsIGxhYmVsOiAnRGlhbW9uZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ0FMTF9JTlZfVFJJQU5HTEUnLCBsYWJlbDogJ0ludmVyc2UgdHJpYW5nbGUnLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnQ0FMTF9GJywgbGFiZWw6ICdGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0FMTF9HJywgbGFiZWw6ICdHIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0FMTF9IJywgbGFiZWw6ICdIIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0YnLCBsYWJlbDogJ0YgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0cnLCBsYWJlbDogJ0cgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0gnLCBsYWJlbDogJ0ggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0RSQVdfTElORScsIGxhYmVsOiAnTGluZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19DSVJDTEUnLCBsYWJlbDogJ0NpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfU1FVQVJFJywgbGFiZWw6ICdTcXVhcmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdUcmlhbmdsZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfM180JywgbGFiZWw6ICdBcmMgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8yXzMnLCBsYWJlbDogJ0FyYyAyLzMgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnQXJjIDEvMiAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzQnLCBsYWJlbDogJ0FyYyAxLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfNScsIGxhYmVsOiAnQXJjIDEvNSAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfM180JywgbGFiZWw6ICdBcmMgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzJfMycsIGxhYmVsOiAnQXJjIDIvMyAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzInLCBsYWJlbDogJ0FyYyAxLzIgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnQXJjIDEvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCBsYWJlbDogJ0FyYyAxLzUgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdNT1ZFX0ZPUldBUkQnLCBsYWJlbDogJ01vdmUgZm9yd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfQkFDS1dBUkQnLCBsYWJlbDogJ01vdmUgYmFja3dhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdNT1ZFX0xFRlQnLCBsYWJlbDogJ01vdmUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfUklHSFQnLCBsYWJlbDogJ01vdmUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfTEVGVCcsIGxhYmVsOiAnUm90YXRlIGxlZnQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfUklHSFQnLCBsYWJlbDogJ1JvdGF0ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0ZMSVBfVicsIGxhYmVsOiAnRmxpcCBWZXJ0aWNhbGx5JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRkxJUF9IJywgbGFiZWw6ICdGbGlwIEhvcml6b250YWxseScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnUkVWRVJTRScsIGxhYmVsOiAnUmV2ZXJzZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5IHRoZSBsYXN0IGFjdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV8yJywgbGFiZWw6ICdSZXBsYXkgdGhlIHR3byBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfMycsIGxhYmVsOiAnUmVwbGF5IHRoZSB0aHJlZSBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfNCcsIGxhYmVsOiAnUmVwbGF5IHRoZSBmb3VyIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnQ09VTlRfMScsIGxhYmVsOiAnT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF8yJywgbGFiZWw6ICdUd28nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF81JywgbGFiZWw6ICdGaXZlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF83JywgbGFiZWw6ICdTZXZlbicsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDT1VOVF9NSU5VUycsIGxhYmVsOiAnTWludXMgT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9HT0xEJywgbGFiZWw6ICdHb2xkZW4gUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX1NJTFZFUicsIGxhYmVsOiAnU2lsdmVyIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9CUk9OWkUnLCBsYWJlbDogJ0Jyb256ZSBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfUExBU1RJQycsIGxhYmVsOiAnUGxhc3RpYyBOdW1iZXInLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnRlJBQ1RfMV8yJywgbGFiZWw6ICdIYWxmJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzMnLCBsYWJlbDogJ09uZSBUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl8zJywgbGFiZWw6ICdUd28gVGhpcmRzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzQnLCBsYWJlbDogJ09uZSBRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8zXzQnLCBsYWJlbDogJ1RocmVlIHF1YXJ0ZXJzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzUnLCBsYWJlbDogJ09uZSBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl81JywgbGFiZWw6ICdUd28gRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzNfNScsIGxhYmVsOiAnVGhyZWUgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzRfNScsIGxhYmVsOiAnRm91ciBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xODAnLCBsYWJlbDogJzE4MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV85MCcsIGxhYmVsOiAnOTDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzQ1JywgbGFiZWw6ICc0NcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8zMCcsIGxhYmVsOiAnMzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzEwJywgbGFiZWw6ICcxMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ09QX01VTFQnLCBsYWJlbDogJ011bHRpcGxlIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9BREQnLCBsYWJlbDogJ0FkZGl0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9NQVgnLCBsYWJlbDogJ1NlY29uZCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfTUlOJywgbGFiZWw6ICdGaXJzdCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRklMTCcsIGxhYmVsOiAnRmlsbGVkIEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRU1QVFknLCBsYWJlbDogJ1RyYW5zcGFyZW50IEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzUnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfQUREJywgbGFiZWw6ICdUaGljayBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ1NUUk9LRV9USElDS19TVUInLCBsYWJlbDogJ1RoaW4gc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgTkFNRV9UT19UT0tFTiA9IG5ldyBNYXA8c3RyaW5nLCBUb2tlbkluZm8+KFxuICAgIFRPS0VOUy5tYXAodG9rZW4gPT4gW3Rva2VuLm5hbWUsIHRva2VuXSlcbik7XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IFN0YXZlVmlldyB9IGZyb20gJy4vc3RhdmUnO1xuaW1wb3J0IHsgQ2FsbGJhY2tzIH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICdAL3dlYi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RhdmVWaWV3czogU3RhdmVWaWV3W107XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IENhbGxiYWNrcztcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBjYWxsYmFja3MsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMfToge1xuICAgICAgICBub2RlOiBIVE1MRWxlbWVudCxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3MsXG4gICAgICAgIGljb25Vcmw/OiBzdHJpbmcsXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzID0gW107XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHJlbmRlcihzdGF2ZXM6IFN0YXZlW10pIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MgPSBzdGF2ZXMubWFwKHRoaXMuY3JlYXRlU3RhdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZmluZFN0YXZlKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBTdGF2ZVZpZXcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF2ZVZpZXdzLmZpbmQodmlldyA9PiB2aWV3LmNoZWNrTmFtZShuYW1lLCBzdWZmaXgpKTtcbiAgICB9XG5cbiAgICBhZGRTdGF2ZShwYXJhbXM6IHsgbmFtZTogc3RyaW5nOyBzdWZmaXg6IHN0cmluZzsgdG9rZW5zOiBzdHJpbmdbXSB9KSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmNyZWF0ZVN0YXZlKHtcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtcy5uYW1lLFxuICAgICAgICAgICAgc3VmZml4OiBwYXJhbXMuc3VmZml4LFxuICAgICAgICAgICAgdG9rZW5zOiBwYXJhbXMudG9rZW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzLnB1c2godmlldyk7XG4gICAgfVxuXG4gICAgc2NyYXBlQ29kZSgpOiBTdGF2ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdmVWaWV3cy5maWx0ZXIodmlldyA9PiB2aWV3LmNvdWxkQmVTY3JhcGVkKCkpLm1hcCh2aWV3ID0+IHZpZXcuc2NyYXBlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTdGF2ZSh7IG5hbWUsIHN1ZmZpeCwgdG9rZW5zIH0pOiBTdGF2ZVZpZXcge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBTdGF2ZVZpZXcoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCB8fCBcIlwiLFxuICAgICAgICAgICAgaWNvblVybDogdGhpcy5pY29uVXJsLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB0aGlzLmNhbGxiYWNrcyxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1jb21tZW50XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcihjb21tZW50OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lclRleHQgPSBjb21tZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NCYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBuZXh0OiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgcHJldjogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBuZXh0LCBwcmV2fToge25vZGU6IEhUTUxFbGVtZW50LCBuZXh0OiAoKSA9PiB2b2lkLCBwcmV2OiAoKSA9PiB2b2lkfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1iYXJcIik7XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBvc2l0aW9uOiBudW1iZXIsIHRva2VuU2l6ZTogbnVtYmVyLCBpdGVyYXRpb25zOiBudW1iZXIpIHtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCLCqyBQUkVWXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcInByZXZcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucHJldik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJORVhUIMK7XCI7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lclRleHQgPSBcIkl0ZXJhdGlvbnM6XCI7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpdE5vZGUudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICBpdE5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXROb2RlLm5hbWUgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUocG9zaXRpb24sIHRva2VuU2l6ZSwgaXRlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBvc2l0aW9uOiBudW1iZXIsIHRva2VuU2l6ZTogbnVtYmVyLCBpdGVyYXRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJuZXh0XCIpLmRpc2FibGVkID0gcG9zaXRpb24gPj0gdG9rZW5TaXplIC0gMTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJwcmV2XCIpLmRpc2FibGVkID0gcG9zaXRpb24gPD0gMDtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJpdGVyYXRpb25zXCIpLnZhbHVlID0gaXRlcmF0aW9ucy50b0ZpeGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kSW5wdXQobmFtZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiQC9jb3JlL3N2Z1wiO1xuaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcgZXh0ZW5kcyBWaWV3IHtcblxuICAgIHJlbmRlcihjdXJzb3I6IElDdXJzb3IsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCJub25lXCI7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG5pbXBvcnQgeyBUb2tlbnNTdGF2ZVZpZXcgfSBmcm9tICcuL3N0YXZlVG9rZW4nO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFN0YXZlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgdG9rZW5WaWV3OiBUb2tlbnNTdGF2ZVZpZXdcbiAgICBwcml2YXRlIHRva2Vuc05vZGU6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgICAgIHRoaXMudG9rZW5zTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3ID0gbmV3IFRva2Vuc1N0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLnRva2Vuc05vZGUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VmZml4LFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInN0YXZlXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmFtZSh0aGlzLm5hbWUsIHRoaXMuc3VmZml4KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRva2Vuc05vZGUpO1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBjaGVja05hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID09PSBuYW1lICYmIHRoaXMuc3VmZml4ID09PSBzdWZmaXg7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBzaG93T3JIaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5BZnRlcih0b2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlcGxhY2VUb2tlbihuZXdUb2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlcGxhY2VUb2tlbihuZXdUb2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlVG9rZW4oaW5kZXgpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbk9uQmFjayh0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnB1c2hUb2tlbk9uQmFjayh0b2tlbik7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuT25CYWNrKCk7XG4gICAgfVxuXG4gICAgY291bGRCZVNjcmFwZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZSA9IHRoaXMubm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICByZXR1cm4gIWlzSGlkZTtcbiAgICB9XG5cbiAgICBzY3JhcGUoKTogU3RhdmUge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VuVmlldy5zY3JhcGVUb2tlbnMoKTtcbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBzdWZmaXgsIHRva2Vuc307XG4gICAgfVxuXG4gICAgYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LmFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWcsIGFjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZywgYWN0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4Pzogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgY29uc3QgcmVhbG5hbWUgPSBzdWZmaXggPyBgJHtuYW1lfV8ke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS9DQUxMXyR7cmVhbG5hbWV9LnN2ZylgO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNWaWV3IH0gZnJvbSAnLi90b2tlbic7XG5cbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5zU3RhdmVWaWV3IGV4dGVuZHMgVG9rZW5zVmlldyB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW5zXCIpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoMCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3Rpb25JbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zLmZvckVhY2goKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbkluZGV4ID0gdGhpcy5wdXNoVG9rZW5Ob2RlT25CYWNrKHRoaXMubm9kZSwgdG9rZW4sIGluZGV4LCBhY3Rpb25JbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDAsIHRva2VuKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZXBsYWNlVG9rZW4obmV3VG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vuc1tpbmRleF0gPSBuZXdUb2tlbjtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuT25CYWNrKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnBvcCgpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuTm9kZU9uQmFjayh0b2tlbnNOb2RlOiBIVE1MRWxlbWVudCwgdG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlciwgYWN0aW9uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFNwYW4gPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleCArIHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBlbmRDaGlsZCA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBub2RlOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4oY29udGFpbmVyLCBzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b2tlbk5vZGUgPSB0aGlzLmNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuLCBpbmRleCwgYWN0aW9uSW5kZXgpO1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0b2tlbnNOb2RlLmxhc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy8gcHJvYmFibHkgaXQncyBhIHNwYW4sIGZpbmQgcHJldmlvdXMgbm9kZVxuICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0Tm9kZS5wcmV2aW91c1NpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0dyb3VwID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXRva2VuLWdyb3VwXCIpO1xuICAgICAgICBjb25zdCBpc0FjdGlvbiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5kYXRhc2V0Py50eXBlID09PSBcImFjdGlvblwiO1xuXG4gICAgICAgIGlmICghbGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXggKyAoaXNBY3Rpb24odG9rZW5Ob2RlKSA/IDEgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FjdGlvbih0b2tlbk5vZGUpKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0dyb3VwKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChsYXN0Tm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNBY3Rpb24obGFzdE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBncm91cCB3aXRoIGFjdGlvbiBhbmQgdmFsdWUuXG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSB0aGlzLmNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUpO1xuICAgICAgICAgICAgdG9rZW5zTm9kZS5pbnNlcnRCZWZvcmUoZ3JvdXBOb2RlLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBncm91cE5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGxhc3ROb2RlLmRhdGFzZXQuYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIGxhc3ROb2RlLCAwKTtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGdyb3VwTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4odG9rZW5zTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFjdGlvbkluZGV4OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZVRva2VuTm9kZSh0b2tlbik7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIGlmIChub2RlLmRhdGFzZXQ/LnR5cGUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGAke2FjdGlvbkluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBkcmFnTm9kZSA9IHN1cGVyLmNyZWF0ZURyYWdOb2RlKG5vZGUpO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LmluZGV4ID0gbm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0Lm5hbWUgPSBub2RlLmRhdGFzZXQubmFtZTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5zdWZmaXggPSBub2RlLmRhdGFzZXQuc3VmZml4O1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tZ3JvdXBcIl0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjcmFwZVRva2VucygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tc3BhblwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVUb2tlblJlbW92ZVNwYW5Ob2RlKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRva2VuLXNwYW5cIiwgXCJyZW1vdmVcIik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn07XG5cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBUaXRsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IE5BTUVfVE9fVE9LRU4gfSBmcm9tIFwiQC93ZWIvdG9rZW5zXCI7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYWxsYmFja3Mge1xuICAgIG9uRHJvcDogKGQ6IEhUTUxFbGVtZW50LCBvOiBIVE1MRWxlbWVudCkgPT4gdm9pZCB8IG51bGw7XG4gICAgb25Nb3ZlOiAoZDogSFRNTEVsZW1lbnQsIG86IEhUTUxFbGVtZW50IHwgbnVsbCwgbjogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkIHwgbnVsbDtcbiAgICBvbkRyYWdUaW1lb3V0OiAobm9kZTogSFRNTEVsZW1lbnQpID0+IGJvb2xlYW47XG4gICAgY2FuRHJhZzogKCkgPT4gYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcmVhZG9ubHkgaWNvblVybDogc3RyaW5nO1xuICAgICNjYWxsYmFja3M6IENhbGxiYWNrc1xuXG4gICAgY29uc3RydWN0b3IoeyBub2RlLCBjYWxsYmFja3MsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMIH06IHtcbiAgICAgICAgbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzXG4gICAgICAgIGljb25Vcmw/OiBzdHJpbmcsXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIGdldCBpc0RyYWdnYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhbGxiYWNrcy5vbkRyb3AgIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbmRUb2tlbk5vZGVCeUFjdGlvbkluZGV4KGFjdGlvbkluZGV4KS5jbGFzc0xpc3QuYWRkKGZsYWcpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleCkuY2xhc3NMaXN0LnJlbW92ZShmbGFnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRUb2tlbk5vZGVCeUFjdGlvbkluZGV4KGFjdGlvbkluZGV4OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYCpbZGF0YS1hY3Rpb24taW5kZXg9JyR7YWN0aW9uSW5kZXh9J11gO1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVUb2tlbk5vZGUodG9rZW46IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgdG9rZW5JbmZvID0gTkFNRV9UT19UT0tFTi5nZXQodG9rZW4pO1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnZnJhY3QtdG9rZW4nXSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuZGF0YXNldC50b2tlbiA9IHRva2VuO1xuICAgICAgICBub2RlLmRhdGFzZXQudHlwZSA9IHRva2VuSW5mbyA/IHRva2VuSW5mby50eXBlIDogXCJ1bmtub3duXCI7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaWNvblVybH0vJHt0b2tlbn0uc3ZnKWA7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFRva2VuRXZlbnRzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnTm9kZShub2RlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZHJhZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5hZGQoJ2ZyYWN0LXRva2VuJywgJ21vdmUnKTtcbiAgICAgICAgZHJhZ05vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XG4gICAgICAgIGRyYWdOb2RlLmRhdGFzZXQudG9rZW4gPSBub2RlLmRhdGFzZXQudG9rZW47XG4gICAgICAgIHJldHVybiBkcmFnTm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFRva2VuRXZlbnRzKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ01vdXNlU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZHJhZ1RvdWNoU3RhcnQsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLiNjYWxsYmFja3M7XG4gICAgICAgIGNvbnN0IGNhbkRyYWcgPSAoKSA9PiBjYWxsYmFja3MuY2FuRHJhZyAmJiAhY2FsbGJhY2tzLmNhbkRyYWcoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVDb250ZXh0ID0gKGNvb3Jkc0NiKSA9PlxuICAgICAgICAgICAgbmV3IERyYWdDb250ZXh0KFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuY3JlYXRlRHJhZ05vZGUobm9kZSksIFxuICAgICAgICAgICAgICAgICgpID0+IGNhbGxiYWNrcy5vbkRyYWdUaW1lb3V0ICE9PSBudWxsID8gY2FsbGJhY2tzLm9uRHJhZ1RpbWVvdXQobm9kZSkgOiBmYWxzZSwgXG4gICAgICAgICAgICAgICAgY29vcmRzQ2IsIFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ01vdXNlU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5idXR0b24gIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoY2FuRHJhZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZ2V0TW91c2VDb29yZHMpO1xuICAgICAgICAgICAgY29udGV4dC5pbml0KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBjb250ZXh0LmNyZWF0ZURyYWdNb3ZlKCksXG4gICAgICAgICAgICAgICAgbW91c2V1cDogY29udGV4dC5jcmVhdGVEcmFnU3RvcCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZXh0LnVwZGF0ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmFnVG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5jYW5EcmFnICYmICFjYWxsYmFja3MuY2FuRHJhZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZ2V0VG91Y2hDb29yZHMpO1xuICAgICAgICAgICAgY29udGV4dC5pbml0KGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgdG91Y2htb3ZlOiBjb250ZXh0LmNyZWF0ZURyYWdNb3ZlKCksXG4gICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGNvbnRleHQuY3JlYXRlRHJhZ1N0b3AoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGV4dC51cGRhdGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TW91c2VDb29yZHMoZXZlbnQ6IE1vdXNlRXZlbnQpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRUb3VjaENvb3JkcyhldmVudDogVG91Y2hFdmVudCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICAgICAgcmV0dXJuIFtldmVudC50b3VjaGVzWzBdLmNsaWVudFgsIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY2xhc3MgRHJhZ0NvbnRleHQ8RXZlbnRUeXBlIGV4dGVuZHMgRXZlbnQ+IHtcbiAgICBwcml2YXRlIGRyYWdOb2RlOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgcHJpdmF0ZSBvdmVyTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHByaXZhdGUgaW5pdGlhbENvb3JkczogW251bWJlciwgbnVtYmVyXSB8IG51bGw7XG4gICAgcHJpdmF0ZSBldmVudENhbGxiYWNrczogeyBbazogc3RyaW5nXTogKGU6IEV2ZW50VHlwZSkgPT4gdm9pZCB9O1xuICAgIHByaXZhdGUgX2dldENvb3JkczogKGV2ZW50OiBFdmVudFR5cGUpID0+IFtudW1iZXIsIG51bWJlcl07XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IENhbGxiYWNrcztcbiAgICBwcml2YXRlIGNyZWF0ZURyYWdOb2RlOiAoKSA9PiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBjcmVhdGVEcmFnTm9kZTogKCkgPT4gSFRNTEVsZW1lbnQsXG4gICAgICAgIG9uVGltZW91dDogKCkgPT4gYm9vbGVhbixcbiAgICAgICAgZ2V0Q29vcmRzOiAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4gW251bWJlciwgbnVtYmVyXSxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3MsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRHJhZ05vZGUgPSBjcmVhdGVEcmFnTm9kZTtcbiAgICAgICAgdGhpcy5kcmFnTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMub3Zlck5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLmV2ZW50Q2FsbGJhY2tzID0ge307XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgICAgICB0aGlzLl9nZXRDb29yZHMgPSBnZXRDb29yZHM7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYob25UaW1lb3V0KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgY3JlYXRlRHJhZ01vdmUoKSB7XG4gICAgICAgIHJldHVybiAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRHJhZ1N0b3AoKSB7XG4gICAgICAgIHJldHVybiAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Zlck5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbkRyb3AodGhpcy5kcmFnTm9kZSwgdGhpcy5vdmVyTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdChldmVudDogRXZlbnRUeXBlLCBldmVudENhbGxiYWNrczogeyBbazogc3RyaW5nXTogKGU6IEV2ZW50VHlwZSkgPT4gdm9pZCB9KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbENvb3JkcyA9IHRoaXMuX2dldENvb3JkcyhldmVudCk7XG4gICAgICAgIHRoaXMuZXZlbnRDYWxsYmFja3MgPSBldmVudENhbGxiYWNrc1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50Q2FsbGJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2JdKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ05vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ05vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzLm9uTW92ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Nb3ZlKHRoaXMuZHJhZ05vZGUsIHRoaXMub3Zlck5vZGUsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRDYWxsYmFja3MpLmZvckVhY2goKFtuYW1lLCBjYl0pID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgY2IsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShldmVudDogRXZlbnRUeXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdOb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5jb21wdXRlckRpc3RhbmNlVG9Jbml0aWFsQ29vcmRzKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDUpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdOb2RlID0gdGhpcy5jcmVhdGVEcmFnTm9kZSgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnTm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdldENvb3JkcyhldmVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29vcmRzKHgsIHkpO1xuICAgICAgICBjb25zdCBvbGRPdmVyTm9kZSA9IHRoaXMub3Zlck5vZGU7XG4gICAgICAgIGNvbnN0IG5ld092ZXJOb2RlID0gdGhpcy5maW5kT3Zlck5vZGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2tzLm9uTW92ZSAmJiAhT2JqZWN0LmlzKG9sZE92ZXJOb2RlLCBuZXdPdmVyTm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTW92ZSh0aGlzLmRyYWdOb2RlLCBvbGRPdmVyTm9kZSwgbmV3T3Zlck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3Zlck5vZGUgPSBuZXdPdmVyTm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVyRGlzdGFuY2VUb0luaXRpYWxDb29yZHMoZXZlbnQ6IEV2ZW50VHlwZSk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuX2dldENvb3JkcyhldmVudCk7XG4gICAgICAgIGNvbnN0IGR4ID0gdGhpcy5pbml0aWFsQ29vcmRzWzBdIC0geDtcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLmluaXRpYWxDb29yZHNbMV0gLSB5O1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNvb3Jkcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRyYWdOb2RlLnN0eWxlLmxlZnQgPSBgJHt4LnRvRml4ZWQoKX1weGA7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUuc3R5bGUudG9wID0gYCR7eS50b0ZpeGVkKCl9cHhgO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZE92ZXJOb2RlKCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGNvZGVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb2RlXCIpO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmdldFdhbGtlckZpbHRlcigpO1xuICAgICAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGNvZGVOb2RlLCBOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCwgZmlsdGVyKTtcbiAgICAgICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHdhbGtlci5jdXJyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdhbGtlckZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgVkFMSURfQ0xBU1NFUyA9IFsnZnJhY3QtdG9rZW4tc3BhbicsICdmcmFjdC1zdGF2ZXMnLCAndG9rZW5zJ107XG4gICAgICAgIGNvbnN0IGRyYWdSZWN0ID0gdGhpcy5kcmFnTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjZXB0Tm9kZShub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdSZWN0LnJpZ2h0IDwgcmVjdC5sZWZ0XG4gICAgICAgICAgICAgICAgICAgIHx8IGRyYWdSZWN0LmxlZnQgPiByZWN0LnJpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHx8IGRyYWdSZWN0LmJvdHRvbSA8IHJlY3QudG9wXG4gICAgICAgICAgICAgICAgICAgIHx8IGRyYWdSZWN0LnRvcCA+IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1Q7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFWQUxJRF9DTEFTU0VTLnNvbWUoYyA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX1NLSVA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvb3JkcyhldmVudDogRXZlbnRUeXBlKTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuX2dldENvb3JkcyhldmVudCk7XG4gICAgICAgIGNvbnN0IG54ID0geCAtIHRoaXMuZHJhZ05vZGUuY2xpZW50V2lkdGggLyAyO1xuICAgICAgICBjb25zdCBueSA9IHkgLSB0aGlzLmRyYWdOb2RlLmNsaWVudEhlaWdodDtcbiAgICAgICAgcmV0dXJuIFtueCwgbnldO1xuICAgIH1cblxufTsiLCJleHBvcnQgY2xhc3MgVmlldzxIVE1MVHlwZSBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+IHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTFR5cGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MVHlwZSkge1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1lbnQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4ocGFyYW1zOiB7XG4gICAgICAgIG5hbWU6IEs7XG4gICAgICAgIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgICAgICAgdGV4dD86IHN0cmluZztcbiAgICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgICAgb25jbGljaz86IChNb3VzZUV2ZW50KSA9PiB2b2lkO1xuICAgICAgICByZWFkb25seT86IGJvb2xlYW47XG4gICAgfSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy5uYW1lKTtcbiAgICAgICAgaWYgKHBhcmFtcy5jbGFzc2VzKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoLi4ucGFyYW1zLmNsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5vbmNsaWNrKSB7XG4gICAgICAgICAgICBub2RlLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLm9uY2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnR5cGUgPSBwYXJhbXMudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgICAgICAgICAgIG5vZGUudmFsdWUgPSBwYXJhbXMudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlYWRPbmx5ID0gcGFyYW1zLnJlYWRvbmx5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBwYXJhbXMudGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IERvY3NDb250cm9sbGVyLCBUdXRBbmltUGFyYW1zIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvZG9jc1wiO1xuXG5pbXBvcnQgXCJAL3N0eWxlL2RvY3Muc2Nzc1wiO1xuXG5jb25zdCBBTklNQVRJT05TX1BBUkFNUzogVHV0QW5pbVBhcmFtc1tdID0gW107XG5jb25zdCBDVVJSRU5UX0hSRUYgPSAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFuaW1hdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5wdXNoKHBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGdldEljb25zVXJscygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRpcm5hbWVIcmVmID0gQ1VSUkVOVF9IUkVGLnN1YnN0cmluZygwLCBDVVJSRU5UX0hSRUYubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgIHJldHVybiBgJHtkaXJuYW1lSHJlZn0uLi9faW1hZ2VzYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsKGljb25Vcmw6IHN0cmluZykge1xuICAgIEFOSU1BVElPTlNfUEFSQU1TLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBEb2NzQ29udHJvbGxlcihwYXJhbXMsIGljb25VcmwpO1xuICAgICAgICBjb250cm9sbGVyLnJlbmRlcihwYXJhbXMpO1xuICAgICAgICBjb250cm9sbGVyLml0ZXJhdGVUb1Bvc2l0aW9uKHBhcmFtcyk7XG4gICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGljb25VcmwgPSBnZXRJY29uc1VybHMoKTtcbiAgICByZW5kZXJBbGwoaWNvblVybCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==