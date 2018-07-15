/* 
 * Created by kevin in 2017/10/29
 */

/* tool */
import React, { Component } from 'react';

/* css */
import LoginBannerStyle from './transacted_currency.scss';

const selectList = (list) => {
    let arrList = [];
    list.map ((item, index) => {
        arrList.push(<option key={index}>{item}</option>);
    });
    return arrList;
}

const txtCurrencyList = [ "新台幣", "美元", "南非幣" ];

class TransCurrency extends Component {
    render() {
        return (
            <div className="trans-currency-main">
                <h1>帳戶總覽</h1>
                <div className="scroll-table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="5">以交易幣別合計</th>
                            </tr>
                            <tr>
                                <td rowSpan="2" className="thead-currency">幣別</td>
                                <td>約當市值</td>
                                <td>損益</td>
                                <td rowSpan="2">
                                    參考報酬率<br />
                                    (已含息)
                                </td>
                            </tr>
                            <tr>
                                <td>投資成本</td>
                                <td>已配息金額</td>
                            </tr>
                        </thead>
                        {
                            this.props.TransCurrencyData.map((item) => {
                                const { Currency, MarketWorth, Cost, ProfitLoss, Reconciliation, RefRatio } = item;

                                return (
                                    <tbody key={Currency}>
                                        <tr>
                                            <td rowSpan="2" className="tbody-currency">{Currency}</td>
                                            <td>{MarketWorth}</td>
                                            <td>
                                                <span className="downs">{ProfitLoss}</span>
                                            </td>
                                            <td rowSpan="2">
                                                <span className="ups">{RefRatio}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{Cost}</td>
                                            <td>{Reconciliation}</td>
                                        </tr>
                                    </tbody>
                                );
                            })
                        }
                        <tfoot><tr>
                            <td className="tfoot-currency">資產總額</td>
                            <td colSpan="2">
                                <span className="assets">{this.props.AssetsData.Total}</span>
                            </td>
                            <td>
                                <select>
                                { selectList(txtCurrencyList) }
                                </select>
                            </td>
                        </tr></tfoot>
                    </table>
                </div>
            </div>
        );
    }
}

export default TransCurrency;