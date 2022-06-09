import { addTodo, deleteTodo } from './todos.js';

jest.mock('./todos');

describe('should add an item to localstorage', () => {
  const arr = [];
  test('add a list item', () => {
    const todo = {
      description: 'do laundry',
      completed: 'false',
      index: '1',
    };

    const addTodoItem = addTodo(arr, todo);
    expect(addTodoItem).toHaveLength(1);
  });

  test('add a list item', () => {
    const todo = {
      description: 'do laundry',
      completed: 'false',
      index: '2',
    };

    const addTodoItem = addTodo(arr, todo);
    expect(addTodoItem).toHaveLength(2);
  });
});

describe('should removetodo from local storage', () => {
  let todo = [{
    description: 'Wake up',
    index: 1,
    completed: false,
  },
  {
    description: 'Eat BreakFast',
    index: 2,
    completed: false,
  },
  {
    description: 'Finish the project',
    index: 3,
    completed: false,
  },
  ];

  test('should remove todo from list', () => {
    todo = deleteTodo(todo, 2);
    expect(todo).toHaveLength(2);
  });
});
