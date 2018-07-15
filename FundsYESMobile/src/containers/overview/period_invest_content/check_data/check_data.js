/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import CheckDataStyle from './check_data.scss';

/* image */
import { IMGPATH_INVESTINFO_1, IMGPATH_OPENSTATEMENT_1 } from '../../../../manager/image';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

const errMsg =
{
    agreeFundsRisk: '請勾選"本人已閱讀並了解基金通路報酬揭露及基金風險預告"',
    pwdAgain: '請輸入密碼',
};

class CheckData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            // selectFundDetail: {},
            checkAgree: false,
            pwdAgain: "",
        }
    }
    
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _nextStep = () => {
        
        if (!this.state.checkAgree) {
            alert(errMsg.agreeFundsRisk);
            return;
        }

        if (!this.state.pwdAgain) {
            alert(errMsg.pwdAgain);
            return;
        }

        this.props.setData(this.props.stepIndex + 1, this.state.selectFundDetail);
    }
    
    render() {
        const { FundName, Currency, Bank, Account, Amount, Promotion, RefWorth, RefFee } = this.props.data;

        return (
            <div className="select-data-main">
                <div className="step-precess">
                    <h3>3. 申購確認</h3>
                    <div className="clear-fix">
                    {
                        StepPrecess(this.props.stepIndex)
                    }
                    </div>
                </div>
                <table className="RSP-table">
                    <thead><tr>
                        <th>基金名稱</th>
                        <th>計價幣別</th>
                    </tr></thead>
                    <tbody><tr>
                        <td><span>{FundName}</span></td>
                        <td><span>{Currency}</span></td>
                    </tr></tbody>
                </table>
                <div className="RSP-form">
                    <div className="form-head">
                        <span>參考淨值(日期)：{RefWorth}</span>
                    </div>
                    <div className="form-subhead">
                        <div>
                            <span>申購金額</span>
                        </div>
                    </div>
                    <div className="form-datas">
                        <div className="form-amount">{Amount}</div>
                    </div>
                    <div className="form-subhead">扣款帳號</div>
                    <div className="form-datas">
                        <div>銀行：{Bank}</div>
                        <div>帳號：{Account}</div>
                    </div>
                    <div className="form-subhead">優惠活動</div>
                    <div className="form-datas">
                        <div>{Promotion}</div>
                    </div>
                    <div className="form-subhead">參考手續費</div>
                    <div className="form-datas">{RefFee}</div>
                </div>
                <p className="premise">參考淨值說明：資料由晨星（Morningstar）提供，不代表實際交易淨值，實際交易淨值將以基金公司公告為準。</p>
                <div className="doc-box">
                    <div className="doc-wrap">
                        <span className="glyphicon glyphicon-save"></span>
                        <a target="_blank" href="http://192.168.6.2:82/EC/pdf/001.pdf">基金銷售通路報酬揭露</a>
                        <div className="doc-preview">
                            <img src={IMGPATH_INVESTINFO_1} />
                        </div>
                    </div>
                    <div className="doc-wrap">
                        <span className="glyphicon glyphicon-bookmark"></span>
                        <span>基金風險預告</span>
                        <div className="doc-preview">
                            <img src={IMGPATH_OPENSTATEMENT_1} />
                        </div>
                    </div>
                    <div className="check-agree">
                        <input type="checkbox" onClick={e => this.setState({ checkAgree: e.target.checked })} />
                        <span dangerouslySetInnerHTML={{__html:"本人已閱讀並了解基金通路報酬揭露及基金風險預告"}}></span>
                    </div>
                </div>
                <div className="check-pwd">
                    <div>請再次輸入密碼</div>
                    <div>
                        <input type="password" onChange={e => this.setState({ pwdAgain: e.target.value })} />
                    </div>
                </div>
                <div className="apply-wrap">
                    <button className="btn btnRed" onClick={e => this._nextStep()}>下一步</button>
                </div>
            </div>
        );
    }
}

export default CheckData;