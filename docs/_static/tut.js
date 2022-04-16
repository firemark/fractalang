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
___CSS_LOADER_EXPORT___.push([module.id, ".tokens {\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.tokens.hide .token {\n  display: none;\n}\n.tokens > .label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n\n.token-span {\n  padding: 5px;\n  height: 50px;\n}\n.token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n.token-span.remove {\n  background-color: #D88;\n  border: 2px #922 dotted;\n  border-radius: 5px;\n  width: 50px;\n}\n.token-span.remove::before {\n  font-size: 24pt;\n  content: \"X\";\n}\n\n.fract-functions-list {\n  display: flex;\n  float: right;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-lines {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-lines > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-lines > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-lines > li > .outer-tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n}\n.fract-lines > li > .outer-tokens > .inner-tokens {\n  padding: 0 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-lines > li > .outer-tokens > .inner-tokens > * {\n  flex: 0 0 auto;\n}\n.fract-lines > li > .outer-tokens > .remove {\n  flex: 0 0 auto;\n}\n.fract-lines > li.hide {\n  display: none;\n}\n\n.fract-animation {\n  width: 100%;\n  border: 1px black solid;\n  border-radius: 5px;\n  margin: 5px 0;\n}\n.fract-animation label {\n  padding: 0 5px;\n}\n\n.fract-title {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px black solid;\n}\n\n.fract-bar > input[name=iterations] {\n  width: 30px;\n  text-align: center;\n}\n\n.fract-comment {\n  text-align: center;\n  font-style: italic;\n  height: 5em;\n  line-height: 1.25em;\n  vertical-align: middle;\n}\n\n.fract-image {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.fract-image > svg {\n  max-width: calc(100% - 20px);\n  height: 300px;\n}\n\n.fract-lines {\n  overflow: visible;\n}\n.fract-lines > li {\n  height: 80px;\n}\n.fract-lines > li .outer-tokens {\n  height: 100%;\n}\n.fract-lines > li .inner-tokens {\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/docs.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACCJ;ADCI;EACI,aAAA;ACCR;ADEI;EACI,eAAA;EACA,iBAAA;EACA,eAAA;ACAR;;ADIA;EACI,YAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;ACDJ;ADGI;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;ACDR;;ADKA;EACI,YAAA;EACA,YAAA;ACFJ;ADII;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;ACFR;ADIQ;EACI,eAAA;EACA,YAAA;ACFZ;ADMI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;ACJR;ADMQ;EACI,eAAA;EACA,YAAA;ACJZ;;AC5DA;EACI,aAAA;EACA,YAAA;AD+DJ;AC7DI;EACI,eAAA;AD+DR;AC5DI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EACA,eAAA;AD8DR;AC5DQ;EACI,sBAAA;AD8DZ;AC1DI;EACI,kBAAA;AD4DR;AC1DQ;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;AD4DZ;ACxDY;EACI,cAAA;AD0DhB;;ACpDA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,kBAAA;ADuDJ;ACrDI;EACI,cAAA;EACA,aAAA;ADuDR;ACrDQ;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;ADuDZ;ACpDQ;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;ADsDZ;ACpDY;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;ADsDhB;ACrDgB;EAAM,cAAA;ADwDtB;ACrDY;EAAW,cAAA;ADwDvB;ACrDQ;EACI,aAAA;ADuDZ;;AA3IA;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AA8IJ;AA5II;EACI,cAAA;AA8IR;;AA1IA;EACI,WAAA;EACA,kBAAA;EACA,8BAAA;AA6IJ;;AA1IA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,2BAAA;AA6IJ;;AAzII;EACI,WAAA;EACA,kBAAA;AA4IR;;AAxIA;EACI,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;AA2IJ;;AAxIA;EACI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AA2IJ;AA1II;EACI,4BAAA;EACA,aAAA;AA4IR;;AAxIA;EACI,iBAAA;AA2IJ;AA1II;EACI,YAAA;AA4IR;AA3IQ;EAAgB,YAAA;AA8IxB;AA7IQ;EAAgB,YAAA;AAgJxB","sourcesContent":[".tokens {\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide .token {\n        display: none;\n    }\n\n    > .label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n}\n\n.token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n}\n\n.token-span {\n    padding: 5px;\n    height: 50px;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n\n    &.remove {\n        background-color: #D88;\n        border: 2px #922 dotted;\n        border-radius: 5px;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"X\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\n.fract-animation {\n    width: 100%;\n    border: 1px black solid;\n    border-radius: 5px;\n    margin: 5px 0;\n\n    label {\n        padding: 0 5px;\n    }\n}\n\n.fract-title {\n    width: 100%;\n    text-align: center;\n    border-bottom: 1px black solid;\n}\n\n.fract-bar, .fract-comment {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px black solid;\n}\n\n.fract-bar {\n    > input[name=\"iterations\"] {\n        width: 30px;\n        text-align: center;\n    }\n}\n\n.fract-comment {\n    text-align: center;\n    font-style: italic;\n    height: 5em;\n    line-height: 1.25em;\n    vertical-align: middle;\n}\n\n.fract-image {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    > svg {\n        max-width: calc(100% - 20px);\n        height: 300px;\n    }\n}\n\n.fract-lines {\n    overflow: visible;\n    > li {\n        height: 80px;\n        .outer-tokens { height: 100%; }\n        .inner-tokens { height: 100%; }\n    }\n}\n",".fract-functions-list {\n    display: flex;\n    float: right;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-lines {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .outer-tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n\n            > .inner-tokens {\n                padding: 0 5px;\n                flex: 1 1 auto;\n                display: flex;\n                align-items: center;\n                overflow-x: scroll;\n                overflow-y: hidden;\n                > * { flex: 0 0 auto; }\n            }\n\n            > .remove {flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
        var angle = -this.eval(context).value;
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
        console.log(counter, size);
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
/* harmony export */   "renderFunction": () => (/* binding */ renderFunction)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/web/tokens.ts");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./src/web/run.ts");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./src/parser.ts");



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
    _parser__WEBPACK_IMPORTED_MODULE_2__.PROCEDURES.concat(_parser__WEBPACK_IMPORTED_MODULE_2__.DYNAMIC_ARGS).forEach(function (name) {
        functionsNode.appendChild(renderBarOfFunctions(name));
    });
}
function renderBarOfFunctions(name) {
    var node = document.createElement("li");
    node.classList.add("dropdown");
    var baseFuncNode = renderAddFunction("span", name);
    var barNode = document.createElement("ul");
    barNode.classList.add("dropdown-content");
    _parser__WEBPACK_IMPORTED_MODULE_2__.SUFFIXES.forEach(function (suffix) {
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
    node.style.backgroundImage = "url(".concat("", "icons/").concat(realName, ".svg)");
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
    code.forEach(function (line) {
        container.appendChild(renderFunction(line));
    });
}
function renderFunction(_a) {
    var name = _a.name, _b = _a.suffix, suffix = _b === void 0 ? "" : _b, _c = _a.tokens, tokens = _c === void 0 ? [] : _c, _d = _a.isEditable, isEditable = _d === void 0 ? true : _d;
    var node = document.createElement("li");
    node.classList.add("function");
    node.dataset.name = name;
    node.dataset.suffix = suffix;
    node.appendChild(renderName(name, suffix));
    node.appendChild(renderTokens(tokens, { isEditable: isEditable }));
    return node;
}
function showOrHideOrAddFunction(name, suffix) {
    if (suffix === void 0) { suffix = ""; }
    var codeNode = document.getElementById("code");
    var funcNode = codeNode.querySelector(".function[data-name=\"".concat(name, "\"][data-suffix=\"").concat(suffix, "\"]"));
    if (!funcNode) {
        codeNode.appendChild(renderFunction({ name: name, suffix: suffix, tokens: [] }));
    }
    else {
        funcNode.classList.toggle("hide");
    }
}
function renderName(name, suffix) {
    var node = document.createElement("span");
    node.classList.add("name");
    var realname = suffix ? "".concat(name, "_").concat(suffix) : name;
    node.style.backgroundImage = "url(".concat("", "icons/CALL_").concat(realname, ".svg)");
    return node;
}
function renderTokens(tokens, _a) {
    var _b = _a.isEditable, isEditable = _b === void 0 ? true : _b;
    var tokensNode = document.createElement("div");
    tokensNode.classList.add("outer-tokens");
    var node = document.createElement("div");
    node.classList.add("inner-tokens");
    if (isEditable) {
        node.appendChild(renderTokenSpan());
    }
    tokens.forEach(function (token) {
        node.appendChild((0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token));
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function renderToken(token, isTemplate, isEventable) {
    if (isTemplate === void 0) { isTemplate = false; }
    if (isEventable === void 0) { isEventable = false; }
    var node = document.createElement('span');
    node.classList.add('token');
    node.setAttribute('draggable', 'true');
    node.id = "token-".concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());
    node.dataset.token = token;
    node.dataset.isTemplate = isTemplate ? 'yes' : 'no';
    //node.innerText = token;
    node.style.backgroundImage = "url(".concat("", "icons/").concat(token, ".svg)");
    setTokenEvents(node);
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
            categoryNode.appendChild(renderToken(tokenInfo.name, isTemplate));
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
            var linesNode_1 = document.createElement("ul");
            linesNode_1.classList.add("fract-lines");
            params.lines.forEach(function (fullLineName) {
                var _a = _this.splitFullLineName(fullLineName), name = _a[0], suffix = _a[1];
                var lineNode = (0,_code__WEBPACK_IMPORTED_MODULE_1__.renderFunction)({ name: name, suffix: suffix, isEditable: false });
                linesNode_1.appendChild(lineNode);
            });
            this.node.appendChild(linesNode_1);
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
        var code = (0,_run__WEBPACK_IMPORTED_MODULE_2__.scrapeCode)(this.node.querySelector(".fract-lines"));
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
        var tokenNode = (0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token, false, false);
        tokensNode.appendChild(tokenNode);
    };
    TutAnim.prototype.removeLastToken = function (fullLineName) {
        var tokensNode = this.findLine(fullLineName);
        tokensNode.removeChild(tokensNode.lastChild);
    };
    TutAnim.prototype.findLine = function (fullLineName) {
        var _a = this.splitFullLineName(fullLineName), name = _a[0], suffix = _a[1];
        var query = ".function[data-name='".concat(name, "'] .inner-tokens");
        return this.node.querySelector(query);
    };
    TutAnim.prototype.splitFullLineName = function (fullLineName) {
        var _a = fullLineName.split("::", 1), name = _a[0], suffix = _a[1];
        return [name, suffix || ""];
    };
    return TutAnim;
}());
var ANIMATIONS_PARAMS = [];
var CURRENT_HREF = document.currentScript.src;
function makeAnimation(params) {
    ANIMATIONS_PARAMS.push(params);
}
function setBase() {
    var dirnameHref = CURRENT_HREF.substring(0, CURRENT_HREF.lastIndexOf('/') + 1);
    var baseNode = document.createElement("base");
    baseNode.href = dirnameHref;
    document.head.appendChild(baseNode);
}
function renderAll() {
    ANIMATIONS_PARAMS.forEach(function (params) {
        var animation = new TutAnim(params);
        animation.initRender(params);
        animation.iterateToPosition(params);
    });
}
window.addEventListener('load', function (event) {
    setBase();
    renderAll();
});
// ON INIT

})();

TUT = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7SUFDWCxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxrREFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztJQUMxRCxXQUFXLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxvREFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztJQUM5RCxXQUFXLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxvREFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztJQUM5RCxhQUFhLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxzREFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztJQUNsRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMs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Q0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsU0FBUztJQUNkLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxnQkFBTTtRQUM1QixJQUFNLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGVBQUs7SUFDakMsT0FBTyxFQUFFLENBQUM7SUFDVixTQUFTLEVBQUUsQ0FBQztBQUNoQixDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3R5bGUvZG9jcy5zY3NzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3N0eWxlL2RvY3Muc2Nzcz9iZDJjIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9hY3Rpb25zLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvYmFzZS50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L2NvbG9ycy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L29wcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L3N0cm9rZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC92YWx1ZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2N1cnNvci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvZXhlYy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvZmlndXJlcy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvcGFyc2VyLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9zdmcudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2NvZGUudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9ydW4udHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RVVC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvZG9jcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2tlbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50b2tlbnMuaGlkZSAudG9rZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRva2VucyA+IC5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRva2VuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi50b2tlbi50b2tlbi1pbmxpbmUge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLnRva2VuLXNwYW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4udG9rZW4tc3Bhbi5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi50b2tlbi1zcGFuLm92ZXI6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxufVxcbi50b2tlbi1zcGFuLnJlbW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDg4O1xcbiAgYm9yZGVyOiAycHggIzkyMiBkb3R0ZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLnRva2VuLXNwYW4ucmVtb3ZlOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB0O1xcbiAgY29udGVudDogXFxcIlhcXFwiO1xcbn1cXG5cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0ID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLnRva2VuLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC50b2tlbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mcmFjdC1saW5lcyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5mcmFjdC1saW5lcyA+IGxpIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZyYWN0LWxpbmVzID4gbGkgPiAubmFtZSB7XFxuICBmbGV4OiAwIDEgNTBweDtcXG4gIGZvbnQtc2l6ZTogMTVwdDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbi5mcmFjdC1saW5lcyA+IGxpID4gLm91dGVyLXRva2VucyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxufVxcbi5mcmFjdC1saW5lcyA+IGxpID4gLm91dGVyLXRva2VucyA+IC5pbm5lci10b2tlbnMge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4uZnJhY3QtbGluZXMgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAuaW5uZXItdG9rZW5zID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuLmZyYWN0LWxpbmVzID4gbGkgPiAub3V0ZXItdG9rZW5zID4gLnJlbW92ZSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuLmZyYWN0LWxpbmVzID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZnJhY3QtYW5pbWF0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG4uZnJhY3QtYW5pbWF0aW9uIGxhYmVsIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIgPiBpbnB1dFtuYW1lPWl0ZXJhdGlvbnNdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBoZWlnaHQ6IDVlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZnJhY3QtaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZnJhY3QtaW1hZ2UgPiBzdmcge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5mcmFjdC1saW5lcyB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLmZyYWN0LWxpbmVzID4gbGkge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG4uZnJhY3QtbGluZXMgPiBsaSAub3V0ZXItdG9rZW5zIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmZyYWN0LWxpbmVzID4gbGkgLmlubmVyLXRva2VucyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b2tlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2RvY3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvZGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRFI7O0FES0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNGUjtBRElRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNGWjtBRE1JO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0paOztBQzVEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEK0RKO0FDN0RJO0VBQ0ksZUFBQTtBRCtEUjtBQzVESTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQ4RFI7QUM1RFE7RUFDSSxzQkFBQTtBRDhEWjtBQzFESTtFQUNJLGtCQUFBO0FENERSO0FDMURRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUQ0RFo7QUN4RFk7RUFDSSxjQUFBO0FEMERoQjs7QUNwREE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FEdURKO0FDckRJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUR1RFI7QUNyRFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBRHVEWjtBQ3BEUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QURzRFo7QUNwRFk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURzRGhCO0FDckRnQjtFQUFNLGNBQUE7QUR3RHRCO0FDckRZO0VBQVcsY0FBQTtBRHdEdkI7QUNyRFE7RUFDSSxhQUFBO0FEdURaOztBQTNJQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQThJSjtBQTVJSTtFQUNJLGNBQUE7QUE4SVI7O0FBMUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUE2SUo7O0FBMUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQTZJSjs7QUF6SUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUE0SVI7O0FBeElBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBMklKOztBQXhJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTJJSjtBQTFJSTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQTRJUjs7QUF4SUE7RUFDSSxpQkFBQTtBQTJJSjtBQTFJSTtFQUNJLFlBQUE7QUE0SVI7QUEzSVE7RUFBZ0IsWUFBQTtBQThJeEI7QUE3SVE7RUFBZ0IsWUFBQTtBQWdKeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRva2VucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgJi5oaWRlIC50b2tlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgID4gLmxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi50b2tlbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgICAmLnRva2VuLWlubGluZSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICB9XFxufVxcblxcbi50b2tlbi1zcGFuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICYub3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgYm9yZGVyOiAycHggIzk5OSBkb3R0ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYucmVtb3ZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEODg7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTIyIGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIlhcXFwiO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi90b2tlbnMnO1xcbkBpbXBvcnQgJy4vY29kZSc7XFxuXFxuLmZyYWN0LWFuaW1hdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwO1xcblxcbiAgICBsYWJlbCB7XFxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdGl0bGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIsIC5mcmFjdC1jb21tZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XFxufVxcblxcbi5mcmFjdC1iYXIge1xcbiAgICA+IGlucHV0W25hbWU9XFxcIml0ZXJhdGlvbnNcXFwiXSB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtY29tbWVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICA+IHN2ZyB7XFxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtbGluZXMge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgPiBsaSB7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICAub3V0ZXItdG9rZW5zIHsgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgICAuaW5uZXItdG9rZW5zIHsgaGVpZ2h0OiAxMDAlOyB9XFxuICAgIH1cXG59XFxuXCIsXCIuZnJhY3QtZnVuY3Rpb25zLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC50b2tlbi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93biB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtbGluZXMge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgPiBsaSB7XFxuICAgICAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICA+IC5uYW1lIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDEgNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA+IC5vdXRlci10b2tlbnMgIHtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuXFxuICAgICAgICAgICAgPiAuaW5uZXItdG9rZW5zIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgPiAucmVtb3ZlIHtmbGV4OiAwIDAgYXV0bzsgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaWRlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvY3Muc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgTm9kZSwgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlLCBBY3Rpb25SZXN1bHQsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGltcGxlbWVudHMgTm9kZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3QgbG9jYWxzID0gYWN0aW9ucy5tYXAoKCkgPT4gKHt9KSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTspIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzLmF0KGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuYXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGlmdCwgcmV2ZXJzZSB9ID0gYWN0aW9uLmV4ZWMoY29udGV4dCwgbG9jYWwpO1xuICAgICAgICAgICAgdGhpcy5leGVjUmV2ZXJzZShpbmRleCwgcmV2ZXJzZSA/IE1hdGgucm91bmQocmV2ZXJzZSkgOiAwLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGluZGV4ICs9IHNoaWZ0ID8gTWF0aC5yb3VuZChzaGlmdCkgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2Uoc3RvcEluZGV4OiBudW1iZXIsIHJldmVyc2U6IG51bWJlciwgY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBpZiAocmV2ZXJzZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGNvbnN0IHN0YXJ0UmVzZXJ2ZSA9IE1hdGgubWF4KDAsIHN0b3BJbmRleCAtIHJldmVyc2UpO1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gc3RvcEluZGV4OyBpbmRleCA+PSBzdGFydFJlc2VydmU7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGFjdGlvbnMuYXQoaW5kZXgpLmV4ZWNSZXZlcnNlKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2l6ZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBOb2RlV2l0aFZhbHVlIGV4dGVuZHMgQWN0aW9uTm9kZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZTogVmFsdWVOb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy52YWx1ZSwgY29udGV4dCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICBpZiAoIShmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJndW1lbnQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0LmNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQpO1xuICAgICAgICBmdW5jLmV4ZWMobmV3Q29udGV4dCk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICBpZiAoIShmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJndW1lbnQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0LmNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQpO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBmdW5jLnNpemUoKSAtIDE7XG4gICAgICAgIGZ1bmMuZXhlY1JldmVyc2UobGFzdEluZGV4LCBsYXN0SW5kZXgsIG5ld0NvbnRleHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdMaW5lKGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3Q2lyY2xlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd0NpcmNsZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3U3F1YXJlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd1NxdWFyZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3VHJpYW5nbGUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3VHJpYW5nbGUoc2l6ZSwgY29sb3IpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0FyY0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBwcml2YXRlIHJhdGlvOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXRpbywgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3QXJjTGluZSh0aGlzLnJhdGlvLCBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBjb250ZXh0LmdldEN1cnNvcigpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcndhcmQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUxlZnQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlUmlnaHQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtyZXZlcnNlOiBpdGVyYXRpb25zfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXBsYXkgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbG9jYWwuY291bnRlciB8fCAxO1xuICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yb3VuZCh0aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyLCBzaXplKTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbC5jb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4ge3NoaWZ0OiAtMX07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblJlc3VsdCB7XG4gICAgc2hpZnQ/OiBudW1iZXI7XG4gICAgcmV2ZXJzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVmFsdWUodmFsdWVOb2RlczogVmFsdWVOb2RlW10sIGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IGluaXQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgY29sb3I6IGNvbnRleHQuYXJndW1lbnQuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiAoYTogbnVtYmVyLCBiOm51bWJlcikgPT4gYSAqIGIsXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVOb2Rlcy5yZWR1Y2UocGFydEV2YWwuYmluZCh0aGlzLCBjb250ZXh0KSwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRFdmFsKGNvbnRleHQ6IENvbnRleHQsIGFjYzogRXZhbHVlZFZhbHVlLCBub2RlOiBWYWx1ZU5vZGUpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbm9kZS5ldmFsKGNvbnRleHQpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ld1ZhbHVlLnZhbHVlVHJhbnNmb3JtZXIgfHwgYWNjLnZhbHVlVHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm0oYWNjLnZhbHVlLCBuZXdWYWx1ZS52YWx1ZSkgOiBhY2MudmFsdWUsXG4gICAgICAgIGNvbG9yOiBuZXdWYWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuY29sb3IgOiBhY2MuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBuZXdWYWx1ZS5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlU3R5bGUgOiBhY2Muc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgOiBhY2Muc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiB0cmFuc2Zvcm0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1heENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAxLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pbkNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNoaWZ0Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBsZXQgY29sb3IgPSAoY29udGV4dC5hcmd1bWVudC5jb2xvciArIHRoaXMuc2hpZnQpICUgMS4wO1xuICAgICAgICBpZiAoY29sb3IgPCAwLjApIHtcbiAgICAgICAgICAgIGNvbG9yICs9IDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbG9yfTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNdWx0T3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICogYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSArIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgLSBiIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgU3Ryb2tlU3R5bGUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0U3Ryb2tlU3R5bGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc3Ryb2tlOiBTdHJva2VTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cm9rZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyBzdHJva2VTdHlsZTogdGhpcy5zdHJva2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNoaWZ0U3Ryb2tlVGhpY2tuZXNzIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGhpY2tuZXNzID0gY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MgKyB0aGlzLnNoaWZ0O1xuICAgICAgICByZXR1cm4geyBzdHJva2VUaGlja25lc3MgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVkQW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVkQW5nbGUgPSBhbmdsZSAvIDM2MC4wO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMubm9ybWFsaXplZEFuZ2xlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZXIgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogY29udGV4dC5hcmd1bWVudC52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0FyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gY29udGV4dC5maW5kRnVuY3Rpb24odGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlTm9kZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcblxuZXhwb3J0IHR5cGUgU3Ryb2tlU3R5bGUgPSBcInNvbGlkXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWVkVmFsdWUge1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIGNvbG9yPzogbnVtYmVyO1xuICAgIHN0cm9rZVN0eWxlPzogU3Ryb2tlU3R5bGU7XG4gICAgc3Ryb2tlVGhpY2tuZXNzPzogbnVtYmVyO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHRDZmcge1xuICAgIG1heEl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIGN1cnNvcjogQ3Vyc29yO1xuICAgIGJhZzogYW55O1xuXG4gICAgY29uc3RydWN0b3Ioe21heEl0ZXJhdGlvbiwgYmFnLCBjdXJzb3J9KSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgdGhpcy5iYWcgPSBiYWc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcHVibGljIGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHB1YmxpYyBhcmd1bWVudDogRXZhbHVlZFZhbHVlO1xuICAgIHByaXZhdGUgY2ZnOiBDb250ZXh0Q2ZnO1xuXG4gICAgY29uc3RydWN0b3Ioe2NmZywgYXJndW1lbnQsIGl0ZXJhdGlvbiA9IDB9KSB7XG4gICAgICAgIHRoaXMuY2ZnID0gY2ZnO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uID0gaXRlcmF0aW9uO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9uID0gdGhpcy5pdGVyYXRpb247XG4gICAgICAgIGlmIChpdGVyYXRpb24gPj0gdGhpcy5jZmcubWF4SXRlcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWVzVG9GaW5kID0gW25hbWVdO1xuICAgICAgICBpZiAoaXRlcmF0aW9uICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpFVkVOYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlcmF0aW9uID09IHRoaXMuY2ZnLm1heEl0ZXJhdGlvbiAtIDEpIHtcbiAgICAgICAgICAgIG5hbWVzVG9GaW5kLnVuc2hpZnQoYCR7bmFtZX06OkVORGApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RGdW5jTmFtZSA9IG5hbWVzVG9GaW5kLmZpbmQobmFtZSA9PiB0aGlzLmNmZy5iYWdbbmFtZV0pO1xuICAgICAgICByZXR1cm4gZXhpc3RGdW5jTmFtZSA/IHRoaXMuY2ZnLmJhZ1tleGlzdEZ1bmNOYW1lXSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yKCk6IEN1cnNvciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNmZy5jdXJzb3I7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudDogRXZhbHVlZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh7XG4gICAgICAgICAgICBjZmc6IHRoaXMuY2ZnLFxuICAgICAgICAgICAgYXJndW1lbnQ6IG5ld0FyZ3VtZW50LFxuICAgICAgICAgICAgaXRlcmF0aW9uOiB0aGlzLml0ZXJhdGlvbiArIDEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpZ3VyZSwgTGluZSwgU3F1YXJlLCBUcmlhbmdsZSwgQ2lyY2xlLCBBcmMgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94IHtcbiAgICBtaW46IFtudW1iZXIsIG51bWJlcl07XG4gICAgbWF4OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIHtcbiAgICBzdHJva2VTaXplOiBudW1iZXI7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG4gICAgZmlndXJlczogRmlndXJlW107XG4gICAgYm94OiBCb3g7XG4gICAgZmlyc3RDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIHN0cm9rZVNpemUgPSAxLFxuICAgICAgICBkaXN0YW5jZU11bHRpcGxlciA9IDEwMCxcbiAgICAgICAgZmlyc3RDb2xvciA9IFwiIzAwMDAwMFwiLFxuICAgICAgICBzZWNvbmRDb2xvciA9IFwiI0RDMTQzQ1wiLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0cm9rZVNpemUgPSBzdHJva2VTaXplO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyID0gZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgICAgIHRoaXMuYm94ID0ge1xuICAgICAgICAgICAgbWluOiBbMC4wLCAwLjBdLFxuICAgICAgICAgICAgbWF4OiBbMC4wLCAwLjBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpcnN0Q29sb3IgPSB0aGlzLmhleFRvQ29sb3IoZmlyc3RDb2xvcik7XG4gICAgICAgIHRoaXMuc2Vjb25kQ29sb3IgPSB0aGlzLmhleFRvQ29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGV4VG9Db2xvcihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDUsIDIpLCAxNik7XG4gICAgICAgIHJldHVybiBbciwgZywgYl07XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5hbmdsZSArIGFuZ2xlKSAlIDEuMDtcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IGFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBMaW5lKFtvbGRfeCwgb2xkX3ldLCBbbmV3X3gsIG5ld195XSwgb3BzKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzaGlmdCA9IHRoaXMuYW5nbGUgLSAwLjI1O1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNoaWZ0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcykpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuX2ZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd0NpcmNsZShyYWRpdXM6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7IGZpbGw6IHRoaXMuY2FsY0NvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgcmFkaXVzLCBvcHMpKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBTcXVhcmUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgb3BzKSk7XG4gICAgfVxuXG4gICAgZHJhd1RyaWFuZ2xlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBUcmlhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBvcHMpKTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvblswXSArPSB4ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzFdICs9IHkgKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgfVxuXG4gICAgYWRkTWFyZ2luKG1hcmdpbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSAtPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1pblsxXSAtPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSArPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSArPSBtYXJnaW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlQm94KFt4LCB5XTogbnVtYmVyW10sIHNpemUgPSAwKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblswXSwgeCAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMF0sIHggKyBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzFdLCB5IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFsxXSwgeSArIHNpemUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY0NvbG9yKGNvbG9yOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYSA9IHRoaXMuZmlyc3RDb2xvcjtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLnNlY29uZENvbG9yO1xuICAgICAgICBjb25zdCBhUmF0aW8gPSBNYXRoLmFicyhjb2xvciAtIDAuNSkgKiAyO1xuICAgICAgICBjb25zdCBiUmF0aW8gPSAxLjAgLSBhUmF0aW87XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKGNhWzBdICogYVJhdGlvICsgY2JbMF0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBnID0gTWF0aC50cnVuYyhjYVsxXSAqIGFSYXRpbyArIGNiWzFdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgudHJ1bmMoY2FbMl0gKiBhUmF0aW8gKyBjYlsyXSAqIGJSYXRpbyk7XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IHBhcnNlTGluZSwgcGFyc2VSYXdUb2tlbnMgfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7IENvbnRleHRDZmcsIENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuYyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRva2Vuczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjKHZhbHVlQXJndW1lbnQ6IG51bWJlciwgbWF4SXRlcmF0aW9uOiBudW1iZXIsIGZ1bmN0aW9uczogRnVuY1tdLCBjdXJzb3JDZmcgPSB7fSk6IEN1cnNvciB7XG4gICAgY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihjdXJzb3JDZmcpO1xuICAgIGNvbnN0IGJhZyA9IHt9O1xuICAgIGZ1bmN0aW9ucy5mb3JFYWNoKCh7bmFtZSwgdG9rZW5zOiByYXdUb2tlbnN9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vucyk7XG4gICAgICAgIGJhZ1tuYW1lXSA9IHBhcnNlTGluZShuYW1lLCB0b2tlbnMpO1xuICAgIH0pO1xuICAgIGNvbnN0IGNmZyA9IG5ldyBDb250ZXh0Q2ZnKHsgbWF4SXRlcmF0aW9uLCBiYWcsIGN1cnNvcjogY3Vyc29yIH0pO1xuICAgIGNvbnN0IGFyZ3VtZW50ID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVBcmd1bWVudCxcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLjAsXG4gICAgICAgIGNvbG9yOiAwLjAsXG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQoeyBjZmcsIGFyZ3VtZW50IH0pO1xuXG4gICAgc3RhcnRFeGVjKGNvbnRleHQsIGJhZyk7XG5cbiAgICByZXR1cm4gY3Vyc29yO1xufVxuXG5mdW5jdGlvbiBzdGFydEV4ZWMoY29udGV4dDogQ29udGV4dCwgYmFnKSB7XG4gICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKFwiU1RBUlRcIikgfHwgY29udGV4dC5maW5kRnVuY3Rpb24oXCJGXCIpO1xuICAgIGlmIChmdW5jKSB7XG4gICAgICAgIGZ1bmMuZXhlYyhjb250ZXh0KTtcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHJva2U6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHtjb2xvciA9IFwiYmxhY2tcIiwgc3Ryb2tlID0gMX0gPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBzdHJva2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNsb3NlOiBib29sZWFuO1xuICAgIHNoaWZ0OiBudW1iZXI7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIGNsb3NlID0gZmFsc2UsIHNoaWZ0ID0gMC4wLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5jbG9zZSA9IGNsb3NlO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3F1YXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgb3JpZW50YXRpb24sIHNpemUsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlICB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBzdHJva2U6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgc3Ryb2tlID0gMH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbiwgdG9rZW5zLCBBY3Rpb25DYiwgVmFsdWVDYiB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHsgTm9kZSwgQWN0aW9uTm9kZSwgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vYXN0L2FjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfQVJHUyA9IFtcIkRJQU1PTkRcIiwgXCJJTlZfVFJJQU5HTEVcIl07XG5leHBvcnQgY29uc3QgUFJPQ0VEVVJFUyA9IFtcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbmV4cG9ydCBjb25zdCBTVUZGSVhFUyA9IFtcIkVORFwiLCBcIkVWRU5cIiwgXCJPRERcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnM6IHN0cmluZ1tdKTogVG9rZW5bXSB7XG4gICAgcmV0dXJuIHJhd1Rva2Vucy5tYXAocmF3ID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbcmF3XTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgYFBhcnNpbmcgZXJyb3I6ICR7cmF3fSBpcyBub3QgdW5kZWZpbmVkIGFzIHRva2VuLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0pO1xufVxuXG5jbGFzcyBBY3Rpb25UbXAge1xuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Ob2RlW107XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IFZhbHVlTm9kZVtdO1xuICAgIHByaXZhdGUgdG9rZW46IFRva2VuIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0QWN0aW9uVG9rZW4odG9rZW46IFRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXNMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0FjdGlvblNldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW4gIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaEFjdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy50b2tlbi5mYWN0b3J5IGFzIEFjdGlvbkNiO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmYWN0b3J5KHRoaXMudmFsdWVzKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5zZXJ0VmFsdWUodmFsdWU6IFZhbHVlTm9kZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZShuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSkge1xuICAgIGlmIChEWU5BTUlDX0FSR1MuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVGdW5jKG5hbWUsIHRva2Vucyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmVGdW5jKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHRtcCA9IG5ldyBBY3Rpb25UbXAoKTtcbiAgICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0bXAuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcGFyc2VWYWx1ZSh0b2tlbiwgdG1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlQWN0aW9uKHRva2VuLCB0bXApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0bXAucHVzaEFjdGlvbigpOyAvLyBwdXNoIGxhc3QgdG9rZW4uXG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKG5hbWUsIHRtcC5nZXRBY3Rpb25zKCkpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnM6IFRva2VuW10pOiBWYWx1ZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gYWN0aW9ucyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5pc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gZHluYW1pYyBlbGVtZW50cyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWN0aW9uKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAoIXRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaXMgbm90IGFuIGFjdGlvblwiO1xuICAgIH1cbiAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xuICAgIGlmICh0b2tlbi52YWx1ZVNpemUgPT09IDApIHtcbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGNvbnN0IHsgdmFsdWVTaXplIH0gPSB0bXAuZ2V0QWN0aW9uVG9rZW4oKTtcbiAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgaWYgKHZhbHVlU2l6ZSAhPT0gXCIrXCIgJiYgdG1wLmdldFZhbHVlc0xlbmd0aCgpIDwgdmFsdWVTaXplKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IHRva2VuIGhhcyBub3QgZW5vdWdoIHZhbHVlc1wiO1xuICAgICAgICB9XG4gICAgICAgIHRtcC5wdXNoQWN0aW9uKCk7XG4gICAgICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICB0bXAuaW5zZXJ0VmFsdWUoZmFjdG9yeSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IEZpZ3VyZSwgQ2lyY2xlLCBBcmMsIFNxdWFyZSwgVHJpYW5nbGUsIExpbmUgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yOiBDdXJzb3IpIHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInN2Z1wiKTtcbiAgICBjb25zdCBbbWluX3gsIG1pbl95XSA9IGN1cnNvci5ib3gubWluO1xuICAgIGNvbnN0IFttYXhfeCwgbWF4X3ldID0gY3Vyc29yLmJveC5tYXg7XG4gICAgY29uc3Qgd2lkdGggPSBtYXhfeCAtIG1pbl94O1xuICAgIGNvbnN0IGhlaWdodCA9IG1heF95IC0gbWluX3k7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYCR7bWluX3h9ICR7bWluX3l9ICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICAgIGN1cnNvci5maWd1cmVzLmZvckVhY2goZmlndXJlID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRvU3ZnKGRvY3VtZW50LCBmaWd1cmUpO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN2Zztcbn1cblxuY29uc3QgU1FSVDMgPSBNYXRoLnNxcnQoMyk7XG5jb25zdCBTUVJUM0gyID0gTWF0aC5zcXJ0KDMpIC8gMjtcbmNvbnN0IEgyID0gMSAvIDI7XG5cbmZ1bmN0aW9uIHRvU3ZnKGRvY3VtZW50LCBmaWd1cmU6IEZpZ3VyZSkge1xuICAgIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBMaW5lKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcImxpbmVcIik7XG4gICAgICAgIGNvbnN0IFt4MSwgeTFdID0gZmlndXJlLmZpcnN0UG9pbnQ7XG4gICAgICAgIGNvbnN0IFt4MiwgeTJdID0gZmlndXJlLnNlY29uZFBvaW50O1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIngxXCIsIHgxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB5MSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDJcIiwgeDIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkyXCIsIHkyKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgZmlndXJlLmNvbG9yKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZmlndXJlLnN0cm9rZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcImNpcmNsZVwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN4XCIsIHgpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN5XCIsIHkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInJcIiwgZmlndXJlLnJhZGl1cyk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBBcmMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCByID0gZmlndXJlLnJhZGl1cztcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IGZpZ3VyZS5zaGlmdCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChmaWd1cmUuc2hpZnQgKyBmaWd1cmUucmF0aW8pICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3ggPSB4ICsgciAqIE1hdGguY29zKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBzdGFydF95ID0geSArIHIgKiBNYXRoLnNpbihzdGFydEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3ggPSB4ICsgciAqIE1hdGguY29zKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3kgPSB5ICsgciAqIE1hdGguc2luKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZmxhZzEgPSBNYXRoLmFicyhmaWd1cmUucmF0aW8pIDw9IDAuNSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGNvbnN0IGZsYWcyID0gZmlndXJlLnJhdGlvIDw9IDAuMCA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGxldCBwYXRoID0gYE0gJHtzdGFydF94fSAke3N0YXJ0X3l9YDtcbiAgICAgICAgcGF0aCArPSBgIEEgJHtyfSAke3J9IDAgJHtmbGFnMX0gJHtmbGFnMn0gJHtlbmRfeH0gJHtlbmRfeX1gO1xuICAgICAgICBpZiAoZmlndXJlLmNsb3NlKSB7XG4gICAgICAgICAgICBwYXRoICs9IGBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBTcXVhcmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgUyA9IGZpZ3VyZS5zaXplIC8gMjtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4IC0gUyAqIGR4IC0gUyAqIGR5fSAke3kgKyBTICogZHggLSBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gUyAqIGR4ICsgUyAqIGR5fSAke3kgLSBTICogZHggLSBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgUyAqIGR4ICsgUyAqIGR5fSAke3kgLSBTICogZHggKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgUyAqIGR4IC0gUyAqIGR5fSAke3kgKyBTICogZHggKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBUcmlhbmdsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemU7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCArIFMgKiBkeH0gJHt5ICsgUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgKyBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFNRUlQzSDIgKiBTICogZHkgLSBIMiAqIFMgKiBkeH0gJHt5IC0gSDIgKiBTICogZHkgLSBTUVJUM0gyICogUyAqIGR4fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpIHtcbiAgICBsZXQgc3R5bGUgPSBgZmlsbDogJHtmaWd1cmUuZmlsbH07YDtcbiAgICBpZiAoZmlndXJlLnN0cm9rZSA+IDApIHtcbiAgICAgICAgc3R5bGUgKz0gYHN0cm9rZS13aWR0aDogJHtmaWd1cmUuc3Ryb2tlfTtgXG4gICAgICAgIHN0eWxlICs9IGBzdHJva2U6ICR7ZmlndXJlLmNvbG9yfWA7XG4gICAgfVxuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgc3R5bGUpO1xufVxuIiwiaW1wb3J0IHsgTm9kZSwgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IE11bHRpcGxlciwgQW5nbGUsIEFyZ3VtZW50LCBEeW5hbWljQXJndW1lbnQgfSBmcm9tIFwiLi9hc3QvdmFsdWVzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FzdC9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSBcIi4vYXN0L2NvbG9yc1wiO1xuaW1wb3J0ICogYXMgc3Ryb2tlcyBmcm9tIFwiLi9hc3Qvc3Ryb2tlc1wiO1xuaW1wb3J0ICogYXMgb3BzIGZyb20gXCIuL2FzdC9vcHNcIjtcblxuZXhwb3J0IHR5cGUgQWN0aW9uQ2IgPSAodmFsdWVzOiBWYWx1ZU5vZGVbXSkgPT4gQWN0aW9uTm9kZTtcbmV4cG9ydCB0eXBlIFZhbHVlQ2IgPSAoKSA9PiBWYWx1ZU5vZGU7XG5leHBvcnQgdHlwZSBWYWx1ZVNpemUgPSBcIitcIiB8IG51bWJlcjtcblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICBpc0FjdGlvbjogYm9vbGVhbjtcbiAgICBpc0R5bmFtaWM6IGJvb2xlYW47XG4gICAgZmFjdG9yeTogQWN0aW9uQ2IgfCBWYWx1ZUNiO1xuICAgIHZhbHVlU2l6ZTogVmFsdWVTaXplO1xuXG4gICAgY29uc3RydWN0b3IoeyBpc0FjdGlvbiwgaXNEeW5hbWljLCBmYWN0b3J5LCB2YWx1ZVNpemUgfSkge1xuICAgICAgICB0aGlzLmlzQWN0aW9uID0gaXNBY3Rpb247XG4gICAgICAgIHRoaXMuaXNEeW5hbWljID0gaXNEeW5hbWljO1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgICAgICB0aGlzLnZhbHVlU2l6ZSA9IHZhbHVlU2l6ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKGZhY3Rvcnk6IFZhbHVlQ2IsIGlzRHluYW1pYyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiBmYWxzZSwgdmFsdWVTaXplOiAwLCBpc0R5bmFtaWMsIGZhY3RvcnkgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih2YWx1ZVNpemU6IFZhbHVlU2l6ZSwgZmFjdG9yeTogQWN0aW9uQ2IpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IHRydWUsIHZhbHVlU2l6ZSwgaXNEeW5hbWljOiB0cnVlLCBmYWN0b3J5IH0pO1xufVxuXG5leHBvcnQgY29uc3QgdG9rZW5zID0ge1xuICAgIC8vICoqKiBWYWx1ZXMgKioqXG4gICAgLy8gQ291bnRzXG4gICAgQ09VTlRfTUlOVVM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoLTEpKSxcbiAgICBDT1VOVF8xOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEpKSxcbiAgICBDT1VOVF8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIpKSxcbiAgICBDT1VOVF8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMpKSxcbiAgICBDT1VOVF81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDUpKSxcbiAgICAvLyBGcmFjdGlvbnNcbiAgICBGUkFDVF8xXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDIpKSxcbiAgICBGUkFDVF8xXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDMpKSxcbiAgICBGUkFDVF8yXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMiAvIDMpKSxcbiAgICBGUkFDVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDQpKSxcbiAgICBGUkFDVF8zXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMyAvIDQpKSxcbiAgICBGUkFDVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDUpKSxcbiAgICAvLyBBbmdsZXNcbiAgICAvL0FOR0xFXzM2MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDM2MCkpLFxuICAgIEFOR0xFXzI3MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDI3MCkpLFxuICAgIEFOR0xFXzE4MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE4MCkpLFxuICAgIEFOR0xFXzkwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoOTApKSxcbiAgICBBTkdMRV82MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDYwKSksXG4gICAgQU5HTEVfNDU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg0NSkpLFxuICAgIEFOR0xFXzMwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzApKSxcbiAgICBBTkdMRV8xNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE1KSksXG4gICAgLy8gQ29sb3JzXG4gICAgQ09MT1JfTUFYOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1heENvbG9yKCkpLFxuICAgIENPTE9SX01JTjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NaW5Db2xvcigpKSxcbiAgICBDT0xPUl9TSElGVF8xXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMikpLFxuICAgIENPTE9SX1NISUZUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA0KSksXG4gICAgQ09MT1JfU0hJRlRfMV81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDUpKSxcbiAgICBDT0xPUl9TSElGVF8xXzEwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDEwKSksXG4gICAgLy8gU3Ryb2tlXG4gICAgU1RST0tFX1NPTElEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcInNvbGlkXCIpKSxcbiAgICBTVFJPS0VfREFTSEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRhc2hlZFwiKSksXG4gICAgU1RST0tFX0RPVFRFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkb3R0ZWRcIikpLFxuICAgIFNUUk9LRV9USElDS19BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKCsxKSksXG4gICAgU1RST0tFX1RISUNLX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoLTEpKSxcbiAgICAvLyBPcGVyYXRpb25zXG4gICAgT1BfTVVMVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5NdWx0T3AoKSksXG4gICAgT1BfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLkFkZE9wKCkpLFxuICAgIE9QX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5TdWJPcCgpKSxcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFyZ3VtZW50KCkpLFxuICAgIENBTExfRElBTU9ORDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIkRJQU1PTkRcIiksIHRydWUpLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiSU5WX1RSSUFOR0xFXCIpLCB0cnVlKSxcblxuICAgIC8vICoqKiBBY3Rpb25zICoqKlxuICAgIC8vIENhbGxlcnNcbiAgICBDQUxMX0Y6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiRlwiLCB2KSksXG4gICAgQ0FMTF9HOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkdcIiwgdikpLFxuICAgIENBTExfSDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJIXCIsIHYpKSxcbiAgICAvLyBQYWludGVyc1xuICAgIERSQVdfTElORTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdMaW5lKHYpKSxcbiAgICBEUkFXX0NJUkNMRTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdDaXJjbGUodikpLFxuICAgIERSQVdfU1FVQVJFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd1NxdWFyZSh2KSksXG4gICAgRFJBV19UUklBTkdMRTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdUcmlhbmdsZSh2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfM180OiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzMgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyAyLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV80OiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfM180OiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTMgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyAyLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV80OiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA0LCB2KSksXG4gICAgLy8gQ3Vyc29yIE9wZXJhdG9yc1xuICAgIEZPUldBUkQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5Gb3J3YXJkKHYpKSxcbiAgICBST1RBVEVfTEVGVDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLlJvdGF0ZUxlZnQodikpLFxuICAgIFJPVEFURV9SSUdIVDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLlJvdGF0ZVJpZ2h0KHYpKSxcbiAgICBSRVZFUlNFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUmV2ZXJzZSh2KSksXG4gICAgUkVQTEFZOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUmVwbGF5KHYpKSxcbn07XG4iLCJpbXBvcnQgeyByZW5kZXJUb2tlbiB9IGZyb20gJy4vdG9rZW5zJztcbmltcG9ydCB7IHNjcmFwZUFuZFJ1biB9IGZyb20gJy4vcnVuJztcbmltcG9ydCB7IFBST0NFRFVSRVMsIERZTkFNSUNfQVJHUywgU1VGRklYRVMgfSBmcm9tICcuLi9wYXJzZXInO1xuXG5jb25zdCBJTlBVVFMgPSBbXCJpdGVyYXRpb25zXCIsIFwiZmlyc3QtY29sb3JcIiwgXCJzZWNvbmQtY29sb3JcIiwgXCJzdHJva2Utc2l6ZVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb2RlKGNvZGUpIHtcbiAgICBjb25zdCBjYiA9ICgpID0+IHtcbiAgICAgICAgc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmVuZGVyQ29kZShjb2RlKTtcbiAgICBJTlBVVFMuZm9yRWFjaChpbnB1dElkID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgY2IsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJlbmRlckxpc3RPZkZ1bmN0aW9ucygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0T2ZGdW5jdGlvbnMoKSB7XG4gICAgY29uc3QgZnVuY3Rpb25zTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnVuY3Rpb25zXCIpO1xuICAgIFBST0NFRFVSRVMuY29uY2F0KERZTkFNSUNfQVJHUykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgZnVuY3Rpb25zTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJCYXJPZkZ1bmN0aW9ucyhuYW1lKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhck9mRnVuY3Rpb25zKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd25cIik7XG4gICAgY29uc3QgYmFzZUZ1bmNOb2RlID0gcmVuZGVyQWRkRnVuY3Rpb24oXCJzcGFuXCIsIG5hbWUpO1xuICAgIGNvbnN0IGJhck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgYmFyTm9kZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcbiAgICBTVUZGSVhFUy5mb3JFYWNoKHN1ZmZpeCA9PiB7XG4gICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyQWRkRnVuY3Rpb24oXCJsaVwiLCBuYW1lLCBzdWZmaXgpKTtcbiAgICB9KTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGJhc2VGdW5jTm9kZSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChiYXJOb2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWRkRnVuY3Rpb24odHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nID0gXCJcIikge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGNvbnN0IHJlYWxOYW1lID0gc3VmZml4ID8gYFNVRkZJWF8ke3N1ZmZpeH1gIDogYENBTExfJHtuYW1lfWA7XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cHJvY2Vzcy5lbnYuQVNTRVRfUEFUSH1pY29ucy8ke3JlYWxOYW1lfS5zdmcpYDtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1idG5cIik7XG4gICAgbm9kZS5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgIG5vZGUuZGF0YXNldC5zdWZmaXggPSBzdWZmaXg7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBzdWZmaXh9ID0gdGhpcy5kYXRhc2V0O1xuICAgICAgICBzaG93T3JIaWRlT3JBZGRGdW5jdGlvbihuYW1lLCBzdWZmaXgpO1xuICAgICAgICBzY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIGZhbHNlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29kZShjb2RlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvZGUuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckZ1bmN0aW9uKGxpbmUpKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZ1bmN0aW9uKHtuYW1lLCBzdWZmaXggPSBcIlwiLCB0b2tlbnMgPSBbXSwgaXNFZGl0YWJsZSA9IHRydWV9KTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJmdW5jdGlvblwiKTtcbiAgICBub2RlLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlck5hbWUobmFtZSwgc3VmZml4KSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbnModG9rZW5zLCB7aXNFZGl0YWJsZX0pKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb25zdCBmdW5jTm9kZSA9IGNvZGVOb2RlLnF1ZXJ5U2VsZWN0b3IoYC5mdW5jdGlvbltkYXRhLW5hbWU9XCIke25hbWV9XCJdW2RhdGEtc3VmZml4PVwiJHtzdWZmaXh9XCJdYCk7XG4gICAgaWYgKCFmdW5jTm9kZSkge1xuICAgICAgICBjb2RlTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJGdW5jdGlvbih7bmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmNOb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTmFtZShuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgY29uc3QgcmVhbG5hbWUgPSBzdWZmaXggPyBgJHtuYW1lfV8ke3N1ZmZpeH1gIDogbmFtZTtcbiAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL0NBTExfJHtyZWFsbmFtZX0uc3ZnKWA7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0b2tlbnMsIHtpc0VkaXRhYmxlID0gdHJ1ZX0pOiBFbGVtZW50IHtcbiAgICBjb25zdCB0b2tlbnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2tlbnNOb2RlLmNsYXNzTGlzdC5hZGQoXCJvdXRlci10b2tlbnNcIik7XG5cbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJpbm5lci10b2tlbnNcIik7XG4gICAgaWYgKGlzRWRpdGFibGUpIHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlblNwYW4oKSk7XG4gICAgfVxuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbikpO1xuICAgICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlblNwYW4oKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRva2Vuc05vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgaWYgKGlzRWRpdGFibGUpIHtcbiAgICAgICAgdG9rZW5zTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlblJlbW92ZVNwYW4oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2Vuc05vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuU3BhbigpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW4tc3BhblwiKTtcbiAgICBzZXRUb2tlblNwYW5FdmVudHMobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuUmVtb3ZlU3BhbigpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW4tc3BhblwiLCBcInJlbW92ZVwiKTtcbiAgICBzZXRUb2tlblNwYW5FdmVudHMobm9kZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHNldFRva2VuU3BhbkV2ZW50cyhub2RlOiBFbGVtZW50LCByZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBldkRyYWdPdmVyLCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZEcm9wLCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBldkRyYWdFbnRlciwgZmFsc2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZXZEcmFnTGVhdmUsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGV2RHJhZ092ZXIoZSkge1xuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV2RHJvcChlKSB7XG4gICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHN0b3BzIHRoZSBicm93c2VyIGZyb20gcmVkaXJlY3RpbmcuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW4gPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0b2tlbicpO1xuICAgICAgICBjb25zdCBvbGRJZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2lkJyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgICAgIGlmICghcmVtb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsIHJlbmRlclRva2VuU3BhbigpKTtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgcmVuZGVyVG9rZW4odG9rZW4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgY29uc3Qgb2xkVG9rZW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob2xkSWQpO1xuICAgICAgICBpZiAob2xkVG9rZW5Ob2RlLmRhdGFzZXQuaXNUZW1wbGF0ZSA9PT0gXCJub1wiKSB7XG4gICAgICAgICAgICBvbGRUb2tlbk5vZGUubmV4dFNpYmxpbmcucmVtb3ZlKCk7XG4gICAgICAgICAgICBvbGRUb2tlbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmRTcGFuKG5vZGUpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucygndG9rZW4tc3BhbicpID8gbm9kZSA6IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZEcmFnRW50ZXIoZSkge1xuICAgICAgICBmaW5kU3Bhbih0aGlzKS5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZEcmFnTGVhdmUoZSkge1xuICAgICAgICBmaW5kU3Bhbih0aGlzKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7IGV4ZWMsIEZ1bmMgfSBmcm9tIFwiLi4vZXhlY1wiO1xuaW1wb3J0IHsgY3JlYXRlU3ZnIH0gZnJvbSBcIi4uL3N2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NyYXBlQW5kUnVuKCkge1xuICAgIGNvbnN0IGN1cnNvckNmZyA9IHtcbiAgICAgICAgZmlyc3RDb2xvcjogc2NyYXBlSW5wdXQoXCJmaXJzdC1jb2xvclwiKSxcbiAgICAgICAgc2Vjb25kQ29sb3I6IHNjcmFwZUlucHV0KFwic2Vjb25kLWNvbG9yXCIpLFxuICAgICAgICBzdHJva2VTaXplOiBzY3JhcGVJbnB1dEFzRmxvYXQoXCJzdHJva2Utc2l6ZVwiKSxcbiAgICB9XG4gICAgY29uc3QgaW1hZ2VOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcbiAgICBjb25zdCBjb2RlID0gc2NyYXBlQ29kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGVcIikpO1xuICAgIHJ1bihpbWFnZU5vZGUsIGNvZGUsIHNjcmFwZUlucHV0QXNJbnQoXCJpdGVyYXRpb25zXCIpLCBjdXJzb3JDZmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuKGltYWdlTm9kZTogSFRNTEVsZW1lbnQsIGNvZGU6IEZ1bmNbXSwgbWF4SXRlcmF0aW9uOiBudW1iZXIgPSAzLCBjdXJzb3JDZmcgPSB7fSkge1xuICAgIGltYWdlTm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgYXJndW1lbnQgPSAxLjA7XG4gICAgY29uc3QgY3Vyc29yID0gZXhlYyhhcmd1bWVudCwgbWF4SXRlcmF0aW9uLCBjb2RlLCBjdXJzb3JDZmcpO1xuICAgIGN1cnNvci5hZGRNYXJnaW4oMjApO1xuICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICAgIGNvbnN0IHN2ZyA9IGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yKTtcblxuICAgIGltYWdlTm9kZS5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NyYXBlQ29kZShjb2RlTm9kZTogSFRNTEVsZW1lbnQpOiBGdW5jW10ge1xuICAgIGNvbnN0IGNvZGU6IEZ1bmNbXSA9IFtdO1xuICAgIGNvZGVOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVuY3Rpb25cIikuZm9yRWFjaCgoZnVuY05vZGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZSA9IGZ1bmNOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVcIik7XG4gICAgICAgIGlmIChpc0hpZGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7bmFtZSwgc3VmZml4fSA9IGZ1bmNOb2RlLmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZnVuY05vZGUucXVlcnlTZWxlY3RvckFsbChcIi50b2tlblwiKS5mb3JFYWNoKHRva2VuTm9kZSA9PiB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCgodG9rZW5Ob2RlIGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LnRva2VuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX06OiR7c3VmZml4fWAgOiBuYW1lO1xuICAgICAgICBjb2RlLnB1c2goe25hbWU6IHJlYWxuYW1lLCB0b2tlbnN9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gc2NyYXBlSW5wdXQoaWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICByZXR1cm4gKG5vZGUgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0QXNJbnQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWUgPSBzY3JhcGVJbnB1dChpZCk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2NyYXBlSW5wdXRBc0Zsb2F0KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gc2NyYXBlSW5wdXQoaWQpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWQ0IH0gZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbjogc3RyaW5nLCBpc1RlbXBsYXRlOiBib29sZWFuID0gZmFsc2UsIGlzRXZlbnRhYmxlOiBib29sZWFuID0gZmFsc2UpOiBFbGVtZW50IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgndG9rZW4nKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICBub2RlLmlkID0gYHRva2VuLSR7dXVpZDQoKX1gO1xuICAgIG5vZGUuZGF0YXNldC50b2tlbiA9IHRva2VuO1xuICAgIG5vZGUuZGF0YXNldC5pc1RlbXBsYXRlID0gaXNUZW1wbGF0ZSA/ICd5ZXMnIDogJ25vJztcbiAgICAvL25vZGUuaW5uZXJUZXh0ID0gdG9rZW47XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cHJvY2Vzcy5lbnYuQVNTRVRfUEFUSH1pY29ucy8ke3Rva2VufS5zdmcpYDtcbiAgICBzZXRUb2tlbkV2ZW50cyhub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2V0VG9rZW5FdmVudHMobm9kZTogRWxlbWVudCkge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZXZEcmFnU3RhcnQsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBldkRyYWdFbmQsIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGV2RHJhZ1N0YXJ0KGUpIHtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndG9rZW4nLCB0aGlzLmRhdGFzZXQudG9rZW4pO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdpZCcsIHRoaXMuaWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBldkRyYWdFbmQoZSkge1xuICAgICAgICAvKlxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRva2VuJykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgKi9cbiAgICB9XG59XG5cbmludGVyZmFjZSBUb2tlbkluZm8ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHR5cGU6ICdhY3Rpb24nIHwgJ3ZhbHVlJztcbiAgICBkb2M/OiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgVG9rZW5DYXRlZ29yeSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0b2tlbnM6IFRva2VuSW5mb1tdO1xufTtcblxuY29uc3QgVE9LRU5TOiBUb2tlbkNhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0NvdW50ZXJzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzEnLCBsYWJlbDogJ09uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT1VOVF8yJywgbGFiZWw6ICdUd28nLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfMycsIGxhYmVsOiAnVGhyZWUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfNScsIGxhYmVsOiAnRml2ZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT1VOVF9NSU5VUycsIGxhYmVsOiAnTWludXMgT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnJhY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzFfMicsIGxhYmVsOiAnSGFsZicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzMnLCBsYWJlbDogJ1RoaXJkJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzJfMycsIGxhYmVsOiAnVHdvIHRoaXJkcycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzQnLCBsYWJlbDogJ1F1YXJ0ZXInLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfM180JywgbGFiZWw6ICdUaHJlZSBxdWFydGVycycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzUnLCBsYWJlbDogJ0ZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzI3MCcsIGxhYmVsOiAnMjcwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMTgwJywgbGFiZWw6ICcxODDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV85MCcsIGxhYmVsOiAnOTDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV82MCcsIGxhYmVsOiAnNjDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV80NScsIGxhYmVsOiAnNDXCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8zMCcsIGxhYmVsOiAnMzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8xNScsIGxhYmVsOiAnMTXCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01vZGlmaWNhdG9ycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdPUF9NVUxUJywgbGFiZWw6ICdNdWx0aXBsZSBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdPUF9BREQnLCBsYWJlbDogJ0FkZGl0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ09QX1NVQicsIGxhYmVsOiAnU3VidHJhY3Rpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfTUFYJywgbGFiZWw6ICdTZWNvbmQgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfTUlOJywgbGFiZWw6ICdGaXJzdCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzInLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzQnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzUnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzEwJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnU1RST0tFX1RISUNLX0FERCcsIGxhYmVsOiAnVGhpY2sgc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1NUUk9LRV9USElDS19TVUInLCBsYWJlbDogJ1RoaW4gc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnVuY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0FSR1VNRU5UJywgbGFiZWw6ICdBcmd1bWVudCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0RJQU1PTkQnLCBsYWJlbDogJ0RpYW1vbmQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9GJywgbGFiZWw6ICdDYWxsIEYgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NBTExfRycsIGxhYmVsOiAnQ2FsbCBHIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0gnLCBsYWJlbDogJ0NhbGwgSCBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdQYWludGVycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdEUkFXX0xJTkUnLCBsYWJlbDogJ0RyYXcgTGluZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19DSVJDTEUnLCBsYWJlbDogJ0RyYXcgQ2lyY2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX1NRVUFSRScsIGxhYmVsOiAnRHJhdyBTcXVhcmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfVFJJQU5HTEUnLCBsYWJlbDogJ0RyYXcgVHJpYW5nbGUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzNfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAzLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8yJywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvMiAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMS80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzNfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAzLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzInLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMS8yIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV80JywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ3Vyc29yJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICB7bmFtZTogJ0ZPUldBUkQnLCBsYWJlbDogJ01vdmUgZm9yd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUk9UQVRFX0xFRlQnLCBsYWJlbDogJ1JvdGF0ZSBsZWZ0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdST1RBVEVfUklHSFQnLCBsYWJlbDogJ1JvdGF0ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUkVWRVJTRScsIGxhYmVsOiAnUmV2ZXJzZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUkVQTEFZJywgbGFiZWw6ICdSZXBsYXknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0VG9rZW5zKGlzVGVtcGxhdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rva2VucycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBUT0tFTlMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXRlZ29yeU5vZGUuY2xhc3NMaXN0LmFkZCgndG9rZW5zJywgJ2hpZGUnKTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmNsYXNzTGlzdC5hZGQoJ2xhYmVsJyk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZU5hbWUuaW5uZXJUZXh0ID0gY2F0ZWdvcnkubGFiZWw7XG4gICAgICAgIGNhdGVnb3J5Tm9kZU5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjYXRlZ29yeU5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGVOYW1lKTtcblxuICAgICAgICBjYXRlZ29yeS50b2tlbnMuZm9yRWFjaCh0b2tlbkluZm8gPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuKHRva2VuSW5mby5uYW1lLCBpc1RlbXBsYXRlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGUpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyVG9rZW4gfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB7IHJlbmRlckZ1bmN0aW9uIH0gZnJvbSBcIi4vY29kZVwiO1xuaW1wb3J0IHsgcnVuLCBzY3JhcGVDb2RlIH0gZnJvbSBcIi4vcnVuXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlL2RvY3Muc2Nzc1wiO1xuXG5pbnRlcmZhY2UgVHV0QW5pbVBhcmFtcyB7XG4gICAgbGluZXM6IHN0cmluZ1tdLFxuICAgIGl0ZXJhdGlvbnM6IG51bWJlcixcbiAgICBzdGFydDogbnVtYmVyLFxuICAgIHRva2Vuczogc3RyaW5nW10sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBub2RlSWQ6IHN0cmluZyxcbn1cblxuY2xhc3MgVHV0QW5pbSB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIGl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuICAgICAgICB0aGlzLml0ZXJhdGlvbnMgPSBwYXJhbXMuaXRlcmF0aW9ucyB8fCAxO1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXMubm9kZUlkKTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWFuaW1hdGlvblwiKTtcbiAgICAgICAgaWYgKHBhcmFtcy50aXRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICB0aXRsZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRpdGxlXCIpO1xuICAgICAgICAgICAgdGl0bGVOb2RlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBpbWFnZU5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWltYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGltYWdlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGluZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgbGluZXNOb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1saW5lc1wiKTtcbiAgICAgICAgICAgIHBhcmFtcy5saW5lcy5mb3JFYWNoKGZ1bGxMaW5lTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSB0aGlzLnNwbGl0RnVsbExpbmVOYW1lKGZ1bGxMaW5lTmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZU5vZGUgPSByZW5kZXJGdW5jdGlvbih7bmFtZSwgc3VmZml4LCBpc0VkaXRhYmxlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIGxpbmVzTm9kZS5hcHBlbmRDaGlsZChsaW5lTm9kZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsaW5lc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbW1lbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC1jb21tZW50XCIpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbW1lbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBiYXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LWJhclwiKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiwqsgUFJFVlwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwicHJldlwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUuZGlzYWJsZWQgPSB0aGlzLnBvc2l0aW9uIDw9IDA7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wcmV2LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIk5FWFQgwrtcIjtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcIm5leHRcIjtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLmRpc2FibGVkID0gdGhpcy5wb3NpdGlvbiA+PSB0aGlzLnRva2Vucy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMubmV4dC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lclRleHQgPSBcIkl0ZXJhdGlvbnM6XCI7XG4gICAgICAgICAgICAgICAgYmFyTm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpdE5vZGUudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICAgICAgaXROb2RlLnZhbHVlID0gdGhpcy5pdGVyYXRpb25zLnRvRml4ZWQoKTtcbiAgICAgICAgICAgICAgICBpdE5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGl0Tm9kZS5uYW1lID0gXCJpdGVyYXRpb25zXCI7XG4gICAgICAgICAgICAgICAgYmFyTm9kZS5hcHBlbmRDaGlsZChpdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJhck5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXRlcmF0ZVRvUG9zaXRpb24ocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJhbXMuc3RhcnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21tZW50KCk7XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPj0gdGhpcy50b2tlbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gKz0gMTtcbiAgICAgICAgdGhpcy5uZXh0RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbW1lbnQoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZSgpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dChcIm5leHRcIikuZGlzYWJsZWQgPSB0aGlzLnBvc2l0aW9uID49IHRoaXMudG9rZW5zLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuZmluZElucHV0KFwicHJldlwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZFeGVjdXRlKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gLT0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21tZW50KCk7XG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UoKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoXCJuZXh0XCIpLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmluZElucHV0KFwicHJldlwiKS5kaXNhYmxlZCA9IHRoaXMucG9zaXRpb24gPD0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRJbnB1dChuYW1lOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VOb2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3QtaW1hZ2VcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBzY3JhcGVDb2RlKHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWxpbmVzXCIpKTtcbiAgICAgICAgcnVuKGltYWdlTm9kZSwgY29kZSwgdGhpcy5pdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRFeGVjdXRlKCkge1xuICAgICAgICB0aGlzLmdldENvbW1hbmRzKCkuZm9yRWFjaChjb21tYW5kID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kWzBdICE9IFwiIVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2xpbmUsIHRva2VuXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9tUHVzaFRva2VuKGxpbmUsIHRva2VuKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2goY29tbWFuZC5zdWJzdHJpbmcoMSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiSVRfSU5DXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0aW9ucyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZXJhdGlvbnNJbnB1dCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9ERUNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlcmF0aW9uc0lucHV0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk5PUFwiOiBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKGAke2NvbW1hbmR9IG5vdCBmb3VuZGApOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2RXhlY3V0ZSgpIHtcbiAgICAgICAgdGhpcy5nZXRDb21tYW5kcygpLmZvckVhY2goY29tbWFuZCA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZFswXSAhPSBcIiFcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsaW5lXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdFRva2VuKGxpbmUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaChjb21tYW5kLnN1YnN0cmluZygxKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJJVF9JTkNcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVyYXRpb25zIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlcmF0aW9uc0lucHV0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIklUX0RFQ1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGlvbnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVyYXRpb25zSW5wdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTk9QXCI6IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoYCR7Y29tbWFuZH0gbm90IGZvdW5kYCk7IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbW1hbmRzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgY29tbWFuZFdpdGhDb21tZW50ID0gdGhpcy50b2tlbnNbdGhpcy5wb3NpdGlvbl07XG4gICAgICAgIGNvbnN0IFtyYXdDb21tYW5kc10gPSBjb21tYW5kV2l0aENvbW1lbnQuc3BsaXQoXCIjXCIsIDEpO1xuICAgICAgICByZXR1cm4gcmF3Q29tbWFuZHMuc3BsaXQoXCIsXCIpLm1hcChyYXdDb21tYW5kID0+IHJhd0NvbW1hbmQudHJpbSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUNvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmRXaXRoQ29tbWVudCA9IHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb25dO1xuICAgICAgICBjb25zdCBbLCByYXdDb21tZW50XSA9IGNvbW1hbmRXaXRoQ29tbWVudC5zcGxpdChcIiNcIiwgMik7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSByYXdDb21tZW50ID8gcmF3Q29tbWVudC50cmltKCkgOiBcIlwiO1xuICAgICAgICBjb25zdCBjb21tZW50Tm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWNvbW1lbnRcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbW1lbnROb2RlLmlubmVyVGV4dCA9IGNvbW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVyYXRpb25zSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0KFwiaXRlcmF0aW9uc1wiKS52YWx1ZSA9IHRoaXMuaXRlcmF0aW9ucy50b0ZpeGVkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb21QdXNoVG9rZW4oZnVsbExpbmVOYW1lOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zTm9kZSA9IHRoaXMuZmluZExpbmUoZnVsbExpbmVOYW1lKTtcbiAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gcmVuZGVyVG9rZW4odG9rZW4sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIHRva2Vuc05vZGUuYXBwZW5kQ2hpbGQodG9rZW5Ob2RlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUxhc3RUb2tlbihmdWxsTGluZU5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCB0b2tlbnNOb2RlID0gdGhpcy5maW5kTGluZShmdWxsTGluZU5hbWUpO1xuICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKHRva2Vuc05vZGUubGFzdENoaWxkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRMaW5lKGZ1bGxMaW5lTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4XSA9IHRoaXMuc3BsaXRGdWxsTGluZU5hbWUoZnVsbExpbmVOYW1lKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgLmZ1bmN0aW9uW2RhdGEtbmFtZT0nJHtuYW1lfSddIC5pbm5lci10b2tlbnNgO1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3BsaXRGdWxsTGluZU5hbWUoZnVsbExpbmVOYW1lOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSBmdWxsTGluZU5hbWUuc3BsaXQoXCI6OlwiLCAxKTtcbiAgICAgICAgcmV0dXJuIFtuYW1lLCBzdWZmaXggfHwgXCJcIl07XG4gICAgfVxufVxuXG5jb25zdCBBTklNQVRJT05TX1BBUkFNUzogVHV0QW5pbVBhcmFtc1tdID0gW107XG5jb25zdCBDVVJSRU5UX0hSRUYgPSAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuc3JjO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUFuaW1hdGlvbihwYXJhbXM6IFR1dEFuaW1QYXJhbXMpIHtcbiAgICBBTklNQVRJT05TX1BBUkFNUy5wdXNoKHBhcmFtcyk7XG59XG5cblxuZnVuY3Rpb24gc2V0QmFzZSgpIHtcbiAgICBjb25zdCBkaXJuYW1lSHJlZiA9IENVUlJFTlRfSFJFRi5zdWJzdHJpbmcoMCwgQ1VSUkVOVF9IUkVGLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcbiAgICBjb25zdCBiYXNlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgIGJhc2VOb2RlLmhyZWYgPSBkaXJuYW1lSHJlZjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGJhc2VOb2RlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsKCkge1xuICAgIEFOSU1BVElPTlNfUEFSQU1TLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbmV3IFR1dEFuaW0ocGFyYW1zKTtcbiAgICAgICAgYW5pbWF0aW9uLmluaXRSZW5kZXIocGFyYW1zKTtcbiAgICAgICAgYW5pbWF0aW9uLml0ZXJhdGVUb1Bvc2l0aW9uKHBhcmFtcyk7XG4gICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgIHNldEJhc2UoKTtcbiAgICByZW5kZXJBbGwoKTtcbn0pO1xuXG4vLyBPTiBJTklUXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=