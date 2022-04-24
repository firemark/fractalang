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
___CSS_LOADER_EXPORT___.push([module.id, ".tokens {\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.tokens.hide .token {\n  display: none;\n}\n.tokens > .label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n\n.token-span {\n  padding: 5px;\n  height: 50px;\n}\n.token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n.token-span.remove {\n  background-color: #D88;\n  border: 2px #922 dotted;\n  border-radius: 5px;\n  width: 50px;\n}\n.token-span.remove::before {\n  font-size: 24pt;\n  content: \"X\";\n}\n\n.fract-functions-list {\n  display: flex;\n  float: right;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .outer-tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n}\n.fract-staves > li > .outer-tokens > .inner-tokens {\n  padding: 0 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .outer-tokens > .inner-tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li > .outer-tokens > .remove {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-staves {\n  overflow: visible;\n}\n.fract-staves > li {\n  height: 60px;\n}\n.fract-staves > li .outer-tokens {\n  height: 100%;\n}\n.fract-staves > li .inner-tokens {\n  height: 100%;\n}\n.fract-staves .token {\n  width: 30px;\n  height: 30px;\n  padding: 2px;\n  margin-right: 2px;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACCJ;ADCI;EACI,aAAA;ACCR;ADEI;EACI,eAAA;EACA,iBAAA;EACA,eAAA;ACAR;;ADIA;EACI,YAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;ACDJ;ADGI;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;ACDR;;ADKA;EACI,YAAA;EACA,YAAA;ACFJ;ADII;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;ACFR;ADIQ;EACI,eAAA;EACA,YAAA;ACFZ;ADMI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;ACJR;ADMQ;EACI,eAAA;EACA,YAAA;ACJZ;;AC5DA;EACI,aAAA;EACA,YAAA;AD+DJ;AC7DI;EACI,eAAA;AD+DR;AC5DI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EACA,eAAA;AD8DR;AC5DQ;EACI,sBAAA;AD8DZ;AC1DI;EACI,kBAAA;AD4DR;AC1DQ;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AD4DZ;ACxDY;EACI,cAAA;AD0DhB;;ACpDA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,kBAAA;ADuDJ;ACrDI;EACI,cAAA;EACA,aAAA;ADuDR;ACrDQ;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;ADuDZ;ACpDQ;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;ADsDZ;ACpDY;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;ADsDhB;ACrDgB;EAAM,cAAA;ADwDtB;ACrDY;EAAW,cAAA;ADwDvB;ACrDQ;EACI,aAAA;ADuDZ;;AA3IA;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AA8IJ;AA5II;EACI,cAAA;AA8IR;;AA1IA;EACI,WAAA;EACA,kBAAA;EACA,8BAAA;AA6IJ;;AA1IA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;AA6IJ;;AAzII;EACI,WAAA;EACA,kBAAA;AA4IR;;AAxIA;EACI,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;AA2IJ;;AAxIA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AA2IJ;AA1II;EACI,4BAAA;EACA,aAAA;AA4IR;;AAxIA;EACI,iBAAA;AA2IJ;AA1II;EACI,YAAA;AA4IR;AA3IQ;EAAgB,YAAA;AA8IxB;AA7IQ;EAAgB,YAAA;AAgJxB;AA9II;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,iBAAA;AAgJR","sourcesContent":[".tokens {\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide .token {\n        display: none;\n    }\n\n    > .label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n}\n\n.token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n}\n\n.token-span {\n    padding: 5px;\n    height: 50px;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n\n    &.remove {\n        background-color: #D88;\n        border: 2px #922 dotted;\n        border-radius: 5px;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"X\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-staves {\n    overflow: visible;\n    > li {\n        height: 60px;\n        .outer-tokens { height: 100%; }\n        .inner-tokens { height: 100%; }\n    }\n    .token {\n        width: 30px;\n        height: 30px;\n        padding: 2px;\n        margin-right: 2px;\n    }\n}\n",".fract-functions-list {\n    display: flex;\n    float: right;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .outer-tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n\n            > .inner-tokens {\n                padding: 0 5px;\n                flex: 1 1 auto;\n                display: flex;\n                align-items: center;\n                overflow-x: scroll;\n                overflow-y: hidden;\n                > * { flex: 0 0 auto; }\n            }\n\n            > .remove {flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "Function": () => (/* binding */ Function),
/* harmony export */   "Call": () => (/* binding */ Call),
/* harmony export */   "DrawLine": () => (/* binding */ DrawLine),
/* harmony export */   "DrawCircle": () => (/* binding */ DrawCircle),
/* harmony export */   "DrawSquare": () => (/* binding */ DrawSquare),
/* harmony export */   "DrawTriangle": () => (/* binding */ DrawTriangle),
/* harmony export */   "DrawArcLine": () => (/* binding */ DrawArcLine),
/* harmony export */   "Forward": () => (/* binding */ Forward),
/* harmony export */   "RotateLeft": () => (/* binding */ RotateLeft),
/* harmony export */   "RotateRight": () => (/* binding */ RotateRight),
/* harmony export */   "Reverse": () => (/* binding */ Reverse),
/* harmony export */   "Replay": () => (/* binding */ Replay)
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
            this.execReverse(index, reverse ? Math.round(reverse) : 0, context);
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
            actions.at(index).execReverse(context);
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
/* harmony export */   "ValueNode": () => (/* binding */ ValueNode),
/* harmony export */   "ActionNode": () => (/* binding */ ActionNode),
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
    ActionNode.prototype.execReverse = function (context) { };
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
/* harmony export */   "MultOp": () => (/* binding */ MultOp),
/* harmony export */   "AddOp": () => (/* binding */ AddOp),
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
/* harmony export */   "Multipler": () => (/* binding */ Multipler),
/* harmony export */   "Argument": () => (/* binding */ Argument),
/* harmony export */   "DynamicArgument": () => (/* binding */ DynamicArgument)
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
/* harmony export */   "ContextCfg": () => (/* binding */ ContextCfg),
/* harmony export */   "Context": () => (/* binding */ Context)
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
        if (iteration == this.cfg.maxIteration - 1) {
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
        this._forward(distance);
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
        this._forward(size);
        this.rotate(ratio / 2);
        this.computeBox(point, Math.abs(arcRadius));
    };
    Cursor.prototype.drawCircle = function (radius, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Circle([x, y], radius, ops));
    };
    Cursor.prototype.drawSquare = function (size, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var _b = this.orientation, dx = _b[0], dy = _b[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Square([x, y], [dx, dy], size, ops));
    };
    Cursor.prototype.drawTriangle = function (size, color) {
        var _a = this.position, x = _a[0], y = _a[1];
        var _b = this.orientation, dx = _b[0], dy = _b[1];
        var ops = { fill: this.calcColor(color) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Triangle([x, y], [dx, dy], size, ops));
    };
    Cursor.prototype.forward = function (distance) {
        this._forward(distance);
        var _a = this.position, x = _a[0], y = _a[1];
        var ops = { fill: this.calcColor(1.0) };
        this.figures.push(new _figures__WEBPACK_IMPORTED_MODULE_0__.Circle([x, y], 2.0, ops));
        this.computeBox(this.position);
    };
    Cursor.prototype._forward = function (distance) {
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
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Arc": () => (/* binding */ Arc),
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
/* harmony export */   "parseRawTokens": () => (/* binding */ parseRawTokens),
/* harmony export */   "parseLine": () => (/* binding */ parseLine)
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

/***/ "./src/web/code.ts":
/*!*************************!*\
  !*** ./src/web/code.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCode": () => (/* binding */ initCode),
/* harmony export */   "renderStave": () => (/* binding */ renderStave)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/web/tokens.ts");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./src/web/run.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./src/web/consts.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parser */ "./src/parser.ts");




var INPUTS = ["iterations", "first-color", "second-color", "stroke-size"];
function initCode(code) {
    var cb = function () {
        (0,_run__WEBPACK_IMPORTED_MODULE_1__.scrapeAndRun)();
        return false;
    };
    renderCode(code);
    INPUTS.forEach(function (inputId) {
        var node = document.getElementById(inputId);
        node.addEventListener("change", cb, false);
    });
    renderListOfFunctions();
}
function renderListOfFunctions() {
    var functionsNode = document.getElementById("functions");
    _parser__WEBPACK_IMPORTED_MODULE_3__.PROCEDURES.concat(_parser__WEBPACK_IMPORTED_MODULE_3__.DYNAMIC_ARGS).forEach(function (name) {
        functionsNode.appendChild(renderBarOfFunctions(name));
    });
}
function renderBarOfFunctions(name) {
    var node = document.createElement("li");
    node.classList.add("dropdown");
    var baseFuncNode = renderAddFunction("span", name);
    var barNode = document.createElement("ul");
    barNode.classList.add("dropdown-content");
    _parser__WEBPACK_IMPORTED_MODULE_3__.SUFFIXES.forEach(function (suffix) {
        barNode.appendChild(renderAddFunction("li", name, suffix));
    });
    node.appendChild(baseFuncNode);
    node.appendChild(barNode);
    return node;
}
function renderAddFunction(type, name, suffix) {
    if (suffix === void 0) { suffix = ""; }
    var node = document.createElement(type);
    var realName = suffix ? "SUFFIX_".concat(suffix) : "CALL_".concat(name);
    node.style.backgroundImage = "url(".concat(_consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL, "/").concat(realName, ".svg)");
    node.classList.add("token-btn");
    node.dataset.name = name;
    node.dataset.suffix = suffix;
    node.addEventListener("click", function () {
        var _a = this.dataset, name = _a.name, suffix = _a.suffix;
        showOrHideOrAddFunction(name, suffix);
        (0,_run__WEBPACK_IMPORTED_MODULE_1__.scrapeAndRun)();
        return false;
    }, false);
    return node;
}
function renderCode(code) {
    var container = document.getElementById("code");
    container.innerHTML = "";
    code.forEach(function (staveName) {
        var _a = staveName.split("::", 2), name = _a[0], suffix = _a[1];
        container.appendChild(renderStave({ name: name, suffix: suffix }));
    });
}
function renderStave(_a) {
    var name = _a.name, _b = _a.suffix, suffix = _b === void 0 ? "" : _b, _c = _a.tokens, tokens = _c === void 0 ? [] : _c, _d = _a.isEditable, isEditable = _d === void 0 ? true : _d, _e = _a.iconUrl, iconUrl = _e === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _e;
    var node = document.createElement("li");
    node.classList.add("function");
    node.dataset.name = name;
    node.dataset.suffix = suffix;
    node.appendChild(renderName(name, suffix, { iconUrl: iconUrl }));
    node.appendChild(renderTokens(tokens, { isEditable: isEditable, iconUrl: iconUrl }));
    return node;
}
function showOrHideOrAddFunction(name, suffix) {
    if (suffix === void 0) { suffix = ""; }
    var codeNode = document.getElementById("code");
    var funcNode = codeNode.querySelector(".function[data-name=\"".concat(name, "\"][data-suffix=\"").concat(suffix, "\"]"));
    if (!funcNode) {
        codeNode.appendChild(renderStave({ name: name, suffix: suffix, tokens: [] }));
    }
    else {
        funcNode.classList.toggle("hide");
    }
}
function renderName(name, suffix, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.iconUrl, iconUrl = _c === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _c;
    var node = document.createElement("span");
    node.classList.add("name");
    var realname = suffix ? "".concat(name, "_").concat(suffix) : name;
    node.style.backgroundImage = "url(".concat(iconUrl, "/CALL_").concat(realname, ".svg)");
    return node;
}
function renderTokens(tokens, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isEditable, isEditable = _c === void 0 ? true : _c, _d = _b.iconUrl, iconUrl = _d === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL : _d;
    var tokensNode = document.createElement("div");
    tokensNode.classList.add("outer-tokens");
    var node = document.createElement("div");
    node.classList.add("inner-tokens");
    if (isEditable) {
        node.appendChild(renderTokenSpan());
    }
    tokens.forEach(function (token) {
        node.appendChild((0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token, { isTemplate: isEditable }));
        if (isEditable) {
            node.appendChild(renderTokenSpan());
        }
    });
    tokensNode.appendChild(node);
    if (isEditable) {
        tokensNode.appendChild(renderTokenRemoveSpan());
    }
    return tokensNode;
}
function renderTokenSpan() {
    var node = document.createElement("span");
    node.classList.add("token-span");
    setTokenSpanEvents(node);
    return node;
}
function renderTokenRemoveSpan() {
    var node = document.createElement("span");
    node.classList.add("token-span", "remove");
    setTokenSpanEvents(node, true);
    return node;
}
function setTokenSpanEvents(node, remove) {
    if (remove === void 0) { remove = false; }
    node.addEventListener('dragover', evDragOver, false);
    node.addEventListener('drop', evDrop, false);
    node.addEventListener('dragenter', evDragEnter, false);
    node.addEventListener('dragleave', evDragLeave, false);
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
        var token = e.dataTransfer.getData('token');
        var oldId = e.dataTransfer.getData('id');
        this.classList.remove('over');
        if (!remove) {
            this.insertAdjacentElement("afterend", renderTokenSpan());
            this.insertAdjacentElement("afterend", (0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token));
        }
        // todo
        var oldTokenNode = document.getElementById(oldId);
        if (oldTokenNode.dataset.isTemplate === "no") {
            oldTokenNode.nextSibling.remove();
            oldTokenNode.remove();
        }
        (0,_run__WEBPACK_IMPORTED_MODULE_1__.scrapeAndRun)();
        return false;
    }
    function findSpan(node) {
        return node.classList.contains('token-span') ? node : node.nextSibling;
    }
    function evDragEnter(e) {
        findSpan(this).classList.add('over');
    }
    function evDragLeave(e) {
        findSpan(this).classList.remove('over');
    }
}


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

/***/ "./src/web/run.ts":
/*!************************!*\
  !*** ./src/web/run.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrapeAndRun": () => (/* binding */ scrapeAndRun),
/* harmony export */   "run": () => (/* binding */ run),
/* harmony export */   "scrapeCode": () => (/* binding */ scrapeCode)
/* harmony export */ });
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exec */ "./src/exec.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg */ "./src/svg.ts");


