/* 
 * Created by kevin in 2018/01/16
 */

/* tools */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* css */
import './step4.scss';

/* component */
import Header from '../header/header';


class Step4 extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step4.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>資料確認送出</h2>
                    </div>
                    <div className="Common-RowBox">
                        <div className="wrapAllData">
                            {
                                Object.entries(this.props.allData).map((item, index) => {
                                    const [ title, text ] = item;

                                    return (
                                        <p key={index}>{`${title}：${text}`}</p>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="Common-RowBox">
                        <table style={{ width: "100%" }}><tbody><tr><td align="center">
                            <div className="Common-IconScoreFeature">
                                <div style={{ height: "90px" }}>
                                    <span>{this.props.grade}</span>
                                    <span>分</span>
                                </div>
                                <div><span>適合基金</span></div>
                                <div><span>RR1-RR5</span></div>
                            </div>
                        </td></tr></tbody></table>
                        <div style={{ textAlign: "center" }}>
                            <strong style={{ fontSize: "28px" }}>積極型</strong>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <p>代表您願意追求較高之報酬率，承擔較高的波動風險，亦即能承受所投資之基金淨值較大幅度的波動情形，期望理財目的在追求較高的資本利得空間。</p>
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="btnStep4Place"
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.history.push('/Step1') }
                        >重新填寫
                        </button>
                        <button
                            className="btnStep4Place"
                            onClick={ () => this.props.history.push('/Step5') }
                        >下一步</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Step4);