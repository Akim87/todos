class TodosUI {
  constructor() {
    this.container = document.querySelector(".js-todosBox");
  }

  addTodosToView(list) {
    const template = list.reduce((acc, todo) => (acc += TodosUI.getTodoTemplate(todo)), "");
    this.container.innerHTML = template;
  }

  transformTodo(todo, todoHTML) {
    todoHTML.insertAdjacentHTML("beforebegin", TodosUI.getTodoTemplate(todo));
    todoHTML.remove();
  }

  static getTodoTemplate(todo) {
    const status = todo.status;
    const isHolded = status == "hold" ? "disabled" : "";
    const isDone = status == "done" ? "disabled" : "";
    const id = `data-id = "${todo.id}"`;

    return `<div class="todo d-flex flex-column js-todo animate__animated animate__flipInX">
              <div class="todo__info d-flex flex-column">
                <h3 class="todo__text">${todo.title}</h3>
                <span class="todo__text">${todo.description}</span>
                <span class="todo__status todo__status--${status}">${status.toUpperCase()}</span>
              </div>
              <div class="todo__controls d-flex justify-around">
                <button class="button button--s js-editTodoButton" ${id} ${isHolded || isDone}>Edit</button>
                <button class="button button--s js-deleteTodoButton" ${id} ${isHolded}>Delete</button>
                <button class="button button--s js-holdTodoButton" ${id} ${isDone}>${status == "hold" ? "Unhold" : "Hold"}</button>
                <button class="button button--s js-doneTodoButton" ${id} ${isHolded || isDone}>Done</button>
              </div>
            </div>`;
  }
}

class TodoEditorUI {
  openEditor(todo, todoHTML) {
    todoHTML.innerHTML = TodoEditorUI.getEditorTemplate(todo);
  }

  static getEditorTemplate(todo) {
    const id = `data-id = "${todo.id}"`;

    return `<form class="todo__info d-flex flex-column js-todoEditorForm animate__animated animate__flipInX">
              <label for="todo-title" class="input-holder__label">Title</label>
              <div class="input-holder todo__input-holder">
                <input type="text" name="title" value="${todo.title}" class="input">
                <button class="clear-button js-clearInputButton">&#x2716;</button>
              </div>
              <label for="todo-description" class="input-holder__label">Description</label>
              <div class="input-holder todo__input-holder">
                <input type="text" name="description" value="${todo.description}" class="input">
                <button class="clear-button js-clearInputButton">&#x2716;</button>
              </div>
              <div class="todo__controls d-flex justify-around animate__animated animate__flipInX">
                <button class="button button--l js-saveEditTodoButton" ${id}>Save</button>
                <button class="button button--l js-cancelEditTodoButton"  ${id}>Cancel</button>
              </div>
            </form>
              `;
  }
}

class AddTodoFormUI {
  constructor() {
    this.container = document.querySelector(".js-actions");
  }

  addFormToView() {
    this.container.innerHTML = AddTodoFormUI.getFormTemplate();
  }

  removeFormFromView() {
    this.container.innerHTML = "";
  }

  static getFormTemplate() {
    return `<form class="add-todo d-flex flex-column js-addTodoForm animate__animated animate__zoomIn">
              <label for="todo-title" class="input-holder__label">Title</label>
              <div class="add-todo__field input-holder d-flex flex-column">
                <input type="text" name="title" class="input"/>
                <button class="clear-button js-clearInputButton">&#x2716;</button>
              </div>
              <label for="todo-description" class="input-holder__label">Description</label>
              <div class="add-todo__field input-holder d-flex flex-column">
                <input type="text" name="description" class="input"/>
                <button class="clear-button js-clearInputButton">&#x2716;</button>
              </div>
              <button class="button button--l add-todo__button js-addTodoButton" disabled>Add</button>
              <button class="close-button js-closeFormButton">&#x2716;</button>
            </form>`;
  }
}

class SearchTodoFormUI {
  constructor() {
    this.container = document.querySelector(".js-actions");
  }

  addFormToView() {
    this.container.innerHTML = SearchTodoFormUI.getFormTemplate();
  }

  removeFormFromView() {
    this.container.innerHTML = "";
  }

  static getFormTemplate() {
    return `<form class="search-todo d-flex flex-column js-searchTodoForm animate__animated animate__zoomIn">
              <div class="input-holder">
                <input type="text" name="search" placeholder="Search by title" class="input search-todo__input js-searchTodoInput"/>
                <button class="clear-button js-clearInputButton">&#x2716;</button>
              </div>
              <button class="button button--l search-todo__button js-searchTodoButton" disabled>Search</button>
              <button class="close-button js-closeFormButton">&#x2716;</button>
            </form>`;
  }
}

class LoaderUI {
  constructor() {
    this.container = document.querySelector(".js-todosBox");
  }

  setLoader() {
    this.container.innerHTML = LoaderUI.getTemplate();
  }

  static getTemplate() {
    return `<div class="cssload-loader">
							<div class="cssload-dots">
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
								<div class="cssload-dot"></div>
							</div>
						</div>`;
  }
}

class NotificationUI {
  constructor() {
    this.container = document.querySelector(".js-todosBox");
  }

  setNotification() {
    this.container.innerHTML = NotificationUI.getNotificationTemplate();
  }

  static getNotificationTemplate() {
    return `<h1 class='notification-title animate__animated animate__flipInX'>You don't have any todos!</h1>`;
  }
}

class ShowAllButtonUI {
  constructor() {
    this.container = document.querySelector(".js-todosBox");
  }

  setShowAllButton() {
    this.container.insertAdjacentHTML("beforeend", ShowAllButtonUI.getsShowAllButtonTemplate());
  }

  static getsShowAllButtonTemplate() {
    return `<button class='button button--l showAll-button js-showAllButton animate__animated animate__flipInX' >Show all</button>`;
  }
}

const todosUI = new TodosUI();
const todoEditorUI = new TodoEditorUI();
const addTodoFormUI = new AddTodoFormUI();
const searchTodoFormUI = new SearchTodoFormUI();
const loaderUI = new LoaderUI();
const notificationUI = new NotificationUI();
const showAllButtonUI = new ShowAllButtonUI();

export {
  todosUI,
  todoEditorUI,
  addTodoFormUI,
  searchTodoFormUI,
  loaderUI,
  notificationUI,
  showAllButtonUI,
};
