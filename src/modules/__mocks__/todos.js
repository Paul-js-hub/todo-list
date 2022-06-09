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
