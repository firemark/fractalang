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
___CSS_LOADER_EXPORT___.push([module.id, ".fract-tokens {\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n\n.fract-token-span {\n  padding: 5px;\n  height: 50px;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n.fract-token-span.remove {\n  background-color: #D88;\n  border: 2px #922 dotted;\n  border-radius: 5px;\n  width: 50px;\n}\n.fract-token-span.remove::before {\n  font-size: 24pt;\n  content: \"X\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .outer-tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n}\n.fract-staves > li > .outer-tokens > .inner-tokens {\n  padding: 0 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .outer-tokens > .inner-tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li > .outer-tokens > .remove {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\n.fract-token.token-header {\n  margin-right: 1em;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-staves {\n  overflow: visible;\n}\n.fract-staves > li {\n  height: 60px;\n}\n.fract-staves > li .outer-tokens {\n  height: 100%;\n}\n.fract-staves > li .inner-tokens {\n  height: 100%;\n}\n.fract-staves .fract-token {\n  width: 30px;\n  height: 30px;\n  padding: 2px;\n  margin-right: 2px;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACCJ;ADEQ;EACI,aAAA;ACAZ;ADII;EACI,eAAA;EACA,iBAAA;EACA,eAAA;ACFR;ADKI;EACI,iBAAA;EACA,kBAAA;ACHR;;ADOA;EACI,YAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;ACJJ;ADMI;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;ACJR;;ADQA;EACI,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;ACLJ;ADMI;EAAM,cAAA;EAAgB,YAAA;EAAc,kBAAA;ACDxC;ADEI;EAAoC,4BAAA;ACCxC;ADAI;EAAsB,YAAA;ACG1B;;ADAA;EACI,YAAA;EACA,YAAA;ACGJ;ADDI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;ACGR;ADDQ;EACI,eAAA;EACA,YAAA;ACGZ;ADCI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;ACCR;ADCQ;EACI,eAAA;EACA,YAAA;ACCZ;;ACtFA;EACI,SAAA;EACA,aAAA;ADyFJ;ACvFI;EACI,eAAA;ADyFR;ACtFI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EACA,eAAA;ADwFR;ACtFQ;EACI,sBAAA;ADwFZ;ACpFI;EACI,kBAAA;ADsFR;ACpFQ;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;ADsFZ;AClFY;EACI,cAAA;ADoFhB;;AC9EA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,kBAAA;ADiFJ;AC/EI;EACI,cAAA;EACA,aAAA;ADiFR;AC/EQ;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;ADiFZ;AC9EQ;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;ADgFZ;AC9EY;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;ADgFhB;AC/EgB;EAAM,cAAA;ADkFtB;AC/EY;EAAW,cAAA;ADkFvB;AC/EQ;EACI,aAAA;ADiFZ;;AArKA;EACI,iBAAA;AAwKJ;;AArKA;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AAwKJ;AAtKI;EACI,cAAA;AAwKR;;AApKA;EACI,WAAA;EACA,kBAAA;EACA,8BAAA;AAuKJ;;AApKA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;AAuKJ;;AAnKI;EACI,WAAA;EACA,kBAAA;AAsKR;;AAlKA;EACI,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;AAqKJ;;AAlKA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAqKJ;AApKI;EACI,4BAAA;EACA,aAAA;AAsKR;;AAlKA;EACI,iBAAA;AAqKJ;AApKI;EACI,YAAA;AAsKR;AArKQ;EAAgB,YAAA;AAwKxB;AAvKQ;EAAgB,YAAA;AA0KxB;AAxKI;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;AA0KR","sourcesContent":[".fract-tokens {\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n}\n\n.fract-token-span {\n    padding: 5px;\n    height: 50px;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n\n    &.remove {\n        background-color: #D88;\n        border: 2px #922 dotted;\n        border-radius: 5px;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"X\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n.fract-token.token-header {\n    margin-right: 1em;\n}\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-staves {\n    overflow: visible;\n    > li {\n        height: 60px;\n        .outer-tokens { height: 100%; }\n        .inner-tokens { height: 100%; }\n    }\n    .fract-token {\n        width: 30px;\n        height: 30px;\n        padding: 2px;\n        margin-right: 2px;\n    }\n}\n",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .outer-tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n\n            > .inner-tokens {\n                padding: 0 5px;\n                flex: 1 1 auto;\n                display: flex;\n                align-items: center;\n                overflow-x: scroll;\n                overflow-y: hidden;\n                > * { flex: 0 0 auto; }\n            }\n\n            > .remove {flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/ast/actions.ts":
/*!****************************!*\
  !*** ./src/ast/actions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Call": () => (/* binding */ Call),
/* harmony export */   "DrawArcLine": () => (/* binding */ DrawArcLine),
/* harmony export */   "DrawCircle": () => (/* binding */ DrawCircle),
/* harmony export */   "DrawLine": () => (/* binding */ DrawLine),
/* harmony export */   "DrawSquare": () => (/* binding */ DrawSquare),
/* harmony export */   "DrawTriangle": () => (/* binding */ DrawTriangle),
/* harmony export */   "Forward": () => (/* binding */ Forward),
/* harmony export */   "Function": () => (/* binding */ Function),
/* harmony export */   "Replay": () => (/* binding */ Replay),
/* harmony export */   "Reverse": () => (/* binding */ Reverse),
/* harmony export */   "RotateLeft": () => (/* binding */ RotateLeft),
/* harmony export */   "RotateRight": () => (/* binding */ RotateRight)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/ast/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Function = /** @class */ (function () {
    function Function(name, actions) {
        this.name = name;
        this.actions = actions;
    }
    Function.prototype.exec = function (context) {
        var actions = this.actions;
        var locals = actions.map(function () { return ({}); });
        var size = actions.length;
        for (var index = 0; index < size;) {
            var local = locals.at(index);
            var action = actions.at(index);
            var _a = action.exec(context, local), shift = _a.shift, reverse = _a.reverse;
            this.execReverse(index - 1, reverse ? Math.round(reverse) - 1 : 0, context);
            index += shift ? Math.round(shift) : 1;
        }
    };
    Function.prototype.execReverse = function (stopIndex, reverse, context) {
        if (reverse === 0) {
            return;
        }
        var actions = this.actions;
        var startReserve = Math.max(0, stopIndex - reverse);
        for (var index = stopIndex; index >= startReserve; index--) {
            index -= actions.at(index).execReverse(context);
        }
    };
    Function.prototype.size = function () {
        return this.actions.length;
    };
    return Function;
}());

var NodeWithValue = /** @class */ (function (_super) {
    __extends(NodeWithValue, _super);
    function NodeWithValue(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    NodeWithValue.prototype.eval = function (context) {
        return (0,_base__WEBPACK_IMPORTED_MODULE_0__.evalValue)(this.value, context);
    };
    return NodeWithValue;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ActionNode));
var Call = /** @class */ (function (_super) {
    __extends(Call, _super);
    function Call(name, value) {
        var _this = _super.call(this, value) || this;
        _this.name = name;
        return _this;
    }
    Call.prototype.exec = function (context) {
        var func = context.findFunction(this.name);
        if (!(func instanceof Function)) {
            return {};
        }
        var newArgument = this.eval(context);
        var newContext = context.createNewContext(newArgument);
        func.exec(newContext);
        return {};
    };
    Call.prototype.execReverse = function (context) {
        var func = context.findFunction(this.name);
        if (!(func instanceof Function)) {
            return;
        }
        var newArgument = this.eval(context);
        var newContext = context.createNewContext(newArgument);
        var lastIndex = func.size() - 1;
        func.execReverse(lastIndex, lastIndex, newContext);
        return 0;
    };
    return Call;
}(NodeWithValue));

var DrawLine = /** @class */ (function (_super) {
    __extends(DrawLine, _super);
    function DrawLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawLine.prototype.exec = function (context) {
        var _a = this.eval(context), length = _a.value, strokeThickness = _a.strokeThickness, color = _a.color;
        context.getCursor().drawLine(length, strokeThickness, color);
        return {};
    };
    DrawLine.prototype.execReverse = function (context) {
        var distance = -this.eval(context).value;
        context.getCursor().forward(distance);
        return 0;
    };
    return DrawLine;
}(NodeWithValue));

var DrawCircle = /** @class */ (function (_super) {
    __extends(DrawCircle, _super);
    function DrawCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawCircle.prototype.exec = function (context) {
        var _a = this.eval(context), size = _a.value, color = _a.color;
        context.getCursor().drawCircle(size, color);
        return {};
    };
    return DrawCircle;
}(NodeWithValue));

var DrawSquare = /** @class */ (function (_super) {
    __extends(DrawSquare, _super);
    function DrawSquare() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawSquare.prototype.exec = function (context) {
        var _a = this.eval(context), size = _a.value, color = _a.color;
        context.getCursor().drawSquare(size, color);
        return {};
    };
    return DrawSquare;
}(NodeWithValue));

var DrawTriangle = /** @class */ (function (_super) {
    __extends(DrawTriangle, _super);
    function DrawTriangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawTriangle.prototype.exec = function (context) {
        var _a = this.eval(context), size = _a.value, color = _a.color;
        context.getCursor().drawTriangle(size, color);
        return {};
    };
    return DrawTriangle;
}(NodeWithValue));

var DrawArcLine = /** @class */ (function (_super) {
    __extends(DrawArcLine, _super);
    function DrawArcLine(ratio, value) {
        var _this = _super.call(this, value) || this;
        _this.ratio = ratio;
        return _this;
    }
    DrawArcLine.prototype.exec = function (context) {
        var _a = this.eval(context), size = _a.value, strokeThickness = _a.strokeThickness, color = _a.color;
        context.getCursor().drawArcLine(this.ratio, size, strokeThickness, color);
        return {};
    };
    DrawArcLine.prototype.execReverse = function (context) {
        var distance = -this.eval(context).value;
        var cursor = context.getCursor();
        cursor.rotate(-this.ratio / 2);
        cursor.forward(distance);
        cursor.rotate(-this.ratio / 2);
        return 0;
    };
    return DrawArcLine;
}(NodeWithValue));

var Forward = /** @class */ (function (_super) {
    __extends(Forward, _super);
    function Forward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forward.prototype.exec = function (context) {
        var distance = this.eval(context).value;
        context.getCursor().forward(distance);
        return {};
    };
    Forward.prototype.execReverse = function (context) {
        var distance = -this.eval(context).value;
        context.getCursor().forward(distance);
        return 0;
    };
    return Forward;
}(NodeWithValue));

var RotateLeft = /** @class */ (function (_super) {
    __extends(RotateLeft, _super);
    function RotateLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotateLeft.prototype.exec = function (context) {
        var angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    };
    RotateLeft.prototype.execReverse = function (context) {
        var angle = this.eval(context).value;
        context.getCursor().rotate(angle);
        return 0;
    };
    return RotateLeft;
}(NodeWithValue));

var RotateRight = /** @class */ (function (_super) {
    __extends(RotateRight, _super);
    function RotateRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotateRight.prototype.exec = function (context) {
        var angle = this.eval(context).value;
        context.getCursor().rotate(angle);
        return {};
    };
    RotateRight.prototype.execReverse = function (context) {
        var angle = -this.eval(context).value;
        context.getCursor().rotate(angle);
        return 0;
    };
    return RotateRight;
}(NodeWithValue));

var Reverse = /** @class */ (function (_super) {
    __extends(Reverse, _super);
    function Reverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reverse.prototype.exec = function (context) {
        var iterations = this.eval(context).value;
        return { reverse: iterations };
    };
    Reverse.prototype.execReverse = function (context) {
        var iterations = this.eval(context).value;
        return Math.abs(iterations);
    };
    return Reverse;
}(NodeWithValue));

var Replay = /** @class */ (function (_super) {
    __extends(Replay, _super);
    function Replay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Replay.prototype.exec = function (context, local) {
        var counter = local.counter || 1;
        var size = Math.round(this.eval(context).value);
        if (counter < size) {
            local.counter = counter + 1;
            return { shift: -1 };
        }
        return {};
    };
    return Replay;
}(NodeWithValue));



/***/ }),

/***/ "./src/ast/base.ts":
/*!*************************!*\
  !*** ./src/ast/base.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionNode": () => (/* binding */ ActionNode),
/* harmony export */   "ValueNode": () => (/* binding */ ValueNode),
/* harmony export */   "evalValue": () => (/* binding */ evalValue)
/* harmony export */ });
var ValueNode = /** @class */ (function () {
    function ValueNode() {
    }
    return ValueNode;
}());

var ActionNode = /** @class */ (function () {
    function ActionNode() {
    }
    ActionNode.prototype.execReverse = function (context) { return 0; };
    ;
    return ActionNode;
}());

function evalValue(valueNodes, context) {
    var init = {
        value: 1.0,
        color: context.argument.color,
        strokeStyle: context.argument.strokeStyle,
        strokeThickness: context.argument.strokeThickness,
        valueTransformer: function (a, b) { return a * b; },
    };
    return valueNodes.reduce(partEval.bind(this, context), init);
}
function partEval(context, acc, node) {
    var newValue = node.eval(context);
    var transform = newValue.valueTransformer || acc.valueTransformer;
    return {
        value: newValue.value !== undefined ? transform(acc.value, newValue.value) : acc.value,
        color: newValue.color !== undefined ? newValue.color : acc.color,
        strokeStyle: newValue.strokeStyle !== undefined ? newValue.strokeStyle : acc.strokeStyle,
        strokeThickness: newValue.strokeThickness !== undefined ? newValue.strokeThickness : acc.strokeThickness,
        valueTransformer: transform,
    };
}


/***/ }),

/***/ "./src/ast/colors.ts":
/*!***************************!*\
  !*** ./src/ast/colors.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxColor": () => (/* binding */ MaxColor),
