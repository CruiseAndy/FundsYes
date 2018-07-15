/* 
 * Created by kevin in 2017/10/29
 */

 /* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

/* css */
import SelectFundStyle from './select_fund.scss';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

/* data */
import { getFundsCompanys, getFundsNames } from '../../../../actions/action_subscription';


const tempData =
{
    NameList: 
    [
        "B04080 柏瑞環球新興市場當地貨幣債券基金A6HD",
        "B04081 柏瑞大中華股票基金A",
        "B04082 柏瑞亞洲(日本除外)股票基金A",
        "B04083 柏瑞日本小型公司股票基金A3",
        "B04084 柏瑞歐洲小型公司股票基金A1",
        "B04085 柏瑞環球動態資產配置基金A",
        "B04086 柏瑞美國股票基金A"
    ],
    DataList: 
    {
        FundName: "B04080 柏瑞環球新興市場當地貨幣債券基金A6HD",
        Currency: "歐元",
        RefWorth: "19.4831(2017/05/09)"
    }
};
const errMsg = { selectFundName: "請選擇基金公司與名稱" };
const txtSelectFirstItem = "請選擇";

class SelectFund extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            selectFundData: {},
            fundsNameList: [],
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        this.props.getFundsCompanys();
    }

    _selectCompany = (e) => {
        let optValue = e.target.value;

        if (!optValue)
            return;
        
        /* List is return value of API, but action & reducer have problem */
        // this.props.getFundsNames(optValue);
        // if (!this.props.Names) {
        //     return (
        //         <div>Loading...</div>
        //     )
        // }

        /* Temp method */
        this.setState({
            selectFundData: Object.assign( this.state.selectFundData, { "FundCompany": optValue } ),
            fundsNameList: tempData.NameList,
        });
    }

    _selectName = (e) => {
        let optValue = e.target.value;

        /* temp data */
        const { Currency, RefWorth } = tempData.DataList;

        if (!optValue)
            return;
        
        this.setState({
            selectFundData: Object.assign(this.state.selectFundData,
                                    { "FundName": optValue,
                                        "Currency": Currency,
                                        "RefWorth": RefWorth } ),
        });
    }

    _nextStep = () => {
        if ( $("#sltFundName").val() === null || $("#sltFundName").val() === '' ) {
            alert (errMsg.selectFundName);
            return;
        }

        this.props.setData(this.props.stepIndex + 1, this.state.selectFundData);
    }
    
    render() {
        if (!this.props.Companys) {
            return (
                <div>Loading...</div>
            )
        }

        const { CompanyList } = this.props.Companys.data;
        
        return (
            <div className="select-fund-main">
                <h1>單筆申購</h1>
                <div className="step-precess">
                    <h3>1. 選擇交易基金</h3>
                    <div>
                    {
                        StepPrecess(this.props.stepIndex)
                    }
                    </div>
                </div>
                <div className="RSP-content">
                    <div className="RSP-title">
                        <span>基金公司</span>
                    </div>
                    <div className="RSP-dropdown">
                        <select onChange={e => this._selectCompany(e)}>
                        {
                            CompanyList.map((string, index) => {
                                if (index == 0) {
                                    return (
                                        <option key={index} value="">{txtSelectFirstItem}</option>
                                    );
                                } else {
                                    return (
                                        <option key={index} value={string}>{string}</option>
                                    );
                                }
                            })
                        }
                        </select>
                    </div>
                    <div className="RSP-title">
                        <span>基金名稱</span>
                    </div>
                    <div className="RSP-dropdown">
                        <select id="sltFundName" onChange={e => this._selectName(e)}>
                        {
                            this.state.fundsNameList.map((string, index) => {
                                if (index == 0) {
                                    return (
                                        <option key={index} value="">{txtSelectFirstItem}</option>
                                    );
                                } else {
                                    return (
                                        <option key={index} value={string}>{string}</option>
                                    );
                                }
                            })
                        }
                        </select>
                    </div>
                </div>
                <div className="apply-btn">
                    <button className="btn btnRed" onClick={e => this._nextStep()}>確認選取基金</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Companys: state.subscriptionData.companys,
        Names: state.subscriptionData.names,
    };
}

export default connect(mapStateToProps, { getFundsCompanys, getFundsNames } )(SelectFund);