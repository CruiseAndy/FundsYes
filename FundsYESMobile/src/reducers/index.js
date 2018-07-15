import { combineReducers } from 'redux';
import FundsDataReducer from './reducer_fundsdata';
import OverviewDataReducer from './reducer_overviewdata';
import OverviewContentReducer from './reducer_overviewcontent';
import SubscriptionReducer from './reducer_subscription';
import PeriodInvestFundsListReducer from './reducer_periodinvest';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  fundsData: FundsDataReducer,
  overviewData: OverviewDataReducer,
  overviewContent: OverviewContentReducer,
  subscriptionData: SubscriptionReducer,
  periodInvestFundsList: PeriodInvestFundsListReducer,
});

export default rootReducer;