/* harmony export */   "MinColor": () => (/* binding */ MinColor),
/* harmony export */   "ShiftColor": () => (/* binding */ ShiftColor)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/ast/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MaxColor = /** @class */ (function (_super) {
    __extends(MaxColor, _super);
    function MaxColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaxColor.prototype.eval = function (context) {
        return { color: 1.0 };
    };
    return MaxColor;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var MinColor = /** @class */ (function (_super) {
    __extends(MinColor, _super);
    function MinColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinColor.prototype.eval = function (context) {
        return { color: 0.0 };
    };
    return MinColor;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var ShiftColor = /** @class */ (function (_super) {
    __extends(ShiftColor, _super);
    function ShiftColor(shift) {
        var _this = _super.call(this) || this;
        _this.shift = shift;
        return _this;
    }
    ShiftColor.prototype.eval = function (context) {
        var color = (context.argument.color + this.shift) % 1.0;
        if (color < 0.0) {
            color += 1.0;
        }
        return { color: color };
    };
    return ShiftColor;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));



/***/ }),

/***/ "./src/ast/ops.ts":
/*!************************!*\
  !*** ./src/ast/ops.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOp": () => (/* binding */ AddOp),
/* harmony export */   "MultOp": () => (/* binding */ MultOp),
/* harmony export */   "SubOp": () => (/* binding */ SubOp)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/ast/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MultOp = /** @class */ (function (_super) {
    __extends(MultOp, _super);
    function MultOp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultOp.prototype.eval = function (context) {
        return { valueTransformer: function (a, b) { return a * b; } };
    };
    return MultOp;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var AddOp = /** @class */ (function (_super) {
    __extends(AddOp, _super);
    function AddOp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddOp.prototype.eval = function (context) {
        return { valueTransformer: function (a, b) { return a + b; } };
    };
    return AddOp;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var SubOp = /** @class */ (function (_super) {
    __extends(SubOp, _super);
    function SubOp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubOp.prototype.eval = function (context) {
        return { valueTransformer: function (a, b) { return a - b; } };
    };
    return SubOp;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));



/***/ }),

/***/ "./src/ast/strokes.ts":
/*!****************************!*\
  !*** ./src/ast/strokes.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetStrokeStyle": () => (/* binding */ SetStrokeStyle),
/* harmony export */   "ShiftStrokeThickness": () => (/* binding */ ShiftStrokeThickness)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/ast/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SetStrokeStyle = /** @class */ (function (_super) {
    __extends(SetStrokeStyle, _super);
    function SetStrokeStyle(stroke) {
        var _this = _super.call(this) || this;
        _this.stroke = stroke;
        return _this;
    }
    SetStrokeStyle.prototype.eval = function (context) {
        return { strokeStyle: this.stroke };
    };
    return SetStrokeStyle;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var ShiftStrokeThickness = /** @class */ (function (_super) {
    __extends(ShiftStrokeThickness, _super);
    function ShiftStrokeThickness(shift) {
        var _this = _super.call(this) || this;
        _this.shift = shift;
        return _this;
    }
    ShiftStrokeThickness.prototype.eval = function (context) {
        var strokeThickness = context.argument.strokeThickness + this.shift;
        return { strokeThickness: strokeThickness };
    };
    return ShiftStrokeThickness;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));



/***/ }),

/***/ "./src/ast/values.ts":
/*!***************************!*\
  !*** ./src/ast/values.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Angle": () => (/* binding */ Angle),
/* harmony export */   "Argument": () => (/* binding */ Argument),
/* harmony export */   "DynamicArgument": () => (/* binding */ DynamicArgument),
/* harmony export */   "Multipler": () => (/* binding */ Multipler)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/ast/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Angle = /** @class */ (function (_super) {
    __extends(Angle, _super);
    function Angle(angle) {
        var _this = _super.call(this) || this;
        _this.normalizedAngle = angle / 360.0;
        return _this;
    }
    Angle.prototype.eval = function (context) {
        return { value: this.normalizedAngle };
    };
    return Angle;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var Multipler = /** @class */ (function (_super) {
    __extends(Multipler, _super);
    function Multipler(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Multipler.prototype.eval = function (context) {
        return { value: this.value };
    };
    return Multipler;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var Argument = /** @class */ (function (_super) {
    __extends(Argument, _super);
    function Argument() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Argument.prototype.eval = function (context) {
        return { value: context.argument.value };
    };
    return Argument;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));

var DynamicArgument = /** @class */ (function (_super) {
    __extends(DynamicArgument, _super);
    function DynamicArgument(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    DynamicArgument.prototype.eval = function (context) {
        var valueNodes = context.findFunction(this.name);
        if (!Array.isArray(valueNodes)) {
            return {};
        }
        return (0,_base__WEBPACK_IMPORTED_MODULE_0__.evalValue)(valueNodes, context);
    };
    return DynamicArgument;
}(_base__WEBPACK_IMPORTED_MODULE_0__.ValueNode));



/***/ }),

/***/ "./src/context.ts":
/*!************************!*\
  !*** ./src/context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextCfg": () => (/* binding */ ContextCfg)
/* harmony export */ });
var ContextCfg = /** @class */ (function () {
    function ContextCfg(_a) {
        var maxIteration = _a.maxIteration, bag = _a.bag, cursor = _a.cursor;
        this.maxIteration = maxIteration;
        this.cursor = cursor;
        this.bag = bag;
    }
    return ContextCfg;
}());

var Context = /** @class */ (function () {
    function Context(_a) {
        var cfg = _a.cfg, argument = _a.argument, _b = _a.iteration, iteration = _b === void 0 ? 0 : _b;
        this.cfg = cfg;
        this.argument = argument;
        this.iteration = iteration;
    }
    Context.prototype.findFunction = function (name) {
        var _this = this;
        var iteration = this.iteration;
        if (iteration >= this.cfg.maxIteration) {
            return null;
        }
        var namesToFind = [name];
        if (iteration % 2 == 0) {
            namesToFind.unshift("".concat(name, "::EVEN"));
        }
        else {
            namesToFind.unshift("".concat(name, "::ODD"));
        }
        if (iteration >= this.cfg.maxIteration - 1) {
            namesToFind.unshift("".concat(name, "::END"));
        }
        var existFuncName = namesToFind.find(function (name) { return _this.cfg.bag[name]; });
        return existFuncName ? this.cfg.bag[existFuncName] : null;
    };
    Context.prototype.getCursor = function () {
        return this.cfg.cursor;
    };
    Context.prototype.createNewContext = function (newArgument) {
        return new Context({
            cfg: this.cfg,
            argument: newArgument,
            iteration: this.iteration + 1,
        });
    };
    return Context;
}());



/***/ }),

/***/ "./src/cursor.ts":
/*!***********************!*\
  !*** ./src/cursor.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cursor": () => (/* binding */ Cursor)
/* harmony export */ });
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures */ "./src/figures.ts");

var Cursor = /** @class */ (function () {
    function Cursor(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.strokeSize, strokeSize = _c === void 0 ? 1 : _c, _d = _b.distanceMultipler, distanceMultipler = _d === void 0 ? 100 : _d, _e = _b.firstColor, firstColor = _e === void 0 ? "#000000" : _e, _f = _b.secondColor, secondColor = _f === void 0 ? "#DC143C" : _f;
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
    Cursor.prototype.hexToColor = function (hex) {
        var r = parseInt(hex.substr(1, 2), 16);
        var g = parseInt(hex.substr(3, 2), 16);
        var b = parseInt(hex.substr(5, 2), 16);
        return [r, g, b];
    };
    Cursor.prototype.rotate = function (angle) {
        // angle = 0.0 -> 0°
        // angle = 1.0 -> 360°
        this.angle = (this.angle + angle) % 1.0;
        var radians = angle * 2 * Math.PI;
        var sin = Math.sin(radians);
        var cos = Math.cos(radians);
        var _a = this.orientation, x = _a[0], y = _a[1];
        this.orientation[0] = x * cos - y * sin;
        this.orientation[1] = x * sin + y * cos;
    };
    Cursor.prototype.drawLine = function (distance, stroke, color) {
        var _a = this.position, old_x = _a[0], old_y = _a[1];
        this.forward(distance);
        var _b = this.position, new_x = _b[0], new_y = _b[1];
        var ops = {
            stroke: this.strokeSize * stroke,
            color: this.calcColor(color),
        };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Line([old_x, old_y], [new_x, new_y], ops));
        this.computeBox(this.position);
    };
    Cursor.prototype.drawArcLine = function (ratio, size, stroke, color) {
        var arcSize = size / 2 * this.distanceMultipler;
        var arcRadius = arcSize / Math.sin(ratio * Math.PI);
        var _a = this.orientation, dx = _a[0], dy = _a[1];
        // rotate by 90°
        var ndx = -dy;
        var ndy = dx;
        var _b = this.position, x = _b[0], y = _b[1];
        var point = [x + arcRadius * ndx, y + arcRadius * ndy];
        var shift = this.angle - 0.25;
        var ops = {
            stroke: this.strokeSize * stroke,
            color: this.calcColor(color),
            fill: "none",
            shift: shift,
        };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Arc(point, arcRadius, ratio, ops));
        this.rotate(ratio / 2);
        this.forward(size);
        this.rotate(ratio / 2);
        this.computeBox(point, Math.abs(arcRadius));
    };
    Cursor.prototype.drawCircle = function (radius, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Circle([x, y], radius, ops));
        this.computeBox([x, y], Math.abs(radius));
    };
    Cursor.prototype.drawSquare = function (size, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var _b = this.orientation, dx = _b[0], dy = _b[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Square([x, y], [dx, dy], size, ops));
        this.computeBox([x, y], Math.abs(size));
    };
    Cursor.prototype.drawTriangle = function (size, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var _b = this.orientation, dx = _b[0], dy = _b[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Triangle([x, y], [dx, dy], size, ops));
        this.computeBox([x, y], Math.abs(size));
    };
    Cursor.prototype.forward = function (distance) {
        var _a = this.orientation, x = _a[0], y = _a[1];
        this.position[0] += x * distance * this.distanceMultipler;
        this.position[1] += y * distance * this.distanceMultipler;
    };
    Cursor.prototype.addMargin = function (margin) {
        this.box.min[0] -= margin;
        this.box.min[1] -= margin;
        this.box.max[0] += margin;
        this.box.max[1] += margin;
    };
    Cursor.prototype.computeBox = function (_a, size) {
        var x = _a[0], y = _a[1];
        if (size === void 0) { size = 0; }
        this.box.min[0] = Math.min(this.box.min[0], x - size);
        this.box.max[0] = Math.max(this.box.max[0], x + size);
        this.box.min[1] = Math.min(this.box.min[1], y - size);
        this.box.max[1] = Math.max(this.box.max[1], y + size);
    };
    Cursor.prototype.calcColor = function (color) {
        var ca = this.firstColor;
        var cb = this.secondColor;
        var aRatio = Math.abs(color - 0.5) * 2;
        var bRatio = 1.0 - aRatio;
        var r = Math.trunc(ca[0] * aRatio + cb[0] * bRatio);
        var g = Math.trunc(ca[1] * aRatio + cb[1] * bRatio);
        var b = Math.trunc(ca[2] * aRatio + cb[2] * bRatio);
        return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
    };
    return Cursor;
}());



/***/ }),

/***/ "./src/exec.ts":
/*!*********************!*\
  !*** ./src/exec.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exec": () => (/* binding */ exec)
/* harmony export */ });
/* harmony import */ var _cursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursor */ "./src/cursor.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./src/parser.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/context.ts");



function exec(valueArgument, maxIteration, functions, cursorCfg) {
    if (cursorCfg === void 0) { cursorCfg = {}; }
    var cursor = new _cursor__WEBPACK_IMPORTED_MODULE_0__.Cursor(cursorCfg);
    var bag = {};
    functions.forEach(function (_a) {
        var name = _a.name, rawTokens = _a.tokens;
        var tokens = (0,_parser__WEBPACK_IMPORTED_MODULE_1__.parseRawTokens)(rawTokens);
        bag[name] = (0,_parser__WEBPACK_IMPORTED_MODULE_1__.parseLine)(name, tokens);
    });
    var cfg = new _context__WEBPACK_IMPORTED_MODULE_2__.ContextCfg({ maxIteration: maxIteration, bag: bag, cursor: cursor });
    var argument = {
        value: valueArgument,
        strokeStyle: "solid",
        strokeThickness: 1.0,
        color: 0.0,
    };
    var context = new _context__WEBPACK_IMPORTED_MODULE_2__.Context({ cfg: cfg, argument: argument });
    startExec(context, bag);
    return cursor;
}
function startExec(context, bag) {
    var func = context.findFunction("START") || context.findFunction("F");
    if (func) {
        func.exec(context);
    }
}


/***/ }),

/***/ "./src/figures.ts":
/*!************************!*\
  !*** ./src/figures.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Square": () => (/* binding */ Square),
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
var Line = /** @class */ (function () {
    function Line(firstPoint, secondPoint, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.color, color = _c === void 0 ? "black" : _c, _d = _b.stroke, stroke = _d === void 0 ? 1 : _d;
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
        this.stroke = stroke;
        this.color = color;
    }
    return Line;
}());

var Circle = /** @class */ (function () {
    function Circle(point, radius, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.fill, fill = _c === void 0 ? "black" : _c, _d = _b.color, color = _d === void 0 ? "none" : _d, _e = _b.stroke, stroke = _e === void 0 ? 0 : _e;
        this.point = point;
        this.radius = radius;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
    return Circle;
}());

var Arc = /** @class */ (function () {
    function Arc(point, radius, ratio, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.fill, fill = _c === void 0 ? "black" : _c, _d = _b.color, color = _d === void 0 ? "none" : _d, _e = _b.close, close = _e === void 0 ? false : _e, _f = _b.shift, shift = _f === void 0 ? 0.0 : _f, _g = _b.stroke, stroke = _g === void 0 ? 0 : _g;
        this.point = point;
        this.radius = radius;
        this.ratio = ratio;
        this.fill = fill;
        this.close = close;
        this.shift = shift;
        this.stroke = stroke;
        this.color = color;
    }
    return Arc;
}());

var Square = /** @class */ (function () {
    function Square(point, orientation, size, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.fill, fill = _c === void 0 ? "black" : _c, _d = _b.color, color = _d === void 0 ? "none" : _d, _e = _b.stroke, stroke = _e === void 0 ? 0 : _e;
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
    return Square;
}());

var Triangle = /** @class */ (function () {
    function Triangle(point, orientation, size, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.fill, fill = _c === void 0 ? "black" : _c, _d = _b.color, color = _d === void 0 ? "none" : _d, _e = _b.stroke, stroke = _e === void 0 ? 0 : _e;
        this.point = point;
        this.orientation = orientation;
        this.size = size;
        this.fill = fill;
        this.stroke = stroke;
        this.color = color;
    }
    return Triangle;
}());



/***/ }),

/***/ "./src/parser.ts":
/*!***********************!*\
  !*** ./src/parser.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DYNAMIC_ARGS": () => (/* binding */ DYNAMIC_ARGS),
/* harmony export */   "PROCEDURES": () => (/* binding */ PROCEDURES),
/* harmony export */   "SUFFIXES": () => (/* binding */ SUFFIXES),
/* harmony export */   "parseLine": () => (/* binding */ parseLine),
/* harmony export */   "parseRawTokens": () => (/* binding */ parseRawTokens)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/tokens.ts");
/* harmony import */ var _ast_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast/actions */ "./src/ast/actions.ts");


var DYNAMIC_ARGS = ["DIAMOND", "INV_TRIANGLE"];
var PROCEDURES = ["F", "G", "H"];
var SUFFIXES = ["END", "EVEN", "ODD"];
function parseRawTokens(rawTokens) {
    return rawTokens.map(function (raw) {
        var token = _tokens__WEBPACK_IMPORTED_MODULE_0__.tokens[raw];
        if (!token) {
            throw "Parsing error: ".concat(raw, " is not undefined as token.");
        }
        return token;
    });
}
var ActionTmp = /** @class */ (function () {
    function ActionTmp() {
        this.actions = [];
        this.values = [];
        this.token = null;
    }
    ActionTmp.prototype.setActionToken = function (token) {
        this.token = token;
    };
    ActionTmp.prototype.getActionToken = function () {
        return this.token;
    };
    ActionTmp.prototype.getValuesLength = function () {
        return this.values.length;
    };
    ActionTmp.prototype.isActionSet = function () {
        return this.token !== null;
    };
    ActionTmp.prototype.pushAction = function () {
        if (!this.isActionSet()) {
            return;
        }
        var factory = this.token.factory;
        var action = factory(this.values);
        this.actions.push(action);
        this.values = [];
        this.token = null;
    };
    ActionTmp.prototype.insertValue = function (value) {
        this.values.push(value);
    };
    ActionTmp.prototype.getActions = function () {
        return this.actions;
    };
    return ActionTmp;
}());
function parseLine(name, tokens) {
    if (DYNAMIC_ARGS.indexOf(name) > -1) {
        return parseLineValue(tokens);
    }
    else {
        return parseLineFunc(name, tokens);
    }
}
function parseLineFunc(name, tokens) {
    var actions = [];
    var tmp = new ActionTmp();
    tokens.forEach(function (token) {
        if (tmp.isActionSet()) {
            parseValue(token, tmp);
        }
        else {
            parseAction(token, tmp);
        }
    });
    tmp.pushAction(); // push last token.
    return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Function(name, tmp.getActions());
}
function parseLineValue(tokens) {
    return tokens.map(function (token) {
        if (token.isAction) {
            throw "Parsing error: No actions are allowed";
        }
        if (token.isDynamic) {
            throw "Parsing error: No dynamic elements are allowed";
        }
        var factory = token.factory;
        return factory();
    });
}
function parseAction(token, tmp) {
    if (!token.isAction) {
        throw "Parsing error: token is not an action";
    }
    tmp.setActionToken(token);
    if (token.valueSize === 0) {
        tmp.pushAction();
    }
}
function parseValue(token, tmp) {
    var valueSize = tmp.getActionToken().valueSize;
    if (token.isAction) {
        if (valueSize !== "+" && tmp.getValuesLength() < valueSize) {
            throw "Parsing error: token has not enough values";
        }
        tmp.pushAction();
        tmp.setActionToken(token);
        return;
    }
    else {
        var factory = token.factory;
        tmp.insertValue(factory());
    }
}


/***/ }),

/***/ "./src/svg.ts":
/*!********************!*\
  !*** ./src/svg.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _figures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figures */ "./src/figures.ts");

