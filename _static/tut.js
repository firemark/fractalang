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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes showtime {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n.fract-tokens {\n  user-select: none;\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  transition: background-color 300ms;\n  cursor: pointer;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n.fract-token.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token.move {\n  background-color: rgba(204, 204, 204, 0.4666666667);\n  position: absolute;\n  animation-name: showtime;\n  animation-duration: 500ms;\n}\n.fract-token.move.valid-drop {\n  background-color: rgba(123, 218, 123, 0.4666666667);\n  border-color: #228B22;\n}\n.fract-token.move.valid-drop::before {\n  content: \"DROP\";\n}\n.fract-token.move.remove-drop {\n  background-color: rgba(201, 0, 0, 0.4666666667);\n  border-color: #8b2222;\n}\n.fract-token.move.remove-drop::before {\n  content: \"REMOVE\";\n}\n.fract-token.move::before {\n  display: inline-block;\n  font-size: 10pt;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-weight: bold;\n  position: relative;\n  top: -16pt;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n.fract-token-group.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token-group.debug > .fract-token {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n\n.fract-token-span {\n  padding: 5px;\n  width: 0px;\n  height: 50px;\n  transition: width 300ms;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\n.fract-token.token-header {\n  margin-right: 1em;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-staves {\n  overflow: visible;\n}\n.fract-staves > li {\n  height: 60px;\n}\n.fract-staves > li .tokens {\n  height: 100%;\n}\n.fract-staves .fract-token {\n  width: 30px;\n  height: 30px;\n  padding: 2px;\n  margin-right: 2px;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n.fract-token.token-header {\n    margin-right: 1em;\n}\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-staves {\n    overflow: visible;\n    > li {\n        height: 60px;\n        .tokens { height: 100%; }\n    }\n    .fract-token {\n        width: 30px;\n        height: 30px;\n        padding: 2px;\n        margin-right: 2px;\n    }\n}\n",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "ActionResult": () => (/* binding */ ActionResult),
/* harmony export */   "CallR": () => (/* binding */ CallR),
/* harmony export */   "ContinueR": () => (/* binding */ ContinueR),
/* harmony export */   "JumpR": () => (/* binding */ JumpR),
/* harmony export */   "ReverseR": () => (/* binding */ ReverseR)
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
/* harmony export */   "Call": () => (/* binding */ Call),
/* harmony export */   "DrawArcLine": () => (/* binding */ DrawArcLine),
/* harmony export */   "DrawCircle": () => (/* binding */ DrawCircle),
/* harmony export */   "DrawLine": () => (/* binding */ DrawLine),
/* harmony export */   "DrawSquare": () => (/* binding */ DrawSquare),
/* harmony export */   "DrawTriangle": () => (/* binding */ DrawTriangle),
/* harmony export */   "MoveBackward": () => (/* binding */ MoveBackward),
/* harmony export */   "MoveForward": () => (/* binding */ MoveForward),
/* harmony export */   "MoveLeft": () => (/* binding */ MoveLeft),
/* harmony export */   "MoveRight": () => (/* binding */ MoveRight),
/* harmony export */   "Replay": () => (/* binding */ Replay),
/* harmony export */   "Reverse": () => (/* binding */ Reverse),
/* harmony export */   "RotateLeft": () => (/* binding */ RotateLeft),
/* harmony export */   "RotateRight": () => (/* binding */ RotateRight)
/* harmony export */ });
/* harmony import */ var _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/ast/actionResult */ "./src/core/ast/actionResult.ts");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/core/ast/base.ts");
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
var _NodeWithValue_values, _Call_instances, _Call_createContext, _Replay_jumpSize;


class NodeWithValue extends _base__WEBPACK_IMPORTED_MODULE_1__.ActionNode {
    constructor(values) {
        super();
        _NodeWithValue_values.set(this, void 0);
        __classPrivateFieldSet(this, _NodeWithValue_values, values, "f");
    }
    eval(context) {
        return (0,_base__WEBPACK_IMPORTED_MODULE_1__.evalValue)(__classPrivateFieldGet(this, _NodeWithValue_values, "f"), context);
    }
    evalValue(context) {
        return (0,_base__WEBPACK_IMPORTED_MODULE_1__.evalValue)(__classPrivateFieldGet(this, _NodeWithValue_values, "f"), context).value;
    }
    evalIntValue(context) {
        return Math.round(this.evalValue(context));
    }
}
_NodeWithValue_values = new WeakMap();
class Call extends NodeWithValue {
    constructor(name, value) {
        super(value);
        _Call_instances.add(this);
        this.name = name;
    }
    exec(context) {
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.CallR(this.name, __classPrivateFieldGet(this, _Call_instances, "m", _Call_createContext).call(this, context, +1));
    }
    execReverse(context) {
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.CallR(this.name, __classPrivateFieldGet(this, _Call_instances, "m", _Call_createContext).call(this, context, +1));
    }
}
_Call_instances = new WeakSet(), _Call_createContext = function _Call_createContext(context, interationShift) {
    const newArgument = this.eval(context);
    return context.createNewContext(newArgument, interationShift);
};
class DrawLine extends NodeWithValue {
    exec(context) {
        const { value: length, strokeThickness, color } = this.eval(context);
        context.cursor.drawLine(length, strokeThickness, color);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
    execReverse(context) {
        const distance = -this.eval(context).value;
        context.cursor.forward(distance);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
}
class DrawFigure extends NodeWithValue {
    exec(context) {
        const evaled = this.eval(context);
        this.drawFigure(context.cursor, evaled.value, this.evaledToFigureOps(evaled));
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
    evaledToFigureOps(evaled) {
        return {
            isFilled: evaled.isFilled,
            color: evaled.color,
            stroke: evaled.strokeThickness,
        };
    }
}
class DrawCircle extends DrawFigure {
    drawFigure(cursor, size, ops) {
        cursor.drawCircle(size, ops);
    }
}
class DrawSquare extends DrawFigure {
    drawFigure(cursor, size, ops) {
        cursor.drawSquare(size, ops);
    }
}
class DrawTriangle extends DrawFigure {
    drawFigure(cursor, size, ops) {
        cursor.drawTriangle(size, ops);
    }
}
class DrawArcLine extends NodeWithValue {
    constructor(ratio, value) {
        super(value);
        this.ratio = ratio;
    }
    exec(context) {
        const { value: size, strokeThickness, color } = this.eval(context);
        context.cursor.drawArcLine(this.ratio, size, strokeThickness, color);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
    execReverse(context) {
        const distance = -this.eval(context).value;
        const { cursor } = context;
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
}
class CursorManipulator extends NodeWithValue {
    exec(context) {
        this.change(context.cursor, this.eval(context).value);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
    }
    execReverse(context) {
        this.change(context.cursor, -this.eval(context).value);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
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
class Reverse extends NodeWithValue {
    exec(context) {
        const iterations = this.evalIntValue(context);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ReverseR(iterations);
    }
    execReverse(context) {
        const iterations = this.evalIntValue(context);
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ReverseR(iterations);
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
            return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.JumpR(-__classPrivateFieldGet(this, _Replay_jumpSize, "f"));
        }
        return new _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ContinueR();
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
/* harmony export */   "ActionNode": () => (/* binding */ ActionNode),
/* harmony export */   "ValueNode": () => (/* binding */ ValueNode),
/* harmony export */   "evalValue": () => (/* binding */ evalValue)
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
/* harmony export */   "EmptyColor": () => (/* binding */ EmptyColor),
/* harmony export */   "FillColor": () => (/* binding */ FillColor),
/* harmony export */   "MaxColor": () => (/* binding */ MaxColor),
/* harmony export */   "MinColor": () => (/* binding */ MinColor),
/* harmony export */   "ShiftColor": () => (/* binding */ ShiftColor)
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
/* harmony export */   "Function": () => (/* binding */ Function)
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
/* harmony export */   "AddOp": () => (/* binding */ AddOp),
/* harmony export */   "MultOp": () => (/* binding */ MultOp),
/* harmony export */   "SubOp": () => (/* binding */ SubOp)
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
/* harmony export */   "SetStrokeStyle": () => (/* binding */ SetStrokeStyle),
/* harmony export */   "ShiftStrokeThickness": () => (/* binding */ ShiftStrokeThickness)
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
/* harmony export */   "Angle": () => (/* binding */ Angle),
/* harmony export */   "Argument": () => (/* binding */ Argument),
/* harmony export */   "DynamicArgument": () => (/* binding */ DynamicArgument),
/* harmony export */   "Multipler": () => (/* binding */ Multipler)
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
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
class Context {
    constructor({ cursor, argument, valueFuncBag = {}, iteration = 0 }) {
        this.argument = argument;
        this.iteration = iteration;
        this.valueFuncBag = valueFuncBag;
        this.cursor = cursor;
    }
    createNewContext(newArgument, iterationShift) {
        return new Context({
            argument: newArgument,
            cursor: this.cursor,
            iteration: this.iteration + iterationShift,
            valueFuncBag: this.valueFuncBag,
        });
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
/* harmony export */   "ContextStepper": () => (/* binding */ ContextStepper),
/* harmony export */   "ForwardContextStepper": () => (/* binding */ ForwardContextStepper),
/* harmony export */   "ReverseContextStepper": () => (/* binding */ ReverseContextStepper),
/* harmony export */   "createInitStepper": () => (/* binding */ createInitStepper)
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
    get index() { return this.scope.index; }
    get stave() { return this.scope.function.name; }
}
class ForwardContextStepper extends ContextStepper {
    exec() {
        const { index, function: func, locals } = this.scope;
        const action = func.actions[index];
        const local = locals[index];
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
    constructor(scope, endIndex) {
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
                }, func.size));
            }
            this.scope.index -= 1;
        }
        else if (result instanceof _core_ast_actionResult__WEBPACK_IMPORTED_MODULE_0__.ReverseR) {
            /// TODO - implement Reverse-Reverse
            /// Or maybe one stepper with move cursor only with specified direction?
            this.scope.index -= result.count;
        }
        else {
            throw "Wrong Action";
        }
        return this.isIndexInRange();
    }
    isIndexInRange() {
        const { index, function: func } = this.scope;
        console.log(index, __classPrivateFieldGet(this, _ReverseContextStepper_endIndex, "f"));
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
/* harmony export */   "Cursor": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var _core_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/figures */ "./src/core/figures.ts");

class Cursor {
    constructor({ strokeSize = 1, distanceMultipler = 100, firstColor = "#000000", secondColor = "#DC143C", } = {}) {
        this.strokeSize = strokeSize;
        this.distanceMultipler = distanceMultipler;
        this.position = [0.0, 0.0];
        this.angle = 0.0;
        this.orientation = [1.0, 0.0];
        this.figures = [];
        this.box = {
            min: [0.0, 0.0],
            max: [0.0, 0.0],
        };
        this.firstColor = this.hexToColor(firstColor);
        this.secondColor = this.hexToColor(secondColor);
    }
    hexToColor(hex) {
        const r = parseInt(hex.substr(1, 2), 16);
        const g = parseInt(hex.substr(3, 2), 16);
        const b = parseInt(hex.substr(5, 2), 16);
        return [r, g, b];
    }
    rotate(angle) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        this.angle = (this.angle + angle) % 1.0;
        const radians = angle * 2 * Math.PI;
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const [x, y] = this.orientation;
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    }
    drawLine(distance, stroke, color) {
        const [old_x, old_y] = this.position;
        this.forward(distance);
        const [new_x, new_y] = this.position;
        const style = {
            stroke: this.strokeSize * stroke,
            color: this.calcColor(color),
        };
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Line([old_x, old_y], [new_x, new_y], style));
        this.computeBox(this.position);
    }
    drawArcLine(ratio, size, stroke, color) {
        const arcSize = size / 2 * this.distanceMultipler;
        const arcRadius = arcSize / Math.sin(ratio * Math.PI);
        const [dx, dy] = this.orientation;
        // rotate by 90°
        const ndx = -dy;
        const ndy = dx;
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
        this.computeBox(point, Math.abs(arcRadius));
    }
    drawCircle(radius, ops) {
        const [x, y] = this.position;
        const style = this.calcStyleParams(ops);
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Circle([x, y], radius, style));
        this.computeBox([x, y], Math.abs(radius));
    }
    drawSquare(size, ops) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Rectangle([x, y], [dx, dy], size, size, style));
        this.computeBox([x, y], Math.abs(size));
    }
    drawTriangle(size, ops) {
        const [x, y] = this.position;
        const [dx, dy] = this.orientation;
        const style = this.calcStyleParams(ops);
        this.figures.push(new _core_figures__WEBPACK_IMPORTED_MODULE_0__.Triangle([x, y], [dx, dy], size, style));
        this.computeBox([x, y], Math.abs(size));
    }
    forward(distance) {
        const [x, y] = this.orientation;
        this.position[0] += x * distance * this.distanceMultipler;
        this.position[1] += y * distance * this.distanceMultipler;
    }
    backward(distance) {
        this.forward(-distance);
    }
    right(distance) {
        const [x, y] = this.orientation;
        // rotate orientation by 90°
        this.position[0] -= y * distance * this.distanceMultipler;
        this.position[1] += x * distance * this.distanceMultipler;
    }
    left(distance) {
        this.right(-distance);
    }
    addMargin(margin) {
        this.box.min[0] -= margin;
        this.box.min[1] -= margin;
        this.box.max[0] += margin;
        this.box.max[1] += margin;
    }
    computeBox([x, y], size = 0) {
        this.box.min[0] = Math.min(this.box.min[0], x - size);
        this.box.max[0] = Math.max(this.box.max[0], x + size);
        this.box.min[1] = Math.min(this.box.min[1], y - size);
        this.box.max[1] = Math.max(this.box.max[1], y + size);
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
    calcStyleParams(ops) {
        const color = this.calcColor(ops.color);
        if (ops.isFilled) {
            return { fill: color };
        }
        return { fill: "none", color: color, stroke: ops.stroke };
    }
}


/***/ }),

