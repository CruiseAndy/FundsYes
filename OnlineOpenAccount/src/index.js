/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './routes';


import Home from './components/home/homeContainer';
import Step0 from './components/step0/step0Container';
/*
url : http://www.blog.com/{parm}post/5
parm : null -> browserHistory, # -> hashHistory
*/

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <BrowserRouter basename="/Mobile/ReactOpenAcc"> */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.querySelector('.containers'));
