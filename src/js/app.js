import "../css/styles.css";
import todosStore from "./todosStore";
import {
  todosUI,
  todoEditorUI,
  addTodoFormUI,
  searchTodoFormUI,
  loaderUI,
  notificationUI,
  showAllButtonUI,
} from "./componentsUI";


document.addEventListener("DOMContentLoaded", (e) => {

  renderTodos();

  document.addEventListener("click", (e) => {
    e.preventDefault();

    const todoIndex = todosStore.todos.findIndex((todo) => todo.id == e.target.dataset.id);
    const todo = todosStore.todos[todoIndex];
    const todoHTML = e.target.closest('.js-todo');

    if (e.target.matches(".js-openAddTodoFormButton")) {
      addTodoFormUI.addFormToView();

      const addTodoForm = document.querySelector(".js-addTodoForm");
      const addTodoButton = document.querySelector(".js-addTodoButton");

      addTodoForm.addEventListener("input", () => {
        addTodoForm.title.value.length > 2 && addTodoForm.description.value.length > 2
          ? addTodoButton.removeAttribute("disabled")
          : addTodoButton.setAttribute("disabled", "");
      });
    }

    if (e.target.matches(".js-openSearchTodoFormButton")) {
      searchTodoFormUI.addFormToView();

      const searchInput = document.querySelector(".js-searchTodoInput");
      const searchButton = document.querySelector(".js-searchTodoButton");

      searchInput.addEventListener("input", () => {
        searchInput.value.length > 2
          ? searchButton.removeAttribute("disabled")
          : searchButton.setAttribute("disabled", "");
      });
    }

    if (e.target.matches(".js-closeFormButton")) {
      addTodoFormUI.removeFormFromView();
    }

    if (e.target.matches(".js-clearInputButton")) {
      e.target.previousElementSibling.value = "";
      const closestButton = e.target.closest('form').querySelector(".button")
      closestButton.setAttribute("disabled", "");
    }

    if (e.target.matches(".js-addTodoButton")) {
      const form = e.target.closest(".js-addTodoForm");

      todosStore.addTodo(form.title.value, form.description.value);
      addTodoFormUI.removeFormFromView();
      renderTodos();
    }

    if (e.target.matches(".js-searchTodoButton")) {
      const form = e.target.closest(".js-searchTodoForm");

      todosUI.addTodosToView(todosStore.getSearchedTodo(form.search.value));
      searchTodoFormUI.removeFormFromView();
      showAllButtonUI.setShowAllButton();
    }

    if (e.target.matches(".js-todosControlsButton")) {
      const dropDown = e.target.querySelector(".js-dropdown")

      dropDown.classList.toggle("dropdown--active");

      e.target.addEventListener("mouseleave", (e) => {
        if (e.target.matches(".js-todosControlsButton")) {
          dropDown.classList.remove("dropdown--active");
        }
      });
    }

    if (e.target.matches(".js-bulkHold")) {
      todosStore.bulkHoldTodos();
      renderTodos();
    }

    if (e.target.matches(".js-bulkMarkAsDone")) {
      todosStore.bulkMarkAsDone();
      renderTodos();
    }

    if (e.target.matches(".js-bulkDelete")) {
      todosStore.bulkDelete();
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

    if (e.target.matches(".js-deleteTodoButton")) {
      todosStore.deleteTodo(todoIndex);
      renderTodos();
    }

    if (e.target.matches(".js-holdTodoButton")) {
      todosStore.holdTodo(todoIndex);
      todosUI.transformTodo(todo, todoHTML);
    }

    if (e.target.matches(".js-doneTodoButton")) {
      todosStore.doneTodo(todoIndex);
      todosUI.transformTodo(todo, todoHTML);
    }

    if (e.target.matches(".js-editTodoButton")) {
      todoEditorUI.openEditor(todo, todoHTML);

      const editorForm = todoHTML.querySelector(".js-todoEditorForm");
      const saveEditButton = todoHTML.querySelector(".js-saveEditTodoButton");

      editorForm.addEventListener("input", () => {
        editorForm.title.value.length > 2 && editorForm.description.value.length > 2
          ? saveEditButton.removeAttribute("disabled")
          : saveEditButton.setAttribute("disabled", "");
      });
    }

    if (e.target.matches(".js-saveEditTodoButton")) {
      const form = e.target.closest(".js-todoEditorForm");

      todosStore.editTodo(todoIndex, form.title.value, form.description.value);
      todosUI.transformTodo(todo, todoHTML);
    }

    if (e.target.matches(".js-cancelEditTodoButton")) {
      todosUI.transformTodo(todo, todoHTML);
    }

    if (e.target.matches(".js-showAllButton")) {
      renderTodos();
    }
  });

  function renderTodos() {
    loaderUI.setLoader();
    setTimeout(() => {
      todosStore.todos.length != 0
        ? todosUI.addTodosToView(todosStore.todos)
        : notificationUI.setNotification();
    }, 2000);
  }
});
