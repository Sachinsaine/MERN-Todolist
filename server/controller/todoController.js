const todos = [];

const getTodos = (req, res) => {
  res.json(todos);
};

const createTodo = (req, res) => {
  const { title } = req.body;

  const todo = {
    id: todos.length + 1,
    title: title,
    completed: false,
  };

  todos.push(todo);

  res.status(201).json(todo);
};

const updateTodo = (req, res) => {
  const { title, completed } = req.body;
  const id = Number(req.params.id);
  const findTodo = todos.find((todo) => todo.id === id);

  if (!findTodo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  findTodo.title = title;
  findTodo.completed = completed;
  res.json(findTodo);
};

const deleteTodo = (req, res) => {
  const id = Number(req.params.id);

  const findTodo = todos.findIndex((todo) => todo.id === id);

  if (findTodo === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todos.splice(findTodo, 1);

  res.json({ message: "Todo deleted successfully" });
};

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
