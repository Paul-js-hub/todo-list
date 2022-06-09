jest.mock('./todos')
import {
  addTodo
} from './todos'
import {
  removeTodo
} from './todos'
import {
  getStorageMock
} from './todos'

describe('should add an item to localstorage', () => {
  let arr = [];
  test('add a list item', () => {
    let todo = {
      description: "do laundry",
      completed: "false",
      index: "1"
    }

    let addTodoItem = addTodo(arr, todo);
    expect(addTodoItem).toHaveLength(1);

  });
  test('should update localstorage after adding a new item', () => {
    expect(getStorageMock.getItem('arr')).toHaveLength(1);
  });
  test('add a list item', () => {
    let todo = {
      description: "do laundry",
      completed: "false",
      index: "2"
    }

    let addTodoItem = addTodo(arr, todo);
    expect(addTodoItem).toHaveLength(2);

  })

  test('should update localstorage after adding a new item', () => {
    expect(getStorageMock.getItem('arr')).toHaveLength(2);
  });
})



describe('removetodo', () => {
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
    todo = removeTodo(todo, 2);
    expect(getStorageMock.getItem('arr')).toHaveLength(2);
  });
  test('should make sure removed item is no longer in list', () => {
    expect(getStorageMock.getItem('arr')[1].description).not.toEqual('Eat BreakFast');
  });

  test('should delete only one item from the array', () => {
    expect(removeTodo(todo, 1)).toHaveLength(1);
  });
});
