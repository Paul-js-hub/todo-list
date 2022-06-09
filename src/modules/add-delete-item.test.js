jest.mock('./todos')
import { addTodo } from './todos'

describe('should add an item to localstorage', ()=>{
    let arr = [];
    test('add a list item', ()=>{
        let todo = {
            description: "do laundry",
            completed: "false",
            index: "1"
        }

        let addTodoItem = addTodo(arr, todo);
        expect(addTodoItem).toHaveLength(1);

    });
    test('add a list item', ()=>{
        let todo = {
            description: "do laundry",
            completed: "false",
            index: "2"
        }

        let addTodoItem = addTodo(arr, todo);
        expect(addTodoItem).toHaveLength(2);

    })
    test('', ()=>{});
})