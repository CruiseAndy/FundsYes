import { combineReducers } from 'redux';
import ReducerStep0 from './reducer_step0';
import ReducerStep1 from './reducer_step1';
import ReducerStep2 from './reducer_step2';
import ReducerStep3 from './reducer_step3';

const rootReducer = combineReducers({
  Step0Data: ReducerStep0,
  Step1Data: ReducerStep1,
  Step2Data: ReducerStep2,
  Step3Data: ReducerStep3,
});

export default rootReducer;
