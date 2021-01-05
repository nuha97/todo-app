import './App.css';
import AddTask from './component/AddTask';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ListTask from './component/ListTask';
import FilterTask from './component/FilterTask';
//import {useSelector , useDispatch} from 'react-redux'
//import {DisplayAllTasks} from './redux/action'
function App() {

 // const tasks = useSelector(state => state.allTasks)
  //const dispatch = useDispatch();
  return (
    <div className="App ">
       {/* <h2>Todos List </h2> */}
        <h4>Add New Task</h4>
      <AddTask/>
  
     
      <ListTask />
      <hr/>
      <FilterTask filter="ALL_TASKS"/>
      <FilterTask filter="COMPLETED"/>
      <FilterTask filter="NOTCOMPLETED"/>
    </div>
  );
}

export default App;
