import React, { useState } from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

const Main = () => {


const initialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
  
}
const[todos, setTodos] = useState(initialTodos)



  return (
    <div>
      <div>Main</div>
      <Header todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos}/>
  
    </div>
    
    
  )

}

export default Main;