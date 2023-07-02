import React from 'react'
import PreviousTask from './PreviousTask'

function TaskList(props) {

// list.map(val=>{
//     console.log(val.name)
// })
  return (
   <div>
   <PreviousTask list={props.taskMentioned}/>
   
   </div>
  )
}

export default TaskList
