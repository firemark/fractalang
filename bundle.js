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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes showtime {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
.fract-tokens {
  user-select: none;
  display: flex;
  font-variant: small-caps;
  border: 2px #AAA solid;
  border-radius: 5px;
  background-color: #EEE;
  gap: 5px;
}
.fract-tokens.hide .fract-token, .fract-tokens.hide .label {
  display: none;
}
.fract-tokens > .group-label {
  display: inline;
  font-size: 1.4rem;
  cursor: pointer;
}
.fract-tokens > .label {
  font-size: 1.1rem;
  text-align: center;
}

.fract-token {
  padding: 5px;
  border: 2px #888 solid;
  color: #333;
  border-radius: 5px;
  background-color: #CCC;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  transition: background-color 300ms;
  cursor: pointer;
}
.fract-token.token-inline {
  width: 25px;
  height: 25px;
  border-width: 1px;
  border-radius: 3px;
  padding: 1px;
}
.fract-token.debug {
  background-color: #90e0ff;
  border-color: #0d426d;
}
.fract-token.move {
  background-color: rgba(204, 204, 204, 0.4666666667);
  position: absolute;
  animation-name: showtime;
  animation-duration: 500ms;
}
.fract-token.move.valid-drop {
  background-color: rgba(123, 218, 123, 0.4666666667);
  border-color: #228B22;
}
.fract-token.move.valid-drop::before {
  content: "DROP";
}
.fract-token.move.remove-drop {
  background-color: rgba(201, 0, 0, 0.4666666667);
  border-color: #8b2222;
}
.fract-token.move.remove-drop::before {
  content: "REMOVE";
}
.fract-token.move::before {
  display: inline-block;
  font-size: 10pt;
  width: 100%;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  position: relative;
  top: -16pt;
}

.fract-token-group {
  margin-right: 3px;
  display: flex;
  align-items: center;
  border: 2px #888 solid;
  color: #333;
  border-radius: 5px;
  background-color: #CCC;
}
.fract-token-group > * {
  flex: 0 0 auto;
  border: none;
  border-radius: 0px;
}
.fract-token-group > *:not(:first-child).fract-token {
  border-left: 2px #888 dotted;
}
.fract-token-group > .fract-token-span {
  padding: 2px;
}
.fract-token-group.debug {
  background-color: #90e0ff;
  border-color: #0d426d;
}
.fract-token-group.debug > .fract-token {
  background-color: #90e0ff;
  border-color: #0d426d;
}

.fract-token-span {
  padding: 5px;
  width: 0px;
  height: 50px;
  transition: width 300ms;
}
.fract-token-span.over {
  background-color: #DDD;
  border: 2px #999 dotted;
  border-radius: 5px;
  font-weight: bold;
  width: 50px;
}
.fract-token-span.over::before {
  font-size: 24pt;
  content: "+";
}

.fract-functions-list {
  margin: 0;
  display: flex;
}
.fract-functions-list > li {
  display: inline;
}
.fract-functions-list .token-btn {
  display: block;
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
.fract-functions-list .token-btn:hover {
  background-color: #DDD;
}
.fract-functions-list .dropdown {
  position: relative;
}
.fract-functions-list .dropdown .dropdown-content {
  display: none;
  position: absolute;
  background-color: #FFF;
  border: 2px #AAA solid;
  border-radius: 5px;
  z-index: 1;
  padding: 0;
}
.fract-functions-list .dropdown:hover .dropdown-content {
  display: block;
}

.fract-staves {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-x: hidden;
}
.fract-staves > li {
  flex: 0 1 auto;
  display: flex;
}
.fract-staves > li > .name {
  flex: 0 1 50px;
  font-size: 15pt;
  align-self: center;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.fract-staves > li > .tokens {
  flex: 1 1 auto;
  padding: 5px 0;
  display: flex;
  width: 0;
  border: 2px #AAA solid;
  border-radius: 5px;
  background-color: #EEE;
  overflow-x: scroll;
  overflow-y: hidden;
}
.fract-staves > li > .tokens > * {
  flex: 0 0 auto;
}
.fract-staves > li.hide {
  display: none;
}

body {
  font-family: Sans-Serif;
  font-size: 10pt;
  overflow: hidden;
}

main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100vw;
  height: calc(100vh - 15px);
}

.fract-image {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#editor {
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto;
  width: 95%;
}

#editor > nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#code-bar {
  margin-left: 30px;
}
#code-bar label, #code-bar input {
  margin-right: 5px;
}

#code-panel {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 45vh;
}

.fract-token-categories {
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  align-items: stretch;
  gap: 10px;
  width: 200px;
}
.fract-token-categories > .fract-tokens {
  flex-direction: column;
  align-items: center;
}

.mobile-warning {
  display: block;
  color: red;
}

@media screen and (min-width: 1000px) {
  .mobile-warning {
    display: none;
  }
}
.hidden {
  display: none !important;
}

dialog {
  border-radius: 5px;
  border: 2px #888 solid;
  padding: 1.6rem;
  max-width: 500px;
}

.choose-token-dialog {
  display: flex;
  flex-direction: row;
  align-items: start;
}
.choose-token-dialog .category {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.choose-token-dialog .category > .label {
  text-align: center;
  font-variant: small-caps;
  font-size: 1.4rem;
}
.choose-token-dialog .category ~ .category {
  border-left: 1px #888 dotted;
  margin-left: 0.75em;
  padding-left: 0.75em;
}
.choose-token-dialog .dialog-token {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0.5em 0;
}`, "",{"version":3,"sources":["webpack://./src/style/tokens.scss","webpack://./src/style/main.scss","webpack://./src/style/code.scss"],"names":[],"mappings":"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","sourcesContent":["@keyframes showtime {\n    from { opacity: 0%; }\n    to { opacity: 100%; }\n}\n\n.fract-tokens {\n    user-select: none;\n    display: flex;\n    font-variant: small-caps;\n    border: 2px #AAA solid;\n    border-radius: 5px;\n    background-color: #EEE;\n    gap: 5px;\n\n    &.hide {\n        .fract-token, .label {\n            display: none;\n        }\n    }\n\n    > .group-label {\n        display: inline;\n        font-size: 1.4rem;\n        cursor: pointer;\n    }\n\n    > .label {\n        font-size: 1.1rem;\n        text-align: center;\n    }\n}\n\n.fract-token {\n    padding: 5px;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    vertical-align: middle;\n    transition: background-color 300ms;\n    cursor: pointer;\n\n    &.token-inline {\n        width: 25px;\n        height: 25px;\n        border-width: 1px;\n        border-radius: 3px;\n        padding: 1px;\n    }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n    }\n\n    &.move {\n        background-color: #CCCCCC77;\n        position: absolute;\n        animation-name: showtime;\n        animation-duration: 500ms;\n\n        &.valid-drop {\n            background-color: #7bda7b77;\n            border-color: #228B22;\n            &::before { content: \"DROP\"; }\n        }\n\n        &.remove-drop {\n            background-color: #c9000077;\n            border-color: #8b2222;\n            &::before { content: \"REMOVE\"; }\n        }\n\n        &::before {\n            display: inline-block;\n            font-size: 10pt;\n            width: 100%;\n            text-align: center;\n            font-style: italic;\n            font-weight: bold;\n            position: relative;\n            top: -16pt;\n        }\n    }\n}\n\n.fract-token-group {\n    margin-right: 3px;\n    display: flex;\n    align-items: center;\n    border: 2px #888 solid;\n    color: #333;\n    border-radius: 5px;\n    background-color: #CCC;\n    > * { flex: 0 0 auto; border: none; border-radius: 0px; }\n    > *:not(:first-child).fract-token { border-left: 2px #888 dotted; }\n    > .fract-token-span { padding: 2px; }\n\n    &.debug {\n        background-color: #90e0ff;\n        border-color: #0d426d;\n        & > .fract-token {\n            background-color: #90e0ff;\n            border-color: #0d426d;\n        }\n    }\n}\n\n.fract-token-span {\n    padding: 5px;\n    width: 0px;\n    height: 50px;\n    transition: width 300ms;\n\n    &.over {\n        background-color: #DDD;\n        border: 2px #999 dotted;\n        border-radius: 5px;\n        font-weight: bold;\n        width: 50px;\n\n        &::before {\n            font-size: 24pt;\n            content: \"+\";\n        }\n    }\n}\n","@import './tokens';\n@import './code';\n\nbody {\n    font-family: Sans-Serif;\n    font-size: 10pt;\n    overflow: hidden;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex-wrap: wrap;\n    width: 100vw;\n    height: calc(100vh - 15px);\n}\n\n.fract-image {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#editor {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    margin: auto;\n    width: 95%;\n}\n\n#editor > nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\n#code-bar {\n    margin-left: 30px;\n    label, input { margin-right: 5px; }\n}\n\n#code-panel {\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n    height: 45vh;\n}\n\n.fract-token-categories {\n    flex: 0 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: scroll;\n    align-items: stretch;\n    gap: 10px;\n    width: 200px;\n\n    > .fract-tokens {\n        flex-direction: column;\n        align-items: center;\n    }\n}\n\n.mobile-warning {\n    display: block;\n    color: red;\n}\n\n@media screen and (min-width: 1000px) {\n    .mobile-warning {\n        display: none;\n    }\n}\n\n.hidden {\n    display: none !important;\n}\n\ndialog {\n  border-radius: 5px;\n  border: 2px #888 solid;\n  padding: 1.6rem;\n  max-width: 500px;\n}\n\n.choose-token-dialog {\n    display: flex;\n    flex-direction: row;\n    align-items: start;\n\n    .category {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        > .label {\n            text-align: center;\n            font-variant: small-caps;\n            font-size: 1.4rem;\n        }\n\n        ~ .category {\n            border-left: 1px #888 dotted;\n            margin-left: 0.75em;\n            padding-left: 0.75em;\n        }\n    }\n\n    .dialog-token {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        margin: 0.5em 0;\n    }\n}",".fract-functions-list {\n    margin: 0;\n    display: flex;\n\n    > li {\n        display: inline;\n    }\n\n    .token-btn {\n        display: block;\n        width: 30px;\n        height: 30px;\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        cursor: pointer;\n\n        &:hover {\n            background-color: #DDD;\n        }\n    }\n\n    .dropdown {\n        position: relative;\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #FFF;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            z-index: 1;\n            padding: 0;\n        }\n\n        &:hover {\n            .dropdown-content {\n                display: block;\n            }\n        }\n    }\n}\n\n.fract-staves {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-x: hidden;\n\n    > li {\n        flex: 0 1 auto;\n        display: flex;\n\n        > .name {\n            flex: 0 1 50px;\n            font-size: 15pt;\n            align-self: center;\n            height: 100%;\n            background-size: contain;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n\n        > .tokens  {\n            flex: 1 1 auto;\n            padding: 5px 0;\n            display: flex;\n            width: 0;\n            border: 2px #AAA solid;\n            border-radius: 5px;\n            background-color: #EEE;\n            overflow-x: scroll;\n            overflow-y: hidden;\n\n            > * { flex: 0 0 auto; }\n        }\n\n        &.hide {\n            display: none;\n        }\n    }\n}\n"],"sourceRoot":""}]);
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
    // Cursor flip
    FLIP_V: "R2",
    FLIP_H: "R3",
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
        {
            label: 'Flip',
            tokens: ['FLIP_V', 'FLIP_H'],
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
            'FLIP_V',
            'FLIP_H',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0SkFBNEosS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFFBQVEsTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFV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QUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxLQUFLLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFXLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxD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LENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLHVEQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1REFBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxTQUFTLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksdURBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsU0FBUztJQUNULFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLFNBQVMsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxtREFBSyxDQUFDLEVBQUUsQ0FBQyxD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QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDBEQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxD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QUFDO0lBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFckQsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUMzRCxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQzNELEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFFM0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUVsRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDdEQsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUUxRCxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN0RSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNyRSxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUVyRSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQzdELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDL0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUN2RCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO0lBQ3pELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFB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QUFHLEVBQUU7WUFDSixNQUFNLFVBQVUsR0FBRyxJQUFJLDZEQUFjLENBQUMsUUFBUSxFQUFFLDJEQUFrQixFQUFFLENBQUMsQ0FBQztZQUN0RSxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9kaWprc3RyYWpzL2RpamtzdHJhLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9lbmNvZGUtdXRmOC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2Nhbi1wcm9taXNlLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYWxpZ25tZW50LXBhdHRlcm4uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9hbHBoYW51bWVyaWMtZGF0YS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2JpdC1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9iaXQtbWF0cml4LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYnl0ZS1kYXRhLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZXJyb3ItY29ycmVjdGlvbi1jb2RlLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZXJyb3ItY29ycmVjdGlvbi1sZXZlbC5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2ZpbmRlci1wYXR0ZXJuLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvZm9ybWF0LWluZm8uanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9nYWxvaXMtZmllbGQuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9rYW5qaS1kYXRhLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbWFzay1wYXR0ZXJuLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvbW9kZS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL251bWVyaWMtZGF0YS5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3BvbHlub21pYWwuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9xcmNvZGUuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9yZWVkLXNvbG9tb24tZW5jb2Rlci5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3JlZ2V4LmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS91dGlscy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3ZlcnNpb24tY2hlY2suanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS92ZXJzaW9uLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL3JlbmRlcmVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9yZW5kZXJlci9zdmctdGFnLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL3JlbmRlcmVyL3V0aWxzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9zdHlsZS9tYWluLnNjc3M/YTIyMSIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2FzdC9hY3Rpb25SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L2Jhc2UudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L2NvbG9ycy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvYXN0L29wcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3Qvc3Ryb2tlcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9hc3QvdmFsdWVzLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2NvbnRleHQudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvY29udGV4dFN0ZXBwZXIudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvY3Vyc29yLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL2V4ZWMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvZmlndXJlcy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9mdW5jdGlvbnNCYWcudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvbWFwcGluZ3MudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL2NvcmUvcGFyc2VyLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL3Nob3J0Y3V0cy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS9zdGVwLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy9jb3JlL3N2Zy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvY29yZS90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9jb25zdHMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9jb250cm9sbGVycy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvY29udHJvbGxlcnMvZGVidWcudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9jb250cm9sbGVycy9tYWluLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvZGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9kYXRhYmFzZUluaXQudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi9tb2RlbHMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi90b2tlbnNGYW1pbHkudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi90b2tlbnNNZW51LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdXJsUGFyYW1zLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvY2F0ZWdvcnlUb2tlbi50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2Nob29zZURpYWxvZy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9jb2RlQmFyLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvZnVuY3Rpb25zQmFyLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvaGVscERpYWxvZy50cyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvLi9zcmMvd2ViL3ZpZXdzL2ltYWdlLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvcHJvamVjdExpc3REaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9zYXZlRGlhbG9nLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3Mvc3RhdmUudHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy9zdGF2ZVRva2VuLnRzIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvdmlld3MvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nLy4vc3JjL3dlYi92aWV3cy92aWV3LnRzIiwid2VicGFjazovL2xvZ28tbGFuZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbG9nby1sYW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sb2dvLWxhbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xvZ28tbGFuZy8uL3NyYy93ZWIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBrZXlmcmFtZXMgc2hvd3RpbWUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwJTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxufVxuLmZyYWN0LXRva2VucyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgZ2FwOiA1cHg7XG59XG4uZnJhY3QtdG9rZW5zLmhpZGUgLmZyYWN0LXRva2VuLCAuZnJhY3QtdG9rZW5zLmhpZGUgLmxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5mcmFjdC10b2tlbnMgPiAuZ3JvdXAtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZnJhY3QtdG9rZW5zID4gLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZyYWN0LXRva2VuIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mcmFjdC10b2tlbi50b2tlbi1pbmxpbmUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxcHg7XG59XG4uZnJhY3QtdG9rZW4uZGVidWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XG59XG4uZnJhY3QtdG9rZW4ubW92ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC40NjY2NjY2NjY3KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb24tbmFtZTogc2hvd3RpbWU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDIxOCwgMTIzLCAwLjQ2NjY2NjY2NjcpO1xuICBib3JkZXItY29sb3I6ICMyMjhCMjI7XG59XG4uZnJhY3QtdG9rZW4ubW92ZS52YWxpZC1kcm9wOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkRST1BcIjtcbn1cbi5mcmFjdC10b2tlbi5tb3ZlLnJlbW92ZS1kcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDEsIDAsIDAsIDAuNDY2NjY2NjY2Nyk7XG4gIGJvcmRlci1jb2xvcjogIzhiMjIyMjtcbn1cbi5mcmFjdC10b2tlbi5tb3ZlLnJlbW92ZS1kcm9wOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlJFTU9WRVwiO1xufVxuLmZyYWN0LXRva2VuLm1vdmU6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB0O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE2cHQ7XG59XG5cbi5mcmFjdC10b2tlbi1ncm91cCB7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xufVxuLmZyYWN0LXRva2VuLWdyb3VwID4gKiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5mcmFjdC10b2tlbi1ncm91cCA+ICo6bm90KDpmaXJzdC1jaGlsZCkuZnJhY3QtdG9rZW4ge1xuICBib3JkZXItbGVmdDogMnB4ICM4ODggZG90dGVkO1xufVxuLmZyYWN0LXRva2VuLWdyb3VwID4gLmZyYWN0LXRva2VuLXNwYW4ge1xuICBwYWRkaW5nOiAycHg7XG59XG4uZnJhY3QtdG9rZW4tZ3JvdXAuZGVidWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XG59XG4uZnJhY3QtdG9rZW4tZ3JvdXAuZGVidWcgPiAuZnJhY3QtdG9rZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGZmO1xuICBib3JkZXItY29sb3I6ICMwZDQyNmQ7XG59XG5cbi5mcmFjdC10b2tlbi1zcGFuIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xufVxuLmZyYWN0LXRva2VuLXNwYW4ub3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogNTBweDtcbn1cbi5mcmFjdC10b2tlbi1zcGFuLm92ZXI6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMjRwdDtcbiAgY29udGVudDogXCIrXCI7XG59XG5cbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZyYWN0LWZ1bmN0aW9ucy1saXN0IC50b2tlbi1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAudG9rZW4tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbn1cbi5mcmFjdC1mdW5jdGlvbnMtbGlzdCAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDJweCAjQUFBIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG59XG4uZnJhY3QtZnVuY3Rpb25zLWxpc3QgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mcmFjdC1zdGF2ZXMge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5mcmFjdC1zdGF2ZXMgPiBsaSB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZyYWN0LXN0YXZlcyA+IGxpID4gLm5hbWUge1xuICBmbGV4OiAwIDEgNTBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZnJhY3Qtc3RhdmVzID4gbGkgPiAudG9rZW5zIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMDtcbiAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5mcmFjdC1zdGF2ZXMgPiBsaSA+IC50b2tlbnMgPiAqIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG4uZnJhY3Qtc3RhdmVzID4gbGkuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXB4KTtcbn1cblxuLmZyYWN0LWltYWdlIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZWRpdG9yIHtcbiAgZmxleDogMCAxIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5NSU7XG59XG5cbiNlZGl0b3IgPiBuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNjb2RlLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuI2NvZGUtYmFyIGxhYmVsLCAjY29kZS1iYXIgaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuI2NvZGUtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiA0NXZoO1xufVxuXG4uZnJhY3QtdG9rZW4tY2F0ZWdvcmllcyB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzID4gLmZyYWN0LXRva2VucyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2JpbGUtd2FybmluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmVkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1vYmlsZS13YXJuaW5nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5kaWFsb2cge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XG4gIHBhZGRpbmc6IDEuNnJlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNob29zZS10b2tlbi1kaWFsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG4uY2hvb3NlLXRva2VuLWRpYWxvZyAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNob29zZS10b2tlbi1kaWFsb2cgLmNhdGVnb3J5ID4gLmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmNob29zZS10b2tlbi1kaWFsb2cgLmNhdGVnb3J5IH4gLmNhdGVnb3J5IHtcbiAgYm9yZGVyLWxlZnQ6IDFweCAjODg4IGRvdHRlZDtcbiAgbWFyZ2luLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG59XG4uY2hvb3NlLXRva2VuLWRpYWxvZyAuZGlhbG9nLXRva2VuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAuNWVtIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvdG9rZW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb2RlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSTtJQUFPLFdBQUE7RUNFVDtFRERFO0lBQUssYUFBQTtFQ0lQO0FBQ0Y7QURGQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ0lKO0FERFE7RUFDSSxhQUFBO0FDR1o7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDUjtBREVJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNGUjtBREtJO0VBQ0ksbURBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNIUjtB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O0lBQ0ksYUFBQTtFQTZNTjtBQUNGO0FBMU1BO0VBQ0ksd0JBQUE7QUE0TUo7O0FBek1BO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTRNRjs7QUF6TUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTRNSjtBQTFNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBNE1SO0FBMU1RO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBNE1aO0FBek1RO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBMk1aO0FBdk1JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF5TVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGtleWZyYW1lcyBzaG93dGltZSB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwJTsgfVxcbiAgICB0byB7IG9wYWNpdHk6IDEwMCU7IH1cXG59XFxuXFxuLmZyYWN0LXRva2VucyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgIGJvcmRlcjogMnB4ICNBQUEgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgICYuaGlkZSB7XFxuICAgICAgICAuZnJhY3QtdG9rZW4sIC5sYWJlbCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICA+IC5ncm91cC1sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICA+IC5sYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZnJhY3QtdG9rZW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4ICM4ODggc29saWQ7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAmLnRva2VuLWlubGluZSB7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgcGFkZGluZzogMXB4O1xcbiAgICB9XFxuXFxuICAgICYuZGVidWcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgfVxcblxcbiAgICAmLm1vdmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQzc3O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNob3d0aW1lO1xcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG5cXG4gICAgICAgICYudmFsaWQtZHJvcCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiZGE3Yjc3O1xcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzIyOEIyMjtcXG4gICAgICAgICAgICAmOjpiZWZvcmUgeyBjb250ZW50OiBcXFwiRFJPUFxcXCI7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYucmVtb3ZlLWRyb3Age1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTAwMDA3NztcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4YjIyMjI7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogXFxcIlJFTU9WRVxcXCI7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB0b3A6IC0xNnB0O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5mcmFjdC10b2tlbi1ncm91cCB7XFxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCAjODg4IHNvbGlkO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xcbiAgICA+ICogeyBmbGV4OiAwIDAgYXV0bzsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAwcHg7IH1cXG4gICAgPiAqOm5vdCg6Zmlyc3QtY2hpbGQpLmZyYWN0LXRva2VuIHsgYm9yZGVyLWxlZnQ6IDJweCAjODg4IGRvdHRlZDsgfVxcbiAgICA+IC5mcmFjdC10b2tlbi1zcGFuIHsgcGFkZGluZzogMnB4OyB9XFxuXFxuICAgICYuZGVidWcge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBmZjtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzBkNDI2ZDtcXG4gICAgICAgICYgPiAuZnJhY3QtdG9rZW4ge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZmY7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGQ0MjZkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5mcmFjdC10b2tlbi1zcGFuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xcblxcbiAgICAmLm92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIGJvcmRlcjogMnB4ICM5OTkgZG90dGVkO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG5cXG4gICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJy4vdG9rZW5zJztcXG5AaW1wb3J0ICcuL2NvZGUnO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXB4KTtcXG59XFxuXFxuLmZyYWN0LWltYWdlIHtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZWRpdG9yIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiA5NSU7XFxufVxcblxcbiNlZGl0b3IgPiBuYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjb2RlLWJhciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBsYWJlbCwgaW5wdXQgeyBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbn1cXG5cXG4jY29kZS1wYW5lbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDQ1dmg7XFxufVxcblxcbi5mcmFjdC10b2tlbi1jYXRlZ29yaWVzIHtcXG4gICAgZmxleDogMCAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcblxcbiAgICA+IC5mcmFjdC10b2tlbnMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLm1vYmlsZS13YXJuaW5nIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAubW9iaWxlLXdhcm5pbmcge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAycHggIzg4OCBzb2xpZDtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi5jaG9vc2UtdG9rZW4tZGlhbG9nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcbiAgICAuY2F0ZWdvcnkge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgPiAubGFiZWwge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICB+IC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCAjODg4IGRvdHRlZDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43NWVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC43NWVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5kaWFsb2ctdG9rZW4ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xcbiAgICB9XFxufVwiLFwiLmZyYWN0LWZ1bmN0aW9ucy1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgfVxcblxcbiAgICAudG9rZW4tYnRuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgei1pbmRleDogMTtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmZyYWN0LXN0YXZlcyB7XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICA+IGxpIHtcXG4gICAgICAgIGZsZXg6IDAgMSBhdXRvO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICAgID4gLm5hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMSA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgID4gLnRva2VucyAge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAycHggI0FBQSBzb2xpZDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcblxcbiAgICAgICAgICAgID4gKiB7IGZsZXg6IDAgMCBhdXRvOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmhpZGUge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIENyZWF0ZWQgMjAwOC0wOC0xOS5cbiAqXG4gKiBEaWprc3RyYSBwYXRoLWZpbmRpbmcgZnVuY3Rpb25zLiBBZGFwdGVkIGZyb20gdGhlIERpamtzdGFyIFB5dGhvbiBwcm9qZWN0LlxuICpcbiAqIENvcHlyaWdodCAoQykgMjAwOFxuICogICBXeWF0dCBCYWxkd2luIDxzZWxmQHd5YXR0YmFsZHdpbi5jb20+XG4gKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKlxuICogICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIGRpamtzdHJhID0ge1xuICBzaW5nbGVfc291cmNlX3Nob3J0ZXN0X3BhdGhzOiBmdW5jdGlvbihncmFwaCwgcywgZCkge1xuICAgIC8vIFByZWRlY2Vzc29yIG1hcCBmb3IgZWFjaCBub2RlIHRoYXQgaGFzIGJlZW4gZW5jb3VudGVyZWQuXG4gICAgLy8gbm9kZSBJRCA9PiBwcmVkZWNlc3NvciBub2RlIElEXG4gICAgdmFyIHByZWRlY2Vzc29ycyA9IHt9O1xuXG4gICAgLy8gQ29zdHMgb2Ygc2hvcnRlc3QgcGF0aHMgZnJvbSBzIHRvIGFsbCBub2RlcyBlbmNvdW50ZXJlZC5cbiAgICAvLyBub2RlIElEID0+IGNvc3RcbiAgICB2YXIgY29zdHMgPSB7fTtcbiAgICBjb3N0c1tzXSA9IDA7XG5cbiAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkOyBkaWZmZXJzIGZyb21cbiAgICAvLyBgY29zdHNgIGluIHRoYXQgaXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gdGhlIG5vZGUgdGhhdCBjdXJyZW50bHkgaGFzXG4gICAgLy8gdGhlIGtub3duIHNob3J0ZXN0IHBhdGggZnJvbSBzLlxuICAgIC8vIFhYWDogRG8gd2UgYWN0dWFsbHkgbmVlZCBib3RoIGBjb3N0c2AgYW5kIGBvcGVuYD9cbiAgICB2YXIgb3BlbiA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUubWFrZSgpO1xuICAgIG9wZW4ucHVzaChzLCAwKTtcblxuICAgIHZhciBjbG9zZXN0LFxuICAgICAgICB1LCB2LFxuICAgICAgICBjb3N0X29mX3NfdG9fdSxcbiAgICAgICAgYWRqYWNlbnRfbm9kZXMsXG4gICAgICAgIGNvc3Rfb2ZfZSxcbiAgICAgICAgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UsXG4gICAgICAgIGNvc3Rfb2Zfc190b192LFxuICAgICAgICBmaXJzdF92aXNpdDtcbiAgICB3aGlsZSAoIW9wZW4uZW1wdHkoKSkge1xuICAgICAgLy8gSW4gdGhlIG5vZGVzIHJlbWFpbmluZyBpbiBncmFwaCB0aGF0IGhhdmUgYSBrbm93biBjb3N0IGZyb20gcyxcbiAgICAgIC8vIGZpbmQgdGhlIG5vZGUsIHUsIHRoYXQgY3VycmVudGx5IGhhcyB0aGUgc2hvcnRlc3QgcGF0aCBmcm9tIHMuXG4gICAgICBjbG9zZXN0ID0gb3Blbi5wb3AoKTtcbiAgICAgIHUgPSBjbG9zZXN0LnZhbHVlO1xuICAgICAgY29zdF9vZl9zX3RvX3UgPSBjbG9zZXN0LmNvc3Q7XG5cbiAgICAgIC8vIEdldCBub2RlcyBhZGphY2VudCB0byB1Li4uXG4gICAgICBhZGphY2VudF9ub2RlcyA9IGdyYXBoW3VdIHx8IHt9O1xuXG4gICAgICAvLyAuLi5hbmQgZXhwbG9yZSB0aGUgZWRnZXMgdGhhdCBjb25uZWN0IHUgdG8gdGhvc2Ugbm9kZXMsIHVwZGF0aW5nXG4gICAgICAvLyB0aGUgY29zdCBvZiB0aGUgc2hvcnRlc3QgcGF0aHMgdG8gYW55IG9yIGFsbCBvZiB0aG9zZSBub2RlcyBhc1xuICAgICAgLy8gbmVjZXNzYXJ5LiB2IGlzIHRoZSBub2RlIGFjcm9zcyB0aGUgY3VycmVudCBlZGdlIGZyb20gdS5cbiAgICAgIGZvciAodiBpbiBhZGphY2VudF9ub2Rlcykge1xuICAgICAgICBpZiAoYWRqYWNlbnRfbm9kZXMuaGFzT3duUHJvcGVydHkodikpIHtcbiAgICAgICAgICAvLyBHZXQgdGhlIGNvc3Qgb2YgdGhlIGVkZ2UgcnVubmluZyBmcm9tIHUgdG8gdi5cbiAgICAgICAgICBjb3N0X29mX2UgPSBhZGphY2VudF9ub2Rlc1t2XTtcblxuICAgICAgICAgIC8vIENvc3Qgb2YgcyB0byB1IHBsdXMgdGhlIGNvc3Qgb2YgdSB0byB2IGFjcm9zcyBlLS10aGlzIGlzICphKlxuICAgICAgICAgIC8vIGNvc3QgZnJvbSBzIHRvIHYgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBsZXNzIHRoYW4gdGhlIGN1cnJlbnRcbiAgICAgICAgICAvLyBrbm93biBjb3N0IHRvIHYuXG4gICAgICAgICAgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UgPSBjb3N0X29mX3NfdG9fdSArIGNvc3Rfb2ZfZTtcblxuICAgICAgICAgIC8vIElmIHdlIGhhdmVuJ3QgdmlzaXRlZCB2IHlldCBPUiBpZiB0aGUgY3VycmVudCBrbm93biBjb3N0IGZyb20gcyB0b1xuICAgICAgICAgIC8vIHYgaXMgZ3JlYXRlciB0aGFuIHRoZSBuZXcgY29zdCB3ZSBqdXN0IGZvdW5kIChjb3N0IG9mIHMgdG8gdSBwbHVzXG4gICAgICAgICAgLy8gY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUpLCB1cGRhdGUgdidzIGNvc3QgaW4gdGhlIGNvc3QgbGlzdCBhbmRcbiAgICAgICAgICAvLyB1cGRhdGUgdidzIHByZWRlY2Vzc29yIGluIHRoZSBwcmVkZWNlc3NvciBsaXN0IChpdCdzIG5vdyB1KS5cbiAgICAgICAgICBjb3N0X29mX3NfdG9fdiA9IGNvc3RzW3ZdO1xuICAgICAgICAgIGZpcnN0X3Zpc2l0ID0gKHR5cGVvZiBjb3N0c1t2XSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgIGlmIChmaXJzdF92aXNpdCB8fCBjb3N0X29mX3NfdG9fdiA+IGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lKSB7XG4gICAgICAgICAgICBjb3N0c1t2XSA9IGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lO1xuICAgICAgICAgICAgb3Blbi5wdXNoKHYsIGNvc3Rfb2Zfc190b191X3BsdXNfY29zdF9vZl9lKTtcbiAgICAgICAgICAgIHByZWRlY2Vzc29yc1t2XSA9IHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29zdHNbZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgbXNnID0gWydDb3VsZCBub3QgZmluZCBhIHBhdGggZnJvbSAnLCBzLCAnIHRvICcsIGQsICcuJ10uam9pbignJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlZGVjZXNzb3JzO1xuICB9LFxuXG4gIGV4dHJhY3Rfc2hvcnRlc3RfcGF0aF9mcm9tX3ByZWRlY2Vzc29yX2xpc3Q6IGZ1bmN0aW9uKHByZWRlY2Vzc29ycywgZCkge1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciB1ID0gZDtcbiAgICB2YXIgcHJlZGVjZXNzb3I7XG4gICAgd2hpbGUgKHUpIHtcbiAgICAgIG5vZGVzLnB1c2godSk7XG4gICAgICBwcmVkZWNlc3NvciA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICAgIHUgPSBwcmVkZWNlc3NvcnNbdV07XG4gICAgfVxuICAgIG5vZGVzLnJldmVyc2UoKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH0sXG5cbiAgZmluZF9wYXRoOiBmdW5jdGlvbihncmFwaCwgcywgZCkge1xuICAgIHZhciBwcmVkZWNlc3NvcnMgPSBkaWprc3RyYS5zaW5nbGVfc291cmNlX3Nob3J0ZXN0X3BhdGhzKGdyYXBoLCBzLCBkKTtcbiAgICByZXR1cm4gZGlqa3N0cmEuZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdChcbiAgICAgIHByZWRlY2Vzc29ycywgZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgdmVyeSBuYWl2ZSBwcmlvcml0eSBxdWV1ZSBpbXBsZW1lbnRhdGlvbi5cbiAgICovXG4gIFByaW9yaXR5UXVldWU6IHtcbiAgICBtYWtlOiBmdW5jdGlvbiAob3B0cykge1xuICAgICAgdmFyIFQgPSBkaWprc3RyYS5Qcmlvcml0eVF1ZXVlLFxuICAgICAgICAgIHQgPSB7fSxcbiAgICAgICAgICBrZXk7XG4gICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgIGZvciAoa2V5IGluIFQpIHtcbiAgICAgICAgaWYgKFQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRba2V5XSA9IFRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdC5xdWV1ZSA9IFtdO1xuICAgICAgdC5zb3J0ZXIgPSBvcHRzLnNvcnRlciB8fCBULmRlZmF1bHRfc29ydGVyO1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcblxuICAgIGRlZmF1bHRfc29ydGVyOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEuY29zdCAtIGIuY29zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbmV3IGl0ZW0gdG8gdGhlIHF1ZXVlIGFuZCBlbnN1cmUgdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudFxuICAgICAqIGlzIGF0IHRoZSBmcm9udCBvZiB0aGUgcXVldWUuXG4gICAgICovXG4gICAgcHVzaDogZnVuY3Rpb24gKHZhbHVlLCBjb3N0KSB7XG4gICAgICB2YXIgaXRlbSA9IHt2YWx1ZTogdmFsdWUsIGNvc3Q6IGNvc3R9O1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKGl0ZW0pO1xuICAgICAgdGhpcy5xdWV1ZS5zb3J0KHRoaXMuc29ydGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBoaWdoZXN0IHByaW9yaXR5IGVsZW1lbnQgaW4gdGhlIHF1ZXVlLlxuICAgICAqL1xuICAgIHBvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICB9LFxuXG4gICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gbm9kZS5qcyBtb2R1bGUgZXhwb3J0c1xuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZGlqa3N0cmE7XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmNvZGVVdGY4IChpbnB1dCkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHNpemUgPSBpbnB1dC5sZW5ndGhcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTsgaW5kZXgrKykge1xuICAgIHZhciBwb2ludCA9IGlucHV0LmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAocG9pbnQgPj0gMHhEODAwICYmIHBvaW50IDw9IDB4REJGRiAmJiBzaXplID4gaW5kZXggKyAxKSB7XG4gICAgICB2YXIgc2Vjb25kID0gaW5wdXQuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIGlmIChzZWNvbmQgPj0gMHhEQzAwICYmIHNlY29uZCA8PSAweERGRkYpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIHBvaW50ID0gKHBvaW50IC0gMHhEODAwKSAqIDB4NDAwICsgc2Vjb25kIC0gMHhEQzAwICsgMHgxMDAwMFxuICAgICAgICBpbmRleCArPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVVMtQVNDSUlcbiAgICBpZiAocG9pbnQgPCAweDgwKSB7XG4gICAgICByZXN1bHQucHVzaChwb2ludClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gMi1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50IDwgMHg4MDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiA2KSB8IDE5MilcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gMy1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50IDwgMHhEODAwIHx8IChwb2ludCA+PSAweEUwMDAgJiYgcG9pbnQgPCAweDEwMDAwKSkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDEyKSB8IDIyNClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIDQtYnl0ZSBVVEYtOFxuICAgIGlmIChwb2ludCA+PSAweDEwMDAwICYmIHBvaW50IDw9IDB4MTBGRkZGKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTgpIHwgMjQwKVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiAxMikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDYpICYgNjMpIHwgMTI4KVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBJbnZhbGlkIGNoYXJhY3RlclxuICAgIHJlc3VsdC5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gIH1cblxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5idWZmZXJcbn1cbiIsIlxuY29uc3QgY2FuUHJvbWlzZSA9IHJlcXVpcmUoJy4vY2FuLXByb21pc2UnKVxuXG5jb25zdCBRUkNvZGUgPSByZXF1aXJlKCcuL2NvcmUvcXJjb2RlJylcbmNvbnN0IENhbnZhc1JlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9jYW52YXMnKVxuY29uc3QgU3ZnUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL3N2Zy10YWcuanMnKVxuXG5mdW5jdGlvbiByZW5kZXJDYW52YXMgKHJlbmRlckZ1bmMsIGNhbnZhcywgdGV4dCwgb3B0cywgY2IpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICBjb25zdCBhcmdzTnVtID0gYXJncy5sZW5ndGhcbiAgY29uc3QgaXNMYXN0QXJnQ2IgPSB0eXBlb2YgYXJnc1thcmdzTnVtIC0gMV0gPT09ICdmdW5jdGlvbidcblxuICBpZiAoIWlzTGFzdEFyZ0NiICYmICFjYW5Qcm9taXNlKCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxiYWNrIHJlcXVpcmVkIGFzIGxhc3QgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKGlzTGFzdEFyZ0NiKSB7XG4gICAgaWYgKGFyZ3NOdW0gPCAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoYXJnc051bSA9PT0gMikge1xuICAgICAgY2IgPSB0ZXh0XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSBvcHRzID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIGlmIChhcmdzTnVtID09PSAzKSB7XG4gICAgICBpZiAoY2FudmFzLmdldENvbnRleHQgJiYgdHlwZW9mIGNiID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjYiA9IG9wdHNcbiAgICAgICAgb3B0cyA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2IgPSBvcHRzXG4gICAgICAgIG9wdHMgPSB0ZXh0XG4gICAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgICAgY2FudmFzID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChhcmdzTnVtIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb28gZmV3IGFyZ3VtZW50cyBwcm92aWRlZCcpXG4gICAgfVxuXG4gICAgaWYgKGFyZ3NOdW0gPT09IDEpIHtcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKGFyZ3NOdW0gPT09IDIgJiYgIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICBvcHRzID0gdGV4dFxuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBRUkNvZGUuY3JlYXRlKHRleHQsIG9wdHMpXG4gICAgICAgIHJlc29sdmUocmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gUVJDb2RlLmNyZWF0ZSh0ZXh0LCBvcHRzKVxuICAgIGNiKG51bGwsIHJlbmRlckZ1bmMoZGF0YSwgY2FudmFzLCBvcHRzKSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNiKGUpXG4gIH1cbn1cblxuZXhwb3J0cy5jcmVhdGUgPSBRUkNvZGUuY3JlYXRlXG5leHBvcnRzLnRvQ2FudmFzID0gcmVuZGVyQ2FudmFzLmJpbmQobnVsbCwgQ2FudmFzUmVuZGVyZXIucmVuZGVyKVxuZXhwb3J0cy50b0RhdGFVUkwgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXJUb0RhdGFVUkwpXG5cbi8vIG9ubHkgc3ZnIGZvciBub3cuXG5leHBvcnRzLnRvU3RyaW5nID0gcmVuZGVyQ2FudmFzLmJpbmQobnVsbCwgZnVuY3Rpb24gKGRhdGEsIF8sIG9wdHMpIHtcbiAgcmV0dXJuIFN2Z1JlbmRlcmVyLnJlbmRlcihkYXRhLCBvcHRzKVxufSlcbiIsIi8vIGNhbi1wcm9taXNlIGhhcyBhIGNyYXNoIGluIHNvbWUgdmVyc2lvbnMgb2YgcmVhY3QgbmF0aXZlIHRoYXQgZG9udCBoYXZlXG4vLyBzdGFuZGFyZCBnbG9iYWwgb2JqZWN0c1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbGRhaXIvbm9kZS1xcmNvZGUvaXNzdWVzLzE1N1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nICYmIFByb21pc2UucHJvdG90eXBlICYmIFByb21pc2UucHJvdG90eXBlLnRoZW5cbn1cbiIsIi8qKlxuICogQWxpZ25tZW50IHBhdHRlcm4gYXJlIGZpeGVkIHJlZmVyZW5jZSBwYXR0ZXJuIGluIGRlZmluZWQgcG9zaXRpb25zXG4gKiBpbiBhIG1hdHJpeCBzeW1ib2xvZ3ksIHdoaWNoIGVuYWJsZXMgdGhlIGRlY29kZSBzb2Z0d2FyZSB0byByZS1zeW5jaHJvbmlzZVxuICogdGhlIGNvb3JkaW5hdGUgbWFwcGluZyBvZiB0aGUgaW1hZ2UgbW9kdWxlcyBpbiB0aGUgZXZlbnQgb2YgbW9kZXJhdGUgYW1vdW50c1xuICogb2YgZGlzdG9ydGlvbiBvZiB0aGUgaW1hZ2UuXG4gKlxuICogQWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwcmVzZW50IG9ubHkgaW4gUVIgQ29kZSBzeW1ib2xzIG9mIHZlcnNpb24gMiBvciBsYXJnZXJcbiAqIGFuZCB0aGVpciBudW1iZXIgZGVwZW5kcyBvbiB0aGUgc3ltYm9sIHZlcnNpb24uXG4gKi9cblxuY29uc3QgZ2V0U3ltYm9sU2l6ZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5nZXRTeW1ib2xTaXplXG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSByb3cvY29sdW1uIGNvb3JkaW5hdGVzIG9mIHRoZSBjZW50ZXIgbW9kdWxlIG9mIGVhY2ggYWxpZ25tZW50IHBhdHRlcm5cbiAqIGZvciB0aGUgc3BlY2lmaWVkIFFSIENvZGUgdmVyc2lvbi5cbiAqXG4gKiBUaGUgYWxpZ25tZW50IHBhdHRlcm5zIGFyZSBwb3NpdGlvbmVkIHN5bW1ldHJpY2FsbHkgb24gZWl0aGVyIHNpZGUgb2YgdGhlIGRpYWdvbmFsXG4gKiBydW5uaW5nIGZyb20gdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ltYm9sIHRvIHRoZSBib3R0b20gcmlnaHQgY29ybmVyLlxuICpcbiAqIFNpbmNlIHBvc2l0aW9ucyBhcmUgc2ltbWV0cmljYWwgb25seSBoYWxmIG9mIHRoZSBjb29yZGluYXRlcyBhcmUgcmV0dXJuZWQuXG4gKiBFYWNoIGl0ZW0gb2YgdGhlIGFycmF5IHdpbGwgcmVwcmVzZW50IGluIHR1cm4gdGhlIHggYW5kIHkgY29vcmRpbmF0ZS5cbiAqIEBzZWUge0BsaW5rIGdldFBvc2l0aW9uc31cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZVxuICovXG5leHBvcnRzLmdldFJvd0NvbENvb3JkcyA9IGZ1bmN0aW9uIGdldFJvd0NvbENvb3JkcyAodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMSkgcmV0dXJuIFtdXG5cbiAgY29uc3QgcG9zQ291bnQgPSBNYXRoLmZsb29yKHZlcnNpb24gLyA3KSArIDJcbiAgY29uc3Qgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbilcbiAgY29uc3QgaW50ZXJ2YWxzID0gc2l6ZSA9PT0gMTQ1ID8gMjYgOiBNYXRoLmNlaWwoKHNpemUgLSAxMykgLyAoMiAqIHBvc0NvdW50IC0gMikpICogMlxuICBjb25zdCBwb3NpdGlvbnMgPSBbc2l6ZSAtIDddIC8vIExhc3QgY29vcmQgaXMgYWx3YXlzIChzaXplIC0gNylcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvc0NvdW50IC0gMTsgaSsrKSB7XG4gICAgcG9zaXRpb25zW2ldID0gcG9zaXRpb25zW2kgLSAxXSAtIGludGVydmFsc1xuICB9XG5cbiAgcG9zaXRpb25zLnB1c2goNikgLy8gRmlyc3QgY29vcmQgaXMgYWx3YXlzIDZcblxuICByZXR1cm4gcG9zaXRpb25zLnJldmVyc2UoKVxufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgcG9zaXRpb25zIG9mIGVhY2ggYWxpZ25tZW50IHBhdHRlcm4uXG4gKiBFYWNoIGFycmF5J3MgZWxlbWVudCByZXByZXNlbnQgdGhlIGNlbnRlciBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBDb29yZGluYXRlcyBhcmUgY2FsY3VsYXRlZCBleHBhbmRpbmcgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgcmV0dXJuZWQgYnkge0BsaW5rIGdldFJvd0NvbENvb3Jkc31cbiAqIGFuZCBmaWx0ZXJpbmcgb3V0IHRoZSBpdGVtcyB0aGF0IG92ZXJsYXBzIHdpdGggZmluZGVyIHBhdHRlcm5cbiAqXG4gKiBAZXhhbXBsZVxuICogRm9yIGEgVmVyc2lvbiA3IHN5bWJvbCB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfSByZXR1cm5zIHZhbHVlcyA2LCAyMiBhbmQgMzguXG4gKiBUaGUgYWxpZ25tZW50IHBhdHRlcm5zLCB0aGVyZWZvcmUsIGFyZSB0byBiZSBjZW50ZXJlZCBvbiAocm93LCBjb2x1bW4pXG4gKiBwb3NpdGlvbnMgKDYsMjIpLCAoMjIsNiksICgyMiwyMiksICgyMiwzOCksICgzOCwyMiksICgzOCwzOCkuXG4gKiBOb3RlIHRoYXQgdGhlIGNvb3JkaW5hdGVzICg2LDYpLCAoNiwzOCksICgzOCw2KSBhcmUgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gKiBhbmQgYXJlIG5vdCB0aGVyZWZvcmUgdXNlZCBmb3IgYWxpZ25tZW50IHBhdHRlcm5zLlxuICpcbiAqIGxldCBwb3MgPSBnZXRQb3NpdGlvbnMoNylcbiAqIC8vIFtbNiwyMl0sIFsyMiw2XSwgWzIyLDIyXSwgWzIyLDM4XSwgWzM4LDIyXSwgWzM4LDM4XV1cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xuZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMgKHZlcnNpb24pIHtcbiAgY29uc3QgY29vcmRzID0gW11cbiAgY29uc3QgcG9zID0gZXhwb3J0cy5nZXRSb3dDb2xDb29yZHModmVyc2lvbilcbiAgY29uc3QgcG9zTGVuZ3RoID0gcG9zLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zTGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBvc0xlbmd0aDsgaisrKSB7XG4gICAgICAvLyBTa2lwIGlmIHBvc2l0aW9uIGlzIG9jY3VwaWVkIGJ5IGZpbmRlciBwYXR0ZXJuc1xuICAgICAgaWYgKChpID09PSAwICYmIGogPT09IDApIHx8IC8vIHRvcC1sZWZ0XG4gICAgICAgICAgKGkgPT09IDAgJiYgaiA9PT0gcG9zTGVuZ3RoIC0gMSkgfHwgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgICAoaSA9PT0gcG9zTGVuZ3RoIC0gMSAmJiBqID09PSAwKSkgeyAvLyB0b3AtcmlnaHRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29vcmRzLnB1c2goW3Bvc1tpXSwgcG9zW2pdXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29vcmRzXG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuLyoqXG4gKiBBcnJheSBvZiBjaGFyYWN0ZXJzIGF2YWlsYWJsZSBpbiBhbHBoYW51bWVyaWMgbW9kZVxuICpcbiAqIEFzIHBlciBRUiBDb2RlIHNwZWNpZmljYXRpb24sIHRvIGVhY2ggY2hhcmFjdGVyXG4gKiBpcyBhc3NpZ25lZCBhIHZhbHVlIGZyb20gMCB0byA0NCB3aGljaCBpbiB0aGlzIGNhc2UgY29pbmNpZGVzXG4gKiB3aXRoIHRoZSBhcnJheSBpbmRleFxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuY29uc3QgQUxQSEFfTlVNX0NIQVJTID0gW1xuICAnMCcsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsXG4gICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgJ1EnLCAnUicsICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLFxuICAnICcsICckJywgJyUnLCAnKicsICcrJywgJy0nLCAnLicsICcvJywgJzonXG5dXG5cbmZ1bmN0aW9uIEFscGhhbnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5BTFBIQU5VTUVSSUNcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIDExICogTWF0aC5mbG9vcihsZW5ndGggLyAyKSArIDYgKiAobGVuZ3RoICUgMilcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkFscGhhbnVtZXJpY0RhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKGJpdEJ1ZmZlcikge1xuICBsZXQgaVxuXG4gIC8vIElucHV0IGRhdGEgY2hhcmFjdGVycyBhcmUgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0d28gY2hhcmFjdGVyc1xuICAvLyBhbmQgZW5jb2RlZCBhcyAxMS1iaXQgYmluYXJ5IGNvZGVzLlxuICBmb3IgKGkgPSAwOyBpICsgMiA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaXMgbXVsdGlwbGllZCBieSA0NVxuICAgIGxldCB2YWx1ZSA9IEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpXSkgKiA0NVxuXG4gICAgLy8gVGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgc2Vjb25kIGRpZ2l0IGlzIGFkZGVkIHRvIHRoZSBwcm9kdWN0XG4gICAgdmFsdWUgKz0gQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2kgKyAxXSlcblxuICAgIC8vIFRoZSBzdW0gaXMgdGhlbiBzdG9yZWQgYXMgMTEtYml0IGJpbmFyeSBudW1iZXJcbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMSlcbiAgfVxuXG4gIC8vIElmIHRoZSBudW1iZXIgb2YgaW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGlzIG5vdCBhIG11bHRpcGxlIG9mIHR3byxcbiAgLy8gdGhlIGNoYXJhY3RlciB2YWx1ZSBvZiB0aGUgZmluYWwgY2hhcmFjdGVyIGlzIGVuY29kZWQgYXMgYSA2LWJpdCBiaW5hcnkgbnVtYmVyLlxuICBpZiAodGhpcy5kYXRhLmxlbmd0aCAlIDIpIHtcbiAgICBiaXRCdWZmZXIucHV0KEFMUEhBX05VTV9DSEFSUy5pbmRleE9mKHRoaXMuZGF0YVtpXSksIDYpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbHBoYW51bWVyaWNEYXRhXG4iLCJmdW5jdGlvbiBCaXRCdWZmZXIgKCkge1xuICB0aGlzLmJ1ZmZlciA9IFtdXG4gIHRoaXMubGVuZ3RoID0gMFxufVxuXG5CaXRCdWZmZXIucHJvdG90eXBlID0ge1xuXG4gIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgY29uc3QgYnVmSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOClcbiAgICByZXR1cm4gKCh0aGlzLmJ1ZmZlcltidWZJbmRleF0gPj4+ICg3IC0gaW5kZXggJSA4KSkgJiAxKSA9PT0gMVxuICB9LFxuXG4gIHB1dDogZnVuY3Rpb24gKG51bSwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT09IDEpXG4gICAgfVxuICB9LFxuXG4gIGdldExlbmd0aEluQml0czogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aFxuICB9LFxuXG4gIHB1dEJpdDogZnVuY3Rpb24gKGJpdCkge1xuICAgIGNvbnN0IGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpXG4gICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xuICAgICAgdGhpcy5idWZmZXIucHVzaCgwKVxuICAgIH1cblxuICAgIGlmIChiaXQpIHtcbiAgICAgIHRoaXMuYnVmZmVyW2J1ZkluZGV4XSB8PSAoMHg4MCA+Pj4gKHRoaXMubGVuZ3RoICUgOCkpXG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGgrK1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQml0QnVmZmVyXG4iLCIvKipcbiAqIEhlbHBlciBjbGFzcyB0byBoYW5kbGUgUVIgQ29kZSBzeW1ib2wgbW9kdWxlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzaXplIFN5bWJvbCBzaXplXG4gKi9cbmZ1bmN0aW9uIEJpdE1hdHJpeCAoc2l6ZSkge1xuICBpZiAoIXNpemUgfHwgc2l6ZSA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpdE1hdHJpeCBzaXplIG11c3QgYmUgZGVmaW5lZCBhbmQgZ3JlYXRlciB0aGFuIDAnKVxuICB9XG5cbiAgdGhpcy5zaXplID0gc2l6ZVxuICB0aGlzLmRhdGEgPSBuZXcgVWludDhBcnJheShzaXplICogc2l6ZSlcbiAgdGhpcy5yZXNlcnZlZEJpdCA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplKVxufVxuXG4vKipcbiAqIFNldCBiaXQgdmFsdWUgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKiBJZiByZXNlcnZlZCBmbGFnIGlzIHNldCwgdGhpcyBiaXQgd2lsbCBiZSBpZ25vcmVkIGR1cmluZyBtYXNraW5nIHByb2Nlc3NcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gIHJvd1xuICogQHBhcmFtIHtOdW1iZXJ9ICBjb2xcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVzZXJ2ZWRcbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAocm93LCBjb2wsIHZhbHVlLCByZXNlcnZlZCkge1xuICBjb25zdCBpbmRleCA9IHJvdyAqIHRoaXMuc2l6ZSArIGNvbFxuICB0aGlzLmRhdGFbaW5kZXhdID0gdmFsdWVcbiAgaWYgKHJlc2VydmVkKSB0aGlzLnJlc2VydmVkQml0W2luZGV4XSA9IHRydWVcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSAge051bWJlcn0gIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocm93LCBjb2wpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YVtyb3cgKiB0aGlzLnNpemUgKyBjb2xdXG59XG5cbi8qKlxuICogQXBwbGllcyB4b3Igb3BlcmF0b3IgYXQgc3BlY2lmaWVkIGxvY2F0aW9uXG4gKiAodXNlZCBkdXJpbmcgbWFza2luZyBwcm9jZXNzKVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUpIHtcbiAgdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF0gXj0gdmFsdWVcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBiaXQgYXQgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIHJlc2VydmVkXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gICBjb2xcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICByZXR1cm4gdGhpcy5yZXNlcnZlZEJpdFtyb3cgKiB0aGlzLnNpemUgKyBjb2xdXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQml0TWF0cml4XG4iLCJjb25zdCBlbmNvZGVVdGY4ID0gcmVxdWlyZSgnZW5jb2RlLXV0ZjgnKVxuY29uc3QgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG5cbmZ1bmN0aW9uIEJ5dGVEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuQllURVxuICBpZiAodHlwZW9mIChkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICBkYXRhID0gZW5jb2RlVXRmOChkYXRhKVxuICB9XG4gIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpXG59XG5cbkJ5dGVEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIDhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCAoKSB7XG4gIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoXG59XG5cbkJ5dGVEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBCeXRlRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkJ5dGVEYXRhLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChiaXRCdWZmZXIpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgYml0QnVmZmVyLnB1dCh0aGlzLmRhdGFbaV0sIDgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCeXRlRGF0YVxuIiwiY29uc3QgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXHJcblxyXG5jb25zdCBFQ19CTE9DS1NfVEFCTEUgPSBbXHJcbi8vIEwgIE0gIFEgIEhcclxuICAxLCAxLCAxLCAxLFxyXG4gIDEsIDEsIDEsIDEsXHJcbiAgMSwgMSwgMiwgMixcclxuICAxLCAyLCAyLCA0LFxyXG4gIDEsIDIsIDQsIDQsXHJcbiAgMiwgNCwgNCwgNCxcclxuICAyLCA0LCA2LCA1LFxyXG4gIDIsIDQsIDYsIDYsXHJcbiAgMiwgNSwgOCwgOCxcclxuICA0LCA1LCA4LCA4LFxyXG4gIDQsIDUsIDgsIDExLFxyXG4gIDQsIDgsIDEwLCAxMSxcclxuICA0LCA5LCAxMiwgMTYsXHJcbiAgNCwgOSwgMTYsIDE2LFxyXG4gIDYsIDEwLCAxMiwgMTgsXHJcbiAgNiwgMTAsIDE3LCAxNixcclxuICA2LCAxMSwgMTYsIDE5LFxyXG4gIDYsIDEzLCAxOCwgMjEsXHJcbiAgNywgMTQsIDIxLCAyNSxcclxuICA4LCAxNiwgMjAsIDI1LFxyXG4gIDgsIDE3LCAyMywgMjUsXHJcbiAgOSwgMTcsIDIzLCAzNCxcclxuICA5LCAxOCwgMjUsIDMwLFxyXG4gIDEwLCAyMCwgMjcsIDMyLFxyXG4gIDEyLCAyMSwgMjksIDM1LFxyXG4gIDEyLCAyMywgMzQsIDM3LFxyXG4gIDEyLCAyNSwgMzQsIDQwLFxyXG4gIDEzLCAyNiwgMzUsIDQyLFxyXG4gIDE0LCAyOCwgMzgsIDQ1LFxyXG4gIDE1LCAyOSwgNDAsIDQ4LFxyXG4gIDE2LCAzMSwgNDMsIDUxLFxyXG4gIDE3LCAzMywgNDUsIDU0LFxyXG4gIDE4LCAzNSwgNDgsIDU3LFxyXG4gIDE5LCAzNywgNTEsIDYwLFxyXG4gIDE5LCAzOCwgNTMsIDYzLFxyXG4gIDIwLCA0MCwgNTYsIDY2LFxyXG4gIDIxLCA0MywgNTksIDcwLFxyXG4gIDIyLCA0NSwgNjIsIDc0LFxyXG4gIDI0LCA0NywgNjUsIDc3LFxyXG4gIDI1LCA0OSwgNjgsIDgxXHJcbl1cclxuXHJcbmNvbnN0IEVDX0NPREVXT1JEU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDcsIDEwLCAxMywgMTcsXHJcbiAgMTAsIDE2LCAyMiwgMjgsXHJcbiAgMTUsIDI2LCAzNiwgNDQsXHJcbiAgMjAsIDM2LCA1MiwgNjQsXHJcbiAgMjYsIDQ4LCA3MiwgODgsXHJcbiAgMzYsIDY0LCA5NiwgMTEyLFxyXG4gIDQwLCA3MiwgMTA4LCAxMzAsXHJcbiAgNDgsIDg4LCAxMzIsIDE1NixcclxuICA2MCwgMTEwLCAxNjAsIDE5MixcclxuICA3MiwgMTMwLCAxOTIsIDIyNCxcclxuICA4MCwgMTUwLCAyMjQsIDI2NCxcclxuICA5NiwgMTc2LCAyNjAsIDMwOCxcclxuICAxMDQsIDE5OCwgMjg4LCAzNTIsXHJcbiAgMTIwLCAyMTYsIDMyMCwgMzg0LFxyXG4gIDEzMiwgMjQwLCAzNjAsIDQzMixcclxuICAxNDQsIDI4MCwgNDA4LCA0ODAsXHJcbiAgMTY4LCAzMDgsIDQ0OCwgNTMyLFxyXG4gIDE4MCwgMzM4LCA1MDQsIDU4OCxcclxuICAxOTYsIDM2NCwgNTQ2LCA2NTAsXHJcbiAgMjI0LCA0MTYsIDYwMCwgNzAwLFxyXG4gIDIyNCwgNDQyLCA2NDQsIDc1MCxcclxuICAyNTIsIDQ3NiwgNjkwLCA4MTYsXHJcbiAgMjcwLCA1MDQsIDc1MCwgOTAwLFxyXG4gIDMwMCwgNTYwLCA4MTAsIDk2MCxcclxuICAzMTIsIDU4OCwgODcwLCAxMDUwLFxyXG4gIDMzNiwgNjQ0LCA5NTIsIDExMTAsXHJcbiAgMzYwLCA3MDAsIDEwMjAsIDEyMDAsXHJcbiAgMzkwLCA3MjgsIDEwNTAsIDEyNjAsXHJcbiAgNDIwLCA3ODQsIDExNDAsIDEzNTAsXHJcbiAgNDUwLCA4MTIsIDEyMDAsIDE0NDAsXHJcbiAgNDgwLCA4NjgsIDEyOTAsIDE1MzAsXHJcbiAgNTEwLCA5MjQsIDEzNTAsIDE2MjAsXHJcbiAgNTQwLCA5ODAsIDE0NDAsIDE3MTAsXHJcbiAgNTcwLCAxMDM2LCAxNTMwLCAxODAwLFxyXG4gIDU3MCwgMTA2NCwgMTU5MCwgMTg5MCxcclxuICA2MDAsIDExMjAsIDE2ODAsIDE5ODAsXHJcbiAgNjMwLCAxMjA0LCAxNzcwLCAyMTAwLFxyXG4gIDY2MCwgMTI2MCwgMTg2MCwgMjIyMCxcclxuICA3MjAsIDEzMTYsIDE5NTAsIDIzMTAsXHJcbiAgNzUwLCAxMzcyLCAyMDQwLCAyNDMwXHJcbl1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBibG9jayB0aGF0IHRoZSBRUiBDb2RlIHNob3VsZCBjb250YWluXHJcbiAqIGZvciB0aGUgc3BlY2lmaWVkIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXHJcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2Nrc1xyXG4gKi9cclxuZXhwb3J0cy5nZXRCbG9ja3NDb3VudCA9IGZ1bmN0aW9uIGdldEJsb2Nrc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQkxPQ0tTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgdG8gdXNlIGZvciB0aGUgc3BlY2lmaWVkXHJcbiAqIHZlcnNpb24gYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwuXHJcbiAqXHJcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXHJcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIE51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkc1xyXG4gKi9cclxuZXhwb3J0cy5nZXRUb3RhbENvZGV3b3Jkc0NvdW50ID0gZnVuY3Rpb24gZ2V0VG90YWxDb2Rld29yZHNDb3VudCAodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICBzd2l0Y2ggKGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgICBjYXNlIEVDTGV2ZWwuTDpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDBdXHJcbiAgICBjYXNlIEVDTGV2ZWwuTTpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDFdXHJcbiAgICBjYXNlIEVDTGV2ZWwuUTpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDJdXHJcbiAgICBjYXNlIEVDTGV2ZWwuSDpcclxuICAgICAgcmV0dXJuIEVDX0NPREVXT1JEU19UQUJMRVsodmVyc2lvbiAtIDEpICogNCArIDNdXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydHMuTCA9IHsgYml0OiAxIH1cbmV4cG9ydHMuTSA9IHsgYml0OiAwIH1cbmV4cG9ydHMuUSA9IHsgYml0OiAzIH1cbmV4cG9ydHMuSCA9IHsgYml0OiAyIH1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyYW0gaXMgbm90IGEgc3RyaW5nJylcbiAgfVxuXG4gIGNvbnN0IGxjU3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKClcblxuICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAnbG93JzpcbiAgICAgIHJldHVybiBleHBvcnRzLkxcblxuICAgIGNhc2UgJ20nOlxuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5NXG5cbiAgICBjYXNlICdxJzpcbiAgICBjYXNlICdxdWFydGlsZSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5RXG5cbiAgICBjYXNlICdoJzpcbiAgICBjYXNlICdoaWdoJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkhcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gRUMgTGV2ZWw6ICcgKyBzdHJpbmcpXG4gIH1cbn1cblxuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAobGV2ZWwpIHtcbiAgcmV0dXJuIGxldmVsICYmIHR5cGVvZiBsZXZlbC5iaXQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGV2ZWwuYml0ID49IDAgJiYgbGV2ZWwuYml0IDwgNFxufVxuXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG59XG4iLCJjb25zdCBnZXRTeW1ib2xTaXplID0gcmVxdWlyZSgnLi91dGlscycpLmdldFN5bWJvbFNpemVcbmNvbnN0IEZJTkRFUl9QQVRURVJOX1NJWkUgPSA3XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBmaW5kZXIgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgdG9wLWxlZnQgcG9pbnQgb2YgdGhlIHBhdHRlcm4gYXMgKHgsIHkpIGNvb3JkaW5hdGVzXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIGNvb3JkaW5hdGVzXG4gKi9cbmV4cG9ydHMuZ2V0UG9zaXRpb25zID0gZnVuY3Rpb24gZ2V0UG9zaXRpb25zICh2ZXJzaW9uKSB7XG4gIGNvbnN0IHNpemUgPSBnZXRTeW1ib2xTaXplKHZlcnNpb24pXG5cbiAgcmV0dXJuIFtcbiAgICAvLyB0b3AtbGVmdFxuICAgIFswLCAwXSxcbiAgICAvLyB0b3AtcmlnaHRcbiAgICBbc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkUsIDBdLFxuICAgIC8vIGJvdHRvbS1sZWZ0XG4gICAgWzAsIHNpemUgLSBGSU5ERVJfUEFUVEVSTl9TSVpFXVxuICBdXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG5jb25zdCBHMTUgPSAoMSA8PCAxMCkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgNCkgfCAoMSA8PCAyKSB8ICgxIDw8IDEpIHwgKDEgPDwgMClcbmNvbnN0IEcxNV9NQVNLID0gKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKVxuY29uc3QgRzE1X0JDSCA9IFV0aWxzLmdldEJDSERpZ2l0KEcxNSlcblxuLyoqXG4gKiBSZXR1cm5zIGZvcm1hdCBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIFRoZSBmb3JtYXQgaW5mb3JtYXRpb24gaXMgYSAxNS1iaXQgc2VxdWVuY2UgY29udGFpbmluZyA1IGRhdGEgYml0cyxcbiAqIHdpdGggMTAgZXJyb3IgY29ycmVjdGlvbiBiaXRzIGNhbGN1bGF0ZWQgdXNpbmcgdGhlICgxNSwgNSkgQkNIIGNvZGUuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1hc2sgICAgICAgICAgICAgICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICBFbmNvZGVkIGZvcm1hdCBpbmZvcm1hdGlvbiBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0RW5jb2RlZEJpdHMgPSBmdW5jdGlvbiBnZXRFbmNvZGVkQml0cyAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2spIHtcbiAgY29uc3QgZGF0YSA9ICgoZXJyb3JDb3JyZWN0aW9uTGV2ZWwuYml0IDw8IDMpIHwgbWFzaylcbiAgbGV0IGQgPSBkYXRhIDw8IDEwXG5cbiAgd2hpbGUgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCA+PSAwKSB7XG4gICAgZCBePSAoRzE1IDw8IChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxNV9CQ0gpKVxuICB9XG5cbiAgLy8geG9yIGZpbmFsIGRhdGEgd2l0aCBtYXNrIHBhdHRlcm4gaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXRcbiAgLy8gbm8gY29tYmluYXRpb24gb2YgRXJyb3IgQ29ycmVjdGlvbiBMZXZlbCBhbmQgZGF0YSBtYXNrIHBhdHRlcm5cbiAgLy8gd2lsbCByZXN1bHQgaW4gYW4gYWxsLXplcm8gZGF0YSBzdHJpbmdcbiAgcmV0dXJuICgoZGF0YSA8PCAxMCkgfCBkKSBeIEcxNV9NQVNLXG59XG4iLCJjb25zdCBFWFBfVEFCTEUgPSBuZXcgVWludDhBcnJheSg1MTIpXG5jb25zdCBMT0dfVEFCTEUgPSBuZXcgVWludDhBcnJheSgyNTYpXG4vKipcbiAqIFByZWNvbXB1dGUgdGhlIGxvZyBhbmQgYW50aS1sb2cgdGFibGVzIGZvciBmYXN0ZXIgY29tcHV0YXRpb24gbGF0ZXJcbiAqXG4gKiBGb3IgZWFjaCBwb3NzaWJsZSB2YWx1ZSBpbiB0aGUgZ2Fsb2lzIGZpZWxkIDJeOCwgd2Ugd2lsbCBwcmUtY29tcHV0ZVxuICogdGhlIGxvZ2FyaXRobSBhbmQgYW50aS1sb2dhcml0aG0gKGV4cG9uZW50aWFsKSBvZiB0aGlzIHZhbHVlXG4gKlxuICogcmVmIHtAbGluayBodHRwczovL2VuLndpa2l2ZXJzaXR5Lm9yZy93aWtpL1JlZWQlRTIlODAlOTNTb2xvbW9uX2NvZGVzX2Zvcl9jb2RlcnMjSW50cm9kdWN0aW9uX3RvX21hdGhlbWF0aWNhbF9maWVsZHN9XG4gKi9cbjsoZnVuY3Rpb24gaW5pdFRhYmxlcyAoKSB7XG4gIGxldCB4ID0gMVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG4gICAgRVhQX1RBQkxFW2ldID0geFxuICAgIExPR19UQUJMRVt4XSA9IGlcblxuICAgIHggPDw9IDEgLy8gbXVsdGlwbHkgYnkgMlxuXG4gICAgLy8gVGhlIFFSIGNvZGUgc3BlY2lmaWNhdGlvbiBzYXlzIHRvIHVzZSBieXRlLXdpc2UgbW9kdWxvIDEwMDAxMTEwMSBhcml0aG1ldGljLlxuICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB3aGVuIGEgbnVtYmVyIGlzIDI1NiBvciBsYXJnZXIsIGl0IHNob3VsZCBiZSBYT1JlZCB3aXRoIDB4MTFELlxuICAgIGlmICh4ICYgMHgxMDApIHsgLy8gc2ltaWxhciB0byB4ID49IDI1NiwgYnV0IGEgbG90IGZhc3RlciAoYmVjYXVzZSAweDEwMCA9PSAyNTYpXG4gICAgICB4IF49IDB4MTFEXG4gICAgfVxuICB9XG5cbiAgLy8gT3B0aW1pemF0aW9uOiBkb3VibGUgdGhlIHNpemUgb2YgdGhlIGFudGktbG9nIHRhYmxlIHNvIHRoYXQgd2UgZG9uJ3QgbmVlZCB0byBtb2QgMjU1IHRvXG4gIC8vIHN0YXkgaW5zaWRlIHRoZSBib3VuZHMgKGJlY2F1c2Ugd2Ugd2lsbCBtYWlubHkgdXNlIHRoaXMgdGFibGUgZm9yIHRoZSBtdWx0aXBsaWNhdGlvbiBvZlxuICAvLyB0d28gR0YgbnVtYmVycywgbm8gbW9yZSkuXG4gIC8vIEBzZWUge0BsaW5rIG11bH1cbiAgZm9yIChsZXQgaSA9IDI1NTsgaSA8IDUxMjsgaSsrKSB7XG4gICAgRVhQX1RBQkxFW2ldID0gRVhQX1RBQkxFW2kgLSAyNTVdXG4gIH1cbn0oKSlcblxuLyoqXG4gKiBSZXR1cm5zIGxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbiBsb2cgKG4pIHtcbiAgaWYgKG4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ2xvZygnICsgbiArICcpJylcbiAgcmV0dXJuIExPR19UQUJMRVtuXVxufVxuXG4vKipcbiAqIFJldHVybnMgYW50aS1sb2cgdmFsdWUgb2YgbiBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMuZXhwID0gZnVuY3Rpb24gZXhwIChuKSB7XG4gIHJldHVybiBFWFBfVEFCTEVbbl1cbn1cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBudW1iZXIgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0geFxuICogQHBhcmFtICB7TnVtYmVyfSB5XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cbmV4cG9ydHMubXVsID0gZnVuY3Rpb24gbXVsICh4LCB5KSB7XG4gIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHJldHVybiAwXG5cbiAgLy8gc2hvdWxkIGJlIEVYUF9UQUJMRVsoTE9HX1RBQkxFW3hdICsgTE9HX1RBQkxFW3ldKSAlIDI1NV0gaWYgRVhQX1RBQkxFIHdhc24ndCBvdmVyc2l6ZWRcbiAgLy8gQHNlZSB7QGxpbmsgaW5pdFRhYmxlc31cbiAgcmV0dXJuIEVYUF9UQUJMRVtMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV1dXG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmZ1bmN0aW9uIEthbmppRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLktBTkpJXG4gIHRoaXMuZGF0YSA9IGRhdGFcbn1cblxuS2FuamlEYXRhLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoIChsZW5ndGgpIHtcbiAgcmV0dXJuIGxlbmd0aCAqIDEzXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBLYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICBsZXQgaVxuXG4gIC8vIEluIHRoZSBTaGlmdCBKSVMgc3lzdGVtLCBLYW5qaSBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSBhIHR3byBieXRlIGNvbWJpbmF0aW9uLlxuICAvLyBUaGVzZSBieXRlIHZhbHVlcyBhcmUgc2hpZnRlZCBmcm9tIHRoZSBKSVMgWCAwMjA4IHZhbHVlcy5cbiAgLy8gSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB2YWx1ZSA9IFV0aWxzLnRvU0pJUyh0aGlzLmRhdGFbaV0pXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweDgxNDAgdG8gMHg5RkZDOlxuICAgIGlmICh2YWx1ZSA+PSAweDgxNDAgJiYgdmFsdWUgPD0gMHg5RkZDKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweDgxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4ODE0MFxuXG4gICAgLy8gRm9yIGNoYXJhY3RlcnMgd2l0aCBTaGlmdCBKSVMgdmFsdWVzIGZyb20gMHhFMDQwIHRvIDB4RUJCRlxuICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMHhFMDQwICYmIHZhbHVlIDw9IDB4RUJCRikge1xuICAgICAgLy8gU3VidHJhY3QgMHhDMTQwIGZyb20gU2hpZnQgSklTIHZhbHVlXG4gICAgICB2YWx1ZSAtPSAweEMxNDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBTSklTIGNoYXJhY3RlcjogJyArIHRoaXMuZGF0YVtpXSArICdcXG4nICtcbiAgICAgICAgJ01ha2Ugc3VyZSB5b3VyIGNoYXJzZXQgaXMgVVRGLTgnKVxuICAgIH1cblxuICAgIC8vIE11bHRpcGx5IG1vc3Qgc2lnbmlmaWNhbnQgYnl0ZSBvZiByZXN1bHQgYnkgMHhDMFxuICAgIC8vIGFuZCBhZGQgbGVhc3Qgc2lnbmlmaWNhbnQgYnl0ZSB0byBwcm9kdWN0XG4gICAgdmFsdWUgPSAoKCh2YWx1ZSA+Pj4gOCkgJiAweGZmKSAqIDB4QzApICsgKHZhbHVlICYgMHhmZilcblxuICAgIC8vIENvbnZlcnQgcmVzdWx0IHRvIGEgMTMtYml0IGJpbmFyeSBzdHJpbmdcbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEthbmppRGF0YVxuIiwiLyoqXG4gKiBEYXRhIG1hc2sgcGF0dGVybiByZWZlcmVuY2VcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuUGF0dGVybnMgPSB7XG4gIFBBVFRFUk4wMDA6IDAsXG4gIFBBVFRFUk4wMDE6IDEsXG4gIFBBVFRFUk4wMTA6IDIsXG4gIFBBVFRFUk4wMTE6IDMsXG4gIFBBVFRFUk4xMDA6IDQsXG4gIFBBVFRFUk4xMDE6IDUsXG4gIFBBVFRFUk4xMTA6IDYsXG4gIFBBVFRFUk4xMTE6IDdcbn1cblxuLyoqXG4gKiBXZWlnaHRlZCBwZW5hbHR5IHNjb3JlcyBmb3IgdGhlIHVuZGVzaXJhYmxlIGZlYXR1cmVzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBQZW5hbHR5U2NvcmVzID0ge1xuICBOMTogMyxcbiAgTjI6IDMsXG4gIE4zOiA0MCxcbiAgTjQ6IDEwXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbWFzayBwYXR0ZXJuIHZhbHVlIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgbWFzayAgICBNYXNrIHBhdHRlcm5cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1hc2spIHtcbiAgcmV0dXJuIG1hc2sgIT0gbnVsbCAmJiBtYXNrICE9PSAnJyAmJiAhaXNOYU4obWFzaykgJiYgbWFzayA+PSAwICYmIG1hc2sgPD0gN1xufVxuXG4vKipcbiAqIFJldHVybnMgbWFzayBwYXR0ZXJuIGZyb20gYSB2YWx1ZS5cbiAqIElmIHZhbHVlIGlzIG5vdCB2YWxpZCwgcmV0dXJucyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgTWFzayBwYXR0ZXJuIHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgVmFsaWQgbWFzayBwYXR0ZXJuIG9yIHVuZGVmaW5lZFxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSkge1xuICByZXR1cm4gZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSA/IHBhcnNlSW50KHZhbHVlLCAxMCkgOiB1bmRlZmluZWRcbn1cblxuLyoqXG4qIEZpbmQgYWRqYWNlbnQgbW9kdWxlcyBpbiByb3cvY29sdW1uIHdpdGggdGhlIHNhbWUgY29sb3JcbiogYW5kIGFzc2lnbiBhIHBlbmFsdHkgdmFsdWUuXG4qXG4qIFBvaW50czogTjEgKyBpXG4qIGkgaXMgdGhlIGFtb3VudCBieSB3aGljaCB0aGUgbnVtYmVyIG9mIGFkamFjZW50IG1vZHVsZXMgb2YgdGhlIHNhbWUgY29sb3IgZXhjZWVkcyA1XG4qL1xuZXhwb3J0cy5nZXRQZW5hbHR5TjEgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjEgKGRhdGEpIHtcbiAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZVxuICBsZXQgcG9pbnRzID0gMFxuICBsZXQgc2FtZUNvdW50Q29sID0gMFxuICBsZXQgc2FtZUNvdW50Um93ID0gMFxuICBsZXQgbGFzdENvbCA9IG51bGxcbiAgbGV0IGxhc3RSb3cgPSBudWxsXG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICBzYW1lQ291bnRDb2wgPSBzYW1lQ291bnRSb3cgPSAwXG4gICAgbGFzdENvbCA9IGxhc3RSb3cgPSBudWxsXG5cbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgICAgbGV0IG1vZHVsZSA9IGRhdGEuZ2V0KHJvdywgY29sKVxuICAgICAgaWYgKG1vZHVsZSA9PT0gbGFzdENvbCkge1xuICAgICAgICBzYW1lQ291bnRDb2wrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNhbWVDb3VudENvbCA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KVxuICAgICAgICBsYXN0Q29sID0gbW9kdWxlXG4gICAgICAgIHNhbWVDb3VudENvbCA9IDFcbiAgICAgIH1cblxuICAgICAgbW9kdWxlID0gZGF0YS5nZXQoY29sLCByb3cpXG4gICAgICBpZiAobW9kdWxlID09PSBsYXN0Um93KSB7XG4gICAgICAgIHNhbWVDb3VudFJvdysrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2FtZUNvdW50Um93ID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudFJvdyAtIDUpXG4gICAgICAgIGxhc3RSb3cgPSBtb2R1bGVcbiAgICAgICAgc2FtZUNvdW50Um93ID0gMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzYW1lQ291bnRDb2wgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Q29sIC0gNSlcbiAgICBpZiAoc2FtZUNvdW50Um93ID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudFJvdyAtIDUpXG4gIH1cblxuICByZXR1cm4gcG9pbnRzXG59XG5cbi8qKlxuICogRmluZCAyeDIgYmxvY2tzIHdpdGggdGhlIHNhbWUgY29sb3IgYW5kIGFzc2lnbiBhIHBlbmFsdHkgdmFsdWVcbiAqXG4gKiBQb2ludHM6IE4yICogKG0gLSAxKSAqIChuIC0gMSlcbiAqL1xuZXhwb3J0cy5nZXRQZW5hbHR5TjIgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjIgKGRhdGEpIHtcbiAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZVxuICBsZXQgcG9pbnRzID0gMFxuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemUgLSAxOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemUgLSAxOyBjb2wrKykge1xuICAgICAgY29uc3QgbGFzdCA9IGRhdGEuZ2V0KHJvdywgY29sKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdywgY29sICsgMSkgK1xuICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wpICtcbiAgICAgICAgZGF0YS5nZXQocm93ICsgMSwgY29sICsgMSlcblxuICAgICAgaWYgKGxhc3QgPT09IDQgfHwgbGFzdCA9PT0gMCkgcG9pbnRzKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzICogUGVuYWx0eVNjb3Jlcy5OMlxufVxuXG4vKipcbiAqIEZpbmQgMToxOjM6MToxIHJhdGlvIChkYXJrOmxpZ2h0OmRhcms6bGlnaHQ6ZGFyaykgcGF0dGVybiBpbiByb3cvY29sdW1uLFxuICogcHJlY2VkZWQgb3IgZm9sbG93ZWQgYnkgbGlnaHQgYXJlYSA0IG1vZHVsZXMgd2lkZVxuICpcbiAqIFBvaW50czogTjMgKiBudW1iZXIgb2YgcGF0dGVybiBmb3VuZFxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMyA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMyAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG4gIGxldCBiaXRzQ29sID0gMFxuICBsZXQgYml0c1JvdyA9IDBcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgIGJpdHNDb2wgPSBiaXRzUm93ID0gMFxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICBiaXRzQ29sID0gKChiaXRzQ29sIDw8IDEpICYgMHg3RkYpIHwgZGF0YS5nZXQocm93LCBjb2wpXG4gICAgICBpZiAoY29sID49IDEwICYmIChiaXRzQ29sID09PSAweDVEMCB8fCBiaXRzQ29sID09PSAweDA1RCkpIHBvaW50cysrXG5cbiAgICAgIGJpdHNSb3cgPSAoKGJpdHNSb3cgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChjb2wsIHJvdylcbiAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNSb3cgPT09IDB4NUQwIHx8IGJpdHNSb3cgPT09IDB4MDVEKSkgcG9pbnRzKytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzICogUGVuYWx0eVNjb3Jlcy5OM1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlcyBpbiBlbnRpcmUgc3ltYm9sXG4gKlxuICogUG9pbnRzOiBONCAqIGtcbiAqXG4gKiBrIGlzIHRoZSByYXRpbmcgb2YgdGhlIGRldmlhdGlvbiBvZiB0aGUgcHJvcG9ydGlvbiBvZiBkYXJrIG1vZHVsZXNcbiAqIGluIHRoZSBzeW1ib2wgZnJvbSA1MCUgaW4gc3RlcHMgb2YgNSVcbiAqL1xuZXhwb3J0cy5nZXRQZW5hbHR5TjQgPSBmdW5jdGlvbiBnZXRQZW5hbHR5TjQgKGRhdGEpIHtcbiAgbGV0IGRhcmtDb3VudCA9IDBcbiAgY29uc3QgbW9kdWxlc0NvdW50ID0gZGF0YS5kYXRhLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlc0NvdW50OyBpKyspIGRhcmtDb3VudCArPSBkYXRhLmRhdGFbaV1cblxuICBjb25zdCBrID0gTWF0aC5hYnMoTWF0aC5jZWlsKChkYXJrQ291bnQgKiAxMDAgLyBtb2R1bGVzQ291bnQpIC8gNSkgLSAxMClcblxuICByZXR1cm4gayAqIFBlbmFsdHlTY29yZXMuTjRcbn1cblxuLyoqXG4gKiBSZXR1cm4gbWFzayB2YWx1ZSBhdCBnaXZlbiBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbWFza1BhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0gaSAgICAgICAgICAgUm93XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGogICAgICAgICAgIENvbHVtblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICAgICBNYXNrIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldE1hc2tBdCAobWFza1BhdHRlcm4sIGksIGopIHtcbiAgc3dpdGNoIChtYXNrUGF0dGVybikge1xuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAwOiByZXR1cm4gKGkgKyBqKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAwMTogcmV0dXJuIGkgJSAyID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTA6IHJldHVybiBqICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDExOiByZXR1cm4gKGkgKyBqKSAlIDMgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMDogcmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjEwMTogcmV0dXJuIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMDogcmV0dXJuICgoaSAqIGopICUgMiArIChpICogaikgJSAzKSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjExMTogcmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT09IDBcblxuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignYmFkIG1hc2tQYXR0ZXJuOicgKyBtYXNrUGF0dGVybilcbiAgfVxufVxuXG4vKipcbiAqIEFwcGx5IGEgbWFzayBwYXR0ZXJuIHRvIGEgQml0TWF0cml4XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgICBwYXR0ZXJuIFBhdHRlcm4gcmVmZXJlbmNlIG51bWJlclxuICogQHBhcmFtICB7Qml0TWF0cml4fSBkYXRhICAgIEJpdE1hdHJpeCBkYXRhXG4gKi9cbmV4cG9ydHMuYXBwbHlNYXNrID0gZnVuY3Rpb24gYXBwbHlNYXNrIChwYXR0ZXJuLCBkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBkYXRhLnNpemVcblxuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBzaXplOyBjb2wrKykge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICBpZiAoZGF0YS5pc1Jlc2VydmVkKHJvdywgY29sKSkgY29udGludWVcbiAgICAgIGRhdGEueG9yKHJvdywgY29sLCBnZXRNYXNrQXQocGF0dGVybiwgcm93LCBjb2wpKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGJlc3QgbWFzayBwYXR0ZXJuIGZvciBkYXRhXG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBkYXRhXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IE1hc2sgcGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gKi9cbmV4cG9ydHMuZ2V0QmVzdE1hc2sgPSBmdW5jdGlvbiBnZXRCZXN0TWFzayAoZGF0YSwgc2V0dXBGb3JtYXRGdW5jKSB7XG4gIGNvbnN0IG51bVBhdHRlcm5zID0gT2JqZWN0LmtleXMoZXhwb3J0cy5QYXR0ZXJucykubGVuZ3RoXG4gIGxldCBiZXN0UGF0dGVybiA9IDBcbiAgbGV0IGxvd2VyUGVuYWx0eSA9IEluZmluaXR5XG5cbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBudW1QYXR0ZXJuczsgcCsrKSB7XG4gICAgc2V0dXBGb3JtYXRGdW5jKHApXG4gICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSlcblxuICAgIC8vIENhbGN1bGF0ZSBwZW5hbHR5XG4gICAgY29uc3QgcGVuYWx0eSA9XG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMShkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMihkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlOMyhkYXRhKSArXG4gICAgICBleHBvcnRzLmdldFBlbmFsdHlONChkYXRhKVxuXG4gICAgLy8gVW5kbyBwcmV2aW91c2x5IGFwcGxpZWQgbWFza1xuICAgIGV4cG9ydHMuYXBwbHlNYXNrKHAsIGRhdGEpXG5cbiAgICBpZiAocGVuYWx0eSA8IGxvd2VyUGVuYWx0eSkge1xuICAgICAgbG93ZXJQZW5hbHR5ID0gcGVuYWx0eVxuICAgICAgYmVzdFBhdHRlcm4gPSBwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RQYXR0ZXJuXG59XG4iLCJjb25zdCBWZXJzaW9uQ2hlY2sgPSByZXF1aXJlKCcuL3ZlcnNpb24tY2hlY2snKVxuY29uc3QgUmVnZXggPSByZXF1aXJlKCcuL3JlZ2V4JylcblxuLyoqXG4gKiBOdW1lcmljIG1vZGUgZW5jb2RlcyBkYXRhIGZyb20gdGhlIGRlY2ltYWwgZGlnaXQgc2V0ICgwIC0gOSlcbiAqIChieXRlIHZhbHVlcyAzMEhFWCB0byAzOUhFWCkuXG4gKiBOb3JtYWxseSwgMyBkYXRhIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDEwIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5OVU1FUklDID0ge1xuICBpZDogJ051bWVyaWMnLFxuICBiaXQ6IDEgPDwgMCxcbiAgY2NCaXRzOiBbMTAsIDEyLCAxNF1cbn1cblxuLyoqXG4gKiBBbHBoYW51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSBhIHNldCBvZiA0NSBjaGFyYWN0ZXJzLFxuICogaS5lLiAxMCBudW1lcmljIGRpZ2l0cyAoMCAtIDkpLFxuICogICAgICAyNiBhbHBoYWJldGljIGNoYXJhY3RlcnMgKEEgLSBaKSxcbiAqICAgYW5kIDkgc3ltYm9scyAoU1AsICQsICUsICosICssIC0sIC4sIC8sIDopLlxuICogTm9ybWFsbHksIHR3byBpbnB1dCBjaGFyYWN0ZXJzIGFyZSByZXByZXNlbnRlZCBieSAxMSBiaXRzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuQUxQSEFOVU1FUklDID0ge1xuICBpZDogJ0FscGhhbnVtZXJpYycsXG4gIGJpdDogMSA8PCAxLFxuICBjY0JpdHM6IFs5LCAxMSwgMTNdXG59XG5cbi8qKlxuICogSW4gYnl0ZSBtb2RlLCBkYXRhIGlzIGVuY29kZWQgYXQgOCBiaXRzIHBlciBjaGFyYWN0ZXIuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5CWVRFID0ge1xuICBpZDogJ0J5dGUnLFxuICBiaXQ6IDEgPDwgMixcbiAgY2NCaXRzOiBbOCwgMTYsIDE2XVxufVxuXG4vKipcbiAqIFRoZSBLYW5qaSBtb2RlIGVmZmljaWVudGx5IGVuY29kZXMgS2FuamkgY2hhcmFjdGVycyBpbiBhY2NvcmRhbmNlIHdpdGhcbiAqIHRoZSBTaGlmdCBKSVMgc3lzdGVtIGJhc2VkIG9uIEpJUyBYIDAyMDguXG4gKiBUaGUgU2hpZnQgSklTIHZhbHVlcyBhcmUgc2hpZnRlZCBmcm9tIHRoZSBKSVMgWCAwMjA4IHZhbHVlcy5cbiAqIEpJUyBYIDAyMDggZ2l2ZXMgZGV0YWlscyBvZiB0aGUgc2hpZnQgY29kZWQgcmVwcmVzZW50YXRpb24uXG4gKiBFYWNoIHR3by1ieXRlIGNoYXJhY3RlciB2YWx1ZSBpcyBjb21wYWN0ZWQgdG8gYSAxMy1iaXQgYmluYXJ5IGNvZGV3b3JkLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuS0FOSkkgPSB7XG4gIGlkOiAnS2FuamknLFxuICBiaXQ6IDEgPDwgMyxcbiAgY2NCaXRzOiBbOCwgMTAsIDEyXVxufVxuXG4vKipcbiAqIE1peGVkIG1vZGUgd2lsbCBjb250YWluIGEgc2VxdWVuY2VzIG9mIGRhdGEgaW4gYSBjb21iaW5hdGlvbiBvZiBhbnkgb2ZcbiAqIHRoZSBtb2RlcyBkZXNjcmliZWQgYWJvdmVcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk1JWEVEID0ge1xuICBiaXQ6IC0xXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGJpdHMgbmVlZGVkIHRvIHN0b3JlIHRoZSBkYXRhIGxlbmd0aFxuICogYWNjb3JkaW5nIHRvIFFSIENvZGUgc3BlY2lmaWNhdGlvbnMuXG4gKlxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgIERhdGEgbW9kZVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIE51bWJlciBvZiBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0Q2hhckNvdW50SW5kaWNhdG9yID0gZnVuY3Rpb24gZ2V0Q2hhckNvdW50SW5kaWNhdG9yIChtb2RlLCB2ZXJzaW9uKSB7XG4gIGlmICghbW9kZS5jY0JpdHMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlOiAnICsgbW9kZSlcblxuICBpZiAoIVZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZlcnNpb246ICcgKyB2ZXJzaW9uKVxuICB9XG5cbiAgaWYgKHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDwgMTApIHJldHVybiBtb2RlLmNjQml0c1swXVxuICBlbHNlIGlmICh2ZXJzaW9uIDwgMjcpIHJldHVybiBtb2RlLmNjQml0c1sxXVxuICByZXR1cm4gbW9kZS5jY0JpdHNbMl1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb3N0IGVmZmljaWVudCBtb2RlIHRvIHN0b3JlIHRoZSBzcGVjaWZpZWQgZGF0YVxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBkYXRhIHN0cmluZ1xuICogQHJldHVybiB7TW9kZX0gICAgICAgICAgIEJlc3QgbW9kZVxuICovXG5leHBvcnRzLmdldEJlc3RNb2RlRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RNb2RlRm9yRGF0YSAoZGF0YVN0cikge1xuICBpZiAoUmVnZXgudGVzdE51bWVyaWMoZGF0YVN0cikpIHJldHVybiBleHBvcnRzLk5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEFscGhhbnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuQUxQSEFOVU1FUklDXG4gIGVsc2UgaWYgKFJlZ2V4LnRlc3RLYW5qaShkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuS0FOSklcbiAgZWxzZSByZXR1cm4gZXhwb3J0cy5CWVRFXG59XG5cbi8qKlxuICogUmV0dXJuIG1vZGUgbmFtZSBhcyBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge01vZGV9IG1vZGUgTW9kZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9ICBNb2RlIG5hbWVcbiAqL1xuZXhwb3J0cy50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nIChtb2RlKSB7XG4gIGlmIChtb2RlICYmIG1vZGUuaWQpIHJldHVybiBtb2RlLmlkXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtb2RlJylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBpbnB1dCBwYXJhbSBpcyBhIHZhbGlkIG1vZGUgb2JqZWN0XG4gKlxuICogQHBhcmFtICAge01vZGV9ICAgIG1vZGUgTW9kZSBvYmplY3RcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHZhbGlkIG1vZGUsIGZhbHNlIG90aGVyd2lzZVxuICovXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChtb2RlKSB7XG4gIHJldHVybiBtb2RlICYmIG1vZGUuYml0ICYmIG1vZGUuY2NCaXRzXG59XG5cbi8qKlxuICogR2V0IG1vZGUgb2JqZWN0IGZyb20gaXRzIG5hbWVcbiAqXG4gKiBAcGFyYW0gICB7U3RyaW5nfSBzdHJpbmcgTW9kZSBuYW1lXG4gKiBAcmV0dXJucyB7TW9kZX0gICAgICAgICAgTW9kZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyYW0gaXMgbm90IGEgc3RyaW5nJylcbiAgfVxuXG4gIGNvbnN0IGxjU3RyID0gc3RyaW5nLnRvTG93ZXJDYXNlKClcblxuICBzd2l0Y2ggKGxjU3RyKSB7XG4gICAgY2FzZSAnbnVtZXJpYyc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5OVU1FUklDXG4gICAgY2FzZSAnYWxwaGFudW1lcmljJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkFMUEhBTlVNRVJJQ1xuICAgIGNhc2UgJ2thbmppJzpcbiAgICAgIHJldHVybiBleHBvcnRzLktBTkpJXG4gICAgY2FzZSAnYnl0ZSc6XG4gICAgICByZXR1cm4gZXhwb3J0cy5CWVRFXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlOiAnICsgc3RyaW5nKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBtb2RlIGZyb20gYSB2YWx1ZS5cbiAqIElmIHZhbHVlIGlzIG5vdCBhIHZhbGlkIG1vZGUsIHJldHVybnMgZGVmYXVsdFZhbHVlXG4gKlxuICogQHBhcmFtICB7TW9kZXxTdHJpbmd9IHZhbHVlICAgICAgICBFbmNvZGluZyBtb2RlXG4gKiBAcGFyYW0gIHtNb2RlfSAgICAgICAgZGVmYXVsdFZhbHVlIEZhbGxiYWNrIHZhbHVlXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgICAgICAgICAgIEVuY29kaW5nIG1vZGVcbiAqL1xuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoZXhwb3J0cy5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgfVxufVxuIiwiY29uc3QgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG5cbmZ1bmN0aW9uIE51bWVyaWNEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuTlVNRVJJQ1xuICB0aGlzLmRhdGEgPSBkYXRhLnRvU3RyaW5nKClcbn1cblxuTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gMTAgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDMpICsgKChsZW5ndGggJSAzKSA/ICgobGVuZ3RoICUgMykgKiAzICsgMSkgOiAwKVxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuTnVtZXJpY0RhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuTnVtZXJpY0RhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKGJpdEJ1ZmZlcikge1xuICBsZXQgaSwgZ3JvdXAsIHZhbHVlXG5cbiAgLy8gVGhlIGlucHV0IGRhdGEgc3RyaW5nIGlzIGRpdmlkZWQgaW50byBncm91cHMgb2YgdGhyZWUgZGlnaXRzLFxuICAvLyBhbmQgZWFjaCBncm91cCBpcyBjb252ZXJ0ZWQgdG8gaXRzIDEwLWJpdCBiaW5hcnkgZXF1aXZhbGVudC5cbiAgZm9yIChpID0gMDsgaSArIDMgPD0gdGhpcy5kYXRhLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGksIDMpXG4gICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApXG5cbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCAxMClcbiAgfVxuXG4gIC8vIElmIHRoZSBudW1iZXIgb2YgaW5wdXQgZGlnaXRzIGlzIG5vdCBhbiBleGFjdCBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgLy8gdGhlIGZpbmFsIG9uZSBvciB0d28gZGlnaXRzIGFyZSBjb252ZXJ0ZWQgdG8gNCBvciA3IGJpdHMgcmVzcGVjdGl2ZWx5LlxuICBjb25zdCByZW1haW5pbmdOdW0gPSB0aGlzLmRhdGEubGVuZ3RoIC0gaVxuICBpZiAocmVtYWluaW5nTnVtID4gMCkge1xuICAgIGdyb3VwID0gdGhpcy5kYXRhLnN1YnN0cihpKVxuICAgIHZhbHVlID0gcGFyc2VJbnQoZ3JvdXAsIDEwKVxuXG4gICAgYml0QnVmZmVyLnB1dCh2YWx1ZSwgcmVtYWluaW5nTnVtICogMyArIDEpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOdW1lcmljRGF0YVxuIiwiY29uc3QgR0YgPSByZXF1aXJlKCcuL2dhbG9pcy1maWVsZCcpXG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcG9seW5vbWlhbHMgaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IHAxIFBvbHlub21pYWxcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IHAyIFBvbHlub21pYWxcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgIFByb2R1Y3Qgb2YgcDEgYW5kIHAyXG4gKi9cbmV4cG9ydHMubXVsID0gZnVuY3Rpb24gbXVsIChwMSwgcDIpIHtcbiAgY29uc3QgY29lZmYgPSBuZXcgVWludDhBcnJheShwMS5sZW5ndGggKyBwMi5sZW5ndGggLSAxKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHAyLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb2VmZltpICsgal0gXj0gR0YubXVsKHAxW2ldLCBwMltqXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29lZmZcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHJlbWFpbmRlciBvZiBwb2x5bm9taWFscyBkaXZpc2lvblxuICpcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IGRpdmlkZW50IFBvbHlub21pYWxcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IGRpdmlzb3IgIFBvbHlub21pYWxcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgIFJlbWFpbmRlclxuICovXG5leHBvcnRzLm1vZCA9IGZ1bmN0aW9uIG1vZCAoZGl2aWRlbnQsIGRpdmlzb3IpIHtcbiAgbGV0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGRpdmlkZW50KVxuXG4gIHdoaWxlICgocmVzdWx0Lmxlbmd0aCAtIGRpdmlzb3IubGVuZ3RoKSA+PSAwKSB7XG4gICAgY29uc3QgY29lZmYgPSByZXN1bHRbMF1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2aXNvci5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0W2ldIF49IEdGLm11bChkaXZpc29yW2ldLCBjb2VmZilcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYWxsIHplcm9zIGZyb20gYnVmZmVyIGhlYWRcbiAgICBsZXQgb2Zmc2V0ID0gMFxuICAgIHdoaWxlIChvZmZzZXQgPCByZXN1bHQubGVuZ3RoICYmIHJlc3VsdFtvZmZzZXRdID09PSAwKSBvZmZzZXQrK1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZShvZmZzZXQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gaXJyZWR1Y2libGUgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2Ygc3BlY2lmaWVkIGRlZ3JlZVxuICogKHVzZWQgYnkgUmVlZC1Tb2xvbW9uIGVuY29kZXIpXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWUgRGVncmVlIG9mIHRoZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgQnVmZmVyIGNvbnRhaW5pbmcgcG9seW5vbWlhbCBjb2VmZmljaWVudHNcbiAqL1xuZXhwb3J0cy5nZW5lcmF0ZUVDUG9seW5vbWlhbCA9IGZ1bmN0aW9uIGdlbmVyYXRlRUNQb2x5bm9taWFsIChkZWdyZWUpIHtcbiAgbGV0IHBvbHkgPSBuZXcgVWludDhBcnJheShbMV0pXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVncmVlOyBpKyspIHtcbiAgICBwb2x5ID0gZXhwb3J0cy5tdWwocG9seSwgbmV3IFVpbnQ4QXJyYXkoWzEsIEdGLmV4cChpKV0pKVxuICB9XG5cbiAgcmV0dXJuIHBvbHlcbn1cbiIsImNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5jb25zdCBFQ0xldmVsID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWxldmVsJylcbmNvbnN0IEJpdEJ1ZmZlciA9IHJlcXVpcmUoJy4vYml0LWJ1ZmZlcicpXG5jb25zdCBCaXRNYXRyaXggPSByZXF1aXJlKCcuL2JpdC1tYXRyaXgnKVxuY29uc3QgQWxpZ25tZW50UGF0dGVybiA9IHJlcXVpcmUoJy4vYWxpZ25tZW50LXBhdHRlcm4nKVxuY29uc3QgRmluZGVyUGF0dGVybiA9IHJlcXVpcmUoJy4vZmluZGVyLXBhdHRlcm4nKVxuY29uc3QgTWFza1BhdHRlcm4gPSByZXF1aXJlKCcuL21hc2stcGF0dGVybicpXG5jb25zdCBFQ0NvZGUgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tY29kZScpXG5jb25zdCBSZWVkU29sb21vbkVuY29kZXIgPSByZXF1aXJlKCcuL3JlZWQtc29sb21vbi1lbmNvZGVyJylcbmNvbnN0IFZlcnNpb24gPSByZXF1aXJlKCcuL3ZlcnNpb24nKVxuY29uc3QgRm9ybWF0SW5mbyA9IHJlcXVpcmUoJy4vZm9ybWF0LWluZm8nKVxuY29uc3QgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG5jb25zdCBTZWdtZW50cyA9IHJlcXVpcmUoJy4vc2VnbWVudHMnKVxuXG4vKipcbiAqIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuICpcbiAqIG1vZGlmaWVkIGJ5IFJ5YW4gRGF5IGZvciBub2RlanMgc3VwcG9ydFxuICogQ29weXJpZ2h0IChjKSAyMDExIFJ5YW4gRGF5XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogICBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRUkNvZGUgZm9yIEphdmFTY3JpcHRcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMDkgS2F6dWhpa28gQXJhc2Vcbi8vXG4vLyBVUkw6IGh0dHA6Ly93d3cuZC1wcm9qZWN0LmNvbS9cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4vLyAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4vL1xuLy8gVGhlIHdvcmQgXCJRUiBDb2RlXCIgaXMgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2Zcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXG4vLyAgIGh0dHA6Ly93d3cuZGVuc28td2F2ZS5jb20vcXJjb2RlL2ZhcXBhdGVudC1lLmh0bWxcbi8vXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLyoqXG4gKiBBZGQgZmluZGVyIHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggIE1vZHVsZXMgbWF0cml4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKi9cbmZ1bmN0aW9uIHNldHVwRmluZGVyUGF0dGVybiAobWF0cml4LCB2ZXJzaW9uKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBjb25zdCBwb3MgPSBGaW5kZXJQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcG9zW2ldWzBdXG4gICAgY29uc3QgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKGxldCByID0gLTE7IHIgPD0gNzsgcisrKSB7XG4gICAgICBpZiAocm93ICsgciA8PSAtMSB8fCBzaXplIDw9IHJvdyArIHIpIGNvbnRpbnVlXG5cbiAgICAgIGZvciAobGV0IGMgPSAtMTsgYyA8PSA3OyBjKyspIHtcbiAgICAgICAgaWYgKGNvbCArIGMgPD0gLTEgfHwgc2l6ZSA8PSBjb2wgKyBjKSBjb250aW51ZVxuXG4gICAgICAgIGlmICgociA+PSAwICYmIHIgPD0gNiAmJiAoYyA9PT0gMCB8fCBjID09PSA2KSkgfHxcbiAgICAgICAgICAoYyA+PSAwICYmIGMgPD0gNiAmJiAociA9PT0gMCB8fCByID09PSA2KSkgfHxcbiAgICAgICAgICAociA+PSAyICYmIHIgPD0gNCAmJiBjID49IDIgJiYgYyA8PSA0KSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHRpbWluZyBwYXR0ZXJuIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUge0BsaW5rIHNldHVwQWxpZ25tZW50UGF0dGVybn1cbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICovXG5mdW5jdGlvbiBzZXR1cFRpbWluZ1BhdHRlcm4gKG1hdHJpeCkge1xuICBjb25zdCBzaXplID0gbWF0cml4LnNpemVcblxuICBmb3IgKGxldCByID0gODsgciA8IHNpemUgLSA4OyByKyspIHtcbiAgICBjb25zdCB2YWx1ZSA9IHIgJSAyID09PSAwXG4gICAgbWF0cml4LnNldChyLCA2LCB2YWx1ZSwgdHJ1ZSlcbiAgICBtYXRyaXguc2V0KDYsIHIsIHZhbHVlLCB0cnVlKVxuICB9XG59XG5cbi8qKlxuICogQWRkIGFsaWdubWVudCBwYXR0ZXJucyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIE5vdGU6IHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgYWZ0ZXIge0BsaW5rIHNldHVwVGltaW5nUGF0dGVybn1cbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBBbGlnbm1lbnRQYXR0ZXJuIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3QgcG9zID0gQWxpZ25tZW50UGF0dGVybi5nZXRQb3NpdGlvbnModmVyc2lvbilcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHBvc1tpXVswXVxuICAgIGNvbnN0IGNvbCA9IHBvc1tpXVsxXVxuXG4gICAgZm9yIChsZXQgciA9IC0yOyByIDw9IDI7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xuICAgICAgICBpZiAociA9PT0gLTIgfHwgciA9PT0gMiB8fCBjID09PSAtMiB8fCBjID09PSAyIHx8XG4gICAgICAgICAgKHIgPT09IDAgJiYgYyA9PT0gMCkpIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIHRydWUsIHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFkZCB2ZXJzaW9uIGluZm8gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBWZXJzaW9uSW5mbyAobWF0cml4LCB2ZXJzaW9uKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBjb25zdCBiaXRzID0gVmVyc2lvbi5nZXRFbmNvZGVkQml0cyh2ZXJzaW9uKVxuICBsZXQgcm93LCBjb2wsIG1vZFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTg7IGkrKykge1xuICAgIHJvdyA9IE1hdGguZmxvb3IoaSAvIDMpXG4gICAgY29sID0gaSAlIDMgKyBzaXplIC0gOCAtIDNcbiAgICBtb2QgPSAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMVxuXG4gICAgbWF0cml4LnNldChyb3csIGNvbCwgbW9kLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoY29sLCByb3csIG1vZCwgdHJ1ZSlcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBmb3JtYXQgaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICAgICAgICAgICAgICAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSAgICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIG1hc2tQYXR0ZXJuICAgICAgICAgIE1hc2sgcGF0dGVybiByZWZlcmVuY2UgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2V0dXBGb3JtYXRJbmZvIChtYXRyaXgsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybikge1xuICBjb25zdCBzaXplID0gbWF0cml4LnNpemVcbiAgY29uc3QgYml0cyA9IEZvcm1hdEluZm8uZ2V0RW5jb2RlZEJpdHMoZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKVxuICBsZXQgaSwgbW9kXG5cbiAgZm9yIChpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICBtb2QgPSAoKGJpdHMgPj4gaSkgJiAxKSA9PT0gMVxuXG4gICAgLy8gdmVydGljYWxcbiAgICBpZiAoaSA8IDYpIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDgpIHtcbiAgICAgIG1hdHJpeC5zZXQoaSArIDEsIDgsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldChzaXplIC0gMTUgKyBpLCA4LCBtb2QsIHRydWUpXG4gICAgfVxuXG4gICAgLy8gaG9yaXpvbnRhbFxuICAgIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldCg4LCBzaXplIC0gaSAtIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2UgaWYgKGkgPCA5KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIDE1IC0gaSAtIDEgKyAxLCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8vIGZpeGVkIG1vZHVsZVxuICBtYXRyaXguc2V0KHNpemUgLSA4LCA4LCAxLCB0cnVlKVxufVxuXG4vKipcbiAqIEFkZCBlbmNvZGVkIGRhdGEgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9ICBtYXRyaXggTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IGRhdGEgICBEYXRhIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBzZXR1cERhdGEgKG1hdHJpeCwgZGF0YSkge1xuICBjb25zdCBzaXplID0gbWF0cml4LnNpemVcbiAgbGV0IGluYyA9IC0xXG4gIGxldCByb3cgPSBzaXplIC0gMVxuICBsZXQgYml0SW5kZXggPSA3XG4gIGxldCBieXRlSW5kZXggPSAwXG5cbiAgZm9yIChsZXQgY29sID0gc2l6ZSAtIDE7IGNvbCA+IDA7IGNvbCAtPSAyKSB7XG4gICAgaWYgKGNvbCA9PT0gNikgY29sLS1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDI7IGMrKykge1xuICAgICAgICBpZiAoIW1hdHJpeC5pc1Jlc2VydmVkKHJvdywgY29sIC0gYykpIHtcbiAgICAgICAgICBsZXQgZGFyayA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhcmsgPSAoKChkYXRhW2J5dGVJbmRleF0gPj4+IGJpdEluZGV4KSAmIDEpID09PSAxKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG1hdHJpeC5zZXQocm93LCBjb2wgLSBjLCBkYXJrKVxuICAgICAgICAgIGJpdEluZGV4LS1cblxuICAgICAgICAgIGlmIChiaXRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGJ5dGVJbmRleCsrXG4gICAgICAgICAgICBiaXRJbmRleCA9IDdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcm93ICs9IGluY1xuXG4gICAgICBpZiAocm93IDwgMCB8fCBzaXplIDw9IHJvdykge1xuICAgICAgICByb3cgLT0gaW5jXG4gICAgICAgIGluYyA9IC1pbmNcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgZW5jb2RlZCBjb2Rld29yZHMgZnJvbSBkYXRhIGlucHV0XG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7Qnl0ZURhdGF9IGRhdGEgICAgICAgICAgICAgICAgIERhdGEgaW5wdXRcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICAgICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGNvZGV3b3Jkc1xuICovXG5mdW5jdGlvbiBjcmVhdGVEYXRhICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgc2VnbWVudHMpIHtcbiAgLy8gUHJlcGFyZSBkYXRhIGJ1ZmZlclxuICBjb25zdCBidWZmZXIgPSBuZXcgQml0QnVmZmVyKClcblxuICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gcHJlZml4IGRhdGEgd2l0aCBtb2RlIGluZGljYXRvciAoNCBiaXRzKVxuICAgIGJ1ZmZlci5wdXQoZGF0YS5tb2RlLmJpdCwgNClcblxuICAgIC8vIFByZWZpeCBkYXRhIHdpdGggY2hhcmFjdGVyIGNvdW50IGluZGljYXRvci5cbiAgICAvLyBUaGUgY2hhcmFjdGVyIGNvdW50IGluZGljYXRvciBpcyBhIHN0cmluZyBvZiBiaXRzIHRoYXQgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGFyZSBiZWluZyBlbmNvZGVkLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIG11c3QgYmUgcGxhY2VkIGFmdGVyIHRoZSBtb2RlIGluZGljYXRvclxuICAgIC8vIGFuZCBtdXN0IGJlIGEgY2VydGFpbiBudW1iZXIgb2YgYml0cyBsb25nLCBkZXBlbmRpbmcgb24gdGhlIFFSIHZlcnNpb25cbiAgICAvLyBhbmQgZGF0YSBtb2RlXG4gICAgLy8gQHNlZSB7QGxpbmsgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3J9LlxuICAgIGJ1ZmZlci5wdXQoZGF0YS5nZXRMZW5ndGgoKSwgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3IoZGF0YS5tb2RlLCB2ZXJzaW9uKSlcblxuICAgIC8vIGFkZCBiaW5hcnkgZGF0YSBzZXF1ZW5jZSB0byBidWZmZXJcbiAgICBkYXRhLndyaXRlKGJ1ZmZlcilcbiAgfSlcblxuICAvLyBDYWxjdWxhdGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJpdHNcbiAgY29uc3QgdG90YWxDb2Rld29yZHMgPSBVdGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKVxuICBjb25zdCBlY1RvdGFsQ29kZXdvcmRzID0gRUNDb2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG4gIGNvbnN0IGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgPSAodG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzKSAqIDhcblxuICAvLyBBZGQgYSB0ZXJtaW5hdG9yLlxuICAvLyBJZiB0aGUgYml0IHN0cmluZyBpcyBzaG9ydGVyIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiByZXF1aXJlZCBiaXRzLFxuICAvLyBhIHRlcm1pbmF0b3Igb2YgdXAgdG8gZm91ciAwcyBtdXN0IGJlIGFkZGVkIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzdHJpbmcuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIG1vcmUgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciB0aGFuIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYml0cyxcbiAgLy8gYWRkIGZvdXIgMHMgdG8gdGhlIGVuZC5cbiAgaWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gZGF0YVRvdGFsQ29kZXdvcmRzQml0cykge1xuICAgIGJ1ZmZlci5wdXQoMCwgNClcbiAgfVxuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIGZld2VyIHRoYW4gZm91ciBiaXRzIHNob3J0ZXIsIGFkZCBvbmx5IHRoZSBudW1iZXIgb2YgMHMgdGhhdFxuICAvLyBhcmUgbmVlZGVkIHRvIHJlYWNoIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYml0cy5cblxuICAvLyBBZnRlciBhZGRpbmcgdGhlIHRlcm1pbmF0b3IsIGlmIHRoZSBudW1iZXIgb2YgYml0cyBpbiB0aGUgc3RyaW5nIGlzIG5vdCBhIG11bHRpcGxlIG9mIDgsXG4gIC8vIHBhZCB0aGUgc3RyaW5nIG9uIHRoZSByaWdodCB3aXRoIDBzIHRvIG1ha2UgdGhlIHN0cmluZydzIGxlbmd0aCBhIG11bHRpcGxlIG9mIDguXG4gIHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9PSAwKSB7XG4gICAgYnVmZmVyLnB1dEJpdCgwKVxuICB9XG5cbiAgLy8gQWRkIHBhZCBieXRlcyBpZiB0aGUgc3RyaW5nIGlzIHN0aWxsIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMuXG4gIC8vIEV4dGVuZCB0aGUgYnVmZmVyIHRvIGZpbGwgdGhlIGRhdGEgY2FwYWNpdHkgb2YgdGhlIHN5bWJvbCBjb3JyZXNwb25kaW5nIHRvXG4gIC8vIHRoZSBWZXJzaW9uIGFuZCBFcnJvciBDb3JyZWN0aW9uIExldmVsIGJ5IGFkZGluZyB0aGUgUGFkIENvZGV3b3JkcyAxMTEwMTEwMCAoMHhFQylcbiAgLy8gYW5kIDAwMDEwMDAxICgweDExKSBhbHRlcm5hdGVseS5cbiAgY29uc3QgcmVtYWluaW5nQnl0ZSA9IChkYXRhVG90YWxDb2Rld29yZHNCaXRzIC0gYnVmZmVyLmdldExlbmd0aEluQml0cygpKSAvIDhcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1haW5pbmdCeXRlOyBpKyspIHtcbiAgICBidWZmZXIucHV0KGkgJSAyID8gMHgxMSA6IDB4RUMsIDgpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlQ29kZXdvcmRzKGJ1ZmZlciwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG59XG5cbi8qKlxuICogRW5jb2RlIGlucHV0IGRhdGEgd2l0aCBSZWVkLVNvbG9tb24gYW5kIHJldHVybiBjb2Rld29yZHMgd2l0aFxuICogcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogQHBhcmFtICB7Qml0QnVmZmVyfSBiaXRCdWZmZXIgICAgICAgICAgICBEYXRhIHRvIGVuY29kZVxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge0Vycm9yQ29ycmVjdGlvbkxldmVsfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvZGV3b3JkcyAoYml0QnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICAvLyBUb3RhbCBjb2Rld29yZHMgZm9yIHRoaXMgUVIgY29kZSB2ZXJzaW9uIChEYXRhICsgRXJyb3IgY29ycmVjdGlvbilcbiAgY29uc3QgdG90YWxDb2Rld29yZHMgPSBVdGlscy5nZXRTeW1ib2xUb3RhbENvZGV3b3Jkcyh2ZXJzaW9uKVxuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3Jkc1xuICBjb25zdCBlY1RvdGFsQ29kZXdvcmRzID0gRUNDb2RlLmdldFRvdGFsQ29kZXdvcmRzQ291bnQodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGRhdGEgY29kZXdvcmRzXG4gIGNvbnN0IGRhdGFUb3RhbENvZGV3b3JkcyA9IHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3Jkc1xuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBibG9ja3NcbiAgY29uc3QgZWNUb3RhbEJsb2NrcyA9IEVDQ29kZS5nZXRCbG9ja3NDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBDYWxjdWxhdGUgaG93IG1hbnkgYmxvY2tzIGVhY2ggZ3JvdXAgc2hvdWxkIGNvbnRhaW5cbiAgY29uc3QgYmxvY2tzSW5Hcm91cDIgPSB0b3RhbENvZGV3b3JkcyAlIGVjVG90YWxCbG9ja3NcbiAgY29uc3QgYmxvY2tzSW5Hcm91cDEgPSBlY1RvdGFsQmxvY2tzIC0gYmxvY2tzSW5Hcm91cDJcblxuICBjb25zdCB0b3RhbENvZGV3b3Jkc0luR3JvdXAxID0gTWF0aC5mbG9vcih0b3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpXG5cbiAgY29uc3QgZGF0YUNvZGV3b3Jkc0luR3JvdXAxID0gTWF0aC5mbG9vcihkYXRhVG90YWxDb2Rld29yZHMgLyBlY1RvdGFsQmxvY2tzKVxuICBjb25zdCBkYXRhQ29kZXdvcmRzSW5Hcm91cDIgPSBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgKyAxXG5cbiAgLy8gTnVtYmVyIG9mIEVDIGNvZGV3b3JkcyBpcyB0aGUgc2FtZSBmb3IgYm90aCBncm91cHNcbiAgY29uc3QgZWNDb3VudCA9IHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgLSBkYXRhQ29kZXdvcmRzSW5Hcm91cDFcblxuICAvLyBJbml0aWFsaXplIGEgUmVlZC1Tb2xvbW9uIGVuY29kZXIgd2l0aCBhIGdlbmVyYXRvciBwb2x5bm9taWFsIG9mIGRlZ3JlZSBlY0NvdW50XG4gIGNvbnN0IHJzID0gbmV3IFJlZWRTb2xvbW9uRW5jb2RlcihlY0NvdW50KVxuXG4gIGxldCBvZmZzZXQgPSAwXG4gIGNvbnN0IGRjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICBjb25zdCBlY0RhdGEgPSBuZXcgQXJyYXkoZWNUb3RhbEJsb2NrcylcbiAgbGV0IG1heERhdGFTaXplID0gMFxuICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShiaXRCdWZmZXIuYnVmZmVyKVxuXG4gIC8vIERpdmlkZSB0aGUgYnVmZmVyIGludG8gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBibG9ja3NcbiAgZm9yIChsZXQgYiA9IDA7IGIgPCBlY1RvdGFsQmxvY2tzOyBiKyspIHtcbiAgICBjb25zdCBkYXRhU2l6ZSA9IGIgPCBibG9ja3NJbkdyb3VwMSA/IGRhdGFDb2Rld29yZHNJbkdyb3VwMSA6IGRhdGFDb2Rld29yZHNJbkdyb3VwMlxuXG4gICAgLy8gZXh0cmFjdCBhIGJsb2NrIG9mIGRhdGEgZnJvbSBidWZmZXJcbiAgICBkY0RhdGFbYl0gPSBidWZmZXIuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBkYXRhU2l6ZSlcblxuICAgIC8vIENhbGN1bGF0ZSBFQyBjb2Rld29yZHMgZm9yIHRoaXMgZGF0YSBibG9ja1xuICAgIGVjRGF0YVtiXSA9IHJzLmVuY29kZShkY0RhdGFbYl0pXG5cbiAgICBvZmZzZXQgKz0gZGF0YVNpemVcbiAgICBtYXhEYXRhU2l6ZSA9IE1hdGgubWF4KG1heERhdGFTaXplLCBkYXRhU2l6ZSlcbiAgfVxuXG4gIC8vIENyZWF0ZSBmaW5hbCBkYXRhXG4gIC8vIEludGVybGVhdmUgdGhlIGRhdGEgYW5kIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGZyb20gZWFjaCBibG9ja1xuICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodG90YWxDb2Rld29yZHMpXG4gIGxldCBpbmRleCA9IDBcbiAgbGV0IGksIHJcblxuICAvLyBBZGQgZGF0YSBjb2Rld29yZHNcbiAgZm9yIChpID0gMDsgaSA8IG1heERhdGFTaXplOyBpKyspIHtcbiAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICBpZiAoaSA8IGRjRGF0YVtyXS5sZW5ndGgpIHtcbiAgICAgICAgZGF0YVtpbmRleCsrXSA9IGRjRGF0YVtyXVtpXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGVkIEVDIGNvZGV3b3Jkc1xuICBmb3IgKGkgPSAwOyBpIDwgZWNDb3VudDsgaSsrKSB7XG4gICAgZm9yIChyID0gMDsgciA8IGVjVG90YWxCbG9ja3M7IHIrKykge1xuICAgICAgZGF0YVtpbmRleCsrXSA9IGVjRGF0YVtyXVtpXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogQnVpbGQgUVIgQ29kZSBzeW1ib2xcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSAge0Vycm9yQ29ycmV0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGxldmVsXG4gKiBAcGFyYW0gIHtNYXNrUGF0dGVybn0gbWFza1BhdHRlcm4gICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICBPYmplY3QgY29udGFpbmluZyBzeW1ib2wgZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVTeW1ib2wgKGRhdGEsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybikge1xuICBsZXQgc2VnbWVudHNcblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHNlZ21lbnRzID0gU2VnbWVudHMuZnJvbUFycmF5KGRhdGEpXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IGVzdGltYXRlZFZlcnNpb24gPSB2ZXJzaW9uXG5cbiAgICBpZiAoIWVzdGltYXRlZFZlcnNpb24pIHtcbiAgICAgIGNvbnN0IHJhd1NlZ21lbnRzID0gU2VnbWVudHMucmF3U3BsaXQoZGF0YSlcblxuICAgICAgLy8gRXN0aW1hdGUgYmVzdCB2ZXJzaW9uIHRoYXQgY2FuIGNvbnRhaW4gcmF3IHNwbGl0dGVkIHNlZ21lbnRzXG4gICAgICBlc3RpbWF0ZWRWZXJzaW9uID0gVmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEocmF3U2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIG9wdGltaXplZCBzZWdtZW50c1xuICAgIC8vIElmIGVzdGltYXRlZCB2ZXJzaW9uIGlzIHVuZGVmaW5lZCwgdHJ5IHdpdGggdGhlIGhpZ2hlc3QgdmVyc2lvblxuICAgIHNlZ21lbnRzID0gU2VnbWVudHMuZnJvbVN0cmluZyhkYXRhLCBlc3RpbWF0ZWRWZXJzaW9uIHx8IDQwKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRhJylcbiAgfVxuXG4gIC8vIEdldCB0aGUgbWluIHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiBkYXRhXG4gIGNvbnN0IGJlc3RWZXJzaW9uID0gVmVyc2lvbi5nZXRCZXN0VmVyc2lvbkZvckRhdGEoc2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIElmIG5vIHZlcnNpb24gaXMgZm91bmQsIGRhdGEgY2Fubm90IGJlIHN0b3JlZFxuICBpZiAoIWJlc3RWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYW1vdW50IG9mIGRhdGEgaXMgdG9vIGJpZyB0byBiZSBzdG9yZWQgaW4gYSBRUiBDb2RlJylcbiAgfVxuXG4gIC8vIElmIG5vdCBzcGVjaWZpZWQsIHVzZSBtaW4gdmVyc2lvbiBhcyBkZWZhdWx0XG4gIGlmICghdmVyc2lvbikge1xuICAgIHZlcnNpb24gPSBiZXN0VmVyc2lvblxuXG4gIC8vIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBjYW4gY29udGFpbiB0aGUgZGF0YVxuICB9IGVsc2UgaWYgKHZlcnNpb24gPCBiZXN0VmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignXFxuJyArXG4gICAgICAnVGhlIGNob3NlbiBRUiBDb2RlIHZlcnNpb24gY2Fubm90IGNvbnRhaW4gdGhpcyBhbW91bnQgb2YgZGF0YS5cXG4nICtcbiAgICAgICdNaW5pbXVtIHZlcnNpb24gcmVxdWlyZWQgdG8gc3RvcmUgY3VycmVudCBkYXRhIGlzOiAnICsgYmVzdFZlcnNpb24gKyAnLlxcbidcbiAgICApXG4gIH1cblxuICBjb25zdCBkYXRhQml0cyA9IGNyZWF0ZURhdGEodmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIHNlZ21lbnRzKVxuXG4gIC8vIEFsbG9jYXRlIG1hdHJpeCBidWZmZXJcbiAgY29uc3QgbW9kdWxlQ291bnQgPSBVdGlscy5nZXRTeW1ib2xTaXplKHZlcnNpb24pXG4gIGNvbnN0IG1vZHVsZXMgPSBuZXcgQml0TWF0cml4KG1vZHVsZUNvdW50KVxuXG4gIC8vIEFkZCBmdW5jdGlvbiBtb2R1bGVzXG4gIHNldHVwRmluZGVyUGF0dGVybihtb2R1bGVzLCB2ZXJzaW9uKVxuICBzZXR1cFRpbWluZ1BhdHRlcm4obW9kdWxlcylcbiAgc2V0dXBBbGlnbm1lbnRQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24pXG5cbiAgLy8gQWRkIHRlbXBvcmFyeSBkdW1teSBiaXRzIGZvciBmb3JtYXQgaW5mbyBqdXN0IHRvIHNldCB0aGVtIGFzIHJlc2VydmVkLlxuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBwcmV2ZW50IHRoZXNlIGJpdHMgZnJvbSBiZWluZyBtYXNrZWQgYnkge0BsaW5rIE1hc2tQYXR0ZXJuLmFwcGx5TWFza31cbiAgLy8gc2luY2UgdGhlIG1hc2tpbmcgb3BlcmF0aW9uIG11c3QgYmUgcGVyZm9ybWVkIG9ubHkgb24gdGhlIGVuY29kaW5nIHJlZ2lvbi5cbiAgLy8gVGhlc2UgYmxvY2tzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBjb3JyZWN0IHZhbHVlcyBsYXRlciBpbiBjb2RlLlxuICBzZXR1cEZvcm1hdEluZm8obW9kdWxlcywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIDApXG5cbiAgaWYgKHZlcnNpb24gPj0gNykge1xuICAgIHNldHVwVmVyc2lvbkluZm8obW9kdWxlcywgdmVyc2lvbilcbiAgfVxuXG4gIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICBzZXR1cERhdGEobW9kdWxlcywgZGF0YUJpdHMpXG5cbiAgaWYgKGlzTmFOKG1hc2tQYXR0ZXJuKSkge1xuICAgIC8vIEZpbmQgYmVzdCBtYXNrIHBhdHRlcm5cbiAgICBtYXNrUGF0dGVybiA9IE1hc2tQYXR0ZXJuLmdldEJlc3RNYXNrKG1vZHVsZXMsXG4gICAgICBzZXR1cEZvcm1hdEluZm8uYmluZChudWxsLCBtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkpXG4gIH1cblxuICAvLyBBcHBseSBtYXNrIHBhdHRlcm5cbiAgTWFza1BhdHRlcm4uYXBwbHlNYXNrKG1hc2tQYXR0ZXJuLCBtb2R1bGVzKVxuXG4gIC8vIFJlcGxhY2UgZm9ybWF0IGluZm8gYml0cyB3aXRoIGNvcnJlY3QgdmFsdWVzXG4gIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pXG5cbiAgcmV0dXJuIHtcbiAgICBtb2R1bGVzOiBtb2R1bGVzLFxuICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IGVycm9yQ29ycmVjdGlvbkxldmVsLFxuICAgIG1hc2tQYXR0ZXJuOiBtYXNrUGF0dGVybixcbiAgICBzZWdtZW50czogc2VnbWVudHNcbiAgfVxufVxuXG4vKipcbiAqIFFSIENvZGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZyB8IEFycmF5fSBkYXRhICAgICAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAgICAgICAgICAgICAgICAgICAgICBPcHRpb25hbCBjb25maWd1cmF0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IG9wdGlvbnMudmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25zLnRvU0pJU0Z1bmMgICAgICAgICBIZWxwZXIgZnVuYyB0byBjb252ZXJ0IHV0ZjggdG8gc2ppc1xuICovXG5leHBvcnRzLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSAoZGF0YSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnIHx8IGRhdGEgPT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbnB1dCB0ZXh0JylcbiAgfVxuXG4gIGxldCBlcnJvckNvcnJlY3Rpb25MZXZlbCA9IEVDTGV2ZWwuTVxuICBsZXQgdmVyc2lvblxuICBsZXQgbWFza1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBVc2UgaGlnaGVyIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgYXMgZGVmYXVsdFxuICAgIGVycm9yQ29ycmVjdGlvbkxldmVsID0gRUNMZXZlbC5mcm9tKG9wdGlvbnMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIEVDTGV2ZWwuTSlcbiAgICB2ZXJzaW9uID0gVmVyc2lvbi5mcm9tKG9wdGlvbnMudmVyc2lvbilcbiAgICBtYXNrID0gTWFza1BhdHRlcm4uZnJvbShvcHRpb25zLm1hc2tQYXR0ZXJuKVxuXG4gICAgaWYgKG9wdGlvbnMudG9TSklTRnVuYykge1xuICAgICAgVXRpbHMuc2V0VG9TSklTRnVuY3Rpb24ob3B0aW9ucy50b1NKSVNGdW5jKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVTeW1ib2woZGF0YSwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2spXG59XG4iLCJjb25zdCBQb2x5bm9taWFsID0gcmVxdWlyZSgnLi9wb2x5bm9taWFsJylcblxuZnVuY3Rpb24gUmVlZFNvbG9tb25FbmNvZGVyIChkZWdyZWUpIHtcbiAgdGhpcy5nZW5Qb2x5ID0gdW5kZWZpbmVkXG4gIHRoaXMuZGVncmVlID0gZGVncmVlXG5cbiAgaWYgKHRoaXMuZGVncmVlKSB0aGlzLmluaXRpYWxpemUodGhpcy5kZWdyZWUpXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZW5jb2Rlci5cbiAqIFRoZSBpbnB1dCBwYXJhbSBzaG91bGQgY29ycmVzcG9uZCB0byB0aGUgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gZGVncmVlXG4gKi9cblJlZWRTb2xvbW9uRW5jb2Rlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUgKGRlZ3JlZSkge1xuICAvLyBjcmVhdGUgYW4gaXJyZWR1Y2libGUgZ2VuZXJhdG9yIHBvbHlub21pYWxcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcbiAgdGhpcy5nZW5Qb2x5ID0gUG9seW5vbWlhbC5nZW5lcmF0ZUVDUG9seW5vbWlhbCh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBFbmNvZGVzIGEgY2h1bmsgb2YgZGF0YVxuICpcbiAqIEBwYXJhbSAge1VpbnQ4QXJyYXl9IGRhdGEgQnVmZmVyIGNvbnRhaW5pbmcgaW5wdXQgZGF0YVxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICBCdWZmZXIgY29udGFpbmluZyBlbmNvZGVkIGRhdGFcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUgKGRhdGEpIHtcbiAgaWYgKCF0aGlzLmdlblBvbHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VuY29kZXIgbm90IGluaXRpYWxpemVkJylcbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBFQyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gIC8vIGV4dGVuZHMgZGF0YSBzaXplIHRvIGRhdGErZ2VuUG9seSBzaXplXG4gIGNvbnN0IHBhZGRlZERhdGEgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aCArIHRoaXMuZGVncmVlKVxuICBwYWRkZWREYXRhLnNldChkYXRhKVxuXG4gIC8vIFRoZSBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyBhcmUgdGhlIHJlbWFpbmRlciBhZnRlciBkaXZpZGluZyB0aGUgZGF0YSBjb2Rld29yZHNcbiAgLy8gYnkgYSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICBjb25zdCByZW1haW5kZXIgPSBQb2x5bm9taWFsLm1vZChwYWRkZWREYXRhLCB0aGlzLmdlblBvbHkpXG5cbiAgLy8gcmV0dXJuIEVDIGRhdGEgYmxvY2tzIChsYXN0IG4gYnl0ZSwgd2hlcmUgbiBpcyB0aGUgZGVncmVlIG9mIGdlblBvbHkpXG4gIC8vIElmIGNvZWZmaWNpZW50cyBudW1iZXIgaW4gcmVtYWluZGVyIGFyZSBsZXNzIHRoYW4gZ2VuUG9seSBkZWdyZWUsXG4gIC8vIHBhZCB3aXRoIDBzIHRvIHRoZSBsZWZ0IHRvIHJlYWNoIHRoZSBuZWVkZWQgbnVtYmVyIG9mIGNvZWZmaWNpZW50c1xuICBjb25zdCBzdGFydCA9IHRoaXMuZGVncmVlIC0gcmVtYWluZGVyLmxlbmd0aFxuICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgY29uc3QgYnVmZiA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGVncmVlKVxuICAgIGJ1ZmYuc2V0KHJlbWFpbmRlciwgc3RhcnQpXG5cbiAgICByZXR1cm4gYnVmZlxuICB9XG5cbiAgcmV0dXJuIHJlbWFpbmRlclxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZWRTb2xvbW9uRW5jb2RlclxuIiwiY29uc3QgbnVtZXJpYyA9ICdbMC05XSsnXG5jb25zdCBhbHBoYW51bWVyaWMgPSAnW0EtWiAkJSorXFxcXC0uLzpdKydcbmxldCBrYW5qaSA9ICcoPzpbdTMwMDAtdTMwM0ZdfFt1MzA0MC11MzA5Rl18W3UzMEEwLXUzMEZGXXwnICtcbiAgJ1t1RkYwMC11RkZFRl18W3U0RTAwLXU5RkFGXXxbdTI2MDUtdTI2MDZdfFt1MjE5MC11MjE5NV18dTIwM0J8JyArXG4gICdbdTIwMTB1MjAxNXUyMDE4dTIwMTl1MjAyNXUyMDI2dTIwMUN1MjAxRHUyMjI1dTIyNjBdfCcgK1xuICAnW3UwMzkxLXUwNDUxXXxbdTAwQTd1MDBBOHUwMEIxdTAwQjR1MDBEN3UwMEY3XSkrJ1xua2FuamkgPSBrYW5qaS5yZXBsYWNlKC91L2csICdcXFxcdScpXG5cbmNvbnN0IGJ5dGUgPSAnKD86KD8hW0EtWjAtOSAkJSorXFxcXC0uLzpdfCcgKyBrYW5qaSArICcpKD86LnxbXFxyXFxuXSkpKydcblxuZXhwb3J0cy5LQU5KSSA9IG5ldyBSZWdFeHAoa2FuamksICdnJylcbmV4cG9ydHMuQllURV9LQU5KSSA9IG5ldyBSZWdFeHAoJ1teQS1aMC05ICQlKitcXFxcLS4vOl0rJywgJ2cnKVxuZXhwb3J0cy5CWVRFID0gbmV3IFJlZ0V4cChieXRlLCAnZycpXG5leHBvcnRzLk5VTUVSSUMgPSBuZXcgUmVnRXhwKG51bWVyaWMsICdnJylcbmV4cG9ydHMuQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cChhbHBoYW51bWVyaWMsICdnJylcblxuY29uc3QgVEVTVF9LQU5KSSA9IG5ldyBSZWdFeHAoJ14nICsga2FuamkgKyAnJCcpXG5jb25zdCBURVNUX05VTUVSSUMgPSBuZXcgUmVnRXhwKCdeJyArIG51bWVyaWMgKyAnJCcpXG5jb25zdCBURVNUX0FMUEhBTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ15bQS1aMC05ICQlKitcXFxcLS4vOl0rJCcpXG5cbmV4cG9ydHMudGVzdEthbmppID0gZnVuY3Rpb24gdGVzdEthbmppIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfS0FOSkkudGVzdChzdHIpXG59XG5cbmV4cG9ydHMudGVzdE51bWVyaWMgPSBmdW5jdGlvbiB0ZXN0TnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX05VTUVSSUMudGVzdChzdHIpXG59XG5cbmV4cG9ydHMudGVzdEFscGhhbnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3RBbHBoYW51bWVyaWMgKHN0cikge1xuICByZXR1cm4gVEVTVF9BTFBIQU5VTUVSSUMudGVzdChzdHIpXG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IE51bWVyaWNEYXRhID0gcmVxdWlyZSgnLi9udW1lcmljLWRhdGEnKVxuY29uc3QgQWxwaGFudW1lcmljRGF0YSA9IHJlcXVpcmUoJy4vYWxwaGFudW1lcmljLWRhdGEnKVxuY29uc3QgQnl0ZURhdGEgPSByZXF1aXJlKCcuL2J5dGUtZGF0YScpXG5jb25zdCBLYW5qaURhdGEgPSByZXF1aXJlKCcuL2thbmppLWRhdGEnKVxuY29uc3QgUmVnZXggPSByZXF1aXJlKCcuL3JlZ2V4JylcbmNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5jb25zdCBkaWprc3RyYSA9IHJlcXVpcmUoJ2RpamtzdHJhanMnKVxuXG4vKipcbiAqIFJldHVybnMgVVRGOCBieXRlIGxlbmd0aFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyIElucHV0IHN0cmluZ1xuICogQHJldHVybiB7TnVtYmVyfSAgICAgTnVtYmVyIG9mIGJ5dGVcbiAqL1xuZnVuY3Rpb24gZ2V0U3RyaW5nQnl0ZUxlbmd0aCAoc3RyKSB7XG4gIHJldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkubGVuZ3RoXG59XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBzZWdtZW50cyBvZiB0aGUgc3BlY2lmaWVkIG1vZGVcbiAqIGZyb20gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgU2VnbWVudCBtb2RlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHN0ciAgU3RyaW5nIHRvIHByb2Nlc3NcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGdldFNlZ21lbnRzIChyZWdleCwgbW9kZSwgc3RyKSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gW11cbiAgbGV0IHJlc3VsdFxuXG4gIHdoaWxlICgocmVzdWx0ID0gcmVnZXguZXhlYyhzdHIpKSAhPT0gbnVsbCkge1xuICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAgZGF0YTogcmVzdWx0WzBdLFxuICAgICAgaW5kZXg6IHJlc3VsdC5pbmRleCxcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBsZW5ndGg6IHJlc3VsdFswXS5sZW5ndGhcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzXG59XG5cbi8qKlxuICogRXh0cmFjdHMgYSBzZXJpZXMgb2Ygc2VnbWVudHMgd2l0aCB0aGUgYXBwcm9wcmlhdGVcbiAqIG1vZGVzIGZyb20gYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGFTdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50c0Zyb21TdHJpbmcgKGRhdGFTdHIpIHtcbiAgY29uc3QgbnVtU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4Lk5VTUVSSUMsIE1vZGUuTlVNRVJJQywgZGF0YVN0cilcbiAgY29uc3QgYWxwaGFOdW1TZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQUxQSEFOVU1FUklDLCBNb2RlLkFMUEhBTlVNRVJJQywgZGF0YVN0cilcbiAgbGV0IGJ5dGVTZWdzXG4gIGxldCBrYW5qaVNlZ3NcblxuICBpZiAoVXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpIHtcbiAgICBieXRlU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LkJZVEUsIE1vZGUuQllURSwgZGF0YVN0cilcbiAgICBrYW5qaVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5LQU5KSSwgTW9kZS5LQU5KSSwgZGF0YVN0cilcbiAgfSBlbHNlIHtcbiAgICBieXRlU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LkJZVEVfS0FOSkksIE1vZGUuQllURSwgZGF0YVN0cilcbiAgICBrYW5qaVNlZ3MgPSBbXVxuICB9XG5cbiAgY29uc3Qgc2VncyA9IG51bVNlZ3MuY29uY2F0KGFscGhhTnVtU2VncywgYnl0ZVNlZ3MsIGthbmppU2VncylcblxuICByZXR1cm4gc2Vnc1xuICAgIC5zb3J0KGZ1bmN0aW9uIChzMSwgczIpIHtcbiAgICAgIHJldHVybiBzMS5pbmRleCAtIHMyLmluZGV4XG4gICAgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IG9iai5kYXRhLFxuICAgICAgICBtb2RlOiBvYmoubW9kZSxcbiAgICAgICAgbGVuZ3RoOiBvYmoubGVuZ3RoXG4gICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGhvdyBtYW55IGJpdHMgYXJlIG5lZWRlZCB0byBlbmNvZGUgYSBzdHJpbmcgb2ZcbiAqIHNwZWNpZmllZCBsZW5ndGggd2l0aCB0aGUgc3BlY2lmaWVkIG1vZGVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGxlbmd0aCBTdHJpbmcgbGVuZ3RoXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICBTZWdtZW50IG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgIEJpdCBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudEJpdHNMZW5ndGggKGxlbmd0aCwgbW9kZSkge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBOdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIEFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aChsZW5ndGgpXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICAgIHJldHVybiBCeXRlRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlcyBhZGphY2VudCBzZWdtZW50cyB3aGljaCBoYXZlIHRoZSBzYW1lIG1vZGVcbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gc2VncyBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU2VnbWVudHMgKHNlZ3MpIHtcbiAgcmV0dXJuIHNlZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgICBjb25zdCBwcmV2U2VnID0gYWNjLmxlbmd0aCAtIDEgPj0gMCA/IGFjY1thY2MubGVuZ3RoIC0gMV0gOiBudWxsXG4gICAgaWYgKHByZXZTZWcgJiYgcHJldlNlZy5tb2RlID09PSBjdXJyLm1vZGUpIHtcbiAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0uZGF0YSArPSBjdXJyLmRhdGFcbiAgICAgIHJldHVybiBhY2NcbiAgICB9XG5cbiAgICBhY2MucHVzaChjdXJyKVxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbGlzdCBvZiBhbGwgcG9zc2libGUgbm9kZXMgY29tYmluYXRpb24gd2hpY2hcbiAqIHdpbGwgYmUgdXNlZCB0byBidWlsZCBhIHNlZ21lbnRzIGdyYXBoLlxuICpcbiAqIE5vZGVzIGFyZSBkaXZpZGVkIGJ5IGdyb3Vwcy4gRWFjaCBncm91cCB3aWxsIGNvbnRhaW4gYSBsaXN0IG9mIGFsbCB0aGUgbW9kZXNcbiAqIGluIHdoaWNoIGlzIHBvc3NpYmxlIHRvIGVuY29kZSB0aGUgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBGb3IgZXhhbXBsZSB0aGUgdGV4dCAnMTIzNDUnIGNhbiBiZSBlbmNvZGVkIGFzIE51bWVyaWMsIEFscGhhbnVtZXJpYyBvciBCeXRlLlxuICogVGhlIGdyb3VwIGZvciAnMTIzNDUnIHdpbGwgY29udGFpbiB0aGVuIDMgb2JqZWN0cywgb25lIGZvciBlYWNoXG4gKiBwb3NzaWJsZSBlbmNvZGluZyBtb2RlLlxuICpcbiAqIEVhY2ggbm9kZSByZXByZXNlbnRzIGEgcG9zc2libGUgc2VnbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gc2VncyBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTm9kZXMgKHNlZ3MpIHtcbiAgY29uc3Qgbm9kZXMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzZWcgPSBzZWdzW2ldXG5cbiAgICBzd2l0Y2ggKHNlZy5tb2RlKSB7XG4gICAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgICAgbm9kZXMucHVzaChbc2VnLFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQUxQSEFOVU1FUklDLCBsZW5ndGg6IHNlZy5sZW5ndGggfSxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5CWVRFLCBsZW5ndGg6IHNlZy5sZW5ndGggfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5CWVRFLCBsZW5ndGg6IGdldFN0cmluZ0J5dGVMZW5ndGgoc2VnLmRhdGEpIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgICBub2Rlcy5wdXNoKFtcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2Rlc1xufVxuXG4vKipcbiAqIEJ1aWxkcyBhIGdyYXBoIGZyb20gYSBsaXN0IG9mIG5vZGVzLlxuICogQWxsIHNlZ21lbnRzIGluIGVhY2ggbm9kZSBncm91cCB3aWxsIGJlIGNvbm5lY3RlZCB3aXRoIGFsbCB0aGUgc2VnbWVudHMgb2ZcbiAqIHRoZSBuZXh0IGdyb3VwIGFuZCBzbyBvbi5cbiAqXG4gKiBBdCBlYWNoIGNvbm5lY3Rpb24gd2lsbCBiZSBhc3NpZ25lZCBhIHdlaWdodCBkZXBlbmRpbmcgb24gdGhlXG4gKiBzZWdtZW50J3MgYnl0ZSBsZW5ndGguXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IG5vZGVzICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBHcmFwaCBvZiBhbGwgcG9zc2libGUgc2VnbWVudHNcbiAqL1xuZnVuY3Rpb24gYnVpbGRHcmFwaCAobm9kZXMsIHZlcnNpb24pIHtcbiAgY29uc3QgdGFibGUgPSB7fVxuICBjb25zdCBncmFwaCA9IHsgc3RhcnQ6IHt9IH1cbiAgbGV0IHByZXZOb2RlSWRzID0gWydzdGFydCddXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGVHcm91cCA9IG5vZGVzW2ldXG4gICAgY29uc3QgY3VycmVudE5vZGVJZHMgPSBbXVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBub2RlR3JvdXAubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBub2RlR3JvdXBbal1cbiAgICAgIGNvbnN0IGtleSA9ICcnICsgaSArIGpcblxuICAgICAgY3VycmVudE5vZGVJZHMucHVzaChrZXkpXG4gICAgICB0YWJsZVtrZXldID0geyBub2RlOiBub2RlLCBsYXN0Q291bnQ6IDAgfVxuICAgICAgZ3JhcGhba2V5XSA9IHt9XG5cbiAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgcHJldk5vZGVJZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgY29uc3QgcHJldk5vZGVJZCA9IHByZXZOb2RlSWRzW25dXG5cbiAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdICYmIHRhYmxlW3ByZXZOb2RlSWRdLm5vZGUubW9kZSA9PT0gbm9kZS5tb2RlKSB7XG4gICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9XG4gICAgICAgICAgICBnZXRTZWdtZW50Qml0c0xlbmd0aCh0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgKyBub2RlLmxlbmd0aCwgbm9kZS5tb2RlKSAtXG4gICAgICAgICAgICBnZXRTZWdtZW50Qml0c0xlbmd0aCh0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQsIG5vZGUubW9kZSlcblxuICAgICAgICAgIHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArPSBub2RlLmxlbmd0aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0YWJsZVtwcmV2Tm9kZUlkXSkgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ID0gbm9kZS5sZW5ndGhcblxuICAgICAgICAgIGdyYXBoW3ByZXZOb2RlSWRdW2tleV0gPSBnZXRTZWdtZW50Qml0c0xlbmd0aChub2RlLmxlbmd0aCwgbm9kZS5tb2RlKSArXG4gICAgICAgICAgICA0ICsgTW9kZS5nZXRDaGFyQ291bnRJbmRpY2F0b3Iobm9kZS5tb2RlLCB2ZXJzaW9uKSAvLyBzd2l0Y2ggY29zdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldk5vZGVJZHMgPSBjdXJyZW50Tm9kZUlkc1xuICB9XG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgIGdyYXBoW3ByZXZOb2RlSWRzW25dXS5lbmQgPSAwXG4gIH1cblxuICByZXR1cm4geyBtYXA6IGdyYXBoLCB0YWJsZTogdGFibGUgfVxufVxuXG4vKipcbiAqIEJ1aWxkcyBhIHNlZ21lbnQgZnJvbSBhIHNwZWNpZmllZCBkYXRhIGFuZCBtb2RlLlxuICogSWYgYSBtb2RlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZSBtb3JlIHN1aXRhYmxlIHdpbGwgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgICAgICAgICAgSW5wdXQgZGF0YVxuICogQHBhcmFtICB7TW9kZSB8IFN0cmluZ30gbW9kZXNIaW50IERhdGEgbW9kZVxuICogQHJldHVybiB7U2VnbWVudH0gICAgICAgICAgICAgICAgIFNlZ21lbnRcbiAqL1xuZnVuY3Rpb24gYnVpbGRTaW5nbGVTZWdtZW50IChkYXRhLCBtb2Rlc0hpbnQpIHtcbiAgbGV0IG1vZGVcbiAgY29uc3QgYmVzdE1vZGUgPSBNb2RlLmdldEJlc3RNb2RlRm9yRGF0YShkYXRhKVxuXG4gIG1vZGUgPSBNb2RlLmZyb20obW9kZXNIaW50LCBiZXN0TW9kZSlcblxuICAvLyBNYWtlIHN1cmUgZGF0YSBjYW4gYmUgZW5jb2RlZFxuICBpZiAobW9kZSAhPT0gTW9kZS5CWVRFICYmIG1vZGUuYml0IDwgYmVzdE1vZGUuYml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBkYXRhICsgJ1wiJyArXG4gICAgICAnIGNhbm5vdCBiZSBlbmNvZGVkIHdpdGggbW9kZSAnICsgTW9kZS50b1N0cmluZyhtb2RlKSArXG4gICAgICAnLlxcbiBTdWdnZXN0ZWQgbW9kZSBpczogJyArIE1vZGUudG9TdHJpbmcoYmVzdE1vZGUpKVxuICB9XG5cbiAgLy8gVXNlIE1vZGUuQllURSBpZiBLYW5qaSBzdXBwb3J0IGlzIGRpc2FibGVkXG4gIGlmIChtb2RlID09PSBNb2RlLktBTkpJICYmICFVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIG1vZGUgPSBNb2RlLkJZVEVcbiAgfVxuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIG5ldyBOdW1lcmljRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLkFMUEhBTlVNRVJJQzpcbiAgICAgIHJldHVybiBuZXcgQWxwaGFudW1lcmljRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIG5ldyBLYW5qaURhdGEoZGF0YSlcblxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIG5ldyBCeXRlRGF0YShkYXRhKVxuICB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgbGlzdCBvZiBzZWdtZW50cyBmcm9tIGFuIGFycmF5LlxuICogQXJyYXkgY2FuIGNvbnRhaW4gU3RyaW5ncyBvciBPYmplY3RzIHdpdGggc2VnbWVudCdzIGluZm8uXG4gKlxuICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhIHN0cmluZywgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gKiBzdHJpbmcgYW5kIHRoZSBtb3JlIGFwcHJvcHJpYXRlIGVuY29kaW5nIG1vZGUuXG4gKlxuICogRm9yIGVhY2ggaXRlbSB3aGljaCBpcyBhbiBvYmplY3QsIHdpbGwgYmUgZ2VuZXJhdGVkIGEgc2VnbWVudCB3aXRoIHRoZSBnaXZlblxuICogZGF0YSBhbmQgbW9kZS5cbiAqIE9iamVjdHMgbXVzdCBjb250YWluIGF0IGxlYXN0IHRoZSBwcm9wZXJ0eSBcImRhdGFcIi5cbiAqIElmIHByb3BlcnR5IFwibW9kZVwiIGlzIG5vdCBwcmVzZW50LCB0aGUgbW9yZSBzdWl0YWJsZSBtb2RlIHdpbGwgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgQXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBTZWdtZW50c1xuICovXG5leHBvcnRzLmZyb21BcnJheSA9IGZ1bmN0aW9uIGZyb21BcnJheSAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzZWcpIHtcbiAgICBpZiAodHlwZW9mIHNlZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcsIG51bGwpKVxuICAgIH0gZWxzZSBpZiAoc2VnLmRhdGEpIHtcbiAgICAgIGFjYy5wdXNoKGJ1aWxkU2luZ2xlU2VnbWVudChzZWcuZGF0YSwgc2VnLm1vZGUpKVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSwgW10pXG59XG5cbi8qKlxuICogQnVpbGRzIGFuIG9wdGltaXplZCBzZXF1ZW5jZSBvZiBzZWdtZW50cyBmcm9tIGEgc3RyaW5nLFxuICogd2hpY2ggd2lsbCBwcm9kdWNlIHRoZSBzaG9ydGVzdCBwb3NzaWJsZSBiaXRzdHJlYW0uXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhICAgIElucHV0IHN0cmluZ1xuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgIEFycmF5IG9mIHNlZ21lbnRzXG4gKi9cbmV4cG9ydHMuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcgKGRhdGEsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2VncyA9IGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCBVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSlcblxuICBjb25zdCBub2RlcyA9IGJ1aWxkTm9kZXMoc2VncylcbiAgY29uc3QgZ3JhcGggPSBidWlsZEdyYXBoKG5vZGVzLCB2ZXJzaW9uKVxuICBjb25zdCBwYXRoID0gZGlqa3N0cmEuZmluZF9wYXRoKGdyYXBoLm1hcCwgJ3N0YXJ0JywgJ2VuZCcpXG5cbiAgY29uc3Qgb3B0aW1pemVkU2VncyA9IFtdXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBvcHRpbWl6ZWRTZWdzLnB1c2goZ3JhcGgudGFibGVbcGF0aFtpXV0ubm9kZSlcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmZyb21BcnJheShtZXJnZVNlZ21lbnRzKG9wdGltaXplZFNlZ3MpKVxufVxuXG4vKipcbiAqIFNwbGl0cyBhIHN0cmluZyBpbiB2YXJpb3VzIHNlZ21lbnRzIHdpdGggdGhlIG1vZGVzIHdoaWNoXG4gKiBiZXN0IHJlcHJlc2VudCB0aGVpciBjb250ZW50LlxuICogVGhlIHByb2R1Y2VkIHNlZ21lbnRzIGFyZSBmYXIgZnJvbSBiZWluZyBvcHRpbWl6ZWQuXG4gKiBUaGUgb3V0cHV0IG9mIHRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VkIHRvIGVzdGltYXRlIGEgUVIgQ29kZSB2ZXJzaW9uXG4gKiB3aGljaCBtYXkgY29udGFpbiB0aGUgZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGRhdGEgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAqL1xuZXhwb3J0cy5yYXdTcGxpdCA9IGZ1bmN0aW9uIHJhd1NwbGl0IChkYXRhKSB7XG4gIHJldHVybiBleHBvcnRzLmZyb21BcnJheShcbiAgICBnZXRTZWdtZW50c0Zyb21TdHJpbmcoZGF0YSwgVXRpbHMuaXNLYW5qaU1vZGVFbmFibGVkKCkpXG4gIClcbn1cbiIsImxldCB0b1NKSVNGdW5jdGlvblxuY29uc3QgQ09ERVdPUkRTX0NPVU5UID0gW1xuICAwLCAvLyBOb3QgdXNlZFxuICAyNiwgNDQsIDcwLCAxMDAsIDEzNCwgMTcyLCAxOTYsIDI0MiwgMjkyLCAzNDYsXG4gIDQwNCwgNDY2LCA1MzIsIDU4MSwgNjU1LCA3MzMsIDgxNSwgOTAxLCA5OTEsIDEwODUsXG4gIDExNTYsIDEyNTgsIDEzNjQsIDE0NzQsIDE1ODgsIDE3MDYsIDE4MjgsIDE5MjEsIDIwNTEsIDIxODUsXG4gIDIzMjMsIDI0NjUsIDI2MTEsIDI3NjEsIDI4NzYsIDMwMzQsIDMxOTYsIDMzNjIsIDM1MzIsIDM3MDZcbl1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBRUiBDb2RlIHNpemUgZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBzaXplIG9mIFFSIGNvZGVcbiAqL1xuZXhwb3J0cy5nZXRTeW1ib2xTaXplID0gZnVuY3Rpb24gZ2V0U3ltYm9sU2l6ZSAodmVyc2lvbikge1xuICBpZiAoIXZlcnNpb24pIHRocm93IG5ldyBFcnJvcignXCJ2ZXJzaW9uXCIgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJylcbiAgaWYgKHZlcnNpb24gPCAxIHx8IHZlcnNpb24gPiA0MCkgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBzaG91bGQgYmUgaW4gcmFuZ2UgZnJvbSAxIHRvIDQwJylcbiAgcmV0dXJuIHZlcnNpb24gKiA0ICsgMTdcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgY29kZXdvcmRzIHVzZWQgdG8gc3RvcmUgZGF0YSBhbmQgRUMgaW5mb3JtYXRpb24uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIERhdGEgbGVuZ3RoIGluIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRTeW1ib2xUb3RhbENvZGV3b3JkcyA9IGZ1bmN0aW9uIGdldFN5bWJvbFRvdGFsQ29kZXdvcmRzICh2ZXJzaW9uKSB7XG4gIHJldHVybiBDT0RFV09SRFNfQ09VTlRbdmVyc2lvbl1cbn1cblxuLyoqXG4gKiBFbmNvZGUgZGF0YSB3aXRoIEJvc2UtQ2hhdWRodXJpLUhvY3F1ZW5naGVtXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkYXRhIFZhbHVlIHRvIGVuY29kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIEVuY29kZWQgdmFsdWVcbiAqL1xuZXhwb3J0cy5nZXRCQ0hEaWdpdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGxldCBkaWdpdCA9IDBcblxuICB3aGlsZSAoZGF0YSAhPT0gMCkge1xuICAgIGRpZ2l0KytcbiAgICBkYXRhID4+Pj0gMVxuICB9XG5cbiAgcmV0dXJuIGRpZ2l0XG59XG5cbmV4cG9ydHMuc2V0VG9TSklTRnVuY3Rpb24gPSBmdW5jdGlvbiBzZXRUb1NKSVNGdW5jdGlvbiAoZikge1xuICBpZiAodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1widG9TSklTRnVuY1wiIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uLicpXG4gIH1cblxuICB0b1NKSVNGdW5jdGlvbiA9IGZcbn1cblxuZXhwb3J0cy5pc0thbmppTW9kZUVuYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgdG9TSklTRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnXG59XG5cbmV4cG9ydHMudG9TSklTID0gZnVuY3Rpb24gdG9TSklTIChrYW5qaSkge1xuICByZXR1cm4gdG9TSklTRnVuY3Rpb24oa2FuamkpXG59XG4iLCIvKipcbiAqIENoZWNrIGlmIFFSIENvZGUgdmVyc2lvbiBpcyB2YWxpZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgIHRydWUgaWYgdmFsaWQgdmVyc2lvbiwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKHZlcnNpb24pIHtcbiAgcmV0dXJuICFpc05hTih2ZXJzaW9uKSAmJiB2ZXJzaW9uID49IDEgJiYgdmVyc2lvbiA8PSA0MFxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbmNvbnN0IEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxuY29uc3QgTW9kZSA9IHJlcXVpcmUoJy4vbW9kZScpXG5jb25zdCBWZXJzaW9uQ2hlY2sgPSByZXF1aXJlKCcuL3ZlcnNpb24tY2hlY2snKVxuXG4vLyBHZW5lcmF0b3IgcG9seW5vbWlhbCB1c2VkIHRvIGVuY29kZSB2ZXJzaW9uIGluZm9ybWF0aW9uXG5jb25zdCBHMTggPSAoMSA8PCAxMikgfCAoMSA8PCAxMSkgfCAoMSA8PCAxMCkgfCAoMSA8PCA5KSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCAyKSB8ICgxIDw8IDApXG5jb25zdCBHMThfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE4KVxuXG5mdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGggKG1vZGUsIGxlbmd0aCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgZm9yIChsZXQgY3VycmVudFZlcnNpb24gPSAxOyBjdXJyZW50VmVyc2lvbiA8PSA0MDsgY3VycmVudFZlcnNpb24rKykge1xuICAgIGlmIChsZW5ndGggPD0gZXhwb3J0cy5nZXRDYXBhY2l0eShjdXJyZW50VmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudFZlcnNpb25cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdldFJlc2VydmVkQml0c0NvdW50IChtb2RlLCB2ZXJzaW9uKSB7XG4gIC8vIENoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgKyBtb2RlIGluZGljYXRvciBiaXRzXG4gIHJldHVybiBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihtb2RlLCB2ZXJzaW9uKSArIDRcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheSAoc2VnbWVudHMsIHZlcnNpb24pIHtcbiAgbGV0IHRvdGFsQml0cyA9IDBcblxuICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgY29uc3QgcmVzZXJ2ZWRCaXRzID0gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQoZGF0YS5tb2RlLCB2ZXJzaW9uKVxuICAgIHRvdGFsQml0cyArPSByZXNlcnZlZEJpdHMgKyBkYXRhLmdldEJpdHNMZW5ndGgoKVxuICB9KVxuXG4gIHJldHVybiB0b3RhbEJpdHNcbn1cblxuZnVuY3Rpb24gZ2V0QmVzdFZlcnNpb25Gb3JNaXhlZERhdGEgKHNlZ21lbnRzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKGxldCBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheShzZWdtZW50cywgY3VycmVudFZlcnNpb24pXG4gICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgTW9kZS5NSVhFRCkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHZlcnNpb24gbnVtYmVyIGZyb20gYSB2YWx1ZS5cbiAqIElmIHZhbHVlIGlzIG5vdCBhIHZhbGlkIHZlcnNpb24sIHJldHVybnMgZGVmYXVsdFZhbHVlXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30gdmFsdWUgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7TnVtYmVyfSAgICAgICAgZGVmYXVsdFZhbHVlIEZhbGxiYWNrIHZhbHVlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uIG51bWJlclxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChWZXJzaW9uQ2hlY2suaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKVxuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxufVxuXG4vKipcbiAqIFJldHVybnMgaG93IG11Y2ggZGF0YSBjYW4gYmUgc3RvcmVkIHdpdGggdGhlIHNwZWNpZmllZCBRUiBjb2RlIHZlcnNpb25cbiAqIGFuZCBlcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gKDEtNDApXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSAgICAgICAgICAgICAgICAgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5IG9mIHN0b3JhYmxlIGRhdGFcbiAqL1xuZXhwb3J0cy5nZXRDYXBhY2l0eSA9IGZ1bmN0aW9uIGdldENhcGFjaXR5ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkge1xuICBpZiAoIVZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFFSIENvZGUgdmVyc2lvbicpXG4gIH1cblxuICAvLyBVc2UgQnl0ZSBtb2RlIGFzIGRlZmF1bHRcbiAgaWYgKHR5cGVvZiBtb2RlID09PSAndW5kZWZpbmVkJykgbW9kZSA9IE1vZGUuQllURVxuXG4gIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzQml0cyA9ICh0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHMpICogOFxuXG4gIGlmIChtb2RlID09PSBNb2RlLk1JWEVEKSByZXR1cm4gZGF0YVRvdGFsQ29kZXdvcmRzQml0c1xuXG4gIGNvbnN0IHVzYWJsZUJpdHMgPSBkYXRhVG90YWxDb2Rld29yZHNCaXRzIC0gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQobW9kZSwgdmVyc2lvbilcblxuICAvLyBSZXR1cm4gbWF4IG51bWJlciBvZiBzdG9yYWJsZSBjb2Rld29yZHNcbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBNb2RlLk5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDEwKSAqIDMpXG5cbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHVzYWJsZUJpdHMgLyAxMSkgKiAyKVxuXG4gICAgY2FzZSBNb2RlLktBTkpJOlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDEzKVxuXG4gICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHVzYWJsZUJpdHMgLyA4KVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSB2ZXJzaW9uIG5lZWRlZCB0byBjb250YWluIHRoZSBhbW91bnQgb2YgZGF0YVxuICpcbiAqIEBwYXJhbSAge1NlZ21lbnR9IGRhdGEgICAgICAgICAgICAgICAgICAgIFNlZ21lbnQgb2YgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSBbZXJyb3JDb3JyZWN0aW9uTGV2ZWw9SF0gRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gbW9kZSAgICAgICAgICAgICAgICAgICAgICAgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZXhwb3J0cy5nZXRCZXN0VmVyc2lvbkZvckRhdGEgPSBmdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvckRhdGEgKGRhdGEsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIGxldCBzZWdcblxuICBjb25zdCBlY2wgPSBFQ0xldmVsLmZyb20oZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIEVDTGV2ZWwuTSlcblxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YShkYXRhLCBlY2wpXG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMVxuICAgIH1cblxuICAgIHNlZyA9IGRhdGFbMF1cbiAgfSBlbHNlIHtcbiAgICBzZWcgPSBkYXRhXG4gIH1cblxuICByZXR1cm4gZ2V0QmVzdFZlcnNpb25Gb3JEYXRhTGVuZ3RoKHNlZy5tb2RlLCBzZWcuZ2V0TGVuZ3RoKCksIGVjbClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHZlcnNpb24gaW5mb3JtYXRpb24gd2l0aCByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBUaGUgdmVyc2lvbiBpbmZvcm1hdGlvbiBpcyBpbmNsdWRlZCBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiA3IG9yIGxhcmdlci5cbiAqIEl0IGNvbnNpc3RzIG9mIGFuIDE4LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDYgZGF0YSBiaXRzLFxuICogd2l0aCAxMiBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE4LCA2KSBHb2xheSBjb2RlLlxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICBFbmNvZGVkIHZlcnNpb24gaW5mbyBiaXRzXG4gKi9cbmV4cG9ydHMuZ2V0RW5jb2RlZEJpdHMgPSBmdW5jdGlvbiBnZXRFbmNvZGVkQml0cyAodmVyc2lvbikge1xuICBpZiAoIVZlcnNpb25DaGVjay5pc1ZhbGlkKHZlcnNpb24pIHx8IHZlcnNpb24gPCA3KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFFSIENvZGUgdmVyc2lvbicpXG4gIH1cblxuICBsZXQgZCA9IHZlcnNpb24gPDwgMTJcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIID49IDApIHtcbiAgICBkIF49IChHMTggPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE4X0JDSCkpXG4gIH1cblxuICByZXR1cm4gKHZlcnNpb24gPDwgMTIpIHwgZFxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gY2xlYXJDYW52YXMgKGN0eCwgY2FudmFzLCBzaXplKSB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gIGlmICghY2FudmFzLnN0eWxlKSBjYW52YXMuc3R5bGUgPSB7fVxuICBjYW52YXMuaGVpZ2h0ID0gc2l6ZVxuICBjYW52YXMud2lkdGggPSBzaXplXG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4J1xuICBjYW52YXMuc3R5bGUud2lkdGggPSBzaXplICsgJ3B4J1xufVxuXG5mdW5jdGlvbiBnZXRDYW52YXNFbGVtZW50ICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3BlY2lmeSBhIGNhbnZhcyBlbGVtZW50JylcbiAgfVxufVxuXG5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBvcHRpb25zXG4gIGxldCBjYW52YXNFbCA9IGNhbnZhc1xuXG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgJiYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSkge1xuICAgIG9wdHMgPSBjYW52YXNcbiAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGlmICghY2FudmFzKSB7XG4gICAgY2FudmFzRWwgPSBnZXRDYW52YXNFbGVtZW50KClcbiAgfVxuXG4gIG9wdHMgPSBVdGlscy5nZXRPcHRpb25zKG9wdHMpXG4gIGNvbnN0IHNpemUgPSBVdGlscy5nZXRJbWFnZVdpZHRoKHFyRGF0YS5tb2R1bGVzLnNpemUsIG9wdHMpXG5cbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKVxuICBjb25zdCBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEoc2l6ZSwgc2l6ZSlcbiAgVXRpbHMucXJUb0ltYWdlRGF0YShpbWFnZS5kYXRhLCBxckRhdGEsIG9wdHMpXG5cbiAgY2xlYXJDYW52YXMoY3R4LCBjYW52YXNFbCwgc2l6ZSlcbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMClcblxuICByZXR1cm4gY2FudmFzRWxcbn1cblxuZXhwb3J0cy5yZW5kZXJUb0RhdGFVUkwgPSBmdW5jdGlvbiByZW5kZXJUb0RhdGFVUkwgKHFyRGF0YSwgY2FudmFzLCBvcHRpb25zKSB7XG4gIGxldCBvcHRzID0gb3B0aW9uc1xuXG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3VuZGVmaW5lZCcgJiYgKCFjYW52YXMgfHwgIWNhbnZhcy5nZXRDb250ZXh0KSkge1xuICAgIG9wdHMgPSBjYW52YXNcbiAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgfVxuXG4gIGlmICghb3B0cykgb3B0cyA9IHt9XG5cbiAgY29uc3QgY2FudmFzRWwgPSBleHBvcnRzLnJlbmRlcihxckRhdGEsIGNhbnZhcywgb3B0cylcblxuICBjb25zdCB0eXBlID0gb3B0cy50eXBlIHx8ICdpbWFnZS9wbmcnXG4gIGNvbnN0IHJlbmRlcmVyT3B0cyA9IG9wdHMucmVuZGVyZXJPcHRzIHx8IHt9XG5cbiAgcmV0dXJuIGNhbnZhc0VsLnRvRGF0YVVSTCh0eXBlLCByZW5kZXJlck9wdHMucXVhbGl0eSlcbn1cbiIsImNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmZ1bmN0aW9uIGdldENvbG9yQXR0cmliIChjb2xvciwgYXR0cmliKSB7XG4gIGNvbnN0IGFscGhhID0gY29sb3IuYSAvIDI1NVxuICBjb25zdCBzdHIgPSBhdHRyaWIgKyAnPVwiJyArIGNvbG9yLmhleCArICdcIidcblxuICByZXR1cm4gYWxwaGEgPCAxXG4gICAgPyBzdHIgKyAnICcgKyBhdHRyaWIgKyAnLW9wYWNpdHk9XCInICsgYWxwaGEudG9GaXhlZCgyKS5zbGljZSgxKSArICdcIidcbiAgICA6IHN0clxufVxuXG5mdW5jdGlvbiBzdmdDbWQgKGNtZCwgeCwgeSkge1xuICBsZXQgc3RyID0gY21kICsgeFxuICBpZiAodHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSBzdHIgKz0gJyAnICsgeVxuXG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gcXJUb1BhdGggKGRhdGEsIHNpemUsIG1hcmdpbikge1xuICBsZXQgcGF0aCA9ICcnXG4gIGxldCBtb3ZlQnkgPSAwXG4gIGxldCBuZXdSb3cgPSBmYWxzZVxuICBsZXQgbGluZUxlbmd0aCA9IDBcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKGkgJSBzaXplKVxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIHNpemUpXG5cbiAgICBpZiAoIWNvbCAmJiAhbmV3Um93KSBuZXdSb3cgPSB0cnVlXG5cbiAgICBpZiAoZGF0YVtpXSkge1xuICAgICAgbGluZUxlbmd0aCsrXG5cbiAgICAgIGlmICghKGkgPiAwICYmIGNvbCA+IDAgJiYgZGF0YVtpIC0gMV0pKSB7XG4gICAgICAgIHBhdGggKz0gbmV3Um93XG4gICAgICAgICAgPyBzdmdDbWQoJ00nLCBjb2wgKyBtYXJnaW4sIDAuNSArIHJvdyArIG1hcmdpbilcbiAgICAgICAgICA6IHN2Z0NtZCgnbScsIG1vdmVCeSwgMClcblxuICAgICAgICBtb3ZlQnkgPSAwXG4gICAgICAgIG5ld1JvdyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghKGNvbCArIDEgPCBzaXplICYmIGRhdGFbaSArIDFdKSkge1xuICAgICAgICBwYXRoICs9IHN2Z0NtZCgnaCcsIGxpbmVMZW5ndGgpXG4gICAgICAgIGxpbmVMZW5ndGggPSAwXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVCeSsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHFyRGF0YSwgb3B0aW9ucywgY2IpIHtcbiAgY29uc3Qgb3B0cyA9IFV0aWxzLmdldE9wdGlvbnMob3B0aW9ucylcbiAgY29uc3Qgc2l6ZSA9IHFyRGF0YS5tb2R1bGVzLnNpemVcbiAgY29uc3QgZGF0YSA9IHFyRGF0YS5tb2R1bGVzLmRhdGFcbiAgY29uc3QgcXJjb2Rlc2l6ZSA9IHNpemUgKyBvcHRzLm1hcmdpbiAqIDJcblxuICBjb25zdCBiZyA9ICFvcHRzLmNvbG9yLmxpZ2h0LmFcbiAgICA/ICcnXG4gICAgOiAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IubGlnaHQsICdmaWxsJykgK1xuICAgICAgJyBkPVwiTTAgMGgnICsgcXJjb2Rlc2l6ZSArICd2JyArIHFyY29kZXNpemUgKyAnSDB6XCIvPidcblxuICBjb25zdCBwYXRoID1cbiAgICAnPHBhdGggJyArIGdldENvbG9yQXR0cmliKG9wdHMuY29sb3IuZGFyaywgJ3N0cm9rZScpICtcbiAgICAnIGQ9XCInICsgcXJUb1BhdGgoZGF0YSwgc2l6ZSwgb3B0cy5tYXJnaW4pICsgJ1wiLz4nXG5cbiAgY29uc3Qgdmlld0JveCA9ICd2aWV3Qm94PVwiJyArICcwIDAgJyArIHFyY29kZXNpemUgKyAnICcgKyBxcmNvZGVzaXplICsgJ1wiJ1xuXG4gIGNvbnN0IHdpZHRoID0gIW9wdHMud2lkdGggPyAnJyA6ICd3aWR0aD1cIicgKyBvcHRzLndpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBvcHRzLndpZHRoICsgJ1wiICdcblxuICBjb25zdCBzdmdUYWcgPSAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgJyArIHdpZHRoICsgdmlld0JveCArICcgc2hhcGUtcmVuZGVyaW5nPVwiY3Jpc3BFZGdlc1wiPicgKyBiZyArIHBhdGggKyAnPC9zdmc+XFxuJ1xuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYihudWxsLCBzdmdUYWcpXG4gIH1cblxuICByZXR1cm4gc3ZnVGFnXG59XG4iLCJmdW5jdGlvbiBoZXgycmdiYSAoaGV4KSB7XG4gIGlmICh0eXBlb2YgaGV4ID09PSAnbnVtYmVyJykge1xuICAgIGhleCA9IGhleC50b1N0cmluZygpXG4gIH1cblxuICBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbG9yIHNob3VsZCBiZSBkZWZpbmVkIGFzIGhleCBzdHJpbmcnKVxuICB9XG5cbiAgbGV0IGhleENvZGUgPSBoZXguc2xpY2UoKS5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcnKVxuICBpZiAoaGV4Q29kZS5sZW5ndGggPCAzIHx8IGhleENvZGUubGVuZ3RoID09PSA1IHx8IGhleENvZGUubGVuZ3RoID4gOCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggY29sb3I6ICcgKyBoZXgpXG4gIH1cblxuICAvLyBDb252ZXJ0IGZyb20gc2hvcnQgdG8gbG9uZyBmb3JtIChmZmYgLT4gZmZmZmZmKVxuICBpZiAoaGV4Q29kZS5sZW5ndGggPT09IDMgfHwgaGV4Q29kZS5sZW5ndGggPT09IDQpIHtcbiAgICBoZXhDb2RlID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgaGV4Q29kZS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBbYywgY11cbiAgICB9KSlcbiAgfVxuXG4gIC8vIEFkZCBkZWZhdWx0IGFscGhhIHZhbHVlXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gNikgaGV4Q29kZS5wdXNoKCdGJywgJ0YnKVxuXG4gIGNvbnN0IGhleFZhbHVlID0gcGFyc2VJbnQoaGV4Q29kZS5qb2luKCcnKSwgMTYpXG5cbiAgcmV0dXJuIHtcbiAgICByOiAoaGV4VmFsdWUgPj4gMjQpICYgMjU1LFxuICAgIGc6IChoZXhWYWx1ZSA+PiAxNikgJiAyNTUsXG4gICAgYjogKGhleFZhbHVlID4+IDgpICYgMjU1LFxuICAgIGE6IGhleFZhbHVlICYgMjU1LFxuICAgIGhleDogJyMnICsgaGV4Q29kZS5zbGljZSgwLCA2KS5qb2luKCcnKVxuICB9XG59XG5cbmV4cG9ydHMuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge31cbiAgaWYgKCFvcHRpb25zLmNvbG9yKSBvcHRpb25zLmNvbG9yID0ge31cblxuICBjb25zdCBtYXJnaW4gPSB0eXBlb2Ygb3B0aW9ucy5tYXJnaW4gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgb3B0aW9ucy5tYXJnaW4gPT09IG51bGwgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA8IDBcbiAgICA/IDRcbiAgICA6IG9wdGlvbnMubWFyZ2luXG5cbiAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoICYmIG9wdGlvbnMud2lkdGggPj0gMjEgPyBvcHRpb25zLndpZHRoIDogdW5kZWZpbmVkXG4gIGNvbnN0IHNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCA0XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgc2NhbGU6IHdpZHRoID8gNCA6IHNjYWxlLFxuICAgIG1hcmdpbjogbWFyZ2luLFxuICAgIGNvbG9yOiB7XG4gICAgICBkYXJrOiBoZXgycmdiYShvcHRpb25zLmNvbG9yLmRhcmsgfHwgJyMwMDAwMDBmZicpLFxuICAgICAgbGlnaHQ6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IubGlnaHQgfHwgJyNmZmZmZmZmZicpXG4gICAgfSxcbiAgICB0eXBlOiBvcHRpb25zLnR5cGUsXG4gICAgcmVuZGVyZXJPcHRzOiBvcHRpb25zLnJlbmRlcmVyT3B0cyB8fCB7fVxuICB9XG59XG5cbmV4cG9ydHMuZ2V0U2NhbGUgPSBmdW5jdGlvbiBnZXRTY2FsZSAocXJTaXplLCBvcHRzKSB7XG4gIHJldHVybiBvcHRzLndpZHRoICYmIG9wdHMud2lkdGggPj0gcXJTaXplICsgb3B0cy5tYXJnaW4gKiAyXG4gICAgPyBvcHRzLndpZHRoIC8gKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMilcbiAgICA6IG9wdHMuc2NhbGVcbn1cblxuZXhwb3J0cy5nZXRJbWFnZVdpZHRoID0gZnVuY3Rpb24gZ2V0SW1hZ2VXaWR0aCAocXJTaXplLCBvcHRzKSB7XG4gIGNvbnN0IHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShxclNpemUsIG9wdHMpXG4gIHJldHVybiBNYXRoLmZsb29yKChxclNpemUgKyBvcHRzLm1hcmdpbiAqIDIpICogc2NhbGUpXG59XG5cbmV4cG9ydHMucXJUb0ltYWdlRGF0YSA9IGZ1bmN0aW9uIHFyVG9JbWFnZURhdGEgKGltZ0RhdGEsIHFyLCBvcHRzKSB7XG4gIGNvbnN0IHNpemUgPSBxci5tb2R1bGVzLnNpemVcbiAgY29uc3QgZGF0YSA9IHFyLm1vZHVsZXMuZGF0YVxuICBjb25zdCBzY2FsZSA9IGV4cG9ydHMuZ2V0U2NhbGUoc2l6ZSwgb3B0cylcbiAgY29uc3Qgc3ltYm9sU2l6ZSA9IE1hdGguZmxvb3IoKHNpemUgKyBvcHRzLm1hcmdpbiAqIDIpICogc2NhbGUpXG4gIGNvbnN0IHNjYWxlZE1hcmdpbiA9IG9wdHMubWFyZ2luICogc2NhbGVcbiAgY29uc3QgcGFsZXR0ZSA9IFtvcHRzLmNvbG9yLmxpZ2h0LCBvcHRzLmNvbG9yLmRhcmtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xTaXplOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN5bWJvbFNpemU7IGorKykge1xuICAgICAgbGV0IHBvc0RzdCA9IChpICogc3ltYm9sU2l6ZSArIGopICogNFxuICAgICAgbGV0IHB4Q29sb3IgPSBvcHRzLmNvbG9yLmxpZ2h0XG5cbiAgICAgIGlmIChpID49IHNjYWxlZE1hcmdpbiAmJiBqID49IHNjYWxlZE1hcmdpbiAmJlxuICAgICAgICBpIDwgc3ltYm9sU2l6ZSAtIHNjYWxlZE1hcmdpbiAmJiBqIDwgc3ltYm9sU2l6ZSAtIHNjYWxlZE1hcmdpbikge1xuICAgICAgICBjb25zdCBpU3JjID0gTWF0aC5mbG9vcigoaSAtIHNjYWxlZE1hcmdpbikgLyBzY2FsZSlcbiAgICAgICAgY29uc3QgalNyYyA9IE1hdGguZmxvb3IoKGogLSBzY2FsZWRNYXJnaW4pIC8gc2NhbGUpXG4gICAgICAgIHB4Q29sb3IgPSBwYWxldHRlW2RhdGFbaVNyYyAqIHNpemUgKyBqU3JjXSA/IDEgOiAwXVxuICAgICAgfVxuXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuclxuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLmdcbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5iXG4gICAgICBpbWdEYXRhW3Bvc0RzdF0gPSBweENvbG9yLmFcbiAgICB9XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY3Rpb25SZXN1bHQgeyB9XG5cbmV4cG9ydCBjbGFzcyBDb250aW51ZVIgZXh0ZW5kcyBBY3Rpb25SZXN1bHQgeyB9XG5cbmV4cG9ydCBjbGFzcyBKdW1wUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgY291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbGxSIGV4dGVuZHMgQWN0aW9uUmVzdWx0IHtcbiAgICBzdGF2ZTogc3RyaW5nO1xuICAgIG5ld0NvbnRleHQ6IENvbnRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF2ZTogc3RyaW5nLCBjb250ZXh0OiBDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdmUgPSBzdGF2ZTtcbiAgICAgICAgdGhpcy5uZXdDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlUiBleHRlbmRzIEFjdGlvblJlc3VsdCB7XG4gICAgY291bnQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvdW50OiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IENsb3NlQ3Vyc29yLCBTaGFwZSwgSUN1cnNvciwgT3BzUGFyYW1zIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ29udGludWVSLCBKdW1wUiwgQ2FsbFIsIFJldmVyc2VSfSBmcm9tIFwiQC9jb3JlL2FzdC9hY3Rpb25SZXN1bHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSwgQWN0aW9uTm9kZSwgZXZhbFZhbHVlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5hYnN0cmFjdCBjbGFzcyBOb2RlV2l0aFZhbHVlIGV4dGVuZHMgQWN0aW9uTm9kZSB7XG4gICAgI3ZhbHVlczogVmFsdWVOb2RlW107XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IFZhbHVlTm9kZVtdKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuI3ZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIGV2YWxWYWx1ZSh0aGlzLiN2YWx1ZXMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBldmFsVmFsdWUoY29udGV4dDogQ29udGV4dCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBldmFsVmFsdWUodGhpcy4jdmFsdWVzLCBjb250ZXh0KS52YWx1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXZhbEludFZhbHVlKGNvbnRleHQ6IENvbnRleHQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmV2YWxWYWx1ZShjb250ZXh0KSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FsbCBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgICNuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcih2YWx1ZSk7XG4gICAgICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHJldHVybiBuZXcgQ2FsbFIodGhpcy4jbmFtZSwgdGhpcy5jcmVhdGVDb250ZXh0KGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlYyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29udGV4dChjb250ZXh0OiBDb250ZXh0KTogQ29udGV4dCB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh7XG4gICAgICAgICAgICBhcmd1bWVudDogdGhpcy5ldmFsKGNvbnRleHQpLFxuICAgICAgICAgICAgY3Vyc29yOiB0aGlzLmNyZWF0ZUN1cnNvcihjb250ZXh0KSxcbiAgICAgICAgICAgIGl0ZXJhdGlvbjogY29udGV4dC5pdGVyYXRpb24gKyAxLFxuICAgICAgICAgICAgdmFsdWVGdW5jQmFnOiBjb250ZXh0LnZhbHVlRnVuY0JhZyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUN1cnNvcihjb250ZXh0OiBDb250ZXh0KTogSUN1cnNvciB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmN1cnNvcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV2YWxlZFRvRmlndXJlT3BzKGV2YWxlZDogRXZhbHVlZFZhbHVlKTogT3BzUGFyYW1zIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc0ZpbGxlZDogZXZhbGVkLmlzRmlsbGVkLFxuICAgICAgICBjb2xvcjogZXZhbGVkLmNvbG9yLFxuICAgICAgICBzdHJva2U6IGV2YWxlZC5zdHJva2VUaGlja25lc3MsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3NlQ2FsbCBleHRlbmRzIENhbGwge1xuICAgIHByb3RlY3RlZCBjcmVhdGVDdXJzb3IoY29udGV4dDogQ29udGV4dCk6IElDdXJzb3Ige1xuICAgICAgICBjb25zdCBldmFsZWQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgQ2xvc2VDdXJzb3IoY29udGV4dC5jdXJzb3IsIGV2YWxlZFRvRmlndXJlT3BzKGV2YWxlZCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdMaW5lIGV4dGVuZHMgTm9kZVdpdGhWYWx1ZSB7XG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3J9ID0gdGhpcy5ldmFsKGNvbnRleHQpO1xuICAgICAgICBjb250ZXh0LmN1cnNvci5kcmF3TGluZShsZW5ndGgsIHN0cm9rZVRoaWNrbmVzcywgY29sb3IpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cblxuICAgIGV4ZWNSZXZlcnNlKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IC10aGlzLmV2YWwoY29udGV4dCkudmFsdWU7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYXdGaWd1cmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICAjc2hhcGU6IFNoYXBlXG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXM6IFZhbHVlTm9kZVtdLCBzaGFwZTogU2hhcGUpIHtcbiAgICAgICAgc3VwZXIodmFsdWVzKTtcbiAgICAgICAgdGhpcy4jc2hhcGUgPSBzaGFwZTtcbiAgICB9XG5cbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBldmFsZWQgPSB0aGlzLmV2YWwoY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBldmFsZWQudmFsdWU7XG4gICAgICAgIGNvbnRleHQuY3Vyc29yLmRyYXdTaGFwZSh0aGlzLiNzaGFwZSwgc2l6ZSwgZXZhbGVkVG9GaWd1cmVPcHMoZXZhbGVkKSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRHJhd0FyY0xpbmUgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBwcml2YXRlIHJhdGlvOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyYXRpbywgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW87XG4gICAgfVxuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlOiBzaXplLCBzdHJva2VUaGlja25lc3MsIGNvbG9yfSA9IHRoaXMuZXZhbChjb250ZXh0KTtcbiAgICAgICAgY29udGV4dC5jdXJzb3IuZHJhd0FyY0xpbmUodGhpcy5yYXRpbywgc2l6ZSwgc3Ryb2tlVGhpY2tuZXNzLCBjb2xvcik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gLXRoaXMuZXZhbChjb250ZXh0KS52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBjdXJzb3IgfSA9IGNvbnRleHQ7XG4gICAgICAgIGN1cnNvci5yb3RhdGUoLXRoaXMucmF0aW8gLyAyKTtcbiAgICAgICAgY3Vyc29yLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjdXJzb3Iucm90YXRlKC10aGlzLnJhdGlvIC8gMik7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxufVxuXG5hYnN0cmFjdCBjbGFzcyBDdXJzb3JNYW5pcHVsYXRvciBleHRlbmRzIE5vZGVXaXRoVmFsdWUge1xuICAgIGFic3RyYWN0IGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuXG4gICAgZXhlYyhjb250ZXh0OiBDb250ZXh0KTogQWN0aW9uUmVzdWx0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoY29udGV4dC5jdXJzb3IsIHRoaXMuZXZhbChjb250ZXh0KS52YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVSKCk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIHRoaXMuY2hhbmdlKGNvbnRleHQuY3Vyc29yLCAtdGhpcy5ldmFsKGNvbnRleHQpLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlRm9yd2FyZCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5mb3J3YXJkKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNb3ZlQmFja3dhcmQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3IuYmFja3dhcmQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVMZWZ0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLmxlZnQodmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vdmVSaWdodCBleHRlbmRzIEN1cnNvck1hbmlwdWxhdG9yIHtcbiAgICBjaGFuZ2UoY3Vyc29yOiBJQ3Vyc29yLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGN1cnNvci5yaWdodCh2YWx1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlUmlnaHQgZXh0ZW5kcyBDdXJzb3JNYW5pcHVsYXRvciB7XG4gICAgY2hhbmdlKGN1cnNvcjogSUN1cnNvciwgdmFsdWU6IG51bWJlcikge1xuICAgICAgICBjdXJzb3Iucm90YXRlKHZhbHVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVMZWZ0IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgtdmFsdWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZsaXBWZXJ0aWNhbGx5IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IpIHtcbiAgICAgICAgY3Vyc29yLmZsaXAoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGbGlwSG9yaXpvbnRhbGx5IGV4dGVuZHMgQ3Vyc29yTWFuaXB1bGF0b3Ige1xuICAgIGNoYW5nZShjdXJzb3I6IElDdXJzb3IpIHtcbiAgICAgICAgY3Vyc29yLnJvdGF0ZSgwLjUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJldmVyc2UgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICBleGVjKGNvbnRleHQ6IENvbnRleHQpOiBBY3Rpb25SZXN1bHQge1xuICAgICAgICBjb25zdCBpdGVyYXRpb25zID0gdGhpcy5ldmFsSW50VmFsdWUoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgUmV2ZXJzZVIoaXRlcmF0aW9ucyk7XG4gICAgfVxuXG4gICAgZXhlY1JldmVyc2UoY29udGV4dDogQ29udGV4dCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXZlcnNlUihpdGVyYXRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXBsYXkgZXh0ZW5kcyBOb2RlV2l0aFZhbHVlIHtcbiAgICAjanVtcFNpemU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBqdW1wU2l6ZSA9IDEpIHtcbiAgICAgICAgc3VwZXIodmFsdWUpO1xuICAgICAgICB0aGlzLiNqdW1wU2l6ZSA9IGp1bXBTaXplO1xuICAgIH1cblxuICAgIGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IGNvdW50ZXIgPSBsb2NhbFsnY291bnRlciddIHx8IDE7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmV2YWxJbnRWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgaWYgKGNvdW50ZXIgPCBzaXplKSB7XG4gICAgICAgICAgICBsb2NhbFsnY291bnRlciddID0gY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEp1bXBSKC10aGlzLiNqdW1wU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZVIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IEFjdGlvblJlc3VsdCwgQ29udGludWVSIH0gZnJvbSBcIi4vYWN0aW9uUmVzdWx0XCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBWYWx1ZU5vZGUge1xuICAgIGFic3RyYWN0IGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjdGlvbk5vZGUge1xuICAgIGFic3RyYWN0IGV4ZWMoY29udGV4dDogQ29udGV4dCwgbG9jYWw6IG9iamVjdCk6IEFjdGlvblJlc3VsdDtcbiAgICBleGVjUmV2ZXJzZShjb250ZXh0OiBDb250ZXh0LCBsb2NhbDogb2JqZWN0KTogQWN0aW9uUmVzdWx0IHsgcmV0dXJuIG5ldyBDb250aW51ZVIoKTsgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxWYWx1ZSh2YWx1ZU5vZGVzOiBWYWx1ZU5vZGVbXSwgY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgY29uc3QgaW5pdDogRXZhbHVlZFZhbHVlID0ge1xuICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICBjb2xvcjogY29udGV4dC5hcmd1bWVudC5jb2xvcixcbiAgICAgICAgc3Ryb2tlU3R5bGU6IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogY29udGV4dC5hcmd1bWVudC5zdHJva2VUaGlja25lc3MsXG4gICAgICAgIGlzRmlsbGVkOiBjb250ZXh0LmFyZ3VtZW50LmlzRmlsbGVkLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiAoYTogbnVtYmVyLCBiOm51bWJlcikgPT4gYSAqIGIsXG4gICAgfTtcbiAgICByZXR1cm4gdmFsdWVOb2Rlcy5yZWR1Y2UocGFydEV2YWwuYmluZCh0aGlzLCBjb250ZXh0KSwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIHBhcnRFdmFsKGNvbnRleHQ6IENvbnRleHQsIGFjYzogRXZhbHVlZFZhbHVlLCBub2RlOiBWYWx1ZU5vZGUpOiBFdmFsdWVkVmFsdWUge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbm9kZS5ldmFsKGNvbnRleHQpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IG5ld1ZhbHVlLnZhbHVlVHJhbnNmb3JtZXIgfHwgYWNjLnZhbHVlVHJhbnNmb3JtZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLnZhbHVlICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm0oYWNjLnZhbHVlLCBuZXdWYWx1ZS52YWx1ZSkgOiBhY2MudmFsdWUsXG4gICAgICAgIGNvbG9yOiBuZXdWYWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuY29sb3IgOiBhY2MuY29sb3IsXG4gICAgICAgIHN0cm9rZVN0eWxlOiBuZXdWYWx1ZS5zdHJva2VTdHlsZSAhPT0gdW5kZWZpbmVkID8gbmV3VmFsdWUuc3Ryb2tlU3R5bGUgOiBhY2Muc3Ryb2tlU3R5bGUsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogbmV3VmFsdWUuc3Ryb2tlVGhpY2tuZXNzICE9PSB1bmRlZmluZWQgPyBuZXdWYWx1ZS5zdHJva2VUaGlja25lc3MgOiBhY2Muc3Ryb2tlVGhpY2tuZXNzLFxuICAgICAgICBpc0ZpbGxlZDogbmV3VmFsdWUuaXNGaWxsZWQgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlLmlzRmlsbGVkIDogYWNjLmlzRmlsbGVkLFxuICAgICAgICB2YWx1ZVRyYW5zZm9ybWVyOiB0cmFuc2Zvcm0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXhDb2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMC41fTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNaW5Db2xvciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHtjb2xvcjogMC4wfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxsQ29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7aXNGaWxsZWQ6IHRydWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVtcHR5Q29sb3IgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7aXNGaWxsZWQ6IGZhbHNlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaGlmdENvbG9yIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHNoaWZ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzaGlmdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgbGV0IGNvbG9yID0gKGNvbnRleHQuYXJndW1lbnQuY29sb3IgKyB0aGlzLnNoaWZ0KSAlIDEuMDtcbiAgICAgICAgaWYgKGNvbG9yIDwgMC4wKSB7XG4gICAgICAgICAgICBjb2xvciArPSAxLjA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtjb2xvcn07XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBBY3Rpb25Ob2RlIH0gZnJvbSBcIi4vYmFzZVwiO1xuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY3Rpb25zOiBBY3Rpb25Ob2RlW107XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFjdGlvbnM6IEFjdGlvbk5vZGVbXSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIH1cblxuICAgIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbnMubGVuZ3RoO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIE11bHRPcCBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWVUcmFuc2Zvcm1lcjogKGEsIGIpID0+IGEgKiBiIH07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWRkT3AgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlVHJhbnNmb3JtZXI6IChhLCBiKSA9PiBhICsgYiB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1Yk9wIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4geyB2YWx1ZVRyYW5zZm9ybWVyOiAoYSwgYikgPT4gYSAtIGIgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0LCBFdmFsdWVkVmFsdWUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgU3Ryb2tlU3R5bGUgfSBmcm9tIFwiQC9jb3JlL2NvbnRleHRcIjtcbmltcG9ydCB7IFZhbHVlTm9kZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFNldFN0cm9rZVN0eWxlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIHN0cm9rZTogU3Ryb2tlU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJva2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBzdHJva2U7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlIH07XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTaGlmdFN0cm9rZVRoaWNrbmVzcyBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Ioc2hpZnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHN0cm9rZVRoaWNrbmVzcyA9IGNvbnRleHQuYXJndW1lbnQuc3Ryb2tlVGhpY2tuZXNzICsgdGhpcy5zaGlmdDtcbiAgICAgICAgcmV0dXJuIHsgc3Ryb2tlVGhpY2tuZXNzIH07XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dCwgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUsIGV2YWxWYWx1ZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIEFuZ2xlIGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBwcml2YXRlIG5vcm1hbGl6ZWRBbmdsZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoYW5nbGU6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vcm1hbGl6ZWRBbmdsZSA9IGFuZ2xlIC8gMzYwLjA7XG4gICAgfVxuXG4gICAgZXZhbChjb250ZXh0OiBDb250ZXh0KTogRXZhbHVlZFZhbHVlIHtcbiAgICAgICAgcmV0dXJuIHt2YWx1ZTogdGhpcy5ub3JtYWxpemVkQW5nbGV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlciBleHRlbmRzIFZhbHVlTm9kZSB7XG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHRoaXMudmFsdWV9O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyZ3VtZW50IGV4dGVuZHMgVmFsdWVOb2RlIHtcbiAgICBldmFsKGNvbnRleHQ6IENvbnRleHQpOiBFdmFsdWVkVmFsdWUge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBjb250ZXh0LmFyZ3VtZW50LnZhbHVlfTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljQXJndW1lbnQgZXh0ZW5kcyBWYWx1ZU5vZGUge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGV2YWwoY29udGV4dDogQ29udGV4dCk6IEV2YWx1ZWRWYWx1ZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlTm9kZXMgPSBjb250ZXh0LnZhbHVlRnVuY0JhZ1t0aGlzLm5hbWVdIHx8IFtdO1xuICAgICAgICByZXR1cm4gZXZhbFZhbHVlKHZhbHVlTm9kZXMsIGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgVmFsdWVOb2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuXG5leHBvcnQgdHlwZSBTdHJva2VTdHlsZSA9IFwic29saWRcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV2YWx1ZWRWYWx1ZSB7XG4gICAgdmFsdWU/OiBudW1iZXI7XG4gICAgY29sb3I/OiBudW1iZXI7XG4gICAgc3Ryb2tlU3R5bGU/OiBTdHJva2VTdHlsZTtcbiAgICBzdHJva2VUaGlja25lc3M/OiBudW1iZXI7XG4gICAgaXNGaWxsZWQ/OiBib29sZWFuO1xuICAgIHZhbHVlVHJhbnNmb3JtZXI/OiAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICAgIHJlYWRvbmx5IGl0ZXJhdGlvbjogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGFyZ3VtZW50OiBFdmFsdWVkVmFsdWU7XG4gICAgcmVhZG9ubHkgY3Vyc29yOiBJQ3Vyc29yO1xuICAgIHJlYWRvbmx5IHZhbHVlRnVuY0JhZzoge1tuYW1lOiBzdHJpbmddOiBWYWx1ZU5vZGVbXX07XG5cbiAgICBjb25zdHJ1Y3Rvcih7Y3Vyc29yLCBhcmd1bWVudCwgdmFsdWVGdW5jQmFnID0ge30sIGl0ZXJhdGlvbiA9IDB9KSB7XG4gICAgICAgIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgICAgICAgdGhpcy5pdGVyYXRpb24gPSBpdGVyYXRpb247XG4gICAgICAgIHRoaXMudmFsdWVGdW5jQmFnID0gdmFsdWVGdW5jQmFnO1xuICAgICAgICB0aGlzLmN1cnNvciA9IGN1cnNvcjtcbiAgICB9XG5cbiAgICBvbkVuZCgpIHtcbiAgICAgICAgdGhpcy5jdXJzb3IuY2xvc2UoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBBY3Rpb25SZXN1bHQsIENhbGxSLCBDb250aW51ZVIsIEp1bXBSLCBSZXZlcnNlUiB9IGZyb20gXCJAL2NvcmUvYXN0L2FjdGlvblJlc3VsdFwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiQC9jb3JlL2FzdC9mdW5jdGlvblwiO1xuaW1wb3J0IHsgRnVuY3Rpb25zQmFnIH0gZnJvbSBcIkAvY29yZS9mdW5jdGlvbnNCYWdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQXJncyB7XG4gICAgcmVzdWx0OiBBY3Rpb25SZXN1bHQ7XG4gICAgYmFnOiBGdW5jdGlvbnNCYWc7XG4gICAgcHVzaDogUHVzaENiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhbHMoZnVuYzogRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShmdW5jLmFjdGlvbnMsICgpID0+ICh7fSkpO1xufVxuXG50eXBlIFB1c2hDYiA9IChzdGVwcGVyOiBDb250ZXh0U3RlcHBlcikgPT4gdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRTdGVwcGVyKGNvbnRleHQ6IENvbnRleHQsIGZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBGb3J3YXJkQ29udGV4dFN0ZXBwZXIoe1xuICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjb250ZXh0LFxuICAgIH0pO1xufVxuXG5pbnRlcmZhY2UgU2NvcGUge1xuICAgIGNvbnRleHQ6IENvbnRleHQ7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICBmdW5jdGlvbjogRnVuY3Rpb247XG4gICAgbG9jYWxzOiBvYmplY3RbXTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnRleHRTdGVwcGVyIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IFNjb3BlO1xuXG4gICAgY29uc3RydWN0b3IgKHNjb3BlOiBTY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgZXhlYygpOiBBY3Rpb25SZXN1bHQ7XG4gICAgYWJzdHJhY3QgbW92ZShhcmdzOiBNb3ZlQXJncyk6IGJvb2xlYW47XG4gICAgb25FbmQoKSB7IHRoaXMuc2NvcGUuY29udGV4dC5vbkVuZCgpOyB9O1xuXG4gICAgZ2V0IGluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLnNjb3BlLmluZGV4OyB9XG4gICAgZ2V0IHN0YXZlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnNjb3BlLmZ1bmN0aW9uLm5hbWU7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcndhcmRDb250ZXh0U3RlcHBlciBleHRlbmRzIENvbnRleHRTdGVwcGVyIHtcbiAgICBleGVjKCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jLCBsb2NhbHMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZ1bmMuYWN0aW9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzW2luZGV4XTtcbiAgICAgICAgaWYgKCFhY3Rpb24gfHwgIWxvY2FsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlUigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY3Rpb24uZXhlYyh0aGlzLnNjb3BlLmNvbnRleHQsIGxvY2FsKTtcbiAgICB9XG5cbiAgICBtb3ZlKHtyZXN1bHQsIGJhZywgcHVzaH06IE1vdmVBcmdzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250aW51ZVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBKdW1wUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSByZXN1bHQuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2FsbFIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKHJlc3VsdC5zdGF2ZSwgcmVzdWx0Lm5ld0NvbnRleHQuaXRlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVzaChuZXcgRm9yd2FyZENvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcmVzdWx0Lm5ld0NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCArPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldmVyc2VSKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuc2NvcGUuaW5kZXggLSByZXN1bHQuY291bnQpO1xuICAgICAgICAgICAgcHVzaChuZXcgUmV2ZXJzZUNvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLnNjb3BlLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuc2NvcGUuaW5kZXggLSAxLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiB0aGlzLnNjb3BlLmZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGxvY2FsczogY3JlYXRlTG9jYWxzKHRoaXMuc2NvcGUuZnVuY3Rpb24pLFxuICAgICAgICAgICAgfSwgZW5kSW5kZXgpKTtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiV3JvbmcgQWN0aW9uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleEluUmFuZ2UoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNJbmRleEluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jIH0gPSB0aGlzLnNjb3BlO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXZlcnNlQ29udGV4dFN0ZXBwZXIgZXh0ZW5kcyBDb250ZXh0U3RlcHBlciB7XG4gICAgI2VuZEluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogU2NvcGUsIGVuZEluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlKTtcbiAgICAgICAgdGhpcy4jZW5kSW5kZXggPSBlbmRJbmRleDtcbiAgICB9XG5cbiAgICBleGVjKCk6IEFjdGlvblJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHsgaW5kZXgsIGZ1bmN0aW9uOiBmdW5jLCBsb2NhbHMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGZ1bmMuYWN0aW9uc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5leGVjUmV2ZXJzZSh0aGlzLnNjb3BlLmNvbnRleHQsIGxvY2FsKTtcbiAgICB9XG5cbiAgICBtb3ZlKHtyZXN1bHQsIGJhZywgcHVzaH06IE1vdmVBcmdzKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDb250aW51ZVIpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcGUuaW5kZXggLT0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBKdW1wUikge1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSByZXN1bHQuY291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2FsbFIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBiYWcuZmluZEZ1bmN0aW9uKHJlc3VsdC5zdGF2ZSwgcmVzdWx0Lm5ld0NvbnRleHQuaXRlcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChmdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHVzaChuZXcgUmV2ZXJzZUNvbnRleHRTdGVwcGVyKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogcmVzdWx0Lm5ld0NvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBmdW5jLnNpemUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogZnVuYyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBjcmVhdGVMb2NhbHMoZnVuYyksXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJldmVyc2VSKSB7XG4gICAgICAgICAgICAvLy8gVE9ETyAtIGltcGxlbWVudCBSZXZlcnNlLVJldmVyc2VcbiAgICAgICAgICAgIC8vLyBPciBtYXliZSBvbmUgc3RlcHBlciB3aXRoIG1vdmUgY3Vyc29yIG9ubHkgd2l0aCBzcGVjaWZpZWQgZGlyZWN0aW9uP1xuICAgICAgICAgICAgdGhpcy5zY29wZS5pbmRleCAtPSByZXN1bHQuY291bnQgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJXcm9uZyBBY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pc0luZGV4SW5SYW5nZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc0luZGV4SW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgZnVuY3Rpb246IGZ1bmMgfSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIHJldHVybiBpbmRleCA+PSB0aGlzLiNlbmRJbmRleCAmJiBpbmRleCA8IGZ1bmMuc2l6ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGaWd1cmUsIExpbmUsIFJlY3RhbmdsZSwgVHJpYW5nbGUsIENpcmNsZSwgQXJjLCBTdHlsZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuaW1wb3J0IHsgUG9seWdvbiwgTGluZUN1cnZlLCBBcmNDdXJ2ZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJveCB7XG4gICAgbWluOiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIG1heDogW251bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHNQYXJhbXMge1xuICAgIGNvbG9yOiBudW1iZXIsXG4gICAgc3Ryb2tlOiBudW1iZXIsXG4gICAgaXNGaWxsZWQ6IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBlbnVtIFNoYXBlIHsgU3F1YXJlLCBUcmlhbmdsZSwgQ2lyY2xlIH1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElDdXJzb3Ige1xuICAgIGRpc3RhbmNlTXVsdGlwbGVyOiBudW1iZXI7XG4gICAgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmVmbGVjdGlvbjogbnVtYmVyO1xuICAgIGZpZ3VyZXM6IEZpZ3VyZVtdO1xuICAgIGJveDogQm94O1xuICAgIC8vIGFuZ2xlID0gMC4wIC0+IDDCsFxuICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgYW5nbGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZ3VyZXMgPSBbXTtcbiAgICB9XG5cbiAgICBmb3J3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgY29uc3QgYXJnID0gZGlzdGFuY2UgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyXG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gKz0geCAqIGFyZztcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB5ICogYXJnO1xuICAgIH1cblxuICAgIGJhY2t3YXJkKGRpc3RhbmNlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mb3J3YXJkKC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmlnaHQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICAvLyByb3RhdGUgb3JpZW50YXRpb24gYnkgOTDCsFxuICAgICAgICBjb25zdCBhcmcgPSBkaXN0YW5jZSAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXIgKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIHRoaXMucG9zaXRpb25bMF0gLT0geSAqIGFyZztcbiAgICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB4ICogYXJnO1xuICAgIH1cblxuICAgIGxlZnQoZGlzdGFuY2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLnJpZ2h0KC1kaXN0YW5jZSk7XG4gICAgfVxuXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gYW5nbGUgPSAwLjAgLT4gMMKwXG4gICAgICAgIC8vIGFuZ2xlID0gMS4wIC0+IDM2MMKwXG4gICAgICAgIGNvbnN0IG5BbmdsZSA9IGFuZ2xlICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICB0aGlzLmFuZ2xlID0gKHRoaXMuYW5nbGUgKyBuQW5nbGUpICUgMS4wO1xuICAgICAgICBjb25zdCByYWRpYW5zID0gbkFuZ2xlICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvblswXSA9IHggKiBjb3MgLSB5ICogc2luO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uWzFdID0geCAqIHNpbiArIHkgKiBjb3M7XG4gICAgfVxuXG4gICAgZmxpcCgpIHtcbiAgICAgICAgdGhpcy5yZWZsZWN0aW9uICo9IC0xLjA7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7IH1cblxuICAgIHByb3RlY3RlZCBleHRlbmRCb3goW3gsIHldOiBudW1iZXJbXSwgc2l6ZSA9IDApIHtcbiAgICAgICAgdGhpcy5ib3gubWluWzBdID0gTWF0aC5taW4odGhpcy5ib3gubWluWzBdLCB4IC0gc2l6ZSk7XG4gICAgICAgIHRoaXMuYm94Lm1heFswXSA9IE1hdGgubWF4KHRoaXMuYm94Lm1heFswXSwgeCArIHNpemUpO1xuICAgICAgICB0aGlzLmJveC5taW5bMV0gPSBNYXRoLm1pbih0aGlzLmJveC5taW5bMV0sIHkgLSBzaXplKTtcbiAgICAgICAgdGhpcy5ib3gubWF4WzFdID0gTWF0aC5tYXgodGhpcy5ib3gubWF4WzFdLCB5ICsgc2l6ZSk7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY2FsY1N0eWxlUGFyYW1zKG9wczogT3BzUGFyYW1zKTogU3R5bGU7XG4gICAgYWJzdHJhY3QgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IGRyYXdBcmNMaW5lKHJhdGlvOiBudW1iZXIsIHNpemU6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpOiB2b2lkO1xuICAgIGFic3RyYWN0IGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpOiB2b2lkO1xuICAgIGFic3RyYWN0IGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ3Vyc29yIGV4dGVuZHMgSUN1cnNvciB7XG4gICAgc3Ryb2tlU2l6ZTogbnVtYmVyO1xuICAgIGZpcnN0Q29sb3I6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgICBzZWNvbmRDb2xvcjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBzdHJva2VTaXplID0gMSxcbiAgICAgICAgZGlzdGFuY2VNdWx0aXBsZXIgPSAxMDAsXG4gICAgICAgIGZpcnN0Q29sb3IgPSBcIiMwMDAwMDBcIixcbiAgICAgICAgc2Vjb25kQ29sb3IgPSBcIiNEQzE0M0NcIixcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJva2VTaXplID0gc3Ryb2tlU2l6ZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZU11bHRpcGxlciA9IGRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICB0aGlzLnJlZmxlY3Rpb24gPSAxLjA7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbMC4wLCAwLjBdO1xuICAgICAgICB0aGlzLmFuZ2xlID0gMC4wO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gWzEuMCwgMC4wXTtcbiAgICAgICAgdGhpcy5ib3ggPSB7XG4gICAgICAgICAgICBtaW46IFswLjAsIDAuMF0sXG4gICAgICAgICAgICBtYXg6IFswLjAsIDAuMF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZmlyc3RDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihmaXJzdENvbG9yKTtcbiAgICAgICAgdGhpcy5zZWNvbmRDb2xvciA9IHRoaXMuaGV4VG9Db2xvcihzZWNvbmRDb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZXhUb0NvbG9yKGhleDogc3RyaW5nKTogW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMSwgMSArIDIpLCAxNik7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDMsIDMgKyAyKSwgMTYpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZyg1LCA1ICsgMiksIDE2KTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgICB9XG5cbiAgICBjYWxjU3R5bGVQYXJhbXMob3BzOiBPcHNQYXJhbXMpOiBTdHlsZSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jYWxjQ29sb3Iob3BzLmNvbG9yKTtcbiAgICAgICAgaWYgKG9wcy5pc0ZpbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZmlsbDogY29sb3IgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBmaWxsOiBcIm5vbmVcIiwgY29sb3I6IGNvbG9yLCBzdHJva2U6IG9wcy5zdHJva2UgKiB0aGlzLnN0cm9rZVNpemUgfTtcbiAgICB9XG5cbiAgICBkcmF3TGluZShkaXN0YW5jZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBbb2xkX3gsIG9sZF95XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIHRoaXMuZm9yd2FyZChkaXN0YW5jZSk7XG4gICAgICAgIGNvbnN0IFtuZXdfeCwgbmV3X3ldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmNhbGNTdHlsZVBhcmFtcyh7IHN0cm9rZSwgY29sb3IsIGlzRmlsbGVkOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IExpbmUoW29sZF94LCBvbGRfeV0sIFtuZXdfeCwgbmV3X3ldLCBzdHlsZSkpO1xuICAgICAgICB0aGlzLmV4dGVuZEJveCh0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3QXJjTGluZShyYXRpbzogbnVtYmVyLCBzaXplOiBudW1iZXIsIHN0cm9rZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFyY1NpemUgPSBzaXplIC8gMiAqIHRoaXMuZGlzdGFuY2VNdWx0aXBsZXI7XG4gICAgICAgIGNvbnN0IGFyY1JhZGl1cyA9IGFyY1NpemUgLyBNYXRoLnNpbihyYXRpbyAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBbZHgsIGR5XSA9IHRoaXMub3JpZW50YXRpb247XG4gICAgICAgIC8vIHJvdGF0ZSBieSA5MMKwXG4gICAgICAgIGNvbnN0IG5keCA9IC1keSAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgY29uc3QgbmR5ID0gZHggKiB0aGlzLnJlZmxlY3Rpb247XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHBvaW50ID0gW3ggKyBhcmNSYWRpdXMgKiBuZHgsIHkgKyBhcmNSYWRpdXMgKiBuZHldO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKHsgc3Ryb2tlLCBjb2xvciwgaXNGaWxsZWQ6IGZhbHNlIH0pO1xuICAgICAgICBjb25zdCBvcHMgPSB7XG4gICAgICAgICAgICBzaGlmdDogdGhpcy5hbmdsZSAtIDAuMjUsXG4gICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IEFyYyhwb2ludCwgYXJjUmFkaXVzLCByYXRpbywgb3BzLCBzdHlsZSkpO1xuXG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgICAgIHRoaXMuZm9yd2FyZChzaXplKTtcbiAgICAgICAgdGhpcy5yb3RhdGUocmF0aW8gLyAyKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3gocG9pbnQsIE1hdGguYWJzKGFyY1JhZGl1cykpO1xuICAgIH1cblxuICAgIGRyYXdTaGFwZShzaGFwZTogU2hhcGUsIHNpemU6IG51bWJlciwgb3BzOiBPcHNQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KFt4LCB5XSwgTWF0aC5hYnMoc2l6ZSkpO1xuXG4gICAgICAgIHN3aXRjaCAoc2hhcGUpIHtcbiAgICAgICAgICAgIGNhc2UgU2hhcGUuQ2lyY2xlOlxuICAgICAgICAgICAgICAgIHRoaXMuZmlndXJlcy5wdXNoKG5ldyBDaXJjbGUoW3gsIHldLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5TcXVhcmU6XG4gICAgICAgICAgICAgICAgdGhpcy5maWd1cmVzLnB1c2gobmV3IFJlY3RhbmdsZShbeCwgeV0sIFtkeCwgZHldLCBzaXplLCBzaXplLCBzdHlsZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTaGFwZS5UcmlhbmdsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ3VyZXMucHVzaChuZXcgVHJpYW5nbGUoW3gsIHldLCBbZHgsIGR5XSwgc2l6ZSwgc3R5bGUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2EgPSB0aGlzLmZpcnN0Q29sb3I7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5zZWNvbmRDb2xvcjtcbiAgICAgICAgY29uc3QgYVJhdGlvID0gTWF0aC5hYnMoY29sb3IgLSAwLjUpICogMjtcbiAgICAgICAgY29uc3QgYlJhdGlvID0gMS4wIC0gYVJhdGlvO1xuICAgICAgICBjb25zdCByID0gTWF0aC50cnVuYyhjYVswXSAqIGFSYXRpbyArIGNiWzBdICogYlJhdGlvKTtcbiAgICAgICAgY29uc3QgZyA9IE1hdGgudHJ1bmMoY2FbMV0gKiBhUmF0aW8gKyBjYlsxXSAqIGJSYXRpbyk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLnRydW5jKGNhWzJdICogYVJhdGlvICsgY2JbMl0gKiBiUmF0aW8pO1xuICAgICAgICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2xvc2VDdXJzb3IgZXh0ZW5kcyBJQ3Vyc29yIHtcbiAgICAjY3Vyc29yOiBJQ3Vyc29yO1xuICAgICNwb2x5Z29uOiBQb2x5Z29uO1xuXG4gICAgY29uc3RydWN0b3IoY3Vyc29yOiBJQ3Vyc29yLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLiNjdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbLi4uY3Vyc29yLnBvc2l0aW9uXTtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFsuLi5jdXJzb3Iub3JpZW50YXRpb25dO1xuICAgICAgICB0aGlzLnJlZmxlY3Rpb24gPSBjdXJzb3IucmVmbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGN1cnNvci5hbmdsZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZU11bHRpcGxlciA9IGN1cnNvci5kaXN0YW5jZU11bHRpcGxlcjtcbiAgICAgICAgdGhpcy5ib3ggPSB0aGlzLiNjdXJzb3IuYm94O1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgICAgIHRoaXMuI3BvbHlnb24gPSBuZXcgUG9seWdvbihbLi4uY3Vyc29yLnBvc2l0aW9uXSwgW10sIHN0eWxlKTtcbiAgICB9XG5cbiAgICBjYWxjU3R5bGVQYXJhbXMob3BzOiBPcHNQYXJhbXMpOiBTdHlsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJzb3IuY2FsY1N0eWxlUGFyYW1zKG9wcyk7XG4gICAgfVxuXG4gICAgZHJhd0xpbmUoZGlzdGFuY2U6IG51bWJlciwgc3Ryb2tlOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgW29sZF94LCBvbGRfeV0gPSB0aGlzLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmZvcndhcmQoZGlzdGFuY2UpO1xuICAgICAgICBjb25zdCBbbmV3X3gsIG5ld195XSA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGRlbHRhOiBbbnVtYmVyLCBudW1iZXJdID0gW25ld194IC0gb2xkX3gsIG5ld195IC0gb2xkX3ldO1xuICAgICAgICB0aGlzLiNwb2x5Z29uLmN1cnZlcy5wdXNoKG5ldyBMaW5lQ3VydmUoZGVsdGEpKTtcbiAgICAgICAgdGhpcy5leHRlbmRCb3godGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgZHJhd0FyY0xpbmUocmF0aW86IG51bWJlciwgc2l6ZTogbnVtYmVyLCBzdHJva2U6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xuICAgICAgICBjb25zdCBhcmNTaXplID0gc2l6ZSAvIDIgKiB0aGlzLmRpc3RhbmNlTXVsdGlwbGVyO1xuICAgICAgICBjb25zdCBhcmNSYWRpdXMgPSBhcmNTaXplIC8gTWF0aC5zaW4ocmF0aW8gKiBNYXRoLlBJKTtcbiAgICAgICAgY29uc3Qgc2hpZnQgPSB0aGlzLmFuZ2xlIC0gMC4yNTtcblxuICAgICAgICB0aGlzLiNwb2x5Z29uLmN1cnZlcy5wdXNoKG5ldyBBcmNDdXJ2ZShhcmNSYWRpdXMsIHJhdGlvLCBzaGlmdCkpO1xuXG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gdGhpcy5vcmllbnRhdGlvbjtcbiAgICAgICAgLy8gcm90YXRlIGJ5IDkwwrBcbiAgICAgICAgY29uc3QgbmR4ID0gLWR5ICogdGhpcy5yZWZsZWN0aW9uO1xuICAgICAgICBjb25zdCBuZHkgPSBkeCAqIHRoaXMucmVmbGVjdGlvbjtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBbeCArIGFyY1JhZGl1cyAqIG5keCwgeSArIGFyY1JhZGl1cyAqIG5keV07XG4gICAgICAgIHRoaXMuZXh0ZW5kQm94KHBvaW50LCBNYXRoLmFicyhhcmNSYWRpdXMpKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZShyYXRpbyAvIDIpO1xuICAgICAgICB0aGlzLmZvcndhcmQoc2l6ZSk7XG4gICAgICAgIHRoaXMucm90YXRlKHJhdGlvIC8gMik7XG4gICAgfVxuXG4gICAgZHJhd1NoYXBlKHNoYXBlOiBTaGFwZSwgc2l6ZTogbnVtYmVyLCBvcHM6IE9wc1BhcmFtcykge1xuICAgICAgICB0aGlzLiNjdXJzb3IuZHJhd1NoYXBlKHNoYXBlLCBzaXplLCBvcHMpO1xuICAgIH1cblxuICAgIGNhbGNDb2xvcihjb2xvcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnNvci5jYWxjQ29sb3IoY29sb3IpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5maWd1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEN1cnNvciBpcyBjbG9zZWQuIEdvIGF3YXkuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWd1cmVzLnB1c2godGhpcy4jcG9seWdvbik7XG4gICAgICAgIHRoaXMuI2N1cnNvci5maWd1cmVzID0gdGhpcy4jY3Vyc29yLmZpZ3VyZXMuY29uY2F0KHRoaXMuZmlndXJlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IHBhcnNlTGluZUZ1bmMsIHBhcnNlTGluZVZhbHVlLCBwYXJzZVJhd1Rva2VucyB9IGZyb20gXCJAL2NvcmUvcGFyc2VyXCI7XG5pbXBvcnQgeyBEeW5hbWljQXJnc0tleSwgRFlOQU1JQ19BUkdTIH0gZnJvbSBcIkAvY29yZS9tYXBwaW5nc1wiO1xuaW1wb3J0IHsgRXZhbHVlZFZhbHVlIH0gZnJvbSBcIkAvY29yZS9jb250ZXh0XCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiLi9mdW5jdGlvbnNCYWdcIjtcbmltcG9ydCB7IFN0YWNrU3RlcCB9IGZyb20gXCIuL3N0ZXBcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gXCIuL3N0YXZlXCI7XG5pbXBvcnQgeyBWYWx1ZU5vZGUgfSBmcm9tIFwiLi9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiLi9hc3QvZnVuY3Rpb25cIjtcblxuY29uc3QgTUFYX1NURVBTID0gMTAwMDAwO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhlYyhzdGFjazogU3RhY2tTdGVwKSB7XG4gICAgZm9yIChsZXQgc3RlcCA9IDA7IHN0ZXAgPCBNQVhfU1RFUFM7IHN0ZXArKykge1xuICAgICAgICBpZiAoc3RhY2suc3RlcCgpLmhhbHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBcIk1heGltdW0gc3RlcHMgcmVhY2hlZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFeGVjKHZhbHVlQXJndW1lbnQ6IG51bWJlciwgbWF4SXRlcmF0aW9uOiBudW1iZXIsIHN0YXZlczogU3RhdmVbXSwgY3Vyc29yOiBDdXJzb3IpOiBTdGFja1N0ZXAge1xuICAgIGNvbnN0IGFyZ3VtZW50OiBFdmFsdWVkVmFsdWUgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZUFyZ3VtZW50LFxuICAgICAgICBzdHJva2VTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDEuMCxcbiAgICAgICAgY29sb3I6IDAuMCxcbiAgICAgICAgaXNGaWxsZWQ6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCBiYWcgPSBuZXcgRnVuY3Rpb25zQmFnKG1heEl0ZXJhdGlvbiwgaW5pdEZ1bmNCYWcoc3RhdmVzKSk7XG4gICAgY29uc3QgdmFsdWVGdW5jQmFnID0gaW5pdFZhbHVlQmFnKHN0YXZlcyk7XG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBDb250ZXh0KHsgYXJndW1lbnQsIGN1cnNvciwgdmFsdWVGdW5jQmFnIH0pO1xuICAgIHJldHVybiBuZXcgU3RhY2tTdGVwKGNvbnRleHQsIGJhZyk7XG59XG5cbmZ1bmN0aW9uIGluaXRGdW5jQmFnKHN0YXZlczogU3RhdmVbXSk6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPiB7XG4gICAgY29uc3QgYmFnOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4gPSB7fTtcbiAgICBzdGF2ZXMgXG4gICAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiAhRFlOQU1JQ19BUkdTLmluY2x1ZGVzKG5hbWUgYXMgRHluYW1pY0FyZ3NLZXkpKVxuICAgICAgICAuZm9yRWFjaCgoeyBuYW1lLCBzdWZmaXggPSBudWxsLCB0b2tlbnM6IHJhd1Rva2VucyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IHRvUmVhbG5hbWUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHBhcnNlUmF3VG9rZW5zKHJhd1Rva2Vucyk7XG4gICAgICAgICAgICBiYWdbcmVhbE5hbWVdID0gcGFyc2VMaW5lRnVuYyhuYW1lLCB0b2tlbnMpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gYmFnO1xufVxuXG5mdW5jdGlvbiBpbml0VmFsdWVCYWcoc3RhdmVzOiBTdGF2ZVtdKTogUmVjb3JkPHN0cmluZywgVmFsdWVOb2RlW10+IHtcbiAgICBjb25zdCBiYWc6IFJlY29yZDxzdHJpbmcsIFZhbHVlTm9kZVtdPiA9IHt9O1xuICAgIHN0YXZlcyBcbiAgICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IERZTkFNSUNfQVJHUy5pbmNsdWRlcyhuYW1lIGFzIER5bmFtaWNBcmdzS2V5KSlcbiAgICAgICAgLmZvckVhY2goKHsgbmFtZSwgc3VmZml4ID0gbnVsbCwgdG9rZW5zOiByYXdUb2tlbnMgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhbE5hbWUgPSB0b1JlYWxuYW1lKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBwYXJzZVJhd1Rva2VucyhyYXdUb2tlbnMpO1xuICAgICAgICAgICAgYmFnW3JlYWxOYW1lXSA9IHBhcnNlTGluZVZhbHVlKHRva2Vucyk7XG4gICAgICAgIH0pO1xuICAgIHJldHVybiBiYWc7XG59XG5cbmZ1bmN0aW9uIHRvUmVhbG5hbWUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyB8IG51bGwpIHtcbiAgICByZXR1cm4gKHN1ZmZpeCA9PT0gbnVsbCB8fCBzdWZmaXgubGVuZ3RoID09IDApID8gbmFtZSA6IGAke25hbWV9Ojoke3N1ZmZpeH1gO1xufSIsImV4cG9ydCBpbnRlcmZhY2UgRmlndXJlIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZVN0eWxlIHtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBzdHJva2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHlsZSB7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc3Ryb2tlPzogbnVtYmVyO1xuICAgIGZpbGw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgICBmaXJzdFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHNlY29uZFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIHN0eWxlOiBMaW5lU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdFBvaW50LCBzZWNvbmRQb2ludCwgc3R5bGU6IExpbmVTdHlsZSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZmlyc3RQb2ludCA9IGZpcnN0UG9pbnQ7XG4gICAgICAgIHRoaXMuc2Vjb25kUG9pbnQgPSBzZWNvbmRQb2ludDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1cnZlIHt9XG5cbmV4cG9ydCBjbGFzcyBMaW5lQ3VydmUgaW1wbGVtZW50cyBDdXJ2ZSB7XG4gICAgZGVsdGE6IFtudW1iZXIsIG51bWJlcl07XG5cbiAgICBjb25zdHJ1Y3RvcihkZWx0YTogW251bWJlciwgbnVtYmVyXSkge1xuICAgICAgICB0aGlzLmRlbHRhID0gZGVsdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJjQ3VydmUgaW1wbGVtZW50cyBDdXJ2ZSB7XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBzaGlmdDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIHJhdGlvOiBudW1iZXIsIHNoaWZ0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvbHlnb24gaW1wbGVtZW50cyBGaWd1cmUge1xuICAgIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICAgIGN1cnZlczogQ3VydmVbXTtcbiAgICBjbG9zZTogYm9vbGVhbjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludDogW251bWJlciwgbnVtYmVyXSwgY3VydmVzOiBDdXJ2ZVtdLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuY3VydmVzID0gY3VydmVzO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMuY2xvc2UgPSB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENpcmNsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIHJhZGl1cywgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFyYyBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgcmFkaXVzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBjbG9zZTogYm9vbGVhbjtcbiAgICBzaGlmdDogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHBvaW50LCByYWRpdXMsIHJhdGlvLCB7IHNoaWZ0ID0gMC4wLCBjbG9zZSA9IGZhbHNlIH0gPSB7fSwgc3R5bGU6IFN0eWxlID0ge30pIHtcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgICAgIHRoaXMuY2xvc2UgPSBjbG9zZTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIEZpZ3VyZSB7XG4gICAgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gICAgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl07XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwb2ludDogW251bWJlciwgbnVtYmVyXSwgb3JpZW50YXRpb246IFtudW1iZXIsIG51bWJlcl0sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlIGltcGxlbWVudHMgRmlndXJlIHtcbiAgICBwb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgICBvcmllbnRhdGlvbjogW251bWJlciwgbnVtYmVyXTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgc3R5bGU6IFN0eWxlO1xuXG4gICAgY29uc3RydWN0b3IocG9pbnQsIG9yaWVudGF0aW9uLCBzaXplLCBzdHlsZTogU3R5bGUgPSB7fSkge1xuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSBcIkAvY29yZS9hc3QvZnVuY3Rpb25cIjtcblxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25zQmFnIHtcbiAgICBtYXhJdGVyYXRpb246IG51bWJlcjtcbiAgICBiYWc6IHtbbmFtZTogc3RyaW5nXTogRnVuY3Rpb259O1xuXG4gICAgY29uc3RydWN0b3IobWF4SXRlcmF0aW9uLCBiYWcpIHtcbiAgICAgICAgdGhpcy5tYXhJdGVyYXRpb24gPSBtYXhJdGVyYXRpb247XG4gICAgICAgIHRoaXMuYmFnID0gYmFnO1xuICAgIH1cblxuICAgIGZpbmRGdW5jdGlvbihuYW1lOiBzdHJpbmcsIGl0ZXJhdGlvbjogbnVtYmVyID0gMCk6IEZ1bmN0aW9uIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHsgbWF4SXRlcmF0aW9uIH0gPSB0aGlzO1xuICAgICAgICBpZiAoaXRlcmF0aW9uID49IG1heEl0ZXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aHJvd0Z1bmMgPSB0aGlzLiN0aHJvd0Z1bmMuYmluZCh0aGlzKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiA+PSBtYXhJdGVyYXRpb24gLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dGdW5jKGAke25hbWV9OjpFTkRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZXJhdGlvbiAlIDIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93RnVuYyhgJHtuYW1lfTo6RVZFTmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06Ok9ERGApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBpdGVyYXRpb247IGkgPiAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Z1bmMoYCR7bmFtZX06OkdFJHtpfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvd0Z1bmMobmFtZSk7XG4gICAgICAgIH0gY2F0Y2goZnVuYykge1xuICAgICAgICAgICAgaWYgKGZ1bmMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgI3Rocm93RnVuYyhuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IHRoaXMuYmFnW25hbWVdO1xuICAgICAgICBpZiAoZnVuYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBmdW5jO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBDQUxMUyA9IFtcIkZcIiwgXCJHXCIsIFwiSFwiXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBEWU5BTUlDX0FSR1MgPSBbXCJESUFNT05EXCIsIFwiSU5WX1RSSUFOR0xFXCJdIGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IFNUQVZFUyA9IFsuLi5DQUxMUywgLi4uRFlOQU1JQ19BUkdTXSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBTVUZGSVhFUyA9IFtcIkVORFwiLCBcIkVWRU5cIiwgXCJPRERcIiwgXCJHRTNcIiwgXCJHRTVcIiwgXCJHRTdcIl0gYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgVE9LRU5TID0gW1xuICAgIC8vIENvdW50c1xuICAgIFwiQ09VTlRfMVwiLFxuICAgIFwiQ09VTlRfMlwiLFxuICAgIFwiQ09VTlRfM1wiLFxuICAgIFwiQ09VTlRfNVwiLFxuICAgIFwiQ09VTlRfN1wiLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBcIkNPVU5UX01JTlVTXCIsXG4gICAgXCJDT1VOVF9HT0xEXCIsXG4gICAgXCJDT1VOVF9TSUxWRVJcIixcbiAgICBcIkNPVU5UX0JST05aRVwiLFxuICAgIFwiQ09VTlRfUExBU1RJQ1wiLFxuICAgIC8vIEZyYWN0aW9uc1xuICAgIFwiRlJBQ1RfMV8yXCIsXG4gICAgXCJGUkFDVF8xXzNcIixcbiAgICBcIkZSQUNUXzJfM1wiLFxuICAgIFwiRlJBQ1RfMV80XCIsXG4gICAgXCJGUkFDVF8zXzRcIixcbiAgICBcIkZSQUNUXzFfNVwiLFxuICAgIFwiRlJBQ1RfMl81XCIsXG4gICAgXCJGUkFDVF8zXzVcIixcbiAgICBcIkZSQUNUXzRfNVwiLFxuICAgIC8vIEFuZ2xlc1xuICAgIFwiQU5HTEVfMjcwXCIsXG4gICAgXCJBTkdMRV8xODBcIixcbiAgICBcIkFOR0xFXzkwXCIsXG4gICAgXCJBTkdMRV82MFwiLFxuICAgIFwiQU5HTEVfNDVcIixcbiAgICBcIkFOR0xFXzMwXCIsXG4gICAgXCJBTkdMRV8xNVwiLFxuICAgIFwiQU5HTEVfMTBcIixcbiAgICAvLyBDb2xvcnNcbiAgICBcIkNPTE9SX01BWFwiLFxuICAgIFwiQ09MT1JfTUlOXCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzJcIixcbiAgICBcIkNPTE9SX1NISUZUXzFfNFwiLFxuICAgIFwiQ09MT1JfU0hJRlRfMV81XCIsXG4gICAgXCJDT0xPUl9TSElGVF8xXzEwXCIsXG4gICAgXCJDT0xPUl9GSUxMXCIsXG4gICAgXCJDT0xPUl9FTVBUWVwiLFxuICAgIC8vIFN0cm9rZVxuICAgIFwiU1RST0tFX1NPTElEXCIsXG4gICAgXCJTVFJPS0VfREFTSEVEXCIsXG4gICAgXCJTVFJPS0VfRE9UVEVEXCIsXG4gICAgXCJTVFJPS0VfVEhJQ0tfQUREXCIsXG4gICAgXCJTVFJPS0VfVEhJQ0tfU1VCXCIsXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIFwiT1BfTVVMVFwiLFxuICAgIFwiT1BfQUREXCIsXG4gICAgXCJPUF9TVUJcIixcbiAgICAvLyBBcmd1bWVudHNcbiAgICBcIkFSR1VNRU5UXCIsXG4gICAgXCJDQUxMX0RJQU1PTkRcIixcbiAgICBcIkNBTExfSU5WX1RSSUFOR0xFXCIsXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgXCJDQUxMX0ZcIixcbiAgICBcIkNBTExfR1wiLFxuICAgIFwiQ0FMTF9IXCIsXG4gICAgLy8gQ2xvc2UgQ2FsbGVyc1xuICAgIFwiQ0xPU0VfQ0FMTF9GXCIsXG4gICAgXCJDTE9TRV9DQUxMX0dcIixcbiAgICBcIkNMT1NFX0NBTExfSFwiLFxuICAgIC8vIFNoYXBlc1xuICAgIFwiRFJBV19DSVJDTEVcIixcbiAgICBcIkRSQVdfU1FVQVJFXCIsXG4gICAgXCJEUkFXX1RSSUFOR0xFXCIsXG4gICAgLy8gTGluZVxuICAgIFwiRFJBV19MSU5FXCIsXG4gICAgLy8gQXJjXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8zXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzJfM1wiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV8yXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfUl8xXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9SXzFfNFwiLFxuICAgIFwiRFJBV19BUkNMSU5FX1JfMV81XCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8zXzRcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzJfM1wiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV8yXCIsXG4gICAgXCJEUkFXX0FSQ0xJTkVfTF8xXzNcIixcbiAgICBcIkRSQVdfQVJDTElORV9MXzFfNFwiLFxuICAgIFwiRFJBV19BUkNMSU5FX0xfMV81XCIsXG4gICAgLy8gQ3Vyc29yIHRyYW5zbGF0aW9uc1xuICAgIFwiTU9WRV9GT1JXQVJEXCIsXG4gICAgXCJNT1ZFX0JBQ0tXQVJEXCIsXG4gICAgXCJNT1ZFX0xFRlRcIixcbiAgICBcIk1PVkVfUklHSFRcIixcbiAgICAvLyBDdXJzb3Igcm90YXRpb25zXG4gICAgXCJST1RBVEVfTEVGVFwiLFxuICAgIFwiUk9UQVRFX1JJR0hUXCIsXG4gICAgLy8gQ3Vyc29yIEZsaXBcbiAgICBcIkZMSVBfVlwiLFxuICAgIFwiRkxJUF9IXCIsXG4gICAgLy8gUmVwZXRldGl2ZSBhY3Rpb25zXG4gICAgXCJSRVZFUlNFXCIsXG4gICAgXCJSRVBMQVlcIixcbiAgICBcIlJFUExBWV8yXCIsXG4gICAgXCJSRVBMQVlfM1wiLFxuICAgIFwiUkVQTEFZXzRcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNBcmdzS2V5ID0gdHlwZW9mIERZTkFNSUNfQVJHU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgRHluYW1pY0FyZ3NNYXA8VHlwZT4gPSBSZWNvcmQ8RHluYW1pY0FyZ3NLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBDYWxsc0tleSA9IHR5cGVvZiBDQUxMU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgQ2FsbHNNYXA8VHlwZT4gPSBSZWNvcmQ8RHluYW1pY0FyZ3NLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBTdWZmaXhlc0tleSA9IHR5cGVvZiBTVUZGSVhFU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgU3VmZml4ZXNNYXA8VHlwZT4gPSBSZWNvcmQ8U3VmZml4ZXNLZXksIFR5cGU+O1xuXG5leHBvcnQgdHlwZSBTdGF2ZXNLZXkgPSB0eXBlb2YgU1RBVkVTW251bWJlcl07XG5leHBvcnQgdHlwZSBTdGF2ZXNNYXA8VHlwZT4gPSBSZWNvcmQ8U3RhdmVzS2V5LCBUeXBlPjtcblxuZXhwb3J0IHR5cGUgVG9rZW5zS2V5ID0gdHlwZW9mIFRPS0VOU1tudW1iZXJdO1xuZXhwb3J0IHR5cGUgVG9rZW5zTWFwPFR5cGU+ID0gUmVjb3JkPFRva2Vuc0tleSwgVHlwZT47IiwiaW1wb3J0IHsgVG9rZW4sIFRPS0VOUywgQWN0aW9uQ2IsIFZhbHVlQ2IgfSBmcm9tIFwiQC9jb3JlL3Rva2Vuc1wiO1xuaW1wb3J0IHsgQWN0aW9uTm9kZSwgVmFsdWVOb2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tIFwiQC9jb3JlL2FzdC9mdW5jdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSYXdUb2tlbnMocmF3VG9rZW5zOiBzdHJpbmdbXSk6IFRva2VuW10ge1xuICAgIHJldHVybiByYXdUb2tlbnMubWFwKHJhdyA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gVE9LRU5TW3Jhd107XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IGBQYXJzaW5nIGVycm9yOiAke3Jhd30gaXMgbm90IHVuZGVmaW5lZCBhcyB0b2tlbi5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9KTtcbn1cblxuY2xhc3MgQWN0aW9uVG1wIHtcbiAgICBwdWJsaWMgYWN0aW9uczogQWN0aW9uTm9kZVtdO1xuICAgIHByaXZhdGUgdmFsdWVzOiBWYWx1ZU5vZGVbXTtcbiAgICBwcml2YXRlIHRva2VuOiBUb2tlbiB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIHNldEFjdGlvblRva2VuKHRva2VuOiBUb2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uVG9rZW4oKTogVG9rZW4gfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNBY3Rpb25TZXQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuICE9PSBudWxsO1xuICAgIH1cblxuICAgIHB1c2hBY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGlvblNldCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRoaXMudG9rZW4uZmFjdG9yeSBhcyBBY3Rpb25DYjtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZmFjdG9yeSh0aGlzLnZhbHVlcyk7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICAgIH1cblxuICAgIGluc2VydFZhbHVlKHZhbHVlOiBWYWx1ZU5vZGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxpbmVGdW5jKG5hbWU6IHN0cmluZywgdG9rZW5zOiBUb2tlbltdKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICBjb25zdCB0bXAgPSBuZXcgQWN0aW9uVG1wKCk7XG4gICAgdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuICAgICAgICBpZiAodG1wLmlzQWN0aW9uU2V0KCkpIHtcbiAgICAgICAgICAgIHBhcnNlVmFsdWUodG9rZW4sIHRtcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZUFjdGlvbih0b2tlbiwgdG1wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdG1wLnB1c2hBY3Rpb24oKTsgLy8gcHVzaCBsYXN0IHRva2VuLlxuXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihuYW1lLCB0bXAuZ2V0QWN0aW9ucygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGluZVZhbHVlKHRva2VuczogVG9rZW5bXSk6IFZhbHVlTm9kZVtdIHtcbiAgICByZXR1cm4gdG9rZW5zLm1hcCh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBhY3Rpb25zIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLmlzRHluYW1pYykge1xuICAgICAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiBObyBkeW5hbWljIGVsZW1lbnRzIGFyZSBhbGxvd2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IHRva2VuLmZhY3RvcnkgYXMgVmFsdWVDYjtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VBY3Rpb24odG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICghdG9rZW4uaXNBY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgXCJQYXJzaW5nIGVycm9yOiB0b2tlbiBpcyBub3QgYW4gYWN0aW9uXCI7XG4gICAgfVxuICAgIHRtcC5zZXRBY3Rpb25Ub2tlbih0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodG9rZW46IFRva2VuLCB0bXA6IEFjdGlvblRtcCkge1xuICAgIGlmICh0b2tlbi5pc0FjdGlvbikge1xuICAgICAgICB0bXAucHVzaEFjdGlvbigpO1xuICAgICAgICB0bXAuc2V0QWN0aW9uVG9rZW4odG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSB0b2tlbi5mYWN0b3J5IGFzIFZhbHVlQ2I7XG4gICAgICAgIHRtcC5pbnNlcnRWYWx1ZShmYWN0b3J5KCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRva2Vuc01hcCwgU3VmZml4ZXNNYXAsIFN0YXZlc01hcCB9IGZyb20gXCJAL2NvcmUvbWFwcGluZ3NcIjtcbmltcG9ydCB7IFN0YXZlIH0gZnJvbSBcIkAvY29yZS9zdGF2ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU3RhdmVzKHN0YXZlczogU3RhdmVbXSk6IFtzdHJpbmcsIHN0cmluZ11bXSB7XG4gICAgcmV0dXJuIHN0YXZlcy5tYXAoc3RhdmUgPT4gW2VuY29kZVN0YXZlTmFtZShzdGF2ZSksIGVuY29kZVRva2VucyhzdGF2ZS50b2tlbnMpXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVTdGF2ZU5hbWUoc3RhdmU6IFN0YXZlKTogc3RyaW5nIHtcbiAgICBjb25zdCBuYW1lID0gU1RBVkVfVE9fU0hPUlRDVVRbc3RhdmUubmFtZV0gfHwgXCJcIjtcbiAgICBjb25zdCBzdWZmaXggPSBTVUZGSVhfVE9fU0hPUlRDVVRbc3RhdmUuc3VmZml4XSB8fCBcIlwiO1xuICAgIHJldHVybiBgLiR7bmFtZX0ke3N1ZmZpeH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlVG9rZW5zKHRva2Vuczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiB0b2tlbnNcbiAgICAgICAgLm1hcCh0b2tlbiA9PiBUT0tFTl9UT19TSE9SVENVVFt0b2tlbl0gfHwgXCJcIilcbiAgICAgICAgLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVTdGF2ZXMoY29kZTogSXRlcmFibGVJdGVyYXRvcjxbc3RyaW5nLCBzdHJpbmddPik6IFN0YXZlW10ge1xuICAgIGNvbnN0IHN0YXZlczogU3RhdmVbXSA9IFtdO1xuXG4gICAgZm9yKGNvbnN0IFtjb2RlZE5hbWUsIGNvZGVkVG9rZW5zXSBvZiBjb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlYWxOYW1lID0gZGVjb2RlU3RhdmVOYW1lKGNvZGVkTmFtZSk7XG4gICAgICAgIGlmIChyZWFsTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW25hbWUsIHN1ZmZpeF0gPSByZWFsTmFtZTtcbiAgICAgICAgbGV0IHN0YXZlOiBTdGF2ZSA9IHtuYW1lLCB0b2tlbnM6IGRlY29kZVRva2Vucyhjb2RlZFRva2Vucyl9O1xuICAgICAgICBpZiAoc3VmZml4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF2ZS5zdWZmaXggID0gc3VmZml4O1xuICAgICAgICB9XG4gICAgICAgIHN0YXZlcy5wdXNoKHN0YXZlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RhdmVOYW1lKGNvZGU6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZyB8IG51bGxdIHwgbnVsbCB7XG4gICAgaWYgKGNvZGUubGVuZ3RoID4gMyAmJiBjb2RlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvZGVbMF0gIT09IFwiLlwiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBTVEFWRV9GUk9NX1NIT1JUQ1VUW2NvZGVbMV1dO1xuICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUubGVuZ3RoID09IDIpIHtcbiAgICAgICAgcmV0dXJuIFtuYW1lLCBudWxsXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWZmaXggPSBTVUZGSVhfRlJPTV9TSE9SVENVVFtjb2RlWzJdXTtcbiAgICBpZiAoc3VmZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtuYW1lLCBzdWZmaXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVG9rZW5zKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvZGUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgY29uc3QgdG9rZW5Db2RlID0gY29kZS5zdWJzdHJpbmcoaSwgaSArIDIpO1xuICAgICAgICBjb25zdCB0b2tlbiA9IFRPS0VOX0ZST01fU0hPUlRDVVRbdG9rZW5Db2RlXTtcbiAgICAgICAgaWYgKHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xufVxuXG5jb25zdCBTVEFWRV9UT19TSE9SVENVVDogU3RhdmVzTWFwPHN0cmluZz4gPSB7XG4gICAgRjogXCJGXCIsXG4gICAgRzogXCJHXCIsXG4gICAgSDogXCJIXCIsXG4gICAgRElBTU9ORDogXCJEXCIsXG4gICAgSU5WX1RSSUFOR0xFOiBcIklcIixcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IFNVRkZJWF9UT19TSE9SVENVVDogU3VmZml4ZXNNYXA8c3RyaW5nPiA9IHtcbiAgICBFTkQ6IFwiMFwiLFxuICAgIEVWRU46IFwiMVwiLFxuICAgIE9ERDogXCIyXCIsXG4gICAgR0UzOiBcIjNcIixcbiAgICBHRTU6IFwiNFwiLFxuICAgIEdFNzogXCI1XCIsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBUT0tFTl9UT19TSE9SVENVVDogVG9rZW5zTWFwPHN0cmluZz4gPSB7XG4gICAgLy8gKioqIFZhbHVlcyAqKipcbiAgICAvLyBDb3VudHNcbiAgICBDT1VOVF8xOiBcIkMwXCIsXG4gICAgQ09VTlRfMjogXCJDMVwiLFxuICAgIENPVU5UXzM6IFwiQzJcIixcbiAgICBDT1VOVF81OiBcIkMzXCIsXG4gICAgQ09VTlRfNzogXCJDNFwiLFxuICAgIC8vIENvdW50cyAoc3BlY2lhbClcbiAgICBDT1VOVF9NSU5VUzogXCJDNVwiLFxuICAgIENPVU5UX0dPTEQ6IFwiQzZcIixcbiAgICBDT1VOVF9TSUxWRVI6IFwiQzdcIixcbiAgICBDT1VOVF9CUk9OWkU6IFwiQzhcIixcbiAgICBDT1VOVF9QTEFTVElDOiBcIkM5XCIsXG4gICAgLy8gRnJhY3Rpb25zXG4gICAgRlJBQ1RfMV8yOiBcIkYwXCIsXG4gICAgRlJBQ1RfMV8zOiBcIkYxXCIsXG4gICAgRlJBQ1RfMl8zOiBcIkYyXCIsXG4gICAgRlJBQ1RfMV80OiBcIkYzXCIsXG4gICAgRlJBQ1RfM180OiBcIkY0XCIsXG4gICAgRlJBQ1RfMV81OiBcIkY1XCIsXG4gICAgRlJBQ1RfMl81OiBcIkY2XCIsXG4gICAgRlJBQ1RfM181OiBcIkY3XCIsXG4gICAgRlJBQ1RfNF81OiBcIkY4XCIsXG4gICAgLy8gQW5nbGVzXG4gICAgQU5HTEVfMjcwOiBcIkEwXCIsXG4gICAgQU5HTEVfMTgwOiBcIkExXCIsXG4gICAgQU5HTEVfOTA6IFwiQTJcIixcbiAgICBBTkdMRV82MDogXCJBM1wiLFxuICAgIEFOR0xFXzQ1OiBcIkE0XCIsXG4gICAgQU5HTEVfMzA6IFwiQTVcIixcbiAgICBBTkdMRV8xNTogXCJBNlwiLFxuICAgIEFOR0xFXzEwOiBcIkE3XCIsXG4gICAgLy8gQ29sb3JzXG4gICAgQ09MT1JfTUFYOiBcIlYwXCIsXG4gICAgQ09MT1JfTUlOOiBcIlYxXCIsXG4gICAgQ09MT1JfU0hJRlRfMV8yOiBcIlYyXCIsXG4gICAgQ09MT1JfU0hJRlRfMV80OiBcIlYzXCIsXG4gICAgQ09MT1JfU0hJRlRfMV81OiBcIlY0XCIsXG4gICAgQ09MT1JfU0hJRlRfMV8xMDogXCJWNVwiLFxuICAgIENPTE9SX0ZJTEw6IFwiVjZcIixcbiAgICBDT0xPUl9FTVBUWTogXCJWN1wiLFxuICAgIC8vIFN0cm9rZVxuICAgIFNUUk9LRV9TT0xJRDogXCJTMFwiLFxuICAgIFNUUk9LRV9EQVNIRUQ6IFwiUzFcIixcbiAgICBTVFJPS0VfRE9UVEVEOiBcIlMyXCIsXG4gICAgU1RST0tFX1RISUNLX0FERDogXCJTM1wiLFxuICAgIFNUUk9LRV9USElDS19TVUI6IFwiUzRcIixcbiAgICAvLyBPcGVyYXRpb25zXG4gICAgT1BfTVVMVDogXCJPMFwiLFxuICAgIE9QX0FERDogXCJPMVwiLFxuICAgIE9QX1NVQjogXCJPMlwiLFxuICAgIC8vIEFyZ3VtZW50c1xuICAgIEFSR1VNRU5UOiBcIlowXCIsXG4gICAgQ0FMTF9ESUFNT05EOiBcIloxXCIsXG4gICAgQ0FMTF9JTlZfVFJJQU5HTEU6IFwiWjJcIixcblxuICAgIC8vICoqKiBBY3Rpb25zICoqKlxuICAgIC8vIENhbGxlcnNcbiAgICBDQUxMX0Y6IFwiWDBcIixcbiAgICBDQUxMX0c6IFwiWDFcIixcbiAgICBDQUxMX0g6IFwiWDJcIixcbiAgICAvLyBDbG9zZSBDYWxsZXJzXG4gICAgQ0xPU0VfQ0FMTF9GOiBcIlkwXCIsXG4gICAgQ0xPU0VfQ0FMTF9HOiBcIlkxXCIsXG4gICAgQ0xPU0VfQ0FMTF9IOiBcIlkyXCIsXG4gICAgLy8gU2hhcGVzXG4gICAgRFJBV19DSVJDTEU6IFwiRDBcIixcbiAgICBEUkFXX1NRVUFSRTogXCJEMVwiLFxuICAgIERSQVdfVFJJQU5HTEU6IFwiRDJcIixcbiAgICAvLyBMaW5lXG4gICAgRFJBV19MSU5FOiBcIkwwXCIsXG4gICAgLy8gQXJjXG4gICAgRFJBV19BUkNMSU5FX1JfM180OiBcIkwxXCIsXG4gICAgRFJBV19BUkNMSU5FX1JfMl8zOiBcIkwyXCIsXG4gICAgRFJBV19BUkNMSU5FX1JfMV8yOiBcIkwzXCIsXG4gICAgRFJBV19BUkNMSU5FX1JfMV8zOiBcIkw0XCIsXG4gICAgRFJBV19BUkNMSU5FX1JfMV80OiBcIkw1XCIsXG4gICAgRFJBV19BUkNMSU5FX1JfMV81OiBcIkw2XCIsXG4gICAgRFJBV19BUkNMSU5FX0xfM180OiBcIkw3XCIsXG4gICAgRFJBV19BUkNMSU5FX0xfMl8zOiBcIkw4XCIsXG4gICAgRFJBV19BUkNMSU5FX0xfMV8yOiBcIkw5XCIsXG4gICAgRFJBV19BUkNMSU5FX0xfMV8zOiBcIkxBXCIsXG4gICAgRFJBV19BUkNMSU5FX0xfMV80OiBcIkxCXCIsXG4gICAgRFJBV19BUkNMSU5FX0xfMV81OiBcIkxDXCIsXG4gICAgLy8gQ3Vyc29yIHRyYW5zbGF0aW9uc1xuICAgIE1PVkVfRk9SV0FSRDogXCJNMFwiLFxuICAgIE1PVkVfQkFDS1dBUkQ6IFwiTTFcIixcbiAgICBNT1ZFX0xFRlQ6IFwiTTJcIixcbiAgICBNT1ZFX1JJR0hUOiBcIk0zXCIsXG4gICAgLy8gQ3Vyc29yIHJvdGF0aW9uc1xuICAgIFJPVEFURV9MRUZUOiBcIlIwXCIsXG4gICAgUk9UQVRFX1JJR0hUOiBcIlIxXCIsXG4gICAgLy8gQ3Vyc29yIGZsaXBcbiAgICBGTElQX1Y6IFwiUjJcIixcbiAgICBGTElQX0g6IFwiUjNcIixcblxuICAgIC8vIFJlcGV0ZXRpdmUgYWN0aW9uc1xuICAgIFJFVkVSU0U6IFwiUTBcIixcbiAgICBSRVBMQVk6IFwiUTFcIixcbiAgICBSRVBMQVlfMjogXCJRMlwiLFxuICAgIFJFUExBWV8zOiBcIlEzXCIsXG4gICAgUkVQTEFZXzQ6IFwiUTRcIixcbn0gYXMgY29uc3Q7XG5cbmZ1bmN0aW9uIGludmVyc2U8VHlwZSBleHRlbmRzIHN0cmluZz4ob2JqOiBSZWNvcmQ8VHlwZSwgc3RyaW5nPik6IFJlY29yZDxzdHJpbmcsIFR5cGU+IHtcbiAgICBjb25zdCBpbnZfZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChba2V5LCB2YWxdKSA9PiBbdmFsLCBrZXldKTtcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKGludl9lbnRyaWVzKTtcbn1cblxuY29uc3QgU1RBVkVfRlJPTV9TSE9SVENVVCA9IGludmVyc2UoU1RBVkVfVE9fU0hPUlRDVVQpO1xuY29uc3QgVE9LRU5fRlJPTV9TSE9SVENVVCA9IGludmVyc2UoVE9LRU5fVE9fU0hPUlRDVVQpO1xuY29uc3QgU1VGRklYX0ZST01fU0hPUlRDVVQgPSBpbnZlcnNlKFNVRkZJWF9UT19TSE9SVENVVCk7IiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7IENvbnRleHRTdGVwcGVyLCBjcmVhdGVJbml0U3RlcHBlciB9IGZyb20gXCIuL2NvbnRleHRTdGVwcGVyXCI7XG5pbXBvcnQgeyBJQ3Vyc29yIH0gZnJvbSBcIi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBGdW5jdGlvbnNCYWcgfSBmcm9tIFwiLi9mdW5jdGlvbnNCYWdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gICAgaGFsdDogYm9vbGVhbixcbiAgICBzdGF2ZTogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG59XG5cbmV4cG9ydCBjbGFzcyBTdGFja1N0ZXAge1xuICAgICNzdGFjazogQ29udGV4dFN0ZXBwZXJbXTtcbiAgICAjYmFnOiBGdW5jdGlvbnNCYWc7XG4gICAgcmVhZG9ubHkgY3Vyc29yOiBJQ3Vyc29yO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogQ29udGV4dCwgYmFnOiBGdW5jdGlvbnNCYWcpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGJhZy5maW5kRnVuY3Rpb24oXCJTVEFSVFwiKSB8fCBiYWcuZmluZEZ1bmN0aW9uKFwiRlwiKTtcbiAgICAgICAgaWYgKGZ1bmMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IFwiU3RhcnQgZnVuY3Rpb24gbm90IGZvdW5kXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jc3RhY2sgPSBbY3JlYXRlSW5pdFN0ZXBwZXIoY29udGV4dCwgZnVuYyldO1xuICAgICAgICB0aGlzLiNiYWcgPSBiYWc7XG4gICAgICAgIHRoaXMuY3Vyc29yID0gY29udGV4dC5jdXJzb3I7XG4gICAgfVxuXG4gICAgc3RlcCgpOiBTdGF0ZSB7XG4gICAgICAgIGlmICh0aGlzLiNzdGFjay5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXZlOiAnPycsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZW1lbnQ6IENvbnRleHRTdGVwcGVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGNvbnN0IHN0ZXBwZXIgPSB0aGlzLmdldFRvcEVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgeyBpbmRleCwgc3RhdmUgfSA9IHN0ZXBwZXI7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0ZXBwZXIuZXhlYygpO1xuICAgICAgICBjb25zdCBzdGlsbENvbnRpbnVlID0gc3RlcHBlci5tb3ZlKHtcbiAgICAgICAgICAgIGJhZzogdGhpcy4jYmFnLFxuICAgICAgICAgICAgcHVzaDogKGVsZW1lbnQ6IENvbnRleHRTdGVwcGVyKSA9PiB7IG5ld0VsZW1lbnQgPSBlbGVtZW50OyB9LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0aWxsQ29udGludWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHRTdGVwcGVyID0gdGhpcy4jc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBjb250ZXh0U3RlcHBlci5vbkVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuI3N0YWNrLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGFsdDogdGhpcy4jc3RhY2subGVuZ3RoID09IDAsXG4gICAgICAgICAgICBzdGF2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VG9wRWxlbWVudCgpOiBDb250ZXh0U3RlcHBlciB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGFja1t0aGlzLiNzdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSUN1cnNvciB9IGZyb20gXCJAL2NvcmUvY3Vyc29yXCI7XG5pbXBvcnQgeyBGaWd1cmUsIENpcmNsZSwgQXJjLCBSZWN0YW5nbGUsIFRyaWFuZ2xlLCBMaW5lLCBTdHlsZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuaW1wb3J0IHsgUG9seWdvbiwgTGluZUN1cnZlLCBBcmNDdXJ2ZSB9IGZyb20gXCJAL2NvcmUvZmlndXJlc1wiO1xuXG5jb25zdCBOQU1FU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdmcoZG9jdW1lbnQsIGN1cnNvcjogSUN1cnNvcik6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInN2Z1wiKTtcbiAgICBsZXQgW21pbl94LCBtaW5feV0gPSBjdXJzb3IuYm94Lm1pbjtcbiAgICBsZXQgW21heF94LCBtYXhfeV0gPSBjdXJzb3IuYm94Lm1heDtcbiAgICBtaW5feCAtPSAxMDtcbiAgICBtaW5feSAtPSAxMDtcbiAgICBtYXhfeCArPSAxMDtcbiAgICBtYXhfeSArPSAxMDtcbiAgICBjb25zdCB3aWR0aCA9IG1heF94IC0gbWluX3g7XG4gICAgY29uc3QgaGVpZ2h0ID0gbWF4X3kgLSBtaW5feTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgJHttaW5feH0gJHttaW5feX0gJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gICAgY3Vyc29yLmZpZ3VyZXMuZm9yRWFjaChmaWd1cmUgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gdG9TdmcoZG9jdW1lbnQsIGZpZ3VyZSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3ZnO1xufVxuXG5jb25zdCBTUVJUM0gyID0gTWF0aC5zcXJ0KDMpIC8gMjtcbmNvbnN0IEgyID0gMSAvIDI7XG5cbmZ1bmN0aW9uIHRvU3ZnKGRvY3VtZW50LCBmaWd1cmU6IEZpZ3VyZSkge1xuICAgIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBMaW5lKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcImxpbmVcIik7XG4gICAgICAgIGNvbnN0IFt4MSwgeTFdID0gZmlndXJlLmZpcnN0UG9pbnQ7XG4gICAgICAgIGNvbnN0IFt4MiwgeTJdID0gZmlndXJlLnNlY29uZFBvaW50O1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcIngxXCIsIHgxKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCB5MSk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwieDJcIiwgeDIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInkyXCIsIHkyKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgZmlndXJlLnN0eWxlLmNvbG9yIHx8IFwiYmxhY2tcIik7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIGZpZ3VyZS5zdHlsZS5zdHJva2UgIT09IHVuZGVmaW5lZCA/IGZpZ3VyZS5zdHlsZS5zdHJva2UgOiAxKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBQb2x5Z29uKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgbGV0IHBhdGggPSBgTSAke3h9ICR7eX1gO1xuXG4gICAgICAgIGZpZ3VyZS5jdXJ2ZXMuZm9yRWFjaChjdXJ2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VydmUgaW5zdGFuY2VvZiBMaW5lQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZHgsIGR5XSA9IGN1cnZlLmRlbHRhO1xuICAgICAgICAgICAgICAgIHBhdGggKz0gYCBsICR7ZHh9ICR7ZHl9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VydmUgaW5zdGFuY2VvZiBBcmNDdXJ2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBjdXJ2ZS5yYWRpdXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IGN1cnZlLnNoaWZ0ICogMiAqIE1hdGguUEk7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kQW5nbGUgPSAoY3VydmUuc2hpZnQgKyBjdXJ2ZS5yYXRpbykgKiAyICogTWF0aC5QSTtcbiAgICAgICAgICAgICAgICBjb25zdCBkeCA9IHIgKiAoTWF0aC5jb3MoZW5kQW5nbGUpIC0gTWF0aC5jb3Moc3RhcnRBbmdsZSkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gciAqIChNYXRoLnNpbihlbmRBbmdsZSkgLSBNYXRoLnNpbihzdGFydEFuZ2xlKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhZzEgPSBNYXRoLmFicyhjdXJ2ZS5yYXRpbykgPD0gMC41ID8gXCIwXCIgOiBcIjFcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnMiA9IGN1cnZlLnJhdGlvIDw9IDAuMCA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBgIGEgJHtyfSAke3J9IDAgJHtmbGFnMX0gJHtmbGFnMn0gJHtkeH0gJHtkeX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlndXJlLmNsb3NlKSB7XG4gICAgICAgICAgICBwYXRoICs9IGAgTCAke3h9ICR7eX0gWmA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIHBhdGgpO1xuICAgICAgICBzZXRCYXNpY0F0dHJzKGZpZ3VyZS5zdHlsZSwgbm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0gZWxzZSBpZiAoZmlndXJlIGluc3RhbmNlb2YgQ2lyY2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcImNpcmNsZVwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN4XCIsIHgpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImN5XCIsIHkpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInJcIiwgZmlndXJlLnJhZGl1cyk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmIChmaWd1cmUgaW5zdGFuY2VvZiBBcmMpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIFwicGF0aFwiKTtcbiAgICAgICAgY29uc3QgW3gsIHldID0gZmlndXJlLnBvaW50O1xuICAgICAgICBjb25zdCByID0gZmlndXJlLnJhZGl1cztcbiAgICAgICAgY29uc3Qgc3RhcnRBbmdsZSA9IGZpZ3VyZS5zaGlmdCAqIDIgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBlbmRBbmdsZSA9IChmaWd1cmUuc2hpZnQgKyBmaWd1cmUucmF0aW8pICogMiAqIE1hdGguUEk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3ggPSB4ICsgciAqIE1hdGguY29zKHN0YXJ0QW5nbGUpO1xuICAgICAgICBjb25zdCBzdGFydF95ID0geSArIHIgKiBNYXRoLnNpbihzdGFydEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3ggPSB4ICsgciAqIE1hdGguY29zKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZW5kX3kgPSB5ICsgciAqIE1hdGguc2luKGVuZEFuZ2xlKTtcbiAgICAgICAgY29uc3QgZmxhZzEgPSBNYXRoLmFicyhmaWd1cmUucmF0aW8pIDw9IDAuNSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGNvbnN0IGZsYWcyID0gZmlndXJlLnJhdGlvIDw9IDAuMCA/IFwiMFwiIDogXCIxXCI7XG4gICAgICAgIGxldCBwYXRoID0gYE0gJHtzdGFydF94fSAke3N0YXJ0X3l9YDtcbiAgICAgICAgcGF0aCArPSBgIEEgJHtyfSAke3J9IDAgJHtmbGFnMX0gJHtmbGFnMn0gJHtlbmRfeH0gJHtlbmRfeX1gO1xuICAgICAgICBpZiAoZmlndXJlLmNsb3NlKSB7XG4gICAgICAgICAgICBwYXRoICs9IGBMICR7eH0gJHt5fSBaYDtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFJlY3RhbmdsZSkge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgXCJwYXRoXCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBmaWd1cmUucG9pbnQ7XG4gICAgICAgIGNvbnN0IFtkeCwgZHldID0gZmlndXJlLm9yaWVudGF0aW9uO1xuICAgICAgICBjb25zdCBXID0gZmlndXJlLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgSCA9IGZpZ3VyZS5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcGF0aCA9ICcnO1xuICAgICAgICBwYXRoICs9IGAgTSAke3ggLSBXICogZHggLSBIICogZHl9ICR7eSArIEggKiBkeCAtIFcgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggLSBXICogZHggKyBIICogZHl9ICR7eSAtIEggKiBkeCAtIFcgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBXICogZHggKyBIICogZHl9ICR7eSAtIEggKiBkeCArIFcgKiBkeX1gO1xuICAgICAgICBwYXRoICs9IGAgTCAke3ggKyBXICogZHggLSBIICogZHl9ICR7eSArIEggKiBkeCArIFcgKiBkeX1gO1xuICAgICAgICBwYXRoICs9ICcgWic7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZFwiLCBwYXRoKTtcbiAgICAgICAgc2V0QmFzaWNBdHRycyhmaWd1cmUuc3R5bGUsIG5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9IGVsc2UgaWYgKGZpZ3VyZSBpbnN0YW5jZW9mIFRyaWFuZ2xlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTkFNRVNQQUNFLCBcInBhdGhcIik7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGZpZ3VyZS5wb2ludDtcbiAgICAgICAgY29uc3QgW2R4LCBkeV0gPSBmaWd1cmUub3JpZW50YXRpb247XG4gICAgICAgIGNvbnN0IFMgPSBmaWd1cmUuc2l6ZTtcbiAgICAgICAgbGV0IHBhdGggPSAnJztcbiAgICAgICAgcGF0aCArPSBgIE0gJHt4ICsgUyAqIGR4fSAke3kgKyBTICogZHl9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4IC0gU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSArIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSBgIEwgJHt4ICsgU1FSVDNIMiAqIFMgKiBkeSAtIEgyICogUyAqIGR4fSAke3kgLSBIMiAqIFMgKiBkeSAtIFNRUlQzSDIgKiBTICogZHh9YDtcbiAgICAgICAgcGF0aCArPSAnIFonO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImRcIiwgcGF0aCk7XG4gICAgICAgIHNldEJhc2ljQXR0cnMoZmlndXJlLnN0eWxlLCBub2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRCYXNpY0F0dHJzKHN0eWxlOiBTdHlsZSwgbm9kZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBzdHlsZS5maWxsIHx8IFwiYmxhY2tcIik7XG4gICAgaWYgKHN0eWxlLnN0cm9rZSAhPT0gdW5kZWZpbmVkICYmIHN0eWxlLnN0cm9rZSA+IDApIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc3R5bGUuY29sb3IgfHwgXCJub25lXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBgJHtzdHlsZS5zdHJva2V9YCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmFsdWVOb2RlLCBBY3Rpb25Ob2RlIH0gZnJvbSBcIkAvY29yZS9hc3QvYmFzZVwiO1xuaW1wb3J0IHsgTXVsdGlwbGVyLCBBbmdsZSwgQXJndW1lbnQsIER5bmFtaWNBcmd1bWVudCB9IGZyb20gXCJAL2NvcmUvYXN0L3ZhbHVlc1wiO1xuaW1wb3J0IHsgU2hhcGUgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgVG9rZW5zTWFwIH0gZnJvbSBcIkAvY29yZS9tYXBwaW5nc1wiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiQC9jb3JlL2FzdC9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSBcIkAvY29yZS9hc3QvY29sb3JzXCI7XG5pbXBvcnQgKiBhcyBzdHJva2VzIGZyb20gXCJAL2NvcmUvYXN0L3N0cm9rZXNcIjtcbmltcG9ydCAqIGFzIG9wcyBmcm9tIFwiQC9jb3JlL2FzdC9vcHNcIjtcblxuZXhwb3J0IHR5cGUgQWN0aW9uQ2IgPSAodmFsdWVzOiBWYWx1ZU5vZGVbXSkgPT4gQWN0aW9uTm9kZTtcbmV4cG9ydCB0eXBlIFZhbHVlQ2IgPSAoKSA9PiBWYWx1ZU5vZGU7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgaXNBY3Rpb246IGJvb2xlYW47XG4gICAgaXNEeW5hbWljOiBib29sZWFuO1xuICAgIGZhY3Rvcnk6IEFjdGlvbkNiIHwgVmFsdWVDYjtcblxuICAgIGNvbnN0cnVjdG9yKHsgaXNBY3Rpb24sIGlzRHluYW1pYywgZmFjdG9yeSB9KSB7XG4gICAgICAgIHRoaXMuaXNBY3Rpb24gPSBpc0FjdGlvbjtcbiAgICAgICAgdGhpcy5pc0R5bmFtaWMgPSBpc0R5bmFtaWM7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVWYWx1ZShmYWN0b3J5OiBWYWx1ZUNiLCBpc0R5bmFtaWMgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgVG9rZW4oeyBpc0FjdGlvbjogZmFsc2UsIGlzRHluYW1pYywgZmFjdG9yeSB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGZhY3Rvcnk6IEFjdGlvbkNiKSB7XG4gICAgcmV0dXJuIG5ldyBUb2tlbih7IGlzQWN0aW9uOiB0cnVlLCBpc0R5bmFtaWM6IHRydWUsIGZhY3RvcnkgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBUT0tFTlM6IFRva2Vuc01hcDxUb2tlbj4gPSB7XG4gICAgLy8gKioqIFZhbHVlcyAqKipcbiAgICAvLyBDb3VudHNcbiAgICBDT1VOVF8xOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEpKSxcbiAgICBDT1VOVF8yOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIpKSxcbiAgICBDT1VOVF8zOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMpKSxcbiAgICBDT1VOVF81OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDUpKSxcbiAgICBDT1VOVF83OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDcpKSxcbiAgICAvLyBDb3VudHMgKHNwZWNpYWwpXG4gICAgQ09VTlRfTUlOVVM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoLTEpKSxcbiAgICBDT1VOVF9HT0xEOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDEuNjE4MDMzOTg5KSksXG4gICAgQ09VTlRfU0lMVkVSOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDIuNDE0MjEzNTYyKSksXG4gICAgQ09VTlRfQlJPTlpFOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgTXVsdGlwbGVyKDMuMzAyNzc1NjM4KSksXG4gICAgQ09VTlRfUExBU1RJQzogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IE11bHRpcGxlcigxLjMyNDcxNzk1NzIpKSxcbiAgICAvLyBGcmFjdGlvbnNcbiAgICBGUkFDVF8xXzI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDIpKSxcbiAgICBGUkFDVF8xXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDMpKSxcbiAgICBGUkFDVF8yXzM6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMiAvIDMpKSxcbiAgICBGUkFDVF8xXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDQpKSxcbiAgICBGUkFDVF8zXzQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMyAvIDQpKSxcbiAgICBGUkFDVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMSAvIDUpKSxcbiAgICBGUkFDVF8yXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMiAvIDUpKSxcbiAgICBGUkFDVF8zXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoMyAvIDUpKSxcbiAgICBGUkFDVF80XzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBNdWx0aXBsZXIoNCAvIDUpKSxcbiAgICAvLyBBbmdsZXNcbiAgICBBTkdMRV8yNzA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgyNzApKSxcbiAgICBBTkdMRV8xODA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxODApKSxcbiAgICBBTkdMRV85MDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDkwKSksXG4gICAgQU5HTEVfNjA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSg2MCkpLFxuICAgIEFOR0xFXzQ1OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoNDUpKSxcbiAgICBBTkdMRV8zMDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IEFuZ2xlKDMwKSksXG4gICAgQU5HTEVfMTU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBbmdsZSgxNSkpLFxuICAgIEFOR0xFXzEwOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgQW5nbGUoMTApKSxcbiAgICAvLyBDb2xvcnNcbiAgICBDT0xPUl9NQVg6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuTWF4Q29sb3IoKSksXG4gICAgQ09MT1JfTUlOOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLk1pbkNvbG9yKCkpLFxuICAgIENPTE9SX1NISUZUXzFfMjogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5TaGlmdENvbG9yKDEgLyAyKSksXG4gICAgQ09MT1JfU0hJRlRfMV80OiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLlNoaWZ0Q29sb3IoMSAvIDQpKSxcbiAgICBDT0xPUl9TSElGVF8xXzU6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gNSkpLFxuICAgIENPTE9SX1NISUZUXzFfMTA6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBjb2xvcnMuU2hpZnRDb2xvcigxIC8gMTApKSxcbiAgICBDT0xPUl9GSUxMOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgY29sb3JzLkZpbGxDb2xvcigpKSxcbiAgICBDT0xPUl9FTVBUWTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IGNvbG9ycy5FbXB0eUNvbG9yKCkpLFxuICAgIC8vIFN0cm9rZVxuICAgIFNUUk9LRV9TT0xJRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJzb2xpZFwiKSksXG4gICAgU1RST0tFX0RBU0hFRDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IHN0cm9rZXMuU2V0U3Ryb2tlU3R5bGUoXCJkYXNoZWRcIikpLFxuICAgIFNUUk9LRV9ET1RURUQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNldFN0cm9rZVN0eWxlKFwiZG90dGVkXCIpKSxcbiAgICBTVFJPS0VfVEhJQ0tfQUREOiBjcmVhdGVWYWx1ZSgoKSA9PiBuZXcgc3Ryb2tlcy5TaGlmdFN0cm9rZVRoaWNrbmVzcygrMC4yNSkpLFxuICAgIFNUUk9LRV9USElDS19TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBzdHJva2VzLlNoaWZ0U3Ryb2tlVGhpY2tuZXNzKC0wLjI1KSksXG4gICAgLy8gT3BlcmF0aW9uc1xuICAgIE9QX01VTFQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuTXVsdE9wKCkpLFxuICAgIE9QX0FERDogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IG9wcy5BZGRPcCgpKSxcbiAgICBPUF9TVUI6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBvcHMuU3ViT3AoKSksXG4gICAgLy8gQXJndW1lbnRzXG4gICAgQVJHVU1FTlQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBBcmd1bWVudCgpKSxcbiAgICBDQUxMX0RJQU1PTkQ6IGNyZWF0ZVZhbHVlKCgpID0+IG5ldyBEeW5hbWljQXJndW1lbnQoXCJESUFNT05EXCIpLCB0cnVlKSxcbiAgICBDQUxMX0lOVl9UUklBTkdMRTogY3JlYXRlVmFsdWUoKCkgPT4gbmV3IER5bmFtaWNBcmd1bWVudChcIklOVl9UUklBTkdMRVwiKSwgdHJ1ZSksXG5cbiAgICAvLyAqKiogQWN0aW9ucyAqKipcbiAgICAvLyBDYWxsZXJzXG4gICAgQ0FMTF9GOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiRlwiLCB2KSksXG4gICAgQ0FMTF9HOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiR1wiLCB2KSksXG4gICAgQ0FMTF9IOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DYWxsKFwiSFwiLCB2KSksXG4gICAgLy8gQ2xvc2UgQ2FsbGVyc1xuICAgIENMT1NFX0NBTExfRjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuQ2xvc2VDYWxsKFwiRlwiLCB2KSksXG4gICAgQ0xPU0VfQ0FMTF9HOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5DbG9zZUNhbGwoXCJHXCIsIHYpKSxcbiAgICBDTE9TRV9DQUxMX0g6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkNsb3NlQ2FsbChcIkhcIiwgdikpLFxuICAgIC8vIFNoYXBlc1xuICAgIERSQVdfQ0lSQ0xFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3RmlndXJlKHYsIFNoYXBlLkNpcmNsZSkpLFxuICAgIERSQVdfU1FVQVJFOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3RmlndXJlKHYsIFNoYXBlLlNxdWFyZSkpLFxuICAgIERSQVdfVFJJQU5HTEU6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdGaWd1cmUodiwgU2hhcGUuVHJpYW5nbGUpKSxcbiAgICAvLyBMaW5lXG4gICAgRFJBV19MSU5FOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3TGluZSh2KSksXG4gICAgLy8gQXJjXG4gICAgRFJBV19BUkNMSU5FX1JfM180OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8yXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsyIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfMjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyAyLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX1JfMV8zOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgrMSAvIDMsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfUl8xXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKCsxIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9SXzFfNTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoKzEgLyA1LCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfM180OiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMyAvIDQsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8yXzM6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0yIC8gMywgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfMjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyAyLCB2KSksXG4gICAgRFJBV19BUkNMSU5FX0xfMV8zOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5EcmF3QXJjTGluZSgtMSAvIDMsIHYpKSxcbiAgICBEUkFXX0FSQ0xJTkVfTF8xXzQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLkRyYXdBcmNMaW5lKC0xIC8gNCwgdikpLFxuICAgIERSQVdfQVJDTElORV9MXzFfNTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuRHJhd0FyY0xpbmUoLTEgLyA1LCB2KSksXG4gICAgLy8gQ3Vyc29yIHRyYW5zbGF0aW9uc1xuICAgIE1PVkVfRk9SV0FSRDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZUZvcndhcmQodikpLFxuICAgIE1PVkVfQkFDS1dBUkQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLk1vdmVCYWNrd2FyZCh2KSksXG4gICAgTU9WRV9MRUZUOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5Nb3ZlTGVmdCh2KSksXG4gICAgTU9WRV9SSUdIVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuTW92ZVJpZ2h0KHYpKSxcbiAgICAvLyBDdXJzb3Igcm90YXRpb25zXG4gICAgUk9UQVRFX0xFRlQ6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJvdGF0ZUxlZnQodikpLFxuICAgIFJPVEFURV9SSUdIVDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUm90YXRlUmlnaHQodikpLFxuICAgIC8vIEN1cnNvciBmbGlwXG4gICAgRkxJUF9WOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5GbGlwVmVydGljYWxseSh2KSksXG4gICAgRkxJUF9IOiBjcmVhdGVBY3Rpb24odiA9PiBuZXcgYWN0aW9ucy5GbGlwSG9yaXpvbnRhbGx5KHYpKSxcblxuICAgIC8vIFJlcGV0ZXRpdmUgYWN0aW9uc1xuICAgIFJFVkVSU0U6IGNyZWF0ZUFjdGlvbih2ID0+IG5ldyBhY3Rpb25zLlJldmVyc2UodikpLFxuICAgIFJFUExBWTogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUmVwbGF5KHYpKSxcbiAgICBSRVBMQVlfMjogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUmVwbGF5KHYsIDIpKSxcbiAgICBSRVBMQVlfMzogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUmVwbGF5KHYsIDMpKSxcbiAgICBSRVBMQVlfNDogY3JlYXRlQWN0aW9uKHYgPT4gbmV3IGFjdGlvbnMuUmVwbGF5KHYsIDQpKSxcbn07XG4iLCJleHBvcnQgY29uc3QgREVGQVVMVF9JQ09OX1VSTCA9IGAke3Byb2Nlc3MuZW52LkFTU0VUX1BBVEh9aWNvbnMvYDtcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgICBwcm90ZWN0ZWQgbm9kZTogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuaW1wb3J0IHsgU3RhY2tTdGVwIH0gZnJvbSBcIkAvY29yZS9zdGVwXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgIGRlYnVnOiBib29sZWFuLFxuICAgIHN0YXZlOiBzdHJpbmcsXG4gICAgYWN0aW9uSW5kZXg6IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsYmFja3Mge1xuICAgIG9uU3RhdGU6IChwcmV2aW91c1N0YXRlOiBTdGF0ZSB8IG51bGwsIHN0YXRlOiBTdGF0ZSkgPT4gdm9pZCxcbiAgICByZW5kZXJDYjogKGN1cnNvcjogSUN1cnNvcikgPT4gdm9pZCxcbn1cblxuZXhwb3J0IGNsYXNzIERlYnVnQ29udHJvbGxlciB7XG4gICAgI3N0YWNrOiBTdGFja1N0ZXAgfCBudWxsO1xuICAgICNpbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbDtcbiAgICAjcHJldmlvdXNTdGF0ZTogU3RhdGUgfCBudWxsO1xuICAgICNjYWxsYmFja3M6IENhbGxiYWNrcztcblxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrczogQ2FsbGJhY2tzKSB7XG4gICAgICAgIHRoaXMuI3N0YWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy4jaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLiNwcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgIH1cblxuICAgIGluaXQoc3RhY2s6IFN0YWNrU3RlcCkge1xuICAgICAgICB0aGlzLiNzdGFjayA9IHN0YWNrO1xuICAgICAgICB0aGlzLnN0ZXAoKTtcbiAgICB9XG5cbiAgICBzdGVwKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB7IGhhbHQsIHN0YXZlLCBpbmRleCB9ID0gdGhpcy4jc3RhY2suc3RlcCgpO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MucmVuZGVyQ2IodGhpcy4jc3RhY2suY3Vyc29yKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgICAgICBzdGF2ZTogc3RhdmUsXG4gICAgICAgICAgICBhY3Rpb25JbmRleDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gIWhhbHQ7XG4gICAgfVxuXG4gICAgcGxheShwZXJpb2Q6IG51bWJlciA9IDEwMCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy4jaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RlcCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHBlcmlvZCk7XG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVN0YXRlKHsgZGVidWc6IGZhbHNlLCBzdGF2ZTogJz8nLCBhY3Rpb25JbmRleDogMCB9KTtcbiAgICAgICAgdGhpcy4jc3RhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLiNwcmV2aW91c1N0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy4jaW50ZXJ2YWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuI2ludGVydmFsKTtcbiAgICAgICAgdGhpcy4jaW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cblxuICAgICN1cGRhdGVTdGF0ZShzdGF0ZTogU3RhdGUpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHRoaXMuI3ByZXZpb3VzU3RhdGU7XG4gICAgICAgIHRoaXMuI3ByZXZpb3VzU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uU3RhdGUocHJldmlvdXNTdGF0ZSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlzRGVidWcoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzdGFjayAhPT0gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRGVidWdDb250cm9sbGVyLCBTdGF0ZSB9IGZyb20gXCIuL2RlYnVnXCI7XG5cbmltcG9ydCB7IENvZGVWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2NvZGVcIjtcbmltcG9ydCB7IEZ1bmN0aW9uc0JhclZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvZnVuY3Rpb25zQmFyXCI7XG5pbXBvcnQgeyBUb2tlbnNDYXRlZ29yeVZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY2F0ZWdvcnlUb2tlblwiO1xuaW1wb3J0IHsgSW1hZ2VWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2ltYWdlXCI7XG5pbXBvcnQgeyBDb2RlQmFyVmlldyB9IGZyb20gXCJAL3dlYi92aWV3cy9jb2RlQmFyXCI7XG5pbXBvcnQgeyBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvY2hvb3NlRGlhbG9nXCI7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdERpYWxvZ1ZpZXcgfSBmcm9tIFwiQC93ZWIvdmlld3MvcHJvamVjdExpc3REaWFsb2dcIjtcbmltcG9ydCB7IFNhdmVEaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL3NhdmVEaWFsb2dcIjtcbmltcG9ydCB7IEhlbHBEaWFsb2dWaWV3IH0gZnJvbSBcIkAvd2ViL3ZpZXdzL2hlbHBEaWFsb2dcIjtcblxuaW1wb3J0IHsgY3JlYXRlRW1wdHlQcm9qZWN0LCBQcm9qZWN0LCBTdGF2ZSB9IGZyb20gXCJAL3dlYi9tb2RlbHNcIjtcbmltcG9ydCB7IEFDVElPTl9UT0tFTlMsIFZBTFVFX1RPS0VOUyB9IGZyb20gXCJAL3dlYi90b2tlbnNNZW51XCI7XG5cbmltcG9ydCB7IGV4ZWMsIHNldHVwRXhlYyB9IGZyb20gXCJAL2NvcmUvZXhlY1wiO1xuaW1wb3J0IHsgQ3Vyc29yIH0gZnJvbSBcIkAvY29yZS9jdXJzb3JcIjtcbmltcG9ydCB7IFN0YWNrU3RlcCB9IGZyb20gXCJAL2NvcmUvc3RlcFwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiQC93ZWIvZGF0YWJhc2VcIjtcblxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZTtcbiAgICBwcml2YXRlIGltYWdlVmlldzogSW1hZ2VWaWV3O1xuICAgIHByaXZhdGUgY29kZVZpZXc6IENvZGVWaWV3O1xuICAgIHByaXZhdGUgZnVuY3Rpb25zQmFyVmlldzogRnVuY3Rpb25zQmFyVmlldztcbiAgICBwcml2YXRlIGFjdGlvbnNDYXRlZ29yeVZpZXc6IFRva2Vuc0NhdGVnb3J5VmlldztcbiAgICBwcml2YXRlIHZhbHVlc0NhdGVnb3J5VmlldzogVG9rZW5zQ2F0ZWdvcnlWaWV3O1xuICAgIHByaXZhdGUgY29kZUJhclZpZXc6IENvZGVCYXJWaWV3O1xuICAgIHByaXZhdGUgZGVidWc6IERlYnVnQ29udHJvbGxlcjtcbiAgICBwcml2YXRlIGNob29zZURpYWxvZ1ZpZXc6IENob29zZVRva2VuRGlhbG9nVmlldyB8IG51bGw7XG4gICAgcHJpdmF0ZSBwcm9qZWN0TGlzdERpYWxvZ1ZpZXc6IFByb2plY3RMaXN0RGlhbG9nVmlldyB8IG51bGw7XG4gICAgcHJpdmF0ZSBzYXZlRGlhbG9nVmlldzogU2F2ZURpYWxvZ1ZpZXcgfCBudWxsO1xuICAgIHByaXZhdGUgaGVscERpYWxvZ1ZpZXc6IEhlbHBEaWFsb2dWaWV3O1xuICAgIHByaXZhdGUgcHJvamVjdDogUHJvamVjdDtcbiAgICBwcml2YXRlIGlzVmlzaXRlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFiYXNlOiBEYXRhYmFzZSwgcHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSk7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5kZWJ1ZyA9IG5ldyBEZWJ1Z0NvbnRyb2xsZXIoe1xuICAgICAgICAgICAgcmVuZGVyQ2I6IChjdXJzb3I6IEN1cnNvcikgPT4gdGhpcy5pbWFnZVZpZXcucmVuZGVyKGN1cnNvciksXG4gICAgICAgICAgICBvblN0YXRlOiB0aGlzLm9uRGVidWdTdGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oZWxwRGlhbG9nVmlldyA9IG5ldyBIZWxwRGlhbG9nVmlldygpO1xuICAgICAgICB0aGlzLmltYWdlVmlldyA9IG5ldyBJbWFnZVZpZXcodGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3QtaW1hZ2VcIikpO1xuICAgICAgICB0aGlzLmNvZGVWaWV3ID0gbmV3IENvZGVWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwiLmZyYWN0LXN0YXZlc1wiKSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9uRHJvcDogdGhpcy5vbkRyb3AuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBvbk1vdmU6IHRoaXMub25Nb3ZlLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgb25EcmFnVGltZW91dDogdGhpcy5vbkRyYWdUaW1lb3V0LmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgY2FuRHJhZzogKCkgPT4gIXRoaXMuZGVidWcuaXNEZWJ1ZygpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mdW5jdGlvbnNCYXJWaWV3ID0gbmV3IEZ1bmN0aW9uc0JhclZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZnJhY3QtZnVuY3Rpb25zLWxpc3RcIiksXG4gICAgICAgICAgICBvblNlbGVjdDogKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dPckhpZGVPckFkZEZ1bmN0aW9uKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5Q2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgb25Ecm9wOiB0aGlzLm9uRHJvcEZyb21DYXRlZ29yeS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25Nb3ZlOiB0aGlzLm9uTW92ZUZyb21DYXRlZ29yeS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25EcmFnVGltZW91dDogbnVsbCxcbiAgICAgICAgICAgIGNhbkRyYWc6ICgpID0+ICF0aGlzLmRlYnVnLmlzRGVidWcoKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGlvbnNDYXRlZ29yeVZpZXcgPSBuZXcgVG9rZW5zQ2F0ZWdvcnlWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uLXRva2Vuc1wiKSxcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IEFDVElPTl9UT0tFTlMsXG4gICAgICAgICAgICBjYWxsYmFja3M6IGNhdGVnb3J5Q2FsbGJhY2tzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWx1ZXNDYXRlZ29yeVZpZXcgPSBuZXcgVG9rZW5zQ2F0ZWdvcnlWaWV3KHtcbiAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsdWUtdG9rZW5zXCIpLFxuICAgICAgICAgICAgY2F0ZWdvcmllczogVkFMVUVfVE9LRU5TLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBjYXRlZ29yeUNhbGxiYWNrcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29kZUJhclZpZXcgPSBuZXcgQ29kZUJhclZpZXcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLWJhclwiKSwge1xuICAgICAgICAgICAgb25VcGRhdGU6IChpdGVyYXRpb25zLCBzdHlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdC5pdGVyYXRpb25zID0gaXRlcmF0aW9ucztcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3Quc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUZW1wUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyYXBlQW5kUnVuKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25EZWJ1Z1N0YXJ0OiB0aGlzLnNjcmFwZUFuZERlYnVnLmJpbmQodGhpcyksXG4gICAgICAgICAgICBvbkxvYWQ6IHRoaXMub3BlblByb2plY3RMaXN0LmJpbmQodGhpcyksXG4gICAgICAgICAgICBvblNhdmU6IHRoaXMub3BlblNhdmVEaWFsb2cuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG9uTmV3OiAoKSA9PiB0aGlzLmxvYWRQcm9qZWN0KGNyZWF0ZUVtcHR5UHJvamVjdCgpKSxcbiAgICAgICAgICAgIG9uSGVscDogKCkgPT4gdGhpcy5oZWxwRGlhbG9nVmlldy5yZW5kZXIoKSxcbiAgICAgICAgICAgIG9uRGVidWdTdGVwOiAoKSA9PiB0aGlzLmRlYnVnLnN0ZXAoKSxcbiAgICAgICAgICAgIG9uRGVidWdQbGF5OiAoKSA9PiB0aGlzLmRlYnVnLnBsYXkoKSxcbiAgICAgICAgICAgIG9uRGVidWdTdG9wOiAoKSA9PiB0aGlzLmRlYnVnLnN0b3AoKSxcbiAgICAgICAgICAgIG9uRGVidWdFeGl0OiAoKSA9PiB0aGlzLmRlYnVnLmV4aXQoKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hvb3NlRGlhbG9nVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvamVjdExpc3REaWFsb2dWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zYXZlRGlhbG9nVmlldyA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNWaXNpdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2aXNpdGVkXCIpICE9PSBudWxsO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInZpc2l0ZWRcIiwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaGVscERpYWxvZ1ZpZXcucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2RlVmlldy5yZW5kZXIodGhpcy5wcm9qZWN0LnN0YXZlcyk7XG4gICAgICAgIHRoaXMuZnVuY3Rpb25zQmFyVmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zQ2F0ZWdvcnlWaWV3LnJlbmRlcigpO1xuICAgICAgICB0aGlzLnZhbHVlc0NhdGVnb3J5Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5jb2RlQmFyVmlldy5yZW5kZXIodGhpcy5wcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICB9XG5cbiAgICBzY3JhcGVBbmRSdW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmRlYnVnLmlzRGVidWcoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YWNrID0gdGhpcy5zY3JhcGUoKTtcblxuICAgICAgICBpZiAoc3RhY2sgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBleGVjKHN0YWNrKTtcbiAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGJhY2tncm91bmRDb2xvciB9ID0gdGhpcy5wcm9qZWN0LnN0eWxlO1xuICAgICAgICB0aGlzLmltYWdlVmlldy5yZW5kZXIoc3RhY2suY3Vyc29yLCBiYWNrZ3JvdW5kQ29sb3IpO1xuICAgIH1cblxuICAgIHNjcmFwZUFuZFNhdmUoKSB7XG4gICAgICAgIHRoaXMucHJvamVjdC5zdGF2ZXMgPSB0aGlzLmNvZGVWaWV3LnNjcmFwZUNvZGUoKTtcbiAgICAgICAgdGhpcy5zYXZlVGVtcFByb2plY3QoKTtcbiAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICB9XG5cbiAgICBzYXZlVGVtcFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IGNsb25lUHJvamVjdCA9IHsuLi50aGlzLnByb2plY3R9O1xuICAgICAgICBjbG9uZVByb2plY3QuaWQgPSBcIl9fdGVtcF9fXCI7XG4gICAgICAgIHRoaXMuZGF0YWJhc2UudXBkYXRlKGNsb25lUHJvamVjdCwgcHJvamVjdCA9PiB7fSk7IFxuICAgIH1cblxuICAgIHNjcmFwZUFuZERlYnVnKCkge1xuICAgICAgICBpZiAodGhpcy5kZWJ1Zy5pc0RlYnVnKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFjayA9IHRoaXMuc2NyYXBlKCk7XG4gICAgICAgIGlmIChzdGFjayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29kZUJhclZpZXcuc2V0RGVidWdNb2RlKCk7XG4gICAgICAgIHRoaXMuZGVidWcuaW5pdChzdGFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuUHJvamVjdExpc3QoKSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdERpYWxvZ1ZpZXcgPSBuZXcgUHJvamVjdExpc3REaWFsb2dWaWV3KGRpYWxvZ05vZGUsIHRoaXMuZGF0YWJhc2UsIHtcbiAgICAgICAgICAgIG9uTG9hZDogdGhpcy5sb2FkUHJvamVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgb25SZW1vdmU6ICgpID0+IHt9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TGlzdERpYWxvZ1ZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvcGVuU2F2ZURpYWxvZygpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLnNhdmVEaWFsb2dWaWV3ID0gbmV3IFNhdmVEaWFsb2dWaWV3KGRpYWxvZ05vZGUsIHRoaXMuZGF0YWJhc2UsICB0aGlzLnByb2plY3QsIHtcbiAgICAgICAgICAgIG9uU2F2ZTogcHJvamVjdCA9PiB7fSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2F2ZURpYWxvZ1ZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuc2F2ZVRlbXBQcm9qZWN0KCk7XG4gICAgICAgIHRoaXMuZGVidWcuZXhpdCgpO1xuICAgICAgICB0aGlzLmNvZGVWaWV3LnJlbmRlcih0aGlzLnByb2plY3Quc3RhdmVzKTtcbiAgICAgICAgdGhpcy5jb2RlQmFyVmlldy5yZW5kZXIodGhpcy5wcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zY3JhcGVBbmRSdW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcmFwZSgpOiBTdGFja1N0ZXAgfCBudWxsIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLnByb2plY3Quc3R5bGU7XG4gICAgICAgIGNvbnN0IGN1cnNvckNmZyA9IHtcbiAgICAgICAgICAgIGZpcnN0Q29sb3I6IHN0eWxlLmZpcnN0Q29sb3IsXG4gICAgICAgICAgICBzZWNvbmRDb2xvcjogc3R5bGUuc2Vjb25kQ29sb3IsXG4gICAgICAgICAgICBzdHJva2VTaXplOiBzdHlsZS5zdHJva2VTaXplLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXJzb3IgPSBuZXcgQ3Vyc29yKGN1cnNvckNmZyk7XG4gICAgICAgIGNvbnN0IGFyZ3VtZW50ID0gMS4wO1xuICAgICAgICBjb25zdCBtYXhJdGVyYXRpb24gPSB0aGlzLnByb2plY3QuaXRlcmF0aW9ucztcbiAgICAgICAgY29uc3QgY29kZSA9IHRoaXMuY29kZVZpZXcuc2NyYXBlQ29kZSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0dXBFeGVjKGFyZ3VtZW50LCBtYXhJdGVyYXRpb24sIGNvZGUsIGN1cnNvcik7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihleGNlcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVidWdTdGF0ZShwcmV2aW91c1N0YXRlOiBTdGF0ZSB8IG51bGwsIHN0YXRlOiBTdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGVCYXJWaWV3LnVuc2V0RGVidWdNb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXggPSBcIlwiXSA9IHByZXZpb3VzU3RhdGUuc3RhdmUuc3BsaXQoXCI6OlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXZlID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgICAgIHN0YXZlICYmIHN0YXZlLnJlbW92ZUZsYWdPbkFjdGlvblRva2VuKCdkZWJ1ZycsIHByZXZpb3VzU3RhdGUuYWN0aW9uSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IFtuYW1lLCBzdWZmaXggPSBcIlwiXSA9IHN0YXRlLnN0YXZlLnNwbGl0KFwiOjpcIik7XG4gICAgICAgICAgICBjb25zdCBzdGF2ZSA9IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICBzdGF2ZSAmJiBzdGF2ZS5hZGRGbGFnT25BY3Rpb25Ub2tlbignZGVidWcnLCBzdGF0ZS5hY3Rpb25JbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJvcChkcmFnTm9kZTogSFRNTEVsZW1lbnQsIG92ZXJOb2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBmaW5kU3RhdmUgPSBkYXRhc2V0ID0+IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKGRhdGFzZXQubmFtZSwgZGF0YXNldC5zdWZmaXgpO1xuICAgICAgICBjb25zdCBwcmV2U3RhdmVWaWV3ID0gZmluZFN0YXZlKGRyYWdOb2RlLmRhdGFzZXQpO1xuXG4gICAgICAgIGlmIChvdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmFjdC1zdGF2ZXNcIikpIHsgLy8gUkVNT1ZFXG4gICAgICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gcGFyc2VJbnQoZHJhZ05vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBwcmV2U3RhdmVWaWV3LnJlbW92ZVRva2VuKGluZGV4VG9SZW1vdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG92ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHsgIC8vIEFERC9NT1ZFXG4gICAgICAgICAgICBjb25zdCBpbmRleFRvTW92ZSA9IHBhcnNlSW50KGRyYWdOb2RlLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgZ29hbEluZGV4ID0gcGFyc2VJbnQob3Zlck5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBjb25zdCBnb2FsU3RhdmVWaWV3ID0gZmluZFN0YXZlKG92ZXJOb2RlLmRhdGFzZXQpO1xuICAgICAgICAgICAgY29uc3Qgc2hpZnQgPSBPYmplY3QuaXMocHJldlN0YXZlVmlldywgZ29hbFN0YXZlVmlldykgJiYgZ29hbEluZGV4IDw9IGluZGV4VG9Nb3ZlID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGdvYWxTdGF2ZVZpZXcucHVzaFRva2VuQWZ0ZXIoZHJhZ05vZGUuZGF0YXNldC50b2tlbiwgZ29hbEluZGV4KTtcbiAgICAgICAgICAgIHByZXZTdGF2ZVZpZXcucmVtb3ZlVG9rZW4oaW5kZXhUb01vdmUgKyBzaGlmdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcmFwZUFuZFNhdmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJvcEZyb21DYXRlZ29yeShkcmFnTm9kZTogSFRNTEVsZW1lbnQsIG92ZXJOb2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBmaW5kU3RhdmUgPSBkYXRhc2V0ID0+IHRoaXMuY29kZVZpZXcuZmluZFN0YXZlKGRhdGFzZXQubmFtZSwgZGF0YXNldC5zdWZmaXgpO1xuXG4gICAgICAgIGlmIChvdmVyTm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7ICAvLyBBREQvTU9WRVxuICAgICAgICAgICAgY29uc3QgZ29hbEluZGV4ID0gcGFyc2VJbnQob3Zlck5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICBjb25zdCBnb2FsU3RhdmVWaWV3ID0gZmluZFN0YXZlKG92ZXJOb2RlLmRhdGFzZXQpO1xuXG4gICAgICAgICAgICBnb2FsU3RhdmVWaWV3LnB1c2hUb2tlbkFmdGVyKGRyYWdOb2RlLmRhdGFzZXQudG9rZW4sIGdvYWxJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcmFwZUFuZFNhdmUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTW92ZShkcmFnTm9kZTogSFRNTEVsZW1lbnQsIG9sZE92ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGwsIG5ld092ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICAgICAgaWYgKG9sZE92ZXJOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpc0NsYXNzID0ga2V5ID0+IG9sZE92ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhrZXkpO1xuICAgICAgICAgICAgaWYgKGlzQ2xhc3MoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7XG4gICAgICAgICAgICAgICAgb2xkT3Zlck5vZGUuY2xhc3NMaXN0LnJlbW92ZShcIm92ZXJcIik7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkLWRyb3BcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2xhc3MoXCJmcmFjdC1zdGF2ZXNcIikpIHtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlLWRyb3BcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld092ZXJOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBpc0NsYXNzID0ga2V5ID0+IG5ld092ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucyhrZXkpO1xuICAgICAgICAgICAgaWYgKGlzQ2xhc3MoXCJmcmFjdC10b2tlbi1zcGFuXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXZlID0gYCR7ZHJhZ05vZGUuZGF0YXNldC5uYW1lfTo6JHtkcmFnTm9kZS5kYXRhc2V0LnN1ZmZpeCB8fCBcIlwifWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZ29hbFN0YXZlID0gYCR7bmV3T3Zlck5vZGUuZGF0YXNldC5uYW1lfTo6JHtuZXdPdmVyTm9kZS5kYXRhc2V0LnN1ZmZpeCB8fCBcIlwifWA7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoZHJhZ05vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ29hbEluZGV4ID0gcGFyc2VJbnQobmV3T3Zlck5vZGUuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF2ZSA9PSBnb2FsU3RhdmUgJiYgKGN1cnJlbnRJbmRleCA9PSBnb2FsSW5kZXggfHwgY3VycmVudEluZGV4ID09IGdvYWxJbmRleCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3T3Zlck5vZGUuY2xhc3NMaXN0LmFkZChcIm92ZXJcIik7XG4gICAgICAgICAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LmFkZChcInZhbGlkLWRyb3BcIilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGFzcyhcImZyYWN0LXN0YXZlc1wiKSkge1xuICAgICAgICAgICAgICAgIGRyYWdOb2RlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtZHJvcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Nb3ZlRnJvbUNhdGVnb3J5KGRyYWdOb2RlOiBIVE1MRWxlbWVudCwgb2xkT3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbCwgbmV3T3Zlck5vZGU6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgICAgICBpZiAob2xkT3Zlck5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xhc3MgPSBrZXkgPT4gb2xkT3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGtleSk7XG4gICAgICAgICAgICBpZiAoaXNDbGFzcyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHtcbiAgICAgICAgICAgICAgICBvbGRPdmVyTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwib3ZlclwiKTtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWQtZHJvcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3T3Zlck5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xhc3MgPSBrZXkgPT4gbmV3T3Zlck5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGtleSk7XG4gICAgICAgICAgICBpZiAoaXNDbGFzcyhcImZyYWN0LXRva2VuLXNwYW5cIikpIHtcbiAgICAgICAgICAgICAgICBuZXdPdmVyTm9kZS5jbGFzc0xpc3QuYWRkKFwib3ZlclwiKTtcbiAgICAgICAgICAgICAgICBkcmFnTm9kZS5jbGFzc0xpc3QuYWRkKFwidmFsaWQtZHJvcFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRHJhZ1RpbWVvdXQodG9rZW5Ob2RlOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBkaWFsb2dOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nTm9kZSk7XG4gICAgICAgIHRoaXMuY2hvb3NlRGlhbG9nVmlldyA9IG5ldyBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcoZGlhbG9nTm9kZSwgdG9rZW5Ob2RlLCB0aGlzLm9uU2VsZWN0VG9rZW5Gcm9tRGlhbG9nLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNob29zZURpYWxvZ1ZpZXcucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TZWxlY3RUb2tlbkZyb21EaWFsb2coe3Rva2VuLCBuYW1lLCBzdWZmaXgsIGluZGV4fSkge1xuICAgICAgICBjb25zdCBzdGF2ZVZpZXcgPSB0aGlzLmNvZGVWaWV3LmZpbmRTdGF2ZShuYW1lLCBzdWZmaXgpO1xuICAgICAgICBzdGF2ZVZpZXcucmVwbGFjZVRva2VuKHRva2VuLCBpbmRleCk7XG4gICAgICAgIHRoaXMuc2NyYXBlQW5kU2F2ZSgpO1xuICAgICAgICB0aGlzLmNob29zZURpYWxvZ1ZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd09ySGlkZU9yQWRkRnVuY3Rpb24obmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RhdmVWaWV3ID0gdGhpcy5jb2RlVmlldy5maW5kU3RhdmUobmFtZSwgc3VmZml4KTtcbiAgICAgICAgaWYgKHN0YXZlVmlldykge1xuICAgICAgICAgICAgc3RhdmVWaWV3LnNob3dPckhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29kZVZpZXcuYWRkU3RhdmUoeyBuYW1lLCBzdWZmaXgsIHRva2VuczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JhcGVBbmRTYXZlKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaW5pdERhdGFiYXNlIH0gZnJvbSBcIi4vZGF0YWJhc2VJbml0XCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gdGhpcy4jZ2V0UmVxdWVzdCgpO1xuICAgICAgICBkYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgYWxlcnQoXCJEQiBFUlJPUiFcIik7IH07XG4gICAgICAgIGRiUmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYiA9IChldmVudC50YXJnZXQgYXMgYW55KS5yZXN1bHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoJ3Byb2plY3RzJywgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ3RpdGxlJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnaXRlcmF0aW9ucycsICdpdGVyYXRpb25zJyk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnc3RhdmVzJywgJ3N0YXZlcycpO1xuICAgICAgICAgICAgc3RvcmUuY3JlYXRlSW5kZXgoJ3N0eWxlJywgJ3N0eWxlJyk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgnY3JlYXRlZCcsICdjcmVhdGVkJyk7XG4gICAgICAgICAgICBzdG9yZS5jcmVhdGVJbmRleCgndXBkYXRlZCcsICd1cGRhdGVkJyk7XG5cbiAgICAgICAgICAgIGluaXREYXRhYmFzZSgocHJvamVjdDogUHJvamVjdCkgPT4gdGhpcy51cGRhdGUocHJvamVjdCwgKCkgPT4ge30pKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQodGl0bGU6IHN0cmluZywgY2FsbGJhY2s6IChwcm9qZWN0OiBQcm9qZWN0KSA9PiB2b2lkLCBlcnJDYWxsYmFjazogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gdGhpcy4jZ2V0UmVxdWVzdCgpO1xuICAgICAgICBkYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgYWxlcnQoXCJEQiBFUlJPUiFcIik7IH07XG4gICAgICAgIGRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuI2dldFByb2plY3RzU3RvcmUoZGJSZXF1ZXN0KTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlUmVxdWVzdCA9IHN0b3JlLmdldCh0aXRsZSk7XG4gICAgICAgICAgICBzdG9yZVJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JlUmVxdWVzdC5yZXN1bHQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlcnJDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0b3JlUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgZXJyQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZShwcm9qZWN0OiBQcm9qZWN0LCBjYWxsYmFjazogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gdGhpcy4jZ2V0UmVxdWVzdCgpO1xuICAgICAgICBkYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgYWxlcnQoXCJEQiBFUlJPUiFcIik7IH07XG4gICAgICAgIGRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYiA9IGRiUmVxdWVzdC5yZXN1bHQ7IFxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbXCJwcm9qZWN0c1wiXSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKCdwcm9qZWN0cycpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVSZXF1ZXN0ID0gc3RvcmUucHV0KHByb2plY3QpO1xuICAgICAgICAgICAgc3RvcmVSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHsgY2FsbGJhY2socHJvamVjdCk7IH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW1vdmUodGl0bGU6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gdGhpcy4jZ2V0UmVxdWVzdCgpO1xuICAgICAgICBkYlJlcXVlc3Qub25lcnJvciA9ICgpID0+IHsgYWxlcnQoXCJEQiBFUlJPUiFcIik7IH07XG4gICAgICAgIGRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuI2dldFByb2plY3RzU3RvcmUoZGJSZXF1ZXN0KTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlUmVxdWVzdCA9IHN0b3JlLmRlbGV0ZSh0aXRsZSk7XG4gICAgICAgICAgICBzdG9yZVJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4geyBjYWxsYmFjaygpOyB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbGlzdChjYWxsYmFjazogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWQsIGxpbWl0ID0gLTEpIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgZGJSZXF1ZXN0ID0gdGhpcy4jZ2V0UmVxdWVzdCgpO1xuXG4gICAgICAgIGRiUmVxdWVzdC5vbmVycm9yID0gKCkgPT4geyBhbGVydChcIkRCIEVSUk9SIVwiKTsgfTtcbiAgICAgICAgZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy4jZ2V0UHJvamVjdHNTdG9yZShkYlJlcXVlc3QpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdG9yZS5pbmRleCgndXBkYXRlZCcpO1xuICAgICAgICAgICAgaW5kZXgub3BlbkN1cnNvcihudWxsLCBcInByZXZcIikub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Vyc29yID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvci52YWx1ZS5pZCA9PSBcIl9fdGVtcF9fXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJzb3IudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpbWl0ID4gMCAmJiBjb3VudCA8IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgICNnZXRSZXF1ZXN0KCk6IElEQk9wZW5EQlJlcXVlc3Qge1xuICAgICAgICBjb25zdCBkYlJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oXCJGcmFjdGFsYW5nXCIsIDEpO1xuICAgICAgICByZXR1cm4gZGJSZXF1ZXN0O1xuICAgIH1cblxuICAgICNnZXRQcm9qZWN0c1N0b3JlKGRiUmVxdWVzdDogSURCUmVxdWVzdCk6IElEQk9iamVjdFN0b3JlIHtcbiAgICAgICAgY29uc3QgZGIgPSBkYlJlcXVlc3QucmVzdWx0OyBcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihbXCJwcm9qZWN0c1wiXSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ3Byb2plY3RzJyk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0eWxlLCBTdGF2ZSB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGl0ZXJhdGlvbnM6IG51bWJlciwgc3RhdmVzOiBTdGF2ZVtdLCBzdHlsZTogUHJvamVjdFN0eWxlKTogUHJvamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRpdGxlLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgaXRlcmF0aW9uczogTWF0aC5yb3VuZChpdGVyYXRpb25zKSxcbiAgICAgICAgc3RhdmVzLFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZDogbmV3IERhdGUoKSxcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YWJhc2UodXBkYXRlOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZCkge1xuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIkJpbmFyeSBUcmVlXCIsIDksXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0NJUkNMRScsICdDT1VOVF8zJywgJ1JPVEFURV9SSUdIVCcsICdBTkdMRV8zMCcsICdEUkFXX0xJTkUnLCAnQ0FMTF9GJywgJ1JFVkVSU0UnLFxuICAgICAgICAgICAgICAgICAgICAnQ09VTlRfMycsICdST1RBVEVfTEVGVCcsICdBTkdMRV8zMCcsICdEUkFXX0xJTkUnLCAnQ0FMTF9GJywgJ1JFVkVSU0UnLCAnQ09VTlRfMyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgc3VmZml4OiBcIkVORFwiLCB0b2tlbnM6IFsnRFJBV19DSVJDTEUnLCAnQ09VTlRfMycsICdDT0xPUl9NQVgnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjMDAwMDAwJywgc2Vjb25kQ29sb3I6ICcjZmYwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIkNvbnN0ZWxsYXRpb24gb2YgTXVmZmluXCIsIDcsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgICAgICdEUkFXX0xJTkUnLCAnQVJHVU1FTlQnLCAnRFJBV19BUkNMSU5FX0xfMV81JywgJ0FSR1VNRU5UJywgJ0NBTExfRicsICdBUkdVTUVOVCcsICdEUkFXX1RSSUFOR0xFJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NPTE9SX01BWCcsICdDT1VOVF8yJywgJ0NPVU5UXzMnLCAnQ0FMTF9GJywgJ0NPVU5UX0dPTEQnLCAnRlJBQ1RfMV8zJywgJ0FSR1VNRU5UJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyNmZjk1MDAnLCBzZWNvbmRDb2xvcjogJyNmZmQ1NjEnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjOGE4YThhJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG4gICAgdXBkYXRlKGNyZWF0ZVByb2plY3QoXG4gICAgICAgIFwiQ3VydnkgcGVudGFnb25cIiwgNSxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbJ0RSQVdfTElORScsICdBUkdVTUVOVCcsICdEUkFXX0FSQ0xJTkVfTF8xXzUnLCAnQVJHVU1FTlQnLCAnQ0FMTF9GJywgJ0FSR1VNRU5UJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnIzAwMDAwMCcsIHNlY29uZENvbG9yOiAnI2ZmMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJEb3R0ZWQgU3VuXCIsIDEwLFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJGXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnRFJBV19DSVJDTEUnLCAnQ09MT1JfTUFYJywgJ0NPVU5UXzUnLCAnRFJBV19MSU5FJywgJ0FSR1VNRU5UJyxcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfNScsICdBUkdVTUVOVCcsICdDQUxMX0YnLCAnQ09VTlRfTUlOVVMnLCAnQVJHVU1FTlQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnI2ZmOTUwMCcsIHNlY29uZENvbG9yOiAnI2ZmYmIwMCcsIGJhY2tncm91bmRDb2xvcjogJyM4YThhOGEnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJIb25leWNvbWJcIiwgOCxcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgdG9rZW5zOiBbJ0RSQVdfQVJDTElORV9MXzFfMycsICdDQUxMX0YnLCAnQ09MT1JfU0hJRlRfMV80JywgJ0RSQVdfQVJDTElORV9SXzFfMycsICdDQUxMX0YnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjZmZkZDAwJywgc2Vjb25kQ29sb3I6ICcjZmY3NTc1JywgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIktvY2ggU25vd2ZsYWtlXCIsIDUsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJGXCIsIHRva2VuczogWydDQUxMX0cnLCAnUk9UQVRFX1JJR0hUJywgJ0NPVU5UXzInLCAnQU5HTEVfNjAnLCAnUkVQTEFZXzInLCAnQ09VTlRfMyddIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJHXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfTEVGVCcsICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9SSUdIVCcsICdDT1VOVF8yJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkdcIiwgc3VmZml4OiBcIkVORFwiLCB0b2tlbnM6IFsnRFJBV19MSU5FJywgJ0FSR1VNRU5UJ10gfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJESUFNT05EXCIsIHRva2VuczogWydGUkFDVF8xXzMnLCAnQVJHVU1FTlQnXSB9LFxuICAgICAgICBdLFxuICAgICAgICB7IGZpcnN0Q29sb3I6ICcjZmZmZmZmJywgc2Vjb25kQ29sb3I6ICcjZmYwMDAwJywgYmFja2dyb3VuZENvbG9yOiAnIzAwYmZmZicsIHN0cm9rZVNpemU6IDEgfSxcbiAgICApKTtcblxuICAgIHVwZGF0ZShjcmVhdGVQcm9qZWN0KFxuICAgICAgICBcIktvY2ggU25vd2ZsYWtlIC0gMlwiLCA0LFxuICAgICAgICBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRlwiLCB0b2tlbnM6IFsnQ0FMTF9HJywgJ1JPVEFURV9SSUdIVCcsICdDT1VOVF8yJywgJ0FOR0xFXzYwJywgJ1JFUExBWV8yJywgJ0NPVU5UXzMnXSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR1wiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnLCAnUk9UQVRFX0xFRlQnLCAnQU5HTEVfNjAnLCAnQ0FMTF9HJywgJ0NBTExfRElBTU9ORCcsICdST1RBVEVfUklHSFQnLCAnQ09VTlRfMicsXG4gICAgICAgICAgICAgICAgICAgICdBTkdMRV82MCcsICdDQUxMX0cnLCAnQ0FMTF9ESUFNT05EJywgJ1JPVEFURV9MRUZUJywgJ0FOR0xFXzYwJywgJ0NBTExfRycsICdDQUxMX0RJQU1PTkQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdcIiwgc3VmZml4OiBcIkVORFwiLCB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ0RSQVdfTElORScsICdBUkdVTUVOVCcsICdEUkFXX0FSQ0xJTkVfTF8yXzMnLCAnQ0FMTF9ESUFNT05EJywgJ0RSQVdfQVJDTElORV9SXzJfMycsICdDQUxMX0RJQU1PTkQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgIG5hbWU6IFwiRElBTU9ORFwiLCB0b2tlbnM6IFsnRlJBQ1RfMV8zJywgJ0FSR1VNRU5UJ10gfSxcbiAgICAgICAgXSxcbiAgICAgICAgeyBmaXJzdENvbG9yOiAnI2ZmZmZmZicsIHNlY29uZENvbG9yOiAnI2ZmMDAwMCcsIGJhY2tncm91bmRDb2xvcjogJyMwMGJmZmYnLCBzdHJva2VTaXplOiAxIH0sXG4gICAgKSk7XG5cbiAgICB1cGRhdGUoY3JlYXRlUHJvamVjdChcbiAgICAgICAgXCJUaGUgZ3JpZFwiLCA4LFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJGXCIsIHRva2VuczogW1xuICAgICAgICAgICAgICAgICAgICAnRFJBV19DSVJDTEUnLCAnQ09VTlRfMycsICdDT1VOVF8zJywgJ1JPVEFURV9SSUdIVCcsICdBTkdMRV85MCcsICdDQUxMX0cnLCAnQ0FMTF9GJywgJ1JFVkVSU0UnLCAnQ09VTlRfMycsXG4gICAgICAgICAgICAgICAgICAgICdST1RBVEVfTEVGVCcsICdBTkdMRV85MCcsICdDQUxMX0cnLCAnQ0FMTF9GJywgJ1JFVkVSU0UnLCAnQ09VTlRfMyddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkZcIiwgc3VmZml4OiBcIkVORFwiLCB0b2tlbnM6IFsnRFJBV19DSVJDTEUnLCAnQ09VTlRfMycsICdDT1VOVF8zJywgJ0NPTE9SX01BWCddIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiR1wiLCB0b2tlbnM6IFsnRFJBV19BUkNMSU5FX0xfMV80JywgJ0RSQVdfQVJDTElORV9SXzFfMicsICdGUkFDVF8xXzMnLCAnRFJBV19BUkNMSU5FX0xfMV80JywgJ0ZSQUNUXzFfMyddIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHsgZmlyc3RDb2xvcjogJyMwMDAwMDAnLCBzZWNvbmRDb2xvcjogJyNmZjAwMDAnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgc3Ryb2tlU2l6ZTogMSB9LFxuICAgICkpO1xuXG59IiwiaW1wb3J0IHsgU3RhdmUgfSBmcm9tIFwiQC9jb3JlL3N0YXZlXCI7XG5leHBvcnQgeyBTdGF2ZSB9IGZyb20gXCJAL2NvcmUvc3RhdmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbkluZm8ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHR5cGU6ICdhY3Rpb24nIHwgJ3ZhbHVlJztcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5DYXRlZ29yeSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB0b2tlbnM6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0U3R5bGUge1xuICAgIGZpcnN0Q29sb3I6IHN0cmluZyxcbiAgICBzZWNvbmRDb2xvcjogc3RyaW5nLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3RyaW5nLFxuICAgIHN0cm9rZVNpemU6IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgc3RhdmVzOiBTdGF2ZVtdLFxuICAgIGl0ZXJhdGlvbnM6IG51bWJlcixcbiAgICBzdHlsZTogUHJvamVjdFN0eWxlLFxuICAgIGNyZWF0ZWQ6IERhdGUsXG4gICAgdXBkYXRlZDogRGF0ZSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5UHJvamVjdCgpOiBQcm9qZWN0IHtcbiAgICBjb25zdCBkYXRlID0gKG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRpdGxlID0gYE5FVyAke2RhdGV9YDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogdGl0bGUsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZDogbmV3IERhdGUoKSxcbiAgICAgICAgc3RhdmVzOiBbXG4gICAgICAgICAgICB7XCJuYW1lXCI6IFwiRlwiLCB0b2tlbnM6IFtdfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIGZpcnN0Q29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgc2Vjb25kQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICAgIHN0cm9rZVNpemU6IDEuMCxcbiAgICAgICAgfSxcbiAgICAgICAgaXRlcmF0aW9uczogMyxcbiAgICB9XG59IiwiaW1wb3J0IHsgVG9rZW5zS2V5IH0gZnJvbSBcIkAvY29yZS9tYXBwaW5nc1wiO1xuaW1wb3J0IHsgVG9rZW5JbmZvIH0gZnJvbSBcIi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTlM6IFRva2VuSW5mb1tdID0gW1xuICAgIHtuYW1lOiAnQVJHVU1FTlQnLCBsYWJlbDogJ0FyZ3VtZW50JywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDQUxMX0RJQU1PTkQnLCBsYWJlbDogJ0RpYW1vbmQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NBTExfSU5WX1RSSUFOR0xFJywgbGFiZWw6ICdJbnZlcnNlIHRyaWFuZ2xlJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0NBTExfRicsIGxhYmVsOiAnRiBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NBTExfRycsIGxhYmVsOiAnRyBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0NBTExfSCcsIGxhYmVsOiAnSCBmdW5jdGlvbicsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnQ0xPU0VfQ0FMTF9GJywgbGFiZWw6ICdGIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0xPU0VfQ0FMTF9HJywgbGFiZWw6ICdHIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnQ0xPU0VfQ0FMTF9IJywgbGFiZWw6ICdIIGZ1bmN0aW9uJywgdHlwZTogJ2FjdGlvbid9LFxuXG4gICAge25hbWU6ICdEUkFXX0xJTkUnLCBsYWJlbDogJ0xpbmUnLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0RSQVdfQ0lSQ0xFJywgbGFiZWw6ICdDaXJjbGUnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX1NRVUFSRScsIGxhYmVsOiAnU3F1YXJlJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19UUklBTkdMRScsIGxhYmVsOiAnVHJpYW5nbGUnLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzNfNCcsIGxhYmVsOiAnQXJjIDMvNCAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMl8zJywgbGFiZWw6ICdBcmMgMi8zIChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzInLCBsYWJlbDogJ0FyYyAxLzIgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9SXzFfMycsIGxhYmVsOiAnQXJjIDEvMyAoUmlnaHQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX1JfMV80JywgbGFiZWw6ICdBcmMgMS80IChSaWdodCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfUl8xXzUnLCBsYWJlbDogJ0FyYyAxLzUgKFJpZ2h0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzNfNCcsIGxhYmVsOiAnQXJjIDMvNCAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8yXzMnLCBsYWJlbDogJ0FyYyAyLzMgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV8yJywgbGFiZWw6ICdBcmMgMS8yIChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0RSQVdfQVJDTElORV9MXzFfMycsIGxhYmVsOiAnQXJjIDEvMyAoTGVmdCknLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdEUkFXX0FSQ0xJTkVfTF8xXzQnLCBsYWJlbDogJ0FyYyAxLzQgKExlZnQpJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnRFJBV19BUkNMSU5FX0xfMV81JywgbGFiZWw6ICdBcmMgMS81IChMZWZ0KScsIHR5cGU6ICdhY3Rpb24nfSxcblxuICAgIHtuYW1lOiAnTU9WRV9GT1JXQVJEJywgbGFiZWw6ICdNb3ZlIGZvcndhcmQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdNT1ZFX0JBQ0tXQVJEJywgbGFiZWw6ICdNb3ZlIGJhY2t3YXJkJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnTU9WRV9MRUZUJywgbGFiZWw6ICdNb3ZlIGxlZnQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdNT1ZFX1JJR0hUJywgbGFiZWw6ICdNb3ZlIHJpZ2h0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUk9UQVRFX0xFRlQnLCBsYWJlbDogJ1JvdGF0ZSBsZWZ0JywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUk9UQVRFX1JJR0hUJywgbGFiZWw6ICdSb3RhdGUgcmlnaHQnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdGTElQX1YnLCBsYWJlbDogJ0ZsaXAgVmVydGljYWxseScsIHR5cGU6ICdhY3Rpb24nfSxcbiAgICB7bmFtZTogJ0ZMSVBfSCcsIGxhYmVsOiAnRmxpcCBIb3Jpem9udGFsbHknLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ1JFVkVSU0UnLCBsYWJlbDogJ1JldmVyc2UnLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVknLCBsYWJlbDogJ1JlcGxheSB0aGUgbGFzdCBhY3Rpb24nLCB0eXBlOiAnYWN0aW9uJ30sXG4gICAge25hbWU6ICdSRVBMQVlfMicsIGxhYmVsOiAnUmVwbGF5IHRoZSB0d28gbGFzdCBhY3Rpb25zJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZXzMnLCBsYWJlbDogJ1JlcGxheSB0aGUgdGhyZWUgbGFzdCBhY3Rpb25zJywgdHlwZTogJ2FjdGlvbid9LFxuICAgIHtuYW1lOiAnUkVQTEFZXzQnLCBsYWJlbDogJ1JlcGxheSB0aGUgZm91ciBsYXN0IGFjdGlvbnMnLCB0eXBlOiAnYWN0aW9uJ30sXG5cbiAgICB7bmFtZTogJ0NPVU5UXzEnLCBsYWJlbDogJ09uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfMicsIGxhYmVsOiAnVHdvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF8zJywgbGFiZWw6ICdUaHJlZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfNScsIGxhYmVsOiAnRml2ZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfNycsIGxhYmVsOiAnU2V2ZW4nLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnQ09VTlRfTUlOVVMnLCBsYWJlbDogJ01pbnVzIE9uZScsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfR09MRCcsIGxhYmVsOiAnR29sZGVuIFJhdGlvJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT1VOVF9TSUxWRVInLCBsYWJlbDogJ1NpbHZlciBSYXRpbycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09VTlRfQlJPTlpFJywgbGFiZWw6ICdCcm9uemUgUmF0aW8nLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPVU5UX1BMQVNUSUMnLCBsYWJlbDogJ1BsYXN0aWMgTnVtYmVyJywgdHlwZTogJ3ZhbHVlJ30sXG5cbiAgICB7bmFtZTogJ0ZSQUNUXzFfMicsIGxhYmVsOiAnSGFsZicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMV8zJywgbGFiZWw6ICdPbmUgVGhpcmQnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzJfMycsIGxhYmVsOiAnVHdvIFRoaXJkcycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMV80JywgbGFiZWw6ICdPbmUgUXVhcnRlcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfM180JywgbGFiZWw6ICdUaHJlZSBxdWFydGVycycsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnRlJBQ1RfMV81JywgbGFiZWw6ICdPbmUgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0ZSQUNUXzJfNScsIGxhYmVsOiAnVHdvIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF8zXzUnLCBsYWJlbDogJ1RocmVlIEZpZnRoJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdGUkFDVF80XzUnLCBsYWJlbDogJ0ZvdXIgRmlmdGgnLCB0eXBlOiAndmFsdWUnfSxcblxuICAgIHtuYW1lOiAnQU5HTEVfMjcwJywgbGFiZWw6ICcyNzDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMTgwJywgbGFiZWw6ICcxODDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfOTAnLCBsYWJlbDogJzkwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzYwJywgbGFiZWw6ICc2MMKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV80NScsIGxhYmVsOiAnNDXCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQU5HTEVfMzAnLCBsYWJlbDogJzMwwrAnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0FOR0xFXzE1JywgbGFiZWw6ICcxNcKwJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdBTkdMRV8xMCcsIGxhYmVsOiAnMTDCsCcsIHR5cGU6ICd2YWx1ZSd9LFxuXG4gICAge25hbWU6ICdPUF9NVUxUJywgbGFiZWw6ICdNdWx0aXBsZSBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnT1BfQUREJywgbGFiZWw6ICdBZGRpdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnT1BfU1VCJywgbGFiZWw6ICdTdWJ0cmFjdGlvbiBvcGVyYXRvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfTUFYJywgbGFiZWw6ICdTZWNvbmQgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX01JTicsIGxhYmVsOiAnRmlyc3QgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX0ZJTEwnLCBsYWJlbDogJ0ZpbGxlZCBGaWd1cmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX0VNUFRZJywgbGFiZWw6ICdUcmFuc3BhcmVudCBGaWd1cmUnLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfMicsIGxhYmVsOiAnQ2hhbmdlIENvbG9yJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdDT0xPUl9TSElGVF8xXzQnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnQ09MT1JfU0hJRlRfMV81JywgbGFiZWw6ICdDaGFuZ2UgQ29sb3InLCB0eXBlOiAndmFsdWUnfSxcbiAgICB7bmFtZTogJ0NPTE9SX1NISUZUXzFfMTAnLCBsYWJlbDogJ0NoYW5nZSBDb2xvcicsIHR5cGU6ICd2YWx1ZSd9LFxuICAgIHtuYW1lOiAnU1RST0tFX1RISUNLX0FERCcsIGxhYmVsOiAnVGhpY2sgc3Ryb2tlJywgdHlwZTogJ3ZhbHVlJ30sXG4gICAge25hbWU6ICdTVFJPS0VfVEhJQ0tfU1VCJywgbGFiZWw6ICdUaGluIHN0cm9rZScsIHR5cGU6ICd2YWx1ZSd9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE5BTUVfVE9fVE9LRU4gPSBuZXcgTWFwPHN0cmluZywgVG9rZW5JbmZvPihcbiAgICBUT0tFTlMubWFwKHRva2VuID0+IFt0b2tlbi5uYW1lLCB0b2tlbl0pXG4pO1xuIiwiaW1wb3J0IHsgVG9rZW5DYXRlZ29yeSB9IGZyb20gXCIuL21vZGVsc1wiO1xuXG5leHBvcnQgY29uc3QgVE9LRU5fRkFNSUxJRVM6IHsgW2tleTogc3RyaW5nXTogVG9rZW5DYXRlZ29yeVtdIH0gPSB7XG4gICAgQVJHVU1FTlQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdBcmd1bWVudHMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ0FSR1VNRU5UJywgJ0NBTExfRElBTU9ORCcsICdDQUxMX0lOVl9UUklBTkdMRSddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgQ0FMTDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NhbGxlcnMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ0NBTExfRicsICdDQUxMX0cnLCAnQ0FMTF9IJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2xvc2UgQ2FsbGVycycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnQ0xPU0VfQ0FMTF9GJywgJ0NMT1NFX0NBTExfRycsICdDTE9TRV9DQUxMX0gnXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIERSQVdfU0hBUEU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTaGFwZXMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbJ0RSQVdfQ0lSQ0xFJywgJ0RSQVdfU1FVQVJFJywgJ0RSQVdfVFJJQU5HTEUnXSxcbiAgICAgICAgfVxuICAgIF0sXG4gICAgRFJBV19MSU5FOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgICAgICB0b2tlbnM6IFsnRFJBV19MSU5FJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGVmdCBBcmMnLFxuICAgICAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzNfNCcsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzJfMycsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfMicsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfMycsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfNCcsXG4gICAgICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfNScsXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmlnaHQgQXJjJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8zXzQnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8yXzMnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8xXzInLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8xXzMnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8xXzQnLFxuICAgICAgICAgICAgICAgICdEUkFXX0FSQ0xJTkVfUl8xXzUnLFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgIF0sXG4gICAgTU9WRTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ01vdmVzJyxcbiAgICAgICAgICAgIHRva2VuczogWydNT1ZFX0ZPUldBUkQnLCAnTU9WRV9CQUNLV0FSRCcsICdNT1ZFX0xFRlQnLCAnTU9WRV9SSUdIVCddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgUk9UQVRFOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUm90YXRlcycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnUk9UQVRFX0xFRlQnLCAnUk9UQVRFX1JJR0hUJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRmxpcCcsXG4gICAgICAgICAgICB0b2tlbnM6IFsnRkxJUF9WJywgJ0ZMSVBfSCddLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgUkVQTEFZOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmVwbGF5cycsXG4gICAgICAgICAgICB0b2tlbnM6IFsnUkVQTEFZJywgJ1JFUExBWV8yJywgJ1JFUExBWV8zJywgJ1JFUExBWV80J10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBWQUxVRTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvdW50ZXJzJyxcbiAgICAgICAgICAgIHRva2VuczogWydDT1VOVF8xJywgJ0NPVU5UXzInLCAnQ09VTlRfMycsICdDT1VOVF81JywgJ0NPVU5UXzcnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb3VudGVycycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQ09VTlRfTUlOVVMnLFxuICAgICAgICAgICAgICAgICdDT1VOVF9HT0xEJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfU0lMVkVSJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfQlJPTlpFJyxcbiAgICAgICAgICAgICAgICAnQ09VTlRfUExBU1RJQycsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV8yJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV8zJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMl8zJyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfMV80JyxcbiAgICAgICAgICAgICAgICAnRlJBQ1RfM180JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRnJhY3Rpb25zJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdGUkFDVF8xXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF8yXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF8zXzUnLFxuICAgICAgICAgICAgICAgICdGUkFDVF80XzUnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIEFOR0xFOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdBTkdMRV8yNzAnLFxuICAgICAgICAgICAgICAgICdBTkdMRV8xODAnLFxuICAgICAgICAgICAgICAgICdBTkdMRV85MCcsXG4gICAgICAgICAgICAgICAgJ0FOR0xFXzYwJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdBTkdMRV80NScsXG4gICAgICAgICAgICAgICAgJ0FOR0xFXzMwJyxcbiAgICAgICAgICAgICAgICAnQU5HTEVfMTUnLFxuICAgICAgICAgICAgICAgICdBTkdMRV8xMCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgT1A6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdPUCcsXG4gICAgICAgICAgICB0b2tlbnM6IFsnT1BfTVVMVCcsICdPUF9BREQnLCAnT1BfU1VCJ10sXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBTVFJPS0VfQ09MT1I6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdUaGljay9UaGluJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdTVFJPS0VfVEhJQ0tfQUREJyxcbiAgICAgICAgICAgICAgICAnU1RST0tFX1RISUNLX1NVQicsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvbG9yJyxcbiAgICAgICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgICAgICdDT0xPUl9NQVgnLFxuICAgICAgICAgICAgICAgICdDT0xPUl9NSU4nLFxuICAgICAgICAgICAgICAgICdDT0xPUl9GSUxMJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfRU1QVFknLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdDb2xvciBTaGlmdCcsXG4gICAgICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV8yJyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV80JyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV81JyxcbiAgICAgICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV8xMCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5leHBvcnQgY29uc3QgTkFNRV9UT19GQU1JTFkgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPihcbiAgICBPYmplY3QuZW50cmllcyhUT0tFTl9GQU1JTElFUylcbiAgICAgICAgLm1hcCgoW25hbWUsIGNhdGVnb3JpZXNdKSA9PiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiBjYXRlZ29yeS50b2tlbnMubWFwKHRva2VuID0+IFt0b2tlbiwgbmFtZV0pKSlcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAuZmxhdCgpIGFzIFtzdHJpbmcsIHN0cmluZ11bXVxuKTtcbiIsImltcG9ydCB7IFRva2VuQ2F0ZWdvcnkgfSBmcm9tIFwiLi9tb2RlbHNcIjtcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9UT0tFTlM6IFRva2VuQ2F0ZWdvcnlbXSA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRnVuY3Rpb25zJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQVJHVU1FTlQnLFxuICAgICAgICAgICAgJ0NBTExfRElBTU9ORCcsXG4gICAgICAgICAgICAnQ0FMTF9GJyxcbiAgICAgICAgICAgICdDQUxMX0cnLFxuICAgICAgICAgICAgJ0NBTExfSCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGFpbnRlcnMnLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdEUkFXX0xJTkUnLFxuICAgICAgICAgICAgJ0RSQVdfVFJJQU5HTEUnLFxuICAgICAgICAgICAgJ0RSQVdfQVJDTElORV9MXzFfMicsXG4gICAgICAgICAgICAnRFJBV19BUkNMSU5FX1JfMV8yJyxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXJzb3InLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICAgICdNT1ZFX0ZPUldBUkQnLFxuICAgICAgICAgICAgJ1JPVEFURV9MRUZUJyxcbiAgICAgICAgICAgICdST1RBVEVfUklHSFQnLFxuICAgICAgICAgICAgJ0ZMSVBfVicsXG4gICAgICAgICAgICAnRkxJUF9IJyxcbiAgICAgICAgICAgICdSRVZFUlNFJyxcbiAgICAgICAgICAgICdSRVBMQVknLFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVkFMVUVfVE9LRU5TOiBUb2tlbkNhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0NvdW50ZXJzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQ09VTlRfMicsXG4gICAgICAgICAgICAnQ09VTlRfMycsXG4gICAgICAgICAgICAnQ09VTlRfNScsXG4gICAgICAgICAgICAnQ09VTlRfTUlOVVMnLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ZyYWN0aW9ucycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ0ZSQUNUXzFfMicsXG4gICAgICAgICAgICAnRlJBQ1RfMV8zJyxcbiAgICAgICAgICAgICdGUkFDVF8xXzQnLFxuICAgICAgICAgICAgJ0ZSQUNUXzFfNScsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQW5nbGVzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQU5HTEVfMTgwJyxcbiAgICAgICAgICAgICdBTkdMRV85MCcsXG4gICAgICAgICAgICAnQU5HTEVfNjAnLFxuICAgICAgICAgICAgJ0FOR0xFXzQ1JyxcbiAgICAgICAgICAgICdBTkdMRV8zMCcsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29sb3JzJyxcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAgICAnQ09MT1JfRklMTCcsXG4gICAgICAgICAgICAnQ09MT1JfRU1QVFknLFxuICAgICAgICAgICAgJ0NPTE9SX1NISUZUXzFfMicsXG4gICAgICAgICAgICAnQ09MT1JfU0hJRlRfMV80JyxcbiAgICAgICAgICAgICdDT0xPUl9NQVgnLFxuICAgICAgICAgICAgJ0NPTE9SX01JTicsXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnU3Ryb2tlcycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ1NUUk9LRV9USElDS19BREQnLFxuICAgICAgICAgICAgJ1NUUk9LRV9USElDS19TVUInLFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ01vZGlmaWNhdG9ycycsXG4gICAgICAgIHRva2VuczogW1xuICAgICAgICAgICAgJ09QX01VTFQnLFxuICAgICAgICAgICAgJ09QX0FERCcsXG4gICAgICAgICAgICAnT1BfU1VCJyxcbiAgICAgICAgXSxcbiAgICB9LFxuXTsiLCJpbXBvcnQgeyBjcmVhdGVFbXB0eVByb2plY3QsIFByb2plY3QgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBkZWNvZGVTdGF2ZXMsIGVuY29kZVN0YXZlcyB9IGZyb20gXCJAL2NvcmUvc2hvcnRjdXRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVQcm9qZWN0VG9VcmxQYXJhbXMocHJvamVjdDogUHJvamVjdCk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGVuY29kZVN0YXZlcyhwcm9qZWN0LnN0YXZlcylcbiAgICAgICAgLmZvckVhY2goKFtuYW1lLCB0b2tlbnNdKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKG5hbWUsIHRva2Vucyk7XG4gICAgICAgIH0pO1xuXG4gICAgcGFyYW1zLmFwcGVuZChcInpcIiwgXCJ6XCIpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJ0XCIsIHByb2plY3QudGl0bGUpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJpXCIsIHByb2plY3QuaXRlcmF0aW9ucy50b0ZpeGVkKCkpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJjMVwiLCBwcm9qZWN0LnN0eWxlLmZpcnN0Q29sb3IpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJjMlwiLCBwcm9qZWN0LnN0eWxlLnNlY29uZENvbG9yKTtcbiAgICBwYXJhbXMuYXBwZW5kKFwiYlwiLCBwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvcik7XG4gICAgcGFyYW1zLmFwcGVuZChcInNcIiwgcHJvamVjdC5zdHlsZS5zdHJva2VTaXplLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVQcm9qZWN0RnJvbVVybFBhcmFtcyhwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyk6IFByb2plY3Qge1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVFbXB0eVByb2plY3QoKTtcbiAgICBwcm9qZWN0LnN0YXZlcyA9IGRlY29kZVN0YXZlcyhwYXJhbXMuZW50cmllcygpKTtcblxuICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLmdldChcInRcIik7XG4gICAgY29uc3QgaXRlcmF0aW9ucyA9IHBhcmFtcy5nZXQoXCJpXCIpO1xuICAgIGNvbnN0IGZpcnN0Q29sb3IgPSBwYXJhbXMuZ2V0KFwiYzFcIik7XG4gICAgY29uc3Qgc2Vjb25kQ29sb3IgPSBwYXJhbXMuZ2V0KFwiYzJcIik7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmdldChcImJcIik7XG4gICAgY29uc3Qgc3Ryb2tlU2l6ZSA9IHBhcmFtcy5nZXQoXCJzXCIpO1xuXG4gICAgaWYgKHRpdGxlICE9PSBudWxsKSB7XG4gICAgICAgIHByb2plY3QuaWQgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBpZiAoaXRlcmF0aW9ucyAhPT0gbnVsbCkgcHJvamVjdC5pdGVyYXRpb25zID0gTnVtYmVyLnBhcnNlSW50KGl0ZXJhdGlvbnMpO1xuICAgIGlmIChmaXJzdENvbG9yICE9PSBudWxsKSBwcm9qZWN0LnN0eWxlLmZpcnN0Q29sb3IgPSBmaXJzdENvbG9yO1xuICAgIGlmIChzZWNvbmRDb2xvciAhPT0gbnVsbCkgcHJvamVjdC5zdHlsZS5zZWNvbmRDb2xvciA9IHNlY29uZENvbG9yO1xuICAgIGlmIChiYWNrZ3JvdW5kQ29sb3IgIT09IG51bGwpIHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgIGlmIChzdHJva2VTaXplICE9PSBudWxsKSBwcm9qZWN0LnN0eWxlLnN0cm9rZVNpemUgPSBOdW1iZXIucGFyc2VJbnQoc3Ryb2tlU2l6ZSk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn0iLCJpbXBvcnQgeyBUb2tlbnNWaWV3IH0gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCB7IENhbGxiYWNrcyB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmltcG9ydCB7IFRva2VuQ2F0ZWdvcnkgfSBmcm9tIFwiQC93ZWIvbW9kZWxzXCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2tlbnNDYXRlZ29yeVZpZXcgZXh0ZW5kcyBUb2tlbnNWaWV3IHtcbiAgICBwcm90ZWN0ZWQgY2F0ZWdvcmllczogVG9rZW5DYXRlZ29yeVtdO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGNhdGVnb3JpZXMsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYXRlZ29yaWVzOiBUb2tlbkNhdGVnb3J5W10sXG4gICAgICAgIGNhbGxiYWNrczogQ2FsbGJhY2tzLFxuICAgICAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeU5vZGUgPSB0aGlzLmNyZWF0ZUNhdGVnb3J5Tm9kZShjYXRlZ29yeSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhdGVnb3J5Tm9kZShjYXRlZ29yeTogVG9rZW5DYXRlZ29yeSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NlczogWydmcmFjdC10b2tlbnMnLCAnaGlkZSddLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlOb2RlTmFtZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc2VzOiBbJ2dyb3VwLWxhYmVsJ10sXG4gICAgICAgICAgICB0ZXh0OiBjYXRlZ29yeS5sYWJlbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZU5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYXRlZ29yeU5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGVOYW1lKTtcblxuICAgICAgICBjYXRlZ29yeS50b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgICAgICBpZiAodG9rZW5JbmZvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRlZ29yeU5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlbk5vZGUodG9rZW5JbmZvLm5hbWUpKTtcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbJ2xhYmVsJ10sXG4gICAgICAgICAgICAgICAgdGV4dDogdG9rZW5JbmZvLmxhYmVsLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcnlOb2RlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQgeyBUT0tFTl9GQU1JTElFUywgTkFNRV9UT19GQU1JTFkgfSBmcm9tIFwiQC93ZWIvdG9rZW5zRmFtaWx5XCI7XG5pbXBvcnQgeyBOQU1FX1RPX1RPS0VOIH0gZnJvbSBcIkAvd2ViL3Rva2Vuc1wiXG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSBcIkAvd2ViL2NvbnN0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uU2VsZWN0QXJncyB7XG4gICAgdG9rZW46IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdWZmaXg6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBDaG9vc2VUb2tlbkRpYWxvZ1ZpZXcgZXh0ZW5kcyBWaWV3PEhUTUxEaWFsb2dFbGVtZW50PiB7XG4gICAgI2FyZ3M6IE9uU2VsZWN0QXJncztcbiAgICAjaWNvblVybDogc3RyaW5nO1xuICAgICNvblNlbGVjdDogKG9iajogYW55KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoZGlhbG9nTm9kZTogSFRNTERpYWxvZ0VsZW1lbnQsIHRva2VuTm9kZTogSFRNTEVsZW1lbnQsIG9uU2VsZWN0OiAob2JqOiBhbnkpID0+IHZvaWQsIGljb25VcmwgPSBERUZBVUxUX0lDT05fVVJMKSB7XG4gICAgICAgIHN1cGVyKGRpYWxvZ05vZGUpO1xuICAgICAgICB0aGlzLiNhcmdzID0ge1xuICAgICAgICAgICAgdG9rZW46IHRva2VuTm9kZS5kYXRhc2V0LnRva2VuLFxuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHRva2VuTm9kZS5kYXRhc2V0LmluZGV4KSxcbiAgICAgICAgICAgIG5hbWU6IHRva2VuTm9kZS5kYXRhc2V0Lm5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHRva2VuTm9kZS5kYXRhc2V0LnN1ZmZpeCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy4jaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMuI29uU2VsZWN0ID0gb25TZWxlY3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImNob29zZS10b2tlbi1kaWFsb2dcIik7XG4gICAgICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBjb25zdCBmYW1pbHlOYW1lID0gTkFNRV9UT19GQU1JTFkuZ2V0KHRoaXMuI2FyZ3MudG9rZW4pO1xuICAgICAgICBjb25zdCBmYW1pbHkgPSBUT0tFTl9GQU1JTElFU1tmYW1pbHlOYW1lXSB8fCBbXTtcbiAgICAgICAgaWYgKGZhbWlseS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS50ZXh0Q29udGVudCA9ICdObyBmYW1pbHkgOignO1xuICAgICAgICB9IFxuXG4gICAgICAgIGZhbWlseS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydjYXRlZ29yeSddLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TGFiZWxOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydsYWJlbCddLFxuICAgICAgICAgICAgICAgIHRleHQ6IGNhdGVnb3J5LmxhYmVsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeUxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGNhdGVnb3J5LnRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuSW5mbyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5XaXRoTGFiZWxOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnZGlhbG9nLXRva2VuJ10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnZnJhY3QtdG9rZW4nXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2tlbk5vZGUuZGF0YXNldC50b2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgIHRva2VuTm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy4jaWNvblVybH0vJHt0b2tlbn0uc3ZnKWA7XG4gICAgICAgICAgICAgICAgdG9rZW5Ob2RlLnN0eWxlLndpZHRoID0gYDQ4cHhgO1xuICAgICAgICAgICAgICAgIHRva2VuTm9kZS5zdHlsZS5oZWlnaHQgPSBgNDhweGA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdG9rZW5JbmZvLmxhYmVsLFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYXBwZW5kQ2hpbGQodG9rZW5Ob2RlKTtcbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgICAgICB0b2tlbldpdGhMYWJlbE5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzLCB0b2tlbikpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5Tm9kZS5hcHBlbmRDaGlsZCh0b2tlbldpdGhMYWJlbE5vZGUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChjYXRlZ29yeU5vZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm5vZGUuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgb25DbGljayh0b2tlbjogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLiNvblNlbGVjdCh7Li4udGhpcy4jYXJncywgdG9rZW59KTtcbiAgICAgICAgdGhpcy5ub2RlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZSc7XG5pbXBvcnQgeyBDYWxsYmFja3MgfSBmcm9tIFwiLi90b2tlblwiO1xuXG5pbXBvcnQgeyBTdGF2ZSB9IGZyb20gJ0Avd2ViL21vZGVscyc7XG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIENvZGVWaWV3IGV4dGVuZHMgVmlldyB7XG4gICAgcHJpdmF0ZSBpY29uVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdGF2ZVZpZXdzOiBTdGF2ZVZpZXdbXTtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQ2FsbGJhY2tzO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkx9OiB7XG4gICAgICAgIG5vZGU6IEhUTUxFbGVtZW50LFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybD86IHN0cmluZyxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MgPSBbXTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgcmVuZGVyKHN0YXZlczogU3RhdmVbXSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RhdmVWaWV3cyA9IHN0YXZlcy5tYXAodGhpcy5jcmVhdGVTdGF2ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBmaW5kU3RhdmUobmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IFN0YXZlVmlldyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXZlVmlld3MuZmluZCh2aWV3ID0+IHZpZXcuY2hlY2tOYW1lKG5hbWUsIHN1ZmZpeCkpO1xuICAgIH1cblxuICAgIGFkZFN0YXZlKHBhcmFtczogeyBuYW1lOiBzdHJpbmc7IHN1ZmZpeDogc3RyaW5nOyB0b2tlbnM6IHN0cmluZ1tdIH0pIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuY3JlYXRlU3RhdmUoe1xuICAgICAgICAgICAgbmFtZTogcGFyYW1zLm5hbWUsXG4gICAgICAgICAgICBzdWZmaXg6IHBhcmFtcy5zdWZmaXgsXG4gICAgICAgICAgICB0b2tlbnM6IHBhcmFtcy50b2tlbnMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXZlVmlld3MucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBzY3JhcGVDb2RlKCk6IFN0YXZlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF2ZVZpZXdzLmZpbHRlcih2aWV3ID0+IHZpZXcuY291bGRCZVNjcmFwZWQoKSkubWFwKHZpZXcgPT4gdmlldy5zY3JhcGUoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN0YXZlKHsgbmFtZSwgc3VmZml4LCB0b2tlbnMgfSk6IFN0YXZlVmlldyB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFN0YXZlVmlldyh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4IHx8IFwiXCIsXG4gICAgICAgICAgICBpY29uVXJsOiB0aGlzLmljb25VcmwsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHRoaXMuY2FsbGJhY2tzLFxuICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICB9KTtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0U3R5bGUgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuXG50eXBlIE9uVXBkYXRlQ2IgPSAoaXRlcmF0aW9uczogbnVtYmVyLCBzdHlsZTogUHJvamVjdFN0eWxlKSA9PiB2b2lkO1xudHlwZSBDYiA9ICgpID0+IHZvaWQ7XG5pbnRlcmZhY2UgQ2FsbGJhY2tzIHtcbiAgICBvblVwZGF0ZTogT25VcGRhdGVDYixcbiAgICBvbkRlYnVnU3RhcnQ6IENiLFxuICAgIG9uTG9hZDogQ2IsXG4gICAgb25TYXZlOiBDYixcbiAgICBvbk5ldzogQ2IsXG4gICAgb25IZWxwOiBDYixcbiAgICBvbkRlYnVnU3RlcDogQ2IsXG4gICAgb25EZWJ1Z1BsYXk6IENiLFxuICAgIG9uRGVidWdTdG9wOiBDYixcbiAgICBvbkRlYnVnRXhpdDogQ2IsXG59O1xuXG5leHBvcnQgY2xhc3MgQ29kZUJhclZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2tzOiBDYWxsYmFja3MpIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICByZW5kZXIocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVySFRNTCA9IFwiSXRlcmF0aW9uczombmJzcDtcIjtcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiaXRlcmF0aW9uc1wiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBwcm9qZWN0Lml0ZXJhdGlvbnMudG9GaXhlZCgpO1xuICAgICAgICAgICAgbm9kZS5taW4gPSBcIjFcIjtcbiAgICAgICAgICAgIG5vZGUubWF4ID0gXCIzMFwiO1xuICAgICAgICAgICAgbm9kZS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiZmlyc3QtY29sb3JcIjtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5pbm5lckhUTUwgPSBcIkZpcnN0IGNvbG9yOiZuYnNwO1wiO1xuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJmaXJzdC1jb2xvclwiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJjb2xvclwiO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHByb2plY3Quc3R5bGUuZmlyc3RDb2xvciB8fCBcIiMwMDAwMDBcIjtcbiAgICAgICAgICAgIG5vZGUub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmh0bWxGb3IgPSBcInNlY29uZC1jb2xvclwiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVySFRNTCA9IFwiU2Vjb25kIGNvbG9yOiZuYnNwO1wiO1xuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJzZWNvbmQtY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudHlwZSA9IFwiY29sb3JcIjtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBwcm9qZWN0LnN0eWxlLnNlY29uZENvbG9yIHx8IFwiI0ZGMDAwMFwiO1xuICAgICAgICAgICAgbm9kZS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChsYWJlbE5vZGUpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBsYWJlbE5vZGUuaHRtbEZvciA9IFwiYmFja2dyb3VuZC1jb2xvclwiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVySFRNTCA9IFwiQmFja3JvdW5kIGNvbG9yOiZuYnNwO1wiO1xuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJiYWNrZ3JvdW5kLWNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImNvbG9yXCI7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gcHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIjRkZGRkZGXCI7XG4gICAgICAgICAgICBub2RlLm9uY2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGxhYmVsTm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGxhYmVsTm9kZS5odG1sRm9yID0gXCJzdHJva2Utc2l6ZVwiO1xuICAgICAgICAgICAgbGFiZWxOb2RlLmlubmVySFRNTCA9IFwiU3Ryb2tlIHNpemU6Jm5ic3A7XCI7XG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcInN0cm9rZS1zaXplXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcIm51bWJlclwiO1xuICAgICAgICAgICAgbm9kZS52YWx1ZSA9IChwcm9qZWN0LnN0eWxlLnN0cm9rZVNpemUgfHwgMSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIG5vZGUubWluID0gXCIwLjVcIjtcbiAgICAgICAgICAgIG5vZGUubWF4ID0gXCIzXCI7XG4gICAgICAgICAgICBub2RlLnN0ZXAgPSBcIjAuMjVcIjtcbiAgICAgICAgICAgIG5vZGUub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQobGFiZWxOb2RlKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBoaWRlTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNob3dOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc2VzOiBbXCJoaWRkZW5cIl0gfSk7XG4gICAgICAgICAgICBzaG93Tm9kZS52YWx1ZSA9IFwiU0hPV1wiO1xuICAgICAgICAgICAgc2hvd05vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBzaG93Tm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dOb2RlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgaGlkZU5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvZGUtcGFuZWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaGlkZU5vZGUudmFsdWUgPSBcIkhJREVcIjtcbiAgICAgICAgICAgIGhpZGVOb2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgaGlkZU5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBoaWRlTm9kZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHNob3dOb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2RlLXBhbmVsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChzaG93Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoaGlkZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIgfSk7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gXCJMT0FEXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkxvYWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIHRleHQ6IFwiU0FWRSAvIFNIQVJFXCIsXG4gICAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB0aGlzLiNjYWxsYmFja3Mub25TYXZlKCksXG4gICAgICAgIH0pKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiaW5wdXRcIiB9KTtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBcIk5FV1wiO1xuICAgICAgICAgICAgbm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIG5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25OZXcoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIgfSk7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gXCJIRUxQXCI7XG4gICAgICAgICAgICBub2RlLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAgICAgbm9kZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2NhbGxiYWNrcy5vbkhlbHAoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0bk5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImlucHV0XCIgfSk7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcImRlYnVnLXN0YXJ0XCI7XG4gICAgICAgICAgICBidG5Ob2RlLnZhbHVlID0gXCJERUJVR1wiO1xuICAgICAgICAgICAgYnRuTm9kZS50eXBlID0gXCJidXR0b25cIjtcbiAgICAgICAgICAgIGJ0bk5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25EZWJ1Z1N0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc2VzOiBbXCJoaWRkZW5cIl0gfSk7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcImRlYnVnLXN0ZXBcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIlNURVBcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uRGVidWdTdGVwKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc2VzOiBbXCJoaWRkZW5cIl0gfSk7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcImRlYnVnLXBsYXlcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIlBMQVlcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uRGVidWdQbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc2VzOiBbXCJoaWRkZW5cIl0gfSk7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcImRlYnVnLXN0b3BcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIlNUT1BcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uRGVidWdTdG9wKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBidG5Ob2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc2VzOiBbXCJoaWRkZW5cIl0gfSk7XG4gICAgICAgICAgICBidG5Ob2RlLm5hbWUgPSBcImRlYnVnLWV4aXRcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudmFsdWUgPSBcIkVYSVRcIjtcbiAgICAgICAgICAgIGJ0bk5vZGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgICAgICBidG5Ob2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uRGVidWdFeGl0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0eWxlKCk6IFByb2plY3RTdHlsZSB7XG4gICAgICAgIGNvbnN0IGdldFZhbHVlID0gKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7bmFtZX1cIl1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IG5vZGUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3RDb2xvcjogZ2V0VmFsdWUoXCJmaXJzdC1jb2xvclwiLCBcImJsYWNrXCIpLFxuICAgICAgICAgICAgc2Vjb25kQ29sb3I6IGdldFZhbHVlKFwic2Vjb25kLWNvbG9yXCIsIFwicmVkXCIpLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRWYWx1ZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJ3aGl0ZVwiKSxcbiAgICAgICAgICAgIHN0cm9rZVNpemU6IHBhcnNlRmxvYXQoZ2V0VmFsdWUoXCJzdHJva2Utc2l6ZVwiLCBcIjFcIikpLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVidWdNb2RlKCkge1xuICAgICAgICB0aGlzLmZpbmRJbnB1dCgnZGVidWctc3RhcnQnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0ZXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXBsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLWV4aXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICB1bnNldERlYnVnTW9kZSgpIHtcbiAgICAgICAgdGhpcy5maW5kSW5wdXQoJ2RlYnVnLXN0YXJ0JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdGVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1wbGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1zdG9wJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZmluZElucHV0KCdkZWJ1Zy1leGl0JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNoYW5nZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaXRlcmF0aW9uc1wiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGl0ZXJhdGlvbnMgPSBub2RlID09PSB1bmRlZmluZWQgPyAzIDogcGFyc2VJbnQobm9kZS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uVXBkYXRlKGl0ZXJhdGlvbnMsIHRoaXMuZ2V0U3R5bGUoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kSW5wdXQobmFtZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihgW25hbWU9JyR7bmFtZX0nXWApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5pbXBvcnQgeyBTVEFWRVMsIFNVRkZJWEVTIH0gZnJvbSAnQC9jb3JlL21hcHBpbmdzJztcblxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25zQmFyVmlldyBleHRlbmRzIFZpZXcge1xuICAgIHByaXZhdGUgaWNvblVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgb25TZWxlY3Q6IChuYW1lOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3Ioe25vZGUsIG9uU2VsZWN0LCBpY29uVXJsID0gREVGQVVMVF9JQ09OX1VSTH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMub25TZWxlY3QgPSBvblNlbGVjdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIFNUQVZFUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQmFyT2ZGdW5jdGlvbnNOb2RlKG5hbWUpKTtcbiAgICAgICAgfSkgXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVCYXJPZkZ1bmN0aW9uc05vZGUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiBcImxpXCIsIGNsYXNzZXM6IFtcImRyb3Bkb3duXCJdIH0pO1xuICAgICAgICBjb25zdCBiYXNlRnVuY05vZGUgPSB0aGlzLmNyZWF0ZUFkZEZ1bmN0aW9uTm9kZShcInNwYW5cIiwgbmFtZSk7XG4gICAgICAgIGNvbnN0IGJhck5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lIDogXCJ1bFwiLCBjbGFzc2VzOiBbXCJkcm9wZG93bi1jb250ZW50XCJdIH0pO1xuICAgICAgICBiYXJOb2RlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1jb250ZW50XCIpO1xuICAgICAgICBTVUZGSVhFUy5mb3JFYWNoKHN1ZmZpeCA9PiB7XG4gICAgICAgICAgICBiYXJOb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQWRkRnVuY3Rpb25Ob2RlKFwibGlcIiwgbmFtZSwgc3VmZml4KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGJhc2VGdW5jTm9kZSk7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYmFyTm9kZSk7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQWRkRnVuY3Rpb25Ob2RlKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyA9IFwiXCIpIDogTm9kZSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBjb25zdCByZWFsTmFtZSA9IHN1ZmZpeCA/IGBTVUZGSVhfJHtzdWZmaXh9YCA6IGBDQUxMXyR7bmFtZX1gO1xuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmljb25Vcmx9LyR7cmVhbE5hbWV9LnN2ZylgO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJ0b2tlbi1idG5cIik7XG4gICAgICAgIG5vZGUuZGF0YXNldC5uYW1lID0gbmFtZTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHN1ZmZpeDtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge25hbWUsIHN1ZmZpeH0gPSBub2RlLmRhdGFzZXQ7XG4gICAgICAgICAgICB0aGlzLm9uU2VsZWN0KG5hbWUsIHN1ZmZpeCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIEhlbHBEaWFsb2dWaWV3IGV4dGVuZHMgVmlldzxIVE1MRGlhbG9nRWxlbWVudD4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVscC1kaWFsb2dcIikgYXMgSFRNTERpYWxvZ0VsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zaG93TW9kYWwoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgY3JlYXRlU3ZnIH0gZnJvbSBcIkAvY29yZS9zdmdcIjtcbmltcG9ydCB7IElDdXJzb3IgfSBmcm9tIFwiQC9jb3JlL2N1cnNvclwiO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3IGV4dGVuZHMgVmlldyB7XG5cbiAgICByZW5kZXIoY3Vyc29yOiBJQ3Vyc29yLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvciA/IGJhY2tncm91bmRDb2xvciA6IFwibm9uZVwiO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnKGRvY3VtZW50LCBjdXJzb3IpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi4vZGF0YWJhc2VcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5cbmludGVyZmFjZSBDYWxsYmFja3Mge1xuICAgIG9uTG9hZDogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWRcbiAgICBvblJlbW92ZTogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0RGlhbG9nVmlldyBleHRlbmRzIFZpZXcge1xuICAgICNkYjogRGF0YWJhc2U7XG4gICAgI2NhbGxiYWNrczogQ2FsbGJhY2tzO1xuXG4gICAgY29uc3RydWN0b3IoZGlhbG9nTm9kZTogSFRNTEVsZW1lbnQsIGRiOiBEYXRhYmFzZSwgY2FsbGJhY2tzOiBDYWxsYmFja3MpIHtcbiAgICAgICAgc3VwZXIoZGlhbG9nTm9kZSk7XG4gICAgICAgIHRoaXMuI2RiID0gZGI7XG4gICAgICAgIHRoaXMuI2NhbGxiYWNrcyA9IGNhbGxiYWNrcztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdoMScsXG4gICAgICAgICAgICAgICAgdGV4dDogJ0xvYWQgcHJvamVjdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChoZWFkZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZU5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgY2xhc3NlczogWydwcm9qZWN0cyddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUJvZHlOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ3Rib2R5JyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICd0aGVhZCcgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuI2RiLmxpc3QocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93Tm9kZSA9IHRoaXMuI3JlbmRlclJvdyhwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICB0YWJsZUJvZHlOb2RlLmFwcGVuZENoaWxkKHJvd05vZGUpO1xuICAgICAgICAgICAgfSwgMTApO1xuXG4gICAgICAgICAgICB0YWJsZUhlYWRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jcmVuZGVySGVhZGVyUm93KCkpO1xuICAgICAgICAgICAgdGFibGVOb2RlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyTm9kZSk7XG4gICAgICAgICAgICB0YWJsZU5vZGUuYXBwZW5kQ2hpbGQodGFibGVCb2R5Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGFibGVOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdpbnB1dCcgfSlcbiAgICAgICAgICAgIGNsb3NlTm9kZS52YWx1ZSA9ICdDTE9TRSc7XG4gICAgICAgICAgICBjbG9zZU5vZGUudHlwZSA9ICdidXR0b24nO1xuICAgICAgICAgICAgY2xvc2VOb2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgKHRoaXMubm9kZSBhcyBIVE1MRGlhbG9nRWxlbWVudCkuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY2xvc2VOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0LWRpYWxvZ1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy4jb25DbG9zZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgKHRoaXMubm9kZSBhcyBIVE1MRGlhbG9nRWxlbWVudCkuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgI29uQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAjcmVuZGVySGVhZGVyUm93KCk6IEhUTUxUYWJsZVJvd0VsZW1lbnQge1xuICAgICAgICBjb25zdCB0YWJsZVJvd0hlYWRlck5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAndHInIH0pO1xuICAgICAgICB0YWJsZVJvd0hlYWRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICd0aCcsXG4gICAgICAgICAgICB0ZXh0OiAnVGl0bGUnLFxuICAgICAgICB9KSk7XG4gICAgICAgIHRhYmxlUm93SGVhZGVyTm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgIHRleHQ6ICdDcmVhdGVkJyxcbiAgICAgICAgfSkpO1xuICAgICAgICB0YWJsZVJvd0hlYWRlck5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICd0aCcsXG4gICAgICAgICAgICB0ZXh0OiAnVXBkYXRlZCcsXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGFibGVSb3dIZWFkZXJOb2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICBuYW1lOiAndGgnLFxuICAgICAgICAgICAgdGV4dDogJ0FjdGlvbnMnLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0YWJsZVJvd0hlYWRlck5vZGU7XG4gICAgfVxuXG4gICAgI3JlbmRlclJvdyhwcm9qZWN0OiBQcm9qZWN0KTogSFRNTFRhYmxlUm93RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAndHInIH0pO1xuICAgICAgICByb3dOb2RlLmRhdGFzZXQudGl0bGUgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlUm93Tm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3RoJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiBwcm9qZWN0LnRpdGxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3dOb2RlLmFwcGVuZENoaWxkKHRpdGxlUm93Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFJvd05vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZCcsXG4gICAgICAgICAgICAgICAgdGV4dDogcHJvamVjdC51cGRhdGVkLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQodXBkYXRlZFJvd05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRSb3dOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGQnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHByb2plY3QuY3JlYXRlZC50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3dOb2RlLmFwcGVuZENoaWxkKGNyZWF0ZWRSb3dOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25Sb3dOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAndGQnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxvYWROb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2FkTm9kZS52YWx1ZSA9ICdMT0FEJztcbiAgICAgICAgICAgIGxvYWROb2RlLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgIGxvYWROb2RlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZGIuZ2V0KHByb2plY3QudGl0bGUsIHByb2plY3QgPT4gdGhpcy4jb25Mb2FkKHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCByZW1vdmVOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZW1vdmVOb2RlLnZhbHVlID0gJ1JFTU9WRSc7XG4gICAgICAgICAgICByZW1vdmVOb2RlLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgICAgIHJlbW92ZU5vZGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkYi5yZW1vdmUocHJvamVjdC50aXRsZSwgKCkgPT4gdGhpcy4jb25SZW1vdmUocHJvamVjdCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjdGlvblJvd05vZGUuYXBwZW5kQ2hpbGQobG9hZE5vZGUpO1xuICAgICAgICAgICAgYWN0aW9uUm93Tm9kZS5hcHBlbmRDaGlsZChyZW1vdmVOb2RlKTtcbiAgICAgICAgICAgIHJvd05vZGUuYXBwZW5kQ2hpbGQoYWN0aW9uUm93Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93Tm9kZTtcbiAgICB9XG5cbiAgICAjb25Mb2FkKHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzLm9uTG9hZChwcm9qZWN0KTtcbiAgICAgICAgKHRoaXMubm9kZSBhcyBIVE1MRGlhbG9nRWxlbWVudCkuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAjb25SZW1vdmUocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGAucHJvamVjdHMgPiB0Ym9keSA+IHRyW2RhdGEtdGl0bGU9XCIke3Byb2plY3QudGl0bGV9XCJdYDtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICAgICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25SZW1vdmUocHJvamVjdCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIkAvd2ViL2RhdGFiYXNlXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIkAvd2ViL21vZGVsc1wiO1xuaW1wb3J0IHsgZW5jb2RlUHJvamVjdFRvVXJsUGFyYW1zIH0gZnJvbSBcIkAvd2ViL3VybFBhcmFtc1wiO1xuXG5pbXBvcnQgeyB0b0NhbnZhcyB9IGZyb20gXCJxcmNvZGVcIjtcblxuaW50ZXJmYWNlIENhbGxiYWNrcyB7XG4gICAgb25TYXZlOiAocHJvamVjdDogUHJvamVjdCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgU2F2ZURpYWxvZ1ZpZXcgZXh0ZW5kcyBWaWV3PEhUTUxEaWFsb2dFbGVtZW50PiB7XG4gICAgI2RiOiBEYXRhYmFzZTtcbiAgICAjY2FsbGJhY2tzOiBDYWxsYmFja3M7XG4gICAgI3Byb2plY3Q6IFByb2plY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihkaWFsb2dOb2RlOiBIVE1MRGlhbG9nRWxlbWVudCwgZGI6IERhdGFiYXNlLCBwcm9qZWN0OiBQcm9qZWN0LCBjYWxsYmFja3M6IENhbGxiYWNrcykge1xuICAgICAgICBzdXBlcihkaWFsb2dOb2RlKTtcbiAgICAgICAgdGhpcy4jZGIgPSBkYjtcbiAgICAgICAgdGhpcy4jY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICAgICAgICB0aGlzLiNwcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJTYXZlU2VjdGlvbigpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6ICdocicgfSkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy4jcmVuZGVyU2hhcmVTZWN0aW9uKCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHsgbmFtZTogJ2hyJyB9KSk7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLiNyZW5kZXJGb290ZXIoKSk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWRpYWxvZ1wiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy4jb25DbG9zZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub2RlLnNob3dNb2RhbCgpO1xuICAgIH1cblxuICAgICNyZW5kZXJTYXZlU2VjdGlvbigpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAnZGl2JyB9KTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2gyJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnU2F2ZSBwcm9qZWN0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RpdGxlOiAnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLiNwcm9qZWN0LnRpdGxlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aXRsZU5vZGUub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZU5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYXJUaXRsZSA9IHRpdGxlLnJlcGxhY2UoL1tfXFxzXSsvLCAnICcpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0LnRpdGxlID0gY2xlYXJUaXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0LmlkID0gY2xlYXJUaXRsZTtcbiAgICAgICAgICAgICAgICB0aXRsZU5vZGUudmFsdWUgPSBjbGVhclRpdGxlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGl0bGVOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIHRleHQ6ICdTQVZFJyxcbiAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0LnVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2RiLnVwZGF0ZSh0aGlzLiNwcm9qZWN0LCAocHJvamVjdDogUHJvamVjdCkgPT4gdGhpcy4jb25TYXZlKHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAjcmVuZGVyU2hhcmVTZWN0aW9uKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgc2hhcmVMaW5rID0gdGhpcy4jY3JlYXRlU2hhcmVMaW5rKCk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAnZGl2JyB9KTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaDInLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdTaGFyZSBwcm9qZWN0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTGluayB0byBzaGFyZTogJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoeyBcbiAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsIFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgdGV4dDogc2hhcmVMaW5rLFxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiYnJcIiB9KSk7XG5cbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUVsZW1lbnQoeyBcbiAgICAgICAgICAgIG5hbWU6ICdpbnB1dCcsIFxuICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICB0ZXh0OiAnQ29weSB0byBjbGlwYm9hcmQnLFxuICAgICAgICAgICAgb25jbGljazogKCkgPT4gd2luZG93Lm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNoYXJlTGluayksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaDMnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICfigKYgb3IgY29weSBRUiBjb2RlJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY2FudmFzTm9kZSA9IHRoaXMuY3JlYXRlRWxlbWVudCh7IG5hbWU6IFwiY2FudmFzXCJ9KTtcbiAgICAgICAgICAgIHRvQ2FudmFzKGNhbnZhc05vZGUsIHNoYXJlTGluayk7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNhbnZhc05vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgI3JlbmRlckZvb3RlcigpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoeyBuYW1lOiAnZGl2JyB9KTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ0xPU0UnLFxuICAgICAgICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHRoaXMubm9kZS5jbG9zZSgpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAjb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgICNvblNhdmUocHJvamVjdDogUHJvamVjdCkge1xuICAgICAgICB0aGlzLiNjYWxsYmFja3Mub25TYXZlKHByb2plY3QpO1xuICAgICAgICB0aGlzLm5vZGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAjY3JlYXRlU2hhcmVMaW5rKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke2xvY2F0aW9uLnBhdGhuYW1lfWA7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGVuY29kZVByb2plY3RUb1VybFBhcmFtcyh0aGlzLiNwcm9qZWN0KTtcbiAgICAgICAgcmV0dXJuIGAke3BhdGh9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuaW1wb3J0IHsgVG9rZW5zU3RhdmVWaWV3IH0gZnJvbSAnLi9zdGF2ZVRva2VuJztcblxuaW1wb3J0IHsgU3RhdmUgfSBmcm9tICdAL3dlYi9tb2RlbHMnO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OX1VSTCB9IGZyb20gJ0Avd2ViL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF2ZVZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICBwcml2YXRlIHRva2VuVmlldzogVG9rZW5zU3RhdmVWaWV3XG4gICAgcHJpdmF0ZSB0b2tlbnNOb2RlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIGljb25Vcmw6IHN0cmluZztcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwsXG4gICAgICAgIHRva2VucyA9IFtdLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIobm9kZSk7XG4gICAgICAgIHRoaXMuaWNvblVybCA9IGljb25Vcmw7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc3VmZml4ID0gc3VmZml4O1xuICAgICAgICB0aGlzLnRva2Vuc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnRva2VuVmlldyA9IG5ldyBUb2tlbnNTdGF2ZVZpZXcoe1xuICAgICAgICAgICAgbm9kZTogdGhpcy50b2tlbnNOb2RlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1ZmZpeCxcbiAgICAgICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoXCJzdGF2ZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5ub2RlLmRhdGFzZXQuc3VmZml4ID0gdGhpcy5zdWZmaXg7XG4gICAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZU5hbWUodGhpcy5uYW1lLCB0aGlzLnN1ZmZpeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy50b2tlbnNOb2RlKTtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgY2hlY2tOYW1lKG5hbWU6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSA9PT0gbmFtZSAmJiB0aGlzLnN1ZmZpeCA9PT0gc3VmZml4O1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgfVxuXG4gICAgc2hvd09ySGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbkFmdGVyKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlblZpZXcucHVzaFRva2VuQWZ0ZXIodG9rZW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZXBsYWNlVG9rZW4obmV3VG9rZW46IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZXBsYWNlVG9rZW4obmV3VG9rZW4sIGluZGV4KTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2tlbihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZVRva2VuKGluZGV4KTtcbiAgICB9XG5cbiAgICBwdXNoVG9rZW5PbkJhY2sodG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5wdXNoVG9rZW5PbkJhY2sodG9rZW4pO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuT25CYWNrKCkge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5yZW1vdmVUb2tlbk9uQmFjaygpO1xuICAgIH1cblxuICAgIGNvdWxkQmVTY3JhcGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpc0hpZGUgPSB0aGlzLm5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKTtcbiAgICAgICAgcmV0dXJuICFpc0hpZGU7XG4gICAgfVxuXG4gICAgc2NyYXBlKCk6IFN0YXZlIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlblZpZXcuc2NyYXBlVG9rZW5zKCk7XG4gICAgICAgIGNvbnN0IHtuYW1lLCBzdWZmaXh9ID0gdGhpcy5ub2RlLmRhdGFzZXQ7XG4gICAgICAgIHJldHVybiB7bmFtZSwgc3VmZml4LCB0b2tlbnN9O1xuICAgIH1cblxuICAgIGFkZEZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2VuVmlldy5hZGRGbGFnT25BY3Rpb25Ub2tlbihmbGFnLCBhY3Rpb25JbmRleCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudG9rZW5WaWV3LnJlbW92ZUZsYWdPbkFjdGlvblRva2VuKGZsYWcsIGFjdGlvbkluZGV4KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmFtZShuYW1lOiBzdHJpbmcsIHN1ZmZpeD86IHN0cmluZyk6IEVsZW1lbnQge1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgIGNvbnN0IHJlYWxuYW1lID0gc3VmZml4ID8gYCR7bmFtZX1fJHtzdWZmaXh9YCA6IG5hbWU7XG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuaWNvblVybH0vQ0FMTF8ke3JlYWxuYW1lfS5zdmcpYDtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVG9rZW5zVmlldyB9IGZyb20gJy4vdG9rZW4nO1xuXG5pbXBvcnQgeyBERUZBVUxUX0lDT05fVVJMIH0gZnJvbSAnQC93ZWIvY29uc3RzJztcblxuZXhwb3J0IGNsYXNzIFRva2Vuc1N0YXZlVmlldyBleHRlbmRzIFRva2Vuc1ZpZXcge1xuICAgIHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHN1ZmZpeDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBub2RlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBzdWZmaXgsXG4gICAgICAgIGNhbGxiYWNrcyxcbiAgICAgICAgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwsXG4gICAgICAgIHRva2VucyA9IFtdLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIGljb25VcmwsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChcInRva2Vuc1wiKTtcblxuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlbmRlclRva2VucygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUb2tlblNwYW5Ob2RlKDApKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWN0aW9uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2Vucy5mb3JFYWNoKCh0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb25JbmRleCA9IHRoaXMucHVzaFRva2VuTm9kZU9uQmFjayh0aGlzLm5vZGUsIHRva2VuLCBpbmRleCwgYWN0aW9uSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbkFmdGVyKHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnMuc3BsaWNlKGluZGV4LCAwLCB0b2tlbik7XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVwbGFjZVRva2VuKG5ld1Rva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50b2tlbnNbaW5kZXhdID0gbmV3VG9rZW47XG4gICAgICAgIHRoaXMucmVuZGVyVG9rZW5zKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9rZW4oaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnRva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHB1c2hUb2tlbk9uQmFjayh0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB0aGlzLnJlbmRlclRva2VucygpO1xuICAgIH1cblxuICAgIHJlbW92ZVRva2VuT25CYWNrKCkge1xuICAgICAgICB0aGlzLnRva2Vucy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJUb2tlbnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHB1c2hUb2tlbk5vZGVPbkJhY2sodG9rZW5zTm9kZTogSFRNTEVsZW1lbnQsIHRva2VuOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFjdGlvbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBjb25zdCBhcHBlbmRTcGFuID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXggKyBzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXBwZW5kQ2hpbGQgPSAoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgbm9kZTogSFRNTEVsZW1lbnQsIHMgPSAxKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKGNvbnRhaW5lciwgcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9rZW5Ob2RlID0gdGhpcy5jcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbiwgaW5kZXgsIGFjdGlvbkluZGV4KTtcbiAgICAgICAgbGV0IGxhc3ROb2RlID0gdG9rZW5zTm9kZS5sYXN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIC8vIHByb2JhYmx5IGl0J3MgYSBzcGFuLCBmaW5kIHByZXZpb3VzIG5vZGVcbiAgICAgICAgICAgIGxhc3ROb2RlID0gbGFzdE5vZGUucHJldmlvdXNTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNHcm91cCA9IChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmcmFjdC10b2tlbi1ncm91cFwiKTtcbiAgICAgICAgY29uc3QgaXNBY3Rpb24gPSAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUuZGF0YXNldD8udHlwZSA9PT0gXCJhY3Rpb25cIjtcblxuICAgICAgICBpZiAoIWxhc3ROb2RlKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZCh0b2tlbnNOb2RlLCB0b2tlbk5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4ICsgKGlzQWN0aW9uKHRva2VuTm9kZSkgPyAxIDogMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBY3Rpb24odG9rZW5Ob2RlKSkge1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQodG9rZW5zTm9kZSwgdG9rZW5Ob2RlKTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbmRleCArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNHcm91cChsYXN0Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQobGFzdE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kU3Bhbih0b2tlbnNOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzQWN0aW9uKGxhc3ROb2RlKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHRva2Vuc05vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZ3JvdXAgd2l0aCBhY3Rpb24gYW5kIHZhbHVlLlxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gdGhpcy5jcmVhdGVFbXB0eVRva2VuR3JvdXAoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zTm9kZS5yZW1vdmVDaGlsZChsYXN0Tm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnNOb2RlLnJlbW92ZUNoaWxkKGxhc3ROb2RlKTtcbiAgICAgICAgICAgIHRva2Vuc05vZGUuaW5zZXJ0QmVmb3JlKGdyb3VwTm9kZSwgbGFzdE5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZ3JvdXBOb2RlLmRhdGFzZXQuYWN0aW9uSW5kZXggPSBsYXN0Tm9kZS5kYXRhc2V0LmFjdGlvbkluZGV4O1xuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZ3JvdXBOb2RlLCBsYXN0Tm9kZSwgMCk7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChncm91cE5vZGUsIHRva2VuTm9kZSk7XG4gICAgICAgICAgICBhcHBlbmRTcGFuKHRva2Vuc05vZGUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVFbmhhbmNlZFRva2VuTm9kZSh0b2tlbjogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBhY3Rpb25JbmRleDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVUb2tlbk5vZGUodG9rZW4pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHRoaXMuc3VmZml4O1xuICAgICAgICBpZiAobm9kZS5kYXRhc2V0Py50eXBlID09PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICBub2RlLmRhdGFzZXQuYWN0aW9uSW5kZXggPSBgJHthY3Rpb25JbmRleH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVEcmFnTm9kZShub2RlOiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgZHJhZ05vZGUgPSBzdXBlci5jcmVhdGVEcmFnTm9kZShub2RlKTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5pbmRleCA9IG5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC5uYW1lID0gbm9kZS5kYXRhc2V0Lm5hbWU7XG4gICAgICAgIGRyYWdOb2RlLmRhdGFzZXQuc3VmZml4ID0gbm9kZS5kYXRhc2V0LnN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIGRyYWdOb2RlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVFbXB0eVRva2VuR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogXCJkaXZcIixcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLWdyb3VwXCJdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzY3JhcGVUb2tlbnMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuU3Bhbk5vZGUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5jcmVhdGVFbGVtZW50KHtcbiAgICAgICAgICAgIG5hbWU6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzZXM6IFtcImZyYWN0LXRva2VuLXNwYW5cIl0sXG4gICAgICAgIH0pO1xuICAgICAgICBub2RlLmRhdGFzZXQuaW5kZXggPSBgJHtpbmRleH1gO1xuICAgICAgICBub2RlLmRhdGFzZXQubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnN1ZmZpeCA9IHRoaXMuc3VmZml4O1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlVG9rZW5SZW1vdmVTcGFuTm9kZSgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJmcmFjdC10b2tlbi1zcGFuXCIsIFwicmVtb3ZlXCIpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59O1xuXG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgTkFNRV9UT19UT0tFTiB9IGZyb20gXCJAL3dlYi90b2tlbnNcIjtcbmltcG9ydCB7IERFRkFVTFRfSUNPTl9VUkwgfSBmcm9tICdAL3dlYi9jb25zdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxiYWNrcyB7XG4gICAgb25Ecm9wOiAoZDogSFRNTEVsZW1lbnQsIG86IEhUTUxFbGVtZW50KSA9PiB2b2lkIHwgbnVsbDtcbiAgICBvbk1vdmU6IChkOiBIVE1MRWxlbWVudCwgbzogSFRNTEVsZW1lbnQgfCBudWxsLCBuOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHZvaWQgfCBudWxsO1xuICAgIG9uRHJhZ1RpbWVvdXQ6IChub2RlOiBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbjtcbiAgICBjYW5EcmFnOiAoKSA9PiBib29sZWFuIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFRva2Vuc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgICByZWFkb25seSBpY29uVXJsOiBzdHJpbmc7XG4gICAgI2NhbGxiYWNrczogQ2FsbGJhY2tzXG5cbiAgICBjb25zdHJ1Y3Rvcih7IG5vZGUsIGNhbGxiYWNrcywgaWNvblVybCA9IERFRkFVTFRfSUNPTl9VUkwgfToge1xuICAgICAgICBub2RlOiBIVE1MRWxlbWVudCxcbiAgICAgICAgY2FsbGJhY2tzOiBDYWxsYmFja3NcbiAgICAgICAgaWNvblVybD86IHN0cmluZyxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKG5vZGUpO1xuICAgICAgICB0aGlzLmljb25VcmwgPSBpY29uVXJsO1xuICAgICAgICB0aGlzLiNjYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgfVxuXG4gICAgZ2V0IGlzRHJhZ2dhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY2FsbGJhY2tzLm9uRHJvcCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRmxhZ09uQWN0aW9uVG9rZW4oZmxhZzogc3RyaW5nLCBhY3Rpb25JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXgpLmNsYXNzTGlzdC5hZGQoZmxhZyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUZsYWdPbkFjdGlvblRva2VuKGZsYWc6IHN0cmluZywgYWN0aW9uSW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmZpbmRUb2tlbk5vZGVCeUFjdGlvbkluZGV4KGFjdGlvbkluZGV4KS5jbGFzc0xpc3QucmVtb3ZlKGZsYWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZFRva2VuTm9kZUJ5QWN0aW9uSW5kZXgoYWN0aW9uSW5kZXg6IG51bWJlcik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgKltkYXRhLWFjdGlvbi1pbmRleD0nJHthY3Rpb25JbmRleH0nXWA7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcihxdWVyeSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVRva2VuTm9kZSh0b2tlbjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCB0b2tlbkluZm8gPSBOQU1FX1RPX1RPS0VOLmdldCh0b2tlbik7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoe1xuICAgICAgICAgICAgbmFtZTogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NlczogWydmcmFjdC10b2tlbiddLFxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnRva2VuID0gdG9rZW47XG4gICAgICAgIG5vZGUuZGF0YXNldC50eXBlID0gdG9rZW5JbmZvID8gdG9rZW5JbmZvLnR5cGUgOiBcInVua25vd25cIjtcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5pY29uVXJsfS8ke3Rva2VufS5zdmcpYDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9rZW5FdmVudHMobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZURyYWdOb2RlKG5vZGU6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBkcmFnTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHJhZ05vZGUuY2xhc3NMaXN0LmFkZCgnZnJhY3QtdG9rZW4nLCAnbW92ZScpO1xuICAgICAgICBkcmFnTm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcbiAgICAgICAgZHJhZ05vZGUuZGF0YXNldC50b2tlbiA9IG5vZGUuZGF0YXNldC50b2tlbjtcbiAgICAgICAgcmV0dXJuIGRyYWdOb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW5FdmVudHMobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnTW91c2VTdGFydCwgZmFsc2UpO1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkcmFnVG91Y2hTdGFydCwgZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuI2NhbGxiYWNrcztcbiAgICAgICAgY29uc3QgY2FuRHJhZyA9ICgpID0+IGNhbGxiYWNrcy5jYW5EcmFnICYmICFjYWxsYmFja3MuY2FuRHJhZygpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUNvbnRleHQgPSAoY29vcmRzQ2IpID0+XG4gICAgICAgICAgICBuZXcgRHJhZ0NvbnRleHQoXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5jcmVhdGVEcmFnTm9kZShub2RlKSwgXG4gICAgICAgICAgICAgICAgKCkgPT4gY2FsbGJhY2tzLm9uRHJhZ1RpbWVvdXQgIT09IG51bGwgPyBjYWxsYmFja3Mub25EcmFnVGltZW91dChub2RlKSA6IGZhbHNlLCBcbiAgICAgICAgICAgICAgICBjb29yZHNDYiwgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBkcmFnTW91c2VTdGFydChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChjYW5EcmFnKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChnZXRNb3VzZUNvb3Jkcyk7XG4gICAgICAgICAgICBjb250ZXh0LmluaXQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGNvbnRleHQuY3JlYXRlRHJhZ01vdmUoKSxcbiAgICAgICAgICAgICAgICBtb3VzZXVwOiBjb250ZXh0LmNyZWF0ZURyYWdTdG9wKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRleHQudXBkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdUb3VjaFN0YXJ0KGV2ZW50OiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzLmNhbkRyYWcgJiYgIWNhbGxiYWNrcy5jYW5EcmFnKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dChnZXRUb3VjaENvb3Jkcyk7XG4gICAgICAgICAgICBjb250ZXh0LmluaXQoZXZlbnQsIHtcbiAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGNvbnRleHQuY3JlYXRlRHJhZ01vdmUoKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVuZDogY29udGV4dC5jcmVhdGVEcmFnU3RvcCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZXh0LnVwZGF0ZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRNb3VzZUNvb3JkcyhldmVudDogTW91c2VFdmVudCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgICAgICAgICAgcmV0dXJuIFtldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvdWNoQ29vcmRzKGV2ZW50OiBUb3VjaEV2ZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgICAgICAgICByZXR1cm4gW2V2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCwgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5jbGFzcyBEcmFnQ29udGV4dDxFdmVudFR5cGUgZXh0ZW5kcyBFdmVudD4ge1xuICAgIHByaXZhdGUgZHJhZ05vZGU6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBwcml2YXRlIG92ZXJOb2RlOiBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgcHJpdmF0ZSBpbml0aWFsQ29vcmRzOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbDtcbiAgICBwcml2YXRlIGV2ZW50Q2FsbGJhY2tzOiB7IFtrOiBzdHJpbmddOiAoZTogRXZlbnRUeXBlKSA9PiB2b2lkIH07XG4gICAgcHJpdmF0ZSBfZ2V0Q29vcmRzOiAoZXZlbnQ6IEV2ZW50VHlwZSkgPT4gW251bWJlciwgbnVtYmVyXTtcbiAgICBwcml2YXRlIGNhbGxiYWNrczogQ2FsbGJhY2tzO1xuICAgIHByaXZhdGUgY3JlYXRlRHJhZ05vZGU6ICgpID0+IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgdGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGNyZWF0ZURyYWdOb2RlOiAoKSA9PiBIVE1MRWxlbWVudCxcbiAgICAgICAgb25UaW1lb3V0OiAoKSA9PiBib29sZWFuLFxuICAgICAgICBnZXRDb29yZHM6IChldmVudDogRXZlbnRUeXBlKSA9PiBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICBjYWxsYmFja3M6IENhbGxiYWNrcyxcbiAgICApIHtcbiAgICAgICAgdGhpcy5jcmVhdGVEcmFnTm9kZSA9IGNyZWF0ZURyYWdOb2RlO1xuICAgICAgICB0aGlzLmRyYWdOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vdmVyTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRDYWxsYmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MgPSBjYWxsYmFja3M7XG4gICAgICAgIHRoaXMuX2dldENvb3JkcyA9IGdldENvb3JkcztcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZihvblRpbWVvdXQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEcmFnTW92ZSgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZShldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVEcmFnU3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIChldmVudDogRXZlbnRUeXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdmVyTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uRHJvcCh0aGlzLmRyYWdOb2RlLCB0aGlzLm92ZXJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KGV2ZW50OiBFdmVudFR5cGUsIGV2ZW50Q2FsbGJhY2tzOiB7IFtrOiBzdHJpbmddOiAoZTogRXZlbnRUeXBlKSA9PiB2b2lkIH0pIHtcbiAgICAgICAgdGhpcy5pbml0aWFsQ29vcmRzID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgdGhpcy5ldmVudENhbGxiYWNrcyA9IGV2ZW50Q2FsbGJhY2tzXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRDYWxsYmFja3MpLmZvckVhY2goKFtuYW1lLCBjYl0pID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2IsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3Mub25Nb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrcy5vbk1vdmUodGhpcy5kcmFnTm9kZSwgdGhpcy5vdmVyTm9kZSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudENhbGxiYWNrcykuZm9yRWFjaCgoW25hbWUsIGNiXSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBjYiwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGV2ZW50OiBFdmVudFR5cGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ05vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmNvbXB1dGVyRGlzdGFuY2VUb0luaXRpYWxDb29yZHMoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID4gNSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ05vZGUgPSB0aGlzLmNyZWF0ZURyYWdOb2RlKCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRyYWdOb2RlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgdGhpcy51cGRhdGVDb29yZHMoeCwgeSk7XG4gICAgICAgIGNvbnN0IG9sZE92ZXJOb2RlID0gdGhpcy5vdmVyTm9kZTtcbiAgICAgICAgY29uc3QgbmV3T3Zlck5vZGUgPSB0aGlzLmZpbmRPdmVyTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFja3Mub25Nb3ZlICYmICFPYmplY3QuaXMob2xkT3Zlck5vZGUsIG5ld092ZXJOb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFja3Mub25Nb3ZlKHRoaXMuZHJhZ05vZGUsIG9sZE92ZXJOb2RlLCBuZXdPdmVyTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdmVyTm9kZSA9IG5ld092ZXJOb2RlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcHV0ZXJEaXN0YW5jZVRvSW5pdGlhbENvb3JkcyhldmVudDogRXZlbnRUeXBlKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgY29uc3QgZHggPSB0aGlzLmluaXRpYWxDb29yZHNbMF0gLSB4O1xuICAgICAgICBjb25zdCBkeSA9IHRoaXMuaW5pdGlhbENvb3Jkc1sxXSAtIHk7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlQ29vcmRzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ05vZGUuc3R5bGUubGVmdCA9IGAke3gudG9GaXhlZCgpfXB4YDtcbiAgICAgICAgdGhpcy5kcmFnTm9kZS5zdHlsZS50b3AgPSBgJHt5LnRvRml4ZWQoKX1weGA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kT3Zlck5vZGUoKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY29kZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvZGVcIik7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZ2V0V2Fsa2VyRmlsdGVyKCk7XG4gICAgICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoY29kZU5vZGUsIE5vZGVGaWx0ZXIuU0hPV19FTEVNRU5ULCBmaWx0ZXIpO1xuICAgICAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkgIT09IG51bGwpO1xuICAgICAgICByZXR1cm4gd2Fsa2VyLmN1cnJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2Fsa2VyRmlsdGVyKCkge1xuICAgICAgICBjb25zdCBWQUxJRF9DTEFTU0VTID0gWydmcmFjdC10b2tlbi1zcGFuJywgJ2ZyYWN0LXN0YXZlcycsICd0b2tlbnMnXTtcbiAgICAgICAgY29uc3QgZHJhZ1JlY3QgPSB0aGlzLmRyYWdOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2NlcHROb2RlKG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJhZ1JlY3QucmlnaHQgPCByZWN0LmxlZnRcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QubGVmdCA+IHJlY3QucmlnaHRcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QuYm90dG9tIDwgcmVjdC50b3BcbiAgICAgICAgICAgICAgICAgICAgfHwgZHJhZ1JlY3QudG9wID4gcmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIVZBTElEX0NMQVNTRVMuc29tZShjID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGMpKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfU0tJUDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZUZpbHRlci5GSUxURVJfQUNDRVBUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29vcmRzKGV2ZW50OiBFdmVudFR5cGUpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5fZ2V0Q29vcmRzKGV2ZW50KTtcbiAgICAgICAgY29uc3QgbnggPSB4IC0gdGhpcy5kcmFnTm9kZS5jbGllbnRXaWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IG55ID0geSAtIHRoaXMuZHJhZ05vZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gW254LCBueV07XG4gICAgfVxuXG59OyIsImV4cG9ydCBjbGFzcyBWaWV3PEhUTUxUeXBlIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4ge1xuICAgIHByb3RlY3RlZCBub2RlOiBIVE1MVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxUeXBlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihwYXJhbXM6IHtcbiAgICAgICAgbmFtZTogSztcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICAgICAgICB0ZXh0Pzogc3RyaW5nO1xuICAgICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgICBvbmNsaWNrPzogKE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gICAgICAgIHJlYWRvbmx5PzogYm9vbGVhbjtcbiAgICB9KTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLm5hbWUpO1xuICAgICAgICBpZiAocGFyYW1zLmNsYXNzZXMpIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi5wYXJhbXMuY2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm9uY2xpY2spIHtcbiAgICAgICAgICAgIG5vZGUub25jbGljayA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXMub25jbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudHlwZSkge1xuICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9IHBhcmFtcy50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgbm9kZS52YWx1ZSA9IHBhcmFtcy50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIG5vZGUucmVhZE9ubHkgPSBwYXJhbXMucmVhZG9ubHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRleHQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IHBhcmFtcy50ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9tYWluXCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gJy4vZGF0YWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlRW1wdHlQcm9qZWN0IH0gZnJvbSBcIi4vbW9kZWxzXCJcblxuaW1wb3J0IFwiQC9zdHlsZS9tYWluLnNjc3NcIjtcbmltcG9ydCB7IGRlY29kZVByb2plY3RGcm9tVXJsUGFyYW1zIH0gZnJvbSBcIi4vdXJsUGFyYW1zXCI7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBldmVudCA9PiB7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgaWYgKHBhcmFtcy5nZXQoXCJ6XCIpID09PSBcInpcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZGVjb2RlUHJvamVjdEZyb21VcmxQYXJhbXMocGFyYW1zKTtcbiAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcihkYXRhYmFzZSwgcHJvamVjdCk7XG4gICAgICAgIGNvbnRyb2xsZXIucmVuZGVyKCk7XG5cbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhYmFzZS5nZXQoXCJfX3RlbXBfX1wiLCBwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgTWFpbkNvbnRyb2xsZXIoZGF0YWJhc2UsIHByb2plY3QgfHwgY3JlYXRlRW1wdHlQcm9qZWN0KCkpO1xuICAgICAgICAgICAgY29udHJvbGxlci5yZW5kZXIoKTtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBNYWluQ29udHJvbGxlcihkYXRhYmFzZSwgY3JlYXRlRW1wdHlQcm9qZWN0KCkpO1xuICAgICAgICAgICAgY29udHJvbGxlci5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=