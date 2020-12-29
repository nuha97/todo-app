import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {editTodo, markAsDone} from '../redux/action'
import todos from '../redux/tasks'

function Task({task}){

    const [editTask,setEditTask] = useState(false)
    const [description,setDescription] = useState(task.description)
    let  dispatch = useDispatch();
    return (
        <div className="row mx-2">
            <div><h5>{task.id}</h5></div>
            
            <div className="col">
                {editTask ? <input type="text" className="form-control" value={description}
                onChange = {(e)=>setDescription(e.target.value)}/> : 
                <h4>{task.description}</h4>}
            </div>
            <button className="btn btn-warning m-2"
             onClick={()=> {
                 dispatch(editTodo({...todos,description:description}))
                 if(editTask)
                    setDescription(task.description)
                    setEditTask(!editTask)
                 }}>
                 {editTask?"Update":"Edit"}
            </button>
                  
            <button className="btn btn-secondary m-2"
                    onClick={()=> dispatch(markAsDone(task.id))}>Mark as Done</button>
        </div>
    )
}

export default Task;