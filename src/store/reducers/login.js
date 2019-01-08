import {FETCH_HISTORY, DELETE_HISTORY} from './../actions/actionTypes';

const reduce = (state = [], action) => {
    switch (action.type) {
        case 'Data':
            return {
                ...state,
                status: action.data
            }

        default:
            return state
    }
}

export default reduce 
