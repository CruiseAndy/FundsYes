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

/* conponent */
import ChargeBlock from '../charge_block/charge_block';

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
    item1:
    {
        show: true,
        chargeDate: "",
        money: "",
        promotion: "",
        worth: ""
    },
    item2:
    {
        show: false,
        chargeDate: "",
        money: "",
        promotion: "",
        worth: ""
    },
    item3:
    {
        show: false,
        chargeDate: "",
        money: "",
        promotion: "",
        worth: ""
    }
}

class SelectData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectFundDetail: {},
            bankAccountData: { Bank: "", Account: "" },
            blockAmount: 1,
            arrBlockData: blockDataModule,
            checkDone: {
                choiceCurrency: false,
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

        /* 判斷金額相關的條件 */
        // this.state.arrBlockData.map((block) => {
        //     if ( Number(block.money) > 0 ) {
        //         console.log('判斷金額相關的條件')
        //     }
        // })

        this.setState({
            checkDone: Object.assign( this.state.checkDone, { choiceCurrency: e.target.checked } ),
            selectFundDetail: Object.assign( this.state.selectFundDetail, tempBankAccount ),
            bankAccountData: tempBankAccount,
        });
    }

    _agreeStatement = e => {

        this.setState({ checkDone: Object.assign( this.state.checkDone, { agreeStatement: e.target.checked } ) });
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

        this.setState({ selectFundDetail: Object.assign( this.state.selectFundDetail, this.state.arrBlockData ) });
        this.props.setData(this.props.stepIndex + 1, this.state.selectFundDetail);
    }

    
    /********** block operate /**********/
    _addAddChargeBlock = () => {

        this.state.arrBlockData.item2.show
        ?   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item3: {show: {$set: true}}}))})
        :   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item2: {show: {$set: true}}}))})

        this.setState({ blockAmount: this.state.blockAmount + 1 });
    }

    _setBlockData = (index, item) => {
        
        index == 1
        ?   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item1: {$set: item}}))})
        :   index == 2
            ?   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item2: {$set: item}}))})
            :   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item3: {$set: item}}))});
    }

    _deleteBlock = index => {

        index == 2
        ?   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item2: {show: {$set: false}}}))})
        :   this.setState({ arrBlockData: Object.assign( this.state.arrBlockData, update(this.state.arrBlockData, {item3: {show: {$set: false}}}))})

        this.setState({ blockAmount: this.state.blockAmount - 1 });
    }
    /********** block operate /**********/
    
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
                {
                    // this.state.arrBlockData.map((block, index) => {
                    //     console.log("Hello");
                    //     console.log(`map : ${index}`);
                    //     console.log(this.state.arrBlockData);
                    //     return <ChargeBlock key={index}
                    //                 blockAmount={index + 1}
                    //                 block={this.state.arrBlockData[index]}
                    //                 setBlockData={this._setBlockData} />
                    // })
                    <ChargeBlock blockNum={1} setBlockData={this._setBlockData} />
                }
                {
                    this.state.arrBlockData.item2.show
                    ?   <ChargeBlock blockNum={2} setBlockData={this._setBlockData} deleteBlock={this._deleteBlock} />
                    :   null
                }
                {
                    this.state.arrBlockData.item3.show
                    ?   <ChargeBlock blockNum={3} setBlockData={this._setBlockData} deleteBlock={this._deleteBlock} />
                    :   null
                }
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