import {
  getTodos, addTodo, deleteTodo, clearCompleted,
} from './modules/todos.js';
import './style.css';

const clear = document.querySelector('.clear-completed');

getTodos();
addTodo();
deleteTodo();

clear.addEventListener('click', clearCompleted);
