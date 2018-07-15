/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import OverviewStyle from './overview_content.scss';

/* data */
import { getOverviewData } from '../../../actions/index';

/* image */
import { IMGPATH_BTDOWNBLACK, IMGPATH_BTUPBLACK } from '../../../manager/image';

/* component */
import TransCurrency from './transacted_currency/transacted_currency';
import FundsInvestCombine from './funds_invest/funds_invest';
import OverviewNotice from './overview_notice/overview_notice';

class OverviewContent extends Component {
    
    componentWillMount() {
        this.props.getOverviewData();
        window.scrollTo(0, 0);
    }
    
    render() {
        if (!this.props.OverviewData) {
            return (
                <div>Loading...</div>
            )
        }

        const { TransactionCurrency, Assets, FundsInvest } = this.props.OverviewData.data;
        
        return (
            <div className="overview-main">
                <TransCurrency 
                    TransCurrencyData = {TransactionCurrency}
                    AssetsData = {Assets} />
                <FundsInvestCombine
                    FundsInvestData = {FundsInvest} />
                <OverviewNotice />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        OverviewData: state.overviewData,
    };
}

export default connect(mapStateToProps, { getOverviewData } )(OverviewContent);