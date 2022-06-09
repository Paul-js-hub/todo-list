export const addTodo = (arr, obj)=>{
    arr.push(obj);
    getStorageMock.setItem('arr', arr);
    return arr;
}


export const removeTodo = (todos, id) => {
  const newTodos = todos.filter((e) => e.index !== id);
  newTodos.sort((a, b) => a.index - b.index);
  for (let i = 1; i <= newTodos.length; i += 1) {
    newTodos[i - 1].index = i;
  }
  return newTodos;
};


let storage = {};

export const getStorageMock = {
  getItem: (key) => storage[key] || null,
  setItem: (key, value) => { storage[key] = value; },
  removeItem: (key) => delete storage[key],
  clear: storage = {},

};