/***/ "./src/core/exec.ts":
/*!**************************!*\
  !*** ./src/core/exec.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exec": () => (/* binding */ exec),
/* harmony export */   "setupExec": () => (/* binding */ setupExec)
/* harmony export */ });
/* harmony import */ var _core_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/parser */ "./src/core/parser.ts");
/* harmony import */ var _functionsBag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionsBag */ "./src/core/functionsBag.ts");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step */ "./src/core/step.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./src/core/context.ts");




const MAX_STEPS = 100000;
function exec(stack) {
    for (let step = 0; step < MAX_STEPS; step++) {
        if (stack.step().halt) {
            return;
        }
    }
    throw "Maximum steps reached";
}
function setupExec(valueArgument, maxIteration, functions, cursor) {
    const argument = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
        isFilled: true,
    };
    const bag = new _functionsBag__WEBPACK_IMPORTED_MODULE_1__.FunctionsBag(maxIteration, initFuncBag(functions));
    const valueFuncBag = initValueBag(functions);
    const context = new _context__WEBPACK_IMPORTED_MODULE_3__.Context({ argument, cursor, valueFuncBag });
    return new _step__WEBPACK_IMPORTED_MODULE_2__.StackStep(context, bag);
}
function initFuncBag(functions) {
    const bag = {};
    functions
        .filter(({ name }) => !_core_parser__WEBPACK_IMPORTED_MODULE_0__.DYNAMIC_ARGS.includes(name))
        .forEach(({ name, tokens: rawTokens }) => {
        const tokens = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseRawTokens)(rawTokens);
        bag[name] = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseLineFunc)(name, tokens);
    });
    return bag;
}
function initValueBag(functions) {
    const bag = {};
    functions
        .filter(({ name }) => _core_parser__WEBPACK_IMPORTED_MODULE_0__.DYNAMIC_ARGS.includes(name))
        .forEach(({ name, tokens: rawTokens }) => {
        const tokens = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseRawTokens)(rawTokens);
        bag[name] = (0,_core_parser__WEBPACK_IMPORTED_MODULE_0__.parseLineValue)(tokens);
    });
    return bag;
}


/***/ }),

/***/ "./src/core/figures.ts":
/*!*****************************!*\
  !*** ./src/core/figures.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle),
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
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
/* harmony export */   "FunctionsBag": () => (/* binding */ FunctionsBag)
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

/***/ "./src/core/parser.ts":
/*!****************************!*\
  !*** ./src/core/parser.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DYNAMIC_ARGS": () => (/* binding */ DYNAMIC_ARGS),
/* harmony export */   "PROCEDURES": () => (/* binding */ PROCEDURES),
/* harmony export */   "SUFFIXES": () => (/* binding */ SUFFIXES),
/* harmony export */   "parseLineFunc": () => (/* binding */ parseLineFunc),
/* harmony export */   "parseLineValue": () => (/* binding */ parseLineValue),
/* harmony export */   "parseRawTokens": () => (/* binding */ parseRawTokens)
/* harmony export */ });
/* harmony import */ var _core_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/tokens */ "./src/core/tokens.ts");
/* harmony import */ var _core_ast_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/ast/function */ "./src/core/ast/function.ts");


const DYNAMIC_ARGS = ["DIAMOND", "INV_TRIANGLE"];
const PROCEDURES = ["F", "G", "H"];
const SUFFIXES = ["END", "EVEN", "ODD", "GE3", "GE5", "GE7"];
function parseRawTokens(rawTokens) {
    return rawTokens.map(raw => {
        const token = _core_tokens__WEBPACK_IMPORTED_MODULE_0__.tokens[raw];
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
/* harmony export */   "StackStep": () => (/* binding */ StackStep)
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
            __classPrivateFieldGet(this, _StackStep_stack, "f").pop();
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
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _core_figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/figures */ "./src/core/figures.ts");

const NAMESPACE = "http://www.w3.org/2000/svg";
const BLACK = "black";
const RED = "red";
function createSvg(document, cursor) {
    const svg = document.createElementNS(NAMESPACE, "svg");
    const [min_x, min_y] = cursor.box.min;
    const [max_x, max_y] = cursor.box.max;
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
const SQRT3 = Math.sqrt(3);
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
    let styleAttr = `fill: ${style.fill || "black"};`;
    if (style.stroke !== undefined && style.stroke > 0) {
        styleAttr += `stroke-width: ${style.stroke};`;
        styleAttr += `stroke: ${style.color || "none"}`;
    }
    node.setAttribute("style", styleAttr);
}


/***/ }),

/***/ "./src/core/tokens.ts":
/*!****************************!*\
  !*** ./src/core/tokens.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "tokens": () => (/* binding */ tokens)
/* harmony export */ });
/* harmony import */ var _core_ast_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/ast/values */ "./src/core/ast/values.ts");
/* harmony import */ var _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/ast/actions */ "./src/core/ast/actions.ts");
/* harmony import */ var _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/ast/colors */ "./src/core/ast/colors.ts");
/* harmony import */ var _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/ast/strokes */ "./src/core/ast/strokes.ts");
/* harmony import */ var _core_ast_ops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/ast/ops */ "./src/core/ast/ops.ts");





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
const tokens = {
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
    //ANGLE_360: createValue(() => new Angle(360)),
    ANGLE_270: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(270)),
    ANGLE_180: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(180)),
    ANGLE_90: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(90)),
    ANGLE_60: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(60)),
    ANGLE_45: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(45)),
    ANGLE_30: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(30)),
    ANGLE_15: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(15)),
    ANGLE_10: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(10)),
    // Colors
    COLOR_MAX: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.MaxColor()),
    COLOR_MIN: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.MinColor()),
    COLOR_SHIFT_1_2: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 2)),
    COLOR_SHIFT_1_4: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 4)),
    COLOR_SHIFT_1_5: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 5)),
    COLOR_SHIFT_1_10: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 10)),
    COLOR_FILL: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.FillColor()),
    COLOR_EMPTY: createValue(() => new _core_ast_colors__WEBPACK_IMPORTED_MODULE_2__.EmptyColor()),
    // Stroke
    STROKE_SOLID: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("solid")),
    STROKE_DASHED: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("dashed")),
    STROKE_DOTTED: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("dotted")),
    STROKE_THICK_ADD: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__.ShiftStrokeThickness(+1)),
    STROKE_THICK_SUB: createValue(() => new _core_ast_strokes__WEBPACK_IMPORTED_MODULE_3__.ShiftStrokeThickness(-1)),
    // Operations
    OP_MULT: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_4__.MultOp()),
    OP_ADD: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_4__.AddOp()),
    OP_SUB: createValue(() => new _core_ast_ops__WEBPACK_IMPORTED_MODULE_4__.SubOp()),
    // Arguments
    ARGUMENT: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.Argument()),
    CALL_DIAMOND: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("DIAMOND"), true),
    CALL_INV_TRIANGLE: createValue(() => new _core_ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("INV_TRIANGLE"), true),
    // *** Actions ***
    // Callers
    CALL_F: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("F", v)),
    CALL_G: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("G", v)),
    CALL_H: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("H", v)),
    // Shapes
    DRAW_CIRCLE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawCircle(v)),
    DRAW_SQUARE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawSquare(v)),
    DRAW_TRIANGLE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawTriangle(v)),
    // Line
    DRAW_LINE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawLine(v)),
    // Arc
    DRAW_ARCLINE_R_3_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+3 / 4, v)),
    DRAW_ARCLINE_R_2_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+2 / 3, v)),
    DRAW_ARCLINE_R_1_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 2, v)),
    DRAW_ARCLINE_R_1_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 3, v)),
    DRAW_ARCLINE_R_1_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 4, v)),
    DRAW_ARCLINE_R_1_5: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 5, v)),
    DRAW_ARCLINE_L_3_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-3 / 4, v)),
    DRAW_ARCLINE_L_2_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-2 / 3, v)),
    DRAW_ARCLINE_L_1_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 2, v)),
    DRAW_ARCLINE_L_1_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 3, v)),
    DRAW_ARCLINE_L_1_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 4, v)),
    DRAW_ARCLINE_L_1_5: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 5, v)),
    // Cursor translations
    MOVE_FORWARD: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.MoveForward(v)),
    MOVE_BACKWARD: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.MoveBackward(v)),
    MOVE_LEFT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.MoveLeft(v)),
    MOVE_RIGHT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.MoveRight(v)),
    // Cursor rotations
    ROTATE_LEFT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.RotateLeft(v)),
    ROTATE_RIGHT: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.RotateRight(v)),
    // Repetetive actions
    REVERSE: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Reverse(v)),
    REPLAY: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Replay(v)),
    REPLAY_2: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Replay(v, 2)),
    REPLAY_3: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Replay(v, 3)),
    REPLAY_4: createAction(v => new _core_ast_actions__WEBPACK_IMPORTED_MODULE_1__.Replay(v, 4)),
};


/***/ }),

