import React from 'react'
import { ListGroup } from 'react-bootstrap'


const Task = ({taskName}) => {
  return ( 
      <ListGroup.Item className="task" onDoubleClick={(e)=> e.target.classList.toggle("done")}>
        <p className='task-content' onDoubleClick={(e)=> e.target.closest(".task").classList.toggle("done")}>{taskName}</p>
     
      </ListGroup.Item>
  )
}

export default Task;