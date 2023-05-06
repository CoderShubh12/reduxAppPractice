import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoform from './component/Todoform';
import Todo from './component/Todo';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteAll } from './redux/todoApp/action';

const App = () => {

  const dispatch=useDispatch()
  return (
    <div>
      <Todoform/>
      <Todo/>
      <Button onClick={()=>dispatch(deleteAll())}>Delete ALl</Button>
    </div>
  )
}

export default App