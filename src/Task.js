import React, { useState } from 'react'
import './Task.css';

function Task() {
const [taskName,setTaskName]=useState();
const data=[];

    // const onSubmitNewTask = (event)=>{
    //  event.preventDefault();
    // data= [...taskName];
    //  console.log("data",data);
    // }
    const tasNameHandler = (event) =>{
        console.log(event.target.value);
       setTaskName(event.target.value);
    }
  
    
  return (
    <div className='task'>
    <h1>List Of Tasks</h1>
    {data.map(val=>{
        console.log(val);
        return(
        <h2>{val}</h2>
        )
    })}
    
    <div className='newTask'>
    <form onSubmit={onSubmitNewTask}>
    <label>TaskName</label>
      <input type='text' value={taskName} onChange={tasNameHandler}/>
      <button type="submit">Add Task</button>
</form>
    </div>
   
    </div>
  )
}

export default Task
