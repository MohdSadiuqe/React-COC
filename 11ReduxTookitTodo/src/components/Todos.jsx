import React,{useState} from 'react'
import {useDispatch} from ('react-redux')
import {addtodo,deletetodo} from '../feature/todo/todoSlice'
function Todos() {
    const [input,setInput]=useState('')
    const dispatch =useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addtodo(input))
        setInput('');
    }
  return (
    <>
    return (
        <form onSubmit={addTodoHandler}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e)=>{e.target.value}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
    </>
  )
}

export default Todos
