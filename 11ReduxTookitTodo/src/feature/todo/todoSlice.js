import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos: [{id:1,text:"hello"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducer:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        deletetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                todo.id!==action.payload 
            })
        }
    }
})

export const {addtodo,deletetodo}=todoSlice.action

export default todoSlice.reducer