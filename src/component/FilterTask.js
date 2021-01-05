import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterTasks} from '../redux/action'

function FilterTask ({filter}){
    let dispatch = useDispatch()
    const tasks = useSelector(state => state)

    
    return (
        <div className="row">
            <button className="btn btn-info m-2"
            onClick={()=>dispatch(filterTasks(filter))}
            >{filter}</button>

            {/* <button className = "btn btn-info m-2"
            onClick={()=>dispatch(filterDone())}
            >Done </button>

            <button className ="btn btn-info m-2"
              onClick={()=>dispatch(filterNotDone())}
              >Not Yet</button> */}
        </div>
    )
}

export default FilterTask