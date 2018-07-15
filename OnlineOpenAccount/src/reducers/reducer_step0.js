/* 
 * Created by kevin in 2017/12/30
 */

/* tools */
import {
    STEP0_NAME_CHANGED,
    STEP0_EMAIL_CHANGED,
    STEP0_PHONE_CHANGED,
    STEP0_AGREE_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    agree: false,
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case STEP0_NAME_CHANGED:
            return { ...state, name: action.name };
        case STEP0_EMAIL_CHANGED:
            return { ...state, email: action.email };
        case STEP0_PHONE_CHANGED:
            return { ...state, phone: action.phone };
        case STEP0_AGREE_CHANGED:
            return { ...state, agree: action.agree };
        default:
            return state;
    }
}