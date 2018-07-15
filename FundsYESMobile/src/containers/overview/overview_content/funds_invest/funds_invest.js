/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import FundsInvestStyle from './funds_invest.scss';

/* image */
import { IMGPATH_BTDOWNBLACK, IMGPATH_BTUPBLACK } from '../../../../manager/image';

const txtArrayDetail = [ "計價幣別", "淨值", "淨值日期", "參考匯率", "總投資成本", "約當市值", "持有單位數", "已配息金額", "損益" ];

class FundsInvest extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isShowDetail: false,
        }
    }

    _isPositiveRatio = (value) => {
        let num = value.replace(/,/i, '');
        num = num.search(/%/i) > 0 ? num.substr(0, value.length - 1) : num;
        return Number(num) >= 0;
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
    
    render() {
        return (
            <div className="funds-invest-main">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">境外基金投資組合損益</th>
                        </tr>
                        <tr>
                            <td>基金代碼<br />基金名稱</td>
                            <td>交易<br />幣別</td>
                            <td>參考報酬率<br />
                                <input type="checkbox" />含息
                            </td>
                            <td>明細</td>
                        </tr>
                    </thead>
                    {
                        this.props.FundsInvestData.map((item, index) => {
                            const { FundID, FundName, Currency, Ratio, Detail } = item;
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <span>{FundID}</span><br />
                                            <span>{FundName}</span>
                                        </td>
                                        <td>
                                            <span>{Currency}</span>
                                        </td>
                                        <td>
                                        {
                                            this._isPositiveRatio(Ratio)
                                            ? <span className="ups">{Ratio}</span>
                                            : <span className="downs">{Ratio}</span>
                                        }
                                        </td>
                                        <td>
                                            <img
                                                key={index}
                                                className="img-up-down"
                                                src={IMGPATH_BTDOWNBLACK}
                                                onClick={e => this._showDetail(e)} />
                                        </td>
                                    </tr>
                                    <tr className="detail-hide">
                                        <td colSpan="4">
                                            <table className="detail-table"><tbody>
                                            {
                                                Object.values(Detail).map((val, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{txtArrayDetail[index]}</td>
                                                            <td>
                                                            {
                                                                index !== Object.keys(Detail).length - 1
                                                                ? <span>{val}</span>
                                                                : this._isPositiveRatio(val)
                                                                    ? <span className="ups">{val}</span>
                                                                    : <span className="downs">{val}</span>
                                                            }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody></table>
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

export default FundsInvest;