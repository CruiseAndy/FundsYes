/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

/*
url : http://www.blog.com/{parm}post/5
parm : null -> browserHistory, # -> hashHistory
*/

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.containers'));
