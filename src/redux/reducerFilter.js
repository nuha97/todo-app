import tasks from './tasks'

const allTasks = tasks;

let reducerFilter = (state = alltasks, action)=>{
    switch(action.type){
        case "FILTER_TASKS":{
            return action.payload.filter
        }
        default: {
            return allTasks
        }
    }
}

export default reducerFilter