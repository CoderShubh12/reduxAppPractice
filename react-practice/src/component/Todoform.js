import React, { useState } from 'react'
import { Form , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoApp/action'

const Todoform = () => {

    const [todo, setTodo]=useState('')
    const [todoList, setTodoList]=useState([])

    const dispatch=useDispatch();

    const handleTodo=(e)=>{
        e.preventDefault()

        let todoObject={
            id: new Date().getTime(),
            todo: todo,
            completed: false

        }
        
        dispatch(addTodo(todoObject))

        

    }
    console.log(todoList)
  return (
    <div style={{marginTop:"10px"}}>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="todo" placeholder="Enter Todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <Form.Text className="text-muted">
          Please Enter Your Todo
        </Form.Text>
      </Form.Group>

      <Button variant="primary" onClick={handleTodo}>
        Submit
      </Button>
    </Form>
   </div>
  )
}

export default Todoform