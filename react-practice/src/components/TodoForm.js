import React, { useState } from "react";

const TodoForm=()=>{

    const [todo, setTodo]= useState("")
    const[todolist, setTodolist]= useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTodolist([...todolist, todo])
        setTodo("")

    }
    console.log(todolist)
    console.log(todo)
    return(
    <>
    <input value={todo} name="todo" placeholder="Please Enter your Todo" onChange={(e)=>setTodo(e.target.value)}></input>
    <button onClick={handleSubmit}>add Todo</button>
    <Todolist todo={todolist}></Todolist>
    </>

    )
}

const Todolist=({todo, index, setTodolist})=>{
    const handleDelete=(td)=>{
        const deleteTodo= todo.filter(todo!==td) 
        setTodolist(deleteTodo)
    }
    return(<div>
        <span>{index}</span>
        <h2>{todo}</h2>
        <button onClick={()=>handleDelete(todo)}></button>

    </div>)
}
export default TodoForm