/***/ "./src/web/consts.ts":
/*!***************************!*\
  !*** ./src/web/consts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ICON_URL": () => (/* binding */ DEFAULT_ICON_URL)
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
/* harmony export */   "Controller": () => (/* binding */ Controller)
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
/* harmony export */   "DocsController": () => (/* binding */ DocsController)
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
/* harmony export */   "NAME_TO_TOKEN": () => (/* binding */ NAME_TO_TOKEN),
/* harmony export */   "TOKENS": () => (/* binding */ TOKENS)
/* harmony export */ });
const TOKENS = [
    { name: 'ARGUMENT', label: 'Argument', type: 'value' },
    { name: 'CALL_DIAMOND', label: 'Diamond', type: 'value' },
    { name: 'CALL_INV_TRIANGLE', label: 'Inverse triangle', type: 'value' },
    { name: 'CALL_F', label: 'F function', type: 'action' },
    { name: 'CALL_G', label: 'G function', type: 'action' },
    { name: 'CALL_H', label: 'H function', type: 'action' },
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
/* harmony export */   "CodeView": () => (/* binding */ CodeView)
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
/* harmony export */   "CommentView": () => (/* binding */ CommentView)
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
/* harmony export */   "DocBarView": () => (/* binding */ DocBarView)
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
/* harmony export */   "ImageView": () => (/* binding */ ImageView)
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
/* harmony export */   "StaveView": () => (/* binding */ StaveView)
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
        const realname = suffix ? `${name}::${suffix}` : name;
        return { name: realname, tokens };
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
/* harmony export */   "TokensStaveView": () => (/* binding */ TokensStaveView)
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
/* harmony export */   "TitleView": () => (/* binding */ TitleView)
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
/* harmony export */   "TokensView": () => (/* binding */ TokensView)
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
/* harmony export */   "View": () => (/* binding */ View)
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
        if (params.text) {
            node.innerText = params.text;
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
/* harmony export */   "makeAnimation": () => (/* binding */ makeAnimation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBaUIsaUJBQWlCLHNCQUFzQixHQUFHLE9BQU8sNEpBQTRKLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxRQUFRLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFB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QUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxTQUFTLENBQUMsS0FBYTtRQUMzQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxD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QUFDLFVBQVUsQ0FBQztRQUNuQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsT0FBTyxJQUFJLENBQUM7S0FDZjtTQUFNLElBQUksTUFBTSxZQUFZLGlEQUFNLEVBQUU7UUFDakMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztR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QUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxZQUFZLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxZQUFZLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxhQUFhLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxZQUFZO0lBQ1osU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFB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QUFDLEVBQUUsQ0FBQyxJQUFJLHVEQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU07SUFDTixrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6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QUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBRXJELEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFbEQsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFMUQsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxRQUFRLEVB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QWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUU7QUFFeEM7QUFFM0IsTUFBTSxpQkFBaUIsR0FBb0IsRUFBRSxDQUFDO0FBQzlDLE1BQU0sWUFBWSxHQUFJLFFBQVEsQ0FBQyxhQUFtQyxDQUFDLEdBQUcsQ0FBQztBQUVoRSxTQUFTLGFBQWEsQ0FBQyxNQUFxQjtJQUMvQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNqQixNQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLE9BQU8sR0FBRyxXQUFXLFlBQVksQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsT0FBZTtJQUM5QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSw2REFBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQ3BDLE1BQU0sT0FBTyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBQy9CLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1RVVC8uL3NyYy9zdHlsZS9kb2NzLnNjc3MiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3R5bGUvZG9jcy5zY3NzP2JkMmMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9hc3QvYWN0aW9uUmVzdWx0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9hY3Rpb25zLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9iYXNlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L2Z1bmN0aW9uLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L3N0cm9rZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvYXN0L3ZhbHVlcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2NvbnRleHRTdGVwcGVyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2N1cnNvci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9leGVjLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvcmUvZnVuY3Rpb25zQmFnLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL3BhcnNlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS9zdGVwLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb3JlL3N2Zy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvY29yZS90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb250cm9sbGVycy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29udHJvbGxlcnMvZG9jcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9jb21tZW50LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvZG9jQmFyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9zdGF2ZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3N0YXZlVG9rZW4udHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy90aXRsZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3Rva2VuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2RvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIHNob3d0aW1lIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuLmZyYWN0LXRva2VucyB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGdhcDogNXB4O1xcbn1cXG4uZnJhY3QtdG9rZW5zLmhpZGUgLmZyYWN0LXRva2VuLCAuZnJhY3QtdG9rZW5zLmhpZGUgLmxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAuZ3JvdXAtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mcmFjdC10b2tlbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC10b2tlbi50b2tlbi1pbmxpbmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuLmZyYWN0LXRva2VuLmRlYnVnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC40NjY2NjY2NjY3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzaG93dGltZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlLnZhbGlkLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDIxOCwgMTIzLCAwLjQ2NjY2NjY2NjcpO1xcbiAgYm9yZGVyLWNvbG9yOiAjMjI4QjIyO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIkRST1BcXFwiO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS5yZW1vdmUtZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMSwgMCwgMCwgMC40NjY2NjY2NjY3KTtcXG4gIGJvcmRlci1jb2xvcjogIzhiMjIyMjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUucmVtb3ZlLWRyb3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiUkVNT1ZFXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmU6OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEwcHQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTZwdDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpLmZyYWN0LXRva2VuIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggIzg4OCBkb3R0ZWQ7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cCA+IC5mcmFjdC10b2tlbi1zcGFuIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwLmRlYnVnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cC5kZWJ1ZyA+IC5mcmFjdC10b2tlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLmZyYWN0LXRva2VuLXNwYW4ub3Zlcjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG59XFxuXFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC50b2tlbi1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm5hbWUge1xcbiAgZmxleDogMCAxIDUwcHg7XFxuICBmb250LXNpemU6IDE1cHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAudG9rZW5zIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLnRva2VucyA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaS5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mcmFjdC10b2tlbi50b2tlbi1oZWFkZXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mcmFjdC1hbmltYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxufVxcbi5mcmFjdC1hbmltYXRpb24gbGFiZWwge1xcbiAgcGFkZGluZzogMCA1cHg7XFxufVxcblxcbi5mcmFjdC10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmZyYWN0LWJhciwgLmZyYWN0LWNvbW1lbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcXG59XFxuXFxuLmZyYWN0LWJhciA+IGlucHV0W25hbWU9aXRlcmF0aW9uc10ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mcmFjdC1jb21tZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGhlaWdodDogNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mcmFjdC1pbWFnZSA+IHN2ZyB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIC50b2tlbnMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZnJhY3Qtc3RhdmVzIC5mcmFjdC10b2tlbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9rZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kb2NzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb2RlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUFPLFdBQUE7RUNFVDtFRERFO0lBQUssYUFBQTtFQ0lQO0FBQ0Y7QURGQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0lKO0FERFE7RUFDSSxhQUFBO0FDR1o7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNGUjtBREtJO0VBQ0ksbURBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNIUjtBREtRO0VBQ0ksbURBQUE7RUFDQSxxQkFBQTtBQ0haO0FESVk7RUFBWSxlQUFBO0FDRHhCO0FESVE7RUFDSSwrQ0FBQTtFQUNBLHFCQUFBO0FDRlo7QURHWTtFQUFZLGlCQUFBO0FDQXhCO0FER1E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRFo7O0FETUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNISjtBRElJO0VBQU0sY0FBQTtFQUFnQixZQUFBO0VBQWMsa0JBQUE7QUNDeEM7QURBSTtFQUFvQyw0QkFBQTtBQ0d4QztBREZJO0VBQXNCLFlBQUE7QUNLMUI7QURISTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNLUjtBREpRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ01aOztBRERBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNJSjtBREZJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDSVI7QURGUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDSVo7O0FDbklBO0VBQ0ksU0FBQTtFQUNBLGFBQUE7QURzSUo7QUNwSUk7RUFDSSxlQUFBO0FEc0lSO0FDbklJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRHFJUjtBQ25JUTtFQUNJLHNCQUFBO0FEcUlaO0FDaklJO0VBQ0ksa0JBQUE7QURtSVI7QUNqSVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRG1JWjtBQy9IWTtFQUNJLGNBQUE7QURpSWhCOztBQzNIQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUQ4SEo7QUM1SEk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBRDhIUjtBQzVIUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FEOEhaO0FDM0hRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUQ2SFo7QUMzSFk7RUFBTSxjQUFBO0FEOEhsQjtBQzNIUTtFQUNJLGFBQUE7QUQ2SFo7O0FBek1BO0VBQ0ksaUJBQUE7QUE0TUo7O0FBek1BO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBNE1KO0FBMU1JO0VBQ0ksY0FBQTtBQTRNUjs7QUF4TUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQTJNSjs7QUF4TUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FBMk1KOztBQXZNSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQTBNUjs7QUF0TUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF5TUo7O0FBdE1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeU1KO0FBeE1JO0VBQ0ksNEJBQUE7RUFDQSxhQUFBO0FBME1SOztBQXRNQTtFQUNJLGlCQUFBO0FBeU1KO0FBeE1JO0VBQ0ksWUFBQTtBQTBNUjtBQXpNUTtFQUFVLFlBQUE7QUE0TWxCO0FBMU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE0TVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBzaG93dGltZSB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwJTsgfVxcbiAgICB0byB7IG9wYWNpdHk6IDEwMCU7IH1cXG59XFxuXFxuLmZyYWN0LXRva2VucyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgICYuaGlkZSB7XFxuICAgICAgICAuZnJhY3QtdG9rZW4sIC5sYWJlbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICA+IC5ncm91cC1sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICA+IC5sYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmLnRva2VuLWlubGluZSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICB9XFxuXFxuICAgICYuZGVidWcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgfVxcblxcbiAgICAmLm1vdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQzc3O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNob3d0aW1lO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG5cXG4gICAgICAgICYudmFsaWQtZHJvcCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiZGE3Yjc3O1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyOEIyMjtcXG4gICAgICAgICAgICAmOjpiZWZvcmUgeyBjb250ZW50OiBcXFwiRFJPUFxcXCI7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYucmVtb3ZlLWRyb3Age1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTAwMDA3NztcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4YjIyMjI7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogXFxcIlJFTU9WRVxcXCI7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB0b3A6IC0xNnB0O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5mcmFjdC10b2tlbi1ncm91cCB7XFxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICA+ICogeyBmbGV4OiAwIDAgYXV0bzsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAwcHg7IH1cXG4gICAgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpLmZyYWN0LXRva2VuIHsgYm9yZGVyLWxlZnQ6IDJweCAjODg4IGRvdHRlZDsgfVxcbiAgICA+IC5mcmFjdC10b2tlbi1zcGFuIHsgcGFkZGluZzogMnB4OyB9XFxuXFxuICAgICYuZGVidWcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgICAgICYgPiAuZnJhY3QtdG9rZW4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5mcmFjdC10b2tlbi1zcGFuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xcblxcbiAgICAmLm92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJy4vdG9rZW5zJztcXG5AaW1wb3J0ICcuL2NvZGUnO1xcblxcbi5mcmFjdC10b2tlbi50b2tlbi1oZWFkZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLmZyYWN0LWFuaW1hdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcblxcbiAgICBsYWJlbCB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIge1xcbiAgICA+IGlucHV0W25hbWU9XFxcIml0ZXJhdGlvbnNcXFwiXSB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICA+IHN2ZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgID4gbGkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgLnRva2VucyB7IGhlaWdodDogMTAwJTsgfVxcbiAgICB9XFxuICAgIC5mcmFjdC10b2tlbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICB9XFxufVxcblwiLFwiLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAudG9rZW4tYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgID4gLm5hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gLnRva2VucyAge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcblxcbiAgICAgICAgICAgID4gKiB7IGZsZXg6IDAgMCBhdXRvOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZGUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aW9uUmVzdWx0IHsgfVxuXG5leHBvcnQgY2xhc3MgQ29udGludWVSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHsgfVxuXG5leHBvcnQgY2xhc3MgSnVtcFIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIGNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgc3RhdmU6IHN0cmluZztcbiAgICBuZXdDb250ZXh0OiBDb250ZXh0O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdmU6IHN0cmluZywgY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXZlID0gc3RhdmU7XG4gICAgICAgIHRoaXMubmV3Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZVIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIGNvdW50OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBDdXJzb3IsIE9wc1BhcmFtcyB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENvbnRpbnVlUiwgSnVtcFIsIENhbGxSLCBSZXZlcnNlUn0gZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uUmVzdWx0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuYWJzdHJhY3QgY2xhc3MgTm9kZVdpdGhWYWx1ZSBleHRlbmRzIEFjdGlvbk5vZGUge1xuICAgICN2YWx1ZXM6IFZhbHVlTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBWYWx1ZU5vZGVbXSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiN2YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy4jdmFsdWVzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbFZhbHVlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHRoaXMuI3ZhbHVlcywgY29udGV4dCkudmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWxJbnRWYWx1ZShjb250ZXh0OiBDb250ZXh0KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5ldmFsVmFsdWUoY29udGV4dCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGwgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICByZXR1cm4gbmV3IENhbGxSKHRoaXMubmFtZSwgdGhpcy4jY3JlYXRlQ29udGV4dChjb250ZXh0LCArMSkpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICByZXR1cm4gbmV3IENhbGxSKHRoaXMubmFtZSwgdGhpcy4jY3JlYXRlQ29udGV4dChjb250ZXh0LCArMSkpO1xuICAgIH1cblxuICAgICNjcmVhdGVDb250ZXh0KGNvbnRleHQ6IENvbnRleHQsIGludGVyYXRpb25TaGlmdDogbnVtYmVyKTogQ29udGV4dCB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3VtZW50ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVOZXdDb250ZXh0KG5ld0FyZ3VtZW50LCBpbnRlcmF0aW9uU2hpZnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3TGluZShsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuYWJzdHJhY3QgY2xhc3MgRHJhd0ZpZ3VyZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGFic3RyYWN0IGRyYXdGaWd1cmUoY3Vyc29yOiBDdXJzb3IsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpOiB2b2lkO1xuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZXZhbGVkID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmRyYXdGaWd1cmUoY29udGV4dC5jdXJzb3IsIGV2YWxlZC52YWx1ZSwgdGhpcy5ldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQ6IEV2YWx1ZWRWYWx1ZSk6IE9wc1BhcmFtcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0ZpbGxlZDogZXZhbGVkLmlzRmlsbGVkLFxuICAgICAgICAgICAgY29sb3I6IGV2YWxlZC5jb2xvcixcbiAgICAgICAgICAgIHN0cm9rZTogZXZhbGVkLnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdDaXJjbGUgZXh0ZW5kcyBEcmF3RmlndXJlIHtcbiAgICBkcmF3RmlndXJlKGN1cnNvcjogQ3Vyc29yLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIGN1cnNvci5kcmF3Q2lyY2xlKHNpemUsIG9wcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd1NxdWFyZSBleHRlbmRzIERyYXdGaWd1cmUge1xuICAgIGRyYXdGaWd1cmUoY3Vyc29yOiBDdXJzb3IsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgY3Vyc29yLmRyYXdTcXVhcmUoc2l6ZSwgb3BzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3VHJpYW5nbGUgZXh0ZW5kcyBEcmF3RmlndXJlIHtcbiAgICBkcmF3RmlndXJlKGN1cnNvcjogQ3Vyc29yLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIGN1cnNvci5kcmF3VHJpYW5nbGUoc2l6ZSwgb3BzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3QXJjTGluZSh0aGlzLnJhdGlvLCBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb25zdCB7IGN1cnNvciB9ID0gY29udGV4dDtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgICAgICBjdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEN1cnNvck1hbmlwdWxhdG9yIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgYWJzdHJhY3QgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKTogdm9pZDtcblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHRoaXMuY2hhbmdlKGNvbnRleHQuY3Vyc29yLCB0aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICB0aGlzLmNoYW5nZShjb250ZXh0LmN1cnNvciwgLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUZvcndhcmQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlQmFja3dhcmQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5iYWNrd2FyZCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5sZWZ0KHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlUmlnaHQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yaWdodCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlUmlnaHQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gbmV3IFJldmVyc2VSKGl0ZXJhdGlvbnMpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgUmV2ZXJzZVIoaXRlcmF0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVwbGF5IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgI2p1bXBTaXplOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwganVtcFNpemUgPSAxKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy4janVtcFNpemUgPSBqdW1wU2l6ZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbG9jYWxbJ2NvdW50ZXInXSB8fCAxO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIGlmIChjb3VudGVyIDwgc2l6ZSkge1xuICAgICAgICAgICAgbG9jYWxbJ2NvdW50ZXInXSA9IGNvdW50ZXIgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBKdW1wUigtdGhpcy4janVtcFNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENvbnRpbnVlUiB9IGZyb20gXCIuL2FjdGlvblJlc3VsdFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIHtcbiAgICBhYnN0cmFjdCBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWU7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY3Rpb25Ob2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdCB7IHJldHVybiBuZXcgQ29udGludWVSKCk7IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVmFsdWUodmFsdWVOb2RlczogVmFsdWVOb2RlW10sIGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IGluaXQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgY29sb3I6IGNvbnRleHQuYXJndW1lbnQuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICBpc0ZpbGxlZDogY29udGV4dC5hcmd1bWVudC5pc0ZpbGxlZCxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogKGE6IG51bWJlciwgYjpudW1iZXIpID0+IGEgKiBiLFxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlTm9kZXMucmVkdWNlKHBhcnRFdmFsLmJpbmQodGhpcywgY29udGV4dCksIGluaXQpO1xufVxuXG5mdW5jdGlvbiBwYXJ0RXZhbChjb250ZXh0OiBDb250ZXh0LCBhY2M6IEV2YWx1ZWRWYWx1ZSwgbm9kZTogVmFsdWVOb2RlKTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG5vZGUuZXZhbChjb250ZXh0KTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXdWYWx1ZS52YWx1ZVRyYW5zZm9ybWVyIHx8IGFjYy52YWx1ZVRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdHJhbnNmb3JtKGFjYy52YWx1ZSwgbmV3VmFsdWUudmFsdWUpIDogYWNjLnZhbHVlLFxuICAgICAgICBjb2xvcjogbmV3VmFsdWUuY29sb3IgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLmNvbG9yIDogYWNjLmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogbmV3VmFsdWUuc3Ryb2tlU3R5bGUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVN0eWxlIDogYWNjLnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzIDogYWNjLnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgaXNGaWxsZWQ6IG5ld1ZhbHVlLmlzRmlsbGVkICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5pc0ZpbGxlZCA6IGFjYy5pc0ZpbGxlZCxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogdHJhbnNmb3JtLFxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF4Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDAuNX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWluQ29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDAuMH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsbENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2lzRmlsbGVkOiB0cnVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFbXB0eUNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2lzRmlsbGVkOiBmYWxzZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2hpZnRDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGxldCBjb2xvciA9IChjb250ZXh0LmFyZ3VtZW50LmNvbG9yICsgdGhpcy5zaGlmdCkgJSAxLjA7XG4gICAgICAgIGlmIChjb2xvciA8IDAuMCkge1xuICAgICAgICAgICAgY29sb3IgKz0gMS4wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7Y29sb3J9O1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgQWN0aW9uTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBhY3Rpb25zOiBBY3Rpb25Ob2RlW10pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNdWx0T3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICogYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSArIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgLSBiIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IFN0cm9rZVN0eWxlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXRTdHJva2VTdHlsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzdHJva2U6IFN0cm9rZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3Ioc3Ryb2tlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVN0eWxlOiB0aGlzLnN0cm9rZSB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgU2hpZnRTdHJva2VUaGlja25lc3MgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCBzdHJva2VUaGlja25lc3MgPSBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyArIHRoaXMuc2hpZnQ7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVRoaWNrbmVzcyB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVkQW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVkQW5nbGUgPSBhbmdsZSAvIDM2MC4wO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMubm9ybWFsaXplZEFuZ2xlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZXIgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogY29udGV4dC5hcmd1bWVudC52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0FyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gY29udGV4dC52YWx1ZUZ1bmNCYWdbdGhpcy5uYW1lXSB8fCBbXTtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBTdHJva2VTdHlsZSA9IFwic29saWRcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWx1ZWRWYWx1ZSB7XG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgY29sb3I/OiBudW1iZXI7XG4gICAgc3Ryb2tlU3R5bGU/OiBTdHJva2VTdHlsZTtcbiAgICBzdHJva2VUaGlja25lc3M/OiBudW1iZXI7XG4gICAgaXNGaWxsZWQ/OiBib29sZWFuO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGFyZ3VtZW50OiBFdmFsdWVkVmFsdWU7XG4gICAgcmVhZG9ubHkgY3Vyc29yOiBDdXJzb3I7XG4gICAgcmVhZG9ubHkgdmFsdWVGdW5jQmFnOiB7W25hbWU6IHN0cmluZ106IFZhbHVlTm9kZVtdfTtcblxuICAgIGNvbnN0cnVjdG9yKHtjdXJzb3IsIGFyZ3VtZW50LCB2YWx1ZUZ1bmNCYWcgPSB7fSwgaXRlcmF0aW9uID0gMH0pIHtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB0aGlzLml0ZXJhdGlvbiA9IGl0ZXJhdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZUZ1bmNCYWcgPSB2YWx1ZUZ1bmNCYWc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZSwgaXRlcmF0aW9uU2hpZnQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRleHQoe1xuICAgICAgICAgICAgYXJndW1lbnQ6IG5ld0FyZ3VtZW50LFxuICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgICAgICAgIGl0ZXJhdGlvbjogdGhpcy5pdGVyYXRpb24gKyBpdGVyYXRpb25TaGlmdCxcbiAgICAgICAgICAgIHZhbHVlRnVuY0JhZzogdGhpcy52YWx1ZUZ1bmNCYWcsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ2FsbFIsIENvbnRpbnVlUiwgSnVtcFIsIFJldmVyc2VSIH0gZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uUmVzdWx0XCI7XG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiQC9jb3JlL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBcmdzIHtcbiAgICByZXN1bHQ6IEFjdGlvblJlc3VsdDsgXG4gICAgYmFnOiBGdW5jdGlvbnNCYWc7IFxuICAgIHB1c2g6IFB1c2hDYjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYWxzKGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZnVuYy5hY3Rpb25zLCAoKSA9PiAoe30pKTsgXG59XG5cbnR5cGUgUHVzaENiID0gKHN0ZXBwZXI6IENvbnRleHRTdGVwcGVyKSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdFN0ZXBwZXIoY29udGV4dDogQ29udGV4dCwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gbmV3IEZvcndhcmRDb250ZXh0U3RlcHBlcih7XG4gICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbnRleHQsXG4gICAgfSk7XG59XG5cbmludGVyZmFjZSBTY29wZSB7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgICBsb2NhbHM6IG9iamVjdFtdO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGV4dFN0ZXBwZXIge1xuICAgIHByb3RlY3RlZCBzY29wZTogU2NvcGU7XG5cbiAgICBjb25zdHJ1Y3RvciAoc2NvcGU6IFNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBleGVjKCk6IEFjdGlvblJlc3VsdDtcbiAgICBhYnN0cmFjdCBtb3ZlKGFyZ3M6IE1vdmVBcmdzKTogYm9vbGVhbjtcblxuICAgIGdldCBpbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5zY29wZS5pbmRleDsgfVxuICAgIGdldCBzdGF2ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zY29wZS5mdW5jdGlvbi5uYW1lOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIgZXh0ZW5kcyBDb250ZXh0U3RlcHBlciB7XG4gICAgZXhlYygpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYywgbG9jYWxzIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmdW5jLmFjdGlvbnNbaW5kZXhdO1xuICAgICAgICBjb25zdCBsb2NhbCA9IGxvY2Fsc1tpbmRleF07XG4gICAgICAgIHJldHVybiBhY3Rpb24uZXhlYyh0aGlzLnNjb3BlLmNvbnRleHQsIGxvY2FsKTtcbiAgICB9XG5cbiAgICBtb3ZlKHtyZXN1bHQsIGJhZywgcHVzaH06IE1vdmVBcmdzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250aW51ZVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBKdW1wUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSByZXN1bHQuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2FsbFIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKHJlc3VsdC5zdGF2ZSwgcmVzdWx0Lm5ld0NvbnRleHQuaXRlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVzaChuZXcgRm9yd2FyZENvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcmVzdWx0Lm5ld0NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldmVyc2VSKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuc2NvcGUuaW5kZXggLSByZXN1bHQuY291bnQpO1xuICAgICAgICAgICAgcHVzaChuZXcgUmV2ZXJzZUNvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNjb3BlLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuc2NvcGUuaW5kZXggLSAxLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiB0aGlzLnNjb3BlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKHRoaXMuc2NvcGUuZnVuY3Rpb24pLFxuICAgICAgICAgICAgfSwgZW5kSW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiV3JvbmcgQWN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbmRleEluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIgZXh0ZW5kcyBDb250ZXh0U3RlcHBlciB7XG4gICAgI2VuZEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogU2NvcGUsIGVuZEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUpO1xuICAgICAgICB0aGlzLiNlbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIH1cblxuICAgIGV4ZWMoKTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMsIGxvY2FscyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZnVuYy5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWNSZXZlcnNlKHRoaXMuc2NvcGUuY29udGV4dCwgbG9jYWwpO1xuICAgIH1cblxuICAgIG1vdmUoe3Jlc3VsdCwgYmFnLCBwdXNofTogTW92ZUFyZ3MpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEp1bXBSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IHJlc3VsdC5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDYWxsUikge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24ocmVzdWx0LnN0YXZlLCByZXN1bHQubmV3Q29udGV4dC5pdGVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdXNoKG5ldyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXN1bHQubmV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGZ1bmMuc2l6ZSAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgICAgICAgICB9LCBmdW5jLnNpemUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZXZlcnNlUikge1xuICAgICAgICAgICAgLy8vIFRPRE8gLSBpbXBsZW1lbnQgUmV2ZXJzZS1SZXZlcnNlXG4gICAgICAgICAgICAvLy8gT3IgbWF5YmUgb25lIHN0ZXBwZXIgd2l0aCBtb3ZlIGN1cnNvciBvbmx5IHdpdGggc3BlY2lmaWVkIGRpcmVjdGlvbj9cbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gcmVzdWx0LmNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJXcm9uZyBBY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luZGV4SW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4LCB0aGlzLiNlbmRJbmRleCk7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSB0aGlzLiNlbmRJbmRleCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRmlndXJlLCBMaW5lLCBSZWN0YW5nbGUsIFRyaWFuZ2xlLCBDaXJjbGUsIEFyYywgU3R5bGUgfSBmcm9tIFwiQC9jb3JlL2ZpZ3VyZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3gge1xuICAgIG1pbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBtYXg6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BzUGFyYW1zIHtcbiAgICBjb2xvcjogbnVtYmVyLFxuICAgIHN0cm9rZTogbnVtYmVyLFxuICAgIGlzRmlsbGVkOiBib29sZWFuLFxufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIHtcbiAgICBzdHJva2VTaXplOiBudW1iZXI7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG4gICAgZmlndXJlczogRmlndXJlW107XG4gICAgYm94OiBCb3g7XG4gICAgZmlyc3RDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIHN0cm9rZVNpemUgPSAxLFxuICAgICAgICBkaXN0YW5jZU11bHRpcGxlciA9IDEwMCxcbiAgICAgICAgZmlyc3RDb2xvciA9IFwiIzAwMDAwMFwiLFxuICAgICAgICBzZWNvbmRDb2xvciA9IFwiI0RDMTQzQ1wiLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0cm9rZVNpemUgPSBzdHJva2VTaXplO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyID0gZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgICAgIHRoaXMuYm94ID0ge1xuICAgICAgICAgICAgbWluOiBbMC4wLCAwLjBdLFxuICAgICAgICAgICAgbWF4OiBbMC4wLCAwLjBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpcnN0Q29sb3IgPSB0aGlzLmhleFRvQ29sb3IoZmlyc3RDb2xvcik7XG4gICAgICAgIHRoaXMuc2Vjb25kQ29sb3IgPSB0aGlzLmhleFRvQ29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGV4VG9Db2xvcihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDUsIDIpLCAxNik7XG4gICAgICAgIHJldHVybiBbciwgZywgYl07XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5hbmdsZSArIGFuZ2xlKSAlIDEuMDtcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IGFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBbbmV3X3gsIG5ld195XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLnN0cm9rZVNpemUgKiBzdHJva2UsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jYWxjQ29sb3IoY29sb3IpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgTGluZShbb2xkX3gsIG9sZF95XSwgW25ld194LCBuZXdfeV0sIHN0eWxlKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKHtzdHJva2UsIGNvbG9yLCBpc0ZpbGxlZDogZmFsc2V9KTtcbiAgICAgICAgY29uc3Qgb3BzID0ge1xuICAgICAgICAgICAgc2hpZnQ6IHRoaXMuYW5nbGUgLSAwLjI1LFxuICAgICAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcywgc3R5bGUpKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd0NpcmNsZShyYWRpdXM6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgcmFkaXVzLCBzdHlsZSkpO1xuICAgICAgICB0aGlzLmNvbXB1dGVCb3goW3gsIHldLCBNYXRoLmFicyhyYWRpdXMpKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBSZWN0YW5nbGUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KFt4LCB5XSwgTWF0aC5hYnMoc2l6ZSkpO1xuICAgIH1cblxuICAgIGRyYXdUcmlhbmdsZShzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgVHJpYW5nbGUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KFt4LCB5XSwgTWF0aC5hYnMoc2l6ZSkpO1xuICAgIH1cblxuICAgIGZvcndhcmQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdICs9IHggKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geSAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICB9XG5cbiAgICBiYWNrd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9yd2FyZCgtZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHJpZ2h0KGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIG9yaWVudGF0aW9uIGJ5IDkwwrBcbiAgICAgICAgdGhpcy5wb3NpdGlvblswXSAtPSB5ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzFdICs9IHggKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgfVxuXG4gICAgbGVmdChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmlnaHQoLWRpc3RhbmNlKTtcbiAgICB9XG5cbiAgICBhZGRNYXJnaW4obWFyZ2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzBdICs9IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdICs9IG1hcmdpbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVCb3goW3gsIHldOiBudW1iZXJbXSwgc2l6ZSA9IDApIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzBdLCB4IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFswXSwgeCArIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMV0sIHkgLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzFdLCB5ICsgc2l6ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNhID0gdGhpcy5maXJzdENvbG9yO1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuc2Vjb25kQ29sb3I7XG4gICAgICAgIGNvbnN0IGFSYXRpbyA9IE1hdGguYWJzKGNvbG9yIC0gMC41KSAqIDI7XG4gICAgICAgIGNvbnN0IGJSYXRpbyA9IDEuMCAtIGFSYXRpbztcbiAgICAgICAgY29uc3QgciA9IE1hdGgudHJ1bmMoY2FbMF0gKiBhUmF0aW8gKyBjYlswXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLnRydW5jKGNhWzFdICogYVJhdGlvICsgY2JbMV0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBiID0gTWF0aC50cnVuYyhjYVsyXSAqIGFSYXRpbyArIGNiWzJdICogYlJhdGlvKTtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGUge1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuY2FsY0NvbG9yKG9wcy5jb2xvcik7XG4gICAgICAgIGlmIChvcHMuaXNGaWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGZpbGw6IGNvbG9yIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZmlsbDogXCJub25lXCIsIGNvbG9yOiBjb2xvciwgc3Ryb2tlOiBvcHMuc3Ryb2tlIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IERZTkFNSUNfQVJHUywgcGFyc2VMaW5lRnVuYywgcGFyc2VMaW5lVmFsdWUsIHBhcnNlUmF3VG9rZW5zIH0gZnJvbSBcIkAvY29yZS9wYXJzZXJcIjtcbmltcG9ydCB7IEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiLi9zdGVwXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgTUFYX1NURVBTID0gMTAwMDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlYyhzdGFjazogU3RhY2tTdGVwKSB7XG4gICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBNQVhfU1RFUFM7IHN0ZXArKykge1xuICAgICAgICBpZiAoc3RhY2suc3RlcCgpLmhhbHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcIk1heGltdW0gc3RlcHMgcmVhY2hlZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFeGVjKHZhbHVlQXJndW1lbnQ6IG51bWJlciwgbWF4SXRlcmF0aW9uOiBudW1iZXIsIGZ1bmN0aW9uczogRnVuY1tdLCBjdXJzb3I6IEN1cnNvcik6IFN0YWNrU3RlcCB7XG4gICAgY29uc3QgYXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlQXJndW1lbnQsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogMS4wLFxuICAgICAgICBjb2xvcjogMC4wLFxuICAgICAgICBpc0ZpbGxlZDogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbnN0IGJhZyA9IG5ldyBGdW5jdGlvbnNCYWcobWF4SXRlcmF0aW9uLCBpbml0RnVuY0JhZyhmdW5jdGlvbnMpKTtcbiAgICBjb25zdCB2YWx1ZUZ1bmNCYWcgPSBpbml0VmFsdWVCYWcoZnVuY3Rpb25zKTtcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQoeyBhcmd1bWVudCwgY3Vyc29yLCB2YWx1ZUZ1bmNCYWcgfSk7XG4gICAgcmV0dXJuIG5ldyBTdGFja1N0ZXAoY29udGV4dCwgYmFnKTtcbn1cblxuZnVuY3Rpb24gaW5pdEZ1bmNCYWcoZnVuY3Rpb25zOiBGdW5jW10pIHtcbiAgICBjb25zdCBiYWcgPSB7fTtcbiAgICBmdW5jdGlvbnNcbiAgICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+ICFEWU5BTUlDX0FSR1MuaW5jbHVkZXMobmFtZSkpXG4gICAgICAgIC5mb3JFYWNoKCh7IG5hbWUsIHRva2VuczogcmF3VG9rZW5zIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vucyk7XG4gICAgICAgICAgICBiYWdbbmFtZV0gPSBwYXJzZUxpbmVGdW5jKG5hbWUsIHRva2Vucyk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBiYWc7XG59XG5cbmZ1bmN0aW9uIGluaXRWYWx1ZUJhZyhmdW5jdGlvbnM6IEZ1bmNbXSk6IHsgW25hbWU6IHN0cmluZ106IFZhbHVlTm9kZVtdIH0ge1xuICAgIGNvbnN0IGJhZyA9IHt9O1xuICAgIGZ1bmN0aW9uc1xuICAgICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gRFlOQU1JQ19BUkdTLmluY2x1ZGVzKG5hbWUpKVxuICAgICAgICAuZm9yRWFjaCgoeyBuYW1lLCB0b2tlbnM6IHJhd1Rva2VucyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW25hbWVdID0gcGFyc2VMaW5lVmFsdWUodG9rZW5zKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGJhZztcbn0iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3R5bGUge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZT86IG51bWJlcjtcbiAgICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHlsZTogTGluZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHN0eWxlOiBMaW5lU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywgeyBzaGlmdCA9IDAuMCwgY2xvc2UgPSBmYWxzZSB9ID0ge30sIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCB3aWR0aCwgaGVpZ2h0LCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25zQmFnIHtcbiAgICBtYXhJdGVyYXRpb246IG51bWJlcjtcbiAgICBiYWc6IHtbbmFtZTogc3RyaW5nXTogRnVuY3Rpb259O1xuXG4gICAgY29uc3RydWN0b3IobWF4SXRlcmF0aW9uLCBiYWcpIHtcbiAgICAgICAgdGhpcy5tYXhJdGVyYXRpb24gPSBtYXhJdGVyYXRpb247XG4gICAgICAgIHRoaXMuYmFnID0gYmFnO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcsIGl0ZXJhdGlvbjogbnVtYmVyID0gMCk6IEZ1bmN0aW9uIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHsgbWF4SXRlcmF0aW9uIH0gPSB0aGlzO1xuICAgICAgICBpZiAoaXRlcmF0aW9uID49IG1heEl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aHJvd0Z1bmMgPSB0aGlzLiN0aHJvd0Z1bmMuYmluZCh0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24gLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpFTkRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RVZFTmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06Ok9ERGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBpdGVyYXRpb247IGkgPiAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkdFJHtpfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvd0Z1bmMobmFtZSk7XG4gICAgICAgIH0gY2F0Y2goZnVuYykge1xuICAgICAgICAgICAgaWYgKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgI3Rocm93RnVuYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHRoaXMuYmFnW25hbWVdO1xuICAgICAgICBpZiAoZnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFRva2VuLCB0b2tlbnMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIkAvY29yZS90b2tlbnNcIjtcbmltcG9ydCB7IEFjdGlvbk5vZGUsIFZhbHVlTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfQVJHUyA9IFtcIkRJQU1PTkRcIiwgXCJJTlZfVFJJQU5HTEVcIl07XG5leHBvcnQgY29uc3QgUFJPQ0VEVVJFUyA9IFtcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbmV4cG9ydCBjb25zdCBTVUZGSVhFUyA9IFtcIkVORFwiLCBcIkVWRU5cIiwgXCJPRERcIiwgXCJHRTNcIiwgXCJHRTVcIiwgXCJHRTdcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnM6IHN0cmluZ1tdKTogVG9rZW5bXSB7XG4gICAgcmV0dXJuIHJhd1Rva2Vucy5tYXAocmF3ID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbcmF3XTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgYFBhcnNpbmcgZXJyb3I6ICR7cmF3fSBpcyBub3QgdW5kZWZpbmVkIGFzIHRva2VuLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0pO1xufVxuXG5jbGFzcyBBY3Rpb25UbXAge1xuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Ob2RlW107XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IFZhbHVlTm9kZVtdO1xuICAgIHByaXZhdGUgdG9rZW46IFRva2VuIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0QWN0aW9uVG9rZW4odG9rZW46IFRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXNMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0FjdGlvblNldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW4gIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaEFjdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy50b2tlbi5mYWN0b3J5IGFzIEFjdGlvbkNiO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmYWN0b3J5KHRoaXMudmFsdWVzKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5zZXJ0VmFsdWUodmFsdWU6IFZhbHVlTm9kZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZUZ1bmMobmFtZTogc3RyaW5nLCB0b2tlbnM6IFRva2VuW10pOiBGdW5jdGlvbiB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHRtcCA9IG5ldyBBY3Rpb25UbXAoKTtcbiAgICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0bXAuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcGFyc2VWYWx1ZSh0b2tlbiwgdG1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlQWN0aW9uKHRva2VuLCB0bXApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0bXAucHVzaEFjdGlvbigpOyAvLyBwdXNoIGxhc3QgdG9rZW4uXG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKG5hbWUsIHRtcC5nZXRBY3Rpb25zKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lVmFsdWUodG9rZW5zOiBUb2tlbltdKTogVmFsdWVOb2RlW10ge1xuICAgIHJldHVybiB0b2tlbnMubWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGFjdGlvbnMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4uaXNEeW5hbWljKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGR5bmFtaWMgZWxlbWVudHMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFjdGlvbih0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgaWYgKCF0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IHRva2VuIGlzIG5vdCBhbiBhY3Rpb25cIjtcbiAgICB9XG4gICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIHRtcC5wdXNoQWN0aW9uKCk7XG4gICAgICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgdG1wLmluc2VydFZhbHVlKGZhY3RvcnkoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQ29udGV4dFN0ZXBwZXIsIGNyZWF0ZUluaXRTdGVwcGVyIH0gZnJvbSBcIi4vY29udGV4dFN0ZXBwZXJcIjtcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGhhbHQ6IGJvb2xlYW4sXG4gICAgc3RhdmU6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxufVxuXG5leHBvcnQgY2xhc3MgU3RhY2tTdGVwIHtcbiAgICAjc3RhY2s6IENvbnRleHRTdGVwcGVyW107XG4gICAgI2JhZzogRnVuY3Rpb25zQmFnO1xuICAgIHJlYWRvbmx5IGN1cnNvcjogQ3Vyc29yO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogQ29udGV4dCwgYmFnOiBGdW5jdGlvbnNCYWcpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24oXCJTVEFSVFwiKSB8fCBiYWcuZmluZEZ1bmN0aW9uKFwiRlwiKTtcbiAgICAgICAgaWYgKGZ1bmMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IFwiU3RhcnQgZnVuY3Rpb24gbm90IGZvdW5kXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc3RhY2sgPSBbY3JlYXRlSW5pdFN0ZXBwZXIoY29udGV4dCwgZnVuYyldO1xuICAgICAgICB0aGlzLiNiYWcgPSBiYWc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY29udGV4dC5jdXJzb3I7XG4gICAgfVxuXG4gICAgc3RlcCgpOiBTdGF0ZSB7XG4gICAgICAgIGlmICh0aGlzLiNzdGFjay5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXZlOiAnPycsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ6IENvbnRleHRTdGVwcGVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHN0ZXBwZXIgPSB0aGlzLmdldFRvcEVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgc3RhdmUgfSA9IHN0ZXBwZXI7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0ZXBwZXIuZXhlYygpO1xuICAgICAgICBjb25zdCBzdGlsbENvbnRpbnVlID0gc3RlcHBlci5tb3ZlKHtcbiAgICAgICAgICAgIGJhZzogdGhpcy4jYmFnLFxuICAgICAgICAgICAgcHVzaDogKGVsZW1lbnQ6IENvbnRleHRTdGVwcGVyKSA9PiB7IG5ld0VsZW1lbnQgPSBlbGVtZW50OyB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0aWxsQ29udGludWUpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YWNrLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YWNrLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFsdDogdGhpcy4jc3RhY2subGVuZ3RoID09IDAsXG4gICAgICAgICAgICBzdGF2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VG9wRWxlbWVudCgpOiBDb250ZXh0U3RlcHBlciB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGFja1t0aGlzLiNzdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEZpZ3VyZSwgQ2lyY2xlLCBBcmMsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIExpbmUsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmNvbnN0IEJMQUNLID0gXCJibGFja1wiO1xuY29uc3QgUkVEID0gXCJyZWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yOiBDdXJzb3IpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJzdmdcIik7XG4gICAgY29uc3QgW21pbl94LCBtaW5feV0gPSBjdXJzb3IuYm94Lm1pbjtcbiAgICBjb25zdCBbbWF4X3gsIG1heF95XSA9IGN1cnNvci5ib3gubWF4O1xuICAgIGNvbnN0IHdpZHRoID0gbWF4X3ggLSBtaW5feDtcbiAgICBjb25zdCBoZWlnaHQgPSBtYXhfeSAtIG1pbl95O1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAke21pbl94fSAke21pbl95fSAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBjdXJzb3IuZmlndXJlcy5mb3JFYWNoKGZpZ3VyZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0b1N2Zyhkb2N1bWVudCwgZmlndXJlKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmNvbnN0IFNRUlQzID0gTWF0aC5zcXJ0KDMpO1xuY29uc3QgU1FSVDNIMiA9IE1hdGguc3FydCgzKSAvIDI7XG5jb25zdCBIMiA9IDEgLyAyO1xuXG5mdW5jdGlvbiB0b1N2Zyhkb2N1bWVudCwgZmlndXJlOiBGaWd1cmUpIHtcbiAgICBpZiAoZmlndXJlIGluc3RhbmNlb2YgTGluZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJsaW5lXCIpO1xuICAgICAgICBjb25zdCBbeDEsIHkxXSA9IGZpZ3VyZS5maXJzdFBvaW50O1xuICAgICAgICBjb25zdCBbeDIsIHkyXSA9IGZpZ3VyZS5zZWNvbmRQb2ludDtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB4MSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTFcIiwgeTEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIngyXCIsIHgyKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB5Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGZpZ3VyZS5zdHlsZS5jb2xvciB8fCBcImJsYWNrXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBmaWd1cmUuc3R5bGUuc3Ryb2tlICE9PSB1bmRlZmluZWQgPyBmaWd1cmUuc3R5bGUuc3Ryb2tlIDogMSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcImNpcmNsZVwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN4XCIsIHgpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN5XCIsIHkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInJcIiwgZmlndXJlLnJhZGl1cyk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBBcmMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCByID0gZmlndXJlLnJhZGl1cztcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IGZpZ3VyZS5zaGlmdCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChmaWd1cmUuc2hpZnQgKyBmaWd1cmUucmF0aW8pICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3ggPSB4ICsgciAqIE1hdGguY29zKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBzdGFydF95ID0geSArIHIgKiBNYXRoLnNpbihzdGFydEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3ggPSB4ICsgciAqIE1hdGguY29zKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3kgPSB5ICsgciAqIE1hdGguc2luKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZmxhZzEgPSBNYXRoLmFicyhmaWd1cmUucmF0aW8pIDw9IDAuNSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGNvbnN0IGZsYWcyID0gZmlndXJlLnJhdGlvIDw9IDAuMCA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGxldCBwYXRoID0gYE0gJHtzdGFydF94fSAke3N0YXJ0X3l9YDtcbiAgICAgICAgcGF0aCArPSBgIEEgJHtyfSAke3J9IDAgJHtmbGFnMX0gJHtmbGFnMn0gJHtlbmRfeH0gJHtlbmRfeX1gO1xuICAgICAgICBpZiAoZmlndXJlLmNsb3NlKSB7XG4gICAgICAgICAgICBwYXRoICs9IGBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBSZWN0YW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgVyA9IGZpZ3VyZS53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IEggPSBmaWd1cmUuaGVpZ2h0IC8gMjtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4IC0gVyAqIGR4IC0gSCAqIGR5fSAke3kgKyBIICogZHggLSBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gVyAqIGR4ICsgSCAqIGR5fSAke3kgLSBIICogZHggLSBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgVyAqIGR4ICsgSCAqIGR5fSAke3kgLSBIICogZHggKyBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgVyAqIGR4IC0gSCAqIGR5fSAke3kgKyBIICogZHggKyBXICogZHl9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBUcmlhbmdsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemU7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCArIFMgKiBkeH0gJHt5ICsgUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgKyBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgLSBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2V0QmFzaWNBdHRycyhzdHlsZTogU3R5bGUsIG5vZGUpIHtcbiAgICBsZXQgc3R5bGVBdHRyID0gYGZpbGw6ICR7c3R5bGUuZmlsbCB8fCBcImJsYWNrXCJ9O2A7XG4gICAgaWYgKHN0eWxlLnN0cm9rZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlLnN0cm9rZSA+IDApIHtcbiAgICAgICAgc3R5bGVBdHRyICs9IGBzdHJva2Utd2lkdGg6ICR7c3R5bGUuc3Ryb2tlfTtgXG4gICAgICAgIHN0eWxlQXR0ciArPSBgc3Ryb2tlOiAke3N0eWxlLmNvbG9yIHx8IFwibm9uZVwifWA7XG4gICAgfVxuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGVBdHRyKTtcbn1cbiIsImltcG9ydCB7IFZhbHVlTm9kZSwgQWN0aW9uTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IE11bHRpcGxlciwgQW5nbGUsIEFyZ3VtZW50LCBEeW5hbWljQXJndW1lbnQgfSBmcm9tIFwiQC9jb3JlL2FzdC92YWx1ZXNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gXCJAL2NvcmUvYXN0L2NvbG9yc1wiO1xuaW1wb3J0ICogYXMgc3Ryb2tlcyBmcm9tIFwiQC9jb3JlL2FzdC9zdHJva2VzXCI7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSBcIkAvY29yZS9hc3Qvb3BzXCI7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNiID0gKHZhbHVlczogVmFsdWVOb2RlW10pID0+IEFjdGlvbk5vZGU7XG5leHBvcnQgdHlwZSBWYWx1ZUNiID0gKCkgPT4gVmFsdWVOb2RlO1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIGlzQWN0aW9uOiBib29sZWFuO1xuICAgIGlzRHluYW1pYzogYm9vbGVhbjtcbiAgICBmYWN0b3J5OiBBY3Rpb25DYiB8IFZhbHVlQ2I7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlzQWN0aW9uLCBpc0R5bmFtaWMsIGZhY3RvcnkgfSkge1xuICAgICAgICB0aGlzLmlzQWN0aW9uID0gaXNBY3Rpb247XG4gICAgICAgIHRoaXMuaXNEeW5hbWljID0gaXNEeW5hbWljO1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoZmFjdG9yeTogVmFsdWVDYiwgaXNEeW5hbWljID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IGZhbHNlLCBpc0R5bmFtaWMsIGZhY3RvcnkgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbihmYWN0b3J5OiBBY3Rpb25DYikge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogdHJ1ZSwgaXNEeW5hbWljOiB0cnVlLCBmYWN0b3J5IH0pO1xufVxuXG5leHBvcnQgY29uc3QgdG9rZW5zID0ge1xuICAgIC8vICoqKiBWYWx1ZXMgKioqXG4gICAgLy8gQ291bnRzXG4gICAgQ09VTlRfMTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxKSksXG4gICAgQ09VTlRfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyKSksXG4gICAgQ09VTlRfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzKSksXG4gICAgQ09VTlRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig1KSksXG4gICAgQ09VTlRfNzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig3KSksXG4gICAgLy8gQ291bnRzIChzcGVjaWFsKVxuICAgIENPVU5UX01JTlVTOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKC0xKSksXG4gICAgQ09VTlRfR09MRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxLjYxODAzMzk4OSkpLFxuICAgIENPVU5UX1NJTFZFUjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyLjQxNDIxMzU2MikpLFxuICAgIENPVU5UX0JST05aRTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzLjMwMjc3NTYzOCkpLFxuICAgIENPVU5UX1BMQVNUSUM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMS4zMjQ3MTc5NTcyKSksXG4gICAgLy8gRnJhY3Rpb25zXG4gICAgRlJBQ1RfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAyKSksXG4gICAgRlJBQ1RfMV8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAzKSksXG4gICAgRlJBQ1RfMl8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIgLyAzKSksXG4gICAgRlJBQ1RfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA0KSksXG4gICAgRlJBQ1RfM180OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMgLyA0KSksXG4gICAgRlJBQ1RfMV81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA1KSksXG4gICAgRlJBQ1RfMl81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIgLyA1KSksXG4gICAgRlJBQ1RfM181OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMgLyA1KSksXG4gICAgRlJBQ1RfNF81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDQgLyA1KSksXG4gICAgLy8gQW5nbGVzXG4gICAgLy9BTkdMRV8zNjA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzNjApKSxcbiAgICBBTkdMRV8yNzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgyNzApKSxcbiAgICBBTkdMRV8xODA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxODApKSxcbiAgICBBTkdMRV85MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDkwKSksXG4gICAgQU5HTEVfNjA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg2MCkpLFxuICAgIEFOR0xFXzQ1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNDUpKSxcbiAgICBBTkdMRV8zMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDMwKSksXG4gICAgQU5HTEVfMTU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxNSkpLFxuICAgIEFOR0xFXzEwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTApKSxcbiAgICAvLyBDb2xvcnNcbiAgICBDT0xPUl9NQVg6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWF4Q29sb3IoKSksXG4gICAgQ09MT1JfTUlOOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1pbkNvbG9yKCkpLFxuICAgIENPTE9SX1NISUZUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAyKSksXG4gICAgQ09MT1JfU0hJRlRfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDQpKSxcbiAgICBDT0xPUl9TSElGVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNSkpLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMTApKSxcbiAgICBDT0xPUl9GSUxMOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLkZpbGxDb2xvcigpKSxcbiAgICBDT0xPUl9FTVBUWTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5FbXB0eUNvbG9yKCkpLFxuICAgIC8vIFN0cm9rZVxuICAgIFNUUk9LRV9TT0xJRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJzb2xpZFwiKSksXG4gICAgU1RST0tFX0RBU0hFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkYXNoZWRcIikpLFxuICAgIFNUUk9LRV9ET1RURUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZG90dGVkXCIpKSxcbiAgICBTVFJPS0VfVEhJQ0tfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygrMSkpLFxuICAgIFNUUk9LRV9USElDS19TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKC0xKSksXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIE9QX01VTFQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuTXVsdE9wKCkpLFxuICAgIE9QX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5BZGRPcCgpKSxcbiAgICBPUF9TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuU3ViT3AoKSksXG4gICAgLy8gQXJndW1lbnRzXG4gICAgQVJHVU1FTlQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBcmd1bWVudCgpKSxcbiAgICBDQUxMX0RJQU1PTkQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJESUFNT05EXCIpLCB0cnVlKSxcbiAgICBDQUxMX0lOVl9UUklBTkdMRTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIklOVl9UUklBTkdMRVwiKSwgdHJ1ZSksXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgQ0FMTF9GOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiRlwiLCB2KSksXG4gICAgQ0FMTF9HOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiR1wiLCB2KSksXG4gICAgQ0FMTF9IOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gU2hhcGVzXG4gICAgRFJBV19DSVJDTEU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdDaXJjbGUodikpLFxuICAgIERSQVdfU1FVQVJFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3U3F1YXJlKHYpKSxcbiAgICBEUkFXX1RSSUFOR0xFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3VHJpYW5nbGUodikpLFxuICAgIC8vIExpbmVcbiAgICBEUkFXX0xJTkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdMaW5lKHYpKSxcbiAgICAvLyBBcmNcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCszIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDUsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0zIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDUsIHYpKSxcbiAgICAvLyBDdXJzb3IgdHJhbnNsYXRpb25zXG4gICAgTU9WRV9GT1JXQVJEOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlRm9yd2FyZCh2KSksXG4gICAgTU9WRV9CQUNLV0FSRDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUJhY2t3YXJkKHYpKSxcbiAgICBNT1ZFX0xFRlQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVMZWZ0KHYpKSxcbiAgICBNT1ZFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlUmlnaHQodikpLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVSaWdodCh2KSksXG5cbiAgICAvLyBSZXBldGV0aXZlIGFjdGlvbnNcbiAgICBSRVZFUlNFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2KSksXG4gICAgUkVQTEFZXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAyKSksXG4gICAgUkVQTEFZXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAzKSksXG4gICAgUkVQTEFZXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCA0KSksXG59O1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9VUkwgPSBgJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL2A7XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5pbXBvcnQgeyBDb2RlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb2RlXCI7XG5pbXBvcnQgeyBEb2NCYXJWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2RvY0JhclwiO1xuaW1wb3J0IHsgVGl0bGVWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL3RpdGxlXCI7XG5pbXBvcnQgeyBDb21tZW50VmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb21tZW50XCI7XG5pbXBvcnQgeyBJbWFnZVZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvaW1hZ2VcIjtcbmltcG9ydCB7IFN0YXZlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9zdGF2ZVwiO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL3dlYi9tb2RlbHNcIjtcbmltcG9ydCB7IGV4ZWMsIHNldHVwRXhlYyB9IGZyb20gXCJAL2NvcmUvZXhlY1wiO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUdXRBbmltUGFyYW1zIHtcbiAgICBzdGF2ZXM6IHN0cmluZ1tdO1xuICAgIGl0ZXJhdGlvbnM6IG51bWJlcixcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHRva2Vuczogc3RyaW5nW10sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub2RlSWQ6IHN0cmluZyxcbn1cblxuXG5leHBvcnQgY2xhc3MgRG9jc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGltYWdlVmlldzogSW1hZ2VWaWV3O1xuICAgIHByaXZhdGUgY29kZVZpZXc6IENvZGVWaWV3O1xuICAgIHByaXZhdGUgZG9jQmFyVmlldzogRG9jQmFyVmlldztcbiAgICBwcml2YXRlIGNvbW1lbnRWaWV3OiBDb21tZW50VmlldztcbiAgICBwcml2YXRlIHRpdGxlVmlldzogVGl0bGVWaWV3O1xuXG4gICAgcHJpdmF0ZSBpdGVyYXRpb25zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogVHV0QW5pbVBhcmFtcywgaWNvblVybDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtcy5ub2RlSWQpKTtcbiAgICAgICAgdGhpcy5pbml0UmVuZGVyKHBhcmFtcyk7XG5cbiAgICAgICAgdGhpcy5pdGVyYXRpb25zID0gcGFyYW1zLml0ZXJhdGlvbnM7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG5cbiAgICAgICAgdGhpcy5pbWFnZVZpZXcgPSBuZXcgSW1hZ2VWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWltYWdlXCIpKTtcbiAgICAgICAgdGhpcy50aXRsZVZpZXcgPSBuZXcgVGl0bGVWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LXRpdGxlXCIpLCBwYXJhbXMudGl0bGUpO1xuICAgICAgICB0aGlzLmNvbW1lbnRWaWV3ID0gbmV3IENvbW1lbnRWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWNvbW1lbnRcIikpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcgPSBuZXcgRG9jQmFyVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1iYXJcIiksXG4gICAgICAgICAgICBuZXh0OiB0aGlzLm5leHQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHByZXY6IHRoaXMucHJldi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2RlVmlldyA9IG5ldyBDb2RlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1zdGF2ZXNcIiksXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvbkRyb3A6IG51bGwsXG4gICAgICAgICAgICAgICAgb25Nb3ZlOiBudWxsLFxuICAgICAgICAgICAgICAgIG9uRHJhZ1RpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY2FuRHJhZzogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uVXJsLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKHBhcmFtcy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICB0aXRsZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRpdGxlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRpdGxlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGltYWdlTm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtaW1hZ2VcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaW1hZ2VOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBzdGF2ZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgc3RhdmVzTm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3Qtc3RhdmVzXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHN0YXZlc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1jb21tZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBiYXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWJhclwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChiYXJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdmVCYWc6IFN0YXZlW10gPSBwYXJhbXMuc3RhdmVzLm1hcChzdGF2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4ID0gXCJcIl0gPSBzdGF2ZS5zcGxpdChcIjo6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvZGVWaWV3LnJlbmRlcihzdGF2ZUJhZyk7XG4gICAgICAgIHRoaXMuZG9jQmFyVmlldy5yZW5kZXIodGhpcy5wb3NpdGlvbiwgdGhpcy50b2tlbnMubGVuZ3RoLCB0aGlzLml0ZXJhdGlvbnMpO1xuICAgICAgICB0aGlzLnRpdGxlVmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jb21tZW50Vmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tbWVudCgpO1xuICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcudXBkYXRlKHRoaXMucG9zaXRpb24sIHRoaXMudG9rZW5zLmxlbmd0aCwgdGhpcy5pdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBpdGVyYXRlVG9Qb3NpdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMuc3RhcnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZFeGVjdXRlKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gLT0gMTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBzY3JhcGVBbmRSdW4oKSB7XG4gICAgICAgIGNvbnN0IGN1cnNvckNmZyA9IHt9O1xuICAgICAgICBjb25zdCBhcmd1bWVudCA9IDEuMDtcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuY29kZVZpZXcuc2NyYXBlQ29kZSgpO1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGN1cnNvckNmZyk7XG4gICAgICAgIGNvbnN0IHN0YWNrID0gc2V0dXBFeGVjKGFyZ3VtZW50LCB0aGlzLml0ZXJhdGlvbnMsIGNvZGUsIGN1cnNvcik7XG4gICAgICAgIGV4ZWMoc3RhY2spO1xuICAgICAgICB0aGlzLmltYWdlVmlldy5yZW5kZXIoY3Vyc29yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3N0YXZlLCB0b2tlbl0gPSBjb21tYW5kLnNwbGl0KFwiQFwiLCAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb2tlbk9uQmFjayhzdGF2ZSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZC5zdWJzdHJpbmcoMSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfSU5DXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfREVDXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXZFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xpbmVdID0gY29tbWFuZC5zcGxpdChcIkBcIiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMYXN0VG9rZW4obGluZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9JTkNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9ERUNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJOT1BcIjogYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcihgJHtjb21tYW5kfSBub3QgZm91bmRgKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tbWFuZHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjb21tYW5kV2l0aENvbW1lbnQgPSB0aGlzLnRva2Vuc1t0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgY29uc3QgW3Jhd0NvbW1hbmRzXSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMSk7XG4gICAgICAgIHJldHVybiByYXdDb21tYW5kcy5zcGxpdChcIixcIikubWFwKHJhd0NvbW1hbmQgPT4gcmF3Q29tbWFuZC50cmltKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFssIHJhd0NvbW1lbnRdID0gY29tbWFuZFdpdGhDb21tZW50LnNwbGl0KFwiI1wiLCAyKTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQgPyByYXdDb21tZW50LnRyaW0oKSA6IFwiXCI7XG4gICAgICAgIHRoaXMuY29tbWVudFZpZXcucmVuZGVyKGNvbW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuT25CYWNrKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGFzdFRva2VuKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZyk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxTdGF2ZU5hbWUoZnVsbFN0YXZlTmFtZSk7XG4gICAgICAgIGNvbnN0IHN0YXZlID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgaWYgKHN0YXZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IGBzdGF2ZSBub3QgZm91bmQ6ICR7ZnVsbFN0YXZlTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF2ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwbGl0RnVsbFN0YXZlTmFtZShmdWxsU3RhdmVOYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBmdWxsU3RhdmVOYW1lLnNwbGl0KFwiOjpcIiwgMik7XG4gICAgICAgIHJldHVybiBbbmFtZSwgc3VmZml4IHx8IFwiXCJdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5TOiBUb2tlbkluZm9bXSA9IFtcbiAgICB7bmFtZTogJ0FSR1VNRU5UJywgbGFiZWw6ICdBcmd1bWVudCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDQUxMX0lOVl9UUklBTkdMRScsIGxhYmVsOiAnSW52ZXJzZSB0cmlhbmdsZScsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDQUxMX0YnLCBsYWJlbDogJ0YgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0cgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0gnLCBsYWJlbDogJ0ggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0RSQVdfTElORScsIGxhYmVsOiAnTGluZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19DSVJDTEUnLCBsYWJlbDogJ0NpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfU1FVQVJFJywgbGFiZWw6ICdTcXVhcmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdUcmlhbmdsZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfM180JywgbGFiZWw6ICdBcmMgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8yXzMnLCBsYWJlbDogJ0FyYyAyLzMgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnQXJjIDEvMiAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzQnLCBsYWJlbDogJ0FyYyAxLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfNScsIGxhYmVsOiAnQXJjIDEvNSAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfM180JywgbGFiZWw6ICdBcmMgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzJfMycsIGxhYmVsOiAnQXJjIDIvMyAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzInLCBsYWJlbDogJ0FyYyAxLzIgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnQXJjIDEvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCBsYWJlbDogJ0FyYyAxLzUgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdNT1ZFX0ZPUldBUkQnLCBsYWJlbDogJ01vdmUgZm9yd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfQkFDS1dBUkQnLCBsYWJlbDogJ01vdmUgYmFja3dhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdNT1ZFX0xFRlQnLCBsYWJlbDogJ01vdmUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfUklHSFQnLCBsYWJlbDogJ01vdmUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfTEVGVCcsIGxhYmVsOiAnUm90YXRlIGxlZnQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfUklHSFQnLCBsYWJlbDogJ1JvdGF0ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnUkVWRVJTRScsIGxhYmVsOiAnUmV2ZXJzZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5IHRoZSBsYXN0IGFjdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV8yJywgbGFiZWw6ICdSZXBsYXkgdGhlIHR3byBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfMycsIGxhYmVsOiAnUmVwbGF5IHRoZSB0aHJlZSBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfNCcsIGxhYmVsOiAnUmVwbGF5IHRoZSBmb3VyIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnQ09VTlRfMScsIGxhYmVsOiAnT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF8yJywgbGFiZWw6ICdUd28nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF81JywgbGFiZWw6ICdGaXZlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF83JywgbGFiZWw6ICdTZXZlbicsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDT1VOVF9NSU5VUycsIGxhYmVsOiAnTWludXMgT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9HT0xEJywgbGFiZWw6ICdHb2xkZW4gUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX1NJTFZFUicsIGxhYmVsOiAnU2lsdmVyIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9CUk9OWkUnLCBsYWJlbDogJ0Jyb256ZSBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfUExBU1RJQycsIGxhYmVsOiAnUGxhc3RpYyBOdW1iZXInLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnRlJBQ1RfMV8yJywgbGFiZWw6ICdIYWxmJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzMnLCBsYWJlbDogJ09uZSBUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl8zJywgbGFiZWw6ICdUd28gVGhpcmRzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzQnLCBsYWJlbDogJ09uZSBRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8zXzQnLCBsYWJlbDogJ1RocmVlIHF1YXJ0ZXJzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzUnLCBsYWJlbDogJ09uZSBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl81JywgbGFiZWw6ICdUd28gRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzNfNScsIGxhYmVsOiAnVGhyZWUgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzRfNScsIGxhYmVsOiAnRm91ciBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xODAnLCBsYWJlbDogJzE4MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV85MCcsIGxhYmVsOiAnOTDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzQ1JywgbGFiZWw6ICc0NcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8zMCcsIGxhYmVsOiAnMzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzEwJywgbGFiZWw6ICcxMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ09QX01VTFQnLCBsYWJlbDogJ011bHRpcGxlIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9BREQnLCBsYWJlbDogJ0FkZGl0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9NQVgnLCBsYWJlbDogJ1NlY29uZCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfTUlOJywgbGFiZWw6ICdGaXJzdCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRklMTCcsIGxhYmVsOiAnRmlsbGVkIEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRU1QVFknLCBsYWJlbDogJ1RyYW5zcGFyZW50IEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzUnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfQUREJywgbGFiZWw6ICdUaGljayBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ1NUUk9LRV9USElDS19TVUInLCBsYWJlbDogJ1RoaW4gc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgTkFNRV9UT19UT0tFTiA9IG5ldyBNYXA8c3RyaW5nLCBUb2tlbkluZm8+KFxuICAgIFRPS0VOUy5tYXAodG9rZW4gPT4gW3Rva2VuLm5hbWUsIHRva2VuXSlcbik7XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IFN0YXZlVmlldyB9IGZyb20gJy4vc3RhdmUnO1xuaW1wb3J0IHsgQ2FsbGJhY2tzIH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICdAL3dlYi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBDb2RlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RhdmVWaWV3czogU3RhdmVWaWV3W107XG4gICAgcHJpdmF0ZSBjYWxsYmFja3M6IENhbGxiYWNrcztcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBjYWxsYmFja3MsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMfToge1xuICAgICAgICBub2RlOiBIVE1MRWxlbWVudCxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3MsXG4gICAgICAgIGljb25Vcmw/OiBzdHJpbmcsXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzID0gW107XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHJlbmRlcihzdGF2ZXM6IFN0YXZlW10pIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MgPSBzdGF2ZXMubWFwKHRoaXMuY3JlYXRlU3RhdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZmluZFN0YXZlKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBTdGF2ZVZpZXcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF2ZVZpZXdzLmZpbmQodmlldyA9PiB2aWV3LmNoZWNrTmFtZShuYW1lLCBzdWZmaXgpKTtcbiAgICB9XG5cbiAgICBhZGRTdGF2ZShwYXJhbXM6IHsgbmFtZTogc3RyaW5nOyBzdWZmaXg6IHN0cmluZzsgdG9rZW5zOiBzdHJpbmdbXSB9KSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmNyZWF0ZVN0YXZlKHtcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtcy5uYW1lLFxuICAgICAgICAgICAgc3VmZml4OiBwYXJhbXMuc3VmZml4LFxuICAgICAgICAgICAgdG9rZW5zOiBwYXJhbXMudG9rZW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzLnB1c2godmlldyk7XG4gICAgfVxuXG4gICAgc2NyYXBlQ29kZSgpOiBTdGF2ZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdmVWaWV3cy5maWx0ZXIodmlldyA9PiB2aWV3LmNvdWxkQmVTY3JhcGVkKCkpLm1hcCh2aWV3ID0+IHZpZXcuc2NyYXBlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVTdGF2ZSh7IG5hbWUsIHN1ZmZpeCwgdG9rZW5zIH0pOiBTdGF2ZVZpZXcge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBTdGF2ZVZpZXcoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCB8fCBcIlwiLFxuICAgICAgICAgICAgaWNvblVybDogdGhpcy5pY29uVXJsLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB0aGlzLmNhbGxiYWNrcyxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1jb21tZW50XCIpO1xuICAgIH1cblxuICAgIHJlbmRlcihjb21tZW50OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lclRleHQgPSBjb21tZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NCYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBuZXh0OiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgcHJldjogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBuZXh0LCBwcmV2fToge25vZGU6IEhUTUxFbGVtZW50LCBuZXh0OiAoKSA9PiB2b2lkLCBwcmV2OiAoKSA9PiB2b2lkfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1iYXJcIik7XG4gICAgICAgIHRoaXMubmV4dCA9IG5leHQ7XG4gICAgICAgIHRoaXMucHJldiA9IHByZXY7XG4gICAgfVxuXG4gICAgcmVuZGVyKHBvc2l0aW9uOiBudW1iZXIsIHRva2VuU2l6ZTogbnVtYmVyLCBpdGVyYXRpb25zOiBudW1iZXIpIHtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCLCqyBQUkVWXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcInByZXZcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucHJldik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJORVhUIMK7XCI7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lclRleHQgPSBcIkl0ZXJhdGlvbnM6XCI7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBpdE5vZGUudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICBpdE5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgaXROb2RlLm5hbWUgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpdE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUocG9zaXRpb24sIHRva2VuU2l6ZSwgaXRlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHBvc2l0aW9uOiBudW1iZXIsIHRva2VuU2l6ZTogbnVtYmVyLCBpdGVyYXRpb25zOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJuZXh0XCIpLmRpc2FibGVkID0gcG9zaXRpb24gPj0gdG9rZW5TaXplIC0gMTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJwcmV2XCIpLmRpc2FibGVkID0gcG9zaXRpb24gPD0gMDtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJpdGVyYXRpb25zXCIpLnZhbHVlID0gaXRlcmF0aW9ucy50b0ZpeGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kSW5wdXQobmFtZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiQC9jb3JlL3N2Z1wiO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcblxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyBleHRlbmRzIFZpZXcge1xuXG4gICAgcmVuZGVyKGN1cnNvcjogQ3Vyc29yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvciA/IGJhY2tncm91bmRDb2xvciA6IFwibm9uZVwiO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3IpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuaW1wb3J0IHsgVG9rZW5zU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZVRva2VuJztcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICdAL3dlYi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF2ZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRva2VuVmlldzogVG9rZW5zU3RhdmVWaWV3XG4gICAgcHJpdmF0ZSB0b2tlbnNOb2RlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwsXG4gICAgICAgIHRva2VucyA9IFtdLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICAgICAgICB0aGlzLnRva2Vuc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnRva2VuVmlldyA9IG5ldyBUb2tlbnNTdGF2ZVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy50b2tlbnNOb2RlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzdGF2ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hbWUodGhpcy5uYW1lLCB0aGlzLnN1ZmZpeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy50b2tlbnNOb2RlKTtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2hlY2tOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSAmJiB0aGlzLnN1ZmZpeCA9PT0gc3VmZml4O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgfVxuXG4gICAgc2hvd09ySGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbkFmdGVyKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucHVzaFRva2VuQWZ0ZXIodG9rZW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZXBsYWNlVG9rZW4obmV3VG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZXBsYWNlVG9rZW4obmV3VG9rZW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuKGluZGV4KTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5PbkJhY2sodG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuT25CYWNrKCkge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIGNvdWxkQmVTY3JhcGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSB0aGlzLm5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKTtcbiAgICAgICAgcmV0dXJuICFpc0hpZGU7XG4gICAgfVxuXG4gICAgc2NyYXBlKCk6IFN0YXZlIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlblZpZXcuc2NyYXBlVG9rZW5zKCk7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBzdWZmaXh9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX06OiR7c3VmZml4fWAgOiBuYW1lO1xuICAgICAgICByZXR1cm4ge25hbWU6IHJlYWxuYW1lLCB0b2tlbnN9O1xuICAgIH1cblxuICAgIGFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5hZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnLCBhY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZUZsYWdPbkFjdGlvblRva2VuKGZsYWcsIGFjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmFtZShuYW1lOiBzdHJpbmcsIHN1ZmZpeD86IHN0cmluZyk6IEVsZW1lbnQge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX1fJHtzdWZmaXh9YCA6IG5hbWU7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaWNvblVybH0vQ0FMTF8ke3JlYWxuYW1lfS5zdmcpYDtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVG9rZW5zVmlldyB9IGZyb20gJy4vdG9rZW4nO1xuXG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFRva2Vuc1N0YXZlVmlldyBleHRlbmRzIFRva2Vuc1ZpZXcge1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwsXG4gICAgICAgIHRva2VucyA9IFtdLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInRva2Vuc1wiKTtcblxuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlbmRlclRva2VucygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlblNwYW5Ob2RlKDApKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWN0aW9uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2Vucy5mb3JFYWNoKCh0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25JbmRleCA9IHRoaXMucHVzaFRva2VuTm9kZU9uQmFjayh0aGlzLm5vZGUsIHRva2VuLCBpbmRleCwgYWN0aW9uSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbkFmdGVyKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKGluZGV4LCAwLCB0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVwbGFjZVRva2VuKG5ld1Rva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnNbaW5kZXhdID0gbmV3VG9rZW47XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW4oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbk9uQmFjayh0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuT25CYWNrKCkge1xuICAgICAgICB0aGlzLnRva2Vucy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hUb2tlbk5vZGVPbkJhY2sodG9rZW5zTm9kZTogSFRNTEVsZW1lbnQsIHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFjdGlvbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBhcHBlbmRTcGFuID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXggKyBzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwZW5kQ2hpbGQgPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbm9kZTogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKGNvbnRhaW5lciwgcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gdGhpcy5jcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbiwgaW5kZXgsIGFjdGlvbkluZGV4KTtcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gdG9rZW5zTm9kZS5sYXN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIC8vIHByb2JhYmx5IGl0J3MgYSBzcGFuLCBmaW5kIHByZXZpb3VzIG5vZGVcbiAgICAgICAgICAgIGxhc3ROb2RlID0gbGFzdE5vZGUucHJldmlvdXNTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNHcm91cCA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmFjdC10b2tlbi1ncm91cFwiKTtcbiAgICAgICAgY29uc3QgaXNBY3Rpb24gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUuZGF0YXNldD8udHlwZSA9PT0gXCJhY3Rpb25cIjtcblxuICAgICAgICBpZiAoIWxhc3ROb2RlKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4ICsgKGlzQWN0aW9uKHRva2VuTm9kZSkgPyAxIDogMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBY3Rpb24odG9rZW5Ob2RlKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNHcm91cChsYXN0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQobGFzdE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU3Bhbih0b2tlbnNOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzQWN0aW9uKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZ3JvdXAgd2l0aCBhY3Rpb24gYW5kIHZhbHVlLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gdGhpcy5jcmVhdGVFbXB0eVRva2VuR3JvdXAoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZChsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlKTtcbiAgICAgICAgICAgIHRva2Vuc05vZGUuaW5zZXJ0QmVmb3JlKGdyb3VwTm9kZSwgbGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZ3JvdXBOb2RlLmRhdGFzZXQuYWN0aW9uSW5kZXggPSBsYXN0Tm9kZS5kYXRhc2V0LmFjdGlvbkluZGV4O1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZ3JvdXBOb2RlLCBsYXN0Tm9kZSwgMCk7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhY3Rpb25JbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVUb2tlbk5vZGUodG9rZW4pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHRoaXMuc3VmZml4O1xuICAgICAgICBpZiAobm9kZS5kYXRhc2V0Py50eXBlID09PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICBub2RlLmRhdGFzZXQuYWN0aW9uSW5kZXggPSBgJHthY3Rpb25JbmRleH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnTm9kZShub2RlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZHJhZ05vZGUgPSBzdXBlci5jcmVhdGVEcmFnTm9kZShub2RlKTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5pbmRleCA9IG5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5uYW1lID0gbm9kZS5kYXRhc2V0Lm5hbWU7XG4gICAgICAgIGRyYWdOb2RlLmRhdGFzZXQuc3VmZml4ID0gbm9kZS5kYXRhc2V0LnN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIGRyYWdOb2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbXB0eVRva2VuR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLWdyb3VwXCJdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY3JhcGVUb2tlbnMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLXNwYW5cIl0sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHRoaXMuc3VmZml4O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5SZW1vdmVTcGFuTm9kZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC10b2tlbi1zcGFuXCIsIFwicmVtb3ZlXCIpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59O1xuXG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgVGl0bGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSB0ZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCwgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvbkRyb3A6IChkOiBIVE1MRWxlbWVudCwgbzogSFRNTEVsZW1lbnQpID0+IHZvaWQgfCBudWxsO1xuICAgIG9uTW92ZTogKGQ6IEhUTUxFbGVtZW50LCBvOiBIVE1MRWxlbWVudCB8IG51bGwsIG46IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZCB8IG51bGw7XG4gICAgb25EcmFnVGltZW91dDogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBib29sZWFuO1xuICAgIGNhbkRyYWc6ICgpID0+IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5zVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHJlYWRvbmx5IGljb25Vcmw6IHN0cmluZztcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3NcblxuICAgIGNvbnN0cnVjdG9yKHsgbm9kZSwgY2FsbGJhY2tzLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCB9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrc1xuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBnZXQgaXNEcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWxsYmFja3Mub25Ecm9wICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleCkuY2xhc3NMaXN0LmFkZChmbGFnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXgpLmNsYXNzTGlzdC5yZW1vdmUoZmxhZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAqW2RhdGEtYWN0aW9uLWluZGV4PScke2FjdGlvbkluZGV4fSddYDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZyYWN0LXRva2VuJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnR5cGUgPSB0b2tlbkluZm8gPyB0b2tlbkluZm8udHlwZSA6IFwidW5rbm93blwiO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9LyR7dG9rZW59LnN2ZylgO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRUb2tlbkV2ZW50cyhub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGRyYWdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKCdmcmFjdC10b2tlbicsICdtb3ZlJyk7XG4gICAgICAgIGRyYWdOb2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LnRva2VuID0gbm9kZS5kYXRhc2V0LnRva2VuO1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbkV2ZW50cyhub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdNb3VzZVN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdUb3VjaFN0YXJ0LCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xuICAgICAgICBjb25zdCBjYW5EcmFnID0gKCkgPT4gY2FsbGJhY2tzLmNhbkRyYWcgJiYgIWNhbGxiYWNrcy5jYW5EcmFnKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dCA9IChjb29yZHNDYikgPT5cbiAgICAgICAgICAgIG5ldyBEcmFnQ29udGV4dChcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmNyZWF0ZURyYWdOb2RlKG5vZGUpLCBcbiAgICAgICAgICAgICAgICAoKSA9PiBjYWxsYmFja3Mub25EcmFnVGltZW91dCAhPT0gbnVsbCA/IGNhbGxiYWNrcy5vbkRyYWdUaW1lb3V0KG5vZGUpIDogZmFsc2UsIFxuICAgICAgICAgICAgICAgIGNvb3Jkc0NiLCBcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdNb3VzZVN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldE1vdXNlQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIG1vdXNldXA6IGNvbnRleHQuY3JlYXRlRHJhZ1N0b3AoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGV4dC51cGRhdGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ1RvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MuY2FuRHJhZyAmJiAhY2FsbGJhY2tzLmNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldFRvdWNoQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIHRvdWNobW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBjb250ZXh0LmNyZWF0ZURyYWdTdG9wKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE1vdXNlQ29vcmRzKGV2ZW50OiBNb3VzZUV2ZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG91Y2hDb29yZHMoZXZlbnQ6IFRvdWNoRXZlbnQpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIERyYWdDb250ZXh0PEV2ZW50VHlwZSBleHRlbmRzIEV2ZW50PiB7XG4gICAgcHJpdmF0ZSBkcmFnTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHByaXZhdGUgb3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIGluaXRpYWxDb29yZHM6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuICAgIHByaXZhdGUgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfTtcbiAgICBwcml2YXRlIF9nZXRDb29yZHM6IChldmVudDogRXZlbnRUeXBlKSA9PiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBDYWxsYmFja3M7XG4gICAgcHJpdmF0ZSBjcmVhdGVEcmFnTm9kZTogKCkgPT4gSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY3JlYXRlRHJhZ05vZGU6ICgpID0+IEhUTUxFbGVtZW50LFxuICAgICAgICBvblRpbWVvdXQ6ICgpID0+IGJvb2xlYW4sXG4gICAgICAgIGdldENvb3JkczogKGV2ZW50OiBFdmVudFR5cGUpID0+IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWF0ZURyYWdOb2RlID0gY3JlYXRlRHJhZ05vZGU7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5fZ2V0Q29vcmRzID0gZ2V0Q29vcmRzO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKG9uVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGNyZWF0ZURyYWdNb3ZlKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURyYWdTdG9wKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Ecm9wKHRoaXMuZHJhZ05vZGUsIHRoaXMub3Zlck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZXZlbnQ6IEV2ZW50VHlwZSwgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfSkge1xuICAgICAgICB0aGlzLmluaXRpYWxDb29yZHMgPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLmV2ZW50Q2FsbGJhY2tzID0gZXZlbnRDYWxsYmFja3NcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudENhbGxiYWNrcykuZm9yRWFjaCgoW25hbWUsIGNiXSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdOb2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTW92ZSh0aGlzLmRyYWdOb2RlLCB0aGlzLm92ZXJOb2RlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50Q2FsbGJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2JdKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZXZlbnQ6IEV2ZW50VHlwZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuY29tcHV0ZXJEaXN0YW5jZVRvSW5pdGlhbENvb3JkcyhldmVudCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiA1KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTm9kZSA9IHRoaXMuY3JlYXRlRHJhZ05vZGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ05vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3Jkcyh4LCB5KTtcbiAgICAgICAgY29uc3Qgb2xkT3Zlck5vZGUgPSB0aGlzLm92ZXJOb2RlO1xuICAgICAgICBjb25zdCBuZXdPdmVyTm9kZSA9IHRoaXMuZmluZE92ZXJOb2RlKCk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUgJiYgIU9iamVjdC5pcyhvbGRPdmVyTm9kZSwgbmV3T3Zlck5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbk1vdmUodGhpcy5kcmFnTm9kZSwgb2xkT3Zlck5vZGUsIG5ld092ZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbmV3T3Zlck5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlckRpc3RhbmNlVG9Jbml0aWFsQ29vcmRzKGV2ZW50OiBFdmVudFR5cGUpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBkeCA9IHRoaXMuaW5pdGlhbENvb3Jkc1swXSAtIHg7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5pbml0aWFsQ29vcmRzWzFdIC0geTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb29yZHMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnTm9kZS5zdHlsZS5sZWZ0ID0gYCR7eC50b0ZpeGVkKCl9cHhgO1xuICAgICAgICB0aGlzLmRyYWdOb2RlLnN0eWxlLnRvcCA9IGAke3kudG9GaXhlZCgpfXB4YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRPdmVyTm9kZSgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZVwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRXYWxrZXJGaWx0ZXIoKTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb2RlTm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIGZpbHRlcik7XG4gICAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB3YWxrZXIuY3VycmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXYWxrZXJGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IFZBTElEX0NMQVNTRVMgPSBbJ2ZyYWN0LXRva2VuLXNwYW4nLCAnZnJhY3Qtc3RhdmVzJywgJ3Rva2VucyddO1xuICAgICAgICBjb25zdCBkcmFnUmVjdCA9IHRoaXMuZHJhZ05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcmFnUmVjdC5yaWdodCA8IHJlY3QubGVmdFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5sZWZ0ID4gcmVjdC5yaWdodFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5ib3R0b20gPCByZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC50b3AgPiByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghVkFMSURfQ0xBU1NFUy5zb21lKGMgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoYykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb29yZHMoZXZlbnQ6IEV2ZW50VHlwZSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBueCA9IHggLSB0aGlzLmRyYWdOb2RlLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbnkgPSB5IC0gdGhpcy5kcmFnTm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBbbngsIG55XTtcbiAgICB9XG5cbn07IiwiZXhwb3J0IGNsYXNzIFZpZXcge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJhbXM6IHtcbiAgICAgICAgbmFtZTogSztcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIH0pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMubmFtZSk7XG4gICAgICAgIGlmIChwYXJhbXMuY2xhc3Nlcykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5jbGFzc2VzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBEb2NzQ29udHJvbGxlciwgVHV0QW5pbVBhcmFtcyB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2RvY3NcIjtcblxuaW1wb3J0IFwiQC9zdHlsZS9kb2NzLnNjc3NcIjtcblxuY29uc3QgQU5JTUFUSU9OU19QQVJBTVM6IFR1dEFuaW1QYXJhbXNbXSA9IFtdO1xuY29uc3QgQ1VSUkVOVF9IUkVGID0gKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnNyYztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBbmltYXRpb24ocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgQU5JTUFUSU9OU19QQVJBTVMucHVzaChwYXJhbXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJY29uc1VybHMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkaXJuYW1lSHJlZiA9IENVUlJFTlRfSFJFRi5zdWJzdHJpbmcoMCwgQ1VSUkVOVF9IUkVGLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICByZXR1cm4gYCR7ZGlybmFtZUhyZWZ9Li4vX2ltYWdlc2A7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbChpY29uVXJsOiBzdHJpbmcpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5mb3JFYWNoKHBhcmFtcyA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgRG9jc0NvbnRyb2xsZXIocGFyYW1zLCBpY29uVXJsKTtcbiAgICAgICAgY29udHJvbGxlci5yZW5kZXIocGFyYW1zKTtcbiAgICAgICAgY29udHJvbGxlci5pdGVyYXRlVG9Qb3NpdGlvbihwYXJhbXMpO1xuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBpY29uVXJsID0gZ2V0SWNvbnNVcmxzKCk7XG4gICAgcmVuZGVyQWxsKGljb25VcmwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=