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
                newTasks[index]=action.payload
                return newTasks
            }
               
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
                newTasks[index].isDone =  !newTasks[index].isDone
                return newTasks
            }
            }
            //return{tasks.map(item=>item.id===action.id ? {...item,isDone: !item.isDone} : item)}
        case "FILTER_TASKS":
            {
                let filterTasks = [...state]
                switch(action.payload){
                case "ALL_TASKS":
                {
                    return filterTasks
                }
        
                case "COMPLETED":
                {
                    let filterTasks = [...state]
                    filterTasks = filterTasks.filter(t=>t.isDone)
                    return filterTasks
                }
                case "NOTCOMPLETED":
                {
                    let filterTasks = [...state]
                    filterTasks = filterTasks.filter(t => !t.isDone)
                    return filterTasks
                }
                default:
                    return state
                }
            }
        default:
            return state
    }
    //return state
}

export default reducer





















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
