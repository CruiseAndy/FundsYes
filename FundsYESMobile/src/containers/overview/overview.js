/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import LoginStyle from './overview.scss';

/* component */
import PageHeader from '../../manager/components/page_header/page_header';
import OverviewContent from './overview_content/overview_content';
import SubscriptionContent from './subscription_content/subscription_content';
import PeriodInvestContent from './period_invest_content/period_invest_content'
import Footer from '../../manager/components/footer/footer';
import Navibar from './navibar/navibar';

class Overview extends Component {

    render() {
        return (
            <div className="overview-main">
                <div>
                    <PageHeader />
                </div>
                <div className="overview-container">
                {
                    this.props.OverviewPageIndex === 0
                    ?   <OverviewContent />
                    :   this.props.OverviewPageIndex === 1
                            ?   <SubscriptionContent />
                            :   <PeriodInvestContent />
                }
                </div>
                <Footer />
                <div>
                    <Navibar />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        OverviewPageIndex: state.overviewContent,
    };
}

// export default Overview;

export default connect(mapStateToProps)(Overview);