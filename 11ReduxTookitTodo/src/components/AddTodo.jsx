import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import removeTodo from '../feature/todo/todoSlice'
function AddTodo() {
    const todos=useSelector(()=>state.todos)
    const dispatch=useDispatch();

  return (
    <>
    <div>
      Todos
    </div>
    {todos.map((todo)=>{
        <l1 key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>x</button>
        </l1>
        
    })}
    </>
    
  )
}

export default AddTodo
