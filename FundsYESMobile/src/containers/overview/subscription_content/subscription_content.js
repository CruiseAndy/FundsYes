/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import SubscriptionStyle from './subscription_content.scss';

/* component */
import SelectFund from './select_fund/select_fund';
import SelectData from './select_data/select_data';
import CheckData from './check_data/check_data';
import Complete from './complete/complete';
import Notice from './subscription_notice/subscription_notice'
import Footer from '../../../manager/components/footer/footer';

class SubscriptionContent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 1,
            subscriptionData: {},
        }
    }
    
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _setData = (index = 0, data = {}) => {
        this.setState({
            stepIndex: index,
            subscriptionData: Object.assign( this.state.subscriptionData, data ),
        })
    }
    
    render() {
        return (
            <div>
                <div className="subscription-content-main">
                {
                    this.state.stepIndex === 1
                    ?   <SelectFund setData={this._setData}
                            stepIndex={this.state.stepIndex}
                            data={this.state.subscriptionData} />
                    :   this.state.stepIndex === 2
                        ?   <SelectData setData={this._setData}
                                stepIndex={this.state.stepIndex}
                                data={this.state.subscriptionData} />
                        :   this.state.stepIndex === 3
                            ?   <CheckData setData={this._setData}
                                    stepIndex={this.state.stepIndex}
                                    data={this.state.subscriptionData} />
                            :   <Complete setData={this._setData}
                                    stepIndex={this.state.stepIndex}
                                    data={this.state.subscriptionData} />
                }
                <Notice />
                </div>
            </div>
        );
    }
}

export default SubscriptionContent;