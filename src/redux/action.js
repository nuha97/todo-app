//  
export function addTodo(todo){
    return {
        type:"ADD_TODO",
        payload: todo
    }
}
export function editTodo(todoId){
    return {
        type:"UPDATE_TODO",
        payload:todoId
    }
}
export function markAsDone(todoId)
{
    return {
        type:"MARK_AS_DONE_TODO",
        payload:todoId
    }
}

//--------------------------------------------------------
export function allTasks(tasks){
    return {
        type:"ALL_TASKS",
        payload:tasks
    }
}
export function filterDone(){
    return {
        type:"COMPLETED"
    }
}

export function filterNotDone(){
    return {
        type:"NOTCOMPLETED"
    }
}
//------------------------------------------------------
// export function deleteTodo(todoId){
//     return {
//         type:"DELETE_TODO",
//         payload:todoId
//     }
// }
//-------------------------------------------------------
export function filterTasks(filter){
    return {
    type: "FILTER_TASKS",
    payload:filter
    }
}