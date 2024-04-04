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

    <div>My Todo List

<Form.Control
              className="form-control"
              placeholder="Enter new todo..."
              aria-label="Enter new todo..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              style={{ height: "50px" }}
            />

      <Button variant="danger" id="button-addon" onClick={addTodo}>
Add Todo
</Button>


    </div>
  )
}

export default Header;