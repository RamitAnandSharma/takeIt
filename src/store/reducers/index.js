
import { combineReducers } from 'redux'
import person from './home';
import orderReduce from './orders';
const rootReducer = combineReducers({
    person,
    orderReduce
})

export default rootReducer
