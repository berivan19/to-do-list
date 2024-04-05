import React, {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import  Button  from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const Header = ({todos,setTodos}) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) return;

    const newTodo = {
      id: uuidv4(),
      text: input.trim(),

    };
console.log(newTodo);
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setInput("");
  
  }

  return (

//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }} >My Todo List

// <Form.Control
//               className="form-control "
//               placeholder="Enter new todo..."
//               aria-label="Enter new todo..."
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               style={{ height: "50px", margin: "0 auto"}}
//             />

//       <Button className='btn btn-outline-success ' variant="" id="button-addon" onClick={addTodo}>
// Add Todo
// </Button>


//     </div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", flexDirection: "column" }}>

  <h1 className=' mb-5 text-bg-success col-5'>My Todo List</h1>

  <div style={{ display: "flex", justifyContent: "center", alignItems: "center",   }}>
    <Form.Control
      className="form-control text-dark"
      placeholder="Enter new todo..."
      aria-label="Enter new todo..."
      onChange={(e) => setInput(e.target.value)}
      value={input}
      style={{ height: "50px", width: "300px", marginRight: "10px" }}
    />

    <Button className='btn btn-outline-success' variant="" id="button-addon" onClick={addTodo}>
      Add Todo
    </Button>

  </div>
</div>


  )
}

export default Header;