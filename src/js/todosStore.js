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

  editTodo(todoIndex, title, description) {
    this.todos[todoIndex].title = title;
    this.todos[todoIndex].description = description;
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }

  setStatus(todo, newStatus) {
    this.hasStatus(todo, newStatus) ? todo.status = 'pending' : todo.status = newStatus;
  }

  hasStatus(todo, status) {
    return todo.status == status
  }

  setStatusToAll(newStatus) {
    const undoneTodos = this.todos.filter(todo => !this.hasStatus(todo, 'done'))

    undoneTodos.forEach(todo =>
      this.hasStatus(todo, 'pending') ?
      this.setStatus(todo, newStatus) :
      this.setStatus(todo, 'pending'))
  }

  getSearchedTodo(searchValue) {
    return this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  deleteAll() {
    this.todos = [];
  }

  sortByTitle() {
    this.todos.sort((todo, nextTodo) =>
      todo.title.toLowerCase() > nextTodo.title.toLowerCase() ? 1 : -1
    );
  }

  sortByStatus() {
    this.sortByTitle()
    const pending = [], hold = [], done = [];

    this.todos.forEach((todo) => {
      if (this.hasStatus(todo, "pending")) pending.push(todo);
      if (this.hasStatus(todo, "hold")) hold.push(todo);
      if (this.hasStatus(todo, "done")) done.push(todo);
    });
    this.todos = [...pending, ...hold, ...done];
  }
}

const todosStore = new TodosStore();

export default todosStore;
