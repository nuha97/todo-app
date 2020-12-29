import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'

function ListTask(){
    const tasks = useSelector(state => state)
   
    return (
        <div className="my-4">
        { 
        tasks.map(task=>{
             return <Task task={task} key={task.id} />
        }) }
        </div>
    
    )
}

export default ListTask;