var NAMESPACE = "http://www.w3.org/2000/svg";
function createSvg(document, cursor) {
    var svg = document.createElementNS(NAMESPACE, "svg");
    var _a = cursor.box.min, min_x = _a[0], min_y = _a[1];
    var _b = cursor.box.max, max_x = _b[0], max_y = _b[1];
    var width = max_x - min_x;
    var height = max_y - min_y;
    svg.setAttribute("viewBox", "".concat(min_x, " ").concat(min_y, " ").concat(width, " ").concat(height));
    cursor.figures.forEach(function (figure) {
        var node = toSvg(document, figure);
        if (node) {
            svg.appendChild(node);
        }
    });
    return svg;
}
var SQRT3 = Math.sqrt(3);
var SQRT3H2 = Math.sqrt(3) / 2;
var H2 = 1 / 2;
function toSvg(document, figure) {
    if (figure instanceof _figures__WEBPACK_IMPORTED_MODULE_0__.Line) {
        var node = document.createElementNS(NAMESPACE, "line");
        var _a = figure.firstPoint, x1 = _a[0], y1 = _a[1];
        var _b = figure.secondPoint, x2 = _b[0], y2 = _b[1];
        node.setAttribute("x1", x1);
        node.setAttribute("y1", y1);
        node.setAttribute("x2", x2);
        node.setAttribute("y2", y2);
        node.setAttribute("stroke", figure.color);
        node.setAttribute("stroke-width", figure.stroke);
        return node;
    }
    else if (figure instanceof _figures__WEBPACK_IMPORTED_MODULE_0__.Circle) {
        var node = document.createElementNS(NAMESPACE, "circle");
        var _c = figure.point, x = _c[0], y = _c[1];
        node.setAttribute("cx", x);
        node.setAttribute("cy", y);
        node.setAttribute("r", figure.radius);
        setBasicAttrs(figure, node);
        return node;
    }
    else if (figure instanceof _figures__WEBPACK_IMPORTED_MODULE_0__.Arc) {
        var node = document.createElementNS(NAMESPACE, "path");
        var _d = figure.point, x = _d[0], y = _d[1];
        var r = figure.radius;
        var startAngle = figure.shift * 2 * Math.PI;
        var endAngle = (figure.shift + figure.ratio) * 2 * Math.PI;
        var start_x = x + r * Math.cos(startAngle);
        var start_y = y + r * Math.sin(startAngle);
        var end_x = x + r * Math.cos(endAngle);
        var end_y = y + r * Math.sin(endAngle);
        var flag1 = Math.abs(figure.ratio) <= 0.5 ? "0" : "1";
        var flag2 = figure.ratio <= 0.0 ? "0" : "1";
        var path = "M ".concat(start_x, " ").concat(start_y);
        path += " A ".concat(r, " ").concat(r, " 0 ").concat(flag1, " ").concat(flag2, " ").concat(end_x, " ").concat(end_y);
        if (figure.close) {
            path += "L ".concat(x, " ").concat(y, " Z");
        }
        node.setAttribute("d", path);
        setBasicAttrs(figure, node);
        return node;
    }
    else if (figure instanceof _figures__WEBPACK_IMPORTED_MODULE_0__.Square) {
        var node = document.createElementNS(NAMESPACE, "path");
        var _e = figure.point, x = _e[0], y = _e[1];
        var _f = figure.orientation, dx = _f[0], dy = _f[1];
        var S = figure.size / 2;
        var path = '';
        path += " M ".concat(x - S * dx - S * dy, " ").concat(y + S * dx - S * dy);
        path += " L ".concat(x - S * dx + S * dy, " ").concat(y - S * dx - S * dy);
        path += " L ".concat(x + S * dx + S * dy, " ").concat(y - S * dx + S * dy);
        path += " L ".concat(x + S * dx - S * dy, " ").concat(y + S * dx + S * dy);
        path += ' Z';
        node.setAttribute("d", path);
        setBasicAttrs(figure, node);
        return node;
    }
    else if (figure instanceof _figures__WEBPACK_IMPORTED_MODULE_0__.Triangle) {
        var node = document.createElementNS(NAMESPACE, "path");
        var _g = figure.point, x = _g[0], y = _g[1];
        var _h = figure.orientation, dx = _h[0], dy = _h[1];
        var S = figure.size;
        var path = '';
        path += " M ".concat(x + S * dx, " ").concat(y + S * dy);
        path += " L ".concat(x - SQRT3H2 * S * dy - H2 * S * dx, " ").concat(y - H2 * S * dy + SQRT3H2 * S * dx);
        path += " L ".concat(x + SQRT3H2 * S * dy - H2 * S * dx, " ").concat(y - H2 * S * dy - SQRT3H2 * S * dx);
        path += ' Z';
        node.setAttribute("d", path);
        setBasicAttrs(figure, node);
        return node;
    }
    return null;
}
function setBasicAttrs(figure, node) {
    var style = "fill: ".concat(figure.fill, ";");
    if (figure.stroke > 0) {
        style += "stroke-width: ".concat(figure.stroke, ";");
        style += "stroke: ".concat(figure.color);
    }
    node.setAttribute("style", style);
}


/***/ }),

/***/ "./src/tokens.ts":
/*!***********************!*\
  !*** ./src/tokens.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token),
/* harmony export */   "tokens": () => (/* binding */ tokens)
/* harmony export */ });
/* harmony import */ var _ast_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast/values */ "./src/ast/values.ts");
/* harmony import */ var _ast_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast/actions */ "./src/ast/actions.ts");
/* harmony import */ var _ast_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ast/colors */ "./src/ast/colors.ts");
/* harmony import */ var _ast_strokes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ast/strokes */ "./src/ast/strokes.ts");
/* harmony import */ var _ast_ops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ast/ops */ "./src/ast/ops.ts");





var Token = /** @class */ (function () {
    function Token(_a) {
        var isAction = _a.isAction, isDynamic = _a.isDynamic, factory = _a.factory, valueSize = _a.valueSize;
        this.isAction = isAction;
        this.isDynamic = isDynamic;
        this.factory = factory;
        this.valueSize = valueSize;
    }
    return Token;
}());

function createValue(factory, isDynamic) {
    if (isDynamic === void 0) { isDynamic = false; }
    return new Token({ isAction: false, valueSize: 0, isDynamic: isDynamic, factory: factory });
}
function createAction(valueSize, factory) {
    return new Token({ isAction: true, valueSize: valueSize, isDynamic: true, factory: factory });
}
var tokens = {
    // *** Values ***
    // Counts
    COUNT_MINUS: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(-1); }),
    COUNT_1: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1); }),
    COUNT_2: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2); }),
    COUNT_3: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3); }),
    COUNT_5: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(5); }),
    // Fractions
    FRACT_1_2: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 2); }),
    FRACT_1_3: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 3); }),
    FRACT_2_3: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(2 / 3); }),
    FRACT_1_4: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 4); }),
    FRACT_3_4: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(3 / 4); }),
    FRACT_1_5: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Multipler(1 / 5); }),
    // Angles
    //ANGLE_360: createValue(() => new Angle(360)),
    ANGLE_270: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(270); }),
    ANGLE_180: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(180); }),
    ANGLE_90: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(90); }),
    ANGLE_60: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(60); }),
    ANGLE_45: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(45); }),
    ANGLE_30: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(30); }),
    ANGLE_15: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Angle(15); }),
    // Colors
    COLOR_MAX: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.MaxColor(); }),
    COLOR_MIN: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.MinColor(); }),
    COLOR_SHIFT_1_2: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 2); }),
    COLOR_SHIFT_1_4: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 4); }),
    COLOR_SHIFT_1_5: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 5); }),
    COLOR_SHIFT_1_10: createValue(function () { return new _ast_colors__WEBPACK_IMPORTED_MODULE_2__.ShiftColor(1 / 10); }),
    // Stroke
    STROKE_SOLID: createValue(function () { return new _ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("solid"); }),
    STROKE_DASHED: createValue(function () { return new _ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("dashed"); }),
    STROKE_DOTTED: createValue(function () { return new _ast_strokes__WEBPACK_IMPORTED_MODULE_3__.SetStrokeStyle("dotted"); }),
    STROKE_THICK_ADD: createValue(function () { return new _ast_strokes__WEBPACK_IMPORTED_MODULE_3__.ShiftStrokeThickness(+1); }),
    STROKE_THICK_SUB: createValue(function () { return new _ast_strokes__WEBPACK_IMPORTED_MODULE_3__.ShiftStrokeThickness(-1); }),
    // Operations
    OP_MULT: createValue(function () { return new _ast_ops__WEBPACK_IMPORTED_MODULE_4__.MultOp(); }),
    OP_ADD: createValue(function () { return new _ast_ops__WEBPACK_IMPORTED_MODULE_4__.AddOp(); }),
    OP_SUB: createValue(function () { return new _ast_ops__WEBPACK_IMPORTED_MODULE_4__.SubOp(); }),
    // Arguments
    ARGUMENT: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.Argument(); }),
    CALL_DIAMOND: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("DIAMOND"); }, true),
    CALL_INV_TRIANGLE: createValue(function () { return new _ast_values__WEBPACK_IMPORTED_MODULE_0__.DynamicArgument("INV_TRIANGLE"); }, true),
    // *** Actions ***
    // Callers
    CALL_F: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("F", v); }),
    CALL_G: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("G", v); }),
    CALL_H: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Call("H", v); }),
    // Painters
    DRAW_LINE: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawLine(v); }),
    DRAW_CIRCLE: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawCircle(v); }),
    DRAW_SQUARE: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawSquare(v); }),
    DRAW_TRIANGLE: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawTriangle(v); }),
    DRAW_ARCLINE_R_3_4: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+3 / 4, v); }),
    DRAW_ARCLINE_R_1_2: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 2, v); }),
    DRAW_ARCLINE_R_1_4: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(+1 / 4, v); }),
    DRAW_ARCLINE_L_3_4: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-3 / 4, v); }),
    DRAW_ARCLINE_L_1_2: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 2, v); }),
    DRAW_ARCLINE_L_1_4: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.DrawArcLine(-1 / 4, v); }),
    // Cursor Operators
    FORWARD: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Forward(v); }),
    ROTATE_LEFT: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.RotateLeft(v); }),
    ROTATE_RIGHT: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.RotateRight(v); }),
    REVERSE: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Reverse(v); }),
    REPLAY: createAction("+", function (v) { return new _ast_actions__WEBPACK_IMPORTED_MODULE_1__.Replay(v); }),
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
var DEFAULT_ICON_URL = "".concat("", "icons/");


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
var Controller = /** @class */ (function () {
    function Controller(node) {
        this.node = node;
    }
    return Controller;
}());



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
/* harmony import */ var _views_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/code */ "./src/web/views/code.ts");
/* harmony import */ var _views_docBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/docBar */ "./src/web/views/docBar.ts");
/* harmony import */ var _views_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/title */ "./src/web/views/title.ts");
/* harmony import */ var _views_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/comment */ "./src/web/views/comment.ts");
/* harmony import */ var _views_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/image */ "./src/web/views/image.ts");
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../exec */ "./src/exec.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var DocsController = /** @class */ (function (_super) {
    __extends(DocsController, _super);
    function DocsController(params, iconUrl) {
        var _this = _super.call(this, document.getElementById(params.nodeId)) || this;
        _this.initRender(params);
        _this.iterations = params.iterations;
        _this.tokens = params.tokens;
        _this.position = -1;
        _this.iconUrl = iconUrl;
        _this.imageView = new _views_image__WEBPACK_IMPORTED_MODULE_5__.ImageView(_this.node.querySelector(".fract-image"));
        _this.titleView = new _views_title__WEBPACK_IMPORTED_MODULE_3__.TitleView(_this.node.querySelector(".fract-title"), params.title);
        _this.commentView = new _views_comment__WEBPACK_IMPORTED_MODULE_4__.CommentView(_this.node.querySelector(".fract-comment"));
        _this.docBarView = new _views_docBar__WEBPACK_IMPORTED_MODULE_2__.DocBarView({
            node: _this.node.querySelector(".fract-bar"),
            next: _this.next.bind(_this),
            prev: _this.prev.bind(_this),
        });
        _this.codeView = new _views_code__WEBPACK_IMPORTED_MODULE_1__.CodeView({
            node: _this.node.querySelector(".fract-staves"),
            isDraggable: false,
            onChange: function () { _this.scrapeAndRun(); },
            iconUrl: iconUrl,
        });
        return _this;
    }
    DocsController.prototype.initRender = function (params) {
        this.node.classList.add("fract-animation");
        if (params.title.length > 0) {
            var titleNode = document.createElement("h1");
            titleNode.classList.add("fract-title");
            this.node.appendChild(titleNode);
        }
        {
            var imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            var stavesNode = document.createElement("ul");
            stavesNode.classList.add("fract-staves");
            this.node.appendChild(stavesNode);
        }
        {
            var commentNode = document.createElement("div");
            commentNode.classList.add("fract-comment");
            this.node.appendChild(commentNode);
        }
        {
            var barNode = document.createElement("div");
            barNode.classList.add("fract-bar");
            this.node.appendChild(barNode);
        }
    };
    DocsController.prototype.render = function (params) {
        var staveBag = params.staves.map(function (stave) {
            var _a = stave.split("::"), name = _a[0], _b = _a[1], suffix = _b === void 0 ? "" : _b;
            return { name: name, suffix: suffix, tokens: [] };
        });
        this.codeView.render(staveBag);
        this.docBarView.render(this.position, this.tokens.length, this.iterations);
        this.titleView.render();
        this.commentView.render();
    };
    DocsController.prototype.update = function () {
        this.updateComment();
        this.scrapeAndRun();
        this.docBarView.update(this.position, this.tokens.length, this.iterations);
    };
    DocsController.prototype.iterateToPosition = function (params) {
        for (var i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.update();
    };
    DocsController.prototype.next = function () {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
        this.update();
    };
    DocsController.prototype.prev = function () {
        if (this.position <= 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
        this.update();
    };
    DocsController.prototype.scrapeAndRun = function () {
        var cursorCfg = {};
        var argument = 1.0;
        var code = this.codeView.scrapeCode();
        var cursor = (0,_exec__WEBPACK_IMPORTED_MODULE_6__.exec)(argument, this.iterations, code, cursorCfg);
        this.imageView.render(cursor);
    };
    DocsController.prototype.nextExecute = function () {
        var _this = this;
        this.getCommands().forEach(function (command) {
            if (command[0] != "!") {
                var _a = command.split("@", 2), stave = _a[0], token = _a[1];
                _this.pushTokenOnBack(stave, token);
                return;
            }
            switch (command.substring(1)) {
                case "IT_INC":
                    _this.iterations += 1;
                    break;
                case "IT_DEC":
                    _this.iterations -= 1;
                    break;
                case "NOP": break;
                default:
                    console.error("".concat(command, " not found"));
                    break;
            }
        });
    };
    DocsController.prototype.prevExecute = function () {
        var _this = this;
        this.getCommands().forEach(function (command) {
            if (command[0] != "!") {
                var line = command.split("@", 1)[0];
                _this.removeLastToken(line);
                return;
            }
            switch (command.substring(1)) {
                case "IT_INC":
                    _this.iterations -= 1;
                    break;
                case "IT_DEC":
                    _this.iterations += 1;
                    break;
                case "NOP": break;
                default:
                    console.error("".concat(command, " not found"));
                    break;
            }
        });
    };
    DocsController.prototype.getCommands = function () {
        var commandWithComment = this.tokens[this.position];
        var rawCommands = commandWithComment.split("#", 1)[0];
        return rawCommands.split(",").map(function (rawCommand) { return rawCommand.trim(); });
    };
    DocsController.prototype.updateComment = function () {
        var commandWithComment = this.tokens[this.position];
        var _a = commandWithComment.split("#", 2), rawComment = _a[1];
        var comment = rawComment ? rawComment.trim() : "";
        this.commentView.render(comment);
    };
    DocsController.prototype.pushTokenOnBack = function (fullStaveName, token) {
        var stave = this.findStave(fullStaveName);
        stave.pushTokenOnBack(token);
    };
    DocsController.prototype.removeLastToken = function (fullStaveName) {
        var stave = this.findStave(fullStaveName);
        stave.removeTokenOnBack();
    };
    DocsController.prototype.findStave = function (fullStaveName) {
        var _a = this.splitFullStaveName(fullStaveName), name = _a[0], suffix = _a[1];
        var stave = this.codeView.findStave(name, suffix);
        if (stave === undefined) {
            throw "stave not found: ".concat(fullStaveName);
        }
        return stave;
    };
    DocsController.prototype.splitFullStaveName = function (fullStaveName) {
        var _a = fullStaveName.split("::", 2), name = _a[0], suffix = _a[1];
        return [name, suffix || ""];
    };
    return DocsController;
}(_controller__WEBPACK_IMPORTED_MODULE_0__.Controller));



/***/ }),

/***/ "./src/web/tokens.ts":
/*!***************************!*\
  !*** ./src/web/tokens.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTION_TOKENS": () => (/* binding */ ACTION_TOKENS),
