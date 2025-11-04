import React, { useState } from 'react'

export default function Taskform({addTask}) {
  const [task, setTask] = useState('');
  const[priority, setPriority] = useState('Medium');
  const[category, setcategory] = useState('General');
  const handlesubmit=(e)=>{
    e.preventDefault();
    addTask({text:task, priority, category, completed: false});

    //reset
    setTask('');
    setPriority("medium");
    setcategory("General");
  }
  return (
      <form onSubmit={handlesubmit} className="task-form">
        <div id="inp">
          <input type='text' placeholder='Enter the task' value={task}
          onChange={(e)=>setTask(e.target.value)}/>
          <span><button>Add Task</button></span>
          {/* <p>{task}</p> */}
        </div>

        <div id='btns'>
          <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
            <option value="High">High</option>
             <option value="Medium">Medium</option>
              <option value="Low">Low</option>
          </select>

           <select value={category} onChange={(e)=>setcategory(e.target.value)}>
            <option value="General">General</option>
             <option value="Professional">Professional</option>
              <option value="Personal">Personal</option>
          </select>
        </div>
        {/* <p>{task} ({priority}) ({category})</p> */}
      </form>  
  )
}