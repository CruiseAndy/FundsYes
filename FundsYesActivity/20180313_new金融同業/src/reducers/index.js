import { combineReducers } from 'redux';
import ReducerStep0 from './reducer_step0';

const rootReducer = combineReducers({
  Step0Data: ReducerStep0,
});

export default rootReducer;
