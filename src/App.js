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
        <h4>Add New Task</h4>
      <AddTask/>
  
      <h2>Todos List </h2>
      <ListTask />
      <hr/>
      <FilterTask/>
    </div>
  );
}

export default App;