function scrapeAndRun() {
    var cursorCfg = {
        firstColor: scrapeInput("first-color"),
        secondColor: scrapeInput("second-color"),
        strokeSize: scrapeInputAsFloat("stroke-size"),
    };
    var imageNode = document.getElementById("image");
    var code = scrapeCode(document.getElementById("code"));
    run(imageNode, code, scrapeInputAsInt("iterations"), cursorCfg);
}
function run(imageNode, code, maxIteration, cursorCfg) {
    if (maxIteration === void 0) { maxIteration = 3; }
    if (cursorCfg === void 0) { cursorCfg = {}; }
    imageNode.innerHTML = "";
    var argument = 1.0;
    var cursor = (0,_exec__WEBPACK_IMPORTED_MODULE_0__.exec)(argument, maxIteration, code, cursorCfg);
    cursor.addMargin(20);
    var serializer = new XMLSerializer();
    var svg = (0,_svg__WEBPACK_IMPORTED_MODULE_1__.createSvg)(document, cursor);
    imageNode.appendChild(svg);
}
function scrapeCode(codeNode) {
    var code = [];
    codeNode.querySelectorAll(".function").forEach(function (funcNode) {
        var isHide = funcNode.classList.contains("hide");
        if (isHide) {
            return;
        }
        var _a = funcNode.dataset, name = _a.name, suffix = _a.suffix;
        var tokens = [];
        funcNode.querySelectorAll(".token").forEach(function (tokenNode) {
            tokens.push(tokenNode.dataset.token);
        });
        var realname = suffix ? "".concat(name, "::").concat(suffix) : name;
        code.push({ name: realname, tokens: tokens });
    });
    return code;
}
function scrapeInput(id) {
    var node = document.getElementById(id);
    return node.value;
}
function scrapeInputAsInt(id) {
    var value = scrapeInput(id);
    return parseInt(value);
}
function scrapeInputAsFloat(id) {
    var value = scrapeInput(id);
    return parseFloat(value);
}


/***/ }),

/***/ "./src/web/tokens.ts":
/*!***************************!*\
  !*** ./src/web/tokens.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderToken": () => (/* binding */ renderToken),
/* harmony export */   "initTokens": () => (/* binding */ initTokens)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/web/consts.ts");


