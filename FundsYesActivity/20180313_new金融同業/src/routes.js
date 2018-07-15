/* 
 * Created by kevin in 2018/03/13
 */

 /* tool */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* components */
import Home from './containers/home/home';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route strict path="/" component={Home} />
            </Switch>
        </main>
    );
};

export default Main;