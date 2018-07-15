import { GET_OVERVIEWDATA } from '../actions/index';

export default function(state = null, action) {
    switch(action.type) {
        case GET_OVERVIEWDATA:
            return action.payload;
        default:
            return state;
    }
}