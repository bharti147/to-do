import React, { useState } from 'react'
import Task from './Task';
import TaskList from './TaskList'
import './App.css'
function App() {

  const [task,setTask]=useState([]);
  const addTask = (inputText)=>{
    setTask([...task,inputText]);
  }
  
  return (
     
    <div className="App">
    <Task addTask={addTask}/>
    <h1>TO-DO LIST</h1>
   <hr/>
   <br/>
    {task.map((val,i)=>{
      return(
       <TaskList item={val}/>
      )
    
    })}
     
    
    
    </div>
  );
}

export default App;
