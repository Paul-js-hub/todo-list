export const addTodo = (arr, obj) => {
  arr.push(obj);
  return arr;
};

export const deleteTodo = (todos, id) => {
  const newTodos = todos.filter((e) => e.index !== id);
  newTodos.sort((a, b) => a.index - b.index);
  for (let i = 1; i <= newTodos.length; i += 1) {
    newTodos[i - 1].index = i;
  }
  return newTodos;
};

export const clearCompleted = (todos) => {
  const newTodos = todos.filter((todo) => todo.completed !== true);
  return newTodos;
};

export const updateTodo = (todos, index, text) => {
  const newTodos = todos.map((element) => {
    if (element.index === parseInt(index, 10)) {
      element.description = text;
      return element;
    }
    return element;
  });

  return newTodos;
};

export const updateStatus = (id, todos) => {
  const newtodos = todos.map((e) => {
    if (e.index === Number(id)) {
      e.completed = !e.completed;
      return e;
    }
    return e;
  });
  return newtodos;
};
