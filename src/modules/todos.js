let todos = JSON.parse(localStorage.getItem('todos')) || [];

// selectors
const todoItems = document.querySelector('.todo-items');
const input = document.getElementById('input');
const form = document.querySelector('.form-container');

// Functions
export const getTodos = () => {
  if (localStorage.getItem('todos')) {
    todos.map((todo) => {
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('id', todo.index);
      const todoElMarkup = `
                <div class="content-container">
                <input type="checkbox" id="${todo.description}-${todo.index}" name="tasks" ${
  todo.completed ? 'checked' : ''
}>
                <p ${!todo.completed ? 'contenteditable' : ''}>${todo.description}</p>
                </div>
                <i class="fa fa-ellipsis-v ellipse" aria-hidden="true" id="${todo.index}"></i>
              `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
    });
  }
};

export const addTodo = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value !== '') {
      const todo = {
        index: todos.length + 1,
        description: input.value,
        completed: false,
      };
      todos.push(todo);
      window.location.reload();
      localStorage.setItem('todos', JSON.stringify(todos));
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('id', todo.index);
      const todoElMarkup = `
              <div class="content-container">
              <input type="checkbox" id="${todo.description}-${todo.id}" name="tasks" ${
  todo.completed ? 'checked' : ''
}>
              <p ${!todo.completed ? 'contenteditable' : ''}>${todo.description}</p>
              </div>
              <i class="fa fa-ellipsis-v ellipse" aria-hidden="true" id="${todo.index}"></i>
            `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
      input.value = '';
    }
  });
};

export const updateTodo = (todoId, el) => {
  const todo = todos.find((todo) => todo.index === parseInt(todoId, 10));
  if (el.hasAttribute('contenteditable')) {
    todo.description = el.textContent;
  } else {
    const p = el.nextElementSibling;
    todo.completed = !todo.completed;
    if (todo.completed) {
      p.removeAttribute('contenteditable');
      el.setAttribute('checked', '');
    } else {
      el.removeAttribute('checked');
      p.setAttribute('contenteditable', '');
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const deleteTodo = () => {
  todoItems.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('fa-trash')
      || e.target.parentElement.classList.contains('fa-trash')
    ) {
      const todoId = e.target.closest('li').id;
      todos = todos.filter((todo) => todo.index !== parseInt(todoId, 10));
      todos = todos.map((todo, index) => {
        todo.index = (index + 1);
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      window.location.reload();
    }
  });
};

export const clearCompleted = (e) => {
  e.preventDefault();
  todos = todos.filter((todo) => todo.completed !== true);
  todos = todos.map((td, index) => {
    td.index = (index + 1);
    return td;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

// Listeners
todoItems.addEventListener('click', (e) => {
  const lastEl = e.target.parentNode.parentNode.lastElementChild;
  const todoId = e.target.closest('li').id;
  if (lastEl.classList.contains('fa-ellipsis-v')) {
    lastEl.classList.remove('fa-ellipsis-v');
    lastEl.classList.add('fa-trash');
  }
  updateTodo(todoId, e.target);
});

todoItems.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});
