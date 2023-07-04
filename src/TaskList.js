import React from 'react'
import './TaskList.css'

function TaskList(props) {
  return (
  
      <li className='tasklist'>{props.item}</li>

  )
}

export default TaskList
