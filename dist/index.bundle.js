"use strict";
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const clear = document.querySelector('.clear-completed');

(0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)();
(0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)();
(0,_modules_todos_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)();

clear.addEventListener('click', _modules_todos_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleted);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo)
/* harmony export */ });
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// selectors
const todoItems = document.querySelector('.todo-items');
const input = document.getElementById('input');
const form = document.querySelector('.form-container');

// Functions
const getTodos = () => {
  if (localStorage.getItem('todos')) {
    todos.map((todo) => {
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('id', todo.index);
      const todoElMarkup = `
                <div class="content-container">
                <input type="checkbox" id="${todo.description}-${todo.index}" name="tasks" ${
  todo.completed ? 'checked' : ''
}>
                <p ${!todo.completed ? 'contenteditable' : ''}>${todo.description}</p>
                </div>
                <i class="fa fa-ellipsis-v ellipse" aria-hidden="true" id="${todo.index}"></i>
              `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
    });
  }
};

const addTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      const todo = {
        index: todos.length + 1,
        description: input.value,
        completed: false,
      };
      todos.push(todo);
      window.location.reload();
      localStorage.setItem('todos', JSON.stringify(todos));
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('id', todo.index);
      const todoElMarkup = `
              <div class="content-container">
              <input type="checkbox" id="${todo.description}-${todo.id}" name="tasks" ${
  todo.completed ? 'checked' : ''
}>
              <p ${!todo.completed ? 'contenteditable' : ''}>${todo.description}</p>
              </div>
              <i class="fa fa-ellipsis-v ellipse" aria-hidden="true" id="${todo.index}"></i>
            `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
      input.value = '';
    }
  });
};

const updateTodo = (todoId, el) => {
  const todo = todos.find((todo) => todo.index === parseInt(todoId, 10));
  if (el.hasAttribute('contenteditable')) {
    todo.description = el.textContent;
  } else {
    const p = el.nextElementSibling;
    todo.completed = !todo.completed;
    if (todo.completed) {
      p.removeAttribute('contenteditable');
      el.setAttribute('checked', '');
    } else {
      el.removeAttribute('checked');
      p.setAttribute('contenteditable', '');
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos));
};

const deleteTodo = () => {
  todoItems.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('fa-trash')
      || e.target.parentElement.classList.contains('fa-trash')
    ) {
      const todoId = e.target.closest('li').id;
      todos = todos.filter((todo) => todo.index !== parseInt(todoId, 10));
      todos = todos.map((todo, index) => {
        todo.index = (index + 1);
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      window.location.reload();
    }
  });
};

const clearCompleted = (e) => {
  e.preventDefault();
  todos = todos.filter((todo) => todo.completed !== true);
  todos = todos.map((td, index) => {
    td.index = (index + 1);
    return td;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

// Listeners
todoItems.addEventListener('click', (e) => {
  const lastEl = e.target.parentNode.parentNode.lastElementChild;
  const todoId = e.target.closest('li').id;
  if (lastEl.classList.contains('fa-ellipsis-v')) {
    lastEl.classList.remove('fa-ellipsis-v');
    lastEl.classList.add('fa-trash');
  }
  updateTodo(todoId, e.target);
});

todoItems.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f4f2f3;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.container {\r\n  border: 1px solid #9497ae;\r\n  box-shadow: 0.05rem 0.05rem 2rem;\r\n  width: 40rem;\r\n  height: auto;\r\n  margin: 7rem auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: auto;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #c4c6d8;\r\n  background-color: white;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  font-family: Quintessential, sans-serif;\r\n  font-size: 1.8rem;\r\n  color: black;\r\n}\r\n\r\n.content-container > p {\r\n  outline: none;\r\n  width: 90%;\r\n}\r\n\r\n.list-background {\r\n  background-color: #c4c6d8;\r\n}\r\n\r\n.trash,\r\n.fa-trash {\r\n  color: rgb(233, 47, 47);\r\n  cursor: pointer;\r\n}\r\n\r\n.refresh {\r\n  align-self: center;\r\n  color: #c4c6d8;\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-container {\r\n  background-color: white;\r\n  border-bottom: 1px solid #c4c6d8;\r\n}\r\n\r\ninput {\r\n  font-size: 1.5rem;\r\n  padding: 0.5rem;\r\n  font-family: Quintessential, sans-serif;\r\n  border: none;\r\n  outline: none;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todo-items {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-family: Quintessential, sans-serif;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #c4c6d8;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.todo:hover {\r\n  background-color: #c4c6d8;\r\n}\r\n\r\n.content-container {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.1rem;\r\n  width: 100%;\r\n}\r\n\r\n.clear-completed {\r\n  text-align: center;\r\n  padding: 1rem;\r\n  color: #9497ae;\r\n  font-family: Quintessential, sans-serif;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.complete {\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-completed :hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.content-container [type=\"checkbox\"]:checked ~ p {\r\n  text-decoration: line-through;\r\n  opacity: 0.5;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 11 */
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

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);