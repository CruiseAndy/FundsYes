/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* components */
import App from './components/app';
import Home from './components/home/homeContainer';
import Step0 from './components/step0/step0Container';
import Step1 from './components/step1/step1Container';
import Step2 from './components/step2/step2Container';
import Step2Result from './components/step2/step2Result';
import Step3 from './components/step3/step3Container';
import Step4 from './components/step4/step4Container';
import Step5 from './components/step5/step5Container';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/Step0" component={Step0} />
                <Route path="/Step1" component={Step1} />
                <Route path="/Step2" component={Step2} />
                <Route path="/Result:grade" component={Step2Result} />
                <Route path="/Step3" component={Step3} />
                <Route path="/Step4" component={Step4} />
                <Route path="/Step5" component={Step5} />
                <Route strict path="/" component={Home} />
            </Switch>
        </main>
    );
};

export default Main;