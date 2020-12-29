import React from 'react';
import { useDispatch } from 'react-redux';
import {allTasks, filterDone,filterNotDone} from '../redux/action'

function FilterTask (){
    let dispatch = useDispatch()

    return (
        <div className="row">
            <button className="btn btn-info m-2"
            onClick={()=>dispatch(allTasks())}
            >All Tasks</button>

            <button className = "btn btn-info m-2"
            onClick={()=>dispatch(filterDone())}
            >Done </button>

            <button className ="btn btn-info m-2"
              onClick={()=>dispatch(filterNotDone())}
              >Not Yet</button>
        </div>
    )
}

export default FilterTask