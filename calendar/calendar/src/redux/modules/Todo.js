//todo.js

const LOAD = 'todo/LOAD';
const CREATE = 'todo/CREATE';
const DELETE = 'todo/DELETE';
const UPDATE = 'todo/UPDATE';

//초기값
const initialState = {
    todo_list:[
        {
            id:1,
            year:'2021',
            month: '03',
            day: '23',
            hour:'14',
            minute:'20',
            text: '리프링',
            done: true
        },
    ],
};

//액션 생성자
export const loadTodo = (todo)=>{
    return {type:LOAD,todo};
}   

export const createTodo = (todo) => {
    return {type:CREATE, todo}
} 

export const deleteTood = (todo) =>{
    return {type:DELETE, todo}
}

export const updateTodo = (todo) =>{
    return {type:UPDATE, todo}
}

//리듀서
export default function reducer(state = initialState, action){
    switch (action.type){
        case "todo/LOAD":
            return state;

        case "todo/CREATE":
            const new_todo_list = [...state.todo_list, action.todo];
            return {todo_list: new_todo_list};
        
        default:
            return state
    }
}