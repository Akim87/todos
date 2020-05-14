class TodosStore {
  constructor() {
    this.todos = [
      {
        id: "f5d44a64",
        title: "Почесать кота",
        description: "Почесать за ухом, потом покормить и уложить спать",
        status: "pending",
      },
      {
        id: "f7d47a64",
        title: "Выгулять пёселя",
        description: "Покидать ему мячик, покупать, покормить",
        status: "hold",
      },
      {
        id: "f5d47a54",
        title: "Сходить в магазин",
        description: "Купить корм для кота и пёселя",
        status: "done",
      },
    ];
  }

  addTodo(title, description) {
    const newTodo = {
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
      title,
      description,
      status: "pending",
    };
    this.todos.unshift(newTodo);
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }

  holdTodo(todoIndex) {
    this.todos[todoIndex].status == "hold"
      ? (this.todos[todoIndex].status = "pending")
      : (this.todos[todoIndex].status = "hold");
  }

  doneTodo(todoIndex) {
    this.todos[todoIndex].status = "done";
  }

  editTodo(todoIndex, title, description) {
    this.todos[todoIndex].title = title;
    this.todos[todoIndex].description = description;
  }

  getSearchedTodo(searchValue) {
    return this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  bulkHoldTodos() {
    this.todos.find((todo) => todo.status == "pending")
      ? this.todos.forEach((todo) => {
          if (todo.status == "pending") todo.status = "hold";
        })
      : this.todos.forEach((todo) => {
          if (todo.status == "hold") todo.status = "pending";
        });
  }

  bulkMarkAsDone() {
    this.todos.forEach((todo) => {
      if (todo.status == "pending") todo.status = "done";
    });
  }

  bulkDelete() {
    this.todos = [];
  }

  sortByTitle() {
    this.todos.sort((todo, nextTodo) =>
      todo.title.toLowerCase() > nextTodo.title.toLowerCase() ? 1 : -1
    );
  }

  sortByStatus() {
    const sortedByTitle = this.todos.sort((todo, nextTodo) =>
      todo.title.toLowerCase() > nextTodo.title.toLowerCase() ? 1 : -1
    );
    const pending = [], hold = [], done = [];

    sortedByTitle.forEach((todo) => {
      if (todo.status == "pending") pending.push(todo);
      if (todo.status == "hold") hold.push(todo);
      if (todo.status == "done") done.push(todo);
    });
    this.todos = [...pending, ...hold, ...done];
  }
}

const todosStore = new TodosStore();

export default todosStore;
