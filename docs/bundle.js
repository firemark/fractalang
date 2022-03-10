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
/* harmony export */   "initCode": () => (/* binding */ initCode)
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
    var name = _a.name, _b = _a.suffix, suffix = _b === void 0 ? "" : _b, tokens = _a.tokens;
    var node = document.createElement("li");
    node.classList.add("function");
    node.dataset.name = name;
    node.dataset.suffix = suffix;
    node.appendChild(renderName(name, suffix));
    node.appendChild(renderTokens(tokens));
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
function renderTokens(tokens) {
    var tokensNode = document.createElement("div");
    tokensNode.classList.add("outer-tokens");
    var node = document.createElement("div");
    node.classList.add("inner-tokens");
    node.appendChild(renderTokenSpan());
    tokens.forEach(function (token) {
        node.appendChild((0,_tokens__WEBPACK_IMPORTED_MODULE_0__.renderToken)(token));
        node.appendChild(renderTokenSpan());
    });
    tokensNode.appendChild(node);
    tokensNode.appendChild(renderTokenRemoveSpan());
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

function renderToken(token, isTemplate) {
    if (isTemplate === void 0) { isTemplate = false; }
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
/*!**************************!*\
  !*** ./src/web/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/web/tokens.ts");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code */ "./src/web/code.ts");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./run */ "./src/web/run.ts");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");