function renderToken(token, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isTemplate, isTemplate = _c === void 0 ? false : _c, _d = _b.isEventable, isEventable = _d === void 0 ? true : _d, _e = _b.iconUrl, iconUrl = _e === void 0 ? _consts__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_ICON_URL : _e;
    var node = document.createElement('span');
    node.classList.add('token');
    node.id = "token-".concat((0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])());
    node.dataset.token = token;
    node.dataset.isTemplate = isTemplate ? 'yes' : 'no';
    node.style.backgroundImage = "url(".concat(iconUrl, "/").concat(token, ".svg)");
    if (isEventable) {
        node.setAttribute('draggable', 'true');
        setTokenEvents(node);
    }
    return node;
}
function setTokenEvents(node) {
    node.addEventListener('dragstart', evDragStart, false);
    node.addEventListener('dragend', evDragEnd, false);
    function evDragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('token', this.dataset.token);
        e.dataTransfer.setData('id', this.id);
    }
    function evDragEnd(e) {
        /*
        this.parentElement.querySelectorAll('.token').forEach(function (item) {
          item.classList.remove('over');
        });
        */
    }
}
;
;
var TOKENS = [
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
            { name: 'FRACT_1_3', label: 'Third', type: 'value' },
            { name: 'FRACT_2_3', label: 'Two thirds', type: 'value' },
            { name: 'FRACT_1_4', label: 'Quarter', type: 'value' },
            { name: 'FRACT_3_4', label: 'Three quarters', type: 'value' },
            { name: 'FRACT_1_5', label: 'Fifth', type: 'value' },
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
function initTokens(isTemplate) {
    if (isTemplate === void 0) { isTemplate = true; }
    var container = document.getElementById('tokens');
    container.innerHTML = '';
    TOKENS.forEach(function (category) {
        var categoryNode = document.createElement('div');
        categoryNode.classList.add('tokens', 'hide');
        var categoryNodeName = document.createElement('span');
        categoryNodeName.classList.add('label');
        categoryNodeName.innerText = category.label;
        categoryNodeName.addEventListener('click', function () {
            categoryNode.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);
        category.tokens.forEach(function (tokenInfo) {
            categoryNode.appendChild(renderToken(tokenInfo.name, { isTemplate: isTemplate }));
        });
        container.appendChild(categoryNode);
    });
}


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
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/web/tokens.ts");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code */ "./src/web/code.ts");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run */ "./src/web/run.ts");
/* harmony import */ var _style_docs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/docs.scss */ "./src/style/docs.scss");




var ICONS_URL_PREFIX = "";
var TutAnim = /** @class */ (function () {
    function TutAnim(params) {
        this.tokens = params.tokens;
        this.position = -1;
        this.iterations = params.iterations || 1;
        this.node = document.getElementById(params.nodeId);
    }
    TutAnim.prototype.initRender = function (params) {
        var _this = this;
        this.node.classList.add("fract-animation");
        if (params.title.length > 0) {
            var titleNode = document.createElement("h1");
            titleNode.classList.add("fract-title");
            titleNode.innerText = params.title;
            this.node.appendChild(titleNode);
        }
        {
            var imageNode = document.createElement("div");
            imageNode.classList.add("fract-image");
            this.node.appendChild(imageNode);
        }
        {
            var stavesNode_1 = document.createElement("ul");
            stavesNode_1.classList.add("fract-staves");
            params.staves.forEach(function (fullLineName) {
                var _a = _this.splitFullLineName(fullLineName), name = _a[0], suffix = _a[1];
                var lineNode = (0,_code__WEBPACK_IMPORTED_MODULE_1__.renderStave)({
                    name: name,
                    suffix: suffix,
                    isEditable: false,
                    iconUrl: ICONS_URL_PREFIX,
                });
                stavesNode_1.appendChild(lineNode);
            });
            this.node.appendChild(stavesNode_1);
        }
        {
            var commentNode = document.createElement("div");
            commentNode.classList.add("fract-comment");
            this.node.appendChild(commentNode);
        }
        {
            var barNode = document.createElement("div");
            barNode.classList.add("fract-bar");
            {
                var btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "« PREV";
                btnNode.name = "prev";
                btnNode.disabled = this.position <= 0;
                btnNode.addEventListener("click", this.prev.bind(this));
                barNode.appendChild(btnNode);
            }
            {
                var btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "NEXT »";
                btnNode.name = "next";
                btnNode.disabled = this.position >= this.tokens.length - 1;
                btnNode.addEventListener("click", this.next.bind(this));
                barNode.appendChild(btnNode);
            }
            {
                var labelNode = document.createElement("label");
                labelNode.htmlFor = "iterations";
                labelNode.innerText = "Iterations:";
                barNode.appendChild(labelNode);
            }
            {
                var itNode = document.createElement("input");
                itNode.type = "number";
                itNode.value = this.iterations.toFixed();
                itNode.disabled = true;
                itNode.name = "iterations";
                barNode.appendChild(itNode);
            }
            this.node.appendChild(barNode);
        }
    };
    TutAnim.prototype.iterateToPosition = function (params) {
        for (var i = 0; i < params.start; i++) {
            this.position += 1;
            this.nextExecute();
        }
        this.renderImage();
        this.updateComment();
    };
    TutAnim.prototype.next = function () {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
        this.updateComment();
        this.renderImage();
        this.findInput("next").disabled = this.position >= this.tokens.length - 1;
        this.findInput("prev").disabled = false;
    };
    TutAnim.prototype.prev = function () {
        if (this.position <= 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
        this.updateComment();
        this.renderImage();
        this.findInput("next").disabled = false;
        this.findInput("prev").disabled = this.position <= 0;
    };
    TutAnim.prototype.findInput = function (name) {
        return this.node.querySelector("[name='".concat(name, "']"));
    };
    TutAnim.prototype.renderImage = function () {
        var imageNode = this.node.querySelector(".fract-image");
        var code = (0,_run__WEBPACK_IMPORTED_MODULE_2__.scrapeCode)(this.node.querySelector(".fract-staves"));
        (0,_run__WEBPACK_IMPORTED_MODULE_2__.run)(imageNode, code, this.iterations);
    };
    TutAnim.prototype.nextExecute = function () {
        var _this = this;
        this.getCommands().forEach(function (command) {
            if (command[0] != "!") {
                var _a = command.split("@", 2), line = _a[0], token = _a[1];
                _this.domPushToken(line, token);
                return;
            }
            switch (command.substring(1)) {
                case "IT_INC":
                    _this.iterations += 1;
                    _this.updateIterationsInput();
                    break;
                case "IT_DEC":
                    _this.iterations -= 1;
                    _this.updateIterationsInput();
                    break;
                case "NOP": break;
                default:
                    console.error("".concat(command, " not found"));
                    break;
            }
        });
    };
    TutAnim.prototype.prevExecute = function () {
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
                    _this.updateIterationsInput();
                    break;
                case "IT_DEC":
                    _this.iterations += 1;
                    _this.updateIterationsInput();
                    break;
                case "NOP": break;
                default:
                    console.error("".concat(command, " not found"));
                    break;
            }
        });
    };
    TutAnim.prototype.getCommands = function () {
        var commandWithComment = this.tokens[this.position];
        var rawCommands = commandWithComment.split("#", 1)[0];
        return rawCommands.split(",").map(function (rawCommand) { return rawCommand.trim(); });
    };
    TutAnim.prototype.updateComment = function () {
        var commandWithComment = this.tokens[this.position];
        var _a = commandWithComment.split("#", 2), rawComment = _a[1];
        var comment = rawComment ? rawComment.trim() : "";
        var commentNode = this.node.querySelector(".fract-comment");
        commentNode.innerText = comment;
    };
    TutAnim.prototype.updateIterationsInput = function () {
        this.findInput("iterations").value = this.iterations.toFixed();
    };
    TutAnim.prototype.domPushToken = function (fullLineName, token) {
        var tokensNode = this.findLine(fullLineName);
        var tokenNode = (0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token, {
            isTemplate: false,
            isEventable: false,
            iconUrl: ICONS_URL_PREFIX
        });
        tokensNode.appendChild(tokenNode);
    };
    TutAnim.prototype.removeLastToken = function (fullLineName) {
        var tokensNode = this.findLine(fullLineName);
        tokensNode.removeChild(tokensNode.lastChild);
    };
    TutAnim.prototype.findLine = function (fullLineName) {
        var _a = this.splitFullLineName(fullLineName), name = _a[0], suffix = _a[1];
        var query = ".function[data-name='".concat(name, "'][data-suffix='").concat(suffix, "'] .inner-tokens");
        return this.node.querySelector(query);
    };
    TutAnim.prototype.splitFullLineName = function (fullLineName) {
        var _a = fullLineName.split("::", 2), name = _a[0], suffix = _a[1];
        return [name, suffix || ""];
    };
    return TutAnim;
}());
var ANIMATIONS_PARAMS = [];
var CURRENT_HREF = document.currentScript.src;
function makeAnimation(params) {
    ANIMATIONS_PARAMS.push(params);
}
function setIconsUrls() {
    var dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    ICONS_URL_PREFIX = "".concat(dirnameHref, "../_images");
}
function renderAll() {
    ANIMATIONS_PARAMS.forEach(function (params) {
        var animation = new TutAnim(params);
        animation.initRender(params);
        animation.iterateToPosition(params);
    });
}
window.addEventListener('load', function (event) {
    setIconsUrls();
    renderAll();
});
// ON INIT

})();

