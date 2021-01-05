import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {editTodo, markAsDone} from '../redux/action'

function Task({task ,index}){

    const [editTask,setEditTask] = useState(false)
    const [description,setDescription] = useState(task.description)
    let  dispatch = useDispatch();
    
    return (
        <div className="row mx-2">
            <div><h5>{index+1}</h5></div>
            
            <div className="col">
                {editTask ? <input type="text" className="form-control" value={description}
                onChange = {(e)=>setDescription(e.target.value)}/> : 
                <h4 style={{textDecoration:!task.isDone?"none":"line-through"}}>{task.description}</h4>}
            </div>
            <button className="btn btn-warning m-2"
             onClick={()=> {
                 dispatch(editTodo({...task,description:description}))
                 if(editTask)
                    setDescription(task.description)
                    setEditTask(!editTask)
                 }}>
                 {editTask?"Update":"Edit"}
            </button>
                  
            <button className="btn btn-secondary m-2" variant={!task.isDone ? "success" : "danger"}
                    onClick={()=> dispatch(markAsDone({id:task.id}))}>{task.isDone?"Done":"Undo"}</button>
        </div>
    )
}

export default Task;