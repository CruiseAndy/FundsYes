import { GET_FUNDSDATA } from '../actions/index';

// const INITIAL_STATE = { all: [], post: null };

export default function(state = null, action) {
    switch(action.type) {
        case GET_FUNDSDATA:
            return action.payload;
        default:
            return state;
    }
}