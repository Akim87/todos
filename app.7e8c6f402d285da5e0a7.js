/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/styles.css":
/*!************************!*\
  !*** ./css/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/styles.css?");

/***/ }),

/***/ "./js/actionsUI.js":
/*!*************************!*\
  !*** ./js/actionsUI.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ActionsUI = /*#__PURE__*/function () {\n  function ActionsUI() {\n    _classCallCheck(this, ActionsUI);\n\n    this.container = document.querySelector(\".js-actions\");\n  }\n\n  _createClass(ActionsUI, [{\n    key: \"addActionFormToView\",\n    value: function addActionFormToView(type) {\n      var template = type == \"add\" ? ActionsUI.getAddTodoFormTemplate() : ActionsUI.getSearchTodoTemplate();\n      this.container.innerHTML = template;\n    }\n  }, {\n    key: \"removeActionFormFromView\",\n    value: function removeActionFormFromView() {\n      this.container.innerHTML = \"\";\n    }\n  }], [{\n    key: \"getAddTodoFormTemplate\",\n    value: function getAddTodoFormTemplate() {\n      return \"<form class=\\\"add-todo d-flex flex-column js-addTodoForm animate__animated animate__zoomIn\\\">\\n              <label for=\\\"todo-title\\\" class=\\\"input-holder__label\\\">Title</label>\\n              <div class=\\\"add-todo__field input-holder d-flex flex-column\\\">\\n                <input type=\\\"text\\\" name=\\\"title\\\" class=\\\"input\\\"/>\\n                <button class=\\\"clear-button js-clearInputButton\\\">&#x2716;</button>\\n              </div>\\n              <label for=\\\"todo-description\\\" class=\\\"input-holder__label\\\">Description</label>\\n              <div class=\\\"add-todo__field input-holder d-flex flex-column\\\">\\n                <input type=\\\"text\\\" name=\\\"description\\\" class=\\\"input\\\"/>\\n                <button class=\\\"clear-button js-clearInputButton\\\">&#x2716;</button>\\n              </div>\\n              <button class=\\\"button button--l add-todo__button js-addTodoButton\\\" disabled>Add</button>\\n              <button class=\\\"close-button js-closeFormButton\\\">&#x2716;</button>\\n            </form>\";\n    }\n  }, {\n    key: \"getSearchTodoTemplate\",\n    value: function getSearchTodoTemplate() {\n      return \"<form class=\\\"search-todo d-flex flex-column js-searchTodoForm animate__animated animate__zoomIn\\\">\\n              <div class=\\\"input-holder\\\">\\n                <input type=\\\"text\\\" name=\\\"search\\\" placeholder=\\\"Search by title\\\" class=\\\"input search-todo__input js-searchTodoInput\\\"/>\\n                <button class=\\\"clear-button js-clearInputButton\\\">&#x2716;</button>\\n              </div>\\n              <button class=\\\"button button--l search-todo__button js-searchTodoButton\\\" disabled>Search</button>\\n              <button class=\\\"close-button js-closeFormButton\\\">&#x2716;</button>\\n            </form>\";\n    }\n  }]);\n\n  return ActionsUI;\n}();\n\nvar actionsUI = new ActionsUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionsUI);\n\n//# sourceURL=webpack:///./js/actionsUI.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./js/store.js\");\n/* harmony import */ var _actionsUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actionsUI */ \"./js/actionsUI.js\");\n/* harmony import */ var _todosUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todosUI */ \"./js/todosUI.js\");\n/* harmony import */ var _loaderUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaderUI */ \"./js/loaderUI.js\");\n/* harmony import */ var _notificationUI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notificationUI */ \"./js/notificationUI.js\");\n\n\n\n\n\n\n\nfunction renderTodos() {\n  _loaderUI__WEBPACK_IMPORTED_MODULE_4__[\"default\"].setLoader(_todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].container);\n  setTimeout(function () {\n    _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todos.length != 0 ? _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodosToView(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todos) : _notificationUI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].setNotification(_todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].container);\n  }, 2000);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  renderTodos();\n  document.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    var todoIndex = _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todos.findIndex(function (todo) {\n      return todo.id == e.target.dataset.id;\n    });\n    var todo = _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todos[todoIndex];\n    var todoHTML = e.target.parentNode.parentNode;\n\n    if (e.target.classList.contains(\"js-openAddTodoFormButton\")) {\n      _actionsUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addActionFormToView(\"add\");\n      var addTodoForm = document.querySelector(\".js-addTodoForm\");\n      var addTodoButton = document.querySelector(\".js-addTodoButton\");\n      addTodoForm.addEventListener(\"input\", function () {\n        addTodoForm.title.value.length > 2 && addTodoForm.description.value.length > 2 ? addTodoButton.removeAttribute(\"disabled\") : addTodoButton.setAttribute(\"disabled\", \"\");\n      });\n    }\n\n    if (e.target.classList.contains(\"js-openSearchTodoFormButton\")) {\n      _actionsUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addActionFormToView(\"search\");\n      var searchInput = document.querySelector(\".js-searchTodoInput\");\n      var searchButton = document.querySelector(\".js-searchTodoButton\");\n      searchInput.addEventListener(\"input\", function () {\n        searchInput.value.length > 2 ? searchButton.removeAttribute(\"disabled\") : searchButton.setAttribute(\"disabled\", \"\");\n      });\n    }\n\n    if (e.target.classList.contains(\"js-closeFormButton\")) {\n      _actionsUI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeActionFormFromView(\"\");\n    }\n\n    if (e.target.classList.contains(\"js-clearInputButton\")) {\n      e.target.previousElementSibling.value = \"\";\n      todoHTML.querySelector(\".button\").setAttribute(\"disabled\", \"\");\n    }\n\n    if (e.target.classList.contains(\"js-addTodoButton\")) {\n      var form = todoHTML.querySelector(\".js-addTodoForm\");\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodo(form.title.value, form.description.value);\n      form.title.value = \"\";\n      form.description.value = \"\";\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-searchTodoButton\")) {\n      var _form = todoHTML.querySelector(\".js-searchTodoForm\");\n\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodosToView(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSearchedTodo(_form.search.value));\n      _form.search.value = \"\";\n      _notificationUI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].setShowAllButton(_todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].container);\n    }\n\n    if (e.target.classList.contains(\"js-todosControlsButton\")) {\n      e.target.querySelector(\".js-dropdown\").classList.toggle(\"dropdown--active\");\n      e.target.addEventListener(\"mouseleave\", function (e) {\n        if (e.target.classList.contains(\"js-todosControlsButton\")) {\n          e.target.querySelector(\".js-dropdown\").classList.remove(\"dropdown--active\");\n        }\n      });\n    }\n\n    if (e.target.classList.contains(\"js-bulkHold\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulkHoldTodos();\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-bulkMarkAsDone\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulkMarkAsDone();\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-bulkDelete\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bulkDelete();\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-sortByTitle\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortByTitle();\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-sortByStatus\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortByStatus();\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-deleteTodoButton\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTodo(todoIndex);\n      renderTodos();\n    }\n\n    if (e.target.classList.contains(\"js-holdTodoButton\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].holdTodo(todoIndex);\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].transformTodo(todo, todoHTML);\n    }\n\n    if (e.target.classList.contains(\"js-doneTodoButton\")) {\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].doneTodo(todoIndex);\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].transformTodo(todo, todoHTML);\n    }\n\n    if (e.target.classList.contains(\"js-editTodoButton\")) {\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].openTodoEditor(todo, todoHTML);\n      var editorForm = todoHTML.querySelector(\".js-todoEditorForm\");\n      var saveEditButton = todoHTML.querySelector(\".js-saveEditTodoButton\");\n      todoHTML.addEventListener(\"input\", function () {\n        editorForm.title.value.length > 2 && editorForm.description.value.length > 2 ? saveEditButton.removeAttribute(\"disabled\") : saveEditButton.setAttribute(\"disabled\", \"\");\n      });\n    }\n\n    if (e.target.classList.contains(\"js-saveEditTodoButton\")) {\n      var _form2 = todoHTML;\n      _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editTodo(todoIndex, _form2.title.value, _form2.description.value);\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].transformTodo(todo, _form2.parentNode);\n    }\n\n    if (e.target.classList.contains(\"js-cancelEditTodoButton\")) {\n      _todosUI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].transformTodo(todo, todoHTML.parentNode);\n    }\n\n    if (e.target.classList.contains(\"js-showAllButton\")) {\n      renderTodos();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/loaderUI.js":
/*!************************!*\
  !*** ./js/loaderUI.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LoaderUI = /*#__PURE__*/function () {\n  function LoaderUI() {\n    _classCallCheck(this, LoaderUI);\n  }\n\n  _createClass(LoaderUI, [{\n    key: \"setLoader\",\n    value: function setLoader(container) {\n      container.innerHTML = LoaderUI.getTemplate();\n    }\n  }], [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      return \"<div class=\\\"cssload-loader\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dots\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cssload-dot\\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\";\n    }\n  }]);\n\n  return LoaderUI;\n}();\n\nvar loaderUI = new LoaderUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (loaderUI);\n\n//# sourceURL=webpack:///./js/loaderUI.js?");

/***/ }),

/***/ "./js/notificationUI.js":
/*!******************************!*\
  !*** ./js/notificationUI.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar NotificationUI = /*#__PURE__*/function () {\n  function NotificationUI() {\n    _classCallCheck(this, NotificationUI);\n  }\n\n  _createClass(NotificationUI, [{\n    key: \"setNotification\",\n    value: function setNotification(container) {\n      container.innerHTML = NotificationUI.getNotificationTemplate();\n    }\n  }, {\n    key: \"setShowAllButton\",\n    value: function setShowAllButton(container) {\n      console.log(container);\n      container.insertAdjacentHTML('beforeend', NotificationUI.getsShowAllButtonTemplate());\n    }\n  }], [{\n    key: \"getNotificationTemplate\",\n    value: function getNotificationTemplate() {\n      return \"<h1 class='notification-title animate__animated animate__flipInX' >You don't have any todos!</h1>\";\n    }\n  }, {\n    key: \"getsShowAllButtonTemplate\",\n    value: function getsShowAllButtonTemplate() {\n      return \"<button class='button button--l js-showAllButton animate__animated animate__flipInX' >Show all</button>\";\n    }\n  }]);\n\n  return NotificationUI;\n}();\n\n;\nvar notificationUI = new NotificationUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (notificationUI);\n\n//# sourceURL=webpack:///./js/notificationUI.js?");

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todosUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todosUI */ \"./js/todosUI.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar TodosStore = /*#__PURE__*/function () {\n  function TodosStore() {\n    _classCallCheck(this, TodosStore);\n\n    this.todos = [{\n      id: \"f5d44a64\",\n      title: \"Почесать кота\",\n      description: \"Почесать за ухом, потом покормить и уложить спать\",\n      status: \"pending\"\n    }, {\n      id: \"f7d47a64\",\n      title: \"Выгулять пёселя\",\n      description: \"Покидать ему мячик, покупать, покормить\",\n      status: \"hold\"\n    }, {\n      id: \"f5d47a54\",\n      title: \"Сходить в магазин\",\n      description: \"Купить корм для кота и пёселя\",\n      status: \"done\"\n    }];\n  }\n\n  _createClass(TodosStore, [{\n    key: \"addTodo\",\n    value: function addTodo(title, description) {\n      var newTodo = {\n        id: \"f\".concat((~~(Math.random() * 1e8)).toString(16)),\n        title: title,\n        description: description,\n        status: \"pending\"\n      };\n      this.todos.unshift(newTodo);\n    }\n  }, {\n    key: \"deleteTodo\",\n    value: function deleteTodo(todoIndex) {\n      this.todos.splice(todoIndex, 1);\n    }\n  }, {\n    key: \"holdTodo\",\n    value: function holdTodo(todoIndex) {\n      this.todos[todoIndex].status == \"hold\" ? this.todos[todoIndex].status = \"pending\" : this.todos[todoIndex].status = \"hold\";\n    }\n  }, {\n    key: \"doneTodo\",\n    value: function doneTodo(todoIndex) {\n      this.todos[todoIndex].status = \"done\";\n    }\n  }, {\n    key: \"editTodo\",\n    value: function editTodo(todoIndex, title, description) {\n      this.todos[todoIndex].title = title;\n      this.todos[todoIndex].description = description;\n    }\n  }, {\n    key: \"getSearchedTodo\",\n    value: function getSearchedTodo(searchValue) {\n      return this.todos.filter(function (todo) {\n        return todo.title.toLowerCase().includes(searchValue.toLowerCase());\n      });\n    }\n  }, {\n    key: \"bulkHoldTodos\",\n    value: function bulkHoldTodos() {\n      this.todos.find(function (todo) {\n        return todo.status == \"pending\";\n      }) ? this.todos.forEach(function (todo) {\n        return todo.status == \"pending\" ? todo.status = \"hold\" : \"\";\n      }) : this.todos.forEach(function (todo) {\n        return todo.status == \"hold\" ? todo.status = \"pending\" : \"\";\n      });\n    }\n  }, {\n    key: \"bulkMarkAsDone\",\n    value: function bulkMarkAsDone() {\n      this.todos.forEach(function (todo) {\n        return todo.status == \"pending\" ? todo.status = \"done\" : \"\";\n      });\n    }\n  }, {\n    key: \"bulkDelete\",\n    value: function bulkDelete() {\n      this.todos = [];\n    }\n  }, {\n    key: \"sortByTitle\",\n    value: function sortByTitle() {\n      this.todos.sort(function (todo, nextTodo) {\n        return todo.title.toLowerCase() > nextTodo.title.toLowerCase() ? 1 : -1;\n      });\n    }\n  }, {\n    key: \"sortByStatus\",\n    value: function sortByStatus() {\n      var sortedByTitle = this.todos.sort(function (todo, nextTodo) {\n        return todo.title.toLowerCase() > nextTodo.title.toLowerCase() ? 1 : -1;\n      });\n      var pending = [];\n      var hold = [];\n      var done = [];\n      sortedByTitle.forEach(function (todo) {\n        if (todo.status == \"pending\") pending.push(todo);\n        if (todo.status == \"hold\") hold.push(todo);\n        if (todo.status == \"done\") done.push(todo);\n      });\n      this.todos = pending.concat(hold, done);\n    }\n  }]);\n\n  return TodosStore;\n}();\n\nvar todosStore = new TodosStore();\n/* harmony default export */ __webpack_exports__[\"default\"] = (todosStore);\n\n//# sourceURL=webpack:///./js/store.js?");

/***/ }),

/***/ "./js/todosUI.js":
/*!***********************!*\
  !*** ./js/todosUI.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TodosUI = /*#__PURE__*/function () {\n  function TodosUI() {\n    _classCallCheck(this, TodosUI);\n\n    this.container = document.querySelector(\".js-todosBox\");\n  }\n\n  _createClass(TodosUI, [{\n    key: \"addTodosToView\",\n    value: function addTodosToView(list) {\n      var template = list.reduce(function (init, item) {\n        return init += TodosUI.getTodoTemplate(item);\n      }, \"\");\n      this.container.innerHTML = template;\n    }\n  }, {\n    key: \"transformTodo\",\n    value: function transformTodo(todo, todoHTML) {\n      todoHTML.insertAdjacentHTML(\"beforebegin\", TodosUI.getTodoTemplate(todo));\n      todoHTML.remove();\n    }\n  }, {\n    key: \"openTodoEditor\",\n    value: function openTodoEditor(todo, todoHTML) {\n      todoHTML.innerHTML = TodosUI.getEditorTemplate(todo);\n    }\n  }], [{\n    key: \"getTodoTemplate\",\n    value: function getTodoTemplate(todo) {\n      var status = todo.status;\n      var isHolded = status == 'hold' ? 'disabled' : '';\n      var isDone = status == 'done' ? 'disabled' : '';\n      var id = \"data-id = \\\"\".concat(todo.id, \"\\\"\");\n      return \"<div class=\\\"todo d-flex flex-column animate__animated animate__flipInX\\\">\\n              <div class=\\\"todo__info d-flex flex-column\\\">\\n                <h3 class=\\\"todo__text\\\">\".concat(todo.title, \"</h3>\\n                <span class=\\\"todo__text\\\">\").concat(todo.description, \"</span>\\n                <span class=\\\"todo__status todo__status--\").concat(status, \"\\\">\").concat(status.toUpperCase(), \"</span>\\n              </div>\\n              <div class=\\\"todo__controls d-flex justify-around\\\">\\n                <button class=\\\"button button--s js-editTodoButton\\\" \").concat(id, \" \").concat(isHolded || isDone, \">Edit</button>\\n                <button class=\\\"button button--s js-deleteTodoButton\\\" \").concat(id, \" \").concat(isHolded, \">Delete</button>\\n                <button class=\\\"button button--s js-holdTodoButton\\\" \").concat(id, \" \").concat(isDone, \">\").concat(status == 'hold' ? 'Unhold' : 'Hold', \"</button>\\n                <button class=\\\"button button--s js-doneTodoButton\\\" \").concat(id, \" \").concat(isHolded || isDone, \">Done</button>\\n              </div>\\n            </div>\");\n    }\n  }, {\n    key: \"getEditorTemplate\",\n    value: function getEditorTemplate(todo) {\n      var id = \"data-id = \\\"\".concat(todo.id, \"\\\"\");\n      return \"<form class=\\\"todo__info d-flex flex-column js-todoEditorForm animate__animated animate__flipInX\\\">\\n              <label for=\\\"todo-title\\\" class=\\\"input-holder__label\\\">Title</label>\\n              <div class=\\\"input-holder todo__input-holder\\\">\\n                <input type=\\\"text\\\" name=\\\"title\\\" value=\\\"\".concat(todo.title, \"\\\" class=\\\"input\\\">\\n                <button class=\\\"clear-button js-clearInputButton\\\">&#x2716;</button>\\n              </div>\\n              <label for=\\\"todo-description\\\" class=\\\"input-holder__label\\\">Description</label>\\n              <div class=\\\"input-holder todo__input-holder\\\">\\n                <input type=\\\"text\\\" name=\\\"description\\\" value=\\\"\").concat(todo.description, \"\\\" class=\\\"input\\\">\\n                <button class=\\\"clear-button js-clearInputButton\\\">&#x2716;</button>\\n              </div>\\n              <div class=\\\"todo__controls d-flex justify-around animate__animated animate__flipInX\\\">\\n                <button class=\\\"button button--l js-saveEditTodoButton\\\" \").concat(id, \">Save</button>\\n                <button class=\\\"button button--l js-cancelEditTodoButton\\\"  \").concat(id, \">Cancel</button>\\n              </div>\\n            </form>\\n              \");\n    }\n  }]);\n\n  return TodosUI;\n}();\n\nvar todosUI = new TodosUI();\n/* harmony default export */ __webpack_exports__[\"default\"] = (todosUI);\n\n//# sourceURL=webpack:///./js/todosUI.js?");

/***/ })

/******/ });