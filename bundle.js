/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes showtime {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n.fract-tokens {\n  user-select: none;\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  transition: background-color 300ms;\n  cursor: pointer;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n.fract-token.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token.move {\n  background-color: rgba(204, 204, 204, 0.4666666667);\n  position: absolute;\n  animation-name: showtime;\n  animation-duration: 500ms;\n}\n.fract-token.move.valid-drop {\n  background-color: rgba(123, 218, 123, 0.4666666667);\n  border-color: #228B22;\n}\n.fract-token.move.valid-drop::before {\n  content: \"DROP\";\n}\n.fract-token.move.remove-drop {\n  background-color: rgba(201, 0, 0, 0.4666666667);\n  border-color: #8b2222;\n}\n.fract-token.move.remove-drop::before {\n  content: \"REMOVE\";\n}\n.fract-token.move::before {\n  display: inline-block;\n  font-size: 10pt;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-weight: bold;\n  position: relative;\n  top: -16pt;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n.fract-token-group.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token-group.debug > .fract-token {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n\n.fract-token-span {\n  padding: 5px;\n  width: 0px;\n  height: 50px;\n  transition: width 300ms;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\nbody {\n  font-family: Sans-Serif;\n  font-size: 10pt;\n  overflow: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: calc(100vh - 15px);\n}\n\n.fract-image {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#editor {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: auto;\n  width: 95%;\n}\n\n#editor > nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#code-bar {\n  margin-left: 30px;\n}\n#code-bar label, #code-bar input {\n  margin-right: 5px;\n}\n\n#code-panel {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  height: 45vh;\n}\n\n.fract-token-categories {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  align-items: stretch;\n  gap: 10px;\n  width: 200px;\n}\n.fract-token-categories > .fract-tokens {\n  flex-direction: column;\n  align-items: center;\n}\n\n.mobile-warning {\n  display: block;\n  color: red;\n}\n\n@media screen and (min-width: 1000px) {\n  .mobile-warning {\n    display: none;\n  }\n}\n.hidden {\n  display: none !important;\n}\n\ndialog {\n  border-radius: 5px;\n  border: 2px #888 solid;\n  padding: 1.6rem;\n  max-width: 500px;\n}\n\n.choose-token-dialog {\n  display: flex;\n  flex-direction: row;\n  align-items: start;\n}\n.choose-token-dialog .category {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.choose-token-dialog .category > .label {\n  text-align: center;\n  font-variant: small-caps;\n  font-size: 1.4rem;\n}\n.choose-token-dialog .category ~ .category {\n  border-left: 1px #888 dotted;\n  margin-left: 0.75em;\n  padding-left: 0.75em;\n}\n.choose-token-dialog .dialog-token {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: 0.5em 0;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/main.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\nbody {\n    font-family: Sans-Serif;\n    font-size: 10pt;\n    overflow: hidden;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap;\n    width: 100vw;\n    height: calc(100vh - 15px);\n}\n\n.fract-image {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#editor {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    width: 95%;\n}\n\n#editor > nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#code-bar {\n    margin-left: 30px;\n    label, input { margin-right: 5px; }\n}\n\n#code-panel {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    height: 45vh;\n}\n\n.fract-token-categories {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    align-items: stretch;\n    gap: 10px;\n    width: 200px;\n\n    > .fract-tokens {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.mobile-warning {\n    display: block;\n    color: red;\n}\n\n@media screen and (min-width: 1000px) {\n    .mobile-warning {\n        display: none;\n    }\n}\n\n.hidden {\n    display: none !important;\n}\n\ndialog {\n  border-radius: 5px;\n  border: 2px #888 solid;\n  padding: 1.6rem;\n  max-width: 500px;\n}\n\n.choose-token-dialog {\n    display: flex;\n    flex-direction: row;\n    align-items: start;\n\n    .category {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        > .label {\n            text-align: center;\n            font-variant: small-caps;\n            font-size: 1.4rem;\n        }\n\n        ~ .category {\n            border-left: 1px #888 dotted;\n            margin-left: 0.75em;\n            padding-left: 0.75em;\n        }\n    }\n\n    .dialog-token {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        margin: 0.5em 0;\n    }\n}",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./node_modules/dijkstrajs/dijkstra.js":
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ "./node_modules/encode-utf8/index.js":
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
}


/***/ }),

/***/ "./node_modules/qrcode/lib/browser.js":
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const canPromise = __webpack_require__(/*! ./can-promise */ "./node_modules/qrcode/lib/can-promise.js")

const QRCode = __webpack_require__(/*! ./core/qrcode */ "./node_modules/qrcode/lib/core/qrcode.js")
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ "./node_modules/qrcode/lib/renderer/canvas.js")
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ "./node_modules/qrcode/lib/renderer/svg-tag.js")

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ "./node_modules/qrcode/lib/can-promise.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alignment-pattern.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/alphanumeric-data.js":
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-buffer.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ "./node_modules/qrcode/lib/core/bit-matrix.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ "./node_modules/qrcode/lib/core/byte-data.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ "./node_modules/encode-utf8/index.js")
const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function ByteData (data) {
  this.mode = Mode.BYTE
  if (typeof (data) === 'string') {
    data = encodeUtf8(data)
  }
  this.data = new Uint8Array(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-code.js":
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/error-correction-level.js":
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/finder-pattern.js":
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js").getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/format-info.js":
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/galois-field.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/kanji-data.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mask-pattern.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/mode.js":
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ "./node_modules/qrcode/lib/core/version-check.js")
const Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/numeric-data.js":
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ "./node_modules/qrcode/lib/core/polynomial.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ "./node_modules/qrcode/lib/core/galois-field.js")

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/qrcode.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
const ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ "./node_modules/qrcode/lib/core/bit-buffer.js")
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ "./node_modules/qrcode/lib/core/bit-matrix.js")
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ "./node_modules/qrcode/lib/core/alignment-pattern.js")
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ "./node_modules/qrcode/lib/core/finder-pattern.js")
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ "./node_modules/qrcode/lib/core/mask-pattern.js")
const ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js")
const Version = __webpack_require__(/*! ./version */ "./node_modules/qrcode/lib/core/version.js")
const FormatInfo = __webpack_require__(/*! ./format-info */ "./node_modules/qrcode/lib/core/format-info.js")
const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
const Segments = __webpack_require__(/*! ./segments */ "./node_modules/qrcode/lib/core/segments.js")

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/reed-solomon-encoder.js":
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ "./node_modules/qrcode/lib/core/polynomial.js")

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ "./node_modules/qrcode/lib/core/regex.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/segments.js":
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
const NumericData = __webpack_require__(/*! ./numeric-data */ "./node_modules/qrcode/lib/core/numeric-data.js")
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ "./node_modules/qrcode/lib/core/alphanumeric-data.js")
const ByteData = __webpack_require__(/*! ./byte-data */ "./node_modules/qrcode/lib/core/byte-data.js")
const KanjiData = __webpack_require__(/*! ./kanji-data */ "./node_modules/qrcode/lib/core/kanji-data.js")
const Regex = __webpack_require__(/*! ./regex */ "./node_modules/qrcode/lib/core/regex.js")
const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
const dijkstra = __webpack_require__(/*! dijkstrajs */ "./node_modules/dijkstrajs/dijkstra.js")

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/version-check.js":
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ "./node_modules/qrcode/lib/core/version.js":
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/core/utils.js")
const ECCode = __webpack_require__(/*! ./error-correction-code */ "./node_modules/qrcode/lib/core/error-correction-code.js")
const ECLevel = __webpack_require__(/*! ./error-correction-level */ "./node_modules/qrcode/lib/core/error-correction-level.js")
const Mode = __webpack_require__(/*! ./mode */ "./node_modules/qrcode/lib/core/mode.js")
const VersionCheck = __webpack_require__(/*! ./version-check */ "./node_modules/qrcode/lib/core/version-check.js")

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/canvas.js":
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/svg-tag.js":
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ "./node_modules/qrcode/lib/renderer/utils.js")

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ "./node_modules/qrcode/lib/renderer/utils.js":
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Call: () => (/* binding */ Call),
/* harmony export */   CloseCall: () => (/* binding */ CloseCall),
/* harmony export */   DrawArcLine: () => (/* binding */ DrawArcLine),
/* harmony export */   DrawFigure: () => (/* binding */ DrawFigure),
/* harmony export */   DrawLine: () => (/* binding */ DrawLine),
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
        const ndx = -dy;
        const ndy = dx;
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/core/shortcuts.ts":
/*!*******************************!*\
  !*** ./src/core/shortcuts.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeStaveName: () => (/* binding */ decodeStaveName),
/* harmony export */   decodeStaves: () => (/* binding */ decodeStaves),
/* harmony export */   decodeTokens: () => (/* binding */ decodeTokens),
/* harmony export */   encodeStaveName: () => (/* binding */ encodeStaveName),
/* harmony export */   encodeStaves: () => (/* binding */ encodeStaves),
/* harmony export */   encodeTokens: () => (/* binding */ encodeTokens)
/* harmony export */ });
function encodeStaves(staves) {
    return staves.map(stave => [encodeStaveName(stave), encodeTokens(stave.tokens)]);
}
function encodeStaveName(stave) {
    const name = STAVE_TO_SHORTCUT[stave.name] || "";
    const suffix = SUFFIX_TO_SHORTCUT[stave.suffix] || "";
    return `.${name}${suffix}`;
}
function encodeTokens(tokens) {
    return tokens
        .map(token => TOKEN_TO_SHORTCUT[token] || "")
        .join("");
}
function decodeStaves(code) {
    const staves = [];
    for (const [codedName, codedTokens] of code) {
        const realName = decodeStaveName(codedName);
        if (realName === null) {
            continue;
        }
        const [name, suffix] = realName;
        let stave = { name, tokens: decodeTokens(codedTokens) };
        if (suffix !== null) {
            stave.suffix = suffix;
        }
        staves.push(stave);
    }
    return staves;
}
function decodeStaveName(code) {
    if (code.length > 3 && code.length < 2) {
        return null;
    }
    if (code[0] !== ".") {
        return null;
    }
    const name = STAVE_FROM_SHORTCUT[code[1]];
    if (name === undefined) {
        return null;
    }
    if (code.length == 2) {
        return [name, null];
    }
    const suffix = SUFFIX_FROM_SHORTCUT[code[2]];
    if (suffix === undefined) {
        return null;
    }
    return [name, suffix];
}
function decodeTokens(code) {
    const tokens = [];
    for (let i = 0; i < code.length; i += 2) {
        const tokenCode = code.substring(i, i + 2);
        const token = TOKEN_FROM_SHORTCUT[tokenCode];
        if (token !== undefined) {
            tokens.push(token);
        }
    }
    return tokens;
}
const STAVE_TO_SHORTCUT = {
    F: "F",
    G: "G",
    H: "H",
    DIAMOND: "D",
    INV_TRIANGLE: "I",
};
const SUFFIX_TO_SHORTCUT = {
    END: "0",
    EVEN: "1",
    ODD: "2",
    GE3: "3",
    GE5: "4",
    GE7: "5",
};
const TOKEN_TO_SHORTCUT = {
    // *** Values ***
    // Counts
    COUNT_1: "C0",
    COUNT_2: "C1",
    COUNT_3: "C2",
    COUNT_5: "C3",
    COUNT_7: "C4",
    // Counts (special)
    COUNT_MINUS: "C5",
    COUNT_GOLD: "C6",
    COUNT_SILVER: "C7",
    COUNT_BRONZE: "C8",
    COUNT_PLASTIC: "C9",
    // Fractions
    FRACT_1_2: "F0",
    FRACT_1_3: "F1",
    FRACT_2_3: "F2",
    FRACT_1_4: "F3",
    FRACT_3_4: "F4",
    FRACT_1_5: "F5",
    FRACT_2_5: "F6",
    FRACT_3_5: "F7",
    FRACT_4_5: "F8",
    // Angles
    ANGLE_270: "A0",
    ANGLE_180: "A1",
    ANGLE_90: "A2",
    ANGLE_60: "A3",
    ANGLE_45: "A4",
    ANGLE_30: "A5",
    ANGLE_15: "A6",
    ANGLE_10: "A7",
    // Colors
    COLOR_MAX: "V0",
    COLOR_MIN: "V1",
    COLOR_SHIFT_1_2: "V2",
    COLOR_SHIFT_1_4: "V3",
    COLOR_SHIFT_1_5: "V4",
    COLOR_SHIFT_1_10: "V5",
    COLOR_FILL: "V6",
    COLOR_EMPTY: "V7",
    // Stroke
    STROKE_SOLID: "S0",
    STROKE_DASHED: "S1",
    STROKE_DOTTED: "S2",
    STROKE_THICK_ADD: "S3",
    STROKE_THICK_SUB: "S4",
    // Operations
    OP_MULT: "O0",
    OP_ADD: "O1",
    OP_SUB: "O2",
    // Arguments
    ARGUMENT: "Z0",
    CALL_DIAMOND: "Z1",
    CALL_INV_TRIANGLE: "Z2",
    // *** Actions ***
    // Callers
    CALL_F: "X0",
    CALL_G: "X1",
    CALL_H: "X2",
    // Close Callers
    CLOSE_CALL_F: "Y0",
    CLOSE_CALL_G: "Y1",
    CLOSE_CALL_H: "Y2",
    // Shapes
    DRAW_CIRCLE: "D0",
    DRAW_SQUARE: "D1",
    DRAW_TRIANGLE: "D2",
    // Line
    DRAW_LINE: "L0",
    // Arc
    DRAW_ARCLINE_R_3_4: "L1",
    DRAW_ARCLINE_R_2_3: "L2",
    DRAW_ARCLINE_R_1_2: "L3",
    DRAW_ARCLINE_R_1_3: "L4",
    DRAW_ARCLINE_R_1_4: "L5",
    DRAW_ARCLINE_R_1_5: "L6",
    DRAW_ARCLINE_L_3_4: "L7",
    DRAW_ARCLINE_L_2_3: "L8",
    DRAW_ARCLINE_L_1_2: "L9",
    DRAW_ARCLINE_L_1_3: "LA",
    DRAW_ARCLINE_L_1_4: "LB",
    DRAW_ARCLINE_L_1_5: "LC",
    // Cursor translations
    MOVE_FORWARD: "M0",
    MOVE_BACKWARD: "M1",
    MOVE_LEFT: "M2",
    MOVE_RIGHT: "M3",
    // Cursor rotations
    ROTATE_LEFT: "R0",
    ROTATE_RIGHT: "R1",
    // Repetetive actions
    REVERSE: "Q0",
    REPLAY: "Q1",
    REPLAY_2: "Q2",
    REPLAY_3: "Q3",
    REPLAY_4: "Q4",
};
function inverse(obj) {
    const inv_entries = Object.entries(obj).map(([key, val]) => [val, key]);
    return Object.fromEntries(inv_entries);
}
const STAVE_FROM_SHORTCUT = inverse(STAVE_TO_SHORTCUT);
const TOKEN_FROM_SHORTCUT = inverse(TOKEN_TO_SHORTCUT);
const SUFFIX_FROM_SHORTCUT = inverse(SUFFIX_TO_SHORTCUT);


/***/ }),

/***/ "./src/core/step.ts":
/*!**************************!*\
  !*** ./src/core/step.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/web/controllers/debug.ts":
/*!**************************************!*\
  !*** ./src/web/controllers/debug.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DebugController: () => (/* binding */ DebugController)
/* harmony export */ });
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
var _DebugController_instances, _DebugController_stack, _DebugController_interval, _DebugController_previousState, _DebugController_callbacks, _DebugController_updateState;
class DebugController {
    constructor(callbacks) {
        _DebugController_instances.add(this);
        _DebugController_stack.set(this, void 0);
        _DebugController_interval.set(this, void 0);
        _DebugController_previousState.set(this, void 0);
        _DebugController_callbacks.set(this, void 0);
        __classPrivateFieldSet(this, _DebugController_stack, null, "f");
        __classPrivateFieldSet(this, _DebugController_interval, null, "f");
        __classPrivateFieldSet(this, _DebugController_previousState, null, "f");
        __classPrivateFieldSet(this, _DebugController_callbacks, callbacks, "f");
    }
    init(stack) {
        __classPrivateFieldSet(this, _DebugController_stack, stack, "f");
        this.step();
    }
    step() {
        const { halt, stave, index } = __classPrivateFieldGet(this, _DebugController_stack, "f").step();
        __classPrivateFieldGet(this, _DebugController_callbacks, "f").renderCb(__classPrivateFieldGet(this, _DebugController_stack, "f").cursor);
        __classPrivateFieldGet(this, _DebugController_instances, "m", _DebugController_updateState).call(this, {
            debug: true,
            stave: stave,
            actionIndex: index,
        });
        return !halt;
    }
    play(period = 100) {
        this.stop();
        __classPrivateFieldSet(this, _DebugController_interval, setInterval(() => {
            if (!this.step()) {
                this.stop();
            }
        }, period), "f");
    }
    exit() {
        this.stop();
        __classPrivateFieldGet(this, _DebugController_instances, "m", _DebugController_updateState).call(this, { debug: false, stave: '?', actionIndex: 0 });
        __classPrivateFieldSet(this, _DebugController_stack, null, "f");
        __classPrivateFieldSet(this, _DebugController_previousState, null, "f");
    }
    stop() {
        if (__classPrivateFieldGet(this, _DebugController_interval, "f") === null) {
            return;
        }
        clearInterval(__classPrivateFieldGet(this, _DebugController_interval, "f"));
        __classPrivateFieldSet(this, _DebugController_interval, null, "f");
    }
    isDebug() {
        return __classPrivateFieldGet(this, _DebugController_stack, "f") !== null;
    }
}
_DebugController_stack = new WeakMap(), _DebugController_interval = new WeakMap(), _DebugController_previousState = new WeakMap(), _DebugController_callbacks = new WeakMap(), _DebugController_instances = new WeakSet(), _DebugController_updateState = function _DebugController_updateState(state) {
    const previousState = __classPrivateFieldGet(this, _DebugController_previousState, "f");
    __classPrivateFieldSet(this, _DebugController_previousState, state, "f");
    __classPrivateFieldGet(this, _DebugController_callbacks, "f").onState(previousState, state);
};


/***/ }),

/***/ "./src/web/controllers/main.ts":
/*!*************************************!*\
  !*** ./src/web/controllers/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainController: () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/web/controllers/controller.ts");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug */ "./src/web/controllers/debug.ts");
/* harmony import */ var _web_views_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/views/code */ "./src/web/views/code.ts");
/* harmony import */ var _web_views_functionsBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/web/views/functionsBar */ "./src/web/views/functionsBar.ts");
/* harmony import */ var _web_views_categoryToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/web/views/categoryToken */ "./src/web/views/categoryToken.ts");
/* harmony import */ var _web_views_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/web/views/image */ "./src/web/views/image.ts");
/* harmony import */ var _web_views_codeBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/web/views/codeBar */ "./src/web/views/codeBar.ts");
/* harmony import */ var _web_views_chooseDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/web/views/chooseDialog */ "./src/web/views/chooseDialog.ts");
/* harmony import */ var _web_views_projectListDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/web/views/projectListDialog */ "./src/web/views/projectListDialog.ts");
/* harmony import */ var _web_views_saveDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/web/views/saveDialog */ "./src/web/views/saveDialog.ts");
/* harmony import */ var _web_views_helpDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/web/views/helpDialog */ "./src/web/views/helpDialog.ts");
/* harmony import */ var _web_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/web/models */ "./src/web/models.ts");
/* harmony import */ var _web_tokensMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/web/tokensMenu */ "./src/web/tokensMenu.ts");
/* harmony import */ var _core_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/core/exec */ "./src/core/exec.ts");
/* harmony import */ var _core_cursor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/core/cursor */ "./src/core/cursor.ts");















class MainController extends _controller__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(database, project) {
        super(document.querySelector("main"));
        this.database = database;
        this.project = project;
        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__.DebugController({
            renderCb: (cursor) => this.imageView.render(cursor),
            onState: this.onDebugState.bind(this),
        });
        this.helpDialogView = new _web_views_helpDialog__WEBPACK_IMPORTED_MODULE_10__.HelpDialogView();
        this.imageView = new _web_views_image__WEBPACK_IMPORTED_MODULE_5__.ImageView(this.node.querySelector(".fract-image"));
        this.codeView = new _web_views_code__WEBPACK_IMPORTED_MODULE_2__.CodeView({
            node: this.node.querySelector(".fract-staves"),
            callbacks: {
                onDrop: this.onDrop.bind(this),
                onMove: this.onMove.bind(this),
                onDragTimeout: this.onDragTimeout.bind(this),
                canDrag: () => !this.debug.isDebug(),
            }
        });
        this.functionsBarView = new _web_views_functionsBar__WEBPACK_IMPORTED_MODULE_3__.FunctionsBarView({
            node: this.node.querySelector(".fract-functions-list"),
            onSelect: (name, suffix) => {
                this.showOrHideOrAddFunction(name, suffix);
                this.scrapeAndRun();
            }
        });
        const categoryCallbacks = {
            onDrop: this.onDropFromCategory.bind(this),
            onMove: this.onMoveFromCategory.bind(this),
            onDragTimeout: null,
            canDrag: () => !this.debug.isDebug(),
        };
        this.actionsCategoryView = new _web_views_categoryToken__WEBPACK_IMPORTED_MODULE_4__.TokensCategoryView({
            node: document.getElementById("action-tokens"),
            categories: _web_tokensMenu__WEBPACK_IMPORTED_MODULE_12__.ACTION_TOKENS,
            callbacks: categoryCallbacks,
        });
        this.valuesCategoryView = new _web_views_categoryToken__WEBPACK_IMPORTED_MODULE_4__.TokensCategoryView({
            node: document.getElementById("value-tokens"),
            categories: _web_tokensMenu__WEBPACK_IMPORTED_MODULE_12__.VALUE_TOKENS,
            callbacks: categoryCallbacks,
        });
        this.codeBarView = new _web_views_codeBar__WEBPACK_IMPORTED_MODULE_6__.CodeBarView(document.getElementById("code-bar"), {
            onUpdate: (iterations, style) => {
                this.project.iterations = iterations;
                this.project.style = style;
                this.saveTempProject();
                this.scrapeAndRun();
            },
            onDebugStart: this.scrapeAndDebug.bind(this),
            onLoad: this.openProjectList.bind(this),
            onSave: this.openSaveDialog.bind(this),
            onNew: () => this.loadProject((0,_web_models__WEBPACK_IMPORTED_MODULE_11__.createEmptyProject)()),
            onHelp: () => this.helpDialogView.render(),
            onDebugStep: () => this.debug.step(),
            onDebugPlay: () => this.debug.play(),
            onDebugStop: () => this.debug.stop(),
            onDebugExit: () => this.debug.exit(),
        });
        this.chooseDialogView = null;
        this.projectListDialogView = null;
        this.saveDialogView = null;
        this.isVisited = localStorage.getItem("visited") !== null;
        localStorage.setItem("visited", new Date().toISOString());
    }
    render() {
        if (this.isVisited === false) {
            this.helpDialogView.render();
        }
        this.codeView.render(this.project.staves);
        this.functionsBarView.render();
        this.actionsCategoryView.render();
        this.valuesCategoryView.render();
        this.codeBarView.render(this.project);
        this.scrapeAndRun();
    }
    scrapeAndRun() {
        if (this.debug.isDebug()) {
            return;
        }
        const stack = this.scrape();
        if (stack === null) {
            return;
        }
        try {
            (0,_core_exec__WEBPACK_IMPORTED_MODULE_13__.exec)(stack);
        }
        catch (exception) {
            console.error(exception);
        }
        const { backgroundColor } = this.project.style;
        this.imageView.render(stack.cursor, backgroundColor);
    }
    scrapeAndSave() {
        this.project.staves = this.codeView.scrapeCode();
        this.saveTempProject();
        this.scrapeAndRun();
    }
    saveTempProject() {
        const cloneProject = Object.assign({}, this.project);
        cloneProject.id = "__temp__";
        this.database.update(cloneProject, project => { });
    }
    scrapeAndDebug() {
        if (this.debug.isDebug()) {
            return;
        }
        const stack = this.scrape();
        if (stack === null) {
            return;
        }
        this.codeBarView.setDebugMode();
        this.debug.init(stack);
    }
    openProjectList() {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.projectListDialogView = new _web_views_projectListDialog__WEBPACK_IMPORTED_MODULE_8__.ProjectListDialogView(dialogNode, this.database, {
            onLoad: this.loadProject.bind(this),
            onRemove: () => { },
        });
        this.projectListDialogView.render();
    }
    openSaveDialog() {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.saveDialogView = new _web_views_saveDialog__WEBPACK_IMPORTED_MODULE_9__.SaveDialogView(dialogNode, this.database, this.project, {
            onSave: project => { },
        });
        this.saveDialogView.render();
    }
    loadProject(project) {
        this.project = project;
        this.saveTempProject();
        this.debug.exit();
        this.codeView.render(this.project.staves);
        this.codeBarView.render(this.project);
        this.scrapeAndRun();
    }
    scrape() {
        const style = this.project.style;
        const cursorCfg = {
            firstColor: style.firstColor,
            secondColor: style.secondColor,
            strokeSize: style.strokeSize,
        };
        const cursor = new _core_cursor__WEBPACK_IMPORTED_MODULE_14__.Cursor(cursorCfg);
        const argument = 1.0;
        const maxIteration = this.project.iterations;
        const code = this.codeView.scrapeCode();
        try {
            return (0,_core_exec__WEBPACK_IMPORTED_MODULE_13__.setupExec)(argument, maxIteration, code, cursor);
        }
        catch (exception) {
            console.error(exception);
            return null;
        }
    }
    onDebugState(previousState, state) {
        if (state.debug === false) {
            this.codeBarView.unsetDebugMode();
        }
        if (previousState !== null) {
            const [name, suffix = ""] = previousState.stave.split("::");
            const stave = this.codeView.findStave(name, suffix);
            stave && stave.removeFlagOnActionToken('debug', previousState.actionIndex);
        }
        {
            const [name, suffix = ""] = state.stave.split("::");
            const stave = this.codeView.findStave(name, suffix);
            stave && stave.addFlagOnActionToken('debug', state.actionIndex);
        }
    }
    onDrop(dragNode, overNode) {
        const findStave = dataset => this.codeView.findStave(dataset.name, dataset.suffix);
        const prevStaveView = findStave(dragNode.dataset);
        if (overNode.classList.contains("fract-staves")) { // REMOVE
            const indexToRemove = parseInt(dragNode.dataset.index);
            prevStaveView.removeToken(indexToRemove);
        }
        if (overNode.classList.contains("fract-token-span")) { // ADD/MOVE
            const indexToMove = parseInt(dragNode.dataset.index);
            const goalIndex = parseInt(overNode.dataset.index);
            const goalStaveView = findStave(overNode.dataset);
            const shift = Object.is(prevStaveView, goalStaveView) && goalIndex <= indexToMove ? 1 : 0;
            goalStaveView.pushTokenAfter(dragNode.dataset.token, goalIndex);
            prevStaveView.removeToken(indexToMove + shift);
        }
        this.scrapeAndSave();
    }
    onDropFromCategory(dragNode, overNode) {
        const findStave = dataset => this.codeView.findStave(dataset.name, dataset.suffix);
        if (overNode.classList.contains("fract-token-span")) { // ADD/MOVE
            const goalIndex = parseInt(overNode.dataset.index);
            const goalStaveView = findStave(overNode.dataset);
            goalStaveView.pushTokenAfter(dragNode.dataset.token, goalIndex);
        }
        this.scrapeAndSave();
    }
    onMove(dragNode, oldOverNode, newOverNode) {
        if (oldOverNode) {
            const isClass = key => oldOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                oldOverNode.classList.remove("over");
                dragNode.classList.remove("valid-drop");
            }
            else if (isClass("fract-staves")) {
                dragNode.classList.remove("remove-drop");
            }
        }
        if (newOverNode) {
            const isClass = key => newOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                const currentStave = `${dragNode.dataset.name}::${dragNode.dataset.suffix || ""}`;
                const goalStave = `${newOverNode.dataset.name}::${newOverNode.dataset.suffix || ""}`;
                const currentIndex = parseInt(dragNode.dataset.index);
                const goalIndex = parseInt(newOverNode.dataset.index);
                if (currentStave == goalStave && (currentIndex == goalIndex || currentIndex == goalIndex - 1)) {
                    return;
                }
                newOverNode.classList.add("over");
                dragNode.classList.add("valid-drop");
            }
            else if (isClass("fract-staves")) {
                dragNode.classList.add("remove-drop");
            }
        }
    }
    onMoveFromCategory(dragNode, oldOverNode, newOverNode) {
        if (oldOverNode) {
            const isClass = key => oldOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                oldOverNode.classList.remove("over");
                dragNode.classList.remove("valid-drop");
            }
        }
        if (newOverNode) {
            const isClass = key => newOverNode.classList.contains(key);
            if (isClass("fract-token-span")) {
                newOverNode.classList.add("over");
                dragNode.classList.add("valid-drop");
            }
        }
    }
    onDragTimeout(tokenNode) {
        const dialogNode = document.createElement('dialog');
        document.body.appendChild(dialogNode);
        this.chooseDialogView = new _web_views_chooseDialog__WEBPACK_IMPORTED_MODULE_7__.ChooseTokenDialogView(dialogNode, tokenNode, this.onSelectTokenFromDialog.bind(this));
        this.chooseDialogView.render();
        return true;
    }
    onSelectTokenFromDialog({ token, name, suffix, index }) {
        const staveView = this.codeView.findStave(name, suffix);
        staveView.replaceToken(token, index);
        this.scrapeAndSave();
        this.chooseDialogView = null;
    }
    showOrHideOrAddFunction(name, suffix = "") {
        const staveView = this.codeView.findStave(name, suffix);
        if (staveView) {
            staveView.showOrHide();
        }
        else {
            this.codeView.addStave({ name, suffix, tokens: [] });
        }
        this.scrapeAndSave();
    }
}


/***/ }),

/***/ "./src/web/database.ts":
/*!*****************************!*\
  !*** ./src/web/database.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Database: () => (/* binding */ Database)
/* harmony export */ });
/* harmony import */ var _databaseInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./databaseInit */ "./src/web/databaseInit.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Database_instances, _Database_getRequest, _Database_getProjectsStore;

class Database {
    constructor() {
        _Database_instances.add(this);
        const dbRequest = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getRequest).call(this);
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onupgradeneeded = event => {
            const db = event.target.result;
            const store = db.createObjectStore('projects', { keyPath: 'id' });
            store.createIndex('title', 'title');
            store.createIndex('iterations', 'iterations');
            store.createIndex('staves', 'staves');
            store.createIndex('style', 'style');
            store.createIndex('created', 'created');
            store.createIndex('updated', 'updated');
            (0,_databaseInit__WEBPACK_IMPORTED_MODULE_0__.initDatabase)((project) => this.update(project, () => { }));
        };
    }
    get(title, callback, errCallback = null) {
        const dbRequest = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getRequest).call(this);
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const store = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getProjectsStore).call(this, dbRequest);
            const storeRequest = store.get(title);
            storeRequest.onsuccess = () => {
                callback(storeRequest.result);
            };
            if (errCallback !== null) {
                storeRequest.onerror = () => {
                    errCallback();
                };
            }
        };
    }
    update(project, callback) {
        const dbRequest = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getRequest).call(this);
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const db = dbRequest.result;
            const transaction = db.transaction(["projects"], "readwrite");
            const store = transaction.objectStore('projects');
            const storeRequest = store.put(project);
            storeRequest.onsuccess = () => { callback(project); };
        };
    }
    remove(title, callback) {
        const dbRequest = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getRequest).call(this);
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const store = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getProjectsStore).call(this, dbRequest);
            const storeRequest = store.delete(title);
            storeRequest.onsuccess = () => { callback(); };
        };
    }
    list(callback, limit = -1) {
        let count = 0;
        const dbRequest = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getRequest).call(this);
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const store = __classPrivateFieldGet(this, _Database_instances, "m", _Database_getProjectsStore).call(this, dbRequest);
            const index = store.index('updated');
            index.openCursor(null, "prev").onsuccess = (event) => {
                const cursor = event.target.result;
                if (!cursor) {
                    return;
                }
                if (cursor.value.id == "__temp__") {
                    cursor.continue();
                    return;
                }
                callback(cursor.value);
                if (limit > 0 && count < limit) {
                    count += 1;
                    cursor.continue();
                }
            };
        };
    }
}
_Database_instances = new WeakSet(), _Database_getRequest = function _Database_getRequest() {
    const dbRequest = window.indexedDB.open("Fractalang", 1);
    return dbRequest;
}, _Database_getProjectsStore = function _Database_getProjectsStore(dbRequest) {
    const db = dbRequest.result;
    const transaction = db.transaction(["projects"], "readwrite");
    const store = transaction.objectStore('projects');
    return store;
};


/***/ }),

/***/ "./src/web/databaseInit.ts":
/*!*********************************!*\
  !*** ./src/web/databaseInit.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initDatabase: () => (/* binding */ initDatabase)
/* harmony export */ });
function createProject(title, iterations, staves, style) {
    return {
        id: title,
        title,
        iterations: Math.round(iterations),
        staves,
        style,
        created: new Date(),
        updated: new Date(),
    };
}
function initDatabase(update) {
    update(createProject("Binary Tree", 9, [
        {
            name: "F", tokens: [
                'DRAW_CIRCLE', 'COUNT_3', 'ROTATE_RIGHT', 'ANGLE_30', 'DRAW_LINE', 'CALL_F', 'REVERSE',
                'COUNT_3', 'ROTATE_LEFT', 'ANGLE_30', 'DRAW_LINE', 'CALL_F', 'REVERSE', 'COUNT_3'
            ]
        },
        { name: "F", suffix: "END", tokens: ['DRAW_CIRCLE', 'COUNT_3', 'COLOR_MAX'] },
    ], { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 }));
    update(createProject("Constellation of Muffin", 7, [
        {
            name: "F", tokens: [
                'DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'ARGUMENT', 'DRAW_TRIANGLE',
                'COLOR_MAX', 'COUNT_2', 'COUNT_3', 'CALL_F', 'COUNT_GOLD', 'FRACT_1_3', 'ARGUMENT'
            ]
        },
    ], { firstColor: '#ff9500', secondColor: '#ffd561', backgroundColor: '#8a8a8a', strokeSize: 1 }));
    update(createProject("Curvy pentagon", 5, [
        { name: "F", tokens: ['DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'ARGUMENT'] },
    ], { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 }));
    update(createProject("Dotted Sun", 10, [
        {
            name: "F", tokens: [
                'DRAW_CIRCLE', 'COLOR_MAX', 'COUNT_5', 'DRAW_LINE', 'ARGUMENT',
                'DRAW_ARCLINE_L_1_5', 'ARGUMENT', 'CALL_F', 'COUNT_MINUS', 'ARGUMENT'
            ]
        },
    ], { firstColor: '#ff9500', secondColor: '#ffbb00', backgroundColor: '#8a8a8a', strokeSize: 1 }));
    update(createProject("Honeycomb", 8, [
        { name: "F", tokens: ['DRAW_ARCLINE_L_1_3', 'CALL_F', 'COLOR_SHIFT_1_4', 'DRAW_ARCLINE_R_1_3', 'CALL_F'] },
    ], { firstColor: '#ffdd00', secondColor: '#ff7575', backgroundColor: '#000000', strokeSize: 1 }));
    update(createProject("Koch Snowflake", 5, [
        { name: "F", tokens: ['CALL_G', 'ROTATE_RIGHT', 'COUNT_2', 'ANGLE_60', 'REPLAY_2', 'COUNT_3'] },
        {
            name: "G", tokens: [
                'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_RIGHT', 'COUNT_2',
                'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND'
            ]
        },
        { name: "G", suffix: "END", tokens: ['DRAW_LINE', 'ARGUMENT'] },
        { name: "DIAMOND", tokens: ['FRACT_1_3', 'ARGUMENT'] },
    ], { firstColor: '#ffffff', secondColor: '#ff0000', backgroundColor: '#00bfff', strokeSize: 1 }));
    update(createProject("Koch Snowflake - 2", 4, [
        { name: "F", tokens: ['CALL_G', 'ROTATE_RIGHT', 'COUNT_2', 'ANGLE_60', 'REPLAY_2', 'COUNT_3'] },
        {
            name: "G", tokens: [
                'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_RIGHT', 'COUNT_2',
                'ANGLE_60', 'CALL_G', 'CALL_DIAMOND', 'ROTATE_LEFT', 'ANGLE_60', 'CALL_G', 'CALL_DIAMOND'
            ]
        },
        {
            name: "G", suffix: "END", tokens: [
                'DRAW_LINE', 'ARGUMENT', 'DRAW_ARCLINE_L_2_3', 'CALL_DIAMOND', 'DRAW_ARCLINE_R_2_3', 'CALL_DIAMOND'
            ]
        },
        { name: "DIAMOND", tokens: ['FRACT_1_3', 'ARGUMENT'] },
    ], { firstColor: '#ffffff', secondColor: '#ff0000', backgroundColor: '#00bfff', strokeSize: 1 }));
    update(createProject("The grid", 8, [
        {
            name: "F", tokens: [
                'DRAW_CIRCLE', 'COUNT_3', 'COUNT_3', 'ROTATE_RIGHT', 'ANGLE_90', 'CALL_G', 'CALL_F', 'REVERSE', 'COUNT_3',
                'ROTATE_LEFT', 'ANGLE_90', 'CALL_G', 'CALL_F', 'REVERSE', 'COUNT_3'
            ]
        },
        { name: "F", suffix: "END", tokens: ['DRAW_CIRCLE', 'COUNT_3', 'COUNT_3', 'COLOR_MAX'] },
        { name: "G", tokens: ['DRAW_ARCLINE_L_1_4', 'DRAW_ARCLINE_R_1_2', 'FRACT_1_3', 'DRAW_ARCLINE_L_1_4', 'FRACT_1_3'] },
    ], { firstColor: '#000000', secondColor: '#ff0000', backgroundColor: '#ffffff', strokeSize: 1 }));
}


/***/ }),

/***/ "./src/web/models.ts":
/*!***************************!*\
  !*** ./src/web/models.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyProject: () => (/* binding */ createEmptyProject)
/* harmony export */ });
;
;
function createEmptyProject() {
    const date = (new Date()).toDateString();
    const title = `NEW ${date}`;
    return {
        id: title,
        title: title,
        created: new Date(),
        updated: new Date(),
        staves: [
            { "name": "F", tokens: [] },
        ],
        style: {
            firstColor: "#000000",
            secondColor: "#FF0000",
            backgroundColor: "#FFFFFF",
            strokeSize: 1.0,
        },
        iterations: 3,
    };
}


/***/ }),

/***/ "./src/web/tokens.ts":
/*!***************************!*\
  !*** ./src/web/tokens.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/web/tokensFamily.ts":
/*!*********************************!*\
  !*** ./src/web/tokensFamily.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAME_TO_FAMILY: () => (/* binding */ NAME_TO_FAMILY),
/* harmony export */   TOKEN_FAMILIES: () => (/* binding */ TOKEN_FAMILIES)
/* harmony export */ });
const TOKEN_FAMILIES = {
    ARGUMENT: [
        {
            label: 'Arguments',
            tokens: ['ARGUMENT', 'CALL_DIAMOND', 'CALL_INV_TRIANGLE'],
        },
    ],
    CALL: [
        {
            label: 'Callers',
            tokens: ['CALL_F', 'CALL_G', 'CALL_H'],
        },
        {
            label: 'Close Callers',
            tokens: ['CLOSE_CALL_F', 'CLOSE_CALL_G', 'CLOSE_CALL_H'],
        },
    ],
    DRAW_SHAPE: [
        {
            label: 'Shapes',
            tokens: ['DRAW_CIRCLE', 'DRAW_SQUARE', 'DRAW_TRIANGLE'],
        }
    ],
    DRAW_LINE: [
        {
            label: 'Line',
            tokens: ['DRAW_LINE'],
        },
        {
            label: 'Left Arc',
            tokens: [
                'DRAW_ARCLINE_L_3_4',
                'DRAW_ARCLINE_L_2_3',
                'DRAW_ARCLINE_L_1_2',
                'DRAW_ARCLINE_L_1_3',
                'DRAW_ARCLINE_L_1_4',
                'DRAW_ARCLINE_L_1_5',
            ]
        },
        {
            label: 'Right Arc',
            tokens: [
                'DRAW_ARCLINE_R_3_4',
                'DRAW_ARCLINE_R_2_3',
                'DRAW_ARCLINE_R_1_2',
                'DRAW_ARCLINE_R_1_3',
                'DRAW_ARCLINE_R_1_4',
                'DRAW_ARCLINE_R_1_5',
            ]
        },
    ],
    MOVE: [
        {
            label: 'Moves',
            tokens: ['MOVE_FORWARD', 'MOVE_BACKWARD', 'MOVE_LEFT', 'MOVE_RIGHT'],
        },
    ],
    ROTATE: [
        {
            label: 'Rotates',
            tokens: ['ROTATE_LEFT', 'ROTATE_RIGHT'],
        },
    ],
    REPLAY: [
        {
            label: 'Replays',
            tokens: ['REPLAY', 'REPLAY_2', 'REPLAY_3', 'REPLAY_4'],
        },
    ],
    VALUE: [
        {
            label: 'Counters',
            tokens: ['COUNT_1', 'COUNT_2', 'COUNT_3', 'COUNT_5', 'COUNT_7'],
        },
        {
            label: 'Counters',
            tokens: [
                'COUNT_MINUS',
                'COUNT_GOLD',
                'COUNT_SILVER',
                'COUNT_BRONZE',
                'COUNT_PLASTIC',
            ],
        },
        {
            label: 'Fractions',
            tokens: [
                'FRACT_1_2',
                'FRACT_1_3',
                'FRACT_2_3',
                'FRACT_1_4',
                'FRACT_3_4',
            ],
        },
        {
            label: 'Fractions',
            tokens: [
                'FRACT_1_5',
                'FRACT_2_5',
                'FRACT_3_5',
                'FRACT_4_5',
            ],
        },
    ],
    ANGLE: [
        {
            label: 'Angles',
            tokens: [
                'ANGLE_270',
                'ANGLE_180',
                'ANGLE_90',
                'ANGLE_60',
            ],
        },
        {
            label: 'Angles',
            tokens: [
                'ANGLE_45',
                'ANGLE_30',
                'ANGLE_15',
                'ANGLE_10',
            ],
        },
    ],
    OP: [
        {
            label: 'OP',
            tokens: ['OP_MULT', 'OP_ADD', 'OP_SUB'],
        },
    ],
    STROKE_COLOR: [
        {
            label: 'Thick/Thin',
            tokens: [
                'STROKE_THICK_ADD',
                'STROKE_THICK_SUB',
            ],
        },
        {
            label: 'Color',
            tokens: [
                'COLOR_MAX',
                'COLOR_MIN',
                'COLOR_FILL',
                'COLOR_EMPTY',
            ],
        },
        {
            label: 'Color Shift',
            tokens: [
                'COLOR_SHIFT_1_2',
                'COLOR_SHIFT_1_4',
                'COLOR_SHIFT_1_5',
                'COLOR_SHIFT_1_10',
            ],
        },
    ],
};
const NAME_TO_FAMILY = new Map(Object.entries(TOKEN_FAMILIES)
    .map(([name, categories]) => categories.map(category => category.tokens.map(token => [token, name])))
    .flat()
    .flat());


/***/ }),

/***/ "./src/web/tokensMenu.ts":
/*!*******************************!*\
  !*** ./src/web/tokensMenu.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_TOKENS: () => (/* binding */ ACTION_TOKENS),
/* harmony export */   VALUE_TOKENS: () => (/* binding */ VALUE_TOKENS)
/* harmony export */ });
const ACTION_TOKENS = [
    {
        label: 'Functions',
        tokens: [
            'ARGUMENT',
            'CALL_DIAMOND',
            'CALL_F',
            'CALL_G',
            'CALL_H',
        ],
    },
    {
        label: 'Painters',
        tokens: [
            'DRAW_LINE',
            'DRAW_TRIANGLE',
            'DRAW_ARCLINE_L_1_2',
            'DRAW_ARCLINE_R_1_2',
        ],
    },
    {
        label: 'Cursor',
        tokens: [
            'MOVE_FORWARD',
            'ROTATE_LEFT',
            'ROTATE_RIGHT',
            'REVERSE',
            'REPLAY',
        ],
    },
];
const VALUE_TOKENS = [
    {
        label: 'Counters',
        tokens: [
            'COUNT_2',
            'COUNT_3',
            'COUNT_5',
            'COUNT_MINUS',
        ],
    },
    {
        label: 'Fractions',
        tokens: [
            'FRACT_1_2',
            'FRACT_1_3',
            'FRACT_1_4',
            'FRACT_1_5',
        ],
    },
    {
        label: 'Angles',
        tokens: [
            'ANGLE_180',
            'ANGLE_90',
            'ANGLE_60',
            'ANGLE_45',
            'ANGLE_30',
        ],
    },
    {
        label: 'Colors',
        tokens: [
            'COLOR_FILL',
            'COLOR_EMPTY',
            'COLOR_SHIFT_1_2',
            'COLOR_SHIFT_1_4',
            'COLOR_MAX',
            'COLOR_MIN',
        ],
    },
    {
        label: 'Strokes',
        tokens: [
            'STROKE_THICK_ADD',
            'STROKE_THICK_SUB',
        ],
    },
    {
        label: 'Modificators',
        tokens: [
            'OP_MULT',
            'OP_ADD',
            'OP_SUB',
        ],
    },
];


/***/ }),

/***/ "./src/web/urlParams.ts":
/*!******************************!*\
  !*** ./src/web/urlParams.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeProjectFromUrlParams: () => (/* binding */ decodeProjectFromUrlParams),
/* harmony export */   encodeProjectToUrlParams: () => (/* binding */ encodeProjectToUrlParams)
/* harmony export */ });
/* harmony import */ var _web_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/web/models */ "./src/web/models.ts");
/* harmony import */ var _core_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shortcuts */ "./src/core/shortcuts.ts");


function encodeProjectToUrlParams(project) {
    const params = new URLSearchParams();
    (0,_core_shortcuts__WEBPACK_IMPORTED_MODULE_1__.encodeStaves)(project.staves)
        .forEach(([name, tokens]) => {
        params.append(name, tokens);
    });
    params.append("z", "z");
    params.append("t", project.title);
    params.append("i", project.iterations.toFixed());
    params.append("c1", project.style.firstColor);
    params.append("c2", project.style.secondColor);
    params.append("b", project.style.backgroundColor);
    params.append("s", project.style.strokeSize.toFixed(2));
    return params;
}
function decodeProjectFromUrlParams(params) {
    const project = (0,_web_models__WEBPACK_IMPORTED_MODULE_0__.createEmptyProject)();
    project.staves = (0,_core_shortcuts__WEBPACK_IMPORTED_MODULE_1__.decodeStaves)(params.entries());
    const title = params.get("t");
    const iterations = params.get("i");
    const firstColor = params.get("c1");
    const secondColor = params.get("c2");
    const backgroundColor = params.get("b");
    const strokeSize = params.get("s");
    if (title !== null) {
        project.id = title;
        project.title = title;
    }
    if (iterations !== null)
        project.iterations = Number.parseInt(iterations);
    if (firstColor !== null)
        project.style.firstColor = firstColor;
    if (secondColor !== null)
        project.style.secondColor = secondColor;
    if (backgroundColor !== null)
        project.style.backgroundColor = backgroundColor;
    if (strokeSize !== null)
        project.style.strokeSize = Number.parseInt(strokeSize);
    return project;
}


/***/ }),

/***/ "./src/web/views/categoryToken.ts":
/*!****************************************!*\
  !*** ./src/web/views/categoryToken.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokensCategoryView: () => (/* binding */ TokensCategoryView)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ "./src/web/views/token.ts");
/* harmony import */ var _web_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/tokens */ "./src/web/tokens.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");



class TokensCategoryView extends _token__WEBPACK_IMPORTED_MODULE_0__.TokensView {
    constructor({ node, categories, callbacks, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_ICON_URL }) {
        super({
            node,
            callbacks,
            iconUrl,
        });
        this.categories = categories;
    }
    render() {
        this.clear();
        this.categories.forEach(category => {
            const categoryNode = this.createCategoryNode(category);
            this.node.appendChild(categoryNode);
        });
    }
    createCategoryNode(category) {
        const categoryNode = this.createElement({
            name: 'div',
            classes: ['fract-tokens', 'hide'],
        });
        const categoryNodeName = this.createElement({
            name: 'span',
            classes: ['group-label'],
            text: category.label,
        });
        categoryNodeName.addEventListener('click', function () {
            categoryNode.classList.toggle('hide');
            return false;
        }, false);
        categoryNode.appendChild(categoryNodeName);
        category.tokens.forEach(token => {
            const tokenInfo = _web_tokens__WEBPACK_IMPORTED_MODULE_1__.NAME_TO_TOKEN.get(token);
            if (tokenInfo === undefined) {
                return;
            }
            categoryNode.appendChild(this.createTokenNode(tokenInfo.name));
            categoryNode.appendChild(this.createElement({
                name: 'span',
                classes: ['label'],
                text: tokenInfo.label,
            }));
        });
        return categoryNode;
    }
}


/***/ }),

/***/ "./src/web/views/chooseDialog.ts":
/*!***************************************!*\
  !*** ./src/web/views/chooseDialog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChooseTokenDialogView: () => (/* binding */ ChooseTokenDialogView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _web_tokensFamily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/tokensFamily */ "./src/web/tokensFamily.ts");
/* harmony import */ var _web_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/web/tokens */ "./src/web/tokens.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");
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
var _ChooseTokenDialogView_args, _ChooseTokenDialogView_iconUrl, _ChooseTokenDialogView_onSelect;




;
class ChooseTokenDialogView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(dialogNode, tokenNode, onSelect, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ICON_URL) {
        super(dialogNode);
        _ChooseTokenDialogView_args.set(this, void 0);
        _ChooseTokenDialogView_iconUrl.set(this, void 0);
        _ChooseTokenDialogView_onSelect.set(this, void 0);
        __classPrivateFieldSet(this, _ChooseTokenDialogView_args, {
            token: tokenNode.dataset.token,
            index: parseInt(tokenNode.dataset.index),
            name: tokenNode.dataset.name,
            suffix: tokenNode.dataset.suffix,
        }, "f");
        __classPrivateFieldSet(this, _ChooseTokenDialogView_iconUrl, iconUrl, "f");
        __classPrivateFieldSet(this, _ChooseTokenDialogView_onSelect, onSelect, "f");
    }
    render() {
        this.node.classList.add("choose-token-dialog");
        this.node.addEventListener('close', this.onClose.bind(this));
        const familyName = _web_tokensFamily__WEBPACK_IMPORTED_MODULE_1__.NAME_TO_FAMILY.get(__classPrivateFieldGet(this, _ChooseTokenDialogView_args, "f").token);
        const family = _web_tokensFamily__WEBPACK_IMPORTED_MODULE_1__.TOKEN_FAMILIES[familyName] || [];
        if (family.length === 0) {
            this.node.textContent = 'No family :(';
        }
        family.forEach(category => {
            const categoryNode = this.createElement({
                name: 'div',
                classes: ['category'],
            });
            const categoryLabelNode = this.createElement({
                name: 'span',
                classes: ['label'],
                text: category.label,
            });
            categoryNode.appendChild(categoryLabelNode);
            category.tokens.forEach(token => {
                const tokenInfo = _web_tokens__WEBPACK_IMPORTED_MODULE_2__.NAME_TO_TOKEN.get(token);
                if (tokenInfo === undefined) {
                    return;
                }
                const tokenWithLabelNode = this.createElement({
                    name: 'div',
                    classes: ['dialog-token'],
                });
                const tokenNode = this.createElement({
                    name: 'div',
                    classes: ['fract-token'],
                });
                tokenNode.dataset.token = token;
                tokenNode.style.backgroundImage = `url(${__classPrivateFieldGet(this, _ChooseTokenDialogView_iconUrl, "f")}/${token}.svg)`;
                tokenNode.style.width = `48px`;
                tokenNode.style.height = `48px`;
                const labelNode = this.createElement({
                    name: 'span',
                    classes: ['label'],
                    text: tokenInfo.label,
                });
                tokenWithLabelNode.appendChild(tokenNode);
                tokenWithLabelNode.appendChild(labelNode);
                tokenWithLabelNode.addEventListener('click', this.onClick.bind(this, token));
                categoryNode.appendChild(tokenWithLabelNode);
            });
            this.node.appendChild(categoryNode);
        });
        this.node.showModal();
    }
    onClick(token, event) {
        __classPrivateFieldGet(this, _ChooseTokenDialogView_onSelect, "f").call(this, Object.assign(Object.assign({}, __classPrivateFieldGet(this, _ChooseTokenDialogView_args, "f")), { token }));
        this.node.close();
    }
    onClose() {
        this.node.remove();
    }
}
_ChooseTokenDialogView_args = new WeakMap(), _ChooseTokenDialogView_iconUrl = new WeakMap(), _ChooseTokenDialogView_onSelect = new WeakMap();


/***/ }),

/***/ "./src/web/views/code.ts":
/*!*******************************!*\
  !*** ./src/web/views/code.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/web/views/codeBar.ts":
/*!**********************************!*\
  !*** ./src/web/views/codeBar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBarView: () => (/* binding */ CodeBarView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
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
var _CodeBarView_callbacks;

;
class CodeBarView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(node, callbacks) {
        super(node);
        _CodeBarView_callbacks.set(this, void 0);
        __classPrivateFieldSet(this, _CodeBarView_callbacks, callbacks, "f");
    }
    render(project) {
        this.clear();
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "iterations";
            labelNode.innerHTML = "Iterations:&nbsp;";
            node.name = "iterations";
            node.type = "number";
            node.value = project.iterations.toFixed();
            node.min = "1";
            node.max = "30";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "first-color";
            labelNode.innerHTML = "First color:&nbsp;";
            node.name = "first-color";
            node.type = "color";
            node.value = project.style.firstColor || "#000000";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "second-color";
            labelNode.innerHTML = "Second color:&nbsp;";
            node.name = "second-color";
            node.type = "color";
            node.value = project.style.secondColor || "#FF0000";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "background-color";
            labelNode.innerHTML = "Backround color:&nbsp;";
            node.name = "background-color";
            node.type = "color";
            node.value = project.style.backgroundColor || "#FFFFFF";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const labelNode = document.createElement("label");
            const node = document.createElement("input");
            labelNode.htmlFor = "stroke-size";
            labelNode.innerHTML = "Stroke size:&nbsp;";
            node.name = "stroke-size";
            node.type = "number";
            node.value = (project.style.strokeSize || 1).toFixed(2);
            node.min = "0.5";
            node.max = "3";
            node.step = "0.25";
            node.onchange = this.onChange.bind(this);
            this.node.appendChild(labelNode);
            this.node.appendChild(node);
        }
        {
            const hideNode = this.createElement({ name: "input" });
            const showNode = this.createElement({ name: "input", classes: ["hidden"] });
            showNode.value = "SHOW";
            showNode.type = "button";
            showNode.onclick = () => {
                showNode.classList.add("hidden");
                hideNode.classList.remove("hidden");
                document.getElementById("code-panel").classList.remove("hidden");
                return false;
            };
            hideNode.value = "HIDE";
            hideNode.type = "button";
            hideNode.onclick = () => {
                hideNode.classList.add("hidden");
                showNode.classList.remove("hidden");
                document.getElementById("code-panel").classList.add("hidden");
                return false;
            };
            this.node.appendChild(showNode);
            this.node.appendChild(hideNode);
        }
        {
            const node = this.createElement({ name: "input" });
            node.value = "LOAD";
            node.type = "button";
            node.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onLoad();
                return false;
            };
            this.node.appendChild(node);
        }
        this.node.appendChild(this.createElement({
            name: "input",
            type: "button",
            text: "SAVE / SHARE",
            onclick: () => __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onSave(),
        }));
        {
            const node = this.createElement({ name: "input" });
            node.value = "NEW";
            node.type = "button";
            node.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onNew();
                return false;
            };
            this.node.appendChild(node);
        }
        {
            const node = this.createElement({ name: "input" });
            node.value = "HELP";
            node.type = "button";
            node.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onHelp();
                return false;
            };
            this.node.appendChild(node);
        }
        {
            const btnNode = this.createElement({ name: "input" });
            btnNode.name = "debug-start";
            btnNode.value = "DEBUG";
            btnNode.type = "button";
            btnNode.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onDebugStart();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-step";
            btnNode.value = "STEP";
            btnNode.type = "button";
            btnNode.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onDebugStep();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-play";
            btnNode.value = "PLAY";
            btnNode.type = "button";
            btnNode.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onDebugPlay();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-stop";
            btnNode.value = "STOP";
            btnNode.type = "button";
            btnNode.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onDebugStop();
                return false;
            };
            this.node.appendChild(btnNode);
        }
        {
            const btnNode = this.createElement({ name: "input", classes: ["hidden"] });
            btnNode.name = "debug-exit";
            btnNode.value = "EXIT";
            btnNode.type = "button";
            btnNode.onclick = () => {
                __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onDebugExit();
                return false;
            };
            this.node.appendChild(btnNode);
        }
    }
    getStyle() {
        const getValue = (name, defaultValue) => {
            const node = this.node.querySelector(`input[name="${name}"]`);
            return node === undefined ? defaultValue : node.value;
        };
        return {
            firstColor: getValue("first-color", "black"),
            secondColor: getValue("second-color", "red"),
            backgroundColor: getValue("background-color", "white"),
            strokeSize: parseFloat(getValue("stroke-size", "1")),
        };
    }
    setDebugMode() {
        this.findInput('debug-start').classList.add('hidden');
        this.findInput('debug-step').classList.remove('hidden');
        this.findInput('debug-play').classList.remove('hidden');
        this.findInput('debug-stop').classList.remove('hidden');
        this.findInput('debug-exit').classList.remove('hidden');
    }
    unsetDebugMode() {
        this.findInput('debug-start').classList.remove('hidden');
        this.findInput('debug-step').classList.add('hidden');
        this.findInput('debug-play').classList.add('hidden');
        this.findInput('debug-stop').classList.add('hidden');
        this.findInput('debug-exit').classList.add('hidden');
    }
    onChange() {
        const node = this.node.querySelector('input[name="iterations"]');
        const iterations = node === undefined ? 3 : parseInt(node.value);
        __classPrivateFieldGet(this, _CodeBarView_callbacks, "f").onUpdate(iterations, this.getStyle());
    }
    findInput(name) {
        return this.node.querySelector(`[name='${name}']`);
    }
}
_CodeBarView_callbacks = new WeakMap();


/***/ }),

/***/ "./src/web/views/functionsBar.ts":
/*!***************************************!*\
  !*** ./src/web/views/functionsBar.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionsBarView: () => (/* binding */ FunctionsBarView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _web_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/consts */ "./src/web/consts.ts");
/* harmony import */ var _core_mappings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/mappings */ "./src/core/mappings.ts");



class FunctionsBarView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor({ node, onSelect, iconUrl = _web_consts__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ICON_URL }) {
        super(node);
        this.iconUrl = iconUrl;
        this.onSelect = onSelect;
    }
    render() {
        _core_mappings__WEBPACK_IMPORTED_MODULE_2__.STAVES.forEach(name => {
            this.node.appendChild(this.createBarOfFunctionsNode(name));
        });
    }
    createBarOfFunctionsNode(name) {
        const node = this.createElement({ name: "li", classes: ["dropdown"] });
        const baseFuncNode = this.createAddFunctionNode("span", name);
        const barNode = this.createElement({ name: "ul", classes: ["dropdown-content"] });
        barNode.classList.add("dropdown-content");
        _core_mappings__WEBPACK_IMPORTED_MODULE_2__.SUFFIXES.forEach(suffix => {
            barNode.appendChild(this.createAddFunctionNode("li", name, suffix));
        });
        node.appendChild(baseFuncNode);
        node.appendChild(barNode);
        return node;
    }
    createAddFunctionNode(type, name, suffix = "") {
        const node = document.createElement(type);
        const realName = suffix ? `SUFFIX_${suffix}` : `CALL_${name}`;
        node.style.backgroundImage = `url(${this.iconUrl}/${realName}.svg)`;
        node.classList.add("token-btn");
        node.dataset.name = name;
        node.dataset.suffix = suffix;
        node.addEventListener("click", () => {
            const { name, suffix } = node.dataset;
            this.onSelect(name, suffix);
            return false;
        }, false);
        return node;
    }
}


/***/ }),

/***/ "./src/web/views/helpDialog.ts":
/*!*************************************!*\
  !*** ./src/web/views/helpDialog.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpDialogView: () => (/* binding */ HelpDialogView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");

class HelpDialogView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor() {
        super(document.getElementById("help-dialog"));
    }
    render() {
        const button = this.node.querySelector("button");
        button.onclick = (e) => {
            e.preventDefault();
            this.node.close();
        };
        this.node.showModal();
    }
}


/***/ }),

/***/ "./src/web/views/image.ts":
/*!********************************!*\
  !*** ./src/web/views/image.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/web/views/projectListDialog.ts":
/*!********************************************!*\
  !*** ./src/web/views/projectListDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectListDialogView: () => (/* binding */ ProjectListDialogView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
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
var _ProjectListDialogView_instances, _ProjectListDialogView_db, _ProjectListDialogView_callbacks, _ProjectListDialogView_onClose, _ProjectListDialogView_renderHeaderRow, _ProjectListDialogView_renderRow, _ProjectListDialogView_onLoad, _ProjectListDialogView_onRemove;

class ProjectListDialogView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(dialogNode, db, callbacks) {
        super(dialogNode);
        _ProjectListDialogView_instances.add(this);
        _ProjectListDialogView_db.set(this, void 0);
        _ProjectListDialogView_callbacks.set(this, void 0);
        __classPrivateFieldSet(this, _ProjectListDialogView_db, db, "f");
        __classPrivateFieldSet(this, _ProjectListDialogView_callbacks, callbacks, "f");
    }
    render() {
        {
            const headerNode = this.createElement({
                name: 'h1',
                text: 'Load project',
            });
            this.node.appendChild(headerNode);
        }
        {
            const tableNode = this.createElement({
                name: 'table',
                classes: ['projects'],
            });
            const tableBodyNode = this.createElement({ name: 'tbody' });
            const tableHeaderNode = this.createElement({ name: 'thead' });
            __classPrivateFieldGet(this, _ProjectListDialogView_db, "f").list(project => {
                const rowNode = __classPrivateFieldGet(this, _ProjectListDialogView_instances, "m", _ProjectListDialogView_renderRow).call(this, project);
                tableBodyNode.appendChild(rowNode);
            }, 10);
            tableHeaderNode.appendChild(__classPrivateFieldGet(this, _ProjectListDialogView_instances, "m", _ProjectListDialogView_renderHeaderRow).call(this));
            tableNode.appendChild(tableHeaderNode);
            tableNode.appendChild(tableBodyNode);
            this.node.appendChild(tableNode);
        }
        {
            const closeNode = this.createElement({ name: 'input' });
            closeNode.value = 'CLOSE';
            closeNode.type = 'button';
            closeNode.onclick = () => {
                this.node.close();
                return false;
            };
            this.node.appendChild(closeNode);
        }
        this.node.classList.add("project-list-dialog");
        this.node.addEventListener('close', __classPrivateFieldGet(this, _ProjectListDialogView_instances, "m", _ProjectListDialogView_onClose).bind(this));
        this.node.showModal();
    }
}
_ProjectListDialogView_db = new WeakMap(), _ProjectListDialogView_callbacks = new WeakMap(), _ProjectListDialogView_instances = new WeakSet(), _ProjectListDialogView_onClose = function _ProjectListDialogView_onClose() {
    this.node.remove();
}, _ProjectListDialogView_renderHeaderRow = function _ProjectListDialogView_renderHeaderRow() {
    const tableRowHeaderNode = this.createElement({ name: 'tr' });
    tableRowHeaderNode.appendChild(this.createElement({
        name: 'th',
        text: 'Title',
    }));
    tableRowHeaderNode.appendChild(this.createElement({
        name: 'th',
        text: 'Created',
    }));
    tableRowHeaderNode.appendChild(this.createElement({
        name: 'th',
        text: 'Updated',
    }));
    tableRowHeaderNode.appendChild(this.createElement({
        name: 'th',
        text: 'Actions',
    }));
    return tableRowHeaderNode;
}, _ProjectListDialogView_renderRow = function _ProjectListDialogView_renderRow(project) {
    const rowNode = this.createElement({ name: 'tr' });
    rowNode.dataset.title = project.title;
    {
        const titleRowNode = this.createElement({
            name: 'th',
            text: project.title,
        });
        rowNode.appendChild(titleRowNode);
    }
    {
        const updatedRowNode = this.createElement({
            name: 'td',
            text: project.updated.toISOString(),
        });
        rowNode.appendChild(updatedRowNode);
    }
    {
        const createdRowNode = this.createElement({
            name: 'td',
            text: project.created.toISOString(),
        });
        rowNode.appendChild(createdRowNode);
    }
    {
        const actionRowNode = this.createElement({
            name: 'td',
        });
        const loadNode = this.createElement({
            name: 'input',
        });
        loadNode.value = 'LOAD';
        loadNode.type = 'button';
        loadNode.onclick = () => {
            __classPrivateFieldGet(this, _ProjectListDialogView_db, "f").get(project.title, project => __classPrivateFieldGet(this, _ProjectListDialogView_instances, "m", _ProjectListDialogView_onLoad).call(this, project));
            return false;
        };
        const removeNode = this.createElement({
            name: 'input',
        });
        removeNode.value = 'REMOVE';
        removeNode.type = 'button';
        removeNode.onclick = () => {
            __classPrivateFieldGet(this, _ProjectListDialogView_db, "f").remove(project.title, () => __classPrivateFieldGet(this, _ProjectListDialogView_instances, "m", _ProjectListDialogView_onRemove).call(this, project));
            return false;
        };
        actionRowNode.appendChild(loadNode);
        actionRowNode.appendChild(removeNode);
        rowNode.appendChild(actionRowNode);
    }
    return rowNode;
}, _ProjectListDialogView_onLoad = function _ProjectListDialogView_onLoad(project) {
    __classPrivateFieldGet(this, _ProjectListDialogView_callbacks, "f").onLoad(project);
    this.node.close();
}, _ProjectListDialogView_onRemove = function _ProjectListDialogView_onRemove(project) {
    const query = `.projects > tbody > tr[data-title="${project.title}"]`;
    const node = this.node.querySelector(query);
    if (node !== undefined) {
        node.remove();
    }
    __classPrivateFieldGet(this, _ProjectListDialogView_callbacks, "f").onRemove(project);
};


/***/ }),

/***/ "./src/web/views/saveDialog.ts":
/*!*************************************!*\
  !*** ./src/web/views/saveDialog.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveDialogView: () => (/* binding */ SaveDialogView)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/web/views/view.ts");
/* harmony import */ var _web_urlParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/web/urlParams */ "./src/web/urlParams.ts");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
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
var _SaveDialogView_instances, _SaveDialogView_db, _SaveDialogView_callbacks, _SaveDialogView_project, _SaveDialogView_renderSaveSection, _SaveDialogView_renderShareSection, _SaveDialogView_renderFooter, _SaveDialogView_onClose, _SaveDialogView_onSave, _SaveDialogView_createShareLink;



class SaveDialogView extends _view__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor(dialogNode, db, project, callbacks) {
        super(dialogNode);
        _SaveDialogView_instances.add(this);
        _SaveDialogView_db.set(this, void 0);
        _SaveDialogView_callbacks.set(this, void 0);
        _SaveDialogView_project.set(this, void 0);
        __classPrivateFieldSet(this, _SaveDialogView_db, db, "f");
        __classPrivateFieldSet(this, _SaveDialogView_callbacks, callbacks, "f");
        __classPrivateFieldSet(this, _SaveDialogView_project, project, "f");
    }
    render() {
        this.node.appendChild(__classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_renderSaveSection).call(this));
        this.node.appendChild(this.createElement({ name: 'hr' }));
        this.node.appendChild(__classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_renderShareSection).call(this));
        this.node.appendChild(this.createElement({ name: 'hr' }));
        this.node.appendChild(__classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_renderFooter).call(this));
        this.node.classList.add("save-dialog");
        this.node.addEventListener('close', __classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_onClose).bind(this));
        this.node.showModal();
    }
}
_SaveDialogView_db = new WeakMap(), _SaveDialogView_callbacks = new WeakMap(), _SaveDialogView_project = new WeakMap(), _SaveDialogView_instances = new WeakSet(), _SaveDialogView_renderSaveSection = function _SaveDialogView_renderSaveSection() {
    const node = this.createElement({ name: 'div' });
    node.appendChild(this.createElement({
        name: 'h2',
        text: 'Save project',
    }));
    node.appendChild(this.createElement({
        name: 'label',
        text: 'Title: ',
    }));
    {
        const titleNode = this.createElement({
            name: 'input',
            type: 'text',
            text: __classPrivateFieldGet(this, _SaveDialogView_project, "f").title,
        });
        titleNode.onchange = () => {
            const title = titleNode.value;
            const clearTitle = title.replace(/[_\s]+/, ' ').trim();
            __classPrivateFieldGet(this, _SaveDialogView_project, "f").title = clearTitle;
            __classPrivateFieldGet(this, _SaveDialogView_project, "f").id = clearTitle;
            titleNode.value = clearTitle;
            return false;
        };
        node.appendChild(titleNode);
    }
    node.appendChild(this.createElement({
        name: 'input',
        type: 'button',
        text: 'SAVE',
        onclick: () => {
            __classPrivateFieldGet(this, _SaveDialogView_project, "f").updated = new Date();
            __classPrivateFieldGet(this, _SaveDialogView_db, "f").update(__classPrivateFieldGet(this, _SaveDialogView_project, "f"), (project) => __classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_onSave).call(this, project));
            return false;
        }
    }));
    return node;
}, _SaveDialogView_renderShareSection = function _SaveDialogView_renderShareSection() {
    const shareLink = __classPrivateFieldGet(this, _SaveDialogView_instances, "m", _SaveDialogView_createShareLink).call(this);
    const node = this.createElement({ name: 'div' });
    node.appendChild(this.createElement({
        name: 'h2',
        text: 'Share project',
    }));
    node.appendChild(this.createElement({
        name: 'label',
        text: 'Link to share: ',
    }));
    node.appendChild(this.createElement({
        name: 'input',
        type: 'text',
        text: shareLink,
        readonly: true,
    }));
    node.appendChild(this.createElement({ name: "br" }));
    node.appendChild(this.createElement({
        name: 'input',
        type: 'button',
        text: 'Copy to clipboard',
        onclick: () => window.navigator.clipboard.writeText(shareLink),
    }));
    node.appendChild(this.createElement({
        name: 'h3',
        text: '… or copy QR code',
    }));
    {
        const canvasNode = this.createElement({ name: "canvas" });
        (0,qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas)(canvasNode, shareLink);
        node.appendChild(canvasNode);
    }
    return node;
}, _SaveDialogView_renderFooter = function _SaveDialogView_renderFooter() {
    const node = this.createElement({ name: 'div' });
    node.appendChild(this.createElement({
        name: 'input',
        type: 'button',
        text: 'CLOSE',
        onclick: () => this.node.close(),
    }));
    return node;
}, _SaveDialogView_onClose = function _SaveDialogView_onClose() {
    this.node.remove();
}, _SaveDialogView_onSave = function _SaveDialogView_onSave(project) {
    __classPrivateFieldGet(this, _SaveDialogView_callbacks, "f").onSave(project);
    this.node.close();
}, _SaveDialogView_createShareLink = function _SaveDialogView_createShareLink() {
    const path = `${location.protocol}//${location.host}${location.pathname}`;
    const params = (0,_web_urlParams__WEBPACK_IMPORTED_MODULE_1__.encodeProjectToUrlParams)(__classPrivateFieldGet(this, _SaveDialogView_project, "f"));
    return `${path}?${params.toString()}`;
};


/***/ }),

/***/ "./src/web/views/stave.ts":
/*!********************************!*\
  !*** ./src/web/views/stave.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./src/web/views/token.ts":
/*!********************************!*\
  !*** ./src/web/views/token.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/web/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/main */ "./src/web/controllers/main.ts");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./src/web/database.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/web/models.ts");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _urlParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlParams */ "./src/web/urlParams.ts");





window.addEventListener('load', event => {
    const database = new _database__WEBPACK_IMPORTED_MODULE_1__.Database();
    const params = new URLSearchParams(window.location.search);
    if (params.get("z") === "z") {
        const project = (0,_urlParams__WEBPACK_IMPORTED_MODULE_4__.decodeProjectFromUrlParams)(params);
        const controller = new _controllers_main__WEBPACK_IMPORTED_MODULE_0__.MainController(database, project);
        controller.render();
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    else {
        database.get("__temp__", project => {
            const controller = new _controllers_main__WEBPACK_IMPORTED_MODULE_0__.MainController(database, project || (0,_models__WEBPACK_IMPORTED_MODULE_2__.createEmptyProject)());
            controller.render();
        }, () => {
            const controller = new _controllers_main__WEBPACK_IMPORTED_MODULE_0__.MainController(database, (0,_models__WEBPACK_IMPORTED_MODULE_2__.createEmptyProject)());
            controller.render();
        });
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsUUFBUSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxRQUFRLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdB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SUFDbkIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxVQUFVLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RCxZQUFZLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxZQUFZLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxhQUFhLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RCxZQUFZO0lBQ1osU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUztJQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFNBQVM7SUFDVCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksc0RBQWUsRUFBRSxDQUFDO0lBQ25ELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksMERBQW1CLENBQUMsQ0FBQyxDQUFDLENB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SSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBRTFELEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFv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QyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0gsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSw2REFBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLElBQUksMkRBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ0osTUFBTSxVQUFVLEdBQUcsSUFBSSw2REFBYyxDQUFDLFFBQVEsRUFBRSwyREFBa0IsRUFBRSxDQUFDLENBQUM7WUFDdEUsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvZGlqa3N0cmFqcy9kaWprc3RyYS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvZW5jb2RlLXV0ZjgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jYW4tcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2FsaWdubWVudC1wYXR0ZXJuLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYWxwaGFudW1lcmljLWRhdGEuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9iaXQtYnVmZmVyLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYml0LW1hdHJpeC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2J5dGUtZGF0YS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Vycm9yLWNvcnJlY3Rpb24tY29kZS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9maW5kZXItcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Zvcm1hdC1pbmZvLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZ2Fsb2lzLWZpZWxkLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUva2FuamktZGF0YS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL21hc2stcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL21vZGUuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9udW1lcmljLWRhdGEuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9wb2x5bm9taWFsLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvcXJjb2RlLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvcmVlZC1zb2xvbW9uLWVuY29kZXIuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9yZWdleC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3NlZ21lbnRzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS92ZXJzaW9uLWNoZWNrLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9yZW5kZXJlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvc3ZnLXRhZy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9yZW5kZXJlci91dGlscy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvc3R5bGUvbWFpbi5zY3NzP2EyMjEiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvYWN0aW9uUmVzdWx0LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9hY3Rpb25zLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9iYXNlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L2Z1bmN0aW9uLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9vcHMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L3N0cm9rZXMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L3ZhbHVlcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9jb250ZXh0LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2NvbnRleHRTdGVwcGVyLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2N1cnNvci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9leGVjLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2ZpZ3VyZXMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvZnVuY3Rpb25zQmFnLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL21hcHBpbmdzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL3BhcnNlci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9zaG9ydGN1dHMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvc3RlcC50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9zdmcudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvdG9rZW5zLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvY29uc3RzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvY29udHJvbGxlcnMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2NvbnRyb2xsZXJzL2RlYnVnLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvY29udHJvbGxlcnMvbWFpbi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2RhdGFiYXNlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvZGF0YWJhc2VJbml0LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvbW9kZWxzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdG9rZW5zLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdG9rZW5zRmFtaWx5LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdG9rZW5zTWVudS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3VybFBhcmFtcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2NhdGVnb3J5VG9rZW4udHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9jaG9vc2VEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9jb2RlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvY29kZUJhci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2Z1bmN0aW9uc0Jhci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2hlbHBEaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9pbWFnZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3Byb2plY3RMaXN0RGlhbG9nLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvc2F2ZURpYWxvZy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3N0YXZlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvc3RhdmVUb2tlbi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3Rva2VuLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xvZ28tbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBzaG93dGltZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbi5mcmFjdC10b2tlbnMge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBnYXA6IDVweDtcXG59XFxuLmZyYWN0LXRva2Vucy5oaWRlIC5mcmFjdC10b2tlbiwgLmZyYWN0LXRva2Vucy5oaWRlIC5sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmdyb3VwLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW4udG9rZW4taW5saW5lIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcbi5mcmFjdC10b2tlbi5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNDY2NjY2NjY2Nyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbmltYXRpb24tbmFtZTogc2hvd3RpbWU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCAyMTgsIDEyMywgMC40NjY2NjY2NjY3KTtcXG4gIGJvcmRlci1jb2xvcjogIzIyOEIyMjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUudmFsaWQtZHJvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEUk9QXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUucmVtb3ZlLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDAsIDAsIDAuNDY2NjY2NjY2Nyk7XFxuICBib3JkZXItY29sb3I6ICM4YjIyMjI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlLnJlbW92ZS1kcm9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlJFTU9WRVxcXCI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE2cHQ7XFxufVxcblxcbi5mcmFjdC10b2tlbi1ncm91cCB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7XFxuICBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cC5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAuZGVidWcgPiAuZnJhY3QtdG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4tc3Bhbi5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXI6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxufVxcblxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLnRva2VuLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5uYW1lIHtcXG4gIGZsZXg6IDAgMSA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLnRva2VucyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC50b2tlbnMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVweCk7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZWRpdG9yIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbiNlZGl0b3IgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjb2RlLWJhciB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuI2NvZGUtYmFyIGxhYmVsLCAjY29kZS1iYXIgaW5wdXQge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNjb2RlLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDQ1dmg7XFxufVxcblxcbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzID4gLmZyYWN0LXRva2VucyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vYmlsZS13YXJuaW5nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAubW9iaWxlLXdhcm5pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuZGlhbG9nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uY2hvb3NlLXRva2VuLWRpYWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG59XFxuLmNob29zZS10b2tlbi1kaWFsb2cgLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNob29zZS10b2tlbi1kaWFsb2cgLmNhdGVnb3J5ID4gLmxhYmVsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4uY2hvb3NlLXRva2VuLWRpYWxvZyAuY2F0ZWdvcnkgfiAuY2F0ZWdvcnkge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCAjODg4IGRvdHRlZDtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcXG59XFxuLmNob29zZS10b2tlbi1kaWFsb2cgLmRpYWxvZy10b2tlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNWVtIDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS90b2tlbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazov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Q0EsZUFBQTtBQXlNUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAa2V5ZnJhbWVzIHNob3d0aW1lIHtcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDAlOyB9XFxuICAgIHRvIHsgb3BhY2l0eTogMTAwJTsgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW5zIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgJi5oaWRlIHtcXG4gICAgICAgIC5mcmFjdC10b2tlbiwgLmxhYmVsIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgID4gLmdyb3VwLWxhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgID4gLmxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5mcmFjdC10b2tlbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICYudG9rZW4taW5saW5lIHtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcHg7XFxuICAgIH1cXG5cXG4gICAgJi5kZWJ1ZyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbiAgICB9XFxuXFxuICAgICYubW92ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDQ0NDNzc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBhbmltYXRpb24tbmFtZTogc2hvd3RpbWU7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcblxcbiAgICAgICAgJi52YWxpZC1kcm9wIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JkYTdiNzc7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjI4QjIyO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJEUk9QXFxcIjsgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5yZW1vdmUtZHJvcCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5MDAwMDc3O1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzhiMjIyMjtcXG4gICAgICAgICAgICAmOjpiZWZvcmUgeyBjb250ZW50OiBcXFwiUkVNT1ZFXFxcIjsgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIHRvcDogLTE2cHQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuLWdyb3VwIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICAgID4gKiB7IGZsZXg6IDAgMCBhdXRvOyBib3JkZXI6IG5vbmU7IGJvcmRlci1yYWRpdXM6IDBweDsgfVxcbiAgICA+ICo6bm90KDpmaXJzdC1jaGlsZCkuZnJhY3QtdG9rZW4geyBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkOyB9XFxuICAgID4gLmZyYWN0LXRva2VuLXNwYW4geyBwYWRkaW5nOiAycHg7IH1cXG5cXG4gICAgJi5kZWJ1ZyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbiAgICAgICAgJiA+IC5mcmFjdC10b2tlbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXM7XFxuXFxuICAgICYub3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgYm9yZGVyOiAycHggIzk5OSBkb3R0ZWQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcblxcbiAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgICAgICAgICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCAnLi90b2tlbnMnO1xcbkBpbXBvcnQgJy4vY29kZSc7XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xcbiAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1cHgpO1xcbn1cXG5cXG4uZnJhY3QtaW1hZ2Uge1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNlZGl0b3Ige1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI2VkaXRvciA+IG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NvZGUtYmFyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICAgIGxhYmVsLCBpbnB1dCB7IG1hcmdpbi1yaWdodDogNXB4OyB9XFxufVxcblxcbiNjb2RlLXBhbmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGhlaWdodDogNDV2aDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4OiAwIDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuXFxuICAgID4gLmZyYWN0LXRva2VucyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4ubW9iaWxlLXdhcm5pbmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XFxuICAgIC5tb2JpbGUtd2FybmluZyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNob29zZS10b2tlbi1kaWFsb2cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFxuICAgIC5jYXRlZ29yeSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICA+IC5sYWJlbCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIH4gLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4ICM4ODggZG90dGVkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy10b2tlbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxuICAgIH1cXG59XCIsXCIuZnJhY3QtZnVuY3Rpb25zLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC50b2tlbi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93biB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZmxleDogMCAxIGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgPiAubmFtZSB7XFxuICAgICAgICAgICAgZmxleDogMCAxIDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgPiAudG9rZW5zICB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaGlkZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ3JlYXRlZCAyMDA4LTA4LTE5LlxuICpcbiAqIERpamtzdHJhIHBhdGgtZmluZGluZyBmdW5jdGlvbnMuIEFkYXB0ZWQgZnJvbSB0aGUgRGlqa3N0YXIgUHl0aG9uIHByb2plY3QuXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA4XG4gKiAgIFd5YXR0IEJhbGR3aW4gPHNlbGZAd3lhdHRiYWxkd2luLmNvbT5cbiAqICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgZGlqa3N0cmEgPSB7XG4gIHNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHM6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgLy8gUHJlZGVjZXNzb3IgbWFwIGZvciBlYWNoIG5vZGUgdGhhdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICAvLyBub2RlIElEID0+IHByZWRlY2Vzc29yIG5vZGUgSURcbiAgICB2YXIgcHJlZGVjZXNzb3JzID0ge307XG5cbiAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkLlxuICAgIC8vIG5vZGUgSUQgPT4gY29zdFxuICAgIHZhciBjb3N0cyA9IHt9O1xuICAgIGNvc3RzW3NdID0gMDtcblxuICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQ7IGRpZmZlcnMgZnJvbVxuICAgIC8vIGBjb3N0c2AgaW4gdGhhdCBpdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byB0aGUgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXNcbiAgICAvLyB0aGUga25vd24gc2hvcnRlc3QgcGF0aCBmcm9tIHMuXG4gICAgLy8gWFhYOiBEbyB3ZSBhY3R1YWxseSBuZWVkIGJvdGggYGNvc3RzYCBhbmQgYG9wZW5gP1xuICAgIHZhciBvcGVuID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZS5tYWtlKCk7XG4gICAgb3Blbi5wdXNoKHMsIDApO1xuXG4gICAgdmFyIGNsb3Nlc3QsXG4gICAgICAgIHUsIHYsXG4gICAgICAgIGNvc3Rfb2Zfc190b191LFxuICAgICAgICBhZGphY2VudF9ub2RlcyxcbiAgICAgICAgY29zdF9vZl9lLFxuICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSxcbiAgICAgICAgY29zdF9vZl9zX3RvX3YsXG4gICAgICAgIGZpcnN0X3Zpc2l0O1xuICAgIHdoaWxlICghb3Blbi5lbXB0eSgpKSB7XG4gICAgICAvLyBJbiB0aGUgbm9kZXMgcmVtYWluaW5nIGluIGdyYXBoIHRoYXQgaGF2ZSBhIGtub3duIGNvc3QgZnJvbSBzLFxuICAgICAgLy8gZmluZCB0aGUgbm9kZSwgdSwgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgIGNsb3Nlc3QgPSBvcGVuLnBvcCgpO1xuICAgICAgdSA9IGNsb3Nlc3QudmFsdWU7XG4gICAgICBjb3N0X29mX3NfdG9fdSA9IGNsb3Nlc3QuY29zdDtcblxuICAgICAgLy8gR2V0IG5vZGVzIGFkamFjZW50IHRvIHUuLi5cbiAgICAgIGFkamFjZW50X25vZGVzID0gZ3JhcGhbdV0gfHwge307XG5cbiAgICAgIC8vIC4uLmFuZCBleHBsb3JlIHRoZSBlZGdlcyB0aGF0IGNvbm5lY3QgdSB0byB0aG9zZSBub2RlcywgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBjb3N0IG9mIHRoZSBzaG9ydGVzdCBwYXRocyB0byBhbnkgb3IgYWxsIG9mIHRob3NlIG5vZGVzIGFzXG4gICAgICAvLyBuZWNlc3NhcnkuIHYgaXMgdGhlIG5vZGUgYWNyb3NzIHRoZSBjdXJyZW50IGVkZ2UgZnJvbSB1LlxuICAgICAgZm9yICh2IGluIGFkamFjZW50X25vZGVzKSB7XG4gICAgICAgIGlmIChhZGphY2VudF9ub2Rlcy5oYXNPd25Qcm9wZXJ0eSh2KSkge1xuICAgICAgICAgIC8vIEdldCB0aGUgY29zdCBvZiB0aGUgZWRnZSBydW5uaW5nIGZyb20gdSB0byB2LlxuICAgICAgICAgIGNvc3Rfb2ZfZSA9IGFkamFjZW50X25vZGVzW3ZdO1xuXG4gICAgICAgICAgLy8gQ29zdCBvZiBzIHRvIHUgcGx1cyB0aGUgY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUtLXRoaXMgaXMgKmEqXG4gICAgICAgICAgLy8gY29zdCBmcm9tIHMgdG8gdiB0aGF0IG1heSBvciBtYXkgbm90IGJlIGxlc3MgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIGtub3duIGNvc3QgdG8gdi5cbiAgICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSA9IGNvc3Rfb2Zfc190b191ICsgY29zdF9vZl9lO1xuXG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB2aXNpdGVkIHYgeWV0IE9SIGlmIHRoZSBjdXJyZW50IGtub3duIGNvc3QgZnJvbSBzIHRvXG4gICAgICAgICAgLy8gdiBpcyBncmVhdGVyIHRoYW4gdGhlIG5ldyBjb3N0IHdlIGp1c3QgZm91bmQgKGNvc3Qgb2YgcyB0byB1IHBsdXNcbiAgICAgICAgICAvLyBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZSksIHVwZGF0ZSB2J3MgY29zdCBpbiB0aGUgY29zdCBsaXN0IGFuZFxuICAgICAgICAgIC8vIHVwZGF0ZSB2J3MgcHJlZGVjZXNzb3IgaW4gdGhlIHByZWRlY2Vzc29yIGxpc3QgKGl0J3Mgbm93IHUpLlxuICAgICAgICAgIGNvc3Rfb2Zfc190b192ID0gY29zdHNbdl07XG4gICAgICAgICAgZmlyc3RfdmlzaXQgPSAodHlwZW9mIGNvc3RzW3ZdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgaWYgKGZpcnN0X3Zpc2l0IHx8IGNvc3Rfb2Zfc190b192ID4gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpIHtcbiAgICAgICAgICAgIGNvc3RzW3ZdID0gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2U7XG4gICAgICAgICAgICBvcGVuLnB1c2godiwgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpO1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JzW3ZdID0gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb3N0c1tkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBtc2cgPSBbJ0NvdWxkIG5vdCBmaW5kIGEgcGF0aCBmcm9tICcsIHMsICcgdG8gJywgZCwgJy4nXS5qb2luKCcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVkZWNlc3NvcnM7XG4gIH0sXG5cbiAgZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdDogZnVuY3Rpb24ocHJlZGVjZXNzb3JzLCBkKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHUgPSBkO1xuICAgIHZhciBwcmVkZWNlc3NvcjtcbiAgICB3aGlsZSAodSkge1xuICAgICAgbm9kZXMucHVzaCh1KTtcbiAgICAgIHByZWRlY2Vzc29yID0gcHJlZGVjZXNzb3JzW3VdO1xuICAgICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICB9XG4gICAgbm9kZXMucmV2ZXJzZSgpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICBmaW5kX3BhdGg6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgdmFyIHByZWRlY2Vzc29ycyA9IGRpamtzdHJhLnNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHMoZ3JhcGgsIHMsIGQpO1xuICAgIHJldHVybiBkaWprc3RyYS5leHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0KFxuICAgICAgcHJlZGVjZXNzb3JzLCBkKTtcbiAgfSxcblxuICAvKipcbiAgICogQSB2ZXJ5IG5haXZlIHByaW9yaXR5IHF1ZXVlIGltcGxlbWVudGF0aW9uLlxuICAgKi9cbiAgUHJpb3JpdHlRdWV1ZToge1xuICAgIG1ha2U6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICB2YXIgVCA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUsXG4gICAgICAgICAgdCA9IHt9LFxuICAgICAgICAgIGtleTtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgZm9yIChrZXkgaW4gVCkge1xuICAgICAgICBpZiAoVC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdFtrZXldID0gVFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0LnF1ZXVlID0gW107XG4gICAgICB0LnNvcnRlciA9IG9wdHMuc29ydGVyIHx8IFQuZGVmYXVsdF9zb3J0ZXI7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuXG4gICAgZGVmYXVsdF9zb3J0ZXI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb3N0IC0gYi5jb3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaXRlbSB0byB0aGUgcXVldWUgYW5kIGVuc3VyZSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50XG4gICAgICogaXMgYXQgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwdXNoOiBmdW5jdGlvbiAodmFsdWUsIGNvc3QpIHtcbiAgICAgIHZhciBpdGVtID0ge3ZhbHVlOiB2YWx1ZSwgY29zdDogY29zdH07XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgICB0aGlzLnF1ZXVlLnNvcnQodGhpcy5zb3J0ZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBpbiB0aGUgcXVldWUuXG4gICAgICovXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBub2RlLmpzIG1vZHVsZSBleHBvcnRzXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuY29kZVV0ZjggKGlucHV0KSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc2l6ZSA9IGlucHV0Lmxlbmd0aFxuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzaXplOyBpbmRleCsrKSB7XG4gICAgdmFyIHBvaW50ID0gaW5wdXQuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChwb2ludCA+PSAweEQ4MDAgJiYgcG9pbnQgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHZhciBzZWNvbmQgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgcG9pbnQgPSAocG9pbnQgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwXG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVUy1BU0NJSVxuICAgIGlmIChwb2ludCA8IDB4ODApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAyLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweDgwMCkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDYpIHwgMTkyKVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAzLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweEQ4MDAgfHwgKHBvaW50ID49IDB4RTAwMCAmJiBwb2ludCA8IDB4MTAwMDApKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTIpIHwgMjI0KVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiA2KSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gNC1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50ID49IDB4MTAwMDAgJiYgcG9pbnQgPD0gMHgxMEZGRkYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiAxOCkgfCAyNDApXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDEyKSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIEludmFsaWQgY2hhcmFjdGVyXG4gICAgcmVzdWx0LnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpLmJ1ZmZlclxufVxuIiwiXG5jb25zdCBjYW5Qcm9taXNlID0gcmVxdWlyZSgnLi9jYW4tcHJvbWlzZScpXG5cbmNvbnN0IFFSQ29kZSA9IHJlcXVpcmUoJy4vY29yZS9xcmNvZGUnKVxuY29uc3QgQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL2NhbnZhcycpXG5jb25zdCBTdmdSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvc3ZnLXRhZy5qcycpXG5cbmZ1bmN0aW9uIHJlbmRlckNhbnZhcyAocmVuZGVyRnVuYywgY2FudmFzLCB0ZXh0LCBvcHRzLCBjYikge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIGNvbnN0IGFyZ3NOdW0gPSBhcmdzLmxlbmd0aFxuICBjb25zdCBpc0xhc3RBcmdDYiA9IHR5cGVvZiBhcmdzW2FyZ3NOdW0gLSAxXSA9PT0gJ2Z1bmN0aW9uJ1xuXG4gIGlmICghaXNMYXN0QXJnQ2IgJiYgIWNhblByb21pc2UoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQgYXMgbGFzdCBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAoaXNMYXN0QXJnQ2IpIHtcbiAgICBpZiAoYXJnc051bSA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMgcHJvdmlkZWQnKVxuICAgIH1cblxuICAgIGlmIChhcmdzTnVtID09PSAyKSB7XG4gICAgICBjYiA9IHRleHRcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKGFyZ3NOdW0gPT09IDMpIHtcbiAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCAmJiB0eXBlb2YgY2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNiID0gb3B0c1xuICAgICAgICBvcHRzID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYiA9IG9wdHNcbiAgICAgICAgb3B0cyA9IHRleHRcbiAgICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGFyZ3NOdW0gPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoYXJnc051bSA9PT0gMSkge1xuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAoYXJnc051bSA9PT0gMiAmJiAhY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgIG9wdHMgPSB0ZXh0XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFFSQ29kZS5jcmVhdGUodGV4dCwgb3B0cylcbiAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jKGRhdGEsIGNhbnZhcywgb3B0cykpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBRUkNvZGUuY3JlYXRlKHRleHQsIG9wdHMpXG4gICAgY2IobnVsbCwgcmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2IoZSlcbiAgfVxufVxuXG5leHBvcnRzLmNyZWF0ZSA9IFFSQ29kZS5jcmVhdGVcbmV4cG9ydHMudG9DYW52YXMgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXIpXG5leHBvcnRzLnRvRGF0YVVSTCA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIENhbnZhc1JlbmRlcmVyLnJlbmRlclRvRGF0YVVSTClcblxuLy8gb25seSBzdmcgZm9yIG5vdy5cbmV4cG9ydHMudG9TdHJpbmcgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBmdW5jdGlvbiAoZGF0YSwgXywgb3B0cykge1xuICByZXR1cm4gU3ZnUmVuZGVyZXIucmVuZGVyKGRhdGEsIG9wdHMpXG59KVxuIiwiLy8gY2FuLXByb21pc2UgaGFzIGEgY3Jhc2ggaW4gc29tZSB2ZXJzaW9ucyBvZiByZWFjdCBuYXRpdmUgdGhhdCBkb250IGhhdmVcbi8vIHN0YW5kYXJkIGdsb2JhbCBvYmplY3RzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29sZGFpci9ub2RlLXFyY29kZS9pc3N1ZXMvMTU3XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgUHJvbWlzZS5wcm90b3R5cGUgJiYgUHJvbWlzZS5wcm90b3R5cGUudGhlblxufVxuIiwiLyoqXG4gKiBBbGlnbm1lbnQgcGF0dGVybiBhcmUgZml4ZWQgcmVmZXJlbmNlIHBhdHRlcm4gaW4gZGVmaW5lZCBwb3NpdGlvbnNcbiAqIGluIGEgbWF0cml4IHN5bWJvbG9neSwgd2hpY2ggZW5hYmxlcyB0aGUgZGVjb2RlIHNvZnR3YXJlIHRvIHJlLXN5bmNocm9uaXNlXG4gKiB0aGUgY29vcmRpbmF0ZSBtYXBwaW5nIG9mIHRoZSBpbWFnZSBtb2R1bGVzIGluIHRoZSBldmVudCBvZiBtb2RlcmF0ZSBhbW91bnRzXG4gKiBvZiBkaXN0b3J0aW9uIG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBBbGlnbm1lbnQgcGF0dGVybnMgYXJlIHByZXNlbnQgb25seSBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiAyIG9yIGxhcmdlclxuICogYW5kIHRoZWlyIG51bWJlciBkZXBlbmRzIG9uIHRoZSBzeW1ib2wgdmVyc2lvbi5cbiAqL1xuXG5jb25zdCBnZXRTeW1ib2xTaXplID0gcmVxdWlyZSgnLi91dGlscycpLmdldFN5bWJvbFNpemVcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlciBtb2R1bGUgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVyblxuICogZm9yIHRoZSBzcGVjaWZpZWQgUVIgQ29kZSB2ZXJzaW9uLlxuICpcbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIHBvc2l0aW9uZWQgc3ltbWV0cmljYWxseSBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgZGlhZ29uYWxcbiAqIHJ1bm5pbmcgZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzeW1ib2wgdG8gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIuXG4gKlxuICogU2luY2UgcG9zaXRpb25zIGFyZSBzaW1tZXRyaWNhbCBvbmx5IGhhbGYgb2YgdGhlIGNvb3JkaW5hdGVzIGFyZSByZXR1cm5lZC5cbiAqIEVhY2ggaXRlbSBvZiB0aGUgYXJyYXkgd2lsbCByZXByZXNlbnQgaW4gdHVybiB0aGUgeCBhbmQgeSBjb29yZGluYXRlLlxuICogQHNlZSB7QGxpbmsgZ2V0UG9zaXRpb25zfVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlXG4gKi9cbmV4cG9ydHMuZ2V0Um93Q29sQ29vcmRzID0gZnVuY3Rpb24gZ2V0Um93Q29sQ29vcmRzICh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxKSByZXR1cm4gW11cblxuICBjb25zdCBwb3NDb3VudCA9IE1hdGguZmxvb3IodmVyc2lvbiAvIDcpICsgMlxuICBjb25zdCBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuICBjb25zdCBpbnRlcnZhbHMgPSBzaXplID09PSAxNDUgPyAyNiA6IE1hdGguY2VpbCgoc2l6ZSAtIDEzKSAvICgyICogcG9zQ291bnQgLSAyKSkgKiAyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtzaXplIC0gN10gLy8gTGFzdCBjb29yZCBpcyBhbHdheXMgKHNpemUgLSA3KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9zQ291bnQgLSAxOyBpKyspIHtcbiAgICBwb3NpdGlvbnNbaV0gPSBwb3NpdGlvbnNbaSAtIDFdIC0gaW50ZXJ2YWxzXG4gIH1cblxuICBwb3NpdGlvbnMucHVzaCg2KSAvLyBGaXJzdCBjb29yZCBpcyBhbHdheXMgNlxuXG4gIHJldHVybiBwb3NpdGlvbnMucmV2ZXJzZSgpXG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgY2VudGVyIHBvaW50IG9mIHRoZSBwYXR0ZXJuIGFzICh4LCB5KSBjb29yZGluYXRlc1xuICpcbiAqIENvb3JkaW5hdGVzIGFyZSBjYWxjdWxhdGVkIGV4cGFuZGluZyB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyByZXR1cm5lZCBieSB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfVxuICogYW5kIGZpbHRlcmluZyBvdXQgdGhlIGl0ZW1zIHRoYXQgb3ZlcmxhcHMgd2l0aCBmaW5kZXIgcGF0dGVyblxuICpcbiAqIEBleGFtcGxlXG4gKiBGb3IgYSBWZXJzaW9uIDcgc3ltYm9sIHtAbGluayBnZXRSb3dDb2xDb29yZHN9IHJldHVybnMgdmFsdWVzIDYsIDIyIGFuZCAzOC5cbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMsIHRoZXJlZm9yZSwgYXJlIHRvIGJlIGNlbnRlcmVkIG9uIChyb3csIGNvbHVtbilcbiAqIHBvc2l0aW9ucyAoNiwyMiksICgyMiw2KSwgKDIyLDIyKSwgKDIyLDM4KSwgKDM4LDIyKSwgKDM4LDM4KS5cbiAqIE5vdGUgdGhhdCB0aGUgY29vcmRpbmF0ZXMgKDYsNiksICg2LDM4KSwgKDM4LDYpIGFyZSBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAqIGFuZCBhcmUgbm90IHRoZXJlZm9yZSB1c2VkIGZvciBhbGlnbm1lbnQgcGF0dGVybnMuXG4gKlxuICogbGV0IHBvcyA9IGdldFBvc2l0aW9ucyg3KVxuICogLy8gW1s2LDIyXSwgWzIyLDZdLCBbMjIsMjJdLCBbMjIsMzhdLCBbMzgsMjJdLCBbMzgsMzhdXVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICovXG5leHBvcnRzLmdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyAodmVyc2lvbikge1xuICBjb25zdCBjb29yZHMgPSBbXVxuICBjb25zdCBwb3MgPSBleHBvcnRzLmdldFJvd0NvbENvb3Jkcyh2ZXJzaW9uKVxuICBjb25zdCBwb3NMZW5ndGggPSBwb3MubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zTGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFNraXAgaWYgcG9zaXRpb24gaXMgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gICAgICBpZiAoKGkgPT09IDAgJiYgaiA9PT0gMCkgfHwgLy8gdG9wLWxlZnRcbiAgICAgICAgICAoaSA9PT0gMCAmJiBqID09PSBwb3NMZW5ndGggLSAxKSB8fCAvLyBib3R0b20tbGVmdFxuICAgICAgICAgIChpID09PSBwb3NMZW5ndGggLSAxICYmIGogPT09IDApKSB7IC8vIHRvcC1yaWdodFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb29yZHMucHVzaChbcG9zW2ldLCBwb3Nbal1dKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHNcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG4vKipcbiAqIEFycmF5IG9mIGNoYXJhY3RlcnMgYXZhaWxhYmxlIGluIGFscGhhbnVtZXJpYyBtb2RlXG4gKlxuICogQXMgcGVyIFFSIENvZGUgc3BlY2lmaWNhdGlvbiwgdG8gZWFjaCBjaGFyYWN0ZXJcbiAqIGlzIGFzc2lnbmVkIGEgdmFsdWUgZnJvbSAwIHRvIDQ0IHdoaWNoIGluIHRoaXMgY2FzZSBjb2luY2lkZXNcbiAqIHdpdGggdGhlIGFycmF5IGluZGV4XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5jb25zdCBBTFBIQV9OVU1fQ0hBUlMgPSBbXG4gICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyxcbiAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICcgJywgJyQnLCAnJScsICcqJywgJysnLCAnLScsICcuJywgJy8nLCAnOidcbl1cblxuZnVuY3Rpb24gQWxwaGFudW1lcmljRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLkFMUEhBTlVNRVJJQ1xuICB0aGlzLmRhdGEgPSBkYXRhXG59XG5cbkFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gMTEgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDIpICsgNiAqIChsZW5ndGggJSAyKVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBBbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGFyZSBkaXZpZGVkIGludG8gZ3JvdXBzIG9mIHR3byBjaGFyYWN0ZXJzXG4gIC8vIGFuZCBlbmNvZGVkIGFzIDExLWJpdCBiaW5hcnkgY29kZXMuXG4gIGZvciAoaSA9IDA7IGkgKyAyIDw9IHRoaXMuZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBtdWx0aXBsaWVkIGJ5IDQ1XG4gICAgbGV0IHZhbHVlID0gQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSAqIDQ1XG5cbiAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBzZWNvbmQgZGlnaXQgaXMgYWRkZWQgdG8gdGhlIHByb2R1Y3RcbiAgICB2YWx1ZSArPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaSArIDFdKVxuXG4gICAgLy8gVGhlIHN1bSBpcyB0aGVuIHN0b3JlZCBhcyAxMS1iaXQgYmluYXJ5IG51bWJlclxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDExKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkYXRhIGNoYXJhY3RlcnMgaXMgbm90IGEgbXVsdGlwbGUgb2YgdHdvLFxuICAvLyB0aGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaW5hbCBjaGFyYWN0ZXIgaXMgZW5jb2RlZCBhcyBhIDYtYml0IGJpbmFyeSBudW1iZXIuXG4gIGlmICh0aGlzLmRhdGEubGVuZ3RoICUgMikge1xuICAgIGJpdEJ1ZmZlci5wdXQoQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSwgNilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFscGhhbnVtZXJpY0RhdGFcbiIsImZ1bmN0aW9uIEJpdEJ1ZmZlciAoKSB7XG4gIHRoaXMuYnVmZmVyID0gW11cbiAgdGhpcy5sZW5ndGggPSAwXG59XG5cbkJpdEJ1ZmZlci5wcm90b3R5cGUgPSB7XG5cbiAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBjb25zdCBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KVxuICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxXG4gIH0sXG5cbiAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gIH0sXG5cbiAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XG4gICAgY29uc3QgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOClcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApXG4gICAgfVxuXG4gICAgaWYgKGJpdCkge1xuICAgICAgdGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSlcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCsrXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRCdWZmZXJcbiIsIi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGhhbmRsZSBRUiBDb2RlIHN5bWJvbCBtb2R1bGVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU3ltYm9sIHNpemVcbiAqL1xuZnVuY3Rpb24gQml0TWF0cml4IChzaXplKSB7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQml0TWF0cml4IHNpemUgbXVzdCBiZSBkZWZpbmVkIGFuZCBncmVhdGVyIHRoYW4gMCcpXG4gIH1cblxuICB0aGlzLnNpemUgPSBzaXplXG4gIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplKVxuICB0aGlzLnJlc2VydmVkQml0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUpXG59XG5cbi8qKlxuICogU2V0IGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqIElmIHJlc2VydmVkIGZsYWcgaXMgc2V0LCB0aGlzIGJpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2Vzc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXNlcnZlZFxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUsIHJlc2VydmVkKSB7XG4gIGNvbnN0IGluZGV4ID0gcm93ICogdGhpcy5zaXplICsgY29sXG4gIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZVxuICBpZiAocmVzZXJ2ZWQpIHRoaXMucmVzZXJ2ZWRCaXRbaW5kZXhdID0gdHJ1ZVxufVxuXG4vKipcbiAqIFJldHVybnMgYml0IHZhbHVlIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHJvd1xuICogQHBhcmFtICB7TnVtYmVyfSAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICByZXR1cm4gdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHhvciBvcGVyYXRvciBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqICh1c2VkIGR1cmluZyBtYXNraW5nIHByb2Nlc3MpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgY29sXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICB0aGlzLmRhdGFbcm93ICogdGhpcy5zaXplICsgY29sXSBePSB2YWx1ZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGJpdCBhdCBzcGVjaWZpZWQgbG9jYXRpb24gaXMgcmVzZXJ2ZWRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5pc1Jlc2VydmVkID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gIHJldHVybiB0aGlzLnJlc2VydmVkQml0W3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRNYXRyaXhcbiIsImNvbnN0IGVuY29kZVV0ZjggPSByZXF1aXJlKCdlbmNvZGUtdXRmOCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gQnl0ZURhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5CWVRFXG4gIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBlbmNvZGVVdGY4KGRhdGEpXG4gIH1cbiAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbn1cblxuQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogOFxufVxuXG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBiaXRCdWZmZXIucHV0KHRoaXMuZGF0YVtpXSwgOClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVEYXRhXG4iLCJjb25zdCBFQ0xldmVsID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWxldmVsJylcclxuXHJcbmNvbnN0IEVDX0JMT0NLU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDEsIDEsIDEsIDEsXHJcbiAgMSwgMSwgMSwgMSxcclxuICAxLCAxLCAyLCAyLFxyXG4gIDEsIDIsIDIsIDQsXHJcbiAgMSwgMiwgNCwgNCxcclxuICAyLCA0LCA0LCA0LFxyXG4gIDIsIDQsIDYsIDUsXHJcbiAgMiwgNCwgNiwgNixcclxuICAyLCA1LCA4LCA4LFxyXG4gIDQsIDUsIDgsIDgsXHJcbiAgNCwgNSwgOCwgMTEsXHJcbiAgNCwgOCwgMTAsIDExLFxyXG4gIDQsIDksIDEyLCAxNixcclxuICA0LCA5LCAxNiwgMTYsXHJcbiAgNiwgMTAsIDEyLCAxOCxcclxuICA2LCAxMCwgMTcsIDE2LFxyXG4gIDYsIDExLCAxNiwgMTksXHJcbiAgNiwgMTMsIDE4LCAyMSxcclxuICA3LCAxNCwgMjEsIDI1LFxyXG4gIDgsIDE2LCAyMCwgMjUsXHJcbiAgOCwgMTcsIDIzLCAyNSxcclxuICA5LCAxNywgMjMsIDM0LFxyXG4gIDksIDE4LCAyNSwgMzAsXHJcbiAgMTAsIDIwLCAyNywgMzIsXHJcbiAgMTIsIDIxLCAyOSwgMzUsXHJcbiAgMTIsIDIzLCAzNCwgMzcsXHJcbiAgMTIsIDI1LCAzNCwgNDAsXHJcbiAgMTMsIDI2LCAzNSwgNDIsXHJcbiAgMTQsIDI4LCAzOCwgNDUsXHJcbiAgMTUsIDI5LCA0MCwgNDgsXHJcbiAgMTYsIDMxLCA0MywgNTEsXHJcbiAgMTcsIDMzLCA0NSwgNTQsXHJcbiAgMTgsIDM1LCA0OCwgNTcsXHJcbiAgMTksIDM3LCA1MSwgNjAsXHJcbiAgMTksIDM4LCA1MywgNjMsXHJcbiAgMjAsIDQwLCA1NiwgNjYsXHJcbiAgMjEsIDQzLCA1OSwgNzAsXHJcbiAgMjIsIDQ1LCA2MiwgNzQsXHJcbiAgMjQsIDQ3LCA2NSwgNzcsXHJcbiAgMjUsIDQ5LCA2OCwgODFcclxuXVxyXG5cclxuY29uc3QgRUNfQ09ERVdPUkRTX1RBQkxFID0gW1xyXG4vLyBMICBNICBRICBIXHJcbiAgNywgMTAsIDEzLCAxNyxcclxuICAxMCwgMTYsIDIyLCAyOCxcclxuICAxNSwgMjYsIDM2LCA0NCxcclxuICAyMCwgMzYsIDUyLCA2NCxcclxuICAyNiwgNDgsIDcyLCA4OCxcclxuICAzNiwgNjQsIDk2LCAxMTIsXHJcbiAgNDAsIDcyLCAxMDgsIDEzMCxcclxuICA0OCwgODgsIDEzMiwgMTU2LFxyXG4gIDYwLCAxMTAsIDE2MCwgMTkyLFxyXG4gIDcyLCAxMzAsIDE5MiwgMjI0LFxyXG4gIDgwLCAxNTAsIDIyNCwgMjY0LFxyXG4gIDk2LCAxNzYsIDI2MCwgMzA4LFxyXG4gIDEwNCwgMTk4LCAyODgsIDM1MixcclxuICAxMjAsIDIxNiwgMzIwLCAzODQsXHJcbiAgMTMyLCAyNDAsIDM2MCwgNDMyLFxyXG4gIDE0NCwgMjgwLCA0MDgsIDQ4MCxcclxuICAxNjgsIDMwOCwgNDQ4LCA1MzIsXHJcbiAgMTgwLCAzMzgsIDUwNCwgNTg4LFxyXG4gIDE5NiwgMzY0LCA1NDYsIDY1MCxcclxuICAyMjQsIDQxNiwgNjAwLCA3MDAsXHJcbiAgMjI0LCA0NDIsIDY0NCwgNzUwLFxyXG4gIDI1MiwgNDc2LCA2OTAsIDgxNixcclxuICAyNzAsIDUwNCwgNzUwLCA5MDAsXHJcbiAgMzAwLCA1NjAsIDgxMCwgOTYwLFxyXG4gIDMxMiwgNTg4LCA4NzAsIDEwNTAsXHJcbiAgMzM2LCA2NDQsIDk1MiwgMTExMCxcclxuICAzNjAsIDcwMCwgMTAyMCwgMTIwMCxcclxuICAzOTAsIDcyOCwgMTA1MCwgMTI2MCxcclxuICA0MjAsIDc4NCwgMTE0MCwgMTM1MCxcclxuICA0NTAsIDgxMiwgMTIwMCwgMTQ0MCxcclxuICA0ODAsIDg2OCwgMTI5MCwgMTUzMCxcclxuICA1MTAsIDkyNCwgMTM1MCwgMTYyMCxcclxuICA1NDAsIDk4MCwgMTQ0MCwgMTcxMCxcclxuICA1NzAsIDEwMzYsIDE1MzAsIDE4MDAsXHJcbiAgNTcwLCAxMDY0LCAxNTkwLCAxODkwLFxyXG4gIDYwMCwgMTEyMCwgMTY4MCwgMTk4MCxcclxuICA2MzAsIDEyMDQsIDE3NzAsIDIxMDAsXHJcbiAgNjYwLCAxMjYwLCAxODYwLCAyMjIwLFxyXG4gIDcyMCwgMTMxNiwgMTk1MCwgMjMxMCxcclxuICA3NTAsIDEzNzIsIDIwNDAsIDI0MzBcclxuXVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2NrIHRoYXQgdGhlIFFSIENvZGUgc2hvdWxkIGNvbnRhaW5cclxuICogZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzXHJcbiAqL1xyXG5leHBvcnRzLmdldEJsb2Nrc0NvdW50ID0gZnVuY3Rpb24gZ2V0QmxvY2tzQ291bnQgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgc3dpdGNoIChlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gICAgY2FzZSBFQ0xldmVsLkw6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAwXVxyXG4gICAgY2FzZSBFQ0xldmVsLk06XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXVxyXG4gICAgY2FzZSBFQ0xldmVsLlE6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAyXVxyXG4gICAgY2FzZSBFQ0xldmVsLkg6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAzXVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyB0byB1c2UgZm9yIHRoZSBzcGVjaWZpZWRcclxuICogdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXHJcbiAqL1xyXG5leHBvcnRzLmdldFRvdGFsQ29kZXdvcmRzQ291bnQgPSBmdW5jdGlvbiBnZXRUb3RhbENvZGV3b3Jkc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0cy5MID0geyBiaXQ6IDEgfVxuZXhwb3J0cy5NID0geyBiaXQ6IDAgfVxuZXhwb3J0cy5RID0geyBiaXQ6IDMgfVxuZXhwb3J0cy5IID0geyBiaXQ6IDIgfVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICdsb3cnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuTFxuXG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk1cblxuICAgIGNhc2UgJ3EnOlxuICAgIGNhc2UgJ3F1YXJ0aWxlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLlFcblxuICAgIGNhc2UgJ2gnOlxuICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuSFxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBFQyBMZXZlbDogJyArIHN0cmluZylcbiAgfVxufVxuXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChsZXZlbCkge1xuICByZXR1cm4gbGV2ZWwgJiYgdHlwZW9mIGxldmVsLmJpdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsZXZlbC5iaXQgPj0gMCAmJiBsZXZlbC5iaXQgPCA0XG59XG5cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cbn1cbiIsImNvbnN0IGdldFN5bWJvbFNpemUgPSByZXF1aXJlKCcuL3V0aWxzJykuZ2V0U3ltYm9sU2l6ZVxuY29uc3QgRklOREVSX1BBVFRFUk5fU0laRSA9IDdcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGZpbmRlciBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xuZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMgKHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbilcblxuICByZXR1cm4gW1xuICAgIC8vIHRvcC1sZWZ0XG4gICAgWzAsIDBdLFxuICAgIC8vIHRvcC1yaWdodFxuICAgIFtzaXplIC0gRklOREVSX1BBVFRFUk5fU0laRSwgMF0sXG4gICAgLy8gYm90dG9tLWxlZnRcbiAgICBbMCwgc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkVdXG4gIF1cbn1cbiIsImNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmNvbnN0IEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKVxuY29uc3QgRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMCkgfCAoMSA8PCA0KSB8ICgxIDw8IDEpXG5jb25zdCBHMTVfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE1KVxuXG4vKipcbiAqIFJldHVybnMgZm9ybWF0IGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBpcyBhIDE1LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDUgZGF0YSBiaXRzLFxuICogd2l0aCAxMCBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE1LCA1KSBCQ0ggY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWFzayAgICAgICAgICAgICAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIEVuY29kZWQgZm9ybWF0IGluZm9ybWF0aW9uIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzIChlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaykge1xuICBjb25zdCBkYXRhID0gKChlcnJvckNvcnJlY3Rpb25MZXZlbC5iaXQgPDwgMykgfCBtYXNrKVxuICBsZXQgZCA9IGRhdGEgPDwgMTBcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMTVfQkNIID49IDApIHtcbiAgICBkIF49IChHMTUgPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCkpXG4gIH1cblxuICAvLyB4b3IgZmluYWwgZGF0YSB3aXRoIG1hc2sgcGF0dGVybiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdFxuICAvLyBubyBjb21iaW5hdGlvbiBvZiBFcnJvciBDb3JyZWN0aW9uIExldmVsIGFuZCBkYXRhIG1hc2sgcGF0dGVyblxuICAvLyB3aWxsIHJlc3VsdCBpbiBhbiBhbGwtemVybyBkYXRhIHN0cmluZ1xuICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0tcbn1cbiIsImNvbnN0IEVYUF9UQUJMRSA9IG5ldyBVaW50OEFycmF5KDUxMilcbmNvbnN0IExPR19UQUJMRSA9IG5ldyBVaW50OEFycmF5KDI1Nilcbi8qKlxuICogUHJlY29tcHV0ZSB0aGUgbG9nIGFuZCBhbnRpLWxvZyB0YWJsZXMgZm9yIGZhc3RlciBjb21wdXRhdGlvbiBsYXRlclxuICpcbiAqIEZvciBlYWNoIHBvc3NpYmxlIHZhbHVlIGluIHRoZSBnYWxvaXMgZmllbGQgMl44LCB3ZSB3aWxsIHByZS1jb21wdXRlXG4gKiB0aGUgbG9nYXJpdGhtIGFuZCBhbnRpLWxvZ2FyaXRobSAoZXhwb25lbnRpYWwpIG9mIHRoaXMgdmFsdWVcbiAqXG4gKiByZWYge0BsaW5rIGh0dHBzOi8vZW4ud2lraXZlcnNpdHkub3JnL3dpa2kvUmVlZCVFMiU4MCU5M1NvbG9tb25fY29kZXNfZm9yX2NvZGVycyNJbnRyb2R1Y3Rpb25fdG9fbWF0aGVtYXRpY2FsX2ZpZWxkc31cbiAqL1xuOyhmdW5jdGlvbiBpbml0VGFibGVzICgpIHtcbiAgbGV0IHggPSAxXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSB4XG4gICAgTE9HX1RBQkxFW3hdID0gaVxuXG4gICAgeCA8PD0gMSAvLyBtdWx0aXBseSBieSAyXG5cbiAgICAvLyBUaGUgUVIgY29kZSBzcGVjaWZpY2F0aW9uIHNheXMgdG8gdXNlIGJ5dGUtd2lzZSBtb2R1bG8gMTAwMDExMTAxIGFyaXRobWV0aWMuXG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdoZW4gYSBudW1iZXIgaXMgMjU2IG9yIGxhcmdlciwgaXQgc2hvdWxkIGJlIFhPUmVkIHdpdGggMHgxMUQuXG4gICAgaWYgKHggJiAweDEwMCkgeyAvLyBzaW1pbGFyIHRvIHggPj0gMjU2LCBidXQgYSBsb3QgZmFzdGVyIChiZWNhdXNlIDB4MTAwID09IDI1NilcbiAgICAgIHggXj0gMHgxMURcbiAgICB9XG4gIH1cblxuICAvLyBPcHRpbWl6YXRpb246IGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgYW50aS1sb2cgdGFibGUgc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIG1vZCAyNTUgdG9cbiAgLy8gc3RheSBpbnNpZGUgdGhlIGJvdW5kcyAoYmVjYXVzZSB3ZSB3aWxsIG1haW5seSB1c2UgdGhpcyB0YWJsZSBmb3IgdGhlIG11bHRpcGxpY2F0aW9uIG9mXG4gIC8vIHR3byBHRiBudW1iZXJzLCBubyBtb3JlKS5cbiAgLy8gQHNlZSB7QGxpbmsgbXVsfVxuICBmb3IgKGxldCBpID0gMjU1OyBpIDwgNTEyOyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSBFWFBfVEFCTEVbaSAtIDI1NV1cbiAgfVxufSgpKVxuXG4vKipcbiAqIFJldHVybnMgbG9nIHZhbHVlIG9mIG4gaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uIGxvZyAobikge1xuICBpZiAobiA8IDEpIHRocm93IG5ldyBFcnJvcignbG9nKCcgKyBuICsgJyknKVxuICByZXR1cm4gTE9HX1RBQkxFW25dXG59XG5cbi8qKlxuICogUmV0dXJucyBhbnRpLWxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5leHAgPSBmdW5jdGlvbiBleHAgKG4pIHtcbiAgcmV0dXJuIEVYUF9UQUJMRVtuXVxufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG51bWJlciBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBzaG91bGQgYmUgRVhQX1RBQkxFWyhMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV0pICUgMjU1XSBpZiBFWFBfVEFCTEUgd2Fzbid0IG92ZXJzaXplZFxuICAvLyBAc2VlIHtAbGluayBpbml0VGFibGVzfVxuICByZXR1cm4gRVhQX1RBQkxFW0xPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XV1cbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gS2FuamlEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuS0FOSklcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5LYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogMTNcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW4gdGhlIFNoaWZ0IEpJUyBzeXN0ZW0sIEthbmppIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgdHdvIGJ5dGUgY29tYmluYXRpb24uXG4gIC8vIFRoZXNlIGJ5dGUgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICAvLyBKSVMgWCAwMjA4IGdpdmVzIGRldGFpbHMgb2YgdGhlIHNoaWZ0IGNvZGVkIHJlcHJlc2VudGF0aW9uLlxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHZhbHVlID0gVXRpbHMudG9TSklTKHRoaXMuZGF0YVtpXSlcblxuICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4ODE0MCB0byAweDlGRkM6XG4gICAgaWYgKHZhbHVlID49IDB4ODE0MCAmJiB2YWx1ZSA8PSAweDlGRkMpIHtcbiAgICAgIC8vIFN1YnRyYWN0IDB4ODE0MCBmcm9tIFNoaWZ0IEpJUyB2YWx1ZVxuICAgICAgdmFsdWUgLT0gMHg4MTQwXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweEUwNDAgdG8gMHhFQkJGXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAweEUwNDAgJiYgdmFsdWUgPD0gMHhFQkJGKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweEMxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4QzE0MFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIFNKSVMgY2hhcmFjdGVyOiAnICsgdGhpcy5kYXRhW2ldICsgJ1xcbicgK1xuICAgICAgICAnTWFrZSBzdXJlIHlvdXIgY2hhcnNldCBpcyBVVEYtOCcpXG4gICAgfVxuXG4gICAgLy8gTXVsdGlwbHkgbW9zdCBzaWduaWZpY2FudCBieXRlIG9mIHJlc3VsdCBieSAweEMwXG4gICAgLy8gYW5kIGFkZCBsZWFzdCBzaWduaWZpY2FudCBieXRlIHRvIHByb2R1Y3RcbiAgICB2YWx1ZSA9ICgoKHZhbHVlID4+PiA4KSAmIDB4ZmYpICogMHhDMCkgKyAodmFsdWUgJiAweGZmKVxuXG4gICAgLy8gQ29udmVydCByZXN1bHQgdG8gYSAxMy1iaXQgYmluYXJ5IHN0cmluZ1xuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2FuamlEYXRhXG4iLCIvKipcbiAqIERhdGEgbWFzayBwYXR0ZXJuIHJlZmVyZW5jZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5QYXR0ZXJucyA9IHtcbiAgUEFUVEVSTjAwMDogMCxcbiAgUEFUVEVSTjAwMTogMSxcbiAgUEFUVEVSTjAxMDogMixcbiAgUEFUVEVSTjAxMTogMyxcbiAgUEFUVEVSTjEwMDogNCxcbiAgUEFUVEVSTjEwMTogNSxcbiAgUEFUVEVSTjExMDogNixcbiAgUEFUVEVSTjExMTogN1xufVxuXG4vKipcbiAqIFdlaWdodGVkIHBlbmFsdHkgc2NvcmVzIGZvciB0aGUgdW5kZXNpcmFibGUgZmVhdHVyZXNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IFBlbmFsdHlTY29yZXMgPSB7XG4gIE4xOiAzLFxuICBOMjogMyxcbiAgTjM6IDQwLFxuICBONDogMTBcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBtYXNrIHBhdHRlcm4gdmFsdWUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBtYXNrICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAobWFzaykge1xuICByZXR1cm4gbWFzayAhPSBudWxsICYmIG1hc2sgIT09ICcnICYmICFpc05hTihtYXNrKSAmJiBtYXNrID49IDAgJiYgbWFzayA8PSA3XG59XG5cbi8qKlxuICogUmV0dXJucyBtYXNrIHBhdHRlcm4gZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IHZhbGlkLCByZXR1cm5zIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHZhbHVlICAgICAgICBNYXNrIHBhdHRlcm4gdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBWYWxpZCBtYXNrIHBhdHRlcm4gb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlKSB7XG4gIHJldHVybiBleHBvcnRzLmlzVmFsaWQodmFsdWUpID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IHVuZGVmaW5lZFxufVxuXG4vKipcbiogRmluZCBhZGphY2VudCBtb2R1bGVzIGluIHJvdy9jb2x1bW4gd2l0aCB0aGUgc2FtZSBjb2xvclxuKiBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZS5cbipcbiogUG9pbnRzOiBOMSArIGlcbiogaSBpcyB0aGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBudW1iZXIgb2YgYWRqYWNlbnQgbW9kdWxlcyBvZiB0aGUgc2FtZSBjb2xvciBleGNlZWRzIDVcbiovXG5leHBvcnRzLmdldFBlbmFsdHlOMSA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMSAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG4gIGxldCBzYW1lQ291bnRDb2wgPSAwXG4gIGxldCBzYW1lQ291bnRSb3cgPSAwXG4gIGxldCBsYXN0Q29sID0gbnVsbFxuICBsZXQgbGFzdFJvdyA9IG51bGxcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgIHNhbWVDb3VudENvbCA9IHNhbWVDb3VudFJvdyA9IDBcbiAgICBsYXN0Q29sID0gbGFzdFJvdyA9IG51bGxcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICBsZXQgbW9kdWxlID0gZGF0YS5nZXQocm93LCBjb2wpXG4gICAgICBpZiAobW9kdWxlID09PSBsYXN0Q29sKSB7XG4gICAgICAgIHNhbWVDb3VudENvbCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpXG4gICAgICAgIGxhc3RDb2wgPSBtb2R1bGVcbiAgICAgICAgc2FtZUNvdW50Q29sID0gMVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUgPSBkYXRhLmdldChjb2wsIHJvdylcbiAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RSb3cpIHtcbiAgICAgICAgc2FtZUNvdW50Um93KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgICAgICAgbGFzdFJvdyA9IG1vZHVsZVxuICAgICAgICBzYW1lQ291bnRSb3cgPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNhbWVDb3VudENvbCA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KVxuICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgfVxuXG4gIHJldHVybiBwb2ludHNcbn1cblxuLyoqXG4gKiBGaW5kIDJ4MiBibG9ja3Mgd2l0aCB0aGUgc2FtZSBjb2xvciBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZVxuICpcbiAqIFBvaW50czogTjIgKiAobSAtIDEpICogKG4gLSAxKVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMiA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMiAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZSAtIDE7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZSAtIDE7IGNvbCsrKSB7XG4gICAgICBjb25zdCBsYXN0ID0gZGF0YS5nZXQocm93LCBjb2wpICtcbiAgICAgICAgZGF0YS5nZXQocm93LCBjb2wgKyAxKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdyArIDEsIGNvbCkgK1xuICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wgKyAxKVxuXG4gICAgICBpZiAobGFzdCA9PT0gNCB8fCBsYXN0ID09PSAwKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4yXG59XG5cbi8qKlxuICogRmluZCAxOjE6MzoxOjEgcmF0aW8gKGRhcms6bGlnaHQ6ZGFyazpsaWdodDpkYXJrKSBwYXR0ZXJuIGluIHJvdy9jb2x1bW4sXG4gKiBwcmVjZWRlZCBvciBmb2xsb3dlZCBieSBsaWdodCBhcmVhIDQgbW9kdWxlcyB3aWRlXG4gKlxuICogUG9pbnRzOiBOMyAqIG51bWJlciBvZiBwYXR0ZXJuIGZvdW5kXG4gKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU4zID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4zIChkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBkYXRhLnNpemVcbiAgbGV0IHBvaW50cyA9IDBcbiAgbGV0IGJpdHNDb2wgPSAwXG4gIGxldCBiaXRzUm93ID0gMFxuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgYml0c0NvbCA9IGJpdHNSb3cgPSAwXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgIGJpdHNDb2wgPSAoKGJpdHNDb2wgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChyb3csIGNvbClcbiAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNDb2wgPT09IDB4NUQwIHx8IGJpdHNDb2wgPT09IDB4MDVEKSkgcG9pbnRzKytcblxuICAgICAgYml0c1JvdyA9ICgoYml0c1JvdyA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KGNvbCwgcm93KVxuICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c1JvdyA9PT0gMHg1RDAgfHwgYml0c1JvdyA9PT0gMHgwNUQpKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4zXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzIGluIGVudGlyZSBzeW1ib2xcbiAqXG4gKiBQb2ludHM6IE40ICoga1xuICpcbiAqIGsgaXMgdGhlIHJhdGluZyBvZiB0aGUgZGV2aWF0aW9uIG9mIHRoZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlc1xuICogaW4gdGhlIHN5bWJvbCBmcm9tIDUwJSBpbiBzdGVwcyBvZiA1JVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlONCA9IGZ1bmN0aW9uIGdldFBlbmFsdHlONCAoZGF0YSkge1xuICBsZXQgZGFya0NvdW50ID0gMFxuICBjb25zdCBtb2R1bGVzQ291bnQgPSBkYXRhLmRhdGEubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzQ291bnQ7IGkrKykgZGFya0NvdW50ICs9IGRhdGEuZGF0YVtpXVxuXG4gIGNvbnN0IGsgPSBNYXRoLmFicyhNYXRoLmNlaWwoKGRhcmtDb3VudCAqIDEwMCAvIG1vZHVsZXNDb3VudCkgLyA1KSAtIDEwKVxuXG4gIHJldHVybiBrICogUGVuYWx0eVNjb3Jlcy5ONFxufVxuXG4vKipcbiAqIFJldHVybiBtYXNrIHZhbHVlIGF0IGdpdmVuIHBvc2l0aW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBtYXNrUGF0dGVybiBQYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBpICAgICAgICAgICBSb3dcbiAqIEBwYXJhbSAge051bWJlcn0gaiAgICAgICAgICAgQ29sdW1uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgIE1hc2sgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0TWFza0F0IChtYXNrUGF0dGVybiwgaSwgaikge1xuICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMDA6IHJldHVybiAoaSArIGopICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAxOiByZXR1cm4gaSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAxMDogcmV0dXJuIGogJSAzID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTE6IHJldHVybiAoaSArIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAwOiByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAxOiByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTEwOiByZXR1cm4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTExOiByZXR1cm4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PT0gMFxuXG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYSBtYXNrIHBhdHRlcm4gdG8gYSBCaXRNYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHBhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGEgICAgQml0TWF0cml4IGRhdGFcbiAqL1xuZXhwb3J0cy5hcHBseU1hc2sgPSBmdW5jdGlvbiBhcHBseU1hc2sgKHBhdHRlcm4sIGRhdGEpIHtcbiAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZVxuXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgIGlmIChkYXRhLmlzUmVzZXJ2ZWQocm93LCBjb2wpKSBjb250aW51ZVxuICAgICAgZGF0YS54b3Iocm93LCBjb2wsIGdldE1hc2tBdChwYXR0ZXJuLCByb3csIGNvbCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVzdCBtYXNrIHBhdHRlcm4gZm9yIGRhdGFcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGFcbiAqIEByZXR1cm4ge051bWJlcn0gTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAqL1xuZXhwb3J0cy5nZXRCZXN0TWFzayA9IGZ1bmN0aW9uIGdldEJlc3RNYXNrIChkYXRhLCBzZXR1cEZvcm1hdEZ1bmMpIHtcbiAgY29uc3QgbnVtUGF0dGVybnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLlBhdHRlcm5zKS5sZW5ndGhcbiAgbGV0IGJlc3RQYXR0ZXJuID0gMFxuICBsZXQgbG93ZXJQZW5hbHR5ID0gSW5maW5pdHlcblxuICBmb3IgKGxldCBwID0gMDsgcCA8IG51bVBhdHRlcm5zOyBwKyspIHtcbiAgICBzZXR1cEZvcm1hdEZ1bmMocClcbiAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHBlbmFsdHlcbiAgICBjb25zdCBwZW5hbHR5ID1cbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4xKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4yKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4zKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU40KGRhdGEpXG5cbiAgICAvLyBVbmRvIHByZXZpb3VzbHkgYXBwbGllZCBtYXNrXG4gICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSlcblxuICAgIGlmIChwZW5hbHR5IDwgbG93ZXJQZW5hbHR5KSB7XG4gICAgICBsb3dlclBlbmFsdHkgPSBwZW5hbHR5XG4gICAgICBiZXN0UGF0dGVybiA9IHBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdFBhdHRlcm5cbn1cbiIsImNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuXG4vKipcbiAqIE51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSB0aGUgZGVjaW1hbCBkaWdpdCBzZXQgKDAgLSA5KVxuICogKGJ5dGUgdmFsdWVzIDMwSEVYIHRvIDM5SEVYKS5cbiAqIE5vcm1hbGx5LCAzIGRhdGEgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgMTAgYml0cy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk5VTUVSSUMgPSB7XG4gIGlkOiAnTnVtZXJpYycsXG4gIGJpdDogMSA8PCAwLFxuICBjY0JpdHM6IFsxMCwgMTIsIDE0XVxufVxuXG4vKipcbiAqIEFscGhhbnVtZXJpYyBtb2RlIGVuY29kZXMgZGF0YSBmcm9tIGEgc2V0IG9mIDQ1IGNoYXJhY3RlcnMsXG4gKiBpLmUuIDEwIG51bWVyaWMgZGlnaXRzICgwIC0gOSksXG4gKiAgICAgIDI2IGFscGhhYmV0aWMgY2hhcmFjdGVycyAoQSAtIFopLFxuICogICBhbmQgOSBzeW1ib2xzIChTUCwgJCwgJSwgKiwgKywgLSwgLiwgLywgOikuXG4gKiBOb3JtYWxseSwgdHdvIGlucHV0IGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDExIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSB7XG4gIGlkOiAnQWxwaGFudW1lcmljJyxcbiAgYml0OiAxIDw8IDEsXG4gIGNjQml0czogWzksIDExLCAxM11cbn1cblxuLyoqXG4gKiBJbiBieXRlIG1vZGUsIGRhdGEgaXMgZW5jb2RlZCBhdCA4IGJpdHMgcGVyIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLkJZVEUgPSB7XG4gIGlkOiAnQnl0ZScsXG4gIGJpdDogMSA8PCAyLFxuICBjY0JpdHM6IFs4LCAxNiwgMTZdXG59XG5cbi8qKlxuICogVGhlIEthbmppIG1vZGUgZWZmaWNpZW50bHkgZW5jb2RlcyBLYW5qaSBjaGFyYWN0ZXJzIGluIGFjY29yZGFuY2Ugd2l0aFxuICogdGhlIFNoaWZ0IEpJUyBzeXN0ZW0gYmFzZWQgb24gSklTIFggMDIwOC5cbiAqIFRoZSBTaGlmdCBKSVMgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICogSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAqIEVhY2ggdHdvLWJ5dGUgY2hhcmFjdGVyIHZhbHVlIGlzIGNvbXBhY3RlZCB0byBhIDEzLWJpdCBiaW5hcnkgY29kZXdvcmQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5LQU5KSSA9IHtcbiAgaWQ6ICdLYW5qaScsXG4gIGJpdDogMSA8PCAzLFxuICBjY0JpdHM6IFs4LCAxMCwgMTJdXG59XG5cbi8qKlxuICogTWl4ZWQgbW9kZSB3aWxsIGNvbnRhaW4gYSBzZXF1ZW5jZXMgb2YgZGF0YSBpbiBhIGNvbWJpbmF0aW9uIG9mIGFueSBvZlxuICogdGhlIG1vZGVzIGRlc2NyaWJlZCBhYm92ZVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuTUlYRUQgPSB7XG4gIGJpdDogLTFcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYml0cyBuZWVkZWQgdG8gc3RvcmUgdGhlIGRhdGEgbGVuZ3RoXG4gKiBhY2NvcmRpbmcgdG8gUVIgQ29kZSBzcGVjaWZpY2F0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgRGF0YSBtb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgTnVtYmVyIG9mIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRDaGFyQ291bnRJbmRpY2F0b3IgPSBmdW5jdGlvbiBnZXRDaGFyQ291bnRJbmRpY2F0b3IgKG1vZGUsIHZlcnNpb24pIHtcbiAgaWYgKCFtb2RlLmNjQml0cykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGU6ICcgKyBtb2RlKVxuXG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICBpZiAodmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPCAxMCkgcmV0dXJuIG1vZGUuY2NCaXRzWzBdXG4gIGVsc2UgaWYgKHZlcnNpb24gPCAyNykgcmV0dXJuIG1vZGUuY2NCaXRzWzFdXG4gIHJldHVybiBtb2RlLmNjQml0c1syXVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1vc3QgZWZmaWNpZW50IG1vZGUgdG8gc3RvcmUgdGhlIHNwZWNpZmllZCBkYXRhXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IGRhdGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgQmVzdCBtb2RlXG4gKi9cbmV4cG9ydHMuZ2V0QmVzdE1vZGVGb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdE1vZGVGb3JEYXRhIChkYXRhU3RyKSB7XG4gIGlmIChSZWdleC50ZXN0TnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQ1xuICBlbHNlIGlmIChSZWdleC50ZXN0QWxwaGFudW1lcmljKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEthbmppKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5LQU5KSVxuICBlbHNlIHJldHVybiBleHBvcnRzLkJZVEVcbn1cblxuLyoqXG4gKiBSZXR1cm4gbW9kZSBuYW1lIGFzIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIE1vZGUgbmFtZVxuICovXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKG1vZGUpIHtcbiAgaWYgKG1vZGUgJiYgbW9kZS5pZCkgcmV0dXJuIG1vZGUuaWRcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlucHV0IHBhcmFtIGlzIGEgdmFsaWQgbW9kZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gICB7TW9kZX0gICAgbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdmFsaWQgbW9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1vZGUpIHtcbiAgcmV0dXJuIG1vZGUgJiYgbW9kZS5iaXQgJiYgbW9kZS5jY0JpdHNcbn1cblxuLyoqXG4gKiBHZXQgbW9kZSBvYmplY3QgZnJvbSBpdHMgbmFtZVxuICpcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0cmluZyBNb2RlIG5hbWVcbiAqIEByZXR1cm5zIHtNb2RlfSAgICAgICAgICBNb2RlIG9iamVjdFxuICovXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdudW1lcmljJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk5VTUVSSUNcbiAgICBjYXNlICdhbHBoYW51bWVyaWMnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuQUxQSEFOVU1FUklDXG4gICAgY2FzZSAna2FuamknOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuS0FOSklcbiAgICBjYXNlICdieXRlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkJZVEVcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGU6ICcgKyBzdHJpbmcpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIG1vZGUgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgbW9kZSwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtNb2RlfFN0cmluZ30gdmFsdWUgICAgICAgIEVuY29kaW5nIG1vZGVcbiAqIEBwYXJhbSAge01vZGV9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge01vZGV9ICAgICAgICAgICAgICAgICAgICAgRW5jb2RpbmcgbW9kZVxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gTnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5OVU1FUklDXG4gIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKVxufVxuXG5OdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAobGVuZ3RoKSB7XG4gIHJldHVybiAxMCAqIE1hdGguZmxvb3IobGVuZ3RoIC8gMykgKyAoKGxlbmd0aCAlIDMpID8gKChsZW5ndGggJSAzKSAqIDMgKyAxKSA6IDApXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpLCBncm91cCwgdmFsdWVcblxuICAvLyBUaGUgaW5wdXQgZGF0YSBzdHJpbmcgaXMgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0aHJlZSBkaWdpdHMsXG4gIC8vIGFuZCBlYWNoIGdyb3VwIGlzIGNvbnZlcnRlZCB0byBpdHMgMTAtYml0IGJpbmFyeSBlcXVpdmFsZW50LlxuICBmb3IgKGkgPSAwOyBpICsgMyA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBncm91cCA9IHRoaXMuZGF0YS5zdWJzdHIoaSwgMylcbiAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMClcblxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEwKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkaWdpdHMgaXMgbm90IGFuIGV4YWN0IG11bHRpcGxlIG9mIHRocmVlLFxuICAvLyB0aGUgZmluYWwgb25lIG9yIHR3byBkaWdpdHMgYXJlIGNvbnZlcnRlZCB0byA0IG9yIDcgYml0cyByZXNwZWN0aXZlbHkuXG4gIGNvbnN0IHJlbWFpbmluZ051bSA9IHRoaXMuZGF0YS5sZW5ndGggLSBpXG4gIGlmIChyZW1haW5pbmdOdW0gPiAwKSB7XG4gICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGkpXG4gICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApXG5cbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCByZW1haW5pbmdOdW0gKiAzICsgMSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWVyaWNEYXRhXG4iLCJjb25zdCBHRiA9IHJlcXVpcmUoJy4vZ2Fsb2lzLWZpZWxkJylcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBwb2x5bm9taWFscyBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDEgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDIgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgUHJvZHVjdCBvZiBwMSBhbmQgcDJcbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHAxLCBwMikge1xuICBjb25zdCBjb2VmZiA9IG5ldyBVaW50OEFycmF5KHAxLmxlbmd0aCArIHAyLmxlbmd0aCAtIDEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcDIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvZWZmW2kgKyBqXSBePSBHRi5tdWwocDFbaV0sIHAyW2pdKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2VmZlxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcmVtYWluZGVyIG9mIHBvbHlub21pYWxzIGRpdmlzaW9uXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aWRlbnQgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aXNvciAgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgUmVtYWluZGVyXG4gKi9cbmV4cG9ydHMubW9kID0gZnVuY3Rpb24gbW9kIChkaXZpZGVudCwgZGl2aXNvcikge1xuICBsZXQgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZGl2aWRlbnQpXG5cbiAgd2hpbGUgKChyZXN1bHQubGVuZ3RoIC0gZGl2aXNvci5sZW5ndGgpID49IDApIHtcbiAgICBjb25zdCBjb2VmZiA9IHJlc3VsdFswXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gXj0gR0YubXVsKGRpdmlzb3JbaV0sIGNvZWZmKVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgemVyb3MgZnJvbSBidWZmZXIgaGVhZFxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgd2hpbGUgKG9mZnNldCA8IHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0W29mZnNldF0gPT09IDApIG9mZnNldCsrXG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBzcGVjaWZpZWQgZGVncmVlXG4gKiAodXNlZCBieSBSZWVkLVNvbG9tb24gZW5jb2RlcilcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZSBEZWdyZWUgb2YgdGhlIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICBCdWZmZXIgY29udGFpbmluZyBwb2x5bm9taWFsIGNvZWZmaWNpZW50c1xuICovXG5leHBvcnRzLmdlbmVyYXRlRUNQb2x5bm9taWFsID0gZnVuY3Rpb24gZ2VuZXJhdGVFQ1BvbHlub21pYWwgKGRlZ3JlZSkge1xuICBsZXQgcG9seSA9IG5ldyBVaW50OEFycmF5KFsxXSlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWdyZWU7IGkrKykge1xuICAgIHBvbHkgPSBleHBvcnRzLm11bChwb2x5LCBuZXcgVWludDhBcnJheShbMSwgR0YuZXhwKGkpXSkpXG4gIH1cblxuICByZXR1cm4gcG9seVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxuY29uc3QgQml0QnVmZmVyID0gcmVxdWlyZSgnLi9iaXQtYnVmZmVyJylcbmNvbnN0IEJpdE1hdHJpeCA9IHJlcXVpcmUoJy4vYml0LW1hdHJpeCcpXG5jb25zdCBBbGlnbm1lbnRQYXR0ZXJuID0gcmVxdWlyZSgnLi9hbGlnbm1lbnQtcGF0dGVybicpXG5jb25zdCBGaW5kZXJQYXR0ZXJuID0gcmVxdWlyZSgnLi9maW5kZXItcGF0dGVybicpXG5jb25zdCBNYXNrUGF0dGVybiA9IHJlcXVpcmUoJy4vbWFzay1wYXR0ZXJuJylcbmNvbnN0IEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbmNvbnN0IFJlZWRTb2xvbW9uRW5jb2RlciA9IHJlcXVpcmUoJy4vcmVlZC1zb2xvbW9uLWVuY29kZXInKVxuY29uc3QgVmVyc2lvbiA9IHJlcXVpcmUoJy4vdmVyc2lvbicpXG5jb25zdCBGb3JtYXRJbmZvID0gcmVxdWlyZSgnLi9mb3JtYXQtaW5mbycpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFNlZ21lbnRzID0gcmVxdWlyZSgnLi9zZWdtZW50cycpXG5cbi8qKlxuICogUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4gKlxuICogbW9kaWZpZWQgYnkgUnlhbiBEYXkgZm9yIG5vZGVqcyBzdXBwb3J0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgUnlhbiBEYXlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vKipcbiAqIEFkZCBmaW5kZXIgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBGaW5kZXJQYXR0ZXJuIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IHBvcyA9IEZpbmRlclBhdHRlcm4uZ2V0UG9zaXRpb25zKHZlcnNpb24pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBwb3NbaV1bMF1cbiAgICBjb25zdCBjb2wgPSBwb3NbaV1bMV1cblxuICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcbiAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHNpemUgPD0gcm93ICsgcikgY29udGludWVcblxuICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xuICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBzaXplIDw9IGNvbCArIGMpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKChyID49IDAgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKSB8fFxuICAgICAgICAgIChjID49IDAgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKSB8fFxuICAgICAgICAgIChyID49IDIgJiYgciA8PSA0ICYmIGMgPj0gMiAmJiBjIDw9IDQpKSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdGltaW5nIHBhdHRlcm4gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB7QGxpbmsgc2V0dXBBbGlnbm1lbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHNldHVwVGltaW5nUGF0dGVybiAobWF0cml4KSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuXG4gIGZvciAobGV0IHIgPSA4OyByIDwgc2l6ZSAtIDg7IHIrKykge1xuICAgIGNvbnN0IHZhbHVlID0gciAlIDIgPT09IDBcbiAgICBtYXRyaXguc2V0KHIsIDYsIHZhbHVlLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoNiwgciwgdmFsdWUsIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYWxpZ25tZW50IHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgc2V0dXBUaW1pbmdQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEFsaWdubWVudFBhdHRlcm4gKG1hdHJpeCwgdmVyc2lvbikge1xuICBjb25zdCBwb3MgPSBBbGlnbm1lbnRQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcG9zW2ldWzBdXG4gICAgY29uc3QgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG4gICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDIgfHxcbiAgICAgICAgICAociA9PT0gMCAmJiBjID09PSAwKSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHZlcnNpb24gaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cFZlcnNpb25JbmZvIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IGJpdHMgPSBWZXJzaW9uLmdldEVuY29kZWRCaXRzKHZlcnNpb24pXG4gIGxldCByb3csIGNvbCwgbW9kXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG4gICAgcm93ID0gTWF0aC5mbG9vcihpIC8gMylcbiAgICBjb2wgPSBpICUgMyArIHNpemUgLSA4IC0gM1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICBtYXRyaXguc2V0KHJvdywgY29sLCBtb2QsIHRydWUpXG4gICAgbWF0cml4LnNldChjb2wsIHJvdywgbW9kLCB0cnVlKVxuICB9XG59XG5cbi8qKlxuICogQWRkIGZvcm1hdCBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggICAgICAgICAgICAgICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgIGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gICAgbWFza1BhdHRlcm4gICAgICAgICAgTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBzZXR1cEZvcm1hdEluZm8gKG1hdHJpeCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBjb25zdCBiaXRzID0gRm9ybWF0SW5mby5nZXRFbmNvZGVkQml0cyhlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pXG4gIGxldCBpLCBtb2RcblxuICBmb3IgKGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICAvLyB2ZXJ0aWNhbFxuICAgIGlmIChpIDwgNikge1xuICAgICAgbWF0cml4LnNldChpLCA4LCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldChpICsgMSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRyaXguc2V0KHNpemUgLSAxNSArIGksIDgsIG1vZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvLyBob3Jpem9udGFsXG4gICAgaWYgKGkgPCA4KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIHNpemUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDkpIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSArIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldCg4LCAxNSAtIGkgLSAxLCBtb2QsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgLy8gZml4ZWQgbW9kdWxlXG4gIG1hdHJpeC5zZXQoc2l6ZSAtIDgsIDgsIDEsIHRydWUpXG59XG5cbi8qKlxuICogQWRkIGVuY29kZWQgZGF0YSBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gIG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSAgIERhdGEgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIHNldHVwRGF0YSAobWF0cml4LCBkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBsZXQgaW5jID0gLTFcbiAgbGV0IHJvdyA9IHNpemUgLSAxXG4gIGxldCBiaXRJbmRleCA9IDdcbiAgbGV0IGJ5dGVJbmRleCA9IDBcblxuICBmb3IgKGxldCBjb2wgPSBzaXplIC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcbiAgICBpZiAoY29sID09PSA2KSBjb2wtLVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XG4gICAgICAgIGlmICghbWF0cml4LmlzUmVzZXJ2ZWQocm93LCBjb2wgLSBjKSkge1xuICAgICAgICAgIGxldCBkYXJrID0gZmFsc2VcblxuICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0cml4LnNldChyb3csIGNvbCAtIGMsIGRhcmspXG4gICAgICAgICAgYml0SW5kZXgtLVxuXG4gICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYnl0ZUluZGV4KytcbiAgICAgICAgICAgIGJpdEluZGV4ID0gN1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cgKz0gaW5jXG5cbiAgICAgIGlmIChyb3cgPCAwIHx8IHNpemUgPD0gcm93KSB7XG4gICAgICAgIHJvdyAtPSBpbmNcbiAgICAgICAgaW5jID0gLWluY1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBlbmNvZGVkIGNvZGV3b3JkcyBmcm9tIGRhdGEgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtCeXRlRGF0YX0gZGF0YSAgICAgICAgICAgICAgICAgRGF0YSBpbnB1dFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGEgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cykge1xuICAvLyBQcmVwYXJlIGRhdGEgYnVmZmVyXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCaXRCdWZmZXIoKVxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBwcmVmaXggZGF0YSB3aXRoIG1vZGUgaW5kaWNhdG9yICg0IGJpdHMpXG4gICAgYnVmZmVyLnB1dChkYXRhLm1vZGUuYml0LCA0KVxuXG4gICAgLy8gUHJlZml4IGRhdGEgd2l0aCBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIGlzIGEgc3RyaW5nIG9mIGJpdHMgdGhhdCByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGJlaW5nIGVuY29kZWQuXG4gICAgLy8gVGhlIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG1vZGUgaW5kaWNhdG9yXG4gICAgLy8gYW5kIG11c3QgYmUgYSBjZXJ0YWluIG51bWJlciBvZiBiaXRzIGxvbmcsIGRlcGVuZGluZyBvbiB0aGUgUVIgdmVyc2lvblxuICAgIC8vIGFuZCBkYXRhIG1vZGVcbiAgICAvLyBAc2VlIHtAbGluayBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcn0uXG4gICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihkYXRhLm1vZGUsIHZlcnNpb24pKVxuXG4gICAgLy8gYWRkIGJpbmFyeSBkYXRhIHNlcXVlbmNlIHRvIGJ1ZmZlclxuICAgIGRhdGEud3JpdGUoYnVmZmVyKVxuICB9KVxuXG4gIC8vIENhbGN1bGF0ZSByZXF1aXJlZCBudW1iZXIgb2YgYml0c1xuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzQml0cyA9ICh0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHMpICogOFxuXG4gIC8vIEFkZCBhIHRlcm1pbmF0b3IuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMsXG4gIC8vIGEgdGVybWluYXRvciBvZiB1cCB0byBmb3VyIDBzIG11c3QgYmUgYWRkZWQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHN0cmluZy5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgbW9yZSB0aGFuIGZvdXIgYml0cyBzaG9ydGVyIHRoYW4gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLFxuICAvLyBhZGQgZm91ciAwcyB0byB0aGUgZW5kLlxuICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSBkYXRhVG90YWxDb2Rld29yZHNCaXRzKSB7XG4gICAgYnVmZmVyLnB1dCgwLCA0KVxuICB9XG5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgZmV3ZXIgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciwgYWRkIG9ubHkgdGhlIG51bWJlciBvZiAwcyB0aGF0XG4gIC8vIGFyZSBuZWVkZWQgdG8gcmVhY2ggdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLlxuXG4gIC8vIEFmdGVyIGFkZGluZyB0aGUgdGVybWluYXRvciwgaWYgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSBzdHJpbmcgaXMgbm90IGEgbXVsdGlwbGUgb2YgOCxcbiAgLy8gcGFkIHRoZSBzdHJpbmcgb24gdGhlIHJpZ2h0IHdpdGggMHMgdG8gbWFrZSB0aGUgc3RyaW5nJ3MgbGVuZ3RoIGEgbXVsdGlwbGUgb2YgOC5cbiAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT09IDApIHtcbiAgICBidWZmZXIucHV0Qml0KDApXG4gIH1cblxuICAvLyBBZGQgcGFkIGJ5dGVzIGlmIHRoZSBzdHJpbmcgaXMgc3RpbGwgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cy5cbiAgLy8gRXh0ZW5kIHRoZSBidWZmZXIgdG8gZmlsbCB0aGUgZGF0YSBjYXBhY2l0eSBvZiB0aGUgc3ltYm9sIGNvcnJlc3BvbmRpbmcgdG9cbiAgLy8gdGhlIFZlcnNpb24gYW5kIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYnkgYWRkaW5nIHRoZSBQYWQgQ29kZXdvcmRzIDExMTAxMTAwICgweEVDKVxuICAvLyBhbmQgMDAwMTAwMDEgKDB4MTEpIGFsdGVybmF0ZWx5LlxuICBjb25zdCByZW1haW5pbmdCeXRlID0gKGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkpIC8gOFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZ0J5dGU7IGkrKykge1xuICAgIGJ1ZmZlci5wdXQoaSAlIDIgPyAweDExIDogMHhFQywgOClcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDb2Rld29yZHMoYnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbn1cblxuLyoqXG4gKiBFbmNvZGUgaW5wdXQgZGF0YSB3aXRoIFJlZWQtU29sb21vbiBhbmQgcmV0dXJuIGNvZGV3b3JkcyB3aXRoXG4gKiByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBAcGFyYW0gIHtCaXRCdWZmZXJ9IGJpdEJ1ZmZlciAgICAgICAgICAgIERhdGEgdG8gZW5jb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29kZXdvcmRzIChiaXRCdWZmZXIsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzID0gdG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGJsb2Nrc1xuICBjb25zdCBlY1RvdGFsQmxvY2tzID0gRUNDb2RlLmdldEJsb2Nrc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIENhbGN1bGF0ZSBob3cgbWFueSBibG9ja3MgZWFjaCBncm91cCBzaG91bGQgY29udGFpblxuICBjb25zdCBibG9ja3NJbkdyb3VwMiA9IHRvdGFsQ29kZXdvcmRzICUgZWNUb3RhbEJsb2Nrc1xuICBjb25zdCBibG9ja3NJbkdyb3VwMSA9IGVjVG90YWxCbG9ja3MgLSBibG9ja3NJbkdyb3VwMlxuXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKHRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2NrcylcblxuICBjb25zdCBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKGRhdGFUb3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGRhdGFDb2Rld29yZHNJbkdyb3VwMiA9IGRhdGFDb2Rld29yZHNJbkdyb3VwMSArIDFcblxuICAvLyBOdW1iZXIgb2YgRUMgY29kZXdvcmRzIGlzIHRoZSBzYW1lIGZvciBib3RoIGdyb3Vwc1xuICBjb25zdCBlY0NvdW50ID0gdG90YWxDb2Rld29yZHNJbkdyb3VwMSAtIGRhdGFDb2Rld29yZHNJbkdyb3VwMVxuXG4gIC8vIEluaXRpYWxpemUgYSBSZWVkLVNvbG9tb24gZW5jb2RlciB3aXRoIGEgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2YgZGVncmVlIGVjQ291bnRcbiAgY29uc3QgcnMgPSBuZXcgUmVlZFNvbG9tb25FbmNvZGVyKGVjQ291bnQpXG5cbiAgbGV0IG9mZnNldCA9IDBcbiAgY29uc3QgZGNEYXRhID0gbmV3IEFycmF5KGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGVjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICBsZXQgbWF4RGF0YVNpemUgPSAwXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJpdEJ1ZmZlci5idWZmZXIpXG5cbiAgLy8gRGl2aWRlIHRoZSBidWZmZXIgaW50byB0aGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJsb2Nrc1xuICBmb3IgKGxldCBiID0gMDsgYiA8IGVjVG90YWxCbG9ja3M7IGIrKykge1xuICAgIGNvbnN0IGRhdGFTaXplID0gYiA8IGJsb2Nrc0luR3JvdXAxID8gZGF0YUNvZGV3b3Jkc0luR3JvdXAxIDogZGF0YUNvZGV3b3Jkc0luR3JvdXAyXG5cbiAgICAvLyBleHRyYWN0IGEgYmxvY2sgb2YgZGF0YSBmcm9tIGJ1ZmZlclxuICAgIGRjRGF0YVtiXSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGRhdGFTaXplKVxuXG4gICAgLy8gQ2FsY3VsYXRlIEVDIGNvZGV3b3JkcyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gICAgZWNEYXRhW2JdID0gcnMuZW5jb2RlKGRjRGF0YVtiXSlcblxuICAgIG9mZnNldCArPSBkYXRhU2l6ZVxuICAgIG1heERhdGFTaXplID0gTWF0aC5tYXgobWF4RGF0YVNpemUsIGRhdGFTaXplKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGZpbmFsIGRhdGFcbiAgLy8gSW50ZXJsZWF2ZSB0aGUgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgZnJvbSBlYWNoIGJsb2NrXG4gIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0b3RhbENvZGV3b3JkcylcbiAgbGV0IGluZGV4ID0gMFxuICBsZXQgaSwgclxuXG4gIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4RGF0YVNpemU7IGkrKykge1xuICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgIGlmIChpIDwgZGNEYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICBkYXRhW2luZGV4KytdID0gZGNEYXRhW3JdW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwZWQgRUMgY29kZXdvcmRzXG4gIGZvciAoaSA9IDA7IGkgPCBlY0NvdW50OyBpKyspIHtcbiAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICBkYXRhW2luZGV4KytdID0gZWNEYXRhW3JdW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBCdWlsZCBRUiBDb2RlIHN5bWJvbFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZXRpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgbGV2ZWxcbiAqIEBwYXJhbSAge01hc2tQYXR0ZXJufSBtYXNrUGF0dGVybiAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIHN5bWJvbCBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbCAoZGF0YSwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGxldCBzZWdtZW50c1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tQXJyYXkoZGF0YSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb25cblxuICAgIGlmICghZXN0aW1hdGVkVmVyc2lvbikge1xuICAgICAgY29uc3QgcmF3U2VnbWVudHMgPSBTZWdtZW50cy5yYXdTcGxpdChkYXRhKVxuXG4gICAgICAvLyBFc3RpbWF0ZSBiZXN0IHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiByYXcgc3BsaXR0ZWQgc2VnbWVudHNcbiAgICAgIGVzdGltYXRlZFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShyYXdTZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3B0aW1pemVkIHNlZ21lbnRzXG4gICAgLy8gSWYgZXN0aW1hdGVkIHZlcnNpb24gaXMgdW5kZWZpbmVkLCB0cnkgd2l0aCB0aGUgaGlnaGVzdCB2ZXJzaW9uXG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tU3RyaW5nKGRhdGEsIGVzdGltYXRlZFZlcnNpb24gfHwgNDApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEnKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBtaW4gdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIGRhdGFcbiAgY29uc3QgYmVzdFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShzZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gSWYgbm8gdmVyc2lvbiBpcyBmb3VuZCwgZGF0YSBjYW5ub3QgYmUgc3RvcmVkXG4gIGlmICghYmVzdFZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhbW91bnQgb2YgZGF0YSBpcyB0b28gYmlnIHRvIGJlIHN0b3JlZCBpbiBhIFFSIENvZGUnKVxuICB9XG5cbiAgLy8gSWYgbm90IHNwZWNpZmllZCwgdXNlIG1pbiB2ZXJzaW9uIGFzIGRlZmF1bHRcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IGJlc3RWZXJzaW9uXG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCB2ZXJzaW9uIGNhbiBjb250YWluIHRoZSBkYXRhXG4gIH0gZWxzZSBpZiAodmVyc2lvbiA8IGJlc3RWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcXG4nICtcbiAgICAgICdUaGUgY2hvc2VuIFFSIENvZGUgdmVyc2lvbiBjYW5ub3QgY29udGFpbiB0aGlzIGFtb3VudCBvZiBkYXRhLlxcbicgK1xuICAgICAgJ01pbmltdW0gdmVyc2lvbiByZXF1aXJlZCB0byBzdG9yZSBjdXJyZW50IGRhdGEgaXM6ICcgKyBiZXN0VmVyc2lvbiArICcuXFxuJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRhdGFCaXRzID0gY3JlYXRlRGF0YSh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgc2VnbWVudHMpXG5cbiAgLy8gQWxsb2NhdGUgbWF0cml4IGJ1ZmZlclxuICBjb25zdCBtb2R1bGVDb3VudCA9IFV0aWxzLmdldFN5bWJvbFNpemUodmVyc2lvbilcbiAgY29uc3QgbW9kdWxlcyA9IG5ldyBCaXRNYXRyaXgobW9kdWxlQ291bnQpXG5cbiAgLy8gQWRkIGZ1bmN0aW9uIG1vZHVsZXNcbiAgc2V0dXBGaW5kZXJQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24pXG4gIHNldHVwVGltaW5nUGF0dGVybihtb2R1bGVzKVxuICBzZXR1cEFsaWdubWVudFBhdHRlcm4obW9kdWxlcywgdmVyc2lvbilcblxuICAvLyBBZGQgdGVtcG9yYXJ5IGR1bW15IGJpdHMgZm9yIGZvcm1hdCBpbmZvIGp1c3QgdG8gc2V0IHRoZW0gYXMgcmVzZXJ2ZWQuXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlc2UgYml0cyBmcm9tIGJlaW5nIG1hc2tlZCBieSB7QGxpbmsgTWFza1BhdHRlcm4uYXBwbHlNYXNrfVxuICAvLyBzaW5jZSB0aGUgbWFza2luZyBvcGVyYXRpb24gbXVzdCBiZSBwZXJmb3JtZWQgb25seSBvbiB0aGUgZW5jb2RpbmcgcmVnaW9uLlxuICAvLyBUaGVzZSBibG9ja3Mgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzIGxhdGVyIGluIGNvZGUuXG4gIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgMClcblxuICBpZiAodmVyc2lvbiA+PSA3KSB7XG4gICAgc2V0dXBWZXJzaW9uSW5mbyhtb2R1bGVzLCB2ZXJzaW9uKVxuICB9XG5cbiAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gIHNldHVwRGF0YShtb2R1bGVzLCBkYXRhQml0cylcblxuICBpZiAoaXNOYU4obWFza1BhdHRlcm4pKSB7XG4gICAgLy8gRmluZCBiZXN0IG1hc2sgcGF0dGVyblxuICAgIG1hc2tQYXR0ZXJuID0gTWFza1BhdHRlcm4uZ2V0QmVzdE1hc2sobW9kdWxlcyxcbiAgICAgIHNldHVwRm9ybWF0SW5mby5iaW5kKG51bGwsIG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSlcbiAgfVxuXG4gIC8vIEFwcGx5IG1hc2sgcGF0dGVyblxuICBNYXNrUGF0dGVybi5hcHBseU1hc2sobWFza1BhdHRlcm4sIG1vZHVsZXMpXG5cbiAgLy8gUmVwbGFjZSBmb3JtYXQgaW5mbyBiaXRzIHdpdGggY29ycmVjdCB2YWx1ZXNcbiAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybilcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogZXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gICAgbWFza1BhdHRlcm46IG1hc2tQYXR0ZXJuLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9XG59XG5cbi8qKlxuICogUVIgQ29kZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy52ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudG9TSklTRnVuYyAgICAgICAgIEhlbHBlciBmdW5jIHRvIGNvbnZlcnQgdXRmOCB0byBzamlzXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlIChkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHRleHQnKVxuICB9XG5cbiAgbGV0IGVycm9yQ29ycmVjdGlvbkxldmVsID0gRUNMZXZlbC5NXG4gIGxldCB2ZXJzaW9uXG4gIGxldCBtYXNrXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFVzZSBoaWdoZXIgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCBhcyBkZWZhdWx0XG4gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFQ0xldmVsLmZyb20ob3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuICAgIHZlcnNpb24gPSBWZXJzaW9uLmZyb20ob3B0aW9ucy52ZXJzaW9uKVxuICAgIG1hc2sgPSBNYXNrUGF0dGVybi5mcm9tKG9wdGlvbnMubWFza1BhdHRlcm4pXG5cbiAgICBpZiAob3B0aW9ucy50b1NKSVNGdW5jKSB7XG4gICAgICBVdGlscy5zZXRUb1NKSVNGdW5jdGlvbihvcHRpb25zLnRvU0pJU0Z1bmMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN5bWJvbChkYXRhLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaylcbn1cbiIsImNvbnN0IFBvbHlub21pYWwgPSByZXF1aXJlKCcuL3BvbHlub21pYWwnKVxuXG5mdW5jdGlvbiBSZWVkU29sb21vbkVuY29kZXIgKGRlZ3JlZSkge1xuICB0aGlzLmdlblBvbHkgPSB1bmRlZmluZWRcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcblxuICBpZiAodGhpcy5kZWdyZWUpIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBlbmNvZGVyLlxuICogVGhlIGlucHV0IHBhcmFtIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWVcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSAoZGVncmVlKSB7XG4gIC8vIGNyZWF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZVxuICB0aGlzLmdlblBvbHkgPSBQb2x5bm9taWFsLmdlbmVyYXRlRUNQb2x5bm9taWFsKHRoaXMuZGVncmVlKVxufVxuXG4vKipcbiAqIEVuY29kZXMgYSBjaHVuayBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSBCdWZmZXIgY29udGFpbmluZyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgZGF0YVxuICovXG5SZWVkU29sb21vbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZSAoZGF0YSkge1xuICBpZiAoIXRoaXMuZ2VuUG9seSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW5jb2RlciBub3QgaW5pdGlhbGl6ZWQnKVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIEVDIGZvciB0aGlzIGRhdGEgYmxvY2tcbiAgLy8gZXh0ZW5kcyBkYXRhIHNpemUgdG8gZGF0YStnZW5Qb2x5IHNpemVcbiAgY29uc3QgcGFkZGVkRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgdGhpcy5kZWdyZWUpXG4gIHBhZGRlZERhdGEuc2V0KGRhdGEpXG5cbiAgLy8gVGhlIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGFyZSB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlkaW5nIHRoZSBkYXRhIGNvZGV3b3Jkc1xuICAvLyBieSBhIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gIGNvbnN0IHJlbWFpbmRlciA9IFBvbHlub21pYWwubW9kKHBhZGRlZERhdGEsIHRoaXMuZ2VuUG9seSlcblxuICAvLyByZXR1cm4gRUMgZGF0YSBibG9ja3MgKGxhc3QgbiBieXRlLCB3aGVyZSBuIGlzIHRoZSBkZWdyZWUgb2YgZ2VuUG9seSlcbiAgLy8gSWYgY29lZmZpY2llbnRzIG51bWJlciBpbiByZW1haW5kZXIgYXJlIGxlc3MgdGhhbiBnZW5Qb2x5IGRlZ3JlZSxcbiAgLy8gcGFkIHdpdGggMHMgdG8gdGhlIGxlZnQgdG8gcmVhY2ggdGhlIG5lZWRlZCBudW1iZXIgb2YgY29lZmZpY2llbnRzXG4gIGNvbnN0IHN0YXJ0ID0gdGhpcy5kZWdyZWUgLSByZW1haW5kZXIubGVuZ3RoXG4gIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCBidWZmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kZWdyZWUpXG4gICAgYnVmZi5zZXQocmVtYWluZGVyLCBzdGFydClcblxuICAgIHJldHVybiBidWZmXG4gIH1cblxuICByZXR1cm4gcmVtYWluZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVlZFNvbG9tb25FbmNvZGVyXG4iLCJjb25zdCBudW1lcmljID0gJ1swLTldKydcbmNvbnN0IGFscGhhbnVtZXJpYyA9ICdbQS1aICQlKitcXFxcLS4vOl0rJ1xubGV0IGthbmppID0gJyg/Olt1MzAwMC11MzAzRl18W3UzMDQwLXUzMDlGXXxbdTMwQTAtdTMwRkZdfCcgK1xuICAnW3VGRjAwLXVGRkVGXXxbdTRFMDAtdTlGQUZdfFt1MjYwNS11MjYwNl18W3UyMTkwLXUyMTk1XXx1MjAzQnwnICtcbiAgJ1t1MjAxMHUyMDE1dTIwMTh1MjAxOXUyMDI1dTIwMjZ1MjAxQ3UyMDFEdTIyMjV1MjI2MF18JyArXG4gICdbdTAzOTEtdTA0NTFdfFt1MDBBN3UwMEE4dTAwQjF1MDBCNHUwMEQ3dTAwRjddKSsnXG5rYW5qaSA9IGthbmppLnJlcGxhY2UoL3UvZywgJ1xcXFx1JylcblxuY29uc3QgYnl0ZSA9ICcoPzooPyFbQS1aMC05ICQlKitcXFxcLS4vOl18JyArIGthbmppICsgJykoPzoufFtcXHJcXG5dKSkrJ1xuXG5leHBvcnRzLktBTkpJID0gbmV3IFJlZ0V4cChrYW5qaSwgJ2cnKVxuZXhwb3J0cy5CWVRFX0tBTkpJID0gbmV3IFJlZ0V4cCgnW15BLVowLTkgJCUqK1xcXFwtLi86XSsnLCAnZycpXG5leHBvcnRzLkJZVEUgPSBuZXcgUmVnRXhwKGJ5dGUsICdnJylcbmV4cG9ydHMuTlVNRVJJQyA9IG5ldyBSZWdFeHAobnVtZXJpYywgJ2cnKVxuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKGFscGhhbnVtZXJpYywgJ2cnKVxuXG5jb25zdCBURVNUX0tBTkpJID0gbmV3IFJlZ0V4cCgnXicgKyBrYW5qaSArICckJylcbmNvbnN0IFRFU1RfTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ14nICsgbnVtZXJpYyArICckJylcbmNvbnN0IFRFU1RfQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cCgnXltBLVowLTkgJCUqK1xcXFwtLi86XSskJylcblxuZXhwb3J0cy50ZXN0S2FuamkgPSBmdW5jdGlvbiB0ZXN0S2FuamkgKHN0cikge1xuICByZXR1cm4gVEVTVF9LQU5KSS50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0TnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3ROdW1lcmljIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfTlVNRVJJQy50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0QWxwaGFudW1lcmljID0gZnVuY3Rpb24gdGVzdEFscGhhbnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX0FMUEhBTlVNRVJJQy50ZXN0KHN0cilcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgTnVtZXJpY0RhdGEgPSByZXF1aXJlKCcuL251bWVyaWMtZGF0YScpXG5jb25zdCBBbHBoYW51bWVyaWNEYXRhID0gcmVxdWlyZSgnLi9hbHBoYW51bWVyaWMtZGF0YScpXG5jb25zdCBCeXRlRGF0YSA9IHJlcXVpcmUoJy4vYnl0ZS1kYXRhJylcbmNvbnN0IEthbmppRGF0YSA9IHJlcXVpcmUoJy4va2FuamktZGF0YScpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IGRpamtzdHJhID0gcmVxdWlyZSgnZGlqa3N0cmFqcycpXG5cbi8qKlxuICogUmV0dXJucyBVVEY4IGJ5dGUgbGVuZ3RoXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBOdW1iZXIgb2YgYnl0ZVxuICovXG5mdW5jdGlvbiBnZXRTdHJpbmdCeXRlTGVuZ3RoIChzdHIpIHtcbiAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHNlZ21lbnRzIG9mIHRoZSBzcGVjaWZpZWQgbW9kZVxuICogZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSBTZWdtZW50IG1vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyICBTdHJpbmcgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudHMgKHJlZ2V4LCBtb2RlLCBzdHIpIHtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXVxuICBsZXQgcmVzdWx0XG5cbiAgd2hpbGUgKChyZXN1bHQgPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBkYXRhOiByZXN1bHRbMF0sXG4gICAgICBpbmRleDogcmVzdWx0LmluZGV4LFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGxlbmd0aDogcmVzdWx0WzBdLmxlbmd0aFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhIHNlcmllcyBvZiBzZWdtZW50cyB3aXRoIHRoZSBhcHByb3ByaWF0ZVxuICogbW9kZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGdldFNlZ21lbnRzRnJvbVN0cmluZyAoZGF0YVN0cikge1xuICBjb25zdCBudW1TZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguTlVNRVJJQywgTW9kZS5OVU1FUklDLCBkYXRhU3RyKVxuICBjb25zdCBhbHBoYU51bVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5BTFBIQU5VTUVSSUMsIE1vZGUuQUxQSEFOVU1FUklDLCBkYXRhU3RyKVxuICBsZXQgYnl0ZVNlZ3NcbiAgbGV0IGthbmppU2Vnc1xuXG4gIGlmIChVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LktBTkpJLCBNb2RlLktBTkpJLCBkYXRhU3RyKVxuICB9IGVsc2Uge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURV9LQU5KSSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IFtdXG4gIH1cblxuICBjb25zdCBzZWdzID0gbnVtU2Vncy5jb25jYXQoYWxwaGFOdW1TZWdzLCBieXRlU2Vncywga2FuamlTZWdzKVxuXG4gIHJldHVybiBzZWdzXG4gICAgLnNvcnQoZnVuY3Rpb24gKHMxLCBzMikge1xuICAgICAgcmV0dXJuIHMxLmluZGV4IC0gczIuaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgIG1vZGU6IG9iai5tb2RlLFxuICAgICAgICBsZW5ndGg6IG9iai5sZW5ndGhcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgaG93IG1hbnkgYml0cyBhcmUgbmVlZGVkIHRvIGVuY29kZSBhIHN0cmluZyBvZlxuICogc3BlY2lmaWVkIGxlbmd0aCB3aXRoIHRoZSBzcGVjaWZpZWQgbW9kZVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbGVuZ3RoIFN0cmluZyBsZW5ndGhcbiAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgIFNlZ21lbnQgbW9kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgQml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50Qml0c0xlbmd0aCAobGVuZ3RoLCBtb2RlKSB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gS2FuamlEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2VzIGFkamFjZW50IHNlZ21lbnRzIHdoaWNoIGhhdmUgdGhlIHNhbWUgbW9kZVxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTZWdtZW50cyAoc2Vncykge1xuICByZXR1cm4gc2Vncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgIGNvbnN0IHByZXZTZWcgPSBhY2MubGVuZ3RoIC0gMSA+PSAwID8gYWNjW2FjYy5sZW5ndGggLSAxXSA6IG51bGxcbiAgICBpZiAocHJldlNlZyAmJiBwcmV2U2VnLm1vZGUgPT09IGN1cnIubW9kZSkge1xuICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5kYXRhICs9IGN1cnIuZGF0YVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cblxuICAgIGFjYy5wdXNoKGN1cnIpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBub2RlcyBjb21iaW5hdGlvbiB3aGljaFxuICogd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIGEgc2VnbWVudHMgZ3JhcGguXG4gKlxuICogTm9kZXMgYXJlIGRpdmlkZWQgYnkgZ3JvdXBzLiBFYWNoIGdyb3VwIHdpbGwgY29udGFpbiBhIGxpc3Qgb2YgYWxsIHRoZSBtb2Rlc1xuICogaW4gd2hpY2ggaXMgcG9zc2libGUgdG8gZW5jb2RlIHRoZSBnaXZlbiB0ZXh0LlxuICpcbiAqIEZvciBleGFtcGxlIHRoZSB0ZXh0ICcxMjM0NScgY2FuIGJlIGVuY29kZWQgYXMgTnVtZXJpYywgQWxwaGFudW1lcmljIG9yIEJ5dGUuXG4gKiBUaGUgZ3JvdXAgZm9yICcxMjM0NScgd2lsbCBjb250YWluIHRoZW4gMyBvYmplY3RzLCBvbmUgZm9yIGVhY2hcbiAqIHBvc3NpYmxlIGVuY29kaW5nIG1vZGUuXG4gKlxuICogRWFjaCBub2RlIHJlcHJlc2VudHMgYSBwb3NzaWJsZSBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gYnVpbGROb2RlcyAoc2Vncykge1xuICBjb25zdCBub2RlcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlZyA9IHNlZ3NbaV1cblxuICAgIHN3aXRjaCAoc2VnLm1vZGUpIHtcbiAgICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5BTFBIQU5VTUVSSUMsIGxlbmd0aDogc2VnLmxlbmd0aCB9LFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICAgIG5vZGVzLnB1c2goW1xuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgIF0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVzXG59XG5cbi8qKlxuICogQnVpbGRzIGEgZ3JhcGggZnJvbSBhIGxpc3Qgb2Ygbm9kZXMuXG4gKiBBbGwgc2VnbWVudHMgaW4gZWFjaCBub2RlIGdyb3VwIHdpbGwgYmUgY29ubmVjdGVkIHdpdGggYWxsIHRoZSBzZWdtZW50cyBvZlxuICogdGhlIG5leHQgZ3JvdXAgYW5kIHNvIG9uLlxuICpcbiAqIEF0IGVhY2ggY29ubmVjdGlvbiB3aWxsIGJlIGFzc2lnbmVkIGEgd2VpZ2h0IGRlcGVuZGluZyBvbiB0aGVcbiAqIHNlZ21lbnQncyBieXRlIGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbm9kZXMgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEdyYXBoIG9mIGFsbCBwb3NzaWJsZSBzZWdtZW50c1xuICovXG5mdW5jdGlvbiBidWlsZEdyYXBoIChub2RlcywgdmVyc2lvbikge1xuICBjb25zdCB0YWJsZSA9IHt9XG4gIGNvbnN0IGdyYXBoID0geyBzdGFydDoge30gfVxuICBsZXQgcHJldk5vZGVJZHMgPSBbJ3N0YXJ0J11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZUdyb3VwID0gbm9kZXNbaV1cbiAgICBjb25zdCBjdXJyZW50Tm9kZUlkcyA9IFtdXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGVHcm91cC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVHcm91cFtqXVxuICAgICAgY29uc3Qga2V5ID0gJycgKyBpICsgalxuXG4gICAgICBjdXJyZW50Tm9kZUlkcy5wdXNoKGtleSlcbiAgICAgIHRhYmxlW2tleV0gPSB7IG5vZGU6IG5vZGUsIGxhc3RDb3VudDogMCB9XG4gICAgICBncmFwaFtrZXldID0ge31cblxuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBjb25zdCBwcmV2Tm9kZUlkID0gcHJldk5vZGVJZHNbbl1cblxuICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0gJiYgdGFibGVbcHJldk5vZGVJZF0ubm9kZS5tb2RlID09PSBub2RlLm1vZGUpIHtcbiAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkXVtrZXldID1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArIG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpIC1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCwgbm9kZS5tb2RlKVxuXG4gICAgICAgICAgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICs9IG5vZGUubGVuZ3RoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdKSB0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgPSBub2RlLmxlbmd0aFxuXG4gICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9IGdldFNlZ21lbnRCaXRzTGVuZ3RoKG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpICtcbiAgICAgICAgICAgIDQgKyBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihub2RlLm1vZGUsIHZlcnNpb24pIC8vIHN3aXRjaCBjb3N0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2Tm9kZUlkcyA9IGN1cnJlbnROb2RlSWRzXG4gIH1cblxuICBmb3IgKGxldCBuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgZ3JhcGhbcHJldk5vZGVJZHNbbl1dLmVuZCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG1hcDogZ3JhcGgsIHRhYmxlOiB0YWJsZSB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgc2VnbWVudCBmcm9tIGEgc3BlY2lmaWVkIGRhdGEgYW5kIG1vZGUuXG4gKiBJZiBhIG1vZGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIG1vcmUgc3VpdGFibGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gKiBAcGFyYW0gIHtNb2RlIHwgU3RyaW5nfSBtb2Rlc0hpbnQgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtTZWdtZW50fSAgICAgICAgICAgICAgICAgU2VnbWVudFxuICovXG5mdW5jdGlvbiBidWlsZFNpbmdsZVNlZ21lbnQgKGRhdGEsIG1vZGVzSGludCkge1xuICBsZXQgbW9kZVxuICBjb25zdCBiZXN0TW9kZSA9IE1vZGUuZ2V0QmVzdE1vZGVGb3JEYXRhKGRhdGEpXG5cbiAgbW9kZSA9IE1vZGUuZnJvbShtb2Rlc0hpbnQsIGJlc3RNb2RlKVxuXG4gIC8vIE1ha2Ugc3VyZSBkYXRhIGNhbiBiZSBlbmNvZGVkXG4gIGlmIChtb2RlICE9PSBNb2RlLkJZVEUgJiYgbW9kZS5iaXQgPCBiZXN0TW9kZS5iaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGRhdGEgKyAnXCInICtcbiAgICAgICcgY2Fubm90IGJlIGVuY29kZWQgd2l0aCBtb2RlICcgKyBNb2RlLnRvU3RyaW5nKG1vZGUpICtcbiAgICAgICcuXFxuIFN1Z2dlc3RlZCBtb2RlIGlzOiAnICsgTW9kZS50b1N0cmluZyhiZXN0TW9kZSkpXG4gIH1cblxuICAvLyBVc2UgTW9kZS5CWVRFIGlmIEthbmppIHN1cHBvcnQgaXMgZGlzYWJsZWRcbiAgaWYgKG1vZGUgPT09IE1vZGUuS0FOSkkgJiYgIVV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgbW9kZSA9IE1vZGUuQllURVxuICB9XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBNb2RlLk5VTUVSSUM6XG4gICAgICByZXR1cm4gbmV3IE51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIG5ldyBBbHBoYW51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gbmV3IEthbmppRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICByZXR1cm4gbmV3IEJ5dGVEYXRhKGRhdGEpXG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IG9mIHNlZ21lbnRzIGZyb20gYW4gYXJyYXkuXG4gKiBBcnJheSBjYW4gY29udGFpbiBTdHJpbmdzIG9yIE9iamVjdHMgd2l0aCBzZWdtZW50J3MgaW5mby5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGEgc3RyaW5nLCB3aWxsIGJlIGdlbmVyYXRlZCBhIHNlZ21lbnQgd2l0aCB0aGUgZ2l2ZW5cbiAqIHN0cmluZyBhbmQgdGhlIG1vcmUgYXBwcm9wcmlhdGUgZW5jb2RpbmcgbW9kZS5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGFuIG9iamVjdCwgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gKiBkYXRhIGFuZCBtb2RlLlxuICogT2JqZWN0cyBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgdGhlIHByb3BlcnR5IFwiZGF0YVwiLlxuICogSWYgcHJvcGVydHkgXCJtb2RlXCIgaXMgbm90IHByZXNlbnQsIHRoZSBtb3JlIHN1aXRhYmxlIG1vZGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheSBBcnJheSBvZiBvYmplY3RzIHdpdGggc2VnbWVudHMgZGF0YVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIFNlZ21lbnRzXG4gKi9cbmV4cG9ydHMuZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5IChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNlZykge1xuICAgIGlmICh0eXBlb2Ygc2VnID09PSAnc3RyaW5nJykge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZywgbnVsbCkpXG4gICAgfSBlbHNlIGlmIChzZWcuZGF0YSkge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZy5kYXRhLCBzZWcubW9kZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBCdWlsZHMgYW4gb3B0aW1pemVkIHNlcXVlbmNlIG9mIHNlZ21lbnRzIGZyb20gYSBzdHJpbmcsXG4gKiB3aGljaCB3aWxsIHByb2R1Y2UgdGhlIHNob3J0ZXN0IHBvc3NpYmxlIGJpdHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAqL1xuZXhwb3J0cy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gZnJvbVN0cmluZyAoZGF0YSwgdmVyc2lvbikge1xuICBjb25zdCBzZWdzID0gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGEsIFV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKVxuXG4gIGNvbnN0IG5vZGVzID0gYnVpbGROb2RlcyhzZWdzKVxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgobm9kZXMsIHZlcnNpb24pXG4gIGNvbnN0IHBhdGggPSBkaWprc3RyYS5maW5kX3BhdGgoZ3JhcGgubWFwLCAnc3RhcnQnLCAnZW5kJylcblxuICBjb25zdCBvcHRpbWl6ZWRTZWdzID0gW11cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG9wdGltaXplZFNlZ3MucHVzaChncmFwaC50YWJsZVtwYXRoW2ldXS5ub2RlKVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KG1lcmdlU2VnbWVudHMob3B0aW1pemVkU2VncykpXG59XG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGluIHZhcmlvdXMgc2VnbWVudHMgd2l0aCB0aGUgbW9kZXMgd2hpY2hcbiAqIGJlc3QgcmVwcmVzZW50IHRoZWlyIGNvbnRlbnQuXG4gKiBUaGUgcHJvZHVjZWQgc2VnbWVudHMgYXJlIGZhciBmcm9tIGJlaW5nIG9wdGltaXplZC5cbiAqIFRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgdG8gZXN0aW1hdGUgYSBRUiBDb2RlIHZlcnNpb25cbiAqIHdoaWNoIG1heSBjb250YWluIHRoZSBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZGF0YSBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICovXG5leHBvcnRzLnJhd1NwbGl0ID0gZnVuY3Rpb24gcmF3U3BsaXQgKGRhdGEpIHtcbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KFxuICAgIGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCBVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSlcbiAgKVxufVxuIiwibGV0IHRvU0pJU0Z1bmN0aW9uXG5jb25zdCBDT0RFV09SRFNfQ09VTlQgPSBbXG4gIDAsIC8vIE5vdCB1c2VkXG4gIDI2LCA0NCwgNzAsIDEwMCwgMTM0LCAxNzIsIDE5NiwgMjQyLCAyOTIsIDM0NixcbiAgNDA0LCA0NjYsIDUzMiwgNTgxLCA2NTUsIDczMywgODE1LCA5MDEsIDk5MSwgMTA4NSxcbiAgMTE1NiwgMTI1OCwgMTM2NCwgMTQ3NCwgMTU4OCwgMTcwNiwgMTgyOCwgMTkyMSwgMjA1MSwgMjE4NSxcbiAgMjMyMywgMjQ2NSwgMjYxMSwgMjc2MSwgMjg3NiwgMzAzNCwgMzE5NiwgMzM2MiwgMzUzMiwgMzcwNlxuXVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFFSIENvZGUgc2l6ZSBmb3IgdGhlIHNwZWNpZmllZCB2ZXJzaW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIHNpemUgb2YgUVIgY29kZVxuICovXG5leHBvcnRzLmdldFN5bWJvbFNpemUgPSBmdW5jdGlvbiBnZXRTeW1ib2xTaXplICh2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbikgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKVxuICBpZiAodmVyc2lvbiA8IDEgfHwgdmVyc2lvbiA+IDQwKSB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIHNob3VsZCBiZSBpbiByYW5nZSBmcm9tIDEgdG8gNDAnKVxuICByZXR1cm4gdmVyc2lvbiAqIDQgKyAxN1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBjb2Rld29yZHMgdXNlZCB0byBzdG9yZSBkYXRhIGFuZCBFQyBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgRGF0YSBsZW5ndGggaW4gYml0c1xuICovXG5leHBvcnRzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzID0gZnVuY3Rpb24gZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMgKHZlcnNpb24pIHtcbiAgcmV0dXJuIENPREVXT1JEU19DT1VOVFt2ZXJzaW9uXVxufVxuXG4vKipcbiAqIEVuY29kZSBkYXRhIHdpdGggQm9zZS1DaGF1ZGh1cmktSG9jcXVlbmdoZW1cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRhdGEgVmFsdWUgdG8gZW5jb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgRW5jb2RlZCB2YWx1ZVxuICovXG5leHBvcnRzLmdldEJDSERpZ2l0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbGV0IGRpZ2l0ID0gMFxuXG4gIHdoaWxlIChkYXRhICE9PSAwKSB7XG4gICAgZGlnaXQrK1xuICAgIGRhdGEgPj4+PSAxXG4gIH1cblxuICByZXR1cm4gZGlnaXRcbn1cblxuZXhwb3J0cy5zZXRUb1NKSVNGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldFRvU0pJU0Z1bmN0aW9uIChmKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJ0b1NKSVNGdW5jXCIgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24uJylcbiAgfVxuXG4gIHRvU0pJU0Z1bmN0aW9uID0gZlxufVxuXG5leHBvcnRzLmlzS2FuamlNb2RlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0b1NKSVNGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0cy50b1NKSVMgPSBmdW5jdGlvbiB0b1NKSVMgKGthbmppKSB7XG4gIHJldHVybiB0b1NKSVNGdW5jdGlvbihrYW5qaSlcbn1cbiIsIi8qKlxuICogQ2hlY2sgaWYgUVIgQ29kZSB2ZXJzaW9uIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCB2ZXJzaW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAodmVyc2lvbikge1xuICByZXR1cm4gIWlzTmFOKHZlcnNpb24pICYmIHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDw9IDQwXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuY29uc3QgRUNDb2RlID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWNvZGUnKVxuY29uc3QgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5cbi8vIEdlbmVyYXRvciBwb2x5bm9taWFsIHVzZWQgdG8gZW5jb2RlIHZlcnNpb24gaW5mb3JtYXRpb25cbmNvbnN0IEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMClcbmNvbnN0IEcxOF9CQ0ggPSBVdGlscy5nZXRCQ0hEaWdpdChHMTgpXG5cbmZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aCAobW9kZSwgbGVuZ3RoLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKGxldCBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQgKG1vZGUsIHZlcnNpb24pIHtcbiAgLy8gQ2hhcmFjdGVyIGNvdW50IGluZGljYXRvciArIG1vZGUgaW5kaWNhdG9yIGJpdHNcbiAgcmV0dXJuIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG1vZGUsIHZlcnNpb24pICsgNFxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5IChzZWdtZW50cywgdmVyc2lvbikge1xuICBsZXQgdG90YWxCaXRzID0gMFxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCByZXNlcnZlZEJpdHMgPSBnZXRSZXNlcnZlZEJpdHNDb3VudChkYXRhLm1vZGUsIHZlcnNpb24pXG4gICAgdG90YWxCaXRzICs9IHJlc2VydmVkQml0cyArIGRhdGEuZ2V0Qml0c0xlbmd0aCgpXG4gIH0pXG5cbiAgcmV0dXJuIHRvdGFsQml0c1xufVxuXG5mdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YSAoc2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIGZvciAobGV0IGN1cnJlbnRWZXJzaW9uID0gMTsgY3VycmVudFZlcnNpb24gPD0gNDA7IGN1cnJlbnRWZXJzaW9uKyspIHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5KHNlZ21lbnRzLCBjdXJyZW50VmVyc2lvbilcbiAgICBpZiAobGVuZ3RoIDw9IGV4cG9ydHMuZ2V0Q2FwYWNpdHkoY3VycmVudFZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBNb2RlLk1JWEVEKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBudW1iZXIgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgdmVyc2lvbiwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gbnVtYmVyXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKFZlcnNpb25DaGVjay5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbi8qKlxuICogUmV0dXJucyBob3cgbXVjaCBkYXRhIGNhbiBiZSBzdG9yZWQgd2l0aCB0aGUgc3BlY2lmaWVkIFFSIGNvZGUgdmVyc2lvblxuICogYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiAoMS00MClcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHkgb2Ygc3RvcmFibGUgZGF0YVxuICovXG5leHBvcnRzLmdldENhcGFjaXR5ID0gZnVuY3Rpb24gZ2V0Q2FwYWNpdHkgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIC8vIFVzZSBCeXRlIG1vZGUgYXMgZGVmYXVsdFxuICBpZiAodHlwZW9mIG1vZGUgPT09ICd1bmRlZmluZWQnKSBtb2RlID0gTW9kZS5CWVRFXG5cbiAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgY29uc3QgZWNUb3RhbENvZGV3b3JkcyA9IEVDQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBkYXRhIGNvZGV3b3Jkc1xuICBjb25zdCBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4XG5cbiAgaWYgKG1vZGUgPT09IE1vZGUuTUlYRUQpIHJldHVybiBkYXRhVG90YWxDb2Rld29yZHNCaXRzXG5cbiAgY29uc3QgdXNhYmxlQml0cyA9IGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBnZXRSZXNlcnZlZEJpdHNDb3VudChtb2RlLCB2ZXJzaW9uKVxuXG4gIC8vIFJldHVybiBtYXggbnVtYmVyIG9mIHN0b3JhYmxlIGNvZGV3b3Jkc1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh1c2FibGVCaXRzIC8gMTApICogMylcblxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDExKSAqIDIpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih1c2FibGVCaXRzIC8gMTMpXG5cbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZlcnNpb24gbmVlZGVkIHRvIGNvbnRhaW4gdGhlIGFtb3VudCBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7U2VnbWVudH0gZGF0YSAgICAgICAgICAgICAgICAgICAgU2VnbWVudCBvZiBkYXRhXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtlcnJvckNvcnJlY3Rpb25MZXZlbD1IXSBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICAgICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICovXG5leHBvcnRzLmdldEJlc3RWZXJzaW9uRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YSAoZGF0YSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgbGV0IHNlZ1xuXG4gIGNvbnN0IGVjbCA9IEVDTGV2ZWwuZnJvbShlcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhKGRhdGEsIGVjbClcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuXG4gICAgc2VnID0gZGF0YVswXVxuICB9IGVsc2Uge1xuICAgIHNlZyA9IGRhdGFcbiAgfVxuXG4gIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGgoc2VnLm1vZGUsIHNlZy5nZXRMZW5ndGgoKSwgZWNsKVxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIFRoZSB2ZXJzaW9uIGluZm9ybWF0aW9uIGlzIGluY2x1ZGVkIGluIFFSIENvZGUgc3ltYm9scyBvZiB2ZXJzaW9uIDcgb3IgbGFyZ2VyLlxuICogSXQgY29uc2lzdHMgb2YgYW4gMTgtYml0IHNlcXVlbmNlIGNvbnRhaW5pbmcgNiBkYXRhIGJpdHMsXG4gKiB3aXRoIDEyIGVycm9yIGNvcnJlY3Rpb24gYml0cyBjYWxjdWxhdGVkIHVzaW5nIHRoZSAoMTgsIDYpIEdvbGF5IGNvZGUuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIEVuY29kZWQgdmVyc2lvbiBpbmZvIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzICh2ZXJzaW9uKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikgfHwgdmVyc2lvbiA8IDcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIGxldCBkID0gdmVyc2lvbiA8PCAxMlxuXG4gIHdoaWxlIChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxOF9CQ0ggPj0gMCkge1xuICAgIGQgXj0gKEcxOCA8PCAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIKSlcbiAgfVxuXG4gIHJldHVybiAodmVyc2lvbiA8PCAxMikgfCBkXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG5mdW5jdGlvbiBjbGVhckNhbnZhcyAoY3R4LCBjYW52YXMsIHNpemUpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgaWYgKCFjYW52YXMuc3R5bGUpIGNhbnZhcy5zdHlsZSA9IHt9XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplXG4gIGNhbnZhcy53aWR0aCA9IHNpemVcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGdldENhbnZhc0VsZW1lbnQgKCkge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgY2FudmFzIGVsZW1lbnQnKVxuICB9XG59XG5cbmV4cG9ydHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICBsZXQgb3B0cyA9IG9wdGlvbnNcbiAgbGV0IGNhbnZhc0VsID0gY2FudmFzXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjYW52YXNFbCA9IGdldENhbnZhc0VsZW1lbnQoKVxuICB9XG5cbiAgb3B0cyA9IFV0aWxzLmdldE9wdGlvbnMob3B0cylcbiAgY29uc3Qgc2l6ZSA9IFV0aWxzLmdldEltYWdlV2lkdGgocXJEYXRhLm1vZHVsZXMuc2l6ZSwgb3B0cylcblxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YShzaXplLCBzaXplKVxuICBVdGlscy5xclRvSW1hZ2VEYXRhKGltYWdlLmRhdGEsIHFyRGF0YSwgb3B0cylcblxuICBjbGVhckNhbnZhcyhjdHgsIGNhbnZhc0VsLCBzaXplKVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKVxuXG4gIHJldHVybiBjYW52YXNFbFxufVxuXG5leHBvcnRzLnJlbmRlclRvRGF0YVVSTCA9IGZ1bmN0aW9uIHJlbmRlclRvRGF0YVVSTCAocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBvcHRpb25zXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICBjb25zdCBjYW52YXNFbCA9IGV4cG9ydHMucmVuZGVyKHFyRGF0YSwgY2FudmFzLCBvcHRzKVxuXG4gIGNvbnN0IHR5cGUgPSBvcHRzLnR5cGUgfHwgJ2ltYWdlL3BuZydcbiAgY29uc3QgcmVuZGVyZXJPcHRzID0gb3B0cy5yZW5kZXJlck9wdHMgfHwge31cblxuICByZXR1cm4gY2FudmFzRWwudG9EYXRhVVJMKHR5cGUsIHJlbmRlcmVyT3B0cy5xdWFsaXR5KVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JBdHRyaWIgKGNvbG9yLCBhdHRyaWIpIHtcbiAgY29uc3QgYWxwaGEgPSBjb2xvci5hIC8gMjU1XG4gIGNvbnN0IHN0ciA9IGF0dHJpYiArICc9XCInICsgY29sb3IuaGV4ICsgJ1wiJ1xuXG4gIHJldHVybiBhbHBoYSA8IDFcbiAgICA/IHN0ciArICcgJyArIGF0dHJpYiArICctb3BhY2l0eT1cIicgKyBhbHBoYS50b0ZpeGVkKDIpLnNsaWNlKDEpICsgJ1wiJ1xuICAgIDogc3RyXG59XG5cbmZ1bmN0aW9uIHN2Z0NtZCAoY21kLCB4LCB5KSB7XG4gIGxldCBzdHIgPSBjbWQgKyB4XG4gIGlmICh0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHN0ciArPSAnICcgKyB5XG5cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBxclRvUGF0aCAoZGF0YSwgc2l6ZSwgbWFyZ2luKSB7XG4gIGxldCBwYXRoID0gJydcbiAgbGV0IG1vdmVCeSA9IDBcbiAgbGV0IG5ld1JvdyA9IGZhbHNlXG4gIGxldCBsaW5lTGVuZ3RoID0gMFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoaSAlIHNpemUpXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gc2l6ZSlcblxuICAgIGlmICghY29sICYmICFuZXdSb3cpIG5ld1JvdyA9IHRydWVcblxuICAgIGlmIChkYXRhW2ldKSB7XG4gICAgICBsaW5lTGVuZ3RoKytcblxuICAgICAgaWYgKCEoaSA+IDAgJiYgY29sID4gMCAmJiBkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgcGF0aCArPSBuZXdSb3dcbiAgICAgICAgICA/IHN2Z0NtZCgnTScsIGNvbCArIG1hcmdpbiwgMC41ICsgcm93ICsgbWFyZ2luKVxuICAgICAgICAgIDogc3ZnQ21kKCdtJywgbW92ZUJ5LCAwKVxuXG4gICAgICAgIG1vdmVCeSA9IDBcbiAgICAgICAgbmV3Um93ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCEoY29sICsgMSA8IHNpemUgJiYgZGF0YVtpICsgMV0pKSB7XG4gICAgICAgIHBhdGggKz0gc3ZnQ21kKCdoJywgbGluZUxlbmd0aClcbiAgICAgICAgbGluZUxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZUJ5KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAocXJEYXRhLCBvcHRpb25zLCBjYikge1xuICBjb25zdCBvcHRzID0gVXRpbHMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuICBjb25zdCBzaXplID0gcXJEYXRhLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXJEYXRhLm1vZHVsZXMuZGF0YVxuICBjb25zdCBxcmNvZGVzaXplID0gc2l6ZSArIG9wdHMubWFyZ2luICogMlxuXG4gIGNvbnN0IGJnID0gIW9wdHMuY29sb3IubGlnaHQuYVxuICAgID8gJydcbiAgICA6ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5saWdodCwgJ2ZpbGwnKSArXG4gICAgICAnIGQ9XCJNMCAwaCcgKyBxcmNvZGVzaXplICsgJ3YnICsgcXJjb2Rlc2l6ZSArICdIMHpcIi8+J1xuXG4gIGNvbnN0IHBhdGggPVxuICAgICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5kYXJrLCAnc3Ryb2tlJykgK1xuICAgICcgZD1cIicgKyBxclRvUGF0aChkYXRhLCBzaXplLCBvcHRzLm1hcmdpbikgKyAnXCIvPidcblxuICBjb25zdCB2aWV3Qm94ID0gJ3ZpZXdCb3g9XCInICsgJzAgMCAnICsgcXJjb2Rlc2l6ZSArICcgJyArIHFyY29kZXNpemUgKyAnXCInXG5cbiAgY29uc3Qgd2lkdGggPSAhb3B0cy53aWR0aCA/ICcnIDogJ3dpZHRoPVwiJyArIG9wdHMud2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIG9wdHMud2lkdGggKyAnXCIgJ1xuXG4gIGNvbnN0IHN2Z1RhZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAnICsgd2lkdGggKyB2aWV3Qm94ICsgJyBzaGFwZS1yZW5kZXJpbmc9XCJjcmlzcEVkZ2VzXCI+JyArIGJnICsgcGF0aCArICc8L3N2Zz5cXG4nXG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiKG51bGwsIHN2Z1RhZylcbiAgfVxuXG4gIHJldHVybiBzdmdUYWdcbn1cbiIsImZ1bmN0aW9uIGhleDJyZ2JhIChoZXgpIHtcbiAgaWYgKHR5cGVvZiBoZXggPT09ICdudW1iZXInKSB7XG4gICAgaGV4ID0gaGV4LnRvU3RyaW5nKClcbiAgfVxuXG4gIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29sb3Igc2hvdWxkIGJlIGRlZmluZWQgYXMgaGV4IHN0cmluZycpXG4gIH1cblxuICBsZXQgaGV4Q29kZSA9IGhleC5zbGljZSgpLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJycpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA8IDMgfHwgaGV4Q29kZS5sZW5ndGggPT09IDUgfHwgaGV4Q29kZS5sZW5ndGggPiA4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBjb2xvcjogJyArIGhleClcbiAgfVxuXG4gIC8vIENvbnZlcnQgZnJvbSBzaG9ydCB0byBsb25nIGZvcm0gKGZmZiAtPiBmZmZmZmYpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNCkge1xuICAgIGhleENvZGUgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBoZXhDb2RlLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIFtjLCBjXVxuICAgIH0pKVxuICB9XG5cbiAgLy8gQWRkIGRlZmF1bHQgYWxwaGEgdmFsdWVcbiAgaWYgKGhleENvZGUubGVuZ3RoID09PSA2KSBoZXhDb2RlLnB1c2goJ0YnLCAnRicpXG5cbiAgY29uc3QgaGV4VmFsdWUgPSBwYXJzZUludChoZXhDb2RlLmpvaW4oJycpLCAxNilcblxuICByZXR1cm4ge1xuICAgIHI6IChoZXhWYWx1ZSA+PiAyNCkgJiAyNTUsXG4gICAgZzogKGhleFZhbHVlID4+IDE2KSAmIDI1NSxcbiAgICBiOiAoaGV4VmFsdWUgPj4gOCkgJiAyNTUsXG4gICAgYTogaGV4VmFsdWUgJiAyNTUsXG4gICAgaGV4OiAnIycgKyBoZXhDb2RlLnNsaWNlKDAsIDYpLmpvaW4oJycpXG4gIH1cbn1cblxuZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICBpZiAoIW9wdGlvbnMuY29sb3IpIG9wdGlvbnMuY29sb3IgPSB7fVxuXG4gIGNvbnN0IG1hcmdpbiA9IHR5cGVvZiBvcHRpb25zLm1hcmdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA9PT0gbnVsbCB8fFxuICAgIG9wdGlvbnMubWFyZ2luIDwgMFxuICAgID8gNFxuICAgIDogb3B0aW9ucy5tYXJnaW5cblxuICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy53aWR0aCA+PSAyMSA/IG9wdGlvbnMud2lkdGggOiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDRcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBzY2FsZTogd2lkdGggPyA0IDogc2NhbGUsXG4gICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgY29sb3I6IHtcbiAgICAgIGRhcms6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IuZGFyayB8fCAnIzAwMDAwMGZmJyksXG4gICAgICBsaWdodDogaGV4MnJnYmEob3B0aW9ucy5jb2xvci5saWdodCB8fCAnI2ZmZmZmZmZmJylcbiAgICB9LFxuICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICByZW5kZXJlck9wdHM6IG9wdGlvbnMucmVuZGVyZXJPcHRzIHx8IHt9XG4gIH1cbn1cblxuZXhwb3J0cy5nZXRTY2FsZSA9IGZ1bmN0aW9uIGdldFNjYWxlIChxclNpemUsIG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMud2lkdGggJiYgb3B0cy53aWR0aCA+PSBxclNpemUgKyBvcHRzLm1hcmdpbiAqIDJcbiAgICA/IG9wdHMud2lkdGggLyAocXJTaXplICsgb3B0cy5tYXJnaW4gKiAyKVxuICAgIDogb3B0cy5zY2FsZVxufVxuXG5leHBvcnRzLmdldEltYWdlV2lkdGggPSBmdW5jdGlvbiBnZXRJbWFnZVdpZHRoIChxclNpemUsIG9wdHMpIHtcbiAgY29uc3Qgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHFyU2l6ZSwgb3B0cylcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbn1cblxuZXhwb3J0cy5xclRvSW1hZ2VEYXRhID0gZnVuY3Rpb24gcXJUb0ltYWdlRGF0YSAoaW1nRGF0YSwgcXIsIG9wdHMpIHtcbiAgY29uc3Qgc2l6ZSA9IHFyLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXIubW9kdWxlcy5kYXRhXG4gIGNvbnN0IHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShzaXplLCBvcHRzKVxuICBjb25zdCBzeW1ib2xTaXplID0gTWF0aC5mbG9vcigoc2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbiAgY29uc3Qgc2NhbGVkTWFyZ2luID0gb3B0cy5tYXJnaW4gKiBzY2FsZVxuICBjb25zdCBwYWxldHRlID0gW29wdHMuY29sb3IubGlnaHQsIG9wdHMuY29sb3IuZGFya11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbFNpemU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9sU2l6ZTsgaisrKSB7XG4gICAgICBsZXQgcG9zRHN0ID0gKGkgKiBzeW1ib2xTaXplICsgaikgKiA0XG4gICAgICBsZXQgcHhDb2xvciA9IG9wdHMuY29sb3IubGlnaHRcblxuICAgICAgaWYgKGkgPj0gc2NhbGVkTWFyZ2luICYmIGogPj0gc2NhbGVkTWFyZ2luICYmXG4gICAgICAgIGkgPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luICYmIGogPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luKSB7XG4gICAgICAgIGNvbnN0IGlTcmMgPSBNYXRoLmZsb29yKChpIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKVxuICAgICAgICBjb25zdCBqU3JjID0gTWF0aC5mbG9vcigoaiAtIHNjYWxlZE1hcmdpbikgLyBzY2FsZSlcbiAgICAgICAgcHhDb2xvciA9IHBhbGV0dGVbZGF0YVtpU3JjICogc2l6ZSArIGpTcmNdID8gMSA6IDBdXG4gICAgICB9XG5cbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5yXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuZ1xuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLmJcbiAgICAgIGltZ0RhdGFbcG9zRHN0XSA9IHB4Q29sb3IuYVxuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvblJlc3VsdCB7IH1cblxuZXhwb3J0IGNsYXNzIENvbnRpbnVlUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7IH1cblxuZXhwb3J0IGNsYXNzIEp1bXBSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBjb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY291bnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbFIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIHN0YXZlOiBzdHJpbmc7XG4gICAgbmV3Q29udGV4dDogQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXZlOiBzdHJpbmcsIGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF2ZSA9IHN0YXZlO1xuICAgICAgICB0aGlzLm5ld0NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2VSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBjb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY291bnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgQ2xvc2VDdXJzb3IsIFNoYXBlLCBJQ3Vyc29yLCBPcHNQYXJhbXMgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0LCBDb250aW51ZVIsIEp1bXBSLCBDYWxsUiwgUmV2ZXJzZVJ9IGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvblJlc3VsdFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmFic3RyYWN0IGNsYXNzIE5vZGVXaXRoVmFsdWUgZXh0ZW5kcyBBY3Rpb25Ob2RlIHtcbiAgICAjdmFsdWVzOiBWYWx1ZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogVmFsdWVOb2RlW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jdmFsdWVzID0gdmFsdWVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHRoaXMuI3ZhbHVlcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWxWYWx1ZShjb250ZXh0OiBDb250ZXh0KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLiN2YWx1ZXMsIGNvbnRleHQpLnZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsSW50VmFsdWUoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZXZhbFZhbHVlKGNvbnRleHQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgI25hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYWxsUih0aGlzLiNuYW1lLCB0aGlzLmNyZWF0ZUNvbnRleHQoY29udGV4dCkpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDb250ZXh0KGNvbnRleHQ6IENvbnRleHQpOiBDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZXh0KHtcbiAgICAgICAgICAgIGFyZ3VtZW50OiB0aGlzLmV2YWwoY29udGV4dCksXG4gICAgICAgICAgICBjdXJzb3I6IHRoaXMuY3JlYXRlQ3Vyc29yKGNvbnRleHQpLFxuICAgICAgICAgICAgaXRlcmF0aW9uOiBjb250ZXh0Lml0ZXJhdGlvbiArIDEsXG4gICAgICAgICAgICB2YWx1ZUZ1bmNCYWc6IGNvbnRleHQudmFsdWVGdW5jQmFnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3Vyc29yKGNvbnRleHQ6IENvbnRleHQpOiBJQ3Vyc29yIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3Vyc29yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkOiBFdmFsdWVkVmFsdWUpOiBPcHNQYXJhbXMge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzRmlsbGVkOiBldmFsZWQuaXNGaWxsZWQsXG4gICAgICAgIGNvbG9yOiBldmFsZWQuY29sb3IsXG4gICAgICAgIHN0cm9rZTogZXZhbGVkLnN0cm9rZVRoaWNrbmVzcyxcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvc2VDYWxsIGV4dGVuZHMgQ2FsbCB7XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1cnNvcihjb250ZXh0OiBDb250ZXh0KTogSUN1cnNvciB7XG4gICAgICAgIGNvbnN0IGV2YWxlZCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBDbG9zZUN1cnNvcihjb250ZXh0LmN1cnNvciwgZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmRyYXdMaW5lKGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0ZpZ3VyZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNzaGFwZTogU2hhcGVcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogVmFsdWVOb2RlW10sIHNoYXBlOiBTaGFwZSkge1xuICAgICAgICBzdXBlcih2YWx1ZXMpO1xuICAgICAgICB0aGlzLiNzaGFwZSA9IHNoYXBlO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGV2YWxlZCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGV2YWxlZC52YWx1ZTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZHJhd1NoYXBlKHRoaXMuI3NoYXBlLCBzaXplLCBldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3QXJjTGluZSh0aGlzLnJhdGlvLCBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb25zdCB7IGN1cnNvciB9ID0gY29udGV4dDtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgICAgICBjdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEN1cnNvck1hbmlwdWxhdG9yIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgYWJzdHJhY3QgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcik6IHZvaWQ7XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICB0aGlzLmNoYW5nZShjb250ZXh0LmN1cnNvciwgdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoY29udGV4dC5jdXJzb3IsIC10aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVGb3J3YXJkIGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVCYWNrd2FyZCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5iYWNrd2FyZCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IubGVmdCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZVJpZ2h0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLnJpZ2h0KHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVSaWdodCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3Iucm90YXRlKC12YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXZlcnNlUihpdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gbmV3IFJldmVyc2VSKGl0ZXJhdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlcGxheSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNqdW1wU2l6ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGp1bXBTaXplID0gMSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMuI2p1bXBTaXplID0ganVtcFNpemU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGxvY2FsWydjb3VudGVyJ10gfHwgMTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBpZiAoY291bnRlciA8IHNpemUpIHtcbiAgICAgICAgICAgIGxvY2FsWydjb3VudGVyJ10gPSBjb3VudGVyICsgMTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSnVtcFIoLXRoaXMuI2p1bXBTaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0LCBDb250aW51ZVIgfSBmcm9tIFwiLi9hY3Rpb25SZXN1bHRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aW9uTm9kZSB7XG4gICAgYWJzdHJhY3QgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0O1xuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQgeyByZXR1cm4gbmV3IENvbnRpbnVlUigpOyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFZhbHVlKHZhbHVlTm9kZXM6IFZhbHVlTm9kZVtdLCBjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBpbml0OiBFdmFsdWVkVmFsdWUgPSB7XG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgIGNvbG9yOiBjb250ZXh0LmFyZ3VtZW50LmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogY29udGV4dC5hcmd1bWVudC5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgaXNGaWxsZWQ6IGNvbnRleHQuYXJndW1lbnQuaXNGaWxsZWQsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IChhOiBudW1iZXIsIGI6bnVtYmVyKSA9PiBhICogYixcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZU5vZGVzLnJlZHVjZShwYXJ0RXZhbC5iaW5kKHRoaXMsIGNvbnRleHQpLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gcGFydEV2YWwoY29udGV4dDogQ29udGV4dCwgYWNjOiBFdmFsdWVkVmFsdWUsIG5vZGU6IFZhbHVlTm9kZSk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBub2RlLmV2YWwoY29udGV4dCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3VmFsdWUudmFsdWVUcmFuc2Zvcm1lciB8fCBhY2MudmFsdWVUcmFuc2Zvcm1lcjtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCA/IHRyYW5zZm9ybShhY2MudmFsdWUsIG5ld1ZhbHVlLnZhbHVlKSA6IGFjYy52YWx1ZSxcbiAgICAgICAgY29sb3I6IG5ld1ZhbHVlLmNvbG9yICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5jb2xvciA6IGFjYy5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IG5ld1ZhbHVlLnN0cm9rZVN0eWxlICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VTdHlsZSA6IGFjYy5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyA6IGFjYy5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIGlzRmlsbGVkOiBuZXdWYWx1ZS5pc0ZpbGxlZCAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuaXNGaWxsZWQgOiBhY2MuaXNGaWxsZWQsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IHRyYW5zZm9ybSxcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1heENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pbkNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGxDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtpc0ZpbGxlZDogdHJ1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtpc0ZpbGxlZDogZmFsc2V9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNoaWZ0Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBsZXQgY29sb3IgPSAoY29udGV4dC5hcmd1bWVudC5jb2xvciArIHRoaXMuc2hpZnQpICUgMS4wO1xuICAgICAgICBpZiAoY29sb3IgPCAwLjApIHtcbiAgICAgICAgICAgIGNvbG9yICs9IDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbG9yfTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEFjdGlvbk5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWN0aW9uczogQWN0aW9uTm9kZVtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTXVsdE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAqIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKyBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ViT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhIC0gYiB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBTdHJva2VTdHlsZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0U3Ryb2tlU3R5bGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc3Ryb2tlOiBTdHJva2VTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cm9rZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyBzdHJva2VTdHlsZTogdGhpcy5zdHJva2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNoaWZ0U3Ryb2tlVGhpY2tuZXNzIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGhpY2tuZXNzID0gY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MgKyB0aGlzLnNoaWZ0O1xuICAgICAgICByZXR1cm4geyBzdHJva2VUaGlja25lc3MgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5nbGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbm9ybWFsaXplZEFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9ybWFsaXplZEFuZ2xlID0gYW5nbGUgLyAzNjAuMDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLm5vcm1hbGl6ZWRBbmdsZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVyIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IGNvbnRleHQuYXJndW1lbnQudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3QgdmFsdWVOb2RlcyA9IGNvbnRleHQudmFsdWVGdW5jQmFnW3RoaXMubmFtZV0gfHwgW107XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodmFsdWVOb2RlcywgY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiQC9jb3JlL2FzdC9iYXNlXCI7XG5cbmV4cG9ydCB0eXBlIFN0cm9rZVN0eWxlID0gXCJzb2xpZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZGFzaGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZhbHVlZFZhbHVlIHtcbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgICBjb2xvcj86IG51bWJlcjtcbiAgICBzdHJva2VTdHlsZT86IFN0cm9rZVN0eWxlO1xuICAgIHN0cm9rZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgICBpc0ZpbGxlZD86IGJvb2xlYW47XG4gICAgdmFsdWVUcmFuc2Zvcm1lcj86IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcmVhZG9ubHkgaXRlcmF0aW9uOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgYXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZTtcbiAgICByZWFkb25seSBjdXJzb3I6IElDdXJzb3I7XG4gICAgcmVhZG9ubHkgdmFsdWVGdW5jQmFnOiB7W25hbWU6IHN0cmluZ106IFZhbHVlTm9kZVtdfTtcblxuICAgIGNvbnN0cnVjdG9yKHtjdXJzb3IsIGFyZ3VtZW50LCB2YWx1ZUZ1bmNCYWcgPSB7fSwgaXRlcmF0aW9uID0gMH0pIHtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB0aGlzLml0ZXJhdGlvbiA9IGl0ZXJhdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZUZ1bmNCYWcgPSB2YWx1ZUZ1bmNCYWc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgIH1cblxuICAgIG9uRW5kKCkge1xuICAgICAgICB0aGlzLmN1cnNvci5jbG9zZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ2FsbFIsIENvbnRpbnVlUiwgSnVtcFIsIFJldmVyc2VSIH0gZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uUmVzdWx0XCI7XG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiQC9jb3JlL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBcmdzIHtcbiAgICByZXN1bHQ6IEFjdGlvblJlc3VsdDtcbiAgICBiYWc6IEZ1bmN0aW9uc0JhZztcbiAgICBwdXNoOiBQdXNoQ2I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FscyhmdW5jOiBGdW5jdGlvbikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGZ1bmMuYWN0aW9ucywgKCkgPT4gKHt9KSk7XG59XG5cbnR5cGUgUHVzaENiID0gKHN0ZXBwZXI6IENvbnRleHRTdGVwcGVyKSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdFN0ZXBwZXIoY29udGV4dDogQ29udGV4dCwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gbmV3IEZvcndhcmRDb250ZXh0U3RlcHBlcih7XG4gICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbnRleHQsXG4gICAgfSk7XG59XG5cbmludGVyZmFjZSBTY29wZSB7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgICBsb2NhbHM6IG9iamVjdFtdO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGV4dFN0ZXBwZXIge1xuICAgIHByb3RlY3RlZCBzY29wZTogU2NvcGU7XG5cbiAgICBjb25zdHJ1Y3RvciAoc2NvcGU6IFNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBleGVjKCk6IEFjdGlvblJlc3VsdDtcbiAgICBhYnN0cmFjdCBtb3ZlKGFyZ3M6IE1vdmVBcmdzKTogYm9vbGVhbjtcbiAgICBvbkVuZCgpIHsgdGhpcy5zY29wZS5jb250ZXh0Lm9uRW5kKCk7IH07XG5cbiAgICBnZXQgaW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2NvcGUuaW5kZXg7IH1cbiAgICBnZXQgc3RhdmUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2NvcGUuZnVuY3Rpb24ubmFtZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZENvbnRleHRTdGVwcGVyIGV4dGVuZHMgQ29udGV4dFN0ZXBwZXIge1xuICAgIGV4ZWMoKTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMsIGxvY2FscyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZnVuYy5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHNbaW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbiB8fCAhbG9jYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbi5leGVjKHRoaXMuc2NvcGUuY29udGV4dCwgbG9jYWwpO1xuICAgIH1cblxuICAgIG1vdmUoe3Jlc3VsdCwgYmFnLCBwdXNofTogTW92ZUFyZ3MpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEp1bXBSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IHJlc3VsdC5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDYWxsUikge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24ocmVzdWx0LnN0YXZlLCByZXN1bHQubmV3Q29udGV4dC5pdGVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdXNoKG5ldyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXN1bHQubmV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV2ZXJzZVIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5zY29wZS5pbmRleCAtIHJlc3VsdC5jb3VudCk7XG4gICAgICAgICAgICBwdXNoKG5ldyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuc2NvcGUuY29udGV4dCxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5zY29wZS5pbmRleCAtIDEsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246IHRoaXMuc2NvcGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHModGhpcy5zY29wZS5mdW5jdGlvbiksXG4gICAgICAgICAgICB9LCBlbmRJbmRleCkpO1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJXcm9uZyBBY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luZGV4SW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgZnVuYy5zaXplO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2VDb250ZXh0U3RlcHBlciBleHRlbmRzIENvbnRleHRTdGVwcGVyIHtcbiAgICAjZW5kSW5kZXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBTY29wZSwgZW5kSW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoc2NvcGUpO1xuICAgICAgICB0aGlzLiNlbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIH1cblxuICAgIGV4ZWMoKTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMsIGxvY2FscyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZnVuYy5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWNSZXZlcnNlKHRoaXMuc2NvcGUuY29udGV4dCwgbG9jYWwpO1xuICAgIH1cblxuICAgIG1vdmUoe3Jlc3VsdCwgYmFnLCBwdXNofTogTW92ZUFyZ3MpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEp1bXBSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IHJlc3VsdC5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDYWxsUikge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24ocmVzdWx0LnN0YXZlLCByZXN1bHQubmV3Q29udGV4dC5pdGVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdXNoKG5ldyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXN1bHQubmV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGZ1bmMuc2l6ZSAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV2ZXJzZVIpIHtcbiAgICAgICAgICAgIC8vLyBUT0RPIC0gaW1wbGVtZW50IFJldmVyc2UtUmV2ZXJzZVxuICAgICAgICAgICAgLy8vIE9yIG1heWJlIG9uZSBzdGVwcGVyIHdpdGggbW92ZSBjdXJzb3Igb25seSB3aXRoIHNwZWNpZmllZCBkaXJlY3Rpb24/XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IHJlc3VsdC5jb3VudCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIldyb25nIEFjdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5kZXhJblJhbmdlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzSW5kZXhJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IHRoaXMuI2VuZEluZGV4ICYmIGluZGV4IDwgZnVuYy5zaXplO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpZ3VyZSwgTGluZSwgUmVjdGFuZ2xlLCBUcmlhbmdsZSwgQ2lyY2xlLCBBcmMsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uLCBMaW5lQ3VydmUsIEFyY0N1cnZlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94IHtcbiAgICBtaW46IFtudW1iZXIsIG51bWJlcl07XG4gICAgbWF4OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wc1BhcmFtcyB7XG4gICAgY29sb3I6IG51bWJlcixcbiAgICBzdHJva2U6IG51bWJlcixcbiAgICBpc0ZpbGxlZDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGVudW0gU2hhcGUgeyBTcXVhcmUsIFRyaWFuZ2xlLCBDaXJjbGUgfVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSUN1cnNvciB7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBmaWd1cmVzOiBGaWd1cmVbXTtcbiAgICBib3g6IEJveDtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgfVxuXG4gICAgZm9yd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gKz0geCAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB5ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb3J3YXJkKC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmlnaHQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICAvLyByb3RhdGUgb3JpZW50YXRpb24gYnkgOTDCsFxuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdIC09IHkgKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geCAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICB9XG5cbiAgICBsZWZ0KGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yaWdodCgtZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgICAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBhbmdsZSkgJSAxLjA7XG4gICAgICAgIGNvbnN0IHJhZGlhbnMgPSBhbmdsZSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25bMF0gPSB4ICogY29zIC0geSAqIHNpbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblsxXSA9IHggKiBzaW4gKyB5ICogY29zO1xuICAgIH1cblxuICAgIGNsb3NlKCkgeyB9XG5cbiAgICBwcm90ZWN0ZWQgZXh0ZW5kQm94KFt4LCB5XTogbnVtYmVyW10sIHNpemUgPSAwKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblswXSwgeCAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMF0sIHggKyBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzFdLCB5IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFsxXSwgeSArIHNpemUpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNhbGNTdHlsZVBhcmFtcyhvcHM6IE9wc1BhcmFtcyk6IFN0eWxlO1xuICAgIGFic3RyYWN0IGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3U2hhcGUoc2hhcGU6IFNoYXBlLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKTogdm9pZDtcbiAgICBhYnN0cmFjdCBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEN1cnNvciBleHRlbmRzIElDdXJzb3Ige1xuICAgIHN0cm9rZVNpemU6IG51bWJlcjtcbiAgICBmaXJzdENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgc2Vjb25kQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgc3Ryb2tlU2l6ZSA9IDEsXG4gICAgICAgIGRpc3RhbmNlTXVsdGlwbGVyID0gMTAwLFxuICAgICAgICBmaXJzdENvbG9yID0gXCIjMDAwMDAwXCIsXG4gICAgICAgIHNlY29uZENvbG9yID0gXCIjREMxNDNDXCIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlU2l6ZSA9IHN0cm9rZVNpemU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBkaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFswLjAsIDAuMF07XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwLjA7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBbMS4wLCAwLjBdO1xuICAgICAgICB0aGlzLmJveCA9IHtcbiAgICAgICAgICAgIG1pbjogWzAuMCwgMC4wXSxcbiAgICAgICAgICAgIG1heDogWzAuMCwgMC4wXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maXJzdENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKGZpcnN0Q29sb3IpO1xuICAgICAgICB0aGlzLnNlY29uZENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKHNlY29uZENvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvQ29sb3IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygxLCAxICsgMiksIDE2KTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMywgMyArIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDUsIDUgKyAyKSwgMTYpO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGJdO1xuICAgIH1cblxuICAgIGNhbGNTdHlsZVBhcmFtcyhvcHM6IE9wc1BhcmFtcyk6IFN0eWxlIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNhbGNDb2xvcihvcHMuY29sb3IpO1xuICAgICAgICBpZiAob3BzLmlzRmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBmaWxsOiBjb2xvciB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZpbGw6IFwibm9uZVwiLCBjb2xvcjogY29sb3IsIHN0cm9rZTogb3BzLnN0cm9rZSAqIHRoaXMuc3Ryb2tlU2l6ZSB9O1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKHsgc3Ryb2tlLCBjb2xvciwgaXNGaWxsZWQ6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgTGluZShbb2xkX3gsIG9sZF95XSwgW25ld194LCBuZXdfeV0sIHN0eWxlKSk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgbmR4ID0gLWR5O1xuICAgICAgICBjb25zdCBuZHkgPSBkeDtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBbeCArIGFyY1JhZGl1cyAqIG5keCwgeSArIGFyY1JhZGl1cyAqIG5keV07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jYWxjU3R5bGVQYXJhbXMoeyBzdHJva2UsIGNvbG9yLCBpc0ZpbGxlZDogZmFsc2UgfSk7XG4gICAgICAgIGNvbnN0IG9wcyA9IHtcbiAgICAgICAgICAgIHNoaWZ0OiB0aGlzLmFuZ2xlIC0gMC4yNSxcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQXJjKHBvaW50LCBhcmNSYWRpdXMsIHJhdGlvLCBvcHMsIHN0eWxlKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkKHNpemUpO1xuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd1NoYXBlKHNoYXBlOiBTaGFwZSwgc2l6ZTogbnVtYmVyLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jYWxjU3R5bGVQYXJhbXMob3BzKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3goW3gsIHldLCBNYXRoLmFicyhzaXplKSk7XG5cbiAgICAgICAgc3dpdGNoIChzaGFwZSkge1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5DaXJjbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IENpcmNsZShbeCwgeV0sIHNpemUsIHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNoYXBlLlNxdWFyZTpcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgUmVjdGFuZ2xlKFt4LCB5XSwgW2R4LCBkeV0sIHNpemUsIHNpemUsIHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNoYXBlLlRyaWFuZ2xlOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBUcmlhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY0NvbG9yKGNvbG9yOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYSA9IHRoaXMuZmlyc3RDb2xvcjtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLnNlY29uZENvbG9yO1xuICAgICAgICBjb25zdCBhUmF0aW8gPSBNYXRoLmFicyhjb2xvciAtIDAuNSkgKiAyO1xuICAgICAgICBjb25zdCBiUmF0aW8gPSAxLjAgLSBhUmF0aW87XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKGNhWzBdICogYVJhdGlvICsgY2JbMF0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBnID0gTWF0aC50cnVuYyhjYVsxXSAqIGFSYXRpbyArIGNiWzFdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgudHJ1bmMoY2FbMl0gKiBhUmF0aW8gKyBjYlsyXSAqIGJSYXRpbyk7XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG9zZUN1cnNvciBleHRlbmRzIElDdXJzb3Ige1xuICAgICNjdXJzb3I6IElDdXJzb3I7XG4gICAgI3BvbHlnb246IFBvbHlnb247XG5cbiAgICBjb25zdHJ1Y3RvcihjdXJzb3I6IElDdXJzb3IsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFsuLi5jdXJzb3IucG9zaXRpb25dO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWy4uLmN1cnNvci5vcmllbnRhdGlvbl07XG4gICAgICAgIHRoaXMuYW5nbGUgPSBjdXJzb3IuYW5nbGU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBjdXJzb3IuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy4jY3Vyc29yLmJveDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLiNwb2x5Z29uID0gbmV3IFBvbHlnb24oWy4uLmN1cnNvci5wb3NpdGlvbl0sIFtdLCBzdHlsZSk7XG4gICAgfVxuXG4gICAgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBkZWx0YTogW251bWJlciwgbnVtYmVyXSA9IFtuZXdfeCAtIG9sZF94LCBuZXdfeSAtIG9sZF95XTtcbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgTGluZUN1cnZlKGRlbHRhKSk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gdGhpcy5hbmdsZSAtIDAuMjU7XG5cbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgQXJjQ3VydmUoYXJjUmFkaXVzLCByYXRpbywgc2hpZnQpKTtcblxuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkKHNpemUpO1xuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgIH1cblxuICAgIGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgdGhpcy4jY3Vyc29yLmRyYXdTaGFwZShzaGFwZSwgc2l6ZSwgb3BzKTtcbiAgICB9XG5cbiAgICBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3IuY2FsY0NvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlndXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBDdXJzb3IgaXMgY2xvc2VkLiBHbyBhd2F5LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKHRoaXMuI3BvbHlnb24pO1xuICAgICAgICB0aGlzLiNjdXJzb3IuZmlndXJlcyA9IHRoaXMuI2N1cnNvci5maWd1cmVzLmNvbmNhdCh0aGlzLmZpZ3VyZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBwYXJzZUxpbmVGdW5jLCBwYXJzZUxpbmVWYWx1ZSwgcGFyc2VSYXdUb2tlbnMgfSBmcm9tIFwiQC9jb3JlL3BhcnNlclwiO1xuaW1wb3J0IHsgRHluYW1pY0FyZ3NLZXksIERZTkFNSUNfQVJHUyB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiLi9zdGVwXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiLi9zdGF2ZVwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vYXN0L2Z1bmN0aW9uXCI7XG5cbmNvbnN0IE1BWF9TVEVQUyA9IDEwMDAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWMoc3RhY2s6IFN0YWNrU3RlcCkge1xuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgTUFYX1NURVBTOyBzdGVwKyspIHtcbiAgICAgICAgaWYgKHN0YWNrLnN0ZXAoKS5oYWx0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJNYXhpbXVtIHN0ZXBzIHJlYWNoZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXhlYyh2YWx1ZUFyZ3VtZW50OiBudW1iZXIsIG1heEl0ZXJhdGlvbjogbnVtYmVyLCBzdGF2ZXM6IFN0YXZlW10sIGN1cnNvcjogQ3Vyc29yKTogU3RhY2tTdGVwIHtcbiAgICBjb25zdCBhcmd1bWVudDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVBcmd1bWVudCxcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLjAsXG4gICAgICAgIGNvbG9yOiAwLjAsXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgYmFnID0gbmV3IEZ1bmN0aW9uc0JhZyhtYXhJdGVyYXRpb24sIGluaXRGdW5jQmFnKHN0YXZlcykpO1xuICAgIGNvbnN0IHZhbHVlRnVuY0JhZyA9IGluaXRWYWx1ZUJhZyhzdGF2ZXMpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IGFyZ3VtZW50LCBjdXJzb3IsIHZhbHVlRnVuY0JhZyB9KTtcbiAgICByZXR1cm4gbmV3IFN0YWNrU3RlcChjb250ZXh0LCBiYWcpO1xufVxuXG5mdW5jdGlvbiBpbml0RnVuY0JhZyhzdGF2ZXM6IFN0YXZlW10pOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4ge1xuICAgIGNvbnN0IGJhZzogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG4gICAgc3RhdmVzIFxuICAgICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gIURZTkFNSUNfQVJHUy5pbmNsdWRlcyhuYW1lIGFzIER5bmFtaWNBcmdzS2V5KSlcbiAgICAgICAgLmZvckVhY2goKHsgbmFtZSwgc3VmZml4ID0gbnVsbCwgdG9rZW5zOiByYXdUb2tlbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSB0b1JlYWxuYW1lKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW3JlYWxOYW1lXSA9IHBhcnNlTGluZUZ1bmMobmFtZSwgdG9rZW5zKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGJhZztcbn1cblxuZnVuY3Rpb24gaW5pdFZhbHVlQmFnKHN0YXZlczogU3RhdmVbXSk6IFJlY29yZDxzdHJpbmcsIFZhbHVlTm9kZVtdPiB7XG4gICAgY29uc3QgYmFnOiBSZWNvcmQ8c3RyaW5nLCBWYWx1ZU5vZGVbXT4gPSB7fTtcbiAgICBzdGF2ZXMgXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBEWU5BTUlDX0FSR1MuaW5jbHVkZXMobmFtZSBhcyBEeW5hbWljQXJnc0tleSkpXG4gICAgICAgIC5mb3JFYWNoKCh7IG5hbWUsIHN1ZmZpeCA9IG51bGwsIHRva2VuczogcmF3VG9rZW5zIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gdG9SZWFsbmFtZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zKTtcbiAgICAgICAgICAgIGJhZ1tyZWFsTmFtZV0gPSBwYXJzZUxpbmVWYWx1ZSh0b2tlbnMpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gYmFnO1xufVxuXG5mdW5jdGlvbiB0b1JlYWxuYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgcmV0dXJuIChzdWZmaXggPT09IG51bGwgfHwgc3VmZml4Lmxlbmd0aCA9PSAwKSA/IG5hbWUgOiBgJHtuYW1lfTo6JHtzdWZmaXh9YDtcbn0iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3R5bGUge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZT86IG51bWJlcjtcbiAgICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHlsZTogTGluZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHN0eWxlOiBMaW5lU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXJ2ZSB7fVxuXG5leHBvcnQgY2xhc3MgTGluZUN1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIGRlbHRhOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoZGVsdGE6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyY0N1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCByYXRpbzogbnVtYmVyLCBzaGlmdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGltcGxlbWVudHMgRmlndXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBjdXJ2ZXM6IEN1cnZlW107XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIGN1cnZlczogQ3VydmVbXSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLmNsb3NlID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywgeyBzaGlmdCA9IDAuMCwgY2xvc2UgPSBmYWxzZSB9ID0ge30sIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmlhbmdsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uc0JhZyB7XG4gICAgbWF4SXRlcmF0aW9uOiBudW1iZXI7XG4gICAgYmFnOiB7W25hbWU6IHN0cmluZ106IEZ1bmN0aW9ufTtcblxuICAgIGNvbnN0cnVjdG9yKG1heEl0ZXJhdGlvbiwgYmFnKSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmJhZyA9IGJhZztcbiAgICB9XG5cbiAgICBmaW5kRnVuY3Rpb24obmFtZTogc3RyaW5nLCBpdGVyYXRpb246IG51bWJlciA9IDApOiBGdW5jdGlvbiB8IG51bGwge1xuICAgICAgICBjb25zdCB7IG1heEl0ZXJhdGlvbiB9ID0gdGhpcztcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhyb3dGdW5jID0gdGhpcy4jdGhyb3dGdW5jLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gPj0gbWF4SXRlcmF0aW9uIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RU5EYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkVWRU5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpID0gaXRlcmF0aW9uOyBpID4gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpHRSR7aX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3dGdW5jKG5hbWUpO1xuICAgICAgICB9IGNhdGNoKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmIChmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgICN0aHJvd0Z1bmMobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmJhZ1tuYW1lXTtcbiAgICAgICAgaWYgKGZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ0FMTFMgPSBbXCJGXCIsIFwiR1wiLCBcIkhcIl0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgRFlOQU1JQ19BUkdTID0gW1wiRElBTU9ORFwiLCBcIklOVl9UUklBTkdMRVwiXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBTVEFWRVMgPSBbLi4uQ0FMTFMsIC4uLkRZTkFNSUNfQVJHU10gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgU1VGRklYRVMgPSBbXCJFTkRcIiwgXCJFVkVOXCIsIFwiT0REXCIsIFwiR0UzXCIsIFwiR0U1XCIsIFwiR0U3XCJdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFRPS0VOUyA9IFtcbiAgICAvLyBDb3VudHNcbiAgICBcIkNPVU5UXzFcIixcbiAgICBcIkNPVU5UXzJcIixcbiAgICBcIkNPVU5UXzNcIixcbiAgICBcIkNPVU5UXzVcIixcbiAgICBcIkNPVU5UXzdcIixcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgXCJDT1VOVF9NSU5VU1wiLFxuICAgIFwiQ09VTlRfR09MRFwiLFxuICAgIFwiQ09VTlRfU0lMVkVSXCIsXG4gICAgXCJDT1VOVF9CUk9OWkVcIixcbiAgICBcIkNPVU5UX1BMQVNUSUNcIixcbiAgICAvLyBGcmFjdGlvbnNcbiAgICBcIkZSQUNUXzFfMlwiLFxuICAgIFwiRlJBQ1RfMV8zXCIsXG4gICAgXCJGUkFDVF8yXzNcIixcbiAgICBcIkZSQUNUXzFfNFwiLFxuICAgIFwiRlJBQ1RfM180XCIsXG4gICAgXCJGUkFDVF8xXzVcIixcbiAgICBcIkZSQUNUXzJfNVwiLFxuICAgIFwiRlJBQ1RfM181XCIsXG4gICAgXCJGUkFDVF80XzVcIixcbiAgICAvLyBBbmdsZXNcbiAgICBcIkFOR0xFXzI3MFwiLFxuICAgIFwiQU5HTEVfMTgwXCIsXG4gICAgXCJBTkdMRV85MFwiLFxuICAgIFwiQU5HTEVfNjBcIixcbiAgICBcIkFOR0xFXzQ1XCIsXG4gICAgXCJBTkdMRV8zMFwiLFxuICAgIFwiQU5HTEVfMTVcIixcbiAgICBcIkFOR0xFXzEwXCIsXG4gICAgLy8gQ29sb3JzXG4gICAgXCJDT0xPUl9NQVhcIixcbiAgICBcIkNPTE9SX01JTlwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8yXCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzRcIixcbiAgICBcIkNPTE9SX1NISUZUXzFfNVwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8xMFwiLFxuICAgIFwiQ09MT1JfRklMTFwiLFxuICAgIFwiQ09MT1JfRU1QVFlcIixcbiAgICAvLyBTdHJva2VcbiAgICBcIlNUUk9LRV9TT0xJRFwiLFxuICAgIFwiU1RST0tFX0RBU0hFRFwiLFxuICAgIFwiU1RST0tFX0RPVFRFRFwiLFxuICAgIFwiU1RST0tFX1RISUNLX0FERFwiLFxuICAgIFwiU1RST0tFX1RISUNLX1NVQlwiLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBcIk9QX01VTFRcIixcbiAgICBcIk9QX0FERFwiLFxuICAgIFwiT1BfU1VCXCIsXG4gICAgLy8gQXJndW1lbnRzXG4gICAgXCJBUkdVTUVOVFwiLFxuICAgIFwiQ0FMTF9ESUFNT05EXCIsXG4gICAgXCJDQUxMX0lOVl9UUklBTkdMRVwiLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIFwiQ0FMTF9GXCIsXG4gICAgXCJDQUxMX0dcIixcbiAgICBcIkNBTExfSFwiLFxuICAgIC8vIENsb3NlIENhbGxlcnNcbiAgICBcIkNMT1NFX0NBTExfRlwiLFxuICAgIFwiQ0xPU0VfQ0FMTF9HXCIsXG4gICAgXCJDTE9TRV9DQUxMX0hcIixcbiAgICAvLyBTaGFwZXNcbiAgICBcIkRSQVdfQ0lSQ0xFXCIsXG4gICAgXCJEUkFXX1NRVUFSRVwiLFxuICAgIFwiRFJBV19UUklBTkdMRVwiLFxuICAgIC8vIExpbmVcbiAgICBcIkRSQVdfTElORVwiLFxuICAgIC8vIEFyY1xuICAgIFwiRFJBV19BUkNMSU5FX1JfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfNVwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfNVwiLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBcIk1PVkVfRk9SV0FSRFwiLFxuICAgIFwiTU9WRV9CQUNLV0FSRFwiLFxuICAgIFwiTU9WRV9MRUZUXCIsXG4gICAgXCJNT1ZFX1JJR0hUXCIsXG4gICAgLy8gQ3Vyc29yIHJvdGF0aW9uc1xuICAgIFwiUk9UQVRFX0xFRlRcIixcbiAgICBcIlJPVEFURV9SSUdIVFwiLFxuICAgIC8vIFJlcGV0ZXRpdmUgYWN0aW9uc1xuICAgIFwiUkVWRVJTRVwiLFxuICAgIFwiUkVQTEFZXCIsXG4gICAgXCJSRVBMQVlfMlwiLFxuICAgIFwiUkVQTEFZXzNcIixcbiAgICBcIlJFUExBWV80XCIsXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEeW5hbWljQXJnc0tleSA9IHR5cGVvZiBEWU5BTUlDX0FSR1NbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIER5bmFtaWNBcmdzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgQ2FsbHNLZXkgPSB0eXBlb2YgQ0FMTFNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIENhbGxzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3VmZml4ZXNLZXkgPSB0eXBlb2YgU1VGRklYRVNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFN1ZmZpeGVzTWFwPFR5cGU+ID0gUmVjb3JkPFN1ZmZpeGVzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3RhdmVzS2V5ID0gdHlwZW9mIFNUQVZFU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgU3RhdmVzTWFwPFR5cGU+ID0gUmVjb3JkPFN0YXZlc0tleSwgVHlwZT47XG5cbmV4cG9ydCB0eXBlIFRva2Vuc0tleSA9IHR5cGVvZiBUT0tFTlNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFRva2Vuc01hcDxUeXBlPiA9IFJlY29yZDxUb2tlbnNLZXksIFR5cGU+OyIsImltcG9ydCB7IFRva2VuLCBUT0tFTlMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIkAvY29yZS90b2tlbnNcIjtcbmltcG9ydCB7IEFjdGlvbk5vZGUsIFZhbHVlTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vuczogc3RyaW5nW10pOiBUb2tlbltdIHtcbiAgICByZXR1cm4gcmF3VG9rZW5zLm1hcChyYXcgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IFRPS0VOU1tyYXddO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBgUGFyc2luZyBlcnJvcjogJHtyYXd9IGlzIG5vdCB1bmRlZmluZWQgYXMgdG9rZW4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSk7XG59XG5cbmNsYXNzIEFjdGlvblRtcCB7XG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcbiAgICBwcml2YXRlIHZhbHVlczogVmFsdWVOb2RlW107XG4gICAgcHJpdmF0ZSB0b2tlbjogVG9rZW4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25Ub2tlbih0b2tlbjogVG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldEFjdGlvblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIGdldFZhbHVlc0xlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzQWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbiAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnRva2VuLmZhY3RvcnkgYXMgQWN0aW9uQ2I7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZhY3RvcnkodGhpcy52YWx1ZXMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbnNlcnRWYWx1ZSh2YWx1ZTogVmFsdWVOb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lRnVuYyhuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgY29uc3QgdG1wID0gbmV3IEFjdGlvblRtcCgpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRtcC5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICBwYXJzZVZhbHVlKHRva2VuLCB0bXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VBY3Rpb24odG9rZW4sIHRtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRtcC5wdXNoQWN0aW9uKCk7IC8vIHB1c2ggbGFzdCB0b2tlbi5cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24obmFtZSwgdG1wLmdldEFjdGlvbnMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnM6IFRva2VuW10pOiBWYWx1ZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gYWN0aW9ucyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5pc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gZHluYW1pYyBlbGVtZW50cyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWN0aW9uKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAoIXRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaXMgbm90IGFuIGFjdGlvblwiO1xuICAgIH1cbiAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICAgICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICB0bXAuaW5zZXJ0VmFsdWUoZmFjdG9yeSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNNYXAsIFN1ZmZpeGVzTWFwLCBTdGF2ZXNNYXAgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL2NvcmUvc3RhdmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVN0YXZlcyhzdGF2ZXM6IFN0YXZlW10pOiBbc3RyaW5nLCBzdHJpbmddW10ge1xuICAgIHJldHVybiBzdGF2ZXMubWFwKHN0YXZlID0+IFtlbmNvZGVTdGF2ZU5hbWUoc3RhdmUpLCBlbmNvZGVUb2tlbnMoc3RhdmUudG9rZW5zKV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU3RhdmVOYW1lKHN0YXZlOiBTdGF2ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVZFX1RPX1NIT1JUQ1VUW3N0YXZlLm5hbWVdIHx8IFwiXCI7XG4gICAgY29uc3Qgc3VmZml4ID0gU1VGRklYX1RPX1NIT1JUQ1VUW3N0YXZlLnN1ZmZpeF0gfHwgXCJcIjtcbiAgICByZXR1cm4gYC4ke25hbWV9JHtzdWZmaXh9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRva2Vucyh0b2tlbnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9rZW5zXG4gICAgICAgIC5tYXAodG9rZW4gPT4gVE9LRU5fVE9fU0hPUlRDVVRbdG9rZW5dIHx8IFwiXCIpXG4gICAgICAgIC5qb2luKFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RhdmVzKGNvZGU6IEl0ZXJhYmxlSXRlcmF0b3I8W3N0cmluZywgc3RyaW5nXT4pOiBTdGF2ZVtdIHtcbiAgICBjb25zdCBzdGF2ZXM6IFN0YXZlW10gPSBbXTtcblxuICAgIGZvcihjb25zdCBbY29kZWROYW1lLCBjb2RlZFRva2Vuc10gb2YgY29kZSkge1xuICAgICAgICBjb25zdCByZWFsTmFtZSA9IGRlY29kZVN0YXZlTmFtZShjb2RlZE5hbWUpO1xuICAgICAgICBpZiAocmVhbE5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gcmVhbE5hbWU7XG4gICAgICAgIGxldCBzdGF2ZTogU3RhdmUgPSB7bmFtZSwgdG9rZW5zOiBkZWNvZGVUb2tlbnMoY29kZWRUb2tlbnMpfTtcbiAgICAgICAgaWYgKHN1ZmZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdmUuc3VmZml4ICA9IHN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICBzdGF2ZXMucHVzaChzdGF2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXZlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0YXZlTmFtZShjb2RlOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmcgfCBudWxsXSB8IG51bGwge1xuICAgIGlmIChjb2RlLmxlbmd0aCA+IDMgJiYgY29kZS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2RlWzBdICE9PSBcIi5cIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gU1RBVkVfRlJPTV9TSE9SVENVVFtjb2RlWzFdXTtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2RlLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIHJldHVybiBbbmFtZSwgbnVsbF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VmZml4ID0gU1VGRklYX0ZST01fU0hPUlRDVVRbY29kZVsyXV07XG4gICAgaWYgKHN1ZmZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbbmFtZSwgc3VmZml4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVRva2Vucyhjb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IHRva2VuQ29kZSA9IGNvZGUuc3Vic3RyaW5nKGksIGkgKyAyKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBUT0tFTl9GUk9NX1NIT1JUQ1VUW3Rva2VuQ29kZV07XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgU1RBVkVfVE9fU0hPUlRDVVQ6IFN0YXZlc01hcDxzdHJpbmc+ID0ge1xuICAgIEY6IFwiRlwiLFxuICAgIEc6IFwiR1wiLFxuICAgIEg6IFwiSFwiLFxuICAgIERJQU1PTkQ6IFwiRFwiLFxuICAgIElOVl9UUklBTkdMRTogXCJJXCIsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBTVUZGSVhfVE9fU0hPUlRDVVQ6IFN1ZmZpeGVzTWFwPHN0cmluZz4gPSB7XG4gICAgRU5EOiBcIjBcIixcbiAgICBFVkVOOiBcIjFcIixcbiAgICBPREQ6IFwiMlwiLFxuICAgIEdFMzogXCIzXCIsXG4gICAgR0U1OiBcIjRcIixcbiAgICBHRTc6IFwiNVwiLFxufSBhcyBjb25zdDtcblxuY29uc3QgVE9LRU5fVE9fU0hPUlRDVVQ6IFRva2Vuc01hcDxzdHJpbmc+ID0ge1xuICAgIC8vICoqKiBWYWx1ZXMgKioqXG4gICAgLy8gQ291bnRzXG4gICAgQ09VTlRfMTogXCJDMFwiLFxuICAgIENPVU5UXzI6IFwiQzFcIixcbiAgICBDT1VOVF8zOiBcIkMyXCIsXG4gICAgQ09VTlRfNTogXCJDM1wiLFxuICAgIENPVU5UXzc6IFwiQzRcIixcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgQ09VTlRfTUlOVVM6IFwiQzVcIixcbiAgICBDT1VOVF9HT0xEOiBcIkM2XCIsXG4gICAgQ09VTlRfU0lMVkVSOiBcIkM3XCIsXG4gICAgQ09VTlRfQlJPTlpFOiBcIkM4XCIsXG4gICAgQ09VTlRfUExBU1RJQzogXCJDOVwiLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogXCJGMFwiLFxuICAgIEZSQUNUXzFfMzogXCJGMVwiLFxuICAgIEZSQUNUXzJfMzogXCJGMlwiLFxuICAgIEZSQUNUXzFfNDogXCJGM1wiLFxuICAgIEZSQUNUXzNfNDogXCJGNFwiLFxuICAgIEZSQUNUXzFfNTogXCJGNVwiLFxuICAgIEZSQUNUXzJfNTogXCJGNlwiLFxuICAgIEZSQUNUXzNfNTogXCJGN1wiLFxuICAgIEZSQUNUXzRfNTogXCJGOFwiLFxuICAgIC8vIEFuZ2xlc1xuICAgIEFOR0xFXzI3MDogXCJBMFwiLFxuICAgIEFOR0xFXzE4MDogXCJBMVwiLFxuICAgIEFOR0xFXzkwOiBcIkEyXCIsXG4gICAgQU5HTEVfNjA6IFwiQTNcIixcbiAgICBBTkdMRV80NTogXCJBNFwiLFxuICAgIEFOR0xFXzMwOiBcIkE1XCIsXG4gICAgQU5HTEVfMTU6IFwiQTZcIixcbiAgICBBTkdMRV8xMDogXCJBN1wiLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogXCJWMFwiLFxuICAgIENPTE9SX01JTjogXCJWMVwiLFxuICAgIENPTE9SX1NISUZUXzFfMjogXCJWMlwiLFxuICAgIENPTE9SX1NISUZUXzFfNDogXCJWM1wiLFxuICAgIENPTE9SX1NISUZUXzFfNTogXCJWNFwiLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IFwiVjVcIixcbiAgICBDT0xPUl9GSUxMOiBcIlY2XCIsXG4gICAgQ09MT1JfRU1QVFk6IFwiVjdcIixcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IFwiUzBcIixcbiAgICBTVFJPS0VfREFTSEVEOiBcIlMxXCIsXG4gICAgU1RST0tFX0RPVFRFRDogXCJTMlwiLFxuICAgIFNUUk9LRV9USElDS19BREQ6IFwiUzNcIixcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBcIlM0XCIsXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIE9QX01VTFQ6IFwiTzBcIixcbiAgICBPUF9BREQ6IFwiTzFcIixcbiAgICBPUF9TVUI6IFwiTzJcIixcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogXCJaMFwiLFxuICAgIENBTExfRElBTU9ORDogXCJaMVwiLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBcIloyXCIsXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgQ0FMTF9GOiBcIlgwXCIsXG4gICAgQ0FMTF9HOiBcIlgxXCIsXG4gICAgQ0FMTF9IOiBcIlgyXCIsXG4gICAgLy8gQ2xvc2UgQ2FsbGVyc1xuICAgIENMT1NFX0NBTExfRjogXCJZMFwiLFxuICAgIENMT1NFX0NBTExfRzogXCJZMVwiLFxuICAgIENMT1NFX0NBTExfSDogXCJZMlwiLFxuICAgIC8vIFNoYXBlc1xuICAgIERSQVdfQ0lSQ0xFOiBcIkQwXCIsXG4gICAgRFJBV19TUVVBUkU6IFwiRDFcIixcbiAgICBEUkFXX1RSSUFOR0xFOiBcIkQyXCIsXG4gICAgLy8gTGluZVxuICAgIERSQVdfTElORTogXCJMMFwiLFxuICAgIC8vIEFyY1xuICAgIERSQVdfQVJDTElORV9SXzNfNDogXCJMMVwiLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogXCJMMlwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfMjogXCJMM1wiLFxuICAgIERSQVdfQVJDTElORV9SXzFfMzogXCJMNFwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogXCJMNVwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfNTogXCJMNlwiLFxuICAgIERSQVdfQVJDTElORV9MXzNfNDogXCJMN1wiLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogXCJMOFwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfMjogXCJMOVwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfMzogXCJMQVwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogXCJMQlwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfNTogXCJMQ1wiLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBNT1ZFX0ZPUldBUkQ6IFwiTTBcIixcbiAgICBNT1ZFX0JBQ0tXQVJEOiBcIk0xXCIsXG4gICAgTU9WRV9MRUZUOiBcIk0yXCIsXG4gICAgTU9WRV9SSUdIVDogXCJNM1wiLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogXCJSMFwiLFxuICAgIFJPVEFURV9SSUdIVDogXCJSMVwiLFxuXG4gICAgLy8gUmVwZXRldGl2ZSBhY3Rpb25zXG4gICAgUkVWRVJTRTogXCJRMFwiLFxuICAgIFJFUExBWTogXCJRMVwiLFxuICAgIFJFUExBWV8yOiBcIlEyXCIsXG4gICAgUkVQTEFZXzM6IFwiUTNcIixcbiAgICBSRVBMQVlfNDogXCJRNFwiLFxufSBhcyBjb25zdDtcblxuZnVuY3Rpb24gaW52ZXJzZTxUeXBlIGV4dGVuZHMgc3RyaW5nPihvYmo6IFJlY29yZDxUeXBlLCBzdHJpbmc+KTogUmVjb3JkPHN0cmluZywgVHlwZT4ge1xuICAgIGNvbnN0IGludl9lbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtrZXksIHZhbF0pID0+IFt2YWwsIGtleV0pO1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoaW52X2VudHJpZXMpO1xufVxuXG5jb25zdCBTVEFWRV9GUk9NX1NIT1JUQ1VUID0gaW52ZXJzZShTVEFWRV9UT19TSE9SVENVVCk7XG5jb25zdCBUT0tFTl9GUk9NX1NIT1JUQ1VUID0gaW52ZXJzZShUT0tFTl9UT19TSE9SVENVVCk7XG5jb25zdCBTVUZGSVhfRlJPTV9TSE9SVENVVCA9IGludmVyc2UoU1VGRklYX1RPX1NIT1JUQ1VUKTsiLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQ29udGV4dFN0ZXBwZXIsIGNyZWF0ZUluaXRTdGVwcGVyIH0gZnJvbSBcIi4vY29udGV4dFN0ZXBwZXJcIjtcbmltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IEZ1bmN0aW9uc0JhZyB9IGZyb20gXCIuL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBoYWx0OiBib29sZWFuLFxuICAgIHN0YXZlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrU3RlcCB7XG4gICAgI3N0YWNrOiBDb250ZXh0U3RlcHBlcltdO1xuICAgICNiYWc6IEZ1bmN0aW9uc0JhZztcbiAgICByZWFkb25seSBjdXJzb3I6IElDdXJzb3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDb250ZXh0LCBiYWc6IEZ1bmN0aW9uc0JhZykge1xuICAgICAgICBjb25zdCBmdW5jID0gYmFnLmZpbmRGdW5jdGlvbihcIlNUQVJUXCIpIHx8IGJhZy5maW5kRnVuY3Rpb24oXCJGXCIpO1xuICAgICAgICBpZiAoZnVuYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgXCJTdGFydCBmdW5jdGlvbiBub3QgZm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzdGFjayA9IFtjcmVhdGVJbml0U3RlcHBlcihjb250ZXh0LCBmdW5jKV07XG4gICAgICAgIHRoaXMuI2JhZyA9IGJhZztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBjb250ZXh0LmN1cnNvcjtcbiAgICB9XG5cbiAgICBzdGVwKCk6IFN0YXRlIHtcbiAgICAgICAgaWYgKHRoaXMuI3N0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhbHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdmU6ICc/JyxcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RWxlbWVudDogQ29udGV4dFN0ZXBwZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc3RlcHBlciA9IHRoaXMuZ2V0VG9wRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGluZGV4LCBzdGF2ZSB9ID0gc3RlcHBlcjtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RlcHBlci5leGVjKCk7XG4gICAgICAgIGNvbnN0IHN0aWxsQ29udGludWUgPSBzdGVwcGVyLm1vdmUoe1xuICAgICAgICAgICAgYmFnOiB0aGlzLiNiYWcsXG4gICAgICAgICAgICBwdXNoOiAoZWxlbWVudDogQ29udGV4dFN0ZXBwZXIpID0+IHsgbmV3RWxlbWVudCA9IGVsZW1lbnQ7IH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3RpbGxDb250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dFN0ZXBwZXIgPSB0aGlzLiNzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRleHRTdGVwcGVyLm9uRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4jc3RhY2sucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYWx0OiB0aGlzLiNzdGFjay5sZW5ndGggPT0gMCxcbiAgICAgICAgICAgIHN0YXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUb3BFbGVtZW50KCk6IENvbnRleHRTdGVwcGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YWNrW3RoaXMuI3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEZpZ3VyZSwgQ2lyY2xlLCBBcmMsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIExpbmUsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uLCBMaW5lQ3VydmUsIEFyY0N1cnZlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yOiBJQ3Vyc29yKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGxldCBbbWluX3gsIG1pbl95XSA9IGN1cnNvci5ib3gubWluO1xuICAgIGxldCBbbWF4X3gsIG1heF95XSA9IGN1cnNvci5ib3gubWF4O1xuICAgIG1pbl94IC09IDEwO1xuICAgIG1pbl95IC09IDEwO1xuICAgIG1heF94ICs9IDEwO1xuICAgIG1heF95ICs9IDEwO1xuICAgIGNvbnN0IHdpZHRoID0gbWF4X3ggLSBtaW5feDtcbiAgICBjb25zdCBoZWlnaHQgPSBtYXhfeSAtIG1pbl95O1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAke21pbl94fSAke21pbl95fSAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBjdXJzb3IuZmlndXJlcy5mb3JFYWNoKGZpZ3VyZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0b1N2Zyhkb2N1bWVudCwgZmlndXJlKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuc3R5bGUuY29sb3IgfHwgXCJibGFja1wiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZmlndXJlLnN0eWxlLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gZmlndXJlLnN0eWxlLnN0cm9rZSA6IDEpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFBvbHlnb24pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBsZXQgcGF0aCA9IGBNICR7eH0gJHt5fWA7XG5cbiAgICAgICAgZmlndXJlLmN1cnZlcy5mb3JFYWNoKGN1cnZlID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIExpbmVDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkeCwgZHldID0gY3VydmUuZGVsdGE7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBgIGwgJHtkeH0gJHtkeX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIEFyY0N1cnZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGN1cnZlLnJhZGl1cztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gY3VydmUuc2hpZnQgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChjdXJ2ZS5zaGlmdCArIGN1cnZlLnJhdGlvKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gciAqIChNYXRoLmNvcyhlbmRBbmdsZSkgLSBNYXRoLmNvcyhzdGFydEFuZ2xlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSByICogKE1hdGguc2luKGVuZEFuZ2xlKSAtIE1hdGguc2luKHN0YXJ0QW5nbGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGN1cnZlLnJhdGlvKSA8PSAwLjUgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWcyID0gY3VydmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAgYSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2R4fSAke2R5fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYCBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFcgPSBmaWd1cmUud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBIID0gZmlndXJlLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCAtIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgVHJpYW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgUyA9IGZpZ3VyZS5zaXplO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggKyBTICogZHh9ICR7eSArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5ICsgU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5IC0gU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEJhc2ljQXR0cnMoc3R5bGU6IFN0eWxlLCBub2RlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHN0eWxlLmZpbGwgfHwgXCJibGFja1wiKTtcbiAgICBpZiAoc3R5bGUuc3Ryb2tlICE9PSB1bmRlZmluZWQgJiYgc3R5bGUuc3Ryb2tlID4gMCkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHlsZS5jb2xvciB8fCBcIm5vbmVcIik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGAke3N0eWxlLnN0cm9rZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiQC9jb3JlL2FzdC9iYXNlXCI7XG5pbXBvcnQgeyBNdWx0aXBsZXIsIEFuZ2xlLCBBcmd1bWVudCwgRHluYW1pY0FyZ3VtZW50IH0gZnJvbSBcIkAvY29yZS9hc3QvdmFsdWVzXCI7XG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBUb2tlbnNNYXAgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiQC9jb3JlL2FzdC9jb2xvcnNcIjtcbmltcG9ydCAqIGFzIHN0cm9rZXMgZnJvbSBcIkAvY29yZS9hc3Qvc3Ryb2tlc1wiO1xuaW1wb3J0ICogYXMgb3BzIGZyb20gXCJAL2NvcmUvYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICBpc0FjdGlvbjogYm9vbGVhbjtcbiAgICBpc0R5bmFtaWM6IGJvb2xlYW47XG4gICAgZmFjdG9yeTogQWN0aW9uQ2IgfCBWYWx1ZUNiO1xuXG4gICAgY29uc3RydWN0b3IoeyBpc0FjdGlvbiwgaXNEeW5hbWljLCBmYWN0b3J5IH0pIHtcbiAgICAgICAgdGhpcy5pc0FjdGlvbiA9IGlzQWN0aW9uO1xuICAgICAgICB0aGlzLmlzRHluYW1pYyA9IGlzRHluYW1pYztcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKGZhY3Rvcnk6IFZhbHVlQ2IsIGlzRHluYW1pYyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiBmYWxzZSwgaXNEeW5hbWljLCBmYWN0b3J5IH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oZmFjdG9yeTogQWN0aW9uQ2IpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IHRydWUsIGlzRHluYW1pYzogdHJ1ZSwgZmFjdG9yeSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOUzogVG9rZW5zTWFwPFRva2VuPiA9IHtcbiAgICAvLyAqKiogVmFsdWVzICoqKlxuICAgIC8vIENvdW50c1xuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIENPVU5UXzc6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNykpLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UX0dPTEQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMS42MTgwMzM5ODkpKSxcbiAgICBDT1VOVF9TSUxWRVI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMi40MTQyMTM1NjIpKSxcbiAgICBDT1VOVF9CUk9OWkU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMy4zMDI3NzU2MzgpKSxcbiAgICBDT1VOVF9QTEFTVElDOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEuMzI0NzE3OTU3MikpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIEZSQUNUXzJfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gNSkpLFxuICAgIEZSQUNUXzNfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNSkpLFxuICAgIEZSQUNUXzRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig0IC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIEFOR0xFXzI3MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDI3MCkpLFxuICAgIEFOR0xFXzE4MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE4MCkpLFxuICAgIEFOR0xFXzkwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoOTApKSxcbiAgICBBTkdMRV82MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDYwKSksXG4gICAgQU5HTEVfNDU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg0NSkpLFxuICAgIEFOR0xFXzMwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzApKSxcbiAgICBBTkdMRV8xNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE1KSksXG4gICAgQU5HTEVfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxMCkpLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NYXhDb2xvcigpKSxcbiAgICBDT0xPUl9NSU46IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWluQ29sb3IoKSksXG4gICAgQ09MT1JfU0hJRlRfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDIpKSxcbiAgICBDT0xPUl9TSElGVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNCkpLFxuICAgIENPTE9SX1NISUZUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA1KSksXG4gICAgQ09MT1JfU0hJRlRfMV8xMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAxMCkpLFxuICAgIENPTE9SX0ZJTEw6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuRmlsbENvbG9yKCkpLFxuICAgIENPTE9SX0VNUFRZOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLkVtcHR5Q29sb3IoKSksXG4gICAgLy8gU3Ryb2tlXG4gICAgU1RST0tFX1NPTElEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcInNvbGlkXCIpKSxcbiAgICBTVFJPS0VfREFTSEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRhc2hlZFwiKSksXG4gICAgU1RST0tFX0RPVFRFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkb3R0ZWRcIikpLFxuICAgIFNUUk9LRV9USElDS19BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKCswLjI1KSksXG4gICAgU1RST0tFX1RISUNLX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoLTAuMjUpKSxcbiAgICAvLyBPcGVyYXRpb25zXG4gICAgT1BfTVVMVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5NdWx0T3AoKSksXG4gICAgT1BfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLkFkZE9wKCkpLFxuICAgIE9QX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5TdWJPcCgpKSxcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFyZ3VtZW50KCkpLFxuICAgIENBTExfRElBTU9ORDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIkRJQU1PTkRcIiksIHRydWUpLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiSU5WX1RSSUFOR0xFXCIpLCB0cnVlKSxcblxuICAgIC8vICoqKiBBY3Rpb25zICoqKlxuICAgIC8vIENhbGxlcnNcbiAgICBDQUxMX0Y6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJHXCIsIHYpKSxcbiAgICBDQUxMX0g6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJIXCIsIHYpKSxcbiAgICAvLyBDbG9zZSBDYWxsZXJzXG4gICAgQ0xPU0VfQ0FMTF9GOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DbG9zZUNhbGwoXCJGXCIsIHYpKSxcbiAgICBDTE9TRV9DQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNsb3NlQ2FsbChcIkdcIiwgdikpLFxuICAgIENMT1NFX0NBTExfSDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2xvc2VDYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gU2hhcGVzXG4gICAgRFJBV19DSVJDTEU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuQ2lyY2xlKSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuU3F1YXJlKSksXG4gICAgRFJBV19UUklBTkdMRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0ZpZ3VyZSh2LCBTaGFwZS5UcmlhbmdsZSkpLFxuICAgIC8vIExpbmVcbiAgICBEUkFXX0xJTkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdMaW5lKHYpKSxcbiAgICAvLyBBcmNcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCszIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDUsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0zIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDUsIHYpKSxcbiAgICAvLyBDdXJzb3IgdHJhbnNsYXRpb25zXG4gICAgTU9WRV9GT1JXQVJEOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlRm9yd2FyZCh2KSksXG4gICAgTU9WRV9CQUNLV0FSRDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUJhY2t3YXJkKHYpKSxcbiAgICBNT1ZFX0xFRlQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVMZWZ0KHYpKSxcbiAgICBNT1ZFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlUmlnaHQodikpLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVSaWdodCh2KSksXG5cbiAgICAvLyBSZXBldGV0aXZlIGFjdGlvbnNcbiAgICBSRVZFUlNFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2KSksXG4gICAgUkVQTEFZXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAyKSksXG4gICAgUkVQTEFZXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAzKSksXG4gICAgUkVQTEFZXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCA0KSksXG59O1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9VUkwgPSBgJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL2A7XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IFN0YWNrU3RlcCB9IGZyb20gXCJAL2NvcmUvc3RlcFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBkZWJ1ZzogYm9vbGVhbixcbiAgICBzdGF2ZTogc3RyaW5nLFxuICAgIGFjdGlvbkluZGV4OiBudW1iZXIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblN0YXRlOiAocHJldmlvdXNTdGF0ZTogU3RhdGUgfCBudWxsLCBzdGF0ZTogU3RhdGUpID0+IHZvaWQsXG4gICAgcmVuZGVyQ2I6IChjdXJzb3I6IElDdXJzb3IpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbnRyb2xsZXIge1xuICAgICNzdGFjazogU3RhY2tTdGVwIHwgbnVsbDtcbiAgICAjaW50ZXJ2YWw6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGw7XG4gICAgI3ByZXZpb3VzU3RhdGU6IFN0YXRlIHwgbnVsbDtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICB0aGlzLiNzdGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4jcHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBpbml0KHN0YWNrOiBTdGFja1N0ZXApIHtcbiAgICAgICAgdGhpcy4jc3RhY2sgPSBzdGFjaztcbiAgICAgICAgdGhpcy5zdGVwKCk7XG4gICAgfVxuXG4gICAgc3RlcCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBoYWx0LCBzdGF2ZSwgaW5kZXggfSA9IHRoaXMuI3N0YWNrLnN0ZXAoKTtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzLnJlbmRlckNiKHRoaXMuI3N0YWNrLmN1cnNvcik7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAgICAgc3RhdmU6IHN0YXZlLFxuICAgICAgICAgICAgYWN0aW9uSW5kZXg6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICFoYWx0O1xuICAgIH1cblxuICAgIHBsYXkocGVyaW9kOiBudW1iZXIgPSAxMDApIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0ZXAoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBwZXJpb2QpO1xuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLiN1cGRhdGVTdGF0ZSh7IGRlYnVnOiBmYWxzZSwgc3RhdmU6ICc/JywgYWN0aW9uSW5kZXg6IDAgfSk7XG4gICAgICAgIHRoaXMuI3N0YWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy4jcHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2ludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLiNpbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICAjdXBkYXRlU3RhdGUoc3RhdGU6IFN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSB0aGlzLiNwcmV2aW91c1N0YXRlO1xuICAgICAgICB0aGlzLiNwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblN0YXRlKHByZXZpb3VzU3RhdGUsIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpc0RlYnVnKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhY2sgIT09IG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IERlYnVnQ29udHJvbGxlciwgU3RhdGUgfSBmcm9tIFwiLi9kZWJ1Z1wiO1xuXG5pbXBvcnQgeyBDb2RlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb2RlXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYXJWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2Z1bmN0aW9uc0JhclwiO1xuaW1wb3J0IHsgVG9rZW5zQ2F0ZWdvcnlWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2NhdGVnb3J5VG9rZW5cIjtcbmltcG9ydCB7IEltYWdlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9pbWFnZVwiO1xuaW1wb3J0IHsgQ29kZUJhclZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY29kZUJhclwiO1xuaW1wb3J0IHsgQ2hvb3NlVG9rZW5EaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2Nob29zZURpYWxvZ1wiO1xuaW1wb3J0IHsgUHJvamVjdExpc3REaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL3Byb2plY3RMaXN0RGlhbG9nXCI7XG5pbXBvcnQgeyBTYXZlRGlhbG9nVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9zYXZlRGlhbG9nXCI7XG5pbXBvcnQgeyBIZWxwRGlhbG9nVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9oZWxwRGlhbG9nXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVtcHR5UHJvamVjdCwgUHJvamVjdCwgU3RhdmUgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBBQ1RJT05fVE9LRU5TLCBWQUxVRV9UT0tFTlMgfSBmcm9tIFwiQC93ZWIvdG9rZW5zTWVudVwiO1xuXG5pbXBvcnQgeyBleGVjLCBzZXR1cEV4ZWMgfSBmcm9tIFwiQC9jb3JlL2V4ZWNcIjtcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiQC9jb3JlL3N0ZXBcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIkAvd2ViL2RhdGFiYXNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2U7XG4gICAgcHJpdmF0ZSBpbWFnZVZpZXc6IEltYWdlVmlldztcbiAgICBwcml2YXRlIGNvZGVWaWV3OiBDb2RlVmlldztcbiAgICBwcml2YXRlIGZ1bmN0aW9uc0JhclZpZXc6IEZ1bmN0aW9uc0JhclZpZXc7XG4gICAgcHJpdmF0ZSBhY3Rpb25zQ2F0ZWdvcnlWaWV3OiBUb2tlbnNDYXRlZ29yeVZpZXc7XG4gICAgcHJpdmF0ZSB2YWx1ZXNDYXRlZ29yeVZpZXc6IFRva2Vuc0NhdGVnb3J5VmlldztcbiAgICBwcml2YXRlIGNvZGVCYXJWaWV3OiBDb2RlQmFyVmlldztcbiAgICBwcml2YXRlIGRlYnVnOiBEZWJ1Z0NvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSBjaG9vc2VEaWFsb2dWaWV3OiBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcgfCBudWxsO1xuICAgIHByaXZhdGUgcHJvamVjdExpc3REaWFsb2dWaWV3OiBQcm9qZWN0TGlzdERpYWxvZ1ZpZXcgfCBudWxsO1xuICAgIHByaXZhdGUgc2F2ZURpYWxvZ1ZpZXc6IFNhdmVEaWFsb2dWaWV3IHwgbnVsbDtcbiAgICBwcml2YXRlIGhlbHBEaWFsb2dWaWV3OiBIZWxwRGlhbG9nVmlldztcbiAgICBwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XG4gICAgcHJpdmF0ZSBpc1Zpc2l0ZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRGF0YWJhc2UsIHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgRGVidWdDb250cm9sbGVyKHtcbiAgICAgICAgICAgIHJlbmRlckNiOiAoY3Vyc29yOiBDdXJzb3IpID0+IHRoaXMuaW1hZ2VWaWV3LnJlbmRlcihjdXJzb3IpLFxuICAgICAgICAgICAgb25TdGF0ZTogdGhpcy5vbkRlYnVnU3RhdGUuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVscERpYWxvZ1ZpZXcgPSBuZXcgSGVscERpYWxvZ1ZpZXcoKTtcbiAgICAgICAgdGhpcy5pbWFnZVZpZXcgPSBuZXcgSW1hZ2VWaWV3KHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWltYWdlXCIpKTtcbiAgICAgICAgdGhpcy5jb2RlVmlldyA9IG5ldyBDb2RlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1zdGF2ZXNcIiksXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb25Nb3ZlOiB0aGlzLm9uTW92ZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9uRHJhZ1RpbWVvdXQ6IHRoaXMub25EcmFnVGltZW91dC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGNhbkRyYWc6ICgpID0+ICF0aGlzLmRlYnVnLmlzRGVidWcoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25zQmFyVmlldyA9IG5ldyBGdW5jdGlvbnNCYXJWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LWZ1bmN0aW9ucy1saXN0XCIpLFxuICAgICAgICAgICAgb25TZWxlY3Q6IChuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3JIaWRlT3JBZGRGdW5jdGlvbihuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYXRlZ29yeUNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgIG9uRHJvcDogdGhpcy5vbkRyb3BGcm9tQ2F0ZWdvcnkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uTW92ZTogdGhpcy5vbk1vdmVGcm9tQ2F0ZWdvcnkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uRHJhZ1RpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICBjYW5EcmFnOiAoKSA9PiAhdGhpcy5kZWJ1Zy5pc0RlYnVnKCksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3Rpb25zQ2F0ZWdvcnlWaWV3ID0gbmV3IFRva2Vuc0NhdGVnb3J5Vmlldyh7XG4gICAgICAgICAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbi10b2tlbnNcIiksXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBBQ1RJT05fVE9LRU5TLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBjYXRlZ29yeUNhbGxiYWNrcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFsdWVzQ2F0ZWdvcnlWaWV3ID0gbmV3IFRva2Vuc0NhdGVnb3J5Vmlldyh7XG4gICAgICAgICAgICBub2RlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbHVlLXRva2Vuc1wiKSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFZBTFVFX1RPS0VOUyxcbiAgICAgICAgICAgIGNhbGxiYWNrczogY2F0ZWdvcnlDYWxsYmFja3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvZGVCYXJWaWV3ID0gbmV3IENvZGVCYXJWaWV3KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZS1iYXJcIiksIHtcbiAgICAgICAgICAgIG9uVXBkYXRlOiAoaXRlcmF0aW9ucywgc3R5bGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QuaXRlcmF0aW9ucyA9IGl0ZXJhdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0LnN0eWxlID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlVGVtcFByb2plY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRGVidWdTdGFydDogdGhpcy5zY3JhcGVBbmREZWJ1Zy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25Mb2FkOiB0aGlzLm9wZW5Qcm9qZWN0TGlzdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25TYXZlOiB0aGlzLm9wZW5TYXZlRGlhbG9nLmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbk5ldzogKCkgPT4gdGhpcy5sb2FkUHJvamVjdChjcmVhdGVFbXB0eVByb2plY3QoKSksXG4gICAgICAgICAgICBvbkhlbHA6ICgpID0+IHRoaXMuaGVscERpYWxvZ1ZpZXcucmVuZGVyKCksXG4gICAgICAgICAgICBvbkRlYnVnU3RlcDogKCkgPT4gdGhpcy5kZWJ1Zy5zdGVwKCksXG4gICAgICAgICAgICBvbkRlYnVnUGxheTogKCkgPT4gdGhpcy5kZWJ1Zy5wbGF5KCksXG4gICAgICAgICAgICBvbkRlYnVnU3RvcDogKCkgPT4gdGhpcy5kZWJ1Zy5zdG9wKCksXG4gICAgICAgICAgICBvbkRlYnVnRXhpdDogKCkgPT4gdGhpcy5kZWJ1Zy5leGl0KCksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNob29zZURpYWxvZ1ZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0RGlhbG9nVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2F2ZURpYWxvZ1ZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLmlzVmlzaXRlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmlzaXRlZFwiKSAhPT0gbnVsbDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ2aXNpdGVkXCIsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2l0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmhlbHBEaWFsb2dWaWV3LnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29kZVZpZXcucmVuZGVyKHRoaXMucHJvamVjdC5zdGF2ZXMpO1xuICAgICAgICB0aGlzLmZ1bmN0aW9uc0JhclZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NhdGVnb3J5Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZXNDYXRlZ29yeVZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY29kZUJhclZpZXcucmVuZGVyKHRoaXMucHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgfVxuXG4gICAgc2NyYXBlQW5kUnVuKCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zy5pc0RlYnVnKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFjayA9IHRoaXMuc2NyYXBlKCk7XG5cbiAgICAgICAgaWYgKHN0YWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXhlYyhzdGFjayk7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihleGNlcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBiYWNrZ3JvdW5kQ29sb3IgfSA9IHRoaXMucHJvamVjdC5zdHlsZTtcbiAgICAgICAgdGhpcy5pbWFnZVZpZXcucmVuZGVyKHN0YWNrLmN1cnNvciwgYmFja2dyb3VuZENvbG9yKTtcbiAgICB9XG5cbiAgICBzY3JhcGVBbmRTYXZlKCkge1xuICAgICAgICB0aGlzLnByb2plY3Quc3RhdmVzID0gdGhpcy5jb2RlVmlldy5zY3JhcGVDb2RlKCk7XG4gICAgICAgIHRoaXMuc2F2ZVRlbXBQcm9qZWN0KCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgfVxuXG4gICAgc2F2ZVRlbXBQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBjbG9uZVByb2plY3QgPSB7Li4udGhpcy5wcm9qZWN0fTtcbiAgICAgICAgY2xvbmVQcm9qZWN0LmlkID0gXCJfX3RlbXBfX1wiO1xuICAgICAgICB0aGlzLmRhdGFiYXNlLnVwZGF0ZShjbG9uZVByb2plY3QsIHByb2plY3QgPT4ge30pOyBcbiAgICB9XG5cbiAgICBzY3JhcGVBbmREZWJ1ZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVidWcuaXNEZWJ1ZygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhY2sgPSB0aGlzLnNjcmFwZSgpO1xuICAgICAgICBpZiAoc3RhY2sgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvZGVCYXJWaWV3LnNldERlYnVnTW9kZSgpO1xuICAgICAgICB0aGlzLmRlYnVnLmluaXQoc3RhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlblByb2plY3RMaXN0KCkge1xuICAgICAgICBjb25zdCBkaWFsb2dOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nTm9kZSk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3REaWFsb2dWaWV3ID0gbmV3IFByb2plY3RMaXN0RGlhbG9nVmlldyhkaWFsb2dOb2RlLCB0aGlzLmRhdGFiYXNlLCB7XG4gICAgICAgICAgICBvbkxvYWQ6IHRoaXMubG9hZFByb2plY3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uUmVtb3ZlOiAoKSA9PiB7fSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3REaWFsb2dWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlblNhdmVEaWFsb2coKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy5zYXZlRGlhbG9nVmlldyA9IG5ldyBTYXZlRGlhbG9nVmlldyhkaWFsb2dOb2RlLCB0aGlzLmRhdGFiYXNlLCAgdGhpcy5wcm9qZWN0LCB7XG4gICAgICAgICAgICBvblNhdmU6IHByb2plY3QgPT4ge30sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhdmVEaWFsb2dWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFByb2plY3QocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnNhdmVUZW1wUHJvamVjdCgpO1xuICAgICAgICB0aGlzLmRlYnVnLmV4aXQoKTtcbiAgICAgICAgdGhpcy5jb2RlVmlldy5yZW5kZXIodGhpcy5wcm9qZWN0LnN0YXZlcyk7XG4gICAgICAgIHRoaXMuY29kZUJhclZpZXcucmVuZGVyKHRoaXMucHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JhcGUoKTogU3RhY2tTdGVwIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5wcm9qZWN0LnN0eWxlO1xuICAgICAgICBjb25zdCBjdXJzb3JDZmcgPSB7XG4gICAgICAgICAgICBmaXJzdENvbG9yOiBzdHlsZS5maXJzdENvbG9yLFxuICAgICAgICAgICAgc2Vjb25kQ29sb3I6IHN0eWxlLnNlY29uZENvbG9yLFxuICAgICAgICAgICAgc3Ryb2tlU2l6ZTogc3R5bGUuc3Ryb2tlU2l6ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3Vyc29yID0gbmV3IEN1cnNvcihjdXJzb3JDZmcpO1xuICAgICAgICBjb25zdCBhcmd1bWVudCA9IDEuMDtcbiAgICAgICAgY29uc3QgbWF4SXRlcmF0aW9uID0gdGhpcy5wcm9qZWN0Lml0ZXJhdGlvbnM7XG4gICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVWaWV3LnNjcmFwZUNvZGUoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHNldHVwRXhlYyhhcmd1bWVudCwgbWF4SXRlcmF0aW9uLCBjb2RlLCBjdXJzb3IpO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlYnVnU3RhdGUocHJldmlvdXNTdGF0ZTogU3RhdGUgfCBudWxsLCBzdGF0ZTogU3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmRlYnVnID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jb2RlQmFyVmlldy51bnNldERlYnVnTW9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4ID0gXCJcIl0gPSBwcmV2aW91c1N0YXRlLnN0YXZlLnNwbGl0KFwiOjpcIik7XG4gICAgICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBzdGF2ZSAmJiBzdGF2ZS5yZW1vdmVGbGFnT25BY3Rpb25Ub2tlbignZGVidWcnLCBwcmV2aW91c1N0YXRlLmFjdGlvbkluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgc3VmZml4ID0gXCJcIl0gPSBzdGF0ZS5zdGF2ZS5zcGxpdChcIjo6XCIpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdmUgPSB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgc3RhdmUgJiYgc3RhdmUuYWRkRmxhZ09uQWN0aW9uVG9rZW4oJ2RlYnVnJywgc3RhdGUuYWN0aW9uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyb3AoZHJhZ05vZGU6IEhUTUxFbGVtZW50LCBvdmVyTm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZmluZFN0YXZlID0gZGF0YXNldCA9PiB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShkYXRhc2V0Lm5hbWUsIGRhdGFzZXQuc3VmZml4KTtcbiAgICAgICAgY29uc3QgcHJldlN0YXZlVmlldyA9IGZpbmRTdGF2ZShkcmFnTm9kZS5kYXRhc2V0KTtcblxuICAgICAgICBpZiAob3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJhY3Qtc3RhdmVzXCIpKSB7IC8vIFJFTU9WRVxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHBhcnNlSW50KGRyYWdOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgcHJldlN0YXZlVmlldy5yZW1vdmVUb2tlbihpbmRleFRvUmVtb3ZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7ICAvLyBBREQvTU9WRVxuICAgICAgICAgICAgY29uc3QgaW5kZXhUb01vdmUgPSBwYXJzZUludChkcmFnTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxJbmRleCA9IHBhcnNlSW50KG92ZXJOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZ29hbFN0YXZlVmlldyA9IGZpbmRTdGF2ZShvdmVyTm9kZS5kYXRhc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gT2JqZWN0LmlzKHByZXZTdGF2ZVZpZXcsIGdvYWxTdGF2ZVZpZXcpICYmIGdvYWxJbmRleCA8PSBpbmRleFRvTW92ZSA/IDEgOiAwO1xuXG4gICAgICAgICAgICBnb2FsU3RhdmVWaWV3LnB1c2hUb2tlbkFmdGVyKGRyYWdOb2RlLmRhdGFzZXQudG9rZW4sIGdvYWxJbmRleCk7XG4gICAgICAgICAgICBwcmV2U3RhdmVWaWV3LnJlbW92ZVRva2VuKGluZGV4VG9Nb3ZlICsgc2hpZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JhcGVBbmRTYXZlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyb3BGcm9tQ2F0ZWdvcnkoZHJhZ05vZGU6IEhUTUxFbGVtZW50LCBvdmVyTm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZmluZFN0YXZlID0gZGF0YXNldCA9PiB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShkYXRhc2V0Lm5hbWUsIGRhdGFzZXQuc3VmZml4KTtcblxuICAgICAgICBpZiAob3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkgeyAgLy8gQUREL01PVkVcbiAgICAgICAgICAgIGNvbnN0IGdvYWxJbmRleCA9IHBhcnNlSW50KG92ZXJOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZ29hbFN0YXZlVmlldyA9IGZpbmRTdGF2ZShvdmVyTm9kZS5kYXRhc2V0KTtcblxuICAgICAgICAgICAgZ29hbFN0YXZlVmlldy5wdXNoVG9rZW5BZnRlcihkcmFnTm9kZS5kYXRhc2V0LnRva2VuLCBnb2FsSW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JhcGVBbmRTYXZlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1vdmUoZHJhZ05vZGU6IEhUTUxFbGVtZW50LCBvbGRPdmVyTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsLCBuZXdPdmVyTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgICAgIGlmIChvbGRPdmVyTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgaXNDbGFzcyA9IGtleSA9PiBvbGRPdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoa2V5KTtcbiAgICAgICAgICAgIGlmIChpc0NsYXNzKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkge1xuICAgICAgICAgICAgICAgIG9sZE92ZXJOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1kcm9wXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsYXNzKFwiZnJhY3Qtc3RhdmVzXCIpKSB7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZS1kcm9wXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdPdmVyTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgaXNDbGFzcyA9IGtleSA9PiBuZXdPdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoa2V5KTtcbiAgICAgICAgICAgIGlmIChpc0NsYXNzKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF2ZSA9IGAke2RyYWdOb2RlLmRhdGFzZXQubmFtZX06OiR7ZHJhZ05vZGUuZGF0YXNldC5zdWZmaXggfHwgXCJcIn1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdvYWxTdGF2ZSA9IGAke25ld092ZXJOb2RlLmRhdGFzZXQubmFtZX06OiR7bmV3T3Zlck5vZGUuZGF0YXNldC5zdWZmaXggfHwgXCJcIn1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGRyYWdOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdvYWxJbmRleCA9IHBhcnNlSW50KG5ld092ZXJOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdmUgPT0gZ29hbFN0YXZlICYmIChjdXJyZW50SW5kZXggPT0gZ29hbEluZGV4IHx8IGN1cnJlbnRJbmRleCA9PSBnb2FsSW5kZXggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld092ZXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcm9wXCIpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2xhc3MoXCJmcmFjdC1zdGF2ZXNcIikpIHtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWRyb3BcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTW92ZUZyb21DYXRlZ29yeShkcmFnTm9kZTogSFRNTEVsZW1lbnQsIG9sZE92ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGwsIG5ld092ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICAgICAgaWYgKG9sZE92ZXJOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpc0NsYXNzID0ga2V5ID0+IG9sZE92ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhrZXkpO1xuICAgICAgICAgICAgaWYgKGlzQ2xhc3MoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7XG4gICAgICAgICAgICAgICAgb2xkT3Zlck5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJcIik7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyb3BcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld092ZXJOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpc0NsYXNzID0ga2V5ID0+IG5ld092ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhrZXkpO1xuICAgICAgICAgICAgaWYgKGlzQ2xhc3MoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7XG4gICAgICAgICAgICAgICAgbmV3T3Zlck5vZGUuY2xhc3NMaXN0LmFkZChcIm92ZXJcIik7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyb3BcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRyYWdUaW1lb3V0KHRva2VuTm9kZTogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLmNob29zZURpYWxvZ1ZpZXcgPSBuZXcgQ2hvb3NlVG9rZW5EaWFsb2dWaWV3KGRpYWxvZ05vZGUsIHRva2VuTm9kZSwgdGhpcy5vblNlbGVjdFRva2VuRnJvbURpYWxvZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jaG9vc2VEaWFsb2dWaWV3LnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2VsZWN0VG9rZW5Gcm9tRGlhbG9nKHt0b2tlbiwgbmFtZSwgc3VmZml4LCBpbmRleH0pIHtcbiAgICAgICAgY29uc3Qgc3RhdmVWaWV3ID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgc3RhdmVWaWV3LnJlcGxhY2VUb2tlbih0b2tlbiwgaW5kZXgpO1xuICAgICAgICB0aGlzLnNjcmFwZUFuZFNhdmUoKTtcbiAgICAgICAgdGhpcy5jaG9vc2VEaWFsb2dWaWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dPckhpZGVPckFkZEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgPSBcIlwiKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0YXZlVmlldyA9IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgIGlmIChzdGF2ZVZpZXcpIHtcbiAgICAgICAgICAgIHN0YXZlVmlldy5zaG93T3JIaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvZGVWaWV3LmFkZFN0YXZlKHsgbmFtZSwgc3VmZml4LCB0b2tlbnM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kU2F2ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGluaXREYXRhYmFzZSB9IGZyb20gXCIuL2RhdGFiYXNlSW5pdFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHRoaXMuI2dldFJlcXVlc3QoKTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IGFsZXJ0KFwiREIgRVJST1IhXCIpOyB9O1xuICAgICAgICBkYlJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGIgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkucmVzdWx0O1xuXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKCdwcm9qZWN0cycsIHsga2V5UGF0aDogJ2lkJyB9KTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCd0aXRsZScsICd0aXRsZScpO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ2l0ZXJhdGlvbnMnLCAnaXRlcmF0aW9ucycpO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ3N0YXZlcycsICdzdGF2ZXMnKTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCdzdHlsZScsICdzdHlsZScpO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ2NyZWF0ZWQnLCAnY3JlYXRlZCcpO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ3VwZGF0ZWQnLCAndXBkYXRlZCcpO1xuXG4gICAgICAgICAgICBpbml0RGF0YWJhc2UoKHByb2plY3Q6IFByb2plY3QpID0+IHRoaXMudXBkYXRlKHByb2plY3QsICgpID0+IHt9KSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0KHRpdGxlOiBzdHJpbmcsIGNhbGxiYWNrOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZCwgZXJyQ2FsbGJhY2s6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHRoaXMuI2dldFJlcXVlc3QoKTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IGFsZXJ0KFwiREIgRVJST1IhXCIpOyB9O1xuICAgICAgICBkYlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLiNnZXRQcm9qZWN0c1N0b3JlKGRiUmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zdCBzdG9yZVJlcXVlc3QgPSBzdG9yZS5nZXQodGl0bGUpO1xuICAgICAgICAgICAgc3RvcmVSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdG9yZVJlcXVlc3QucmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZXJyQ2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdG9yZVJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGVyckNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1cGRhdGUocHJvamVjdDogUHJvamVjdCwgY2FsbGJhY2s6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHRoaXMuI2dldFJlcXVlc3QoKTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IGFsZXJ0KFwiREIgRVJST1IhXCIpOyB9O1xuICAgICAgICBkYlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBkYlJlcXVlc3QucmVzdWx0OyBcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW1wicHJvamVjdHNcIl0sIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncHJvamVjdHMnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlUmVxdWVzdCA9IHN0b3JlLnB1dChwcm9qZWN0KTtcbiAgICAgICAgICAgIHN0b3JlUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7IGNhbGxiYWNrKHByb2plY3QpOyB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRpdGxlOiBzdHJpbmcsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHRoaXMuI2dldFJlcXVlc3QoKTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IGFsZXJ0KFwiREIgRVJST1IhXCIpOyB9O1xuICAgICAgICBkYlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLiNnZXRQcm9qZWN0c1N0b3JlKGRiUmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zdCBzdG9yZVJlcXVlc3QgPSBzdG9yZS5kZWxldGUodGl0bGUpO1xuICAgICAgICAgICAgc3RvcmVSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHsgY2FsbGJhY2soKTsgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGxpc3QoY2FsbGJhY2s6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkLCBsaW1pdCA9IC0xKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHRoaXMuI2dldFJlcXVlc3QoKTtcblxuICAgICAgICBkYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgYWxlcnQoXCJEQiBFUlJPUiFcIik7IH07XG4gICAgICAgIGRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuI2dldFByb2plY3RzU3RvcmUoZGJSZXF1ZXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RvcmUuaW5kZXgoJ3VwZGF0ZWQnKTtcbiAgICAgICAgICAgIGluZGV4Lm9wZW5DdXJzb3IobnVsbCwgXCJwcmV2XCIpLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciA9IChldmVudC50YXJnZXQgYXMgYW55KS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IudmFsdWUuaWQgPT0gXCJfX3RlbXBfX1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3Vyc29yLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChsaW1pdCA+IDAgJiYgY291bnQgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICAjZ2V0UmVxdWVzdCgpOiBJREJPcGVuREJSZXF1ZXN0IHtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKFwiRnJhY3RhbGFuZ1wiLCAxKTtcbiAgICAgICAgcmV0dXJuIGRiUmVxdWVzdDtcbiAgICB9XG5cbiAgICAjZ2V0UHJvamVjdHNTdG9yZShkYlJlcXVlc3Q6IElEQlJlcXVlc3QpOiBJREJPYmplY3RTdG9yZSB7XG4gICAgICAgIGNvbnN0IGRiID0gZGJSZXF1ZXN0LnJlc3VsdDsgXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW1wicHJvamVjdHNcIl0sIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdwcm9qZWN0cycpO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxufSIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdHlsZSwgU3RhdmUgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZTogc3RyaW5nLCBpdGVyYXRpb25zOiBudW1iZXIsIHN0YXZlczogU3RhdmVbXSwgc3R5bGU6IFByb2plY3RTdHlsZSk6IFByb2plY3Qge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0aXRsZSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGl0ZXJhdGlvbnM6IE1hdGgucm91bmQoaXRlcmF0aW9ucyksXG4gICAgICAgIHN0YXZlcyxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGFiYXNlKHVwZGF0ZTogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWQpIHtcbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJCaW5hcnkgVHJlZVwiLCA5LFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJGXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnRFJBV19DSVJDTEUnLCAnQ09VTlRfMycsICdST1RBVEVfUklHSFQnLCAnQU5HTEVfMzAnLCAnRFJBV19MSU5FJywgJ0NBTExfRicsICdSRVZFUlNFJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NPVU5UXzMnLCAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfMzAnLCAnRFJBV19MSU5FJywgJ0NBTExfRicsICdSRVZFUlNFJywgJ0NPVU5UXzMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHN1ZmZpeDogXCJFTkRcIiwgdG9rZW5zOiBbJ0RSQVdfQ0lSQ0xFJywgJ0NPVU5UXzMnLCAnQ09MT1JfTUFYJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnIzAwMDAwMCcsIHNlY29uZENvbG9yOiAnI2ZmMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJDb25zdGVsbGF0aW9uIG9mIE11ZmZpblwiLCA3LFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJGXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnRFJBV19MSU5FJywgJ0FSR1VNRU5UJywgJ0RSQVdfQVJDTElORV9MXzFfNScsICdBUkdVTUVOVCcsICdDQUxMX0YnLCAnQVJHVU1FTlQnLCAnRFJBV19UUklBTkdMRScsXG4gICAgICAgICAgICAgICAgICAgICdDT0xPUl9NQVgnLCAnQ09VTlRfMicsICdDT1VOVF8zJywgJ0NBTExfRicsICdDT1VOVF9HT0xEJywgJ0ZSQUNUXzFfMycsICdBUkdVTUVOVCddXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjZmY5NTAwJywgc2Vjb25kQ29sb3I6ICcjZmZkNTYxJywgYmFja2dyb3VuZENvbG9yOiAnIzhhOGE4YScsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIkN1cnZ5IHBlbnRhZ29uXCIsIDUsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHRva2VuczogWydEUkFXX0xJTkUnLCAnQVJHVU1FTlQnLCAnRFJBV19BUkNMSU5FX0xfMV81JywgJ0FSR1VNRU5UJywgJ0NBTExfRicsICdBUkdVTUVOVCddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyMwMDAwMDAnLCBzZWNvbmRDb2xvcjogJyNmZjAwMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiRG90dGVkIFN1blwiLCAxMCxcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRlwiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfQ0lSQ0xFJywgJ0NPTE9SX01BWCcsICdDT1VOVF81JywgJ0RSQVdfTElORScsICdBUkdVTUVOVCcsXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCAnQVJHVU1FTlQnLCAnQ0FMTF9GJywgJ0NPVU5UX01JTlVTJywgJ0FSR1VNRU5UJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyNmZjk1MDAnLCBzZWNvbmRDb2xvcjogJyNmZmJiMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjOGE4YThhJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiSG9uZXljb21iXCIsIDgsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHRva2VuczogWydEUkFXX0FSQ0xJTkVfTF8xXzMnLCAnQ0FMTF9GJywgJ0NPTE9SX1NISUZUXzFfNCcsICdEUkFXX0FSQ0xJTkVfUl8xXzMnLCAnQ0FMTF9GJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnI2ZmZGQwMCcsIHNlY29uZENvbG9yOiAnI2ZmNzU3NScsIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJLb2NoIFNub3dmbGFrZVwiLCA1LFxuICAgICAgICBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCB0b2tlbnM6IFsnQ0FMTF9HJywgJ1JPVEFURV9SSUdIVCcsICdDT1VOVF8yJywgJ0FOR0xFXzYwJywgJ1JFUExBWV8yJywgJ0NPVU5UXzMnXSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR1wiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfUklHSFQnLCAnQ09VTlRfMicsXG4gICAgICAgICAgICAgICAgICAgICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJHXCIsIHN1ZmZpeDogXCJFTkRcIiwgdG9rZW5zOiBbJ0RSQVdfTElORScsICdBUkdVTUVOVCddIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRElBTU9ORFwiLCB0b2tlbnM6IFsnRlJBQ1RfMV8zJywgJ0FSR1VNRU5UJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnI2ZmZmZmZicsIHNlY29uZENvbG9yOiAnI2ZmMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyMwMGJmZmYnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJLb2NoIFNub3dmbGFrZSAtIDJcIiwgNCxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbJ0NBTExfRycsICdST1RBVEVfUklHSFQnLCAnQ09VTlRfMicsICdBTkdMRV82MCcsICdSRVBMQVlfMicsICdDT1VOVF8zJ10gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX1JJR0hUJywgJ0NPVU5UXzInLFxuICAgICAgICAgICAgICAgICAgICAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfTEVGVCcsICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJHXCIsIHN1ZmZpeDogXCJFTkRcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0xJTkUnLCAnQVJHVU1FTlQnLCAnRFJBV19BUkNMSU5FX0xfMl8zJywgJ0NBTExfRElBTU9ORCcsICdEUkFXX0FSQ0xJTkVfUl8yXzMnLCAnQ0FMTF9ESUFNT05EJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7ICBuYW1lOiBcIkRJQU1PTkRcIiwgdG9rZW5zOiBbJ0ZSQUNUXzFfMycsICdBUkdVTUVOVCddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyNmZmZmZmYnLCBzZWNvbmRDb2xvcjogJyNmZjAwMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBiZmZmJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiVGhlIGdyaWRcIiwgOCxcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRlwiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfQ0lSQ0xFJywgJ0NPVU5UXzMnLCAnQ09VTlRfMycsICdST1RBVEVfUklHSFQnLCAnQU5HTEVfOTAnLCAnQ0FMTF9HJywgJ0NBTExfRicsICdSRVZFUlNFJywgJ0NPVU5UXzMnLFxuICAgICAgICAgICAgICAgICAgICAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfOTAnLCAnQ0FMTF9HJywgJ0NBTExfRicsICdSRVZFUlNFJywgJ0NPVU5UXzMnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHN1ZmZpeDogXCJFTkRcIiwgdG9rZW5zOiBbJ0RSQVdfQ0lSQ0xFJywgJ0NPVU5UXzMnLCAnQ09VTlRfMycsICdDT0xPUl9NQVgnXSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkdcIiwgdG9rZW5zOiBbJ0RSQVdfQVJDTElORV9MXzFfNCcsICdEUkFXX0FSQ0xJTkVfUl8xXzInLCAnRlJBQ1RfMV8zJywgJ0RSQVdfQVJDTElORV9MXzFfNCcsICdGUkFDVF8xXzMnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjMDAwMDAwJywgc2Vjb25kQ29sb3I6ICcjZmYwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxufSIsImltcG9ydCB7IFN0YXZlIH0gZnJvbSBcIkAvY29yZS9zdGF2ZVwiO1xuZXhwb3J0IHsgU3RhdmUgfSBmcm9tIFwiQC9jb3JlL3N0YXZlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5JbmZvIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0eXBlOiAnYWN0aW9uJyB8ICd2YWx1ZSc7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuQ2F0ZWdvcnkge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdG9rZW5zOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdFN0eWxlIHtcbiAgICBmaXJzdENvbG9yOiBzdHJpbmcsXG4gICAgc2Vjb25kQ29sb3I6IHN0cmluZyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbiAgICBzdHJva2VTaXplOiBudW1iZXIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdCB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHN0YXZlczogU3RhdmVbXSxcbiAgICBpdGVyYXRpb25zOiBudW1iZXIsXG4gICAgc3R5bGU6IFByb2plY3RTdHlsZSxcbiAgICBjcmVhdGVkOiBEYXRlLFxuICAgIHVwZGF0ZWQ6IERhdGUsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXB0eVByb2plY3QoKTogUHJvamVjdCB7XG4gICAgY29uc3QgZGF0ZSA9IChuZXcgRGF0ZSgpKS50b0RhdGVTdHJpbmcoKTtcbiAgICBjb25zdCB0aXRsZSA9IGBORVcgJHtkYXRlfWA7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRpdGxlLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHN0YXZlczogW1xuICAgICAgICAgICAge1wibmFtZVwiOiBcIkZcIiwgdG9rZW5zOiBbXX0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmaXJzdENvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgIHNlY29uZENvbG9yOiBcIiNGRjAwMDBcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgICBzdHJva2VTaXplOiAxLjAsXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZXJhdGlvbnM6IDMsXG4gICAgfVxufSIsImltcG9ydCB7IFRva2Vuc0tleSB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IFRva2VuSW5mbyB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5TOiBUb2tlbkluZm9bXSA9IFtcbiAgICB7bmFtZTogJ0FSR1VNRU5UJywgbGFiZWw6ICdBcmd1bWVudCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ0FMTF9ESUFNT05EJywgbGFiZWw6ICdEaWFtb25kJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDQUxMX0lOVl9UUklBTkdMRScsIGxhYmVsOiAnSW52ZXJzZSB0cmlhbmdsZScsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDQUxMX0YnLCBsYWJlbDogJ0YgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0cnLCBsYWJlbDogJ0cgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDQUxMX0gnLCBsYWJlbDogJ0ggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfRicsIGxhYmVsOiAnRiBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfRycsIGxhYmVsOiAnRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NMT1NFX0NBTExfSCcsIGxhYmVsOiAnSCBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19MSU5FJywgbGFiZWw6ICdMaW5lJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdEUkFXX0NJUkNMRScsIGxhYmVsOiAnQ2lyY2xlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19TUVVBUkUnLCBsYWJlbDogJ1NxdWFyZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfVFJJQU5HTEUnLCBsYWJlbDogJ1RyaWFuZ2xlJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8zXzQnLCBsYWJlbDogJ0FyYyAzLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzJfMycsIGxhYmVsOiAnQXJjIDIvMyAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8yJywgbGFiZWw6ICdBcmMgMS8yIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzMnLCBsYWJlbDogJ0FyYyAxLzMgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfNCcsIGxhYmVsOiAnQXJjIDEvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV81JywgbGFiZWw6ICdBcmMgMS81IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8zXzQnLCBsYWJlbDogJ0FyYyAzLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMl8zJywgbGFiZWw6ICdBcmMgMi8zIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfMicsIGxhYmVsOiAnQXJjIDEvMiAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzMnLCBsYWJlbDogJ0FyYyAxLzMgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV80JywgbGFiZWw6ICdBcmMgMS80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNScsIGxhYmVsOiAnQXJjIDEvNSAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ01PVkVfRk9SV0FSRCcsIGxhYmVsOiAnTW92ZSBmb3J3YXJkJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnTU9WRV9CQUNLV0FSRCcsIGxhYmVsOiAnTW92ZSBiYWNrd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfTEVGVCcsIGxhYmVsOiAnTW92ZSBsZWZ0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnTU9WRV9SSUdIVCcsIGxhYmVsOiAnTW92ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JPVEFURV9MRUZUJywgbGFiZWw6ICdSb3RhdGUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JPVEFURV9SSUdIVCcsIGxhYmVsOiAnUm90YXRlIHJpZ2h0JywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdSRVZFUlNFJywgbGFiZWw6ICdSZXZlcnNlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZJywgbGFiZWw6ICdSZXBsYXkgdGhlIGxhc3QgYWN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZXzInLCBsYWJlbDogJ1JlcGxheSB0aGUgdHdvIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV8zJywgbGFiZWw6ICdSZXBsYXkgdGhlIHRocmVlIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV80JywgbGFiZWw6ICdSZXBsYXkgdGhlIGZvdXIgbGFzdCBhY3Rpb25zJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdDT1VOVF8xJywgbGFiZWw6ICdPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzInLCBsYWJlbDogJ1R3bycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfMycsIGxhYmVsOiAnVGhyZWUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzUnLCBsYWJlbDogJ0ZpdmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzcnLCBsYWJlbDogJ1NldmVuJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0NPVU5UX01JTlVTJywgbGFiZWw6ICdNaW51cyBPbmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX0dPTEQnLCBsYWJlbDogJ0dvbGRlbiBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfU0lMVkVSJywgbGFiZWw6ICdTaWx2ZXIgUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX0JST05aRScsIGxhYmVsOiAnQnJvbnplIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9QTEFTVElDJywgbGFiZWw6ICdQbGFzdGljIE51bWJlcicsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdGUkFDVF8xXzInLCBsYWJlbDogJ0hhbGYnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfMycsIGxhYmVsOiAnT25lIFRoaXJkJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8yXzMnLCBsYWJlbDogJ1R3byBUaGlyZHMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfNCcsIGxhYmVsOiAnT25lIFF1YXJ0ZXInLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzNfNCcsIGxhYmVsOiAnVGhyZWUgcXVhcnRlcnMnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzFfNScsIGxhYmVsOiAnT25lIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8yXzUnLCBsYWJlbDogJ1R3byBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfM181JywgbGFiZWw6ICdUaHJlZSBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfNF81JywgbGFiZWw6ICdGb3VyIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0FOR0xFXzI3MCcsIGxhYmVsOiAnMjcwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzE4MCcsIGxhYmVsOiAnMTgwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzkwJywgbGFiZWw6ICc5MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV82MCcsIGxhYmVsOiAnNjDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfNDUnLCBsYWJlbDogJzQ1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzMwJywgbGFiZWw6ICczMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xNScsIGxhYmVsOiAnMTXCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTAnLCBsYWJlbDogJzEwwrAnLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnT1BfTVVMVCcsIGxhYmVsOiAnTXVsdGlwbGUgb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ09QX0FERCcsIGxhYmVsOiAnQWRkaXRpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ09QX1NVQicsIGxhYmVsOiAnU3VidHJhY3Rpb24gb3BlcmF0b3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX01BWCcsIGxhYmVsOiAnU2Vjb25kIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9NSU4nLCBsYWJlbDogJ0ZpcnN0IENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9GSUxMJywgbGFiZWw6ICdGaWxsZWQgRmlndXJlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9FTVBUWScsIGxhYmVsOiAnVHJhbnNwYXJlbnQgRmlndXJlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzInLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV80JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNScsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzEwJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ1NUUk9LRV9USElDS19BREQnLCBsYWJlbDogJ1RoaWNrIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnU1RST0tFX1RISUNLX1NVQicsIGxhYmVsOiAnVGhpbiBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbl07XG5cbmV4cG9ydCBjb25zdCBOQU1FX1RPX1RPS0VOID0gbmV3IE1hcDxzdHJpbmcsIFRva2VuSW5mbz4oXG4gICAgVE9LRU5TLm1hcCh0b2tlbiA9PiBbdG9rZW4ubmFtZSwgdG9rZW5dKVxuKTtcbiIsImltcG9ydCB7IFRva2VuQ2F0ZWdvcnkgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOX0ZBTUlMSUVTOiB7IFtrZXk6IHN0cmluZ106IFRva2VuQ2F0ZWdvcnlbXSB9ID0ge1xuICAgIEFSR1VNRU5UOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQXJndW1lbnRzJyxcbiAgICAgICAgICAgIHRva2VuczogWydBUkdVTUVOVCcsICdDQUxMX0RJQU1PTkQnLCAnQ0FMTF9JTlZfVFJJQU5HTEUnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIENBTEw6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDYWxsZXJzJyxcbiAgICAgICAgICAgIHRva2VuczogWydDQUxMX0YnLCAnQ0FMTF9HJywgJ0NBTExfSCddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0Nsb3NlIENhbGxlcnMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ0NMT1NFX0NBTExfRicsICdDTE9TRV9DQUxMX0cnLCAnQ0xPU0VfQ0FMTF9IJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBEUkFXX1NIQVBFOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2hhcGVzJyxcbiAgICAgICAgICAgIHRva2VuczogWydEUkFXX0NJUkNMRScsICdEUkFXX1NRVUFSRScsICdEUkFXX1RSSUFOR0xFJ10sXG4gICAgICAgIH1cbiAgICBdLFxuICAgIERSQVdfTElORTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0xpbmUnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ0RSQVdfTElORSddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0xlZnQgQXJjJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8zXzQnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8yXzMnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzInLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzMnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzQnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzUnLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1JpZ2h0IEFyYycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfM180JyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMl8zJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV8yJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV8zJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV80JyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV81JyxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICBdLFxuICAgIE1PVkU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3ZlcycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnTU9WRV9GT1JXQVJEJywgJ01PVkVfQkFDS1dBUkQnLCAnTU9WRV9MRUZUJywgJ01PVkVfUklHSFQnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFJPVEFURTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1JvdGF0ZXMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ1JPVEFURV9MRUZUJywgJ1JPVEFURV9SSUdIVCddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgUkVQTEFZOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmVwbGF5cycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnUkVQTEFZJywgJ1JFUExBWV8yJywgJ1JFUExBWV8zJywgJ1JFUExBWV80J10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBWQUxVRTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvdW50ZXJzJyxcbiAgICAgICAgICAgIHRva2VuczogWydDT1VOVF8xJywgJ0NPVU5UXzInLCAnQ09VTlRfMycsICdDT1VOVF81JywgJ0NPVU5UXzcnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQ09VTlRfTUlOVVMnLFxuICAgICAgICAgICAgICAgICdDT1VOVF9HT0xEJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfU0lMVkVSJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfQlJPTlpFJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfUExBU1RJQycsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV8yJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV8zJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMl8zJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV80JyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfM180JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRnJhY3Rpb25zJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdGUkFDVF8xXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF8yXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF8zXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF80XzUnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIEFOR0xFOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdBTkdMRV8yNzAnLFxuICAgICAgICAgICAgICAgICdBTkdMRV8xODAnLFxuICAgICAgICAgICAgICAgICdBTkdMRV85MCcsXG4gICAgICAgICAgICAgICAgJ0FOR0xFXzYwJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdBTkdMRV80NScsXG4gICAgICAgICAgICAgICAgJ0FOR0xFXzMwJyxcbiAgICAgICAgICAgICAgICAnQU5HTEVfMTUnLFxuICAgICAgICAgICAgICAgICdBTkdMRV8xMCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgT1A6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdPUCcsXG4gICAgICAgICAgICB0b2tlbnM6IFsnT1BfTVVMVCcsICdPUF9BREQnLCAnT1BfU1VCJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBTVFJPS0VfQ09MT1I6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdUaGljay9UaGluJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdTVFJPS0VfVEhJQ0tfQUREJyxcbiAgICAgICAgICAgICAgICAnU1RST0tFX1RISUNLX1NVQicsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvbG9yJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdDT0xPUl9NQVgnLFxuICAgICAgICAgICAgICAgICdDT0xPUl9NSU4nLFxuICAgICAgICAgICAgICAgICdDT0xPUl9GSUxMJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfRU1QVFknLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb2xvciBTaGlmdCcsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV8yJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV80JyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV81JyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV8xMCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5leHBvcnQgY29uc3QgTkFNRV9UT19GQU1JTFkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihcbiAgICBPYmplY3QuZW50cmllcyhUT0tFTl9GQU1JTElFUylcbiAgICAgICAgLm1hcCgoW25hbWUsIGNhdGVnb3JpZXNdKSA9PiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS50b2tlbnMubWFwKHRva2VuID0+IFt0b2tlbiwgbmFtZV0pKSlcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAuZmxhdCgpIGFzIFtzdHJpbmcsIHN0cmluZ11bXVxuKTtcbiIsImltcG9ydCB7IFRva2VuQ2F0ZWdvcnkgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9UT0tFTlM6IFRva2VuQ2F0ZWdvcnlbXSA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnVuY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQVJHVU1FTlQnLFxuICAgICAgICAgICAgJ0NBTExfRElBTU9ORCcsXG4gICAgICAgICAgICAnQ0FMTF9GJyxcbiAgICAgICAgICAgICdDQUxMX0cnLFxuICAgICAgICAgICAgJ0NBTExfSCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGFpbnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdEUkFXX0xJTkUnLFxuICAgICAgICAgICAgJ0RSQVdfVFJJQU5HTEUnLFxuICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfMicsXG4gICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV8yJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXJzb3InLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdNT1ZFX0ZPUldBUkQnLFxuICAgICAgICAgICAgJ1JPVEFURV9MRUZUJyxcbiAgICAgICAgICAgICdST1RBVEVfUklHSFQnLFxuICAgICAgICAgICAgJ1JFVkVSU0UnLFxuICAgICAgICAgICAgJ1JFUExBWScsXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBWQUxVRV9UT0tFTlM6IFRva2VuQ2F0ZWdvcnlbXSA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ291bnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdDT1VOVF8yJyxcbiAgICAgICAgICAgICdDT1VOVF8zJyxcbiAgICAgICAgICAgICdDT1VOVF81JyxcbiAgICAgICAgICAgICdDT1VOVF9NSU5VUycsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnJhY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnRlJBQ1RfMV8yJyxcbiAgICAgICAgICAgICdGUkFDVF8xXzMnLFxuICAgICAgICAgICAgJ0ZSQUNUXzFfNCcsXG4gICAgICAgICAgICAnRlJBQ1RfMV81JyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBbmdsZXMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdBTkdMRV8xODAnLFxuICAgICAgICAgICAgJ0FOR0xFXzkwJyxcbiAgICAgICAgICAgICdBTkdMRV82MCcsXG4gICAgICAgICAgICAnQU5HTEVfNDUnLFxuICAgICAgICAgICAgJ0FOR0xFXzMwJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb2xvcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdDT0xPUl9GSUxMJyxcbiAgICAgICAgICAgICdDT0xPUl9FTVBUWScsXG4gICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV8yJyxcbiAgICAgICAgICAgICdDT0xPUl9TSElGVF8xXzQnLFxuICAgICAgICAgICAgJ0NPTE9SX01BWCcsXG4gICAgICAgICAgICAnQ09MT1JfTUlOJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdTdHJva2VzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnU1RST0tFX1RISUNLX0FERCcsXG4gICAgICAgICAgICAnU1RST0tFX1RISUNLX1NVQicsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnTW9kaWZpY2F0b3JzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnT1BfTVVMVCcsXG4gICAgICAgICAgICAnT1BfQUREJyxcbiAgICAgICAgICAgICdPUF9TVUInLFxuICAgICAgICBdLFxuICAgIH0sXG5dOyIsImltcG9ydCB7IGNyZWF0ZUVtcHR5UHJvamVjdCwgUHJvamVjdCB9IGZyb20gXCJAL3dlYi9tb2RlbHNcIjtcbmltcG9ydCB7IGRlY29kZVN0YXZlcywgZW5jb2RlU3RhdmVzIH0gZnJvbSBcIkAvY29yZS9zaG9ydGN1dHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVByb2plY3RUb1VybFBhcmFtcyhwcm9qZWN0OiBQcm9qZWN0KTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgZW5jb2RlU3RhdmVzKHByb2plY3Quc3RhdmVzKVxuICAgICAgICAuZm9yRWFjaCgoW25hbWUsIHRva2Vuc10pID0+IHtcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQobmFtZSwgdG9rZW5zKTtcbiAgICAgICAgfSk7XG5cbiAgICBwYXJhbXMuYXBwZW5kKFwielwiLCBcInpcIik7XG4gICAgcGFyYW1zLmFwcGVuZChcInRcIiwgcHJvamVjdC50aXRsZSk7XG4gICAgcGFyYW1zLmFwcGVuZChcImlcIiwgcHJvamVjdC5pdGVyYXRpb25zLnRvRml4ZWQoKSk7XG4gICAgcGFyYW1zLmFwcGVuZChcImMxXCIsIHByb2plY3Quc3R5bGUuZmlyc3RDb2xvcik7XG4gICAgcGFyYW1zLmFwcGVuZChcImMyXCIsIHByb2plY3Quc3R5bGUuc2Vjb25kQ29sb3IpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJiXCIsIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yKTtcbiAgICBwYXJhbXMuYXBwZW5kKFwic1wiLCBwcm9qZWN0LnN0eWxlLnN0cm9rZVNpemUudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVByb2plY3RGcm9tVXJsUGFyYW1zKHBhcmFtczogVVJMU2VhcmNoUGFyYW1zKTogUHJvamVjdCB7XG4gICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUVtcHR5UHJvamVjdCgpO1xuICAgIHByb2plY3Quc3RhdmVzID0gZGVjb2RlU3RhdmVzKHBhcmFtcy5lbnRyaWVzKCkpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBwYXJhbXMuZ2V0KFwidFwiKTtcbiAgICBjb25zdCBpdGVyYXRpb25zID0gcGFyYW1zLmdldChcImlcIik7XG4gICAgY29uc3QgZmlyc3RDb2xvciA9IHBhcmFtcy5nZXQoXCJjMVwiKTtcbiAgICBjb25zdCBzZWNvbmRDb2xvciA9IHBhcmFtcy5nZXQoXCJjMlwiKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuZ2V0KFwiYlwiKTtcbiAgICBjb25zdCBzdHJva2VTaXplID0gcGFyYW1zLmdldChcInNcIik7XG5cbiAgICBpZiAodGl0bGUgIT09IG51bGwpIHtcbiAgICAgICAgcHJvamVjdC5pZCA9IHRpdGxlO1xuICAgICAgICBwcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIGlmIChpdGVyYXRpb25zICE9PSBudWxsKSBwcm9qZWN0Lml0ZXJhdGlvbnMgPSBOdW1iZXIucGFyc2VJbnQoaXRlcmF0aW9ucyk7XG4gICAgaWYgKGZpcnN0Q29sb3IgIT09IG51bGwpIHByb2plY3Quc3R5bGUuZmlyc3RDb2xvciA9IGZpcnN0Q29sb3I7XG4gICAgaWYgKHNlY29uZENvbG9yICE9PSBudWxsKSBwcm9qZWN0LnN0eWxlLnNlY29uZENvbG9yID0gc2Vjb25kQ29sb3I7XG4gICAgaWYgKGJhY2tncm91bmRDb2xvciAhPT0gbnVsbCkgcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gICAgaWYgKHN0cm9rZVNpemUgIT09IG51bGwpIHByb2plY3Quc3R5bGUuc3Ryb2tlU2l6ZSA9IE51bWJlci5wYXJzZUludChzdHJva2VTaXplKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufSIsImltcG9ydCB7IFRva2Vuc1ZpZXcgfSBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IHsgQ2FsbGJhY2tzIH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuaW1wb3J0IHsgVG9rZW5DYXRlZ29yeSB9IGZyb20gXCJAL3dlYi9tb2RlbHNcIjtcbmltcG9ydCB7IE5BTUVfVE9fVE9LRU4gfSBmcm9tIFwiQC93ZWIvdG9rZW5zXCI7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFRva2Vuc0NhdGVnb3J5VmlldyBleHRlbmRzIFRva2Vuc1ZpZXcge1xuICAgIHByb3RlY3RlZCBjYXRlZ29yaWVzOiBUb2tlbkNhdGVnb3J5W107XG5cbiAgICBjb25zdHJ1Y3Rvcih7bm9kZSwgY2F0ZWdvcmllcywgY2FsbGJhY2tzLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTH06IHtcbiAgICAgICAgbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgICAgIGNhdGVnb3JpZXM6IFRva2VuQ2F0ZWdvcnlbXSxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3MsXG4gICAgICAgIGljb25Vcmw/OiBzdHJpbmcsXG4gICAgfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5Tm9kZSA9IHRoaXMuY3JlYXRlQ2F0ZWdvcnlOb2RlKGNhdGVnb3J5KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2F0ZWdvcnlOb2RlKGNhdGVnb3J5OiBUb2tlbkNhdGVnb3J5KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZyYWN0LXRva2VucycsICdoaWRlJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGVOYW1lID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnZ3JvdXAtbGFiZWwnXSxcbiAgICAgICAgICAgIHRleHQ6IGNhdGVnb3J5LmxhYmVsLFxuICAgICAgICB9KTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgY2F0ZWdvcnlOb2RlLmFwcGVuZENoaWxkKGNhdGVnb3J5Tm9kZU5hbWUpO1xuXG4gICAgICAgIGNhdGVnb3J5LnRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgICAgIGlmICh0b2tlbkluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuTm9kZSh0b2tlbkluZm8ubmFtZSkpO1xuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnbGFiZWwnXSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0b2tlbkluZm8ubGFiZWwsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjYXRlZ29yeU5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IFRPS0VOX0ZBTUlMSUVTLCBOQU1FX1RPX0ZBTUlMWSB9IGZyb20gXCJAL3dlYi90b2tlbnNGYW1pbHlcIjtcbmltcG9ydCB7IE5BTUVfVE9fVE9LRU4gfSBmcm9tIFwiQC93ZWIvdG9rZW5zXCJcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tIFwiQC93ZWIvY29uc3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25TZWxlY3RBcmdzIHtcbiAgICB0b2tlbjogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHN1ZmZpeDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIENob29zZVRva2VuRGlhbG9nVmlldyBleHRlbmRzIFZpZXc8SFRNTERpYWxvZ0VsZW1lbnQ+IHtcbiAgICAjYXJnczogT25TZWxlY3RBcmdzO1xuICAgICNpY29uVXJsOiBzdHJpbmc7XG4gICAgI29uU2VsZWN0OiAob2JqOiBhbnkpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dOb2RlOiBIVE1MRGlhbG9nRWxlbWVudCwgdG9rZW5Ob2RlOiBIVE1MRWxlbWVudCwgb25TZWxlY3Q6IChvYmo6IGFueSkgPT4gdm9pZCwgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwpIHtcbiAgICAgICAgc3VwZXIoZGlhbG9nTm9kZSk7XG4gICAgICAgIHRoaXMuI2FyZ3MgPSB7XG4gICAgICAgICAgICB0b2tlbjogdG9rZW5Ob2RlLmRhdGFzZXQudG9rZW4sXG4gICAgICAgICAgICBpbmRleDogcGFyc2VJbnQodG9rZW5Ob2RlLmRhdGFzZXQuaW5kZXgpLFxuICAgICAgICAgICAgbmFtZTogdG9rZW5Ob2RlLmRhdGFzZXQubmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogdG9rZW5Ob2RlLmRhdGFzZXQuc3VmZml4LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLiNpY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy4jb25TZWxlY3QgPSBvblNlbGVjdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwiY2hvb3NlLXRva2VuLWRpYWxvZ1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGNvbnN0IGZhbWlseU5hbWUgPSBOQU1FX1RPX0ZBTUlMWS5nZXQodGhpcy4jYXJncy50b2tlbik7XG4gICAgICAgIGNvbnN0IGZhbWlseSA9IFRPS0VOX0ZBTUlMSUVTW2ZhbWlseU5hbWVdIHx8IFtdO1xuICAgICAgICBpZiAoZmFtaWx5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnRleHRDb250ZW50ID0gJ05vIGZhbWlseSA6KCc7XG4gICAgICAgIH0gXG5cbiAgICAgICAgZmFtaWx5LmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGl2JyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2NhdGVnb3J5J10sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlMYWJlbE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgdGV4dDogY2F0ZWdvcnkubGFiZWwsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmFwcGVuZENoaWxkKGNhdGVnb3J5TGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgY2F0ZWdvcnkudG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW5JbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbldpdGhMYWJlbE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydkaWFsb2ctdG9rZW4nXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydmcmFjdC10b2tlbiddLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRva2VuTm9kZS5kYXRhc2V0LnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgdG9rZW5Ob2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLiNpY29uVXJsfS8ke3Rva2VufS5zdmcpYDtcbiAgICAgICAgICAgICAgICB0b2tlbk5vZGUuc3R5bGUud2lkdGggPSBgNDhweGA7XG4gICAgICAgICAgICAgICAgdG9rZW5Ob2RlLnN0eWxlLmhlaWdodCA9IGA0OHB4YDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydsYWJlbCddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0b2tlbkluZm8ubGFiZWwsXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRva2VuV2l0aExhYmVsTm9kZS5hcHBlbmRDaGlsZCh0b2tlbk5vZGUpO1xuICAgICAgICAgICAgICAgIHRva2VuV2l0aExhYmVsTm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgICAgIHRva2VuV2l0aExhYmVsTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMsIHRva2VuKSk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOb2RlLmFwcGVuZENoaWxkKHRva2VuV2l0aExhYmVsTm9kZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNhdGVnb3J5Tm9kZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubm9kZS5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKHRva2VuOiBzdHJpbmcsIGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHRoaXMuI29uU2VsZWN0KHsuLi50aGlzLiNhcmdzLCB0b2tlbn0pO1xuICAgICAgICB0aGlzLm5vZGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBTdGF2ZVZpZXcgfSBmcm9tICcuL3N0YXZlJztcbmltcG9ydCB7IENhbGxiYWNrcyB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmltcG9ydCB7IFN0YXZlIH0gZnJvbSAnQC93ZWIvbW9kZWxzJztcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgQ29kZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIHN0YXZlVmlld3M6IFN0YXZlVmlld1tdO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3Rvcih7bm9kZSwgY2FsbGJhY2tzLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTH06IHtcbiAgICAgICAgbm9kZTogSFRNTEVsZW1lbnQsXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cyA9IFtdO1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICByZW5kZXIoc3RhdmVzOiBTdGF2ZVtdKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdGF2ZVZpZXdzID0gc3RhdmVzLm1hcCh0aGlzLmNyZWF0ZVN0YXZlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGZpbmRTdGF2ZShuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogU3RhdmVWaWV3IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdmVWaWV3cy5maW5kKHZpZXcgPT4gdmlldy5jaGVja05hbWUobmFtZSwgc3VmZml4KSk7XG4gICAgfVxuXG4gICAgYWRkU3RhdmUocGFyYW1zOiB7IG5hbWU6IHN0cmluZzsgc3VmZml4OiBzdHJpbmc7IHRva2Vuczogc3RyaW5nW10gfSkge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5jcmVhdGVTdGF2ZSh7XG4gICAgICAgICAgICBuYW1lOiBwYXJhbXMubmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogcGFyYW1zLnN1ZmZpeCxcbiAgICAgICAgICAgIHRva2VuczogcGFyYW1zLnRva2VucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cy5wdXNoKHZpZXcpO1xuICAgIH1cblxuICAgIHNjcmFwZUNvZGUoKTogU3RhdmVbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXZlVmlld3MuZmlsdGVyKHZpZXcgPT4gdmlldy5jb3VsZEJlU2NyYXBlZCgpKS5tYXAodmlldyA9PiB2aWV3LnNjcmFwZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3RhdmUoeyBuYW1lLCBzdWZmaXgsIHRva2VucyB9KTogU3RhdmVWaWV3IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgU3RhdmVWaWV3KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VmZml4OiBzdWZmaXggfHwgXCJcIixcbiAgICAgICAgICAgIGljb25Vcmw6IHRoaXMuaWNvblVybCxcbiAgICAgICAgICAgIGNhbGxiYWNrczogdGhpcy5jYWxsYmFja3MsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdHlsZSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5cbnR5cGUgT25VcGRhdGVDYiA9IChpdGVyYXRpb25zOiBudW1iZXIsIHN0eWxlOiBQcm9qZWN0U3R5bGUpID0+IHZvaWQ7XG50eXBlIENiID0gKCkgPT4gdm9pZDtcbmludGVyZmFjZSBDYWxsYmFja3Mge1xuICAgIG9uVXBkYXRlOiBPblVwZGF0ZUNiLFxuICAgIG9uRGVidWdTdGFydDogQ2IsXG4gICAgb25Mb2FkOiBDYixcbiAgICBvblNhdmU6IENiLFxuICAgIG9uTmV3OiBDYixcbiAgICBvbkhlbHA6IENiLFxuICAgIG9uRGVidWdTdGVwOiBDYixcbiAgICBvbkRlYnVnUGxheTogQ2IsXG4gICAgb25EZWJ1Z1N0b3A6IENiLFxuICAgIG9uRGVidWdFeGl0OiBDYixcbn07XG5cbmV4cG9ydCBjbGFzcyBDb2RlQmFyVmlldyBleHRlbmRzIFZpZXcge1xuICAgICNjYWxsYmFja3M6IENhbGxiYWNrcztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxFbGVtZW50LCBjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHJlbmRlcihwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJpdGVyYXRpb25zXCI7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaW5uZXJIVE1MID0gXCJJdGVyYXRpb25zOiZuYnNwO1wiO1xuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJpdGVyYXRpb25zXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHByb2plY3QuaXRlcmF0aW9ucy50b0ZpeGVkKCk7XG4gICAgICAgICAgICBub2RlLm1pbiA9IFwiMVwiO1xuICAgICAgICAgICAgbm9kZS5tYXggPSBcIjMwXCI7XG4gICAgICAgICAgICBub2RlLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJmaXJzdC1jb2xvclwiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVySFRNTCA9IFwiRmlyc3QgY29sb3I6Jm5ic3A7XCI7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcImZpcnN0LWNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gcHJvamVjdC5zdHlsZS5maXJzdENvbG9yIHx8IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgbm9kZS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwic2Vjb25kLWNvbG9yXCI7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaW5uZXJIVE1MID0gXCJTZWNvbmQgY29sb3I6Jm5ic3A7XCI7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcInNlY29uZC1jb2xvclwiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHByb2plY3Quc3R5bGUuc2Vjb25kQ29sb3IgfHwgXCIjRkYwMDAwXCI7XG4gICAgICAgICAgICBub2RlLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJiYWNrZ3JvdW5kLWNvbG9yXCI7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaW5uZXJIVE1MID0gXCJCYWNrcm91bmQgY29sb3I6Jm5ic3A7XCI7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcImJhY2tncm91bmQtY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciB8fCBcIiNGRkZGRkZcIjtcbiAgICAgICAgICAgIG5vZGUub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcInN0cm9rZS1zaXplXCI7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaW5uZXJIVE1MID0gXCJTdHJva2Ugc2l6ZTombmJzcDtcIjtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwic3Ryb2tlLXNpemVcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gKHByb2plY3Quc3R5bGUuc3Ryb2tlU2l6ZSB8fCAxKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgbm9kZS5taW4gPSBcIjAuNVwiO1xuICAgICAgICAgICAgbm9kZS5tYXggPSBcIjNcIjtcbiAgICAgICAgICAgIG5vZGUuc3RlcCA9IFwiMC4yNVwiO1xuICAgICAgICAgICAgbm9kZS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2hvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIsIGNsYXNzZXM6IFtcImhpZGRlblwiXSB9KTtcbiAgICAgICAgICAgIHNob3dOb2RlLnZhbHVlID0gXCJTSE9XXCI7XG4gICAgICAgICAgICBzaG93Tm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIHNob3dOb2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2hvd05vZGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBoaWRlTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZS1wYW5lbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBoaWRlTm9kZS52YWx1ZSA9IFwiSElERVwiO1xuICAgICAgICAgICAgaGlkZU5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBoaWRlTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGhpZGVOb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgc2hvd05vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUtcGFuZWxcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHNob3dOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChoaWRlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiB9KTtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBcIkxPQURcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uTG9hZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiBcImlucHV0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgdGV4dDogXCJTQVZFIC8gU0hBUkVcIixcbiAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHRoaXMuI2NhbGxiYWNrcy5vblNhdmUoKSxcbiAgICAgICAgfSkpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiIH0pO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IFwiTkVXXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbk5ldygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiB9KTtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBcIkhFTFBcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uSGVscCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiB9KTtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwiZGVidWctc3RhcnRcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIkRFQlVHXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgYnRuTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkRlYnVnU3RhcnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIsIGNsYXNzZXM6IFtcImhpZGRlblwiXSB9KTtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwiZGVidWctc3RlcFwiO1xuICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiU1RFUFwiO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25EZWJ1Z1N0ZXAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIsIGNsYXNzZXM6IFtcImhpZGRlblwiXSB9KTtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwiZGVidWctcGxheVwiO1xuICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiUExBWVwiO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25EZWJ1Z1BsYXkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIsIGNsYXNzZXM6IFtcImhpZGRlblwiXSB9KTtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwiZGVidWctc3RvcFwiO1xuICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiU1RPUFwiO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25EZWJ1Z1N0b3AoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIsIGNsYXNzZXM6IFtcImhpZGRlblwiXSB9KTtcbiAgICAgICAgICAgIGJ0bk5vZGUubmFtZSA9IFwiZGVidWctZXhpdFwiO1xuICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiRVhJVFwiO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25EZWJ1Z0V4aXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGJ0bk5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3R5bGUoKTogUHJvamVjdFN0eWxlIHtcbiAgICAgICAgY29uc3QgZ2V0VmFsdWUgPSAobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHtuYW1lfVwiXWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICByZXR1cm4gbm9kZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogbm9kZS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdENvbG9yOiBnZXRWYWx1ZShcImZpcnN0LWNvbG9yXCIsIFwiYmxhY2tcIiksXG4gICAgICAgICAgICBzZWNvbmRDb2xvcjogZ2V0VmFsdWUoXCJzZWNvbmQtY29sb3JcIiwgXCJyZWRcIiksXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldFZhbHVlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpLFxuICAgICAgICAgICAgc3Ryb2tlU2l6ZTogcGFyc2VGbG9hdChnZXRWYWx1ZShcInN0cm9rZS1zaXplXCIsIFwiMVwiKSksXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZWJ1Z01vZGUoKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdGFydCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RlcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctcGxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctZXhpdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHVuc2V0RGVidWdNb2RlKCkge1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RhcnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0ZXAnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXBsYXknKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0b3AnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLWV4aXQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2hhbmdlKCkge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpdGVyYXRpb25zXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IG5vZGUgPT09IHVuZGVmaW5lZCA/IDMgOiBwYXJzZUludChub2RlLnZhbHVlKTtcblxuICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25VcGRhdGUoaXRlcmF0aW9ucywgdGhpcy5nZXRTdHlsZSgpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRJbnB1dChuYW1lOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcbmltcG9ydCB7IFNUQVZFUywgU1VGRklYRVMgfSBmcm9tICdAL2NvcmUvbWFwcGluZ3MnO1xuXG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbnNCYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvblNlbGVjdDogKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcih7bm9kZSwgb25TZWxlY3QsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5vblNlbGVjdCA9IG9uU2VsZWN0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgU1RBVkVTLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVCYXJPZkZ1bmN0aW9uc05vZGUobmFtZSkpO1xuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJhck9mRnVuY3Rpb25zTm9kZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwibGlcIiwgY2xhc3NlczogW1wiZHJvcGRvd25cIl0gfSk7XG4gICAgICAgIGNvbnN0IGJhc2VGdW5jTm9kZSA9IHRoaXMuY3JlYXRlQWRkRnVuY3Rpb25Ob2RlKFwic3BhblwiLCBuYW1lKTtcbiAgICAgICAgY29uc3QgYmFyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWUgOiBcInVsXCIsIGNsYXNzZXM6IFtcImRyb3Bkb3duLWNvbnRlbnRcIl0gfSk7XG4gICAgICAgIGJhck5vZGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgICAgIFNVRkZJWEVTLmZvckVhY2goc3VmZml4ID0+IHtcbiAgICAgICAgICAgIGJhck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVBZGRGdW5jdGlvbk5vZGUoXCJsaVwiLCBuYW1lLCBzdWZmaXgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYmFzZUZ1bmNOb2RlKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChiYXJOb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBZGRGdW5jdGlvbk5vZGUodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nID0gXCJcIikgOiBOb2RlIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGNvbnN0IHJlYWxOYW1lID0gc3VmZml4ID8gYFNVRkZJWF8ke3N1ZmZpeH1gIDogYENBTExfJHtuYW1lfWA7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaWNvblVybH0vJHtyZWFsTmFtZX0uc3ZnKWA7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcInRva2VuLWJ0blwiKTtcbiAgICAgICAgbm9kZS5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gc3VmZml4O1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7bmFtZSwgc3VmZml4fSA9IG5vZGUuZGF0YXNldDtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3QobmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgY2xhc3MgSGVscERpYWxvZ1ZpZXcgZXh0ZW5kcyBWaWV3PEhUTUxEaWFsb2dFbGVtZW50PiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWxwLWRpYWxvZ1wiKSBhcyBIVE1MRGlhbG9nRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNob3dNb2RhbCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiQC9jb3JlL3N2Z1wiO1xuaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcgZXh0ZW5kcyBWaWV3IHtcblxuICAgIHJlbmRlcihjdXJzb3I6IElDdXJzb3IsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCJub25lXCI7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcblxuaW50ZXJmYWNlIENhbGxiYWNrcyB7XG4gICAgb25Mb2FkOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZFxuICAgIG9uUmVtb3ZlOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3REaWFsb2dWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgI2RiOiBEYXRhYmFzZTtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dOb2RlOiBIVE1MRWxlbWVudCwgZGI6IERhdGFiYXNlLCBjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICBzdXBlcihkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy4jZGIgPSBkYjtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2gxJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9hZCBwcm9qZWN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGhlYWRlck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3Byb2plY3RzJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQm9keU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAndGJvZHknIH0pO1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ3RoZWFkJyB9KTtcblxuICAgICAgICAgICAgdGhpcy4jZGIubGlzdChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dOb2RlID0gdGhpcy4jcmVuZGVyUm93KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keU5vZGUuYXBwZW5kQ2hpbGQocm93Tm9kZSk7XG4gICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgIHRhYmxlSGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJIZWFkZXJSb3coKSk7XG4gICAgICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJOb2RlKTtcbiAgICAgICAgICAgIHRhYmxlTm9kZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHlOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY2xvc2VOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ2lucHV0JyB9KVxuICAgICAgICAgICAgY2xvc2VOb2RlLnZhbHVlID0gJ0NMT1NFJztcbiAgICAgICAgICAgIGNsb3NlTm9kZS50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICBjbG9zZU5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjbG9zZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtZGlhbG9nXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLiNvbkNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICAjb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgICNyZW5kZXJIZWFkZXJSb3coKTogSFRNTFRhYmxlUm93RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93SGVhZGVyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICd0cicgfSk7XG4gICAgICAgIHRhYmxlUm93SGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgIHRleHQ6ICdUaXRsZScsXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGFibGVSb3dIZWFkZXJOb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAndGgnLFxuICAgICAgICAgICAgdGV4dDogJ0NyZWF0ZWQnLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRhYmxlUm93SGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgIHRleHQ6ICdVcGRhdGVkJyxcbiAgICAgICAgfSkpO1xuICAgICAgICB0YWJsZVJvd0hlYWRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICd0aCcsXG4gICAgICAgICAgICB0ZXh0OiAnQWN0aW9ucycsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRhYmxlUm93SGVhZGVyTm9kZTtcbiAgICB9XG5cbiAgICAjcmVuZGVyUm93KHByb2plY3Q6IFByb2plY3QpOiBIVE1MVGFibGVSb3dFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgcm93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICd0cicgfSk7XG4gICAgICAgIHJvd05vZGUuZGF0YXNldC50aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVSb3dOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGgnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHByb2plY3QudGl0bGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQodGl0bGVSb3dOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUm93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RkJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBwcm9qZWN0LnVwZGF0ZWQudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm93Tm9kZS5hcHBlbmRDaGlsZCh1cGRhdGVkUm93Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZCcsXG4gICAgICAgICAgICAgICAgdGV4dDogcHJvamVjdC5jcmVhdGVkLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlZFJvd05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgbG9hZE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWROb2RlLnZhbHVlID0gJ0xPQUQnO1xuICAgICAgICAgICAgbG9hZE5vZGUudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgbG9hZE5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkYi5nZXQocHJvamVjdC50aXRsZSwgcHJvamVjdCA9PiB0aGlzLiNvbkxvYWQocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUudmFsdWUgPSAnUkVNT1ZFJztcbiAgICAgICAgICAgIHJlbW92ZU5vZGUudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2RiLnJlbW92ZShwcm9qZWN0LnRpdGxlLCAoKSA9PiB0aGlzLiNvblJlbW92ZShwcm9qZWN0KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYWN0aW9uUm93Tm9kZS5hcHBlbmRDaGlsZChsb2FkTm9kZSk7XG4gICAgICAgICAgICBhY3Rpb25Sb3dOb2RlLmFwcGVuZENoaWxkKHJlbW92ZU5vZGUpO1xuICAgICAgICAgICAgcm93Tm9kZS5hcHBlbmRDaGlsZChhY3Rpb25Sb3dOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3dOb2RlO1xuICAgIH1cblxuICAgICNvbkxvYWQocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25Mb2FkKHByb2plY3QpO1xuICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5jbG9zZSgpO1xuICAgIH1cblxuICAgICNvblJlbW92ZShwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYC5wcm9qZWN0cyA+IHRib2R5ID4gdHJbZGF0YS10aXRsZT1cIiR7cHJvamVjdC50aXRsZX1cIl1gO1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblJlbW92ZShwcm9qZWN0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiQC93ZWIvZGF0YWJhc2VcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBlbmNvZGVQcm9qZWN0VG9VcmxQYXJhbXMgfSBmcm9tIFwiQC93ZWIvdXJsUGFyYW1zXCI7XG5cbmltcG9ydCB7IHRvQ2FudmFzIH0gZnJvbSBcInFyY29kZVwiO1xuXG5pbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblNhdmU6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlRGlhbG9nVmlldyBleHRlbmRzIFZpZXc8SFRNTERpYWxvZ0VsZW1lbnQ+IHtcbiAgICAjZGI6IERhdGFiYXNlO1xuICAgICNjYWxsYmFja3M6IENhbGxiYWNrcztcbiAgICAjcHJvamVjdDogUHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ05vZGU6IEhUTUxEaWFsb2dFbGVtZW50LCBkYjogRGF0YWJhc2UsIHByb2plY3Q6IFByb2plY3QsIGNhbGxiYWNrczogQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN1cGVyKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLiNkYiA9IGRiO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuI3JlbmRlclNhdmVTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ2hyJyB9KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJTaGFyZVNlY3Rpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAnaHInIH0pKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuI3JlbmRlckZvb3RlcigpKTtcblxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInNhdmUtZGlhbG9nXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLiNvbkNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vZGUuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlclNhdmVTZWN0aW9uKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaDInLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdTYXZlIHByb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGl0bGU6ICcsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuI3Byb2plY3QudGl0bGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpdGxlTm9kZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhclRpdGxlID0gdGl0bGUucmVwbGFjZSgvW19cXHNdKy8sICcgJykudHJpbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QudGl0bGUgPSBjbGVhclRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QuaWQgPSBjbGVhclRpdGxlO1xuICAgICAgICAgICAgICAgIHRpdGxlTm9kZS52YWx1ZSA9IGNsZWFyVGl0bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGV4dDogJ1NBVkUnLFxuICAgICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QudXBkYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jZGIudXBkYXRlKHRoaXMuI3Byb2plY3QsIChwcm9qZWN0OiBQcm9qZWN0KSA9PiB0aGlzLiNvblNhdmUocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgICNyZW5kZXJTaGFyZVNlY3Rpb24oKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICBjb25zdCBzaGFyZUxpbmsgPSB0aGlzLiNjcmVhdGVTaGFyZUxpbmsoKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoMicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1NoYXJlIHByb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdMaW5rIHRvIHNoYXJlOiAnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IFxuICAgICAgICAgICAgbmFtZTogJ2lucHV0JywgXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiBzaGFyZUxpbmssXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJiclwiIH0pKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IFxuICAgICAgICAgICAgbmFtZTogJ2lucHV0JywgXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdDb3B5IHRvIGNsaXBib2FyZCcsXG4gICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2hhcmVMaW5rKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoMycsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+KApiBvciBjb3B5IFFSIGNvZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJjYW52YXNcIn0pO1xuICAgICAgICAgICAgdG9DYW52YXMoY2FudmFzTm9kZSwgc2hhcmVMaW5rKTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAjcmVuZGVyRm9vdGVyKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdDTE9TRScsXG4gICAgICAgICAgICAgICAgb25jbGljazogKCkgPT4gdGhpcy5ub2RlLmNsb3NlKCksXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgICNvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgI29uU2F2ZShwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblNhdmUocHJvamVjdCk7XG4gICAgICAgIHRoaXMubm9kZS5jbG9zZSgpO1xuICAgIH1cblxuICAgICNjcmVhdGVTaGFyZUxpbmsoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7bG9jYXRpb24ucGF0aG5hbWV9YDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZW5jb2RlUHJvamVjdFRvVXJsUGFyYW1zKHRoaXMuI3Byb2plY3QpO1xuICAgICAgICByZXR1cm4gYCR7cGF0aH0/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG5pbXBvcnQgeyBUb2tlbnNTdGF2ZVZpZXcgfSBmcm9tICcuL3N0YXZlVG9rZW4nO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFN0YXZlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgdG9rZW5WaWV3OiBUb2tlbnNTdGF2ZVZpZXdcbiAgICBwcml2YXRlIHRva2Vuc05vZGU6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgICAgIHRoaXMudG9rZW5zTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3ID0gbmV3IFRva2Vuc1N0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLnRva2Vuc05vZGUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VmZml4LFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInN0YXZlXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmFtZSh0aGlzLm5hbWUsIHRoaXMuc3VmZml4KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRva2Vuc05vZGUpO1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBjaGVja05hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID09PSBuYW1lICYmIHRoaXMuc3VmZml4ID09PSBzdWZmaXg7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBzaG93T3JIaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5BZnRlcih0b2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlcGxhY2VUb2tlbihuZXdUb2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlcGxhY2VUb2tlbihuZXdUb2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlVG9rZW4oaW5kZXgpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbk9uQmFjayh0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnB1c2hUb2tlbk9uQmFjayh0b2tlbik7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuT25CYWNrKCk7XG4gICAgfVxuXG4gICAgY291bGRCZVNjcmFwZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZSA9IHRoaXMubm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICByZXR1cm4gIWlzSGlkZTtcbiAgICB9XG5cbiAgICBzY3JhcGUoKTogU3RhdmUge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VuVmlldy5zY3JhcGVUb2tlbnMoKTtcbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBzdWZmaXgsIHRva2Vuc307XG4gICAgfVxuXG4gICAgYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LmFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWcsIGFjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZywgYWN0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4Pzogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgY29uc3QgcmVhbG5hbWUgPSBzdWZmaXggPyBgJHtuYW1lfV8ke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS9DQUxMXyR7cmVhbG5hbWV9LnN2ZylgO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNWaWV3IH0gZnJvbSAnLi90b2tlbic7XG5cbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5zU3RhdmVWaWV3IGV4dGVuZHMgVG9rZW5zVmlldyB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW5zXCIpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoMCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3Rpb25JbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zLmZvckVhY2goKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbkluZGV4ID0gdGhpcy5wdXNoVG9rZW5Ob2RlT25CYWNrKHRoaXMubm9kZSwgdG9rZW4sIGluZGV4LCBhY3Rpb25JbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDAsIHRva2VuKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZXBsYWNlVG9rZW4obmV3VG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vuc1tpbmRleF0gPSBuZXdUb2tlbjtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuT25CYWNrKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnBvcCgpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuTm9kZU9uQmFjayh0b2tlbnNOb2RlOiBIVE1MRWxlbWVudCwgdG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlciwgYWN0aW9uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFNwYW4gPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleCArIHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBlbmRDaGlsZCA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBub2RlOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4oY29udGFpbmVyLCBzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b2tlbk5vZGUgPSB0aGlzLmNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuLCBpbmRleCwgYWN0aW9uSW5kZXgpO1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0b2tlbnNOb2RlLmxhc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy8gcHJvYmFibHkgaXQncyBhIHNwYW4sIGZpbmQgcHJldmlvdXMgbm9kZVxuICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0Tm9kZS5wcmV2aW91c1NpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0dyb3VwID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXRva2VuLWdyb3VwXCIpO1xuICAgICAgICBjb25zdCBpc0FjdGlvbiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5kYXRhc2V0Py50eXBlID09PSBcImFjdGlvblwiO1xuXG4gICAgICAgIGlmICghbGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXggKyAoaXNBY3Rpb24odG9rZW5Ob2RlKSA/IDEgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FjdGlvbih0b2tlbk5vZGUpKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0dyb3VwKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChsYXN0Tm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNBY3Rpb24obGFzdE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBncm91cCB3aXRoIGFjdGlvbiBhbmQgdmFsdWUuXG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSB0aGlzLmNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUpO1xuICAgICAgICAgICAgdG9rZW5zTm9kZS5pbnNlcnRCZWZvcmUoZ3JvdXBOb2RlLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBncm91cE5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGxhc3ROb2RlLmRhdGFzZXQuYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIGxhc3ROb2RlLCAwKTtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGdyb3VwTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4odG9rZW5zTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFjdGlvbkluZGV4OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZVRva2VuTm9kZSh0b2tlbik7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIGlmIChub2RlLmRhdGFzZXQ/LnR5cGUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGAke2FjdGlvbkluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBkcmFnTm9kZSA9IHN1cGVyLmNyZWF0ZURyYWdOb2RlKG5vZGUpO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LmluZGV4ID0gbm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0Lm5hbWUgPSBub2RlLmRhdGFzZXQubmFtZTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5zdWZmaXggPSBub2RlLmRhdGFzZXQuc3VmZml4O1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tZ3JvdXBcIl0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjcmFwZVRva2VucygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tc3BhblwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVUb2tlblJlbW92ZVNwYW5Ob2RlKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRva2VuLXNwYW5cIiwgXCJyZW1vdmVcIik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn07XG5cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvbkRyb3A6IChkOiBIVE1MRWxlbWVudCwgbzogSFRNTEVsZW1lbnQpID0+IHZvaWQgfCBudWxsO1xuICAgIG9uTW92ZTogKGQ6IEhUTUxFbGVtZW50LCBvOiBIVE1MRWxlbWVudCB8IG51bGwsIG46IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZCB8IG51bGw7XG4gICAgb25EcmFnVGltZW91dDogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBib29sZWFuO1xuICAgIGNhbkRyYWc6ICgpID0+IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5zVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHJlYWRvbmx5IGljb25Vcmw6IHN0cmluZztcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3NcblxuICAgIGNvbnN0cnVjdG9yKHsgbm9kZSwgY2FsbGJhY2tzLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCB9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrc1xuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBnZXQgaXNEcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWxsYmFja3Mub25Ecm9wICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleCkuY2xhc3NMaXN0LmFkZChmbGFnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXgpLmNsYXNzTGlzdC5yZW1vdmUoZmxhZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAqW2RhdGEtYWN0aW9uLWluZGV4PScke2FjdGlvbkluZGV4fSddYDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZyYWN0LXRva2VuJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnR5cGUgPSB0b2tlbkluZm8gPyB0b2tlbkluZm8udHlwZSA6IFwidW5rbm93blwiO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9LyR7dG9rZW59LnN2ZylgO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRUb2tlbkV2ZW50cyhub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGRyYWdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKCdmcmFjdC10b2tlbicsICdtb3ZlJyk7XG4gICAgICAgIGRyYWdOb2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LnRva2VuID0gbm9kZS5kYXRhc2V0LnRva2VuO1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbkV2ZW50cyhub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdNb3VzZVN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdUb3VjaFN0YXJ0LCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xuICAgICAgICBjb25zdCBjYW5EcmFnID0gKCkgPT4gY2FsbGJhY2tzLmNhbkRyYWcgJiYgIWNhbGxiYWNrcy5jYW5EcmFnKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dCA9IChjb29yZHNDYikgPT5cbiAgICAgICAgICAgIG5ldyBEcmFnQ29udGV4dChcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmNyZWF0ZURyYWdOb2RlKG5vZGUpLCBcbiAgICAgICAgICAgICAgICAoKSA9PiBjYWxsYmFja3Mub25EcmFnVGltZW91dCAhPT0gbnVsbCA/IGNhbGxiYWNrcy5vbkRyYWdUaW1lb3V0KG5vZGUpIDogZmFsc2UsIFxuICAgICAgICAgICAgICAgIGNvb3Jkc0NiLCBcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdNb3VzZVN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldE1vdXNlQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIG1vdXNldXA6IGNvbnRleHQuY3JlYXRlRHJhZ1N0b3AoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGV4dC51cGRhdGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ1RvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MuY2FuRHJhZyAmJiAhY2FsbGJhY2tzLmNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldFRvdWNoQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIHRvdWNobW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBjb250ZXh0LmNyZWF0ZURyYWdTdG9wKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE1vdXNlQ29vcmRzKGV2ZW50OiBNb3VzZUV2ZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG91Y2hDb29yZHMoZXZlbnQ6IFRvdWNoRXZlbnQpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIERyYWdDb250ZXh0PEV2ZW50VHlwZSBleHRlbmRzIEV2ZW50PiB7XG4gICAgcHJpdmF0ZSBkcmFnTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHByaXZhdGUgb3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIGluaXRpYWxDb29yZHM6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuICAgIHByaXZhdGUgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfTtcbiAgICBwcml2YXRlIF9nZXRDb29yZHM6IChldmVudDogRXZlbnRUeXBlKSA9PiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBDYWxsYmFja3M7XG4gICAgcHJpdmF0ZSBjcmVhdGVEcmFnTm9kZTogKCkgPT4gSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY3JlYXRlRHJhZ05vZGU6ICgpID0+IEhUTUxFbGVtZW50LFxuICAgICAgICBvblRpbWVvdXQ6ICgpID0+IGJvb2xlYW4sXG4gICAgICAgIGdldENvb3JkczogKGV2ZW50OiBFdmVudFR5cGUpID0+IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWF0ZURyYWdOb2RlID0gY3JlYXRlRHJhZ05vZGU7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5fZ2V0Q29vcmRzID0gZ2V0Q29vcmRzO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKG9uVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGNyZWF0ZURyYWdNb3ZlKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURyYWdTdG9wKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Ecm9wKHRoaXMuZHJhZ05vZGUsIHRoaXMub3Zlck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZXZlbnQ6IEV2ZW50VHlwZSwgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfSkge1xuICAgICAgICB0aGlzLmluaXRpYWxDb29yZHMgPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLmV2ZW50Q2FsbGJhY2tzID0gZXZlbnRDYWxsYmFja3NcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudENhbGxiYWNrcykuZm9yRWFjaCgoW25hbWUsIGNiXSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdOb2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTW92ZSh0aGlzLmRyYWdOb2RlLCB0aGlzLm92ZXJOb2RlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50Q2FsbGJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2JdKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZXZlbnQ6IEV2ZW50VHlwZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuY29tcHV0ZXJEaXN0YW5jZVRvSW5pdGlhbENvb3JkcyhldmVudCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiA1KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTm9kZSA9IHRoaXMuY3JlYXRlRHJhZ05vZGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ05vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3Jkcyh4LCB5KTtcbiAgICAgICAgY29uc3Qgb2xkT3Zlck5vZGUgPSB0aGlzLm92ZXJOb2RlO1xuICAgICAgICBjb25zdCBuZXdPdmVyTm9kZSA9IHRoaXMuZmluZE92ZXJOb2RlKCk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUgJiYgIU9iamVjdC5pcyhvbGRPdmVyTm9kZSwgbmV3T3Zlck5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbk1vdmUodGhpcy5kcmFnTm9kZSwgb2xkT3Zlck5vZGUsIG5ld092ZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbmV3T3Zlck5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlckRpc3RhbmNlVG9Jbml0aWFsQ29vcmRzKGV2ZW50OiBFdmVudFR5cGUpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBkeCA9IHRoaXMuaW5pdGlhbENvb3Jkc1swXSAtIHg7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5pbml0aWFsQ29vcmRzWzFdIC0geTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb29yZHMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnTm9kZS5zdHlsZS5sZWZ0ID0gYCR7eC50b0ZpeGVkKCl9cHhgO1xuICAgICAgICB0aGlzLmRyYWdOb2RlLnN0eWxlLnRvcCA9IGAke3kudG9GaXhlZCgpfXB4YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRPdmVyTm9kZSgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZVwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRXYWxrZXJGaWx0ZXIoKTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb2RlTm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIGZpbHRlcik7XG4gICAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB3YWxrZXIuY3VycmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXYWxrZXJGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IFZBTElEX0NMQVNTRVMgPSBbJ2ZyYWN0LXRva2VuLXNwYW4nLCAnZnJhY3Qtc3RhdmVzJywgJ3Rva2VucyddO1xuICAgICAgICBjb25zdCBkcmFnUmVjdCA9IHRoaXMuZHJhZ05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcmFnUmVjdC5yaWdodCA8IHJlY3QubGVmdFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5sZWZ0ID4gcmVjdC5yaWdodFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5ib3R0b20gPCByZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC50b3AgPiByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghVkFMSURfQ0xBU1NFUy5zb21lKGMgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoYykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb29yZHMoZXZlbnQ6IEV2ZW50VHlwZSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBueCA9IHggLSB0aGlzLmRyYWdOb2RlLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbnkgPSB5IC0gdGhpcy5kcmFnTm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBbbngsIG55XTtcbiAgICB9XG5cbn07IiwiZXhwb3J0IGNsYXNzIFZpZXc8SFRNTFR5cGUgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PiB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxUeXBlO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTFR5cGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmFtczoge1xuICAgICAgICBuYW1lOiBLO1xuICAgICAgICBjbGFzc2VzPzogc3RyaW5nW107XG4gICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgICAgIG9uY2xpY2s/OiAoTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICAgICAgcmVhZG9ubHk/OiBib29sZWFuO1xuICAgIH0pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMubmFtZSk7XG4gICAgICAgIGlmIChwYXJhbXMuY2xhc3Nlcykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5jbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMub25jbGljaykge1xuICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5vbmNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID0gcGFyYW1zLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZhbHVlID0gcGFyYW1zLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZWFkT25seSA9IHBhcmFtcy5yZWFkb25seTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL21haW5cIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVFbXB0eVByb2plY3QgfSBmcm9tIFwiLi9tb2RlbHNcIlxuXG5pbXBvcnQgXCJAL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IHsgZGVjb2RlUHJvamVjdEZyb21VcmxQYXJhbXMgfSBmcm9tIFwiLi91cmxQYXJhbXNcIjtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBpZiAocGFyYW1zLmdldChcInpcIikgPT09IFwielwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkZWNvZGVQcm9qZWN0RnJvbVVybFBhcmFtcyhwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKGRhdGFiYXNlLCBwcm9qZWN0KTtcbiAgICAgICAgY29udHJvbGxlci5yZW5kZXIoKTtcblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFiYXNlLmdldChcIl9fdGVtcF9fXCIsIHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcihkYXRhYmFzZSwgcHJvamVjdCB8fCBjcmVhdGVFbXB0eVByb2plY3QoKSk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbmRlcigpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKGRhdGFiYXNlLCBjcmVhdGVFbXB0eVByb2plY3QoKSk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==