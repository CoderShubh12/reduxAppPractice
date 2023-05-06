import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {

    const todoData=useSelector((state)=>state.todoReducer)

    console.log("wdwdw",todoData)
  return (
    <div>{todoData.map((todo)=>{return(
        <div>{todo?.todo}
        </div>
    )})}</div>
  )
}

export default Todo