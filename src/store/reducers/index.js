
import { combineReducers } from 'redux';
import person from './home';
import orderReduce from './orders';

import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    person,
    orderReduce
})

const rootReducer = combineReducers({
    form: formReducer,
    appReducer
})

export default rootReducer
