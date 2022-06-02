import { getTodos, addTodo } from './modules/todos.js';
import './style.css';


const todoItems = document.querySelector(".todo-items");

getTodos();
addTodo();
