import { GET_FUNDSCOMPANYS, GET_FUNDSNAMES } from '../actions/action_subscription';

const INITIAL_STATE = { companys: null, names: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_FUNDSCOMPANYS:
            // console.log(state);
            // console.log(action.payload);
            // console.log({ companys : action.payload });
            // console.log({ ...state, companys : action.payload });
            // Object.assign(state, { companys : action.payload });
            return { ...state, companys : action.payload };
        case GET_FUNDSNAMES:
            return action.payload;
        default:
            // Object.assign(state, { names : action.payload });
            // console.log({ ...state, names : action.payload });
            return { ...state, names : action.payload };
    }
}