const todos = [
    {
      description: 'Complete Todo Project',
      completed: false,
      index: 0,
    },
    {
      description: 'Read WebPack Tutorial',
      completed: true,
      index: 1,
    },
    {
      description: 'Do Laundry',
      completed: true,
      index: 2,
    },
  ];
  
  // selectors
  const todoItems = document.querySelector('.todo-items');
  
  // Functions
  export const getTodos = () => {
    todos.map((todo) => {
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('id', todo.index);
      const todoElMarkup = `
              <div class="content-container">
              <i class="fa fa-check-square check" aria-hidden="true" id="${todo.index}"></i>
              <p>${todo.description}</p>
              </div>
              <i class="fa fa-ellipsis-v" aria-hidden="true" id="${todo.index}"></i>
            `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
    });
  };