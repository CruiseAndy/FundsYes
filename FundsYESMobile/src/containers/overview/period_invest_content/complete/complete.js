/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* css */
import CompleteStyle from './complete.scss';

/* function */
import { StepPrecess } from '../../../../manager/commonjs';

const RemindList =
[
    "若已超過本營業日交易時間 13:30，為下一營業日之交易； 基金淨值日之計算，依基金公司規定為準，內容已發至您的電子郵件信箱。",
    "請您於扣款日當日 14:00 前，將款項存入您的扣款指定帳號，以避免扣款失敗情形發生，交易確認書將於三至五個營業日內寄至您的電子郵件信箱。",
    "手機網頁僅提供下單功能，若須查詢/取消今日委託，或是設定停損停利通知，請使用電腦版網頁，我們將有專人為您服務，感謝您！"
]

class CompleteData extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    _nextStep = () => {
        this.props.setData(1);
    }
    
    render() {
        const { FundName, Currency, Bank, Account, Amount, Promotion, RefWorth, RefFee } = this.props.data;

        return (
            <div className="select-data-main">
                <div className="step-precess">
                    <h3>4. 申購完成</h3>
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
                    <div className="form-subhead">預估申購日期</div>
                    <div className="form-datas">
                        <div>2017/10/27</div>
                    </div>
                    <div className="form-subhead">委託結果</div>
                    <div className="form-datas result">
                        <div>成功</div>
                    </div>
                </div>
                <div className="remind-box">
                    <div>提醒您</div>
                    <ul>
                        {
                            RemindList.map((string, index) => {
                                return (
                                    <li key={index}>{string}</li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="apply-wrap">
                    <button className="btn btnRed" onClick={e => this._nextStep()}>繼續下單</button>
                </div>
            </div>
        );
    }
}

export default CompleteData;