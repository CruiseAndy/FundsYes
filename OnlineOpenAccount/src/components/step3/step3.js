/* 
 * Created by kevin in 2018/01/11
 */

/* tools */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* css */
import './step3.scss';

/* component */
import Header from '../header/header';


class Step3 extends Component {

    componentWillMount() {
        this.props.getTWBankList();
        this.props.getForeignBankList();
    }

    render() {
        const {
            twBankList,
            foreignBankList,
            chargeData,
            collectData,
            passportName,
        } = this.props.Step3Data;
        const { testResult } = this.props.Step2Data;

        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step3.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>約定銀行帳戶資料</h2>
                    </div>
                    <div className="Common-RowBox" style={{ width: "90%" }}>
                        <div className="imgBlueExBox">
                            <img src={require("../../images/blue_ex.png")} />
                        </div>
                        <div className="txtBlueExBox">
                            <h4>注意，完整填寫銀行帳戶方能完成開戶，若您暫時無法填寫，可在註冊網路會員後再行補填</h4>
                        </div>
                    </div>
                    <div className="Common-RowBox" style={{ clear: "both" }}>
                        <div>
                            <button
                                className="btnPassStep"
                                onClick={ () => browserHistory.push('/Step4') }
                            >暫時略過此步驟，稍後補填</button>
                        </div>
                    </div>

                    {/* 扣款帳號 */}
                    <div className="Common-RowBox">
                        <p className="sectionTitle">扣款帳號</p>
                    </div>
                    <div className="Common-RowBox">
                        <p className="sectionSubTitle">台幣帳戶</p>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={chargeData.twBank}
                                onChange={ e => this.props.chargeTWBankChanged(e.target.value) }
                            >
                            {
                                Object.entries(twBankList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={chargeData.twBankBranch}
                                onChange={ e => this.props.chargeTWBankBranchChanged(e.target.value) }
                            >
                            {
                                Object.entries(chargeData.twBankBranchList).map((item, index) => {
                                    const [ bankBranchCode, bankBranchName ] = item;

                                    return (
                                        <option key={index} value={bankBranchCode}>{bankBranchName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="帳號"
                            value={chargeData.twBankAccount}
                            onChange={ e => this.props.chargeTWBankAccountChanged(e.target.value) }
                        />
                    </div>
                    <div className="Common-RowBox">
                        <p className="sectionSubTitle">外幣帳戶(可不約定)</p>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={chargeData.foreignBank}
                                onChange={ e => this.props.chargeForeignBankChanged(e.target.value) }
                            >
                            {
                                Object.entries(foreignBankList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={chargeData.foreignBankBranch}
                                onChange={ e => this.props.chargeForeignBankBranchChanged(e.target.value) }
                            >
                            {
                                Object.entries(chargeData.foreignBankBranchList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="帳號"
                            value={chargeData.foreignBankAccount}
                            onChange={ e => this.props.chargeForeignBankAccountChanged(e.target.value) }
                        />
                    </div>

                    {/* 買回/配息帳號 */}
                    <div className="Common-RowBox">
                        <p className="sectionTitle">買回/配息帳號</p>
                    </div>
                    <div className="Common-RowBox">
                        <p className="sectionSubTitle">台幣帳戶</p>
                        <button
                            className="Common-RowTwoButton"
                            onClick={ () => this.props.sameTWChargeData() }
                        >與扣款帳號相同</button>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={collectData.twBank}
                                onChange={ e => this.props.collectTWBankChanged(e.target.value) }
                            >
                            {
                                Object.entries(twBankList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={collectData.twBankBranch}
                                onChange={ e => this.props.collectTWBankBranchChanged(e.target.value) }
                            >
                            {
                                Object.entries(collectData.twBankBranchList).map((item, index) => {
                                    const [ bankBranchCode, bankBranchName ] = item;

                                    return (
                                        <option key={index} value={bankBranchCode}>{bankBranchName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="帳號"
                            value={collectData.twBankAccount}
                            onChange={ e => this.props.collectTWBankAccountChanged(e.target.value) }
                        />
                    </div>
                    <div className="Common-RowBox">
                        <p className="sectionSubTitle">外幣帳戶(可不約定)</p>
                        <button
                            className="Common-RowTwoButton"
                            onClick={ () => this.props.sameForeignChargeData() }
                        >與扣款帳號相同</button>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={collectData.foreignBank}
                                onChange={ e => this.props.collectForeignBankChanged(e.target.value) }
                            >
                            {
                                Object.entries(foreignBankList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-RowOneSelect">
                            <select
                                value={collectData.foreignBankBranch}
                                onChange={ e => this.props.collectForeignBankBranchChanged(e.target.value) }
                            >
                            {
                                Object.entries(collectData.foreignBankBranchList).map((item, index) => {
                                    const [ bankCode, bankName ] = item;

                                    return (
                                        <option key={index} value={bankCode}>{bankName}</option>
                                    );
                                })
                            }
                            </select>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <input
                            type="number"
                            placeholder="帳號"
                            value={collectData.foreignBankAccount}
                            onChange={ e => this.props.collectForeignBankAccountChanged(e.target.value) }
                        />
                    </div>
                    <div className="Common-RowBox">
                        <input
                            placeholder="請填寫與存摺相同之英文姓名"
                            value={passportName}
                            onChange={ e => this.props.passportNameChanged(e.target.value) }
                        />
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-LineDotted"></div>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="btnStep3"
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.history.push(`/Result${testResult}`) }
                        >上一步</button>
                        <button
                            className="btnStep3"
                            onClick={ () => this.props.step3NextStep(this.props) }
                        >下一步</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Step3);