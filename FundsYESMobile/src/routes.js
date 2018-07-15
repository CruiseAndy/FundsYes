/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* components */
import App from './containers/app';
import Home from './containers/home/home';
import Login from './containers/login/login';
import ForgetPwd from './containers/forget_pwd/forget_pwd';
import Overview from './containers/overview/overview';
import CompanyProfile from './containers/NoviceGuide/CompanyProfile';
import ServiceIntroduction from './containers/NoviceGuide/ServiceIntroduction';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Login" component={Login} />
        <Route path="Login/ForgetPwd" component={ForgetPwd} />
        <Route path="Overview" component={Overview} />
        <Route path="NoviceGuide" component={CompanyProfile} />
        <Route path="NoviceGuide/CompanyProfile" component={CompanyProfile} />
        <Route path="NoviceGuide/ServiceIntroduction" component={ServiceIntroduction} />
    </Route>
);