import { clearCompleted, updateTodo } from './todos.js'

jest.mock('./todos')

describe('checking for todos functionality', ()=>{
    let todos = [
        {
            index:0,
            description:"Do Laundry",
            completed:false
        },
        {
            index:1,
            description:"Study Unit Testing",
            completed:false
        },
        {
            index:2,
            description:"Go shopping",
            completed:false
        },
        {
            index:3,
            description:"Playing video games",
            completed:true
        },

    ]

    test('clear all todos that have been completed', ()=>{
        let remainingTodos = clearCompleted(todos);
        expect(remainingTodos).toHaveLength(3);
    })
})

describe('checking for todos functionality', ()=>{
    test('update todo text', ()=>{
        let todos = [
            {
                index:0,
                description:"Do Laundry",
                completed:false
            },
            {
                index:1,
                description:"Study Unit Testing",
                completed:false
            },
            {
                index:2,
                description:"Go shopping",
                completed:false
            },
            {
                index:3,
                description:"Playing video games",
                completed:true
            },
        ]
        let text = 'Learn webpack';
        let result = updateTodo(todos, 1, text)[1].description;
        expect(result).toEqual('Learn webpack');
    })
})