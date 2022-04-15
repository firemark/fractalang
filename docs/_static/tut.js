var TUT;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".tokens {\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.tokens.hide .token {\n  display: none;\n}\n.tokens > .label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n\n.token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.token-span {\n  padding: 5px;\n  height: 50px;\n}\n.token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n.token-span.remove {\n  background-color: #D88;\n  border: 2px #922 dotted;\n  border-radius: 5px;\n  width: 50px;\n}\n.token-span.remove::before {\n  font-size: 24pt;\n  content: \"X\";\n}\n\n#functions {\n  display: flex;\n  float: right;\n}\n#functions > li {\n  display: inline;\n}\n#functions .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n#functions .token-btn:hover {\n  background-color: #DDD;\n}\n#functions .dropdown {\n  position: relative;\n}\n#functions .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n#functions .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n#code {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n#code > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n#code > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#code > li > .outer-tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n}\n#code > li > .outer-tokens > .inner-tokens {\n  padding: 0 5px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n#code > li > .outer-tokens > .inner-tokens > * {\n  flex: 0 0 auto;\n}\n#code > li > .outer-tokens > .remove {\n  flex: 0 0 auto;\n}\n#code > li.hide {\n  display: none;\n}\n\nbody {\n  font-family: Sans-Serif;\n  font-size: 10pt;\n  overflow: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: calc(100vh - 15px);\n}\n\n#image {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#editor {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: auto;\n  width: 95%;\n}\n\n#code-bar {\n  margin: 0 30px;\n}\n\n#code-panel {\n  display: flex;\n  flex-direction: row;\n  flex-align: stretch;\n  height: 45vh;\n}\n\n#tokens {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  align-items: stretch;\n  gap: 10px;\n}\n#tokens > .tokens {\n  flex-direction: column;\n  align-items: center;\n}\n\n.hidden {\n  display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/main.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,wBAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACCJ;ADCI;EACI,aAAA;ACCR;ADEI;EACI,eAAA;EACA,iBAAA;EACA,eAAA;ACAR;;ADIA;EACI,YAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,2BAAA;ACDJ;;ADIA;EACI,YAAA;EACA,YAAA;ACDJ;ADGI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;ACDR;ADGQ;EACI,eAAA;EACA,YAAA;ACDZ;ADKI;EACI,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;ACHR;ADKQ;EACI,eAAA;EACA,YAAA;ACHZ;;ACrDA;EACI,aAAA;EACA,YAAA;ADwDJ;ACtDI;EACI,eAAA;ADwDR;ACrDI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;EACA,eAAA;ADuDR;ACrDQ;EACI,sBAAA;ADuDZ;ACnDI;EACI,kBAAA;ADqDR;ACnDQ;EACI,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;ADqDZ;ACjDY;EACI,cAAA;ADmDhB;;AC7CA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,kBAAA;ADgDJ;AC9CI;EACI,cAAA;EACA,aAAA;ADgDR;AC9CQ;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;ADgDZ;AC7CQ;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,QAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;AD+CZ;AC7CY;EACI,cAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;AD+ChB;AC9CgB;EAAM,cAAA;ADiDtB;AC9CY;EAAW,cAAA;ADiDvB;AC9CQ;EACI,aAAA;ADgDZ;;AApIA;EACI,uBAAA;EACA,eAAA;EACA,gBAAA;AAuIJ;;AApIA;EACI,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,eAAA;EACA,YAAA;EACA,0BAAA;AAuIJ;;AApIA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAuIJ;;AApIA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;EACA,UAAA;AAuIJ;;AApIA;EACI,cAAA;AAuIJ;;AApIA;EACI,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AAuIJ;;AApIA;EACI,cAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,SAAA;AAuIJ;AArII;EACI,sBAAA;EACA,mBAAA;AAuIR;;AAnIA;EACI,wBAAA;AAsIJ","sourcesContent":[".tokens {\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide .token {\n        display: none;\n    }\n\n    > .label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n}\n\n.token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.token-span {\n    padding: 5px;\n    height: 50px;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n\n    &.remove {\n        background-color: #D88;\n        border: 2px #922 dotted;\n        border-radius: 5px;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"X\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\nbody {\n    font-family: Sans-Serif;\n    font-size: 10pt;\n    overflow: hidden;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap;\n    width: 100vw;\n    height: calc(100vh - 15px);\n}\n\n#image {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#editor {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    width: 95%;\n}\n\n#code-bar {\n    margin: 0 30px;\n}\n\n#code-panel {\n    display: flex;\n    flex-direction: row;\n    flex-align: stretch;\n    height: 45vh;\n}\n\n#tokens {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    align-items: stretch;\n    gap: 10px;\n\n    > .tokens {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.hidden {\n    display: none !important;\n}\n","#functions {\n    display: flex;\n    float: right;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n#code {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .outer-tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n\n            > .inner-tokens {\n                padding: 0 5px;\n                flex: 1 1 auto;\n                display: flex;\n                align-items: center;\n                overflow-x: scroll;\n                overflow-y: hidden;\n                > * { flex: 0 0 auto; }\n            }\n\n            > .remove {flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    if (tmp.getValuesLength() > 0) {
        tmp.pushAction();
    }
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
/* harmony export */   "scrapeAndRun": () => (/* binding */ scrapeAndRun)
/* harmony export */ });
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exec */ "./src/exec.ts");
/* harmony import */ var _svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg */ "./src/svg.ts");


