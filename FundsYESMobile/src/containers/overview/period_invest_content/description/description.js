/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import DescriptionStyle from './description.scss';

/* data */
import { getPeriodInvestFundsList } from '../../../../actions/index';

/* image */
import { IMGPATH_BTDOWNBLACK, IMGPATH_BTUPBLACK } from '../../../../manager/image';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

/* text content */
// import TxtContent from './txt_content.json';

class CompleteData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isShowDetail: false,
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        this.props.getPeriodInvestFundsList();
    }
    
    _showDetail = (e) => {
        /* this method not good */

        let triggerEle = e.target;
        let actionEle = triggerEle.parentElement.parentElement.nextSibling;

        if (triggerEle.getAttribute("src") === IMGPATH_BTDOWNBLACK) {
            triggerEle.setAttribute("src", IMGPATH_BTUPBLACK);
        } else {
            triggerEle.setAttribute("src", IMGPATH_BTDOWNBLACK);
        }
        actionEle.style.display = (actionEle.style.display == 'none' || actionEle.style.display == '') ? 'table-row' : 'none';
    }

    _nextStep = () => {
        this.props.setData(2);
    }
    
    render() {
        
        if (!this.props.PeriodFundsList) {
            return (
                <div>Loading...</div>
            )
        }
        const { PeriodInvestList } = this.props.PeriodFundsList.data;

        return (
            <div className="description-main">
                <h1>定期定額</h1>
                <div className="description-title">
                    <div>定期定額申購</div>
                    <div>定期定額申購須於指定扣款日前二個營業日下午14:30前向本公司完成申請手續；並於指定扣款日前一營業日中午12:00前，將包含申購手續費之款項存入於扣款行開設之帳戶。</div>
                </div>
                <div className="buy-btn-wrap">
                    <button className="btn btnRed" onClick={e => this._nextStep()}>申購</button>
                </div>
                <div className="description-title">
                    <div>定期定額清單</div>
                    <div>目前尚未提供異動功能，若需異動請使用電腦版網頁，感謝您！</div>
                </div>
                <table className="period-invest-funds-list">
                    <thead><tr>
                        <th>基金名稱</th>
                        <th>交易幣別</th>
                        <th>明細</th>
                    </tr></thead>
                    {
                        PeriodInvestList.map((block, index) => {
                            const { FundID, FundName, Currency, Detail } = block;
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>{FundID}<br />{FundName}</td>
                                        <td>{Currency}</td>
                                        <td>
                                            <img
                                                className="img-up-down"
                                                src={IMGPATH_BTDOWNBLACK}
                                                onClick={e => this._showDetail(e)} />
                                        </td>
                                    </tr>
                                    <tr className="detail-hide">
                                        <td colSpan="3">
                                            <table className="detail-table">
                                                <thead>
                                                    <tr>
                                                        <td>扣款日</td>
                                                        <td>扣款金額</td>
                                                        <td>扣款狀態</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    Detail.map((val, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{val[0]}</td>
                                                                <td>{val[1]}</td>
                                                                <td>{val[2]}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })
                    }
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        PeriodFundsList: state.periodInvestFundsList,
    };
}

export default connect(mapStateToProps, { getPeriodInvestFundsList } )(CompleteData);