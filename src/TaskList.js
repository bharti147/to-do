import React from 'react'
import './TaskList.css'

function TaskList(props) {
  return (
  
      <li className='tasklist'>{props.item}
        <span >
        <i style={{cursor:"pointer"}} className="fa-solid fa-trash-can icon-delete" 
        onClick={()=>{
            props.deleteTask(props.index)
         
        }}
        ></i>
        </span>
      </li>
    

  )
}

export default TaskList
