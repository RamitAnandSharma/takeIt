import {FETCH_ORDERS} from './../actions/actionTypes';

const orderReduce = (state = [], action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                list: action.payload
            }

        default:
            return state
    }
}

export default orderReduce