TUT = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07UUFDNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxlQUFLO0lBQ2pDLFlBQVksRUFBRSxDQUFDO0lBQ2YsU0FBUyxFQUFFLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVFVULy4vc3JjL3N0eWxlL2RvY3Muc2NzcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9zdHlsZS9kb2NzLnNjc3M/YmQyYyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L2Jhc2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9zdHJva2VzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvdmFsdWVzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jdXJzb3IudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2V4ZWMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3ZnLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb2RlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvY29uc3RzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvcnVuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdG9rZW5zLnRzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL1RVVC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2RvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9rZW5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGdhcDogNXB4O1xcbn1cXG4udG9rZW5zLmhpZGUgLnRva2VuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50b2tlbnMgPiAubGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2tlbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4udG9rZW4udG9rZW4taW5saW5lIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi50b2tlbi1zcGFuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnRva2VuLXNwYW4ub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgYm9yZGVyOiAycHggIzk5OSBkb3R0ZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9rZW4tc3Bhbi5vdmVyOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB0O1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbn1cXG4udG9rZW4tc3Bhbi5yZW1vdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4ODtcXG4gIGJvcmRlcjogMnB4ICM5MjIgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi50b2tlbi1zcGFuLnJlbW92ZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG59XFxuXFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC50b2tlbi1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm5hbWUge1xcbiAgZmxleDogMCAxIDUwcHg7XFxuICBmb250LXNpemU6IDE1cHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAub3V0ZXItdG9rZW5zIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm91dGVyLXRva2VucyA+IC5pbm5lci10b2tlbnMge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAub3V0ZXItdG9rZW5zID4gLmlubmVyLXRva2VucyA+ICoge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAucmVtb3ZlIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZnJhY3QtYW5pbWF0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG4uZnJhY3QtYW5pbWF0aW9uIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIgPiBpbnB1dFtuYW1lPWl0ZXJhdGlvbnNdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBoZWlnaHQ6IDVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZnJhY3QtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZnJhY3QtaW1hZ2UgPiBzdmcge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5mcmFjdC1zdGF2ZXMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSAub3V0ZXItdG9rZW5zIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpIC5pbm5lci10b2tlbnMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZnJhY3Qtc3RhdmVzIC50b2tlbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9rZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9kb2NzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb2RlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7QUNDUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0RSOztBREtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRlI7QURJUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRlo7QURNSTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNKUjtBRE1RO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNKWjs7QUM1REE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBRCtESjtBQzdESTtFQUNJLGVBQUE7QUQrRFI7QUM1REk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEOERSO0FDNURRO0VBQ0ksc0JBQUE7QUQ4RFo7QUMxREk7RUFDSSxrQkFBQTtBRDREUjtBQzFEUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FENERaO0FDeERZO0VBQ0ksY0FBQTtBRDBEaEI7O0FDcERBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRHVESjtBQ3JESTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FEdURSO0FDckRRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUR1RFo7QUNwRFE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEc0RaO0FDcERZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEc0RoQjtBQ3JEZ0I7RUFBTSxjQUFBO0FEd0R0QjtBQ3JEWTtFQUFXLGNBQUE7QUR3RHZCO0FDckRRO0VBQ0ksYUFBQTtBRHVEWjs7QUEzSUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUE4SUo7QUE1SUk7RUFDSSxjQUFBO0FBOElSOztBQTFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBNklKOztBQTFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUE2SUo7O0FBeklJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBNElSOztBQXhJQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTJJSjs7QUF4SUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEySUo7QUExSUk7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUE0SVI7O0FBeElBO0VBQ0ksaUJBQUE7QUEySUo7QUExSUk7RUFDSSxZQUFBO0FBNElSO0FBM0lRO0VBQWdCLFlBQUE7QUE4SXhCO0FBN0lRO0VBQWdCLFlBQUE7QUFnSnhCO0FBOUlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFnSlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRva2VucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgJi5oaWRlIC50b2tlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgID4gLmxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi50b2tlbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgICAmLnRva2VuLWlubGluZSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICB9XFxufVxcblxcbi50b2tlbi1zcGFuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICYub3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgYm9yZGVyOiAycHggIzk5OSBkb3R0ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYucmVtb3ZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEODg7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTIyIGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi90b2tlbnMnO1xcbkBpbXBvcnQgJy4vY29kZSc7XFxuXFxuLmZyYWN0LWFuaW1hdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcblxcbiAgICBsYWJlbCB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIge1xcbiAgICA+IGlucHV0W25hbWU9XFxcIml0ZXJhdGlvbnNcXFwiXSB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICA+IHN2ZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgID4gbGkge1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgLm91dGVyLXRva2VucyB7IGhlaWdodDogMTAwJTsgfVxcbiAgICAgICAgLmlubmVyLXRva2VucyB7IGhlaWdodDogMTAwJTsgfVxcbiAgICB9XFxuICAgIC50b2tlbiB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgICB9XFxufVxcblwiLFwiLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAudG9rZW4tYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgID4gLm5hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gLm91dGVyLXRva2VucyAge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG5cXG4gICAgICAgICAgICA+IC5pbm5lci10b2tlbnMge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICA+ICogeyBmbGV4OiAwIDAgYXV0bzsgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICA+IC5yZW1vdmUge2ZsZXg6IDAgMCBhdXRvOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZGUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG9jcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG9jcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBOb2RlLCBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUsIEFjdGlvblJlc3VsdCwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24gaW1wbGVtZW50cyBOb2RlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYWN0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBjb25zdCBsb2NhbHMgPSBhY3Rpb25zLm1hcCgoKSA9PiAoe30pKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaXplOykge1xuICAgICAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHMuYXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9ucy5hdChpbmRleCk7XG4gICAgICAgICAgICBjb25zdCB7IHNoaWZ0LCByZXZlcnNlIH0gPSBhY3Rpb24uZXhlYyhjb250ZXh0LCBsb2NhbCk7XG4gICAgICAgICAgICB0aGlzLmV4ZWNSZXZlcnNlKGluZGV4LCByZXZlcnNlID8gTWF0aC5yb3VuZChyZXZlcnNlKSA6IDAsIGNvbnRleHQpO1xuICAgICAgICAgICAgaW5kZXggKz0gc2hpZnQgPyBNYXRoLnJvdW5kKHNoaWZ0KSA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShzdG9wSW5kZXg6IG51bWJlciwgcmV2ZXJzZTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGlmIChyZXZlcnNlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3Qgc3RhcnRSZXNlcnZlID0gTWF0aC5tYXgoMCwgc3RvcEluZGV4IC0gcmV2ZXJzZSk7XG4gICAgICAgIGZvcihsZXQgaW5kZXggPSBzdG9wSW5kZXg7IGluZGV4ID49IHN0YXJ0UmVzZXJ2ZTsgaW5kZXgtLSkge1xuICAgICAgICAgICAgYWN0aW9ucy5hdChpbmRleCkuZXhlY1JldmVyc2UoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaXplKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE5vZGVXaXRoVmFsdWUgZXh0ZW5kcyBBY3Rpb25Ob2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBWYWx1ZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLnZhbHVlLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcmd1bWVudCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudCk7XG4gICAgICAgIGZ1bmMuZXhlYyhuZXdDb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcmd1bWVudCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudCk7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGZ1bmMuc2l6ZSgpIC0gMTtcbiAgICAgICAgZnVuYy5leGVjUmV2ZXJzZShsYXN0SW5kZXgsIGxhc3RJbmRleCwgbmV3Q29udGV4dCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd0xpbmUobGVuZ3RoLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdDaXJjbGUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3Q2lyY2xlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdTcXVhcmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3U3F1YXJlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdUcmlhbmdsZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZTogc2l6ZSwgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdUcmlhbmdsZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdBcmNMaW5lKHRoaXMucmF0aW8sIHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGNvbnRleHQuZ2V0Q3Vyc29yKCk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlTGVmdCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZVJpZ2h0IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIHJldHVybiB7cmV2ZXJzZTogaXRlcmF0aW9uc307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVwbGF5IGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogYW55KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGxvY2FsLmNvdW50ZXIgfHwgMTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgucm91bmQodGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbC5jb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4ge3NoaWZ0OiAtMX07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblJlc3VsdCB7XG4gICAgc2hpZnQ/OiBudW1iZXI7XG4gICAgcmV2ZXJzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVmFsdWUodmFsdWVOb2RlczogVmFsdWVOb2RlW10sIGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IGluaXQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgY29sb3I6IGNvbnRleHQuYXJndW1lbnQuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiAoYTogbnVtYmVyLCBiOm51bWJlcikgPT4gYSAqIGIsXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVOb2Rlcy5yZWR1Y2UocGFydEV2YWwuYmluZCh0aGlzLCBjb250ZXh0KSwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRFdmFsKGNvbnRleHQ6IENvbnRleHQsIGFjYzogRXZhbHVlZFZhbHVlLCBub2RlOiBWYWx1ZU5vZGUpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbm9kZS5ldmFsKGNvbnRleHQpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ld1ZhbHVlLnZhbHVlVHJhbnNmb3JtZXIgfHwgYWNjLnZhbHVlVHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm0oYWNjLnZhbHVlLCBuZXdWYWx1ZS52YWx1ZSkgOiBhY2MudmFsdWUsXG4gICAgICAgIGNvbG9yOiBuZXdWYWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuY29sb3IgOiBhY2MuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBuZXdWYWx1ZS5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlU3R5bGUgOiBhY2Muc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgOiBhY2Muc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiB0cmFuc2Zvcm0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1heENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAxLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pbkNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNoaWZ0Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBsZXQgY29sb3IgPSAoY29udGV4dC5hcmd1bWVudC5jb2xvciArIHRoaXMuc2hpZnQpICUgMS4wO1xuICAgICAgICBpZiAoY29sb3IgPCAwLjApIHtcbiAgICAgICAgICAgIGNvbG9yICs9IDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbG9yfTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNdWx0T3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICogYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSArIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgLSBiIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgU3Ryb2tlU3R5bGUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0U3Ryb2tlU3R5bGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc3Ryb2tlOiBTdHJva2VTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cm9rZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyBzdHJva2VTdHlsZTogdGhpcy5zdHJva2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNoaWZ0U3Ryb2tlVGhpY2tuZXNzIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGhpY2tuZXNzID0gY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MgKyB0aGlzLnNoaWZ0O1xuICAgICAgICByZXR1cm4geyBzdHJva2VUaGlja25lc3MgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVkQW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVkQW5nbGUgPSBhbmdsZSAvIDM2MC4wO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMubm9ybWFsaXplZEFuZ2xlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZXIgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogY29udGV4dC5hcmd1bWVudC52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0FyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gY29udGV4dC5maW5kRnVuY3Rpb24odGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlTm9kZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcblxuZXhwb3J0IHR5cGUgU3Ryb2tlU3R5bGUgPSBcInNvbGlkXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWVkVmFsdWUge1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIGNvbG9yPzogbnVtYmVyO1xuICAgIHN0cm9rZVN0eWxlPzogU3Ryb2tlU3R5bGU7XG4gICAgc3Ryb2tlVGhpY2tuZXNzPzogbnVtYmVyO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHRDZmcge1xuICAgIG1heEl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIGN1cnNvcjogQ3Vyc29yO1xuICAgIGJhZzogYW55O1xuXG4gICAgY29uc3RydWN0b3Ioe21heEl0ZXJhdGlvbiwgYmFnLCBjdXJzb3J9KSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgdGhpcy5iYWcgPSBiYWc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcHVibGljIGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHB1YmxpYyBhcmd1bWVudDogRXZhbHVlZFZhbHVlO1xuICAgIHByaXZhdGUgY2ZnOiBDb250ZXh0Q2ZnO1xuXG4gICAgY29uc3RydWN0b3Ioe2NmZywgYXJndW1lbnQsIGl0ZXJhdGlvbiA9IDB9KSB7XG4gICAgICAgIHRoaXMuY2ZnID0gY2ZnO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uID0gaXRlcmF0aW9uO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9uID0gdGhpcy5pdGVyYXRpb247XG4gICAgICAgIGlmIChpdGVyYXRpb24gPj0gdGhpcy5jZmcubWF4SXRlcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWVzVG9GaW5kID0gW25hbWVdO1xuICAgICAgICBpZiAoaXRlcmF0aW9uICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpFVkVOYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlcmF0aW9uID09IHRoaXMuY2ZnLm1heEl0ZXJhdGlvbiAtIDEpIHtcbiAgICAgICAgICAgIG5hbWVzVG9GaW5kLnVuc2hpZnQoYCR7bmFtZX06OkVORGApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RGdW5jTmFtZSA9IG5hbWVzVG9GaW5kLmZpbmQobmFtZSA9PiB0aGlzLmNmZy5iYWdbbmFtZV0pO1xuICAgICAgICByZXR1cm4gZXhpc3RGdW5jTmFtZSA/IHRoaXMuY2ZnLmJhZ1tleGlzdEZ1bmNOYW1lXSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yKCk6IEN1cnNvciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNmZy5jdXJzb3I7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudDogRXZhbHVlZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh7XG4gICAgICAgICAgICBjZmc6IHRoaXMuY2ZnLFxuICAgICAgICAgICAgYXJndW1lbnQ6IG5ld0FyZ3VtZW50LFxuICAgICAgICAgICAgaXRlcmF0aW9uOiB0aGlzLml0ZXJhdGlvbiArIDEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpZ3VyZSwgTGluZSwgU3F1YXJlLCBUcmlhbmdsZSwgQ2lyY2xlLCBBcmMgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94IHtcbiAgICBtaW46IFtudW1iZXIsIG51bWJlcl07XG4gICAgbWF4OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIHtcbiAgICBzdHJva2VTaXplOiBudW1iZXI7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG4gICAgZmlndXJlczogRmlndXJlW107XG4gICAgYm94OiBCb3g7XG4gICAgZmlyc3RDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIHN0cm9rZVNpemUgPSAxLFxuICAgICAgICBkaXN0YW5jZU11bHRpcGxlciA9IDEwMCxcbiAgICAgICAgZmlyc3RDb2xvciA9IFwiIzAwMDAwMFwiLFxuICAgICAgICBzZWNvbmRDb2xvciA9IFwiI0RDMTQzQ1wiLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0cm9rZVNpemUgPSBzdHJva2VTaXplO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyID0gZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgICAgIHRoaXMuYm94ID0ge1xuICAgICAgICAgICAgbWluOiBbMC4wLCAwLjBdLFxuICAgICAgICAgICAgbWF4OiBbMC4wLCAwLjBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpcnN0Q29sb3IgPSB0aGlzLmhleFRvQ29sb3IoZmlyc3RDb2xvcik7XG4gICAgICAgIHRoaXMuc2Vjb25kQ29sb3IgPSB0aGlzLmhleFRvQ29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGV4VG9Db2xvcihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDUsIDIpLCAxNik7XG4gICAgICAgIHJldHVybiBbciwgZywgYl07XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5hbmdsZSArIGFuZ2xlKSAlIDEuMDtcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IGFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBMaW5lKFtvbGRfeCwgb2xkX3ldLCBbbmV3X3gsIG5ld195XSwgb3BzKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzaGlmdCA9IHRoaXMuYW5nbGUgLSAwLjI1O1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNoaWZ0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcykpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuX2ZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd0NpcmNsZShyYWRpdXM6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7IGZpbGw6IHRoaXMuY2FsY0NvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgcmFkaXVzLCBvcHMpKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBTcXVhcmUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgb3BzKSk7XG4gICAgfVxuXG4gICAgZHJhd1RyaWFuZ2xlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBUcmlhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBvcHMpKTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoMS4wKSB9O1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgMi4wLCBvcHMpKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZvcndhcmQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdICs9IHggKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geSAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICB9XG5cbiAgICBhZGRNYXJnaW4obWFyZ2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzBdICs9IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdICs9IG1hcmdpbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVCb3goW3gsIHldOiBudW1iZXJbXSwgc2l6ZSA9IDApIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzBdLCB4IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFswXSwgeCArIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMV0sIHkgLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzFdLCB5ICsgc2l6ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNhID0gdGhpcy5maXJzdENvbG9yO1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuc2Vjb25kQ29sb3I7XG4gICAgICAgIGNvbnN0IGFSYXRpbyA9IE1hdGguYWJzKGNvbG9yIC0gMC41KSAqIDI7XG4gICAgICAgIGNvbnN0IGJSYXRpbyA9IDEuMCAtIGFSYXRpbztcbiAgICAgICAgY29uc3QgciA9IE1hdGgudHJ1bmMoY2FbMF0gKiBhUmF0aW8gKyBjYlswXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLnRydW5jKGNhWzFdICogYVJhdGlvICsgY2JbMV0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBiID0gTWF0aC50cnVuYyhjYVsyXSAqIGFSYXRpbyArIGNiWzJdICogYlJhdGlvKTtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgcGFyc2VMaW5lLCBwYXJzZVJhd1Rva2VucyB9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHsgQ29udGV4dENmZywgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWModmFsdWVBcmd1bWVudDogbnVtYmVyLCBtYXhJdGVyYXRpb246IG51bWJlciwgZnVuY3Rpb25zOiBGdW5jW10sIGN1cnNvckNmZyA9IHt9KTogQ3Vyc29yIHtcbiAgICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGN1cnNvckNmZyk7XG4gICAgY29uc3QgYmFnID0ge307XG4gICAgZnVuY3Rpb25zLmZvckVhY2goKHtuYW1lLCB0b2tlbnM6IHJhd1Rva2Vuc30pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zKTtcbiAgICAgICAgYmFnW25hbWVdID0gcGFyc2VMaW5lKG5hbWUsIHRva2Vucyk7XG4gICAgfSk7XG4gICAgY29uc3QgY2ZnID0gbmV3IENvbnRleHRDZmcoeyBtYXhJdGVyYXRpb24sIGJhZywgY3Vyc29yOiBjdXJzb3IgfSk7XG4gICAgY29uc3QgYXJndW1lbnQgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZUFyZ3VtZW50LFxuICAgICAgICBzdHJva2VTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDEuMCxcbiAgICAgICAgY29sb3I6IDAuMCxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IGNmZywgYXJndW1lbnQgfSk7XG5cbiAgICBzdGFydEV4ZWMoY29udGV4dCwgYmFnKTtcblxuICAgIHJldHVybiBjdXJzb3I7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RXhlYyhjb250ZXh0OiBDb250ZXh0LCBiYWcpIHtcbiAgICBjb25zdCBmdW5jID0gY29udGV4dC5maW5kRnVuY3Rpb24oXCJTVEFSVFwiKSB8fCBjb250ZXh0LmZpbmRGdW5jdGlvbihcIkZcIik7XG4gICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgZnVuYy5leGVjKGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgRmlndXJlIHt9XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgICBmaXJzdFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdFBvaW50LCBzZWNvbmRQb2ludCwge2NvbG9yID0gXCJibGFja1wiLCBzdHJva2UgPSAxfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZmlyc3RQb2ludCA9IGZpcnN0UG9pbnQ7XG4gICAgICAgIHRoaXMuc2Vjb25kUG9pbnQgPSBzZWNvbmRQb2ludDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIHJhZGl1cywge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHJva2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHJhdGlvLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgY2xvc2UgPSBmYWxzZSwgc2hpZnQgPSAwLjAsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcXVhcmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJpYW5nbGUgIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgb3JpZW50YXRpb24sIHNpemUsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2VuLCB0b2tlbnMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgeyBOb2RlLCBBY3Rpb25Ob2RlLCBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9hc3QvYWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19BUkdTID0gW1wiRElBTU9ORFwiLCBcIklOVl9UUklBTkdMRVwiXTtcbmV4cG9ydCBjb25zdCBQUk9DRURVUkVTID0gW1wiRlwiLCBcIkdcIiwgXCJIXCJdO1xuZXhwb3J0IGNvbnN0IFNVRkZJWEVTID0gW1wiRU5EXCIsIFwiRVZFTlwiLCBcIk9ERFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vuczogc3RyaW5nW10pOiBUb2tlbltdIHtcbiAgICByZXR1cm4gcmF3VG9rZW5zLm1hcChyYXcgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tyYXddO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBgUGFyc2luZyBlcnJvcjogJHtyYXd9IGlzIG5vdCB1bmRlZmluZWQgYXMgdG9rZW4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSk7XG59XG5cbmNsYXNzIEFjdGlvblRtcCB7XG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcbiAgICBwcml2YXRlIHZhbHVlczogVmFsdWVOb2RlW107XG4gICAgcHJpdmF0ZSB0b2tlbjogVG9rZW4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25Ub2tlbih0b2tlbjogVG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldEFjdGlvblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIGdldFZhbHVlc0xlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzQWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbiAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnRva2VuLmZhY3RvcnkgYXMgQWN0aW9uQ2I7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZhY3RvcnkodGhpcy52YWx1ZXMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbnNlcnRWYWx1ZSh2YWx1ZTogVmFsdWVOb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKSB7XG4gICAgaWYgKERZTkFNSUNfQVJHUy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZVZhbHVlKHRva2Vucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZUZ1bmMobmFtZSwgdG9rZW5zKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZUZ1bmMobmFtZTogc3RyaW5nLCB0b2tlbnM6IFRva2VuW10pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgY29uc3QgdG1wID0gbmV3IEFjdGlvblRtcCgpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRtcC5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICBwYXJzZVZhbHVlKHRva2VuLCB0bXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VBY3Rpb24odG9rZW4sIHRtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRtcC5wdXNoQWN0aW9uKCk7IC8vIHB1c2ggbGFzdCB0b2tlbi5cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24obmFtZSwgdG1wLmdldEFjdGlvbnMoKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZVZhbHVlKHRva2VuczogVG9rZW5bXSk6IFZhbHVlTm9kZVtdIHtcbiAgICByZXR1cm4gdG9rZW5zLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBhY3Rpb25zIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmlzRHluYW1pYykge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBkeW5hbWljIGVsZW1lbnRzIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBY3Rpb24odG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICghdG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBpcyBub3QgYW4gYWN0aW9uXCI7XG4gICAgfVxuICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG4gICAgaWYgKHRva2VuLnZhbHVlU2l6ZSA9PT0gMCkge1xuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgY29uc3QgeyB2YWx1ZVNpemUgfSA9IHRtcC5nZXRBY3Rpb25Ub2tlbigpO1xuICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICBpZiAodmFsdWVTaXplICE9PSBcIitcIiAmJiB0bXAuZ2V0VmFsdWVzTGVuZ3RoKCkgPCB2YWx1ZVNpemUpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaGFzIG5vdCBlbm91Z2ggdmFsdWVzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICAgICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHRtcC5pbnNlcnRWYWx1ZShmYWN0b3J5KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgRmlndXJlLCBDaXJjbGUsIEFyYywgU3F1YXJlLCBUcmlhbmdsZSwgTGluZSB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxuY29uc3QgTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3I6IEN1cnNvcikge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGNvbnN0IFttaW5feCwgbWluX3ldID0gY3Vyc29yLmJveC5taW47XG4gICAgY29uc3QgW21heF94LCBtYXhfeV0gPSBjdXJzb3IuYm94Lm1heDtcbiAgICBjb25zdCB3aWR0aCA9IG1heF94IC0gbWluX3g7XG4gICAgY29uc3QgaGVpZ2h0ID0gbWF4X3kgLSBtaW5feTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHttaW5feH0gJHttaW5feX0gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gICAgY3Vyc29yLmZpZ3VyZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5jb25zdCBTUVJUMyA9IE1hdGguc3FydCgzKTtcbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuY29sb3IpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBmaWd1cmUuc3Ryb2tlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFNxdWFyZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemUgLyAyO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggLSBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFRyaWFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFMgPSBmaWd1cmUuc2l6ZTtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4ICsgUyAqIGR4fSAke3kgKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSArIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSAtIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSkge1xuICAgIGxldCBzdHlsZSA9IGBmaWxsOiAke2ZpZ3VyZS5maWxsfTtgO1xuICAgIGlmIChmaWd1cmUuc3Ryb2tlID4gMCkge1xuICAgICAgICBzdHlsZSArPSBgc3Ryb2tlLXdpZHRoOiAke2ZpZ3VyZS5zdHJva2V9O2BcbiAgICAgICAgc3R5bGUgKz0gYHN0cm9rZTogJHtmaWd1cmUuY29sb3J9YDtcbiAgICB9XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG59XG4iLCJpbXBvcnQgeyBOb2RlLCBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgTXVsdGlwbGVyLCBBbmdsZSwgQXJndW1lbnQsIER5bmFtaWNBcmd1bWVudCB9IGZyb20gXCIuL2FzdC92YWx1ZXNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiLi9hc3QvY29sb3JzXCI7XG5pbXBvcnQgKiBhcyBzdHJva2VzIGZyb20gXCIuL2FzdC9zdHJva2VzXCI7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSBcIi4vYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcbmV4cG9ydCB0eXBlIFZhbHVlU2l6ZSA9IFwiK1wiIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIGlzQWN0aW9uOiBib29sZWFuO1xuICAgIGlzRHluYW1pYzogYm9vbGVhbjtcbiAgICBmYWN0b3J5OiBBY3Rpb25DYiB8IFZhbHVlQ2I7XG4gICAgdmFsdWVTaXplOiBWYWx1ZVNpemU7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlzQWN0aW9uLCBpc0R5bmFtaWMsIGZhY3RvcnksIHZhbHVlU2l6ZSB9KSB7XG4gICAgICAgIHRoaXMuaXNBY3Rpb24gPSBpc0FjdGlvbjtcbiAgICAgICAgdGhpcy5pc0R5bmFtaWMgPSBpc0R5bmFtaWM7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMudmFsdWVTaXplID0gdmFsdWVTaXplO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoZmFjdG9yeTogVmFsdWVDYiwgaXNEeW5hbWljID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IGZhbHNlLCB2YWx1ZVNpemU6IDAsIGlzRHluYW1pYywgZmFjdG9yeSB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHZhbHVlU2l6ZTogVmFsdWVTaXplLCBmYWN0b3J5OiBBY3Rpb25DYikge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogdHJ1ZSwgdmFsdWVTaXplLCBpc0R5bmFtaWM6IHRydWUsIGZhY3RvcnkgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlbnMgPSB7XG4gICAgLy8gKioqIFZhbHVlcyAqKipcbiAgICAvLyBDb3VudHNcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIC8vQU5HTEVfMzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzYwKSksXG4gICAgQU5HTEVfMjcwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMjcwKSksXG4gICAgQU5HTEVfMTgwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTgwKSksXG4gICAgQU5HTEVfOTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg5MCkpLFxuICAgIEFOR0xFXzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNjApKSxcbiAgICBBTkdMRV80NTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDQ1KSksXG4gICAgQU5HTEVfMzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzMCkpLFxuICAgIEFOR0xFXzE1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTUpKSxcbiAgICAvLyBDb2xvcnNcbiAgICBDT0xPUl9NQVg6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWF4Q29sb3IoKSksXG4gICAgQ09MT1JfTUlOOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1pbkNvbG9yKCkpLFxuICAgIENPTE9SX1NISUZUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAyKSksXG4gICAgQ09MT1JfU0hJRlRfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDQpKSxcbiAgICBDT0xPUl9TSElGVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNSkpLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMTApKSxcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwic29saWRcIikpLFxuICAgIFNUUk9LRV9EQVNIRUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZGFzaGVkXCIpKSxcbiAgICBTVFJPS0VfRE9UVEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRvdHRlZFwiKSksXG4gICAgU1RST0tFX1RISUNLX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoKzEpKSxcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygtMSkpLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBPUF9NVUxUOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLk11bHRPcCgpKSxcbiAgICBPUF9BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuQWRkT3AoKSksXG4gICAgT1BfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLlN1Yk9wKCkpLFxuICAgIC8vIEFyZ3VtZW50c1xuICAgIEFSR1VNRU5UOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQXJndW1lbnQoKSksXG4gICAgQ0FMTF9ESUFNT05EOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiRElBTU9ORFwiKSwgdHJ1ZSksXG4gICAgQ0FMTF9JTlZfVFJJQU5HTEU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJJTlZfVFJJQU5HTEVcIiksIHRydWUpLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIENBTExfRjogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiR1wiLCB2KSksXG4gICAgQ0FMTF9IOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkhcIiwgdikpLFxuICAgIC8vIFBhaW50ZXJzXG4gICAgRFJBV19MSU5FOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0xpbmUodikpLFxuICAgIERSQVdfQ0lSQ0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0NpcmNsZSh2KSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3U3F1YXJlKHYpKSxcbiAgICBEUkFXX1RSSUFOR0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd1RyaWFuZ2xlKHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDQsIHYpKSxcbiAgICAvLyBDdXJzb3IgT3BlcmF0b3JzXG4gICAgRk9SV0FSRDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkZvcndhcmQodikpLFxuICAgIFJPVEFURV9MRUZUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlUmlnaHQodikpLFxuICAgIFJFVkVSU0U6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodikpLFxufTtcbiIsImltcG9ydCB7IHJlbmRlclRva2VuIH0gZnJvbSAnLi90b2tlbnMnO1xuaW1wb3J0IHsgc2NyYXBlQW5kUnVuIH0gZnJvbSAnLi9ydW4nO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJy4vY29uc3RzJztcbmltcG9ydCB7IFBST0NFRFVSRVMsIERZTkFNSUNfQVJHUywgU1VGRklYRVMgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jb25zdCBJTlBVVFMgPSBbXCJpdGVyYXRpb25zXCIsIFwiZmlyc3QtY29sb3JcIiwgXCJzZWNvbmQtY29sb3JcIiwgXCJzdHJva2Utc2l6ZVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb2RlKGNvZGUpIHtcbiAgICBjb25zdCBjYiA9ICgpID0+IHtcbiAgICAgICAgc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmVuZGVyQ29kZShjb2RlKTtcbiAgICBJTlBVVFMuZm9yRWFjaChpbnB1dElkID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2IsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckxpc3RPZkZ1bmN0aW9ucygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0T2ZGdW5jdGlvbnMoKSB7XG4gICAgY29uc3QgZnVuY3Rpb25zTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVuY3Rpb25zXCIpO1xuICAgIFBST0NFRFVSRVMuY29uY2F0KERZTkFNSUNfQVJHUykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgZnVuY3Rpb25zTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJCYXJPZkZ1bmN0aW9ucyhuYW1lKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhck9mRnVuY3Rpb25zKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgY29uc3QgYmFzZUZ1bmNOb2RlID0gcmVuZGVyQWRkRnVuY3Rpb24oXCJzcGFuXCIsIG5hbWUpO1xuICAgIGNvbnN0IGJhck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgYmFyTm9kZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcbiAgICBTVUZGSVhFUy5mb3JFYWNoKHN1ZmZpeCA9PiB7XG4gICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyQWRkRnVuY3Rpb24oXCJsaVwiLCBuYW1lLCBzdWZmaXgpKTtcbiAgICB9KTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGJhc2VGdW5jTm9kZSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChiYXJOb2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkRnVuY3Rpb24odHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nID0gXCJcIikge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGNvbnN0IHJlYWxOYW1lID0gc3VmZml4ID8gYFNVRkZJWF8ke3N1ZmZpeH1gIDogYENBTExfJHtuYW1lfWA7XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7REVGQVVMVF9JQ09OX1VSTH0vJHtyZWFsTmFtZX0uc3ZnKWA7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW4tYnRuXCIpO1xuICAgIG5vZGUuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gc3VmZml4O1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB7bmFtZSwgc3VmZml4fSA9IHRoaXMuZGF0YXNldDtcbiAgICAgICAgc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZSwgc3VmZml4KTtcbiAgICAgICAgc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCBmYWxzZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvZGUoY29kZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb2RlLmZvckVhY2goc3RhdmVOYW1lID0+IHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBzdGF2ZU5hbWUuc3BsaXQoXCI6OlwiLCAyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlclN0YXZlKHtuYW1lLCBzdWZmaXh9KSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdGF2ZSh7XG4gICAgbmFtZSxcbiAgICBzdWZmaXggPSBcIlwiLFxuICAgIHRva2VucyA9IFtdLFxuICAgIGlzRWRpdGFibGUgPSB0cnVlLFxuICAgIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMLFxufSk6IEVsZW1lbnQge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZnVuY3Rpb25cIik7XG4gICAgbm9kZS5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgIG5vZGUuZGF0YXNldC5zdWZmaXggPSBzdWZmaXg7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJOYW1lKG5hbWUsIHN1ZmZpeCwge2ljb25Vcmx9KSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbnModG9rZW5zLCB7aXNFZGl0YWJsZSwgaWNvblVybH0pKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb25zdCBmdW5jTm9kZSA9IGNvZGVOb2RlLnF1ZXJ5U2VsZWN0b3IoYC5mdW5jdGlvbltkYXRhLW5hbWU9XCIke25hbWV9XCJdW2RhdGEtc3VmZml4PVwiJHtzdWZmaXh9XCJdYCk7XG4gICAgaWYgKCFmdW5jTm9kZSkge1xuICAgICAgICBjb2RlTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJTdGF2ZSh7bmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmNOb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTmFtZShuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nLCB7aWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9ID0ge30pOiBFbGVtZW50IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9XyR7c3VmZml4fWAgOiBuYW1lO1xuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ljb25Vcmx9L0NBTExfJHtyZWFsbmFtZX0uc3ZnKWA7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsIHtpc0VkaXRhYmxlID0gdHJ1ZSwgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9ID0ge30pOiBFbGVtZW50IHtcbiAgICBjb25zdCB0b2tlbnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2tlbnNOb2RlLmNsYXNzTGlzdC5hZGQoXCJvdXRlci10b2tlbnNcIik7XG5cbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJpbm5lci10b2tlbnNcIik7XG4gICAgaWYgKGlzRWRpdGFibGUpIHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlblNwYW4oKSk7XG4gICAgfVxuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbiwge2lzVGVtcGxhdGU6IGlzRWRpdGFibGV9KSk7XG4gICAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuU3BhbigpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG9rZW5zTm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0b2tlbnNOb2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuUmVtb3ZlU3BhbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zTm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5TcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5SZW1vdmVTcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIsIFwicmVtb3ZlXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlLCB0cnVlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2V0VG9rZW5TcGFuRXZlbnRzKG5vZGU6IEVsZW1lbnQsIHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2RHJhZ092ZXIsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldkRyb3AsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2RHJhZ0VudGVyLCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldkRyYWdMZWF2ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gZXZEcmFnT3ZlcihlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZEcm9wKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IG9sZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnaWQnKTtcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgaWYgKCFyZW1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgcmVuZGVyVG9rZW5TcGFuKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCByZW5kZXJUb2tlbih0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBjb25zdCBvbGRUb2tlbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRJZCk7XG4gICAgICAgIGlmIChvbGRUb2tlbk5vZGUuZGF0YXNldC5pc1RlbXBsYXRlID09PSBcIm5vXCIpIHtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmFwZUFuZFJ1bigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFNwYW4obm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2tlbi1zcGFuJykgPyBub2RlIDogbm9kZS5uZXh0U2libGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdFbnRlcihlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB9XG59XG5cblxuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9VUkwgPSBgJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL2A7XG4iLCJpbXBvcnQgeyBleGVjLCBGdW5jIH0gZnJvbSBcIi4uL2V4ZWNcIjtcbmltcG9ydCB7IGNyZWF0ZVN2ZyB9IGZyb20gXCIuLi9zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmFwZUFuZFJ1bigpIHtcbiAgICBjb25zdCBjdXJzb3JDZmcgPSB7XG4gICAgICAgIGZpcnN0Q29sb3I6IHNjcmFwZUlucHV0KFwiZmlyc3QtY29sb3JcIiksXG4gICAgICAgIHNlY29uZENvbG9yOiBzY3JhcGVJbnB1dChcInNlY29uZC1jb2xvclwiKSxcbiAgICAgICAgc3Ryb2tlU2l6ZTogc2NyYXBlSW5wdXRBc0Zsb2F0KFwic3Ryb2tlLXNpemVcIiksXG4gICAgfVxuICAgIGNvbnN0IGltYWdlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG4gICAgY29uc3QgY29kZSA9IHNjcmFwZUNvZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpKTtcbiAgICBydW4oaW1hZ2VOb2RlLCBjb2RlLCBzY3JhcGVJbnB1dEFzSW50KFwiaXRlcmF0aW9uc1wiKSwgY3Vyc29yQ2ZnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihpbWFnZU5vZGU6IEhUTUxFbGVtZW50LCBjb2RlOiBGdW5jW10sIG1heEl0ZXJhdGlvbjogbnVtYmVyID0gMywgY3Vyc29yQ2ZnID0ge30pIHtcbiAgICBpbWFnZU5vZGUuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGFyZ3VtZW50ID0gMS4wO1xuICAgIGNvbnN0IGN1cnNvciA9IGV4ZWMoYXJndW1lbnQsIG1heEl0ZXJhdGlvbiwgY29kZSwgY3Vyc29yQ2ZnKTtcbiAgICBjdXJzb3IuYWRkTWFyZ2luKDIwKTtcbiAgICBjb25zdCBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICBjb25zdCBzdmcgPSBjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcik7XG5cbiAgICBpbWFnZU5vZGUuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjcmFwZUNvZGUoY29kZU5vZGU6IEhUTUxFbGVtZW50KTogRnVuY1tdIHtcbiAgICBjb25zdCBjb2RlOiBGdW5jW10gPSBbXTtcbiAgICBjb2RlTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1bmN0aW9uXCIpLmZvckVhY2goKGZ1bmNOb2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSBmdW5jTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICBpZiAoaXNIaWRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSBmdW5jTm9kZS5kYXRhc2V0O1xuICAgICAgICBjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZ1bmNOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9rZW5cIikuZm9yRWFjaCh0b2tlbk5vZGUgPT4ge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goKHRva2VuTm9kZSBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC50b2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9Ojoke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgY29kZS5wdXNoKHtuYW1lOiByZWFsbmFtZSwgdG9rZW5zfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0KGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIChub2RlIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBzY3JhcGVJbnB1dEFzSW50KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gc2NyYXBlSW5wdXQoaWQpO1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0QXNGbG9hdChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNjcmFwZUlucHV0KGlkKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkNCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJy4vY29uc3RzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRva2VuKFxuICAgIHRva2VuOiBzdHJpbmcsXG4gICAge1xuICAgICAgICBpc1RlbXBsYXRlID0gZmFsc2UsXG4gICAgICAgIGlzRXZlbnRhYmxlID0gdHJ1ZSxcbiAgICAgICAgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwsXG4gICAgfSA9IHt9KTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VuJyk7XG4gICAgbm9kZS5pZCA9IGB0b2tlbi0ke3V1aWQ0KCl9YDtcbiAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICBub2RlLmRhdGFzZXQuaXNUZW1wbGF0ZSA9IGlzVGVtcGxhdGUgPyAneWVzJyA6ICdubyc7XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aWNvblVybH0vJHt0b2tlbn0uc3ZnKWA7XG4gICAgaWYgKGlzRXZlbnRhYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgICAgICBzZXRUb2tlbkV2ZW50cyhub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHNldFRva2VuRXZlbnRzKG5vZGU6IEVsZW1lbnQpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2RHJhZ1N0YXJ0LCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZEcmFnRW5kLCBmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBldkRyYWdTdGFydChlKSB7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3Rva2VuJywgdGhpcy5kYXRhc2V0LnRva2VuKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCB0aGlzLmlkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXZEcmFnRW5kKGUpIHtcbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2tlbicpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVG9rZW5JbmZvIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0eXBlOiAnYWN0aW9uJyB8ICd2YWx1ZSc7XG4gICAgZG9jPzogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFRva2VuQ2F0ZWdvcnkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBUb2tlbkluZm9bXTtcbn07XG5cbmNvbnN0IFRPS0VOUzogVG9rZW5DYXRlZ29yeVtdID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdDT1VOVF8xJywgbGFiZWw6ICdPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfMicsIGxhYmVsOiAnVHdvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzUnLCBsYWJlbDogJ0ZpdmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfTUlOVVMnLCBsYWJlbDogJ01pbnVzIE9uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzInLCBsYWJlbDogJ0hhbGYnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV8zJywgbGFiZWw6ICdUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8yXzMnLCBsYWJlbDogJ1R3byB0aGlyZHMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV80JywgbGFiZWw6ICdRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV81JywgbGFiZWw6ICdGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0FuZ2xlcycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzE4MCcsIGxhYmVsOiAnMTgwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfOTAnLCBsYWJlbDogJzkwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNDUnLCBsYWJlbDogJzQ1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMzAnLCBsYWJlbDogJzMwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdNb2RpZmljYXRvcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfTVVMVCcsIGxhYmVsOiAnTXVsdGlwbGUgb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfQUREJywgbGFiZWw6ICdBZGRpdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01BWCcsIGxhYmVsOiAnU2Vjb25kIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01JTicsIGxhYmVsOiAnRmlyc3QgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV80JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV81JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1NUUk9LRV9USElDS19BREQnLCBsYWJlbDogJ1RoaWNrIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfU1VCJywgbGFiZWw6ICdUaGluIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Z1bmN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBUkdVTUVOVCcsIGxhYmVsOiAnQXJndW1lbnQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NBTExfRicsIGxhYmVsOiAnQ2FsbCBGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0NhbGwgRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9IJywgbGFiZWw6ICdDYWxsIEggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGFpbnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19MSU5FJywgbGFiZWw6ICdEcmF3IExpbmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQ0lSQ0xFJywgbGFiZWw6ICdEcmF3IENpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19TUVVBUkUnLCBsYWJlbDogJ0RyYXcgU3F1YXJlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdEcmF3IFRyaWFuZ2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzIgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV80JywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8yJywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvMiAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0N1cnNvcicsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGT1JXQVJEJywgbGFiZWw6ICdNb3ZlIGZvcndhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JPVEFURV9MRUZUJywgbGFiZWw6ICdSb3RhdGUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUk9UQVRFX1JJR0hUJywgbGFiZWw6ICdSb3RhdGUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFVkVSU0UnLCBsYWJlbDogJ1JldmVyc2UnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5JywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRva2Vucyhpc1RlbXBsYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2tlbnMnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgVE9LRU5TLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VucycsICdoaWRlJyk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlTmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmlubmVyVGV4dCA9IGNhdGVnb3J5LmxhYmVsO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXRlZ29yeU5vZGUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlTmFtZSk7XG5cbiAgICAgICAgY2F0ZWdvcnkudG9rZW5zLmZvckVhY2godG9rZW5JbmZvID0+IHtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbkluZm8ubmFtZSwge2lzVGVtcGxhdGV9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGUpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyVG9rZW4gfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB7IHJlbmRlclN0YXZlIH0gZnJvbSBcIi4vY29kZVwiO1xuaW1wb3J0IHsgcnVuLCBzY3JhcGVDb2RlIH0gZnJvbSBcIi4vcnVuXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlL2RvY3Muc2Nzc1wiO1xuXG5pbnRlcmZhY2UgVHV0QW5pbVBhcmFtcyB7XG4gICAgc3RhdmVzOiBzdHJpbmdbXSxcbiAgICBpdGVyYXRpb25zOiBudW1iZXIsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICB0b2tlbnM6IHN0cmluZ1tdLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbm9kZUlkOiBzdHJpbmcsXG59XG5cbmxldCBJQ09OU19VUkxfUFJFRklYID0gXCJcIjtcblxuY2xhc3MgVHV0QW5pbSB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIGl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuICAgICAgICB0aGlzLml0ZXJhdGlvbnMgPSBwYXJhbXMuaXRlcmF0aW9ucyB8fCAxO1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXMubm9kZUlkKTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKHBhcmFtcy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICB0aXRsZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRpdGxlXCIpO1xuICAgICAgICAgICAgdGl0bGVOb2RlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbWFnZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWltYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGltYWdlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgc3RhdmVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIHN0YXZlc05vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXN0YXZlc1wiKTtcbiAgICAgICAgICAgIHBhcmFtcy5zdGF2ZXMuZm9yRWFjaChmdWxsTGluZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxMaW5lTmFtZShmdWxsTGluZU5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVOb2RlID0gcmVuZGVyU3RhdmUoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdWZmaXgsXG4gICAgICAgICAgICAgICAgICAgIGlzRWRpdGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpY29uVXJsOiBJQ09OU19VUkxfUFJFRklYLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXZlc05vZGUuYXBwZW5kQ2hpbGQobGluZU5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc3RhdmVzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY29tbWVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29tbWVudE5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWNvbW1lbnRcIik7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY29tbWVudE5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJhck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYmFyTm9kZS5jbGFzc0xpc3QuYWRkKFwiZnJhY3QtYmFyXCIpO1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCLCqyBQUkVWXCI7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJwcmV2XCI7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS5kaXNhYmxlZCA9IHRoaXMucG9zaXRpb24gPD0gMDtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnByZXYuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgYmFyTm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiTkVYVCDCu1wiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwibmV4dFwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUuZGlzYWJsZWQgPSB0aGlzLnBvc2l0aW9uID49IHRoaXMudG9rZW5zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5uZXh0LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJpdGVyYXRpb25zXCI7XG4gICAgICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVyVGV4dCA9IFwiSXRlcmF0aW9uczpcIjtcbiAgICAgICAgICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGl0Tm9kZS50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgICAgICBpdE5vZGUudmFsdWUgPSB0aGlzLml0ZXJhdGlvbnMudG9GaXhlZCgpO1xuICAgICAgICAgICAgICAgIGl0Tm9kZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXROb2RlLm5hbWUgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKGl0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpdGVyYXRlVG9Qb3NpdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhcmFtcy5zdGFydDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICAgICAgICB0aGlzLm5leHRFeGVjdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbW1lbnQoKTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA+PSB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgICB0aGlzLm5leHRFeGVjdXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tbWVudCgpO1xuICAgICAgICB0aGlzLnJlbmRlckltYWdlKCk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KFwibmV4dFwiKS5kaXNhYmxlZCA9IHRoaXMucG9zaXRpb24gPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJwcmV2XCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldkV4ZWN1dGUoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiAtPSAxO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIm5leHRcIikuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJwcmV2XCIpLmRpc2FibGVkID0gdGhpcy5wb3NpdGlvbiA8PSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZElucHV0KG5hbWU6IHN0cmluZyk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPScke25hbWV9J11gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckltYWdlKCkge1xuICAgICAgICBjb25zdCBpbWFnZU5vZGUgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1pbWFnZVwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29kZSA9IHNjcmFwZUNvZGUodGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3Qtc3RhdmVzXCIpKTtcbiAgICAgICAgcnVuKGltYWdlTm9kZSwgY29kZSwgdGhpcy5pdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xpbmUsIHRva2VuXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tUHVzaFRva2VuKGxpbmUsIHRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2goY29tbWFuZC5zdWJzdHJpbmcoMSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfSU5DXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZXJhdGlvbnNJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9ERUNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlcmF0aW9uc0lucHV0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk5PUFwiOiBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKGAke2NvbW1hbmR9IG5vdCBmb3VuZGApOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2RXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21tYW5kcygpLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZFswXSAhPSBcIiFcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsaW5lXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdFRva2VuKGxpbmUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaChjb21tYW5kLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9JTkNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlcmF0aW9uc0lucHV0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0RFQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVyYXRpb25zSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbW1hbmRzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFtyYXdDb21tYW5kc10gPSBjb21tYW5kV2l0aENvbW1lbnQuc3BsaXQoXCIjXCIsIDEpO1xuICAgICAgICByZXR1cm4gcmF3Q29tbWFuZHMuc3BsaXQoXCIsXCIpLm1hcChyYXdDb21tYW5kID0+IHJhd0NvbW1hbmQudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRXaXRoQ29tbWVudCA9IHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb25dO1xuICAgICAgICBjb25zdCBbLCByYXdDb21tZW50XSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMik7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSByYXdDb21tZW50ID8gcmF3Q29tbWVudC50cmltKCkgOiBcIlwiO1xuICAgICAgICBjb25zdCBjb21tZW50Tm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWNvbW1lbnRcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbW1lbnROb2RlLmlubmVyVGV4dCA9IGNvbW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVyYXRpb25zSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0KFwiaXRlcmF0aW9uc1wiKS52YWx1ZSA9IHRoaXMuaXRlcmF0aW9ucy50b0ZpeGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb21QdXNoVG9rZW4oZnVsbExpbmVOYW1lOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zTm9kZSA9IHRoaXMuZmluZExpbmUoZnVsbExpbmVOYW1lKTtcbiAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gcmVuZGVyVG9rZW4odG9rZW4sIHtcbiAgICAgICAgICAgIGlzVGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICAgICAgaXNFdmVudGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgaWNvblVybDogSUNPTlNfVVJMX1BSRUZJWFxuICAgICAgICB9KTtcbiAgICAgICAgdG9rZW5zTm9kZS5hcHBlbmRDaGlsZCh0b2tlbk5vZGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlTGFzdFRva2VuKGZ1bGxMaW5lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc05vZGUgPSB0aGlzLmZpbmRMaW5lKGZ1bGxMaW5lTmFtZSk7XG4gICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQodG9rZW5zTm9kZS5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZExpbmUoZnVsbExpbmVOYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxMaW5lTmFtZShmdWxsTGluZU5hbWUpO1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAuZnVuY3Rpb25bZGF0YS1uYW1lPScke25hbWV9J11bZGF0YS1zdWZmaXg9JyR7c3VmZml4fSddIC5pbm5lci10b2tlbnNgO1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3BsaXRGdWxsTGluZU5hbWUoZnVsbExpbmVOYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBmdWxsTGluZU5hbWUuc3BsaXQoXCI6OlwiLCAyKTtcbiAgICAgICAgcmV0dXJuIFtuYW1lLCBzdWZmaXggfHwgXCJcIl07XG4gICAgfVxufVxuXG5jb25zdCBBTklNQVRJT05TX1BBUkFNUzogVHV0QW5pbVBhcmFtc1tdID0gW107XG5jb25zdCBDVVJSRU5UX0hSRUYgPSAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFuaW1hdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5wdXNoKHBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIHNldEljb25zVXJscygpIHtcbiAgICBjb25zdCBkaXJuYW1lSHJlZiA9IENVUlJFTlRfSFJFRi5zdWJzdHJpbmcoMCwgQ1VSUkVOVF9IUkVGLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICBJQ09OU19VUkxfUFJFRklYID0gYCR7ZGlybmFtZUhyZWZ9Li4vX2ltYWdlc2A7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbCgpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5mb3JFYWNoKHBhcmFtcyA9PiB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBUdXRBbmltKHBhcmFtcyk7XG4gICAgICAgIGFuaW1hdGlvbi5pbml0UmVuZGVyKHBhcmFtcyk7XG4gICAgICAgIGFuaW1hdGlvbi5pdGVyYXRlVG9Qb3NpdGlvbihwYXJhbXMpO1xuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBzZXRJY29uc1VybHMoKTtcbiAgICByZW5kZXJBbGwoKTtcbn0pO1xuXG4vLyBPTiBJTklUXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=