/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import HomeStyle from './home.scss';

/* data */
import { getFundsData } from '../../actions/index';

/* components */
import PageHeader from '../../manager/components/page_header/page_header';
import Banner from './banner/banner';
import Annotation from './annotation/annotation';
import FundsInfo from './funds_info/funds_info';
import Intelligence from './intelligence/intelligence';
import FAQ from './FAQ/FAQ';
import Footer from '../../manager/components/footer/footer';

class Home extends Component {
    componentWillMount() {
        this.props.getFundsData();
        window.scrollTo(0, 0);
    }

    render() {
        if (!this.props.FundsData) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className="home-page">
                <div>
                    <PageHeader />
                </div>
                <div className="home-container">
                    <div><Banner /></div>
                    <div><Annotation /></div>
                    <div><FundsInfo FundRecommData={this.props.FundsData.data.FundRecomm} /></div>
                    <div><Intelligence InvestRecommData={this.props.FundsData.data.InvestRecomm} /></div>
                    <div><FAQ /></div>
                </div>
                <div><Footer /></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        FundsData: state.fundsData
    };
}

export default connect(mapStateToProps, { getFundsData })(Home);