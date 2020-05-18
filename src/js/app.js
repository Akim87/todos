import "../css/styles.css";
import todosStore from "./todosStore";
import {
  todosUI,
  todoEditorUI,
  addTodoFormUI,
  searchTodoFormUI,
  loaderUI,
  notificationUI,
} from "./temlatesUI";
import renderer from "./renderer";

//Elements
const ACTIONS_CONTROLS = document.querySelector(".js-actionsControls");
const TODOS_BULK_ACTIONS_CONTROLS = document.querySelector(".js-todosBulkActionsControls");
const ACTION_FORMS_CONTAINER = document.querySelector(".js-actions");
const TODOS_CONTAINER = document.querySelector(".js-todos-container");

//Templates
const TODO_LIST_TEMPLATE = todosUI.getTemplateOfList;
const TODO_EDITOR_TEMPLATE = todoEditorUI.getTemplate;
const ADD_TODO_FORM_TEMPLATE = addTodoFormUI.getTemplate();
const SEARCH_TODO_FORM_TEMPLATE = searchTodoFormUI.getTemplate();
const LOADER = loaderUI.getTemplate();
const NO_TODOS_NOTIFICATION = notificationUI.getTemplate();

init();

function setStaticListeners() {
  ACTIONS_CONTROLS.addEventListener("click", onActionsContolsButtonClick);
  TODOS_BULK_ACTIONS_CONTROLS.addEventListener("click", onBulkActionsButtonClick);
  document.addEventListener("click", onClearInputButtonClick);
}

function setDynamicListeners() {
  TODOS_CONTAINER.addEventListener("click", onTodoControlButtonClick);
}

function onActionsContolsButtonClick(e) {
  if (e.target.matches(".js-openAddTodoFormButton")) {
    initAddTodoForm();
  }
  if (e.target.matches(".js-openSearchTodoFormButton")) {
    initSearchTodoForm();
  }
}

function initAddTodoForm() {
  renderer.addToView(ADD_TODO_FORM_TEMPLATE, ACTION_FORMS_CONTAINER);
  ACTION_FORMS_CONTAINER.addEventListener("click", onAddTodoFormButtonClick);
}

function initSearchTodoForm() {
  renderer.addToView(SEARCH_TODO_FORM_TEMPLATE, ACTION_FORMS_CONTAINER);
  ACTION_FORMS_CONTAINER.addEventListener("click", onSearchTodoFormButtonClick);
}

function onAddTodoFormButtonClick(e) {
  e.preventDefault();
  if (e.target.matches(".js-addTodoButton")) {
    const FORM = e.target.closest(".js-addTodoForm");
    todosStore.addTodo(FORM.title.value, FORM.description.value);
    renderTodos();
  }
  if (e.target.matches(".js-closeFormButton")) {
    renderer.removeFromview(ACTION_FORMS_CONTAINER);
  }
}

function onSearchTodoFormButtonClick(e) {
  e.preventDefault();
  if (e.target.matches(".js-searchTodoButton")) {
    const form = e.target.closest(".js-searchTodoForm");
    renderTodos(todosStore.getSearchedTodo(form.search.value));
  }
  if (e.target.matches(".js-closeFormButton")) {
    renderer.removeFromview(ACTION_FORMS_CONTAINER);
  }
}

function onBulkActionsButtonClick(e) {
  e.preventDefault();
  if (e.target.matches(".js-todosControlsButton")) {
    initDropdown(e);
  }
  if (e.target.matches(".js-bulkHold")) {
    todosStore.setStatusToAll("hold");
    renderTodos();
  }
  if (e.target.matches(".js-bulkMarkAsDone")) {
    todosStore.setStatusToAll("done");
    renderTodos();
  }
  if (e.target.matches(".js-bulkDelete")) {
    todosStore.deleteAll();
    renderTodos();
  }
  if (e.target.matches(".js-sortByTitle")) {
    todosStore.sortByTitle();
    renderTodos();
  }
  if (e.target.matches(".js-sortByStatus")) {
    todosStore.sortByStatus();
    renderTodos();
  }
}

function initDropdown(e) {
  const DROPDOWN = e.target.querySelector(".js-dropdown");
  DROPDOWN.classList.toggle("dropdown--active");
  e.target.addEventListener("mouseleave", removeDropdown);
}

function removeDropdown(e) {
  const DROPDOWN = e.target.querySelector(".js-dropdown");
  if (e.target.matches(".js-todosControlsButton")) {
    DROPDOWN.classList.remove("dropdown--active");
  }
}

function onTodoControlButtonClick(e) {
  const todoIndex = todosStore.todos.findIndex((todo) => todo.id == e.target.dataset.id);
  const todo = todosStore.todos[todoIndex];
  const todoHTML = e.target.closest('.js-todo');

  if (e.target.matches(".js-deleteTodoButton")) {
    todosStore.deleteTodo(todoIndex);
    renderTodos();
  }
  if (e.target.matches(".js-holdTodoButton")) {
    todosStore.setStatus(todo, 'hold');
    renderTodos();
  }
  if (e.target.matches(".js-doneTodoButton")) {
    todosStore.setStatus(todo, 'done');
    renderTodos();
  }
  if (e.target.matches(".js-editTodoButton")) {
    initTodoEditor(todo, todoHTML);
  }
  if (e.target.matches(".js-saveEditTodoButton")) {
    const FORM = e.target.closest(".js-todoEditorForm");
    todosStore.editTodo(todoIndex, FORM.title.value, FORM.description.value);
    renderTodos();
  }
  if (e.target.matches(".js-cancelEditTodoButton")) {
    renderTodos();
  }
}

function initTodoEditor(todo, todoHTML) {
  renderer.addToView(TODO_EDITOR_TEMPLATE(todo), todoHTML)
}

function onClearInputButtonClick(e) {
  e.preventDefault();
  if (e.target.matches(".js-clearInputButton")) {
    e.target.previousElementSibling.value = "";
  }
}

function renderTodos(todosList = todosStore.todos) {
  renderer.addToView(LOADER, TODOS_CONTAINER);
  setTimeout(() => {
    !!todosStore.todos.length
      ? renderer.addToView(TODO_LIST_TEMPLATE(todosList), TODOS_CONTAINER)
      : renderer.addToView(NO_TODOS_NOTIFICATION, TODOS_CONTAINER);
  }, 2000);
}

function init() {
  setStaticListeners();
  renderTodos();
  setDynamicListeners();
}
