import { GET_PEROIDINVESTFUNDSLIST } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case GET_PEROIDINVESTFUNDSLIST:
            return action.payload;
        default:
            return state;
    }
}