import React, { useState } from 'react'


function TodoList(){
    const[tasks,setTask]=useState([]);//for setting task with array
    const[newTask,setNewTask]=useState("")//used to take array in the form //we will use newTask array to move in the task

function handleInputChange(event){
setNewTask(event.target.value);
}
function addTask(){
    if(newTask.trim()!==""){
        setTask((prevtask)=>[...prevtask,newTask]);
        setNewTask("");
    }

}

function deleteTask(index){
const updated=tasks.filter((_,i)=>i!==index);
setTask(updated)
}



    return(<div className="to-do-list">
    <h1>Todos</h1>
    <div>
        
            <input type='text' placeholder='Add new task...' value={newTask} onChange={handleInputChange}></input>
            <button className='add-button' onClick={addTask}>Add</button>
     
    </div>
    <ol>
        {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                </li>
        )}
    </ol>
    </div>)
}
export default TodoList;