function scrapeAndRun() {
    var cursorCfg = {
        firstColor: scrapeInput("first-color"),
        secondColor: scrapeInput("second-color"),
        strokeSize: scrapeInputAsFloat("stroke-size"),
    };
    run(scrapeCode(), scrapeInputAsInt("iterations"), cursorCfg);
}
function run(code, maxIteration, cursorCfg) {
    if (maxIteration === void 0) { maxIteration = 3; }
    if (cursorCfg === void 0) { cursorCfg = {}; }
    var container = document.getElementById("image");
    container.innerHTML = "";
    var argument = 1.0;
    var cursor = (0,_exec__WEBPACK_IMPORTED_MODULE_0__.exec)(argument, maxIteration, code, cursorCfg);
    cursor.addMargin(20);
    var serializer = new XMLSerializer();
    var svg = (0,_svg__WEBPACK_IMPORTED_MODULE_1__.createSvg)(document, cursor);
    container.appendChild(svg);
}
function scrapeCode() {
    var code = [];
    var codeNode = document.getElementById("code");
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
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");



var TutAnim = /** @class */ (function () {
    function TutAnim(params) {
        this.tokens = params.tokens;
        this.position = -1;
        this.iterations = params.iterations || 1;
        this.node = document.getElementById(params.nodeId);
    }
    TutAnim.prototype.initRender = function (params) {
        var _this = this;
        {
            var imageNode = document.createElement("div");
            imageNode.classList.add("image");
            this.node.appendChild(imageNode);
        }
        {
            var linesNode_1 = document.createElement("ul");
            linesNode_1.classList.add("lines");
            params.lines.forEach(function (fullLineName) {
                var _a = _this.splitFullLineName(fullLineName), name = _a[0], suffix = _a[1];
                var lineNode = (0,_code__WEBPACK_IMPORTED_MODULE_1__.renderFunction)({ name: name, suffix: suffix, isEditable: false });
                linesNode_1.appendChild(lineNode);
            });
            this.node.appendChild(linesNode_1);
        }
        {
            var barNode = document.createElement("div");
            barNode.classList.add("bar");
            {
                var btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "« PREV";
                btnNode.addEventListener("click", function (event) { _this.prev(); });
                barNode.appendChild(btnNode);
            }
            {
                var btnNode = document.createElement("input");
                btnNode.type = "button";
                btnNode.value = "NEXT »";
                btnNode.addEventListener("click", function (event) { _this.next(); });
                barNode.appendChild(btnNode);
            }
            this.node.appendChild(barNode);
        }
    };
    TutAnim.prototype.iterateToPosition = function (params) {
        for (var i = 0; i < params.start; i++) {
            this.next();
        }
    };
    TutAnim.prototype.next = function () {
        if (this.position >= this.tokens.length - 1) {
            return;
        }
        this.position += 1;
        this.nextExecute();
    };
    TutAnim.prototype.prev = function () {
        if (this.position < 0) {
            return;
        }
        this.prevExecute();
        this.position -= 1;
    };
    TutAnim.prototype.nextExecute = function () {
        var command = this.tokens[this.position];
        if (command[0] == "!") {
            // todo actions
            return;
        }
        var _a = command.split("@", 2), line = _a[0], token = _a[1];
        this.domPushToken(line, token);
    };
    TutAnim.prototype.prevExecute = function () {
        var command = this.tokens[this.position];
        if (command[0] == "!") {
            // todo actions
            return;
        }
        var line = command.split("@", 2)[0];
        this.removeLastToken(line);
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
var ANIMATIONS = [];
function makeAnimation(params) {
    var animation = new TutAnim(params);
    animation.initRender(params);
    animation.iterateToPosition(params);
    ANIMATIONS.push(animation);
}

})();

TUT = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxrREFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxrREFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxrREFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxrREFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztJQUNsRCxTQUFTO0lBQ1QsK0NBQStDO0lBQy9DLFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDO0lBQzVDLFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsR0FBRyxDQUFDLEVBQWQsQ0FBYyxDQUFDO0lBQzVDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhDQUFLLENBQUMsRUFBRSxDQUFDLEVBQWIsQ0FB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QWtCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUM7SUFDOUQsV0FBVyxFQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBQyxJQUFJLFdBQUksb0RBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQXpCLENBQXlCLENBQUM7SUFDOUQsYUFBYSxFQUFFLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBQyxJQUFJLFdBQUksc0RBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQTNCLENBQTJCLENBQUM7SUFDbEUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxDLENBQWtDLENBQUM7SUFDOUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxxREFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFD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QVEsR0FBaEIsVUFBaUIsWUFBb0I7UUFDM0IsU0FBaUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFwRCxJQUFJLFVBQUUsTUFBTSxRQUF3QyxDQUFDO1FBQzVELElBQU0sS0FBSyxHQUFHLCtCQUF3QixJQUFJLHFCQUFrQixDQUFDO1FBQzdELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLG1DQUFpQixHQUF6QixVQUEwQixZQUFvQjtRQUNwQyxTQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBM0MsSUFBSSxVQUFFLE1BQU0sUUFBK0IsQ0FBQztRQUNuRCxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBYyxFQUFFLENBQUM7QUFFMUIsU0FBUyxhQUFhLENBQUMsTUFBcUI7SUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixTQUFTLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVFVULy4vc3JjL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9zdHlsZS9tYWluLnNjc3M/YTIyMSIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvYXN0L2Jhc2UudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2FzdC9zdHJva2VzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9hc3QvdmFsdWVzLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jb250ZXh0LnRzIiwid2VicGFjazovL1RVVC8uL3NyYy9jdXJzb3IudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2V4ZWMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3BhcnNlci50cyIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvc3ZnLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vVFVULy4vc3JjL3dlYi9jb2RlLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvcnVuLnRzIiwid2VicGFjazovL1RVVC8uL3NyYy93ZWIvdG9rZW5zLnRzIiwid2VicGFjazovL1RVVC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vVFVULy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9UVVQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL1RVVC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVFVUL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UVVQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UVVQvLi9zcmMvd2ViL2RvY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9rZW5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIGdhcDogNXB4O1xcbn1cXG4udG9rZW5zLmhpZGUgLnRva2VuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi50b2tlbnMgPiAubGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2tlbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4udG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi50b2tlbi1zcGFuLm92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLnRva2VuLXNwYW4ub3Zlcjo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG59XFxuLnRva2VuLXNwYW4ucmVtb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEODg7XFxuICBib3JkZXI6IDJweCAjOTIyIGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9rZW4tc3Bhbi5yZW1vdmU6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiWFxcXCI7XFxufVxcblxcbiNmdW5jdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuI2Z1bmN0aW9ucyA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuI2Z1bmN0aW9ucyAudG9rZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZnVuY3Rpb25zIC50b2tlbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG59XFxuI2Z1bmN0aW9ucyAuZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jZnVuY3Rpb25zIC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI2Z1bmN0aW9ucyAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb2RlIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuI2NvZGUgPiBsaSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb2RlID4gbGkgPiAubmFtZSB7XFxuICBmbGV4OiAwIDEgNTBweDtcXG4gIGZvbnQtc2l6ZTogMTVwdDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcbiNjb2RlID4gbGkgPiAub3V0ZXItdG9rZW5zIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDA7XFxuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG59XFxuI2NvZGUgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAuaW5uZXItdG9rZW5zIHtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuI2NvZGUgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAuaW5uZXItdG9rZW5zID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG59XFxuI2NvZGUgPiBsaSA+IC5vdXRlci10b2tlbnMgPiAucmVtb3ZlIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4jY29kZSA+IGxpLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTBwdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1cHgpO1xcbn1cXG5cXG4jaW1hZ2Uge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2VkaXRvciB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jY29kZS1iYXIge1xcbiAgbWFyZ2luOiAwIDMwcHg7XFxufVxcblxcbiNjb2RlLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC1hbGlnbjogc3RyZXRjaDtcXG4gIGhlaWdodDogNDV2aDtcXG59XFxuXFxuI3Rva2VucyB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4jdG9rZW5zID4gLnRva2VucyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b2tlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvZGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQVI7O0FESUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNESjtBREdJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRFI7QURHUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDRFo7QURLSTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNIUjtBREtRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNIWjs7QUNyREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBRHdESjtBQ3RESTtFQUNJLGVBQUE7QUR3RFI7QUNyREk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEdURSO0FDckRRO0VBQ0ksc0JBQUE7QUR1RFo7QUNuREk7RUFDSSxrQkFBQTtBRHFEUjtBQ25EUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEcURaO0FDakRZO0VBQ0ksY0FBQTtBRG1EaEI7O0FDN0NBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBRGdESjtBQzlDSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FEZ0RSO0FDOUNRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QURnRFo7QUM3Q1E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FEK0NaO0FDN0NZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEK0NoQjtBQzlDZ0I7RUFBTSxjQUFBO0FEaUR0QjtBQzlDWTtFQUFXLGNBQUE7QURpRHZCO0FDOUNRO0VBQ0ksYUFBQTtBRGdEWjs7QUFwSUE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXVJSjs7QUFwSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUF1SUo7O0FBcElBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF1SUo7O0FBcElBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUF1SUo7O0FBcElBO0VBQ0ksY0FBQTtBQXVJSjs7QUFwSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUF1SUo7O0FBcElBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUF1SUo7QUFySUk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBdUlSOztBQW5JQTtFQUNJLHdCQUFBO0FBc0lKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50b2tlbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgICYuaGlkZSAudG9rZW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICA+IC5sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4udG9rZW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLnRva2VuLXNwYW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgJi5vdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJi5yZW1vdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4ODtcXG4gICAgICAgIGJvcmRlcjogMnB4ICM5MjIgZG90dGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiWFxcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL3Rva2Vucyc7XFxuQGltcG9ydCAnLi9jb2RlJztcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFNhbnMtU2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVweCk7XFxufVxcblxcbiNpbWFnZSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2VkaXRvciB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jY29kZS1iYXIge1xcbiAgICBtYXJnaW46IDAgMzBweDtcXG59XFxuXFxuI2NvZGUtcGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LWFsaWduOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxufVxcblxcbiN0b2tlbnMge1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICA+IC50b2tlbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsXCIjZnVuY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAudG9rZW4tYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2NvZGUge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgPiBsaSB7XFxuICAgICAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgICA+IC5uYW1lIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDEgNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICA+IC5vdXRlci10b2tlbnMgIHtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuXFxuICAgICAgICAgICAgPiAuaW5uZXItdG9rZW5zIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgPiAucmVtb3ZlIHtmbGV4OiAwIDAgYXV0bzsgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5oaWRlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgTm9kZSwgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlLCBBY3Rpb25SZXN1bHQsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGltcGxlbWVudHMgTm9kZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3QgbG9jYWxzID0gYWN0aW9ucy5tYXAoKCkgPT4gKHt9KSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTspIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzLmF0KGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbnMuYXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGlmdCwgcmV2ZXJzZSB9ID0gYWN0aW9uLmV4ZWMoY29udGV4dCwgbG9jYWwpO1xuICAgICAgICAgICAgdGhpcy5leGVjUmV2ZXJzZShpbmRleCwgcmV2ZXJzZSA/IE1hdGgucm91bmQocmV2ZXJzZSkgOiAwLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGluZGV4ICs9IHNoaWZ0ID8gTWF0aC5yb3VuZChzaGlmdCkgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2Uoc3RvcEluZGV4OiBudW1iZXIsIHJldmVyc2U6IG51bWJlciwgY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBpZiAocmV2ZXJzZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGNvbnN0IHN0YXJ0UmVzZXJ2ZSA9IE1hdGgubWF4KDAsIHN0b3BJbmRleCAtIHJldmVyc2UpO1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gc3RvcEluZGV4OyBpbmRleCA+PSBzdGFydFJlc2VydmU7IGluZGV4LS0pIHtcbiAgICAgICAgICAgIGFjdGlvbnMuYXQoaW5kZXgpLmV4ZWNSZXZlcnNlKGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2l6ZSgpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBOb2RlV2l0aFZhbHVlIGV4dGVuZHMgQWN0aW9uTm9kZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZTogVmFsdWVOb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy52YWx1ZSwgY29udGV4dCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICBpZiAoIShmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJndW1lbnQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0LmNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQpO1xuICAgICAgICBmdW5jLmV4ZWMobmV3Q29udGV4dCk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICBpZiAoIShmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3QXJndW1lbnQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSBjb250ZXh0LmNyZWF0ZU5ld0NvbnRleHQobmV3QXJndW1lbnQpO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBmdW5jLnNpemUoKSAtIDE7XG4gICAgICAgIGZ1bmMuZXhlY1JldmVyc2UobGFzdEluZGV4LCBsYXN0SW5kZXgsIG5ld0NvbnRleHQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdMaW5lKGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3Q2lyY2xlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd0NpcmNsZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3U3F1YXJlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd1NxdWFyZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3VHJpYW5nbGUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3VHJpYW5nbGUoc2l6ZSwgY29sb3IpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0FyY0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBwcml2YXRlIHJhdGlvOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXRpbywgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3QXJjTGluZSh0aGlzLnJhdGlvLCBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBjb250ZXh0LmdldEN1cnNvcigpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcndhcmQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUxlZnQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLnJvdGF0ZShhbmdsZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlUmlnaHQgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBhbmdsZSA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHtyZXZlcnNlOiBpdGVyYXRpb25zfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXBsYXkgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBjb3VudGVyID0gbG9jYWwuY291bnRlciB8fCAxO1xuICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yb3VuZCh0aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb3VudGVyLCBzaXplKTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbC5jb3VudGVyID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4ge3NoaWZ0OiAtMX07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZSB7fVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsdWVOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblJlc3VsdCB7XG4gICAgc2hpZnQ/OiBudW1iZXI7XG4gICAgcmV2ZXJzZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgICBhYnN0cmFjdCBleGVjKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBhbnkpOiBBY3Rpb25SZXN1bHQ7XG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsVmFsdWUodmFsdWVOb2RlczogVmFsdWVOb2RlW10sIGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IGluaXQ6IEV2YWx1ZWRWYWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IDEuMCxcbiAgICAgICAgY29sb3I6IGNvbnRleHQuYXJndW1lbnQuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVN0eWxlLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiAoYTogbnVtYmVyLCBiOm51bWJlcikgPT4gYSAqIGIsXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVOb2Rlcy5yZWR1Y2UocGFydEV2YWwuYmluZCh0aGlzLCBjb250ZXh0KSwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRFdmFsKGNvbnRleHQ6IENvbnRleHQsIGFjYzogRXZhbHVlZFZhbHVlLCBub2RlOiBWYWx1ZU5vZGUpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbm9kZS5ldmFsKGNvbnRleHQpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ld1ZhbHVlLnZhbHVlVHJhbnNmb3JtZXIgfHwgYWNjLnZhbHVlVHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm0oYWNjLnZhbHVlLCBuZXdWYWx1ZS52YWx1ZSkgOiBhY2MudmFsdWUsXG4gICAgICAgIGNvbG9yOiBuZXdWYWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuY29sb3IgOiBhY2MuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBuZXdWYWx1ZS5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlU3R5bGUgOiBhY2Muc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgOiBhY2Muc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiB0cmFuc2Zvcm0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1heENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAxLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pbkNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNoaWZ0Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBsZXQgY29sb3IgPSAoY29udGV4dC5hcmd1bWVudC5jb2xvciArIHRoaXMuc2hpZnQpICUgMS4wO1xuICAgICAgICBpZiAoY29sb3IgPCAwLjApIHtcbiAgICAgICAgICAgIGNvbG9yICs9IDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbG9yfTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNdWx0T3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICogYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFkZE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSArIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgLSBiIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgU3Ryb2tlU3R5bGUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0U3Ryb2tlU3R5bGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc3Ryb2tlOiBTdHJva2VTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cm9rZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyBzdHJva2VTdHlsZTogdGhpcy5zdHJva2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNoaWZ0U3Ryb2tlVGhpY2tuZXNzIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGhpY2tuZXNzID0gY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MgKyB0aGlzLnNoaWZ0O1xuICAgICAgICByZXR1cm4geyBzdHJva2VUaGlja25lc3MgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmdsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBub3JtYWxpemVkQW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub3JtYWxpemVkQW5nbGUgPSBhbmdsZSAvIDM2MC4wO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMubm9ybWFsaXplZEFuZ2xlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZXIgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogY29udGV4dC5hcmd1bWVudC52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHluYW1pY0FyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCB2YWx1ZU5vZGVzID0gY29udGV4dC5maW5kRnVuY3Rpb24odGhpcy5uYW1lKTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlTm9kZXMpKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzLCBjb250ZXh0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcblxuZXhwb3J0IHR5cGUgU3Ryb2tlU3R5bGUgPSBcInNvbGlkXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmFsdWVkVmFsdWUge1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIGNvbG9yPzogbnVtYmVyO1xuICAgIHN0cm9rZVN0eWxlPzogU3Ryb2tlU3R5bGU7XG4gICAgc3Ryb2tlVGhpY2tuZXNzPzogbnVtYmVyO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHRDZmcge1xuICAgIG1heEl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIGN1cnNvcjogQ3Vyc29yO1xuICAgIGJhZzogYW55O1xuXG4gICAgY29uc3RydWN0b3Ioe21heEl0ZXJhdGlvbiwgYmFnLCBjdXJzb3J9KSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgdGhpcy5iYWcgPSBiYWc7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcHVibGljIGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHB1YmxpYyBhcmd1bWVudDogRXZhbHVlZFZhbHVlO1xuICAgIHByaXZhdGUgY2ZnOiBDb250ZXh0Q2ZnO1xuXG4gICAgY29uc3RydWN0b3Ioe2NmZywgYXJndW1lbnQsIGl0ZXJhdGlvbiA9IDB9KSB7XG4gICAgICAgIHRoaXMuY2ZnID0gY2ZnO1xuICAgICAgICB0aGlzLmFyZ3VtZW50ID0gYXJndW1lbnQ7XG4gICAgICAgIHRoaXMuaXRlcmF0aW9uID0gaXRlcmF0aW9uO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9uID0gdGhpcy5pdGVyYXRpb247XG4gICAgICAgIGlmIChpdGVyYXRpb24gPj0gdGhpcy5jZmcubWF4SXRlcmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5hbWVzVG9GaW5kID0gW25hbWVdO1xuICAgICAgICBpZiAoaXRlcmF0aW9uICUgMiA9PSAwKSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpFVkVOYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lc1RvRmluZC51bnNoaWZ0KGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlcmF0aW9uID09IHRoaXMuY2ZnLm1heEl0ZXJhdGlvbiAtIDEpIHtcbiAgICAgICAgICAgIG5hbWVzVG9GaW5kLnVuc2hpZnQoYCR7bmFtZX06OkVORGApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpc3RGdW5jTmFtZSA9IG5hbWVzVG9GaW5kLmZpbmQobmFtZSA9PiB0aGlzLmNmZy5iYWdbbmFtZV0pO1xuICAgICAgICByZXR1cm4gZXhpc3RGdW5jTmFtZSA/IHRoaXMuY2ZnLmJhZ1tleGlzdEZ1bmNOYW1lXSA6IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yKCk6IEN1cnNvciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNmZy5jdXJzb3I7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudDogRXZhbHVlZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh7XG4gICAgICAgICAgICBjZmc6IHRoaXMuY2ZnLFxuICAgICAgICAgICAgYXJndW1lbnQ6IG5ld0FyZ3VtZW50LFxuICAgICAgICAgICAgaXRlcmF0aW9uOiB0aGlzLml0ZXJhdGlvbiArIDEsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpZ3VyZSwgTGluZSwgU3F1YXJlLCBUcmlhbmdsZSwgQ2lyY2xlLCBBcmMgfSBmcm9tIFwiLi9maWd1cmVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94IHtcbiAgICBtaW46IFtudW1iZXIsIG51bWJlcl07XG4gICAgbWF4OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIHtcbiAgICBzdHJva2VTaXplOiBudW1iZXI7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG4gICAgZmlndXJlczogRmlndXJlW107XG4gICAgYm94OiBCb3g7XG4gICAgZmlyc3RDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIHN0cm9rZVNpemUgPSAxLFxuICAgICAgICBkaXN0YW5jZU11bHRpcGxlciA9IDEwMCxcbiAgICAgICAgZmlyc3RDb2xvciA9IFwiIzAwMDAwMFwiLFxuICAgICAgICBzZWNvbmRDb2xvciA9IFwiI0RDMTQzQ1wiLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnN0cm9rZVNpemUgPSBzdHJva2VTaXplO1xuICAgICAgICB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyID0gZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgICAgIHRoaXMuYm94ID0ge1xuICAgICAgICAgICAgbWluOiBbMC4wLCAwLjBdLFxuICAgICAgICAgICAgbWF4OiBbMC4wLCAwLjBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZpcnN0Q29sb3IgPSB0aGlzLmhleFRvQ29sb3IoZmlyc3RDb2xvcik7XG4gICAgICAgIHRoaXMuc2Vjb25kQ29sb3IgPSB0aGlzLmhleFRvQ29sb3Ioc2Vjb25kQ29sb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGV4VG9Db2xvcihoZXg6IHN0cmluZyk6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDUsIDIpLCAxNik7XG4gICAgICAgIHJldHVybiBbciwgZywgYl07XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIHRoaXMuYW5nbGUgPSAodGhpcy5hbmdsZSArIGFuZ2xlKSAlIDEuMDtcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IGFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBMaW5lKFtvbGRfeCwgb2xkX3ldLCBbbmV3X3gsIG5ld195XSwgb3BzKSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzaGlmdCA9IHRoaXMuYW5nbGUgLSAwLjI1O1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlU2l6ZSAqIHN0cm9rZSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNhbGNDb2xvcihjb2xvciksXG4gICAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNoaWZ0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBBcmMocG9pbnQsIGFyY1JhZGl1cywgcmF0aW8sIG9wcykpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuX2ZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd0NpcmNsZShyYWRpdXM6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBvcHMgPSB7IGZpbGw6IHRoaXMuY2FsY0NvbG9yKGNvbG9yKSB9O1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQ2lyY2xlKFt4LCB5XSwgcmFkaXVzLCBvcHMpKTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBTcXVhcmUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgb3BzKSk7XG4gICAgfVxuXG4gICAgZHJhd1RyaWFuZ2xlKHNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBUcmlhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBvcHMpKTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZUJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5wb3NpdGlvblswXSArPSB4ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzFdICs9IHkgKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgfVxuXG4gICAgYWRkTWFyZ2luKG1hcmdpbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSAtPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1pblsxXSAtPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSArPSBtYXJnaW47XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSArPSBtYXJnaW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlQm94KFt4LCB5XTogbnVtYmVyW10sIHNpemUgPSAwKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblswXSwgeCAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMF0sIHggKyBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzFdLCB5IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFsxXSwgeSArIHNpemUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY0NvbG9yKGNvbG9yOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYSA9IHRoaXMuZmlyc3RDb2xvcjtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLnNlY29uZENvbG9yO1xuICAgICAgICBjb25zdCBhUmF0aW8gPSBNYXRoLmFicyhjb2xvciAtIDAuNSkgKiAyO1xuICAgICAgICBjb25zdCBiUmF0aW8gPSAxLjAgLSBhUmF0aW87XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKGNhWzBdICogYVJhdGlvICsgY2JbMF0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBnID0gTWF0aC50cnVuYyhjYVsxXSAqIGFSYXRpbyArIGNiWzFdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgudHJ1bmMoY2FbMl0gKiBhUmF0aW8gKyBjYlsyXSAqIGJSYXRpbyk7XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IHBhcnNlTGluZSwgcGFyc2VSYXdUb2tlbnMgfSBmcm9tIFwiLi9wYXJzZXJcIjtcbmltcG9ydCB7IENvbnRleHRDZmcsIENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuYyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRva2Vuczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGVjKHZhbHVlQXJndW1lbnQ6IG51bWJlciwgbWF4SXRlcmF0aW9uOiBudW1iZXIsIGZ1bmN0aW9uczogRnVuY1tdLCBjdXJzb3JDZmcgPSB7fSk6IEN1cnNvciB7XG4gICAgY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihjdXJzb3JDZmcpO1xuICAgIGNvbnN0IGJhZyA9IHt9O1xuICAgIGZ1bmN0aW9ucy5mb3JFYWNoKCh7bmFtZSwgdG9rZW5zOiByYXdUb2tlbnN9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vucyk7XG4gICAgICAgIGJhZ1tuYW1lXSA9IHBhcnNlTGluZShuYW1lLCB0b2tlbnMpO1xuICAgIH0pO1xuICAgIGNvbnN0IGNmZyA9IG5ldyBDb250ZXh0Q2ZnKHsgbWF4SXRlcmF0aW9uLCBiYWcsIGN1cnNvcjogY3Vyc29yIH0pO1xuICAgIGNvbnN0IGFyZ3VtZW50ID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVBcmd1bWVudCxcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLjAsXG4gICAgICAgIGNvbG9yOiAwLjAsXG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQoeyBjZmcsIGFyZ3VtZW50IH0pO1xuXG4gICAgc3RhcnRFeGVjKGNvbnRleHQsIGJhZyk7XG5cbiAgICByZXR1cm4gY3Vyc29yO1xufVxuXG5mdW5jdGlvbiBzdGFydEV4ZWMoY29udGV4dDogQ29udGV4dCwgYmFnKSB7XG4gICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKFwiU1RBUlRcIikgfHwgY29udGV4dC5maW5kRnVuY3Rpb24oXCJGXCIpO1xuICAgIGlmIChmdW5jKSB7XG4gICAgICAgIGZ1bmMuZXhlYyhjb250ZXh0KTtcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHJva2U6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHtjb2xvciA9IFwiYmxhY2tcIiwgc3Ryb2tlID0gMX0gPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBzdHJva2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNsb3NlOiBib29sZWFuO1xuICAgIHNoaWZ0OiBudW1iZXI7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIGNsb3NlID0gZmFsc2UsIHNoaWZ0ID0gMC4wLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5jbG9zZSA9IGNsb3NlO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3F1YXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgb3JpZW50YXRpb24sIHNpemUsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlICB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBzdHJva2U6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgc3Ryb2tlID0gMH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbiwgdG9rZW5zLCBBY3Rpb25DYiwgVmFsdWVDYiB9IGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHsgTm9kZSwgQWN0aW9uTm9kZSwgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vYXN0L2FjdGlvbnNcIjtcblxuZXhwb3J0IGNvbnN0IERZTkFNSUNfQVJHUyA9IFtcIkRJQU1PTkRcIiwgXCJJTlZfVFJJQU5HTEVcIl07XG5leHBvcnQgY29uc3QgUFJPQ0VEVVJFUyA9IFtcIkZcIiwgXCJHXCIsIFwiSFwiXTtcbmV4cG9ydCBjb25zdCBTVUZGSVhFUyA9IFtcIkVORFwiLCBcIkVWRU5cIiwgXCJPRERcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnM6IHN0cmluZ1tdKTogVG9rZW5bXSB7XG4gICAgcmV0dXJuIHJhd1Rva2Vucy5tYXAocmF3ID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbcmF3XTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhyb3cgYFBhcnNpbmcgZXJyb3I6ICR7cmF3fSBpcyBub3QgdW5kZWZpbmVkIGFzIHRva2VuLmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0pO1xufVxuXG5jbGFzcyBBY3Rpb25UbXAge1xuICAgIHB1YmxpYyBhY3Rpb25zOiBBY3Rpb25Ob2RlW107XG4gICAgcHJpdmF0ZSB2YWx1ZXM6IFZhbHVlTm9kZVtdO1xuICAgIHByaXZhdGUgdG9rZW46IFRva2VuIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgc2V0QWN0aW9uVG9rZW4odG9rZW46IFRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25Ub2tlbigpOiBUb2tlbiB8IG51bGwge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXNMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpc0FjdGlvblNldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW4gIT09IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaEFjdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy50b2tlbi5mYWN0b3J5IGFzIEFjdGlvbkNiO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBmYWN0b3J5KHRoaXMudmFsdWVzKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy50b2tlbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaW5zZXJ0VmFsdWUodmFsdWU6IFZhbHVlTm9kZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZShuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSkge1xuICAgIGlmIChEWU5BTUlDX0FSR1MuaW5kZXhPZihuYW1lKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVGdW5jKG5hbWUsIHRva2Vucyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmVGdW5jKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgIGNvbnN0IHRtcCA9IG5ldyBBY3Rpb25UbXAoKTtcbiAgICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0bXAuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcGFyc2VWYWx1ZSh0b2tlbiwgdG1wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlQWN0aW9uKHRva2VuLCB0bXApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodG1wLmdldFZhbHVlc0xlbmd0aCgpID4gMCkge1xuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24obmFtZSwgdG1wLmdldEFjdGlvbnMoKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZVZhbHVlKHRva2VuczogVG9rZW5bXSk6IFZhbHVlTm9kZVtdIHtcbiAgICByZXR1cm4gdG9rZW5zLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBhY3Rpb25zIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmlzRHluYW1pYykge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBkeW5hbWljIGVsZW1lbnRzIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBY3Rpb24odG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICghdG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBpcyBub3QgYW4gYWN0aW9uXCI7XG4gICAgfVxuICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG4gICAgaWYgKHRva2VuLnZhbHVlU2l6ZSA9PT0gMCkge1xuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgY29uc3QgeyB2YWx1ZVNpemUgfSA9IHRtcC5nZXRBY3Rpb25Ub2tlbigpO1xuICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICBpZiAodmFsdWVTaXplICE9PSBcIitcIiAmJiB0bXAuZ2V0VmFsdWVzTGVuZ3RoKCkgPCB2YWx1ZVNpemUpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaGFzIG5vdCBlbm91Z2ggdmFsdWVzXCI7XG4gICAgICAgIH1cbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICAgICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHRtcC5pbnNlcnRWYWx1ZShmYWN0b3J5KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgRmlndXJlLCBDaXJjbGUsIEFyYywgU3F1YXJlLCBUcmlhbmdsZSwgTGluZSB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxuY29uc3QgTkFNRVNQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3I6IEN1cnNvcikge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGNvbnN0IFttaW5feCwgbWluX3ldID0gY3Vyc29yLmJveC5taW47XG4gICAgY29uc3QgW21heF94LCBtYXhfeV0gPSBjdXJzb3IuYm94Lm1heDtcbiAgICBjb25zdCB3aWR0aCA9IG1heF94IC0gbWluX3g7XG4gICAgY29uc3QgaGVpZ2h0ID0gbWF4X3kgLSBtaW5feTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHttaW5feH0gJHttaW5feX0gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gICAgY3Vyc29yLmZpZ3VyZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5jb25zdCBTUVJUMyA9IE1hdGguc3FydCgzKTtcbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuY29sb3IpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBmaWd1cmUuc3Ryb2tlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFNxdWFyZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBTID0gZmlndXJlLnNpemUgLyAyO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggLSBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCAtIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggKyBTICogZHl9ICR7eSAtIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTICogZHggLSBTICogZHl9ICR7eSArIFMgKiBkeCArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFRyaWFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFMgPSBmaWd1cmUuc2l6ZTtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4ICsgUyAqIGR4fSAke3kgKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSArIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSAtIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSkge1xuICAgIGxldCBzdHlsZSA9IGBmaWxsOiAke2ZpZ3VyZS5maWxsfTtgO1xuICAgIGlmIChmaWd1cmUuc3Ryb2tlID4gMCkge1xuICAgICAgICBzdHlsZSArPSBgc3Ryb2tlLXdpZHRoOiAke2ZpZ3VyZS5zdHJva2V9O2BcbiAgICAgICAgc3R5bGUgKz0gYHN0cm9rZTogJHtmaWd1cmUuY29sb3J9YDtcbiAgICB9XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG59XG4iLCJpbXBvcnQgeyBOb2RlLCBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgTXVsdGlwbGVyLCBBbmdsZSwgQXJndW1lbnQsIER5bmFtaWNBcmd1bWVudCB9IGZyb20gXCIuL2FzdC92YWx1ZXNcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiLi9hc3QvY29sb3JzXCI7XG5pbXBvcnQgKiBhcyBzdHJva2VzIGZyb20gXCIuL2FzdC9zdHJva2VzXCI7XG5pbXBvcnQgKiBhcyBvcHMgZnJvbSBcIi4vYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcbmV4cG9ydCB0eXBlIFZhbHVlU2l6ZSA9IFwiK1wiIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIGlzQWN0aW9uOiBib29sZWFuO1xuICAgIGlzRHluYW1pYzogYm9vbGVhbjtcbiAgICBmYWN0b3J5OiBBY3Rpb25DYiB8IFZhbHVlQ2I7XG4gICAgdmFsdWVTaXplOiBWYWx1ZVNpemU7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGlzQWN0aW9uLCBpc0R5bmFtaWMsIGZhY3RvcnksIHZhbHVlU2l6ZSB9KSB7XG4gICAgICAgIHRoaXMuaXNBY3Rpb24gPSBpc0FjdGlvbjtcbiAgICAgICAgdGhpcy5pc0R5bmFtaWMgPSBpc0R5bmFtaWM7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgICAgIHRoaXMudmFsdWVTaXplID0gdmFsdWVTaXplO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVmFsdWUoZmFjdG9yeTogVmFsdWVDYiwgaXNEeW5hbWljID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IGZhbHNlLCB2YWx1ZVNpemU6IDAsIGlzRHluYW1pYywgZmFjdG9yeSB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHZhbHVlU2l6ZTogVmFsdWVTaXplLCBmYWN0b3J5OiBBY3Rpb25DYikge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogdHJ1ZSwgdmFsdWVTaXplLCBpc0R5bmFtaWM6IHRydWUsIGZhY3RvcnkgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB0b2tlbnMgPSB7XG4gICAgLy8gKioqIFZhbHVlcyAqKipcbiAgICAvLyBDb3VudHNcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIC8vQU5HTEVfMzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzYwKSksXG4gICAgQU5HTEVfMjcwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMjcwKSksXG4gICAgQU5HTEVfMTgwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTgwKSksXG4gICAgQU5HTEVfOTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg5MCkpLFxuICAgIEFOR0xFXzYwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNjApKSxcbiAgICBBTkdMRV80NTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDQ1KSksXG4gICAgQU5HTEVfMzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzMCkpLFxuICAgIEFOR0xFXzE1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTUpKSxcbiAgICAvLyBDb2xvcnNcbiAgICBDT0xPUl9NQVg6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWF4Q29sb3IoKSksXG4gICAgQ09MT1JfTUlOOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1pbkNvbG9yKCkpLFxuICAgIENPTE9SX1NISUZUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAyKSksXG4gICAgQ09MT1JfU0hJRlRfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDQpKSxcbiAgICBDT0xPUl9TSElGVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNSkpLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMTApKSxcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwic29saWRcIikpLFxuICAgIFNUUk9LRV9EQVNIRUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZGFzaGVkXCIpKSxcbiAgICBTVFJPS0VfRE9UVEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRvdHRlZFwiKSksXG4gICAgU1RST0tFX1RISUNLX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoKzEpKSxcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygtMSkpLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBPUF9NVUxUOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLk11bHRPcCgpKSxcbiAgICBPUF9BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuQWRkT3AoKSksXG4gICAgT1BfU1VCOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLlN1Yk9wKCkpLFxuICAgIC8vIEFyZ3VtZW50c1xuICAgIEFSR1VNRU5UOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQXJndW1lbnQoKSksXG4gICAgQ0FMTF9ESUFNT05EOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiRElBTU9ORFwiKSwgdHJ1ZSksXG4gICAgQ0FMTF9JTlZfVFJJQU5HTEU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJJTlZfVFJJQU5HTEVcIiksIHRydWUpLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIENBTExfRjogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiR1wiLCB2KSksXG4gICAgQ0FMTF9IOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkhcIiwgdikpLFxuICAgIC8vIFBhaW50ZXJzXG4gICAgRFJBV19MSU5FOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0xpbmUodikpLFxuICAgIERSQVdfQ0lSQ0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd0NpcmNsZSh2KSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3U3F1YXJlKHYpKSxcbiAgICBEUkFXX1RSSUFOR0xFOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRHJhd1RyaWFuZ2xlKHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzI6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDQsIHYpKSxcbiAgICAvLyBDdXJzb3IgT3BlcmF0b3JzXG4gICAgRk9SV0FSRDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkZvcndhcmQodikpLFxuICAgIFJPVEFURV9MRUZUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlUmlnaHQodikpLFxuICAgIFJFVkVSU0U6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5SZXBsYXkodikpLFxufTtcbiIsImltcG9ydCB7IHJlbmRlclRva2VuIH0gZnJvbSAnLi90b2tlbnMnO1xuaW1wb3J0IHsgc2NyYXBlQW5kUnVuIH0gZnJvbSAnLi9ydW4nO1xuaW1wb3J0IHsgUFJPQ0VEVVJFUywgRFlOQU1JQ19BUkdTLCBTVUZGSVhFUyB9IGZyb20gJy4uL3BhcnNlcic7XG5cbmNvbnN0IElOUFVUUyA9IFtcIml0ZXJhdGlvbnNcIiwgXCJmaXJzdC1jb2xvclwiLCBcInNlY29uZC1jb2xvclwiLCBcInN0cm9rZS1zaXplXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvZGUoY29kZSkge1xuICAgIGNvbnN0IGNiID0gKCkgPT4ge1xuICAgICAgICBzY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICByZW5kZXJDb2RlKGNvZGUpO1xuICAgIElOUFVUUy5mb3JFYWNoKGlucHV0SWQgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBjYiwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyTGlzdE9mRnVuY3Rpb25zKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RPZkZ1bmN0aW9ucygpIHtcbiAgICBjb25zdCBmdW5jdGlvbnNOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdW5jdGlvbnNcIik7XG4gICAgUFJPQ0VEVVJFUy5jb25jYXQoRFlOQU1JQ19BUkdTKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBmdW5jdGlvbnNOb2RlLmFwcGVuZENoaWxkKHJlbmRlckJhck9mRnVuY3Rpb25zKG5hbWUpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQmFyT2ZGdW5jdGlvbnMobmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKTtcbiAgICBjb25zdCBiYXNlRnVuY05vZGUgPSByZW5kZXJBZGRGdW5jdGlvbihcInNwYW5cIiwgbmFtZSk7XG4gICAgY29uc3QgYmFyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBiYXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgIFNVRkZJWEVTLmZvckVhY2goc3VmZml4ID0+IHtcbiAgICAgICAgYmFyTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJBZGRGdW5jdGlvbihcImxpXCIsIG5hbWUsIHN1ZmZpeCkpO1xuICAgIH0pO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoYmFzZUZ1bmNOb2RlKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGJhck5vZGUpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZGRGdW5jdGlvbih0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgY29uc3QgcmVhbE5hbWUgPSBzdWZmaXggPyBgU1VGRklYXyR7c3VmZml4fWAgOiBgQ0FMTF8ke25hbWV9YDtcbiAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zLyR7cmVhbE5hbWV9LnN2ZylgO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInRva2VuLWJ0blwiKTtcbiAgICBub2RlLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSB0aGlzLmRhdGFzZXQ7XG4gICAgICAgIHNob3dPckhpZGVPckFkZEZ1bmN0aW9uKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgIHNjcmFwZUFuZFJ1bigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgZmFsc2UpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJDb2RlKGNvZGUpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGVcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29kZS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyRnVuY3Rpb24obGluZSkpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRnVuY3Rpb24oe25hbWUsIHN1ZmZpeCA9IFwiXCIsIHRva2VucyA9IFtdLCBpc0VkaXRhYmxlID0gdHJ1ZX0pOiBFbGVtZW50IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImZ1bmN0aW9uXCIpO1xuICAgIG5vZGUuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gc3VmZml4O1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyTmFtZShuYW1lLCBzdWZmaXgpKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2Vucyh0b2tlbnMsIHtpc0VkaXRhYmxlfSkpO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBzaG93T3JIaWRlT3JBZGRGdW5jdGlvbihuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nID0gXCJcIik6IHZvaWQge1xuICAgIGNvbnN0IGNvZGVOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlXCIpO1xuICAgIGNvbnN0IGZ1bmNOb2RlID0gY29kZU5vZGUucXVlcnlTZWxlY3RvcihgLmZ1bmN0aW9uW2RhdGEtbmFtZT1cIiR7bmFtZX1cIl1bZGF0YS1zdWZmaXg9XCIke3N1ZmZpeH1cIl1gKTtcbiAgICBpZiAoIWZ1bmNOb2RlKSB7XG4gICAgICAgIGNvZGVOb2RlLmFwcGVuZENoaWxkKHJlbmRlckZ1bmN0aW9uKHtuYW1lLCBzdWZmaXgsIHRva2VuczogW119KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZnVuY05vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9XyR7c3VmZml4fWAgOiBuYW1lO1xuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BBVEh9aWNvbnMvQ0FMTF8ke3JlYWxuYW1lfS5zdmcpYDtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucywge2lzRWRpdGFibGUgPSB0cnVlfSk6IEVsZW1lbnQge1xuICAgIGNvbnN0IHRva2Vuc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRva2Vuc05vZGUuY2xhc3NMaXN0LmFkZChcIm91dGVyLXRva2Vuc1wiKTtcblxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImlubmVyLXRva2Vuc1wiKTtcbiAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuU3BhbigpKTtcbiAgICB9XG4gICAgdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuKHRva2VuKSk7XG4gICAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuU3BhbigpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG9rZW5zTm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICB0b2tlbnNOb2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuUmVtb3ZlU3BhbigpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zTm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5TcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5SZW1vdmVTcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIsIFwicmVtb3ZlXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlLCB0cnVlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2V0VG9rZW5TcGFuRXZlbnRzKG5vZGU6IEVsZW1lbnQsIHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2RHJhZ092ZXIsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldkRyb3AsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2RHJhZ0VudGVyLCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldkRyYWdMZWF2ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gZXZEcmFnT3ZlcihlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZEcm9wKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IG9sZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnaWQnKTtcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgaWYgKCFyZW1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgcmVuZGVyVG9rZW5TcGFuKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCByZW5kZXJUb2tlbih0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBjb25zdCBvbGRUb2tlbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRJZCk7XG4gICAgICAgIGlmIChvbGRUb2tlbk5vZGUuZGF0YXNldC5pc1RlbXBsYXRlID09PSBcIm5vXCIpIHtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmFwZUFuZFJ1bigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFNwYW4obm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2tlbi1zcGFuJykgPyBub2RlIDogbm9kZS5uZXh0U2libGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdFbnRlcihlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgZXhlYywgRnVuYyB9IGZyb20gXCIuLi9leGVjXCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiLi4vc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JhcGVBbmRSdW4oKSB7XG4gICAgY29uc3QgY3Vyc29yQ2ZnID0ge1xuICAgICAgICBmaXJzdENvbG9yOiBzY3JhcGVJbnB1dChcImZpcnN0LWNvbG9yXCIpLFxuICAgICAgICBzZWNvbmRDb2xvcjogc2NyYXBlSW5wdXQoXCJzZWNvbmQtY29sb3JcIiksXG4gICAgICAgIHN0cm9rZVNpemU6IHNjcmFwZUlucHV0QXNGbG9hdChcInN0cm9rZS1zaXplXCIpLFxuICAgIH1cbiAgICBydW4oc2NyYXBlQ29kZSgpLCBzY3JhcGVJbnB1dEFzSW50KFwiaXRlcmF0aW9uc1wiKSwgY3Vyc29yQ2ZnKTtcbn1cblxuZnVuY3Rpb24gcnVuKGNvZGU6IEZ1bmNbXSwgbWF4SXRlcmF0aW9uOiBudW1iZXIgPSAzLCBjdXJzb3JDZmcgPSB7fSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBhcmd1bWVudCA9IDEuMDtcbiAgICBjb25zdCBjdXJzb3IgPSBleGVjKGFyZ3VtZW50LCBtYXhJdGVyYXRpb24sIGNvZGUsIGN1cnNvckNmZyk7XG4gICAgY3Vyc29yLmFkZE1hcmdpbigyMCk7XG4gICAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3IpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUNvZGUoKTogRnVuY1tdIHtcbiAgICBjb25zdCBjb2RlOiBGdW5jW10gPSBbXTtcbiAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb2RlTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1bmN0aW9uXCIpLmZvckVhY2goKGZ1bmNOb2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSBmdW5jTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICBpZiAoaXNIaWRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSBmdW5jTm9kZS5kYXRhc2V0O1xuICAgICAgICBjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZ1bmNOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9rZW5cIikuZm9yRWFjaCh0b2tlbk5vZGUgPT4ge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goKHRva2VuTm9kZSBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC50b2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9Ojoke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgY29kZS5wdXNoKHtuYW1lOiByZWFsbmFtZSwgdG9rZW5zfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0KGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIChub2RlIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBzY3JhcGVJbnB1dEFzSW50KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gc2NyYXBlSW5wdXQoaWQpO1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0QXNGbG9hdChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNjcmFwZUlucHV0KGlkKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkNCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW46IHN0cmluZywgaXNUZW1wbGF0ZTogYm9vbGVhbiA9IGZhbHNlLCBpc0V2ZW50YWJsZTogYm9vbGVhbiA9IGZhbHNlKTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgbm9kZS5pZCA9IGB0b2tlbi0ke3V1aWQ0KCl9YDtcbiAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICBub2RlLmRhdGFzZXQuaXNUZW1wbGF0ZSA9IGlzVGVtcGxhdGUgPyAneWVzJyA6ICdubyc7XG4gICAgLy9ub2RlLmlubmVyVGV4dCA9IHRva2VuO1xuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BBVEh9aWNvbnMvJHt0b2tlbn0uc3ZnKWA7XG4gICAgc2V0VG9rZW5FdmVudHMobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHNldFRva2VuRXZlbnRzKG5vZGU6IEVsZW1lbnQpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2RHJhZ1N0YXJ0LCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZEcmFnRW5kLCBmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBldkRyYWdTdGFydChlKSB7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3Rva2VuJywgdGhpcy5kYXRhc2V0LnRva2VuKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCB0aGlzLmlkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXZEcmFnRW5kKGUpIHtcbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2tlbicpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVG9rZW5JbmZvIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0eXBlOiAnYWN0aW9uJyB8ICd2YWx1ZSc7XG4gICAgZG9jPzogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFRva2VuQ2F0ZWdvcnkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBUb2tlbkluZm9bXTtcbn07XG5cbmNvbnN0IFRPS0VOUzogVG9rZW5DYXRlZ29yeVtdID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdDT1VOVF8xJywgbGFiZWw6ICdPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfMicsIGxhYmVsOiAnVHdvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzUnLCBsYWJlbDogJ0ZpdmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfTUlOVVMnLCBsYWJlbDogJ01pbnVzIE9uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzInLCBsYWJlbDogJ0hhbGYnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV8zJywgbGFiZWw6ICdUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8yXzMnLCBsYWJlbDogJ1R3byB0aGlyZHMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV80JywgbGFiZWw6ICdRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV81JywgbGFiZWw6ICdGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0FuZ2xlcycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzE4MCcsIGxhYmVsOiAnMTgwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfOTAnLCBsYWJlbDogJzkwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNDUnLCBsYWJlbDogJzQ1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMzAnLCBsYWJlbDogJzMwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdNb2RpZmljYXRvcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfTVVMVCcsIGxhYmVsOiAnTXVsdGlwbGUgb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfQUREJywgbGFiZWw6ICdBZGRpdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01BWCcsIGxhYmVsOiAnU2Vjb25kIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01JTicsIGxhYmVsOiAnRmlyc3QgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV80JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV81JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1NUUk9LRV9USElDS19BREQnLCBsYWJlbDogJ1RoaWNrIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfU1VCJywgbGFiZWw6ICdUaGluIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Z1bmN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBUkdVTUVOVCcsIGxhYmVsOiAnQXJndW1lbnQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NBTExfRicsIGxhYmVsOiAnQ2FsbCBGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0NhbGwgRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9IJywgbGFiZWw6ICdDYWxsIEggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGFpbnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19MSU5FJywgbGFiZWw6ICdEcmF3IExpbmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQ0lSQ0xFJywgbGFiZWw6ICdEcmF3IENpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19TUVVBUkUnLCBsYWJlbDogJ0RyYXcgU3F1YXJlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdEcmF3IFRyaWFuZ2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzIgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV80JywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8yJywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvMiAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0N1cnNvcicsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGT1JXQVJEJywgbGFiZWw6ICdNb3ZlIGZvcndhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JPVEFURV9MRUZUJywgbGFiZWw6ICdSb3RhdGUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUk9UQVRFX1JJR0hUJywgbGFiZWw6ICdSb3RhdGUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFVkVSU0UnLCBsYWJlbDogJ1JldmVyc2UnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5JywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRva2Vucyhpc1RlbXBsYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2tlbnMnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgVE9LRU5TLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VucycsICdoaWRlJyk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlTmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmlubmVyVGV4dCA9IGNhdGVnb3J5LmxhYmVsO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXRlZ29yeU5vZGUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlTmFtZSk7XG5cbiAgICAgICAgY2F0ZWdvcnkudG9rZW5zLmZvckVhY2godG9rZW5JbmZvID0+IHtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbkluZm8ubmFtZSwgaXNUZW1wbGF0ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlclRva2VuIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgeyByZW5kZXJGdW5jdGlvbiB9IGZyb20gXCIuL2NvZGVcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGUvbWFpbi5zY3NzXCI7XG5cbmludGVyZmFjZSBUdXRBbmltUGFyYW1zIHtcbiAgICBsaW5lczogc3RyaW5nW10sXG4gICAgaXRlcmF0aW9uczogbnVtYmVyLFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgdG9rZW5zOiBzdHJpbmdbXSxcbiAgICBub2RlSWQ6IHN0cmluZyxcbn1cblxuY2xhc3MgVHV0QW5pbSB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlcjtcbiAgICBwcml2YXRlIGl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIHRoaXMudG9rZW5zID0gcGFyYW1zLnRva2VucztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IC0xO1xuICAgICAgICB0aGlzLml0ZXJhdGlvbnMgPSBwYXJhbXMuaXRlcmF0aW9ucyB8fCAxO1xuICAgICAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXMubm9kZUlkKTtcbiAgICB9XG5cbiAgICBpbml0UmVuZGVyKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW1hZ2VOb2RlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChpbWFnZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIGxpbmVzTm9kZS5jbGFzc0xpc3QuYWRkKFwibGluZXNcIik7XG4gICAgICAgICAgICBwYXJhbXMubGluZXMuZm9yRWFjaChmdWxsTGluZU5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gdGhpcy5zcGxpdEZ1bGxMaW5lTmFtZShmdWxsTGluZU5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVOb2RlID0gcmVuZGVyRnVuY3Rpb24oe25hbWUsIHN1ZmZpeCwgaXNFZGl0YWJsZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICBsaW5lc05vZGUuYXBwZW5kQ2hpbGQobGluZU5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGluZXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBiYXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImJhclwiKTtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiwqsgUFJFVlwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHsgdGhpcy5wcmV2KCk7IH0pO1xuICAgICAgICAgICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIk5FWFQgwrtcIjtcbiAgICAgICAgICAgICAgICBidG5Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7IHRoaXMubmV4dCgpOyB9KTtcbiAgICAgICAgICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJhck5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXRlcmF0ZVRvUG9zaXRpb24ocGFyYW1zOiBUdXRBbmltUGFyYW1zKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXJhbXMuc3RhcnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA+PSB0aGlzLnRva2Vucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgICAgICB0aGlzLm5leHRFeGVjdXRlKCk7XG4gICAgfVxuXG4gICAgcHJldigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2RXhlY3V0ZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uIC09IDE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0RXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb25dO1xuICAgICAgICBpZiAoY29tbWFuZFswXSA9PSBcIiFcIikge1xuICAgICAgICAgICAgLy8gdG9kbyBhY3Rpb25zXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2xpbmUsIHRva2VuXSA9IGNvbW1hbmQuc3BsaXQoXCJAXCIsIDIpO1xuICAgICAgICB0aGlzLmRvbVB1c2hUb2tlbihsaW5lLCB0b2tlbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmV2RXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IHRoaXMudG9rZW5zW3RoaXMucG9zaXRpb25dO1xuICAgICAgICBpZiAoY29tbWFuZFswXSA9PSBcIiFcIikge1xuICAgICAgICAgICAgLy8gdG9kbyBhY3Rpb25zXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2xpbmVdID0gY29tbWFuZC5zcGxpdChcIkBcIiwgMik7XG4gICAgICAgIHRoaXMucmVtb3ZlTGFzdFRva2VuKGxpbmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9tUHVzaFRva2VuKGZ1bGxMaW5lTmFtZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHRva2Vuc05vZGUgPSB0aGlzLmZpbmRMaW5lKGZ1bGxMaW5lTmFtZSk7XG4gICAgICAgIGNvbnN0IHRva2VuTm9kZSA9IHJlbmRlclRva2VuKHRva2VuLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB0b2tlbnNOb2RlLmFwcGVuZENoaWxkKHRva2VuTm9kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVMYXN0VG9rZW4oZnVsbExpbmVOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zTm9kZSA9IHRoaXMuZmluZExpbmUoZnVsbExpbmVOYW1lKTtcbiAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZCh0b2tlbnNOb2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kTGluZShmdWxsTGluZU5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSB0aGlzLnNwbGl0RnVsbExpbmVOYW1lKGZ1bGxMaW5lTmFtZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYC5mdW5jdGlvbltkYXRhLW5hbWU9JyR7bmFtZX0nXSAuaW5uZXItdG9rZW5zYDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwbGl0RnVsbExpbmVOYW1lKGZ1bGxMaW5lTmFtZTogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gZnVsbExpbmVOYW1lLnNwbGl0KFwiOjpcIiwgMSk7XG4gICAgICAgIHJldHVybiBbbmFtZSwgc3VmZml4IHx8IFwiXCJdO1xuICAgIH1cbn1cblxuY29uc3QgQU5JTUFUSU9OUzogVHV0QW5pbVtdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQW5pbWF0aW9uKHBhcmFtczogVHV0QW5pbVBhcmFtcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBUdXRBbmltKHBhcmFtcyk7XG4gICAgYW5pbWF0aW9uLmluaXRSZW5kZXIocGFyYW1zKTtcbiAgICBhbmltYXRpb24uaXRlcmF0ZVRvUG9zaXRpb24ocGFyYW1zKTtcbiAgICBBTklNQVRJT05TLnB1c2goYW5pbWF0aW9uKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==