import { OVERVIEW_PAGE_INDEX } from '../actions/index';

export default function(state = 0, action) {
    switch(action.type) {
        case OVERVIEW_PAGE_INDEX:
            return action.payload;
        default:
            return state;
    }
}