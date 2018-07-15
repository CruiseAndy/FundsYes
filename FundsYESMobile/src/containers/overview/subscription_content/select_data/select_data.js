/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import SelectDataStyle from './select_data.scss';

/* image */
import { IMGPATH_INVESTINFO_1, IMGPATH_OPENSTATEMENT_1 } from '../../../../manager/image';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

/* data */
// import { getFundsCompanys, getFundsNames } from '../../../../actions/action_subscription';

const tempBankAccount = { Bank: "國泰世華商業銀行", Account: "1550╳╳╳╳4567" };
const tempPromotions = [ "英傑華持有客戶單筆優惠手續費率 0.00%", "適用優惠手續費率 0.89%" ];
const tempRefWorth = 100;
const errMsg =
{
    choiceCurrency: '請選擇"交易幣別"。',
    inputMoney: '請輸入"申購金額"。',
    floorMoney: '歐元最低申購金額為2,000元！',
    choicePromotion: '請選取"優惠活動"。',
    agreeStatement: '請勾選"本人已於交易前取得並詳閱投資人須知及公開說明書"。',
}

class SelectData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectFundDetail: {},
            promotions: [],
            refWorth: "",
            bankAccountData: { Bank: "", Account: "" },
            checkDone: {
                choiceCurrency: false,
                inputMoney: false,
                floorMoney: true,
                choicePromotion: false,
                agreeStatement: false,
            },
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _changeCurrency = e => {
        let elements = document.getElementsByName('rdoCurrency');

        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        e.target.checked = true;

        this.setState({
            selectFundDetail: Object.assign( this.state.selectFundDetail, tempBankAccount ),
            promotions: tempPromotions,
            bankAccountData: tempBankAccount,
            checkDone: Object.assign( this.state.checkDone, { choiceCurrency: true } ),
        });
    }

    _inputAmount = (e) => {
        let amount = e.target.value;

        this.setState({
            selectFundDetail: Object.assign( this.state.selectFundDetail, { "Amount": amount } ),
        });

        if (amount === '') {
            this.setState({ checkDone: Object.assign( this.state.checkDone, { inputMoney: false } ) });
        } else {
            this.setState({ checkDone: Object.assign( this.state.checkDone, { inputMoney: true } ) });
        }
    }

    _selectPromotion = (e) => {
        let elements = document.getElementsByName('rdoPromotion');
        let promotionName = e.target.value.split("手續費率")[0];

        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        e.target.checked = true;

        this.setState({
            refWorth : tempRefWorth,
            selectFundDetail: Object.assign( this.state.selectFundDetail, { "Promotion": promotionName , "RefFee": tempRefWorth} ),
            checkDone: Object.assign( this.state.checkDone, { choicePromotion: true } ),
        });
    }

    _agreeStatement = (e) => {
        
        if (e.target.checked) {
            this.setState({ checkDone: Object.assign( this.state.checkDone, { agreeStatement: true } ) });
        } else {
            this.setState({ checkDone: Object.assign( this.state.checkDone, { agreeStatement: false } ) });
        }
    }

    _nextStep = () => {

        /* 確認資料是否完整 */
        for ( let [index, value] of Object.entries(this.state.checkDone)) {
            if ( value === false ) {
                for ( let [title, str] of Object.entries(errMsg)) {
                    if ( index === title ) {
                        alert (str);
                        return;
                    }
                }
            }
        }
        this.props.setData(this.props.stepIndex + 1, this.state.selectFundDetail);
    }
    
    render() {
        const { FundName, Currency, RefWorth } = this.props.data;

        return (
            <div className="select-data-main">
                <div className="step-precess">
                    <h3>2. 申購輸入</h3>
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
                        <div>
                            <span className="glyphicon glyphicon-question-sign"></span>
                            <span>說明</span>
                        </div>
                    </div>
                    <div className="form-datas">
                        <input type="radio" name="rdoCurrency" onClick={ e => this._changeCurrency(e) } />
                        <span dangerouslySetInnerHTML={{__html: '台幣'}}></span>
                        <input type="radio" name="rdoCurrency" onClick={ e => this._changeCurrency(e) } />
                        <span dangerouslySetInnerHTML={{__html: '外幣'}}></span>
                        <div className="form-amount">
                            <input type="text" onChange={e => this._inputAmount(e)} />
                        </div>
                    </div>
                    <div className="form-subhead">扣款帳號</div>
                    <div className="form-datas">
                        <span>銀行：</span>
                        <span>{this.state.bankAccountData.Bank}</span><br/>
                        <span>帳號：</span>
                        <span>{this.state.bankAccountData.Account}</span>
                    </div>
                    <div className="form-subhead">優惠活動</div>
                    <div className="form-datas">
                    {
                        this.state.promotions.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input type="radio" 
                                            name="rdoPromotion"
                                            value={item}
                                            onClick={ e => this._selectPromotion(e) } />{item}
                                </div>
                            );
                        })
                    }
                    </div>
                    <div className="form-subhead">參考手續費</div>
                    <div className="form-datas">{this.state.refWorth}</div>
                </div>
                <p className="premise">參考淨值說明：資料由晨星（Morningstar）提供，不代表實際交易淨值，實際交易淨值將以基金公司公告為準。</p>
                <div className="doc-box">
                    <div className="doc-wrap">
                        <span className="glyphicon glyphicon-save"></span>
                        <a target="_blank" href="http://b2b.cnyes.com/news/b2bfunc/pdf/B31008-I.pdf">投資人需知</a>
                        <div className="doc-preview">
                            <img src={IMGPATH_INVESTINFO_1} />
                        </div>
                    </div>
                    <div className="doc-wrap">
                        <span className="glyphicon glyphicon-save"></span>
                        <a target="_blank" href="http://b2b.cnyes.com/news/b2bfunc/pdf/B31008-P.pdf">公開說明書</a>
                        <div className="doc-preview">
                            <img src={IMGPATH_OPENSTATEMENT_1} />
                        </div>
                    </div>
                    <div className="check-agree">
                        <label htmlFor="AgreeChk">
                            <input type="checkbox" onClick={e => this._agreeStatement(e)} />
                            <span dangerouslySetInnerHTML={{__html: '本人已於交易前取得並詳閱投資人須知及公開說明書'}}></span>
                        </label>
                    </div>
                </div>
                <div className="apply-wrap">
                    <button className="btn btnRed" onClick={e => this._nextStep()}>下一步</button>
                </div>
            </div>
        );
    }
}

export default SelectData;