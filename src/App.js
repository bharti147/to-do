import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import './App.css'
function App() {
  const list=[
    {id:1,
    name:"study"
},
{id:2,
    name:"shopping"
},
{id:3,
    name:"cooking"
}
  ]
  return (
    <div className="App">
     
         list of tasks

    <TaskList taskMentioned={list}/>
    <NewTask/>
       
    </div>
  );
}

export default App;
