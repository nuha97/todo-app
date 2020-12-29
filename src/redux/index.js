//Combine all reducers together ....

import {DisplayTasksReducer,MarkAsDoneReducer} from './reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    allTasks : DisplayTasksReducer,
    done: MarkAsDoneReducer
})

export default allReducers