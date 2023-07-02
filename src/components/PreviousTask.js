import React from 'react'

function PreviousTask(props) {
  return (
    <div>
       { props.list.map(val=>{
            return(
            <li>{val.name}</li>
            )
        })
    }
    </div>
  )
}

export default PreviousTask