/* harmony export */   "NAME_TO_TOKEN": () => (/* binding */ NAME_TO_TOKEN),
/* harmony export */   "VALUE_TOKENS": () => (/* binding */ VALUE_TOKENS)
/* harmony export */ });
var ACTION_TOKENS = [
    {
        label: 'Functions',
        tokens: [
            { name: 'ARGUMENT', label: 'Argument', type: 'value' },
            { name: 'CALL_DIAMOND', label: 'Diamond', type: 'value' },
            { name: 'CALL_F', label: 'Call F function', type: 'action' },
            { name: 'CALL_G', label: 'Call G function', type: 'action' },
            { name: 'CALL_H', label: 'Call H function', type: 'action' },
        ],
    },
    {
        label: 'Painters',
        tokens: [
            { name: 'DRAW_LINE', label: 'Draw Line', type: 'action' },
            { name: 'DRAW_CIRCLE', label: 'Draw Circle', type: 'action' },
            { name: 'DRAW_SQUARE', label: 'Draw Square', type: 'action' },
            { name: 'DRAW_TRIANGLE', label: 'Draw Triangle', type: 'action' },
            { name: 'DRAW_ARCLINE_R_3_4', label: 'Draw Arc Line 3/4 (Right)', type: 'action' },
            { name: 'DRAW_ARCLINE_R_1_2', label: 'Draw Arc Line 1/2 (Right)', type: 'action' },
            { name: 'DRAW_ARCLINE_R_1_4', label: 'Draw Arc Line 1/4 (Right)', type: 'action' },
            { name: 'DRAW_ARCLINE_L_3_4', label: 'Draw Arc Line 3/4 (Left)', type: 'action' },
            { name: 'DRAW_ARCLINE_L_1_2', label: 'Draw Arc Line 1/2 (Left)', type: 'action' },
            { name: 'DRAW_ARCLINE_L_1_4', label: 'Draw Arc Line 1/4 (Left)', type: 'action' },
        ],
    },
    {
        label: 'Cursor',
        tokens: [
            { name: 'FORWARD', label: 'Move forward', type: 'action' },
            { name: 'ROTATE_LEFT', label: 'Rotate left', type: 'action' },
            { name: 'ROTATE_RIGHT', label: 'Rotate right', type: 'action' },
            { name: 'REVERSE', label: 'Reverse', type: 'action' },
            { name: 'REPLAY', label: 'Replay', type: 'action' },
        ],
    },
];
var VALUE_TOKENS = [
    {
        label: 'Counters',
        tokens: [
            { name: 'COUNT_1', label: 'One', type: 'value' },
            { name: 'COUNT_2', label: 'Two', type: 'value' },
            { name: 'COUNT_3', label: 'Three', type: 'value' },
            { name: 'COUNT_5', label: 'Five', type: 'value' },
            { name: 'COUNT_MINUS', label: 'Minus One', type: 'value' },
        ],
    },
    {
        label: 'Fractions',
        tokens: [
            { name: 'FRACT_1_2', label: 'Half', type: 'value' },
            { name: 'FRACT_1_3', label: 'One Third', type: 'value' },
            { name: 'FRACT_2_3', label: 'Two thirds', type: 'value' },
            { name: 'FRACT_1_4', label: 'One Quarter', type: 'value' },
            { name: 'FRACT_3_4', label: 'Three quarters', type: 'value' },
            { name: 'FRACT_1_5', label: 'One Fifth', type: 'value' },
        ],
    },
    {
        label: 'Angles',
        tokens: [
            { name: 'ANGLE_270', label: '270°', type: 'value' },
            { name: 'ANGLE_180', label: '180°', type: 'value' },
            { name: 'ANGLE_90', label: '90°', type: 'value' },
            { name: 'ANGLE_60', label: '60°', type: 'value' },
            { name: 'ANGLE_45', label: '45°', type: 'value' },
            { name: 'ANGLE_30', label: '30°', type: 'value' },
            { name: 'ANGLE_15', label: '15°', type: 'value' },
        ],
    },
    {
        label: 'Modificators',
        tokens: [
            { name: 'OP_MULT', label: 'Multiple operator', type: 'value' },
            { name: 'OP_ADD', label: 'Addition operator', type: 'value' },
            { name: 'OP_SUB', label: 'Subtraction operator', type: 'value' },
            { name: 'COLOR_MAX', label: 'Second Color', type: 'value' },
            { name: 'COLOR_MIN', label: 'First Color', type: 'value' },
            { name: 'COLOR_SHIFT_1_2', label: 'Change Color', type: 'value' },
            { name: 'COLOR_SHIFT_1_4', label: 'Change Color', type: 'value' },
            { name: 'COLOR_SHIFT_1_5', label: 'Change Color', type: 'value' },
            { name: 'COLOR_SHIFT_1_10', label: 'Change Color', type: 'value' },
            { name: 'STROKE_THICK_ADD', label: 'Thick stroke', type: 'value' },
            { name: 'STROKE_THICK_SUB', label: 'Thin stroke', type: 'value' },
        ],
    },
];
var NAME_TO_TOKEN = new Map(ACTION_TOKENS
    .concat(VALUE_TOKENS)
    .map(function (c) { return c.tokens.map(function (t) { return [t.name, t]; }); })
    .flat());


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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts */ "./src/web/consts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CodeView = /** @class */ (function (_super) {
    __extends(CodeView, _super);
    function CodeView(_a) {
        var node = _a.node, onChange = _a.onChange, _b = _a.isDraggable, isDraggable = _b === void 0 ? false : _b, _c = _a.iconUrl, iconUrl = _c === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _c;
        var _this = _super.call(this, node) || this;
        _this.iconUrl = iconUrl;
        _this.staveViews = [];
        _this.isDraggable = isDraggable;
        _this.onChange = onChange;
        return _this;
    }
    CodeView.prototype.render = function (staves) {
        this.clear();
        this.staveViews = staves.map(this.createStave.bind(this));
    };
    CodeView.prototype.findStave = function (name, suffix) {
        return this.staveViews.find(function (view) { return view.checkName(name, suffix); });
    };
    CodeView.prototype.addStave = function (params) {
        var view = this.createStave({
            name: params.name,
            suffix: params.suffix,
            tokens: params.tokens,
        });
        this.staveViews.push(view);
    };
    CodeView.prototype.scrapeCode = function () {
        return this.staveViews.filter(function (view) { return view.couldBeScraped(); }).map(function (view) { return view.scrape(); });
    };
    CodeView.prototype.createStave = function (_a) {
        var name = _a.name, suffix = _a.suffix, tokens = _a.tokens;
        var node = document.createElement("li");
        this.node.appendChild(node);
        var view = new _stave__WEBPACK_IMPORTED_MODULE_1__.StaveView({
            node: node,
            name: name,
            suffix: suffix || "",
            iconUrl: this.iconUrl,
            onChange: this.onChange,
            findStaveDelegator: this.findStave.bind(this),
            isDraggable: this.isDraggable,
            tokens: tokens,
        });
        view.render();
        return view;
    };
    return CodeView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CommentView = /** @class */ (function (_super) {
    __extends(CommentView, _super);
    function CommentView(node) {
        var _this = _super.call(this, node) || this;
        _this.node.classList.add("fract-comment");
        return _this;
    }
    CommentView.prototype.render = function (comment) {
        if (comment === void 0) { comment = ""; }
        this.node.innerText = comment;
    };
    return CommentView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DocBarView = /** @class */ (function (_super) {
    __extends(DocBarView, _super);
    function DocBarView(_a) {
        var node = _a.node, next = _a.next, prev = _a.prev;
        var _this = _super.call(this, node) || this;
        _this.node.classList.add("fract-bar");
        _this.next = next;
        _this.prev = prev;
        return _this;
    }
    DocBarView.prototype.render = function (position, tokenSize, iterations) {
        {
            var btnNode = document.createElement("input");
            btnNode.type = "button";
            btnNode.value = "« PREV";
            btnNode.name = "prev";
            btnNode.addEventListener("click", this.prev);
            this.node.appendChild(btnNode);
        }
        {
            var btnNode = document.createElement("input");
            btnNode.type = "button";
            btnNode.value = "NEXT »";
            btnNode.name = "next";
            btnNode.addEventListener("click", this.next);
            this.node.appendChild(btnNode);
        }
        {
            var labelNode = document.createElement("label");
            labelNode.htmlFor = "iterations";
            labelNode.innerText = "Iterations:";
            this.node.appendChild(labelNode);
        }
        {
            var itNode = document.createElement("input");
            itNode.type = "number";
            itNode.disabled = true;
            itNode.name = "iterations";
            this.node.appendChild(itNode);
        }
        this.update(position, tokenSize, iterations);
    };
    DocBarView.prototype.update = function (position, tokenSize, iterations) {
        this.findInput("next").disabled = position >= tokenSize - 1;
        this.findInput("prev").disabled = position <= 0;
        this.findInput("iterations").value = iterations.toFixed();
    };
    DocBarView.prototype.findInput = function (name) {
        return this.node.querySelector("[name='".concat(name, "']"));
    };
    return DocBarView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg */ "./src/svg.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageView.prototype.render = function (cursor, backgroundColor) {
        if (backgroundColor === void 0) { backgroundColor = null; }
        this.clear();
        this.node.style.backgroundColor = backgroundColor ? backgroundColor : "none";
        this.node.appendChild((0,_svg__WEBPACK_IMPORTED_MODULE_1__.createSvg)(document, cursor));
    };
    return ImageView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts */ "./src/web/consts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var StaveView = /** @class */ (function (_super) {
    __extends(StaveView, _super);
    function StaveView(_a) {
        var node = _a.node, name = _a.name, suffix = _a.suffix, onChange = _a.onChange, findStaveDelegator = _a.findStaveDelegator, _b = _a.isDraggable, isDraggable = _b === void 0 ? false : _b, _c = _a.iconUrl, iconUrl = _c === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _c, _d = _a.tokens, tokens = _d === void 0 ? [] : _d;
        var _this = _super.call(this, node) || this;
        _this.iconUrl = iconUrl;
        _this.name = name;
        _this.suffix = suffix;
        _this.tokensNode = document.createElement("div");
        _this.tokenView = new _staveToken__WEBPACK_IMPORTED_MODULE_1__.TokensStaveView({
            node: _this.tokensNode,
            name: name,
            suffix: suffix,
            onDrop: onChange,
            findStaveDelegator: findStaveDelegator,
            isDraggable: isDraggable,
            iconUrl: iconUrl,
            tokens: tokens,
        });
        return _this;
    }
    StaveView.prototype.render = function () {
        this.node.classList.add("stave");
        this.node.dataset.name = this.name;
        this.node.dataset.suffix = this.suffix;
        this.node.appendChild(this.createName(this.name, this.suffix));
        this.node.appendChild(this.tokensNode);
        this.tokenView.render();
    };
    StaveView.prototype.checkName = function (name, suffix) {
        return this.name === name && this.suffix === suffix;
    };
    StaveView.prototype.show = function () {
        this.node.classList.remove("hide");
    };
    StaveView.prototype.hide = function () {
        this.node.classList.add("hide");
    };
    StaveView.prototype.showOrHide = function () {
        this.node.classList.toggle("hide");
    };
    StaveView.prototype.pushTokenAfter = function (token, index) {
        this.tokenView.pushTokenAfter(token, index);
    };
    StaveView.prototype.removeToken = function (index) {
        this.tokenView.removeToken(index);
    };
    StaveView.prototype.pushTokenOnBack = function (token) {
        this.tokenView.pushTokenOnBack(token);
    };
    StaveView.prototype.removeTokenOnBack = function () {
        this.tokenView.removeTokenOnBack();
    };
    StaveView.prototype.couldBeScraped = function () {
        var isHide = this.node.classList.contains("hide");
        return !isHide;
    };
    StaveView.prototype.scrape = function () {
        var tokens = this.tokenView.scrapeTokens();
        var _a = this.node.dataset, name = _a.name, suffix = _a.suffix;
        var realname = suffix ? "".concat(name, "::").concat(suffix) : name;
        return { name: realname, tokens: tokens };
    };
    StaveView.prototype.createName = function (name, suffix) {
        var node = document.createElement("span");
        node.classList.add("name");
        var realname = suffix ? "".concat(name, "_").concat(suffix) : name;
        node.style.backgroundImage = "url(".concat(this.iconUrl, "/CALL_").concat(realname, ".svg)");
        return node;
    };
    return StaveView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ "./src/web/consts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TokensStaveView = /** @class */ (function (_super) {
    __extends(TokensStaveView, _super);
    function TokensStaveView(_a) {
        var node = _a.node, name = _a.name, suffix = _a.suffix, onDrop = _a.onDrop, findStaveDelegator = _a.findStaveDelegator, _b = _a.iconUrl, iconUrl = _b === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ICON_URL : _b, _c = _a.isDraggable, isDraggable = _c === void 0 ? false : _c, _d = _a.tokens, tokens = _d === void 0 ? [] : _d;
        var _this = _super.call(this, {
            node: node,
            iconUrl: iconUrl,
            isDraggable: isDraggable,
        }) || this;
        _this.onDrop = onDrop;
        _this.tokens = tokens;
        _this.findStaveDelegator = findStaveDelegator;
        _this.name = name;
        _this.suffix = suffix;
        return _this;
    }
    TokensStaveView.prototype.render = function () {
        this.node.classList.add("outer-tokens");
        var innerNode = this.createElement({
            name: "div",
            classes: ["inner-tokens"],
        });
        this.node.appendChild(innerNode);
        this.renderTokens();
        if (this.isDraggable) {
            this.node.appendChild(this.createTokenRemoveSpanNode());
        }
    };
    TokensStaveView.prototype.renderTokens = function () {
        var _this = this;
        var innerNode = this.node.querySelector('.inner-tokens');
        innerNode.innerHTML = "";
        if (this.isDraggable) {
            innerNode.appendChild(this.createTokenSpanNode(0));
        }
        this.tokens.forEach(function (token, index) {
            _this.pushTokenNodeOnBack(innerNode, token, index);
        });
    };
    TokensStaveView.prototype.pushTokenAfter = function (token, index) {
        this.tokens.splice(index, 0, token);
        this.renderTokens();
    };
    TokensStaveView.prototype.removeToken = function (index) {
        this.tokens.splice(index, 1);
        this.renderTokens();
    };
    TokensStaveView.prototype.pushTokenOnBack = function (token) {
        this.tokens.push(token);
        this.renderTokens();
    };
    TokensStaveView.prototype.removeTokenOnBack = function () {
        this.tokens.pop();
        this.renderTokens();
    };
    TokensStaveView.prototype.pushTokenNodeOnBack = function (tokensNode, token, index) {
        var _this = this;
        var appendSpan = function (container, s) {
            if (s === void 0) { s = 1; }
            if (_this.isDraggable) {
                container.appendChild(_this.createTokenSpanNode(index + s));
            }
        };
        var appendChild = function (container, node, s) {
            if (s === void 0) { s = 1; }
            container.appendChild(node);
            appendSpan(container, s);
        };
        var tokenNode = this.createEnhancedTokenNode(token, index);
        var lastNode = tokensNode.lastChild;
        if (this.isDraggable) {
            // probably it's a span, find previous node
            lastNode = lastNode.previousSibling;
        }
        if (!lastNode) {
            return appendChild(tokensNode, tokenNode);
        }
        var isGroup = function (node) { return node.classList.contains("fract-token-group"); };
        var isAction = function (node) { var _a; return ((_a = node.dataset) === null || _a === void 0 ? void 0 : _a.type) === "action"; };
        if (isAction(tokenNode)) {
            appendChild(tokensNode, tokenNode);
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
                return;
            }
            if (!isAction(lastNode)) {
                return appendChild(tokensNode, tokenNode);
            }
            // Create a new group with action and value.
            var groupNode = this.createEmptyTokenGroup();
            if (this.isDraggable) {
                tokensNode.removeChild(lastNode.nextSibling);
            }
            tokensNode.removeChild(lastNode);
            tokensNode.insertBefore(groupNode, lastNode.nextSibling);
            appendChild(groupNode, lastNode, 0);
            appendChild(groupNode, tokenNode);
            appendSpan(tokensNode);
        }
    };
    TokensStaveView.prototype.createEnhancedTokenNode = function (token, index) {
        var node = this.createTokenNode(token);
        node.dataset.isEditable = this.isDraggable ? 'yes' : 'no';
        node.dataset.index = "".concat(index);
        node.dataset.name = this.name;
        node.dataset.suffix = this.suffix;
        return node;
    };
    TokensStaveView.prototype.createEmptyTokenGroup = function () {
        return this.createElement({
            name: "div",
            classes: ["fract-token-group"],
        });
    };
    TokensStaveView.prototype.scrapeTokens = function () {
        return this.tokens;
    };
    TokensStaveView.prototype.createTokenSpanNode = function (index) {
        var node = this.createElement({
            name: 'span',
            classes: ["fract-token-span"],
        });
        node.dataset.index = "".concat(index);
        this.setTokenSpanEvents(node);
        return node;
    };
    TokensStaveView.prototype.createTokenRemoveSpanNode = function () {
        var node = document.createElement("span");
        node.classList.add("fract-token-span", "remove");
        this.setTokenSpanEvents(node, true);
        return node;
    };
    TokensStaveView.prototype.setTokenSpanEvents = function (node, remove) {
        if (remove === void 0) { remove = false; }
        node.addEventListener('dragover', evDragOver, false);
        node.addEventListener('drop', evDrop, false);
        node.addEventListener('dragenter', evDragEnter, false);
        node.addEventListener('dragleave', evDragLeave, false);
        var view = this;
        function evDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }
        function evDrop(e) {
            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }
            this.classList.remove('over');
            var oldId = e.dataTransfer.getData('id');
            var oldTokenNode = document.getElementById(oldId);
            var _a = oldTokenNode.dataset, token = _a.token, isEditable = _a.isEditable, name = _a.name, suffix = _a.suffix;
            if (!remove) {
                view.pushTokenAfter(token, this.dataset.index);
            }
            var oldIndex = parseInt(oldTokenNode.dataset.index);
            var shift = remove || (view.name === name && view.suffix === suffix && parseInt(this.dataset.index)) > oldIndex ? 0 : 1;
            if (isEditable === "yes") {
                var stave = view.findStaveDelegator(name, suffix);
                stave.removeToken(oldIndex + shift);
            }
            view.onDrop();
            return false;
        }
        function findSpan(node) {
            return node.classList.contains('fract-token-span') ? node : node.nextSibling;
        }
        function evDragEnter(e) {
            findSpan(this).classList.add('over');
        }
        function evDragLeave(e) {
            findSpan(this).classList.remove('over');
        }
    };
    return TokensStaveView;
}(_token__WEBPACK_IMPORTED_MODULE_0__.TokensView));

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
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TitleView = /** @class */ (function (_super) {
    __extends(TitleView, _super);
    function TitleView(node, text) {
        var _this = _super.call(this, node) || this;
        _this.text = text;
        return _this;
    }
    TitleView.prototype.render = function () {
        if (!this.text) {
            this.node.remove();
            return;
        }
        this.node.innerText = this.text;
    };
    return TitleView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens */ "./src/web/tokens.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts */ "./src/web/consts.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TokensView = /** @class */ (function (_super) {
    __extends(TokensView, _super);
    function TokensView(_a) {
        var node = _a.node, isDraggable = _a.isDraggable, _b = _a.iconUrl, iconUrl = _b === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _b;
        var _this = _super.call(this, node) || this;
        _this.iconUrl = iconUrl;
        _this.isDraggable = isDraggable;
        return _this;
    }
    TokensView.prototype.createTokenNode = function (token) {
        var tokenInfo = _tokens__WEBPACK_IMPORTED_MODULE_1__.NAME_TO_TOKEN.get(token);
        var node = this.createElement({
            name: 'span',
            classes: ['fract-token'],
        });
        node.id = "token-".concat((0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
        node.dataset.token = token;
        node.dataset.type = tokenInfo ? tokenInfo.type : "unknown";
        node.style.backgroundImage = "url(".concat(this.iconUrl, "/").concat(token, ".svg)");
        if (this.isDraggable) {
            node.setAttribute('draggable', 'true');
            this.setTokenEvents(node);
        }
        return node;
    };
    TokensView.prototype.setTokenEvents = function (node) {
        node.addEventListener('dragstart', evDragStart, false);
        function evDragStart(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('id', this.id);
        }
    };
    return TokensView;
}(_view__WEBPACK_IMPORTED_MODULE_0__.View));



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
var View = /** @class */ (function () {
    function View(node) {
        this.node = node;
    }
    View.prototype.clear = function () {
        this.node.innerHTML = "";
    };
    View.prototype.createElement = function (params) {
        var _a;
        var node = document.createElement(params.name);
        if (params.classes) {
            (_a = node.classList).add.apply(_a, params.classes);
        }
        if (params.text) {
            node.innerText = params.text;
        }
        return node;
    };
    return View;
}());



/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/* harmony import */ var _style_docs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/docs.scss */ "./src/style/docs.scss");


var ANIMATIONS_PARAMS = [];
var CURRENT_HREF = document.currentScript.src;
function makeAnimation(params) {
    ANIMATIONS_PARAMS.push(params);
}
function getIconsUrls() {
    var dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    return "".concat(dirnameHref, "../_images");
}
function renderAll(iconUrl) {
    ANIMATIONS_PARAMS.forEach(function (params) {
        var controller = new _controllers_docs__WEBPACK_IMPORTED_MODULE_0__.DocsController(params, iconUrl);
        controller.render(params);
        controller.iterateToPosition(params);
    });
}
window.addEventListener('load', function (event) {
    var iconUrl = getIconsUrls();
    renderAll(iconUrl);
});

})();

TUT = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1B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TSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQUs7SUFDakMsSUFBTSxPQUFPLEdBQUcsWUFBWSxFQUFFLENBQUM7SUFDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVFVULy4vc3JjL3N0eWxlL2RvY3Muc2NzcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9zdHlsZS9kb2NzLnNjc3M/YmQyYyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L2Jhc2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9zdHJva2VzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvdmFsdWVzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jdXJzb3IudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2V4ZWMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3ZnLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb250cm9sbGVycy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29udHJvbGxlcnMvZG9jcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9jb21tZW50LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvZG9jQmFyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3MvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy9zdGF2ZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3N0YXZlVG9rZW4udHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi92aWV3cy90aXRsZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL3ZpZXdzL3Rva2VuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2RvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZnJhY3QtdG9rZW5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGdhcDogNXB4O1xcbn1cXG4uZnJhY3QtdG9rZW5zLmhpZGUgLmZyYWN0LXRva2VuLCAuZnJhY3QtdG9rZW5zLmhpZGUgLmxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAuZ3JvdXAtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC10b2tlbnMgPiAubGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mcmFjdC10b2tlbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmZyYWN0LXRva2VuLnRva2VuLWlubGluZSB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cCA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cCA+ICo6bm90KDpmaXJzdC1jaGlsZCkuZnJhY3QtdG9rZW4ge1xcbiAgYm9yZGVyLWxlZnQ6IDJweCAjODg4IGRvdHRlZDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLmZyYWN0LXRva2VuLXNwYW4ub3Zlcjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLXNwYW4ucmVtb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEODg7XFxuICBib3JkZXI6IDJweCAjOTIyIGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4uZnJhY3QtdG9rZW4tc3Bhbi5yZW1vdmU6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxufVxcblxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLnRva2VuLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5uYW1lIHtcXG4gIGZsZXg6IDAgMSA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm91dGVyLXRva2VucyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAuaW5uZXItdG9rZW5zIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm91dGVyLXRva2VucyA+IC5pbm5lci10b2tlbnMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAub3V0ZXItdG9rZW5zID4gLnJlbW92ZSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZyYWN0LXRva2VuLnRva2VuLWhlYWRlciB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLmZyYWN0LWFuaW1hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG59XFxuLmZyYWN0LWFuaW1hdGlvbiBsYWJlbCB7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmZyYWN0LXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyLCAuZnJhY3QtY29tbWVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyID4gaW5wdXRbbmFtZT1pdGVyYXRpb25zXSB7XFxuICB3aWR0aDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZyYWN0LWNvbW1lbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgaGVpZ2h0OiA1ZW07XFxuICBsaW5lLWhlaWdodDogMS4yNWVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZyYWN0LWltYWdlID4gc3ZnIHtcXG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgLm91dGVyLXRva2VucyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSAuaW5uZXItdG9rZW5zIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZyYWN0LXN0YXZlcyAuZnJhY3QtdG9rZW4ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Rva2Vucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvZG9jcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29kZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0NKO0FERVE7RUFDSSxhQUFBO0FDQVo7QURJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBREtJ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eEI7QUF4S0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTBLUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZnJhY3QtdG9rZW5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICAmLmhpZGUge1xcbiAgICAgICAgLmZyYWN0LXRva2VuLCAubGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgPiAuZ3JvdXAtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgPiAubGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFxuICAgICYudG9rZW4taW5saW5lIHtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICAgID4gKiB7IGZsZXg6IDAgMCBhdXRvOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDBweDsgfVxcbiAgICA+ICo6bm90KDpmaXJzdC1jaGlsZCkuZnJhY3QtdG9rZW4geyBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkOyB9XFxuICAgID4gLmZyYWN0LXRva2VuLXNwYW4geyBwYWRkaW5nOiAycHg7IH1cXG59XFxuXFxuLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgJi5vdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5yZW1vdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4ODtcXG4gICAgICAgIGJvcmRlcjogMnB4ICM5MjIgZG90dGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL3Rva2Vucyc7XFxuQGltcG9ydCAnLi9jb2RlJztcXG5cXG4uZnJhY3QtdG9rZW4udG9rZW4taGVhZGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5mcmFjdC1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG5cXG4gICAgbGFiZWwge1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyLCAuZnJhY3QtY29tbWVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uZnJhY3QtYmFyIHtcXG4gICAgPiBpbnB1dFtuYW1lPVxcXCJpdGVyYXRpb25zXFxcIl0ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LWNvbW1lbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgaGVpZ2h0OiA1ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgPiBzdmcge1xcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICA+IGxpIHtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIC5vdXRlci10b2tlbnMgeyBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgICAgIC5pbm5lci10b2tlbnMgeyBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgfVxcbiAgICAuZnJhY3QtdG9rZW4ge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG4gICAgfVxcbn1cXG5cIixcIi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgPiBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIH1cXG5cXG4gICAgLnRva2VuLWJ0biB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmRyb3Bkb3duIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgICAgIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5mcmFjdC1zdGF2ZXMge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgPiBsaSB7XFxuICAgICAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICA+IC5uYW1lIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDEgNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA+IC5vdXRlci10b2tlbnMgIHtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuXFxuICAgICAgICAgICAgPiAuaW5uZXItdG9rZW5zIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgPiAucmVtb3ZlIHtmbGV4OiAwIDAgYXV0bzsgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaWRlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgTm9kZSwgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlLCBBY3Rpb25SZXN1bHQsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGltcGxlbWVudHMgTm9kZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3QgbG9jYWxzID0gYWN0aW9ucy5tYXAoKCkgPT4gKHt9KSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTspIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzLmF0KGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuYXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGlmdCwgcmV2ZXJzZSB9ID0gYWN0aW9uLmV4ZWMoY29udGV4dCwgbG9jYWwpO1xuICAgICAgICAgICAgdGhpcy5leGVjUmV2ZXJzZShpbmRleCAtIDEsIHJldmVyc2UgPyBNYXRoLnJvdW5kKHJldmVyc2UpIC0gMSA6IDAsIGNvbnRleHQpO1xuICAgICAgICAgICAgaW5kZXggKz0gc2hpZnQgPyBNYXRoLnJvdW5kKHNoaWZ0KSA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShzdG9wSW5kZXg6IG51bWJlciwgcmV2ZXJzZTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGlmIChyZXZlcnNlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3Qgc3RhcnRSZXNlcnZlID0gTWF0aC5tYXgoMCwgc3RvcEluZGV4IC0gcmV2ZXJzZSk7XG4gICAgICAgIGZvcihsZXQgaW5kZXggPSBzdG9wSW5kZXg7IGluZGV4ID49IHN0YXJ0UmVzZXJ2ZTsgaW5kZXgtLSkge1xuICAgICAgICAgICAgaW5kZXggLT0gYWN0aW9ucy5hdChpbmRleCkuZXhlY1JldmVyc2UoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaXplKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE5vZGVXaXRoVmFsdWUgZXh0ZW5kcyBBY3Rpb25Ob2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBWYWx1ZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLnZhbHVlLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcmd1bWVudCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudCk7XG4gICAgICAgIGZ1bmMuZXhlYyhuZXdDb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBmdW5jID0gY29udGV4dC5maW5kRnVuY3Rpb24odGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKCEoZnVuYyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0FyZ3VtZW50ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBuZXdDb250ZXh0ID0gY29udGV4dC5jcmVhdGVOZXdDb250ZXh0KG5ld0FyZ3VtZW50KTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZnVuYy5zaXplKCkgLSAxO1xuICAgICAgICBmdW5jLmV4ZWNSZXZlcnNlKGxhc3RJbmRleCwgbGFzdEluZGV4LCBuZXdDb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd0xpbmUobGVuZ3RoLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdDaXJjbGUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3Q2lyY2xlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdTcXVhcmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3U3F1YXJlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdUcmlhbmdsZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZTogc2l6ZSwgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdUcmlhbmdsZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdBcmNMaW5lKHRoaXMucmF0aW8sIHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gY29udGV4dC5nZXRDdXJzb3IoKTtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgICAgICBjdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlTGVmdCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZVJpZ2h0IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIHJldHVybiB7cmV2ZXJzZTogaXRlcmF0aW9uc307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIGxldCBpdGVyYXRpb25zID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMoaXRlcmF0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVwbGF5IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogYW55KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGxvY2FsLmNvdW50ZXIgfHwgMTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgucm91bmQodGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbC5jb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4ge3NoaWZ0OiAtMX07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblJlc3VsdCB7XG4gICAgc2hpZnQ/OiBudW1iZXI7XG4gICAgcmV2ZXJzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7IHJldHVybiAwOyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFZhbHVlKHZhbHVlTm9kZXM6IFZhbHVlTm9kZVtdLCBjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBpbml0OiBFdmFsdWVkVmFsdWUgPSB7XG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgIGNvbG9yOiBjb250ZXh0LmFyZ3VtZW50LmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogY29udGV4dC5hcmd1bWVudC5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogKGE6IG51bWJlciwgYjpudW1iZXIpID0+IGEgKiBiLFxuICAgIH07XG4gICAgcmV0dXJuIHZhbHVlTm9kZXMucmVkdWNlKHBhcnRFdmFsLmJpbmQodGhpcywgY29udGV4dCksIGluaXQpO1xufVxuXG5mdW5jdGlvbiBwYXJ0RXZhbChjb250ZXh0OiBDb250ZXh0LCBhY2M6IEV2YWx1ZWRWYWx1ZSwgbm9kZTogVmFsdWVOb2RlKTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG5vZGUuZXZhbChjb250ZXh0KTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBuZXdWYWx1ZS52YWx1ZVRyYW5zZm9ybWVyIHx8IGFjYy52YWx1ZVRyYW5zZm9ybWVyO1xuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdHJhbnNmb3JtKGFjYy52YWx1ZSwgbmV3VmFsdWUudmFsdWUpIDogYWNjLnZhbHVlLFxuICAgICAgICBjb2xvcjogbmV3VmFsdWUuY29sb3IgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLmNvbG9yIDogYWNjLmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogbmV3VmFsdWUuc3Ryb2tlU3R5bGUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVN0eWxlIDogYWNjLnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzIDogYWNjLnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgdmFsdWVUcmFuc2Zvcm1lcjogdHJhbnNmb3JtLFxuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXhDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMS4wfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNaW5Db2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMC4wfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaGlmdENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgbGV0IGNvbG9yID0gKGNvbnRleHQuYXJndW1lbnQuY29sb3IgKyB0aGlzLnNoaWZ0KSAlIDEuMDtcbiAgICAgICAgaWYgKGNvbG9yIDwgMC4wKSB7XG4gICAgICAgICAgICBjb2xvciArPSAxLjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtjb2xvcn07XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTXVsdE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAqIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKyBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ViT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhIC0gYiB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgdHlwZSB7IFN0cm9rZVN0eWxlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFNldFN0cm9rZVN0eWxlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHN0cm9rZTogU3Ryb2tlU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJva2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTaGlmdFN0cm9rZVRoaWNrbmVzcyBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHN0cm9rZVRoaWNrbmVzcyA9IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzICsgdGhpcy5zaGlmdDtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlVGhpY2tuZXNzIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5nbGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbm9ybWFsaXplZEFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9ybWFsaXplZEFuZ2xlID0gYW5nbGUgLyAzNjAuMDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLm5vcm1hbGl6ZWRBbmdsZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVyIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IGNvbnRleHQuYXJndW1lbnQudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3QgdmFsdWVOb2RlcyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZU5vZGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodmFsdWVOb2RlcywgY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4vY3Vyc29yXCI7XG5cbmV4cG9ydCB0eXBlIFN0cm9rZVN0eWxlID0gXCJzb2xpZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZGFzaGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZhbHVlZFZhbHVlIHtcbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgICBjb2xvcj86IG51bWJlcjtcbiAgICBzdHJva2VTdHlsZT86IFN0cm9rZVN0eWxlO1xuICAgIHN0cm9rZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgICB2YWx1ZVRyYW5zZm9ybWVyPzogKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2ZnIHtcbiAgICBtYXhJdGVyYXRpb246IG51bWJlcjtcbiAgICBjdXJzb3I6IEN1cnNvcjtcbiAgICBiYWc6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHttYXhJdGVyYXRpb24sIGJhZywgY3Vyc29yfSkge1xuICAgICAgICB0aGlzLm1heEl0ZXJhdGlvbiA9IG1heEl0ZXJhdGlvbjtcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgIHRoaXMuYmFnID0gYmFnO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHB1YmxpYyBpdGVyYXRpb246IG51bWJlcjtcbiAgICBwdWJsaWMgYXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZTtcbiAgICBwcml2YXRlIGNmZzogQ29udGV4dENmZztcblxuICAgIGNvbnN0cnVjdG9yKHtjZmcsIGFyZ3VtZW50LCBpdGVyYXRpb24gPSAwfSkge1xuICAgICAgICB0aGlzLmNmZyA9IGNmZztcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB0aGlzLml0ZXJhdGlvbiA9IGl0ZXJhdGlvbjtcbiAgICB9XG5cbiAgICBmaW5kRnVuY3Rpb24obmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbiA9IHRoaXMuaXRlcmF0aW9uO1xuICAgICAgICBpZiAoaXRlcmF0aW9uID49IHRoaXMuY2ZnLm1heEl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuYW1lc1RvRmluZCA9IFtuYW1lXTtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAlIDIgPT0gMCkge1xuICAgICAgICAgICAgbmFtZXNUb0ZpbmQudW5zaGlmdChgJHtuYW1lfTo6RVZFTmApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNUb0ZpbmQudW5zaGlmdChgJHtuYW1lfTo6T0REYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSB0aGlzLmNmZy5tYXhJdGVyYXRpb24gLSAxKSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpFTkRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0RnVuY05hbWUgPSBuYW1lc1RvRmluZC5maW5kKG5hbWUgPT4gdGhpcy5jZmcuYmFnW25hbWVdKTtcbiAgICAgICAgcmV0dXJuIGV4aXN0RnVuY05hbWUgPyB0aGlzLmNmZy5iYWdbZXhpc3RGdW5jTmFtZV0gOiBudWxsO1xuICAgIH1cblxuICAgIGdldEN1cnNvcigpOiBDdXJzb3Ige1xuICAgICAgICByZXR1cm4gdGhpcy5jZmcuY3Vyc29yO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IENvbnRleHQoe1xuICAgICAgICAgICAgY2ZnOiB0aGlzLmNmZyxcbiAgICAgICAgICAgIGFyZ3VtZW50OiBuZXdBcmd1bWVudCxcbiAgICAgICAgICAgIGl0ZXJhdGlvbjogdGhpcy5pdGVyYXRpb24gKyAxLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGaWd1cmUsIExpbmUsIFNxdWFyZSwgVHJpYW5nbGUsIENpcmNsZSwgQXJjIH0gZnJvbSBcIi4vZmlndXJlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveCB7XG4gICAgbWluOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG1heDogW251bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGNsYXNzIEN1cnNvciB7XG4gICAgc3Ryb2tlU2l6ZTogbnVtYmVyO1xuICAgIGRpc3RhbmNlTXVsdGlwbGVyOiBudW1iZXI7XG4gICAgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgLy8gYW5nbGUgPSAxLjAgLT4gMzYwwrBcbiAgICBhbmdsZTogbnVtYmVyO1xuICAgIGZpZ3VyZXM6IEZpZ3VyZVtdO1xuICAgIGJveDogQm94O1xuICAgIGZpcnN0Q29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBzdHJva2VTaXplID0gMSxcbiAgICAgICAgZGlzdGFuY2VNdWx0aXBsZXIgPSAxMDAsXG4gICAgICAgIGZpcnN0Q29sb3IgPSBcIiMwMDAwMDBcIixcbiAgICAgICAgc2Vjb25kQ29sb3IgPSBcIiNEQzE0M0NcIixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zdHJva2VTaXplID0gc3Ryb2tlU2l6ZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZU11bHRpcGxlciA9IGRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gWzAuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5hbmdsZSA9IDAuMDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFsxLjAsIDAuMF07XG4gICAgICAgIHRoaXMuZmlndXJlcyA9IFtdO1xuICAgICAgICB0aGlzLmJveCA9IHtcbiAgICAgICAgICAgIG1pbjogWzAuMCwgMC4wXSxcbiAgICAgICAgICAgIG1heDogWzAuMCwgMC4wXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maXJzdENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKGZpcnN0Q29sb3IpO1xuICAgICAgICB0aGlzLnNlY29uZENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKHNlY29uZENvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvQ29sb3IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigxLCAyKSwgMTYpO1xuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigzLCAyKSwgMTYpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig1LCAyKSwgMTYpO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGJdO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgICAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBhbmdsZSkgJSAxLjA7XG4gICAgICAgIGNvbnN0IHJhZGlhbnMgPSBhbmdsZSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25bMF0gPSB4ICogY29zIC0geSAqIHNpbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblsxXSA9IHggKiBzaW4gKyB5ICogY29zO1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBMaW5lKFtvbGRfeCwgb2xkX3ldLCBbbmV3X3gsIG5ld195XSwgb3BzKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzaGlmdCA9IHRoaXMuYW5nbGUgLSAwLjI1O1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNoaWZ0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcykpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuZm9yd2FyZChzaXplKTtcbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KHBvaW50LCBNYXRoLmFicyhhcmNSYWRpdXMpKTtcbiAgICB9XG5cbiAgICBkcmF3Q2lyY2xlKHJhZGl1czogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBDaXJjbGUoW3gsIHldLCByYWRpdXMsIG9wcykpO1xuICAgICAgICB0aGlzLmNvbXB1dGVCb3goW3gsIHldLCBNYXRoLmFicyhyYWRpdXMpKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBTcXVhcmUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgb3BzKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveChbeCwgeV0sIE1hdGguYWJzKHNpemUpKTtcbiAgICB9XG5cbiAgICBkcmF3VHJpYW5nbGUoc2l6ZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3Qgb3BzID0geyBmaWxsOiB0aGlzLmNhbGNDb2xvcihjb2xvcikgfTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFRyaWFuZ2xlKFt4LCB5XSwgW2R4LCBkeV0sIHNpemUsIG9wcykpO1xuICAgICAgICB0aGlzLmNvbXB1dGVCb3goW3gsIHldLCBNYXRoLmFicyhzaXplKSk7XG4gICAgfVxuXG4gICAgZm9yd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gKz0geCAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB5ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgIH1cblxuICAgIGFkZE1hcmdpbihtYXJnaW46IG51bWJlcikge1xuICAgICAgICB0aGlzLmJveC5taW5bMF0gLT0gbWFyZ2luO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gLT0gbWFyZ2luO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gKz0gbWFyZ2luO1xuICAgICAgICB0aGlzLmJveC5tYXhbMV0gKz0gbWFyZ2luO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcHV0ZUJveChbeCwgeV06IG51bWJlcltdLCBzaXplID0gMCkge1xuICAgICAgICB0aGlzLmJveC5taW5bMF0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMF0sIHggLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzBdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzBdLCB4ICsgc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1pblsxXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblsxXSwgeSAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMV0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMV0sIHkgKyBzaXplKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2EgPSB0aGlzLmZpcnN0Q29sb3I7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5zZWNvbmRDb2xvcjtcbiAgICAgICAgY29uc3QgYVJhdGlvID0gTWF0aC5hYnMoY29sb3IgLSAwLjUpICogMjtcbiAgICAgICAgY29uc3QgYlJhdGlvID0gMS4wIC0gYVJhdGlvO1xuICAgICAgICBjb25zdCByID0gTWF0aC50cnVuYyhjYVswXSAqIGFSYXRpbyArIGNiWzBdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgZyA9IE1hdGgudHJ1bmMoY2FbMV0gKiBhUmF0aW8gKyBjYlsxXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLnRydW5jKGNhWzJdICogYVJhdGlvICsgY2JbMl0gKiBiUmF0aW8pO1xuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBwYXJzZUxpbmUsIHBhcnNlUmF3VG9rZW5zIH0gZnJvbSBcIi4vcGFyc2VyXCI7XG5pbXBvcnQgeyBDb250ZXh0Q2ZnLCBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0b2tlbnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhlYyh2YWx1ZUFyZ3VtZW50OiBudW1iZXIsIG1heEl0ZXJhdGlvbjogbnVtYmVyLCBmdW5jdGlvbnM6IEZ1bmNbXSwgY3Vyc29yQ2ZnID0ge30pOiBDdXJzb3Ige1xuICAgIGNvbnN0IGN1cnNvciA9IG5ldyBDdXJzb3IoY3Vyc29yQ2ZnKTtcbiAgICBjb25zdCBiYWcgPSB7fTtcbiAgICBmdW5jdGlvbnMuZm9yRWFjaCgoe25hbWUsIHRva2VuczogcmF3VG9rZW5zfSkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICBiYWdbbmFtZV0gPSBwYXJzZUxpbmUobmFtZSwgdG9rZW5zKTtcbiAgICB9KTtcbiAgICBjb25zdCBjZmcgPSBuZXcgQ29udGV4dENmZyh7IG1heEl0ZXJhdGlvbiwgYmFnLCBjdXJzb3I6IGN1cnNvciB9KTtcbiAgICBjb25zdCBhcmd1bWVudCA9IHtcbiAgICAgICAgdmFsdWU6IHZhbHVlQXJndW1lbnQsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogMS4wLFxuICAgICAgICBjb2xvcjogMC4wLFxuICAgIH07XG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHsgY2ZnLCBhcmd1bWVudCB9KTtcblxuICAgIHN0YXJ0RXhlYyhjb250ZXh0LCBiYWcpO1xuXG4gICAgcmV0dXJuIGN1cnNvcjtcbn1cblxuZnVuY3Rpb24gc3RhcnRFeGVjKGNvbnRleHQ6IENvbnRleHQsIGJhZykge1xuICAgIGNvbnN0IGZ1bmMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbihcIlNUQVJUXCIpIHx8IGNvbnRleHQuZmluZEZ1bmN0aW9uKFwiRlwiKTtcbiAgICBpZiAoZnVuYykge1xuICAgICAgICBmdW5jLmV4ZWMoY29udGV4dCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBGaWd1cmUge31cblxuZXhwb3J0IGNsYXNzIExpbmUge1xuICAgIGZpcnN0UG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2Vjb25kUG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgc3Ryb2tlOiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZpcnN0UG9pbnQsIHNlY29uZFBvaW50LCB7Y29sb3IgPSBcImJsYWNrXCIsIHN0cm9rZSA9IDF9ID0ge30pIHtcbiAgICAgICAgdGhpcy5maXJzdFBvaW50ID0gZmlyc3RQb2ludDtcbiAgICAgICAgdGhpcy5zZWNvbmRQb2ludCA9IHNlY29uZFBvaW50O1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENpcmNsZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgc3Ryb2tlID0gMH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyYyB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjbG9zZTogYm9vbGVhbjtcbiAgICBzaGlmdDogbnVtYmVyO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIHJhZGl1cywgcmF0aW8sIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBjbG9zZSA9IGZhbHNlLCBzaGlmdCA9IDAuMCwgc3Ryb2tlID0gMH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNxdWFyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBzdHJva2U6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgc3Ryb2tlID0gMH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmlhbmdsZSAge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVG9rZW4sIHRva2VucywgQWN0aW9uQ2IsIFZhbHVlQ2IgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB7IE5vZGUsIEFjdGlvbk5vZGUsIFZhbHVlTm9kZSB9IGZyb20gXCIuL2FzdC9iYXNlXCI7XG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCIuL2FzdC9hY3Rpb25zXCI7XG5cbmV4cG9ydCBjb25zdCBEWU5BTUlDX0FSR1MgPSBbXCJESUFNT05EXCIsIFwiSU5WX1RSSUFOR0xFXCJdO1xuZXhwb3J0IGNvbnN0IFBST0NFRFVSRVMgPSBbXCJGXCIsIFwiR1wiLCBcIkhcIl07XG5leHBvcnQgY29uc3QgU1VGRklYRVMgPSBbXCJFTkRcIiwgXCJFVkVOXCIsIFwiT0REXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zOiBzdHJpbmdbXSk6IFRva2VuW10ge1xuICAgIHJldHVybiByYXdUb2tlbnMubWFwKHJhdyA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW3Jhd107XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IGBQYXJzaW5nIGVycm9yOiAke3Jhd30gaXMgbm90IHVuZGVmaW5lZCBhcyB0b2tlbi5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KTtcbn1cblxuY2xhc3MgQWN0aW9uVG1wIHtcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuICAgIHByaXZhdGUgdmFsdWVzOiBWYWx1ZU5vZGVbXTtcbiAgICBwcml2YXRlIHRva2VuOiBUb2tlbiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIHNldEFjdGlvblRva2VuKHRva2VuOiBUb2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uVG9rZW4oKTogVG9rZW4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNBY3Rpb25TZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1c2hBY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMudG9rZW4uZmFjdG9yeSBhcyBBY3Rpb25DYjtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZmFjdG9yeSh0aGlzLnZhbHVlcyk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIGluc2VydFZhbHVlKHZhbHVlOiBWYWx1ZU5vZGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmUobmFtZTogc3RyaW5nLCB0b2tlbnM6IFRva2VuW10pIHtcbiAgICBpZiAoRFlOQU1JQ19BUkdTLmluZGV4T2YobmFtZSkgPiAtMSkge1xuICAgICAgICByZXR1cm4gcGFyc2VMaW5lVmFsdWUodG9rZW5zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGFyc2VMaW5lRnVuYyhuYW1lLCB0b2tlbnMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lRnVuYyhuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICBjb25zdCB0bXAgPSBuZXcgQWN0aW9uVG1wKCk7XG4gICAgdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICBpZiAodG1wLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHBhcnNlVmFsdWUodG9rZW4sIHRtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZUFjdGlvbih0b2tlbiwgdG1wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG1wLnB1c2hBY3Rpb24oKTsgLy8gcHVzaCBsYXN0IHRva2VuLlxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihuYW1lLCB0bXAuZ2V0QWN0aW9ucygpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lVmFsdWUodG9rZW5zOiBUb2tlbltdKTogVmFsdWVOb2RlW10ge1xuICAgIHJldHVybiB0b2tlbnMubWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGFjdGlvbnMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4uaXNEeW5hbWljKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGR5bmFtaWMgZWxlbWVudHMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFjdGlvbih0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgaWYgKCF0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IHRva2VuIGlzIG5vdCBhbiBhY3Rpb25cIjtcbiAgICB9XG4gICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICBpZiAodG9rZW4udmFsdWVTaXplID09PSAwKSB7XG4gICAgICAgIHRtcC5wdXNoQWN0aW9uKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBjb25zdCB7IHZhbHVlU2l6ZSB9ID0gdG1wLmdldEFjdGlvblRva2VuKCk7XG4gICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIGlmICh2YWx1ZVNpemUgIT09IFwiK1wiICYmIHRtcC5nZXRWYWx1ZXNMZW5ndGgoKSA8IHZhbHVlU2l6ZSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBoYXMgbm90IGVub3VnaCB2YWx1ZXNcIjtcbiAgICAgICAgfVxuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgICAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgdG1wLmluc2VydFZhbHVlKGZhY3RvcnkoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBGaWd1cmUsIENpcmNsZSwgQXJjLCBTcXVhcmUsIFRyaWFuZ2xlLCBMaW5lIH0gZnJvbSBcIi4vZmlndXJlc1wiO1xuXG5jb25zdCBOQU1FU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcjogQ3Vyc29yKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGNvbnN0IFttaW5feCwgbWluX3ldID0gY3Vyc29yLmJveC5taW47XG4gICAgY29uc3QgW21heF94LCBtYXhfeV0gPSBjdXJzb3IuYm94Lm1heDtcbiAgICBjb25zdCB3aWR0aCA9IG1heF94IC0gbWluX3g7XG4gICAgY29uc3QgaGVpZ2h0ID0gbWF4X3kgLSBtaW5feTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHttaW5feH0gJHttaW5feX0gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gICAgY3Vyc29yLmZpZ3VyZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5jb25zdCBTUVJUMyA9IE1hdGguc3FydCgzKTtcbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuY29sb3IpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBmaWd1cmUuc3Ryb2tlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFNxdWFyZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemUgLyAyO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggLSBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFRyaWFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFMgPSBmaWd1cmUuc2l6ZTtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4ICsgUyAqIGR4fSAke3kgKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSArIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSAtIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSkge1xuICAgIGxldCBzdHlsZSA9IGBmaWxsOiAke2ZpZ3VyZS5maWxsfTtgO1xuICAgIGlmIChmaWd1cmUuc3Ryb2tlID4gMCkge1xuICAgICAgICBzdHlsZSArPSBgc3Ryb2tlLXdpZHRoOiAke2ZpZ3VyZS5zdHJva2V9O2BcbiAgICAgICAgc3R5bGUgKz0gYHN0cm9rZTogJHtmaWd1cmUuY29sb3J9YDtcbiAgICB9XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG59XG4iLCJpbXBvcnQgeyBOb2RlLCBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgTXVsdGlwbGVyLCBBbmdsZSwgQXJndW1lbnQsIER5bmFtaWNBcmd1bWVudCB9IGZyb20gXCIuL2FzdC92YWx1ZXNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiLi9hc3QvY29sb3JzXCI7XG5pbXBvcnQgKiBhcyBzdHJva2VzIGZyb20gXCIuL2FzdC9zdHJva2VzXCI7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSBcIi4vYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcbmV4cG9ydCB0eXBlIFZhbHVlU2l6ZSA9IFwiK1wiIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIGlzQWN0aW9uOiBib29sZWFuO1xuICAgIGlzRHluYW1pYzogYm9vbGVhbjtcbiAgICBmYWN0b3J5OiBBY3Rpb25DYiB8IFZhbHVlQ2I7XG4gICAgdmFsdWVTaXplOiBWYWx1ZVNpemU7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlzQWN0aW9uLCBpc0R5bmFtaWMsIGZhY3RvcnksIHZhbHVlU2l6ZSB9KSB7XG4gICAgICAgIHRoaXMuaXNBY3Rpb24gPSBpc0FjdGlvbjtcbiAgICAgICAgdGhpcy5pc0R5bmFtaWMgPSBpc0R5bmFtaWM7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMudmFsdWVTaXplID0gdmFsdWVTaXplO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoZmFjdG9yeTogVmFsdWVDYiwgaXNEeW5hbWljID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IGZhbHNlLCB2YWx1ZVNpemU6IDAsIGlzRHluYW1pYywgZmFjdG9yeSB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHZhbHVlU2l6ZTogVmFsdWVTaXplLCBmYWN0b3J5OiBBY3Rpb25DYikge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogdHJ1ZSwgdmFsdWVTaXplLCBpc0R5bmFtaWM6IHRydWUsIGZhY3RvcnkgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlbnMgPSB7XG4gICAgLy8gKioqIFZhbHVlcyAqKipcbiAgICAvLyBDb3VudHNcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIC8vQU5HTEVfMzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzYwKSksXG4gICAgQU5HTEVfMjcwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMjcwKSksXG4gICAgQU5HTEVfMTgwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTgwKSksXG4gICAgQU5HTEVfOTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg5MCkpLFxuICAgIEFOR0xFXzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNjApKSxcbiAgICBBTkdMRV80NTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDQ1KSksXG4gICAgQU5HTEVfMzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzMCkpLFxuICAgIEFOR0xFXzE1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTUpKSxcbiAgICAvLyBDb2xvcnNcbiAgICBDT0xPUl9NQVg6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWF4Q29sb3IoKSksXG4gICAgQ09MT1JfTUlOOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1pbkNvbG9yKCkpLFxuICAgIENPTE9SX1NISUZUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAyKSksXG4gICAgQ09MT1JfU0hJRlRfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDQpKSxcbiAgICBDT0xPUl9TSElGVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNSkpLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMTApKSxcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwic29saWRcIikpLFxuICAgIFNUUk9LRV9EQVNIRUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZGFzaGVkXCIpKSxcbiAgICBTVFJPS0VfRE9UVEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRvdHRlZFwiKSksXG4gICAgU1RST0tFX1RISUNLX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoKzEpKSxcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygtMSkpLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBPUF9NVUxUOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLk11bHRPcCgpKSxcbiAgICBPUF9BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuQWRkT3AoKSksXG4gICAgT1BfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLlN1Yk9wKCkpLFxuICAgIC8vIEFyZ3VtZW50c1xuICAgIEFSR1VNRU5UOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQXJndW1lbnQoKSksXG4gICAgQ0FMTF9ESUFNT05EOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiRElBTU9ORFwiKSwgdHJ1ZSksXG4gICAgQ0FMTF9JTlZfVFJJQU5HTEU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJJTlZfVFJJQU5HTEVcIiksIHRydWUpLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIENBTExfRjogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiR1wiLCB2KSksXG4gICAgQ0FMTF9IOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkhcIiwgdikpLFxuICAgIC8vIFBhaW50ZXJzXG4gICAgRFJBV19MSU5FOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0xpbmUodikpLFxuICAgIERSQVdfQ0lSQ0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0NpcmNsZSh2KSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3U3F1YXJlKHYpKSxcbiAgICBEUkFXX1RSSUFOR0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd1RyaWFuZ2xlKHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDQsIHYpKSxcbiAgICAvLyBDdXJzb3IgT3BlcmF0b3JzXG4gICAgRk9SV0FSRDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkZvcndhcmQodikpLFxuICAgIFJPVEFURV9MRUZUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlUmlnaHQodikpLFxuICAgIFJFVkVSU0U6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodikpLFxufTtcbiIsImV4cG9ydCBjb25zdCBERUZBVUxUX0lDT05fVVJMID0gYCR7cHJvY2Vzcy5lbnYuQVNTRVRfUEFUSH1pY29ucy9gO1xuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuaW1wb3J0IHsgQ29kZVZpZXcgfSBmcm9tIFwiLi4vdmlld3MvY29kZVwiO1xuaW1wb3J0IHsgRG9jQmFyVmlldyB9IGZyb20gXCIuLi92aWV3cy9kb2NCYXJcIjtcbmltcG9ydCB7IFRpdGxlVmlldyB9IGZyb20gXCIuLi92aWV3cy90aXRsZVwiO1xuaW1wb3J0IHsgQ29tbWVudFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvY29tbWVudFwiO1xuaW1wb3J0IHsgSW1hZ2VWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL2ltYWdlXCI7XG5pbXBvcnQgeyBTdGF2ZVZpZXcgfSBmcm9tIFwiLi4vdmlld3Mvc3RhdmVcIjtcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcIi4uLy4uL2V4ZWNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUdXRBbmltUGFyYW1zIHtcbiAgICBzdGF2ZXM6IHN0cmluZ1tdO1xuICAgIGl0ZXJhdGlvbnM6IG51bWJlcixcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHRva2Vuczogc3RyaW5nW10sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub2RlSWQ6IHN0cmluZyxcbn1cblxuXG5leHBvcnQgY2xhc3MgRG9jc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGltYWdlVmlldzogSW1hZ2VWaWV3O1xuICAgIHByaXZhdGUgY29kZVZpZXc6IENvZGVWaWV3O1xuICAgIHByaXZhdGUgZG9jQmFyVmlldzogRG9jQmFyVmlldztcbiAgICBwcml2YXRlIGNvbW1lbnRWaWV3OiBDb21tZW50VmlldztcbiAgICBwcml2YXRlIHRpdGxlVmlldzogVGl0bGVWaWV3O1xuXG4gICAgcHJpdmF0ZSBpdGVyYXRpb25zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogVHV0QW5pbVBhcmFtcywgaWNvblVybDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtcy5ub2RlSWQpKTtcbiAgICAgICAgdGhpcy5pbml0UmVuZGVyKHBhcmFtcyk7XG5cbiAgICAgICAgdGhpcy5pdGVyYXRpb25zID0gcGFyYW1zLml0ZXJhdGlvbnM7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG5cbiAgICAgICAgdGhpcy5pbWFnZVZpZXcgPSBuZXcgSW1hZ2VWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWltYWdlXCIpKTtcbiAgICAgICAgdGhpcy50aXRsZVZpZXcgPSBuZXcgVGl0bGVWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LXRpdGxlXCIpLCBwYXJhbXMudGl0bGUpO1xuICAgICAgICB0aGlzLmNvbW1lbnRWaWV3ID0gbmV3IENvbW1lbnRWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWNvbW1lbnRcIikpO1xuICAgICAgICB0aGlzLmRvY0JhclZpZXcgPSBuZXcgRG9jQmFyVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1iYXJcIiksXG4gICAgICAgICAgICBuZXh0OiB0aGlzLm5leHQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHByZXY6IHRoaXMucHJldi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2RlVmlldyA9IG5ldyBDb2RlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1zdGF2ZXNcIiksXG4gICAgICAgICAgICBpc0RyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4geyB0aGlzLnNjcmFwZUFuZFJ1bigpOyB9LFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFJlbmRlcihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1hbmltYXRpb25cIik7XG4gICAgICAgIGlmIChwYXJhbXMudGl0bGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgdGl0bGVOb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC10aXRsZVwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbWFnZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWltYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGltYWdlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc3RhdmVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIHN0YXZlc05vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXN0YXZlc1wiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzdGF2ZXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21tZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtY29tbWVudFwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjb21tZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYmFyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBiYXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1iYXJcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHN0YXZlQmFnOiBTdGF2ZVtdID0gcGFyYW1zLnN0YXZlcy5tYXAoc3RhdmUgPT4ge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeCA9IFwiXCJdID0gc3RhdmUuc3BsaXQoXCI6OlwiKTtcbiAgICAgICAgICAgIHJldHVybiB7bmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29kZVZpZXcucmVuZGVyKHN0YXZlQmFnKTtcbiAgICAgICAgdGhpcy5kb2NCYXJWaWV3LnJlbmRlcih0aGlzLnBvc2l0aW9uLCB0aGlzLnRva2Vucy5sZW5ndGgsIHRoaXMuaXRlcmF0aW9ucyk7XG4gICAgICAgIHRoaXMudGl0bGVWaWV3LnJlbmRlcigpO1xuICAgICAgICB0aGlzLmNvbW1lbnRWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDb21tZW50KCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgIHRoaXMuZG9jQmFyVmlldy51cGRhdGUodGhpcy5wb3NpdGlvbiwgdGhpcy50b2tlbnMubGVuZ3RoLCB0aGlzLml0ZXJhdGlvbnMpO1xuICAgIH1cblxuICAgIGl0ZXJhdGVUb1Bvc2l0aW9uKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFyYW1zLnN0YXJ0OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgIHRoaXMubmV4dEV4ZWN1dGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID49IHRoaXMudG9rZW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICAgIHRoaXMubmV4dEV4ZWN1dGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBwcmV2KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uIC09IDE7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgc2NyYXBlQW5kUnVuKCkge1xuICAgICAgICBjb25zdCBjdXJzb3JDZmcgPSB7fTtcbiAgICAgICAgY29uc3QgYXJndW1lbnQgPSAxLjA7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVWaWV3LnNjcmFwZUNvZGUoKTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gZXhlYyhhcmd1bWVudCwgdGhpcy5pdGVyYXRpb25zLCBjb2RlLCBjdXJzb3JDZmcpO1xuICAgICAgICB0aGlzLmltYWdlVmlldy5yZW5kZXIoY3Vyc29yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3N0YXZlLCB0b2tlbl0gPSBjb21tYW5kLnNwbGl0KFwiQFwiLCAyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb2tlbk9uQmFjayhzdGF2ZSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaChjb21tYW5kLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9JTkNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zICs9IDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0RFQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgLT0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByZXZFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xpbmVdID0gY29tbWFuZC5zcGxpdChcIkBcIiwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMYXN0VG9rZW4obGluZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoKGNvbW1hbmQuc3Vic3RyaW5nKDEpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0lOQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgLT0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfREVDXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJOT1BcIjogYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcihgJHtjb21tYW5kfSBub3QgZm91bmRgKTsgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29tbWFuZHMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBjb21tYW5kV2l0aENvbW1lbnQgPSB0aGlzLnRva2Vuc1t0aGlzLnBvc2l0aW9uXTtcbiAgICAgICAgY29uc3QgW3Jhd0NvbW1hbmRzXSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMSk7XG4gICAgICAgIHJldHVybiByYXdDb21tYW5kcy5zcGxpdChcIixcIikubWFwKHJhd0NvbW1hbmQgPT4gcmF3Q29tbWFuZC50cmltKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFssIHJhd0NvbW1lbnRdID0gY29tbWFuZFdpdGhDb21tZW50LnNwbGl0KFwiI1wiLCAyKTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHJhd0NvbW1lbnQgPyByYXdDb21tZW50LnRyaW0oKSA6IFwiXCI7XG4gICAgICAgIHRoaXMuY29tbWVudFZpZXcucmVuZGVyKGNvbW1lbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuT25CYWNrKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGFzdFRva2VuKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWUpO1xuICAgICAgICBzdGF2ZS5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZFN0YXZlKGZ1bGxTdGF2ZU5hbWU6IHN0cmluZyk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxTdGF2ZU5hbWUoZnVsbFN0YXZlTmFtZSk7XG4gICAgICAgIGNvbnN0IHN0YXZlID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgaWYgKHN0YXZlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IGBzdGF2ZSBub3QgZm91bmQ6ICR7ZnVsbFN0YXZlTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF2ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwbGl0RnVsbFN0YXZlTmFtZShmdWxsU3RhdmVOYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBmdWxsU3RhdmVOYW1lLnNwbGl0KFwiOjpcIiwgMik7XG4gICAgICAgIHJldHVybiBbbmFtZSwgc3VmZml4IHx8IFwiXCJdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWQ0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBUb2tlbkNhdGVnb3J5LCBUb2tlbkluZm8gfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9UT0tFTlM6IFRva2VuQ2F0ZWdvcnlbXSA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnVuY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0FSR1VNRU5UJywgbGFiZWw6ICdBcmd1bWVudCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0RJQU1PTkQnLCBsYWJlbDogJ0RpYW1vbmQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9GJywgbGFiZWw6ICdDYWxsIEYgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NBTExfRycsIGxhYmVsOiAnQ2FsbCBHIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0gnLCBsYWJlbDogJ0NhbGwgSCBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdQYWludGVycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdEUkFXX0xJTkUnLCBsYWJlbDogJ0RyYXcgTGluZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19DSVJDTEUnLCBsYWJlbDogJ0RyYXcgQ2lyY2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX1NRVUFSRScsIGxhYmVsOiAnRHJhdyBTcXVhcmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfVFJJQU5HTEUnLCBsYWJlbDogJ0RyYXcgVHJpYW5nbGUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzNfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAzLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8yJywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvMiAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMS80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzNfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAzLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzInLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMS8yIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV80JywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ3Vyc29yJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0ZPUldBUkQnLCBsYWJlbDogJ01vdmUgZm9yd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUk9UQVRFX0xFRlQnLCBsYWJlbDogJ1JvdGF0ZSBsZWZ0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdST1RBVEVfUklHSFQnLCBsYWJlbDogJ1JvdGF0ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUkVWRVJTRScsIGxhYmVsOiAnUmV2ZXJzZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUkVQTEFZJywgbGFiZWw6ICdSZXBsYXknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBWQUxVRV9UT0tFTlM6IFRva2VuQ2F0ZWdvcnlbXSA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ291bnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfMScsIGxhYmVsOiAnT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzInLCBsYWJlbDogJ1R3bycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT1VOVF8zJywgbGFiZWw6ICdUaHJlZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT1VOVF81JywgbGFiZWw6ICdGaXZlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UX01JTlVTJywgbGFiZWw6ICdNaW51cyBPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdGcmFjdGlvbnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV8yJywgbGFiZWw6ICdIYWxmJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzFfMycsIGxhYmVsOiAnT25lIFRoaXJkJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzJfMycsIGxhYmVsOiAnVHdvIHRoaXJkcycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzQnLCBsYWJlbDogJ09uZSBRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV81JywgbGFiZWw6ICdPbmUgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBbmdsZXMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMjcwJywgbGFiZWw6ICcyNzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8xODAnLCBsYWJlbDogJzE4MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzkwJywgbGFiZWw6ICc5MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzYwJywgbGFiZWw6ICc2MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzQ1JywgbGFiZWw6ICc0NcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzMwJywgbGFiZWw6ICczMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzE1JywgbGFiZWw6ICcxNcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnTW9kaWZpY2F0b3JzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ09QX01VTFQnLCBsYWJlbDogJ011bHRpcGxlIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ09QX0FERCcsIGxhYmVsOiAnQWRkaXRpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfU1VCJywgbGFiZWw6ICdTdWJ0cmFjdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9NQVgnLCBsYWJlbDogJ1NlY29uZCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9NSU4nLCBsYWJlbDogJ0ZpcnN0IENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfMicsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNScsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfMTAnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfQUREJywgbGFiZWw6ICdUaGljayBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnU1RST0tFX1RISUNLX1NVQicsIGxhYmVsOiAnVGhpbiBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE5BTUVfVE9fVE9LRU4gPSBuZXcgTWFwPHN0cmluZywgVG9rZW5JbmZvPihcbiAgICBBQ1RJT05fVE9LRU5TXG4gICAgICAgIC5jb25jYXQoVkFMVUVfVE9LRU5TKVxuICAgICAgICAubWFwKGMgPT4gYy50b2tlbnMubWFwKHQgPT4gW3QubmFtZSwgdF0pKVxuICAgICAgICAuZmxhdCgpIGFzIFtzdHJpbmcsIFRva2VuSW5mb11bXVxuKTtcbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZSc7XG5cbmltcG9ydCB7IFN0YXZlIH0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICcuLi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgQ29kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIHN0YXZlVmlld3M6IFN0YXZlVmlld1tdO1xuICAgIHByaXZhdGUgaXNEcmFnZ2FibGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBvbkNoYW5nZSwgaXNEcmFnZ2FibGUgPSBmYWxzZSwgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBvbkNoYW5nZTogKCkgPT4gdm9pZCxcbiAgICAgICAgaXNEcmFnZ2FibGU/OiBib29sZWFuLFxuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cyA9IFtdO1xuICAgICAgICB0aGlzLmlzRHJhZ2dhYmxlID0gaXNEcmFnZ2FibGU7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB9XG5cbiAgICByZW5kZXIoc3RhdmVzOiBTdGF2ZVtdKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzID0gc3RhdmVzLm1hcCh0aGlzLmNyZWF0ZVN0YXZlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGZpbmRTdGF2ZShuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogU3RhdmVWaWV3IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdmVWaWV3cy5maW5kKHZpZXcgPT4gdmlldy5jaGVja05hbWUobmFtZSwgc3VmZml4KSk7XG4gICAgfVxuXG4gICAgYWRkU3RhdmUocGFyYW1zOiB7IG5hbWU6IHN0cmluZzsgc3VmZml4OiBzdHJpbmc7IHRva2Vuczogc3RyaW5nW10gfSkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5jcmVhdGVTdGF2ZSh7XG4gICAgICAgICAgICBuYW1lOiBwYXJhbXMubmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogcGFyYW1zLnN1ZmZpeCxcbiAgICAgICAgICAgIHRva2VuczogcGFyYW1zLnRva2VucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cy5wdXNoKHZpZXcpO1xuICAgIH1cblxuICAgIHNjcmFwZUNvZGUoKTogU3RhdmVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXZlVmlld3MuZmlsdGVyKHZpZXcgPT4gdmlldy5jb3VsZEJlU2NyYXBlZCgpKS5tYXAodmlldyA9PiB2aWV3LnNjcmFwZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3RhdmUoeyBuYW1lLCBzdWZmaXgsIHRva2VucyB9KTogU3RhdmVWaWV3IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgU3RhdmVWaWV3KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VmZml4OiBzdWZmaXggfHwgXCJcIixcbiAgICAgICAgICAgIGljb25Vcmw6IHRoaXMuaWNvblVybCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgZmluZFN0YXZlRGVsZWdhdG9yOiB0aGlzLmZpbmRTdGF2ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgaXNEcmFnZ2FibGU6IHRoaXMuaXNEcmFnZ2FibGUsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudFZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWNvbW1lbnRcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKGNvbW1lbnQ6IHN0cmluZyA9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmlubmVyVGV4dCA9IGNvbW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIERvY0JhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIG5leHQ6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBwcmV2OiAoKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIG5leHQsIHByZXZ9OiB7bm9kZTogSFRNTEVsZW1lbnQsIG5leHQ6ICgpID0+IHZvaWQsIHByZXY6ICgpID0+IHZvaWR9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWJhclwiKTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDtcbiAgICAgICAgdGhpcy5wcmV2ID0gcHJldjtcbiAgICB9XG5cbiAgICByZW5kZXIocG9zaXRpb246IG51bWJlciwgdG9rZW5TaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlcikge1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIsKrIFBSRVZcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwicHJldlwiO1xuICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wcmV2KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIk5FWFQgwrtcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5uZXh0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVyVGV4dCA9IFwiSXRlcmF0aW9uczpcIjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGl0Tm9kZS50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIGl0Tm9kZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBpdE5vZGUubmFtZSA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGl0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZShwb3NpdGlvbiwgdG9rZW5TaXplLCBpdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocG9zaXRpb246IG51bWJlciwgdG9rZW5TaXplOiBudW1iZXIsIGl0ZXJhdGlvbnM6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIm5leHRcIikuZGlzYWJsZWQgPSBwb3NpdGlvbiA+PSB0b2tlblNpemUgLSAxO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcInByZXZcIikuZGlzYWJsZWQgPSBwb3NpdGlvbiA8PSAwO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIml0ZXJhdGlvbnNcIikudmFsdWUgPSBpdGVyYXRpb25zLnRvRml4ZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRJbnB1dChuYW1lOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IGNyZWF0ZVN2ZyB9IGZyb20gXCIuLi8uLi9zdmdcIjtcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyBleHRlbmRzIFZpZXcge1xuXG4gICAgcmVuZGVyKGN1cnNvcjogQ3Vyc29yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvciA/IGJhY2tncm91bmRDb2xvciA6IFwibm9uZVwiO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3IpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuaW1wb3J0IHsgVG9rZW5zU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZVRva2VuJztcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJy4uL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF2ZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRva2VuVmlldzogVG9rZW5zU3RhdmVWaWV3XG4gICAgcHJpdmF0ZSB0b2tlbnNOb2RlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICBmaW5kU3RhdmVEZWxlZ2F0b3IsXG4gICAgICAgIGlzRHJhZ2dhYmxlID0gZmFsc2UsXG4gICAgICAgIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMLFxuICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICAgICAgdGhpcy50b2tlbnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy50b2tlblZpZXcgPSBuZXcgVG9rZW5zU3RhdmVWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IHRoaXMudG9rZW5zTm9kZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgICBvbkRyb3A6IG9uQ2hhbmdlLFxuICAgICAgICAgICAgZmluZFN0YXZlRGVsZWdhdG9yOiBmaW5kU3RhdmVEZWxlZ2F0b3IsXG4gICAgICAgICAgICBpc0RyYWdnYWJsZSxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzdGF2ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hbWUodGhpcy5uYW1lLCB0aGlzLnN1ZmZpeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy50b2tlbnNOb2RlKTtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2hlY2tOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSAmJiB0aGlzLnN1ZmZpeCA9PT0gc3VmZml4O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgfVxuXG4gICAgc2hvd09ySGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbkFmdGVyKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucHVzaFRva2VuQWZ0ZXIodG9rZW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuKGluZGV4KTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5PbkJhY2sodG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuT25CYWNrKCkge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIGNvdWxkQmVTY3JhcGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSB0aGlzLm5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKTtcbiAgICAgICAgcmV0dXJuICFpc0hpZGU7XG4gICAgfVxuXG4gICAgc2NyYXBlKCk6IFN0YXZlIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlblZpZXcuc2NyYXBlVG9rZW5zKCk7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBzdWZmaXh9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX06OiR7c3VmZml4fWAgOiBuYW1lO1xuICAgICAgICByZXR1cm4ge25hbWU6IHJlYWxuYW1lLCB0b2tlbnN9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4Pzogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgY29uc3QgcmVhbG5hbWUgPSBzdWZmaXggPyBgJHtuYW1lfV8ke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS9DQUxMXyR7cmVhbG5hbWV9LnN2ZylgO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdGF2ZVZpZXcgfSBmcm9tICcuL3N0YXZlJztcbmltcG9ydCB7IFRva2Vuc1ZpZXcgfSBmcm9tICcuL3Rva2VuJztcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJy4uL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNTdGF2ZVZpZXcgZXh0ZW5kcyBUb2tlbnNWaWV3IHtcbiAgICBwcml2YXRlIG9uRHJvcDogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIGZpbmRTdGF2ZURlbGVnYXRvcjogKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpID0+IChTdGF2ZVZpZXcgfCB1bmRlZmluZWQpO1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIG9uRHJvcCxcbiAgICAgICAgZmluZFN0YXZlRGVsZWdhdG9yLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgaXNEcmFnZ2FibGUgPSBmYWxzZSxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIGlzRHJhZ2dhYmxlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkRyb3AgPSBvbkRyb3A7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgICAgICB0aGlzLmZpbmRTdGF2ZURlbGVnYXRvciA9IGZpbmRTdGF2ZURlbGVnYXRvcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcIm91dGVyLXRva2Vuc1wiKTtcblxuICAgICAgICBjb25zdCBpbm5lck5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImlubmVyLXRva2Vuc1wiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpbm5lck5vZGUpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlblJlbW92ZVNwYW5Ob2RlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICBjb25zdCBpbm5lck5vZGUgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLmlubmVyLXRva2VucycpO1xuICAgICAgICBpbm5lck5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIGlubmVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLmZvckVhY2goKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHVzaFRva2VuTm9kZU9uQmFjayhpbm5lck5vZGUgYXMgSFRNTEVsZW1lbnQsIHRva2VuLCBpbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDAsIHRva2VuKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuT25CYWNrKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnBvcCgpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuTm9kZU9uQmFjayh0b2tlbnNOb2RlOiBIVE1MRWxlbWVudCwgdG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBhcHBlbmRTcGFuID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXggKyBzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwZW5kQ2hpbGQgPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbm9kZTogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKGNvbnRhaW5lciwgcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gdGhpcy5jcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbiwgaW5kZXgpO1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0b2tlbnNOb2RlLmxhc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy8gcHJvYmFibHkgaXQncyBhIHNwYW4sIGZpbmQgcHJldmlvdXMgbm9kZVxuICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0Tm9kZS5wcmV2aW91c1NpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxhc3ROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJhY3QtdG9rZW4tZ3JvdXBcIik7XG4gICAgICAgIGNvbnN0IGlzQWN0aW9uID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLmRhdGFzZXQ/LnR5cGUgPT09IFwiYWN0aW9uXCI7XG5cbiAgICAgICAgaWYgKGlzQWN0aW9uKHRva2VuTm9kZSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNHcm91cChsYXN0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQobGFzdE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU3Bhbih0b2tlbnNOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzQWN0aW9uKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZ3JvdXAgd2l0aCBhY3Rpb24gYW5kIHZhbHVlLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gdGhpcy5jcmVhdGVFbXB0eVRva2VuR3JvdXAoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZChsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlKTtcbiAgICAgICAgICAgIHRva2Vuc05vZGUuaW5zZXJ0QmVmb3JlKGdyb3VwTm9kZSwgbGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZ3JvdXBOb2RlLCBsYXN0Tm9kZSwgMCk7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVUb2tlbk5vZGUodG9rZW4pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaXNFZGl0YWJsZSA9IHRoaXMuaXNEcmFnZ2FibGUgPyAneWVzJyA6ICdubyc7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbXB0eVRva2VuR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLWdyb3VwXCJdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY3JhcGVUb2tlbnMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLXNwYW5cIl0sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICAgICAgICB0aGlzLnNldFRva2VuU3BhbkV2ZW50cyhub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuUmVtb3ZlU3Bhbk5vZGUoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtdG9rZW4tc3BhblwiLCBcInJlbW92ZVwiKTtcbiAgICAgICAgdGhpcy5zZXRUb2tlblNwYW5FdmVudHMobm9kZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRUb2tlblNwYW5FdmVudHMobm9kZTogRWxlbWVudCwgcmVtb3ZlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2RHJhZ092ZXIsIGZhbHNlKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZEcm9wLCBmYWxzZSk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZXZEcmFnRW50ZXIsIGZhbHNlKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldkRyYWdMZWF2ZSwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzO1xuXG4gICAgICAgIGZ1bmN0aW9uIGV2RHJhZ092ZXIoZSkge1xuICAgICAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBldkRyb3AoZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BzIHRoZSBicm93c2VyIGZyb20gcmVkaXJlY3RpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcblxuICAgICAgICAgICAgY29uc3Qgb2xkSWQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgb2xkVG9rZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2xkSWQpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgeyB0b2tlbiwgaXNFZGl0YWJsZSwgbmFtZSwgc3VmZml4IH0gPSBvbGRUb2tlbk5vZGUuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYgKCFyZW1vdmUpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnB1c2hUb2tlbkFmdGVyKHRva2VuLCB0aGlzLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvbGRJbmRleCA9IHBhcnNlSW50KG9sZFRva2VuTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gcmVtb3ZlIHx8ICh2aWV3Lm5hbWUgPT09IG5hbWUgJiYgdmlldy5zdWZmaXggPT09IHN1ZmZpeCAmJiBwYXJzZUludCh0aGlzLmRhdGFzZXQuaW5kZXgpKSA+IG9sZEluZGV4ID8gMCA6IDE7XG5cbiAgICAgICAgICAgIGlmIChpc0VkaXRhYmxlID09PSBcInllc1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdmUgPSB2aWV3LmZpbmRTdGF2ZURlbGVnYXRvcihuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgICAgIHN0YXZlLnJlbW92ZVRva2VuKG9sZEluZGV4ICsgc2hpZnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2aWV3Lm9uRHJvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFNwYW4obm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucygnZnJhY3QtdG9rZW4tc3BhbicpID8gbm9kZSA6IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBldkRyYWdFbnRlcihlKSB7XG4gICAgICAgICAgICBmaW5kU3Bhbih0aGlzKS5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBldkRyYWdMZWF2ZShlKSB7XG4gICAgICAgICAgICBmaW5kU3Bhbih0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBUaXRsZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWQ0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIi4uL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJy4uL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcmVhZG9ubHkgaWNvblVybDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGlzRHJhZ2dhYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGlzRHJhZ2dhYmxlLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTH06IHtcbiAgICAgICAgbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgICAgIGlzRHJhZ2dhYmxlOiBib29sZWFuLFxuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2FibGUgPSBpc0RyYWdnYWJsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZyYWN0LXRva2VuJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmlkID0gYHRva2VuLSR7dXVpZDQoKX1gO1xuICAgICAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnR5cGUgPSB0b2tlbkluZm8gPyB0b2tlbkluZm8udHlwZSA6IFwidW5rbm93blwiO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9LyR7dG9rZW59LnN2ZylgO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgICAgICAgICB0aGlzLnNldFRva2VuRXZlbnRzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW5FdmVudHMobm9kZTogRWxlbWVudCkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2RHJhZ1N0YXJ0LCBmYWxzZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZXZEcmFnU3RhcnQoZSkge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2lkJywgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlldyB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmFtczoge1xuICAgICAgICBuYW1lOiBLO1xuICAgICAgICBjbGFzc2VzPzogc3RyaW5nW107XG4gICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgfSk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy5uYW1lKTtcbiAgICAgICAgaWYgKHBhcmFtcy5jbGFzc2VzKSB7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoLi4ucGFyYW1zLmNsYXNzZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBwYXJhbXMudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgRG9jc0NvbnRyb2xsZXIsIFR1dEFuaW1QYXJhbXMgfSBmcm9tIFwiLi9jb250cm9sbGVycy9kb2NzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlL2RvY3Muc2Nzc1wiO1xuXG5jb25zdCBBTklNQVRJT05TX1BBUkFNUzogVHV0QW5pbVBhcmFtc1tdID0gW107XG5jb25zdCBDVVJSRU5UX0hSRUYgPSAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFuaW1hdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5wdXNoKHBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGdldEljb25zVXJscygpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRpcm5hbWVIcmVmID0gQ1VSUkVOVF9IUkVGLnN1YnN0cmluZygwLCBDVVJSRU5UX0hSRUYubGFzdEluZGV4T2YoJy8nKSArIDEpO1xuICAgIHJldHVybiBgJHtkaXJuYW1lSHJlZn0uLi9faW1hZ2VzYDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsKGljb25Vcmw6IHN0cmluZykge1xuICAgIEFOSU1BVElPTlNfUEFSQU1TLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBEb2NzQ29udHJvbGxlcihwYXJhbXMsIGljb25VcmwpO1xuICAgICAgICBjb250cm9sbGVyLnJlbmRlcihwYXJhbXMpO1xuICAgICAgICBjb250cm9sbGVyLml0ZXJhdGVUb1Bvc2l0aW9uKHBhcmFtcyk7XG4gICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGljb25VcmwgPSBnZXRJY29uc1VybHMoKTtcbiAgICByZW5kZXJBbGwoaWNvblVybCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==