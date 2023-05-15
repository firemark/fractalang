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
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes showtime {\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n}\n.fract-tokens {\n  user-select: none;\n  display: flex;\n  font-variant: small-caps;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  gap: 5px;\n}\n.fract-tokens.hide .fract-token, .fract-tokens.hide .label {\n  display: none;\n}\n.fract-tokens > .group-label {\n  display: inline;\n  font-size: 1.4rem;\n  cursor: pointer;\n}\n.fract-tokens > .label {\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.fract-token {\n  padding: 5px;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n  width: 50px;\n  height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  transition: background-color 300ms;\n  cursor: pointer;\n}\n.fract-token.token-inline {\n  width: 25px;\n  height: 25px;\n  border-width: 1px;\n  border-radius: 3px;\n  padding: 1px;\n}\n.fract-token.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token.move {\n  background-color: rgba(204, 204, 204, 0.4666666667);\n  position: absolute;\n  animation-name: showtime;\n  animation-duration: 500ms;\n}\n.fract-token.move.valid-drop {\n  background-color: rgba(123, 218, 123, 0.4666666667);\n  border-color: #228B22;\n}\n.fract-token.move.valid-drop::before {\n  content: \"DROP\";\n}\n.fract-token.move.remove-drop {\n  background-color: rgba(201, 0, 0, 0.4666666667);\n  border-color: #8b2222;\n}\n.fract-token.move.remove-drop::before {\n  content: \"REMOVE\";\n}\n.fract-token.move::before {\n  display: inline-block;\n  font-size: 10pt;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-weight: bold;\n  position: relative;\n  top: -16pt;\n}\n\n.fract-token-group {\n  margin-right: 3px;\n  display: flex;\n  align-items: center;\n  border: 2px #888 solid;\n  color: #333;\n  border-radius: 5px;\n  background-color: #CCC;\n}\n.fract-token-group > * {\n  flex: 0 0 auto;\n  border: none;\n  border-radius: 0px;\n}\n.fract-token-group > *:not(:first-child).fract-token {\n  border-left: 2px #888 dotted;\n}\n.fract-token-group > .fract-token-span {\n  padding: 2px;\n}\n.fract-token-group.debug {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n.fract-token-group.debug > .fract-token {\n  background-color: #90e0ff;\n  border-color: #0d426d;\n}\n\n.fract-token-span {\n  padding: 5px;\n  width: 0px;\n  height: 50px;\n  transition: width 300ms;\n}\n.fract-token-span.over {\n  background-color: #DDD;\n  border: 2px #999 dotted;\n  border-radius: 5px;\n  font-weight: bold;\n  width: 50px;\n}\n.fract-token-span.over::before {\n  font-size: 24pt;\n  content: \"+\";\n}\n\n.fract-functions-list {\n  margin: 0;\n  display: flex;\n}\n.fract-functions-list > li {\n  display: inline;\n}\n.fract-functions-list .token-btn {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n}\n.fract-functions-list .token-btn:hover {\n  background-color: #DDD;\n}\n.fract-functions-list .dropdown {\n  position: relative;\n}\n.fract-functions-list .dropdown .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #FFF;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  z-index: 1;\n  padding: 0;\n}\n.fract-functions-list .dropdown:hover .dropdown-content {\n  display: block;\n}\n\n.fract-staves {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  overflow-x: hidden;\n}\n.fract-staves > li {\n  flex: 0 1 auto;\n  display: flex;\n}\n.fract-staves > li > .name {\n  flex: 0 1 50px;\n  font-size: 15pt;\n  align-self: center;\n  height: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.fract-staves > li > .tokens {\n  flex: 1 1 auto;\n  padding: 5px 0;\n  display: flex;\n  width: 0;\n  border: 2px #AAA solid;\n  border-radius: 5px;\n  background-color: #EEE;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.fract-staves > li > .tokens > * {\n  flex: 0 0 auto;\n}\n.fract-staves > li.hide {\n  display: none;\n}\n\nbody {\n  font-family: Sans-Serif;\n  font-size: 10pt;\n  overflow: hidden;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  flex-wrap: wrap;\n  width: 100vw;\n  height: calc(100vh - 15px);\n}\n\n.fract-image {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#editor {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  margin: auto;\n  width: 95%;\n}\n\n#editor > nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#code-bar {\n  margin-left: 30px;\n}\n#code-bar label, #code-bar input {\n  margin-right: 5px;\n}\n\n#code-panel {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  height: 45vh;\n}\n\n.fract-token-categories {\n  flex: 0 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: scroll;\n  align-items: stretch;\n  gap: 10px;\n  width: 200px;\n}\n.fract-token-categories > .fract-tokens {\n  flex-direction: column;\n  align-items: center;\n}\n\n.hidden {\n  display: none !important;\n}\n\ndialog {\n  border-radius: 5px;\n  border: 2px #888 solid;\n  padding: 1.6rem;\n  max-width: 500px;\n}\n\n.choose-token-dialog {\n  display: flex;\n  flex-direction: row;\n  align-items: start;\n}\n.choose-token-dialog .category {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.choose-token-dialog .category > .label {\n  text-align: center;\n  font-variant: small-caps;\n  font-size: 1.4rem;\n}\n.choose-token-dialog .category ~ .category {\n  border-left: 1px #888 dotted;\n  margin-left: 0.75em;\n  padding-left: 0.75em;\n}\n.choose-token-dialog .dialog-token {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin: 0.5em 0;\n}", "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/main.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\nbody {\n    font-family: Sans-Serif;\n    font-size: 10pt;\n    overflow: hidden;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap;\n    width: 100vw;\n    height: calc(100vh - 15px);\n}\n\n.fract-image {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#editor {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    width: 95%;\n}\n\n#editor > nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#code-bar {\n    margin-left: 30px;\n    label, input { margin-right: 5px; }\n}\n\n#code-panel {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    height: 45vh;\n}\n\n.fract-token-categories {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    align-items: stretch;\n    gap: 10px;\n    width: 200px;\n\n    > .fract-tokens {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.hidden {\n    display: none !important;\n}\n\ndialog {\n  border-radius: 5px;\n  border: 2px #888 solid;\n  padding: 1.6rem;\n  max-width: 500px;\n}\n\n.choose-token-dialog {\n    display: flex;\n    flex-direction: row;\n    align-items: start;\n\n    .category {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        > .label {\n            text-align: center;\n            font-variant: small-caps;\n            font-size: 1.4rem;\n        }\n\n        ~ .category {\n            border-left: 1px #888 dotted;\n            margin-left: 0.75em;\n            padding-left: 0.75em;\n        }\n    }\n\n    .dialog-token {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        margin: 0.5em 0;\n    }\n}",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Call": () => (/* binding */ Call),
/* harmony export */   "CloseCall": () => (/* binding */ CloseCall),
/* harmony export */   "DrawArcLine": () => (/* binding */ DrawArcLine),
/* harmony export */   "DrawFigure": () => (/* binding */ DrawFigure),
/* harmony export */   "DrawLine": () => (/* binding */ DrawLine),
/* harmony export */   "MoveBackward": () => (/* binding */ MoveBackward),
/* harmony export */   "MoveForward": () => (/* binding */ MoveForward),
/* harmony export */   "MoveLeft": () => (/* binding */ MoveLeft),
/* harmony export */   "MoveRight": () => (/* binding */ MoveRight),
/* harmony export */   "Replay": () => (/* binding */ Replay),
/* harmony export */   "Reverse": () => (/* binding */ Reverse),
/* harmony export */   "RotateLeft": () => (/* binding */ RotateLeft),
/* harmony export */   "RotateRight": () => (/* binding */ RotateRight)
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/* harmony export */   "CloseCursor": () => (/* binding */ CloseCursor),
/* harmony export */   "Cursor": () => (/* binding */ Cursor),
/* harmony export */   "ICursor": () => (/* binding */ ICursor),
/* harmony export */   "Shape": () => (/* binding */ Shape)
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
/* harmony export */   "exec": () => (/* binding */ exec),
/* harmony export */   "setupExec": () => (/* binding */ setupExec)
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
/* harmony export */   "Arc": () => (/* binding */ Arc),
/* harmony export */   "ArcCurve": () => (/* binding */ ArcCurve),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "Curve": () => (/* binding */ Curve),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "LineCurve": () => (/* binding */ LineCurve),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
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

/***/ "./src/core/mappings.ts":
/*!******************************!*\
  !*** ./src/core/mappings.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CALLS": () => (/* binding */ CALLS),
/* harmony export */   "DYNAMIC_ARGS": () => (/* binding */ DYNAMIC_ARGS),
/* harmony export */   "STAVES": () => (/* binding */ STAVES),
/* harmony export */   "SUFFIXES": () => (/* binding */ SUFFIXES),
/* harmony export */   "TOKENS": () => (/* binding */ TOKENS)
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
/* harmony export */   "parseLineFunc": () => (/* binding */ parseLineFunc),
/* harmony export */   "parseLineValue": () => (/* binding */ parseLineValue),
/* harmony export */   "parseRawTokens": () => (/* binding */ parseRawTokens)
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
/* harmony export */   "decodeStaveName": () => (/* binding */ decodeStaveName),
/* harmony export */   "decodeStaves": () => (/* binding */ decodeStaves),
/* harmony export */   "decodeTokens": () => (/* binding */ decodeTokens),
/* harmony export */   "encodeStaveName": () => (/* binding */ encodeStaveName),
/* harmony export */   "encodeStaves": () => (/* binding */ encodeStaves),
/* harmony export */   "encodeTokens": () => (/* binding */ encodeTokens)
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
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
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
/* harmony export */   "TOKENS": () => (/* binding */ TOKENS),
/* harmony export */   "Token": () => (/* binding */ Token)
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
/* harmony export */   "DEFAULT_ICON_URL": () => (/* binding */ DEFAULT_ICON_URL)
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
/* harmony export */   "Controller": () => (/* binding */ Controller)
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
/* harmony export */   "DebugController": () => (/* binding */ DebugController)
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
/* harmony export */   "MainController": () => (/* binding */ MainController)
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
/* harmony import */ var _web_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/web/models */ "./src/web/models.ts");
/* harmony import */ var _web_tokensMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/web/tokensMenu */ "./src/web/tokensMenu.ts");
/* harmony import */ var _core_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/exec */ "./src/core/exec.ts");
/* harmony import */ var _core_cursor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/core/cursor */ "./src/core/cursor.ts");














class MainController extends _controller__WEBPACK_IMPORTED_MODULE_0__.Controller {
    constructor(database, project) {
        super(document.querySelector("main"));
        this.database = database;
        this.project = project;
        this.debug = new _debug__WEBPACK_IMPORTED_MODULE_1__.DebugController({
            renderCb: (cursor) => this.imageView.render(cursor),
            onState: this.onDebugState.bind(this),
        });
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
            categories: _web_tokensMenu__WEBPACK_IMPORTED_MODULE_11__.ACTION_TOKENS,
            callbacks: categoryCallbacks,
        });
        this.valuesCategoryView = new _web_views_categoryToken__WEBPACK_IMPORTED_MODULE_4__.TokensCategoryView({
            node: document.getElementById("value-tokens"),
            categories: _web_tokensMenu__WEBPACK_IMPORTED_MODULE_11__.VALUE_TOKENS,
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
            onNew: () => this.loadProject((0,_web_models__WEBPACK_IMPORTED_MODULE_10__.createEmptyProject)()),
            onDebugStep: () => this.debug.step(),
            onDebugPlay: () => this.debug.play(),
            onDebugStop: () => this.debug.stop(),
            onDebugExit: () => this.debug.exit(),
        });
        this.chooseDialogView = null;
        this.projectListDialogView = null;
        this.saveDialogView = null;
    }
    render() {
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
            (0,_core_exec__WEBPACK_IMPORTED_MODULE_12__.exec)(stack);
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
        const cursor = new _core_cursor__WEBPACK_IMPORTED_MODULE_13__.Cursor(cursorCfg);
        const argument = 1.0;
        const maxIteration = this.project.iterations;
        const code = this.codeView.scrapeCode();
        try {
            return (0,_core_exec__WEBPACK_IMPORTED_MODULE_12__.setupExec)(argument, maxIteration, code, cursor);
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
/* harmony export */   "Database": () => (/* binding */ Database)
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
/* harmony export */   "initDatabase": () => (/* binding */ initDatabase)
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
/* harmony export */   "createEmptyProject": () => (/* binding */ createEmptyProject)
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
/* harmony export */   "NAME_TO_FAMILY": () => (/* binding */ NAME_TO_FAMILY),
/* harmony export */   "TOKEN_FAMILIES": () => (/* binding */ TOKEN_FAMILIES)
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
/* harmony export */   "ACTION_TOKENS": () => (/* binding */ ACTION_TOKENS),
/* harmony export */   "VALUE_TOKENS": () => (/* binding */ VALUE_TOKENS)
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
/* harmony export */   "decodeProjectFromUrlParams": () => (/* binding */ decodeProjectFromUrlParams),
/* harmony export */   "encodeProjectToUrlParams": () => (/* binding */ encodeProjectToUrlParams)
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
/* harmony export */   "TokensCategoryView": () => (/* binding */ TokensCategoryView)
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
/* harmony export */   "ChooseTokenDialogView": () => (/* binding */ ChooseTokenDialogView)
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

/***/ "./src/web/views/codeBar.ts":
/*!**********************************!*\
  !*** ./src/web/views/codeBar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeBarView": () => (/* binding */ CodeBarView)
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
/* harmony export */   "FunctionsBarView": () => (/* binding */ FunctionsBarView)
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

/***/ "./src/web/views/image.ts":
/*!********************************!*\
  !*** ./src/web/views/image.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/web/views/projectListDialog.ts":
/*!********************************************!*\
  !*** ./src/web/views/projectListDialog.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectListDialogView": () => (/* binding */ ProjectListDialogView)
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
/* harmony export */   "SaveDialogView": () => (/* binding */ SaveDialogView)
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

/***/ "./src/web/views/token.ts":
/*!********************************!*\
  !*** ./src/web/views/token.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxLQUFLLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFXLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdB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QVksRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELFlBQVksRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELGFBQWEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdELFlBQVk7SUFDWixTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTO0lBQ1QsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1EQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsU0FBUztJQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxzREFBZSxFQUFFLENBQUM7SUFDbkQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHNEQUFlLEVBQUUsQ0FBQztJQUNuRCxlQUFlLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksd0RBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLGVBQWUsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMs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RUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFckQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUMzRCxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQzNELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFM0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUVsRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUUxRCxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUVyRSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQzdELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDL0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN2RCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3pELEVBQUMsSUFBSSxFQUFFLGFB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O1lBQ3RFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvc3R5bGUvbWFpbi5zY3NzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL2RpamtzdHJhanMvZGlqa3N0cmEuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL2VuY29kZS11dGY4L2luZGV4LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY2FuLXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9hbGlnbm1lbnQtcGF0dGVybi5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2FscGhhbnVtZXJpYy1kYXRhLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYml0LWJ1ZmZlci5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2JpdC1tYXRyaXguanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9ieXRlLWRhdGEuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9lcnJvci1jb3JyZWN0aW9uLWNvZGUuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9lcnJvci1jb3JyZWN0aW9uLWxldmVsLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZmluZGVyLXBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9mb3JtYXQtaW5mby5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2dhbG9pcy1maWVsZC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2thbmppLWRhdGEuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9tYXNrLXBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9tb2RlLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbnVtZXJpYy1kYXRhLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvcG9seW5vbWlhbC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3FyY29kZS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3JlZWQtc29sb21vbi1lbmNvZGVyLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvcmVnZXguanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9zZWdtZW50cy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3V0aWxzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvdmVyc2lvbi1jaGVjay5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvY2FudmFzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL3JlbmRlcmVyL3N2Zy10YWcuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3N0eWxlL21haW4uc2Nzcz9hMjIxIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L2FjdGlvblJlc3VsdC50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvYmFzZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvY29sb3JzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3Qvb3BzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9zdHJva2VzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC92YWx1ZXMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvY29udGV4dC50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9jb250ZXh0U3RlcHBlci50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9jdXJzb3IudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvZXhlYy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9maWd1cmVzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2Z1bmN0aW9uc0JhZy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9tYXBwaW5ncy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvc2hvcnRjdXRzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL3N0ZXAudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvc3ZnLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2NvbnN0cy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9jb250cm9sbGVycy9kZWJ1Zy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2NvbnRyb2xsZXJzL21haW4udHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9kYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2RhdGFiYXNlSW5pdC50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL21vZGVscy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3Rva2Vucy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3Rva2Vuc0ZhbWlseS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3Rva2Vuc01lbnUudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi91cmxQYXJhbXMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9jYXRlZ29yeVRva2VuLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvY2hvb3NlRGlhbG9nLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvY29kZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2NvZGVCYXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9mdW5jdGlvbnNCYXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9pbWFnZS50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3Byb2plY3RMaXN0RGlhbG9nLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvc2F2ZURpYWxvZy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3N0YXZlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvc3RhdmVUb2tlbi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL3Rva2VuLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvdmlldy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xvZ28tbGFuZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBzaG93dGltZSB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbi5mcmFjdC10b2tlbnMge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBnYXA6IDVweDtcXG59XFxuLmZyYWN0LXRva2Vucy5oaWRlIC5mcmFjdC10b2tlbiwgLmZyYWN0LXRva2Vucy5oaWRlIC5sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmdyb3VwLWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW5zID4gLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtdG9rZW4udG9rZW4taW5saW5lIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcbi5mcmFjdC10b2tlbi5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNDY2NjY2NjY2Nyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbmltYXRpb24tbmFtZTogc2hvd3RpbWU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCAyMTgsIDEyMywgMC40NjY2NjY2NjY3KTtcXG4gIGJvcmRlci1jb2xvcjogIzIyOEIyMjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUudmFsaWQtZHJvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJEUk9QXFxcIjtcXG59XFxuLmZyYWN0LXRva2VuLm1vdmUucmVtb3ZlLWRyb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDAsIDAsIDAuNDY2NjY2NjY2Nyk7XFxuICBib3JkZXItY29sb3I6ICM4YjIyMjI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlLnJlbW92ZS1kcm9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlJFTU9WRVxcXCI7XFxufVxcbi5mcmFjdC10b2tlbi5tb3ZlOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTE2cHQ7XFxufVxcblxcbi5mcmFjdC10b2tlbi1ncm91cCB7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKiB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG59XFxuLmZyYWN0LXRva2VuLWdyb3VwID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7XFxuICBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcbi5mcmFjdC10b2tlbi1ncm91cC5kZWJ1ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbn1cXG4uZnJhY3QtdG9rZW4tZ3JvdXAuZGVidWcgPiAuZnJhY3QtdG9rZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG59XFxuXFxuLmZyYWN0LXRva2VuLXNwYW4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xcbn1cXG4uZnJhY3QtdG9rZW4tc3Bhbi5vdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1zcGFuLm92ZXI6OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHQ7XFxuICBjb250ZW50OiBcXFwiK1xcXCI7XFxufVxcblxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgPiBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLnRva2VuLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC5uYW1lIHtcXG4gIGZsZXg6IDAgMSA1MHB4O1xcbiAgZm9udC1zaXplOiAxNXB0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLnRva2VucyB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAwO1xcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC50b2tlbnMgPiAqIHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uZnJhY3Qtc3RhdmVzID4gbGkuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVweCk7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZWRpdG9yIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbiNlZGl0b3IgPiBuYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjb2RlLWJhciB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuI2NvZGUtYmFyIGxhYmVsLCAjY29kZS1iYXIgaW5wdXQge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbiNjb2RlLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBoZWlnaHQ6IDQ1dmg7XFxufVxcblxcbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzIHtcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzID4gLmZyYWN0LXRva2VucyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNob29zZS10b2tlbi1kaWFsb2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcbi5jaG9vc2UtdG9rZW4tZGlhbG9nIC5jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jaG9vc2UtdG9rZW4tZGlhbG9nIC5jYXRlZ29yeSA+IC5sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLmNob29zZS10b2tlbi1kaWFsb2cgLmNhdGVnb3J5IH4gLmNhdGVnb3J5IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggIzg4OCBkb3R0ZWQ7XFxuICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XFxufVxcbi5jaG9vc2UtdG9rZW4tZGlhbG9nIC5kaWFsb2ctdG9rZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVlbSAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9rZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb2RlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUFPLFdBQUE7RUNFVDtFRERFO0lBQUssYUFBQTtFQ0lQO0FBQ0Y7QURGQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0lKO0FERFE7RUFDSSxhQUFBO0FDR1o7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNGUjtBREtJO0VB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OE1SOztBQTFNQTtFQUNJLHdCQUFBO0FBNk1KOztBQTFNQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE2TUY7O0FBMU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE2TUo7QUEzTUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQTZNUjtBQTNNUTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQTZNWjtBQTFNUTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTRNWjtBQXhNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBME1SXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBrZXlmcmFtZXMgc2hvd3RpbWUge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMCU7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAxMDAlOyB9XFxufVxcblxcbi5mcmFjdC10b2tlbnMge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICAmLmhpZGUge1xcbiAgICAgICAgLmZyYWN0LXRva2VuLCAubGFiZWwge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgPiAuZ3JvdXAtbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgPiAubGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXRva2VuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgJi50b2tlbi1pbmxpbmUge1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIHBhZGRpbmc6IDFweDtcXG4gICAgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgIH1cXG5cXG4gICAgJi5tb3ZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M3NztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzaG93dGltZTtcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuXFxuICAgICAgICAmLnZhbGlkLWRyb3Age1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YmRhN2I3NztcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjhCMjI7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogXFxcIkRST1BcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLnJlbW92ZS1kcm9wIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkwMDAwNzc7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOGIyMjIyO1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJSRU1PVkVcXFwiOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdG9wOiAtMTZwdDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tZ3JvdXAge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcXG4gICAgPiAqIHsgZmxleDogMCAwIGF1dG87IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMHB4OyB9XFxuICAgID4gKjpub3QoOmZpcnN0LWNoaWxkKS5mcmFjdC10b2tlbiB7IGJvcmRlci1sZWZ0OiAycHggIzg4OCBkb3R0ZWQ7IH1cXG4gICAgPiAuZnJhY3QtdG9rZW4tc3BhbiB7IHBhZGRpbmc6IDJweDsgfVxcblxcbiAgICAmLmRlYnVnIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XFxuICAgICAgICAmID4gLmZyYWN0LXRva2VuIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4tc3BhbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcztcXG5cXG4gICAgJi5vdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxuICAgICAgICBib3JkZXI6IDJweCAjOTk5IGRvdHRlZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDUwcHg7XFxuXFxuICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgICAgICAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL3Rva2Vucyc7XFxuQGltcG9ydCAnLi9jb2RlJztcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IFNhbnMtU2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVweCk7XFxufVxcblxcbi5mcmFjdC1pbWFnZSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2VkaXRvciB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jZWRpdG9yID4gbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jY29kZS1iYXIge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbGFiZWwsIGlucHV0IHsgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG59XFxuXFxuI2NvZGUtcGFuZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gICAgaGVpZ2h0OiA0NXZoO1xcbn1cXG5cXG4uZnJhY3QtdG9rZW4tY2F0ZWdvcmllcyB7XFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG5cXG4gICAgPiAuZnJhY3QtdG9rZW5zIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpYWxvZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNob29zZS10b2tlbi1kaWFsb2cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFxuICAgIC5jYXRlZ29yeSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICA+IC5sYWJlbCB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIH4gLmNhdGVnb3J5IHtcXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4ICM4ODggZG90dGVkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjc1ZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmRpYWxvZy10b2tlbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW46IDAuNWVtIDA7XFxuICAgIH1cXG59XCIsXCIuZnJhY3QtZnVuY3Rpb25zLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB9XFxuXFxuICAgIC50b2tlbi1idG4ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93biB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZnJhY3Qtc3RhdmVzIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgID4gbGkge1xcbiAgICAgICAgZmxleDogMCAxIGF1dG87XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAgICAgPiAubmFtZSB7XFxuICAgICAgICAgICAgZmxleDogMCAxIDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgPiAudG9rZW5zICB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB3aWR0aDogMDtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuXFxuICAgICAgICAgICAgPiAqIHsgZmxleDogMCAwIGF1dG87IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaGlkZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ3JlYXRlZCAyMDA4LTA4LTE5LlxuICpcbiAqIERpamtzdHJhIHBhdGgtZmluZGluZyBmdW5jdGlvbnMuIEFkYXB0ZWQgZnJvbSB0aGUgRGlqa3N0YXIgUHl0aG9uIHByb2plY3QuXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA4XG4gKiAgIFd5YXR0IEJhbGR3aW4gPHNlbGZAd3lhdHRiYWxkd2luLmNvbT5cbiAqICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgZGlqa3N0cmEgPSB7XG4gIHNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHM6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgLy8gUHJlZGVjZXNzb3IgbWFwIGZvciBlYWNoIG5vZGUgdGhhdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICAvLyBub2RlIElEID0+IHByZWRlY2Vzc29yIG5vZGUgSURcbiAgICB2YXIgcHJlZGVjZXNzb3JzID0ge307XG5cbiAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkLlxuICAgIC8vIG5vZGUgSUQgPT4gY29zdFxuICAgIHZhciBjb3N0cyA9IHt9O1xuICAgIGNvc3RzW3NdID0gMDtcblxuICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQ7IGRpZmZlcnMgZnJvbVxuICAgIC8vIGBjb3N0c2AgaW4gdGhhdCBpdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byB0aGUgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXNcbiAgICAvLyB0aGUga25vd24gc2hvcnRlc3QgcGF0aCBmcm9tIHMuXG4gICAgLy8gWFhYOiBEbyB3ZSBhY3R1YWxseSBuZWVkIGJvdGggYGNvc3RzYCBhbmQgYG9wZW5gP1xuICAgIHZhciBvcGVuID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZS5tYWtlKCk7XG4gICAgb3Blbi5wdXNoKHMsIDApO1xuXG4gICAgdmFyIGNsb3Nlc3QsXG4gICAgICAgIHUsIHYsXG4gICAgICAgIGNvc3Rfb2Zfc190b191LFxuICAgICAgICBhZGphY2VudF9ub2RlcyxcbiAgICAgICAgY29zdF9vZl9lLFxuICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSxcbiAgICAgICAgY29zdF9vZl9zX3RvX3YsXG4gICAgICAgIGZpcnN0X3Zpc2l0O1xuICAgIHdoaWxlICghb3Blbi5lbXB0eSgpKSB7XG4gICAgICAvLyBJbiB0aGUgbm9kZXMgcmVtYWluaW5nIGluIGdyYXBoIHRoYXQgaGF2ZSBhIGtub3duIGNvc3QgZnJvbSBzLFxuICAgICAgLy8gZmluZCB0aGUgbm9kZSwgdSwgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgIGNsb3Nlc3QgPSBvcGVuLnBvcCgpO1xuICAgICAgdSA9IGNsb3Nlc3QudmFsdWU7XG4gICAgICBjb3N0X29mX3NfdG9fdSA9IGNsb3Nlc3QuY29zdDtcblxuICAgICAgLy8gR2V0IG5vZGVzIGFkamFjZW50IHRvIHUuLi5cbiAgICAgIGFkamFjZW50X25vZGVzID0gZ3JhcGhbdV0gfHwge307XG5cbiAgICAgIC8vIC4uLmFuZCBleHBsb3JlIHRoZSBlZGdlcyB0aGF0IGNvbm5lY3QgdSB0byB0aG9zZSBub2RlcywgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBjb3N0IG9mIHRoZSBzaG9ydGVzdCBwYXRocyB0byBhbnkgb3IgYWxsIG9mIHRob3NlIG5vZGVzIGFzXG4gICAgICAvLyBuZWNlc3NhcnkuIHYgaXMgdGhlIG5vZGUgYWNyb3NzIHRoZSBjdXJyZW50IGVkZ2UgZnJvbSB1LlxuICAgICAgZm9yICh2IGluIGFkamFjZW50X25vZGVzKSB7XG4gICAgICAgIGlmIChhZGphY2VudF9ub2Rlcy5oYXNPd25Qcm9wZXJ0eSh2KSkge1xuICAgICAgICAgIC8vIEdldCB0aGUgY29zdCBvZiB0aGUgZWRnZSBydW5uaW5nIGZyb20gdSB0byB2LlxuICAgICAgICAgIGNvc3Rfb2ZfZSA9IGFkamFjZW50X25vZGVzW3ZdO1xuXG4gICAgICAgICAgLy8gQ29zdCBvZiBzIHRvIHUgcGx1cyB0aGUgY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUtLXRoaXMgaXMgKmEqXG4gICAgICAgICAgLy8gY29zdCBmcm9tIHMgdG8gdiB0aGF0IG1heSBvciBtYXkgbm90IGJlIGxlc3MgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIGtub3duIGNvc3QgdG8gdi5cbiAgICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSA9IGNvc3Rfb2Zfc190b191ICsgY29zdF9vZl9lO1xuXG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB2aXNpdGVkIHYgeWV0IE9SIGlmIHRoZSBjdXJyZW50IGtub3duIGNvc3QgZnJvbSBzIHRvXG4gICAgICAgICAgLy8gdiBpcyBncmVhdGVyIHRoYW4gdGhlIG5ldyBjb3N0IHdlIGp1c3QgZm91bmQgKGNvc3Qgb2YgcyB0byB1IHBsdXNcbiAgICAgICAgICAvLyBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZSksIHVwZGF0ZSB2J3MgY29zdCBpbiB0aGUgY29zdCBsaXN0IGFuZFxuICAgICAgICAgIC8vIHVwZGF0ZSB2J3MgcHJlZGVjZXNzb3IgaW4gdGhlIHByZWRlY2Vzc29yIGxpc3QgKGl0J3Mgbm93IHUpLlxuICAgICAgICAgIGNvc3Rfb2Zfc190b192ID0gY29zdHNbdl07XG4gICAgICAgICAgZmlyc3RfdmlzaXQgPSAodHlwZW9mIGNvc3RzW3ZdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgaWYgKGZpcnN0X3Zpc2l0IHx8IGNvc3Rfb2Zfc190b192ID4gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpIHtcbiAgICAgICAgICAgIGNvc3RzW3ZdID0gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2U7XG4gICAgICAgICAgICBvcGVuLnB1c2godiwgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpO1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JzW3ZdID0gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb3N0c1tkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBtc2cgPSBbJ0NvdWxkIG5vdCBmaW5kIGEgcGF0aCBmcm9tICcsIHMsICcgdG8gJywgZCwgJy4nXS5qb2luKCcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVkZWNlc3NvcnM7XG4gIH0sXG5cbiAgZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdDogZnVuY3Rpb24ocHJlZGVjZXNzb3JzLCBkKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHUgPSBkO1xuICAgIHZhciBwcmVkZWNlc3NvcjtcbiAgICB3aGlsZSAodSkge1xuICAgICAgbm9kZXMucHVzaCh1KTtcbiAgICAgIHByZWRlY2Vzc29yID0gcHJlZGVjZXNzb3JzW3VdO1xuICAgICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICB9XG4gICAgbm9kZXMucmV2ZXJzZSgpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICBmaW5kX3BhdGg6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgdmFyIHByZWRlY2Vzc29ycyA9IGRpamtzdHJhLnNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHMoZ3JhcGgsIHMsIGQpO1xuICAgIHJldHVybiBkaWprc3RyYS5leHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0KFxuICAgICAgcHJlZGVjZXNzb3JzLCBkKTtcbiAgfSxcblxuICAvKipcbiAgICogQSB2ZXJ5IG5haXZlIHByaW9yaXR5IHF1ZXVlIGltcGxlbWVudGF0aW9uLlxuICAgKi9cbiAgUHJpb3JpdHlRdWV1ZToge1xuICAgIG1ha2U6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICB2YXIgVCA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUsXG4gICAgICAgICAgdCA9IHt9LFxuICAgICAgICAgIGtleTtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgZm9yIChrZXkgaW4gVCkge1xuICAgICAgICBpZiAoVC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdFtrZXldID0gVFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0LnF1ZXVlID0gW107XG4gICAgICB0LnNvcnRlciA9IG9wdHMuc29ydGVyIHx8IFQuZGVmYXVsdF9zb3J0ZXI7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuXG4gICAgZGVmYXVsdF9zb3J0ZXI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb3N0IC0gYi5jb3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaXRlbSB0byB0aGUgcXVldWUgYW5kIGVuc3VyZSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50XG4gICAgICogaXMgYXQgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwdXNoOiBmdW5jdGlvbiAodmFsdWUsIGNvc3QpIHtcbiAgICAgIHZhciBpdGVtID0ge3ZhbHVlOiB2YWx1ZSwgY29zdDogY29zdH07XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgICB0aGlzLnF1ZXVlLnNvcnQodGhpcy5zb3J0ZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBpbiB0aGUgcXVldWUuXG4gICAgICovXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBub2RlLmpzIG1vZHVsZSBleHBvcnRzXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuY29kZVV0ZjggKGlucHV0KSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc2l6ZSA9IGlucHV0Lmxlbmd0aFxuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzaXplOyBpbmRleCsrKSB7XG4gICAgdmFyIHBvaW50ID0gaW5wdXQuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChwb2ludCA+PSAweEQ4MDAgJiYgcG9pbnQgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHZhciBzZWNvbmQgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgcG9pbnQgPSAocG9pbnQgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwXG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVUy1BU0NJSVxuICAgIGlmIChwb2ludCA8IDB4ODApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAyLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweDgwMCkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDYpIHwgMTkyKVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAzLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweEQ4MDAgfHwgKHBvaW50ID49IDB4RTAwMCAmJiBwb2ludCA8IDB4MTAwMDApKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTIpIHwgMjI0KVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiA2KSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gNC1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50ID49IDB4MTAwMDAgJiYgcG9pbnQgPD0gMHgxMEZGRkYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiAxOCkgfCAyNDApXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDEyKSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIEludmFsaWQgY2hhcmFjdGVyXG4gICAgcmVzdWx0LnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpLmJ1ZmZlclxufVxuIiwiXG5jb25zdCBjYW5Qcm9taXNlID0gcmVxdWlyZSgnLi9jYW4tcHJvbWlzZScpXG5cbmNvbnN0IFFSQ29kZSA9IHJlcXVpcmUoJy4vY29yZS9xcmNvZGUnKVxuY29uc3QgQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL2NhbnZhcycpXG5jb25zdCBTdmdSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvc3ZnLXRhZy5qcycpXG5cbmZ1bmN0aW9uIHJlbmRlckNhbnZhcyAocmVuZGVyRnVuYywgY2FudmFzLCB0ZXh0LCBvcHRzLCBjYikge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIGNvbnN0IGFyZ3NOdW0gPSBhcmdzLmxlbmd0aFxuICBjb25zdCBpc0xhc3RBcmdDYiA9IHR5cGVvZiBhcmdzW2FyZ3NOdW0gLSAxXSA9PT0gJ2Z1bmN0aW9uJ1xuXG4gIGlmICghaXNMYXN0QXJnQ2IgJiYgIWNhblByb21pc2UoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQgYXMgbGFzdCBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAoaXNMYXN0QXJnQ2IpIHtcbiAgICBpZiAoYXJnc051bSA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMgcHJvdmlkZWQnKVxuICAgIH1cblxuICAgIGlmIChhcmdzTnVtID09PSAyKSB7XG4gICAgICBjYiA9IHRleHRcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKGFyZ3NOdW0gPT09IDMpIHtcbiAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCAmJiB0eXBlb2YgY2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNiID0gb3B0c1xuICAgICAgICBvcHRzID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYiA9IG9wdHNcbiAgICAgICAgb3B0cyA9IHRleHRcbiAgICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGFyZ3NOdW0gPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoYXJnc051bSA9PT0gMSkge1xuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAoYXJnc051bSA9PT0gMiAmJiAhY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgIG9wdHMgPSB0ZXh0XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFFSQ29kZS5jcmVhdGUodGV4dCwgb3B0cylcbiAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jKGRhdGEsIGNhbnZhcywgb3B0cykpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBRUkNvZGUuY3JlYXRlKHRleHQsIG9wdHMpXG4gICAgY2IobnVsbCwgcmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2IoZSlcbiAgfVxufVxuXG5leHBvcnRzLmNyZWF0ZSA9IFFSQ29kZS5jcmVhdGVcbmV4cG9ydHMudG9DYW52YXMgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXIpXG5leHBvcnRzLnRvRGF0YVVSTCA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIENhbnZhc1JlbmRlcmVyLnJlbmRlclRvRGF0YVVSTClcblxuLy8gb25seSBzdmcgZm9yIG5vdy5cbmV4cG9ydHMudG9TdHJpbmcgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBmdW5jdGlvbiAoZGF0YSwgXywgb3B0cykge1xuICByZXR1cm4gU3ZnUmVuZGVyZXIucmVuZGVyKGRhdGEsIG9wdHMpXG59KVxuIiwiLy8gY2FuLXByb21pc2UgaGFzIGEgY3Jhc2ggaW4gc29tZSB2ZXJzaW9ucyBvZiByZWFjdCBuYXRpdmUgdGhhdCBkb250IGhhdmVcbi8vIHN0YW5kYXJkIGdsb2JhbCBvYmplY3RzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29sZGFpci9ub2RlLXFyY29kZS9pc3N1ZXMvMTU3XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgUHJvbWlzZS5wcm90b3R5cGUgJiYgUHJvbWlzZS5wcm90b3R5cGUudGhlblxufVxuIiwiLyoqXG4gKiBBbGlnbm1lbnQgcGF0dGVybiBhcmUgZml4ZWQgcmVmZXJlbmNlIHBhdHRlcm4gaW4gZGVmaW5lZCBwb3NpdGlvbnNcbiAqIGluIGEgbWF0cml4IHN5bWJvbG9neSwgd2hpY2ggZW5hYmxlcyB0aGUgZGVjb2RlIHNvZnR3YXJlIHRvIHJlLXN5bmNocm9uaXNlXG4gKiB0aGUgY29vcmRpbmF0ZSBtYXBwaW5nIG9mIHRoZSBpbWFnZSBtb2R1bGVzIGluIHRoZSBldmVudCBvZiBtb2RlcmF0ZSBhbW91bnRzXG4gKiBvZiBkaXN0b3J0aW9uIG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBBbGlnbm1lbnQgcGF0dGVybnMgYXJlIHByZXNlbnQgb25seSBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiAyIG9yIGxhcmdlclxuICogYW5kIHRoZWlyIG51bWJlciBkZXBlbmRzIG9uIHRoZSBzeW1ib2wgdmVyc2lvbi5cbiAqL1xuXG5jb25zdCBnZXRTeW1ib2xTaXplID0gcmVxdWlyZSgnLi91dGlscycpLmdldFN5bWJvbFNpemVcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlciBtb2R1bGUgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVyblxuICogZm9yIHRoZSBzcGVjaWZpZWQgUVIgQ29kZSB2ZXJzaW9uLlxuICpcbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIHBvc2l0aW9uZWQgc3ltbWV0cmljYWxseSBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgZGlhZ29uYWxcbiAqIHJ1bm5pbmcgZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzeW1ib2wgdG8gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIuXG4gKlxuICogU2luY2UgcG9zaXRpb25zIGFyZSBzaW1tZXRyaWNhbCBvbmx5IGhhbGYgb2YgdGhlIGNvb3JkaW5hdGVzIGFyZSByZXR1cm5lZC5cbiAqIEVhY2ggaXRlbSBvZiB0aGUgYXJyYXkgd2lsbCByZXByZXNlbnQgaW4gdHVybiB0aGUgeCBhbmQgeSBjb29yZGluYXRlLlxuICogQHNlZSB7QGxpbmsgZ2V0UG9zaXRpb25zfVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlXG4gKi9cbmV4cG9ydHMuZ2V0Um93Q29sQ29vcmRzID0gZnVuY3Rpb24gZ2V0Um93Q29sQ29vcmRzICh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxKSByZXR1cm4gW11cblxuICBjb25zdCBwb3NDb3VudCA9IE1hdGguZmxvb3IodmVyc2lvbiAvIDcpICsgMlxuICBjb25zdCBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuICBjb25zdCBpbnRlcnZhbHMgPSBzaXplID09PSAxNDUgPyAyNiA6IE1hdGguY2VpbCgoc2l6ZSAtIDEzKSAvICgyICogcG9zQ291bnQgLSAyKSkgKiAyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtzaXplIC0gN10gLy8gTGFzdCBjb29yZCBpcyBhbHdheXMgKHNpemUgLSA3KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9zQ291bnQgLSAxOyBpKyspIHtcbiAgICBwb3NpdGlvbnNbaV0gPSBwb3NpdGlvbnNbaSAtIDFdIC0gaW50ZXJ2YWxzXG4gIH1cblxuICBwb3NpdGlvbnMucHVzaCg2KSAvLyBGaXJzdCBjb29yZCBpcyBhbHdheXMgNlxuXG4gIHJldHVybiBwb3NpdGlvbnMucmV2ZXJzZSgpXG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgY2VudGVyIHBvaW50IG9mIHRoZSBwYXR0ZXJuIGFzICh4LCB5KSBjb29yZGluYXRlc1xuICpcbiAqIENvb3JkaW5hdGVzIGFyZSBjYWxjdWxhdGVkIGV4cGFuZGluZyB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyByZXR1cm5lZCBieSB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfVxuICogYW5kIGZpbHRlcmluZyBvdXQgdGhlIGl0ZW1zIHRoYXQgb3ZlcmxhcHMgd2l0aCBmaW5kZXIgcGF0dGVyblxuICpcbiAqIEBleGFtcGxlXG4gKiBGb3IgYSBWZXJzaW9uIDcgc3ltYm9sIHtAbGluayBnZXRSb3dDb2xDb29yZHN9IHJldHVybnMgdmFsdWVzIDYsIDIyIGFuZCAzOC5cbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMsIHRoZXJlZm9yZSwgYXJlIHRvIGJlIGNlbnRlcmVkIG9uIChyb3csIGNvbHVtbilcbiAqIHBvc2l0aW9ucyAoNiwyMiksICgyMiw2KSwgKDIyLDIyKSwgKDIyLDM4KSwgKDM4LDIyKSwgKDM4LDM4KS5cbiAqIE5vdGUgdGhhdCB0aGUgY29vcmRpbmF0ZXMgKDYsNiksICg2LDM4KSwgKDM4LDYpIGFyZSBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAqIGFuZCBhcmUgbm90IHRoZXJlZm9yZSB1c2VkIGZvciBhbGlnbm1lbnQgcGF0dGVybnMuXG4gKlxuICogbGV0IHBvcyA9IGdldFBvc2l0aW9ucyg3KVxuICogLy8gW1s2LDIyXSwgWzIyLDZdLCBbMjIsMjJdLCBbMjIsMzhdLCBbMzgsMjJdLCBbMzgsMzhdXVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICovXG5leHBvcnRzLmdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyAodmVyc2lvbikge1xuICBjb25zdCBjb29yZHMgPSBbXVxuICBjb25zdCBwb3MgPSBleHBvcnRzLmdldFJvd0NvbENvb3Jkcyh2ZXJzaW9uKVxuICBjb25zdCBwb3NMZW5ndGggPSBwb3MubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zTGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFNraXAgaWYgcG9zaXRpb24gaXMgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gICAgICBpZiAoKGkgPT09IDAgJiYgaiA9PT0gMCkgfHwgLy8gdG9wLWxlZnRcbiAgICAgICAgICAoaSA9PT0gMCAmJiBqID09PSBwb3NMZW5ndGggLSAxKSB8fCAvLyBib3R0b20tbGVmdFxuICAgICAgICAgIChpID09PSBwb3NMZW5ndGggLSAxICYmIGogPT09IDApKSB7IC8vIHRvcC1yaWdodFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb29yZHMucHVzaChbcG9zW2ldLCBwb3Nbal1dKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHNcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG4vKipcbiAqIEFycmF5IG9mIGNoYXJhY3RlcnMgYXZhaWxhYmxlIGluIGFscGhhbnVtZXJpYyBtb2RlXG4gKlxuICogQXMgcGVyIFFSIENvZGUgc3BlY2lmaWNhdGlvbiwgdG8gZWFjaCBjaGFyYWN0ZXJcbiAqIGlzIGFzc2lnbmVkIGEgdmFsdWUgZnJvbSAwIHRvIDQ0IHdoaWNoIGluIHRoaXMgY2FzZSBjb2luY2lkZXNcbiAqIHdpdGggdGhlIGFycmF5IGluZGV4XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5jb25zdCBBTFBIQV9OVU1fQ0hBUlMgPSBbXG4gICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyxcbiAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICcgJywgJyQnLCAnJScsICcqJywgJysnLCAnLScsICcuJywgJy8nLCAnOidcbl1cblxuZnVuY3Rpb24gQWxwaGFudW1lcmljRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLkFMUEhBTlVNRVJJQ1xuICB0aGlzLmRhdGEgPSBkYXRhXG59XG5cbkFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gMTEgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDIpICsgNiAqIChsZW5ndGggJSAyKVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBBbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGFyZSBkaXZpZGVkIGludG8gZ3JvdXBzIG9mIHR3byBjaGFyYWN0ZXJzXG4gIC8vIGFuZCBlbmNvZGVkIGFzIDExLWJpdCBiaW5hcnkgY29kZXMuXG4gIGZvciAoaSA9IDA7IGkgKyAyIDw9IHRoaXMuZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBtdWx0aXBsaWVkIGJ5IDQ1XG4gICAgbGV0IHZhbHVlID0gQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSAqIDQ1XG5cbiAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBzZWNvbmQgZGlnaXQgaXMgYWRkZWQgdG8gdGhlIHByb2R1Y3RcbiAgICB2YWx1ZSArPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaSArIDFdKVxuXG4gICAgLy8gVGhlIHN1bSBpcyB0aGVuIHN0b3JlZCBhcyAxMS1iaXQgYmluYXJ5IG51bWJlclxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDExKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkYXRhIGNoYXJhY3RlcnMgaXMgbm90IGEgbXVsdGlwbGUgb2YgdHdvLFxuICAvLyB0aGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaW5hbCBjaGFyYWN0ZXIgaXMgZW5jb2RlZCBhcyBhIDYtYml0IGJpbmFyeSBudW1iZXIuXG4gIGlmICh0aGlzLmRhdGEubGVuZ3RoICUgMikge1xuICAgIGJpdEJ1ZmZlci5wdXQoQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSwgNilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFscGhhbnVtZXJpY0RhdGFcbiIsImZ1bmN0aW9uIEJpdEJ1ZmZlciAoKSB7XG4gIHRoaXMuYnVmZmVyID0gW11cbiAgdGhpcy5sZW5ndGggPSAwXG59XG5cbkJpdEJ1ZmZlci5wcm90b3R5cGUgPSB7XG5cbiAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBjb25zdCBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KVxuICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxXG4gIH0sXG5cbiAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gIH0sXG5cbiAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XG4gICAgY29uc3QgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOClcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApXG4gICAgfVxuXG4gICAgaWYgKGJpdCkge1xuICAgICAgdGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSlcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCsrXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRCdWZmZXJcbiIsIi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGhhbmRsZSBRUiBDb2RlIHN5bWJvbCBtb2R1bGVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU3ltYm9sIHNpemVcbiAqL1xuZnVuY3Rpb24gQml0TWF0cml4IChzaXplKSB7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQml0TWF0cml4IHNpemUgbXVzdCBiZSBkZWZpbmVkIGFuZCBncmVhdGVyIHRoYW4gMCcpXG4gIH1cblxuICB0aGlzLnNpemUgPSBzaXplXG4gIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplKVxuICB0aGlzLnJlc2VydmVkQml0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUpXG59XG5cbi8qKlxuICogU2V0IGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqIElmIHJlc2VydmVkIGZsYWcgaXMgc2V0LCB0aGlzIGJpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2Vzc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXNlcnZlZFxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUsIHJlc2VydmVkKSB7XG4gIGNvbnN0IGluZGV4ID0gcm93ICogdGhpcy5zaXplICsgY29sXG4gIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZVxuICBpZiAocmVzZXJ2ZWQpIHRoaXMucmVzZXJ2ZWRCaXRbaW5kZXhdID0gdHJ1ZVxufVxuXG4vKipcbiAqIFJldHVybnMgYml0IHZhbHVlIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHJvd1xuICogQHBhcmFtICB7TnVtYmVyfSAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICByZXR1cm4gdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHhvciBvcGVyYXRvciBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqICh1c2VkIGR1cmluZyBtYXNraW5nIHByb2Nlc3MpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgY29sXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICB0aGlzLmRhdGFbcm93ICogdGhpcy5zaXplICsgY29sXSBePSB2YWx1ZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGJpdCBhdCBzcGVjaWZpZWQgbG9jYXRpb24gaXMgcmVzZXJ2ZWRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5pc1Jlc2VydmVkID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gIHJldHVybiB0aGlzLnJlc2VydmVkQml0W3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRNYXRyaXhcbiIsImNvbnN0IGVuY29kZVV0ZjggPSByZXF1aXJlKCdlbmNvZGUtdXRmOCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gQnl0ZURhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5CWVRFXG4gIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBlbmNvZGVVdGY4KGRhdGEpXG4gIH1cbiAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbn1cblxuQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogOFxufVxuXG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBiaXRCdWZmZXIucHV0KHRoaXMuZGF0YVtpXSwgOClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVEYXRhXG4iLCJjb25zdCBFQ0xldmVsID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWxldmVsJylcclxuXHJcbmNvbnN0IEVDX0JMT0NLU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDEsIDEsIDEsIDEsXHJcbiAgMSwgMSwgMSwgMSxcclxuICAxLCAxLCAyLCAyLFxyXG4gIDEsIDIsIDIsIDQsXHJcbiAgMSwgMiwgNCwgNCxcclxuICAyLCA0LCA0LCA0LFxyXG4gIDIsIDQsIDYsIDUsXHJcbiAgMiwgNCwgNiwgNixcclxuICAyLCA1LCA4LCA4LFxyXG4gIDQsIDUsIDgsIDgsXHJcbiAgNCwgNSwgOCwgMTEsXHJcbiAgNCwgOCwgMTAsIDExLFxyXG4gIDQsIDksIDEyLCAxNixcclxuICA0LCA5LCAxNiwgMTYsXHJcbiAgNiwgMTAsIDEyLCAxOCxcclxuICA2LCAxMCwgMTcsIDE2LFxyXG4gIDYsIDExLCAxNiwgMTksXHJcbiAgNiwgMTMsIDE4LCAyMSxcclxuICA3LCAxNCwgMjEsIDI1LFxyXG4gIDgsIDE2LCAyMCwgMjUsXHJcbiAgOCwgMTcsIDIzLCAyNSxcclxuICA5LCAxNywgMjMsIDM0LFxyXG4gIDksIDE4LCAyNSwgMzAsXHJcbiAgMTAsIDIwLCAyNywgMzIsXHJcbiAgMTIsIDIxLCAyOSwgMzUsXHJcbiAgMTIsIDIzLCAzNCwgMzcsXHJcbiAgMTIsIDI1LCAzNCwgNDAsXHJcbiAgMTMsIDI2LCAzNSwgNDIsXHJcbiAgMTQsIDI4LCAzOCwgNDUsXHJcbiAgMTUsIDI5LCA0MCwgNDgsXHJcbiAgMTYsIDMxLCA0MywgNTEsXHJcbiAgMTcsIDMzLCA0NSwgNTQsXHJcbiAgMTgsIDM1LCA0OCwgNTcsXHJcbiAgMTksIDM3LCA1MSwgNjAsXHJcbiAgMTksIDM4LCA1MywgNjMsXHJcbiAgMjAsIDQwLCA1NiwgNjYsXHJcbiAgMjEsIDQzLCA1OSwgNzAsXHJcbiAgMjIsIDQ1LCA2MiwgNzQsXHJcbiAgMjQsIDQ3LCA2NSwgNzcsXHJcbiAgMjUsIDQ5LCA2OCwgODFcclxuXVxyXG5cclxuY29uc3QgRUNfQ09ERVdPUkRTX1RBQkxFID0gW1xyXG4vLyBMICBNICBRICBIXHJcbiAgNywgMTAsIDEzLCAxNyxcclxuICAxMCwgMTYsIDIyLCAyOCxcclxuICAxNSwgMjYsIDM2LCA0NCxcclxuICAyMCwgMzYsIDUyLCA2NCxcclxuICAyNiwgNDgsIDcyLCA4OCxcclxuICAzNiwgNjQsIDk2LCAxMTIsXHJcbiAgNDAsIDcyLCAxMDgsIDEzMCxcclxuICA0OCwgODgsIDEzMiwgMTU2LFxyXG4gIDYwLCAxMTAsIDE2MCwgMTkyLFxyXG4gIDcyLCAxMzAsIDE5MiwgMjI0LFxyXG4gIDgwLCAxNTAsIDIyNCwgMjY0LFxyXG4gIDk2LCAxNzYsIDI2MCwgMzA4LFxyXG4gIDEwNCwgMTk4LCAyODgsIDM1MixcclxuICAxMjAsIDIxNiwgMzIwLCAzODQsXHJcbiAgMTMyLCAyNDAsIDM2MCwgNDMyLFxyXG4gIDE0NCwgMjgwLCA0MDgsIDQ4MCxcclxuICAxNjgsIDMwOCwgNDQ4LCA1MzIsXHJcbiAgMTgwLCAzMzgsIDUwNCwgNTg4LFxyXG4gIDE5NiwgMzY0LCA1NDYsIDY1MCxcclxuICAyMjQsIDQxNiwgNjAwLCA3MDAsXHJcbiAgMjI0LCA0NDIsIDY0NCwgNzUwLFxyXG4gIDI1MiwgNDc2LCA2OTAsIDgxNixcclxuICAyNzAsIDUwNCwgNzUwLCA5MDAsXHJcbiAgMzAwLCA1NjAsIDgxMCwgOTYwLFxyXG4gIDMxMiwgNTg4LCA4NzAsIDEwNTAsXHJcbiAgMzM2LCA2NDQsIDk1MiwgMTExMCxcclxuICAzNjAsIDcwMCwgMTAyMCwgMTIwMCxcclxuICAzOTAsIDcyOCwgMTA1MCwgMTI2MCxcclxuICA0MjAsIDc4NCwgMTE0MCwgMTM1MCxcclxuICA0NTAsIDgxMiwgMTIwMCwgMTQ0MCxcclxuICA0ODAsIDg2OCwgMTI5MCwgMTUzMCxcclxuICA1MTAsIDkyNCwgMTM1MCwgMTYyMCxcclxuICA1NDAsIDk4MCwgMTQ0MCwgMTcxMCxcclxuICA1NzAsIDEwMzYsIDE1MzAsIDE4MDAsXHJcbiAgNTcwLCAxMDY0LCAxNTkwLCAxODkwLFxyXG4gIDYwMCwgMTEyMCwgMTY4MCwgMTk4MCxcclxuICA2MzAsIDEyMDQsIDE3NzAsIDIxMDAsXHJcbiAgNjYwLCAxMjYwLCAxODYwLCAyMjIwLFxyXG4gIDcyMCwgMTMxNiwgMTk1MCwgMjMxMCxcclxuICA3NTAsIDEzNzIsIDIwNDAsIDI0MzBcclxuXVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2NrIHRoYXQgdGhlIFFSIENvZGUgc2hvdWxkIGNvbnRhaW5cclxuICogZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzXHJcbiAqL1xyXG5leHBvcnRzLmdldEJsb2Nrc0NvdW50ID0gZnVuY3Rpb24gZ2V0QmxvY2tzQ291bnQgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgc3dpdGNoIChlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gICAgY2FzZSBFQ0xldmVsLkw6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAwXVxyXG4gICAgY2FzZSBFQ0xldmVsLk06XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXVxyXG4gICAgY2FzZSBFQ0xldmVsLlE6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAyXVxyXG4gICAgY2FzZSBFQ0xldmVsLkg6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAzXVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyB0byB1c2UgZm9yIHRoZSBzcGVjaWZpZWRcclxuICogdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXHJcbiAqL1xyXG5leHBvcnRzLmdldFRvdGFsQ29kZXdvcmRzQ291bnQgPSBmdW5jdGlvbiBnZXRUb3RhbENvZGV3b3Jkc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0cy5MID0geyBiaXQ6IDEgfVxuZXhwb3J0cy5NID0geyBiaXQ6IDAgfVxuZXhwb3J0cy5RID0geyBiaXQ6IDMgfVxuZXhwb3J0cy5IID0geyBiaXQ6IDIgfVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICdsb3cnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuTFxuXG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk1cblxuICAgIGNhc2UgJ3EnOlxuICAgIGNhc2UgJ3F1YXJ0aWxlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLlFcblxuICAgIGNhc2UgJ2gnOlxuICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuSFxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBFQyBMZXZlbDogJyArIHN0cmluZylcbiAgfVxufVxuXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChsZXZlbCkge1xuICByZXR1cm4gbGV2ZWwgJiYgdHlwZW9mIGxldmVsLmJpdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsZXZlbC5iaXQgPj0gMCAmJiBsZXZlbC5iaXQgPCA0XG59XG5cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cbn1cbiIsImNvbnN0IGdldFN5bWJvbFNpemUgPSByZXF1aXJlKCcuL3V0aWxzJykuZ2V0U3ltYm9sU2l6ZVxuY29uc3QgRklOREVSX1BBVFRFUk5fU0laRSA9IDdcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGZpbmRlciBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xuZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMgKHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbilcblxuICByZXR1cm4gW1xuICAgIC8vIHRvcC1sZWZ0XG4gICAgWzAsIDBdLFxuICAgIC8vIHRvcC1yaWdodFxuICAgIFtzaXplIC0gRklOREVSX1BBVFRFUk5fU0laRSwgMF0sXG4gICAgLy8gYm90dG9tLWxlZnRcbiAgICBbMCwgc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkVdXG4gIF1cbn1cbiIsImNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmNvbnN0IEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKVxuY29uc3QgRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMCkgfCAoMSA8PCA0KSB8ICgxIDw8IDEpXG5jb25zdCBHMTVfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE1KVxuXG4vKipcbiAqIFJldHVybnMgZm9ybWF0IGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBpcyBhIDE1LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDUgZGF0YSBiaXRzLFxuICogd2l0aCAxMCBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE1LCA1KSBCQ0ggY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWFzayAgICAgICAgICAgICAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIEVuY29kZWQgZm9ybWF0IGluZm9ybWF0aW9uIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzIChlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaykge1xuICBjb25zdCBkYXRhID0gKChlcnJvckNvcnJlY3Rpb25MZXZlbC5iaXQgPDwgMykgfCBtYXNrKVxuICBsZXQgZCA9IGRhdGEgPDwgMTBcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMTVfQkNIID49IDApIHtcbiAgICBkIF49IChHMTUgPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCkpXG4gIH1cblxuICAvLyB4b3IgZmluYWwgZGF0YSB3aXRoIG1hc2sgcGF0dGVybiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdFxuICAvLyBubyBjb21iaW5hdGlvbiBvZiBFcnJvciBDb3JyZWN0aW9uIExldmVsIGFuZCBkYXRhIG1hc2sgcGF0dGVyblxuICAvLyB3aWxsIHJlc3VsdCBpbiBhbiBhbGwtemVybyBkYXRhIHN0cmluZ1xuICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0tcbn1cbiIsImNvbnN0IEVYUF9UQUJMRSA9IG5ldyBVaW50OEFycmF5KDUxMilcbmNvbnN0IExPR19UQUJMRSA9IG5ldyBVaW50OEFycmF5KDI1Nilcbi8qKlxuICogUHJlY29tcHV0ZSB0aGUgbG9nIGFuZCBhbnRpLWxvZyB0YWJsZXMgZm9yIGZhc3RlciBjb21wdXRhdGlvbiBsYXRlclxuICpcbiAqIEZvciBlYWNoIHBvc3NpYmxlIHZhbHVlIGluIHRoZSBnYWxvaXMgZmllbGQgMl44LCB3ZSB3aWxsIHByZS1jb21wdXRlXG4gKiB0aGUgbG9nYXJpdGhtIGFuZCBhbnRpLWxvZ2FyaXRobSAoZXhwb25lbnRpYWwpIG9mIHRoaXMgdmFsdWVcbiAqXG4gKiByZWYge0BsaW5rIGh0dHBzOi8vZW4ud2lraXZlcnNpdHkub3JnL3dpa2kvUmVlZCVFMiU4MCU5M1NvbG9tb25fY29kZXNfZm9yX2NvZGVycyNJbnRyb2R1Y3Rpb25fdG9fbWF0aGVtYXRpY2FsX2ZpZWxkc31cbiAqL1xuOyhmdW5jdGlvbiBpbml0VGFibGVzICgpIHtcbiAgbGV0IHggPSAxXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSB4XG4gICAgTE9HX1RBQkxFW3hdID0gaVxuXG4gICAgeCA8PD0gMSAvLyBtdWx0aXBseSBieSAyXG5cbiAgICAvLyBUaGUgUVIgY29kZSBzcGVjaWZpY2F0aW9uIHNheXMgdG8gdXNlIGJ5dGUtd2lzZSBtb2R1bG8gMTAwMDExMTAxIGFyaXRobWV0aWMuXG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdoZW4gYSBudW1iZXIgaXMgMjU2IG9yIGxhcmdlciwgaXQgc2hvdWxkIGJlIFhPUmVkIHdpdGggMHgxMUQuXG4gICAgaWYgKHggJiAweDEwMCkgeyAvLyBzaW1pbGFyIHRvIHggPj0gMjU2LCBidXQgYSBsb3QgZmFzdGVyIChiZWNhdXNlIDB4MTAwID09IDI1NilcbiAgICAgIHggXj0gMHgxMURcbiAgICB9XG4gIH1cblxuICAvLyBPcHRpbWl6YXRpb246IGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgYW50aS1sb2cgdGFibGUgc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIG1vZCAyNTUgdG9cbiAgLy8gc3RheSBpbnNpZGUgdGhlIGJvdW5kcyAoYmVjYXVzZSB3ZSB3aWxsIG1haW5seSB1c2UgdGhpcyB0YWJsZSBmb3IgdGhlIG11bHRpcGxpY2F0aW9uIG9mXG4gIC8vIHR3byBHRiBudW1iZXJzLCBubyBtb3JlKS5cbiAgLy8gQHNlZSB7QGxpbmsgbXVsfVxuICBmb3IgKGxldCBpID0gMjU1OyBpIDwgNTEyOyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSBFWFBfVEFCTEVbaSAtIDI1NV1cbiAgfVxufSgpKVxuXG4vKipcbiAqIFJldHVybnMgbG9nIHZhbHVlIG9mIG4gaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uIGxvZyAobikge1xuICBpZiAobiA8IDEpIHRocm93IG5ldyBFcnJvcignbG9nKCcgKyBuICsgJyknKVxuICByZXR1cm4gTE9HX1RBQkxFW25dXG59XG5cbi8qKlxuICogUmV0dXJucyBhbnRpLWxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5leHAgPSBmdW5jdGlvbiBleHAgKG4pIHtcbiAgcmV0dXJuIEVYUF9UQUJMRVtuXVxufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG51bWJlciBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBzaG91bGQgYmUgRVhQX1RBQkxFWyhMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV0pICUgMjU1XSBpZiBFWFBfVEFCTEUgd2Fzbid0IG92ZXJzaXplZFxuICAvLyBAc2VlIHtAbGluayBpbml0VGFibGVzfVxuICByZXR1cm4gRVhQX1RBQkxFW0xPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XV1cbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gS2FuamlEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuS0FOSklcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5LYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogMTNcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW4gdGhlIFNoaWZ0IEpJUyBzeXN0ZW0sIEthbmppIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgdHdvIGJ5dGUgY29tYmluYXRpb24uXG4gIC8vIFRoZXNlIGJ5dGUgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICAvLyBKSVMgWCAwMjA4IGdpdmVzIGRldGFpbHMgb2YgdGhlIHNoaWZ0IGNvZGVkIHJlcHJlc2VudGF0aW9uLlxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHZhbHVlID0gVXRpbHMudG9TSklTKHRoaXMuZGF0YVtpXSlcblxuICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4ODE0MCB0byAweDlGRkM6XG4gICAgaWYgKHZhbHVlID49IDB4ODE0MCAmJiB2YWx1ZSA8PSAweDlGRkMpIHtcbiAgICAgIC8vIFN1YnRyYWN0IDB4ODE0MCBmcm9tIFNoaWZ0IEpJUyB2YWx1ZVxuICAgICAgdmFsdWUgLT0gMHg4MTQwXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweEUwNDAgdG8gMHhFQkJGXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAweEUwNDAgJiYgdmFsdWUgPD0gMHhFQkJGKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweEMxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4QzE0MFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIFNKSVMgY2hhcmFjdGVyOiAnICsgdGhpcy5kYXRhW2ldICsgJ1xcbicgK1xuICAgICAgICAnTWFrZSBzdXJlIHlvdXIgY2hhcnNldCBpcyBVVEYtOCcpXG4gICAgfVxuXG4gICAgLy8gTXVsdGlwbHkgbW9zdCBzaWduaWZpY2FudCBieXRlIG9mIHJlc3VsdCBieSAweEMwXG4gICAgLy8gYW5kIGFkZCBsZWFzdCBzaWduaWZpY2FudCBieXRlIHRvIHByb2R1Y3RcbiAgICB2YWx1ZSA9ICgoKHZhbHVlID4+PiA4KSAmIDB4ZmYpICogMHhDMCkgKyAodmFsdWUgJiAweGZmKVxuXG4gICAgLy8gQ29udmVydCByZXN1bHQgdG8gYSAxMy1iaXQgYmluYXJ5IHN0cmluZ1xuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2FuamlEYXRhXG4iLCIvKipcbiAqIERhdGEgbWFzayBwYXR0ZXJuIHJlZmVyZW5jZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5QYXR0ZXJucyA9IHtcbiAgUEFUVEVSTjAwMDogMCxcbiAgUEFUVEVSTjAwMTogMSxcbiAgUEFUVEVSTjAxMDogMixcbiAgUEFUVEVSTjAxMTogMyxcbiAgUEFUVEVSTjEwMDogNCxcbiAgUEFUVEVSTjEwMTogNSxcbiAgUEFUVEVSTjExMDogNixcbiAgUEFUVEVSTjExMTogN1xufVxuXG4vKipcbiAqIFdlaWdodGVkIHBlbmFsdHkgc2NvcmVzIGZvciB0aGUgdW5kZXNpcmFibGUgZmVhdHVyZXNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IFBlbmFsdHlTY29yZXMgPSB7XG4gIE4xOiAzLFxuICBOMjogMyxcbiAgTjM6IDQwLFxuICBONDogMTBcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBtYXNrIHBhdHRlcm4gdmFsdWUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBtYXNrICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAobWFzaykge1xuICByZXR1cm4gbWFzayAhPSBudWxsICYmIG1hc2sgIT09ICcnICYmICFpc05hTihtYXNrKSAmJiBtYXNrID49IDAgJiYgbWFzayA8PSA3XG59XG5cbi8qKlxuICogUmV0dXJucyBtYXNrIHBhdHRlcm4gZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IHZhbGlkLCByZXR1cm5zIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHZhbHVlICAgICAgICBNYXNrIHBhdHRlcm4gdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBWYWxpZCBtYXNrIHBhdHRlcm4gb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlKSB7XG4gIHJldHVybiBleHBvcnRzLmlzVmFsaWQodmFsdWUpID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IHVuZGVmaW5lZFxufVxuXG4vKipcbiogRmluZCBhZGphY2VudCBtb2R1bGVzIGluIHJvdy9jb2x1bW4gd2l0aCB0aGUgc2FtZSBjb2xvclxuKiBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZS5cbipcbiogUG9pbnRzOiBOMSArIGlcbiogaSBpcyB0aGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBudW1iZXIgb2YgYWRqYWNlbnQgbW9kdWxlcyBvZiB0aGUgc2FtZSBjb2xvciBleGNlZWRzIDVcbiovXG5leHBvcnRzLmdldFBlbmFsdHlOMSA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMSAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG4gIGxldCBzYW1lQ291bnRDb2wgPSAwXG4gIGxldCBzYW1lQ291bnRSb3cgPSAwXG4gIGxldCBsYXN0Q29sID0gbnVsbFxuICBsZXQgbGFzdFJvdyA9IG51bGxcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgIHNhbWVDb3VudENvbCA9IHNhbWVDb3VudFJvdyA9IDBcbiAgICBsYXN0Q29sID0gbGFzdFJvdyA9IG51bGxcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICBsZXQgbW9kdWxlID0gZGF0YS5nZXQocm93LCBjb2wpXG4gICAgICBpZiAobW9kdWxlID09PSBsYXN0Q29sKSB7XG4gICAgICAgIHNhbWVDb3VudENvbCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpXG4gICAgICAgIGxhc3RDb2wgPSBtb2R1bGVcbiAgICAgICAgc2FtZUNvdW50Q29sID0gMVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUgPSBkYXRhLmdldChjb2wsIHJvdylcbiAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RSb3cpIHtcbiAgICAgICAgc2FtZUNvdW50Um93KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgICAgICAgbGFzdFJvdyA9IG1vZHVsZVxuICAgICAgICBzYW1lQ291bnRSb3cgPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNhbWVDb3VudENvbCA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KVxuICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgfVxuXG4gIHJldHVybiBwb2ludHNcbn1cblxuLyoqXG4gKiBGaW5kIDJ4MiBibG9ja3Mgd2l0aCB0aGUgc2FtZSBjb2xvciBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZVxuICpcbiAqIFBvaW50czogTjIgKiAobSAtIDEpICogKG4gLSAxKVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMiA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMiAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZSAtIDE7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZSAtIDE7IGNvbCsrKSB7XG4gICAgICBjb25zdCBsYXN0ID0gZGF0YS5nZXQocm93LCBjb2wpICtcbiAgICAgICAgZGF0YS5nZXQocm93LCBjb2wgKyAxKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdyArIDEsIGNvbCkgK1xuICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wgKyAxKVxuXG4gICAgICBpZiAobGFzdCA9PT0gNCB8fCBsYXN0ID09PSAwKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4yXG59XG5cbi8qKlxuICogRmluZCAxOjE6MzoxOjEgcmF0aW8gKGRhcms6bGlnaHQ6ZGFyazpsaWdodDpkYXJrKSBwYXR0ZXJuIGluIHJvdy9jb2x1bW4sXG4gKiBwcmVjZWRlZCBvciBmb2xsb3dlZCBieSBsaWdodCBhcmVhIDQgbW9kdWxlcyB3aWRlXG4gKlxuICogUG9pbnRzOiBOMyAqIG51bWJlciBvZiBwYXR0ZXJuIGZvdW5kXG4gKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU4zID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4zIChkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBkYXRhLnNpemVcbiAgbGV0IHBvaW50cyA9IDBcbiAgbGV0IGJpdHNDb2wgPSAwXG4gIGxldCBiaXRzUm93ID0gMFxuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgYml0c0NvbCA9IGJpdHNSb3cgPSAwXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgIGJpdHNDb2wgPSAoKGJpdHNDb2wgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChyb3csIGNvbClcbiAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNDb2wgPT09IDB4NUQwIHx8IGJpdHNDb2wgPT09IDB4MDVEKSkgcG9pbnRzKytcblxuICAgICAgYml0c1JvdyA9ICgoYml0c1JvdyA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KGNvbCwgcm93KVxuICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c1JvdyA9PT0gMHg1RDAgfHwgYml0c1JvdyA9PT0gMHgwNUQpKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4zXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzIGluIGVudGlyZSBzeW1ib2xcbiAqXG4gKiBQb2ludHM6IE40ICoga1xuICpcbiAqIGsgaXMgdGhlIHJhdGluZyBvZiB0aGUgZGV2aWF0aW9uIG9mIHRoZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlc1xuICogaW4gdGhlIHN5bWJvbCBmcm9tIDUwJSBpbiBzdGVwcyBvZiA1JVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlONCA9IGZ1bmN0aW9uIGdldFBlbmFsdHlONCAoZGF0YSkge1xuICBsZXQgZGFya0NvdW50ID0gMFxuICBjb25zdCBtb2R1bGVzQ291bnQgPSBkYXRhLmRhdGEubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzQ291bnQ7IGkrKykgZGFya0NvdW50ICs9IGRhdGEuZGF0YVtpXVxuXG4gIGNvbnN0IGsgPSBNYXRoLmFicyhNYXRoLmNlaWwoKGRhcmtDb3VudCAqIDEwMCAvIG1vZHVsZXNDb3VudCkgLyA1KSAtIDEwKVxuXG4gIHJldHVybiBrICogUGVuYWx0eVNjb3Jlcy5ONFxufVxuXG4vKipcbiAqIFJldHVybiBtYXNrIHZhbHVlIGF0IGdpdmVuIHBvc2l0aW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBtYXNrUGF0dGVybiBQYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBpICAgICAgICAgICBSb3dcbiAqIEBwYXJhbSAge051bWJlcn0gaiAgICAgICAgICAgQ29sdW1uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgIE1hc2sgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0TWFza0F0IChtYXNrUGF0dGVybiwgaSwgaikge1xuICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMDA6IHJldHVybiAoaSArIGopICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAxOiByZXR1cm4gaSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAxMDogcmV0dXJuIGogJSAzID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTE6IHJldHVybiAoaSArIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAwOiByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAxOiByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTEwOiByZXR1cm4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTExOiByZXR1cm4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PT0gMFxuXG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYSBtYXNrIHBhdHRlcm4gdG8gYSBCaXRNYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHBhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGEgICAgQml0TWF0cml4IGRhdGFcbiAqL1xuZXhwb3J0cy5hcHBseU1hc2sgPSBmdW5jdGlvbiBhcHBseU1hc2sgKHBhdHRlcm4sIGRhdGEpIHtcbiAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZVxuXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgIGlmIChkYXRhLmlzUmVzZXJ2ZWQocm93LCBjb2wpKSBjb250aW51ZVxuICAgICAgZGF0YS54b3Iocm93LCBjb2wsIGdldE1hc2tBdChwYXR0ZXJuLCByb3csIGNvbCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVzdCBtYXNrIHBhdHRlcm4gZm9yIGRhdGFcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGFcbiAqIEByZXR1cm4ge051bWJlcn0gTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAqL1xuZXhwb3J0cy5nZXRCZXN0TWFzayA9IGZ1bmN0aW9uIGdldEJlc3RNYXNrIChkYXRhLCBzZXR1cEZvcm1hdEZ1bmMpIHtcbiAgY29uc3QgbnVtUGF0dGVybnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLlBhdHRlcm5zKS5sZW5ndGhcbiAgbGV0IGJlc3RQYXR0ZXJuID0gMFxuICBsZXQgbG93ZXJQZW5hbHR5ID0gSW5maW5pdHlcblxuICBmb3IgKGxldCBwID0gMDsgcCA8IG51bVBhdHRlcm5zOyBwKyspIHtcbiAgICBzZXR1cEZvcm1hdEZ1bmMocClcbiAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHBlbmFsdHlcbiAgICBjb25zdCBwZW5hbHR5ID1cbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4xKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4yKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4zKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU40KGRhdGEpXG5cbiAgICAvLyBVbmRvIHByZXZpb3VzbHkgYXBwbGllZCBtYXNrXG4gICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSlcblxuICAgIGlmIChwZW5hbHR5IDwgbG93ZXJQZW5hbHR5KSB7XG4gICAgICBsb3dlclBlbmFsdHkgPSBwZW5hbHR5XG4gICAgICBiZXN0UGF0dGVybiA9IHBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdFBhdHRlcm5cbn1cbiIsImNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuXG4vKipcbiAqIE51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSB0aGUgZGVjaW1hbCBkaWdpdCBzZXQgKDAgLSA5KVxuICogKGJ5dGUgdmFsdWVzIDMwSEVYIHRvIDM5SEVYKS5cbiAqIE5vcm1hbGx5LCAzIGRhdGEgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgMTAgYml0cy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk5VTUVSSUMgPSB7XG4gIGlkOiAnTnVtZXJpYycsXG4gIGJpdDogMSA8PCAwLFxuICBjY0JpdHM6IFsxMCwgMTIsIDE0XVxufVxuXG4vKipcbiAqIEFscGhhbnVtZXJpYyBtb2RlIGVuY29kZXMgZGF0YSBmcm9tIGEgc2V0IG9mIDQ1IGNoYXJhY3RlcnMsXG4gKiBpLmUuIDEwIG51bWVyaWMgZGlnaXRzICgwIC0gOSksXG4gKiAgICAgIDI2IGFscGhhYmV0aWMgY2hhcmFjdGVycyAoQSAtIFopLFxuICogICBhbmQgOSBzeW1ib2xzIChTUCwgJCwgJSwgKiwgKywgLSwgLiwgLywgOikuXG4gKiBOb3JtYWxseSwgdHdvIGlucHV0IGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDExIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSB7XG4gIGlkOiAnQWxwaGFudW1lcmljJyxcbiAgYml0OiAxIDw8IDEsXG4gIGNjQml0czogWzksIDExLCAxM11cbn1cblxuLyoqXG4gKiBJbiBieXRlIG1vZGUsIGRhdGEgaXMgZW5jb2RlZCBhdCA4IGJpdHMgcGVyIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLkJZVEUgPSB7XG4gIGlkOiAnQnl0ZScsXG4gIGJpdDogMSA8PCAyLFxuICBjY0JpdHM6IFs4LCAxNiwgMTZdXG59XG5cbi8qKlxuICogVGhlIEthbmppIG1vZGUgZWZmaWNpZW50bHkgZW5jb2RlcyBLYW5qaSBjaGFyYWN0ZXJzIGluIGFjY29yZGFuY2Ugd2l0aFxuICogdGhlIFNoaWZ0IEpJUyBzeXN0ZW0gYmFzZWQgb24gSklTIFggMDIwOC5cbiAqIFRoZSBTaGlmdCBKSVMgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICogSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAqIEVhY2ggdHdvLWJ5dGUgY2hhcmFjdGVyIHZhbHVlIGlzIGNvbXBhY3RlZCB0byBhIDEzLWJpdCBiaW5hcnkgY29kZXdvcmQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5LQU5KSSA9IHtcbiAgaWQ6ICdLYW5qaScsXG4gIGJpdDogMSA8PCAzLFxuICBjY0JpdHM6IFs4LCAxMCwgMTJdXG59XG5cbi8qKlxuICogTWl4ZWQgbW9kZSB3aWxsIGNvbnRhaW4gYSBzZXF1ZW5jZXMgb2YgZGF0YSBpbiBhIGNvbWJpbmF0aW9uIG9mIGFueSBvZlxuICogdGhlIG1vZGVzIGRlc2NyaWJlZCBhYm92ZVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuTUlYRUQgPSB7XG4gIGJpdDogLTFcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYml0cyBuZWVkZWQgdG8gc3RvcmUgdGhlIGRhdGEgbGVuZ3RoXG4gKiBhY2NvcmRpbmcgdG8gUVIgQ29kZSBzcGVjaWZpY2F0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgRGF0YSBtb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgTnVtYmVyIG9mIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRDaGFyQ291bnRJbmRpY2F0b3IgPSBmdW5jdGlvbiBnZXRDaGFyQ291bnRJbmRpY2F0b3IgKG1vZGUsIHZlcnNpb24pIHtcbiAgaWYgKCFtb2RlLmNjQml0cykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGU6ICcgKyBtb2RlKVxuXG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICBpZiAodmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPCAxMCkgcmV0dXJuIG1vZGUuY2NCaXRzWzBdXG4gIGVsc2UgaWYgKHZlcnNpb24gPCAyNykgcmV0dXJuIG1vZGUuY2NCaXRzWzFdXG4gIHJldHVybiBtb2RlLmNjQml0c1syXVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1vc3QgZWZmaWNpZW50IG1vZGUgdG8gc3RvcmUgdGhlIHNwZWNpZmllZCBkYXRhXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IGRhdGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgQmVzdCBtb2RlXG4gKi9cbmV4cG9ydHMuZ2V0QmVzdE1vZGVGb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdE1vZGVGb3JEYXRhIChkYXRhU3RyKSB7XG4gIGlmIChSZWdleC50ZXN0TnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQ1xuICBlbHNlIGlmIChSZWdleC50ZXN0QWxwaGFudW1lcmljKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEthbmppKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5LQU5KSVxuICBlbHNlIHJldHVybiBleHBvcnRzLkJZVEVcbn1cblxuLyoqXG4gKiBSZXR1cm4gbW9kZSBuYW1lIGFzIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIE1vZGUgbmFtZVxuICovXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKG1vZGUpIHtcbiAgaWYgKG1vZGUgJiYgbW9kZS5pZCkgcmV0dXJuIG1vZGUuaWRcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlucHV0IHBhcmFtIGlzIGEgdmFsaWQgbW9kZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gICB7TW9kZX0gICAgbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdmFsaWQgbW9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1vZGUpIHtcbiAgcmV0dXJuIG1vZGUgJiYgbW9kZS5iaXQgJiYgbW9kZS5jY0JpdHNcbn1cblxuLyoqXG4gKiBHZXQgbW9kZSBvYmplY3QgZnJvbSBpdHMgbmFtZVxuICpcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0cmluZyBNb2RlIG5hbWVcbiAqIEByZXR1cm5zIHtNb2RlfSAgICAgICAgICBNb2RlIG9iamVjdFxuICovXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdudW1lcmljJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk5VTUVSSUNcbiAgICBjYXNlICdhbHBoYW51bWVyaWMnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuQUxQSEFOVU1FUklDXG4gICAgY2FzZSAna2FuamknOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuS0FOSklcbiAgICBjYXNlICdieXRlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkJZVEVcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGU6ICcgKyBzdHJpbmcpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIG1vZGUgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgbW9kZSwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtNb2RlfFN0cmluZ30gdmFsdWUgICAgICAgIEVuY29kaW5nIG1vZGVcbiAqIEBwYXJhbSAge01vZGV9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge01vZGV9ICAgICAgICAgICAgICAgICAgICAgRW5jb2RpbmcgbW9kZVxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gTnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5OVU1FUklDXG4gIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKVxufVxuXG5OdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAobGVuZ3RoKSB7XG4gIHJldHVybiAxMCAqIE1hdGguZmxvb3IobGVuZ3RoIC8gMykgKyAoKGxlbmd0aCAlIDMpID8gKChsZW5ndGggJSAzKSAqIDMgKyAxKSA6IDApXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpLCBncm91cCwgdmFsdWVcblxuICAvLyBUaGUgaW5wdXQgZGF0YSBzdHJpbmcgaXMgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0aHJlZSBkaWdpdHMsXG4gIC8vIGFuZCBlYWNoIGdyb3VwIGlzIGNvbnZlcnRlZCB0byBpdHMgMTAtYml0IGJpbmFyeSBlcXVpdmFsZW50LlxuICBmb3IgKGkgPSAwOyBpICsgMyA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBncm91cCA9IHRoaXMuZGF0YS5zdWJzdHIoaSwgMylcbiAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMClcblxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEwKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkaWdpdHMgaXMgbm90IGFuIGV4YWN0IG11bHRpcGxlIG9mIHRocmVlLFxuICAvLyB0aGUgZmluYWwgb25lIG9yIHR3byBkaWdpdHMgYXJlIGNvbnZlcnRlZCB0byA0IG9yIDcgYml0cyByZXNwZWN0aXZlbHkuXG4gIGNvbnN0IHJlbWFpbmluZ051bSA9IHRoaXMuZGF0YS5sZW5ndGggLSBpXG4gIGlmIChyZW1haW5pbmdOdW0gPiAwKSB7XG4gICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGkpXG4gICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApXG5cbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCByZW1haW5pbmdOdW0gKiAzICsgMSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWVyaWNEYXRhXG4iLCJjb25zdCBHRiA9IHJlcXVpcmUoJy4vZ2Fsb2lzLWZpZWxkJylcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBwb2x5bm9taWFscyBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDEgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDIgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgUHJvZHVjdCBvZiBwMSBhbmQgcDJcbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHAxLCBwMikge1xuICBjb25zdCBjb2VmZiA9IG5ldyBVaW50OEFycmF5KHAxLmxlbmd0aCArIHAyLmxlbmd0aCAtIDEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcDIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvZWZmW2kgKyBqXSBePSBHRi5tdWwocDFbaV0sIHAyW2pdKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2VmZlxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcmVtYWluZGVyIG9mIHBvbHlub21pYWxzIGRpdmlzaW9uXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aWRlbnQgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aXNvciAgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgUmVtYWluZGVyXG4gKi9cbmV4cG9ydHMubW9kID0gZnVuY3Rpb24gbW9kIChkaXZpZGVudCwgZGl2aXNvcikge1xuICBsZXQgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZGl2aWRlbnQpXG5cbiAgd2hpbGUgKChyZXN1bHQubGVuZ3RoIC0gZGl2aXNvci5sZW5ndGgpID49IDApIHtcbiAgICBjb25zdCBjb2VmZiA9IHJlc3VsdFswXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gXj0gR0YubXVsKGRpdmlzb3JbaV0sIGNvZWZmKVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgemVyb3MgZnJvbSBidWZmZXIgaGVhZFxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgd2hpbGUgKG9mZnNldCA8IHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0W29mZnNldF0gPT09IDApIG9mZnNldCsrXG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBzcGVjaWZpZWQgZGVncmVlXG4gKiAodXNlZCBieSBSZWVkLVNvbG9tb24gZW5jb2RlcilcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZSBEZWdyZWUgb2YgdGhlIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICBCdWZmZXIgY29udGFpbmluZyBwb2x5bm9taWFsIGNvZWZmaWNpZW50c1xuICovXG5leHBvcnRzLmdlbmVyYXRlRUNQb2x5bm9taWFsID0gZnVuY3Rpb24gZ2VuZXJhdGVFQ1BvbHlub21pYWwgKGRlZ3JlZSkge1xuICBsZXQgcG9seSA9IG5ldyBVaW50OEFycmF5KFsxXSlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWdyZWU7IGkrKykge1xuICAgIHBvbHkgPSBleHBvcnRzLm11bChwb2x5LCBuZXcgVWludDhBcnJheShbMSwgR0YuZXhwKGkpXSkpXG4gIH1cblxuICByZXR1cm4gcG9seVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxuY29uc3QgQml0QnVmZmVyID0gcmVxdWlyZSgnLi9iaXQtYnVmZmVyJylcbmNvbnN0IEJpdE1hdHJpeCA9IHJlcXVpcmUoJy4vYml0LW1hdHJpeCcpXG5jb25zdCBBbGlnbm1lbnRQYXR0ZXJuID0gcmVxdWlyZSgnLi9hbGlnbm1lbnQtcGF0dGVybicpXG5jb25zdCBGaW5kZXJQYXR0ZXJuID0gcmVxdWlyZSgnLi9maW5kZXItcGF0dGVybicpXG5jb25zdCBNYXNrUGF0dGVybiA9IHJlcXVpcmUoJy4vbWFzay1wYXR0ZXJuJylcbmNvbnN0IEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbmNvbnN0IFJlZWRTb2xvbW9uRW5jb2RlciA9IHJlcXVpcmUoJy4vcmVlZC1zb2xvbW9uLWVuY29kZXInKVxuY29uc3QgVmVyc2lvbiA9IHJlcXVpcmUoJy4vdmVyc2lvbicpXG5jb25zdCBGb3JtYXRJbmZvID0gcmVxdWlyZSgnLi9mb3JtYXQtaW5mbycpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFNlZ21lbnRzID0gcmVxdWlyZSgnLi9zZWdtZW50cycpXG5cbi8qKlxuICogUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4gKlxuICogbW9kaWZpZWQgYnkgUnlhbiBEYXkgZm9yIG5vZGVqcyBzdXBwb3J0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgUnlhbiBEYXlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vKipcbiAqIEFkZCBmaW5kZXIgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBGaW5kZXJQYXR0ZXJuIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IHBvcyA9IEZpbmRlclBhdHRlcm4uZ2V0UG9zaXRpb25zKHZlcnNpb24pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBwb3NbaV1bMF1cbiAgICBjb25zdCBjb2wgPSBwb3NbaV1bMV1cblxuICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcbiAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHNpemUgPD0gcm93ICsgcikgY29udGludWVcblxuICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xuICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBzaXplIDw9IGNvbCArIGMpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKChyID49IDAgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKSB8fFxuICAgICAgICAgIChjID49IDAgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKSB8fFxuICAgICAgICAgIChyID49IDIgJiYgciA8PSA0ICYmIGMgPj0gMiAmJiBjIDw9IDQpKSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdGltaW5nIHBhdHRlcm4gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB7QGxpbmsgc2V0dXBBbGlnbm1lbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHNldHVwVGltaW5nUGF0dGVybiAobWF0cml4KSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuXG4gIGZvciAobGV0IHIgPSA4OyByIDwgc2l6ZSAtIDg7IHIrKykge1xuICAgIGNvbnN0IHZhbHVlID0gciAlIDIgPT09IDBcbiAgICBtYXRyaXguc2V0KHIsIDYsIHZhbHVlLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoNiwgciwgdmFsdWUsIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYWxpZ25tZW50IHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgc2V0dXBUaW1pbmdQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEFsaWdubWVudFBhdHRlcm4gKG1hdHJpeCwgdmVyc2lvbikge1xuICBjb25zdCBwb3MgPSBBbGlnbm1lbnRQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcG9zW2ldWzBdXG4gICAgY29uc3QgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG4gICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDIgfHxcbiAgICAgICAgICAociA9PT0gMCAmJiBjID09PSAwKSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHZlcnNpb24gaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cFZlcnNpb25JbmZvIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IGJpdHMgPSBWZXJzaW9uLmdldEVuY29kZWRCaXRzKHZlcnNpb24pXG4gIGxldCByb3csIGNvbCwgbW9kXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG4gICAgcm93ID0gTWF0aC5mbG9vcihpIC8gMylcbiAgICBjb2wgPSBpICUgMyArIHNpemUgLSA4IC0gM1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICBtYXRyaXguc2V0KHJvdywgY29sLCBtb2QsIHRydWUpXG4gICAgbWF0cml4LnNldChjb2wsIHJvdywgbW9kLCB0cnVlKVxuICB9XG59XG5cbi8qKlxuICogQWRkIGZvcm1hdCBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggICAgICAgICAgICAgICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgIGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gICAgbWFza1BhdHRlcm4gICAgICAgICAgTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBzZXR1cEZvcm1hdEluZm8gKG1hdHJpeCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBjb25zdCBiaXRzID0gRm9ybWF0SW5mby5nZXRFbmNvZGVkQml0cyhlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pXG4gIGxldCBpLCBtb2RcblxuICBmb3IgKGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICAvLyB2ZXJ0aWNhbFxuICAgIGlmIChpIDwgNikge1xuICAgICAgbWF0cml4LnNldChpLCA4LCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldChpICsgMSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRyaXguc2V0KHNpemUgLSAxNSArIGksIDgsIG1vZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvLyBob3Jpem9udGFsXG4gICAgaWYgKGkgPCA4KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIHNpemUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDkpIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSArIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldCg4LCAxNSAtIGkgLSAxLCBtb2QsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgLy8gZml4ZWQgbW9kdWxlXG4gIG1hdHJpeC5zZXQoc2l6ZSAtIDgsIDgsIDEsIHRydWUpXG59XG5cbi8qKlxuICogQWRkIGVuY29kZWQgZGF0YSBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gIG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSAgIERhdGEgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIHNldHVwRGF0YSAobWF0cml4LCBkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBsZXQgaW5jID0gLTFcbiAgbGV0IHJvdyA9IHNpemUgLSAxXG4gIGxldCBiaXRJbmRleCA9IDdcbiAgbGV0IGJ5dGVJbmRleCA9IDBcblxuICBmb3IgKGxldCBjb2wgPSBzaXplIC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcbiAgICBpZiAoY29sID09PSA2KSBjb2wtLVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XG4gICAgICAgIGlmICghbWF0cml4LmlzUmVzZXJ2ZWQocm93LCBjb2wgLSBjKSkge1xuICAgICAgICAgIGxldCBkYXJrID0gZmFsc2VcblxuICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0cml4LnNldChyb3csIGNvbCAtIGMsIGRhcmspXG4gICAgICAgICAgYml0SW5kZXgtLVxuXG4gICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYnl0ZUluZGV4KytcbiAgICAgICAgICAgIGJpdEluZGV4ID0gN1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cgKz0gaW5jXG5cbiAgICAgIGlmIChyb3cgPCAwIHx8IHNpemUgPD0gcm93KSB7XG4gICAgICAgIHJvdyAtPSBpbmNcbiAgICAgICAgaW5jID0gLWluY1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBlbmNvZGVkIGNvZGV3b3JkcyBmcm9tIGRhdGEgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtCeXRlRGF0YX0gZGF0YSAgICAgICAgICAgICAgICAgRGF0YSBpbnB1dFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGEgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cykge1xuICAvLyBQcmVwYXJlIGRhdGEgYnVmZmVyXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCaXRCdWZmZXIoKVxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBwcmVmaXggZGF0YSB3aXRoIG1vZGUgaW5kaWNhdG9yICg0IGJpdHMpXG4gICAgYnVmZmVyLnB1dChkYXRhLm1vZGUuYml0LCA0KVxuXG4gICAgLy8gUHJlZml4IGRhdGEgd2l0aCBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIGlzIGEgc3RyaW5nIG9mIGJpdHMgdGhhdCByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGJlaW5nIGVuY29kZWQuXG4gICAgLy8gVGhlIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG1vZGUgaW5kaWNhdG9yXG4gICAgLy8gYW5kIG11c3QgYmUgYSBjZXJ0YWluIG51bWJlciBvZiBiaXRzIGxvbmcsIGRlcGVuZGluZyBvbiB0aGUgUVIgdmVyc2lvblxuICAgIC8vIGFuZCBkYXRhIG1vZGVcbiAgICAvLyBAc2VlIHtAbGluayBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcn0uXG4gICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihkYXRhLm1vZGUsIHZlcnNpb24pKVxuXG4gICAgLy8gYWRkIGJpbmFyeSBkYXRhIHNlcXVlbmNlIHRvIGJ1ZmZlclxuICAgIGRhdGEud3JpdGUoYnVmZmVyKVxuICB9KVxuXG4gIC8vIENhbGN1bGF0ZSByZXF1aXJlZCBudW1iZXIgb2YgYml0c1xuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzQml0cyA9ICh0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHMpICogOFxuXG4gIC8vIEFkZCBhIHRlcm1pbmF0b3IuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMsXG4gIC8vIGEgdGVybWluYXRvciBvZiB1cCB0byBmb3VyIDBzIG11c3QgYmUgYWRkZWQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHN0cmluZy5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgbW9yZSB0aGFuIGZvdXIgYml0cyBzaG9ydGVyIHRoYW4gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLFxuICAvLyBhZGQgZm91ciAwcyB0byB0aGUgZW5kLlxuICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSBkYXRhVG90YWxDb2Rld29yZHNCaXRzKSB7XG4gICAgYnVmZmVyLnB1dCgwLCA0KVxuICB9XG5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgZmV3ZXIgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciwgYWRkIG9ubHkgdGhlIG51bWJlciBvZiAwcyB0aGF0XG4gIC8vIGFyZSBuZWVkZWQgdG8gcmVhY2ggdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLlxuXG4gIC8vIEFmdGVyIGFkZGluZyB0aGUgdGVybWluYXRvciwgaWYgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSBzdHJpbmcgaXMgbm90IGEgbXVsdGlwbGUgb2YgOCxcbiAgLy8gcGFkIHRoZSBzdHJpbmcgb24gdGhlIHJpZ2h0IHdpdGggMHMgdG8gbWFrZSB0aGUgc3RyaW5nJ3MgbGVuZ3RoIGEgbXVsdGlwbGUgb2YgOC5cbiAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT09IDApIHtcbiAgICBidWZmZXIucHV0Qml0KDApXG4gIH1cblxuICAvLyBBZGQgcGFkIGJ5dGVzIGlmIHRoZSBzdHJpbmcgaXMgc3RpbGwgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cy5cbiAgLy8gRXh0ZW5kIHRoZSBidWZmZXIgdG8gZmlsbCB0aGUgZGF0YSBjYXBhY2l0eSBvZiB0aGUgc3ltYm9sIGNvcnJlc3BvbmRpbmcgdG9cbiAgLy8gdGhlIFZlcnNpb24gYW5kIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYnkgYWRkaW5nIHRoZSBQYWQgQ29kZXdvcmRzIDExMTAxMTAwICgweEVDKVxuICAvLyBhbmQgMDAwMTAwMDEgKDB4MTEpIGFsdGVybmF0ZWx5LlxuICBjb25zdCByZW1haW5pbmdCeXRlID0gKGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkpIC8gOFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZ0J5dGU7IGkrKykge1xuICAgIGJ1ZmZlci5wdXQoaSAlIDIgPyAweDExIDogMHhFQywgOClcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDb2Rld29yZHMoYnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbn1cblxuLyoqXG4gKiBFbmNvZGUgaW5wdXQgZGF0YSB3aXRoIFJlZWQtU29sb21vbiBhbmQgcmV0dXJuIGNvZGV3b3JkcyB3aXRoXG4gKiByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBAcGFyYW0gIHtCaXRCdWZmZXJ9IGJpdEJ1ZmZlciAgICAgICAgICAgIERhdGEgdG8gZW5jb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29kZXdvcmRzIChiaXRCdWZmZXIsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzID0gdG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGJsb2Nrc1xuICBjb25zdCBlY1RvdGFsQmxvY2tzID0gRUNDb2RlLmdldEJsb2Nrc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIENhbGN1bGF0ZSBob3cgbWFueSBibG9ja3MgZWFjaCBncm91cCBzaG91bGQgY29udGFpblxuICBjb25zdCBibG9ja3NJbkdyb3VwMiA9IHRvdGFsQ29kZXdvcmRzICUgZWNUb3RhbEJsb2Nrc1xuICBjb25zdCBibG9ja3NJbkdyb3VwMSA9IGVjVG90YWxCbG9ja3MgLSBibG9ja3NJbkdyb3VwMlxuXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKHRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2NrcylcblxuICBjb25zdCBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKGRhdGFUb3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGRhdGFDb2Rld29yZHNJbkdyb3VwMiA9IGRhdGFDb2Rld29yZHNJbkdyb3VwMSArIDFcblxuICAvLyBOdW1iZXIgb2YgRUMgY29kZXdvcmRzIGlzIHRoZSBzYW1lIGZvciBib3RoIGdyb3Vwc1xuICBjb25zdCBlY0NvdW50ID0gdG90YWxDb2Rld29yZHNJbkdyb3VwMSAtIGRhdGFDb2Rld29yZHNJbkdyb3VwMVxuXG4gIC8vIEluaXRpYWxpemUgYSBSZWVkLVNvbG9tb24gZW5jb2RlciB3aXRoIGEgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2YgZGVncmVlIGVjQ291bnRcbiAgY29uc3QgcnMgPSBuZXcgUmVlZFNvbG9tb25FbmNvZGVyKGVjQ291bnQpXG5cbiAgbGV0IG9mZnNldCA9IDBcbiAgY29uc3QgZGNEYXRhID0gbmV3IEFycmF5KGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGVjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICBsZXQgbWF4RGF0YVNpemUgPSAwXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJpdEJ1ZmZlci5idWZmZXIpXG5cbiAgLy8gRGl2aWRlIHRoZSBidWZmZXIgaW50byB0aGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJsb2Nrc1xuICBmb3IgKGxldCBiID0gMDsgYiA8IGVjVG90YWxCbG9ja3M7IGIrKykge1xuICAgIGNvbnN0IGRhdGFTaXplID0gYiA8IGJsb2Nrc0luR3JvdXAxID8gZGF0YUNvZGV3b3Jkc0luR3JvdXAxIDogZGF0YUNvZGV3b3Jkc0luR3JvdXAyXG5cbiAgICAvLyBleHRyYWN0IGEgYmxvY2sgb2YgZGF0YSBmcm9tIGJ1ZmZlclxuICAgIGRjRGF0YVtiXSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGRhdGFTaXplKVxuXG4gICAgLy8gQ2FsY3VsYXRlIEVDIGNvZGV3b3JkcyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gICAgZWNEYXRhW2JdID0gcnMuZW5jb2RlKGRjRGF0YVtiXSlcblxuICAgIG9mZnNldCArPSBkYXRhU2l6ZVxuICAgIG1heERhdGFTaXplID0gTWF0aC5tYXgobWF4RGF0YVNpemUsIGRhdGFTaXplKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGZpbmFsIGRhdGFcbiAgLy8gSW50ZXJsZWF2ZSB0aGUgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgZnJvbSBlYWNoIGJsb2NrXG4gIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0b3RhbENvZGV3b3JkcylcbiAgbGV0IGluZGV4ID0gMFxuICBsZXQgaSwgclxuXG4gIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4RGF0YVNpemU7IGkrKykge1xuICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgIGlmIChpIDwgZGNEYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICBkYXRhW2luZGV4KytdID0gZGNEYXRhW3JdW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwZWQgRUMgY29kZXdvcmRzXG4gIGZvciAoaSA9IDA7IGkgPCBlY0NvdW50OyBpKyspIHtcbiAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICBkYXRhW2luZGV4KytdID0gZWNEYXRhW3JdW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBCdWlsZCBRUiBDb2RlIHN5bWJvbFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZXRpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgbGV2ZWxcbiAqIEBwYXJhbSAge01hc2tQYXR0ZXJufSBtYXNrUGF0dGVybiAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIHN5bWJvbCBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbCAoZGF0YSwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGxldCBzZWdtZW50c1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tQXJyYXkoZGF0YSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb25cblxuICAgIGlmICghZXN0aW1hdGVkVmVyc2lvbikge1xuICAgICAgY29uc3QgcmF3U2VnbWVudHMgPSBTZWdtZW50cy5yYXdTcGxpdChkYXRhKVxuXG4gICAgICAvLyBFc3RpbWF0ZSBiZXN0IHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiByYXcgc3BsaXR0ZWQgc2VnbWVudHNcbiAgICAgIGVzdGltYXRlZFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShyYXdTZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3B0aW1pemVkIHNlZ21lbnRzXG4gICAgLy8gSWYgZXN0aW1hdGVkIHZlcnNpb24gaXMgdW5kZWZpbmVkLCB0cnkgd2l0aCB0aGUgaGlnaGVzdCB2ZXJzaW9uXG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tU3RyaW5nKGRhdGEsIGVzdGltYXRlZFZlcnNpb24gfHwgNDApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEnKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBtaW4gdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIGRhdGFcbiAgY29uc3QgYmVzdFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShzZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gSWYgbm8gdmVyc2lvbiBpcyBmb3VuZCwgZGF0YSBjYW5ub3QgYmUgc3RvcmVkXG4gIGlmICghYmVzdFZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhbW91bnQgb2YgZGF0YSBpcyB0b28gYmlnIHRvIGJlIHN0b3JlZCBpbiBhIFFSIENvZGUnKVxuICB9XG5cbiAgLy8gSWYgbm90IHNwZWNpZmllZCwgdXNlIG1pbiB2ZXJzaW9uIGFzIGRlZmF1bHRcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IGJlc3RWZXJzaW9uXG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCB2ZXJzaW9uIGNhbiBjb250YWluIHRoZSBkYXRhXG4gIH0gZWxzZSBpZiAodmVyc2lvbiA8IGJlc3RWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcXG4nICtcbiAgICAgICdUaGUgY2hvc2VuIFFSIENvZGUgdmVyc2lvbiBjYW5ub3QgY29udGFpbiB0aGlzIGFtb3VudCBvZiBkYXRhLlxcbicgK1xuICAgICAgJ01pbmltdW0gdmVyc2lvbiByZXF1aXJlZCB0byBzdG9yZSBjdXJyZW50IGRhdGEgaXM6ICcgKyBiZXN0VmVyc2lvbiArICcuXFxuJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRhdGFCaXRzID0gY3JlYXRlRGF0YSh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgc2VnbWVudHMpXG5cbiAgLy8gQWxsb2NhdGUgbWF0cml4IGJ1ZmZlclxuICBjb25zdCBtb2R1bGVDb3VudCA9IFV0aWxzLmdldFN5bWJvbFNpemUodmVyc2lvbilcbiAgY29uc3QgbW9kdWxlcyA9IG5ldyBCaXRNYXRyaXgobW9kdWxlQ291bnQpXG5cbiAgLy8gQWRkIGZ1bmN0aW9uIG1vZHVsZXNcbiAgc2V0dXBGaW5kZXJQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24pXG4gIHNldHVwVGltaW5nUGF0dGVybihtb2R1bGVzKVxuICBzZXR1cEFsaWdubWVudFBhdHRlcm4obW9kdWxlcywgdmVyc2lvbilcblxuICAvLyBBZGQgdGVtcG9yYXJ5IGR1bW15IGJpdHMgZm9yIGZvcm1hdCBpbmZvIGp1c3QgdG8gc2V0IHRoZW0gYXMgcmVzZXJ2ZWQuXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlc2UgYml0cyBmcm9tIGJlaW5nIG1hc2tlZCBieSB7QGxpbmsgTWFza1BhdHRlcm4uYXBwbHlNYXNrfVxuICAvLyBzaW5jZSB0aGUgbWFza2luZyBvcGVyYXRpb24gbXVzdCBiZSBwZXJmb3JtZWQgb25seSBvbiB0aGUgZW5jb2RpbmcgcmVnaW9uLlxuICAvLyBUaGVzZSBibG9ja3Mgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzIGxhdGVyIGluIGNvZGUuXG4gIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgMClcblxuICBpZiAodmVyc2lvbiA+PSA3KSB7XG4gICAgc2V0dXBWZXJzaW9uSW5mbyhtb2R1bGVzLCB2ZXJzaW9uKVxuICB9XG5cbiAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gIHNldHVwRGF0YShtb2R1bGVzLCBkYXRhQml0cylcblxuICBpZiAoaXNOYU4obWFza1BhdHRlcm4pKSB7XG4gICAgLy8gRmluZCBiZXN0IG1hc2sgcGF0dGVyblxuICAgIG1hc2tQYXR0ZXJuID0gTWFza1BhdHRlcm4uZ2V0QmVzdE1hc2sobW9kdWxlcyxcbiAgICAgIHNldHVwRm9ybWF0SW5mby5iaW5kKG51bGwsIG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSlcbiAgfVxuXG4gIC8vIEFwcGx5IG1hc2sgcGF0dGVyblxuICBNYXNrUGF0dGVybi5hcHBseU1hc2sobWFza1BhdHRlcm4sIG1vZHVsZXMpXG5cbiAgLy8gUmVwbGFjZSBmb3JtYXQgaW5mbyBiaXRzIHdpdGggY29ycmVjdCB2YWx1ZXNcbiAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybilcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogZXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gICAgbWFza1BhdHRlcm46IG1hc2tQYXR0ZXJuLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9XG59XG5cbi8qKlxuICogUVIgQ29kZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy52ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudG9TSklTRnVuYyAgICAgICAgIEhlbHBlciBmdW5jIHRvIGNvbnZlcnQgdXRmOCB0byBzamlzXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlIChkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHRleHQnKVxuICB9XG5cbiAgbGV0IGVycm9yQ29ycmVjdGlvbkxldmVsID0gRUNMZXZlbC5NXG4gIGxldCB2ZXJzaW9uXG4gIGxldCBtYXNrXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFVzZSBoaWdoZXIgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCBhcyBkZWZhdWx0XG4gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFQ0xldmVsLmZyb20ob3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuICAgIHZlcnNpb24gPSBWZXJzaW9uLmZyb20ob3B0aW9ucy52ZXJzaW9uKVxuICAgIG1hc2sgPSBNYXNrUGF0dGVybi5mcm9tKG9wdGlvbnMubWFza1BhdHRlcm4pXG5cbiAgICBpZiAob3B0aW9ucy50b1NKSVNGdW5jKSB7XG4gICAgICBVdGlscy5zZXRUb1NKSVNGdW5jdGlvbihvcHRpb25zLnRvU0pJU0Z1bmMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN5bWJvbChkYXRhLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaylcbn1cbiIsImNvbnN0IFBvbHlub21pYWwgPSByZXF1aXJlKCcuL3BvbHlub21pYWwnKVxuXG5mdW5jdGlvbiBSZWVkU29sb21vbkVuY29kZXIgKGRlZ3JlZSkge1xuICB0aGlzLmdlblBvbHkgPSB1bmRlZmluZWRcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcblxuICBpZiAodGhpcy5kZWdyZWUpIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBlbmNvZGVyLlxuICogVGhlIGlucHV0IHBhcmFtIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWVcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSAoZGVncmVlKSB7XG4gIC8vIGNyZWF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZVxuICB0aGlzLmdlblBvbHkgPSBQb2x5bm9taWFsLmdlbmVyYXRlRUNQb2x5bm9taWFsKHRoaXMuZGVncmVlKVxufVxuXG4vKipcbiAqIEVuY29kZXMgYSBjaHVuayBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSBCdWZmZXIgY29udGFpbmluZyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgZGF0YVxuICovXG5SZWVkU29sb21vbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZSAoZGF0YSkge1xuICBpZiAoIXRoaXMuZ2VuUG9seSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW5jb2RlciBub3QgaW5pdGlhbGl6ZWQnKVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIEVDIGZvciB0aGlzIGRhdGEgYmxvY2tcbiAgLy8gZXh0ZW5kcyBkYXRhIHNpemUgdG8gZGF0YStnZW5Qb2x5IHNpemVcbiAgY29uc3QgcGFkZGVkRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgdGhpcy5kZWdyZWUpXG4gIHBhZGRlZERhdGEuc2V0KGRhdGEpXG5cbiAgLy8gVGhlIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGFyZSB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlkaW5nIHRoZSBkYXRhIGNvZGV3b3Jkc1xuICAvLyBieSBhIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gIGNvbnN0IHJlbWFpbmRlciA9IFBvbHlub21pYWwubW9kKHBhZGRlZERhdGEsIHRoaXMuZ2VuUG9seSlcblxuICAvLyByZXR1cm4gRUMgZGF0YSBibG9ja3MgKGxhc3QgbiBieXRlLCB3aGVyZSBuIGlzIHRoZSBkZWdyZWUgb2YgZ2VuUG9seSlcbiAgLy8gSWYgY29lZmZpY2llbnRzIG51bWJlciBpbiByZW1haW5kZXIgYXJlIGxlc3MgdGhhbiBnZW5Qb2x5IGRlZ3JlZSxcbiAgLy8gcGFkIHdpdGggMHMgdG8gdGhlIGxlZnQgdG8gcmVhY2ggdGhlIG5lZWRlZCBudW1iZXIgb2YgY29lZmZpY2llbnRzXG4gIGNvbnN0IHN0YXJ0ID0gdGhpcy5kZWdyZWUgLSByZW1haW5kZXIubGVuZ3RoXG4gIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCBidWZmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kZWdyZWUpXG4gICAgYnVmZi5zZXQocmVtYWluZGVyLCBzdGFydClcblxuICAgIHJldHVybiBidWZmXG4gIH1cblxuICByZXR1cm4gcmVtYWluZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVlZFNvbG9tb25FbmNvZGVyXG4iLCJjb25zdCBudW1lcmljID0gJ1swLTldKydcbmNvbnN0IGFscGhhbnVtZXJpYyA9ICdbQS1aICQlKitcXFxcLS4vOl0rJ1xubGV0IGthbmppID0gJyg/Olt1MzAwMC11MzAzRl18W3UzMDQwLXUzMDlGXXxbdTMwQTAtdTMwRkZdfCcgK1xuICAnW3VGRjAwLXVGRkVGXXxbdTRFMDAtdTlGQUZdfFt1MjYwNS11MjYwNl18W3UyMTkwLXUyMTk1XXx1MjAzQnwnICtcbiAgJ1t1MjAxMHUyMDE1dTIwMTh1MjAxOXUyMDI1dTIwMjZ1MjAxQ3UyMDFEdTIyMjV1MjI2MF18JyArXG4gICdbdTAzOTEtdTA0NTFdfFt1MDBBN3UwMEE4dTAwQjF1MDBCNHUwMEQ3dTAwRjddKSsnXG5rYW5qaSA9IGthbmppLnJlcGxhY2UoL3UvZywgJ1xcXFx1JylcblxuY29uc3QgYnl0ZSA9ICcoPzooPyFbQS1aMC05ICQlKitcXFxcLS4vOl18JyArIGthbmppICsgJykoPzoufFtcXHJcXG5dKSkrJ1xuXG5leHBvcnRzLktBTkpJID0gbmV3IFJlZ0V4cChrYW5qaSwgJ2cnKVxuZXhwb3J0cy5CWVRFX0tBTkpJID0gbmV3IFJlZ0V4cCgnW15BLVowLTkgJCUqK1xcXFwtLi86XSsnLCAnZycpXG5leHBvcnRzLkJZVEUgPSBuZXcgUmVnRXhwKGJ5dGUsICdnJylcbmV4cG9ydHMuTlVNRVJJQyA9IG5ldyBSZWdFeHAobnVtZXJpYywgJ2cnKVxuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKGFscGhhbnVtZXJpYywgJ2cnKVxuXG5jb25zdCBURVNUX0tBTkpJID0gbmV3IFJlZ0V4cCgnXicgKyBrYW5qaSArICckJylcbmNvbnN0IFRFU1RfTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ14nICsgbnVtZXJpYyArICckJylcbmNvbnN0IFRFU1RfQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cCgnXltBLVowLTkgJCUqK1xcXFwtLi86XSskJylcblxuZXhwb3J0cy50ZXN0S2FuamkgPSBmdW5jdGlvbiB0ZXN0S2FuamkgKHN0cikge1xuICByZXR1cm4gVEVTVF9LQU5KSS50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0TnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3ROdW1lcmljIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfTlVNRVJJQy50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0QWxwaGFudW1lcmljID0gZnVuY3Rpb24gdGVzdEFscGhhbnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX0FMUEhBTlVNRVJJQy50ZXN0KHN0cilcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgTnVtZXJpY0RhdGEgPSByZXF1aXJlKCcuL251bWVyaWMtZGF0YScpXG5jb25zdCBBbHBoYW51bWVyaWNEYXRhID0gcmVxdWlyZSgnLi9hbHBoYW51bWVyaWMtZGF0YScpXG5jb25zdCBCeXRlRGF0YSA9IHJlcXVpcmUoJy4vYnl0ZS1kYXRhJylcbmNvbnN0IEthbmppRGF0YSA9IHJlcXVpcmUoJy4va2FuamktZGF0YScpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IGRpamtzdHJhID0gcmVxdWlyZSgnZGlqa3N0cmFqcycpXG5cbi8qKlxuICogUmV0dXJucyBVVEY4IGJ5dGUgbGVuZ3RoXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBOdW1iZXIgb2YgYnl0ZVxuICovXG5mdW5jdGlvbiBnZXRTdHJpbmdCeXRlTGVuZ3RoIChzdHIpIHtcbiAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHNlZ21lbnRzIG9mIHRoZSBzcGVjaWZpZWQgbW9kZVxuICogZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSBTZWdtZW50IG1vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyICBTdHJpbmcgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudHMgKHJlZ2V4LCBtb2RlLCBzdHIpIHtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXVxuICBsZXQgcmVzdWx0XG5cbiAgd2hpbGUgKChyZXN1bHQgPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBkYXRhOiByZXN1bHRbMF0sXG4gICAgICBpbmRleDogcmVzdWx0LmluZGV4LFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGxlbmd0aDogcmVzdWx0WzBdLmxlbmd0aFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhIHNlcmllcyBvZiBzZWdtZW50cyB3aXRoIHRoZSBhcHByb3ByaWF0ZVxuICogbW9kZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGdldFNlZ21lbnRzRnJvbVN0cmluZyAoZGF0YVN0cikge1xuICBjb25zdCBudW1TZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguTlVNRVJJQywgTW9kZS5OVU1FUklDLCBkYXRhU3RyKVxuICBjb25zdCBhbHBoYU51bVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5BTFBIQU5VTUVSSUMsIE1vZGUuQUxQSEFOVU1FUklDLCBkYXRhU3RyKVxuICBsZXQgYnl0ZVNlZ3NcbiAgbGV0IGthbmppU2Vnc1xuXG4gIGlmIChVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LktBTkpJLCBNb2RlLktBTkpJLCBkYXRhU3RyKVxuICB9IGVsc2Uge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURV9LQU5KSSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IFtdXG4gIH1cblxuICBjb25zdCBzZWdzID0gbnVtU2Vncy5jb25jYXQoYWxwaGFOdW1TZWdzLCBieXRlU2Vncywga2FuamlTZWdzKVxuXG4gIHJldHVybiBzZWdzXG4gICAgLnNvcnQoZnVuY3Rpb24gKHMxLCBzMikge1xuICAgICAgcmV0dXJuIHMxLmluZGV4IC0gczIuaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgIG1vZGU6IG9iai5tb2RlLFxuICAgICAgICBsZW5ndGg6IG9iai5sZW5ndGhcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgaG93IG1hbnkgYml0cyBhcmUgbmVlZGVkIHRvIGVuY29kZSBhIHN0cmluZyBvZlxuICogc3BlY2lmaWVkIGxlbmd0aCB3aXRoIHRoZSBzcGVjaWZpZWQgbW9kZVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbGVuZ3RoIFN0cmluZyBsZW5ndGhcbiAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgIFNlZ21lbnQgbW9kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgQml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50Qml0c0xlbmd0aCAobGVuZ3RoLCBtb2RlKSB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gS2FuamlEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2VzIGFkamFjZW50IHNlZ21lbnRzIHdoaWNoIGhhdmUgdGhlIHNhbWUgbW9kZVxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTZWdtZW50cyAoc2Vncykge1xuICByZXR1cm4gc2Vncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgIGNvbnN0IHByZXZTZWcgPSBhY2MubGVuZ3RoIC0gMSA+PSAwID8gYWNjW2FjYy5sZW5ndGggLSAxXSA6IG51bGxcbiAgICBpZiAocHJldlNlZyAmJiBwcmV2U2VnLm1vZGUgPT09IGN1cnIubW9kZSkge1xuICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5kYXRhICs9IGN1cnIuZGF0YVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cblxuICAgIGFjYy5wdXNoKGN1cnIpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBub2RlcyBjb21iaW5hdGlvbiB3aGljaFxuICogd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIGEgc2VnbWVudHMgZ3JhcGguXG4gKlxuICogTm9kZXMgYXJlIGRpdmlkZWQgYnkgZ3JvdXBzLiBFYWNoIGdyb3VwIHdpbGwgY29udGFpbiBhIGxpc3Qgb2YgYWxsIHRoZSBtb2Rlc1xuICogaW4gd2hpY2ggaXMgcG9zc2libGUgdG8gZW5jb2RlIHRoZSBnaXZlbiB0ZXh0LlxuICpcbiAqIEZvciBleGFtcGxlIHRoZSB0ZXh0ICcxMjM0NScgY2FuIGJlIGVuY29kZWQgYXMgTnVtZXJpYywgQWxwaGFudW1lcmljIG9yIEJ5dGUuXG4gKiBUaGUgZ3JvdXAgZm9yICcxMjM0NScgd2lsbCBjb250YWluIHRoZW4gMyBvYmplY3RzLCBvbmUgZm9yIGVhY2hcbiAqIHBvc3NpYmxlIGVuY29kaW5nIG1vZGUuXG4gKlxuICogRWFjaCBub2RlIHJlcHJlc2VudHMgYSBwb3NzaWJsZSBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gYnVpbGROb2RlcyAoc2Vncykge1xuICBjb25zdCBub2RlcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlZyA9IHNlZ3NbaV1cblxuICAgIHN3aXRjaCAoc2VnLm1vZGUpIHtcbiAgICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5BTFBIQU5VTUVSSUMsIGxlbmd0aDogc2VnLmxlbmd0aCB9LFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICAgIG5vZGVzLnB1c2goW1xuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgIF0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVzXG59XG5cbi8qKlxuICogQnVpbGRzIGEgZ3JhcGggZnJvbSBhIGxpc3Qgb2Ygbm9kZXMuXG4gKiBBbGwgc2VnbWVudHMgaW4gZWFjaCBub2RlIGdyb3VwIHdpbGwgYmUgY29ubmVjdGVkIHdpdGggYWxsIHRoZSBzZWdtZW50cyBvZlxuICogdGhlIG5leHQgZ3JvdXAgYW5kIHNvIG9uLlxuICpcbiAqIEF0IGVhY2ggY29ubmVjdGlvbiB3aWxsIGJlIGFzc2lnbmVkIGEgd2VpZ2h0IGRlcGVuZGluZyBvbiB0aGVcbiAqIHNlZ21lbnQncyBieXRlIGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbm9kZXMgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEdyYXBoIG9mIGFsbCBwb3NzaWJsZSBzZWdtZW50c1xuICovXG5mdW5jdGlvbiBidWlsZEdyYXBoIChub2RlcywgdmVyc2lvbikge1xuICBjb25zdCB0YWJsZSA9IHt9XG4gIGNvbnN0IGdyYXBoID0geyBzdGFydDoge30gfVxuICBsZXQgcHJldk5vZGVJZHMgPSBbJ3N0YXJ0J11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZUdyb3VwID0gbm9kZXNbaV1cbiAgICBjb25zdCBjdXJyZW50Tm9kZUlkcyA9IFtdXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGVHcm91cC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVHcm91cFtqXVxuICAgICAgY29uc3Qga2V5ID0gJycgKyBpICsgalxuXG4gICAgICBjdXJyZW50Tm9kZUlkcy5wdXNoKGtleSlcbiAgICAgIHRhYmxlW2tleV0gPSB7IG5vZGU6IG5vZGUsIGxhc3RDb3VudDogMCB9XG4gICAgICBncmFwaFtrZXldID0ge31cblxuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBjb25zdCBwcmV2Tm9kZUlkID0gcHJldk5vZGVJZHNbbl1cblxuICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0gJiYgdGFibGVbcHJldk5vZGVJZF0ubm9kZS5tb2RlID09PSBub2RlLm1vZGUpIHtcbiAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkXVtrZXldID1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArIG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpIC1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCwgbm9kZS5tb2RlKVxuXG4gICAgICAgICAgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICs9IG5vZGUubGVuZ3RoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdKSB0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgPSBub2RlLmxlbmd0aFxuXG4gICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9IGdldFNlZ21lbnRCaXRzTGVuZ3RoKG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpICtcbiAgICAgICAgICAgIDQgKyBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihub2RlLm1vZGUsIHZlcnNpb24pIC8vIHN3aXRjaCBjb3N0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2Tm9kZUlkcyA9IGN1cnJlbnROb2RlSWRzXG4gIH1cblxuICBmb3IgKGxldCBuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgZ3JhcGhbcHJldk5vZGVJZHNbbl1dLmVuZCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG1hcDogZ3JhcGgsIHRhYmxlOiB0YWJsZSB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgc2VnbWVudCBmcm9tIGEgc3BlY2lmaWVkIGRhdGEgYW5kIG1vZGUuXG4gKiBJZiBhIG1vZGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIG1vcmUgc3VpdGFibGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gKiBAcGFyYW0gIHtNb2RlIHwgU3RyaW5nfSBtb2Rlc0hpbnQgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtTZWdtZW50fSAgICAgICAgICAgICAgICAgU2VnbWVudFxuICovXG5mdW5jdGlvbiBidWlsZFNpbmdsZVNlZ21lbnQgKGRhdGEsIG1vZGVzSGludCkge1xuICBsZXQgbW9kZVxuICBjb25zdCBiZXN0TW9kZSA9IE1vZGUuZ2V0QmVzdE1vZGVGb3JEYXRhKGRhdGEpXG5cbiAgbW9kZSA9IE1vZGUuZnJvbShtb2Rlc0hpbnQsIGJlc3RNb2RlKVxuXG4gIC8vIE1ha2Ugc3VyZSBkYXRhIGNhbiBiZSBlbmNvZGVkXG4gIGlmIChtb2RlICE9PSBNb2RlLkJZVEUgJiYgbW9kZS5iaXQgPCBiZXN0TW9kZS5iaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGRhdGEgKyAnXCInICtcbiAgICAgICcgY2Fubm90IGJlIGVuY29kZWQgd2l0aCBtb2RlICcgKyBNb2RlLnRvU3RyaW5nKG1vZGUpICtcbiAgICAgICcuXFxuIFN1Z2dlc3RlZCBtb2RlIGlzOiAnICsgTW9kZS50b1N0cmluZyhiZXN0TW9kZSkpXG4gIH1cblxuICAvLyBVc2UgTW9kZS5CWVRFIGlmIEthbmppIHN1cHBvcnQgaXMgZGlzYWJsZWRcbiAgaWYgKG1vZGUgPT09IE1vZGUuS0FOSkkgJiYgIVV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgbW9kZSA9IE1vZGUuQllURVxuICB9XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBNb2RlLk5VTUVSSUM6XG4gICAgICByZXR1cm4gbmV3IE51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIG5ldyBBbHBoYW51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gbmV3IEthbmppRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICByZXR1cm4gbmV3IEJ5dGVEYXRhKGRhdGEpXG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IG9mIHNlZ21lbnRzIGZyb20gYW4gYXJyYXkuXG4gKiBBcnJheSBjYW4gY29udGFpbiBTdHJpbmdzIG9yIE9iamVjdHMgd2l0aCBzZWdtZW50J3MgaW5mby5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGEgc3RyaW5nLCB3aWxsIGJlIGdlbmVyYXRlZCBhIHNlZ21lbnQgd2l0aCB0aGUgZ2l2ZW5cbiAqIHN0cmluZyBhbmQgdGhlIG1vcmUgYXBwcm9wcmlhdGUgZW5jb2RpbmcgbW9kZS5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGFuIG9iamVjdCwgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gKiBkYXRhIGFuZCBtb2RlLlxuICogT2JqZWN0cyBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgdGhlIHByb3BlcnR5IFwiZGF0YVwiLlxuICogSWYgcHJvcGVydHkgXCJtb2RlXCIgaXMgbm90IHByZXNlbnQsIHRoZSBtb3JlIHN1aXRhYmxlIG1vZGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheSBBcnJheSBvZiBvYmplY3RzIHdpdGggc2VnbWVudHMgZGF0YVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIFNlZ21lbnRzXG4gKi9cbmV4cG9ydHMuZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5IChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNlZykge1xuICAgIGlmICh0eXBlb2Ygc2VnID09PSAnc3RyaW5nJykge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZywgbnVsbCkpXG4gICAgfSBlbHNlIGlmIChzZWcuZGF0YSkge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZy5kYXRhLCBzZWcubW9kZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBCdWlsZHMgYW4gb3B0aW1pemVkIHNlcXVlbmNlIG9mIHNlZ21lbnRzIGZyb20gYSBzdHJpbmcsXG4gKiB3aGljaCB3aWxsIHByb2R1Y2UgdGhlIHNob3J0ZXN0IHBvc3NpYmxlIGJpdHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAqL1xuZXhwb3J0cy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gZnJvbVN0cmluZyAoZGF0YSwgdmVyc2lvbikge1xuICBjb25zdCBzZWdzID0gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGEsIFV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKVxuXG4gIGNvbnN0IG5vZGVzID0gYnVpbGROb2RlcyhzZWdzKVxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgobm9kZXMsIHZlcnNpb24pXG4gIGNvbnN0IHBhdGggPSBkaWprc3RyYS5maW5kX3BhdGgoZ3JhcGgubWFwLCAnc3RhcnQnLCAnZW5kJylcblxuICBjb25zdCBvcHRpbWl6ZWRTZWdzID0gW11cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG9wdGltaXplZFNlZ3MucHVzaChncmFwaC50YWJsZVtwYXRoW2ldXS5ub2RlKVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KG1lcmdlU2VnbWVudHMob3B0aW1pemVkU2VncykpXG59XG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGluIHZhcmlvdXMgc2VnbWVudHMgd2l0aCB0aGUgbW9kZXMgd2hpY2hcbiAqIGJlc3QgcmVwcmVzZW50IHRoZWlyIGNvbnRlbnQuXG4gKiBUaGUgcHJvZHVjZWQgc2VnbWVudHMgYXJlIGZhciBmcm9tIGJlaW5nIG9wdGltaXplZC5cbiAqIFRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgdG8gZXN0aW1hdGUgYSBRUiBDb2RlIHZlcnNpb25cbiAqIHdoaWNoIG1heSBjb250YWluIHRoZSBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZGF0YSBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICovXG5leHBvcnRzLnJhd1NwbGl0ID0gZnVuY3Rpb24gcmF3U3BsaXQgKGRhdGEpIHtcbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KFxuICAgIGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCBVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSlcbiAgKVxufVxuIiwibGV0IHRvU0pJU0Z1bmN0aW9uXG5jb25zdCBDT0RFV09SRFNfQ09VTlQgPSBbXG4gIDAsIC8vIE5vdCB1c2VkXG4gIDI2LCA0NCwgNzAsIDEwMCwgMTM0LCAxNzIsIDE5NiwgMjQyLCAyOTIsIDM0NixcbiAgNDA0LCA0NjYsIDUzMiwgNTgxLCA2NTUsIDczMywgODE1LCA5MDEsIDk5MSwgMTA4NSxcbiAgMTE1NiwgMTI1OCwgMTM2NCwgMTQ3NCwgMTU4OCwgMTcwNiwgMTgyOCwgMTkyMSwgMjA1MSwgMjE4NSxcbiAgMjMyMywgMjQ2NSwgMjYxMSwgMjc2MSwgMjg3NiwgMzAzNCwgMzE5NiwgMzM2MiwgMzUzMiwgMzcwNlxuXVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFFSIENvZGUgc2l6ZSBmb3IgdGhlIHNwZWNpZmllZCB2ZXJzaW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIHNpemUgb2YgUVIgY29kZVxuICovXG5leHBvcnRzLmdldFN5bWJvbFNpemUgPSBmdW5jdGlvbiBnZXRTeW1ib2xTaXplICh2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbikgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKVxuICBpZiAodmVyc2lvbiA8IDEgfHwgdmVyc2lvbiA+IDQwKSB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIHNob3VsZCBiZSBpbiByYW5nZSBmcm9tIDEgdG8gNDAnKVxuICByZXR1cm4gdmVyc2lvbiAqIDQgKyAxN1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBjb2Rld29yZHMgdXNlZCB0byBzdG9yZSBkYXRhIGFuZCBFQyBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgRGF0YSBsZW5ndGggaW4gYml0c1xuICovXG5leHBvcnRzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzID0gZnVuY3Rpb24gZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMgKHZlcnNpb24pIHtcbiAgcmV0dXJuIENPREVXT1JEU19DT1VOVFt2ZXJzaW9uXVxufVxuXG4vKipcbiAqIEVuY29kZSBkYXRhIHdpdGggQm9zZS1DaGF1ZGh1cmktSG9jcXVlbmdoZW1cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRhdGEgVmFsdWUgdG8gZW5jb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgRW5jb2RlZCB2YWx1ZVxuICovXG5leHBvcnRzLmdldEJDSERpZ2l0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbGV0IGRpZ2l0ID0gMFxuXG4gIHdoaWxlIChkYXRhICE9PSAwKSB7XG4gICAgZGlnaXQrK1xuICAgIGRhdGEgPj4+PSAxXG4gIH1cblxuICByZXR1cm4gZGlnaXRcbn1cblxuZXhwb3J0cy5zZXRUb1NKSVNGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldFRvU0pJU0Z1bmN0aW9uIChmKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJ0b1NKSVNGdW5jXCIgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24uJylcbiAgfVxuXG4gIHRvU0pJU0Z1bmN0aW9uID0gZlxufVxuXG5leHBvcnRzLmlzS2FuamlNb2RlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0b1NKSVNGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0cy50b1NKSVMgPSBmdW5jdGlvbiB0b1NKSVMgKGthbmppKSB7XG4gIHJldHVybiB0b1NKSVNGdW5jdGlvbihrYW5qaSlcbn1cbiIsIi8qKlxuICogQ2hlY2sgaWYgUVIgQ29kZSB2ZXJzaW9uIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCB2ZXJzaW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAodmVyc2lvbikge1xuICByZXR1cm4gIWlzTmFOKHZlcnNpb24pICYmIHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDw9IDQwXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuY29uc3QgRUNDb2RlID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWNvZGUnKVxuY29uc3QgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5cbi8vIEdlbmVyYXRvciBwb2x5bm9taWFsIHVzZWQgdG8gZW5jb2RlIHZlcnNpb24gaW5mb3JtYXRpb25cbmNvbnN0IEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMClcbmNvbnN0IEcxOF9CQ0ggPSBVdGlscy5nZXRCQ0hEaWdpdChHMTgpXG5cbmZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aCAobW9kZSwgbGVuZ3RoLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKGxldCBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQgKG1vZGUsIHZlcnNpb24pIHtcbiAgLy8gQ2hhcmFjdGVyIGNvdW50IGluZGljYXRvciArIG1vZGUgaW5kaWNhdG9yIGJpdHNcbiAgcmV0dXJuIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG1vZGUsIHZlcnNpb24pICsgNFxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5IChzZWdtZW50cywgdmVyc2lvbikge1xuICBsZXQgdG90YWxCaXRzID0gMFxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCByZXNlcnZlZEJpdHMgPSBnZXRSZXNlcnZlZEJpdHNDb3VudChkYXRhLm1vZGUsIHZlcnNpb24pXG4gICAgdG90YWxCaXRzICs9IHJlc2VydmVkQml0cyArIGRhdGEuZ2V0Qml0c0xlbmd0aCgpXG4gIH0pXG5cbiAgcmV0dXJuIHRvdGFsQml0c1xufVxuXG5mdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YSAoc2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIGZvciAobGV0IGN1cnJlbnRWZXJzaW9uID0gMTsgY3VycmVudFZlcnNpb24gPD0gNDA7IGN1cnJlbnRWZXJzaW9uKyspIHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5KHNlZ21lbnRzLCBjdXJyZW50VmVyc2lvbilcbiAgICBpZiAobGVuZ3RoIDw9IGV4cG9ydHMuZ2V0Q2FwYWNpdHkoY3VycmVudFZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBNb2RlLk1JWEVEKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBudW1iZXIgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgdmVyc2lvbiwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gbnVtYmVyXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKFZlcnNpb25DaGVjay5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbi8qKlxuICogUmV0dXJucyBob3cgbXVjaCBkYXRhIGNhbiBiZSBzdG9yZWQgd2l0aCB0aGUgc3BlY2lmaWVkIFFSIGNvZGUgdmVyc2lvblxuICogYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiAoMS00MClcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHkgb2Ygc3RvcmFibGUgZGF0YVxuICovXG5leHBvcnRzLmdldENhcGFjaXR5ID0gZnVuY3Rpb24gZ2V0Q2FwYWNpdHkgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIC8vIFVzZSBCeXRlIG1vZGUgYXMgZGVmYXVsdFxuICBpZiAodHlwZW9mIG1vZGUgPT09ICd1bmRlZmluZWQnKSBtb2RlID0gTW9kZS5CWVRFXG5cbiAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgY29uc3QgZWNUb3RhbENvZGV3b3JkcyA9IEVDQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBkYXRhIGNvZGV3b3Jkc1xuICBjb25zdCBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4XG5cbiAgaWYgKG1vZGUgPT09IE1vZGUuTUlYRUQpIHJldHVybiBkYXRhVG90YWxDb2Rld29yZHNCaXRzXG5cbiAgY29uc3QgdXNhYmxlQml0cyA9IGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBnZXRSZXNlcnZlZEJpdHNDb3VudChtb2RlLCB2ZXJzaW9uKVxuXG4gIC8vIFJldHVybiBtYXggbnVtYmVyIG9mIHN0b3JhYmxlIGNvZGV3b3Jkc1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh1c2FibGVCaXRzIC8gMTApICogMylcblxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDExKSAqIDIpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih1c2FibGVCaXRzIC8gMTMpXG5cbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZlcnNpb24gbmVlZGVkIHRvIGNvbnRhaW4gdGhlIGFtb3VudCBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7U2VnbWVudH0gZGF0YSAgICAgICAgICAgICAgICAgICAgU2VnbWVudCBvZiBkYXRhXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtlcnJvckNvcnJlY3Rpb25MZXZlbD1IXSBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICAgICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICovXG5leHBvcnRzLmdldEJlc3RWZXJzaW9uRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YSAoZGF0YSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgbGV0IHNlZ1xuXG4gIGNvbnN0IGVjbCA9IEVDTGV2ZWwuZnJvbShlcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhKGRhdGEsIGVjbClcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuXG4gICAgc2VnID0gZGF0YVswXVxuICB9IGVsc2Uge1xuICAgIHNlZyA9IGRhdGFcbiAgfVxuXG4gIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGgoc2VnLm1vZGUsIHNlZy5nZXRMZW5ndGgoKSwgZWNsKVxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIFRoZSB2ZXJzaW9uIGluZm9ybWF0aW9uIGlzIGluY2x1ZGVkIGluIFFSIENvZGUgc3ltYm9scyBvZiB2ZXJzaW9uIDcgb3IgbGFyZ2VyLlxuICogSXQgY29uc2lzdHMgb2YgYW4gMTgtYml0IHNlcXVlbmNlIGNvbnRhaW5pbmcgNiBkYXRhIGJpdHMsXG4gKiB3aXRoIDEyIGVycm9yIGNvcnJlY3Rpb24gYml0cyBjYWxjdWxhdGVkIHVzaW5nIHRoZSAoMTgsIDYpIEdvbGF5IGNvZGUuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIEVuY29kZWQgdmVyc2lvbiBpbmZvIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzICh2ZXJzaW9uKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikgfHwgdmVyc2lvbiA8IDcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIGxldCBkID0gdmVyc2lvbiA8PCAxMlxuXG4gIHdoaWxlIChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxOF9CQ0ggPj0gMCkge1xuICAgIGQgXj0gKEcxOCA8PCAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIKSlcbiAgfVxuXG4gIHJldHVybiAodmVyc2lvbiA8PCAxMikgfCBkXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG5mdW5jdGlvbiBjbGVhckNhbnZhcyAoY3R4LCBjYW52YXMsIHNpemUpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgaWYgKCFjYW52YXMuc3R5bGUpIGNhbnZhcy5zdHlsZSA9IHt9XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplXG4gIGNhbnZhcy53aWR0aCA9IHNpemVcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGdldENhbnZhc0VsZW1lbnQgKCkge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgY2FudmFzIGVsZW1lbnQnKVxuICB9XG59XG5cbmV4cG9ydHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICBsZXQgb3B0cyA9IG9wdGlvbnNcbiAgbGV0IGNhbnZhc0VsID0gY2FudmFzXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjYW52YXNFbCA9IGdldENhbnZhc0VsZW1lbnQoKVxuICB9XG5cbiAgb3B0cyA9IFV0aWxzLmdldE9wdGlvbnMob3B0cylcbiAgY29uc3Qgc2l6ZSA9IFV0aWxzLmdldEltYWdlV2lkdGgocXJEYXRhLm1vZHVsZXMuc2l6ZSwgb3B0cylcblxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YShzaXplLCBzaXplKVxuICBVdGlscy5xclRvSW1hZ2VEYXRhKGltYWdlLmRhdGEsIHFyRGF0YSwgb3B0cylcblxuICBjbGVhckNhbnZhcyhjdHgsIGNhbnZhc0VsLCBzaXplKVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKVxuXG4gIHJldHVybiBjYW52YXNFbFxufVxuXG5leHBvcnRzLnJlbmRlclRvRGF0YVVSTCA9IGZ1bmN0aW9uIHJlbmRlclRvRGF0YVVSTCAocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBvcHRpb25zXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICBjb25zdCBjYW52YXNFbCA9IGV4cG9ydHMucmVuZGVyKHFyRGF0YSwgY2FudmFzLCBvcHRzKVxuXG4gIGNvbnN0IHR5cGUgPSBvcHRzLnR5cGUgfHwgJ2ltYWdlL3BuZydcbiAgY29uc3QgcmVuZGVyZXJPcHRzID0gb3B0cy5yZW5kZXJlck9wdHMgfHwge31cblxuICByZXR1cm4gY2FudmFzRWwudG9EYXRhVVJMKHR5cGUsIHJlbmRlcmVyT3B0cy5xdWFsaXR5KVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JBdHRyaWIgKGNvbG9yLCBhdHRyaWIpIHtcbiAgY29uc3QgYWxwaGEgPSBjb2xvci5hIC8gMjU1XG4gIGNvbnN0IHN0ciA9IGF0dHJpYiArICc9XCInICsgY29sb3IuaGV4ICsgJ1wiJ1xuXG4gIHJldHVybiBhbHBoYSA8IDFcbiAgICA/IHN0ciArICcgJyArIGF0dHJpYiArICctb3BhY2l0eT1cIicgKyBhbHBoYS50b0ZpeGVkKDIpLnNsaWNlKDEpICsgJ1wiJ1xuICAgIDogc3RyXG59XG5cbmZ1bmN0aW9uIHN2Z0NtZCAoY21kLCB4LCB5KSB7XG4gIGxldCBzdHIgPSBjbWQgKyB4XG4gIGlmICh0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHN0ciArPSAnICcgKyB5XG5cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBxclRvUGF0aCAoZGF0YSwgc2l6ZSwgbWFyZ2luKSB7XG4gIGxldCBwYXRoID0gJydcbiAgbGV0IG1vdmVCeSA9IDBcbiAgbGV0IG5ld1JvdyA9IGZhbHNlXG4gIGxldCBsaW5lTGVuZ3RoID0gMFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoaSAlIHNpemUpXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gc2l6ZSlcblxuICAgIGlmICghY29sICYmICFuZXdSb3cpIG5ld1JvdyA9IHRydWVcblxuICAgIGlmIChkYXRhW2ldKSB7XG4gICAgICBsaW5lTGVuZ3RoKytcblxuICAgICAgaWYgKCEoaSA+IDAgJiYgY29sID4gMCAmJiBkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgcGF0aCArPSBuZXdSb3dcbiAgICAgICAgICA/IHN2Z0NtZCgnTScsIGNvbCArIG1hcmdpbiwgMC41ICsgcm93ICsgbWFyZ2luKVxuICAgICAgICAgIDogc3ZnQ21kKCdtJywgbW92ZUJ5LCAwKVxuXG4gICAgICAgIG1vdmVCeSA9IDBcbiAgICAgICAgbmV3Um93ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCEoY29sICsgMSA8IHNpemUgJiYgZGF0YVtpICsgMV0pKSB7XG4gICAgICAgIHBhdGggKz0gc3ZnQ21kKCdoJywgbGluZUxlbmd0aClcbiAgICAgICAgbGluZUxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZUJ5KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAocXJEYXRhLCBvcHRpb25zLCBjYikge1xuICBjb25zdCBvcHRzID0gVXRpbHMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuICBjb25zdCBzaXplID0gcXJEYXRhLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXJEYXRhLm1vZHVsZXMuZGF0YVxuICBjb25zdCBxcmNvZGVzaXplID0gc2l6ZSArIG9wdHMubWFyZ2luICogMlxuXG4gIGNvbnN0IGJnID0gIW9wdHMuY29sb3IubGlnaHQuYVxuICAgID8gJydcbiAgICA6ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5saWdodCwgJ2ZpbGwnKSArXG4gICAgICAnIGQ9XCJNMCAwaCcgKyBxcmNvZGVzaXplICsgJ3YnICsgcXJjb2Rlc2l6ZSArICdIMHpcIi8+J1xuXG4gIGNvbnN0IHBhdGggPVxuICAgICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5kYXJrLCAnc3Ryb2tlJykgK1xuICAgICcgZD1cIicgKyBxclRvUGF0aChkYXRhLCBzaXplLCBvcHRzLm1hcmdpbikgKyAnXCIvPidcblxuICBjb25zdCB2aWV3Qm94ID0gJ3ZpZXdCb3g9XCInICsgJzAgMCAnICsgcXJjb2Rlc2l6ZSArICcgJyArIHFyY29kZXNpemUgKyAnXCInXG5cbiAgY29uc3Qgd2lkdGggPSAhb3B0cy53aWR0aCA/ICcnIDogJ3dpZHRoPVwiJyArIG9wdHMud2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIG9wdHMud2lkdGggKyAnXCIgJ1xuXG4gIGNvbnN0IHN2Z1RhZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAnICsgd2lkdGggKyB2aWV3Qm94ICsgJyBzaGFwZS1yZW5kZXJpbmc9XCJjcmlzcEVkZ2VzXCI+JyArIGJnICsgcGF0aCArICc8L3N2Zz5cXG4nXG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiKG51bGwsIHN2Z1RhZylcbiAgfVxuXG4gIHJldHVybiBzdmdUYWdcbn1cbiIsImZ1bmN0aW9uIGhleDJyZ2JhIChoZXgpIHtcbiAgaWYgKHR5cGVvZiBoZXggPT09ICdudW1iZXInKSB7XG4gICAgaGV4ID0gaGV4LnRvU3RyaW5nKClcbiAgfVxuXG4gIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29sb3Igc2hvdWxkIGJlIGRlZmluZWQgYXMgaGV4IHN0cmluZycpXG4gIH1cblxuICBsZXQgaGV4Q29kZSA9IGhleC5zbGljZSgpLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJycpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA8IDMgfHwgaGV4Q29kZS5sZW5ndGggPT09IDUgfHwgaGV4Q29kZS5sZW5ndGggPiA4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBjb2xvcjogJyArIGhleClcbiAgfVxuXG4gIC8vIENvbnZlcnQgZnJvbSBzaG9ydCB0byBsb25nIGZvcm0gKGZmZiAtPiBmZmZmZmYpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNCkge1xuICAgIGhleENvZGUgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBoZXhDb2RlLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIFtjLCBjXVxuICAgIH0pKVxuICB9XG5cbiAgLy8gQWRkIGRlZmF1bHQgYWxwaGEgdmFsdWVcbiAgaWYgKGhleENvZGUubGVuZ3RoID09PSA2KSBoZXhDb2RlLnB1c2goJ0YnLCAnRicpXG5cbiAgY29uc3QgaGV4VmFsdWUgPSBwYXJzZUludChoZXhDb2RlLmpvaW4oJycpLCAxNilcblxuICByZXR1cm4ge1xuICAgIHI6IChoZXhWYWx1ZSA+PiAyNCkgJiAyNTUsXG4gICAgZzogKGhleFZhbHVlID4+IDE2KSAmIDI1NSxcbiAgICBiOiAoaGV4VmFsdWUgPj4gOCkgJiAyNTUsXG4gICAgYTogaGV4VmFsdWUgJiAyNTUsXG4gICAgaGV4OiAnIycgKyBoZXhDb2RlLnNsaWNlKDAsIDYpLmpvaW4oJycpXG4gIH1cbn1cblxuZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICBpZiAoIW9wdGlvbnMuY29sb3IpIG9wdGlvbnMuY29sb3IgPSB7fVxuXG4gIGNvbnN0IG1hcmdpbiA9IHR5cGVvZiBvcHRpb25zLm1hcmdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA9PT0gbnVsbCB8fFxuICAgIG9wdGlvbnMubWFyZ2luIDwgMFxuICAgID8gNFxuICAgIDogb3B0aW9ucy5tYXJnaW5cblxuICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy53aWR0aCA+PSAyMSA/IG9wdGlvbnMud2lkdGggOiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDRcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBzY2FsZTogd2lkdGggPyA0IDogc2NhbGUsXG4gICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgY29sb3I6IHtcbiAgICAgIGRhcms6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IuZGFyayB8fCAnIzAwMDAwMGZmJyksXG4gICAgICBsaWdodDogaGV4MnJnYmEob3B0aW9ucy5jb2xvci5saWdodCB8fCAnI2ZmZmZmZmZmJylcbiAgICB9LFxuICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICByZW5kZXJlck9wdHM6IG9wdGlvbnMucmVuZGVyZXJPcHRzIHx8IHt9XG4gIH1cbn1cblxuZXhwb3J0cy5nZXRTY2FsZSA9IGZ1bmN0aW9uIGdldFNjYWxlIChxclNpemUsIG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMud2lkdGggJiYgb3B0cy53aWR0aCA+PSBxclNpemUgKyBvcHRzLm1hcmdpbiAqIDJcbiAgICA/IG9wdHMud2lkdGggLyAocXJTaXplICsgb3B0cy5tYXJnaW4gKiAyKVxuICAgIDogb3B0cy5zY2FsZVxufVxuXG5leHBvcnRzLmdldEltYWdlV2lkdGggPSBmdW5jdGlvbiBnZXRJbWFnZVdpZHRoIChxclNpemUsIG9wdHMpIHtcbiAgY29uc3Qgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHFyU2l6ZSwgb3B0cylcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbn1cblxuZXhwb3J0cy5xclRvSW1hZ2VEYXRhID0gZnVuY3Rpb24gcXJUb0ltYWdlRGF0YSAoaW1nRGF0YSwgcXIsIG9wdHMpIHtcbiAgY29uc3Qgc2l6ZSA9IHFyLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXIubW9kdWxlcy5kYXRhXG4gIGNvbnN0IHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShzaXplLCBvcHRzKVxuICBjb25zdCBzeW1ib2xTaXplID0gTWF0aC5mbG9vcigoc2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbiAgY29uc3Qgc2NhbGVkTWFyZ2luID0gb3B0cy5tYXJnaW4gKiBzY2FsZVxuICBjb25zdCBwYWxldHRlID0gW29wdHMuY29sb3IubGlnaHQsIG9wdHMuY29sb3IuZGFya11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbFNpemU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9sU2l6ZTsgaisrKSB7XG4gICAgICBsZXQgcG9zRHN0ID0gKGkgKiBzeW1ib2xTaXplICsgaikgKiA0XG4gICAgICBsZXQgcHhDb2xvciA9IG9wdHMuY29sb3IubGlnaHRcblxuICAgICAgaWYgKGkgPj0gc2NhbGVkTWFyZ2luICYmIGogPj0gc2NhbGVkTWFyZ2luICYmXG4gICAgICAgIGkgPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luICYmIGogPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luKSB7XG4gICAgICAgIGNvbnN0IGlTcmMgPSBNYXRoLmZsb29yKChpIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKVxuICAgICAgICBjb25zdCBqU3JjID0gTWF0aC5mbG9vcigoaiAtIHNjYWxlZE1hcmdpbikgLyBzY2FsZSlcbiAgICAgICAgcHhDb2xvciA9IHBhbGV0dGVbZGF0YVtpU3JjICogc2l6ZSArIGpTcmNdID8gMSA6IDBdXG4gICAgICB9XG5cbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5yXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuZ1xuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLmJcbiAgICAgIGltZ0RhdGFbcG9zRHN0XSA9IHB4Q29sb3IuYVxuICAgIH1cbiAgfVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvblJlc3VsdCB7IH1cblxuZXhwb3J0IGNsYXNzIENvbnRpbnVlUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7IH1cblxuZXhwb3J0IGNsYXNzIEp1bXBSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBjb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY291bnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbFIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQge1xuICAgIHN0YXZlOiBzdHJpbmc7XG4gICAgbmV3Q29udGV4dDogQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXZlOiBzdHJpbmcsIGNvbnRleHQ6IENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF2ZSA9IHN0YXZlO1xuICAgICAgICB0aGlzLm5ld0NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2VSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBjb3VudDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY291bnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgQ2xvc2VDdXJzb3IsIFNoYXBlLCBJQ3Vyc29yLCBPcHNQYXJhbXMgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0LCBDb250aW51ZVIsIEp1bXBSLCBDYWxsUiwgUmV2ZXJzZVJ9IGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvblJlc3VsdFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlLCBldmFsVmFsdWUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmFic3RyYWN0IGNsYXNzIE5vZGVXaXRoVmFsdWUgZXh0ZW5kcyBBY3Rpb25Ob2RlIHtcbiAgICAjdmFsdWVzOiBWYWx1ZU5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogVmFsdWVOb2RlW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy4jdmFsdWVzID0gdmFsdWVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHRoaXMuI3ZhbHVlcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGV2YWxWYWx1ZShjb250ZXh0OiBDb250ZXh0KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLiN2YWx1ZXMsIGNvbnRleHQpLnZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsSW50VmFsdWUoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuZXZhbFZhbHVlKGNvbnRleHQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYWxsIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgI25hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKHZhbHVlKTtcbiAgICAgICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDYWxsUih0aGlzLiNuYW1lLCB0aGlzLmNyZWF0ZUNvbnRleHQoY29udGV4dCkpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDb250ZXh0KGNvbnRleHQ6IENvbnRleHQpOiBDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250ZXh0KHtcbiAgICAgICAgICAgIGFyZ3VtZW50OiB0aGlzLmV2YWwoY29udGV4dCksXG4gICAgICAgICAgICBjdXJzb3I6IHRoaXMuY3JlYXRlQ3Vyc29yKGNvbnRleHQpLFxuICAgICAgICAgICAgaXRlcmF0aW9uOiBjb250ZXh0Lml0ZXJhdGlvbiArIDEsXG4gICAgICAgICAgICB2YWx1ZUZ1bmNCYWc6IGNvbnRleHQudmFsdWVGdW5jQmFnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ3Vyc29yKGNvbnRleHQ6IENvbnRleHQpOiBJQ3Vyc29yIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3Vyc29yO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkOiBFdmFsdWVkVmFsdWUpOiBPcHNQYXJhbXMge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzRmlsbGVkOiBldmFsZWQuaXNGaWxsZWQsXG4gICAgICAgIGNvbG9yOiBldmFsZWQuY29sb3IsXG4gICAgICAgIHN0cm9rZTogZXZhbGVkLnN0cm9rZVRoaWNrbmVzcyxcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvc2VDYWxsIGV4dGVuZHMgQ2FsbCB7XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1cnNvcihjb250ZXh0OiBDb250ZXh0KTogSUN1cnNvciB7XG4gICAgICAgIGNvbnN0IGV2YWxlZCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBDbG9zZUN1cnNvcihjb250ZXh0LmN1cnNvciwgZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkKSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcn0gPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmRyYXdMaW5lKGxlbmd0aCwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0ZpZ3VyZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNzaGFwZTogU2hhcGVcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlczogVmFsdWVOb2RlW10sIHNoYXBlOiBTaGFwZSkge1xuICAgICAgICBzdXBlcih2YWx1ZXMpO1xuICAgICAgICB0aGlzLiNzaGFwZSA9IHNoYXBlO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGV2YWxlZCA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGV2YWxlZC52YWx1ZTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZHJhd1NoYXBlKHRoaXMuI3NoYXBlLCBzaXplLCBldmFsZWRUb0ZpZ3VyZU9wcyhldmFsZWQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEcmF3QXJjTGluZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIHByaXZhdGUgcmF0aW86IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhdGlvLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCB7dmFsdWU6IHNpemUsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3QXJjTGluZSh0aGlzLnJhdGlvLCBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlO1xuICAgICAgICBjb25zdCB7IGN1cnNvciB9ID0gY29udGV4dDtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdGhpcy5yYXRpbyAvIDIpO1xuICAgICAgICBjdXJzb3IuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmFic3RyYWN0IGNsYXNzIEN1cnNvck1hbmlwdWxhdG9yIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgYWJzdHJhY3QgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcik6IHZvaWQ7XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICB0aGlzLmNoYW5nZShjb250ZXh0LmN1cnNvciwgdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoY29udGV4dC5jdXJzb3IsIC10aGlzLmV2YWwoY29udGV4dCkudmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVGb3J3YXJkIGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVCYWNrd2FyZCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5iYWNrd2FyZCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IubGVmdCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTW92ZVJpZ2h0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLnJpZ2h0KHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVSaWdodCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yb3RhdGUodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUxlZnQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3Iucm90YXRlKC12YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmV2ZXJzZSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXZlcnNlUihpdGVyYXRpb25zKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgaXRlcmF0aW9ucyA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gbmV3IFJldmVyc2VSKGl0ZXJhdGlvbnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlcGxheSBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNqdW1wU2l6ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGp1bXBTaXplID0gMSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMuI2p1bXBTaXplID0ganVtcFNpemU7XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IGxvY2FsWydjb3VudGVyJ10gfHwgMTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuZXZhbEludFZhbHVlKGNvbnRleHQpO1xuICAgICAgICBpZiAoY291bnRlciA8IHNpemUpIHtcbiAgICAgICAgICAgIGxvY2FsWydjb3VudGVyJ10gPSBjb3VudGVyICsgMTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSnVtcFIoLXRoaXMuI2p1bXBTaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgQWN0aW9uUmVzdWx0LCBDb250aW51ZVIgfSBmcm9tIFwiLi9hY3Rpb25SZXN1bHRcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlTm9kZSB7XG4gICAgYWJzdHJhY3QgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWN0aW9uTm9kZSB7XG4gICAgYWJzdHJhY3QgZXhlYyhjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0O1xuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQsIGxvY2FsOiBvYmplY3QpOiBBY3Rpb25SZXN1bHQgeyByZXR1cm4gbmV3IENvbnRpbnVlUigpOyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZhbFZhbHVlKHZhbHVlTm9kZXM6IFZhbHVlTm9kZVtdLCBjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICBjb25zdCBpbml0OiBFdmFsdWVkVmFsdWUgPSB7XG4gICAgICAgIHZhbHVlOiAxLjAsXG4gICAgICAgIGNvbG9yOiBjb250ZXh0LmFyZ3VtZW50LmNvbG9yLFxuICAgICAgICBzdHJva2VTdHlsZTogY29udGV4dC5hcmd1bWVudC5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBjb250ZXh0LmFyZ3VtZW50LnN0cm9rZVRoaWNrbmVzcyxcbiAgICAgICAgaXNGaWxsZWQ6IGNvbnRleHQuYXJndW1lbnQuaXNGaWxsZWQsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IChhOiBudW1iZXIsIGI6bnVtYmVyKSA9PiBhICogYixcbiAgICB9O1xuICAgIHJldHVybiB2YWx1ZU5vZGVzLnJlZHVjZShwYXJ0RXZhbC5iaW5kKHRoaXMsIGNvbnRleHQpLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gcGFydEV2YWwoY29udGV4dDogQ29udGV4dCwgYWNjOiBFdmFsdWVkVmFsdWUsIG5vZGU6IFZhbHVlTm9kZSk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBub2RlLmV2YWwoY29udGV4dCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gbmV3VmFsdWUudmFsdWVUcmFuc2Zvcm1lciB8fCBhY2MudmFsdWVUcmFuc2Zvcm1lcjtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWUudmFsdWUgIT09IHVuZGVmaW5lZCA/IHRyYW5zZm9ybShhY2MudmFsdWUsIG5ld1ZhbHVlLnZhbHVlKSA6IGFjYy52YWx1ZSxcbiAgICAgICAgY29sb3I6IG5ld1ZhbHVlLmNvbG9yICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5jb2xvciA6IGFjYy5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IG5ld1ZhbHVlLnN0cm9rZVN0eWxlICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VTdHlsZSA6IGFjYy5zdHJva2VTdHlsZSxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLnN0cm9rZVRoaWNrbmVzcyA6IGFjYy5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIGlzRmlsbGVkOiBuZXdWYWx1ZS5pc0ZpbGxlZCAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuaXNGaWxsZWQgOiBhY2MuaXNGaWxsZWQsXG4gICAgICAgIHZhbHVlVHJhbnNmb3JtZXI6IHRyYW5zZm9ybSxcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1heENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1pbkNvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge2NvbG9yOiAwLjB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGxDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtpc0ZpbGxlZDogdHJ1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRW1wdHlDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtpc0ZpbGxlZDogZmFsc2V9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNoaWZ0Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNoaWZ0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICBsZXQgY29sb3IgPSAoY29udGV4dC5hcmd1bWVudC5jb2xvciArIHRoaXMuc2hpZnQpICUgMS4wO1xuICAgICAgICBpZiAoY29sb3IgPCAwLjApIHtcbiAgICAgICAgICAgIGNvbG9yICs9IDEuMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2NvbG9yfTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEFjdGlvbk5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWN0aW9uczogQWN0aW9uTm9kZVtdKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgfVxufSIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgTXVsdE9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAqIGIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKyBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ViT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhIC0gYiB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQsIEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBTdHJva2VTdHlsZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgU2V0U3Ryb2tlU3R5bGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgc3Ryb2tlOiBTdHJva2VTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cm9rZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cm9rZSA9IHN0cm9rZTtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyBzdHJva2VTdHlsZTogdGhpcy5zdHJva2UgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNoaWZ0U3Ryb2tlVGhpY2tuZXNzIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlVGhpY2tuZXNzID0gY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MgKyB0aGlzLnNoaWZ0O1xuICAgICAgICByZXR1cm4geyBzdHJva2VUaGlja25lc3MgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgQW5nbGUgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbm9ybWFsaXplZEFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubm9ybWFsaXplZEFuZ2xlID0gYW5nbGUgLyAzNjAuMDtcbiAgICB9XG5cbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLm5vcm1hbGl6ZWRBbmdsZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVyIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy52YWx1ZX07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IGNvbnRleHQuYXJndW1lbnQudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIER5bmFtaWNBcmd1bWVudCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgY29uc3QgdmFsdWVOb2RlcyA9IGNvbnRleHQudmFsdWVGdW5jQmFnW3RoaXMubmFtZV0gfHwgW107XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodmFsdWVOb2RlcywgY29udGV4dCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiQC9jb3JlL2FzdC9iYXNlXCI7XG5cbmV4cG9ydCB0eXBlIFN0cm9rZVN0eWxlID0gXCJzb2xpZFwiIHwgXCJkb3R0ZWRcIiB8IFwiZGFzaGVkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXZhbHVlZFZhbHVlIHtcbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgICBjb2xvcj86IG51bWJlcjtcbiAgICBzdHJva2VTdHlsZT86IFN0cm9rZVN0eWxlO1xuICAgIHN0cm9rZVRoaWNrbmVzcz86IG51bWJlcjtcbiAgICBpc0ZpbGxlZD86IGJvb2xlYW47XG4gICAgdmFsdWVUcmFuc2Zvcm1lcj86IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcmVhZG9ubHkgaXRlcmF0aW9uOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgYXJndW1lbnQ6IEV2YWx1ZWRWYWx1ZTtcbiAgICByZWFkb25seSBjdXJzb3I6IElDdXJzb3I7XG4gICAgcmVhZG9ubHkgdmFsdWVGdW5jQmFnOiB7W25hbWU6IHN0cmluZ106IFZhbHVlTm9kZVtdfTtcblxuICAgIGNvbnN0cnVjdG9yKHtjdXJzb3IsIGFyZ3VtZW50LCB2YWx1ZUZ1bmNCYWcgPSB7fSwgaXRlcmF0aW9uID0gMH0pIHtcbiAgICAgICAgdGhpcy5hcmd1bWVudCA9IGFyZ3VtZW50O1xuICAgICAgICB0aGlzLml0ZXJhdGlvbiA9IGl0ZXJhdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZUZ1bmNCYWcgPSB2YWx1ZUZ1bmNCYWc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY3Vyc29yO1xuICAgIH1cblxuICAgIG9uRW5kKCkge1xuICAgICAgICB0aGlzLmN1cnNvci5jbG9zZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ2FsbFIsIENvbnRpbnVlUiwgSnVtcFIsIFJldmVyc2VSIH0gZnJvbSBcIkAvY29yZS9hc3QvYWN0aW9uUmVzdWx0XCI7XG5pbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiQC9jb3JlL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBcmdzIHtcbiAgICByZXN1bHQ6IEFjdGlvblJlc3VsdDtcbiAgICBiYWc6IEZ1bmN0aW9uc0JhZztcbiAgICBwdXNoOiBQdXNoQ2I7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2FscyhmdW5jOiBGdW5jdGlvbikge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGZ1bmMuYWN0aW9ucywgKCkgPT4gKHt9KSk7XG59XG5cbnR5cGUgUHVzaENiID0gKHN0ZXBwZXI6IENvbnRleHRTdGVwcGVyKSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdFN0ZXBwZXIoY29udGV4dDogQ29udGV4dCwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gbmV3IEZvcndhcmRDb250ZXh0U3RlcHBlcih7XG4gICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGNvbnRleHQsXG4gICAgfSk7XG59XG5cbmludGVyZmFjZSBTY29wZSB7XG4gICAgY29udGV4dDogQ29udGV4dDtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIGZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgICBsb2NhbHM6IG9iamVjdFtdO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udGV4dFN0ZXBwZXIge1xuICAgIHByb3RlY3RlZCBzY29wZTogU2NvcGU7XG5cbiAgICBjb25zdHJ1Y3RvciAoc2NvcGU6IFNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBleGVjKCk6IEFjdGlvblJlc3VsdDtcbiAgICBhYnN0cmFjdCBtb3ZlKGFyZ3M6IE1vdmVBcmdzKTogYm9vbGVhbjtcbiAgICBvbkVuZCgpIHsgdGhpcy5zY29wZS5jb250ZXh0Lm9uRW5kKCk7IH07XG5cbiAgICBnZXQgaW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuc2NvcGUuaW5kZXg7IH1cbiAgICBnZXQgc3RhdmUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2NvcGUuZnVuY3Rpb24ubmFtZTsgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9yd2FyZENvbnRleHRTdGVwcGVyIGV4dGVuZHMgQ29udGV4dFN0ZXBwZXIge1xuICAgIGV4ZWMoKTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMsIGxvY2FscyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZnVuYy5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHNbaW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbiB8fCAhbG9jYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjdGlvbi5leGVjKHRoaXMuc2NvcGUuY29udGV4dCwgbG9jYWwpO1xuICAgIH1cblxuICAgIG1vdmUoe3Jlc3VsdCwgYmFnLCBwdXNofTogTW92ZUFyZ3MpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEp1bXBSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IHJlc3VsdC5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDYWxsUikge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24ocmVzdWx0LnN0YXZlLCByZXN1bHQubmV3Q29udGV4dC5pdGVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdXNoKG5ldyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXN1bHQubmV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4ICs9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV2ZXJzZVIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5zY29wZS5pbmRleCAtIHJlc3VsdC5jb3VudCk7XG4gICAgICAgICAgICBwdXNoKG5ldyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMuc2NvcGUuY29udGV4dCxcbiAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5zY29wZS5pbmRleCAtIDEsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb246IHRoaXMuc2NvcGUuZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHModGhpcy5zY29wZS5mdW5jdGlvbiksXG4gICAgICAgICAgICB9LCBlbmRJbmRleCkpO1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJXcm9uZyBBY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luZGV4SW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgZnVuYy5zaXplO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2VDb250ZXh0U3RlcHBlciBleHRlbmRzIENvbnRleHRTdGVwcGVyIHtcbiAgICAjZW5kSW5kZXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBTY29wZSwgZW5kSW5kZXg6IG51bWJlciA9IDApIHtcbiAgICAgICAgc3VwZXIoc2NvcGUpO1xuICAgICAgICB0aGlzLiNlbmRJbmRleCA9IGVuZEluZGV4O1xuICAgIH1cblxuICAgIGV4ZWMoKTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMsIGxvY2FscyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZnVuYy5hY3Rpb25zW2luZGV4XTtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWNSZXZlcnNlKHRoaXMuc2NvcGUuY29udGV4dCwgbG9jYWwpO1xuICAgIH1cblxuICAgIG1vdmUoe3Jlc3VsdCwgYmFnLCBwdXNofTogTW92ZUFyZ3MpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEp1bXBSKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IHJlc3VsdC5jb3VudDtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDYWxsUikge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24ocmVzdWx0LnN0YXZlLCByZXN1bHQubmV3Q29udGV4dC5pdGVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGZ1bmMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwdXNoKG5ldyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiByZXN1bHQubmV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGZ1bmMuc2l6ZSAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiBmdW5jLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IGNyZWF0ZUxvY2FscyhmdW5jKSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IDE7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmV2ZXJzZVIpIHtcbiAgICAgICAgICAgIC8vLyBUT0RPIC0gaW1wbGVtZW50IFJldmVyc2UtUmV2ZXJzZVxuICAgICAgICAgICAgLy8vIE9yIG1heWJlIG9uZSBzdGVwcGVyIHdpdGggbW92ZSBjdXJzb3Igb25seSB3aXRoIHNwZWNpZmllZCBkaXJlY3Rpb24/XG4gICAgICAgICAgICB0aGlzLnNjb3BlLmluZGV4IC09IHJlc3VsdC5jb3VudCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIldyb25nIEFjdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5kZXhJblJhbmdlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzSW5kZXhJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBmdW5jdGlvbjogZnVuYyB9ID0gdGhpcy5zY29wZTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IHRoaXMuI2VuZEluZGV4ICYmIGluZGV4IDwgZnVuYy5zaXplO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZpZ3VyZSwgTGluZSwgUmVjdGFuZ2xlLCBUcmlhbmdsZSwgQ2lyY2xlLCBBcmMsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uLCBMaW5lQ3VydmUsIEFyY0N1cnZlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm94IHtcbiAgICBtaW46IFtudW1iZXIsIG51bWJlcl07XG4gICAgbWF4OiBbbnVtYmVyLCBudW1iZXJdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wc1BhcmFtcyB7XG4gICAgY29sb3I6IG51bWJlcixcbiAgICBzdHJva2U6IG51bWJlcixcbiAgICBpc0ZpbGxlZDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGVudW0gU2hhcGUgeyBTcXVhcmUsIFRyaWFuZ2xlLCBDaXJjbGUgfVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSUN1cnNvciB7XG4gICAgZGlzdGFuY2VNdWx0aXBsZXI6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBmaWd1cmVzOiBGaWd1cmVbXTtcbiAgICBib3g6IEJveDtcbiAgICAvLyBhbmdsZSA9IDAuMCAtPiAwwrBcbiAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgIGFuZ2xlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWd1cmVzID0gW107XG4gICAgfVxuXG4gICAgZm9yd2FyZChkaXN0YW5jZTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gKz0geCAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB5ICogZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb3J3YXJkKC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmlnaHQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICAvLyByb3RhdGUgb3JpZW50YXRpb24gYnkgOTDCsFxuICAgICAgICB0aGlzLnBvc2l0aW9uWzBdIC09IHkgKiBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMucG9zaXRpb25bMV0gKz0geCAqIGRpc3RhbmNlICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICB9XG5cbiAgICBsZWZ0KGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yaWdodCgtZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHJvdGF0ZShhbmdsZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgICAgICAvLyBhbmdsZSA9IDEuMCAtPiAzNjDCsFxuICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBhbmdsZSkgJSAxLjA7XG4gICAgICAgIGNvbnN0IHJhZGlhbnMgPSBhbmdsZSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIHRoaXMub3JpZW50YXRpb25bMF0gPSB4ICogY29zIC0geSAqIHNpbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblsxXSA9IHggKiBzaW4gKyB5ICogY29zO1xuICAgIH1cblxuICAgIGNsb3NlKCkgeyB9XG5cbiAgICBwcm90ZWN0ZWQgZXh0ZW5kQm94KFt4LCB5XTogbnVtYmVyW10sIHNpemUgPSAwKSB7XG4gICAgICAgIHRoaXMuYm94Lm1pblswXSA9IE1hdGgubWluKHRoaXMuYm94Lm1pblswXSwgeCAtIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5tYXhbMF0gPSBNYXRoLm1heCh0aGlzLmJveC5tYXhbMF0sIHggKyBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWluWzFdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzFdLCB5IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFsxXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFsxXSwgeSArIHNpemUpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNhbGNTdHlsZVBhcmFtcyhvcHM6IE9wc1BhcmFtcyk6IFN0eWxlO1xuICAgIGFic3RyYWN0IGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKTogdm9pZDtcbiAgICBhYnN0cmFjdCBkcmF3U2hhcGUoc2hhcGU6IFNoYXBlLCBzaXplOiBudW1iZXIsIG9wczogT3BzUGFyYW1zKTogdm9pZDtcbiAgICBhYnN0cmFjdCBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEN1cnNvciBleHRlbmRzIElDdXJzb3Ige1xuICAgIHN0cm9rZVNpemU6IG51bWJlcjtcbiAgICBmaXJzdENvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gICAgc2Vjb25kQ29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgc3Ryb2tlU2l6ZSA9IDEsXG4gICAgICAgIGRpc3RhbmNlTXVsdGlwbGVyID0gMTAwLFxuICAgICAgICBmaXJzdENvbG9yID0gXCIjMDAwMDAwXCIsXG4gICAgICAgIHNlY29uZENvbG9yID0gXCIjREMxNDNDXCIsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlU2l6ZSA9IHN0cm9rZVNpemU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBkaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFswLjAsIDAuMF07XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwLjA7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBbMS4wLCAwLjBdO1xuICAgICAgICB0aGlzLmJveCA9IHtcbiAgICAgICAgICAgIG1pbjogWzAuMCwgMC4wXSxcbiAgICAgICAgICAgIG1heDogWzAuMCwgMC4wXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5maXJzdENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKGZpcnN0Q29sb3IpO1xuICAgICAgICB0aGlzLnNlY29uZENvbG9yID0gdGhpcy5oZXhUb0NvbG9yKHNlY29uZENvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvQ29sb3IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygxLCAxICsgMiksIDE2KTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMywgMyArIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDUsIDUgKyAyKSwgMTYpO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGJdO1xuICAgIH1cblxuICAgIGNhbGNTdHlsZVBhcmFtcyhvcHM6IE9wc1BhcmFtcyk6IFN0eWxlIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNhbGNDb2xvcihvcHMuY29sb3IpO1xuICAgICAgICBpZiAob3BzLmlzRmlsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBmaWxsOiBjb2xvciB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGZpbGw6IFwibm9uZVwiLCBjb2xvcjogY29sb3IsIHN0cm9rZTogb3BzLnN0cm9rZSAqIHRoaXMuc3Ryb2tlU2l6ZSB9O1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKHsgc3Ryb2tlLCBjb2xvciwgaXNGaWxsZWQ6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgTGluZShbb2xkX3gsIG9sZF95XSwgW25ld194LCBuZXdfeV0sIHN0eWxlKSk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgbmR4ID0gLWR5O1xuICAgICAgICBjb25zdCBuZHkgPSBkeDtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBbeCArIGFyY1JhZGl1cyAqIG5keCwgeSArIGFyY1JhZGl1cyAqIG5keV07XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jYWxjU3R5bGVQYXJhbXMoeyBzdHJva2UsIGNvbG9yLCBpc0ZpbGxlZDogZmFsc2UgfSk7XG4gICAgICAgIGNvbnN0IG9wcyA9IHtcbiAgICAgICAgICAgIHNoaWZ0OiB0aGlzLmFuZ2xlIC0gMC4yNSxcbiAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgQXJjKHBvaW50LCBhcmNSYWRpdXMsIHJhdGlvLCBvcHMsIHN0eWxlKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkKHNpemUpO1xuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG4gICAgfVxuXG4gICAgZHJhd1NoYXBlKHNoYXBlOiBTaGFwZSwgc2l6ZTogbnVtYmVyLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5jYWxjU3R5bGVQYXJhbXMob3BzKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3goW3gsIHldLCBNYXRoLmFicyhzaXplKSk7XG5cbiAgICAgICAgc3dpdGNoIChzaGFwZSkge1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5DaXJjbGU6XG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IENpcmNsZShbeCwgeV0sIHNpemUsIHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNoYXBlLlNxdWFyZTpcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgUmVjdGFuZ2xlKFt4LCB5XSwgW2R4LCBkeV0sIHNpemUsIHNpemUsIHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNoYXBlLlRyaWFuZ2xlOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBUcmlhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY0NvbG9yKGNvbG9yOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjYSA9IHRoaXMuZmlyc3RDb2xvcjtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLnNlY29uZENvbG9yO1xuICAgICAgICBjb25zdCBhUmF0aW8gPSBNYXRoLmFicyhjb2xvciAtIDAuNSkgKiAyO1xuICAgICAgICBjb25zdCBiUmF0aW8gPSAxLjAgLSBhUmF0aW87XG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLnRydW5jKGNhWzBdICogYVJhdGlvICsgY2JbMF0gKiBiUmF0aW8pO1xuICAgICAgICBjb25zdCBnID0gTWF0aC50cnVuYyhjYVsxXSAqIGFSYXRpbyArIGNiWzFdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgYiA9IE1hdGgudHJ1bmMoY2FbMl0gKiBhUmF0aW8gKyBjYlsyXSAqIGJSYXRpbyk7XG4gICAgICAgIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbG9zZUN1cnNvciBleHRlbmRzIElDdXJzb3Ige1xuICAgICNjdXJzb3I6IElDdXJzb3I7XG4gICAgI3BvbHlnb246IFBvbHlnb247XG5cbiAgICBjb25zdHJ1Y3RvcihjdXJzb3I6IElDdXJzb3IsIG9wczogT3BzUGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI2N1cnNvciA9IGN1cnNvcjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFsuLi5jdXJzb3IucG9zaXRpb25dO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWy4uLmN1cnNvci5vcmllbnRhdGlvbl07XG4gICAgICAgIHRoaXMuYW5nbGUgPSBjdXJzb3IuYW5nbGU7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgPSBjdXJzb3IuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy4jY3Vyc29yLmJveDtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgICAgICB0aGlzLiNwb2x5Z29uID0gbmV3IFBvbHlnb24oWy4uLmN1cnNvci5wb3NpdGlvbl0sIFtdLCBzdHlsZSk7XG4gICAgfVxuXG4gICAgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGUge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3Vyc29yLmNhbGNTdHlsZVBhcmFtcyhvcHMpO1xuICAgIH1cblxuICAgIGRyYXdMaW5lKGRpc3RhbmNlOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IFtvbGRfeCwgb2xkX3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5mb3J3YXJkKGRpc3RhbmNlKTtcbiAgICAgICAgY29uc3QgW25ld194LCBuZXdfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBkZWx0YTogW251bWJlciwgbnVtYmVyXSA9IFtuZXdfeCAtIG9sZF94LCBuZXdfeSAtIG9sZF95XTtcbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgTGluZUN1cnZlKGRlbHRhKSk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgYXJjU2l6ZSA9IHNpemUgLyAyICogdGhpcy5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgY29uc3QgYXJjUmFkaXVzID0gYXJjU2l6ZSAvIE1hdGguc2luKHJhdGlvICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IHNoaWZ0ID0gdGhpcy5hbmdsZSAtIDAuMjU7XG5cbiAgICAgICAgdGhpcy4jcG9seWdvbi5jdXJ2ZXMucHVzaChuZXcgQXJjQ3VydmUoYXJjUmFkaXVzLCByYXRpbywgc2hpZnQpKTtcblxuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keTtcbiAgICAgICAgY29uc3QgbmR5ID0gZHg7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICB0aGlzLmV4dGVuZEJveChwb2ludCwgTWF0aC5hYnMoYXJjUmFkaXVzKSk7XG5cbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5mb3J3YXJkKHNpemUpO1xuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgIH1cblxuICAgIGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgdGhpcy4jY3Vyc29yLmRyYXdTaGFwZShzaGFwZSwgc2l6ZSwgb3BzKTtcbiAgICB9XG5cbiAgICBjYWxjQ29sb3IoY29sb3I6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3IuY2FsY0NvbG9yKGNvbG9yKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlndXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBDdXJzb3IgaXMgY2xvc2VkLiBHbyBhd2F5LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKHRoaXMuI3BvbHlnb24pO1xuICAgICAgICB0aGlzLiNjdXJzb3IuZmlndXJlcyA9IHRoaXMuI2N1cnNvci5maWd1cmVzLmNvbmNhdCh0aGlzLmZpZ3VyZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBwYXJzZUxpbmVGdW5jLCBwYXJzZUxpbmVWYWx1ZSwgcGFyc2VSYXdUb2tlbnMgfSBmcm9tIFwiQC9jb3JlL3BhcnNlclwiO1xuaW1wb3J0IHsgRHluYW1pY0FyZ3NLZXksIERZTkFNSUNfQVJHUyB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IEV2YWx1ZWRWYWx1ZSB9IGZyb20gXCJAL2NvcmUvY29udGV4dFwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIi4vZnVuY3Rpb25zQmFnXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiLi9zdGVwXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiLi9zdGF2ZVwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIi4vYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIi4vYXN0L2Z1bmN0aW9uXCI7XG5cbmNvbnN0IE1BWF9TVEVQUyA9IDEwMDAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWMoc3RhY2s6IFN0YWNrU3RlcCkge1xuICAgIGZvciAobGV0IHN0ZXAgPSAwOyBzdGVwIDwgTUFYX1NURVBTOyBzdGVwKyspIHtcbiAgICAgICAgaWYgKHN0YWNrLnN0ZXAoKS5oYWx0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgXCJNYXhpbXVtIHN0ZXBzIHJlYWNoZWRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXhlYyh2YWx1ZUFyZ3VtZW50OiBudW1iZXIsIG1heEl0ZXJhdGlvbjogbnVtYmVyLCBzdGF2ZXM6IFN0YXZlW10sIGN1cnNvcjogQ3Vyc29yKTogU3RhY2tTdGVwIHtcbiAgICBjb25zdCBhcmd1bWVudDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWVBcmd1bWVudCxcbiAgICAgICAgc3Ryb2tlU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAxLjAsXG4gICAgICAgIGNvbG9yOiAwLjAsXG4gICAgICAgIGlzRmlsbGVkOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgYmFnID0gbmV3IEZ1bmN0aW9uc0JhZyhtYXhJdGVyYXRpb24sIGluaXRGdW5jQmFnKHN0YXZlcykpO1xuICAgIGNvbnN0IHZhbHVlRnVuY0JhZyA9IGluaXRWYWx1ZUJhZyhzdGF2ZXMpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgQ29udGV4dCh7IGFyZ3VtZW50LCBjdXJzb3IsIHZhbHVlRnVuY0JhZyB9KTtcbiAgICByZXR1cm4gbmV3IFN0YWNrU3RlcChjb250ZXh0LCBiYWcpO1xufVxuXG5mdW5jdGlvbiBpbml0RnVuY0JhZyhzdGF2ZXM6IFN0YXZlW10pOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4ge1xuICAgIGNvbnN0IGJhZzogUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+ID0ge307XG4gICAgc3RhdmVzIFxuICAgICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gIURZTkFNSUNfQVJHUy5pbmNsdWRlcyhuYW1lIGFzIER5bmFtaWNBcmdzS2V5KSlcbiAgICAgICAgLmZvckVhY2goKHsgbmFtZSwgc3VmZml4ID0gbnVsbCwgdG9rZW5zOiByYXdUb2tlbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSB0b1JlYWxuYW1lKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW3JlYWxOYW1lXSA9IHBhcnNlTGluZUZ1bmMobmFtZSwgdG9rZW5zKTtcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGJhZztcbn1cblxuZnVuY3Rpb24gaW5pdFZhbHVlQmFnKHN0YXZlczogU3RhdmVbXSk6IFJlY29yZDxzdHJpbmcsIFZhbHVlTm9kZVtdPiB7XG4gICAgY29uc3QgYmFnOiBSZWNvcmQ8c3RyaW5nLCBWYWx1ZU5vZGVbXT4gPSB7fTtcbiAgICBzdGF2ZXMgXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiBEWU5BTUlDX0FSR1MuaW5jbHVkZXMobmFtZSBhcyBEeW5hbWljQXJnc0tleSkpXG4gICAgICAgIC5mb3JFYWNoKCh7IG5hbWUsIHN1ZmZpeCA9IG51bGwsIHRva2VuczogcmF3VG9rZW5zIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gdG9SZWFsbmFtZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zKTtcbiAgICAgICAgICAgIGJhZ1tyZWFsTmFtZV0gPSBwYXJzZUxpbmVWYWx1ZSh0b2tlbnMpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gYmFnO1xufVxuXG5mdW5jdGlvbiB0b1JlYWxuYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgcmV0dXJuIChzdWZmaXggPT09IG51bGwgfHwgc3VmZml4Lmxlbmd0aCA9PSAwKSA/IG5hbWUgOiBgJHtuYW1lfTo6JHtzdWZmaXh9YDtcbn0iLCJleHBvcnQgaW50ZXJmYWNlIEZpZ3VyZSB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3R5bGUge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZT86IG51bWJlcjtcbiAgICBmaWxsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTGluZSB7XG4gICAgZmlyc3RQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBzdHlsZTogTGluZVN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3RQb2ludCwgc2Vjb25kUG9pbnQsIHN0eWxlOiBMaW5lU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLmZpcnN0UG9pbnQgPSBmaXJzdFBvaW50O1xuICAgICAgICB0aGlzLnNlY29uZFBvaW50ID0gc2Vjb25kUG9pbnQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdXJ2ZSB7fVxuXG5leHBvcnQgY2xhc3MgTGluZUN1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIGRlbHRhOiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3IoZGVsdGE6IFtudW1iZXIsIG51bWJlcl0pIHtcbiAgICAgICAgdGhpcy5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyY0N1cnZlIGltcGxlbWVudHMgQ3VydmUge1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgc2hpZnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJhZGl1czogbnVtYmVyLCByYXRpbzogbnVtYmVyLCBzaGlmdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGltcGxlbWVudHMgRmlndXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBjdXJ2ZXM6IEN1cnZlW107XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIGN1cnZlczogQ3VydmVbXSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB0aGlzLmNsb3NlID0gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcmMgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHJhZGl1czogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgY2xvc2U6IGJvb2xlYW47XG4gICAgc2hpZnQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludCwgcmFkaXVzLCByYXRpbywgeyBzaGlmdCA9IDAuMCwgY2xvc2UgPSBmYWxzZSB9ID0ge30sIHN0eWxlOiBTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMucG9pbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgICAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQ6IFtudW1iZXIsIG51bWJlcl0sIG9yaWVudGF0aW9uOiBbbnVtYmVyLCBudW1iZXJdLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmlhbmdsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgc2l6ZTogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCBvcmllbnRhdGlvbiwgc2l6ZSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gXCJAL2NvcmUvYXN0L2Z1bmN0aW9uXCI7XG5cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uc0JhZyB7XG4gICAgbWF4SXRlcmF0aW9uOiBudW1iZXI7XG4gICAgYmFnOiB7W25hbWU6IHN0cmluZ106IEZ1bmN0aW9ufTtcblxuICAgIGNvbnN0cnVjdG9yKG1heEl0ZXJhdGlvbiwgYmFnKSB7XG4gICAgICAgIHRoaXMubWF4SXRlcmF0aW9uID0gbWF4SXRlcmF0aW9uO1xuICAgICAgICB0aGlzLmJhZyA9IGJhZztcbiAgICB9XG5cbiAgICBmaW5kRnVuY3Rpb24obmFtZTogc3RyaW5nLCBpdGVyYXRpb246IG51bWJlciA9IDApOiBGdW5jdGlvbiB8IG51bGwge1xuICAgICAgICBjb25zdCB7IG1heEl0ZXJhdGlvbiB9ID0gdGhpcztcbiAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGhyb3dGdW5jID0gdGhpcy4jdGhyb3dGdW5jLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gPj0gbWF4SXRlcmF0aW9uIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RU5EYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVyYXRpb24gJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkVWRU5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpPRERgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpID0gaXRlcmF0aW9uOyBpID4gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpHRSR7aX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3dGdW5jKG5hbWUpO1xuICAgICAgICB9IGNhdGNoKGZ1bmMpIHtcbiAgICAgICAgICAgIGlmIChmdW5jIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgICN0aHJvd0Z1bmMobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLmJhZ1tuYW1lXTtcbiAgICAgICAgaWYgKGZ1bmMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgZnVuYztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ0FMTFMgPSBbXCJGXCIsIFwiR1wiLCBcIkhcIl0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgRFlOQU1JQ19BUkdTID0gW1wiRElBTU9ORFwiLCBcIklOVl9UUklBTkdMRVwiXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBTVEFWRVMgPSBbLi4uQ0FMTFMsIC4uLkRZTkFNSUNfQVJHU10gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgU1VGRklYRVMgPSBbXCJFTkRcIiwgXCJFVkVOXCIsIFwiT0REXCIsIFwiR0UzXCIsIFwiR0U1XCIsIFwiR0U3XCJdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFRPS0VOUyA9IFtcbiAgICAvLyBDb3VudHNcbiAgICBcIkNPVU5UXzFcIixcbiAgICBcIkNPVU5UXzJcIixcbiAgICBcIkNPVU5UXzNcIixcbiAgICBcIkNPVU5UXzVcIixcbiAgICBcIkNPVU5UXzdcIixcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgXCJDT1VOVF9NSU5VU1wiLFxuICAgIFwiQ09VTlRfR09MRFwiLFxuICAgIFwiQ09VTlRfU0lMVkVSXCIsXG4gICAgXCJDT1VOVF9CUk9OWkVcIixcbiAgICBcIkNPVU5UX1BMQVNUSUNcIixcbiAgICAvLyBGcmFjdGlvbnNcbiAgICBcIkZSQUNUXzFfMlwiLFxuICAgIFwiRlJBQ1RfMV8zXCIsXG4gICAgXCJGUkFDVF8yXzNcIixcbiAgICBcIkZSQUNUXzFfNFwiLFxuICAgIFwiRlJBQ1RfM180XCIsXG4gICAgXCJGUkFDVF8xXzVcIixcbiAgICBcIkZSQUNUXzJfNVwiLFxuICAgIFwiRlJBQ1RfM181XCIsXG4gICAgXCJGUkFDVF80XzVcIixcbiAgICAvLyBBbmdsZXNcbiAgICBcIkFOR0xFXzI3MFwiLFxuICAgIFwiQU5HTEVfMTgwXCIsXG4gICAgXCJBTkdMRV85MFwiLFxuICAgIFwiQU5HTEVfNjBcIixcbiAgICBcIkFOR0xFXzQ1XCIsXG4gICAgXCJBTkdMRV8zMFwiLFxuICAgIFwiQU5HTEVfMTVcIixcbiAgICBcIkFOR0xFXzEwXCIsXG4gICAgLy8gQ29sb3JzXG4gICAgXCJDT0xPUl9NQVhcIixcbiAgICBcIkNPTE9SX01JTlwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8yXCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzRcIixcbiAgICBcIkNPTE9SX1NISUZUXzFfNVwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV8xMFwiLFxuICAgIFwiQ09MT1JfRklMTFwiLFxuICAgIFwiQ09MT1JfRU1QVFlcIixcbiAgICAvLyBTdHJva2VcbiAgICBcIlNUUk9LRV9TT0xJRFwiLFxuICAgIFwiU1RST0tFX0RBU0hFRFwiLFxuICAgIFwiU1RST0tFX0RPVFRFRFwiLFxuICAgIFwiU1RST0tFX1RISUNLX0FERFwiLFxuICAgIFwiU1RST0tFX1RISUNLX1NVQlwiLFxuICAgIC8vIE9wZXJhdGlvbnNcbiAgICBcIk9QX01VTFRcIixcbiAgICBcIk9QX0FERFwiLFxuICAgIFwiT1BfU1VCXCIsXG4gICAgLy8gQXJndW1lbnRzXG4gICAgXCJBUkdVTUVOVFwiLFxuICAgIFwiQ0FMTF9ESUFNT05EXCIsXG4gICAgXCJDQUxMX0lOVl9UUklBTkdMRVwiLFxuXG4gICAgLy8gKioqIEFjdGlvbnMgKioqXG4gICAgLy8gQ2FsbGVyc1xuICAgIFwiQ0FMTF9GXCIsXG4gICAgXCJDQUxMX0dcIixcbiAgICBcIkNBTExfSFwiLFxuICAgIC8vIENsb3NlIENhbGxlcnNcbiAgICBcIkNMT1NFX0NBTExfRlwiLFxuICAgIFwiQ0xPU0VfQ0FMTF9HXCIsXG4gICAgXCJDTE9TRV9DQUxMX0hcIixcbiAgICAvLyBTaGFwZXNcbiAgICBcIkRSQVdfQ0lSQ0xFXCIsXG4gICAgXCJEUkFXX1NRVUFSRVwiLFxuICAgIFwiRFJBV19UUklBTkdMRVwiLFxuICAgIC8vIExpbmVcbiAgICBcIkRSQVdfTElORVwiLFxuICAgIC8vIEFyY1xuICAgIFwiRFJBV19BUkNMSU5FX1JfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfNVwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfM180XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8yXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfMlwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV8zXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8xXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfNVwiLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBcIk1PVkVfRk9SV0FSRFwiLFxuICAgIFwiTU9WRV9CQUNLV0FSRFwiLFxuICAgIFwiTU9WRV9MRUZUXCIsXG4gICAgXCJNT1ZFX1JJR0hUXCIsXG4gICAgLy8gQ3Vyc29yIHJvdGF0aW9uc1xuICAgIFwiUk9UQVRFX0xFRlRcIixcbiAgICBcIlJPVEFURV9SSUdIVFwiLFxuICAgIC8vIFJlcGV0ZXRpdmUgYWN0aW9uc1xuICAgIFwiUkVWRVJTRVwiLFxuICAgIFwiUkVQTEFZXCIsXG4gICAgXCJSRVBMQVlfMlwiLFxuICAgIFwiUkVQTEFZXzNcIixcbiAgICBcIlJFUExBWV80XCIsXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEeW5hbWljQXJnc0tleSA9IHR5cGVvZiBEWU5BTUlDX0FSR1NbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIER5bmFtaWNBcmdzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgQ2FsbHNLZXkgPSB0eXBlb2YgQ0FMTFNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIENhbGxzTWFwPFR5cGU+ID0gUmVjb3JkPER5bmFtaWNBcmdzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3VmZml4ZXNLZXkgPSB0eXBlb2YgU1VGRklYRVNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFN1ZmZpeGVzTWFwPFR5cGU+ID0gUmVjb3JkPFN1ZmZpeGVzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgU3RhdmVzS2V5ID0gdHlwZW9mIFNUQVZFU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgU3RhdmVzTWFwPFR5cGU+ID0gUmVjb3JkPFN0YXZlc0tleSwgVHlwZT47XG5cbmV4cG9ydCB0eXBlIFRva2Vuc0tleSA9IHR5cGVvZiBUT0tFTlNbbnVtYmVyXTtcbmV4cG9ydCB0eXBlIFRva2Vuc01hcDxUeXBlPiA9IFJlY29yZDxUb2tlbnNLZXksIFR5cGU+OyIsImltcG9ydCB7IFRva2VuLCBUT0tFTlMsIEFjdGlvbkNiLCBWYWx1ZUNiIH0gZnJvbSBcIkAvY29yZS90b2tlbnNcIjtcbmltcG9ydCB7IEFjdGlvbk5vZGUsIFZhbHVlTm9kZSB9IGZyb20gXCJAL2NvcmUvYXN0L2Jhc2VcIjtcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vuczogc3RyaW5nW10pOiBUb2tlbltdIHtcbiAgICByZXR1cm4gcmF3VG9rZW5zLm1hcChyYXcgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IFRPS0VOU1tyYXddO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBgUGFyc2luZyBlcnJvcjogJHtyYXd9IGlzIG5vdCB1bmRlZmluZWQgYXMgdG9rZW4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfSk7XG59XG5cbmNsYXNzIEFjdGlvblRtcCB7XG4gICAgcHVibGljIGFjdGlvbnM6IEFjdGlvbk5vZGVbXTtcbiAgICBwcml2YXRlIHZhbHVlczogVmFsdWVOb2RlW107XG4gICAgcHJpdmF0ZSB0b2tlbjogVG9rZW4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRBY3Rpb25Ub2tlbih0b2tlbjogVG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldEFjdGlvblRva2VuKCk6IFRva2VuIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIGdldFZhbHVlc0xlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlzQWN0aW9uU2V0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbiAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3Rpb25TZXQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnRva2VuLmZhY3RvcnkgYXMgQWN0aW9uQ2I7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZhY3RvcnkodGhpcy52YWx1ZXMpO1xuICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnRva2VuID0gbnVsbDtcbiAgICB9XG5cbiAgICBpbnNlcnRWYWx1ZSh2YWx1ZTogVmFsdWVOb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIGdldEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lRnVuYyhuYW1lOiBzdHJpbmcsIHRva2VuczogVG9rZW5bXSk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgY29uc3QgdG1wID0gbmV3IEFjdGlvblRtcCgpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRtcC5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICBwYXJzZVZhbHVlKHRva2VuLCB0bXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VBY3Rpb24odG9rZW4sIHRtcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRtcC5wdXNoQWN0aW9uKCk7IC8vIHB1c2ggbGFzdCB0b2tlbi5cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24obmFtZSwgdG1wLmdldEFjdGlvbnMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmVWYWx1ZSh0b2tlbnM6IFRva2VuW10pOiBWYWx1ZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAodG9rZW4gPT4ge1xuICAgICAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gYWN0aW9ucyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5pc0R5bmFtaWMpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogTm8gZHluYW1pYyBlbGVtZW50cyBhcmUgYWxsb3dlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQWN0aW9uKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAoIXRva2VuLmlzQWN0aW9uKSB7XG4gICAgICAgIHRocm93IFwiUGFyc2luZyBlcnJvcjogdG9rZW4gaXMgbm90IGFuIGFjdGlvblwiO1xuICAgIH1cbiAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKHRva2VuOiBUb2tlbiwgdG1wOiBBY3Rpb25UbXApIHtcbiAgICBpZiAodG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdG1wLnB1c2hBY3Rpb24oKTtcbiAgICAgICAgdG1wLnNldEFjdGlvblRva2VuKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gdG9rZW4uZmFjdG9yeSBhcyBWYWx1ZUNiO1xuICAgICAgICB0bXAuaW5zZXJ0VmFsdWUoZmFjdG9yeSgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNNYXAsIFN1ZmZpeGVzTWFwLCBTdGF2ZXNNYXAgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL2NvcmUvc3RhdmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVN0YXZlcyhzdGF2ZXM6IFN0YXZlW10pOiBbc3RyaW5nLCBzdHJpbmddW10ge1xuICAgIHJldHVybiBzdGF2ZXMubWFwKHN0YXZlID0+IFtlbmNvZGVTdGF2ZU5hbWUoc3RhdmUpLCBlbmNvZGVUb2tlbnMoc3RhdmUudG9rZW5zKV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU3RhdmVOYW1lKHN0YXZlOiBTdGF2ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbmFtZSA9IFNUQVZFX1RPX1NIT1JUQ1VUW3N0YXZlLm5hbWVdIHx8IFwiXCI7XG4gICAgY29uc3Qgc3VmZml4ID0gU1VGRklYX1RPX1NIT1JUQ1VUW3N0YXZlLnN1ZmZpeF0gfHwgXCJcIjtcbiAgICByZXR1cm4gYC4ke25hbWV9JHtzdWZmaXh9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRva2Vucyh0b2tlbnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9rZW5zXG4gICAgICAgIC5tYXAodG9rZW4gPT4gVE9LRU5fVE9fU0hPUlRDVVRbdG9rZW5dIHx8IFwiXCIpXG4gICAgICAgIC5qb2luKFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RhdmVzKGNvZGU6IEl0ZXJhYmxlSXRlcmF0b3I8W3N0cmluZywgc3RyaW5nXT4pOiBTdGF2ZVtdIHtcbiAgICBjb25zdCBzdGF2ZXM6IFN0YXZlW10gPSBbXTtcblxuICAgIGZvcihjb25zdCBbY29kZWROYW1lLCBjb2RlZFRva2Vuc10gb2YgY29kZSkge1xuICAgICAgICBjb25zdCByZWFsTmFtZSA9IGRlY29kZVN0YXZlTmFtZShjb2RlZE5hbWUpO1xuICAgICAgICBpZiAocmVhbE5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXhdID0gcmVhbE5hbWU7XG4gICAgICAgIGxldCBzdGF2ZTogU3RhdmUgPSB7bmFtZSwgdG9rZW5zOiBkZWNvZGVUb2tlbnMoY29kZWRUb2tlbnMpfTtcbiAgICAgICAgaWYgKHN1ZmZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdmUuc3VmZml4ICA9IHN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICBzdGF2ZXMucHVzaChzdGF2ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXZlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0YXZlTmFtZShjb2RlOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmcgfCBudWxsXSB8IG51bGwge1xuICAgIGlmIChjb2RlLmxlbmd0aCA+IDMgJiYgY29kZS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2RlWzBdICE9PSBcIi5cIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gU1RBVkVfRlJPTV9TSE9SVENVVFtjb2RlWzFdXTtcbiAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2RlLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIHJldHVybiBbbmFtZSwgbnVsbF07XG4gICAgfVxuXG4gICAgY29uc3Qgc3VmZml4ID0gU1VGRklYX0ZST01fU0hPUlRDVVRbY29kZVsyXV07XG4gICAgaWYgKHN1ZmZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBbbmFtZSwgc3VmZml4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVRva2Vucyhjb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2RlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IHRva2VuQ29kZSA9IGNvZGUuc3Vic3RyaW5nKGksIGkgKyAyKTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBUT0tFTl9GUk9NX1NIT1JUQ1VUW3Rva2VuQ29kZV07XG4gICAgICAgIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRva2Vucztcbn1cblxuY29uc3QgU1RBVkVfVE9fU0hPUlRDVVQ6IFN0YXZlc01hcDxzdHJpbmc+ID0ge1xuICAgIEY6IFwiRlwiLFxuICAgIEc6IFwiR1wiLFxuICAgIEg6IFwiSFwiLFxuICAgIERJQU1PTkQ6IFwiRFwiLFxuICAgIElOVl9UUklBTkdMRTogXCJJXCIsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBTVUZGSVhfVE9fU0hPUlRDVVQ6IFN1ZmZpeGVzTWFwPHN0cmluZz4gPSB7XG4gICAgRU5EOiBcIjBcIixcbiAgICBFVkVOOiBcIjFcIixcbiAgICBPREQ6IFwiMlwiLFxuICAgIEdFMzogXCIzXCIsXG4gICAgR0U1OiBcIjRcIixcbiAgICBHRTc6IFwiNVwiLFxufSBhcyBjb25zdDtcblxuY29uc3QgVE9LRU5fVE9fU0hPUlRDVVQ6IFRva2Vuc01hcDxzdHJpbmc+ID0ge1xuICAgIC8vICoqKiBWYWx1ZXMgKioqXG4gICAgLy8gQ291bnRzXG4gICAgQ09VTlRfMTogXCJDMFwiLFxuICAgIENPVU5UXzI6IFwiQzFcIixcbiAgICBDT1VOVF8zOiBcIkMyXCIsXG4gICAgQ09VTlRfNTogXCJDM1wiLFxuICAgIENPVU5UXzc6IFwiQzRcIixcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgQ09VTlRfTUlOVVM6IFwiQzVcIixcbiAgICBDT1VOVF9HT0xEOiBcIkM2XCIsXG4gICAgQ09VTlRfU0lMVkVSOiBcIkM3XCIsXG4gICAgQ09VTlRfQlJPTlpFOiBcIkM4XCIsXG4gICAgQ09VTlRfUExBU1RJQzogXCJDOVwiLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogXCJGMFwiLFxuICAgIEZSQUNUXzFfMzogXCJGMVwiLFxuICAgIEZSQUNUXzJfMzogXCJGMlwiLFxuICAgIEZSQUNUXzFfNDogXCJGM1wiLFxuICAgIEZSQUNUXzNfNDogXCJGNFwiLFxuICAgIEZSQUNUXzFfNTogXCJGNVwiLFxuICAgIEZSQUNUXzJfNTogXCJGNlwiLFxuICAgIEZSQUNUXzNfNTogXCJGN1wiLFxuICAgIEZSQUNUXzRfNTogXCJGOFwiLFxuICAgIC8vIEFuZ2xlc1xuICAgIEFOR0xFXzI3MDogXCJBMFwiLFxuICAgIEFOR0xFXzE4MDogXCJBMVwiLFxuICAgIEFOR0xFXzkwOiBcIkEyXCIsXG4gICAgQU5HTEVfNjA6IFwiQTNcIixcbiAgICBBTkdMRV80NTogXCJBNFwiLFxuICAgIEFOR0xFXzMwOiBcIkE1XCIsXG4gICAgQU5HTEVfMTU6IFwiQTZcIixcbiAgICBBTkdMRV8xMDogXCJBN1wiLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogXCJWMFwiLFxuICAgIENPTE9SX01JTjogXCJWMVwiLFxuICAgIENPTE9SX1NISUZUXzFfMjogXCJWMlwiLFxuICAgIENPTE9SX1NISUZUXzFfNDogXCJWM1wiLFxuICAgIENPTE9SX1NISUZUXzFfNTogXCJWNFwiLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IFwiVjVcIixcbiAgICBDT0xPUl9GSUxMOiBcIlY2XCIsXG4gICAgQ09MT1JfRU1QVFk6IFwiVjdcIixcbiAgICAvLyBTdHJva2VcbiAgICBTVFJPS0VfU09MSUQ6IFwiUzBcIixcbiAgICBTVFJPS0VfREFTSEVEOiBcIlMxXCIsXG4gICAgU1RST0tFX0RPVFRFRDogXCJTMlwiLFxuICAgIFNUUk9LRV9USElDS19BREQ6IFwiUzNcIixcbiAgICBTVFJPS0VfVEhJQ0tfU1VCOiBcIlM0XCIsXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIE9QX01VTFQ6IFwiTzBcIixcbiAgICBPUF9BREQ6IFwiTzFcIixcbiAgICBPUF9TVUI6IFwiTzJcIixcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogXCJaMFwiLFxuICAgIENBTExfRElBTU9ORDogXCJaMVwiLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBcIloyXCIsXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgQ0FMTF9GOiBcIlgwXCIsXG4gICAgQ0FMTF9HOiBcIlgxXCIsXG4gICAgQ0FMTF9IOiBcIlgyXCIsXG4gICAgLy8gQ2xvc2UgQ2FsbGVyc1xuICAgIENMT1NFX0NBTExfRjogXCJZMFwiLFxuICAgIENMT1NFX0NBTExfRzogXCJZMVwiLFxuICAgIENMT1NFX0NBTExfSDogXCJZMlwiLFxuICAgIC8vIFNoYXBlc1xuICAgIERSQVdfQ0lSQ0xFOiBcIkQwXCIsXG4gICAgRFJBV19TUVVBUkU6IFwiRDFcIixcbiAgICBEUkFXX1RSSUFOR0xFOiBcIkQyXCIsXG4gICAgLy8gTGluZVxuICAgIERSQVdfTElORTogXCJMMFwiLFxuICAgIC8vIEFyY1xuICAgIERSQVdfQVJDTElORV9SXzNfNDogXCJMMVwiLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogXCJMMlwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfMjogXCJMM1wiLFxuICAgIERSQVdfQVJDTElORV9SXzFfMzogXCJMNFwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogXCJMNVwiLFxuICAgIERSQVdfQVJDTElORV9SXzFfNTogXCJMNlwiLFxuICAgIERSQVdfQVJDTElORV9MXzNfNDogXCJMN1wiLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogXCJMOFwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfMjogXCJMOVwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfMzogXCJMQVwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogXCJMQlwiLFxuICAgIERSQVdfQVJDTElORV9MXzFfNTogXCJMQ1wiLFxuICAgIC8vIEN1cnNvciB0cmFuc2xhdGlvbnNcbiAgICBNT1ZFX0ZPUldBUkQ6IFwiTTBcIixcbiAgICBNT1ZFX0JBQ0tXQVJEOiBcIk0xXCIsXG4gICAgTU9WRV9MRUZUOiBcIk0yXCIsXG4gICAgTU9WRV9SSUdIVDogXCJNM1wiLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogXCJSMFwiLFxuICAgIFJPVEFURV9SSUdIVDogXCJSMVwiLFxuXG4gICAgLy8gUmVwZXRldGl2ZSBhY3Rpb25zXG4gICAgUkVWRVJTRTogXCJRMFwiLFxuICAgIFJFUExBWTogXCJRMVwiLFxuICAgIFJFUExBWV8yOiBcIlEyXCIsXG4gICAgUkVQTEFZXzM6IFwiUTNcIixcbiAgICBSRVBMQVlfNDogXCJRNFwiLFxufSBhcyBjb25zdDtcblxuZnVuY3Rpb24gaW52ZXJzZTxUeXBlIGV4dGVuZHMgc3RyaW5nPihvYmo6IFJlY29yZDxUeXBlLCBzdHJpbmc+KTogUmVjb3JkPHN0cmluZywgVHlwZT4ge1xuICAgIGNvbnN0IGludl9lbnRyaWVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtrZXksIHZhbF0pID0+IFt2YWwsIGtleV0pO1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoaW52X2VudHJpZXMpO1xufVxuXG5jb25zdCBTVEFWRV9GUk9NX1NIT1JUQ1VUID0gaW52ZXJzZShTVEFWRV9UT19TSE9SVENVVCk7XG5jb25zdCBUT0tFTl9GUk9NX1NIT1JUQ1VUID0gaW52ZXJzZShUT0tFTl9UT19TSE9SVENVVCk7XG5jb25zdCBTVUZGSVhfRlJPTV9TSE9SVENVVCA9IGludmVyc2UoU1VGRklYX1RPX1NIT1JUQ1VUKTsiLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgQ29udGV4dFN0ZXBwZXIsIGNyZWF0ZUluaXRTdGVwcGVyIH0gZnJvbSBcIi4vY29udGV4dFN0ZXBwZXJcIjtcbmltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiLi9jdXJzb3JcIjtcbmltcG9ydCB7IEZ1bmN0aW9uc0JhZyB9IGZyb20gXCIuL2Z1bmN0aW9uc0JhZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBoYWx0OiBib29sZWFuLFxuICAgIHN0YXZlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrU3RlcCB7XG4gICAgI3N0YWNrOiBDb250ZXh0U3RlcHBlcltdO1xuICAgICNiYWc6IEZ1bmN0aW9uc0JhZztcbiAgICByZWFkb25seSBjdXJzb3I6IElDdXJzb3I7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBDb250ZXh0LCBiYWc6IEZ1bmN0aW9uc0JhZykge1xuICAgICAgICBjb25zdCBmdW5jID0gYmFnLmZpbmRGdW5jdGlvbihcIlNUQVJUXCIpIHx8IGJhZy5maW5kRnVuY3Rpb24oXCJGXCIpO1xuICAgICAgICBpZiAoZnVuYyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgXCJTdGFydCBmdW5jdGlvbiBub3QgZm91bmRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNzdGFjayA9IFtjcmVhdGVJbml0U3RlcHBlcihjb250ZXh0LCBmdW5jKV07XG4gICAgICAgIHRoaXMuI2JhZyA9IGJhZztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBjb250ZXh0LmN1cnNvcjtcbiAgICB9XG5cbiAgICBzdGVwKCk6IFN0YXRlIHtcbiAgICAgICAgaWYgKHRoaXMuI3N0YWNrLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhbHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdmU6ICc/JyxcbiAgICAgICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3RWxlbWVudDogQ29udGV4dFN0ZXBwZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc3RlcHBlciA9IHRoaXMuZ2V0VG9wRWxlbWVudCgpO1xuICAgICAgICBjb25zdCB7IGluZGV4LCBzdGF2ZSB9ID0gc3RlcHBlcjtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RlcHBlci5leGVjKCk7XG4gICAgICAgIGNvbnN0IHN0aWxsQ29udGludWUgPSBzdGVwcGVyLm1vdmUoe1xuICAgICAgICAgICAgYmFnOiB0aGlzLiNiYWcsXG4gICAgICAgICAgICBwdXNoOiAoZWxlbWVudDogQ29udGV4dFN0ZXBwZXIpID0+IHsgbmV3RWxlbWVudCA9IGVsZW1lbnQ7IH0sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc3RpbGxDb250aW51ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dFN0ZXBwZXIgPSB0aGlzLiNzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGNvbnRleHRTdGVwcGVyLm9uRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4jc3RhY2sucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYWx0OiB0aGlzLiNzdGFjay5sZW5ndGggPT0gMCxcbiAgICAgICAgICAgIHN0YXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRUb3BFbGVtZW50KCk6IENvbnRleHRTdGVwcGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3N0YWNrW3RoaXMuI3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEZpZ3VyZSwgQ2lyY2xlLCBBcmMsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIExpbmUsIFN0eWxlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5pbXBvcnQgeyBQb2x5Z29uLCBMaW5lQ3VydmUsIEFyY0N1cnZlIH0gZnJvbSBcIkAvY29yZS9maWd1cmVzXCI7XG5cbmNvbnN0IE5BTUVTUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN2Zyhkb2N1bWVudCwgY3Vyc29yOiBJQ3Vyc29yKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwic3ZnXCIpO1xuICAgIGxldCBbbWluX3gsIG1pbl95XSA9IGN1cnNvci5ib3gubWluO1xuICAgIGxldCBbbWF4X3gsIG1heF95XSA9IGN1cnNvci5ib3gubWF4O1xuICAgIG1pbl94IC09IDEwO1xuICAgIG1pbl95IC09IDEwO1xuICAgIG1heF94ICs9IDEwO1xuICAgIG1heF95ICs9IDEwO1xuICAgIGNvbnN0IHdpZHRoID0gbWF4X3ggLSBtaW5feDtcbiAgICBjb25zdCBoZWlnaHQgPSBtYXhfeSAtIG1pbl95O1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAke21pbl94fSAke21pbl95fSAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgICBjdXJzb3IuZmlndXJlcy5mb3JFYWNoKGZpZ3VyZSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0b1N2Zyhkb2N1bWVudCwgZmlndXJlKTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdmc7XG59XG5cbmNvbnN0IFNRUlQzSDIgPSBNYXRoLnNxcnQoMykgLyAyO1xuY29uc3QgSDIgPSAxIC8gMjtcblxuZnVuY3Rpb24gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZTogRmlndXJlKSB7XG4gICAgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIExpbmUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwibGluZVwiKTtcbiAgICAgICAgY29uc3QgW3gxLCB5MV0gPSBmaWd1cmUuZmlyc3RQb2ludDtcbiAgICAgICAgY29uc3QgW3gyLCB5Ml0gPSBmaWd1cmUuc2Vjb25kUG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDFcIiwgeDEpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkxXCIsIHkxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB4Mik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieTJcIiwgeTIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBmaWd1cmUuc3R5bGUuY29sb3IgfHwgXCJibGFja1wiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgZmlndXJlLnN0eWxlLnN0cm9rZSAhPT0gdW5kZWZpbmVkID8gZmlndXJlLnN0eWxlLnN0cm9rZSA6IDEpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFBvbHlnb24pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBsZXQgcGF0aCA9IGBNICR7eH0gJHt5fWA7XG5cbiAgICAgICAgZmlndXJlLmN1cnZlcy5mb3JFYWNoKGN1cnZlID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIExpbmVDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkeCwgZHldID0gY3VydmUuZGVsdGE7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBgIGwgJHtkeH0gJHtkeX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJ2ZSBpbnN0YW5jZW9mIEFyY0N1cnZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgciA9IGN1cnZlLnJhZGl1cztcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gY3VydmUuc2hpZnQgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChjdXJ2ZS5zaGlmdCArIGN1cnZlLnJhdGlvKSAqIDIgKiBNYXRoLlBJO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gciAqIChNYXRoLmNvcyhlbmRBbmdsZSkgLSBNYXRoLmNvcyhzdGFydEFuZ2xlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZHkgPSByICogKE1hdGguc2luKGVuZEFuZ2xlKSAtIE1hdGguc2luKHN0YXJ0QW5nbGUpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGN1cnZlLnJhdGlvKSA8PSAwLjUgPyBcIjBcIiA6IFwiMVwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWcyID0gY3VydmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgICAgICAgICBwYXRoICs9IGAgYSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2R4fSAke2R5fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYCBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBDaXJjbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwiY2lyY2xlXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiclwiLCBmaWd1cmUucmFkaXVzKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIEFyYykge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IHIgPSBmaWd1cmUucmFkaXVzO1xuICAgICAgICBjb25zdCBzdGFydEFuZ2xlID0gZmlndXJlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gKGZpZ3VyZS5zaGlmdCArIGZpZ3VyZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHggKyByICogTWF0aC5jb3Moc3RhcnRBbmdsZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB5ICsgciAqIE1hdGguc2luKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeCA9IHggKyByICogTWF0aC5jb3MoZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBlbmRfeSA9IHkgKyByICogTWF0aC5zaW4oZW5kQW5nbGUpO1xuICAgICAgICBjb25zdCBmbGFnMSA9IE1hdGguYWJzKGZpZ3VyZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgY29uc3QgZmxhZzIgPSBmaWd1cmUucmF0aW8gPD0gMC4wID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3N0YXJ0X3h9ICR7c3RhcnRfeX1gO1xuICAgICAgICBwYXRoICs9IGAgQSAke3J9ICR7cn0gMCAke2ZsYWcxfSAke2ZsYWcyfSAke2VuZF94fSAke2VuZF95fWA7XG4gICAgICAgIGlmIChmaWd1cmUuY2xvc2UpIHtcbiAgICAgICAgICAgIHBhdGggKz0gYEwgJHt4fSAke3l9IFpgO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgUmVjdGFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFcgPSBmaWd1cmUud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBIID0gZmlndXJlLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICAgIHBhdGggKz0gYCBNICR7eCAtIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCAtIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4IC0gVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCArIEggKiBkeX0gJHt5IC0gSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gYCBMICR7eCArIFcgKiBkeCAtIEggKiBkeX0gJHt5ICsgSCAqIGR4ICsgVyAqIGR5fWA7XG4gICAgICAgIHBhdGggKz0gJyBaJztcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgVHJpYW5nbGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGZpZ3VyZS5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgUyA9IGZpZ3VyZS5zaXplO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggKyBTICogZHh9ICR7eSArIFMgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5ICsgU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBTUVJUM0gyICogUyAqIGR5IC0gSDIgKiBTICogZHh9ICR7eSAtIEgyICogUyAqIGR5IC0gU1FSVDNIMiAqIFMgKiBkeH1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldEJhc2ljQXR0cnMoc3R5bGU6IFN0eWxlLCBub2RlKSB7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHN0eWxlLmZpbGwgfHwgXCJibGFja1wiKTtcbiAgICBpZiAoc3R5bGUuc3Ryb2tlICE9PSB1bmRlZmluZWQgJiYgc3R5bGUuc3Ryb2tlID4gMCkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHlsZS5jb2xvciB8fCBcIm5vbmVcIik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGAke3N0eWxlLnN0cm9rZX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWYWx1ZU5vZGUsIEFjdGlvbk5vZGUgfSBmcm9tIFwiQC9jb3JlL2FzdC9iYXNlXCI7XG5pbXBvcnQgeyBNdWx0aXBsZXIsIEFuZ2xlLCBBcmd1bWVudCwgRHluYW1pY0FyZ3VtZW50IH0gZnJvbSBcIkAvY29yZS9hc3QvdmFsdWVzXCI7XG5pbXBvcnQgeyBTaGFwZSB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBUb2tlbnNNYXAgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiQC9jb3JlL2FzdC9jb2xvcnNcIjtcbmltcG9ydCAqIGFzIHN0cm9rZXMgZnJvbSBcIkAvY29yZS9hc3Qvc3Ryb2tlc1wiO1xuaW1wb3J0ICogYXMgb3BzIGZyb20gXCJAL2NvcmUvYXN0L29wc1wiO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25DYiA9ICh2YWx1ZXM6IFZhbHVlTm9kZVtdKSA9PiBBY3Rpb25Ob2RlO1xuZXhwb3J0IHR5cGUgVmFsdWVDYiA9ICgpID0+IFZhbHVlTm9kZTtcblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICBpc0FjdGlvbjogYm9vbGVhbjtcbiAgICBpc0R5bmFtaWM6IGJvb2xlYW47XG4gICAgZmFjdG9yeTogQWN0aW9uQ2IgfCBWYWx1ZUNiO1xuXG4gICAgY29uc3RydWN0b3IoeyBpc0FjdGlvbiwgaXNEeW5hbWljLCBmYWN0b3J5IH0pIHtcbiAgICAgICAgdGhpcy5pc0FjdGlvbiA9IGlzQWN0aW9uO1xuICAgICAgICB0aGlzLmlzRHluYW1pYyA9IGlzRHluYW1pYztcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbHVlKGZhY3Rvcnk6IFZhbHVlQ2IsIGlzRHluYW1pYyA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiBmYWxzZSwgaXNEeW5hbWljLCBmYWN0b3J5IH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oZmFjdG9yeTogQWN0aW9uQ2IpIHtcbiAgICByZXR1cm4gbmV3IFRva2VuKHsgaXNBY3Rpb246IHRydWUsIGlzRHluYW1pYzogdHJ1ZSwgZmFjdG9yeSB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRPS0VOUzogVG9rZW5zTWFwPFRva2VuPiA9IHtcbiAgICAvLyAqKiogVmFsdWVzICoqKlxuICAgIC8vIENvdW50c1xuICAgIENPVU5UXzE6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSkpLFxuICAgIENPVU5UXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMikpLFxuICAgIENPVU5UXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMykpLFxuICAgIENPVU5UXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNSkpLFxuICAgIENPVU5UXzc6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNykpLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBDT1VOVF9NSU5VUzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigtMSkpLFxuICAgIENPVU5UX0dPTEQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMS42MTgwMzM5ODkpKSxcbiAgICBDT1VOVF9TSUxWRVI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMi40MTQyMTM1NjIpKSxcbiAgICBDT1VOVF9CUk9OWkU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMy4zMDI3NzU2MzgpKSxcbiAgICBDT1VOVF9QTEFTVElDOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEuMzI0NzE3OTU3MikpLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIEZSQUNUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMikpLFxuICAgIEZSQUNUXzFfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gMykpLFxuICAgIEZSQUNUXzJfMzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gMykpLFxuICAgIEZSQUNUXzFfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNCkpLFxuICAgIEZSQUNUXzNfNDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNCkpLFxuICAgIEZSQUNUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxIC8gNSkpLFxuICAgIEZSQUNUXzJfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigyIC8gNSkpLFxuICAgIEZSQUNUXzNfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigzIC8gNSkpLFxuICAgIEZSQUNUXzRfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcig0IC8gNSkpLFxuICAgIC8vIEFuZ2xlc1xuICAgIEFOR0xFXzI3MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDI3MCkpLFxuICAgIEFOR0xFXzE4MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE4MCkpLFxuICAgIEFOR0xFXzkwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoOTApKSxcbiAgICBBTkdMRV82MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDYwKSksXG4gICAgQU5HTEVfNDU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg0NSkpLFxuICAgIEFOR0xFXzMwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMzApKSxcbiAgICBBTkdMRV8xNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDE1KSksXG4gICAgQU5HTEVfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxMCkpLFxuICAgIC8vIENvbG9yc1xuICAgIENPTE9SX01BWDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5NYXhDb2xvcigpKSxcbiAgICBDT0xPUl9NSU46IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWluQ29sb3IoKSksXG4gICAgQ09MT1JfU0hJRlRfMV8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDIpKSxcbiAgICBDT0xPUl9TSElGVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNCkpLFxuICAgIENPTE9SX1NISUZUXzFfNTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyA1KSksXG4gICAgQ09MT1JfU0hJRlRfMV8xMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAxMCkpLFxuICAgIENPTE9SX0ZJTEw6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuRmlsbENvbG9yKCkpLFxuICAgIENPTE9SX0VNUFRZOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLkVtcHR5Q29sb3IoKSksXG4gICAgLy8gU3Ryb2tlXG4gICAgU1RST0tFX1NPTElEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcInNvbGlkXCIpKSxcbiAgICBTVFJPS0VfREFTSEVEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TZXRTdHJva2VTdHlsZShcImRhc2hlZFwiKSksXG4gICAgU1RST0tFX0RPVFRFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkb3R0ZWRcIikpLFxuICAgIFNUUk9LRV9USElDS19BREQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKCswLjI1KSksXG4gICAgU1RST0tFX1RISUNLX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2hpZnRTdHJva2VUaGlja25lc3MoLTAuMjUpKSxcbiAgICAvLyBPcGVyYXRpb25zXG4gICAgT1BfTVVMVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5NdWx0T3AoKSksXG4gICAgT1BfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgb3BzLkFkZE9wKCkpLFxuICAgIE9QX1NVQjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5TdWJPcCgpKSxcbiAgICAvLyBBcmd1bWVudHNcbiAgICBBUkdVTUVOVDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFyZ3VtZW50KCkpLFxuICAgIENBTExfRElBTU9ORDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIkRJQU1PTkRcIiksIHRydWUpLFxuICAgIENBTExfSU5WX1RSSUFOR0xFOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgRHluYW1pY0FyZ3VtZW50KFwiSU5WX1RSSUFOR0xFXCIpLCB0cnVlKSxcblxuICAgIC8vICoqKiBBY3Rpb25zICoqKlxuICAgIC8vIENhbGxlcnNcbiAgICBDQUxMX0Y6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJGXCIsIHYpKSxcbiAgICBDQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJHXCIsIHYpKSxcbiAgICBDQUxMX0g6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNhbGwoXCJIXCIsIHYpKSxcbiAgICAvLyBDbG9zZSBDYWxsZXJzXG4gICAgQ0xPU0VfQ0FMTF9GOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DbG9zZUNhbGwoXCJGXCIsIHYpKSxcbiAgICBDTE9TRV9DQUxMX0c6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNsb3NlQ2FsbChcIkdcIiwgdikpLFxuICAgIENMT1NFX0NBTExfSDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2xvc2VDYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gU2hhcGVzXG4gICAgRFJBV19DSVJDTEU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuQ2lyY2xlKSksXG4gICAgRFJBV19TUVVBUkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuU3F1YXJlKSksXG4gICAgRFJBV19UUklBTkdMRTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0ZpZ3VyZSh2LCBTaGFwZS5UcmlhbmdsZSkpLFxuICAgIC8vIExpbmVcbiAgICBEUkFXX0xJTkU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdMaW5lKHYpKSxcbiAgICAvLyBBcmNcbiAgICBEUkFXX0FSQ0xJTkVfUl8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCszIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDUsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8zXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0zIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzJfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTIgLyAzLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDIsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA0LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV81OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDUsIHYpKSxcbiAgICAvLyBDdXJzb3IgdHJhbnNsYXRpb25zXG4gICAgTU9WRV9GT1JXQVJEOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlRm9yd2FyZCh2KSksXG4gICAgTU9WRV9CQUNLV0FSRDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUJhY2t3YXJkKHYpKSxcbiAgICBNT1ZFX0xFRlQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVMZWZ0KHYpKSxcbiAgICBNT1ZFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlUmlnaHQodikpLFxuICAgIC8vIEN1cnNvciByb3RhdGlvbnNcbiAgICBST1RBVEVfTEVGVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlTGVmdCh2KSksXG4gICAgUk9UQVRFX1JJR0hUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Sb3RhdGVSaWdodCh2KSksXG5cbiAgICAvLyBSZXBldGV0aXZlIGFjdGlvbnNcbiAgICBSRVZFUlNFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5SZXZlcnNlKHYpKSxcbiAgICBSRVBMQVk6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2KSksXG4gICAgUkVQTEFZXzI6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAyKSksXG4gICAgUkVQTEFZXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCAzKSksXG4gICAgUkVQTEFZXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJlcGxheSh2LCA0KSksXG59O1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTl9VUkwgPSBgJHtwcm9jZXNzLmVudi5BU1NFVF9QQVRIfWljb25zL2A7XG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IFN0YWNrU3RlcCB9IGZyb20gXCJAL2NvcmUvc3RlcFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBkZWJ1ZzogYm9vbGVhbixcbiAgICBzdGF2ZTogc3RyaW5nLFxuICAgIGFjdGlvbkluZGV4OiBudW1iZXIsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblN0YXRlOiAocHJldmlvdXNTdGF0ZTogU3RhdGUgfCBudWxsLCBzdGF0ZTogU3RhdGUpID0+IHZvaWQsXG4gICAgcmVuZGVyQ2I6IChjdXJzb3I6IElDdXJzb3IpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbnRyb2xsZXIge1xuICAgICNzdGFjazogU3RhY2tTdGVwIHwgbnVsbDtcbiAgICAjaW50ZXJ2YWw6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGw7XG4gICAgI3ByZXZpb3VzU3RhdGU6IFN0YXRlIHwgbnVsbDtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICB0aGlzLiNzdGFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4jcHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBpbml0KHN0YWNrOiBTdGFja1N0ZXApIHtcbiAgICAgICAgdGhpcy4jc3RhY2sgPSBzdGFjaztcbiAgICAgICAgdGhpcy5zdGVwKCk7XG4gICAgfVxuXG4gICAgc3RlcCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBoYWx0LCBzdGF2ZSwgaW5kZXggfSA9IHRoaXMuI3N0YWNrLnN0ZXAoKTtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzLnJlbmRlckNiKHRoaXMuI3N0YWNrLmN1cnNvcik7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIGRlYnVnOiB0cnVlLFxuICAgICAgICAgICAgc3RhdmU6IHN0YXZlLFxuICAgICAgICAgICAgYWN0aW9uSW5kZXg6IGluZGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICFoYWx0O1xuICAgIH1cblxuICAgIHBsYXkocGVyaW9kOiBudW1iZXIgPSAxMDApIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0ZXAoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBwZXJpb2QpO1xuICAgIH1cblxuICAgIGV4aXQoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLiN1cGRhdGVTdGF0ZSh7IGRlYnVnOiBmYWxzZSwgc3RhdmU6ICc/JywgYWN0aW9uSW5kZXg6IDAgfSk7XG4gICAgICAgIHRoaXMuI3N0YWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy4jcHJldmlvdXNTdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuI2ludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLiNpbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuI2ludGVydmFsID0gbnVsbDtcbiAgICB9XG5cbiAgICAjdXBkYXRlU3RhdGUoc3RhdGU6IFN0YXRlKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSB0aGlzLiNwcmV2aW91c1N0YXRlO1xuICAgICAgICB0aGlzLiNwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblN0YXRlKHByZXZpb3VzU3RhdGUsIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpc0RlYnVnKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy4jc3RhY2sgIT09IG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IERlYnVnQ29udHJvbGxlciwgU3RhdGUgfSBmcm9tIFwiLi9kZWJ1Z1wiO1xuXG5pbXBvcnQgeyBDb2RlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb2RlXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYXJWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2Z1bmN0aW9uc0JhclwiO1xuaW1wb3J0IHsgVG9rZW5zQ2F0ZWdvcnlWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2NhdGVnb3J5VG9rZW5cIjtcbmltcG9ydCB7IEltYWdlVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9pbWFnZVwiO1xuaW1wb3J0IHsgQ29kZUJhclZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY29kZUJhclwiO1xuaW1wb3J0IHsgQ2hvb3NlVG9rZW5EaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2Nob29zZURpYWxvZ1wiO1xuaW1wb3J0IHsgUHJvamVjdExpc3REaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL3Byb2plY3RMaXN0RGlhbG9nXCI7XG5pbXBvcnQgeyBTYXZlRGlhbG9nVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9zYXZlRGlhbG9nXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVtcHR5UHJvamVjdCwgUHJvamVjdCwgU3RhdmUgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBBQ1RJT05fVE9LRU5TLCBWQUxVRV9UT0tFTlMgfSBmcm9tIFwiQC93ZWIvdG9rZW5zTWVudVwiO1xuXG5pbXBvcnQgeyBleGVjLCBzZXR1cEV4ZWMgfSBmcm9tIFwiQC9jb3JlL2V4ZWNcIjtcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBTdGFja1N0ZXAgfSBmcm9tIFwiQC9jb3JlL3N0ZXBcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIkAvd2ViL2RhdGFiYXNlXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2U7XG4gICAgcHJpdmF0ZSBpbWFnZVZpZXc6IEltYWdlVmlldztcbiAgICBwcml2YXRlIGNvZGVWaWV3OiBDb2RlVmlldztcbiAgICBwcml2YXRlIGZ1bmN0aW9uc0JhclZpZXc6IEZ1bmN0aW9uc0JhclZpZXc7XG4gICAgcHJpdmF0ZSBhY3Rpb25zQ2F0ZWdvcnlWaWV3OiBUb2tlbnNDYXRlZ29yeVZpZXc7XG4gICAgcHJpdmF0ZSB2YWx1ZXNDYXRlZ29yeVZpZXc6IFRva2Vuc0NhdGVnb3J5VmlldztcbiAgICBwcml2YXRlIGNvZGVCYXJWaWV3OiBDb2RlQmFyVmlldztcbiAgICBwcml2YXRlIGRlYnVnOiBEZWJ1Z0NvbnRyb2xsZXI7XG4gICAgcHJpdmF0ZSBjaG9vc2VEaWFsb2dWaWV3OiBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcgfCBudWxsO1xuICAgIHByaXZhdGUgcHJvamVjdExpc3REaWFsb2dWaWV3OiBQcm9qZWN0TGlzdERpYWxvZ1ZpZXcgfCBudWxsO1xuICAgIHByaXZhdGUgc2F2ZURpYWxvZ1ZpZXc6IFNhdmVEaWFsb2dWaWV3IHwgbnVsbDtcbiAgICBwcml2YXRlIHByb2plY3Q6IFByb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhYmFzZTogRGF0YWJhc2UsIHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGF0YWJhc2U7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgRGVidWdDb250cm9sbGVyKHtcbiAgICAgICAgICAgIHJlbmRlckNiOiAoY3Vyc29yOiBDdXJzb3IpID0+IHRoaXMuaW1hZ2VWaWV3LnJlbmRlcihjdXJzb3IpLFxuICAgICAgICAgICAgb25TdGF0ZTogdGhpcy5vbkRlYnVnU3RhdGUuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW1hZ2VWaWV3ID0gbmV3IEltYWdlVmlldyh0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1pbWFnZVwiKSk7XG4gICAgICAgIHRoaXMuY29kZVZpZXcgPSBuZXcgQ29kZVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3Qtc3RhdmVzXCIpLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb25Ecm9wOiB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIG9uTW92ZTogdGhpcy5vbk1vdmUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbkRyYWdUaW1lb3V0OiB0aGlzLm9uRHJhZ1RpbWVvdXQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBjYW5EcmFnOiAoKSA9PiAhdGhpcy5kZWJ1Zy5pc0RlYnVnKCksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZ1bmN0aW9uc0JhclZpZXcgPSBuZXcgRnVuY3Rpb25zQmFyVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcIi5mcmFjdC1mdW5jdGlvbnMtbGlzdFwiKSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlDYWxsYmFja3MgPSB7XG4gICAgICAgICAgICBvbkRyb3A6IHRoaXMub25Ecm9wRnJvbUNhdGVnb3J5LmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbk1vdmU6IHRoaXMub25Nb3ZlRnJvbUNhdGVnb3J5LmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbkRyYWdUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgY2FuRHJhZzogKCkgPT4gIXRoaXMuZGVidWcuaXNEZWJ1ZygpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9uc0NhdGVnb3J5VmlldyA9IG5ldyBUb2tlbnNDYXRlZ29yeVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb24tdG9rZW5zXCIpLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogQUNUSU9OX1RPS0VOUyxcbiAgICAgICAgICAgIGNhbGxiYWNrczogY2F0ZWdvcnlDYWxsYmFja3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhbHVlc0NhdGVnb3J5VmlldyA9IG5ldyBUb2tlbnNDYXRlZ29yeVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWx1ZS10b2tlbnNcIiksXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBWQUxVRV9UT0tFTlMsXG4gICAgICAgICAgICBjYWxsYmFja3M6IGNhdGVnb3J5Q2FsbGJhY2tzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2RlQmFyVmlldyA9IG5ldyBDb2RlQmFyVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUtYmFyXCIpLCB7XG4gICAgICAgICAgICBvblVwZGF0ZTogKGl0ZXJhdGlvbnMsIHN0eWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0Lml0ZXJhdGlvbnMgPSBpdGVyYXRpb25zO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdC5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVRlbXBQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkRlYnVnU3RhcnQ6IHRoaXMuc2NyYXBlQW5kRGVidWcuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uTG9hZDogdGhpcy5vcGVuUHJvamVjdExpc3QuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uU2F2ZTogdGhpcy5vcGVuU2F2ZURpYWxvZy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25OZXc6ICgpID0+IHRoaXMubG9hZFByb2plY3QoY3JlYXRlRW1wdHlQcm9qZWN0KCkpLFxuICAgICAgICAgICAgb25EZWJ1Z1N0ZXA6ICgpID0+IHRoaXMuZGVidWcuc3RlcCgpLFxuICAgICAgICAgICAgb25EZWJ1Z1BsYXk6ICgpID0+IHRoaXMuZGVidWcucGxheSgpLFxuICAgICAgICAgICAgb25EZWJ1Z1N0b3A6ICgpID0+IHRoaXMuZGVidWcuc3RvcCgpLFxuICAgICAgICAgICAgb25EZWJ1Z0V4aXQ6ICgpID0+IHRoaXMuZGVidWcuZXhpdCgpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaG9vc2VEaWFsb2dWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdERpYWxvZ1ZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLnNhdmVEaWFsb2dWaWV3ID0gbnVsbDtcbiAgICB9XG4gICAgXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY29kZVZpZXcucmVuZGVyKHRoaXMucHJvamVjdC5zdGF2ZXMpO1xuICAgICAgICB0aGlzLmZ1bmN0aW9uc0JhclZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuYWN0aW9uc0NhdGVnb3J5Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZXNDYXRlZ29yeVZpZXcucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuY29kZUJhclZpZXcucmVuZGVyKHRoaXMucHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgfVxuXG4gICAgc2NyYXBlQW5kUnVuKCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zy5pc0RlYnVnKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFjayA9IHRoaXMuc2NyYXBlKCk7XG5cbiAgICAgICAgaWYgKHN0YWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWMoc3RhY2spO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgYmFja2dyb3VuZENvbG9yIH0gPSB0aGlzLnByb2plY3Quc3R5bGU7XG4gICAgICAgIHRoaXMuaW1hZ2VWaWV3LnJlbmRlcihzdGFjay5jdXJzb3IsIGJhY2tncm91bmRDb2xvcik7XG4gICAgfVxuXG4gICAgc2NyYXBlQW5kU2F2ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0LnN0YXZlcyA9IHRoaXMuY29kZVZpZXcuc2NyYXBlQ29kZSgpO1xuICAgICAgICB0aGlzLnNhdmVUZW1wUHJvamVjdCgpO1xuICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgIH1cblxuICAgIHNhdmVUZW1wUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgY2xvbmVQcm9qZWN0ID0gey4uLnRoaXMucHJvamVjdH07XG4gICAgICAgIGNsb25lUHJvamVjdC5pZCA9IFwiX190ZW1wX19cIjtcbiAgICAgICAgdGhpcy5kYXRhYmFzZS51cGRhdGUoY2xvbmVQcm9qZWN0LCBwcm9qZWN0ID0+IHt9KTsgXG4gICAgfVxuXG4gICAgc2NyYXBlQW5kRGVidWcoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnLmlzRGVidWcoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zY3JhcGUoKTtcbiAgICAgICAgaWYgKHN0YWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2RlQmFyVmlldy5zZXREZWJ1Z01vZGUoKTtcbiAgICAgICAgdGhpcy5kZWJ1Zy5pbml0KHN0YWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5Qcm9qZWN0TGlzdCgpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0RGlhbG9nVmlldyA9IG5ldyBQcm9qZWN0TGlzdERpYWxvZ1ZpZXcoZGlhbG9nTm9kZSwgdGhpcy5kYXRhYmFzZSwge1xuICAgICAgICAgICAgb25Mb2FkOiB0aGlzLmxvYWRQcm9qZWN0LmJpbmQodGhpcyksXG4gICAgICAgICAgICBvblJlbW92ZTogKCkgPT4ge30sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb2plY3RMaXN0RGlhbG9nVmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5TYXZlRGlhbG9nKCkge1xuICAgICAgICBjb25zdCBkaWFsb2dOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nTm9kZSk7XG4gICAgICAgIHRoaXMuc2F2ZURpYWxvZ1ZpZXcgPSBuZXcgU2F2ZURpYWxvZ1ZpZXcoZGlhbG9nTm9kZSwgdGhpcy5kYXRhYmFzZSwgIHRoaXMucHJvamVjdCwge1xuICAgICAgICAgICAgb25TYXZlOiBwcm9qZWN0ID0+IHt9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zYXZlRGlhbG9nVmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRQcm9qZWN0KHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5zYXZlVGVtcFByb2plY3QoKTtcbiAgICAgICAgdGhpcy5kZWJ1Zy5leGl0KCk7XG4gICAgICAgIHRoaXMuY29kZVZpZXcucmVuZGVyKHRoaXMucHJvamVjdC5zdGF2ZXMpO1xuICAgICAgICB0aGlzLmNvZGVCYXJWaWV3LnJlbmRlcih0aGlzLnByb2plY3QpO1xuICAgICAgICB0aGlzLnNjcmFwZUFuZFJ1bigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2NyYXBlKCk6IFN0YWNrU3RlcCB8IG51bGwge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMucHJvamVjdC5zdHlsZTtcbiAgICAgICAgY29uc3QgY3Vyc29yQ2ZnID0ge1xuICAgICAgICAgICAgZmlyc3RDb2xvcjogc3R5bGUuZmlyc3RDb2xvcixcbiAgICAgICAgICAgIHNlY29uZENvbG9yOiBzdHlsZS5zZWNvbmRDb2xvcixcbiAgICAgICAgICAgIHN0cm9rZVNpemU6IHN0eWxlLnN0cm9rZVNpemUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGN1cnNvciA9IG5ldyBDdXJzb3IoY3Vyc29yQ2ZnKTtcbiAgICAgICAgY29uc3QgYXJndW1lbnQgPSAxLjA7XG4gICAgICAgIGNvbnN0IG1heEl0ZXJhdGlvbiA9IHRoaXMucHJvamVjdC5pdGVyYXRpb25zO1xuICAgICAgICBjb25zdCBjb2RlID0gdGhpcy5jb2RlVmlldy5zY3JhcGVDb2RlKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBzZXR1cEV4ZWMoYXJndW1lbnQsIG1heEl0ZXJhdGlvbiwgY29kZSwgY3Vyc29yKTtcbiAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWJ1Z1N0YXRlKHByZXZpb3VzU3RhdGU6IFN0YXRlIHwgbnVsbCwgc3RhdGU6IFN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5kZWJ1ZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZUJhclZpZXcudW5zZXREZWJ1Z01vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeCA9IFwiXCJdID0gcHJldmlvdXNTdGF0ZS5zdGF2ZS5zcGxpdChcIjo6XCIpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdmUgPSB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgc3RhdmUgJiYgc3RhdmUucmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oJ2RlYnVnJywgcHJldmlvdXNTdGF0ZS5hY3Rpb25JbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeCA9IFwiXCJdID0gc3RhdGUuc3RhdmUuc3BsaXQoXCI6OlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXZlID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgIHN0YXZlICYmIHN0YXZlLmFkZEZsYWdPbkFjdGlvblRva2VuKCdkZWJ1ZycsIHN0YXRlLmFjdGlvbkluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Ecm9wKGRyYWdOb2RlOiBIVE1MRWxlbWVudCwgb3Zlck5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbmRTdGF2ZSA9IGRhdGFzZXQgPT4gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUoZGF0YXNldC5uYW1lLCBkYXRhc2V0LnN1ZmZpeCk7XG4gICAgICAgIGNvbnN0IHByZXZTdGF2ZVZpZXcgPSBmaW5kU3RhdmUoZHJhZ05vZGUuZGF0YXNldCk7XG5cbiAgICAgICAgaWYgKG92ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXN0YXZlc1wiKSkgeyAvLyBSRU1PVkVcbiAgICAgICAgICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBwYXJzZUludChkcmFnTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIHByZXZTdGF2ZVZpZXcucmVtb3ZlVG9rZW4oaW5kZXhUb1JlbW92ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkgeyAgLy8gQUREL01PVkVcbiAgICAgICAgICAgIGNvbnN0IGluZGV4VG9Nb3ZlID0gcGFyc2VJbnQoZHJhZ05vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBjb25zdCBnb2FsSW5kZXggPSBwYXJzZUludChvdmVyTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxTdGF2ZVZpZXcgPSBmaW5kU3RhdmUob3Zlck5vZGUuZGF0YXNldCk7XG4gICAgICAgICAgICBjb25zdCBzaGlmdCA9IE9iamVjdC5pcyhwcmV2U3RhdmVWaWV3LCBnb2FsU3RhdmVWaWV3KSAmJiBnb2FsSW5kZXggPD0gaW5kZXhUb01vdmUgPyAxIDogMDtcblxuICAgICAgICAgICAgZ29hbFN0YXZlVmlldy5wdXNoVG9rZW5BZnRlcihkcmFnTm9kZS5kYXRhc2V0LnRva2VuLCBnb2FsSW5kZXgpO1xuICAgICAgICAgICAgcHJldlN0YXZlVmlldy5yZW1vdmVUb2tlbihpbmRleFRvTW92ZSArIHNoaWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NyYXBlQW5kU2F2ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ecm9wRnJvbUNhdGVnb3J5KGRyYWdOb2RlOiBIVE1MRWxlbWVudCwgb3Zlck5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGZpbmRTdGF2ZSA9IGRhdGFzZXQgPT4gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUoZGF0YXNldC5uYW1lLCBkYXRhc2V0LnN1ZmZpeCk7XG5cbiAgICAgICAgaWYgKG92ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHsgIC8vIEFERC9NT1ZFXG4gICAgICAgICAgICBjb25zdCBnb2FsSW5kZXggPSBwYXJzZUludChvdmVyTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGdvYWxTdGF2ZVZpZXcgPSBmaW5kU3RhdmUob3Zlck5vZGUuZGF0YXNldCk7XG5cbiAgICAgICAgICAgIGdvYWxTdGF2ZVZpZXcucHVzaFRva2VuQWZ0ZXIoZHJhZ05vZGUuZGF0YXNldC50b2tlbiwgZ29hbEluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NyYXBlQW5kU2F2ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3ZlKGRyYWdOb2RlOiBIVE1MRWxlbWVudCwgb2xkT3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbCwgbmV3T3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgICAgICBpZiAob2xkT3Zlck5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xhc3MgPSBrZXkgPT4gb2xkT3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGtleSk7XG4gICAgICAgICAgICBpZiAoaXNDbGFzcyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHtcbiAgICAgICAgICAgICAgICBvbGRPdmVyTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKTtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtZHJvcFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGFzcyhcImZyYWN0LXN0YXZlc1wiKSkge1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmUtZHJvcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3T3Zlck5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xhc3MgPSBrZXkgPT4gbmV3T3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGtleSk7XG4gICAgICAgICAgICBpZiAoaXNDbGFzcyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdmUgPSBgJHtkcmFnTm9kZS5kYXRhc2V0Lm5hbWV9Ojoke2RyYWdOb2RlLmRhdGFzZXQuc3VmZml4IHx8IFwiXCJ9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBnb2FsU3RhdmUgPSBgJHtuZXdPdmVyTm9kZS5kYXRhc2V0Lm5hbWV9Ojoke25ld092ZXJOb2RlLmRhdGFzZXQuc3VmZml4IHx8IFwiXCJ9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBwYXJzZUludChkcmFnTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICBjb25zdCBnb2FsSW5kZXggPSBwYXJzZUludChuZXdPdmVyTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXZlID09IGdvYWxTdGF2ZSAmJiAoY3VycmVudEluZGV4ID09IGdvYWxJbmRleCB8fCBjdXJyZW50SW5kZXggPT0gZ29hbEluZGV4IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdPdmVyTm9kZS5jbGFzc0xpc3QuYWRkKFwib3ZlclwiKTtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJvcFwiKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NsYXNzKFwiZnJhY3Qtc3RhdmVzXCIpKSB7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1kcm9wXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1vdmVGcm9tQ2F0ZWdvcnkoZHJhZ05vZGU6IEhUTUxFbGVtZW50LCBvbGRPdmVyTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsLCBuZXdPdmVyTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgICAgIGlmIChvbGRPdmVyTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgaXNDbGFzcyA9IGtleSA9PiBvbGRPdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoa2V5KTtcbiAgICAgICAgICAgIGlmIChpc0NsYXNzKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkge1xuICAgICAgICAgICAgICAgIG9sZE92ZXJOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZC1kcm9wXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdPdmVyTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgaXNDbGFzcyA9IGtleSA9PiBuZXdPdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoa2V5KTtcbiAgICAgICAgICAgIGlmIChpc0NsYXNzKFwiZnJhY3QtdG9rZW4tc3BhblwiKSkge1xuICAgICAgICAgICAgICAgIG5ld092ZXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJvdmVyXCIpO1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1kcm9wXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EcmFnVGltZW91dCh0b2tlbk5vZGU6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy5jaG9vc2VEaWFsb2dWaWV3ID0gbmV3IENob29zZVRva2VuRGlhbG9nVmlldyhkaWFsb2dOb2RlLCB0b2tlbk5vZGUsIHRoaXMub25TZWxlY3RUb2tlbkZyb21EaWFsb2cuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hvb3NlRGlhbG9nVmlldy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNlbGVjdFRva2VuRnJvbURpYWxvZyh7dG9rZW4sIG5hbWUsIHN1ZmZpeCwgaW5kZXh9KSB7XG4gICAgICAgIGNvbnN0IHN0YXZlVmlldyA9IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgIHN0YXZlVmlldy5yZXBsYWNlVG9rZW4odG9rZW4sIGluZGV4KTtcbiAgICAgICAgdGhpcy5zY3JhcGVBbmRTYXZlKCk7XG4gICAgICAgIHRoaXMuY2hvb3NlRGlhbG9nVmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93T3JIaWRlT3JBZGRGdW5jdGlvbihuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nID0gXCJcIik6IHZvaWQge1xuICAgICAgICBjb25zdCBzdGF2ZVZpZXcgPSB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICBpZiAoc3RhdmVWaWV3KSB7XG4gICAgICAgICAgICBzdGF2ZVZpZXcuc2hvd09ySGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2RlVmlldy5hZGRTdGF2ZSh7IG5hbWUsIHN1ZmZpeCwgdG9rZW5zOiBbXSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmFwZUFuZFNhdmUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpbml0RGF0YWJhc2UgfSBmcm9tIFwiLi9kYXRhYmFzZUluaXRcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgRGF0YWJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB0aGlzLiNnZXRSZXF1ZXN0KCk7XG4gICAgICAgIGRiUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBhbGVydChcIkRCIEVSUk9SIVwiKTsgfTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnJlc3VsdDtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZSgncHJvamVjdHMnLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgndGl0bGUnLCAndGl0bGUnKTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCdpdGVyYXRpb25zJywgJ2l0ZXJhdGlvbnMnKTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCdzdGF2ZXMnLCAnc3RhdmVzJyk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnc3R5bGUnLCAnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCdjcmVhdGVkJywgJ2NyZWF0ZWQnKTtcbiAgICAgICAgICAgIHN0b3JlLmNyZWF0ZUluZGV4KCd1cGRhdGVkJywgJ3VwZGF0ZWQnKTtcblxuICAgICAgICAgICAgaW5pdERhdGFiYXNlKChwcm9qZWN0OiBQcm9qZWN0KSA9PiB0aGlzLnVwZGF0ZShwcm9qZWN0LCAoKSA9PiB7fSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCh0aXRsZTogc3RyaW5nLCBjYWxsYmFjazogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWQsIGVyckNhbGxiYWNrOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB0aGlzLiNnZXRSZXF1ZXN0KCk7XG4gICAgICAgIGRiUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBhbGVydChcIkRCIEVSUk9SIVwiKTsgfTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy4jZ2V0UHJvamVjdHNTdG9yZShkYlJlcXVlc3QpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVSZXF1ZXN0ID0gc3RvcmUuZ2V0KHRpdGxlKTtcbiAgICAgICAgICAgIHN0b3JlUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3RvcmVSZXF1ZXN0LnJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGVyckNhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBlcnJDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdXBkYXRlKHByb2plY3Q6IFByb2plY3QsIGNhbGxiYWNrOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB0aGlzLiNnZXRSZXF1ZXN0KCk7XG4gICAgICAgIGRiUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBhbGVydChcIkRCIEVSUk9SIVwiKTsgfTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiID0gZGJSZXF1ZXN0LnJlc3VsdDsgXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFtcInByb2plY3RzXCJdLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICBjb25zdCBzdG9yZVJlcXVlc3QgPSBzdG9yZS5wdXQocHJvamVjdCk7XG4gICAgICAgICAgICBzdG9yZVJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4geyBjYWxsYmFjayhwcm9qZWN0KTsgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbW92ZSh0aXRsZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB0aGlzLiNnZXRSZXF1ZXN0KCk7XG4gICAgICAgIGRiUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBhbGVydChcIkRCIEVSUk9SIVwiKTsgfTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy4jZ2V0UHJvamVjdHNTdG9yZShkYlJlcXVlc3QpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVSZXF1ZXN0ID0gc3RvcmUuZGVsZXRlKHRpdGxlKTtcbiAgICAgICAgICAgIHN0b3JlUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7IGNhbGxiYWNrKCk7IH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBsaXN0KGNhbGxiYWNrOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZCwgbGltaXQgPSAtMSkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB0aGlzLiNnZXRSZXF1ZXN0KCk7XG5cbiAgICAgICAgZGJSZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7IGFsZXJ0KFwiREIgRVJST1IhXCIpOyB9O1xuICAgICAgICBkYlJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLiNnZXRQcm9qZWN0c1N0b3JlKGRiUmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0b3JlLmluZGV4KCd1cGRhdGVkJyk7XG4gICAgICAgICAgICBpbmRleC5vcGVuQ3Vyc29yKG51bGwsIFwicHJldlwiKS5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJzb3IgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLnZhbHVlLmlkID09IFwiX190ZW1wX19cIikge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnNvci52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPiAwICYmIGNvdW50IDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgI2dldFJlcXVlc3QoKTogSURCT3BlbkRCUmVxdWVzdCB7XG4gICAgICAgIGNvbnN0IGRiUmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3BlbihcIkZyYWN0YWxhbmdcIiwgMSk7XG4gICAgICAgIHJldHVybiBkYlJlcXVlc3Q7XG4gICAgfVxuXG4gICAgI2dldFByb2plY3RzU3RvcmUoZGJSZXF1ZXN0OiBJREJSZXF1ZXN0KTogSURCT2JqZWN0U3RvcmUge1xuICAgICAgICBjb25zdCBkYiA9IGRiUmVxdWVzdC5yZXN1bHQ7IFxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFtcInByb2plY3RzXCJdLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgncHJvamVjdHMnKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3R5bGUsIFN0YXZlIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGU6IHN0cmluZywgaXRlcmF0aW9uczogbnVtYmVyLCBzdGF2ZXM6IFN0YXZlW10sIHN0eWxlOiBQcm9qZWN0U3R5bGUpOiBQcm9qZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGl0bGUsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBpdGVyYXRpb25zOiBNYXRoLnJvdW5kKGl0ZXJhdGlvbnMpLFxuICAgICAgICBzdGF2ZXMsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgpLFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhYmFzZSh1cGRhdGU6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkKSB7XG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiQmluYXJ5IFRyZWVcIiwgOSxcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRlwiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfQ0lSQ0xFJywgJ0NPVU5UXzMnLCAnUk9UQVRFX1JJR0hUJywgJ0FOR0xFXzMwJywgJ0RSQVdfTElORScsICdDQUxMX0YnLCAnUkVWRVJTRScsXG4gICAgICAgICAgICAgICAgICAgICdDT1VOVF8zJywgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzMwJywgJ0RSQVdfTElORScsICdDQUxMX0YnLCAnUkVWRVJTRScsICdDT1VOVF8zJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCBzdWZmaXg6IFwiRU5EXCIsIHRva2VuczogWydEUkFXX0NJUkNMRScsICdDT1VOVF8zJywgJ0NPTE9SX01BWCddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyMwMDAwMDAnLCBzZWNvbmRDb2xvcjogJyNmZjAwMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiQ29uc3RlbGxhdGlvbiBvZiBNdWZmaW5cIiwgNyxcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRlwiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfTElORScsICdBUkdVTUVOVCcsICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCAnQVJHVU1FTlQnLCAnQ0FMTF9GJywgJ0FSR1VNRU5UJywgJ0RSQVdfVFJJQU5HTEUnLFxuICAgICAgICAgICAgICAgICAgICAnQ09MT1JfTUFYJywgJ0NPVU5UXzInLCAnQ09VTlRfMycsICdDQUxMX0YnLCAnQ09VTlRfR09MRCcsICdGUkFDVF8xXzMnLCAnQVJHVU1FTlQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnI2ZmOTUwMCcsIHNlY29uZENvbG9yOiAnI2ZmZDU2MScsIGJhY2tncm91bmRDb2xvcjogJyM4YThhOGEnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJDdXJ2eSBwZW50YWdvblwiLCA1LFxuICAgICAgICBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCB0b2tlbnM6IFsnRFJBV19MSU5FJywgJ0FSR1VNRU5UJywgJ0RSQVdfQVJDTElORV9MXzFfNScsICdBUkdVTUVOVCcsICdDQUxMX0YnLCAnQVJHVU1FTlQnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjMDAwMDAwJywgc2Vjb25kQ29sb3I6ICcjZmYwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIkRvdHRlZCBTdW5cIiwgMTAsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0NJUkNMRScsICdDT0xPUl9NQVgnLCAnQ09VTlRfNScsICdEUkFXX0xJTkUnLCAnQVJHVU1FTlQnLFxuICAgICAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMV81JywgJ0FSR1VNRU5UJywgJ0NBTExfRicsICdDT1VOVF9NSU5VUycsICdBUkdVTUVOVCddXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjZmY5NTAwJywgc2Vjb25kQ29sb3I6ICcjZmZiYjAwJywgYmFja2dyb3VuZENvbG9yOiAnIzhhOGE4YScsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIkhvbmV5Y29tYlwiLCA4LFxuICAgICAgICBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCB0b2tlbnM6IFsnRFJBV19BUkNMSU5FX0xfMV8zJywgJ0NBTExfRicsICdDT0xPUl9TSElGVF8xXzQnLCAnRFJBV19BUkNMSU5FX1JfMV8zJywgJ0NBTExfRiddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyNmZmRkMDAnLCBzZWNvbmRDb2xvcjogJyNmZjc1NzUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiS29jaCBTbm93Zmxha2VcIiwgNSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbJ0NBTExfRycsICdST1RBVEVfUklHSFQnLCAnQ09VTlRfMicsICdBTkdMRV82MCcsICdSRVBMQVlfMicsICdDT1VOVF8zJ10gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX1JJR0hUJywgJ0NPVU5UXzInLFxuICAgICAgICAgICAgICAgICAgICAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfTEVGVCcsICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiR1wiLCBzdWZmaXg6IFwiRU5EXCIsIHRva2VuczogWydEUkFXX0xJTkUnLCAnQVJHVU1FTlQnXSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkRJQU1PTkRcIiwgdG9rZW5zOiBbJ0ZSQUNUXzFfMycsICdBUkdVTUVOVCddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyNmZmZmZmYnLCBzZWNvbmRDb2xvcjogJyNmZjAwMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDBiZmZmJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiS29jaCBTbm93Zmxha2UgLSAyXCIsIDQsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHRva2VuczogWydDQUxMX0cnLCAnUk9UQVRFX1JJR0hUJywgJ0NPVU5UXzInLCAnQU5HTEVfNjAnLCAnUkVQTEFZXzInLCAnQ09VTlRfMyddIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJHXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfTEVGVCcsICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9SSUdIVCcsICdDT1VOVF8yJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR1wiLCBzdWZmaXg6IFwiRU5EXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnRFJBV19MSU5FJywgJ0FSR1VNRU5UJywgJ0RSQVdfQVJDTElORV9MXzJfMycsICdDQUxMX0RJQU1PTkQnLCAnRFJBV19BUkNMSU5FX1JfMl8zJywgJ0NBTExfRElBTU9ORCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAgbmFtZTogXCJESUFNT05EXCIsIHRva2VuczogWydGUkFDVF8xXzMnLCAnQVJHVU1FTlQnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjZmZmZmZmJywgc2Vjb25kQ29sb3I6ICcjZmYwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnIzAwYmZmZicsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIlRoZSBncmlkXCIsIDgsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0NJUkNMRScsICdDT1VOVF8zJywgJ0NPVU5UXzMnLCAnUk9UQVRFX1JJR0hUJywgJ0FOR0xFXzkwJywgJ0NBTExfRycsICdDQUxMX0YnLCAnUkVWRVJTRScsICdDT1VOVF8zJyxcbiAgICAgICAgICAgICAgICAgICAgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzkwJywgJ0NBTExfRycsICdDQUxMX0YnLCAnUkVWRVJTRScsICdDT1VOVF8zJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCBzdWZmaXg6IFwiRU5EXCIsIHRva2VuczogWydEUkFXX0NJUkNMRScsICdDT1VOVF8zJywgJ0NPVU5UXzMnLCAnQ09MT1JfTUFYJ10gfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJHXCIsIHRva2VuczogWydEUkFXX0FSQ0xJTkVfTF8xXzQnLCAnRFJBV19BUkNMSU5FX1JfMV8yJywgJ0ZSQUNUXzFfMycsICdEUkFXX0FSQ0xJTkVfTF8xXzQnLCAnRlJBQ1RfMV8zJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnIzAwMDAwMCcsIHNlY29uZENvbG9yOiAnI2ZmMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbn0iLCJpbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL2NvcmUvc3RhdmVcIjtcbmV4cG9ydCB7IFN0YXZlIH0gZnJvbSBcIkAvY29yZS9zdGF2ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuSW5mbyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdHlwZTogJ2FjdGlvbicgfCAndmFsdWUnO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkNhdGVnb3J5IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHRva2Vuczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RTdHlsZSB7XG4gICAgZmlyc3RDb2xvcjogc3RyaW5nLFxuICAgIHNlY29uZENvbG9yOiBzdHJpbmcsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcsXG4gICAgc3Ryb2tlU2l6ZTogbnVtYmVyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBzdGF2ZXM6IFN0YXZlW10sXG4gICAgaXRlcmF0aW9uczogbnVtYmVyLFxuICAgIHN0eWxlOiBQcm9qZWN0U3R5bGUsXG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICB1cGRhdGVkOiBEYXRlLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlQcm9qZWN0KCk6IFByb2plY3Qge1xuICAgIGNvbnN0IGRhdGUgPSAobmV3IERhdGUoKSkudG9EYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGl0bGUgPSBgTkVXICR7ZGF0ZX1gO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB0aXRsZSxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICBzdGF2ZXM6IFtcbiAgICAgICAgICAgIHtcIm5hbWVcIjogXCJGXCIsIHRva2VuczogW119LFxuICAgICAgICBdLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgZmlyc3RDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICBzZWNvbmRDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgc3Ryb2tlU2l6ZTogMS4wLFxuICAgICAgICB9LFxuICAgICAgICBpdGVyYXRpb25zOiAzLFxuICAgIH1cbn0iLCJpbXBvcnQgeyBUb2tlbnNLZXkgfSBmcm9tIFwiQC9jb3JlL21hcHBpbmdzXCI7XG5pbXBvcnQgeyBUb2tlbkluZm8gfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOUzogVG9rZW5JbmZvW10gPSBbXG4gICAge25hbWU6ICdBUkdVTUVOVCcsIGxhYmVsOiAnQXJndW1lbnQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NBTExfRElBTU9ORCcsIGxhYmVsOiAnRGlhbW9uZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ0FMTF9JTlZfVFJJQU5HTEUnLCBsYWJlbDogJ0ludmVyc2UgdHJpYW5nbGUnLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnQ0FMTF9GJywgbGFiZWw6ICdGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0FMTF9HJywgbGFiZWw6ICdHIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0FMTF9IJywgbGFiZWw6ICdIIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0YnLCBsYWJlbDogJ0YgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0cnLCBsYWJlbDogJ0cgZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdDTE9TRV9DQUxMX0gnLCBsYWJlbDogJ0ggZnVuY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0RSQVdfTElORScsIGxhYmVsOiAnTGluZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19DSVJDTEUnLCBsYWJlbDogJ0NpcmNsZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfU1FVQVJFJywgbGFiZWw6ICdTcXVhcmUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX1RSSUFOR0xFJywgbGFiZWw6ICdUcmlhbmdsZScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfM180JywgbGFiZWw6ICdBcmMgMy80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8yXzMnLCBsYWJlbDogJ0FyYyAyLzMgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMicsIGxhYmVsOiAnQXJjIDEvMiAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzQnLCBsYWJlbDogJ0FyYyAxLzQgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfNScsIGxhYmVsOiAnQXJjIDEvNSAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfM180JywgbGFiZWw6ICdBcmMgMy80IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzJfMycsIGxhYmVsOiAnQXJjIDIvMyAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzInLCBsYWJlbDogJ0FyYyAxLzIgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8zJywgbGFiZWw6ICdBcmMgMS8zIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfNCcsIGxhYmVsOiAnQXJjIDEvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCBsYWJlbDogJ0FyYyAxLzUgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdNT1ZFX0ZPUldBUkQnLCBsYWJlbDogJ01vdmUgZm9yd2FyZCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfQkFDS1dBUkQnLCBsYWJlbDogJ01vdmUgYmFja3dhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdNT1ZFX0xFRlQnLCBsYWJlbDogJ01vdmUgbGVmdCcsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ01PVkVfUklHSFQnLCBsYWJlbDogJ01vdmUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfTEVGVCcsIGxhYmVsOiAnUm90YXRlIGxlZnQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdST1RBVEVfUklHSFQnLCBsYWJlbDogJ1JvdGF0ZSByaWdodCcsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnUkVWRVJTRScsIGxhYmVsOiAnUmV2ZXJzZScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWScsIGxhYmVsOiAnUmVwbGF5IHRoZSBsYXN0IGFjdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ1JFUExBWV8yJywgbGFiZWw6ICdSZXBsYXkgdGhlIHR3byBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfMycsIGxhYmVsOiAnUmVwbGF5IHRoZSB0aHJlZSBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfNCcsIGxhYmVsOiAnUmVwbGF5IHRoZSBmb3VyIGxhc3QgYWN0aW9ucycsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnQ09VTlRfMScsIGxhYmVsOiAnT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF8yJywgbGFiZWw6ICdUd28nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UXzMnLCBsYWJlbDogJ1RocmVlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF81JywgbGFiZWw6ICdGaXZlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF83JywgbGFiZWw6ICdTZXZlbicsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdDT1VOVF9NSU5VUycsIGxhYmVsOiAnTWludXMgT25lJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9HT0xEJywgbGFiZWw6ICdHb2xkZW4gUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX1NJTFZFUicsIGxhYmVsOiAnU2lsdmVyIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9CUk9OWkUnLCBsYWJlbDogJ0Jyb256ZSBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfUExBU1RJQycsIGxhYmVsOiAnUGxhc3RpYyBOdW1iZXInLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnRlJBQ1RfMV8yJywgbGFiZWw6ICdIYWxmJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzMnLCBsYWJlbDogJ09uZSBUaGlyZCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl8zJywgbGFiZWw6ICdUd28gVGhpcmRzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzQnLCBsYWJlbDogJ09uZSBRdWFydGVyJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8zXzQnLCBsYWJlbDogJ1RocmVlIHF1YXJ0ZXJzJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8xXzUnLCBsYWJlbDogJ09uZSBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMl81JywgbGFiZWw6ICdUd28gRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzNfNScsIGxhYmVsOiAnVGhyZWUgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzRfNScsIGxhYmVsOiAnRm91ciBGaWZ0aCcsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdBTkdMRV8yNzAnLCBsYWJlbDogJzI3MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xODAnLCBsYWJlbDogJzE4MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV85MCcsIGxhYmVsOiAnOTDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfNjAnLCBsYWJlbDogJzYwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzQ1JywgbGFiZWw6ICc0NcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8zMCcsIGxhYmVsOiAnMzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTUnLCBsYWJlbDogJzE1wrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzEwJywgbGFiZWw6ICcxMMKwJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ09QX01VTFQnLCBsYWJlbDogJ011bHRpcGxlIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9BREQnLCBsYWJlbDogJ0FkZGl0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdPUF9TVUInLCBsYWJlbDogJ1N1YnRyYWN0aW9uIG9wZXJhdG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9NQVgnLCBsYWJlbDogJ1NlY29uZCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfTUlOJywgbGFiZWw6ICdGaXJzdCBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRklMTCcsIGxhYmVsOiAnRmlsbGVkIEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfRU1QVFknLCBsYWJlbDogJ1RyYW5zcGFyZW50IEZpZ3VyZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8yJywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfNCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzUnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV8xMCcsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfQUREJywgbGFiZWw6ICdUaGljayBzdHJva2UnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ1NUUk9LRV9USElDS19TVUInLCBsYWJlbDogJ1RoaW4gc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG5dO1xuXG5leHBvcnQgY29uc3QgTkFNRV9UT19UT0tFTiA9IG5ldyBNYXA8c3RyaW5nLCBUb2tlbkluZm8+KFxuICAgIFRPS0VOUy5tYXAodG9rZW4gPT4gW3Rva2VuLm5hbWUsIHRva2VuXSlcbik7XG4iLCJpbXBvcnQgeyBUb2tlbkNhdGVnb3J5IH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9GQU1JTElFUzogeyBba2V5OiBzdHJpbmddOiBUb2tlbkNhdGVnb3J5W10gfSA9IHtcbiAgICBBUkdVTUVOVDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FyZ3VtZW50cycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnQVJHVU1FTlQnLCAnQ0FMTF9ESUFNT05EJywgJ0NBTExfSU5WX1RSSUFOR0xFJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBDQUxMOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FsbGVycycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnQ0FMTF9GJywgJ0NBTExfRycsICdDQUxMX0gnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDbG9zZSBDYWxsZXJzJyxcbiAgICAgICAgICAgIHRva2VuczogWydDTE9TRV9DQUxMX0YnLCAnQ0xPU0VfQ0FMTF9HJywgJ0NMT1NFX0NBTExfSCddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgRFJBV19TSEFQRTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NoYXBlcycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnRFJBV19DSVJDTEUnLCAnRFJBV19TUVVBUkUnLCAnRFJBV19UUklBTkdMRSddLFxuICAgICAgICB9XG4gICAgXSxcbiAgICBEUkFXX0xJTkU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdMaW5lJyxcbiAgICAgICAgICAgIHRva2VuczogWydEUkFXX0xJTkUnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdMZWZ0IEFyYycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfM180JyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMl8zJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMV8yJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMV8zJyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMV80JyxcbiAgICAgICAgICAgICAgICAnRFJBV19BUkNMSU5FX0xfMV81JyxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdSaWdodCBBcmMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzNfNCcsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzJfMycsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzFfMicsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzFfMycsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzFfNCcsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzFfNScsXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBNT1ZFOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTW92ZXMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ01PVkVfRk9SV0FSRCcsICdNT1ZFX0JBQ0tXQVJEJywgJ01PVkVfTEVGVCcsICdNT1ZFX1JJR0hUJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBST1RBVEU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdSb3RhdGVzJyxcbiAgICAgICAgICAgIHRva2VuczogWydST1RBVEVfTEVGVCcsICdST1RBVEVfUklHSFQnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFJFUExBWTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1JlcGxheXMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ1JFUExBWScsICdSRVBMQVlfMicsICdSRVBMQVlfMycsICdSRVBMQVlfNCddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgVkFMVUU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnQ09VTlRfMScsICdDT1VOVF8yJywgJ0NPVU5UXzMnLCAnQ09VTlRfNScsICdDT1VOVF83J10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ291bnRlcnMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgJ0NPVU5UX01JTlVTJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfR09MRCcsXG4gICAgICAgICAgICAgICAgJ0NPVU5UX1NJTFZFUicsXG4gICAgICAgICAgICAgICAgJ0NPVU5UX0JST05aRScsXG4gICAgICAgICAgICAgICAgJ0NPVU5UX1BMQVNUSUMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdGcmFjdGlvbnMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgJ0ZSQUNUXzFfMicsXG4gICAgICAgICAgICAgICAgJ0ZSQUNUXzFfMycsXG4gICAgICAgICAgICAgICAgJ0ZSQUNUXzJfMycsXG4gICAgICAgICAgICAgICAgJ0ZSQUNUXzFfNCcsXG4gICAgICAgICAgICAgICAgJ0ZSQUNUXzNfNCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV81JyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMl81JyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfM181JyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfNF81JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBBTkdMRTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FuZ2xlcycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQU5HTEVfMjcwJyxcbiAgICAgICAgICAgICAgICAnQU5HTEVfMTgwJyxcbiAgICAgICAgICAgICAgICAnQU5HTEVfOTAnLFxuICAgICAgICAgICAgICAgICdBTkdMRV82MCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0FuZ2xlcycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQU5HTEVfNDUnLFxuICAgICAgICAgICAgICAgICdBTkdMRV8zMCcsXG4gICAgICAgICAgICAgICAgJ0FOR0xFXzE1JyxcbiAgICAgICAgICAgICAgICAnQU5HTEVfMTAnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIE9QOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnT1AnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ09QX01VTFQnLCAnT1BfQUREJywgJ09QX1NVQiddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgU1RST0tFX0NPTE9SOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGhpY2svVGhpbicsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnU1RST0tFX1RISUNLX0FERCcsXG4gICAgICAgICAgICAgICAgJ1NUUk9LRV9USElDS19TVUInLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb2xvcicsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQ09MT1JfTUFYJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfTUlOJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfRklMTCcsXG4gICAgICAgICAgICAgICAgJ0NPTE9SX0VNUFRZJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29sb3IgU2hpZnQnLFxuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfMicsXG4gICAgICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfNCcsXG4gICAgICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfNScsXG4gICAgICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfMTAnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IE5BTUVfVE9fRkFNSUxZID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oXG4gICAgT2JqZWN0LmVudHJpZXMoVE9LRU5fRkFNSUxJRVMpXG4gICAgICAgIC5tYXAoKFtuYW1lLCBjYXRlZ29yaWVzXSkgPT4gY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkudG9rZW5zLm1hcCh0b2tlbiA9PiBbdG9rZW4sIG5hbWVdKSkpXG4gICAgICAgIC5mbGF0KClcbiAgICAgICAgLmZsYXQoKSBhcyBbc3RyaW5nLCBzdHJpbmddW11cbik7XG4iLCJpbXBvcnQgeyBUb2tlbkNhdGVnb3J5IH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVE9LRU5TOiBUb2tlbkNhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0Z1bmN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ0FSR1VNRU5UJyxcbiAgICAgICAgICAgICdDQUxMX0RJQU1PTkQnLFxuICAgICAgICAgICAgJ0NBTExfRicsXG4gICAgICAgICAgICAnQ0FMTF9HJyxcbiAgICAgICAgICAgICdDQUxMX0gnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1BhaW50ZXJzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnRFJBV19MSU5FJyxcbiAgICAgICAgICAgICdEUkFXX1RSSUFOR0xFJyxcbiAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfTF8xXzInLFxuICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9SXzFfMicsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ3Vyc29yJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnTU9WRV9GT1JXQVJEJyxcbiAgICAgICAgICAgICdST1RBVEVfTEVGVCcsXG4gICAgICAgICAgICAnUk9UQVRFX1JJR0hUJyxcbiAgICAgICAgICAgICdSRVZFUlNFJyxcbiAgICAgICAgICAgICdSRVBMQVknLFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVkFMVUVfVE9LRU5TOiBUb2tlbkNhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0NvdW50ZXJzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQ09VTlRfMicsXG4gICAgICAgICAgICAnQ09VTlRfMycsXG4gICAgICAgICAgICAnQ09VTlRfNScsXG4gICAgICAgICAgICAnQ09VTlRfTUlOVVMnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ0ZSQUNUXzFfMicsXG4gICAgICAgICAgICAnRlJBQ1RfMV8zJyxcbiAgICAgICAgICAgICdGUkFDVF8xXzQnLFxuICAgICAgICAgICAgJ0ZSQUNUXzFfNScsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQU5HTEVfMTgwJyxcbiAgICAgICAgICAgICdBTkdMRV85MCcsXG4gICAgICAgICAgICAnQU5HTEVfNjAnLFxuICAgICAgICAgICAgJ0FOR0xFXzQ1JyxcbiAgICAgICAgICAgICdBTkdMRV8zMCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29sb3JzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQ09MT1JfRklMTCcsXG4gICAgICAgICAgICAnQ09MT1JfRU1QVFknLFxuICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfMicsXG4gICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV80JyxcbiAgICAgICAgICAgICdDT0xPUl9NQVgnLFxuICAgICAgICAgICAgJ0NPTE9SX01JTicsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnU3Ryb2tlcycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ1NUUk9LRV9USElDS19BREQnLFxuICAgICAgICAgICAgJ1NUUk9LRV9USElDS19TVUInLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01vZGlmaWNhdG9ycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ09QX01VTFQnLFxuICAgICAgICAgICAgJ09QX0FERCcsXG4gICAgICAgICAgICAnT1BfU1VCJyxcbiAgICAgICAgXSxcbiAgICB9LFxuXTsiLCJpbXBvcnQgeyBjcmVhdGVFbXB0eVByb2plY3QsIFByb2plY3QgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBkZWNvZGVTdGF2ZXMsIGVuY29kZVN0YXZlcyB9IGZyb20gXCJAL2NvcmUvc2hvcnRjdXRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVQcm9qZWN0VG9VcmxQYXJhbXMocHJvamVjdDogUHJvamVjdCk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGVuY29kZVN0YXZlcyhwcm9qZWN0LnN0YXZlcylcbiAgICAgICAgLmZvckVhY2goKFtuYW1lLCB0b2tlbnNdKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKG5hbWUsIHRva2Vucyk7XG4gICAgICAgIH0pO1xuXG4gICAgcGFyYW1zLmFwcGVuZChcInpcIiwgXCJ6XCIpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJ0XCIsIHByb2plY3QudGl0bGUpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJpXCIsIHByb2plY3QuaXRlcmF0aW9ucy50b0ZpeGVkKCkpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJjMVwiLCBwcm9qZWN0LnN0eWxlLmZpcnN0Q29sb3IpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJjMlwiLCBwcm9qZWN0LnN0eWxlLnNlY29uZENvbG9yKTtcbiAgICBwYXJhbXMuYXBwZW5kKFwiYlwiLCBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvcik7XG4gICAgcGFyYW1zLmFwcGVuZChcInNcIiwgcHJvamVjdC5zdHlsZS5zdHJva2VTaXplLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQcm9qZWN0RnJvbVVybFBhcmFtcyhwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyk6IFByb2plY3Qge1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVFbXB0eVByb2plY3QoKTtcbiAgICBwcm9qZWN0LnN0YXZlcyA9IGRlY29kZVN0YXZlcyhwYXJhbXMuZW50cmllcygpKTtcblxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLmdldChcInRcIik7XG4gICAgY29uc3QgaXRlcmF0aW9ucyA9IHBhcmFtcy5nZXQoXCJpXCIpO1xuICAgIGNvbnN0IGZpcnN0Q29sb3IgPSBwYXJhbXMuZ2V0KFwiYzFcIik7XG4gICAgY29uc3Qgc2Vjb25kQ29sb3IgPSBwYXJhbXMuZ2V0KFwiYzJcIik7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmdldChcImJcIik7XG4gICAgY29uc3Qgc3Ryb2tlU2l6ZSA9IHBhcmFtcy5nZXQoXCJzXCIpO1xuXG4gICAgaWYgKHRpdGxlICE9PSBudWxsKSB7XG4gICAgICAgIHByb2plY3QuaWQgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0aW9ucyAhPT0gbnVsbCkgcHJvamVjdC5pdGVyYXRpb25zID0gTnVtYmVyLnBhcnNlSW50KGl0ZXJhdGlvbnMpO1xuICAgIGlmIChmaXJzdENvbG9yICE9PSBudWxsKSBwcm9qZWN0LnN0eWxlLmZpcnN0Q29sb3IgPSBmaXJzdENvbG9yO1xuICAgIGlmIChzZWNvbmRDb2xvciAhPT0gbnVsbCkgcHJvamVjdC5zdHlsZS5zZWNvbmRDb2xvciA9IHNlY29uZENvbG9yO1xuICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgIT09IG51bGwpIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgIGlmIChzdHJva2VTaXplICE9PSBudWxsKSBwcm9qZWN0LnN0eWxlLnN0cm9rZVNpemUgPSBOdW1iZXIucGFyc2VJbnQoc3Ryb2tlU2l6ZSk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn0iLCJpbXBvcnQgeyBUb2tlbnNWaWV3IH0gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCB7IENhbGxiYWNrcyB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmltcG9ydCB7IFRva2VuQ2F0ZWdvcnkgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNDYXRlZ29yeVZpZXcgZXh0ZW5kcyBUb2tlbnNWaWV3IHtcbiAgICBwcm90ZWN0ZWQgY2F0ZWdvcmllczogVG9rZW5DYXRlZ29yeVtdO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGNhdGVnb3JpZXMsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYXRlZ29yaWVzOiBUb2tlbkNhdGVnb3J5W10sXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSB0aGlzLmNyZWF0ZUNhdGVnb3J5Tm9kZShjYXRlZ29yeSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhdGVnb3J5Tm9kZShjYXRlZ29yeTogVG9rZW5DYXRlZ29yeSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogWydmcmFjdC10b2tlbnMnLCAnaGlkZSddLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlTmFtZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2dyb3VwLWxhYmVsJ10sXG4gICAgICAgICAgICB0ZXh0OiBjYXRlZ29yeS5sYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZU5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYXRlZ29yeU5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGVOYW1lKTtcblxuICAgICAgICBjYXRlZ29yeS50b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgICAgICBpZiAodG9rZW5JbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRlZ29yeU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlbk5vZGUodG9rZW5JbmZvLm5hbWUpKTtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgdGV4dDogdG9rZW5JbmZvLmxhYmVsLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlOb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBUT0tFTl9GQU1JTElFUywgTkFNRV9UT19GQU1JTFkgfSBmcm9tIFwiQC93ZWIvdG9rZW5zRmFtaWx5XCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiXG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSBcIkAvd2ViL2NvbnN0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uU2VsZWN0QXJncyB7XG4gICAgdG9rZW46IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdWZmaXg6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcgZXh0ZW5kcyBWaWV3PEhUTUxEaWFsb2dFbGVtZW50PiB7XG4gICAgI2FyZ3M6IE9uU2VsZWN0QXJncztcbiAgICAjaWNvblVybDogc3RyaW5nO1xuICAgICNvblNlbGVjdDogKG9iajogYW55KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoZGlhbG9nTm9kZTogSFRNTERpYWxvZ0VsZW1lbnQsIHRva2VuTm9kZTogSFRNTEVsZW1lbnQsIG9uU2VsZWN0OiAob2JqOiBhbnkpID0+IHZvaWQsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMKSB7XG4gICAgICAgIHN1cGVyKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLiNhcmdzID0ge1xuICAgICAgICAgICAgdG9rZW46IHRva2VuTm9kZS5kYXRhc2V0LnRva2VuLFxuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHRva2VuTm9kZS5kYXRhc2V0LmluZGV4KSxcbiAgICAgICAgICAgIG5hbWU6IHRva2VuTm9kZS5kYXRhc2V0Lm5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHRva2VuTm9kZS5kYXRhc2V0LnN1ZmZpeCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuI29uU2VsZWN0ID0gb25TZWxlY3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImNob29zZS10b2tlbi1kaWFsb2dcIik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBjb25zdCBmYW1pbHlOYW1lID0gTkFNRV9UT19GQU1JTFkuZ2V0KHRoaXMuI2FyZ3MudG9rZW4pO1xuICAgICAgICBjb25zdCBmYW1pbHkgPSBUT0tFTl9GQU1JTElFU1tmYW1pbHlOYW1lXSB8fCBbXTtcbiAgICAgICAgaWYgKGZhbWlseS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdObyBmYW1pbHkgOignO1xuICAgICAgICB9IFxuXG4gICAgICAgIGZhbWlseS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydjYXRlZ29yeSddLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWxOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydsYWJlbCddLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNhdGVnb3J5LmxhYmVsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeUxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5LnRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuSW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5XaXRoTGFiZWxOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnZGlhbG9nLXRva2VuJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnZnJhY3QtdG9rZW4nXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2tlbk5vZGUuZGF0YXNldC50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgIHRva2VuTm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy4jaWNvblVybH0vJHt0b2tlbn0uc3ZnKWA7XG4gICAgICAgICAgICAgICAgdG9rZW5Ob2RlLnN0eWxlLndpZHRoID0gYDQ4cHhgO1xuICAgICAgICAgICAgICAgIHRva2VuTm9kZS5zdHlsZS5oZWlnaHQgPSBgNDhweGA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdG9rZW5JbmZvLmxhYmVsLFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYXBwZW5kQ2hpbGQodG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCB0b2tlbikpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZCh0b2tlbldpdGhMYWJlbE5vZGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5vZGUuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgb25DbGljayh0b2tlbjogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLiNvblNlbGVjdCh7Li4udGhpcy4jYXJncywgdG9rZW59KTtcbiAgICAgICAgdGhpcy5ub2RlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZSc7XG5pbXBvcnQgeyBDYWxsYmFja3MgfSBmcm9tIFwiLi90b2tlblwiO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIENvZGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdGF2ZVZpZXdzOiBTdGF2ZVZpZXdbXTtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQ2FsbGJhY2tzO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybD86IHN0cmluZyxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKHN0YXZlczogU3RhdmVbXSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cyA9IHN0YXZlcy5tYXAodGhpcy5jcmVhdGVTdGF2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBmaW5kU3RhdmUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IFN0YXZlVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXZlVmlld3MuZmluZCh2aWV3ID0+IHZpZXcuY2hlY2tOYW1lKG5hbWUsIHN1ZmZpeCkpO1xuICAgIH1cblxuICAgIGFkZFN0YXZlKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IHN1ZmZpeDogc3RyaW5nOyB0b2tlbnM6IHN0cmluZ1tdIH0pIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuY3JlYXRlU3RhdmUoe1xuICAgICAgICAgICAgbmFtZTogcGFyYW1zLm5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHBhcmFtcy5zdWZmaXgsXG4gICAgICAgICAgICB0b2tlbnM6IHBhcmFtcy50b2tlbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBzY3JhcGVDb2RlKCk6IFN0YXZlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF2ZVZpZXdzLmZpbHRlcih2aWV3ID0+IHZpZXcuY291bGRCZVNjcmFwZWQoKSkubWFwKHZpZXcgPT4gdmlldy5zY3JhcGUoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0YXZlKHsgbmFtZSwgc3VmZml4LCB0b2tlbnMgfSk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFN0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4IHx8IFwiXCIsXG4gICAgICAgICAgICBpY29uVXJsOiB0aGlzLmljb25VcmwsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHRoaXMuY2FsbGJhY2tzLFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3R5bGUgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG50eXBlIE9uVXBkYXRlQ2IgPSAoaXRlcmF0aW9uczogbnVtYmVyLCBzdHlsZTogUHJvamVjdFN0eWxlKSA9PiB2b2lkO1xudHlwZSBDYiA9ICgpID0+IHZvaWQ7XG5pbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblVwZGF0ZTogT25VcGRhdGVDYixcbiAgICBvbkRlYnVnU3RhcnQ6IENiLFxuICAgIG9uTG9hZDogQ2IsXG4gICAgb25TYXZlOiBDYixcbiAgICBvbk5ldzogQ2IsXG4gICAgb25EZWJ1Z1N0ZXA6IENiLFxuICAgIG9uRGVidWdQbGF5OiBDYixcbiAgICBvbkRlYnVnU3RvcDogQ2IsXG4gICAgb25EZWJ1Z0V4aXQ6IENiLFxufTtcblxuZXhwb3J0IGNsYXNzIENvZGVCYXJWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgI2NhbGxiYWNrczogQ2FsbGJhY2tzO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTEVsZW1lbnQsIGNhbGxiYWNrczogQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lckhUTUwgPSBcIkl0ZXJhdGlvbnM6Jm5ic3A7XCI7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcIml0ZXJhdGlvbnNcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gcHJvamVjdC5pdGVyYXRpb25zLnRvRml4ZWQoKTtcbiAgICAgICAgICAgIG5vZGUubWluID0gXCIxXCI7XG4gICAgICAgICAgICBub2RlLm1heCA9IFwiMzBcIjtcbiAgICAgICAgICAgIG5vZGUub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcImZpcnN0LWNvbG9yXCI7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaW5uZXJIVE1MID0gXCJGaXJzdCBjb2xvcjombmJzcDtcIjtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiZmlyc3QtY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBwcm9qZWN0LnN0eWxlLmZpcnN0Q29sb3IgfHwgXCIjMDAwMDAwXCI7XG4gICAgICAgICAgICBub2RlLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJzZWNvbmQtY29sb3JcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lckhUTUwgPSBcIlNlY29uZCBjb2xvcjombmJzcDtcIjtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwic2Vjb25kLWNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gcHJvamVjdC5zdHlsZS5zZWNvbmRDb2xvciB8fCBcIiNGRjAwMDBcIjtcbiAgICAgICAgICAgIG5vZGUub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcImJhY2tncm91bmQtY29sb3JcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lckhUTUwgPSBcIkJhY2tyb3VuZCBjb2xvcjombmJzcDtcIjtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiYmFja2dyb3VuZC1jb2xvclwiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8IFwiI0ZGRkZGRlwiO1xuICAgICAgICAgICAgbm9kZS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwic3Ryb2tlLXNpemVcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lckhUTUwgPSBcIlN0cm9rZSBzaXplOiZuYnNwO1wiO1xuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJzdHJva2Utc2l6ZVwiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSAocHJvamVjdC5zdHlsZS5zdHJva2VTaXplIHx8IDEpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBub2RlLm1pbiA9IFwiMC41XCI7XG4gICAgICAgICAgICBub2RlLm1heCA9IFwiM1wiO1xuICAgICAgICAgICAgbm9kZS5zdGVwID0gXCIwLjI1XCI7XG4gICAgICAgICAgICBub2RlLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaGlkZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIgfSk7XG4gICAgICAgICAgICBjb25zdCBzaG93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiwgY2xhc3NlczogW1wiaGlkZGVuXCJdIH0pO1xuICAgICAgICAgICAgc2hvd05vZGUudmFsdWUgPSBcIlNIT1dcIjtcbiAgICAgICAgICAgIHNob3dOb2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgc2hvd05vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93Tm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGhpZGVOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLXBhbmVsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGhpZGVOb2RlLnZhbHVlID0gXCJISURFXCI7XG4gICAgICAgICAgICBoaWRlTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGhpZGVOb2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGlkZU5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBzaG93Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29kZS1wYW5lbFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoc2hvd05vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGhpZGVOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiIH0pO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IFwiTE9BRFwiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIG5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB0ZXh0OiBcIlNBVkUgLyBTSEFSRVwiLFxuICAgICAgICAgICAgb25jbGljazogKCkgPT4gdGhpcy4jY2FsbGJhY2tzLm9uU2F2ZSgpLFxuICAgICAgICB9KSk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIgfSk7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gXCJORVdcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBub2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uTmV3KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiIH0pO1xuICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJkZWJ1Zy1zdGFydFwiO1xuICAgICAgICAgICAgYnRuTm9kZS52YWx1ZSA9IFwiREVCVUdcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uRGVidWdTdGFydCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiwgY2xhc3NlczogW1wiaGlkZGVuXCJdIH0pO1xuICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJkZWJ1Zy1zdGVwXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJTVEVQXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgYnRuTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkRlYnVnU3RlcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiwgY2xhc3NlczogW1wiaGlkZGVuXCJdIH0pO1xuICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJkZWJ1Zy1wbGF5XCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJQTEFZXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgYnRuTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkRlYnVnUGxheSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiwgY2xhc3NlczogW1wiaGlkZGVuXCJdIH0pO1xuICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJkZWJ1Zy1zdG9wXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJTVE9QXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgYnRuTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkRlYnVnU3RvcCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgYnRuTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiwgY2xhc3NlczogW1wiaGlkZGVuXCJdIH0pO1xuICAgICAgICAgICAgYnRuTm9kZS5uYW1lID0gXCJkZWJ1Zy1leGl0XCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJFWElUXCI7XG4gICAgICAgICAgICBidG5Ob2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgYnRuTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkRlYnVnRXhpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnRuTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdHlsZSgpOiBQcm9qZWN0U3R5bGUge1xuICAgICAgICBjb25zdCBnZXRWYWx1ZSA9IChuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke25hbWV9XCJdYCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgICAgIHJldHVybiBub2RlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBub2RlLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0Q29sb3I6IGdldFZhbHVlKFwiZmlyc3QtY29sb3JcIiwgXCJibGFja1wiKSxcbiAgICAgICAgICAgIHNlY29uZENvbG9yOiBnZXRWYWx1ZShcInNlY29uZC1jb2xvclwiLCBcInJlZFwiKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0VmFsdWUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwid2hpdGVcIiksXG4gICAgICAgICAgICBzdHJva2VTaXplOiBwYXJzZUZsb2F0KGdldFZhbHVlKFwic3Ryb2tlLXNpemVcIiwgXCIxXCIpKSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlYnVnTW9kZSgpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0YXJ0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdGVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1wbGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1leGl0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgdW5zZXREZWJ1Z01vZGUoKSB7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdGFydCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RlcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctcGxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RvcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctZXhpdCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DaGFuZ2UoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIml0ZXJhdGlvbnNcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gbm9kZSA9PT0gdW5kZWZpbmVkID8gMyA6IHBhcnNlSW50KG5vZGUudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblVwZGF0ZShpdGVyYXRpb25zLCB0aGlzLmdldFN0eWxlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZElucHV0KG5hbWU6IHN0cmluZyk6IEhUTUxJbnB1dEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPScke25hbWV9J11gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuaW1wb3J0IHsgU1RBVkVTLCBTVUZGSVhFUyB9IGZyb20gJ0AvY29yZS9tYXBwaW5ncyc7XG5cblxuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uc0JhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIG9uU2VsZWN0OiAobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZykgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKHtub2RlLCBvblNlbGVjdCwgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLm9uU2VsZWN0ID0gb25TZWxlY3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBTVEFWRVMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUJhck9mRnVuY3Rpb25zTm9kZShuYW1lKSk7XG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQmFyT2ZGdW5jdGlvbnNOb2RlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJsaVwiLCBjbGFzc2VzOiBbXCJkcm9wZG93blwiXSB9KTtcbiAgICAgICAgY29uc3QgYmFzZUZ1bmNOb2RlID0gdGhpcy5jcmVhdGVBZGRGdW5jdGlvbk5vZGUoXCJzcGFuXCIsIG5hbWUpO1xuICAgICAgICBjb25zdCBiYXJOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZSA6IFwidWxcIiwgY2xhc3NlczogW1wiZHJvcGRvd24tY29udGVudFwiXSB9KTtcbiAgICAgICAgYmFyTm9kZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tY29udGVudFwiKTtcbiAgICAgICAgU1VGRklYRVMuZm9yRWFjaChzdWZmaXggPT4ge1xuICAgICAgICAgICAgYmFyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFkZEZ1bmN0aW9uTm9kZShcImxpXCIsIG5hbWUsIHN1ZmZpeCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChiYXNlRnVuY05vZGUpO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGJhck5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFkZEZ1bmN0aW9uTm9kZSh0eXBlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcgPSBcIlwiKSA6IE5vZGUge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgY29uc3QgcmVhbE5hbWUgPSBzdWZmaXggPyBgU1VGRklYXyR7c3VmZml4fWAgOiBgQ0FMTF8ke25hbWV9YDtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS8ke3JlYWxOYW1lfS5zdmcpYDtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW4tYnRuXCIpO1xuICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IG5hbWU7XG4gICAgICAgIG5vZGUuZGF0YXNldC5zdWZmaXggPSBzdWZmaXg7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBzdWZmaXh9ID0gbm9kZS5kYXRhc2V0O1xuICAgICAgICAgICAgdGhpcy5vblNlbGVjdChuYW1lLCBzdWZmaXgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBjcmVhdGVTdmcgfSBmcm9tIFwiQC9jb3JlL3N2Z1wiO1xuaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcgZXh0ZW5kcyBWaWV3IHtcblxuICAgIHJlbmRlcihjdXJzb3I6IElDdXJzb3IsIGJhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLm5vZGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yID8gYmFja2dyb3VuZENvbG9yIDogXCJub25lXCI7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcikpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi9kYXRhYmFzZVwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcblxuaW50ZXJmYWNlIENhbGxiYWNrcyB7XG4gICAgb25Mb2FkOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZFxuICAgIG9uUmVtb3ZlOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdExpc3REaWFsb2dWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgI2RiOiBEYXRhYmFzZTtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dOb2RlOiBIVE1MRWxlbWVudCwgZGI6IERhdGFiYXNlLCBjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICBzdXBlcihkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy4jZGIgPSBkYjtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2gxJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTG9hZCBwcm9qZWN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGhlYWRlck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3Byb2plY3RzJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlQm9keU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAndGJvZHknIH0pO1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ3RoZWFkJyB9KTtcblxuICAgICAgICAgICAgdGhpcy4jZGIubGlzdChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByb3dOb2RlID0gdGhpcy4jcmVuZGVyUm93KHByb2plY3QpO1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keU5vZGUuYXBwZW5kQ2hpbGQocm93Tm9kZSk7XG4gICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgIHRhYmxlSGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJIZWFkZXJSb3coKSk7XG4gICAgICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJOb2RlKTtcbiAgICAgICAgICAgIHRhYmxlTm9kZS5hcHBlbmRDaGlsZCh0YWJsZUJvZHlOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0YWJsZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY2xvc2VOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ2lucHV0JyB9KVxuICAgICAgICAgICAgY2xvc2VOb2RlLnZhbHVlID0gJ0NMT1NFJztcbiAgICAgICAgICAgIGNsb3NlTm9kZS50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgICAgICBjbG9zZU5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjbG9zZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3QtZGlhbG9nXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLiNvbkNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5zaG93TW9kYWwoKTtcbiAgICB9XG5cbiAgICAjb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgICNyZW5kZXJIZWFkZXJSb3coKTogSFRNTFRhYmxlUm93RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93SGVhZGVyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICd0cicgfSk7XG4gICAgICAgIHRhYmxlUm93SGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgIHRleHQ6ICdUaXRsZScsXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGFibGVSb3dIZWFkZXJOb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAndGgnLFxuICAgICAgICAgICAgdGV4dDogJ0NyZWF0ZWQnLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRhYmxlUm93SGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgIHRleHQ6ICdVcGRhdGVkJyxcbiAgICAgICAgfSkpO1xuICAgICAgICB0YWJsZVJvd0hlYWRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICd0aCcsXG4gICAgICAgICAgICB0ZXh0OiAnQWN0aW9ucycsXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRhYmxlUm93SGVhZGVyTm9kZTtcbiAgICB9XG5cbiAgICAjcmVuZGVyUm93KHByb2plY3Q6IFByb2plY3QpOiBIVE1MVGFibGVSb3dFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgcm93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICd0cicgfSk7XG4gICAgICAgIHJvd05vZGUuZGF0YXNldC50aXRsZSA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVSb3dOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGgnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHByb2plY3QudGl0bGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQodGl0bGVSb3dOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUm93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RkJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBwcm9qZWN0LnVwZGF0ZWQudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm93Tm9kZS5hcHBlbmRDaGlsZCh1cGRhdGVkUm93Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlZFJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZCcsXG4gICAgICAgICAgICAgICAgdGV4dDogcHJvamVjdC5jcmVhdGVkLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlZFJvd05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgbG9hZE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvYWROb2RlLnZhbHVlID0gJ0xPQUQnO1xuICAgICAgICAgICAgbG9hZE5vZGUudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgbG9hZE5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkYi5nZXQocHJvamVjdC50aXRsZSwgcHJvamVjdCA9PiB0aGlzLiNvbkxvYWQocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUudmFsdWUgPSAnUkVNT1ZFJztcbiAgICAgICAgICAgIHJlbW92ZU5vZGUudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2RiLnJlbW92ZShwcm9qZWN0LnRpdGxlLCAoKSA9PiB0aGlzLiNvblJlbW92ZShwcm9qZWN0KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYWN0aW9uUm93Tm9kZS5hcHBlbmRDaGlsZChsb2FkTm9kZSk7XG4gICAgICAgICAgICBhY3Rpb25Sb3dOb2RlLmFwcGVuZENoaWxkKHJlbW92ZU5vZGUpO1xuICAgICAgICAgICAgcm93Tm9kZS5hcHBlbmRDaGlsZChhY3Rpb25Sb3dOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3dOb2RlO1xuICAgIH1cblxuICAgICNvbkxvYWQocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25Mb2FkKHByb2plY3QpO1xuICAgICAgICAodGhpcy5ub2RlIGFzIEhUTUxEaWFsb2dFbGVtZW50KS5jbG9zZSgpO1xuICAgIH1cblxuICAgICNvblJlbW92ZShwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYC5wcm9qZWN0cyA+IHRib2R5ID4gdHJbZGF0YS10aXRsZT1cIiR7cHJvamVjdC50aXRsZX1cIl1gO1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICAgICAgICBpZiAobm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblJlbW92ZShwcm9qZWN0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiQC93ZWIvZGF0YWJhc2VcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBlbmNvZGVQcm9qZWN0VG9VcmxQYXJhbXMgfSBmcm9tIFwiQC93ZWIvdXJsUGFyYW1zXCI7XG5cbmltcG9ydCB7IHRvQ2FudmFzIH0gZnJvbSBcInFyY29kZVwiO1xuXG5pbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblNhdmU6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlRGlhbG9nVmlldyBleHRlbmRzIFZpZXc8SFRNTERpYWxvZ0VsZW1lbnQ+IHtcbiAgICAjZGI6IERhdGFiYXNlO1xuICAgICNjYWxsYmFja3M6IENhbGxiYWNrcztcbiAgICAjcHJvamVjdDogUHJvamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKGRpYWxvZ05vZGU6IEhUTUxEaWFsb2dFbGVtZW50LCBkYjogRGF0YWJhc2UsIHByb2plY3Q6IFByb2plY3QsIGNhbGxiYWNrczogQ2FsbGJhY2tzKSB7XG4gICAgICAgIHN1cGVyKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLiNkYiA9IGRiO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuI3Byb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuI3JlbmRlclNhdmVTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ2hyJyB9KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJTaGFyZVNlY3Rpb24oKSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAnaHInIH0pKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuI3JlbmRlckZvb3RlcigpKTtcblxuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInNhdmUtZGlhbG9nXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLiNvbkNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vZGUuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgI3JlbmRlclNhdmVTZWN0aW9uKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaDInLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdTYXZlIHByb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGl0bGU6ICcsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuI3Byb2plY3QudGl0bGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpdGxlTm9kZS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhclRpdGxlID0gdGl0bGUucmVwbGFjZSgvW19cXHNdKy8sICcgJykudHJpbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QudGl0bGUgPSBjbGVhclRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QuaWQgPSBjbGVhclRpdGxlO1xuICAgICAgICAgICAgICAgIHRpdGxlTm9kZS52YWx1ZSA9IGNsZWFyVGl0bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aXRsZU5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgdGV4dDogJ1NBVkUnLFxuICAgICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3QudXBkYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jZGIudXBkYXRlKHRoaXMuI3Byb2plY3QsIChwcm9qZWN0OiBQcm9qZWN0KSA9PiB0aGlzLiNvblNhdmUocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgICNyZW5kZXJTaGFyZVNlY3Rpb24oKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICBjb25zdCBzaGFyZUxpbmsgPSB0aGlzLiNjcmVhdGVTaGFyZUxpbmsoKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoMicsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1NoYXJlIHByb2plY3QnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdMaW5rIHRvIHNoYXJlOiAnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IFxuICAgICAgICAgICAgbmFtZTogJ2lucHV0JywgXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICB0ZXh0OiBzaGFyZUxpbmssXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJiclwiIH0pKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IFxuICAgICAgICAgICAgbmFtZTogJ2lucHV0JywgXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdDb3B5IHRvIGNsaXBib2FyZCcsXG4gICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2hhcmVMaW5rKSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoMycsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+KApiBvciBjb3B5IFFSIGNvZGUnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJjYW52YXNcIn0pO1xuICAgICAgICAgICAgdG9DYW52YXMoY2FudmFzTm9kZSwgc2hhcmVMaW5rKTtcbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2FudmFzTm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAjcmVuZGVyRm9vdGVyKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdkaXYnIH0pO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdDTE9TRScsXG4gICAgICAgICAgICAgICAgb25jbGljazogKCkgPT4gdGhpcy5ub2RlLmNsb3NlKCksXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgICNvbkNsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgI29uU2F2ZShwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vblNhdmUocHJvamVjdCk7XG4gICAgICAgIHRoaXMubm9kZS5jbG9zZSgpO1xuICAgIH1cblxuICAgICNjcmVhdGVTaGFyZUxpbmsoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7bG9jYXRpb24ucGF0aG5hbWV9YDtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gZW5jb2RlUHJvamVjdFRvVXJsUGFyYW1zKHRoaXMuI3Byb2plY3QpO1xuICAgICAgICByZXR1cm4gYCR7cGF0aH0/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG5pbXBvcnQgeyBUb2tlbnNTdGF2ZVZpZXcgfSBmcm9tICcuL3N0YXZlVG9rZW4nO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFN0YXZlVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgdG9rZW5WaWV3OiBUb2tlbnNTdGF2ZVZpZXdcbiAgICBwcml2YXRlIHRva2Vuc05vZGU6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcihub2RlKTtcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgICAgIHRoaXMudG9rZW5zTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3ID0gbmV3IFRva2Vuc1N0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlOiB0aGlzLnRva2Vuc05vZGUsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VmZml4LFxuICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInN0YXZlXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICB0aGlzLm5vZGUuZGF0YXNldC5zdWZmaXggPSB0aGlzLnN1ZmZpeDtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlTmFtZSh0aGlzLm5hbWUsIHRoaXMuc3VmZml4KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLnRva2Vuc05vZGUpO1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBjaGVja05hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID09PSBuYW1lICYmIHRoaXMuc3VmZml4ID09PSBzdWZmaXg7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBzaG93T3JIaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5BZnRlcih0b2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlcGxhY2VUb2tlbihuZXdUb2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlcGxhY2VUb2tlbihuZXdUb2tlbiwgaW5kZXgpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlVG9rZW4oaW5kZXgpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbk9uQmFjayh0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnB1c2hUb2tlbk9uQmFjayh0b2tlbik7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuT25CYWNrKCk7XG4gICAgfVxuXG4gICAgY291bGRCZVNjcmFwZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGlzSGlkZSA9IHRoaXMubm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpO1xuICAgICAgICByZXR1cm4gIWlzSGlkZTtcbiAgICB9XG5cbiAgICBzY3JhcGUoKTogU3RhdmUge1xuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VuVmlldy5zY3JhcGVUb2tlbnMoKTtcbiAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSB0aGlzLm5vZGUuZGF0YXNldDtcbiAgICAgICAgcmV0dXJuIHtuYW1lLCBzdWZmaXgsIHRva2Vuc307XG4gICAgfVxuXG4gICAgYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LmFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWcsIGFjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZywgYWN0aW9uSW5kZXgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4Pzogc3RyaW5nKTogRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgICAgICAgY29uc3QgcmVhbG5hbWUgPSBzdWZmaXggPyBgJHtuYW1lfV8ke3N1ZmZpeH1gIDogbmFtZTtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS9DQUxMXyR7cmVhbG5hbWV9LnN2ZylgO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBUb2tlbnNWaWV3IH0gZnJvbSAnLi90b2tlbic7XG5cbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5zU3RhdmVWaWV3IGV4dGVuZHMgVG9rZW5zVmlldyB7XG4gICAgcHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3VmZml4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG5vZGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN1ZmZpeCxcbiAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgfSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgaWNvblVybCxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwidG9rZW5zXCIpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyVG9rZW5zKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoMCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3Rpb25JbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zLmZvckVhY2goKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbkluZGV4ID0gdGhpcy5wdXNoVG9rZW5Ob2RlT25CYWNrKHRoaXMubm9kZSwgdG9rZW4sIGluZGV4LCBhY3Rpb25JbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuQWZ0ZXIodG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDAsIHRva2VuKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZXBsYWNlVG9rZW4obmV3VG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vuc1tpbmRleF0gPSBuZXdUb2tlbjtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcHVzaFRva2VuT25CYWNrKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW5PbkJhY2soKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnBvcCgpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFRva2VuTm9kZU9uQmFjayh0b2tlbnNOb2RlOiBIVE1MRWxlbWVudCwgdG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlciwgYWN0aW9uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGFwcGVuZFNwYW4gPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleCArIHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcHBlbmRDaGlsZCA9IChjb250YWluZXI6IEhUTUxFbGVtZW50LCBub2RlOiBIVE1MRWxlbWVudCwgcyA9IDEpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4oY29udGFpbmVyLCBzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b2tlbk5vZGUgPSB0aGlzLmNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuLCBpbmRleCwgYWN0aW9uSW5kZXgpO1xuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0b2tlbnNOb2RlLmxhc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgLy8gcHJvYmFibHkgaXQncyBhIHNwYW4sIGZpbmQgcHJldmlvdXMgbm9kZVxuICAgICAgICAgICAgbGFzdE5vZGUgPSBsYXN0Tm9kZS5wcmV2aW91c1NpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0dyb3VwID0gKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXRva2VuLWdyb3VwXCIpO1xuICAgICAgICBjb25zdCBpc0FjdGlvbiA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5kYXRhc2V0Py50eXBlID09PSBcImFjdGlvblwiO1xuXG4gICAgICAgIGlmICghbGFzdE5vZGUpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXggKyAoaXNBY3Rpb24odG9rZW5Ob2RlKSA/IDEgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FjdGlvbih0b2tlbk5vZGUpKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4ICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0dyb3VwKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChsYXN0Tm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNBY3Rpb24obGFzdE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBncm91cCB3aXRoIGFjdGlvbiBhbmQgdmFsdWUuXG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSB0aGlzLmNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vuc05vZGUucmVtb3ZlQ2hpbGQobGFzdE5vZGUpO1xuICAgICAgICAgICAgdG9rZW5zTm9kZS5pbnNlcnRCZWZvcmUoZ3JvdXBOb2RlLCBsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBncm91cE5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGxhc3ROb2RlLmRhdGFzZXQuYWN0aW9uSW5kZXg7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIGxhc3ROb2RlLCAwKTtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGdyb3VwTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIGFwcGVuZFNwYW4odG9rZW5zTm9kZSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVuaGFuY2VkVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFjdGlvbkluZGV4OiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZVRva2VuTm9kZSh0b2tlbik7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIGlmIChub2RlLmRhdGFzZXQ/LnR5cGUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YXNldC5hY3Rpb25JbmRleCA9IGAke2FjdGlvbkluZGV4fWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBkcmFnTm9kZSA9IHN1cGVyLmNyZWF0ZURyYWdOb2RlKG5vZGUpO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LmluZGV4ID0gbm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0Lm5hbWUgPSBub2RlLmRhdGFzZXQubmFtZTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5zdWZmaXggPSBub2RlLmRhdGFzZXQuc3VmZml4O1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVtcHR5VG9rZW5Hcm91cCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiBcImRpdlwiLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tZ3JvdXBcIl0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNjcmFwZVRva2VucygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5TcGFuTm9kZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogW1wiZnJhY3QtdG9rZW4tc3BhblwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuZGF0YXNldC5pbmRleCA9IGAke2luZGV4fWA7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVUb2tlblJlbW92ZVNwYW5Ob2RlKCkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImZyYWN0LXRva2VuLXNwYW5cIiwgXCJyZW1vdmVcIik7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn07XG5cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvbkRyb3A6IChkOiBIVE1MRWxlbWVudCwgbzogSFRNTEVsZW1lbnQpID0+IHZvaWQgfCBudWxsO1xuICAgIG9uTW92ZTogKGQ6IEhUTUxFbGVtZW50LCBvOiBIVE1MRWxlbWVudCB8IG51bGwsIG46IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZCB8IG51bGw7XG4gICAgb25EcmFnVGltZW91dDogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBib29sZWFuO1xuICAgIGNhbkRyYWc6ICgpID0+IGJvb2xlYW4gfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVG9rZW5zVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHJlYWRvbmx5IGljb25Vcmw6IHN0cmluZztcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3NcblxuICAgIGNvbnN0cnVjdG9yKHsgbm9kZSwgY2FsbGJhY2tzLCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTCB9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrc1xuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICBnZXQgaXNEcmFnZ2FibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjYWxsYmFja3Mub25Ecm9wICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnOiBzdHJpbmcsIGFjdGlvbkluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5maW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleCkuY2xhc3NMaXN0LmFkZChmbGFnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXgpLmNsYXNzTGlzdC5yZW1vdmUoZmxhZyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kVG9rZW5Ob2RlQnlBY3Rpb25JbmRleChhY3Rpb25JbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAqW2RhdGEtYWN0aW9uLWluZGV4PScke2FjdGlvbkluZGV4fSddYDtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5Ob2RlKHRva2VuOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRva2VuSW5mbyA9IE5BTUVfVE9fVE9LRU4uZ2V0KHRva2VuKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2ZyYWN0LXRva2VuJ10sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnR5cGUgPSB0b2tlbkluZm8gPyB0b2tlbkluZm8udHlwZSA6IFwidW5rbm93blwiO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9LyR7dG9rZW59LnN2ZylgO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRUb2tlbkV2ZW50cyhub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRHJhZ05vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGRyYWdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKCdmcmFjdC10b2tlbicsICdtb3ZlJyk7XG4gICAgICAgIGRyYWdOb2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlO1xuICAgICAgICBkcmFnTm9kZS5kYXRhc2V0LnRva2VuID0gbm9kZS5kYXRhc2V0LnRva2VuO1xuICAgICAgICByZXR1cm4gZHJhZ05vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbkV2ZW50cyhub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWdNb3VzZVN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGRyYWdUb3VjaFN0YXJ0LCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy4jY2FsbGJhY2tzO1xuICAgICAgICBjb25zdCBjYW5EcmFnID0gKCkgPT4gY2FsbGJhY2tzLmNhbkRyYWcgJiYgIWNhbGxiYWNrcy5jYW5EcmFnKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dCA9IChjb29yZHNDYikgPT5cbiAgICAgICAgICAgIG5ldyBEcmFnQ29udGV4dChcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmNyZWF0ZURyYWdOb2RlKG5vZGUpLCBcbiAgICAgICAgICAgICAgICAoKSA9PiBjYWxsYmFja3Mub25EcmFnVGltZW91dCAhPT0gbnVsbCA/IGNhbGxiYWNrcy5vbkRyYWdUaW1lb3V0KG5vZGUpIDogZmFsc2UsIFxuICAgICAgICAgICAgICAgIGNvb3Jkc0NiLCBcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdNb3VzZVN0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuYnV0dG9uICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldE1vdXNlQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIG1vdXNldXA6IGNvbnRleHQuY3JlYXRlRHJhZ1N0b3AoKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGV4dC51cGRhdGUoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ1RvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MuY2FuRHJhZyAmJiAhY2FsbGJhY2tzLmNhbkRyYWcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGdldFRvdWNoQ29vcmRzKTtcbiAgICAgICAgICAgIGNvbnRleHQuaW5pdChldmVudCwge1xuICAgICAgICAgICAgICAgIHRvdWNobW92ZTogY29udGV4dC5jcmVhdGVEcmFnTW92ZSgpLFxuICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBjb250ZXh0LmNyZWF0ZURyYWdTdG9wKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE1vdXNlQ29vcmRzKGV2ZW50OiBNb3VzZUV2ZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VG91Y2hDb29yZHMoZXZlbnQ6IFRvdWNoRXZlbnQpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgICAgIHJldHVybiBbZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLCBldmVudC50b3VjaGVzWzBdLmNsaWVudFldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmNsYXNzIERyYWdDb250ZXh0PEV2ZW50VHlwZSBleHRlbmRzIEV2ZW50PiB7XG4gICAgcHJpdmF0ZSBkcmFnTm9kZTogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHByaXZhdGUgb3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIGluaXRpYWxDb29yZHM6IFtudW1iZXIsIG51bWJlcl0gfCBudWxsO1xuICAgIHByaXZhdGUgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfTtcbiAgICBwcml2YXRlIF9nZXRDb29yZHM6IChldmVudDogRXZlbnRUeXBlKSA9PiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHByaXZhdGUgY2FsbGJhY2tzOiBDYWxsYmFja3M7XG4gICAgcHJpdmF0ZSBjcmVhdGVEcmFnTm9kZTogKCkgPT4gSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgY3JlYXRlRHJhZ05vZGU6ICgpID0+IEhUTUxFbGVtZW50LFxuICAgICAgICBvblRpbWVvdXQ6ICgpID0+IGJvb2xlYW4sXG4gICAgICAgIGdldENvb3JkczogKGV2ZW50OiBFdmVudFR5cGUpID0+IFtudW1iZXIsIG51bWJlcl0sXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWF0ZURyYWdOb2RlID0gY3JlYXRlRHJhZ05vZGU7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrcyA9IHt9O1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICAgICAgdGhpcy5fZ2V0Q29vcmRzID0gZ2V0Q29vcmRzO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmKG9uVGltZW91dCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGNyZWF0ZURyYWdNb3ZlKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURyYWdTdG9wKCkge1xuICAgICAgICByZXR1cm4gKGV2ZW50OiBFdmVudFR5cGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Ecm9wKHRoaXMuZHJhZ05vZGUsIHRoaXMub3Zlck5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZXZlbnQ6IEV2ZW50VHlwZSwgZXZlbnRDYWxsYmFja3M6IHsgW2s6IHN0cmluZ106IChlOiBFdmVudFR5cGUpID0+IHZvaWQgfSkge1xuICAgICAgICB0aGlzLmluaXRpYWxDb29yZHMgPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLmV2ZW50Q2FsbGJhY2tzID0gZXZlbnRDYWxsYmFja3NcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudENhbGxiYWNrcykuZm9yRWFjaCgoW25hbWUsIGNiXSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdOb2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uTW92ZSh0aGlzLmRyYWdOb2RlLCB0aGlzLm92ZXJOb2RlLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50Q2FsbGJhY2tzKS5mb3JFYWNoKChbbmFtZSwgY2JdKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNiLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZXZlbnQ6IEV2ZW50VHlwZSkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuY29tcHV0ZXJEaXN0YW5jZVRvSW5pdGlhbENvb3JkcyhldmVudCk7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPiA1KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnTm9kZSA9IHRoaXMuY3JlYXRlRHJhZ05vZGUoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZHJhZ05vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3Jkcyh4LCB5KTtcbiAgICAgICAgY29uc3Qgb2xkT3Zlck5vZGUgPSB0aGlzLm92ZXJOb2RlO1xuICAgICAgICBjb25zdCBuZXdPdmVyTm9kZSA9IHRoaXMuZmluZE92ZXJOb2RlKCk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrcy5vbk1vdmUgJiYgIU9iamVjdC5pcyhvbGRPdmVyTm9kZSwgbmV3T3Zlck5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbk1vdmUodGhpcy5kcmFnTm9kZSwgb2xkT3Zlck5vZGUsIG5ld092ZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJOb2RlID0gbmV3T3Zlck5vZGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlckRpc3RhbmNlVG9Jbml0aWFsQ29vcmRzKGV2ZW50OiBFdmVudFR5cGUpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBkeCA9IHRoaXMuaW5pdGlhbENvb3Jkc1swXSAtIHg7XG4gICAgICAgIGNvbnN0IGR5ID0gdGhpcy5pbml0aWFsQ29vcmRzWzFdIC0geTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVDb29yZHMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnTm9kZS5zdHlsZS5sZWZ0ID0gYCR7eC50b0ZpeGVkKCl9cHhgO1xuICAgICAgICB0aGlzLmRyYWdOb2RlLnN0eWxlLnRvcCA9IGAke3kudG9GaXhlZCgpfXB4YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRPdmVyTm9kZSgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCBjb2RlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29kZVwiKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5nZXRXYWxrZXJGaWx0ZXIoKTtcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihjb2RlTm9kZSwgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsIGZpbHRlcik7XG4gICAgICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB3YWxrZXIuY3VycmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXYWxrZXJGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IFZBTElEX0NMQVNTRVMgPSBbJ2ZyYWN0LXRva2VuLXNwYW4nLCAnZnJhY3Qtc3RhdmVzJywgJ3Rva2VucyddO1xuICAgICAgICBjb25zdCBkcmFnUmVjdCA9IHRoaXMuZHJhZ05vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgICAgIGlmIChkcmFnUmVjdC5yaWdodCA8IHJlY3QubGVmdFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5sZWZ0ID4gcmVjdC5yaWdodFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC5ib3R0b20gPCByZWN0LnRvcFxuICAgICAgICAgICAgICAgICAgICB8fCBkcmFnUmVjdC50b3AgPiByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfUkVKRUNUO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghVkFMSURfQ0xBU1NFUy5zb21lKGMgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoYykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9TS0lQO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb29yZHMoZXZlbnQ6IEV2ZW50VHlwZSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLl9nZXRDb29yZHMoZXZlbnQpO1xuICAgICAgICBjb25zdCBueCA9IHggLSB0aGlzLmRyYWdOb2RlLmNsaWVudFdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbnkgPSB5IC0gdGhpcy5kcmFnTm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHJldHVybiBbbngsIG55XTtcbiAgICB9XG5cbn07IiwiZXhwb3J0IGNsYXNzIFZpZXc8SFRNTFR5cGUgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PiB7XG4gICAgcHJvdGVjdGVkIG5vZGU6IEhUTUxUeXBlO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTFR5cGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbGVtZW50PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KHBhcmFtczoge1xuICAgICAgICBuYW1lOiBLO1xuICAgICAgICBjbGFzc2VzPzogc3RyaW5nW107XG4gICAgICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgICAgIG9uY2xpY2s/OiAoTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgICAgICAgcmVhZG9ubHk/OiBib29sZWFuO1xuICAgIH0pOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMubmFtZSk7XG4gICAgICAgIGlmIChwYXJhbXMuY2xhc3Nlcykge1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnBhcmFtcy5jbGFzc2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMub25jbGljaykge1xuICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5vbmNsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS50eXBlID0gcGFyYW1zLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnZhbHVlID0gcGFyYW1zLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW1zLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZWFkT25seSA9IHBhcmFtcy5yZWFkb25seTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL21haW5cIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQgeyBjcmVhdGVFbXB0eVByb2plY3QgfSBmcm9tIFwiLi9tb2RlbHNcIlxuXG5pbXBvcnQgXCJAL3N0eWxlL21haW4uc2Nzc1wiO1xuaW1wb3J0IHsgZGVjb2RlUHJvamVjdEZyb21VcmxQYXJhbXMgfSBmcm9tIFwiLi91cmxQYXJhbXNcIjtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBkYXRhYmFzZSA9IG5ldyBEYXRhYmFzZSgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICBpZiAocGFyYW1zLmdldChcInpcIikgPT09IFwielwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkZWNvZGVQcm9qZWN0RnJvbVVybFBhcmFtcyhwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKGRhdGFiYXNlLCBwcm9qZWN0KTtcbiAgICAgICAgY29udHJvbGxlci5yZW5kZXIoKTtcblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFiYXNlLmdldChcIl9fdGVtcF9fXCIsIHByb2plY3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcihkYXRhYmFzZSwgcHJvamVjdCB8fCBjcmVhdGVFbXB0eVByb2plY3QoKSk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbmRlcigpO1xuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IE1haW5Db250cm9sbGVyKGRhdGFiYXNlLCBjcmVhdGVFbXB0eVByb2plY3QoKSk7XG4gICAgICAgICAgICBjb250cm9sbGVyLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==