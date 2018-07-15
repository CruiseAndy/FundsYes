/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import OverviewStyle from './period_invest_content.scss';

/* component */
import PeriodDescription from './description/description';
import SelectFund from './select_fund/select_fund';
import SelectData from './select_data/select_data';
import CheckData from './check_data/check_data';
import Complete from './complete/complete';
import Notice from './period_invest_notice/period_invest_notice';

class PeriodInvestContent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            stepIndex: 1,
            subscriptionData: {},
        }
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
                <div className="period-invest-content-main">
                {
                    this.state.stepIndex === 1
                    ?   <PeriodDescription setData={this._setData} />
                    :   this.state.stepIndex === 2
                        ?   <SelectFund setData={this._setData}
                                stepIndex={this.state.stepIndex}
                                data={this.state.subscriptionData} />
                        :   this.state.stepIndex === 3
                            ?   <SelectData setData={this._setData}
                                    stepIndex={this.state.stepIndex}
                                    data={this.state.subscriptionData} />
                            :   this.state.stepIndex === 4
                                ?   <CheckData setData={this._setData}
                                        stepIndex={this.state.stepIndex}
                                        data={this.state.subscriptionData} />
                                :   <Complete setData={this._setData}
                                        stepIndex={this.state.stepIndex}
                                        data={this.state.subscriptionData} />
                }
                {
                    this.state.stepIndex === 1 ? "" : <Notice />
                }
                    
                </div>
            </div>
        );
    }
}

export default PeriodInvestContent;