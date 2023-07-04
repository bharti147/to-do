import React, { useState } from 'react'
import './Task.css';

function Task(props) {
const [inputTask,setInputTask]=useState('');


    
 

  
    
  return (
    <div className='task'>
    
    
    <div className='newTask'>
   
    <label>TaskName</label>
      <input type='text' value={inputTask} onChange={e =>{
       setInputTask( e.target.value)
      }}/>
      <button type="submit" onClick={()=>{
        props.addTask(inputTask)
      }}>Add Task</button>



    </div>
   
    </div>
  )
}

export default Task
