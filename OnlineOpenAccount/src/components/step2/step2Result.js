/* 
 * Created by kevin in 2018/01/10
 */

/* tools */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* css */
import './step2.scss';

/* component */
import Header from '../header/header';


class Step2Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }
    }

    render() {
        const { grade, data } = this.props.match.params;
        const { bAge, bEducation, bHurtProve } = this.props.location.state;
        const investLevel = grade <= 20 && grade >= 0 ? 1 : grade <= 30 && grade > 20 ? 2 : 3;
        const isShowNotice = bAge || bEducation || bHurtProve;

        return (
            <div>
                <Header />
                <div className="container Common-Container">
                    <div className="Common-TitleBox">
                        <img src={require("../../images/step2.png")} />
                    </div>
                    <div className="Common-TitleBox">
                        <h2>風險屬性評估</h2>
                    </div>
                    <div className="Common-RowBox">
                        <div className="Common-LineDotted"></div>
                    </div>
                    <div className="Common-RowBox">
                        <div className={ investLevel === 1 ? "iconTestScore iconTestScore_active" : "iconTestScore" }>
                            <span>1-20</span>
                        </div>
                        <div className={ investLevel === 2 ? "iconTestScore iconTestScore_active" : "iconTestScore" }>
                            <span>21-30</span>
                        </div>
                        <div className={ investLevel === 3 ? "iconTestScore iconTestScore_active" : "iconTestScore" }>
                            <span>31-50</span>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        <table style={{ width: "100%" }}><tbody><tr><td align="center">
                            <div className="Common-IconScoreFeature">
                                <div style={{ height: "90px" }}>
                                    <span>{grade}</span>
                                    <span>分</span>
                                </div>
                                <div><span>適合基金</span></div>
                                <div>
                                    <span>{ investLevel === 1 ? "RR1-RR2" : investLevel === 2 ? "RR1-RR4" : "RR1-RR5" }</span>
                                </div>
                            </div>
                        </td></tr></tbody></table>
                        <div style={{ textAlign: "center" }}>
                            <strong style={{ fontSize: "28px" }}>{ investLevel === 1 ? "保守型" : investLevel === 2 ? "穩健型" : "積極型" }</strong>
                        </div>
                    </div>
                    <div className="Common-RowBox">
                        {
                            investLevel === 1
                            ?   <p>代表您較不願因投資風險造成本金的損失，僅接受投資標的相當小幅度的波動，投資主要目標為追求溫和的利息收益以防禦通膨即可。</p>
                            :   investLevel === 2
                                ?   <p>代表您希望能在風險與收益間取得一個平衡點，理財上除了進攻外，亦兼顧防禦，願意在風險適中情況下，獲得中等的預期報酬率。</p>
                                :   <p>代表您願意追求較高之報酬率，承擔較高的波動風險，亦即能承受所投資之基金淨值較大幅度的波動情形，期望理財目的在追求較高的資本利得空間。</p>
                        }
                    </div>
                    <div className="Common-RowBox">
                        {
                            isShowNotice
                            ?   <div className="actNotice">
                                    <h3>提醒您</h3>
                                    <p>為保障您的投資權益，若您有下列身分時，本公司建議將您的投資風險歸類為
                                        <b>『保守型』投資人(係投資風險承受度為低或中低)</b>
                                    </p>
                                    <ol>
                                        <li>年齡為70歲以上</li>
                                        <li>教育程度為國中畢業（含）以下</li>
                                        <li>領有全民健康保險重大傷病證明</li>
                                    </ol>
                                    <p>如您希望依照自己做出之風險屬性類別進行基金買賣，敬請勾選以下選項：</p>
                                    <p>或是您可以再次進行風險屬性評估測驗，謝謝！</p>
                                    <hr />
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={ e => this.setState({ isChecked: e.target.checked }) }
                                        />
                                        本人係經審慎評估後，選擇依上述風險屬性測驗結果之結果分類，且確認已充分了解基金投資風險，並願意承受相關投資結果。
                                    </label>
                                </div>
                            :   null
                        }
                    </div>
                    <div className="Common-RowBox">
                        <button
                            className="btnTopicStep"
                            style={{ marginRight: "10px" }}
                            onClick={ () => this.props.history.push('/Step2') }
                        >重新測驗
                        </button>
                        <button
                            className="btnTopicStep"
                            onClick={ () => {
                                this.state.isChecked
                                ?   this.props.history.push('/Step3')
                                :   alert("請勾選是否願意承受相關投資結果，謝謝！")
                            } }
                        >下一步</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Step2Result);