document.getElementById("action-hide").addEventListener('click', function () {
    document.getElementById("action-hide").classList.add("hidden");
    document.getElementById("action-show").classList.remove("hidden");
    document.getElementById("code-panel").classList.add("hidden");
    return false;
}, false);
document.getElementById("action-show").addEventListener('click', function () {
    document.getElementById("action-show").classList.add("hidden");
    document.getElementById("action-hide").classList.remove("hidden");
    document.getElementById("code-panel").classList.remove("hidden");
    return false;
}, false);
window.addEventListener('load', function (event) {
    var code = [
        { name: "F", tokens: ["DRAW_TRIANGLE", "COUNT_3", "DRAW_LINE", "ARGUMENT", "CALL_F", "ARGUMENT"] },
        { name: "F", suffix: "END", tokens: ["DRAW_CIRCLE", "COUNT_5", "COUNT_2"] },
    ];
    (0,_tokens__WEBPACK_IMPORTED_MODULE_0__.initTokens)();
    (0,_code__WEBPACK_IMPORTED_MODULE_1__.initCode)(code);
    (0,_run__WEBPACK_IMPORTED_MODULE_2__.scrapeAndRun)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGtEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGtEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGtEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGtEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFwQixDQUFvQixDQUFDO0lBQ2xELFNBQVM7SUFDVCwrQ0FBK0M7SUFDL0MsU0FBUyxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjLENBQUM7SUFDNUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxHQUFHLENBQUMsRUFBZCxDQUFjLENBQUM7SUFDNUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOENBQUssQ0FBQyxFQUFFLENBQUMsRUFBYixDQUFhLENBQUM7SUFDMUMsU0FBUztJQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGlEQUFlLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQztJQUNuRCxTQUFTLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxpREFBZSxFQUFFLEVBQXJCLENBQXFCLENBQUM7SUFDbkQsZUFBZSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksbURBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE1QixDQUE0QixDQUFDO0lBQ2hFLGVBQWUsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLG1EQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQztJQUNoRSxlQUFlLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxtREFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTVCLENBQTRCLENBQUM7SUFDaEUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSxtREFBaUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQTdCLENBQTZCLENBQUM7SUFDbEUsU0FBUztJQUNULFlBQVksRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLHdEQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFuQyxDQUFtQyxDQUFDO0lBQ3BFLGFBQWEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLHdEQUFzQixDQUFDLFFBQVEsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDO0lBQ3RFLGFBQWEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLHdEQUFzQixDQUFDLFFBQVEsQ0FBQyxFQUFwQyxDQUFvQyxDQUFDO0lBQ3RFLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksOERBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBcEMsQ0FBb0MsQ0FBQztJQUN6RSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDhEQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXBDLENBQW9DLENBQUM7SUFDekUsYUFBYTtJQUNiLE9BQU8sRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDRDQUFVLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQztJQUM1QyxNQUFNLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSwyQ0FBUyxFQUFFLEVBQWYsQ0FBZSxDQUFDO0lBQzFDLE1BQU0sRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLDJDQUFTLEVBQUUsRUFBZixDQUFlLENBQUM7SUFDMUMsWUFBWTtJQUNaLFFBQVEsRUFBRSxXQUFXLENBQUMsY0FBTSxXQUFJLGlEQUFRLEVBQUUsRUFBZCxDQUFjLENBQUM7SUFDM0MsWUFBWSxFQUFFLFdBQVcsQ0FBQyxjQUFNLFdBQUksd0RBQWUsQ0FBQyxTQUFTLENBQUMsRUFBOUIsQ0FBOEIsRUFBRSxJQUFJLENBQUM7SUFDckUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLGNBQU0sV0FBSSx3REFBZSxDQUFDLGNBQWMsQ0FBQyxFQUFuQyxDQUFtQyxFQUFFLElBQUksQ0FBQztJQUUvRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU0sRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLDhDQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDO0lBQ3hELE1BQU0sRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLDhDQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDO0lBQ3hELE1BQU0sRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLDhDQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUF4QixDQUF3QixDQUFDO0lBQ3hELFdBQVc7SUFDWCxTQUFTLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxrREFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztJQUMxRCxXQUFXLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxvREFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztJQUM5RCxXQUFXLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxvREFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBekIsQ0FBeUIsQ0FBQztJQUM5RCxhQUFhLEVBQUUsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFDLElBQUksV0FBSSxzREFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztJQUNsRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsR0FBRyxFQUFFLFdBQUMsSUFBSSxXQUFJLHFEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENB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LENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRVYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxlQUFLO0lBQ2pDLElBQU0sSUFBSSxHQUFHO1FBQ1QsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEVBQUM7UUFDaEcsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBQztLQUM1RSxDQUFDO0lBQ0YsbURBQVUsRUFBRSxDQUFDO0lBQ2IsK0NBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLGtEQUFZLEVBQUUsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvYXN0L2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2FzdC9iYXNlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9hc3QvY29sb3JzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9hc3Qvb3BzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9hc3Qvc3Ryb2tlcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvYXN0L3ZhbHVlcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29udGV4dC50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY3Vyc29yLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9leGVjLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9maWd1cmVzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3N2Zy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvdG9rZW5zLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvY29kZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3J1bi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xvZ28tbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2tlbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgZ2FwOiA1cHg7XFxufVxcbi50b2tlbnMuaGlkZSAudG9rZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRva2VucyA+IC5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRva2VuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi50b2tlbi1zcGFuIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnRva2VuLXNwYW4ub3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgYm9yZGVyOiAycHggIzk5OSBkb3R0ZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4udG9rZW4tc3Bhbi5vdmVyOjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB0O1xcbiAgY29udGVudDogXFxcIitcXFwiO1xcbn1cXG4udG9rZW4tc3Bhbi5yZW1vdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q4ODtcXG4gIGJvcmRlcjogMnB4ICM5MjIgZG90dGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi50b2tlbi1zcGFuLnJlbW92ZTo6YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXG4gIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG59XFxuXFxuI2Z1bmN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4jZnVuY3Rpb25zID4gbGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4jZnVuY3Rpb25zIC50b2tlbi1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNmdW5jdGlvbnMgLnRva2VuLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG4jZnVuY3Rpb25zIC5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNmdW5jdGlvbnMgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jZnVuY3Rpb25zIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2NvZGUge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4jY29kZSA+IGxpIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvZGUgPiBsaSA+IC5uYW1lIHtcXG4gIGZsZXg6IDAgMSA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuI2NvZGUgPiBsaSA+IC5vdXRlci10b2tlbnMge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMDtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbn1cXG4jY29kZSA+IGxpID4gLm91dGVyLXRva2VucyA+IC5pbm5lci10b2tlbnMge1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4jY29kZSA+IGxpID4gLm91dGVyLXRva2VucyA+IC5pbm5lci10b2tlbnMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4jY29kZSA+IGxpID4gLm91dGVyLXRva2VucyA+IC5yZW1vdmUge1xcbiAgZmxleDogMCAwIGF1dG87XFxufVxcbiNjb2RlID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVweCk7XFxufVxcblxcbiNpbWFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZWRpdG9yIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbiNjb2RlLWJhciB7XFxuICBtYXJnaW46IDAgMzBweDtcXG59XFxuXFxuI2NvZGUtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWFsaWduOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiA0NXZoO1xcbn1cXG5cXG4jdG9rZW5zIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDEwcHg7XFxufVxcbiN0b2tlbnMgPiAudG9rZW5zIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Rva2Vucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29kZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBUjs7QURJQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0k7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNEWjtBREtJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0hSO0FES1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0haOztBQ3JEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEd0RKO0FDdERJO0VBQ0ksZUFBQTtBRHdEUjtBQ3JESTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUR1RFI7QUNyRFE7RUFDSSxzQkFBQTtBRHVEWjtBQ25ESTtFQUNJLGtCQUFBO0FEcURSO0FDbkRRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURxRFo7QUNqRFk7RUFDSSxjQUFBO0FEbURoQjs7QUM3Q0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FEZ0RKO0FDOUNJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QURnRFI7QUM5Q1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBRGdEWjtBQzdDUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUQrQ1o7QUM3Q1k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUQrQ2hCO0FDOUNnQjtFQUFNLGNBQUE7QURpRHRCO0FDOUNZO0VBQVcsY0FBQTtBRGlEdkI7QUM5Q1E7RUFDSSxhQUFBO0FEZ0RaOztBQXBJQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBdUlKOztBQXBJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQXVJSjs7QUFwSUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXVJSjs7QUFwSUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXVJSjs7QUFwSUE7RUFDSSxjQUFBO0FBdUlKOztBQXBJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXVJSjs7QUFwSUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQXVJSjtBQXJJSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUF1SVI7O0FBbklBO0VBQ0ksd0JBQUE7QUFzSUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRva2VucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgJi5oaWRlIC50b2tlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgID4gLmxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcblxcbi50b2tlbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4udG9rZW4tc3BhbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAmLm92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmLnJlbW92ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDg4O1xcbiAgICAgICAgYm9yZGVyOiAycHggIzkyMiBkb3R0ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJYXFxcIjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJy4vdG9rZW5zJztcXG5AaW1wb3J0ICcuL2NvZGUnO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXB4KTtcXG59XFxuXFxuI2ltYWdlIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZWRpdG9yIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNjb2RlLWJhciB7XFxuICAgIG1hcmdpbjogMCAzMHB4O1xcbn1cXG5cXG4jY29kZS1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtYWxpZ246IHN0cmV0Y2g7XFxuICAgIGhlaWdodDogNDV2aDtcXG59XFxuXFxuI3Rva2VucyB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgID4gLnRva2VucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIixcIiNmdW5jdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC50b2tlbi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93biB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jY29kZSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgID4gLm5hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gLm91dGVyLXRva2VucyAge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG5cXG4gICAgICAgICAgICA+IC5pbm5lci10b2tlbnMge1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICA+ICogeyBmbGV4OiAwIDAgYXV0bzsgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICA+IC5yZW1vdmUge2ZsZXg6IDAgMCBhdXRvOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZGUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBOb2RlLCBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUsIEFjdGlvblJlc3VsdCwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24gaW1wbGVtZW50cyBOb2RlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgYWN0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBjb25zdCBsb2NhbHMgPSBhY3Rpb25zLm1hcCgoKSA9PiAoe30pKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaXplOykge1xuICAgICAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHMuYXQoaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9ucy5hdChpbmRleCk7XG4gICAgICAgICAgICBjb25zdCB7IHNoaWZ0LCByZXZlcnNlIH0gPSBhY3Rpb24uZXhlYyhjb250ZXh0LCBsb2NhbCk7XG4gICAgICAgICAgICB0aGlzLmV4ZWNSZXZlcnNlKGluZGV4LCByZXZlcnNlID8gTWF0aC5yb3VuZChyZXZlcnNlKSA6IDAsIGNvbnRleHQpO1xuICAgICAgICAgICAgaW5kZXggKz0gc2hpZnQgPyBNYXRoLnJvdW5kKHNoaWZ0KSA6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShzdG9wSW5kZXg6IG51bWJlciwgcmV2ZXJzZTogbnVtYmVyLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGlmIChyZXZlcnNlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgY29uc3Qgc3RhcnRSZXNlcnZlID0gTWF0aC5tYXgoMCwgc3RvcEluZGV4IC0gcmV2ZXJzZSk7XG4gICAgICAgIGZvcihsZXQgaW5kZXggPSBzdG9wSW5kZXg7IGluZGV4ID49IHN0YXJ0UmVzZXJ2ZTsgaW5kZXgtLSkge1xuICAgICAgICAgICAgYWN0aW9ucy5hdChpbmRleCkuZXhlY1JldmVyc2UoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaXplKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIE5vZGVXaXRoVmFsdWUgZXh0ZW5kcyBBY3Rpb25Ob2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBWYWx1ZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLnZhbHVlLCBjb250ZXh0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcmd1bWVudCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudCk7XG4gICAgICAgIGZ1bmMuZXhlYyhuZXdDb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGNvbnRleHQuZmluZEZ1bmN0aW9uKHRoaXMubmFtZSk7XG4gICAgICAgIGlmICghKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcmd1bWVudCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IGNvbnRleHQuY3JlYXRlTmV3Q29udGV4dChuZXdBcmd1bWVudCk7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGZ1bmMuc2l6ZSgpIC0gMTtcbiAgICAgICAgZnVuYy5leGVjUmV2ZXJzZShsYXN0SW5kZXgsIGxhc3RJbmRleCwgbmV3Q29udGV4dCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZHJhd0xpbmUobGVuZ3RoLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdDaXJjbGUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3Q2lyY2xlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdTcXVhcmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5kcmF3U3F1YXJlKHNpemUsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdUcmlhbmdsZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHt2YWx1ZTogc2l6ZSwgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdUcmlhbmdsZShzaXplLCBjb2xvcik7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmRyYXdBcmNMaW5lKHRoaXMucmF0aW8sIHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IGNvbnRleHQuZ2V0Q3Vyc29yKCk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlTGVmdCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCkge1xuICAgICAgICBjb25zdCBhbmdsZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuZ2V0Q3Vyc29yKCkucm90YXRlKGFuZ2xlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVSaWdodCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb250ZXh0LmdldEN1cnNvcigpLnJvdGF0ZShhbmdsZSk7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5nZXRDdXJzb3IoKS5yb3RhdGUoYW5nbGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2UgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICByZXR1cm4ge3JldmVyc2U6IGl0ZXJhdGlvbnN9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlcGxheSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IGFueSk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBsb2NhbC5jb3VudGVyIHx8IDE7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLnJvdW5kKHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50ZXIsIHNpemUpO1xuICAgICAgICBpZiAoY291bnRlciA8IHNpemUpIHtcbiAgICAgICAgICAgIGxvY2FsLmNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICAgICAgICAgIHJldHVybiB7c2hpZnQ6IC0xfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlIHt9XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZU5vZGUgaW1wbGVtZW50cyBOb2RlIHtcbiAgICBhYnN0cmFjdCBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uUmVzdWx0IHtcbiAgICBzaGlmdD86IG51bWJlcjtcbiAgICByZXZlcnNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aW9uTm9kZSBpbXBsZW1lbnRzIE5vZGUge1xuICAgIGFic3RyYWN0IGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IGFueSk6IEFjdGlvblJlc3VsdDtcbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KSB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzOiBWYWx1ZU5vZGVbXSwgY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgaW5pdDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBjb2xvcjogY29udGV4dC5hcmd1bWVudC5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IChhOiBudW1iZXIsIGI6bnVtYmVyKSA9PiBhICogYixcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZU5vZGVzLnJlZHVjZShwYXJ0RXZhbC5iaW5kKHRoaXMsIGNvbnRleHQpLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gcGFydEV2YWwoY29udGV4dDogQ29udGV4dCwgYWNjOiBFdmFsdWVkVmFsdWUsIG5vZGU6IFZhbHVlTm9kZSk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBub2RlLmV2YWwoY29udGV4dCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3VmFsdWUudmFsdWVUcmFuc2Zvcm1lciB8fCBhY2MudmFsdWVUcmFuc2Zvcm1lcjtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCA/IHRyYW5zZm9ybShhY2MudmFsdWUsIG5ld1ZhbHVlLnZhbHVlKSA6IGFjYy52YWx1ZSxcbiAgICAgICAgY29sb3I6IG5ld1ZhbHVlLmNvbG9yICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5jb2xvciA6IGFjYy5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IG5ld1ZhbHVlLnN0cm9rZVN0eWxlICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VTdHlsZSA6IGFjYy5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyA6IGFjYy5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IHRyYW5zZm9ybSxcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTWF4Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDEuMH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWluQ29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7Y29sb3I6IDAuMH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2hpZnRDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGxldCBjb2xvciA9IChjb250ZXh0LmFyZ3VtZW50LmNvbG9yICsgdGhpcy5zaGlmdCkgJSAxLjA7XG4gICAgICAgIGlmIChjb2xvciA8IDAuMCkge1xuICAgICAgICAgICAgY29sb3IgKz0gMS4wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7Y29sb3J9O1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE11bHRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKiBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICsgYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1Yk9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAtIGIgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBTdHJva2VTdHlsZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXRTdHJva2VTdHlsZSBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzdHJva2U6IFN0cm9rZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3Ioc3Ryb2tlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVN0eWxlOiB0aGlzLnN0cm9rZSB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgU2hpZnRTdHJva2VUaGlja25lc3MgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBjb25zdCBzdHJva2VUaGlja25lc3MgPSBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyArIHRoaXMuc2hpZnQ7XG4gICAgICAgIHJldHVybiB7IHN0cm9rZVRoaWNrbmVzcyB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEFuZ2xlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZWRBbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vcm1hbGl6ZWRBbmdsZSA9IGFuZ2xlIC8gMzYwLjA7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy5ub3JtYWxpemVkQW5nbGV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBjb250ZXh0LmFyZ3VtZW50LnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlTm9kZXMgPSBjb250ZXh0LmZpbmRGdW5jdGlvbih0aGlzLm5hbWUpO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVOb2RlcykpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHZhbHVlTm9kZXMsIGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuXG5leHBvcnQgdHlwZSBTdHJva2VTdHlsZSA9IFwic29saWRcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWx1ZWRWYWx1ZSB7XG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgY29sb3I/OiBudW1iZXI7XG4gICAgc3Ryb2tlU3R5bGU/OiBTdHJva2VTdHlsZTtcbiAgICBzdHJva2VUaGlja25lc3M/OiBudW1iZXI7XG4gICAgdmFsdWVUcmFuc2Zvcm1lcj86IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dENmZyB7XG4gICAgbWF4SXRlcmF0aW9uOiBudW1iZXI7XG4gICAgY3Vyc29yOiBDdXJzb3I7XG4gICAgYmFnOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcih7bWF4SXRlcmF0aW9uLCBiYWcsIGN1cnNvcn0pIHtcbiAgICAgICAgdGhpcy5tYXhJdGVyYXRpb24gPSBtYXhJdGVyYXRpb247XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgICAgICB0aGlzLmJhZyA9IGJhZztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICBwdWJsaWMgaXRlcmF0aW9uOiBudW1iZXI7XG4gICAgcHVibGljIGFyZ3VtZW50OiBFdmFsdWVkVmFsdWU7XG4gICAgcHJpdmF0ZSBjZmc6IENvbnRleHRDZmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7Y2ZnLCBhcmd1bWVudCwgaXRlcmF0aW9uID0gMH0pIHtcbiAgICAgICAgdGhpcy5jZmcgPSBjZmc7XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5pdGVyYXRpb24gPSBpdGVyYXRpb247XG4gICAgfVxuXG4gICAgZmluZEZ1bmN0aW9uKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBpdGVyYXRpb24gPSB0aGlzLml0ZXJhdGlvbjtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSB0aGlzLmNmZy5tYXhJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmFtZXNUb0ZpbmQgPSBbbmFtZV07XG4gICAgICAgIGlmIChpdGVyYXRpb24gJSAyID09IDApIHtcbiAgICAgICAgICAgIG5hbWVzVG9GaW5kLnVuc2hpZnQoYCR7bmFtZX06OkVWRU5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWVzVG9GaW5kLnVuc2hpZnQoYCR7bmFtZX06Ok9ERGApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVyYXRpb24gPT0gdGhpcy5jZmcubWF4SXRlcmF0aW9uIC0gMSkge1xuICAgICAgICAgICAgbmFtZXNUb0ZpbmQudW5zaGlmdChgJHtuYW1lfTo6RU5EYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdEZ1bmNOYW1lID0gbmFtZXNUb0ZpbmQuZmluZChuYW1lID0+IHRoaXMuY2ZnLmJhZ1tuYW1lXSk7XG4gICAgICAgIHJldHVybiBleGlzdEZ1bmNOYW1lID8gdGhpcy5jZmcuYmFnW2V4aXN0RnVuY05hbWVdIDogbnVsbDtcbiAgICB9XG5cbiAgICBnZXRDdXJzb3IoKTogQ3Vyc29yIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2ZnLmN1cnNvcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdDb250ZXh0KG5ld0FyZ3VtZW50OiBFdmFsdWVkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZXh0KHtcbiAgICAgICAgICAgIGNmZzogdGhpcy5jZmcsXG4gICAgICAgICAgICBhcmd1bWVudDogbmV3QXJndW1lbnQsXG4gICAgICAgICAgICBpdGVyYXRpb246IHRoaXMuaXRlcmF0aW9uICsgMSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRmlndXJlLCBMaW5lLCBTcXVhcmUsIFRyaWFuZ2xlLCBDaXJjbGUsIEFyYyB9IGZyb20gXCIuL2ZpZ3VyZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3gge1xuICAgIG1pbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBtYXg6IFtudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBjbGFzcyBDdXJzb3Ige1xuICAgIHN0cm9rZVNpemU6IG51bWJlcjtcbiAgICBkaXN0YW5jZU11bHRpcGxlcjogbnVtYmVyO1xuICAgIHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgYW5nbGU6IG51bWJlcjtcbiAgICBmaWd1cmVzOiBGaWd1cmVbXTtcbiAgICBib3g6IEJveDtcbiAgICBmaXJzdENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgc2Vjb25kQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgc3Ryb2tlU2l6ZSA9IDEsXG4gICAgICAgIGRpc3RhbmNlTXVsdGlwbGVyID0gMTAwLFxuICAgICAgICBmaXJzdENvbG9yID0gXCIjMDAwMDAwXCIsXG4gICAgICAgIHNlY29uZENvbG9yID0gXCIjREMxNDNDXCIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc3Ryb2tlU2l6ZSA9IHN0cm9rZVNpemU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBkaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFswLjAsIDAuMF07XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwLjA7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBbMS4wLCAwLjBdO1xuICAgICAgICB0aGlzLmZpZ3VyZXMgPSBbXTtcbiAgICAgICAgdGhpcy5ib3ggPSB7XG4gICAgICAgICAgICBtaW46IFswLjAsIDAuMF0sXG4gICAgICAgICAgICBtYXg6IFswLjAsIDAuMF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlyc3RDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihmaXJzdENvbG9yKTtcbiAgICAgICAgdGhpcy5zZWNvbmRDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihzZWNvbmRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZXhUb0NvbG9yKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMSwgMiksIDE2KTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMywgMiksIDE2KTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNSwgMiksIDE2KTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgICB9XG5cbiAgICByb3RhdGUoYW5nbGU6IG51bWJlcikge1xuICAgICAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAgICAgLy8gYW5nbGUgPSAxLjAgLT4gMzYwwrBcbiAgICAgICAgdGhpcy5hbmdsZSA9ICh0aGlzLmFuZ2xlICsgYW5nbGUpICUgMS4wO1xuICAgICAgICBjb25zdCByYWRpYW5zID0gYW5nbGUgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkaWFucyk7XG4gICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzBdID0geCAqIGNvcyAtIHkgKiBzaW47XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25bMV0gPSB4ICogc2luICsgeSAqIGNvcztcbiAgICB9XG5cbiAgICBkcmF3TGluZShkaXN0YW5jZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbb2xkX3gsIG9sZF95XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIHRoaXMuX2ZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBbbmV3X3gsIG5ld195XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHtcbiAgICAgICAgICAgIHN0cm9rZTogdGhpcy5zdHJva2VTaXplICogc3Ryb2tlLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY2FsY0NvbG9yKGNvbG9yKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IExpbmUoW29sZF94LCBvbGRfeV0sIFtuZXdfeCwgbmV3X3ldLCBvcHMpKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgbmR4ID0gLWR5O1xuICAgICAgICBjb25zdCBuZHkgPSBkeDtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBbeCArIGFyY1JhZGl1cyAqIG5keCwgeSArIGFyY1JhZGl1cyAqIG5keV07XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gdGhpcy5hbmdsZSAtIDAuMjU7XG4gICAgICAgIGNvbnN0IG9wcyA9IHtcbiAgICAgICAgICAgIHN0cm9rZTogdGhpcy5zdHJva2VTaXplICogc3Ryb2tlLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY2FsY0NvbG9yKGNvbG9yKSxcbiAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgc2hpZnQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IEFyYyhwb2ludCwgYXJjUmFkaXVzLCByYXRpbywgb3BzKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZChzaXplKTtcbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KHBvaW50LCBNYXRoLmFicyhhcmNSYWRpdXMpKTtcbiAgICB9XG5cbiAgICBkcmF3Q2lyY2xlKHJhZGl1czogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IG9wcyA9IHsgZmlsbDogdGhpcy5jYWxjQ29sb3IoY29sb3IpIH07XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBDaXJjbGUoW3gsIHldLCByYWRpdXMsIG9wcykpO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoc2l6ZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3Qgb3BzID0geyBmaWxsOiB0aGlzLmNhbGNDb2xvcihjb2xvcikgfTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFNxdWFyZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBvcHMpKTtcbiAgICB9XG5cbiAgICBkcmF3VHJpYW5nbGUoc2l6ZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3Qgb3BzID0geyBmaWxsOiB0aGlzLmNhbGNDb2xvcihjb2xvcikgfTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFRyaWFuZ2xlKFt4LCB5XSwgW2R4LCBkeV0sIHNpemUsIG9wcykpO1xuICAgIH1cblxuICAgIGZvcndhcmQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgdGhpcy5jb21wdXRlQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZvcndhcmQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdICs9IHggKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geSAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICB9XG5cbiAgICBhZGRNYXJnaW4obWFyZ2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdIC09IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzBdICs9IG1hcmdpbjtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdICs9IG1hcmdpbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVCb3goW3gsIHldOiBudW1iZXJbXSwgc2l6ZSA9IDApIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzBdLCB4IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFswXSwgeCArIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMV0sIHkgLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzFdLCB5ICsgc2l6ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNhID0gdGhpcy5maXJzdENvbG9yO1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMuc2Vjb25kQ29sb3I7XG4gICAgICAgIGNvbnN0IGFSYXRpbyA9IE1hdGguYWJzKGNvbG9yIC0gMC41KSAqIDI7XG4gICAgICAgIGNvbnN0IGJSYXRpbyA9IDEuMCAtIGFSYXRpbztcbiAgICAgICAgY29uc3QgciA9IE1hdGgudHJ1bmMoY2FbMF0gKiBhUmF0aW8gKyBjYlswXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLnRydW5jKGNhWzFdICogYVJhdGlvICsgY2JbMV0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBiID0gTWF0aC50cnVuYyhjYVsyXSAqIGFSYXRpbyArIGNiWzJdICogYlJhdGlvKTtcbiAgICAgICAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCIuL2N1cnNvclwiO1xuaW1wb3J0IHsgcGFyc2VMaW5lLCBwYXJzZVJhd1Rva2VucyB9IGZyb20gXCIuL3BhcnNlclwiO1xuaW1wb3J0IHsgQ29udGV4dENmZywgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWModmFsdWVBcmd1bWVudDogbnVtYmVyLCBtYXhJdGVyYXRpb246IG51bWJlciwgZnVuY3Rpb25zOiBGdW5jW10sIGN1cnNvckNmZyA9IHt9KTogQ3Vyc29yIHtcbiAgICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGN1cnNvckNmZyk7XG4gICAgY29uc3QgYmFnID0ge307XG4gICAgZnVuY3Rpb25zLmZvckVhY2goKHtuYW1lLCB0b2tlbnM6IHJhd1Rva2Vuc30pID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zKTtcbiAgICAgICAgYmFnW25hbWVdID0gcGFyc2VMaW5lKG5hbWUsIHRva2Vucyk7XG4gICAgfSk7XG4gICAgY29uc3QgY2ZnID0gbmV3IENvbnRleHRDZmcoeyBtYXhJdGVyYXRpb24sIGJhZywgY3Vyc29yOiBjdXJzb3IgfSk7XG4gICAgY29uc3QgYXJndW1lbnQgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZUFyZ3VtZW50LFxuICAgICAgICBzdHJva2VTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDEuMCxcbiAgICAgICAgY29sb3I6IDAuMCxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IGNmZywgYXJndW1lbnQgfSk7XG5cbiAgICBzdGFydEV4ZWMoY29udGV4dCwgYmFnKTtcblxuICAgIHJldHVybiBjdXJzb3I7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RXhlYyhjb250ZXh0OiBDb250ZXh0LCBiYWcpIHtcbiAgICBjb25zdCBmdW5jID0gY29udGV4dC5maW5kRnVuY3Rpb24oXCJTVEFSVFwiKSB8fCBjb250ZXh0LmZpbmRGdW5jdGlvbihcIkZcIik7XG4gICAgaWYgKGZ1bmMpIHtcbiAgICAgICAgZnVuYy5leGVjKGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgRmlndXJlIHt9XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgICBmaXJzdFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdFBvaW50LCBzZWNvbmRQb2ludCwge2NvbG9yID0gXCJibGFja1wiLCBzdHJva2UgPSAxfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZmlyc3RQb2ludCA9IGZpcnN0UG9pbnQ7XG4gICAgICAgIHRoaXMuc2Vjb25kUG9pbnQgPSBzZWNvbmRQb2ludDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIGZpbGw6IHN0cmluZztcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIHJhZGl1cywge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5maWxsID0gZmlsbDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHJva2U6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHJhdGlvLCB7ZmlsbCA9IFwiYmxhY2tcIiwgY29sb3IgPSBcIm5vbmVcIiwgY2xvc2UgPSBmYWxzZSwgc2hpZnQgPSAwLjAsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcXVhcmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNpemU6IG51bWJlcjtcbiAgICBmaWxsOiBzdHJpbmc7XG4gICAgc3Ryb2tlOiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwge2ZpbGwgPSBcImJsYWNrXCIsIGNvbG9yID0gXCJub25lXCIsIHN0cm9rZSA9IDB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuZmlsbCA9IGZpbGw7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gc3Ryb2tlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJpYW5nbGUgIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgZmlsbDogc3RyaW5nO1xuICAgIHN0cm9rZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgb3JpZW50YXRpb24sIHNpemUsIHtmaWxsID0gXCJibGFja1wiLCBjb2xvciA9IFwibm9uZVwiLCBzdHJva2UgPSAwfSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmZpbGwgPSBmaWxsO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2VuLCB0b2tlbnMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIi4vdG9rZW5zXCI7XG5pbXBvcnQgeyBOb2RlLCBBY3Rpb25Ob2RlLCBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9hc3QvYWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgRFlOQU1JQ19BUkdTID0gW1wiRElBTU9ORFwiLCBcIklOVl9UUklBTkdMRVwiXTtcbmV4cG9ydCBjb25zdCBQUk9DRURVUkVTID0gW1wiRlwiLCBcIkdcIiwgXCJIXCJdO1xuZXhwb3J0IGNvbnN0IFNVRkZJWEVTID0gW1wiRU5EXCIsIFwiRVZFTlwiLCBcIk9ERFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vuczogc3RyaW5nW10pOiBUb2tlbltdIHtcbiAgICByZXR1cm4gcmF3VG9rZW5zLm1hcChyYXcgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tyYXddO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBgUGFyc2luZyBlcnJvcjogJHtyYXd9IGlzIG5vdCB1bmRlZmluZWQgYXMgdG9rZW4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSk7XG59XG5cbmNsYXNzIEFjdGlvblRtcCB7XG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcbiAgICBwcml2YXRlIHZhbHVlczogVmFsdWVOb2RlW107XG4gICAgcHJpdmF0ZSB0b2tlbjogVG9rZW4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25Ub2tlbih0b2tlbjogVG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldEFjdGlvblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIGdldFZhbHVlc0xlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzQWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbiAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnRva2VuLmZhY3RvcnkgYXMgQWN0aW9uQ2I7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZhY3RvcnkodGhpcy52YWx1ZXMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbnNlcnRWYWx1ZSh2YWx1ZTogVmFsdWVOb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKSB7XG4gICAgaWYgKERZTkFNSUNfQVJHUy5pbmRleE9mKG5hbWUpID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZVZhbHVlKHRva2Vucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlTGluZUZ1bmMobmFtZSwgdG9rZW5zKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTGluZUZ1bmMobmFtZTogc3RyaW5nLCB0b2tlbnM6IFRva2VuW10pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgY29uc3QgdG1wID0gbmV3IEFjdGlvblRtcCgpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRtcC5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICBwYXJzZVZhbHVlKHRva2VuLCB0bXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VBY3Rpb24odG9rZW4sIHRtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0bXAuZ2V0VmFsdWVzTGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIHRtcC5wdXNoQWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihuYW1lLCB0bXAuZ2V0QWN0aW9ucygpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMaW5lVmFsdWUodG9rZW5zOiBUb2tlbltdKTogVmFsdWVOb2RlW10ge1xuICAgIHJldHVybiB0b2tlbnMubWFwKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGFjdGlvbnMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4uaXNEeW5hbWljKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IE5vIGR5bmFtaWMgZWxlbWVudHMgYXJlIGFsbG93ZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFjdGlvbih0b2tlbjogVG9rZW4sIHRtcDogQWN0aW9uVG1wKSB7XG4gICAgaWYgKCF0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICB0aHJvdyBcIlBhcnNpbmcgZXJyb3I6IHRva2VuIGlzIG5vdCBhbiBhY3Rpb25cIjtcbiAgICB9XG4gICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICBpZiAodG9rZW4udmFsdWVTaXplID09PSAwKSB7XG4gICAgICAgIHRtcC5wdXNoQWN0aW9uKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBjb25zdCB7IHZhbHVlU2l6ZSB9ID0gdG1wLmdldEFjdGlvblRva2VuKCk7XG4gICAgaWYgKHRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIGlmICh2YWx1ZVNpemUgIT09IFwiK1wiICYmIHRtcC5nZXRWYWx1ZXNMZW5ndGgoKSA8IHZhbHVlU2l6ZSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBoYXMgbm90IGVub3VnaCB2YWx1ZXNcIjtcbiAgICAgICAgfVxuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgICAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgdG1wLmluc2VydFZhbHVlKGZhY3RvcnkoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBGaWd1cmUsIENpcmNsZSwgQXJjLCBTcXVhcmUsIFRyaWFuZ2xlLCBMaW5lIH0gZnJvbSBcIi4vZmlndXJlc1wiO1xuXG5jb25zdCBOQU1FU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcjogQ3Vyc29yKSB7XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJzdmdcIik7XG4gICAgY29uc3QgW21pbl94LCBtaW5feV0gPSBjdXJzb3IuYm94Lm1pbjtcbiAgICBjb25zdCBbbWF4X3gsIG1heF95XSA9IGN1cnNvci5ib3gubWF4O1xuICAgIGNvbnN0IHdpZHRoID0gbWF4X3ggLSBtaW5feDtcbiAgICBjb25zdCBoZWlnaHQgPSBtYXhfeSAtIG1pbl95O1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAke21pbl94fSAke21pbl95fSAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBjdXJzb3IuZmlndXJlcy5mb3JFYWNoKGZpZ3VyZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0b1N2Zyhkb2N1bWVudCwgZmlndXJlKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmNvbnN0IFNRUlQzID0gTWF0aC5zcXJ0KDMpO1xuY29uc3QgU1FSVDNIMiA9IE1hdGguc3FydCgzKSAvIDI7XG5jb25zdCBIMiA9IDEgLyAyO1xuXG5mdW5jdGlvbiB0b1N2Zyhkb2N1bWVudCwgZmlndXJlOiBGaWd1cmUpIHtcbiAgICBpZiAoZmlndXJlIGluc3RhbmNlb2YgTGluZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJsaW5lXCIpO1xuICAgICAgICBjb25zdCBbeDEsIHkxXSA9IGZpZ3VyZS5maXJzdFBvaW50O1xuICAgICAgICBjb25zdCBbeDIsIHkyXSA9IGZpZ3VyZS5zZWNvbmRQb2ludDtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCB4MSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTFcIiwgeTEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIngyXCIsIHgyKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCB5Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGZpZ3VyZS5jb2xvcik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGZpZ3VyZS5zdHJva2UpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIENpcmNsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJjaXJjbGVcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCB4KTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCB5KTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIGZpZ3VyZS5yYWRpdXMpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgQXJjKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgciA9IGZpZ3VyZS5yYWRpdXM7XG4gICAgICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSBmaWd1cmUuc2hpZnQgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3QgZW5kQW5nbGUgPSAoZmlndXJlLnNoaWZ0ICsgZmlndXJlLnJhdGlvKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzdGFydF94ID0geCArIHIgKiBNYXRoLmNvcyhzdGFydEFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeSA9IHkgKyByICogTWF0aC5zaW4oc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGVuZF94ID0geCArIHIgKiBNYXRoLmNvcyhlbmRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGVuZF95ID0geSArIHIgKiBNYXRoLnNpbihlbmRBbmdsZSk7XG4gICAgICAgIGNvbnN0IGZsYWcxID0gTWF0aC5hYnMoZmlndXJlLnJhdGlvKSA8PSAwLjUgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBjb25zdCBmbGFnMiA9IGZpZ3VyZS5yYXRpbyA8PSAwLjAgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICBsZXQgcGF0aCA9IGBNICR7c3RhcnRfeH0gJHtzdGFydF95fWA7XG4gICAgICAgIHBhdGggKz0gYCBBICR7cn0gJHtyfSAwICR7ZmxhZzF9ICR7ZmxhZzJ9ICR7ZW5kX3h9ICR7ZW5kX3l9YDtcbiAgICAgICAgaWYgKGZpZ3VyZS5jbG9zZSkge1xuICAgICAgICAgICAgcGF0aCArPSBgTCAke3h9ICR7eX0gWmA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgU3F1YXJlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFMgPSBmaWd1cmUuc2l6ZSAvIDI7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCAtIFMgKiBkeCAtIFMgKiBkeX0gJHt5ICsgUyAqIGR4IC0gUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFMgKiBkeCArIFMgKiBkeX0gJHt5IC0gUyAqIGR4IC0gUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFMgKiBkeCArIFMgKiBkeX0gJHt5IC0gUyAqIGR4ICsgUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFMgKiBkeCAtIFMgKiBkeX0gJHt5ICsgUyAqIGR4ICsgUyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgVHJpYW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgUyA9IGZpZ3VyZS5zaXplO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggKyBTICogZHh9ICR7eSArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5ICsgU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5IC0gU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEJhc2ljQXR0cnMoZmlndXJlLCBub2RlKSB7XG4gICAgbGV0IHN0eWxlID0gYGZpbGw6ICR7ZmlndXJlLmZpbGx9O2A7XG4gICAgaWYgKGZpZ3VyZS5zdHJva2UgPiAwKSB7XG4gICAgICAgIHN0eWxlICs9IGBzdHJva2Utd2lkdGg6ICR7ZmlndXJlLnN0cm9rZX07YFxuICAgICAgICBzdHlsZSArPSBgc3Ryb2tlOiAke2ZpZ3VyZS5jb2xvcn1gO1xuICAgIH1cbiAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcbn1cbiIsImltcG9ydCB7IE5vZGUsIFZhbHVlTm9kZSwgQWN0aW9uTm9kZSB9IGZyb20gXCIuL2FzdC9iYXNlXCI7XG5pbXBvcnQgeyBNdWx0aXBsZXIsIEFuZ2xlLCBBcmd1bWVudCwgRHluYW1pY0FyZ3VtZW50IH0gZnJvbSBcIi4vYXN0L3ZhbHVlc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hc3QvYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gXCIuL2FzdC9jb2xvcnNcIjtcbmltcG9ydCAqIGFzIHN0cm9rZXMgZnJvbSBcIi4vYXN0L3N0cm9rZXNcIjtcbmltcG9ydCAqIGFzIG9wcyBmcm9tIFwiLi9hc3Qvb3BzXCI7XG5cbmV4cG9ydCB0eXBlIEFjdGlvbkNiID0gKHZhbHVlczogVmFsdWVOb2RlW10pID0+IEFjdGlvbk5vZGU7XG5leHBvcnQgdHlwZSBWYWx1ZUNiID0gKCkgPT4gVmFsdWVOb2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVTaXplID0gXCIrXCIgfCBudW1iZXI7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgaXNBY3Rpb246IGJvb2xlYW47XG4gICAgaXNEeW5hbWljOiBib29sZWFuO1xuICAgIGZhY3Rvcnk6IEFjdGlvbkNiIHwgVmFsdWVDYjtcbiAgICB2YWx1ZVNpemU6IFZhbHVlU2l6ZTtcblxuICAgIGNvbnN0cnVjdG9yKHsgaXNBY3Rpb24sIGlzRHluYW1pYywgZmFjdG9yeSwgdmFsdWVTaXplIH0pIHtcbiAgICAgICAgdGhpcy5pc0FjdGlvbiA9IGlzQWN0aW9uO1xuICAgICAgICB0aGlzLmlzRHluYW1pYyA9IGlzRHluYW1pYztcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICAgICAgdGhpcy52YWx1ZVNpemUgPSB2YWx1ZVNpemU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWx1ZShmYWN0b3J5OiBWYWx1ZUNiLCBpc0R5bmFtaWMgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogZmFsc2UsIHZhbHVlU2l6ZTogMCwgaXNEeW5hbWljLCBmYWN0b3J5IH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24odmFsdWVTaXplOiBWYWx1ZVNpemUsIGZhY3Rvcnk6IEFjdGlvbkNiKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiB0cnVlLCB2YWx1ZVNpemUsIGlzRHluYW1pYzogdHJ1ZSwgZmFjdG9yeSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHRva2VucyA9IHtcbiAgICAvLyAqKiogVmFsdWVzICoqKlxuICAgIC8vIENvdW50c1xuICAgIENPVU5UX01JTlVTOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKC0xKSksXG4gICAgQ09VTlRfMTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxKSksXG4gICAgQ09VTlRfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyKSksXG4gICAgQ09VTlRfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzKSksXG4gICAgQ09VTlRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig1KSksXG4gICAgLy8gRnJhY3Rpb25zXG4gICAgRlJBQ1RfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAyKSksXG4gICAgRlJBQ1RfMV8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyAzKSksXG4gICAgRlJBQ1RfMl8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIgLyAzKSksXG4gICAgRlJBQ1RfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA0KSksXG4gICAgRlJBQ1RfM180OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMgLyA0KSksXG4gICAgRlJBQ1RfMV81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEgLyA1KSksXG4gICAgLy8gQW5nbGVzXG4gICAgLy9BTkdMRV8zNjA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgzNjApKSxcbiAgICBBTkdMRV8yNzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgyNzApKSxcbiAgICBBTkdMRV8xODA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxODApKSxcbiAgICBBTkdMRV85MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDkwKSksXG4gICAgQU5HTEVfNjA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg2MCkpLFxuICAgIEFOR0xFXzQ1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNDUpKSxcbiAgICBBTkdMRV8zMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDMwKSksXG4gICAgQU5HTEVfMTU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxNSkpLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NYXhDb2xvcigpKSxcbiAgICBDT0xPUl9NSU46IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWluQ29sb3IoKSksXG4gICAgQ09MT1JfU0hJRlRfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDIpKSxcbiAgICBDT0xPUl9TSElGVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNCkpLFxuICAgIENPTE9SX1NISUZUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA1KSksXG4gICAgQ09MT1JfU0hJRlRfMV8xMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAxMCkpLFxuICAgIC8vIFN0cm9rZVxuICAgIFNUUk9LRV9TT0xJRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJzb2xpZFwiKSksXG4gICAgU1RST0tFX0RBU0hFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkYXNoZWRcIikpLFxuICAgIFNUUk9LRV9ET1RURUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZG90dGVkXCIpKSxcbiAgICBTVFJPS0VfVEhJQ0tfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygrMSkpLFxuICAgIFNUUk9LRV9USElDS19TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKC0xKSksXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIE9QX01VTFQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuTXVsdE9wKCkpLFxuICAgIE9QX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5BZGRPcCgpKSxcbiAgICBPUF9TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuU3ViT3AoKSksXG4gICAgLy8gQXJndW1lbnRzXG4gICAgQVJHVU1FTlQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBcmd1bWVudCgpKSxcbiAgICBDQUxMX0RJQU1PTkQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJESUFNT05EXCIpLCB0cnVlKSxcbiAgICBDQUxMX0lOVl9UUklBTkdMRTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIklOVl9UUklBTkdMRVwiKSwgdHJ1ZSksXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgQ0FMTF9GOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuQ2FsbChcIkZcIiwgdikpLFxuICAgIENBTExfRzogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJHXCIsIHYpKSxcbiAgICBDQUxMX0g6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gUGFpbnRlcnNcbiAgICBEUkFXX0xJTkU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3TGluZSh2KSksXG4gICAgRFJBV19DSVJDTEU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3Q2lyY2xlKHYpKSxcbiAgICBEUkFXX1NRVUFSRTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdTcXVhcmUodikpLFxuICAgIERSQVdfVFJJQU5HTEU6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5EcmF3VHJpYW5nbGUodikpLFxuICAgIERSQVdfQVJDTElORV9SXzNfNDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCszIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfMjogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMiwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzNfNDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0zIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfMjogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMiwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gNCwgdikpLFxuICAgIC8vIEN1cnNvciBPcGVyYXRvcnNcbiAgICBGT1JXQVJEOiBjcmVhdGVBY3Rpb24oXCIrXCIsIHYgPT4gbmV3IGFjdGlvbnMuRm9yd2FyZCh2KSksXG4gICAgUk9UQVRFX0xFRlQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVMZWZ0KHYpKSxcbiAgICBST1RBVEVfUklHSFQ6IGNyZWF0ZUFjdGlvbihcIitcIiwgdiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVSaWdodCh2KSksXG4gICAgUkVWRVJTRTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLlJldmVyc2UodikpLFxuICAgIFJFUExBWTogY3JlYXRlQWN0aW9uKFwiK1wiLCB2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2KSksXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyVG9rZW4gfSBmcm9tICcuL3Rva2Vucyc7XG5pbXBvcnQgeyBzY3JhcGVBbmRSdW4gfSBmcm9tICcuL3J1bic7XG5pbXBvcnQgeyBQUk9DRURVUkVTLCBEWU5BTUlDX0FSR1MsIFNVRkZJWEVTIH0gZnJvbSAnLi4vcGFyc2VyJztcblxuY29uc3QgSU5QVVRTID0gW1wiaXRlcmF0aW9uc1wiLCBcImZpcnN0LWNvbG9yXCIsIFwic2Vjb25kLWNvbG9yXCIsIFwic3Ryb2tlLXNpemVcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29kZShjb2RlKSB7XG4gICAgY29uc3QgY2IgPSAoKSA9PiB7XG4gICAgICAgIHNjcmFwZUFuZFJ1bigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJlbmRlckNvZGUoY29kZSk7XG4gICAgSU5QVVRTLmZvckVhY2goaW5wdXRJZCA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNiLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJMaXN0T2ZGdW5jdGlvbnMoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdE9mRnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IGZ1bmN0aW9uc05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bmN0aW9uc1wiKTtcbiAgICBQUk9DRURVUkVTLmNvbmNhdChEWU5BTUlDX0FSR1MpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uc05vZGUuYXBwZW5kQ2hpbGQocmVuZGVyQmFyT2ZGdW5jdGlvbnMobmFtZSkpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXJPZkZ1bmN0aW9ucyhuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duXCIpO1xuICAgIGNvbnN0IGJhc2VGdW5jTm9kZSA9IHJlbmRlckFkZEZ1bmN0aW9uKFwic3BhblwiLCBuYW1lKTtcbiAgICBjb25zdCBiYXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgU1VGRklYRVMuZm9yRWFjaChzdWZmaXggPT4ge1xuICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKHJlbmRlckFkZEZ1bmN0aW9uKFwibGlcIiwgbmFtZSwgc3VmZml4KSk7XG4gICAgfSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChiYXNlRnVuY05vZGUpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoYmFyTm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFkZEZ1bmN0aW9uKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBjb25zdCByZWFsTmFtZSA9IHN1ZmZpeCA/IGBTVUZGSVhfJHtzdWZmaXh9YCA6IGBDQUxMXyR7bmFtZX1gO1xuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BBVEh9aWNvbnMvJHtyZWFsTmFtZX0uc3ZnKWA7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW4tYnRuXCIpO1xuICAgIG5vZGUuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gc3VmZml4O1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB7bmFtZSwgc3VmZml4fSA9IHRoaXMuZGF0YXNldDtcbiAgICAgICAgc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZSwgc3VmZml4KTtcbiAgICAgICAgc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCBmYWxzZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvZGUoY29kZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb2RlLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJGdW5jdGlvbihsaW5lKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZ1bmN0aW9uKHtuYW1lLCBzdWZmaXggPSBcIlwiLCB0b2tlbnN9KTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJmdW5jdGlvblwiKTtcbiAgICBub2RlLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlck5hbWUobmFtZSwgc3VmZml4KSk7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbnModG9rZW5zKSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHNob3dPckhpZGVPckFkZEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgPSBcIlwiKTogdm9pZCB7XG4gICAgY29uc3QgY29kZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGVcIik7XG4gICAgY29uc3QgZnVuY05vZGUgPSBjb2RlTm9kZS5xdWVyeVNlbGVjdG9yKGAuZnVuY3Rpb25bZGF0YS1uYW1lPVwiJHtuYW1lfVwiXVtkYXRhLXN1ZmZpeD1cIiR7c3VmZml4fVwiXWApO1xuICAgIGlmICghZnVuY05vZGUpIHtcbiAgICAgICAgY29kZU5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyRnVuY3Rpb24oe25hbWUsIHN1ZmZpeCwgdG9rZW5zOiBbXX0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jTm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IEVsZW1lbnQge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX1fJHtzdWZmaXh9YCA6IG5hbWU7XG4gICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cHJvY2Vzcy5lbnYuQVNTRVRfUEFUSH1pY29ucy9DQUxMXyR7cmVhbG5hbWV9LnN2ZylgO1xuICAgIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModG9rZW5zKTogRWxlbWVudCB7XG4gICAgY29uc3QgdG9rZW5zTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9rZW5zTm9kZS5jbGFzc0xpc3QuYWRkKFwib3V0ZXItdG9rZW5zXCIpO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiaW5uZXItdG9rZW5zXCIpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQocmVuZGVyVG9rZW5TcGFuKCkpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbikpO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHJlbmRlclRva2VuU3BhbigpKTtcbiAgICB9KTtcblxuICAgIHRva2Vuc05vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdG9rZW5zTm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlblJlbW92ZVNwYW4oKSk7XG5cbiAgICByZXR1cm4gdG9rZW5zTm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5TcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5SZW1vdmVTcGFuKCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1zcGFuXCIsIFwicmVtb3ZlXCIpO1xuICAgIHNldFRva2VuU3BhbkV2ZW50cyhub2RlLCB0cnVlKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gc2V0VG9rZW5TcGFuRXZlbnRzKG5vZGU6IEVsZW1lbnQsIHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGV2RHJhZ092ZXIsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldkRyb3AsIGZhbHNlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGV2RHJhZ0VudGVyLCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBldkRyYWdMZWF2ZSwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gZXZEcmFnT3ZlcihlKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXZEcm9wKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbiA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3Rva2VuJyk7XG4gICAgICAgIGNvbnN0IG9sZElkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnaWQnKTtcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgaWYgKCFyZW1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgcmVuZGVyVG9rZW5TcGFuKCkpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCByZW5kZXJUb2tlbih0b2tlbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBjb25zdCBvbGRUb2tlbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbGRJZCk7XG4gICAgICAgIGlmIChvbGRUb2tlbk5vZGUuZGF0YXNldC5pc1RlbXBsYXRlID09PSBcIm5vXCIpIHtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIG9sZFRva2VuTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcmFwZUFuZFJ1bigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluZFNwYW4obm9kZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2tlbi1zcGFuJykgPyBub2RlIDogbm9kZS5uZXh0U2libGluZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdFbnRlcihlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldkRyYWdMZWF2ZShlKSB7XG4gICAgICAgIGZpbmRTcGFuKHRoaXMpLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgZXhlYywgRnVuYyB9IGZyb20gXCIuLi9leGVjXCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiLi4vc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JhcGVBbmRSdW4oKSB7XG4gICAgY29uc3QgY3Vyc29yQ2ZnID0ge1xuICAgICAgICBmaXJzdENvbG9yOiBzY3JhcGVJbnB1dChcImZpcnN0LWNvbG9yXCIpLFxuICAgICAgICBzZWNvbmRDb2xvcjogc2NyYXBlSW5wdXQoXCJzZWNvbmQtY29sb3JcIiksXG4gICAgICAgIHN0cm9rZVNpemU6IHNjcmFwZUlucHV0QXNGbG9hdChcInN0cm9rZS1zaXplXCIpLFxuICAgIH1cbiAgICBydW4oc2NyYXBlQ29kZSgpLCBzY3JhcGVJbnB1dEFzSW50KFwiaXRlcmF0aW9uc1wiKSwgY3Vyc29yQ2ZnKTtcbn1cblxuZnVuY3Rpb24gcnVuKGNvZGU6IEZ1bmNbXSwgbWF4SXRlcmF0aW9uOiBudW1iZXIgPSAzLCBjdXJzb3JDZmcgPSB7fSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBhcmd1bWVudCA9IDEuMDtcbiAgICBjb25zdCBjdXJzb3IgPSBleGVjKGFyZ3VtZW50LCBtYXhJdGVyYXRpb24sIGNvZGUsIGN1cnNvckNmZyk7XG4gICAgY3Vyc29yLmFkZE1hcmdpbigyMCk7XG4gICAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gICAgY29uc3Qgc3ZnID0gY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3IpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUNvZGUoKTogRnVuY1tdIHtcbiAgICBjb25zdCBjb2RlOiBGdW5jW10gPSBbXTtcbiAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZVwiKTtcbiAgICBjb2RlTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1bmN0aW9uXCIpLmZvckVhY2goKGZ1bmNOb2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSBmdW5jTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICBpZiAoaXNIaWRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSBmdW5jTm9kZS5kYXRhc2V0O1xuICAgICAgICBjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZ1bmNOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9rZW5cIikuZm9yRWFjaCh0b2tlbk5vZGUgPT4ge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goKHRva2VuTm9kZSBhcyBIVE1MRWxlbWVudCkuZGF0YXNldC50b2tlbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWFsbmFtZSA9IHN1ZmZpeCA/IGAke25hbWV9Ojoke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgY29kZS5wdXNoKHtuYW1lOiByZWFsbmFtZSwgdG9rZW5zfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0KGlkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgcmV0dXJuIChub2RlIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBzY3JhcGVJbnB1dEFzSW50KGlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IHZhbHVlID0gc2NyYXBlSW5wdXQoaWQpO1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUlucHV0QXNGbG9hdChpZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNjcmFwZUlucHV0KGlkKTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkNCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW46IHN0cmluZywgaXNUZW1wbGF0ZTogYm9vbGVhbiA9IGZhbHNlKTogRWxlbWVudCB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgbm9kZS5pZCA9IGB0b2tlbi0ke3V1aWQ0KCl9YDtcbiAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICBub2RlLmRhdGFzZXQuaXNUZW1wbGF0ZSA9IGlzVGVtcGxhdGUgPyAneWVzJyA6ICdubyc7XG4gICAgLy9ub2RlLmlubmVyVGV4dCA9IHRva2VuO1xuICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BBVEh9aWNvbnMvJHt0b2tlbn0uc3ZnKWA7XG4gICAgc2V0VG9rZW5FdmVudHMobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHNldFRva2VuRXZlbnRzKG5vZGU6IEVsZW1lbnQpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGV2RHJhZ1N0YXJ0LCBmYWxzZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZXZEcmFnRW5kLCBmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBldkRyYWdTdGFydChlKSB7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3Rva2VuJywgdGhpcy5kYXRhc2V0LnRva2VuKTtcbiAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnaWQnLCB0aGlzLmlkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZXZEcmFnRW5kKGUpIHtcbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2tlbicpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgICovXG4gICAgfVxufVxuXG5pbnRlcmZhY2UgVG9rZW5JbmZvIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0eXBlOiAnYWN0aW9uJyB8ICd2YWx1ZSc7XG4gICAgZG9jPzogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIFRva2VuQ2F0ZWdvcnkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBUb2tlbkluZm9bXTtcbn07XG5cbmNvbnN0IFRPS0VOUzogVG9rZW5DYXRlZ29yeVtdID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdDT1VOVF8xJywgbGFiZWw6ICdPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfMicsIGxhYmVsOiAnVHdvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPVU5UXzUnLCBsYWJlbDogJ0ZpdmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09VTlRfTUlOVVMnLCBsYWJlbDogJ01pbnVzIE9uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8xXzInLCBsYWJlbDogJ0hhbGYnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV8zJywgbGFiZWw6ICdUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdGUkFDVF8yXzMnLCBsYWJlbDogJ1R3byB0aGlyZHMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV80JywgbGFiZWw6ICdRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRlJBQ1RfMV81JywgbGFiZWw6ICdGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0FuZ2xlcycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0FOR0xFXzE4MCcsIGxhYmVsOiAnMTgwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfOTAnLCBsYWJlbDogJzkwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfNDUnLCBsYWJlbDogJzQ1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMzAnLCBsYWJlbDogJzMwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdNb2RpZmljYXRvcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfTVVMVCcsIGxhYmVsOiAnTXVsdGlwbGUgb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnT1BfQUREJywgbGFiZWw6ICdBZGRpdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01BWCcsIGxhYmVsOiAnU2Vjb25kIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NPTE9SX01JTicsIGxhYmVsOiAnRmlyc3QgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV80JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV81JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1NUUk9LRV9USElDS19BREQnLCBsYWJlbDogJ1RoaWNrIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICAgICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfU1VCJywgbGFiZWw6ICdUaGluIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Z1bmN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdBUkdVTUVOVCcsIGxhYmVsOiAnQXJndW1lbnQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0NBTExfRicsIGxhYmVsOiAnQ2FsbCBGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0NhbGwgRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0FMTF9IJywgbGFiZWw6ICdDYWxsIEggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGFpbnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19MSU5FJywgbGFiZWw6ICdEcmF3IExpbmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQ0lSQ0xFJywgbGFiZWw6ICdEcmF3IENpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19TUVVBUkUnLCBsYWJlbDogJ0RyYXcgU3F1YXJlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdEcmF3IFRyaWFuZ2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzIgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV80JywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICAgICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8zXzQnLCBsYWJlbDogJ0RyYXcgQXJjIExpbmUgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8yJywgbGFiZWw6ICdEcmF3IEFyYyBMaW5lIDEvMiAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnRHJhdyBBcmMgTGluZSAxLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0N1cnNvcicsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAge25hbWU6ICdGT1JXQVJEJywgbGFiZWw6ICdNb3ZlIGZvcndhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JPVEFURV9MRUZUJywgbGFiZWw6ICdSb3RhdGUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnUk9UQVRFX1JJR0hUJywgbGFiZWw6ICdSb3RhdGUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFVkVSU0UnLCBsYWJlbDogJ1JldmVyc2UnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAgICAgICAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5JywgdHlwZTogJ2FjdGlvbid9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRva2Vucyhpc1RlbXBsYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2tlbnMnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgVE9LRU5TLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC5hZGQoJ3Rva2VucycsICdoaWRlJyk7XG5cbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlTmFtZS5jbGFzc0xpc3QuYWRkKCdsYWJlbCcpO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmlubmVyVGV4dCA9IGNhdGVnb3J5LmxhYmVsO1xuICAgICAgICBjYXRlZ29yeU5vZGVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBjYXRlZ29yeU5vZGUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlTmFtZSk7XG5cbiAgICAgICAgY2F0ZWdvcnkudG9rZW5zLmZvckVhY2godG9rZW5JbmZvID0+IHtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChyZW5kZXJUb2tlbih0b2tlbkluZm8ubmFtZSwgaXNUZW1wbGF0ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbnZhciBieXRlVG9IZXggPSBbXTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFycikge1xuICB2YXIgb2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgdmFyIHV1aWQgPSAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgc3RyaW5naWZ5IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRUb2tlbnMgfSBmcm9tIFwiLi90b2tlbnNcIjtcbmltcG9ydCB7IGluaXRDb2RlIH0gZnJvbSBcIi4vY29kZVwiO1xuaW1wb3J0IHsgc2NyYXBlQW5kUnVuIH0gZnJvbSBcIi4vcnVuXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlL21haW4uc2Nzc1wiO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1oaWRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uLWhpZGVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1zaG93XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLXBhbmVsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xufSwgZmFsc2UpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1zaG93XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uLXNob3dcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi1oaWRlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLXBhbmVsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmV0dXJuIGZhbHNlO1xufSwgZmFsc2UpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBjb2RlID0gW1xuICAgICAgICB7bmFtZTogXCJGXCIsIHRva2VuczogW1wiRFJBV19UUklBTkdMRVwiLCBcIkNPVU5UXzNcIiwgXCJEUkFXX0xJTkVcIiwgXCJBUkdVTUVOVFwiLCBcIkNBTExfRlwiLCBcIkFSR1VNRU5UXCJdfSxcbiAgICAgICAge25hbWU6IFwiRlwiLCBzdWZmaXg6IFwiRU5EXCIsIHRva2VuczogW1wiRFJBV19DSVJDTEVcIiwgXCJDT1VOVF81XCIsIFwiQ09VTlRfMlwiXX0sXG4gICAgXTtcbiAgICBpbml0VG9rZW5zKCk7XG4gICAgaW5pdENvZGUoY29kZSk7XG4gICAgc2NyYXBlQW5kUnVuKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==