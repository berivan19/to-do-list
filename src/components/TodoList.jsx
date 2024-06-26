import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const TodoList = ({todos,setTodos}) => {

  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };


  return (
    
<div style={{backgroundColor: "rgb(255, 97, 163)"}}>
      <div style={{display: "flex", justifyContent: "center", paddingBottom: "250px" }}>
        <div className="col-lg-8 col-md-5">
          <h2 className="text-center fs-1 text-dark mb-5 ">Todos</h2>
          <ul>
            {todos?.length ? (
              todos.map(({ id, text }) => (
                <div
                className="list d-flex justify-content-between align-items-center"
                  key={id}
                >
                  <li className="fs-3 text-dark ">{text}</li>

                  <FaTrash  className="fs-3 text-dark "
                    onClick={() => deleteTodo(id)} />

                  
                </div>
              ))
            ) : (
              <p className="text-center text-dark mt-5 fs-3">No tasks yet!</p>
            )}
          </ul>
        </div>
      </div>
    </div>

   
  )
}

export default TodoList;