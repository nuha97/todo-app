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
export function filterTasks(filter){
    return {
    type: "FILTER_TASKS",
    payload:filter
    }
}
//--------------------------------------------------------
export function allTasks(){
    return {
        type:"DISPLAY_ALL_TASKS"
    }
}
export function filterDone(){
    return {
        type:"FILTER_LIST_DONE"
    }
}

export function filterNotDone(){
    return {
        type:"FILTER_LIST_NOTDONE"
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