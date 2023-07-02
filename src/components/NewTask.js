import React,{useState} from 'react'

import './NewTask.css'

function NewTask() {
    const [taskName,setTaskName]=useState('');
   
    const taskNameHandler = (event) =>{
           setTaskName(event.target.value);
           console.log(event.target.value);
    }
  

 const newtaskHandler = (event) =>{
    event.preventDefault();
    alert(taskName);
    const taskData = {
        task: enteredTitle,
       
      };
  
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');



 }


  return (
    <div className='newTask'>
  <form onSubmit={newtaskHandler}>

  <div className='task'>
  <label >TaskName</label>
    <input type="text" onChange={taskNameHandler} value={task}></input>
</div>
{/* <div className='task'>
    <label>DATE</label>
    <input type="date">{taskDateHandler}</input>
</div>
<div className='task'>
    <label>Expected time</label>
    <input type="number">{taskTimeHandler}</input>
    </div> */}
    <button type="submit">SUBMIT</button>
  </form>
  </div>
  )
}

export default NewTask
