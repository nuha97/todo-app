import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/action'

function AddTask(){
    let [description,setDescription] = useState();
    let  dispatch = useDispatch();
    let nextId = 5;
    return (
        <div className="row m2">
            <input type="text" className="col form-control"
                    value ={description}
                    onChange = {(e)=>setDescription(e.target.value)}/>
            <button className="btn btn-info mx-2"
                    onClick ={()=>{ dispatch(addTodo(
                       {
                           id:nextId+=1,
                           description : description,
                           isDone : false
                       })
                    )
                    setDescription('')
                    }}>Add</button>
           
        </div>
    )
}

export default AddTask;