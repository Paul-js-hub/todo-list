const todos = JSON.parse(localStorage.getItem('todos')) || [];

// selectors
const todoItems = document.querySelector(".todo-items");
const input = document.getElementById("input");
const form = document.querySelector('.form-container');

// Functions
export const getTodos = () => {
  const items = todos.sort((a, b) => b.index - a.index);
  if(localStorage.getItem('todos')){
    items.map((todo) => {
      const todoElement = document.createElement("li");
      todoElement.classList.add("todo");
      todoElement.setAttribute("id", todo.index);
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
  }
};

export const addTodo = () => {
  const items = todos.sort((a, b) => b.index - a.index);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value !== "") {
      let todo = {
        index: todos.length + 1,
        description: input.value,
        completed: false,
      };
      items.push(todo);
      window.location.reload();
      localStorage.setItem("todos", JSON.stringify(todos));
      const todoElement = document.createElement("li");
      todoElement.classList.add("todo");
      todoElement.setAttribute("id", todo.index);
      const todoElMarkup = `
              <div class="content-container">
              <i class="fa fa-check-square check" aria-hidden="true" id="${todo.index}"></i>
              <p>${todo.description}</p>
              </div>
              <i class="fa fa-ellipsis-v" aria-hidden="true" id="${todo.index}"></i>
            `;
      todoElement.innerHTML = todoElMarkup;
      todoItems.appendChild(todoElement);
      input.value = "";
    }
  });
};

//Listeners