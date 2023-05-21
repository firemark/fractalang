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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes showtime {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n.fract-tokens {\n  user-select: none;\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  transition: background-color 300ms;\n  cursor: pointer;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n.fract-token.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token.move {\n  background-color: rgba(204, 204, 204, 0.4666666667);\n  position: absolute;\n  animation-name: showtime;\n  animation-duration: 500ms;\n}\n.fract-token.move.valid-drop {\n  background-color: rgba(123, 218, 123, 0.4666666667);\n  border-color: #228B22;\n}\n.fract-token.move.valid-drop::before {\n  content: \"DROP\";\n}\n.fract-token.move.remove-drop {\n  background-color: rgba(201, 0, 0, 0.4666666667);\n  border-color: #8b2222;\n}\n.fract-token.move.remove-drop::before {\n  content: \"REMOVE\";\n}\n.fract-token.move::before {\n  display: inline-block;\n  font-size: 10pt;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-weight: bold;\n  position: relative;\n  top: -16pt;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n.fract-token-group.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token-group.debug > .fract-token {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n\n.fract-token-span {\n  padding: 5px;\n  width: 0px;\n  height: 50px;\n  transition: width 300ms;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\n.fract-token.token-header {\n  margin-right: 1em;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-staves {\n  overflow: visible;\n}\n.fract-staves > li {\n  height: 60px;\n}\n.fract-staves > li .tokens {\n  height: 100%;\n}\n.fract-staves .fract-token, .fract-staves .fract-token-group {\n  height: 30px;\n  padding: 2px;\n  margin-right: 2px;\n}\n.fract-staves .fract-token {\n  width: 30px;\n}\n.fract-staves .fract-token-group {\n  flex: 0 0 auto;\n}\n.fract-staves .fract-token-group .fract-token {\n  padding: 0px;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n.fract-token.token-header {\n    margin-right: 1em;\n}\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-staves {\n    overflow: visible;\n    > li {\n        height: 60px;\n        .tokens { height: 100%; }\n    }\n\n    .fract-token, .fract-token-group {\n        height: 30px;\n        padding: 2px;\n        margin-right: 2px;\n    }\n\n    .fract-token {\n        width: 30px;\n    }\n\n    .fract-token-group {\n        flex: 0 0 auto;\n\n        .fract-token {\n            padding: 0px;\n        }\n    }\n}\n",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLG9EQUFTLEVBQUU7Z0JBQzVCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2FBQzVCO2lCQUFNLElBQUksS0FBSyxZQUFZLG1EQUFRLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzNELE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdkQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUM3QyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2FB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TSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsQyxPQUFPLElBQUksQ0FBQztLQUNmO1NBQU0sSUFBSSxNQUFNLFlBQVksb0RBQVMsRUFBRTtRQUNwQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUIsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVB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LEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTO0lBQ1QsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsUUFBUSxFQUFFLFdB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Q0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksdURBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsTUFBTTtJQUNOLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FB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QUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFckUsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUM3RCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUs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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW1FO0FBRXhDO0FBRTNCLE1BQU0saUJBQWlCLEdBQW9CLEVBQUUsQ0FBQztBQUM5QyxNQUFNLFlBQVksR0FBSSxRQUFRLENBQUMsYUFBbUMsQ0FBQyxHQUFHLENBQUM7QUFFaEUsU0FBUyxhQUFhLENBQUMsTUFBcUI7SUFDL0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDakIsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNqRixPQUFPLEdBQUcsV0FBVyxZQUFZLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE9BQWU7SUFDOUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksNkRBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixVQUFVLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtJQUNwQyxNQUFNLE9BQU8sR0FBRyxZQUFZLEVBQUUsQ0FBQztJQUMvQixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3R5bGUvZG9jcy5zY3NzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3N0eWxlL2RvY3Muc2Nzcz9iZDJjIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L2FjdGlvblJlc3VsdC50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3QvYmFzZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3QvY29sb3JzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3Qvb3BzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9zdHJva2VzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC92YWx1ZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvY29udGV4dC50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9jb250ZXh0U3RlcHBlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9jdXJzb3IudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvZXhlYy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9maWd1cmVzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2Z1bmN0aW9uc0JhZy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9tYXBwaW5ncy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvc3RlcC50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9zdmcudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvdG9rZW5zLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29uc3RzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29udHJvbGxlcnMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2NvbnRyb2xsZXJzL2RvY3MudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9jb2RlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvY29tbWVudC50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL2RvY0Jhci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL2ltYWdlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3Mvc3RhdmUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9zdGF2ZVRva2VuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvdGl0bGUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy90b2tlbi50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9kb2NzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBzaG93dGltZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbi5mcmFjdC10b2tlbnMge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBnYXA6IDVweDtcXG59XFxuLmZyYWN0LXRva2Vucy5oaWRlIC5mcmFjdC10b2tlbiwgLmZyYWN0LXRva2Vucy5oaWRlIC5sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmdyb3VwLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW4udG9rZW4taW5saW5lIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcbi5mcmFjdC10b2tlbi5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNDY2NjY2NjY2Nyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbmltYXRpb24tbmFtZTogc2hvd3RpbWU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCAyMTgsIDEyMywgMC40NjY2NjY2NjY3KTtcXG4gIGJvcmRlci1jb2xvcjogIzIyOEIyMjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUudmFsaWQtZHJvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEUk9QXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUucmVtb3ZlLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDAsIDAsIDAuNDY2NjY2NjY2Nyk7XFxuICBib3JkZXItY29sb3I6ICM4YjIyMjI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlLnJlbW92ZS1kcm9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlJFTU9WRVxcXCI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE2cHQ7XFxufVxcblxcbi5mcmFjdC10b2tlbi1ncm91cCB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7XFxuICBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cC5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAuZGVidWcgPiAuZnJhY3QtdG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4tc3Bhbi5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXI6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxufVxcblxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLnRva2VuLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5uYW1lIHtcXG4gIGZsZXg6IDAgMSA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLnRva2VucyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC50b2tlbnMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4udG9rZW4taGVhZGVyIHtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4uZnJhY3QtYW5pbWF0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG4uZnJhY3QtYW5pbWF0aW9uIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIgPiBpbnB1dFtuYW1lPWl0ZXJhdGlvbnNdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBoZWlnaHQ6IDVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZnJhY3QtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZnJhY3QtaW1hZ2UgPiBzdmcge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5mcmFjdC1zdGF2ZXMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSAudG9rZW5zIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZyYWN0LXN0YXZlcyAuZnJhY3QtdG9rZW4sIC5mcmFjdC1zdGF2ZXMgLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG4uZnJhY3Qtc3RhdmVzIC5mcmFjdC10b2tlbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLmZyYWN0LXN0YXZlcyAuZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5mcmFjdC1zdGF2ZXMgLmZyYWN0LXRva2VuLWdyb3VwIC5mcmFjdC10b2tlbiB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b2tlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2RvY3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvZGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJO0lBQU8sV0FBQTtFQ0VUO0VEREU7SUFBSyxhQUFBO0VDSVA7QUFDRjtBREZBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDSUo7QUREUTtFQUNJLGFBQUE7QUNHWjtBRENJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFD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QTRNbEI7QUF6TUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBMk1SO0FBeE1JO0VBQ0ksV0FBQTtBQTBNUjtBQXZNSTtFQUNJLGNBQUE7QUF5TVI7QUF2TVE7RUFDSSxZQUFBO0FBeU1aXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2hvd3RpbWUge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMCU7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAxMDAlOyB9XFxufVxcblxcbi5mcmFjdC10b2tlbnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICAmLmhpZGUge1xcbiAgICAgICAgLmZyYWN0LXRva2VuLCAubGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgPiAuZ3JvdXAtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgPiAubGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJi50b2tlbi1pbmxpbmUge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgIH1cXG5cXG4gICAgJi5tb3ZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M3NztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93dGltZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuXFxuICAgICAgICAmLnZhbGlkLWRyb3Age1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YmRhN2I3NztcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjhCMjI7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogXFxcIkRST1BcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLnJlbW92ZS1kcm9wIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkwMDAwNzc7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOGIyMjIyO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJSRU1PVkVcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdG9wOiAtMTZwdDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgPiAqIHsgZmxleDogMCAwIGF1dG87IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMHB4OyB9XFxuICAgID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7IGJvcmRlci1sZWZ0OiAycHggIzg4OCBkb3R0ZWQ7IH1cXG4gICAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7IHBhZGRpbmc6IDJweDsgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgICAgICAmID4gLmZyYWN0LXRva2VuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcXG5cXG4gICAgJi5vdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL3Rva2Vucyc7XFxuQGltcG9ydCAnLi9jb2RlJztcXG5cXG4uZnJhY3QtdG9rZW4udG9rZW4taGVhZGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mcmFjdC1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyLCAuZnJhY3QtY29tbWVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyIHtcXG4gICAgPiBpbnB1dFtuYW1lPVxcXCJpdGVyYXRpb25zXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LWNvbW1lbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgaGVpZ2h0OiA1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgPiBzdmcge1xcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICA+IGxpIHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIC50b2tlbnMgeyBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgfVxcblxcbiAgICAuZnJhY3QtdG9rZW4sIC5mcmFjdC10b2tlbi1ncm91cCB7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgfVxcblxcbiAgICAuZnJhY3QtdG9rZW4ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcblxcbiAgICAgICAgLmZyYWN0LXRva2VuIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuZnJhY3QtZnVuY3Rpb25zLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC50b2tlbi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93biB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZmxleDogMCAxIGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgPiAubmFtZSB7XFxuICAgICAgICAgICAgZmxleDogMCAxIDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgPiAudG9rZW5zICB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaGlkZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG9jcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG9jcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY3Rpb25SZXN1bHQgeyB9XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQgeyB9XG5cbmV4cG9ydCBjbGFzcyBKdW1wUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgY291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGxSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBzdGF2ZTogc3RyaW5nO1xuICAgIG5ld0NvbnRleHQ6IENvbnRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF2ZTogc3RyaW5nLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdmUgPSBzdGF2ZTtcbiAgICAgICAgdGhpcy5uZXdDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgY291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IENsb3NlQ3Vyc29yLCBTaGFwZSwgSUN1cnNvciwgT3BzUGFyYW1zIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ29udGludWVSLCBKdW1wUiwgQ2FsbFIsIFJldmVyc2VSfSBmcm9tIFwiQC9jb3JlL2FzdC9hY3Rpb25SZXN1bHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSwgQWN0aW9uTm9kZSwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5hYnN0cmFjdCBjbGFzcyBOb2RlV2l0aFZhbHVlIGV4dGVuZHMgQWN0aW9uTm9kZSB7XG4gICAgI3ZhbHVlczogVmFsdWVOb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IFZhbHVlTm9kZVtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI3ZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLiN2YWx1ZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsVmFsdWUoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy4jdmFsdWVzLCBjb250ZXh0KS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbEludFZhbHVlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmV2YWxWYWx1ZShjb250ZXh0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHJldHVybiBuZXcgQ2FsbFIodGhpcy4jbmFtZSwgdGhpcy5jcmVhdGVDb250ZXh0KGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29udGV4dChjb250ZXh0OiBDb250ZXh0KTogQ29udGV4dCB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh7XG4gICAgICAgICAgICBhcmd1bWVudDogdGhpcy5ldmFsKGNvbnRleHQpLFxuICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmNyZWF0ZUN1cnNvcihjb250ZXh0KSxcbiAgICAgICAgICAgIGl0ZXJhdGlvbjogY29udGV4dC5pdGVyYXRpb24gKyAxLFxuICAgICAgICAgICAgdmFsdWVGdW5jQmFnOiBjb250ZXh0LnZhbHVlRnVuY0JhZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1cnNvcihjb250ZXh0OiBDb250ZXh0KTogSUN1cnNvciB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmN1cnNvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV2YWxlZFRvRmlndXJlT3BzKGV2YWxlZDogRXZhbHVlZFZhbHVlKTogT3BzUGFyYW1zIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0ZpbGxlZDogZXZhbGVkLmlzRmlsbGVkLFxuICAgICAgICBjb2xvcjogZXZhbGVkLmNvbG9yLFxuICAgICAgICBzdHJva2U6IGV2YWxlZC5zdHJva2VUaGlja25lc3MsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3NlQ2FsbCBleHRlbmRzIENhbGwge1xuICAgIHByb3RlY3RlZCBjcmVhdGVDdXJzb3IoY29udGV4dDogQ29udGV4dCk6IElDdXJzb3Ige1xuICAgICAgICBjb25zdCBldmFsZWQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgQ2xvc2VDdXJzb3IoY29udGV4dC5jdXJzb3IsIGV2YWxlZFRvRmlndXJlT3BzKGV2YWxlZCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3TGluZShsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdGaWd1cmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICAjc2hhcGU6IFNoYXBlXG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IFZhbHVlTm9kZVtdLCBzaGFwZTogU2hhcGUpIHtcbiAgICAgICAgc3VwZXIodmFsdWVzKTtcbiAgICAgICAgdGhpcy4jc2hhcGUgPSBzaGFwZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBldmFsZWQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBldmFsZWQudmFsdWU7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmRyYXdTaGFwZSh0aGlzLiNzaGFwZSwgc2l6ZSwgZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkKSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0FyY0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBwcml2YXRlIHJhdGlvOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXRpbywgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZHJhd0FyY0xpbmUodGhpcy5yYXRpbywgc2l6ZSwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBjdXJzb3IgfSA9IGNvbnRleHQ7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBDdXJzb3JNYW5pcHVsYXRvciBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGFic3RyYWN0IGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoY29udGV4dC5jdXJzb3IsIHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHRoaXMuY2hhbmdlKGNvbnRleHQuY3Vyc29yLCAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRm9yd2FyZCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlQmFja3dhcmQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IuYmFja3dhcmQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVMZWZ0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLmxlZnQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVSaWdodCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yaWdodCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlUmlnaHQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3Iucm90YXRlKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVMZWZ0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZsaXBWZXJ0aWNhbGx5IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IpIHtcbiAgICAgICAgY3Vyc29yLmZsaXAoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbGlwSG9yaXpvbnRhbGx5IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IpIHtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgwLjUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2UgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgUmV2ZXJzZVIoaXRlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXZlcnNlUihpdGVyYXRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXBsYXkgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICAjanVtcFNpemU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBqdW1wU2l6ZSA9IDEpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLiNqdW1wU2l6ZSA9IGp1bXBTaXplO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBsb2NhbFsnY291bnRlciddIHx8IDE7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbFsnY291bnRlciddID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEp1bXBSKC10aGlzLiNqdW1wU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ29udGludWVSIH0gZnJvbSBcIi4vYWN0aW9uUmVzdWx0XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZU5vZGUge1xuICAgIGFic3RyYWN0IGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUge1xuICAgIGFic3RyYWN0IGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdDtcbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0IHsgcmV0dXJuIG5ldyBDb250aW51ZVIoKTsgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzOiBWYWx1ZU5vZGVbXSwgY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgaW5pdDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBjb2xvcjogY29udGV4dC5hcmd1bWVudC5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIGlzRmlsbGVkOiBjb250ZXh0LmFyZ3VtZW50LmlzRmlsbGVkLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiAoYTogbnVtYmVyLCBiOm51bWJlcikgPT4gYSAqIGIsXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVOb2Rlcy5yZWR1Y2UocGFydEV2YWwuYmluZCh0aGlzLCBjb250ZXh0KSwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRFdmFsKGNvbnRleHQ6IENvbnRleHQsIGFjYzogRXZhbHVlZFZhbHVlLCBub2RlOiBWYWx1ZU5vZGUpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbm9kZS5ldmFsKGNvbnRleHQpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ld1ZhbHVlLnZhbHVlVHJhbnNmb3JtZXIgfHwgYWNjLnZhbHVlVHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm0oYWNjLnZhbHVlLCBuZXdWYWx1ZS52YWx1ZSkgOiBhY2MudmFsdWUsXG4gICAgICAgIGNvbG9yOiBuZXdWYWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuY29sb3IgOiBhY2MuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBuZXdWYWx1ZS5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlU3R5bGUgOiBhY2Muc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgOiBhY2Muc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICBpc0ZpbGxlZDogbmV3VmFsdWUuaXNGaWxsZWQgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLmlzRmlsbGVkIDogYWNjLmlzRmlsbGVkLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiB0cmFuc2Zvcm0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXhDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMC41fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNaW5Db2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMC4wfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxsQ29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7aXNGaWxsZWQ6IHRydWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7aXNGaWxsZWQ6IGZhbHNlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaGlmdENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgbGV0IGNvbG9yID0gKGNvbnRleHQuYXJndW1lbnQuY29sb3IgKyB0aGlzLnNoaWZ0KSAlIDEuMDtcbiAgICAgICAgaWYgKGNvbG9yIDwgMC4wKSB7XG4gICAgICAgICAgICBjb2xvciArPSAxLjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtjb2xvcn07XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBBY3Rpb25Ob2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY3Rpb25zOiBBY3Rpb25Ob2RlW107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFjdGlvbnM6IEFjdGlvbk5vZGVbXSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH1cblxuICAgIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMubGVuZ3RoO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE11bHRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKiBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICsgYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1Yk9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAtIGIgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgU3Ryb2tlU3R5bGUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFNldFN0cm9rZVN0eWxlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHN0cm9rZTogU3Ryb2tlU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJva2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTaGlmdFN0cm9rZVRoaWNrbmVzcyBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHN0cm9rZVRoaWNrbmVzcyA9IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzICsgdGhpcy5zaGlmdDtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlVGhpY2tuZXNzIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEFuZ2xlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZWRBbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vcm1hbGl6ZWRBbmdsZSA9IGFuZ2xlIC8gMzYwLjA7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy5ub3JtYWxpemVkQW5nbGV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBjb250ZXh0LmFyZ3VtZW50LnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlTm9kZXMgPSBjb250ZXh0LnZhbHVlRnVuY0JhZ1t0aGlzLm5hbWVdIHx8IFtdO1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHZhbHVlTm9kZXMsIGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBTdHJva2VTdHlsZSA9IFwic29saWRcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWx1ZWRWYWx1ZSB7XG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgY29sb3I/OiBudW1iZXI7XG4gICAgc3Ryb2tlU3R5bGU/OiBTdHJva2VTdHlsZTtcbiAgICBzdHJva2VUaGlja25lc3M/OiBudW1iZXI7XG4gICAgaXNGaWxsZWQ/OiBib29sZWFuO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGFyZ3VtZW50OiBFdmFsdWVkVmFsdWU7XG4gICAgcmVhZG9ubHkgY3Vyc29yOiBJQ3Vyc29yO1xuICAgIHJlYWRvbmx5IHZhbHVlRnVuY0JhZzoge1tuYW1lOiBzdHJpbmddOiBWYWx1ZU5vZGVbXX07XG5cbiAgICBjb25zdHJ1Y3Rvcih7Y3Vyc29yLCBhcmd1bWVudCwgdmFsdWVGdW5jQmFnID0ge30sIGl0ZXJhdGlvbiA9IDB9KSB7XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5pdGVyYXRpb24gPSBpdGVyYXRpb247XG4gICAgICAgIHRoaXMudmFsdWVGdW5jQmFnID0gdmFsdWVGdW5jQmFnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICB9XG5cbiAgICBvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5jdXJzb3IuY2xvc2UoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENhbGxSLCBDb250aW51ZVIsIEp1bXBSLCBSZXZlcnNlUiB9IGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvblJlc3VsdFwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiQC9jb3JlL2FzdC9mdW5jdGlvblwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIkAvY29yZS9mdW5jdGlvbnNCYWdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQXJncyB7XG4gICAgcmVzdWx0OiBBY3Rpb25SZXN1bHQ7XG4gICAgYmFnOiBGdW5jdGlvbnNCYWc7XG4gICAgcHVzaDogUHVzaENiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbHMoZnVuYzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShmdW5jLmFjdGlvbnMsICgpID0+ICh7fSkpO1xufVxuXG50eXBlIFB1c2hDYiA9IChzdGVwcGVyOiBDb250ZXh0U3RlcHBlcikgPT4gdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRTdGVwcGVyKGNvbnRleHQ6IENvbnRleHQsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjb250ZXh0LFxuICAgIH0pO1xufVxuXG5pbnRlcmZhY2UgU2NvcGUge1xuICAgIGNvbnRleHQ6IENvbnRleHQ7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBmdW5jdGlvbjogRnVuY3Rpb247XG4gICAgbG9jYWxzOiBvYmplY3RbXTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRleHRTdGVwcGVyIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IFNjb3BlO1xuXG4gICAgY29uc3RydWN0b3IgKHNjb3BlOiBTY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZXhlYygpOiBBY3Rpb25SZXN1bHQ7XG4gICAgYWJzdHJhY3QgbW92ZShhcmdzOiBNb3ZlQXJncyk6IGJvb2xlYW47XG4gICAgb25FbmQoKSB7IHRoaXMuc2NvcGUuY29udGV4dC5vbkVuZCgpOyB9O1xuXG4gICAgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnNjb3BlLmluZGV4OyB9XG4gICAgZ2V0IHN0YXZlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNjb3BlLmZ1bmN0aW9uLm5hbWU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcndhcmRDb250ZXh0U3RlcHBlciBleHRlbmRzIENvbnRleHRTdGVwcGVyIHtcbiAgICBleGVjKCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jLCBsb2NhbHMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZ1bmMuYWN0aW9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzW2luZGV4XTtcbiAgICAgICAgaWYgKCFhY3Rpb24gfHwgIWxvY2FsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb24uZXhlYyh0aGlzLnNjb3BlLmNvbnRleHQsIGxvY2FsKTtcbiAgICB9XG5cbiAgICBtb3ZlKHtyZXN1bHQsIGJhZywgcHVzaH06IE1vdmVBcmdzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250aW51ZVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBKdW1wUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSByZXN1bHQuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2FsbFIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKHJlc3VsdC5zdGF2ZSwgcmVzdWx0Lm5ld0NvbnRleHQuaXRlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVzaChuZXcgRm9yd2FyZENvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcmVzdWx0Lm5ld0NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldmVyc2VSKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuc2NvcGUuaW5kZXggLSByZXN1bHQuY291bnQpO1xuICAgICAgICAgICAgcHVzaChuZXcgUmV2ZXJzZUNvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNjb3BlLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuc2NvcGUuaW5kZXggLSAxLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiB0aGlzLnNjb3BlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKHRoaXMuc2NvcGUuZnVuY3Rpb24pLFxuICAgICAgICAgICAgfSwgZW5kSW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiV3JvbmcgQWN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbmRleEluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIgZXh0ZW5kcyBDb250ZXh0U3RlcHBlciB7XG4gICAgI2VuZEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogU2NvcGUsIGVuZEluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlKTtcbiAgICAgICAgdGhpcy4jZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB9XG5cbiAgICBleGVjKCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jLCBsb2NhbHMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZ1bmMuYWN0aW9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5leGVjUmV2ZXJzZSh0aGlzLnNjb3BlLmNvbnRleHQsIGxvY2FsKTtcbiAgICB9XG5cbiAgICBtb3ZlKHtyZXN1bHQsIGJhZywgcHVzaH06IE1vdmVBcmdzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250aW51ZVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBKdW1wUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSByZXN1bHQuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2FsbFIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKHJlc3VsdC5zdGF2ZSwgcmVzdWx0Lm5ld0NvbnRleHQuaXRlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVzaChuZXcgUmV2ZXJzZUNvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcmVzdWx0Lm5ld0NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBmdW5jLnNpemUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldmVyc2VSKSB7XG4gICAgICAgICAgICAvLy8gVE9ETyAtIGltcGxlbWVudCBSZXZlcnNlLVJldmVyc2VcbiAgICAgICAgICAgIC8vLyBPciBtYXliZSBvbmUgc3RlcHBlciB3aXRoIG1vdmUgY3Vyc29yIG9ubHkgd2l0aCBzcGVjaWZpZWQgZGlyZWN0aW9uP1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSByZXN1bHQuY291bnQgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJXcm9uZyBBY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luZGV4SW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSB0aGlzLiNlbmRJbmRleCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGaWd1cmUsIExpbmUsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIENpcmNsZSwgQXJjLCBTdHlsZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuaW1wb3J0IHsgUG9seWdvbiwgTGluZUN1cnZlLCBBcmNDdXJ2ZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveCB7XG4gICAgbWluOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG1heDogW251bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHNQYXJhbXMge1xuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgc3Ryb2tlOiBudW1iZXIsXG4gICAgaXNGaWxsZWQ6IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBlbnVtIFNoYXBlIHsgU3F1YXJlLCBUcmlhbmdsZSwgQ2lyY2xlIH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElDdXJzb3Ige1xuICAgIGRpc3RhbmNlTXVsdGlwbGVyOiBudW1iZXI7XG4gICAgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmVmbGVjdGlvbjogbnVtYmVyO1xuICAgIGZpZ3VyZXM6IEZpZ3VyZVtdO1xuICAgIGJveDogQm94O1xuICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgYW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZ3VyZXMgPSBbXTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgYXJnID0gZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyXG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gKz0geCAqIGFyZztcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB5ICogYXJnO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb3J3YXJkKC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmlnaHQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICAvLyByb3RhdGUgb3JpZW50YXRpb24gYnkgOTDCsFxuICAgICAgICBjb25zdCBhcmcgPSBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gLT0geSAqIGFyZztcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB4ICogYXJnO1xuICAgIH1cblxuICAgIGxlZnQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJpZ2h0KC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIGNvbnN0IG5BbmdsZSA9IGFuZ2xlICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBuQW5nbGUpICUgMS4wO1xuICAgICAgICBjb25zdCByYWRpYW5zID0gbkFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZmxpcCgpIHtcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uICo9IC0xLjA7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7IH1cblxuICAgIHByb3RlY3RlZCBleHRlbmRCb3goW3gsIHldOiBudW1iZXJbXSwgc2l6ZSA9IDApIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzBdLCB4IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFswXSwgeCArIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMV0sIHkgLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzFdLCB5ICsgc2l6ZSk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGU7XG4gICAgYWJzdHJhY3QgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpOiB2b2lkO1xuICAgIGFic3RyYWN0IGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgSUN1cnNvciB7XG4gICAgc3Ryb2tlU2l6ZTogbnVtYmVyO1xuICAgIGZpcnN0Q29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBzdHJva2VTaXplID0gMSxcbiAgICAgICAgZGlzdGFuY2VNdWx0aXBsZXIgPSAxMDAsXG4gICAgICAgIGZpcnN0Q29sb3IgPSBcIiMwMDAwMDBcIixcbiAgICAgICAgc2Vjb25kQ29sb3IgPSBcIiNEQzE0M0NcIixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJva2VTaXplID0gc3Ryb2tlU2l6ZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZU11bHRpcGxlciA9IGRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnJlZmxlY3Rpb24gPSAxLjA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5ib3ggPSB7XG4gICAgICAgICAgICBtaW46IFswLjAsIDAuMF0sXG4gICAgICAgICAgICBtYXg6IFswLjAsIDAuMF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlyc3RDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihmaXJzdENvbG9yKTtcbiAgICAgICAgdGhpcy5zZWNvbmRDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihzZWNvbmRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZXhUb0NvbG9yKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMSwgMSArIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDMsIDMgKyAyKSwgMTYpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZyg1LCA1ICsgMiksIDE2KTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgICB9XG5cbiAgICBjYWxjU3R5bGVQYXJhbXMob3BzOiBPcHNQYXJhbXMpOiBTdHlsZSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jYWxjQ29sb3Iob3BzLmNvbG9yKTtcbiAgICAgICAgaWYgKG9wcy5pc0ZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZmlsbDogY29sb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBmaWxsOiBcIm5vbmVcIiwgY29sb3I6IGNvbG9yLCBzdHJva2U6IG9wcy5zdHJva2UgKiB0aGlzLnN0cm9rZVNpemUgfTtcbiAgICB9XG5cbiAgICBkcmF3TGluZShkaXN0YW5jZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbb2xkX3gsIG9sZF95XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIHRoaXMuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGNvbnN0IFtuZXdfeCwgbmV3X3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyh7IHN0cm9rZSwgY29sb3IsIGlzRmlsbGVkOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IExpbmUoW29sZF94LCBvbGRfeV0sIFtuZXdfeCwgbmV3X3ldLCBzdHlsZSkpO1xuICAgICAgICB0aGlzLmV4dGVuZEJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keSAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgY29uc3QgbmR5ID0gZHggKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKHsgc3Ryb2tlLCBjb2xvciwgaXNGaWxsZWQ6IGZhbHNlIH0pO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzaGlmdDogdGhpcy5hbmdsZSAtIDAuMjUsXG4gICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IEFyYyhwb2ludCwgYXJjUmFkaXVzLCByYXRpbywgb3BzLCBzdHlsZSkpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuZm9yd2FyZChzaXplKTtcbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3gocG9pbnQsIE1hdGguYWJzKGFyY1JhZGl1cykpO1xuICAgIH1cblxuICAgIGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KFt4LCB5XSwgTWF0aC5hYnMoc2l6ZSkpO1xuXG4gICAgICAgIHN3aXRjaCAoc2hhcGUpIHtcbiAgICAgICAgICAgIGNhc2UgU2hhcGUuQ2lyY2xlOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBDaXJjbGUoW3gsIHldLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5TcXVhcmU6XG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFJlY3RhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5UcmlhbmdsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgVHJpYW5nbGUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2EgPSB0aGlzLmZpcnN0Q29sb3I7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5zZWNvbmRDb2xvcjtcbiAgICAgICAgY29uc3QgYVJhdGlvID0gTWF0aC5hYnMoY29sb3IgLSAwLjUpICogMjtcbiAgICAgICAgY29uc3QgYlJhdGlvID0gMS4wIC0gYVJhdGlvO1xuICAgICAgICBjb25zdCByID0gTWF0aC50cnVuYyhjYVswXSAqIGFSYXRpbyArIGNiWzBdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgZyA9IE1hdGgudHJ1bmMoY2FbMV0gKiBhUmF0aW8gKyBjYlsxXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLnRydW5jKGNhWzJdICogYVJhdGlvICsgY2JbMl0gKiBiUmF0aW8pO1xuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvc2VDdXJzb3IgZXh0ZW5kcyBJQ3Vyc29yIHtcbiAgICAjY3Vyc29yOiBJQ3Vyc29yO1xuICAgICNwb2x5Z29uOiBQb2x5Z29uO1xuXG4gICAgY29uc3RydWN0b3IoY3Vyc29yOiBJQ3Vyc29yLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbLi4uY3Vyc29yLnBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFsuLi5jdXJzb3Iub3JpZW50YXRpb25dO1xuICAgICAgICB0aGlzLnJlZmxlY3Rpb24gPSBjdXJzb3IucmVmbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGN1cnNvci5hbmdsZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZU11bHRpcGxlciA9IGN1cnNvci5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5ib3ggPSB0aGlzLiNjdXJzb3IuYm94O1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgICAgIHRoaXMuI3BvbHlnb24gPSBuZXcgUG9seWdvbihbLi4uY3Vyc29yLnBvc2l0aW9uXSwgW10sIHN0eWxlKTtcbiAgICB9XG5cbiAgICBjYWxjU3R5bGVQYXJhbXMob3BzOiBPcHNQYXJhbXMpOiBTdHlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3IuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBbbmV3X3gsIG5ld195XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRlbHRhOiBbbnVtYmVyLCBudW1iZXJdID0gW25ld194IC0gb2xkX3gsIG5ld195IC0gb2xkX3ldO1xuICAgICAgICB0aGlzLiNwb2x5Z29uLmN1cnZlcy5wdXNoKG5ldyBMaW5lQ3VydmUoZGVsdGEpKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3godGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZHJhd0FyY0xpbmUocmF0aW86IG51bWJlciwgc2l6ZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBhcmNTaXplID0gc2l6ZSAvIDIgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICBjb25zdCBhcmNSYWRpdXMgPSBhcmNTaXplIC8gTWF0aC5zaW4ocmF0aW8gKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3Qgc2hpZnQgPSB0aGlzLmFuZ2xlIC0gMC4yNTtcblxuICAgICAgICB0aGlzLiNwb2x5Z29uLmN1cnZlcy5wdXNoKG5ldyBBcmNDdXJ2ZShhcmNSYWRpdXMsIHJhdGlvLCBzaGlmdCkpO1xuXG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgbmR4ID0gLWR5ICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICBjb25zdCBuZHkgPSBkeCAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBbeCArIGFyY1JhZGl1cyAqIG5keCwgeSArIGFyY1JhZGl1cyAqIG5keV07XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHBvaW50LCBNYXRoLmFicyhhcmNSYWRpdXMpKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgfVxuXG4gICAgZHJhd1NoYXBlKHNoYXBlOiBTaGFwZSwgc2l6ZTogbnVtYmVyLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICB0aGlzLiNjdXJzb3IuZHJhd1NoYXBlKHNoYXBlLCBzaXplLCBvcHMpO1xuICAgIH1cblxuICAgIGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvci5jYWxjQ29sb3IoY29sb3IpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5maWd1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEN1cnNvciBpcyBjbG9zZWQuIEdvIGF3YXkuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2godGhpcy4jcG9seWdvbik7XG4gICAgICAgIHRoaXMuI2N1cnNvci5maWd1cmVzID0gdGhpcy4jY3Vyc29yLmZpZ3VyZXMuY29uY2F0KHRoaXMuZmlndXJlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IHBhcnNlTGluZUZ1bmMsIHBhcnNlTGluZVZhbHVlLCBwYXJzZVJhd1Rva2VucyB9IGZyb20gXCJAL2NvcmUvcGFyc2VyXCI7XG5pbXBvcnQgeyBEeW5hbWljQXJnc0tleSwgRFlOQU1JQ19BUkdTIH0gZnJvbSBcIkAvY29yZS9tYXBwaW5nc1wiO1xuaW1wb3J0IHsgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiLi9mdW5jdGlvbnNCYWdcIjtcbmltcG9ydCB7IFN0YWNrU3RlcCB9IGZyb20gXCIuL3N0ZXBcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCIuL3N0YXZlXCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9hc3QvZnVuY3Rpb25cIjtcblxuY29uc3QgTUFYX1NURVBTID0gMTAwMDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlYyhzdGFjazogU3RhY2tTdGVwKSB7XG4gICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBNQVhfU1RFUFM7IHN0ZXArKykge1xuICAgICAgICBpZiAoc3RhY2suc3RlcCgpLmhhbHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcIk1heGltdW0gc3RlcHMgcmVhY2hlZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFeGVjKHZhbHVlQXJndW1lbnQ6IG51bWJlciwgbWF4SXRlcmF0aW9uOiBudW1iZXIsIHN0YXZlczogU3RhdmVbXSwgY3Vyc29yOiBDdXJzb3IpOiBTdGFja1N0ZXAge1xuICAgIGNvbnN0IGFyZ3VtZW50OiBFdmFsdWVkVmFsdWUgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZUFyZ3VtZW50LFxuICAgICAgICBzdHJva2VTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDEuMCxcbiAgICAgICAgY29sb3I6IDAuMCxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCBiYWcgPSBuZXcgRnVuY3Rpb25zQmFnKG1heEl0ZXJhdGlvbiwgaW5pdEZ1bmNCYWcoc3RhdmVzKSk7XG4gICAgY29uc3QgdmFsdWVGdW5jQmFnID0gaW5pdFZhbHVlQmFnKHN0YXZlcyk7XG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHsgYXJndW1lbnQsIGN1cnNvciwgdmFsdWVGdW5jQmFnIH0pO1xuICAgIHJldHVybiBuZXcgU3RhY2tTdGVwKGNvbnRleHQsIGJhZyk7XG59XG5cbmZ1bmN0aW9uIGluaXRGdW5jQmFnKHN0YXZlczogU3RhdmVbXSk6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiB7XG4gICAgY29uc3QgYmFnOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB7fTtcbiAgICBzdGF2ZXMgXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiAhRFlOQU1JQ19BUkdTLmluY2x1ZGVzKG5hbWUgYXMgRHluYW1pY0FyZ3NLZXkpKVxuICAgICAgICAuZm9yRWFjaCgoeyBuYW1lLCBzdWZmaXggPSBudWxsLCB0b2tlbnM6IHJhd1Rva2VucyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IHRvUmVhbG5hbWUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vucyk7XG4gICAgICAgICAgICBiYWdbcmVhbE5hbWVdID0gcGFyc2VMaW5lRnVuYyhuYW1lLCB0b2tlbnMpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gYmFnO1xufVxuXG5mdW5jdGlvbiBpbml0VmFsdWVCYWcoc3RhdmVzOiBTdGF2ZVtdKTogUmVjb3JkPHN0cmluZywgVmFsdWVOb2RlW10+IHtcbiAgICBjb25zdCBiYWc6IFJlY29yZDxzdHJpbmcsIFZhbHVlTm9kZVtdPiA9IHt9O1xuICAgIHN0YXZlcyBcbiAgICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IERZTkFNSUNfQVJHUy5pbmNsdWRlcyhuYW1lIGFzIER5bmFtaWNBcmdzS2V5KSlcbiAgICAgICAgLmZvckVhY2goKHsgbmFtZSwgc3VmZml4ID0gbnVsbCwgdG9rZW5zOiByYXdUb2tlbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSB0b1JlYWxuYW1lKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW3JlYWxOYW1lXSA9IHBhcnNlTGluZVZhbHVlKHRva2Vucyk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBiYWc7XG59XG5cbmZ1bmN0aW9uIHRvUmVhbG5hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB8IG51bGwpIHtcbiAgICByZXR1cm4gKHN1ZmZpeCA9PT0gbnVsbCB8fCBzdWZmaXgubGVuZ3RoID09IDApID8gbmFtZSA6IGAke25hbWV9Ojoke3N1ZmZpeH1gO1xufSIsImV4cG9ydCBpbnRlcmZhY2UgRmlndXJlIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZVN0eWxlIHtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBzdHJva2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xuICAgIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgICBmaXJzdFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHN0eWxlOiBMaW5lU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdFBvaW50LCBzZWNvbmRQb2ludCwgc3R5bGU6IExpbmVTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZmlyc3RQb2ludCA9IGZpcnN0UG9pbnQ7XG4gICAgICAgIHRoaXMuc2Vjb25kUG9pbnQgPSBzZWNvbmRQb2ludDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1cnZlIHt9XG5cbmV4cG9ydCBjbGFzcyBMaW5lQ3VydmUgaW1wbGVtZW50cyBDdXJ2ZSB7XG4gICAgZGVsdGE6IFtudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3RvcihkZWx0YTogW251bWJlciwgbnVtYmVyXSkge1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjQ3VydmUgaW1wbGVtZW50cyBDdXJ2ZSB7XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIHJhdGlvOiBudW1iZXIsIHNoaWZ0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIGN1cnZlczogQ3VydmVbXTtcbiAgICBjbG9zZTogYm9vbGVhbjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludDogW251bWJlciwgbnVtYmVyXSwgY3VydmVzOiBDdXJ2ZVtdLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuY3VydmVzID0gY3VydmVzO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENpcmNsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIHJhZGl1cywgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyYyBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBjbG9zZTogYm9vbGVhbjtcbiAgICBzaGlmdDogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHJhdGlvLCB7IHNoaWZ0ID0gMC4wLCBjbG9zZSA9IGZhbHNlIH0gPSB7fSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludDogW251bWJlciwgbnVtYmVyXSwgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl0sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlIGltcGxlbWVudHMgRmlndXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25zQmFnIHtcbiAgICBtYXhJdGVyYXRpb246IG51bWJlcjtcbiAgICBiYWc6IHtbbmFtZTogc3RyaW5nXTogRnVuY3Rpb259O1xuXG4gICAgY29uc3RydWN0b3IobWF4SXRlcmF0aW9uLCBiYWcpIHtcbiAgICAgICAgdGhpcy5tYXhJdGVyYXRpb24gPSBtYXhJdGVyYXRpb247XG4gICAgICAgIHRoaXMuYmFnID0gYmFnO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcsIGl0ZXJhdGlvbjogbnVtYmVyID0gMCk6IEZ1bmN0aW9uIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHsgbWF4SXRlcmF0aW9uIH0gPSB0aGlzO1xuICAgICAgICBpZiAoaXRlcmF0aW9uID49IG1heEl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aHJvd0Z1bmMgPSB0aGlzLiN0aHJvd0Z1bmMuYmluZCh0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24gLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpFTkRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RVZFTmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06Ok9ERGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBpdGVyYXRpb247IGkgPiAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkdFJHtpfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvd0Z1bmMobmFtZSk7XG4gICAgICAgIH0gY2F0Y2goZnVuYykge1xuICAgICAgICAgICAgaWYgKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgI3Rocm93RnVuYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHRoaXMuYmFnW25hbWVdO1xuICAgICAgICBpZiAoZnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBDQUxMUyA9IFtcIkZcIiwgXCJHXCIsIFwiSFwiXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBEWU5BTUlDX0FSR1MgPSBbXCJESUFNT05EXCIsIFwiSU5WX1RSSUFOR0xFXCJdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFNUQVZFUyA9IFsuLi5DQUxMUywgLi4uRFlOQU1JQ19BUkdTXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBTVUZGSVhFUyA9IFtcIkVORFwiLCBcIkVWRU5cIiwgXCJPRERcIiwgXCJHRTNcIiwgXCJHRTVcIiwgXCJHRTdcIl0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgVE9LRU5TID0gW1xuICAgIC8vIENvdW50c1xuICAgIFwiQ09VTlRfMVwiLFxuICAgIFwiQ09VTlRfMlwiLFxuICAgIFwiQ09VTlRfM1wiLFxuICAgIFwiQ09VTlRfNVwiLFxuICAgIFwiQ09VTlRfN1wiLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBcIkNPVU5UX01JTlVTXCIsXG4gICAgXCJDT1VOVF9HT0xEXCIsXG4gICAgXCJDT1VOVF9TSUxWRVJcIixcbiAgICBcIkNPVU5UX0JST05aRVwiLFxuICAgIFwiQ09VTlRfUExBU1RJQ1wiLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIFwiRlJBQ1RfMV8yXCIsXG4gICAgXCJGUkFDVF8xXzNcIixcbiAgICBcIkZSQUNUXzJfM1wiLFxuICAgIFwiRlJBQ1RfMV80XCIsXG4gICAgXCJGUkFDVF8zXzRcIixcbiAgICBcIkZSQUNUXzFfNVwiLFxuICAgIFwiRlJBQ1RfMl81XCIsXG4gICAgXCJGUkFDVF8zXzVcIixcbiAgICBcIkZSQUNUXzRfNVwiLFxuICAgIC8vIEFuZ2xlc1xuICAgIFwiQU5HTEVfMjcwXCIsXG4gICAgXCJBTkdMRV8xODBcIixcbiAgICBcIkFOR0xFXzkwXCIsXG4gICAgXCJBTkdMRV82MFwiLFxuICAgIFwiQU5HTEVfNDVcIixcbiAgICBcIkFOR0xFXzMwXCIsXG4gICAgXCJBTkdMRV8xNVwiLFxuICAgIFwiQU5HTEVfMTBcIixcbiAgICAvLyBDb2xvcnNcbiAgICBcIkNPTE9SX01BWFwiLFxuICAgIFwiQ09MT1JfTUlOXCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzJcIixcbiAgICBcIkNPTE9SX1NISUZUXzFfNFwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV81XCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzEwXCIsXG4gICAgXCJDT0xPUl9GSUxMXCIsXG4gICAgXCJDT0xPUl9FTVBUWVwiLFxuICAgIC8vIFN0cm9rZVxuICAgIFwiU1RST0tFX1NPTElEXCIsXG4gICAgXCJTVFJPS0VfREFTSEVEXCIsXG4gICAgXCJTVFJPS0VfRE9UVEVEXCIsXG4gICAgXCJTVFJPS0VfVEhJQ0tfQUREXCIsXG4gICAgXCJTVFJPS0VfVEhJQ0tfU1VCXCIsXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIFwiT1BfTVVMVFwiLFxuICAgIFwiT1BfQUREXCIsXG4gICAgXCJPUF9TVUJcIixcbiAgICAvLyBBcmd1bWVudHNcbiAgICBcIkFSR1VNRU5UXCIsXG4gICAgXCJDQUxMX0RJQU1PTkRcIixcbiAgICBcIkNBTExfSU5WX1RSSUFOR0xFXCIsXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgXCJDQUxMX0ZcIixcbiAgICBcIkNBTExfR1wiLFxuICAgIFwiQ0FMTF9IXCIsXG4gICAgLy8gQ2xvc2UgQ2FsbGVyc1xuICAgIFwiQ0xPU0VfQ0FMTF9GXCIsXG4gICAgXCJDTE9TRV9DQUxMX0dcIixcbiAgICBcIkNMT1NFX0NBTExfSFwiLFxuICAgIC8vIFNoYXBlc1xuICAgIFwiRFJBV19DSVJDTEVcIixcbiAgICBcIkRSQVdfU1FVQVJFXCIsXG4gICAgXCJEUkFXX1RSSUFOR0xFXCIsXG4gICAgLy8gTGluZVxuICAgIFwiRFJBV19MSU5FXCIsXG4gICAgLy8gQXJjXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8zXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzJfM1wiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV8yXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8xXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfNFwiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV81XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8zXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzJfM1wiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV8yXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8xXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfNFwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV81XCIsXG4gICAgLy8gQ3Vyc29yIHRyYW5zbGF0aW9uc1xuICAgIFwiTU9WRV9GT1JXQVJEXCIsXG4gICAgXCJNT1ZFX0JBQ0tXQVJEXCIsXG4gICAgXCJNT1ZFX0xFRlRcIixcbiAgICBcIk1PVkVfUklHSFRcIixcbiAgICAvLyBDdXJzb3Igcm90YXRpb25zXG4gICAgXCJST1RBVEVfTEVGVFwiLFxuICAgIFwiUk9UQVRFX1JJR0hUXCIsXG4gICAgLy8gQ3Vyc29yIEZsaXBcbiAgICBcIkZMSVBfVlwiLFxuICAgIFwiRkxJUF9IXCIsXG4gICAgLy8gUmVwZXRldGl2ZSBhY3Rpb25zXG4gICAgXCJSRVZFUlNFXCIsXG4gICAgXCJSRVBMQVlcIixcbiAgICBcIlJFUExBWV8yXCIsXG4gICAgXCJSRVBMQVlfM1wiLFxuICAgIFwiUkVQTEFZXzRcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNBcmdzS2V5ID0gdHlwZW9mIERZTkFNSUNfQVJHU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgRHluYW1pY0FyZ3NNYXA8VHlwZT4gPSBSZWNvcmQ8RHluYW1pY0FyZ3NLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBDYWxsc0tleSA9IHR5cGVvZiBDQUxMU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgQ2FsbHNNYXA8VHlwZT4gPSBSZWNvcmQ8RHluYW1pY0FyZ3NLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBTdWZmaXhlc0tleSA9IHR5cGVvZiBTVUZGSVhFU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgU3VmZml4ZXNNYXA8VHlwZT4gPSBSZWNvcmQ8U3VmZml4ZXNLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBTdGF2ZXNLZXkgPSB0eXBlb2YgU1RBVkVTW251bWJlcl07XG5leHBvcnQgdHlwZSBTdGF2ZXNNYXA8VHlwZT4gPSBSZWNvcmQ8U3RhdmVzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zS2V5ID0gdHlwZW9mIFRPS0VOU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgVG9rZW5zTWFwPFR5cGU+ID0gUmVjb3JkPFRva2Vuc0tleSwgVHlwZT47IiwiaW1wb3J0IHsgVG9rZW4sIFRPS0VOUywgQWN0aW9uQ2IsIFZhbHVlQ2IgfSBmcm9tIFwiQC9jb3JlL3Rva2Vuc1wiO1xuaW1wb3J0IHsgQWN0aW9uTm9kZSwgVmFsdWVOb2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiQC9jb3JlL2FzdC9mdW5jdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zOiBzdHJpbmdbXSk6IFRva2VuW10ge1xuICAgIHJldHVybiByYXdUb2tlbnMubWFwKHJhdyA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gVE9LRU5TW3Jhd107XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IGBQYXJzaW5nIGVycm9yOiAke3Jhd30gaXMgbm90IHVuZGVmaW5lZCBhcyB0b2tlbi5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KTtcbn1cblxuY2xhc3MgQWN0aW9uVG1wIHtcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuICAgIHByaXZhdGUgdmFsdWVzOiBWYWx1ZU5vZGVbXTtcbiAgICBwcml2YXRlIHRva2VuOiBUb2tlbiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIHNldEFjdGlvblRva2VuKHRva2VuOiBUb2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uVG9rZW4oKTogVG9rZW4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNBY3Rpb25TZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1c2hBY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMudG9rZW4uZmFjdG9yeSBhcyBBY3Rpb25DYjtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZmFjdG9yeSh0aGlzLnZhbHVlcyk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIGluc2VydFZhbHVlKHZhbHVlOiBWYWx1ZU5vZGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmVGdW5jKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICBjb25zdCB0bXAgPSBuZXcgQWN0aW9uVG1wKCk7XG4gICAgdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICBpZiAodG1wLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHBhcnNlVmFsdWUodG9rZW4sIHRtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZUFjdGlvbih0b2tlbiwgdG1wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG1wLnB1c2hBY3Rpb24oKTsgLy8gcHVzaCBsYXN0IHRva2VuLlxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihuYW1lLCB0bXAuZ2V0QWN0aW9ucygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZVZhbHVlKHRva2VuczogVG9rZW5bXSk6IFZhbHVlTm9kZVtdIHtcbiAgICByZXR1cm4gdG9rZW5zLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBhY3Rpb25zIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmlzRHluYW1pYykge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBkeW5hbWljIGVsZW1lbnRzIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBY3Rpb24odG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICghdG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBpcyBub3QgYW4gYWN0aW9uXCI7XG4gICAgfVxuICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgICAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHRtcC5pbnNlcnRWYWx1ZShmYWN0b3J5KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb250ZXh0U3RlcHBlciwgY3JlYXRlSW5pdFN0ZXBwZXIgfSBmcm9tIFwiLi9jb250ZXh0U3RlcHBlclwiO1xuaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGhhbHQ6IGJvb2xlYW4sXG4gICAgc3RhdmU6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxufVxuXG5leHBvcnQgY2xhc3MgU3RhY2tTdGVwIHtcbiAgICAjc3RhY2s6IENvbnRleHRTdGVwcGVyW107XG4gICAgI2JhZzogRnVuY3Rpb25zQmFnO1xuICAgIHJlYWRvbmx5IGN1cnNvcjogSUN1cnNvcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IENvbnRleHQsIGJhZzogRnVuY3Rpb25zQmFnKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKFwiU1RBUlRcIikgfHwgYmFnLmZpbmRGdW5jdGlvbihcIkZcIik7XG4gICAgICAgIGlmIChmdW5jID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlN0YXJ0IGZ1bmN0aW9uIG5vdCBmb3VuZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3N0YWNrID0gW2NyZWF0ZUluaXRTdGVwcGVyKGNvbnRleHQsIGZ1bmMpXTtcbiAgICAgICAgdGhpcy4jYmFnID0gYmFnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGNvbnRleHQuY3Vyc29yO1xuICAgIH1cblxuICAgIHN0ZXAoKTogU3RhdGUge1xuICAgICAgICBpZiAodGhpcy4jc3RhY2subGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdGF2ZTogJz8nLFxuICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXdFbGVtZW50OiBDb250ZXh0U3RlcHBlciB8IG51bGwgPSBudWxsO1xuICAgICAgICBjb25zdCBzdGVwcGVyID0gdGhpcy5nZXRUb3BFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIHN0YXZlIH0gPSBzdGVwcGVyO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdGVwcGVyLmV4ZWMoKTtcbiAgICAgICAgY29uc3Qgc3RpbGxDb250aW51ZSA9IHN0ZXBwZXIubW92ZSh7XG4gICAgICAgICAgICBiYWc6IHRoaXMuI2JhZyxcbiAgICAgICAgICAgIHB1c2g6IChlbGVtZW50OiBDb250ZXh0U3RlcHBlcikgPT4geyBuZXdFbGVtZW50ID0gZWxlbWVudDsgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzdGlsbENvbnRpbnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0U3RlcHBlciA9IHRoaXMuI3N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgY29udGV4dFN0ZXBwZXIub25FbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiNzdGFjay5wdXNoKG5ld0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhbHQ6IHRoaXMuI3N0YWNrLmxlbmd0aCA9PSAwLFxuICAgICAgICAgICAgc3RhdmUsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRvcEVsZW1lbnQoKTogQ29udGV4dFN0ZXBwZXIge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhY2tbdGhpcy4jc3RhY2subGVuZ3RoIC0gMV07XG4gICAgfVxufSIsImltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgRmlndXJlLCBDaXJjbGUsIEFyYywgUmVjdGFuZ2xlLCBUcmlhbmdsZSwgTGluZSwgU3R5bGUgfSBmcm9tIFwiQC9jb3JlL2ZpZ3VyZXNcIjtcbmltcG9ydCB7IFBvbHlnb24sIExpbmVDdXJ2ZSwgQXJjQ3VydmUgfSBmcm9tIFwiQC9jb3JlL2ZpZ3VyZXNcIjtcblxuY29uc3QgTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3I6IElDdXJzb3IpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJzdmdcIik7XG4gICAgbGV0IFttaW5feCwgbWluX3ldID0gY3Vyc29yLmJveC5taW47XG4gICAgbGV0IFttYXhfeCwgbWF4X3ldID0gY3Vyc29yLmJveC5tYXg7XG4gICAgbWluX3ggLT0gMTA7XG4gICAgbWluX3kgLT0gMTA7XG4gICAgbWF4X3ggKz0gMTA7XG4gICAgbWF4X3kgKz0gMTA7XG4gICAgY29uc3Qgd2lkdGggPSBtYXhfeCAtIG1pbl94O1xuICAgIGNvbnN0IGhlaWdodCA9IG1heF95IC0gbWluX3k7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYCR7bWluX3h9ICR7bWluX3l9ICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICAgIGN1cnNvci5maWd1cmVzLmZvckVhY2goZmlndXJlID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRvU3ZnKGRvY3VtZW50LCBmaWd1cmUpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN2Zztcbn1cblxuY29uc3QgU1FSVDNIMiA9IE1hdGguc3FydCgzKSAvIDI7XG5jb25zdCBIMiA9IDEgLyAyO1xuXG5mdW5jdGlvbiB0b1N2Zyhkb2N1bWVudCwgZmlndXJlOiBGaWd1cmUpIHtcbiAgICBpZiAoZmlndXJlIGluc3RhbmNlb2YgTGluZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJsaW5lXCIpO1xuICAgICAgICBjb25zdCBbeDEsIHkxXSA9IGZpZ3VyZS5maXJzdFBvaW50O1xuICAgICAgICBjb25zdCBbeDIsIHkyXSA9IGZpZ3VyZS5zZWNvbmRQb2ludDtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB4MSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTFcIiwgeTEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIngyXCIsIHgyKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB5Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGZpZ3VyZS5zdHlsZS5jb2xvciB8fCBcImJsYWNrXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBmaWd1cmUuc3R5bGUuc3Ryb2tlICE9PSB1bmRlZmluZWQgPyBmaWd1cmUuc3R5bGUuc3Ryb2tlIDogMSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgUG9seWdvbikge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGxldCBwYXRoID0gYE0gJHt4fSAke3l9YDtcblxuICAgICAgICBmaWd1cmUuY3VydmVzLmZvckVhY2goY3VydmUgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnZlIGluc3RhbmNlb2YgTGluZUN1cnZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBjdXJ2ZS5kZWx0YTtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAgbCAke2R4fSAke2R5fWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnZlIGluc3RhbmNlb2YgQXJjQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByID0gY3VydmUucmFkaXVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBjdXJ2ZS5zaGlmdCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGN1cnZlLnNoaWZ0ICsgY3VydmUucmF0aW8pICogMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSByICogKE1hdGguY29zKGVuZEFuZ2xlKSAtIE1hdGguY29zKHN0YXJ0QW5nbGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9IHIgKiAoTWF0aC5zaW4oZW5kQW5nbGUpIC0gTWF0aC5zaW4oc3RhcnRBbmdsZSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWcxID0gTWF0aC5hYnMoY3VydmUucmF0aW8pIDw9IDAuNSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZzIgPSBjdXJ2ZS5yYXRpbyA8PSAwLjAgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYCBhICR7cn0gJHtyfSAwICR7ZmxhZzF9ICR7ZmxhZzJ9ICR7ZHh9ICR7ZHl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpZ3VyZS5jbG9zZSkge1xuICAgICAgICAgICAgcGF0aCArPSBgIEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIENpcmNsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJjaXJjbGVcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCB4KTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCB5KTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIGZpZ3VyZS5yYWRpdXMpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgQXJjKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgciA9IGZpZ3VyZS5yYWRpdXM7XG4gICAgICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBmaWd1cmUuc2hpZnQgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgZW5kQW5nbGUgPSAoZmlndXJlLnNoaWZ0ICsgZmlndXJlLnJhdGlvKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzdGFydF94ID0geCArIHIgKiBNYXRoLmNvcyhzdGFydEFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeSA9IHkgKyByICogTWF0aC5zaW4oc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGVuZF94ID0geCArIHIgKiBNYXRoLmNvcyhlbmRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGVuZF95ID0geSArIHIgKiBNYXRoLnNpbihlbmRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGZsYWcxID0gTWF0aC5hYnMoZmlndXJlLnJhdGlvKSA8PSAwLjUgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBjb25zdCBmbGFnMiA9IGZpZ3VyZS5yYXRpbyA8PSAwLjAgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBsZXQgcGF0aCA9IGBNICR7c3RhcnRfeH0gJHtzdGFydF95fWA7XG4gICAgICAgIHBhdGggKz0gYCBBICR7cn0gJHtyfSAwICR7ZmxhZzF9ICR7ZmxhZzJ9ICR7ZW5kX3h9ICR7ZW5kX3l9YDtcbiAgICAgICAgaWYgKGZpZ3VyZS5jbG9zZSkge1xuICAgICAgICAgICAgcGF0aCArPSBgTCAke3h9ICR7eX0gWmA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgVyA9IGZpZ3VyZS53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IEggPSBmaWd1cmUuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4IC0gVyAqIGR4IC0gSCAqIGR5fSAke3kgKyBIICogZHggLSBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gVyAqIGR4ICsgSCAqIGR5fSAke3kgLSBIICogZHggLSBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgVyAqIGR4ICsgSCAqIGR5fSAke3kgLSBIICogZHggKyBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgVyAqIGR4IC0gSCAqIGR5fSAke3kgKyBIICogZHggKyBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBUcmlhbmdsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemU7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCArIFMgKiBkeH0gJHt5ICsgUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgKyBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgLSBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2V0QmFzaWNBdHRycyhzdHlsZTogU3R5bGUsIG5vZGUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgc3R5bGUuZmlsbCB8fCBcImJsYWNrXCIpO1xuICAgIGlmIChzdHlsZS5zdHJva2UgIT09IHVuZGVmaW5lZCAmJiBzdHlsZS5zdHJva2UgPiAwKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHN0eWxlLmNvbG9yIHx8IFwibm9uZVwiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgYCR7c3R5bGUuc3Ryb2tlfWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZhbHVlTm9kZSwgQWN0aW9uTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IE11bHRpcGxlciwgQW5nbGUsIEFyZ3VtZW50LCBEeW5hbWljQXJndW1lbnQgfSBmcm9tIFwiQC9jb3JlL2FzdC92YWx1ZXNcIjtcbmltcG9ydCB7IFNoYXBlIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IFRva2Vuc01hcCB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gXCJAL2NvcmUvYXN0L2NvbG9yc1wiO1xuaW1wb3J0ICogYXMgc3Ryb2tlcyBmcm9tIFwiQC9jb3JlL2FzdC9zdHJva2VzXCI7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSBcIkAvY29yZS9hc3Qvb3BzXCI7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNiID0gKHZhbHVlczogVmFsdWVOb2RlW10pID0+IEFjdGlvbk5vZGU7XG5leHBvcnQgdHlwZSBWYWx1ZUNiID0gKCkgPT4gVmFsdWVOb2RlO1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIGlzQWN0aW9uOiBib29sZWFuO1xuICAgIGlzRHluYW1pYzogYm9vbGVhbjtcbiAgICBmYWN0b3J5OiBBY3Rpb25DYiB8IFZhbHVlQ2I7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlzQWN0aW9uLCBpc0R5bmFtaWMsIGZhY3RvcnkgfSkge1xuICAgICAgICB0aGlzLmlzQWN0aW9uID0gaXNBY3Rpb247XG4gICAgICAgIHRoaXMuaXNEeW5hbWljID0gaXNEeW5hbWljO1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoZmFjdG9yeTogVmFsdWVDYiwgaXNEeW5hbWljID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IGZhbHNlLCBpc0R5bmFtaWMsIGZhY3RvcnkgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihmYWN0b3J5OiBBY3Rpb25DYikge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogdHJ1ZSwgaXNEeW5hbWljOiB0cnVlLCBmYWN0b3J5IH0pO1xufVxuXG5leHBvcnQgY29uc3QgVE9LRU5TOiBUb2tlbnNNYXA8VG9rZW4+ID0ge1xuICAgIC8vICoqKiBWYWx1ZXMgKioqXG4gICAgLy8gQ291bnRzXG4gICAgQ09VTlRfMTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxKSksXG4gICAgQ09VTlRfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyKSksXG4gICAgQ09VTlRfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzKSksXG4gICAgQ09VTlRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig1KSksXG4gICAgQ09VTlRfNzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig3KSksXG4gICAgLy8gQ291bnRzIChzcGVjaWFsKVxuICAgIENPVU5UX01JTlVTOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKC0xKSksXG4gICAgQ09VTlRfR09MRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxLjYxODAzMzk4OSkpLFxuICAgIENPVU5UX1NJTFZFUjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyLjQxNDIxMzU2MikpLFxuICAgIENPVU5UX0JST05aRTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzLjMwMjc3NTYzOCkpLFxuICAgIENPVU5UX1BMQVNUSUM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMS4zMjQ3MTc5NTcyKSksXG4gICAgLy8gRnJhY3Rpb25zXG4gICAgRlJBQ1RfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAyKSksXG4gICAgRlJBQ1RfMV8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAzKSksXG4gICAgRlJBQ1RfMl8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIgLyAzKSksXG4gICAgRlJBQ1RfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA0KSksXG4gICAgRlJBQ1RfM180OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMgLyA0KSksXG4gICAgRlJBQ1RfMV81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA1KSksXG4gICAgRlJBQ1RfMl81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIgLyA1KSksXG4gICAgRlJBQ1RfM181OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMgLyA1KSksXG4gICAgRlJBQ1RfNF81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDQgLyA1KSksXG4gICAgLy8gQW5nbGVzXG4gICAgQU5HTEVfMjcwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMjcwKSksXG4gICAgQU5HTEVfMTgwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTgwKSksXG4gICAgQU5HTEVfOTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg5MCkpLFxuICAgIEFOR0xFXzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNjApKSxcbiAgICBBTkdMRV80NTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDQ1KSksXG4gICAgQU5HTEVfMzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzMCkpLFxuICAgIEFOR0xFXzE1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTUpKSxcbiAgICBBTkdMRV8xMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDEwKSksXG4gICAgLy8gQ29sb3JzXG4gICAgQ09MT1JfTUFYOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1heENvbG9yKCkpLFxuICAgIENPTE9SX01JTjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NaW5Db2xvcigpKSxcbiAgICBDT0xPUl9TSElGVF8xXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMikpLFxuICAgIENPTE9SX1NISUZUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA0KSksXG4gICAgQ09MT1JfU0hJRlRfMV81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDUpKSxcbiAgICBDT0xPUl9TSElGVF8xXzEwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDEwKSksXG4gICAgQ09MT1JfRklMTDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5GaWxsQ29sb3IoKSksXG4gICAgQ09MT1JfRU1QVFk6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuRW1wdHlDb2xvcigpKSxcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwic29saWRcIikpLFxuICAgIFNUUk9LRV9EQVNIRUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZGFzaGVkXCIpKSxcbiAgICBTVFJPS0VfRE9UVEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRvdHRlZFwiKSksXG4gICAgU1RST0tFX1RISUNLX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoKzAuMjUpKSxcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygtMC4yNSkpLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBPUF9NVUxUOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLk11bHRPcCgpKSxcbiAgICBPUF9BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuQWRkT3AoKSksXG4gICAgT1BfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLlN1Yk9wKCkpLFxuICAgIC8vIEFyZ3VtZW50c1xuICAgIEFSR1VNRU5UOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQXJndW1lbnQoKSksXG4gICAgQ0FMTF9ESUFNT05EOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiRElBTU9ORFwiKSwgdHJ1ZSksXG4gICAgQ0FMTF9JTlZfVFJJQU5HTEU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJJTlZfVFJJQU5HTEVcIiksIHRydWUpLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIENBTExfRjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkZcIiwgdikpLFxuICAgIENBTExfRzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkdcIiwgdikpLFxuICAgIENBTExfSDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkhcIiwgdikpLFxuICAgIC8vIENsb3NlIENhbGxlcnNcbiAgICBDTE9TRV9DQUxMX0Y6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNsb3NlQ2FsbChcIkZcIiwgdikpLFxuICAgIENMT1NFX0NBTExfRzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2xvc2VDYWxsKFwiR1wiLCB2KSksXG4gICAgQ0xPU0VfQ0FMTF9IOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DbG9zZUNhbGwoXCJIXCIsIHYpKSxcbiAgICAvLyBTaGFwZXNcbiAgICBEUkFXX0NJUkNMRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0ZpZ3VyZSh2LCBTaGFwZS5DaXJjbGUpKSxcbiAgICBEUkFXX1NRVUFSRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0ZpZ3VyZSh2LCBTaGFwZS5TcXVhcmUpKSxcbiAgICBEUkFXX1RSSUFOR0xFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3RmlndXJlKHYsIFNoYXBlLlRyaWFuZ2xlKSksXG4gICAgLy8gTGluZVxuICAgIERSQVdfTElORTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0xpbmUodikpLFxuICAgIC8vIEFyY1xuICAgIERSQVdfQVJDTElORV9SXzNfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzMgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMl8zOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMiAvIDMsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMiwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV80OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gNSwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzNfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTMgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMl8zOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMiAvIDMsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMiwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV80OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gNSwgdikpLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBNT1ZFX0ZPUldBUkQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVGb3J3YXJkKHYpKSxcbiAgICBNT1ZFX0JBQ0tXQVJEOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlQmFja3dhcmQodikpLFxuICAgIE1PVkVfTEVGVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUxlZnQodikpLFxuICAgIE1PVkVfUklHSFQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVSaWdodCh2KSksXG4gICAgLy8gQ3Vyc29yIHJvdGF0aW9uc1xuICAgIFJPVEFURV9MRUZUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVMZWZ0KHYpKSxcbiAgICBST1RBVEVfUklHSFQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJvdGF0ZVJpZ2h0KHYpKSxcbiAgICAvLyBDdXJzb3IgZmxpcFxuICAgIEZMSVBfVjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRmxpcFZlcnRpY2FsbHkodikpLFxuICAgIEZMSVBfSDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRmxpcEhvcml6b250YWxseSh2KSksXG5cbiAgICAvLyBSZXBldGV0aXZlIGFjdGlvbnNcbiAgICBSRVZFUlNFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2KSksXG4gICAgUkVQTEFZXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAyKSksXG4gICAgUkVQTEFZXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAzKSksXG4gICAgUkVQTEFZXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCA0KSksXG59O1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9VUkwgPSBgJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL2A7XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5pbXBvcnQgeyBDb2RlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb2RlXCI7XG5pbXBvcnQgeyBEb2NCYXJWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2RvY0JhclwiO1xuaW1wb3J0IHsgVGl0bGVWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL3RpdGxlXCI7XG5pbXBvcnQgeyBDb21tZW50VmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb21tZW50XCI7XG5pbXBvcnQgeyBJbWFnZVZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvaW1hZ2VcIjtcbmltcG9ydCB7IFN0YXZlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9zdGF2ZVwiO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL3dlYi9tb2RlbHNcIjtcbmltcG9ydCB7IGV4ZWMsIHNldHVwRXhlYyB9IGZyb20gXCJAL2NvcmUvZXhlY1wiO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUdXRBbmltUGFyYW1zIHtcbiAgICBzdGF2ZXM6IHN0cmluZ1tdO1xuICAgIGl0ZXJhdGlvbnM6IG51bWJlcixcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHRva2Vuczogc3RyaW5nW10sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub2RlSWQ6IHN0cmluZyxcbn1cblxuXG5leHBvcnQgY2xhc3MgRG9jc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGltYWdlVmlldzogSW1hZ2VWaWV3O1xuICAgIHByaXZhdGUgY29kZVZpZXc6IENvZGVWaWV3O1xuICAgIHByaXZhdGUgZG9jQmFyVmlldzogRG9jQmFyVmlldztcbiAgICBwcml2YXRlIGNvbW1lbnRWaWV3OiBDb21tZW50VmlldztcbiAgICBwcml2YXRlIHRpdGxlVmlldzogVGl0bGVWaWV3O1xuXG4gICAgcHJpdmF0ZSBpdGVyYXRpb25zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogVHV0QW5pbVBhcmFtcywgaWNvblVybDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtcy5ub2RlSWQpKTtcbiAgICAgICAgdGhpcy5pbml0UmVuZGVyKHBhcmFtcyk7XG5cbiAgICAgICAgdGhpcy5pdGVyYXRpb25zID0gcGFyYW1zLml0ZXJhdGlvbnM7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG5cbiAgICAgICAgdGhpcy5pbWFnZVZpZXcgPSBuZXcgSW1hZ2VWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWltYWdlXCIpKTtcbiAgICAgICAgdGhpcy50aXRsZVZpZXcgPSBuZXcgVGl0bGVWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LXRpdGxlXCIpLCBwYXJhbXMudGl0bGUpO1xuICAgICAgICB0aGlzLmNvbW1lbnRWaWV3ID0gbmV3IENvbW1lbnRWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWNvbW1lbnRcIikpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcgPSBuZXcgRG9jQmFyVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1iYXJcIiksXG4gICAgICAgICAgICBuZXh0OiB0aGlzLm5leHQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHByZXY6IHRoaXMucHJldi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2RlVmlldyA9IG5ldyBDb2RlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1zdGF2ZXNcIiksXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvbkRyb3A6IG51bGwsXG4gICAgICAgICAgICAgICAgb25Nb3ZlOiBudWxsLFxuICAgICAgICAgICAgICAgIG9uRHJhZ1RpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2FuRHJhZzogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uVXJsLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKHBhcmFtcy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICB0aXRsZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRpdGxlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRpdGxlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGltYWdlTm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtaW1hZ2VcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaW1hZ2VOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBzdGF2ZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgc3RhdmVzTm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3Qtc3RhdmVzXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHN0YXZlc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1jb21tZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBiYXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWJhclwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChiYXJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdmVCYWc6IFN0YXZlW10gPSBwYXJhbXMuc3RhdmVzLm1hcChzdGF2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4ID0gXCJcIl0gPSBzdGF2ZS5zcGxpdChcIjo6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvZGVWaWV3LnJlbmRlcihzdGF2ZUJhZyk7XG4gICAgICAgIHRoaXMuZG9jQmFyVmlldy5yZW5kZXIodGhpcy5wb3NpdGlvbiwgdGhpcy50b2tlbnMubGVuZ3RoLCB0aGlzLml0ZXJhdGlvbnMpO1xuICAgICAgICB0aGlzLnRpdGxlVmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jb21tZW50Vmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tbWVudCgpO1xuICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcudXBkYXRlKHRoaXMucG9zaXRpb24sIHRoaXMudG9rZW5zLmxlbmd0aCwgdGhpcy5pdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBpdGVyYXRlVG9Qb3NpdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMuc3RhcnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZFeGVjdXRlKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gLT0gMTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzY3JhcGVBbmRSdW4oKSB7XG4gICAgICAgIGNvbnN0IGN1cnNvckNmZyA9IHt9O1xuICAgICAgICBjb25zdCBhcmd1bWVudCA9IDEuMDtcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuY29kZVZpZXcuc2NyYXBlQ29kZSgpO1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGN1cnNvckNmZyk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gc2V0dXBFeGVjKGFyZ3VtZW50LCB0aGlzLml0ZXJhdGlvbnMsIGNvZGUsIGN1cnNvcik7XG4gICAgICAgIGV4ZWMoc3RhY2spO1xuICAgICAgICB0aGlzLmltYWdlVmlldy5yZW5kZXIoY3Vyc29yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3N0YXZlLCB0b2tlbl0gPSBjb21tYW5kLnNwbGl0KFwiQFwiLCAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb2tlbk9uQmFjayhzdGF2ZSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC5zdWJzdHJpbmcoMSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfSU5DXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfREVDXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXZFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xpbmVdID0gY29tbWFuZC5zcGxpdChcIkBcIiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMYXN0VG9rZW4obGluZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9JTkNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9ERUNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJOT1BcIjogYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcihgJHtjb21tYW5kfSBub3QgZm91bmRgKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tbWFuZHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjb21tYW5kV2l0aENvbW1lbnQgPSB0aGlzLnRva2Vuc1t0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgY29uc3QgW3Jhd0NvbW1hbmRzXSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMSk7XG4gICAgICAgIHJldHVybiByYXdDb21tYW5kcy5zcGxpdChcIixcIikubWFwKHJhd0NvbW1hbmQgPT4gcmF3Q29tbWFuZC50cmltKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFssIHJhd0NvbW1lbnRdID0gY29tbWFuZFdpdGhDb21tZW50LnNwbGl0KFwiI1wiLCAyKTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQgPyByYXdDb21tZW50LnRyaW0oKSA6IFwiXCI7XG4gICAgICAgIHRoaXMuY29tbWVudFZpZXcucmVuZGVyKGNvbW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuT25CYWNrKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGFzdFRva2VuKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZyk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxTdGF2ZU5hbWUoZnVsbFN0YXZlTmFtZSk7XG4gICAgICAgIGNvbnN0IHN0YXZlID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgaWYgKHN0YXZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IGBzdGF2ZSBub3QgZm91bmQ6ICR7ZnVsbFN0YXZlTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF2ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwbGl0RnVsbFN0YXZlTmFtZShmdWxsU3RhdmVOYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBmdWxsU3RhdmVOYW1lLnNwbGl0KFwiOjpcIiwgMik7XG4gICAgICAgIHJldHVybiBbbmFtZSwgc3VmZml4IHx8IFwiXCJdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2Vuc0tleSB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5TOiBUb2tlbkluZm9bXSA9IFtcbiAgICB7bmFtZTogJ0FSR1VNRU5UJywgbGFiZWw6ICdBcmd1bWVudCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDQUxMX0lOVl9UUklBTkdMRScsIGxhYmVsOiAnSW52ZXJzZSB0cmlhbmdsZScsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDQUxMX0YnLCBsYWJlbDogJ0YgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0cgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0gnLCBsYWJlbDogJ0ggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfRicsIGxhYmVsOiAnRiBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfRycsIGxhYmVsOiAnRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfSCcsIGxhYmVsOiAnSCBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19MSU5FJywgbGFiZWw6ICdMaW5lJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdEUkFXX0NJUkNMRScsIGxhYmVsOiAnQ2lyY2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19TUVVBUkUnLCBsYWJlbDogJ1NxdWFyZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfVFJJQU5HTEUnLCBsYWJlbDogJ1RyaWFuZ2xlJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8zXzQnLCBsYWJlbDogJ0FyYyAzLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzJfMycsIGxhYmVsOiAnQXJjIDIvMyAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8yJywgbGFiZWw6ICdBcmMgMS8yIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzMnLCBsYWJlbDogJ0FyYyAxLzMgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfNCcsIGxhYmVsOiAnQXJjIDEvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV81JywgbGFiZWw6ICdBcmMgMS81IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8zXzQnLCBsYWJlbDogJ0FyYyAzLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMl8zJywgbGFiZWw6ICdBcmMgMi8zIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfMicsIGxhYmVsOiAnQXJjIDEvMiAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzMnLCBsYWJlbDogJ0FyYyAxLzMgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV80JywgbGFiZWw6ICdBcmMgMS80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNScsIGxhYmVsOiAnQXJjIDEvNSAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ01PVkVfRk9SV0FSRCcsIGxhYmVsOiAnTW92ZSBmb3J3YXJkJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnTU9WRV9CQUNLV0FSRCcsIGxhYmVsOiAnTW92ZSBiYWNrd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfTEVGVCcsIGxhYmVsOiAnTW92ZSBsZWZ0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnTU9WRV9SSUdIVCcsIGxhYmVsOiAnTW92ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JPVEFURV9MRUZUJywgbGFiZWw6ICdSb3RhdGUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JPVEFURV9SSUdIVCcsIGxhYmVsOiAnUm90YXRlIHJpZ2h0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRkxJUF9WJywgbGFiZWw6ICdGbGlwIFZlcnRpY2FsbHknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdGTElQX0gnLCBsYWJlbDogJ0ZsaXAgSG9yaXpvbnRhbGx5JywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdSRVZFUlNFJywgbGFiZWw6ICdSZXZlcnNlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZJywgbGFiZWw6ICdSZXBsYXkgdGhlIGxhc3QgYWN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZXzInLCBsYWJlbDogJ1JlcGxheSB0aGUgdHdvIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV8zJywgbGFiZWw6ICdSZXBsYXkgdGhlIHRocmVlIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV80JywgbGFiZWw6ICdSZXBsYXkgdGhlIGZvdXIgbGFzdCBhY3Rpb25zJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdDT1VOVF8xJywgbGFiZWw6ICdPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzInLCBsYWJlbDogJ1R3bycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfMycsIGxhYmVsOiAnVGhyZWUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzUnLCBsYWJlbDogJ0ZpdmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzcnLCBsYWJlbDogJ1NldmVuJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0NPVU5UX01JTlVTJywgbGFiZWw6ICdNaW51cyBPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX0dPTEQnLCBsYWJlbDogJ0dvbGRlbiBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfU0lMVkVSJywgbGFiZWw6ICdTaWx2ZXIgUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX0JST05aRScsIGxhYmVsOiAnQnJvbnplIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9QTEFTVElDJywgbGFiZWw6ICdQbGFzdGljIE51bWJlcicsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdGUkFDVF8xXzInLCBsYWJlbDogJ0hhbGYnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfMycsIGxhYmVsOiAnT25lIFRoaXJkJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8yXzMnLCBsYWJlbDogJ1R3byBUaGlyZHMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfNCcsIGxhYmVsOiAnT25lIFF1YXJ0ZXInLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfNScsIGxhYmVsOiAnT25lIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8yXzUnLCBsYWJlbDogJ1R3byBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfM181JywgbGFiZWw6ICdUaHJlZSBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfNF81JywgbGFiZWw6ICdGb3VyIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0FOR0xFXzI3MCcsIGxhYmVsOiAnMjcwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzE4MCcsIGxhYmVsOiAnMTgwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzkwJywgbGFiZWw6ICc5MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV82MCcsIGxhYmVsOiAnNjDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfNDUnLCBsYWJlbDogJzQ1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzMwJywgbGFiZWw6ICczMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xNScsIGxhYmVsOiAnMTXCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTAnLCBsYWJlbDogJzEwwrAnLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnT1BfTVVMVCcsIGxhYmVsOiAnTXVsdGlwbGUgb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ09QX0FERCcsIGxhYmVsOiAnQWRkaXRpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ09QX1NVQicsIGxhYmVsOiAnU3VidHJhY3Rpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX01BWCcsIGxhYmVsOiAnU2Vjb25kIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9NSU4nLCBsYWJlbDogJ0ZpcnN0IENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9GSUxMJywgbGFiZWw6ICdGaWxsZWQgRmlndXJlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9FTVBUWScsIGxhYmVsOiAnVHJhbnNwYXJlbnQgRmlndXJlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzInLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV80JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNScsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzEwJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ1NUUk9LRV9USElDS19BREQnLCBsYWJlbDogJ1RoaWNrIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnU1RST0tFX1RISUNLX1NVQicsIGxhYmVsOiAnVGhpbiBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbl07XG5cbmV4cG9ydCBjb25zdCBOQU1FX1RPX1RPS0VOID0gbmV3IE1hcDxzdHJpbmcsIFRva2VuSW5mbz4oXG4gICAgVE9LRU5TLm1hcCh0b2tlbiA9PiBbdG9rZW4ubmFtZSwgdG9rZW5dKVxuKTtcbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZSc7XG5pbXBvcnQgeyBDYWxsYmFja3MgfSBmcm9tIFwiLi90b2tlblwiO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIENvZGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdGF2ZVZpZXdzOiBTdGF2ZVZpZXdbXTtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQ2FsbGJhY2tzO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybD86IHN0cmluZyxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKHN0YXZlczogU3RhdmVbXSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cyA9IHN0YXZlcy5tYXAodGhpcy5jcmVhdGVTdGF2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBmaW5kU3RhdmUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IFN0YXZlVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXZlVmlld3MuZmluZCh2aWV3ID0+IHZpZXcuY2hlY2tOYW1lKG5hbWUsIHN1ZmZpeCkpO1xuICAgIH1cblxuICAgIGFkZFN0YXZlKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IHN1ZmZpeDogc3RyaW5nOyB0b2tlbnM6IHN0cmluZ1tdIH0pIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuY3JlYXRlU3RhdmUoe1xuICAgICAgICAgICAgbmFtZTogcGFyYW1zLm5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHBhcmFtcy5zdWZmaXgsXG4gICAgICAgICAgICB0b2tlbnM6IHBhcmFtcy50b2tlbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBzY3JhcGVDb2RlKCk6IFN0YXZlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF2ZVZpZXdzLmZpbHRlcih2aWV3ID0+IHZpZXcuY291bGRCZVNjcmFwZWQoKSkubWFwKHZpZXcgPT4gdmlldy5zY3JhcGUoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0YXZlKHsgbmFtZSwgc3VmZml4LCB0b2tlbnMgfSk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFN0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4IHx8IFwiXCIsXG4gICAgICAgICAgICBpY29uVXJsOiB0aGlzLmljb25VcmwsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHRoaXMuY2FsbGJhY2tzLFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWNvbW1lbnRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKGNvbW1lbnQ6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmlubmVyVGV4dCA9IGNvbW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIERvY0JhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIG5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBwcmV2OiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIG5leHQsIHByZXZ9OiB7bm9kZTogSFRNTEVsZW1lbnQsIG5leHQ6ICgpID0+IHZvaWQsIHByZXY6ICgpID0+IHZvaWR9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWJhclwiKTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB9XG5cbiAgICByZW5kZXIocG9zaXRpb246IG51bWJlciwgdG9rZW5TaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlcikge1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIsKrIFBSRVZcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwicHJldlwiO1xuICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wcmV2KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIk5FWFQgwrtcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5uZXh0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVyVGV4dCA9IFwiSXRlcmF0aW9uczpcIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGl0Tm9kZS50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIGl0Tm9kZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBpdE5vZGUubmFtZSA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGl0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShwb3NpdGlvbiwgdG9rZW5TaXplLCBpdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocG9zaXRpb246IG51bWJlciwgdG9rZW5TaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIm5leHRcIikuZGlzYWJsZWQgPSBwb3NpdGlvbiA+PSB0b2tlblNpemUgLSAxO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcInByZXZcIikuZGlzYWJsZWQgPSBwb3NpdGlvbiA8PSAwO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIml0ZXJhdGlvbnNcIikudmFsdWUgPSBpdGVyYXRpb25zLnRvRml4ZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRJbnB1dChuYW1lOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IGNyZWF0ZVN2ZyB9IGZyb20gXCJAL2NvcmUvc3ZnXCI7XG5pbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcblxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyBleHRlbmRzIFZpZXcge1xuXG4gICAgcmVuZGVyKGN1cnNvcjogSUN1cnNvciwgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IgPyBiYWNrZ3JvdW5kQ29sb3IgOiBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XG5cbmltcG9ydCB7IFRva2Vuc1N0YXZlVmlldyB9IGZyb20gJy4vc3RhdmVUb2tlbic7XG5cbmltcG9ydCB7IFN0YXZlIH0gZnJvbSAnQC93ZWIvbW9kZWxzJztcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdmVWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSB0b2tlblZpZXc6IFRva2Vuc1N0YXZlVmlld1xuICAgIHByaXZhdGUgdG9rZW5zTm9kZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdWZmaXg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgbm9kZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3VmZml4LFxuICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMLFxuICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICAgICAgdGhpcy50b2tlbnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy50b2tlblZpZXcgPSBuZXcgVG9rZW5zU3RhdmVWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IHRoaXMudG9rZW5zTm9kZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICBpY29uVXJsLFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwic3RhdmVcIik7XG4gICAgICAgIHRoaXMubm9kZS5kYXRhc2V0Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHRoaXMuc3VmZml4O1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVOYW1lKHRoaXMubmFtZSwgdGhpcy5zdWZmaXgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMudG9rZW5zTm9kZSk7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIGNoZWNrTmFtZShuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWUgJiYgdGhpcy5zdWZmaXggPT09IHN1ZmZpeDtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHNob3dPckhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5BZnRlcih0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnB1c2hUb2tlbkFmdGVyKHRva2VuLCBpbmRleCk7XG4gICAgfVxuXG4gICAgcmVwbGFjZVRva2VuKG5ld1Rva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVwbGFjZVRva2VuKG5ld1Rva2VuLCBpbmRleCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW4oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW1vdmVUb2tlbihpbmRleCk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuT25CYWNrKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucHVzaFRva2VuT25CYWNrKHRva2VuKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbk9uQmFjaygpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlVG9rZW5PbkJhY2soKTtcbiAgICB9XG5cbiAgICBjb3VsZEJlU2NyYXBlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgaXNIaWRlID0gdGhpcy5ub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIik7XG4gICAgICAgIHJldHVybiAhaXNIaWRlO1xuICAgIH1cblxuICAgIHNjcmFwZSgpOiBTdGF2ZSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5WaWV3LnNjcmFwZVRva2VucygpO1xuICAgICAgICBjb25zdCB7bmFtZSwgc3VmZml4fSA9IHRoaXMubm9kZS5kYXRhc2V0O1xuICAgICAgICByZXR1cm4ge25hbWUsIHN1ZmZpeCwgdG9rZW5zfTtcbiAgICB9XG5cbiAgICBhZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcuYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZywgYWN0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZUZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW1vdmVGbGFnT25BY3Rpb25Ub2tlbihmbGFnLCBhY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg/OiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgICAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9XyR7c3VmZml4fWAgOiBuYW1lO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9L0NBTExfJHtyZWFsbmFtZX0uc3ZnKWA7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2Vuc1ZpZXcgfSBmcm9tICcuL3Rva2VuJztcblxuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNTdGF2ZVZpZXcgZXh0ZW5kcyBUb2tlbnNWaWV3IHtcbiAgICBwcml2YXRlIHRva2Vuczogc3RyaW5nW107XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdWZmaXg6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgbm9kZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3VmZml4LFxuICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMLFxuICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBpY29uVXJsLFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbnNcIik7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJUb2tlbnMoKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVG9rZW5TcGFuTm9kZSgwKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjdGlvbkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMuZm9yRWFjaCgodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgYWN0aW9uSW5kZXggPSB0aGlzLnB1c2hUb2tlbk5vZGVPbkJhY2sodGhpcy5ub2RlLCB0b2tlbiwgaW5kZXgsIGFjdGlvbkluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5BZnRlcih0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMCwgdG9rZW4pO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlcGxhY2VUb2tlbihuZXdUb2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zW2luZGV4XSA9IG5ld1Rva2VuO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5PbkJhY2sodG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbk9uQmFjaygpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucG9wKCk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwdXNoVG9rZW5Ob2RlT25CYWNrKHRva2Vuc05vZGU6IEhUTUxFbGVtZW50LCB0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhY3Rpb25JbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgYXBwZW5kU3BhbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBzID0gMSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlblNwYW5Ob2RlKGluZGV4ICsgcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwcGVuZENoaWxkID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG5vZGU6IEhUTUxFbGVtZW50LCBzID0gMSkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgYXBwZW5kU3Bhbihjb250YWluZXIsIHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRva2VuTm9kZSA9IHRoaXMuY3JlYXRlRW5oYW5jZWRUb2tlbk5vZGUodG9rZW4sIGluZGV4LCBhY3Rpb25JbmRleCk7XG4gICAgICAgIGxldCBsYXN0Tm9kZSA9IHRva2Vuc05vZGUubGFzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAvLyBwcm9iYWJseSBpdCdzIGEgc3BhbiwgZmluZCBwcmV2aW91cyBub2RlXG4gICAgICAgICAgICBsYXN0Tm9kZSA9IGxhc3ROb2RlLnByZXZpb3VzU2libGluZyBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJhY3QtdG9rZW4tZ3JvdXBcIik7XG4gICAgICAgIGNvbnN0IGlzQWN0aW9uID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLmRhdGFzZXQ/LnR5cGUgPT09IFwiYWN0aW9uXCI7XG5cbiAgICAgICAgaWYgKCFsYXN0Tm9kZSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleCArIChpc0FjdGlvbih0b2tlbk5vZGUpID8gMSA6IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQWN0aW9uKHRva2VuTm9kZSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXggKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzR3JvdXAobGFzdE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZChsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKGxhc3ROb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFNwYW4odG9rZW5zTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc0FjdGlvbihsYXN0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGdyb3VwIHdpdGggYWN0aW9uIGFuZCB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTm9kZSA9IHRoaXMuY3JlYXRlRW1wdHlUb2tlbkdyb3VwKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZChsYXN0Tm9kZSk7XG4gICAgICAgICAgICB0b2tlbnNOb2RlLmluc2VydEJlZm9yZShncm91cE5vZGUsIGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIGdyb3VwTm9kZS5kYXRhc2V0LmFjdGlvbkluZGV4ID0gbGFzdE5vZGUuZGF0YXNldC5hY3Rpb25JbmRleDtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGdyb3VwTm9kZSwgbGFzdE5vZGUsIDApO1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZ3JvdXBOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgYXBwZW5kU3Bhbih0b2tlbnNOb2RlKTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRW5oYW5jZWRUb2tlbk5vZGUodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlciwgYWN0aW9uSW5kZXg6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlVG9rZW5Ob2RlKHRva2VuKTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LmluZGV4ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgbm9kZS5kYXRhc2V0Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5vZGUuZGF0YXNldC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcbiAgICAgICAgaWYgKG5vZGUuZGF0YXNldD8udHlwZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgICAgbm9kZS5kYXRhc2V0LmFjdGlvbkluZGV4ID0gYCR7YWN0aW9uSW5kZXh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGRyYWdOb2RlID0gc3VwZXIuY3JlYXRlRHJhZ05vZGUobm9kZSk7XG4gICAgICAgIGRyYWdOb2RlLmRhdGFzZXQuaW5kZXggPSBub2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGRyYWdOb2RlLmRhdGFzZXQubmFtZSA9IG5vZGUuZGF0YXNldC5uYW1lO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LnN1ZmZpeCA9IG5vZGUuZGF0YXNldC5zdWZmaXg7XG4gICAgICAgIHJldHVybiBkcmFnTm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRW1wdHlUb2tlbkdyb3VwKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGl2XCIsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJmcmFjdC10b2tlbi1ncm91cFwiXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2NyYXBlVG9rZW5zKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVUb2tlblNwYW5Ob2RlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJmcmFjdC10b2tlbi1zcGFuXCJdLFxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LmluZGV4ID0gYCR7aW5kZXh9YDtcbiAgICAgICAgbm9kZS5kYXRhc2V0Lm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIG5vZGUuZGF0YXNldC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuUmVtb3ZlU3Bhbk5vZGUoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtdG9rZW4tc3BhblwiLCBcInJlbW92ZVwiKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufTtcblxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIFRpdGxlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQsIHRleHQ6IHN0cmluZykge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgTkFNRV9UT19UT0tFTiB9IGZyb20gXCJAL3dlYi90b2tlbnNcIjtcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxiYWNrcyB7XG4gICAgb25Ecm9wOiAoZDogSFRNTEVsZW1lbnQsIG86IEhUTUxFbGVtZW50KSA9PiB2b2lkIHwgbnVsbDtcbiAgICBvbk1vdmU6IChkOiBIVE1MRWxlbWVudCwgbzogSFRNTEVsZW1lbnQgfCBudWxsLCBuOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQgfCBudWxsO1xuICAgIG9uRHJhZ1RpbWVvdXQ6IChub2RlOiBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbjtcbiAgICBjYW5EcmFnOiAoKSA9PiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRva2Vuc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICByZWFkb25seSBpY29uVXJsOiBzdHJpbmc7XG4gICAgI2NhbGxiYWNrczogQ2FsbGJhY2tzXG5cbiAgICBjb25zdHJ1Y3Rvcih7IG5vZGUsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwgfToge1xuICAgICAgICBub2RlOiBIVE1MRWxlbWVudCxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3NcbiAgICAgICAgaWNvblVybD86IHN0cmluZyxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgZ2V0IGlzRHJhZ2dhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FsbGJhY2tzLm9uRHJvcCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXgpLmNsYXNzTGlzdC5hZGQoZmxhZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbmRUb2tlbk5vZGVCeUFjdGlvbkluZGV4KGFjdGlvbkluZGV4KS5jbGFzc0xpc3QucmVtb3ZlKGZsYWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXg6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgKltkYXRhLWFjdGlvbi1pbmRleD0nJHthY3Rpb25JbmRleH0nXWA7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuTm9kZSh0b2tlbjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogWydmcmFjdC10b2tlbiddLFxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnRva2VuID0gdG9rZW47XG4gICAgICAgIG5vZGUuZGF0YXNldC50eXBlID0gdG9rZW5JbmZvID8gdG9rZW5JbmZvLnR5cGUgOiBcInVua25vd25cIjtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS8ke3Rva2VufS5zdmcpYDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9rZW5FdmVudHMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBkcmFnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LmFkZCgnZnJhY3QtdG9rZW4nLCAnbW92ZScpO1xuICAgICAgICBkcmFnTm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC50b2tlbiA9IG5vZGUuZGF0YXNldC50b2tlbjtcbiAgICAgICAgcmV0dXJuIGRyYWdOb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW5FdmVudHMobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnTW91c2VTdGFydCwgZmFsc2UpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkcmFnVG91Y2hTdGFydCwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuI2NhbGxiYWNrcztcbiAgICAgICAgY29uc3QgY2FuRHJhZyA9ICgpID0+IGNhbGxiYWNrcy5jYW5EcmFnICYmICFjYWxsYmFja3MuY2FuRHJhZygpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbnRleHQgPSAoY29vcmRzQ2IpID0+XG4gICAgICAgICAgICBuZXcgRHJhZ0NvbnRleHQoXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5jcmVhdGVEcmFnTm9kZShub2RlKSwgXG4gICAgICAgICAgICAgICAgKCkgPT4gY2FsbGJhY2tzLm9uRHJhZ1RpbWVvdXQgIT09IG51bGwgPyBjYWxsYmFja3Mub25EcmFnVGltZW91dChub2RlKSA6IGZhbHNlLCBcbiAgICAgICAgICAgICAgICBjb29yZHNDYiwgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBkcmFnTW91c2VTdGFydChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChjYW5EcmFnKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChnZXRNb3VzZUNvb3Jkcyk7XG4gICAgICAgICAgICBjb250ZXh0LmluaXQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGNvbnRleHQuY3JlYXRlRHJhZ01vdmUoKSxcbiAgICAgICAgICAgICAgICBtb3VzZXVwOiBjb250ZXh0LmNyZWF0ZURyYWdTdG9wKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdUb3VjaFN0YXJ0KGV2ZW50OiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzLmNhbkRyYWcgJiYgIWNhbGxiYWNrcy5jYW5EcmFnKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChnZXRUb3VjaENvb3Jkcyk7XG4gICAgICAgICAgICBjb250ZXh0LmluaXQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGNvbnRleHQuY3JlYXRlRHJhZ01vdmUoKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVuZDogY29udGV4dC5jcmVhdGVEcmFnU3RvcCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZXh0LnVwZGF0ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRNb3VzZUNvb3JkcyhldmVudDogTW91c2VFdmVudCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICAgICAgcmV0dXJuIFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvdWNoQ29vcmRzKGV2ZW50OiBUb3VjaEV2ZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBEcmFnQ29udGV4dDxFdmVudFR5cGUgZXh0ZW5kcyBFdmVudD4ge1xuICAgIHByaXZhdGUgZHJhZ05vZGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIG92ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgcHJpdmF0ZSBpbml0aWFsQ29vcmRzOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcbiAgICBwcml2YXRlIGV2ZW50Q2FsbGJhY2tzOiB7IFtrOiBzdHJpbmddOiAoZTogRXZlbnRUeXBlKSA9PiB2b2lkIH07XG4gICAgcHJpdmF0ZSBfZ2V0Q29vcmRzOiAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4gW251bWJlciwgbnVtYmVyXTtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQ2FsbGJhY2tzO1xuICAgIHByaXZhdGUgY3JlYXRlRHJhZ05vZGU6ICgpID0+IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNyZWF0ZURyYWdOb2RlOiAoKSA9PiBIVE1MRWxlbWVudCxcbiAgICAgICAgb25UaW1lb3V0OiAoKSA9PiBib29sZWFuLFxuICAgICAgICBnZXRDb29yZHM6IChldmVudDogRXZlbnRUeXBlKSA9PiBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrcyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEcmFnTm9kZSA9IGNyZWF0ZURyYWdOb2RlO1xuICAgICAgICB0aGlzLmRyYWdOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVyTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRDYWxsYmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuX2dldENvb3JkcyA9IGdldENvb3JkcztcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZihvblRpbWVvdXQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEcmFnTW92ZSgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVEcmFnU3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdmVyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJvcCh0aGlzLmRyYWdOb2RlLCB0aGlzLm92ZXJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KGV2ZW50OiBFdmVudFR5cGUsIGV2ZW50Q2FsbGJhY2tzOiB7IFtrOiBzdHJpbmddOiAoZTogRXZlbnRUeXBlKSA9PiB2b2lkIH0pIHtcbiAgICAgICAgdGhpcy5pbml0aWFsQ29vcmRzID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrcyA9IGV2ZW50Q2FsbGJhY2tzXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRDYWxsYmFja3MpLmZvckVhY2goKFtuYW1lLCBjYl0pID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2IsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3Mub25Nb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbk1vdmUodGhpcy5kcmFnTm9kZSwgdGhpcy5vdmVyTm9kZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudENhbGxiYWNrcykuZm9yRWFjaCgoW25hbWUsIGNiXSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBjYiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGV2ZW50OiBFdmVudFR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ05vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmNvbXB1dGVyRGlzdGFuY2VUb0luaXRpYWxDb29yZHMoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gNSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ05vZGUgPSB0aGlzLmNyZWF0ZURyYWdOb2RlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdOb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVDb29yZHMoeCwgeSk7XG4gICAgICAgIGNvbnN0IG9sZE92ZXJOb2RlID0gdGhpcy5vdmVyTm9kZTtcbiAgICAgICAgY29uc3QgbmV3T3Zlck5vZGUgPSB0aGlzLmZpbmRPdmVyTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3Mub25Nb3ZlICYmICFPYmplY3QuaXMob2xkT3Zlck5vZGUsIG5ld092ZXJOb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Nb3ZlKHRoaXMuZHJhZ05vZGUsIG9sZE92ZXJOb2RlLCBuZXdPdmVyTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdmVyTm9kZSA9IG5ld092ZXJOb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcHV0ZXJEaXN0YW5jZVRvSW5pdGlhbENvb3JkcyhldmVudDogRXZlbnRUeXBlKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgY29uc3QgZHggPSB0aGlzLmluaXRpYWxDb29yZHNbMF0gLSB4O1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuaW5pdGlhbENvb3Jkc1sxXSAtIHk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29vcmRzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUuc3R5bGUubGVmdCA9IGAke3gudG9GaXhlZCgpfXB4YDtcbiAgICAgICAgdGhpcy5kcmFnTm9kZS5zdHlsZS50b3AgPSBgJHt5LnRvRml4ZWQoKX1weGA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kT3Zlck5vZGUoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY29kZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGVcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0V2Fsa2VyRmlsdGVyKCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29kZU5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCBmaWx0ZXIpO1xuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkgIT09IG51bGwpO1xuICAgICAgICByZXR1cm4gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2Fsa2VyRmlsdGVyKCkge1xuICAgICAgICBjb25zdCBWQUxJRF9DTEFTU0VTID0gWydmcmFjdC10b2tlbi1zcGFuJywgJ2ZyYWN0LXN0YXZlcycsICd0b2tlbnMnXTtcbiAgICAgICAgY29uc3QgZHJhZ1JlY3QgPSB0aGlzLmRyYWdOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJhZ1JlY3QucmlnaHQgPCByZWN0LmxlZnRcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QubGVmdCA+IHJlY3QucmlnaHRcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QuYm90dG9tIDwgcmVjdC50b3BcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QudG9wID4gcmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIVZBTElEX0NMQVNTRVMuc29tZShjID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGMpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29vcmRzKGV2ZW50OiBFdmVudFR5cGUpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgY29uc3QgbnggPSB4IC0gdGhpcy5kcmFnTm9kZS5jbGllbnRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG55ID0geSAtIHRoaXMuZHJhZ05vZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gW254LCBueV07XG4gICAgfVxuXG59OyIsImV4cG9ydCBjbGFzcyBWaWV3PEhUTUxUeXBlIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4ge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxUeXBlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJhbXM6IHtcbiAgICAgICAgbmFtZTogSztcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgICBvbmNsaWNrPzogKE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgICAgIHJlYWRvbmx5PzogYm9vbGVhbjtcbiAgICB9KTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLm5hbWUpO1xuICAgICAgICBpZiAocGFyYW1zLmNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi5wYXJhbXMuY2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9uY2xpY2spIHtcbiAgICAgICAgICAgIG5vZGUub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMub25jbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudHlwZSkge1xuICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9IHBhcmFtcy50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHBhcmFtcy50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVhZE9ubHkgPSBwYXJhbXMucmVhZG9ubHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IHBhcmFtcy50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRG9jc0NvbnRyb2xsZXIsIFR1dEFuaW1QYXJhbXMgfSBmcm9tIFwiLi9jb250cm9sbGVycy9kb2NzXCI7XG5cbmltcG9ydCBcIkAvc3R5bGUvZG9jcy5zY3NzXCI7XG5cbmNvbnN0IEFOSU1BVElPTlNfUEFSQU1TOiBUdXRBbmltUGFyYW1zW10gPSBbXTtcbmNvbnN0IENVUlJFTlRfSFJFRiA9IChkb2N1bWVudC5jdXJyZW50U2NyaXB0IGFzIEhUTUxTY3JpcHRFbGVtZW50KS5zcmM7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQW5pbWF0aW9uKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgIEFOSU1BVElPTlNfUEFSQU1TLnB1c2gocGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gZ2V0SWNvbnNVcmxzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZGlybmFtZUhyZWYgPSBDVVJSRU5UX0hSRUYuc3Vic3RyaW5nKDAsIENVUlJFTlRfSFJFRi5sYXN0SW5kZXhPZignLycpICsgMSk7XG4gICAgcmV0dXJuIGAke2Rpcm5hbWVIcmVmfS4uL19pbWFnZXNgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGwoaWNvblVybDogc3RyaW5nKSB7XG4gICAgQU5JTUFUSU9OU19QQVJBTVMuZm9yRWFjaChwYXJhbXMgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IERvY3NDb250cm9sbGVyKHBhcmFtcywgaWNvblVybCk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVuZGVyKHBhcmFtcyk7XG4gICAgICAgIGNvbnRyb2xsZXIuaXRlcmF0ZVRvUG9zaXRpb24ocGFyYW1zKTtcbiAgICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBldmVudCA9PiB7XG4gICAgY29uc3QgaWNvblVybCA9IGdldEljb25zVXJscygpO1xuICAgIHJlbmRlckFsbChpY29uVXJsKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9