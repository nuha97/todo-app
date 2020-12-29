import tasks from './tasks'

let reducer = (state = tasks, action) => {
    switch (action.type){
        case "ADD_TODO" :
            {
            let newTasks = [...state]
            newTasks.push(action.payload)
            return newTasks
            }
        case "UPDATE_TODO" :
            {
                return state.map(task =>
                    (task.id === action.id) 
                      ? {...task, isDone: !task.isDone}
                      : task
                  )
               
            }
           
        case "MARK_AS_DONE_TODO":
            {
            let newTasks = [...state]
            let index = -1
                for(let i = 0; i< newTasks.length; i++)
                {
                    index++;
                    if(newTasks[i].id == action.payload.id){
                        break;
                    }
                }
            if(index != -1)
            {
                newTasks[index].isDone = true
                return newTasks
            }
           
            }
            

        case "DISPLAY_ALL_TASKS":
            return state
        
        case "FILTER_LIST_DONE":
            {
            let filterTasksDone = [...state]
            filterTasksDone = filterTasksDone.filter(task=>task.isDone)
            return filterTasksDone
            }
        case "FILTER_LIST_NOTDONE":
            {
            let filterTasks = [...state]
            filterTasks = filterTasks.filter(task=>!task.isDone)
            return filterTasks
            }

        default:
            return state
    }
    //return state
}

export default reducer








  // let newTasks = [...state]
                // let index = -1
                // for(let i = 0; i< newTasks.length; i++)
                // {
                //     index++;
                //     if(newTasks[i].id == action.payload.id){
                //         break;
                //     }
                // }
                // if(index != -1){
                //     newTasks[index] = action.payload
                //     return newTasks
                // }















// export const DisplayTasksReducer =  (state = [tasks] , action)=>{
//     switch(action.type){
//         case 'DISPLAY_ALL_TASKS':
//             return state
//         // case 'DISPLAY_DONE_TASKS':
//         //     return tasks.map(task =>
//         //         task.isDone ? task : ""
//         //     )
//         // case 'DISPLAY_NOT_DONE_TASKS':
//         //     return (state.map(task =>
//         //         !task.isDone ? task : ""
//         //     ))
//         case 'UPDATE_TODO':
//             return ""
//         default:
//             return state  
//     }

// }

// export  const MarkAsDoneReducer = (state = false , action) =>{
//     switch(action.type){
//         case 'MARK_AS_DONE_TODO':
//            return !state
//         default:
//            return state
//     }
// }
