import React, { useState } from 'react'
import Task from './Task';
import TaskList from './TaskList'
import './App.css'
function App() {

  const [task,setTask]=useState([]);
  let addTask = (inputText)=>{
    if(inputText !== '')
    setTask([...task,inputText]);
  }

  const removeTask = (key) =>{
   const newList=[...task];
   newList.splice(key,1);
   setTask([...newList]);
  }
  
  return (
     
    <div className="App">
    <Task addTask={addTask}/>
    <h1>TO-DO LIST</h1>
   <hr/>
   <br/>
    {task.map((val,i)=>{
      
      return(
       <TaskList deleteTask={removeTask} key={i} item={val}
        index={i}
       />

      )
    
    })}
     
    
    
    </div>
  );
}

export default App;
