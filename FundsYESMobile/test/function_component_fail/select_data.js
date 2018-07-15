/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';

/* css */
import SelectDataStyle from './select_data.scss';

/* image */
import { IMGPATH_INVESTINFO_1, IMGPATH_OPENSTATEMENT_1, IMGPATH_CLOSE } from '../../../../manager/image';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

/* data */
// import { getFundsCompanys, getFundsNames } from '../../../../actions/action_subscription';

const tempBankAccount = { Bank: "國泰世華商業銀行", Account: "1550╳╳╳╳4567" };
const tempPromotions = [ "鉅亨優惠手續費率0.89%" ];
const tempRefWorth = 100;
const errMsg =
{
    choiceCurrency: '請選擇"交易幣別"。',
    inputMoney: '請輸入"申購金額"。',
    floorMoney: '歐元最低申購金額為2,000元！',
    choicePromotion: '請選取"優惠活動"。',
    agreeStatement: '請勾選"本人已於交易前取得並詳閱投資人須知及公開說明書"。',
}

const blockDataModule =
{
    chargeDate: "",
    money: "",
    promotion: "",
    worth: ""
}

const chargeDate = (props) => {
// function chargeDate(props) {
    // const divProps = Object.assign({}, props);
    console.log(props);
    return (
        <h1 key={props.index}>Hello</h1>
        // <div className="RSP-form">
        //     <div className="form-subhead">
        //         <span>扣款日期</span>
        //         {
        //             props.index > 0 ? <img src={IMGPATH_CLOSE} /> : ""
        //         }
        //     </div>
        //     <div className="form-datas">
        //         <div className="date-wrap">
        //             <select onChange={e => props.chgChargeDate(e, props.index)}>
        //                 <option value="">== 請選擇 ==</option>
        //                 <option value="6">每月 6 日</option>
        //                 <option value="16">每月 16 日</option>
        //                 <option value="26">每月 26 日</option>
        //             </select>
        //         </div>
        //     </div>
        //     <div className="form-subhead">
        //         <div>
        //             <span>扣款金額</span>
        //         </div>
        //         <div>
        //             <span className="glyphicon glyphicon-question-sign"></span>
        //             <span>說明</span>
        //         </div>
        //     </div>
        //     <div className="form-datas">
        //         <div className="form-amount">
        //             <input type="text" />
        //         </div>
        //     </div>
        //     <div className="form-subhead">優惠活動</div>
        //     <div className="form-datas">
        //     {
        //         props.promotions.map((item, index) => {
        //             return (
        //                 <div key={index}>
        //                     <input type="radio" 
        //                             name="rdoPromotion"
        //                             value={item}
        //                             onClick={ e => props.slctPromotion(e) } />{item}
        //                 </div>
        //             );
        //         })
        //     }
        //     </div>
        //     <div className="form-subhead">手續費試算</div>
        //     <div className="form-datas">{props.refWorth}</div>
        //     <div className="form-subhead">預計下次扣款日</div>
        //     <div className="form-datas">{props.blockData[props.index].chargeDate}</div>
        // </div>
    );
}

class SelectData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectFundDetail: {},
            promotions: [],
            refWorth: "",
            bankAccountData: { Bank: "", Account: "" },
            blockAmount: 1,

            blockData: [ blockDataModule ],
            blockComponent: [],
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _changeChargeDate = (e, blockIndex) => {

        let chargeDate = e.target.value;
        let now = new Date();
        let nowDate = now.getDate();
        let nowMonth = now.getMonth();
        let nowYear = now.getFullYear();

        if(chargeDate == "")
            return;
        
        if (chargeDate > nowDate) {
            if (nowMonth == 12) {
                nowMonth = 1;
                nowYear += 1;
            }
            else
                nowMonth += 1;
        }

        /* reference react-addons-update */
        switch (blockIndex) {
            case 0:
                this.setState({ blockData: Object.assign( this.state.blockData, update(this.state.blockData, {0: {chargeDate: {$set: nowYear + "/" + nowMonth + "/" + chargeDate}}}))});
                break;
            case 1:
                this.setState({ blockData: Object.assign( this.state.blockData, update(this.state.blockData, {1: {chargeDate: {$set: nowYear + "/" + nowMonth + "/" + chargeDate}}}))});
                break;
            case 2:
                this.setState({ blockData: Object.assign( this.state.blockData, update(this.state.blockData, {2: {chargeDate: {$set: nowYear + "/" + nowMonth + "/" + chargeDate}}}))});
                break;
        }
    }

    _changeCurrency = e => {
        let elements = document.getElementsByName('rdoCurrency');

        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        e.target.checked = true;

        /* 判斷金額相關的條件 */
        this.state.blockData.map((block) => {
            if ( Number(block.money) > 0 ) {
                console.log('判斷金額相關的條件')
            }
        })

        this.setState({
            selectFundDetail: Object.assign( this.state.selectFundDetail, tempBankAccount ),
            bankAccountData: tempBankAccount,
        });
    }

    _addAddChargeBlock = () => {

        this.state.blockData = [...this.state.blockData, blockDataModule];
        this.setState({ blockAmount: this.state.blockAmount + 1 }, () => {
            this.state.blockComponent.push(<this._ChargeDate index={this.state.blockAmount - 1} promotions={this.state.promotions} refWorth={this.state.refWorth} />)
        });
    }

    _inputAmount = e => {
        let amount = e.target.value;

        this.setState({
            selectFundDetail: Object.assign( this.state.selectFundDetail, { "Amount": amount } ),
        });

    }

    _selectPromotion = e => {
        let elements = document.getElementsByName('rdoPromotion');
        let promotionName = e.target.value.split("手續費率")[0];

        for (let i = 0; i < elements.length; i++) {
            elements[i].checked = false;
        }
        e.target.checked = true;

        this.setState({
            refWorth : tempRefWorth,
            selectFundDetail: Object.assign( this.state.selectFundDetail, { "Promotion": promotionName , "RefFee": tempRefWorth} ),
        });
    }

    _agreeStatement = e => {
        
        
    }

    _nextStep = () => {

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
                    </div>
                    <div className="form-datas">
                        <input type="radio" name="rdoCurrency" onClick={ e => this._changeCurrency(e) } />
                        <span dangerouslySetInnerHTML={{__html: '台幣'}}></span>
                        <input type="radio" name="rdoCurrency" onClick={ e => this._changeCurrency(e) } />
                        <span dangerouslySetInnerHTML={{__html: '外幣'}}></span>
                    </div>
                    <div className="form-subhead">扣款帳號</div>
                    <div className="form-datas">
                        <span>銀行：</span>
                        <span>{this.state.bankAccountData.Bank}</span><br/>
                        <span>帳號：</span>
                        <span>{this.state.bankAccountData.Account}</span>
                    </div>
                </div>
                <div>
                {
                    this.state.blockData.length !== 0
                    ?   this.state.blockData.map((item, index) => {
                            return <chargeDate key={index}
                                    index={index}
                                    promotions={this.state.promotions}
                                    refWorth={this.state.refWorth}
                                    blockData={this.state.blockData}
                                    chgChargeDate={this._changeChargeDate}
                                    slctPromotion={this._selectPromotion} />;
                        })
                    : null
                }
                </div>
                {
                    this.state.blockAmount < 3
                    ?   <button className="add-charge-block" onClick={e => this._addAddChargeBlock()}>
                            <span className="glyphicon glyphicon-plus-sign"></span>
                            "新增扣款日"
                        </button>
                    :   ""
                }
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