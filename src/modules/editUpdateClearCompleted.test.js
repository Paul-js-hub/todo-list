import {
  clearCompleted,
  updateTodo,
  updateStatus,
} from './__mocks__/todos.js';

jest.mock('./todos');

describe('checking for todos functionality', () => {
  const todos = [{
    index: 0,
    description: 'Do Laundry',
    completed: false,
  },
  {
    index: 1,
    description: 'Study Unit Testing',
    completed: false,
  },
  {
    index: 2,
    description: 'Go shopping',
    completed: false,
  },
  {
    index: 3,
    description: 'Playing video games',
    completed: true,
  },

  ];

  test('clear all todos that have been completed', () => {
    const remainingTodos = clearCompleted(todos);
    expect(remainingTodos).toHaveLength(3);
  });
});

describe('checking for todos functionality', () => {
  test('update todo text', () => {
    const todos = [{
      index: 0,
      description: 'Do Laundry',
      completed: false,
    },
    {
      index: 1,
      description: 'Study Unit Testing',
      completed: false,
    },
    {
      index: 2,
      description: 'Go shopping',
      completed: false,
    },
    {
      index: 3,
      description: 'Playing video games',
      completed: true,
    },
    ];
    const text = 'Learn webpack';
    const result = updateTodo(todos, 1, text)[1].description;
    expect(result).toEqual('Learn webpack');
  });
});

describe('update Status', () => {
  const todos = [{
    description: 'Wake up',
    index: 1,
    completed: false,
  },
  {
    description: 'Eat breakfast',
    index: 2,
    completed: true,
  },
  {
    description: 'Finish the project',
    index: 3,
    completed: false,
  },
  ];

  test('should update todo completed status change', () => {
    expect(updateStatus(2, todos)[1].completed).toBeFalsy();
  });
});
